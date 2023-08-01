/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface AntiPhishingSwf2023Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "BLACKLIST_OPERATOR_ROLE"
      | "DEFAULT_ADMIN_ROLE"
      | "OWNER_ROLE"
      | "WHITELIST_OPERATOR_ROLE"
      | "addToBlackList"
      | "addToWhiteList"
      | "blackListCount"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "isBlackListed"
      | "isWhiteListed"
      | "removeFromBlackList"
      | "removeFromWhiteList"
      | "renounceRole"
      | "revokeRole"
      | "supportsInterface"
      | "whiteListCount"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "BlacklistIdentityAdded"
      | "BlacklistIdentityDeleted"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
      | "WhitelistIdentityAdded"
      | "WhitelistIdentityDeleted"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "BLACKLIST_OPERATOR_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "OWNER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "WHITELIST_OPERATOR_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addToBlackList",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addToWhiteList",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "blackListCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isBlackListed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isWhiteListed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeFromBlackList",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeFromWhiteList",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "whiteListCount",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "BLACKLIST_OPERATOR_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "OWNER_ROLE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "WHITELIST_OPERATOR_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addToBlackList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addToWhiteList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "blackListCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isBlackListed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isWhiteListed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeFromBlackList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeFromWhiteList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whiteListCount",
    data: BytesLike
  ): Result;
}

