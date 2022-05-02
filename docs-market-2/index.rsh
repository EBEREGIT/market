'reach 0.1'

const announcement = Bytes(28);
const product = Object({ 
  name: Bytes(10), 
  unit: Bytes(6), 
  units: Bytes(8), 
  price: UInt 
});
const products = Array(product, 3);

const commonInteract = {
  reportCancellation: Fun([], Null),
  reportExit: Fun([], Null),
};

const sellerInteract = {
  ...commonInteract,
  sellerInfo: Object({ 
    announcement: announcement,
    products: products, 
  }),
  //Object({ startingBid: UInt, timeout: UInt }))
  reportReady: Fun(Object({
    announcement: Bytes(28),
    products: Array(Object({
      name: Bytes(10),
      price: UInt,
      unit: Bytes(6),
      units: Bytes(8),
    }), 3)
  }), Null),
};

const buyerInteract = {
  ...commonInteract,
  shop: Fun(
    [Object({ announcement: announcement, products: products })],
    Object({ prodNum: UInt, prodAmt: UInt })
  )
};

export const main = Reach.App(() => {
  const S = Participant('Seller', sellerInteract);
  const B = Participant('Buyer', buyerInteract);
  init();
  
  S.only(() => { 
    const sellerInfo = declassify(interact.sellerInfo); 
  });
  S.publish(sellerInfo);
  S.interact.reportReady(sellerInfo);
  commit();
  
  B.only(() => {
    const order = declassify(interact.shop(sellerInfo));
  });
  B.publish(order);
  if (order.prodNum == 0 || order.prodNum > sellerInfo.products.length || order.prodAmt == 0) {
    commit();
    each([S, B], () => interact.reportCancellation());
    each([S, B], () => interact.reportExit());
    exit();
  } else {
  commit();
  }

  exit();
});