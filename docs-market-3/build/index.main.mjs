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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      3: [ctc0, ctc0],
      4: [ctc0, ctc0, ctc1],
      5: [ctc0, ctc0, ctc1]
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
  const ctc9 = stdlib.T_Null;
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc7],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v246], secs: v248, time: v247, didSend: v44, from: v245 } = txn1;
  ;
  const v250 = v246.products;
  const v286 = stdlib.protect(ctc8, await interact.shop(v246), {
    at: './index.rsh:52:43:application',
    fs: ['at ./index.rsh:51:9:application call to [unknown function] (defined at: ./index.rsh:51:13:function exp)'],
    msg: 'shop',
    who: 'Buyer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v245, v286],
    evt_cnt: 1,
    funcNum: 1,
    lct: v247,
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:54:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v290], secs: v292, time: v291, didSend: v93, from: v289 } = txn2;
      
      ;
      const v293 = v290.prodNum;
      const v294 = stdlib.eq(v293, stdlib.checkedBigNumberify('./index.rsh:55:24:decimal', stdlib.UInt_max, '0'));
      const v297 = stdlib.gt(v293, stdlib.checkedBigNumberify('./index.rsh:55:65:dot', stdlib.UInt_max, '3'));
      const v298 = v294 ? true : v297;
      const v299 = v290.prodAmt;
      const v300 = stdlib.eq(v299, stdlib.checkedBigNumberify('./index.rsh:55:92:decimal', stdlib.UInt_max, '0'));
      const v301 = v298 ? true : v300;
      if (v301) {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v290], secs: v292, time: v291, didSend: v93, from: v289 } = txn2;
  ;
  const v293 = v290.prodNum;
  const v294 = stdlib.eq(v293, stdlib.checkedBigNumberify('./index.rsh:55:24:decimal', stdlib.UInt_max, '0'));
  const v297 = stdlib.gt(v293, stdlib.checkedBigNumberify('./index.rsh:55:65:dot', stdlib.UInt_max, '3'));
  const v298 = v294 ? true : v297;
  const v299 = v290.prodAmt;
  const v300 = stdlib.eq(v299, stdlib.checkedBigNumberify('./index.rsh:55:92:decimal', stdlib.UInt_max, '0'));
  const v301 = v298 ? true : v300;
  if (v301) {
    stdlib.protect(ctc9, await interact.reportCancellation(), {
      at: './index.rsh:57:51:application',
      fs: ['at ./index.rsh:57:9:application call to [unknown function] (defined at: ./index.rsh:57:21:function exp)'],
      msg: 'reportCancellation',
      who: 'Buyer'
      });
    
    stdlib.protect(ctc9, await interact.reportExit(), {
      at: './index.rsh:58:43:application',
      fs: ['at ./index.rsh:58:9:application call to [unknown function] (defined at: ./index.rsh:58:21:function exp)'],
      msg: 'reportExit',
      who: 'Buyer'
      });
    
    return;
    }
  else {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v319], secs: v321, time: v320, didSend: v133, from: v318 } = txn3;
    ;
    const v322 = stdlib.addressEq(v245, v318);
    stdlib.assert(v322, {
      at: './index.rsh:67:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Buyer'
      });
    const v325 = stdlib.protect(ctc10, await interact.confirmPurchase(v319), {
      at: './index.rsh:71:56:application',
      fs: ['at ./index.rsh:70:9:application call to [unknown function] (defined at: ./index.rsh:70:13:function exp)'],
      msg: 'confirmPurchase',
      who: 'Buyer'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v245, v289, v319, v325],
      evt_cnt: 1,
      funcNum: 3,
      lct: v320,
      onlyIf: true,
      out_tys: [ctc10],
      pay: [stdlib.checkedBigNumberify('./index.rsh:73:5:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v327], secs: v329, time: v328, didSend: v143, from: v326 } = txn4;
        
        ;
        if (v327) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc11, ctc11, ctc2, ctc10],
      waitIfNotPresent: false
      }));
    const {data: [v327], secs: v329, time: v328, didSend: v143, from: v326 } = txn4;
    ;
    const v330 = stdlib.addressEq(v289, v326);
    stdlib.assert(v330, {
      at: './index.rsh:73:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Buyer'
      });
    if (v327) {
      const txn5 = await (ctc.sendrecv({
        args: [v245, v289, v319],
        evt_cnt: 0,
        funcNum: 4,
        lct: v328,
        onlyIf: true,
        out_tys: [],
        pay: [v319, []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v340, time: v339, didSend: v166, from: v338 } = txn5;
          
          sim_r.txns.push({
            amt: v319,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          
          sim_r.txns.push({
            amt: v319,
            kind: 'from',
            to: v245,
            tok: undefined /* Nothing */
            });
          
          
          
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc11, ctc11, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v340, time: v339, didSend: v166, from: v338 } = txn5;
      ;
      const v343 = stdlib.addressEq(v289, v338);
      stdlib.assert(v343, {
        at: './index.rsh:84:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Buyer'
        });
      stdlib.protect(ctc9, await interact.reportPayment(v319), {
        at: './index.rsh:85:44:application',
        fs: ['at ./index.rsh:85:7:application call to [unknown function] (defined at: ./index.rsh:85:19:function exp)'],
        msg: 'reportPayment',
        who: 'Buyer'
        });
      
      ;
      stdlib.protect(ctc9, await interact.reportTransfer(v319), {
        at: './index.rsh:87:45:application',
        fs: ['at ./index.rsh:87:7:application call to [unknown function] (defined at: ./index.rsh:87:19:function exp)'],
        msg: 'reportTransfer',
        who: 'Buyer'
        });
      
      const v366 = stdlib.sub(v293, stdlib.checkedBigNumberify('./index.rsh:88:85:decimal', stdlib.UInt_max, '1'));
      const v368 = v250[v366];
      stdlib.protect(ctc9, await interact.reportFulfillment(v368, v299), {
        at: './index.rsh:88:48:application',
        fs: ['at ./index.rsh:88:7:application call to [unknown function] (defined at: ./index.rsh:88:19:function exp)'],
        msg: 'reportFulfillment',
        who: 'Buyer'
        });
      
      stdlib.protect(ctc9, await interact.statusReport(), {
        at: './index.rsh:89:43:application',
        fs: ['at ./index.rsh:89:7:application call to [unknown function] (defined at: ./index.rsh:89:19:function exp)'],
        msg: 'statusReport',
        who: 'Buyer'
        });
      
      return;
      
      
      }
    else {
      stdlib.protect(ctc9, await interact.reportCancellation(), {
        at: './index.rsh:77:51:application',
        fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:21:function exp)'],
        msg: 'reportCancellation',
        who: 'Buyer'
        });
      
      stdlib.protect(ctc9, await interact.reportExit(), {
        at: './index.rsh:78:43:application',
        fs: ['at ./index.rsh:78:9:application call to [unknown function] (defined at: ./index.rsh:78:21:function exp)'],
        msg: 'reportExit',
        who: 'Buyer'
        });
      
      return;
      }
    
    
    
    }
  
  
  
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
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Address;
  
  
  const v225 = stdlib.protect(ctc7, interact.sellerInfo, 'for Seller\'s interact field sellerInfo');
  
  const txn1 = await (ctc.sendrecv({
    args: [v225],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:47:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:47:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v246], secs: v248, time: v247, didSend: v44, from: v245 } = txn1;
      
      ;
      const v249 = v246.announcement;
      const v250 = v246.products;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v246], secs: v248, time: v247, didSend: v44, from: v245 } = txn1;
  ;
  const v249 = v246.announcement;
  const v250 = v246.products;
  stdlib.protect(ctc8, await interact.reportReady(v249, v250), {
    at: './index.rsh:48:25:application',
    fs: ['at ./index.rsh:48:25:application call to [unknown function] (defined at: ./index.rsh:48:25:function exp)', 'at ./index.rsh:48:25:application call to "liftedInteract" (defined at: ./index.rsh:48:25:application)'],
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
  const {data: [v290], secs: v292, time: v291, didSend: v93, from: v289 } = txn2;
  ;
  const v293 = v290.prodNum;
  const v294 = stdlib.eq(v293, stdlib.checkedBigNumberify('./index.rsh:55:24:decimal', stdlib.UInt_max, '0'));
  const v297 = stdlib.gt(v293, stdlib.checkedBigNumberify('./index.rsh:55:65:dot', stdlib.UInt_max, '3'));
  const v298 = v294 ? true : v297;
  const v299 = v290.prodAmt;
  const v300 = stdlib.eq(v299, stdlib.checkedBigNumberify('./index.rsh:55:92:decimal', stdlib.UInt_max, '0'));
  const v301 = v298 ? true : v300;
  if (v301) {
    stdlib.protect(ctc8, await interact.reportCancellation(), {
      at: './index.rsh:57:51:application',
      fs: ['at ./index.rsh:57:9:application call to [unknown function] (defined at: ./index.rsh:57:21:function exp)'],
      msg: 'reportCancellation',
      who: 'Seller'
      });
    
    stdlib.protect(ctc8, await interact.reportExit(), {
      at: './index.rsh:58:43:application',
      fs: ['at ./index.rsh:58:9:application call to [unknown function] (defined at: ./index.rsh:58:21:function exp)'],
      msg: 'reportExit',
      who: 'Seller'
      });
    
    return;
    }
  else {
    const v312 = stdlib.sub(v293, stdlib.checkedBigNumberify('./index.rsh:65:55:decimal', stdlib.UInt_max, '1'));
    const v314 = v250[v312];
    const v315 = v314.price;
    const v317 = stdlib.mul(v315, v299);
    
    const txn3 = await (ctc.sendrecv({
      args: [v245, v289, v317],
      evt_cnt: 1,
      funcNum: 2,
      lct: v291,
      onlyIf: true,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:67:5:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v319], secs: v321, time: v320, didSend: v133, from: v318 } = txn3;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc11, ctc11, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [v319], secs: v321, time: v320, didSend: v133, from: v318 } = txn3;
    ;
    const v322 = stdlib.addressEq(v245, v318);
    stdlib.assert(v322, {
      at: './index.rsh:67:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Seller'
      });
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc10],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v327], secs: v329, time: v328, didSend: v143, from: v326 } = txn4;
    ;
    const v330 = stdlib.addressEq(v289, v326);
    stdlib.assert(v330, {
      at: './index.rsh:73:5:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Seller'
      });
    if (v327) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 4,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v340, time: v339, didSend: v166, from: v338 } = txn5;
      ;
      const v343 = stdlib.addressEq(v289, v338);
      stdlib.assert(v343, {
        at: './index.rsh:84:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Seller'
        });
      stdlib.protect(ctc8, await interact.reportPayment(v319), {
        at: './index.rsh:85:44:application',
        fs: ['at ./index.rsh:85:7:application call to [unknown function] (defined at: ./index.rsh:85:19:function exp)'],
        msg: 'reportPayment',
        who: 'Seller'
        });
      
      ;
      stdlib.protect(ctc8, await interact.reportTransfer(v319), {
        at: './index.rsh:87:45:application',
        fs: ['at ./index.rsh:87:7:application call to [unknown function] (defined at: ./index.rsh:87:19:function exp)'],
        msg: 'reportTransfer',
        who: 'Seller'
        });
      
      stdlib.protect(ctc8, await interact.reportFulfillment(v314, v299), {
        at: './index.rsh:88:48:application',
        fs: ['at ./index.rsh:88:7:application call to [unknown function] (defined at: ./index.rsh:88:19:function exp)'],
        msg: 'reportFulfillment',
        who: 'Seller'
        });
      
      stdlib.protect(ctc8, await interact.statusReport(), {
        at: './index.rsh:89:43:application',
        fs: ['at ./index.rsh:89:7:application call to [unknown function] (defined at: ./index.rsh:89:19:function exp)'],
        msg: 'statusReport',
        who: 'Seller'
        });
      
      return;
      
      
      }
    else {
      stdlib.protect(ctc8, await interact.reportCancellation(), {
        at: './index.rsh:77:51:application',
        fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:21:function exp)'],
        msg: 'reportCancellation',
        who: 'Seller'
        });
      
      stdlib.protect(ctc8, await interact.reportExit(), {
        at: './index.rsh:78:43:application',
        fs: ['at ./index.rsh:78:9:application call to [unknown function] (defined at: ./index.rsh:78:21:function exp)'],
        msg: 'reportExit',
        who: 'Seller'
        });
      
      return;
      }
    
    
    
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAHAAEDBAUIQCYCAQAAIjUAMRhBAicpZEkiWzUBIQVbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSYECDEABDUkkDEAAtEklDEAASSUSRCEENAESRDQESSISTDQCEhFEKGRJNQMhBls1/4AEkSc087A0/4gByzQDVyAgMQASRLEisgE0/7III7IQNANXACCyB7NCAVNIJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/1cgIDX+IQZbNf1JNQUXNfyABGWxA100/BZRBwhQsDT+MQASRDT8QQAcNP80/lA0/RZQKEsBVwBIZ0ghBDUBMgY1AkIBDUIA7kgkNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf9XICA1/kk1BRc1/YAEl073FzT9FlCwNP8xABJENP80/lA0/RZQKEsBVwBIZ0glNQEyBjUCQgC3SSMMQABaSCM0ARJENARJIhJMNAISEUQoZEk1AzX/STUFNf6ABDvqLs00/lCwNP4hBVtJNf0iEjT9JA0RNP4iWyISEUEAA0IAUjT/MQBQKEsBVwBAZ0gkNQEyBjUCQgBXSCI0ARJENARJIhJMNAISEURJNQU1/4AEme3aojT/ULCBoI0GiABtMQAoSwFXACBnSCM1ATIGNQJCABwxGSEEEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 72,
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
                "name": "v246",
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
                "name": "v246",
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
                "internalType": "struct T11",
                "name": "v290",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
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
                "internalType": "uint256",
                "name": "v319",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
                "internalType": "bool",
                "name": "v327",
                "type": "bool"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
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
                "internalType": "struct T11",
                "name": "v290",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
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
                "internalType": "uint256",
                "name": "v319",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
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
                "internalType": "bool",
                "name": "v327",
                "type": "bool"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200119c3803806200119c8339810160408190526200002691620002aa565b60008055436003556040517fc58bca02ea56c6dad25c31dd9bdf04c1b0e601b1632981af001d2d6eaf750601906200006290339084906200044c565b60405180910390a16200007834156007620000c9565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000c0929190620000f3565b50505062000533565b81620000ef5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200010190620004f6565b90600052602060002090601f01602090048101928262000125576000855562000170565b82601f106200014057805160ff191683800117855562000170565b8280016001018555821562000170579182015b828111156200017057825182559160200191906001019062000153565b506200017e92915062000182565b5090565b5b808211156200017e576000815560010162000183565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b0381118282101715620001d457620001d462000199565b60405290565b604051602081016001600160401b0381118282101715620001d457620001d462000199565b604051606081016001600160401b0381118282101715620001d457620001d462000199565b604051608081016001600160401b0381118282101715620001d457620001d462000199565b6000602082840312156200025c57600080fd5b604051602081016001600160401b038111828210171562000281576200028162000199565b604052825190915081906001600160c01b031981168114620002a257600080fd5b905292915050565b60008183036101c080821215620002c057600080fd5b620002ca620001af565b845181526020601f19840193506101a0841215620002e757600080fd5b620002f1620001da565b620002fb620001af565b828612156200030957600080fd5b62000313620001da565b95508288015163ffffffff19811681146200032d57600080fd5b8652948552604094605f880189136200034557600080fd5b6200034f620001ff565b94880194808a8711156200036257600080fd5b878a015b878110156200043757808c036080811215620003825760008081fd5b6200038c62000224565b878212156200039b5760008081fd5b620003a5620001da565b83516001600160b01b031981168114620003bf5760008081fd5b815281528288015188820152603f198201881315620003de5760008081fd5b620003e8620001da565b838c01519092506001600160d01b031981168114620004075760008081fd5b8252808b0191909152606090620004218e84840162000249565b9181019190915283529185019160800162000366565b50828501525081529082015295945050505050565b6001600160a01b03831681528151602080830191909152828101515180515163ffffffff1916604080850191909152908201516101e084019291606080860160005b6003811015620004e95784518051516001600160b01b0319168352868101518784015284810151516001600160d01b03191685840152830151516001600160c01b03191683830152938501936080909101906001016200048e565b5050505050509392505050565b600181811c908216806200050b57607f821691505b602082108114156200052d57634e487b7160e01b600052602260045260246000fd5b50919050565b610c5980620005436000396000f3fe60806040526004361061006e5760003560e01c8063a7661d541161004b578063a7661d54146100c3578063ab53f2c6146100d6578063e2186a08146100f9578063e46645081461010c57005b80631e93b0f11461007757806345f703961461009b57806383230757146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a93660046109a9565b61011f565b3480156100ba57600080fd5b50600154610088565b6100756100d13660046109a9565b6102e7565b3480156100e257600080fd5b506100eb610473565b6040516100929291906109cc565b6100756101073660046109a9565b610510565b61007561011a366004610a29565b6106d2565b61012f600360005414600d610896565b6101498135158061014257506001548235145b600e610896565b60008080556002805461015b90610a3b565b80601f016020809104026020016040519081016040528092919081815260200182805461018790610a3b565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610a8c565b6040805133815284356020808301919091528501358183015290519192507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b8919081900360600190a16102413415600b610896565b8051610259906001600160a01b03163314600c610896565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151821684528a85013583526004909555436001558751938401949094529051909216948101949094525190830152906080015b604051602081830303815290604052600290805190602001906102e19291906108bb565b50505050565b6102f76005600054146015610896565b6103118135158061030a57506001548235145b6016610896565b60008080556002805461032390610a3b565b80601f016020809104026020016040519081016040528092919081815260200182805461034f90610a3b565b801561039c5780601f106103715761010080835404028352916020019161039c565b820191906000526020600020905b81548152906001019060200180831161037f57829003601f168201915b50505050508060200190518101906103b49190610af5565b90507faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb19072233836040516103e7929190610b7b565b60405180910390a1610400816040015134146013610896565b602081015161041b906001600160a01b031633146014610896565b805160408083015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610458573d6000803e3d6000fd5b506000808055600181905561046f9060029061093f565b5050565b60006060600054600280805461048890610a3b565b80601f01602080910402602001604051908101604052809291908181526020018280546104b490610a3b565b80156105015780601f106104d657610100808354040283529160200191610501565b820191906000526020600020905b8154815290600101906020018083116104e457829003601f168201915b50505050509050915091509091565b6105206004600054146011610896565b61053a8135158061053357506001548235145b6012610896565b60008080556002805461054c90610a3b565b80601f016020809104026020016040519081016040528092919081815260200182805461057890610a3b565b80156105c55780601f1061059a576101008083540402835291602001916105c5565b820191906000526020600020905b8154815290600101906020018083116105a857829003601f168201915b50505050508060200190518101906105dd9190610af5565b90507fa5a264ad7bcb9788928e7795891942e9811712d8346314f9c3672363842f4e353383604051610610929190610b7b565b60405180910390a16106243415600f610896565b602081015161063f906001600160a01b031633146010610896565b61064f6040830160208401610bb0565b156106bc5760408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151821684528989015183526005909555436001558751938401949094529051909216948101949094525190830152906080016102bd565b6000808055600181905561046f9060029061093f565b6106e26001600054146009610896565b6106fc813515806106f557506001548235145b600a610896565b60008080556002805461070e90610a3b565b80601f016020809104026020016040519081016040528092919081815260200182805461073a90610a3b565b80156107875780601f1061075c57610100808354040283529160200191610787565b820191906000526020600020905b81548152906001019060200180831161076a57829003601f168201915b505050505080602001905181019061079f9190610bcb565b604080513381528435602080830191909152850135818301529084013560608201529091507fddbb4bc0b7a8af720ae06e593f197eac3d3b1140dcda0c416bd57f701b534d7a9060800160405180910390a16107fd34156008610896565b604082013515610814576003604083013511610817565b60015b61082657602082013515610829565b60015b15610844576000808055600181905561046f9060029061093f565b604080518082019091526000808252602082015281516001600160a01b0390811680835233602080850191825260036000554360015560408051918201939093529051909216908201526060016102bd565b8161046f5760405163100960cb60e01b81526004810182905260240160405180910390fd5b8280546108c790610a3b565b90600052602060002090601f0160209004810192826108e9576000855561092f565b82601f1061090257805160ff191683800117855561092f565b8280016001018555821561092f579182015b8281111561092f578251825591602001919060010190610914565b5061093b92915061097c565b5090565b50805461094b90610a3b565b6000825580601f1061095b575050565b601f016020900490600052602060002090810190610979919061097c565b50565b5b8082111561093b576000815560010161097d565b6000604082840312156109a357600080fd5b50919050565b6000604082840312156109bb57600080fd5b6109c58383610991565b9392505050565b82815260006020604081840152835180604085015260005b81811015610a00578581018301518582016060015282016109e4565b81811115610a12576000606083870101525b50601f01601f191692909201606001949350505050565b6000606082840312156109a357600080fd5b600181811c90821680610a4f57607f821691505b602082108114156109a357634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610a8757600080fd5b919050565b600060408284031215610a9e57600080fd5b6040516040810181811067ffffffffffffffff82111715610acf57634e487b7160e01b600052604160045260246000fd5b604052610adb83610a70565b8152610ae960208401610a70565b60208201529392505050565b600060608284031215610b0757600080fd5b6040516060810181811067ffffffffffffffff82111715610b3857634e487b7160e01b600052604160045260246000fd5b604052610b4483610a70565b8152610b5260208401610a70565b6020820152604083015160408201528091505092915050565b80358015158114610a8757600080fd5b6001600160a01b038316815281356020808301919091526060820190610ba2908401610b6b565b151560408301529392505050565b600060208284031215610bc257600080fd5b6109c582610b6b565b600060208284031215610bdd57600080fd5b6040516020810181811067ffffffffffffffff82111715610c0e57634e487b7160e01b600052604160045260246000fd5b604052610c1a83610a70565b8152939250505056fea264697066735822122006101124182784537fb2ffd82a6860328fbb80dfcc392e1140df61b64859b0d364736f6c634300080c0033`,
  BytecodeLen: 4508,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:49:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:56:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:61:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:68:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:81:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:90:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:76:13:after expr stmt semicolon',
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
