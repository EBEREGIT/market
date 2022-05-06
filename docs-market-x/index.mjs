import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);

// create account balance for Seller and Buyer
const SellerBalance = await stdlib.newTestAccount(startingBalance);
const BuyerBalance = await stdlib.newTestAccount(startingBalance);

// create contracts for Seller and Buyer
const SellerContract = SellerBalance.contract(backend);
const BuyerContract = BuyerBalance.contract(backend, SellerContract.getInfo());

// Defining the functions we declared at the backend (index.rsh)
const commonInteract = (person) => ({
  showResult: (decision, sellerInfo) => {
    console.log(
      `${person} agrees to ${person === "Seller" ? "sell" : "buy"} ${
        decision.quantity
      } ${
        decision.quantity > 1
          ? sellerInfo.products[decision.choice].units
          : sellerInfo.products[decision.choice].unit
      } of ${sellerInfo.products[decision.choice].name}`
    );
  },
});

const sellerInteract = {
  sellerInfo: {
    announcement: "List of products for sale:",
    products: [
      { name: "Potatoes", unit: "bag", units: "bags", price: "10" },
      { name: "Carrots", unit: "bunch", units: "bunches", price: "10" },
      { name: "Corn", unit: "ear", units: "ears", price: "5" },
    ],
  },
  reportReady: async (announcement, products) => {
    console.log(`Welcome to the Market`);
    console.log(
      `Contract info: ${JSON.stringify(
        await SellerContract.getInfo(announcement, products)
      )}`
    );
  },
};

const buyerInteract = {
  shop: async (sellerInfo) => {
    const choice = Math.floor(Math.random() * 3);
    const quantity = Math.floor(Math.random() * 100);

    console.log(sellerInfo.announcement);
    sellerInfo.products.forEach((product, index) => {
      console.log(
        `${index + 1}. ${product.name} at ${product.price} per ${product.unit}.`
      );
    });
    console.log(`Buyer wants ${sellerInfo.products[choice].name}`);

    return { choice, quantity };
  },
};

// initialize the backend
// execute the steps Seller and Buyer takes in this program
await Promise.all([
  // seller
  SellerContract.p.Seller({
    ...commonInteract("Seller"),
    ...sellerInteract,
  }),
  // buyer
  BuyerContract.p.Buyer({
    ...commonInteract("Buyer"),
    ...buyerInteract,
  }),
]);
