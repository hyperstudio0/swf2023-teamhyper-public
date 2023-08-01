// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/AccessControl.sol";

// 보이스 피싱 방지를 위한 스마트 컨트랙트
contract AntiPhishingSwf2023 is AccessControl {

    // 블랙리스트 사유 enum
    enum BlackListReason {
        PhishingAttempt,  // 피싱 시도
        ScamReport,  // 사기 행위
        SuspiciousActivity,  // 의심스러운 활동
        FraudReport,  // 부정 행위
        IdentityTheft,  // 신분 도용
        IllegalTransaction,  // 불법 거래
        MoneyLaundering,  // 돈세탁
        BlackMarketActivity,  // 불법 시장 활동
        HighRisk,  // 높은 위험
        Other  // 기타
    }

    // 블랙리스트에 저장될 정보
    struct BlackListIdentity {
        bytes32 idHash;  // 전화번호, 지갑주소, 대포통장 정보의 해시값
        BlackListReason reason;  // 블랙리스트 사유
        uint identityType;  // 신분증 유형 (1~100까지의 정수)
    }

    // 화이트리스트에 저장될 신분증 정보
    struct WhiteListIdentity {
        bytes32 hash;  // 신분증 해시
        string did;  // 디지털 ID (DID)
    }

    // 화이트리스트와 블랙리스트 매핑
    uint public whiteListCount;
    uint public blackListCount;
    mapping(bytes32 => WhiteListIdentity) whiteListIdentities;
    mapping(bytes32 => BlackListIdentity) blackListIdentities;

    bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");
    bytes32 public constant WHITELIST_OPERATOR_ROLE = keccak256("WHITELIST_OPERATOR_ROLE");
    bytes32 public constant BLACKLIST_OPERATOR_ROLE = keccak256("BLACKLIST_OPERATOR_ROLE");

    // 이벤트 정의
    event WhitelistIdentityAdded(bytes32 hash, string did);
    event BlacklistIdentityAdded(bytes32 hash, BlackListReason reason, uint identityType);
    event WhitelistIdentityDeleted(bytes32 hash);
    event BlacklistIdentityDeleted(bytes32 hash);

    constructor() {
        _setupRole(OWNER_ROLE, msg.sender);  // 컨트랙트 배포자를 소유자로 설정
    }

    // 소유자만 수행 가능한 액션을 제한하는 modifier
    modifier onlyOwner {
        require(hasRole(OWNER_ROLE, msg.sender), "Only owner can perform this action");
        _;
    }

    // 화이트리스트 역할을 가진 사람 또는 오너만이 수행 가능한 액션을 제한하는 modifier
    modifier onlyWhiteListOperatorOrOwner {
        require(hasRole(WHITELIST_OPERATOR_ROLE, msg.sender) || hasRole(OWNER_ROLE, msg.sender), "Only whitelist operator or owner can perform this action");
        _;
    }

    // 블랙리스트 역할을 가진 사람 또는 오너만이 수행 가능한 액션을 제한하는 modifier
    modifier onlyBlackListOperatorOrOwner {
        require(hasRole(BLACKLIST_OPERATOR_ROLE, msg.sender) || hasRole(OWNER_ROLE, msg.sender), "Only blacklist operator or owner can perform this action");
        _;
    }

    // 화이트리스트에 신분증 정보를 추가하는 함수
    function addToWhiteList(string memory _did) public onlyWhiteListOperatorOrOwner {
        bytes32 hash = keccak256(abi.encodePacked(_did));
        // 이미 존재하는지 체크
        require(whiteListIdentities[hash].hash != hash, "This DID is already in the whitelist");

        WhiteListIdentity memory newIdentity = WhiteListIdentity(hash, _did);
        whiteListIdentities[hash] = newIdentity;

        whiteListCount++;

        emit WhitelistIdentityAdded(hash, _did);
    }


    // 블랙리스트에 정보를 추가하는 함수
    function addToBlackList(string memory _id, BlackListReason _reason, uint _identityType) public onlyBlackListOperatorOrOwner {
        bytes32 idHash = keccak256(abi.encodePacked(_id));

        // 이미 존재하는지 체크
        require(blackListIdentities[idHash].idHash != idHash, "This ID is already in the blacklist");

        BlackListIdentity memory newIdentity = BlackListIdentity(idHash, _reason, _identityType);
        blackListIdentities[idHash] = newIdentity;
        blackListCount++;

        emit BlacklistIdentityAdded(idHash, _reason, _identityType);
    }

    // DID가 화이트리스트에 있는지 확인하는 함수
    function isWhiteListed(string memory _did) public view returns (bool) {
        bytes32 hash = keccak256(abi.encodePacked(_did));
        return whiteListIdentities[hash].hash == hash;
    }

    // ID가 블랙리스트에 있는지 확인하고 사유를 반환하는 함수
    function isBlackListed(string memory _id) public view returns (bool, BlackListReason, uint) {
        bytes32 hash = keccak256(abi.encodePacked(_id));
        return (blackListIdentities[hash].idHash == hash, blackListIdentities[hash].reason, blackListIdentities[hash].identityType);
    }

    // 화이트리스트에서 신분증 정보를 삭제하는 함수
    function removeFromWhiteList(string memory _did) public onlyOwner {
        bytes32 hash = keccak256(abi.encodePacked(_did));

        // 존재하는지 체크
        require(whiteListIdentities[hash].hash == hash, "This DID does not exist in the whitelist");

        delete whiteListIdentities[hash];
        whiteListCount--;

        emit WhitelistIdentityDeleted(hash);
    }

    // 블랙리스트에서 정보를 삭제하는 함수
    function removeFromBlackList(string memory _id) public onlyOwner {
        bytes32 idHash = keccak256(abi.encodePacked(_id));

        // 존재하는지 체크
        require(blackListIdentities[idHash].idHash == idHash, "This ID does not exist in the blacklist");
        delete blackListIdentities[idHash];
        blackListCount--;

        emit BlacklistIdentityDeleted(idHash);
    }

}
