/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type {
  AntiPhishingSwf2023,
  AntiPhishingSwf2023Interface,
} from "../AntiPhishingSwf2023";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_id",
        type: "string",
      },
      {
        internalType: "enum AntiPhishingSwf2023.BlackListReason",
        name: "_reason",
        type: "uint8",
      },
    ],
    name: "addToBlackList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_did",
        type: "string",
      },
    ],
    name: "addToWhiteList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_id",
        type: "string",
      },
    ],
    name: "isBlackListed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "enum AntiPhishingSwf2023.BlackListReason",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_did",
        type: "string",
      },
    ],
    name: "isWhiteListed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_id",
        type: "string",
      },
    ],
    name: "removeFromBlackList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_did",
        type: "string",
      },
    ],
    name: "removeFromWhiteList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_oldId",
        type: "string",
      },
      {
        internalType: "string",
        name: "_newId",
        type: "string",
      },
      {
        internalType: "enum AntiPhishingSwf2023.BlackListReason",
        name: "_newReason",
        type: "uint8",
      },
    ],
    name: "updateBlackList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_oldDid",
        type: "string",
      },
      {
        internalType: "string",
        name: "_newDid",
        type: "string",
      },
    ],
    name: "updateWhiteList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50600280546001600160a01b03191633179055610d21806100326000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063899fffba1161005b578063899fffba146100db578063c38091dd14610105578063cb5e207a14610128578063e99e85211461013b57600080fd5b80631ad569a91461008d57806323a10309146100a2578063378f2a09146100b5578063443e34ec146100c8575b600080fd5b6100a061009b3660046108fb565b61014e565b005b6100a06100b036600461094c565b610239565b6100a06100c33660046108fb565b610345565b6100a06100d63660046109c0565b610466565b6100ee6100e93660046108fb565b610598565b6040516100fc929190610a24565b60405180910390f35b6101186101133660046108fb565b6105ea565b60405190151581526020016100fc565b6100a06101363660046108fb565b61065d565b6100a0610149366004610a58565b61078c565b6002546001600160a01b031633146101815760405162461bcd60e51b815260040161017890610abc565b60405180910390fd5b6000816040516020016101949190610afe565b60408051601f19818403018152918152815160209283012060008181526001909352912054909150811461021a5760405162461bcd60e51b815260206004820152602760248201527f5468697320494420646f6573206e6f7420657869737420696e2074686520626c6044820152661858dadb1a5cdd60ca1b6064820152608401610178565b6000908152600160208190526040822091825501805460ff1916905550565b6002546001600160a01b031633146102635760405162461bcd60e51b815260040161017890610abc565b6000836040516020016102769190610afe565b60408051601f19818403018152828252805160209182012060008181526001808452938120818155909301805460ff19169055935090916102b991869101610afe565b604051602081830303815290604052805190602001209050600060405180604001604052808381526020018560098111156102f6576102f6610a0e565b905260008381526001602081815260409092208351815591830151828201805494955085949192909160ff19169083600981111561033657610336610a0e565b02179055505050505050505050565b6002546001600160a01b0316331461036f5760405162461bcd60e51b815260040161017890610abc565b806040516020016103809190610afe565b604051602081830303815290604052805190602001206000826040516103a69190610afe565b908152604051602091819003820181206103c292909101610b67565b60405160208183030381529060405280519060200120146104365760405162461bcd60e51b815260206004820152602860248201527f546869732044494420646f6573206e6f7420657869737420696e2074686520776044820152671a1a5d195b1a5cdd60c21b6064820152608401610178565b6000816040516104469190610afe565b90815260405190819003602001902060006104618282610802565b505050565b6002546001600160a01b031633146104905760405162461bcd60e51b815260040161017890610abc565b6000826040516020016104a39190610afe565b60408051601f198184030181529181528151602092830120600081815260019093529120549091508190036105265760405162461bcd60e51b815260206004820152602360248201527f5468697320494420697320616c726561647920696e2074686520626c61636b6c6044820152621a5cdd60ea1b6064820152608401610178565b6000604051806040016040528083815260200184600981111561054b5761054b610a0e565b905260008381526001602081815260409092208351815591830151828201805494955085949192909160ff19169083600981111561058b5761058b610a0e565b0217905550505050505050565b6000806000836040516020016105ae9190610afe565b60408051601f198184030181529181528151602092830120600081815260019384905291909120805492015491149560ff909116945092505050565b6000816040516020016105fd9190610afe565b604051602081830303815290604052805190602001206000836040516106239190610afe565b9081526040516020918190038201812061063f92909101610b67565b60405160208183030381529060405280519060200120149050919050565b6002546001600160a01b031633146106875760405162461bcd60e51b815260040161017890610abc565b806040516020016106989190610afe565b604051602081830303815290604052805190602001206000826040516106be9190610afe565b908152604051602091819003820181206106da92909101610b67565b60405160208183030381529060405280519060200120036107495760405162461bcd60e51b8152602060048201526024808201527f546869732044494420697320616c726561647920696e207468652077686974656044820152631b1a5cdd60e21b6064820152608401610178565b6040805160208101825282815290518190600090610768908590610afe565b908152604051908190036020019020815181906107859082610c2b565b5050505050565b6002546001600160a01b031633146107b65760405162461bcd60e51b815260040161017890610abc565b6000826040516107c69190610afe565b90815260405190819003602001902060006107e18282610802565b50506040518060200160405280828152506000826040516107689190610afe565b50805461080e90610b2d565b6000825580601f1061081e575050565b601f01602090049060005260206000209081019061083c919061083f565b50565b5b808211156108545760008155600101610840565b5090565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261087f57600080fd5b813567ffffffffffffffff8082111561089a5761089a610858565b604051601f8301601f19908116603f011681019082821181831017156108c2576108c2610858565b816040528381528660208588010111156108db57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60006020828403121561090d57600080fd5b813567ffffffffffffffff81111561092457600080fd5b6109308482850161086e565b949350505050565b8035600a811061094757600080fd5b919050565b60008060006060848603121561096157600080fd5b833567ffffffffffffffff8082111561097957600080fd5b6109858783880161086e565b9450602086013591508082111561099b57600080fd5b506109a88682870161086e565b9250506109b760408501610938565b90509250925092565b600080604083850312156109d357600080fd5b823567ffffffffffffffff8111156109ea57600080fd5b6109f68582860161086e565b925050610a0560208401610938565b90509250929050565b634e487b7160e01b600052602160045260246000fd5b821515815260408101600a8310610a4b57634e487b7160e01b600052602160045260246000fd5b8260208301529392505050565b60008060408385031215610a6b57600080fd5b823567ffffffffffffffff80821115610a8357600080fd5b610a8f8683870161086e565b93506020850135915080821115610aa557600080fd5b50610ab28582860161086e565b9150509250929050565b60208082526022908201527f4f6e6c79206f776e65722063616e20706572666f726d2074686973206163746960408201526137b760f11b606082015260800190565b6000825160005b81811015610b1f5760208186018101518583015201610b05565b506000920191825250919050565b600181811c90821680610b4157607f821691505b602082108103610b6157634e487b7160e01b600052602260045260246000fd5b50919050565b6000808354610b7581610b2d565b60018281168015610b8d5760018114610ba257610bd1565b60ff1984168752821515830287019450610bd1565b8760005260208060002060005b85811015610bc85781548a820152908401908201610baf565b50505082870194505b50929695505050505050565b601f82111561046157600081815260208120601f850160051c81016020861015610c045750805b601f850160051c820191505b81811015610c2357828155600101610c10565b505050505050565b815167ffffffffffffffff811115610c4557610c45610858565b610c5981610c538454610b2d565b84610bdd565b602080601f831160018114610c8e5760008415610c765750858301515b600019600386901b1c1916600185901b178555610c23565b600085815260208120601f198616915b82811015610cbd57888601518255948401946001909101908401610c9e565b5085821015610cdb5787850151600019600388901b60f8161c191681555b5050505050600190811b0190555056fea26469706673582212202d95f10142d7f308f019d3bb0324b0416c87765c4b390397adf621533c66399e64736f6c63430008130033";

type AntiPhishingSwf2023ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AntiPhishingSwf2023ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AntiPhishingSwf2023__factory extends ContractFactory {
  constructor(...args: AntiPhishingSwf2023ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      AntiPhishingSwf2023 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): AntiPhishingSwf2023__factory {
    return super.connect(runner) as AntiPhishingSwf2023__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AntiPhishingSwf2023Interface {
    return new Interface(_abi) as AntiPhishingSwf2023Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): AntiPhishingSwf2023 {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as AntiPhishingSwf2023;
  }
}