/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BIT, BITInterface } from "../BIT";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokens",
        type: "uint256",
      },
    ],
    name: "claimTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001aaf38038062001aaf833981810160405281019062000037919062000398565b6040518060400160405280601181526020017f427261696e20496e64657820546f6b656e0000000000000000000000000000008152506040518060400160405280600381526020017f42495400000000000000000000000000000000000000000000000000000000008152508160039080519060200190620000bb929190620002d1565b508060049080519060200190620000d4929190620002d1565b50505033600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200012a33826200013160201b60201c565b506200058a565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620001a4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200019b90620003fc565b60405180910390fd5b620001b860008383620002aa60201b60201c565b8060026000828254620001cc91906200044c565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546200022391906200044c565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200028a91906200041e565b60405180910390a3620002a660008383620002c760201b60201c565b5050565b620002c2838383620002cc60201b620006321760201c565b505050565b505050565b505050565b828054620002df90620004b3565b90600052602060002090601f0160209004810192826200030357600085556200034f565b82601f106200031e57805160ff19168380011785556200034f565b828001600101855582156200034f579182015b828111156200034e57825182559160200191906001019062000331565b5b5090506200035e919062000362565b5090565b5b808211156200037d57600081600090555060010162000363565b5090565b600081519050620003928162000570565b92915050565b600060208284031215620003ab57600080fd5b6000620003bb8482850162000381565b91505092915050565b6000620003d3601f836200043b565b9150620003e08262000547565b602082019050919050565b620003f681620004a9565b82525050565b600060208201905081810360008301526200041781620003c4565b9050919050565b6000602082019050620004356000830184620003eb565b92915050565b600082825260208201905092915050565b60006200045982620004a9565b91506200046683620004a9565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156200049e576200049d620004e9565b5b828201905092915050565b6000819050919050565b60006002820490506001821680620004cc57607f821691505b60208210811415620004e357620004e262000518565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6200057b81620004a9565b81146200058757600080fd5b50565b611515806200059a6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806346e04a2f1161008c57806395d89b411161006657806395d89b4114610228578063a457c2d714610246578063a9059cbb14610276578063dd62ed3e146102a6576100cf565b806346e04a2f146101be57806370a08231146101da5780638da5cb5b1461020a576100cf565b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461012257806323b872dd14610140578063313ce56714610170578063395093511461018e575b600080fd5b6100dc6102d6565b6040516100e99190610f92565b60405180910390f35b61010c60048036038101906101079190610d6a565b610368565b6040516101199190610f77565b60405180910390f35b61012a61038b565b60405161013791906110b4565b60405180910390f35b61015a60048036038101906101559190610d1b565b610395565b6040516101679190610f77565b60405180910390f35b6101786103c4565b60405161018591906110cf565b60405180910390f35b6101a860048036038101906101a39190610d6a565b6103cd565b6040516101b59190610f77565b60405180910390f35b6101d860048036038101906101d39190610da6565b610404565b005b6101f460048036038101906101ef9190610cb6565b610411565b60405161020191906110b4565b60405180910390f35b610212610459565b60405161021f9190610f5c565b60405180910390f35b61023061047f565b60405161023d9190610f92565b60405180910390f35b610260600480360381019061025b9190610d6a565b610511565b60405161026d9190610f77565b60405180910390f35b610290600480360381019061028b9190610d6a565b610588565b60405161029d9190610f77565b60405180910390f35b6102c060048036038101906102bb9190610cdf565b6105ab565b6040516102cd91906110b4565b60405180910390f35b6060600380546102e5906111e4565b80601f0160208091040260200160405190810160405280929190818152602001828054610311906111e4565b801561035e5780601f106103335761010080835404028352916020019161035e565b820191906000526020600020905b81548152906001019060200180831161034157829003601f168201915b5050505050905090565b600080610373610637565b905061038081858561063f565b600191505092915050565b6000600254905090565b6000806103a0610637565b90506103ad85828561080a565b6103b8858585610896565b60019150509392505050565b60006012905090565b6000806103d8610637565b90506103f98185856103ea85896105ab565b6103f49190611106565b61063f565b600191505092915050565b61040e3382610b17565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60606004805461048e906111e4565b80601f01602080910402602001604051908101604052809291908181526020018280546104ba906111e4565b80156105075780601f106104dc57610100808354040283529160200191610507565b820191906000526020600020905b8154815290600101906020018083116104ea57829003601f168201915b5050505050905090565b60008061051c610637565b9050600061052a82866105ab565b90508381101561056f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056690611074565b60405180910390fd5b61057c828686840361063f565b60019250505092915050565b600080610593610637565b90506105a0818585610896565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b505050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156106af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a690611054565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561071f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071690610fd4565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516107fd91906110b4565b60405180910390a3505050565b600061081684846105ab565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146108905781811015610882576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087990610ff4565b60405180910390fd5b61088f848484840361063f565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610906576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108fd90611034565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610976576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096d90610fb4565b60405180910390fd5b610981838383610c77565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610a07576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109fe90611014565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a9a9190611106565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610afe91906110b4565b60405180910390a3610b11848484610c87565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b87576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b7e90611094565b60405180910390fd5b610b9360008383610c77565b8060026000828254610ba59190611106565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610bfa9190611106565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610c5f91906110b4565b60405180910390a3610c7360008383610c87565b5050565b610c82838383610632565b505050565b505050565b600081359050610c9b816114b1565b92915050565b600081359050610cb0816114c8565b92915050565b600060208284031215610cc857600080fd5b6000610cd684828501610c8c565b91505092915050565b60008060408385031215610cf257600080fd5b6000610d0085828601610c8c565b9250506020610d1185828601610c8c565b9150509250929050565b600080600060608486031215610d3057600080fd5b6000610d3e86828701610c8c565b9350506020610d4f86828701610c8c565b9250506040610d6086828701610ca1565b9150509250925092565b60008060408385031215610d7d57600080fd5b6000610d8b85828601610c8c565b9250506020610d9c85828601610ca1565b9150509250929050565b600060208284031215610db857600080fd5b6000610dc684828501610ca1565b91505092915050565b610dd88161115c565b82525050565b610de78161116e565b82525050565b6000610df8826110ea565b610e0281856110f5565b9350610e128185602086016111b1565b610e1b81611274565b840191505092915050565b6000610e336023836110f5565b9150610e3e82611285565b604082019050919050565b6000610e566022836110f5565b9150610e61826112d4565b604082019050919050565b6000610e79601d836110f5565b9150610e8482611323565b602082019050919050565b6000610e9c6026836110f5565b9150610ea78261134c565b604082019050919050565b6000610ebf6025836110f5565b9150610eca8261139b565b604082019050919050565b6000610ee26024836110f5565b9150610eed826113ea565b604082019050919050565b6000610f056025836110f5565b9150610f1082611439565b604082019050919050565b6000610f28601f836110f5565b9150610f3382611488565b602082019050919050565b610f478161119a565b82525050565b610f56816111a4565b82525050565b6000602082019050610f716000830184610dcf565b92915050565b6000602082019050610f8c6000830184610dde565b92915050565b60006020820190508181036000830152610fac8184610ded565b905092915050565b60006020820190508181036000830152610fcd81610e26565b9050919050565b60006020820190508181036000830152610fed81610e49565b9050919050565b6000602082019050818103600083015261100d81610e6c565b9050919050565b6000602082019050818103600083015261102d81610e8f565b9050919050565b6000602082019050818103600083015261104d81610eb2565b9050919050565b6000602082019050818103600083015261106d81610ed5565b9050919050565b6000602082019050818103600083015261108d81610ef8565b9050919050565b600060208201905081810360008301526110ad81610f1b565b9050919050565b60006020820190506110c96000830184610f3e565b92915050565b60006020820190506110e46000830184610f4d565b92915050565b600081519050919050565b600082825260208201905092915050565b60006111118261119a565b915061111c8361119a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561115157611150611216565b5b828201905092915050565b60006111678261117a565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b838110156111cf5780820151818401526020810190506111b4565b838111156111de576000848401525b50505050565b600060028204905060018216806111fc57607f821691505b602082108114156112105761120f611245565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6114ba8161115c565b81146114c557600080fd5b50565b6114d18161119a565b81146114dc57600080fd5b5056fea264697066735822122042cb223b96c1ea2bf7b9a6e8ca92798febb487cd6bdce8909bd5cda0b614550964736f6c63430008030033";

export class BIT__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    initialSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BIT> {
    return super.deploy(initialSupply, overrides || {}) as Promise<BIT>;
  }
  getDeployTransaction(
    initialSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(initialSupply, overrides || {});
  }
  attach(address: string): BIT {
    return super.attach(address) as BIT;
  }
  connect(signer: Signer): BIT__factory {
    return super.connect(signer) as BIT__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BITInterface {
    return new utils.Interface(_abi) as BITInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): BIT {
    return new Contract(address, _abi, signerOrProvider) as BIT;
  }
}