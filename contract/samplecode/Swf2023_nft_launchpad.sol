//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft-IERC20Permit.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";


contract HyperPlayNFTLaunchpad is Ownable, IERC1155Receiver, IERC721Receiver {
    using SafeERC20 for IERC20;

    enum TokenType {ERC721, ERC1155}

    struct Token {
        TokenType tokenType;
        uint256 tokenId;
        address tokenAddress;
        uint8 round;
        uint256 amount; // only for ERC1155
        uint256 price; // in wei
        bool isWhitelisted;
        uint256 maxPurchase; // only for ERC1155
        uint256 purchased;
        uint256 startTime;
        uint256 endTime;
    }

    Token[] public tokens;

    struct Purchase {
        bool hasPurchased;
        uint256 quantity;
    }

    mapping(address => mapping(uint8 => mapping(address => Purchase))) public whitelist;

    function getWhitelist(address _contractAddress, uint8 _round, address _walletAddress) external view returns (bool, uint256) {
        Purchase memory purchase = whitelist[_contractAddress][_round][_walletAddress];
        return (purchase.hasPurchased, purchase.hasPurchased ? purchase.quantity : 0);
    }

    function addWhitelist(address _contractAddress, uint8 _round, address _walletAddress, uint256 _quantity) external onlyOwner {
        whitelist[_contractAddress][_round][_walletAddress] = Purchase(true, _quantity);
    }

    function addWhitelistAll(address _contractAddress, uint8[] memory _rounds, address[] memory _walletAddresses, uint256 _quantity) external onlyOwner {
        for (uint i = 0; i < _rounds.length; i++) {
            for (uint j = 0; j < _walletAddresses.length; j++) {
                whitelist[_contractAddress][_rounds[i]][_walletAddresses[j]] = Purchase(true, _quantity);
            }
        }
    }

    function canPurchase(address _contractAddress, uint8 _round, address _walletAddress, uint256 _quantity) internal view returns (bool) {
        return whitelist[_contractAddress][_round][_walletAddress].hasPurchased == false || whitelist[_contractAddress][_round][_walletAddress].quantity >= _quantity;
    }

    event TokenAdded(
        uint256 indexed tokenId,
        address indexed tokenAddress,
        TokenType tokenType,
        uint256 price,
        bool isWhitelisted,
        uint256 maxPurchase,
        uint256 startTime,
        uint256 endTime
    );

    event TokenRemoved(
        uint256 indexed tokenId,
        address indexed tokenAddress,
        TokenType tokenType
    );

    event TokenPurchased(
        uint256 indexed tokenId,
        address indexed tokenAddress,
        TokenType tokenType,
        address buyer,
        uint256 amount,
        uint256 price
    );

    function getBlockTimestamp() public view returns (uint256) {
        return block.timestamp;
    }

    function addTokenERC721(uint256 tokenId, address tokenAddress, uint8 round, uint256 price, bool isWhitelisted, uint256 maxPurchase, uint256 startTime, uint256 endTime) external onlyOwner {
        require(IERC721(tokenAddress).ownerOf(tokenId) == address(this), "Token must be owned by the contract");
        require(!isTokenIndex(tokenAddress, tokenId), "Token already registered.");
        tokens.push(Token({
            tokenType : TokenType.ERC721,
            tokenId : tokenId,
            tokenAddress : tokenAddress,
            round : round,
            amount : 0,
            price : price,
            isWhitelisted : isWhitelisted,
            maxPurchase : maxPurchase,
            purchased : 0,
            startTime : startTime,
            endTime : endTime
        }));
        emit TokenAdded(tokenId, tokenAddress, TokenType.ERC1155, price, isWhitelisted, maxPurchase, startTime, endTime);
    }

    function addTokensERC721(uint256[] memory tokenIds, address tokenAddress, uint8 round, uint256 price, bool isWhitelisted, uint256 maxPurchase, uint256 startTime, uint256 endTime) external onlyOwner {
        for (uint256 i = 0; i < tokenIds.length; i++) {
            require(IERC721(tokenAddress).ownerOf(tokenIds[i]) == address(this), "Token must be owned by the contract");
            require(!isTokenIndex(tokenAddress, tokenIds[i]), "Token already registered.");
            tokens.push(Token({
                tokenType : TokenType.ERC721,
                tokenId : tokenIds[i],
                tokenAddress : tokenAddress,
                amount : 0,
                price : price,
                isWhitelisted : isWhitelisted,
                maxPurchase : maxPurchase,
                purchased : 0,
                startTime : startTime,
                endTime : endTime,
                round : round
            }));
            emit TokenAdded(tokenIds[i], tokenAddress, TokenType.ERC721, price, isWhitelisted, maxPurchase, startTime, endTime);
        }
    }

    function updateTokenERC721(uint256 index, uint8 round, uint256 price, bool isWhitelisted, uint256 maxPurchase, uint256 startTime, uint256 endTime) external onlyOwner {
        require(index < tokens.length, "Index out of range");
        Token storage token = tokens[index];
        require(token.tokenType == TokenType.ERC721, "Token must be of type ERC721");
        token.price = price;
        token.isWhitelisted = isWhitelisted;
        token.maxPurchase = maxPurchase;
        token.startTime = startTime;
        token.endTime = endTime;
        token.round = round;

        emit TokenAdded(token.tokenId, token.tokenAddress, TokenType.ERC721, price, isWhitelisted, maxPurchase, startTime, endTime);
    }

    function addTokenERC1155(uint256 tokenId, address tokenAddress, uint8 round, uint256 amount, uint256 price, bool isWhitelisted, uint256 maxPurchase, uint256 startTime, uint256 endTime) external onlyOwner {
        require(IERC1155(tokenAddress).balanceOf(address(this), tokenId) >= amount, "Token must be deposited to the contract");
        require(!isTokenIndex(tokenAddress, tokenId), "Token already registered.");
        tokens.push(Token({
            tokenType : TokenType.ERC1155,
            tokenId : tokenId,
            tokenAddress : tokenAddress,
            amount : amount,
            price : price,
            isWhitelisted : isWhitelisted,
            maxPurchase : maxPurchase,
            purchased : 0,
            startTime : startTime,
            endTime : endTime,
            round : round
        }));
        emit TokenAdded(tokenId, tokenAddress, TokenType.ERC1155, price, isWhitelisted, maxPurchase, startTime, endTime);
    }

    function addTokensERC1155(uint256[] memory tokenIds, address tokenAddress, uint8 round, uint256 amount, uint256 price, bool isWhitelisted, uint256 maxPurchase, uint256 startTime, uint256 endTime) external onlyOwner {
        for (uint256 i = 0; i < tokenIds.length; i++) {
            require(IERC1155(tokenAddress).balanceOf(address(this), tokenIds[i]) >= amount, "Token must be deposited to the contract");
            require(!isTokenIndex(tokenAddress, tokenIds[i]), "Token already registered.");
            tokens.push(Token({
                tokenType : TokenType.ERC1155,
                tokenId : tokenIds[i],
                tokenAddress : tokenAddress,
                amount : amount,
                price : price,
                isWhitelisted : isWhitelisted,
                maxPurchase : maxPurchase,
                purchased : 0,
                startTime : startTime,
                endTime : endTime,
                round : round
            }));
            emit TokenAdded(tokenIds[i], tokenAddress, TokenType.ERC1155, price, isWhitelisted, maxPurchase, startTime, endTime);
        }
    }

    function updateTokenERC1155(uint256 index, uint8 round, uint256 price, bool isWhitelisted, uint256 maxPurchase, uint256 startTime, uint256 endTime) external onlyOwner {
        require(index < tokens.length, "Index out of range");
        Token storage token = tokens[index];
        require(token.tokenType == TokenType.ERC1155, "Token must be of type ERC1155");
        token.price = price;
        token.isWhitelisted = isWhitelisted;
        token.maxPurchase = maxPurchase;
        token.startTime = startTime;
        token.endTime = endTime;
        token.round = round;

        emit TokenAdded(token.tokenId, token.tokenAddress, TokenType.ERC1155, price, isWhitelisted, maxPurchase, startTime, endTime);
    }

    function getTokenInfo(address tokenAddress, uint256 tokenId, uint8 round) external view returns (uint256, TokenType, uint256, uint256, uint256, bool, uint256, uint256, uint256, bool) {
        uint256 index = getTokenIndex(tokenAddress, tokenId, round);
        Token storage token = tokens[index];
        if (token.tokenType == TokenType.ERC721) {
            return (index, TokenType.ERC721, token.price, token.purchased, token.maxPurchase, token.isWhitelisted, token.startTime, token.endTime, 0, token.purchased > 0);
        }
        if (token.tokenType == TokenType.ERC1155) {
            return (index, TokenType.ERC1155, token.price, token.purchased, token.maxPurchase, token.isWhitelisted, token.startTime, token.endTime, token.amount, token.purchased > 0);
        }
        revert("Token not found");
    }

    function isTokenIndex(address tokenAddress, uint256 tokenId) public view returns (bool) {
        for (uint i = 0; i < tokens.length; i++) {
            Token storage token = tokens[i];
            if (token.tokenAddress == tokenAddress && token.tokenId == tokenId) {
                return true;
            }
        }
        return false;
    }

    function getTokenIndex(address tokenAddress, uint256 tokenId, uint8 round) internal view returns (uint256) {
        for (uint256 i = 0; i < tokens.length; i++) {
            Token storage token = tokens[i];
            if (token.tokenAddress == tokenAddress && token.tokenId == tokenId && token.round == round) {
                return i;
            }
        }
        revert("Token not found");
    }

    function getTokenIndex(address tokenAddress, uint256 tokenId) internal view returns (uint256) {
        for (uint256 i = 0; i < tokens.length; i++) {
            Token storage token = tokens[i];
            if (token.tokenAddress == tokenAddress && token.tokenId == tokenId) {
                return i;
            }
        }
        revert("Token not found");
    }

    function getTokenIds(address tokenAddress, uint8 round) external view returns (uint256[] memory, bool[] memory) {
        uint256 count;
        for (uint256 i = 0; i < tokens.length; i++) {
            Token storage token = tokens[i];
            if (token.tokenAddress == tokenAddress && token.round == round) {
                count++;
            }
        }
        uint256[] memory tokenIds = new uint256[](count);
        bool[] memory purchased = new bool[](count);
        uint256 index;
        for (uint256 i = 0; i < tokens.length; i++) {
            Token storage token = tokens[i];
            if (token.tokenAddress == tokenAddress && token.round == round) {
                tokenIds[index] = token.tokenId;
                purchased[index] = (token.purchased > 0);
                index++;
            }
        }
        return (tokenIds, purchased);
    }

    function removeToken(uint256 index) external onlyOwner {
        require(index < tokens.length, "Index out of range");
        Token storage token = tokens[index];
        require(token.purchased == 0, "Token has been purchased");
        if (token.tokenType == TokenType.ERC721) {
            IERC721(token.tokenAddress).transferFrom(address(this), owner(), token.tokenId);
        } else {
            IERC1155(token.tokenAddress).safeTransferFrom(address(this), owner(), token.tokenId, token.amount, "");
        }

        emit TokenRemoved(token.tokenId, token.tokenAddress, token.tokenType);

        // Remove token from array by swapping with the last token and then reducing the length
        tokens[index] = tokens[tokens.length - 1];
        tokens.pop();
    }

    function buyToken(uint256 index, uint256 amount) external payable {
        require(index < tokens.length, "Index out of range");
        Token storage token = tokens[index];
        require(token.tokenType == TokenType.ERC1155 || amount == 1, "Can only purchase one token for ERC721");

        if (token.isWhitelisted) {
            require(canPurchase(token.tokenAddress, token.round, msg.sender, amount), "Cannot purchase");
        }

        require(token.purchased + amount <= token.maxPurchase, "Exceeds maximum purchase amount");
        require(block.timestamp >= token.startTime, "Sale has not started yet");
        require(block.timestamp < token.endTime, "Sale has ended");
        require(msg.value == token.price * amount, "Incorrect value sent");

        token.purchased += amount;

        if (token.tokenType == TokenType.ERC721) {
            IERC721(token.tokenAddress).transferFrom(address(this), msg.sender, token.tokenId);
        } else {
            IERC1155(token.tokenAddress).safeTransferFrom(address(this), msg.sender, token.tokenId, amount, "");
        }

        if (token.isWhitelisted) {
            Purchase storage purchase = whitelist[token.tokenAddress][token.round][msg.sender];
            require(purchase.quantity >= amount, "Cannot purchase more than the allowed quantity");
            purchase.hasPurchased = true;
            purchase.quantity -= amount;
        }

        emit TokenPurchased(token.tokenId, token.tokenAddress, token.tokenType, msg.sender, amount, token.price);
    }

    function buyToken(address tokenAddress, uint256 tokenId, uint256 amount) external payable {
        uint256 index = getTokenIndex(tokenAddress, tokenId);
        Token storage token = tokens[index];
        require(token.tokenType == TokenType.ERC1155 || amount == 1, "Can only purchase one token for ERC721");

        if (token.isWhitelisted) {
            require(canPurchase(token.tokenAddress, token.round, msg.sender, amount), "Cannot purchase");
        }

        require(token.purchased + amount <= token.maxPurchase, "Exceeds maximum purchase amount");
        require(block.timestamp >= token.startTime, "Sale has not started yet");
        require(block.timestamp < token.endTime, "Sale has ended");
        require(msg.value == token.price * amount, "Incorrect value sent");

        token.purchased += amount;

        if (token.tokenType == TokenType.ERC721) {
            IERC721(token.tokenAddress).transferFrom(address(this), msg.sender, token.tokenId);
        } else {
            IERC1155(token.tokenAddress).safeTransferFrom(address(this), msg.sender, token.tokenId, amount, "");
        }

        if (token.isWhitelisted) {
            Purchase storage purchase = whitelist[token.tokenAddress][token.round][msg.sender];
            require(purchase.quantity >= amount, "Cannot purchase more than the allowed quantity");
            purchase.hasPurchased = true;
            purchase.quantity -= amount;
        }

        emit TokenPurchased(token.tokenId, token.tokenAddress, token.tokenType, msg.sender, amount, token.price);
    }

    function buyTokens(address tokenAddress, uint256[] memory tokenIds, uint256[] memory amounts) external payable {
        uint256 totalPrice;
        for (uint256 i = 0; i < tokenIds.length; i++) {
            uint256 index = getTokenIndex(tokenAddress, tokenIds[i]);
            Token storage token = tokens[index];
            require(token.tokenType == TokenType.ERC1155 || amounts[i] == 1, "Can only purchase one token for ERC721");

            if (token.isWhitelisted) {
                require(canPurchase(token.tokenAddress, token.round, msg.sender, amounts[i]), "Cannot purchase");
            }

            require(token.purchased + amounts[i] <= token.maxPurchase, "Exceeds maximum purchase amount");
            require(block.timestamp >= token.startTime, "Sale has not started yet");
            require(block.timestamp < token.endTime, "Sale has ended");

            totalPrice += token.price * amounts[i];
            token.purchased += amounts[i];

            if (token.tokenType == TokenType.ERC721) {
                IERC721(token.tokenAddress).transferFrom(address(this), msg.sender, token.tokenId);
            } else {
                IERC1155(token.tokenAddress).safeTransferFrom(address(this), msg.sender, token.tokenId, amounts[i], "");
            }

            if (token.isWhitelisted) {
                Purchase storage purchase = whitelist[token.tokenAddress][token.round][msg.sender];
                require(purchase.quantity >= amounts[i], "Cannot purchase more than the allowed quantity");
                purchase.hasPurchased = true;
                purchase.quantity -= amounts[i];
            }

            emit TokenPurchased(token.tokenId, token.tokenAddress, token.tokenType, msg.sender, amounts[i], token.price);
        }
        require(msg.value == totalPrice, "Incorrect value sent");
    }

    function getRandomTokenId(address tokenAddress, uint8 round) public view returns (uint256) {
        uint256[] memory availableTokenIds = new uint256[](tokens.length);
        uint256 numAvailableTokens = 0;
        for (uint256 i = 0; i < tokens.length; i++) {
            Token storage token = tokens[i];
            if (token.tokenAddress == tokenAddress && token.round == round && token.purchased == 0) {
                availableTokenIds[numAvailableTokens] = token.tokenId;
                numAvailableTokens++;
            }
        }
        require(numAvailableTokens > 0, "No available tokens to purchase");
        uint256 randomIndex = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % numAvailableTokens;
        return availableTokenIds[randomIndex];
    }

    function buyRandomTokens(address tokenAddress, uint8 round, uint8 qty, uint256[] memory amounts) external payable {
        uint256 totalPrice;
        for (uint256 i = 0; i < qty; i++) {
            uint256 index = getTokenIndex(tokenAddress, getRandomTokenId(tokenAddress, round));
            Token storage token = tokens[index];
            require(token.tokenType == TokenType.ERC1155 || amounts[i] == 1, "Can only purchase one token for ERC721");

            if (token.isWhitelisted) {
                require(canPurchase(token.tokenAddress, token.round, msg.sender, amounts[i]), "Cannot purchase");
            }

            require(token.purchased + amounts[i] <= token.maxPurchase, "Exceeds maximum purchase amount");
            require(block.timestamp >= token.startTime, "Sale has not started yet");
            require(block.timestamp < token.endTime, "Sale has ended");

            totalPrice += token.price * amounts[i];
            token.purchased += amounts[i];

            if (token.tokenType == TokenType.ERC721) {
                IERC721(token.tokenAddress).transferFrom(address(this), msg.sender, token.tokenId);
            } else {
                IERC1155(token.tokenAddress).safeTransferFrom(address(this), msg.sender, token.tokenId, amounts[i], "");
            }

            if (token.isWhitelisted) {
                Purchase storage purchase = whitelist[token.tokenAddress][token.round][msg.sender];
                require(purchase.quantity >= amounts[i], "Cannot purchase more than the allowed quantity");
                purchase.hasPurchased = true;
                purchase.quantity -= amounts[i];
            }

            emit TokenPurchased(token.tokenId, token.tokenAddress, token.tokenType, msg.sender, amounts[i], token.price);
        }
        require(msg.value >= totalPrice, "Incorrect value sent");
    }

    function transferToken(address tokenAddress, uint256[] memory tokenIds, uint256[] memory amounts, address to) external onlyOwner {
        for (uint256 i = 0; i < tokenIds.length; i++) {
            uint256 index = getTokenIndex(tokenAddress, tokenIds[i]);
            Token storage token = tokens[index];
            require(token.purchased == 0, "Token has been purchased");
            if (token.tokenType == TokenType.ERC721) {
                IERC721(token.tokenAddress).transferFrom(address(this), to, token.tokenId);
            } else {
                IERC1155(token.tokenAddress).safeTransferFrom(address(this), to, token.tokenId, token.amount, "");
            }

            emit TokenRemoved(token.tokenId, token.tokenAddress, token.tokenType);

            // Remove token from array by swapping with the last token and then reducing the length
            tokens[index] = tokens[tokens.length - 1];
            tokens.pop();
        }
    }

    function withdrawFunds() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    function getTokenCount() external view returns (uint256) {
        return tokens.length;
    }

    function getTotalTokenCount(address tokenAddress) external view returns (uint256) {
        uint256 count;
        for (uint256 i = 0; i < tokens.length; i++) {
            Token storage token = tokens[i];
            if (token.tokenAddress == tokenAddress) {
                count++;
            }
        }
        return count;
    }

    function onERC1155Received(
        address, // operator
        address, // from
        uint256, // id
        uint256, // value
        bytes calldata // data
    ) external pure override returns (bytes4) {
        return this.onERC1155Received.selector;
    }

    function onERC1155BatchReceived(
        address, // operator
        address, // from
        uint256[] calldata, // ids
        uint256[] calldata, // values
        bytes calldata // data
    ) external pure override returns (bytes4) {
        return this.onERC1155BatchReceived.selector;
    }

    function onERC721Received(
        address,
        address,
        uint256,
        bytes calldata
    ) external pure override returns (bytes4) {
        return this.onERC721Received.selector;
    }

    function supportsInterface(bytes4 interfaceId) external view override returns (bool) {
        return interfaceId == type(IERC1155Receiver).interfaceId || interfaceId == type(IERC721Receiver).interfaceId;
    }
}
