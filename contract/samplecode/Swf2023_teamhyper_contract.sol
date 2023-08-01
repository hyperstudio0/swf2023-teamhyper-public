//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./hyperplay/MintRoundManager.sol";

/**
  @title Creating PixelBattle_ERC721
  @dev Contract for creating nfts using ERC721. Unlike ERC20, ERC721 lacks a decimals field,
       since each token is distinct and cannot be partitioned
*/
contract Swf2023_teamhyper_contract is ERC721URIStorage, Ownable, Pausable {

  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;
  using Strings for uint256;

  string private _baseURI = "https://";
  string internal baseExtension = ".json";
  mapping (uint256 => string) private _tokenURIs;
  mapping(uint256 => uint256) private _totalSupply;

  uint public _r1 = 1;
  uint public _r2 = 2;
  uint public _r3 = 3;
  uint public _r4 = 4;
  uint public _r5 = 5;
  uint public _r6 = 6;

  MintRoundManager _round1Manager = new MintRoundManager();
  MintRoundManager _round2Manager = new MintRoundManager();
  MintRoundManager _round3Manager = new MintRoundManager();
  MintRoundManager _round4Manager = new MintRoundManager();
  MintRoundManager _round5Manager = new MintRoundManager();
  MintRoundManager _round6Manager = new MintRoundManager();

  constructor() ERC721("PixelBattle_Test_ERC721", "PBT") {}

  function getRndMngr(uint round)
  public
  view
  returns (MintRoundManager){
    MintRoundManager _rm;
    if (round == _r1) {
      _rm = _round1Manager;
    } else if (round == _r2) {
      _rm = _round2Manager;
    } else if (round == _r3) {
      _rm = _round3Manager;
    } else if (round == _r4) {
      _rm = _round4Manager;
    } else if (round == _r5) {
      _rm = _round5Manager;
    } else if (round == _r6) {
      _rm = _round6Manager;
    }
    return _rm;
  }

  // ======================== MINT by payable ========================
//  function mint(uint round, uint256 qty)
//  public
//  payable
//  {
//    basicCheck(qty);
//    MintRoundManager _roundManager = getRndMngr(round);
//
//    bool isWLMode = _roundManager.isWLMode();
//    bool isPackMode = _roundManager.isPackMode();
//    uint[] memory metaData = _roundManager.getMetaData();
//    uint maxMintAmountPerWallet = metaData[0];
//    uint maxMintAmountPerTx = metaData[1];
//    uint256 mintPrice = metaData[2];
//    uint amountPack = metaData[4];
//    uint totalSupply = metaData[5];
//    uint256 mintIndexForSale = _roundManager.getMintedAmountInfo();
//    uint startBlockNumber = _roundManager.getMintingStartBlock();
//    uint endBlockNumber = _roundManager.getMintingEndBlock();
//
//    if (isPackMode) {
//      require(qty != amountPack, "Mint Quantity per tx exceed");
//    } else {
//      require(qty <= maxMintAmountPerTx, "Mint Quantity per tx exceed");
//    }
//
//    require(mintIndexForSale + qty <= totalSupply, "Total mint Quantity exceed");
//    require(getCurrentBlock() >= startBlockNumber && getCurrentBlock() < endBlockNumber, "Start time has not reached yet");
//    require(msg.value >= SafeMath.mul(mintPrice, qty), "Not enough Matic");
//
//    if (isWLMode) {
//      require(qty <= _roundManager.getAllowList(msg.sender), "Mint Quantity exceed");
//      require(_roundManager.hasAddress(msg.sender), "Not White List or invalid Quantity");
//    }
//
//    mintPack(msg.sender, qty);
//
//    _roundManager.minted(qty);
//    if (isWLMode) {
//      _roundManager.decreaseAmount(msg.sender, qty);
//    }
//  }
//
//  // ======================== MINT/BURN by Owner ========================
//  function mint(address recepient)
//  public
//  onlyOwner
//  whenNotPaused
//  returns (uint)
//  {
//
//    uint256 amount = 1;
//    _tokenIds.increment();
//    uint256 newItemId = _tokenIds.current();
//    _mint(recepient, newItemId, amount, "");
//
//    string memory tokenURI = string(abi.encodePacked(_baseURI, String.uint2str(newItemId), baseExtension));
//    _tokenURIs[newItemId] = tokenURI;
//    _totalSupply[newItemId] = amount;
//
//    return newItemId;
//  }
//
//  function mintPack(address recepient, uint256 qty)
//  public
//  onlyOwner
//  whenNotPaused
//  returns (uint256[] memory)
//  {
//    basicCheck(qty);
//
//    uint256 amount = 1;
//    uint256[] memory ids = new uint256[](qty);
//    uint256[] memory amounts = new uint256[](qty);
//
//    for (uint256 i = 0; i < qty; i++) {
//
//      _tokenIds.increment();
//      uint256 newItemId = _tokenIds.current();
//
//      ids[i] = newItemId;
//      amounts[i] = 1;
//
//      string memory tokenURI = string(abi.encodePacked(_baseURI, String.uint2str(newItemId), baseExtension));
//      _tokenURIs[newItemId] = tokenURI;
//      _totalSupply[newItemId] = amount;
//    }
//    _mintBatch(recepient, ids, amounts, "");
//
//    return ids;
//  }
//
//  // ======================== BURN ========================
//  function burn(address from, uint256 tokenId)
//  public
//  onlyOwner
//  {
//    _burn(from, tokenId, 1);
//  }
//
//  function burnBatch(address from, uint256[] memory ids)
//  public
//  onlyOwner
//  {
//    uint256[] memory amounts = new uint256[](ids.length);
//
//    for (uint256 i = 0; i < ids.length; i++) {
//      amounts[i] = 1;
//    }
//    _burnBatch(from, ids, amounts);
//  }

  // ======================== STATUS ========================
  function currentBlockTimeStamp() public view returns (uint) {
    return block.timestamp;
  }

  function getCurrentBlock() public view returns (uint) {
    return block.number;
  }

  // msg.data (bytes): complete calldata
  function getMsgData() public onlyOwner view returns (bytes4) {
    return msg.sig;
  }
  // msg.sig (bytes4): first four bytes of the calldata (i.e. function identifier)
  function getMsgSig() public onlyOwner view returns (bytes4) {
    return msg.sig;
  }
  // msg.gas (uint): remaining gas - deprecated in version 0.4.21 and to be replaced by gasleft()
  function getGasLeft() public onlyOwner view returns (uint) {
    return gasleft();
  }
  // msg.value (uint): number of wei sent with the message
  //    function getMsgValue() public payable returns (uint) {
  //        uint _test = msg.value;
  //        return _test;
  //    }
  // msg.sender (address): sender of the message (current call)
  function getMsgSender() public onlyOwner view returns (address) {
    return msg.sender;
  }

  function pause() public onlyOwner {
    _pause();
  }

  function unpause() public onlyOwner {
    _unpause();
  }

  function basicCheck(uint256 qty)
  internal
  view
  {
    require(!paused(), "Contract is not active");
    require(qty > 0, "Invalid Quantity");
    require(tx.origin == msg.sender);
    //        require(!isContract(msg.sender), "Contract is trying to buy it");
  }

  function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
  internal
  override
  {
    super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
  }

  // ======================== FUNCTIONS ========================
  // Get Current Token ID (Test Completed:221024)
  function getCurrentId() public onlyOwner view returns (uint) {
    return _tokenIds.current();
  }

  // Set Token URI by Global (Test Completed:221024)
  function setURI(string memory newUri) public onlyOwner {
    _baseURI = newUri;
  }

  // View Token URI by Global (Test Completed:221024)
  function getURL() public onlyOwner view returns (string memory) {
    return _baseURI();
  }

  // View Json URI by TokenID (Test Completed:221024)
  function _baseURI() internal pure override returns (string memory) {
    return _baseURI;
  }

  function tokenURI(uint256 tokenId)
  public
  view
  override(ERC721, ERC721URIStorage)
  returns (string memory)
  {
    return super.tokenURI(tokenId);
  }

  function changeTokenURI(uint256 tokenId, string memory tokenURI)
  public
  onlyOwner {
    require(exists(tokenId), "URI set of nonexistent token");
    _tokenURIs[tokenId] = tokenURI;
    emit URI(uri(tokenId), tokenId);
  }

  function totalSupply(uint256 id) public view returns (uint256) {
    return _totalSupply[id];
  }

  function exists(uint256 id) public view returns (bool) {
    return PixelBattle_ERC721.totalSupply(id) > 0;
  }

  function getMintedAmountInfo(uint round)
  public
  view
  returns (uint256)
  {
    MintRoundManager _roundManager = getRndMngr(round);
    return _roundManager.getMintedAmountInfo();
  }

  function setMintedAmountInfo(uint round, uint256 mintIndexForSale) public onlyOwner {
    MintRoundManager _roundManager = getRndMngr(round);
    _roundManager.setMintedAmountInfo(mintIndexForSale);
  }

  // == Info  (Test Completed:221024)
  function getInfo(uint round)
  public
  view
  returns (string[] memory)
  {
    MintRoundManager _roundManager = getRndMngr(round);
    return _roundManager.getInfo();
  }

  function setInfo(uint round,
    string memory name,
    string memory image)
  public onlyOwner
  {
    MintRoundManager _roundManager = getRndMngr(round);
    _roundManager.setInfo(name, image);
  }

  // == MetaData  (Test Completed:221024)
  function getMetaData(uint round)
  public
  view
  returns (uint[] memory)
  {
    MintRoundManager _roundManager = getRndMngr(round);
    return _roundManager.getMetaData();
  }

  function setMetaData(uint round,
    uint256 maxMintAmountPerWallet,
    uint256 maxMintAmountPerTx,
    uint256 mintPrice,
    uint256 originPrice,
    uint256 amountPack,
    uint256 totalSupply)
  public onlyOwner
  {
    MintRoundManager _roundManager = getRndMngr(round);
    _roundManager.setMetaData(maxMintAmountPerWallet, maxMintAmountPerTx, mintPrice, originPrice, amountPack, totalSupply);
  }

  // == Block Number  (Test Completed:221024)
  function getBlockNumber(uint round)
  public
  view
  returns (uint[] memory)
  {
    uint[] memory _blockNumber = new uint[](2);
    MintRoundManager _roundManager = getRndMngr(round);
    _blockNumber[0] = _roundManager.getMintingStartBlock();
    _blockNumber[1] = _roundManager.getMintingEndBlock();
    return (_blockNumber);
  }

  function setBlockNumber(uint round, uint startBlockNumber, uint endBlockNumber)
  public
  onlyOwner
  {
    MintRoundManager _roundManager = getRndMngr(round);
    _roundManager.setMintingStartBlock(startBlockNumber);
    _roundManager.setMintingEndBlock(endBlockNumber);
  }

  // == Pause  (Test Completed:221024)
  function isPause(uint round)
  public
  view
  returns (bool)
  {
    MintRoundManager _roundManager = getRndMngr(round);
    return _roundManager.isPause();
  }

  function setPause(uint round, bool isPause)
  public onlyOwner
  {
    MintRoundManager _roundManager = getRndMngr(round);
    _roundManager.setPause(isPause);
  }

  // == WLMode  (Test Completed:221024)
  function isWLMode(uint round)
  public
  view
  returns (bool)
  {
    MintRoundManager _roundManager = getRndMngr(round);
    return _roundManager.isWLMode();
  }

  function setWLMode(uint round, bool isWLMode)
  public onlyOwner
  {
    MintRoundManager _roundManager = getRndMngr(round);
    _roundManager.setWLMode(isWLMode);
  }

  function setWLAllowList(uint round, address[] calldata addresses)
  public onlyOwner
  {
    MintRoundManager _roundManager = getRndMngr(round);
    _roundManager.setAllowList(addresses);
  }

  function deleteWLAllowList(uint round, address[] calldata addresses)
  public onlyOwner
  {
    MintRoundManager _roundManager = getRndMngr(round);
    _roundManager.deleteAllowList(addresses);
  }

  function hasAddress(uint round, address _address)
  public
  view
  returns (bool)
  {
    MintRoundManager _roundManager = getRndMngr(round);
    return _roundManager.hasAddress(_address);
  }

  // == PackMode  (Test Completed:221024)
  function isPackMode(uint round)
  public
  view
  returns (bool)
  {
    MintRoundManager _roundManager = getRndMngr(round);
    return _roundManager.isPackMode();
  }

  function setPackMode(uint round, bool isWLMode)
  public onlyOwner
  {
    MintRoundManager _roundManager = getRndMngr(round);
    _roundManager.setPackMode(isWLMode);
  }

  // == resetIndexForSale  (Test Completed:221024)
  function resetIndexForSale(uint round) public onlyOwner {
    MintRoundManager _roundManager = getRndMngr(round);
    _roundManager.resetIndexForSale();
  }

  function isSoldOut(uint round) public view returns (bool) {
    MintRoundManager _roundManager = getRndMngr(round);
    return _roundManager.isSoldOut();
  }

}