export namespace BlacklistIdentityAddedEvent {
  export type InputTuple = [
    hash: BytesLike,
    reason: BigNumberish,
    identityType: BigNumberish
  ];
  export type OutputTuple = [
    hash: string,
    reason: bigint,
    identityType: bigint
  ];
  export interface OutputObject {
    hash: string;
    reason: bigint;
    identityType: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BlacklistIdentityDeletedEvent {
  export type InputTuple = [hash: BytesLike];
  export type OutputTuple = [hash: string];
  export interface OutputObject {
    hash: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleAdminChangedEvent {
  export type InputTuple = [
    role: BytesLike,
    previousAdminRole: BytesLike,
    newAdminRole: BytesLike
  ];
  export type OutputTuple = [
    role: string,
    previousAdminRole: string,
    newAdminRole: string
  ];
  export interface OutputObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleGrantedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleRevokedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WhitelistIdentityAddedEvent {
  export type InputTuple = [hash: BytesLike, did: string];
  export type OutputTuple = [hash: string, did: string];
  export interface OutputObject {
    hash: string;
    did: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WhitelistIdentityDeletedEvent {
  export type InputTuple = [hash: BytesLike];
  export type OutputTuple = [hash: string];
  export interface OutputObject {
    hash: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface AntiPhishingSwf2023 extends BaseContract {
  connect(runner?: ContractRunner | null): AntiPhishingSwf2023;
  waitForDeployment(): Promise<this>;

  interface: AntiPhishingSwf2023Interface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  BLACKLIST_OPERATOR_ROLE: TypedContractMethod<[], [string], "view">;

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  OWNER_ROLE: TypedContractMethod<[], [string], "view">;

  WHITELIST_OPERATOR_ROLE: TypedContractMethod<[], [string], "view">;

  addToBlackList: TypedContractMethod<
    [_id: string, _reason: BigNumberish, _identityType: BigNumberish],
    [void],
    "nonpayable"
  >;

  addToWhiteList: TypedContractMethod<[_did: string], [void], "nonpayable">;

  blackListCount: TypedContractMethod<[], [bigint], "view">;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  isBlackListed: TypedContractMethod<
    [_id: string],
    [[boolean, bigint, bigint]],
    "view"
  >;

  isWhiteListed: TypedContractMethod<[_did: string], [boolean], "view">;

  removeFromBlackList: TypedContractMethod<[_id: string], [void], "nonpayable">;

  removeFromWhiteList: TypedContractMethod<
    [_did: string],
    [void],
    "nonpayable"
  >;

  renounceRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  whiteListCount: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "BLACKLIST_OPERATOR_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "DEFAULT_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "OWNER_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "WHITELIST_OPERATOR_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "addToBlackList"
  ): TypedContractMethod<
    [_id: string, _reason: BigNumberish, _identityType: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addToWhiteList"
  ): TypedContractMethod<[_did: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "blackListCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "isBlackListed"
  ): TypedContractMethod<[_id: string], [[boolean, bigint, bigint]], "view">;
  getFunction(
    nameOrSignature: "isWhiteListed"
  ): TypedContractMethod<[_did: string], [boolean], "view">;
  getFunction(
    nameOrSignature: "removeFromBlackList"
  ): TypedContractMethod<[_id: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "removeFromWhiteList"
  ): TypedContractMethod<[_did: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "renounceRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "whiteListCount"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "BlacklistIdentityAdded"
  ): TypedContractEvent<
    BlacklistIdentityAddedEvent.InputTuple,
    BlacklistIdentityAddedEvent.OutputTuple,
    BlacklistIdentityAddedEvent.OutputObject
  >;
  getEvent(
    key: "BlacklistIdentityDeleted"
  ): TypedContractEvent<
    BlacklistIdentityDeletedEvent.InputTuple,
    BlacklistIdentityDeletedEvent.OutputTuple,
    BlacklistIdentityDeletedEvent.OutputObject
  >;
  getEvent(
    key: "RoleAdminChanged"
  ): TypedContractEvent<
    RoleAdminChangedEvent.InputTuple,
    RoleAdminChangedEvent.OutputTuple,
    RoleAdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "RoleGranted"
  ): TypedContractEvent<
    RoleGrantedEvent.InputTuple,
    RoleGrantedEvent.OutputTuple,
    RoleGrantedEvent.OutputObject
  >;
  getEvent(
    key: "RoleRevoked"
  ): TypedContractEvent<
    RoleRevokedEvent.InputTuple,
    RoleRevokedEvent.OutputTuple,
    RoleRevokedEvent.OutputObject
  >;
  getEvent(
    key: "WhitelistIdentityAdded"
  ): TypedContractEvent<
    WhitelistIdentityAddedEvent.InputTuple,
    WhitelistIdentityAddedEvent.OutputTuple,
    WhitelistIdentityAddedEvent.OutputObject
  >;
  getEvent(
    key: "WhitelistIdentityDeleted"
  ): TypedContractEvent<
    WhitelistIdentityDeletedEvent.InputTuple,
    WhitelistIdentityDeletedEvent.OutputTuple,
    WhitelistIdentityDeletedEvent.OutputObject
  >;

  filters: {
    "BlacklistIdentityAdded(bytes32,uint8,uint256)": TypedContractEvent<
      BlacklistIdentityAddedEvent.InputTuple,
      BlacklistIdentityAddedEvent.OutputTuple,
      BlacklistIdentityAddedEvent.OutputObject
    >;
    BlacklistIdentityAdded: TypedContractEvent<
      BlacklistIdentityAddedEvent.InputTuple,
      BlacklistIdentityAddedEvent.OutputTuple,
      BlacklistIdentityAddedEvent.OutputObject
    >;

    "BlacklistIdentityDeleted(bytes32)": TypedContractEvent<
      BlacklistIdentityDeletedEvent.InputTuple,
      BlacklistIdentityDeletedEvent.OutputTuple,
      BlacklistIdentityDeletedEvent.OutputObject
    >;
    BlacklistIdentityDeleted: TypedContractEvent<
      BlacklistIdentityDeletedEvent.InputTuple,
      BlacklistIdentityDeletedEvent.OutputTuple,
      BlacklistIdentityDeletedEvent.OutputObject
    >;

    "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;
    RoleAdminChanged: TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;

    "RoleGranted(bytes32,address,address)": TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;
    RoleGranted: TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;

    "RoleRevoked(bytes32,address,address)": TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;

    "WhitelistIdentityAdded(bytes32,string)": TypedContractEvent<
      WhitelistIdentityAddedEvent.InputTuple,
      WhitelistIdentityAddedEvent.OutputTuple,
      WhitelistIdentityAddedEvent.OutputObject
    >;
    WhitelistIdentityAdded: TypedContractEvent<
      WhitelistIdentityAddedEvent.InputTuple,
      WhitelistIdentityAddedEvent.OutputTuple,
      WhitelistIdentityAddedEvent.OutputObject
    >;

    "WhitelistIdentityDeleted(bytes32)": TypedContractEvent<
      WhitelistIdentityDeletedEvent.InputTuple,
      WhitelistIdentityDeletedEvent.OutputTuple,
      WhitelistIdentityDeletedEvent.OutputObject
    >;
    WhitelistIdentityDeleted: TypedContractEvent<
      WhitelistIdentityDeletedEvent.InputTuple,
      WhitelistIdentityDeletedEvent.OutputTuple,
      WhitelistIdentityDeletedEvent.OutputObject
    >;
  };
}