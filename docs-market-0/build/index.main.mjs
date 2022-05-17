// Automatically generated with Reach 0.1.10 (84dc282c)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (84dc282c)';
export const _backendVersion = 15;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      1: []
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Buyer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Buyer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '28'));
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc5 = stdlib.T_Object({
    name: ctc1,
    price: ctc2,
    unit: ctc3,
    units: ctc4
    });
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc7 = stdlib.T_Object({
    announcement: ctc0,
    products: ctc6
    });
  const ctc8 = stdlib.T_Object({
    prodAmt: ctc2,
    prodNum: ctc2
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc7],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v136], secs: v138, time: v137, didSend: v44, from: v135 } = txn1;
  ;
  const v176 = stdlib.protect(ctc8, await interact.shop(v136), {
    at: './index.rsh:44:43:application',
    fs: ['at ./index.rsh:43:9:application call to [unknown function] (defined at: ./index.rsh:43:13:function exp)'],
    msg: 'shop',
    who: 'Buyer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v176],
    evt_cnt: 1,
    funcNum: 1,
    lct: v137,
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:46:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v180], secs: v182, time: v181, didSend: v93, from: v179 } = txn2;
      
      ;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v180], secs: v182, time: v181, didSend: v93, from: v179 } = txn2;
  ;
  return;
  
  
  
  
  };
export async function Seller(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Seller expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Seller expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '28'));
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc5 = stdlib.T_Object({
    name: ctc1,
    price: ctc2,
    unit: ctc3,
    units: ctc4
    });
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc7 = stdlib.T_Object({
    announcement: ctc0,
    products: ctc6
    });
  const ctc8 = stdlib.T_Null;
  const ctc9 = stdlib.T_Object({
    prodAmt: ctc2,
    prodNum: ctc2
    });
  
  
  const v115 = stdlib.protect(ctc7, interact.sellerInfo, 'for Seller\'s interact field sellerInfo');
  
  const txn1 = await (ctc.sendrecv({
    args: [v115],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:39:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:39:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v136], secs: v138, time: v137, didSend: v44, from: v135 } = txn1;
      
      ;
      const v139 = v136.announcement;
      const v140 = v136.products;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v136], secs: v138, time: v137, didSend: v44, from: v135 } = txn1;
  ;
  const v139 = v136.announcement;
  const v140 = v136.products;
  stdlib.protect(ctc8, await interact.reportReady(v139, v140), {
    at: './index.rsh:40:25:application',
    fs: ['at ./index.rsh:40:25:application call to [unknown function] (defined at: ./index.rsh:40:25:function exp)', 'at ./index.rsh:40:25:application call to "liftedInteract" (defined at: ./index.rsh:40:25:application)'],
    msg: 'reportReady',
    who: 'Seller'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc9],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v180], secs: v182, time: v181, didSend: v93, from: v179 } = txn2;
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiACAAEmAQAiNQAxGEEA1ChkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAACUjEkQjNAESRDQESSISTDQCEhFESTUFNf+ABDvqLs00/1CwQgAxSCI0ARJENARJIhJMNAISEURJNQU1/4AEme3aojT/ULCBoI0GiABjIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes28",
                        "name": "elem0",
                        "type": "bytes28"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "_announcement",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "bytes10",
                            "name": "elem0",
                            "type": "bytes10"
                          }
                        ],
                        "internalType": "struct T2",
                        "name": "_name",
                        "type": "tuple"
                      },
                      {
                        "internalType": "uint256",
                        "name": "_price",
                        "type": "uint256"
                      },
                      {
                        "components": [
                          {
                            "internalType": "bytes6",
                            "name": "elem0",
                            "type": "bytes6"
                          }
                        ],
                        "internalType": "struct T3",
                        "name": "_unit",
                        "type": "tuple"
                      },
                      {
                        "components": [
                          {
                            "internalType": "bytes8",
                            "name": "elem0",
                            "type": "bytes8"
                          }
                        ],
                        "internalType": "struct T4",
                        "name": "_units",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T5[3]",
                    "name": "_products",
                    "type": "tuple[3]"
                  }
                ],
                "internalType": "struct T7",
                "name": "v136",
                "type": "tuple"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes28",
                        "name": "elem0",
                        "type": "bytes28"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "_announcement",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "bytes10",
                            "name": "elem0",
                            "type": "bytes10"
                          }
                        ],
                        "internalType": "struct T2",
                        "name": "_name",
                        "type": "tuple"
                      },
                      {
                        "internalType": "uint256",
                        "name": "_price",
                        "type": "uint256"
                      },
                      {
                        "components": [
                          {
                            "internalType": "bytes6",
                            "name": "elem0",
                            "type": "bytes6"
                          }
                        ],
                        "internalType": "struct T3",
                        "name": "_unit",
                        "type": "tuple"
                      },
                      {
                        "components": [
                          {
                            "internalType": "bytes8",
                            "name": "elem0",
                            "type": "bytes8"
                          }
                        ],
                        "internalType": "struct T4",
                        "name": "_units",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T5[3]",
                    "name": "_products",
                    "type": "tuple[3]"
                  }
                ],
                "internalType": "struct T7",
                "name": "v136",
                "type": "tuple"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_prodAmt",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_prodNum",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T10",
                "name": "v180",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_prodAmt",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_prodNum",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T10",
                "name": "v180",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620009513803806200095183398101604081905262000026916200029a565b60008055436003556040517fc58bca02ea56c6dad25c31dd9bdf04c1b0e601b1632981af001d2d6eaf750601906200006290339084906200043c565b60405180910390a16200007834156007620000b9565b60016000818155439091556040805160208082018490528251808303820181529183019092528051620000b0926002920190620000e3565b50505062000523565b81620000df5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620000f190620004e6565b90600052602060002090601f01602090048101928262000115576000855562000160565b82601f106200013057805160ff191683800117855562000160565b8280016001018555821562000160579182015b828111156200016057825182559160200191906001019062000143565b506200016e92915062000172565b5090565b5b808211156200016e576000815560010162000173565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b0381118282101715620001c457620001c462000189565b60405290565b604051602081016001600160401b0381118282101715620001c457620001c462000189565b604051606081016001600160401b0381118282101715620001c457620001c462000189565b604051608081016001600160401b0381118282101715620001c457620001c462000189565b6000602082840312156200024c57600080fd5b604051602081016001600160401b038111828210171562000271576200027162000189565b604052825190915081906001600160c01b0319811681146200029257600080fd5b905292915050565b60008183036101c080821215620002b057600080fd5b620002ba6200019f565b845181526020601f19840193506101a0841215620002d757600080fd5b620002e1620001ca565b620002eb6200019f565b82861215620002f957600080fd5b62000303620001ca565b95508288015163ffffffff19811681146200031d57600080fd5b8652948552604094605f880189136200033557600080fd5b6200033f620001ef565b94880194808a8711156200035257600080fd5b878a015b878110156200042757808c036080811215620003725760008081fd5b6200037c62000214565b878212156200038b5760008081fd5b62000395620001ca565b83516001600160b01b031981168114620003af5760008081fd5b815281528288015188820152603f198201881315620003ce5760008081fd5b620003d8620001ca565b838c01519092506001600160d01b031981168114620003f75760008081fd5b8252808b0191909152606090620004118e84840162000239565b9181019190915283529185019160800162000356565b50828501525081529082015295945050505050565b6001600160a01b03831681528151602080830191909152828101515180515163ffffffff1916604080850191909152908201516101e084019291606080860160005b6003811015620004d95784518051516001600160b01b0319168352868101518784015284810151516001600160d01b03191685840152830151516001600160c01b03191683830152938501936080909101906001016200047e565b5050505050509392505050565b600181811c90821680620004fb57607f821691505b602082108114156200051d57634e487b7160e01b600052602260045260246000fd5b50919050565b61041e80620005336000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d578063ab53f2c614610082578063e4664508146100a557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b34801561008e57600080fd5b506100976100b8565b604051610064929190610315565b6100476100b3366004610372565b610155565b6000606060005460028080546100cd9061038a565b80601f01602080910402602001604051908101604052809291908181526020018280546100f99061038a565b80156101465780601f1061011b57610100808354040283529160200191610146565b820191906000526020600020905b81548152906001019060200180831161012957829003601f168201915b50505050509050915091509091565b610165600160005414600961029a565b61017f8135158061017857506001548235145b600a61029a565b6000808055600280546101919061038a565b80601f01602080910402602001604051908101604052809291908181526020018280546101bd9061038a565b801561020a5780601f106101df5761010080835404028352916020019161020a565b820191906000526020600020905b8154815290600101906020018083116101ed57829003601f168201915b505050505080602001905181019061022291906103bf565b604080513381528435602080830191909152850135818301529084013560608201529091507fddbb4bc0b7a8af720ae06e593f197eac3d3b1140dcda0c416bd57f701b534d7a9060800160405180910390a16102803415600861029a565b60008080556001819055610296906002906102bf565b5050565b816102965760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546102cb9061038a565b6000825580601f106102db575050565b601f0160209004906000526020600020908101906102f991906102fc565b50565b5b8082111561031157600081556001016102fd565b5090565b82815260006020604081840152835180604085015260005b818110156103495785810183015185820160600152820161032d565b8181111561035b576000606083870101525b50601f01601f191692909201606001949350505050565b60006060828403121561038457600080fd5b50919050565b600181811c9082168061039e57607f821691505b6020821081141561038457634e487b7160e01b600052602260045260246000fd5b6000602082840312156103d157600080fd5b815180151581146103e157600080fd5b939250505056fea2646970667358221220b73bc20f0123ec2a7e726a3497418aec94038422df397d8723ebd6e088380f0364736f6c634300080c0033`,
  BytecodeLen: 2385,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:41:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: '<builtin>',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Buyer": Buyer,
  "Seller": Seller
  };
export const _APIs = {
  };
