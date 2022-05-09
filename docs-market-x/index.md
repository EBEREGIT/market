# Market Day

## Introduction

In this tutorial, I am going to walk you through creating a safe application that ensures trust in transacting businesses between individuals.

For the purpose of this tutorial, we will use a `seller` and a `buyer`. And we will be using [Reach](https://reach.sh/).

The following image is a pictorial description of how the application will work at the end of this tutorial.

> **Insert Image Describing the flow of transactions**

We will go from building a basic DApp to a more advanced one.
By the end, you will [JP: STATE SPECIFIC LEARNING OBJECTIVES]

### Prerequisite

To make it easy for you to follow through, it is expected that you have installed Reach. If you need help, use the [Quick Start Guide](https://docs.reach.sh/quickstart/#quickstart).

This tutorial builds on the [Wisdom For Sale]() tutorial. We assume you have finished Wisdom for Sale.

## Basic DApp

1. Create a folder named `market` in your `Reach` directory:

``` cmd
$ mkdir market
```

2.  Create 2 files: `index.rsh` and `index.mjs`

The `index.mjs` is the frontend of the DApp that we are about to create since it contains the code the user will interact with.
`Reach` requires this file to compile even if it is empty.

The `index.rsh` is the backend which contains the DApp's instructions and ensures security of the DApp.
This is actually where our `Reach` code will live.

Let's start working in `index.rsh`. // JP: NEED TO CREATE INDEX.MJS AND INDEX.RSH

3. In the `index.rsh` file, define the `language` and `version`.

```reach
"reach 0.1"; // JP: SHOULD BE SINGLE QUOTE. LOOK AT OTHER PROGRAMS
```

This helps `Reach` to decide how to compile or run the DApp.
Without it, you will get an error from the editor.

4. Next we need to declare a couple of variables and constants. // JP: ONLY CREATING CONSTANTS. VARS CAN ONLY BE USED BEFORE A WHILE LOOP.

> Since `Reach` is a strongly typed language, we must explicitly declare our variables at the backend even if we will be using them at the frontend. // JP: NOT EVEN IF; THE BACKEND MIRRORS THE FRONTEND

The following are the variables and constants:

// JP: PRESENT THE CODE FIRST AND THEN EXPLAIN; IT IS CONFUSING TO SHOW THIS LONG LIST OF SEEMINGLY UNRELATED CONSTANTS. PRESENT THE CODE AND THEN EXPLAIN. REVIEW RPS TUT FOR AN EXAMPLE.

- `choice`: This will hold an `integer` that will represent the product the buyer decides to choose.
  An integer is represented by `UInt`. So add the following line of code:

```
const choice = UInt;
```

- `quantity`: This will hold an `integer` that will represent the quantity of the product that the buyer chose.

```
const quantity = UInt;
```

- `announcement`: This will hold a `string` that will represent a short advertisement to the buyer. A string is represented by `Bytes(28)`.
  The integer (28) in braces defines how long the string can be.

```
const announcement = Bytes(28);
```

- `product`: This will hold an `Object` that will contain the properties (i.e. key-value pair) of each product that the `seller` has in stock for sale.

```
const product = Object({
  name: Bytes(10),
  unit: Bytes(6),
  units: Bytes(8),
  price: UInt,
});
```

- `products`: This will hold an `array` of `product`. We define it as:

```
const products = Array(product, 3);
```

- `commonInteract`: This will hold properties that are common to the `seller` and `buyer`.

One common property is:

a. `showResult`: This will be `function` that takes an `Object`s and returns nothing.
A `function` in Reach is defined as `Fun([input], output)`.
So we have the following code:

```
const commonInteract = {
  showResult: Fun(
    [
      Object({ choice, quantity }),
      Object({
        announcement,
        products,
      }),
    ],
    Null
  ),
};
```

- `sellerInteract`: This will hold all properties concerning the `seller`. It includes:

a. `sellerInfo`: This is an `Object` contaning the `announcement` and `products` that we defined earlier.

b. `reportReady`: This is a `function` that takes in the `announcement` and `products` and returns nothing.

So we have:

```
const sellerInteract = {
  sellerInfo: Object({
    announcement,
    products,
  }),
  reportReady: Fun([announcement, products], Null),
};
```

- `buyerInteract`: This will hold all properties concerning the `buyer`. It includes:

a. `shop`: This is a `function` that represents the buyer's process in looking through the `seller`'s `products` and making a decision as to which one to pick and how many is needed.

The `function` takes in an `Object` of the `seller`'s `announcement` and `products`. It then returns an `Object` of the `buyer`'s `choice` and `quantity` like so:

```
const buyerInteract = {
  shop: Fun([Object({ announcement, products })], Object({ choice, quantity })),
};
```

// JP: RATHER THAN ASK QUESTIONS HERE, UNLESS IT'S IN THE FORM OF A QUIZ, EXPLAIN WHY THE READER WANTS TO USE STRONG SECURITY. WHY IS THAT IMPORTANT IN WEB3?

> I know that feels like a lot of work especially if you are coming from a language like JavaScript that is weakly typed.

> But think about this: Will you rather use an application with strong or weak security?... I am sure you get the point. So, let's proceed...

5. Let's now start building our `Reach` app by declaring the following function:

```
const main = Reach.App(() => {
 // code goes here
});
```

// JP: AVOID "LET'S" FOR FUTURE TRANSLATIONS. SIMPLE STATE WHAT THEY SHOULD DO... `export`...

6. To ensure that this `main` Reach App will be available for use in other files in this project, let's `export` it by adding `export` before the `const`:

```
export const main = Reach.App(() => {
 // code goes here
});
```

7. For any transaction to place, there must be at least 2 participants.
   So we will begin the code in the `main` Reach function above by defining 2 participants. Add the following code in the function:

```
const Seller = Participant("Seller", {
    ...commonInteract,
    ...sellerInteract,
});
```

// VSCODE HAS A SPELLCHECK EXTENSION. I SUGGEST DOWNLOADING IT. VERY HELPFUL :)

In the code above, we are telling `Reach` to recongnize `Seller` as a participant in this transaction.
We also go ahead to tell `Reach` that the `Seller` will have access to the `commonInteract` and `sellerInteract` properties.

8. Add the following code for the second participant (`Buyer`).

```
  const Buyer = Participant("Buyer", {
    ...commonInteract,
    ...buyerInteract,
  });
```

9. Now that we have participants in our application, let's tell `Reach` that we are all set and ready to start our application.
   Enter the following code:

```
init();
```

Yes. That's all you need to get started.
Now our `index.rsh` file looks like this:

```
'reach 0.1';

const choice = UInt;
const quantity = UInt;
const announcement = Bytes(28);
const product = Object({
  name: Bytes(10),
  unit: Bytes(6),
  units: Bytes(8),
  price: UInt,
});
const products = Array(product, 3);
const commonInteract = {
  showResult: Fun(
    [
      Object({ choice, quantity }),
      Object({
        announcement,
        products,
      }),
    ],
    Null
  ),
};
const sellerInteract = {
  sellerInfo: Object({
    announcement,
    products,
  }),
  reportReady: Fun([announcement, products], Null),
};
const buyerInteract = {
  shop: Fun([Object({ announcement, products })], Object({ choice, quantity })),
};

export const main = Reach.App(() => {
  const Seller = Participant('Seller', {
    ...commonInteract,
    ...sellerInteract,
  });
  const Buyer = Participant('Buyer', {
    ...commonInteract,
    ...buyerInteract,
  });
  init();
});
```

That is looking good. So far, we have started our program on a beautiful note but there is still no output if we do a `./reach run` in the terminal.
This is because there is nothing in the frontend to interact with yet.

// JP: LINK TO THE FULL CODE AROUND HERE ^^

So let's turn our attention to our `index.mjs` file.

// JP: PRESENT THE CODE

10. We begin by importing a few necessary things:

- `loadStdlib`: This the `Reach` standard library. It contains certain in-built functions provided for us by `Reach`. Enter the following code:

```
import { loadStdlib } from "@reach-sh/stdlib";
```

- `index.main.mjs`: This is a file that is generated when during `build` time.
  It contains certain important information about our application.
  You really don't have to bother with what is inside.

```
import * as backend from "./build/index.main.mjs";
```

11. Initialize the standard library that we imported a while ago: // JP: WHERE WAS AWHILE AGO? BE SPECIFIC.

```
const stdlib = loadStdlib();
```

12. Set up an amount that we will used as the starting balance for each participant. To do that, we enter the following code:

```
const startingBalance = stdlib.parseCurrency(100);
```

// JP: AVOID US FOR THE SAME REASONS AS LET'S

`parseCurrency` is one of those functions provided for us by `Reach`.
It helps us convert any number we enter into a currency that is acceptable on a DApp.

13. Next we will now set up an account for each participant and fund the account with the `startingBalance`.
    It will be for test purposes. Enter the following code:

```
const SellerBalance = await stdlib.newTestAccount(startingBalance);
const BuyerBalance = await stdlib.newTestAccount(startingBalance);
```

14. We now want to define the constants and variable we declared earlier in the `index.rsh` file:

- `sellerInteract`:

a. Enter the following code:

```
const sellerInteract = {

}
```

This `sellerInteract` function will house two properties for the `Seller` (i.e. `sellerInfo` and `reportReady`)

b. For the `sellerInfo` enter the following code:

```
  sellerInfo: {
    announcement: "List of products for sale:",
    products: [
      { name: "Potatoes", unit: "bag", units: "bags", price: "10" },
      { name: "Carrots", unit: "bunch", units: "bunches", price: "10" },
      { name: "Corn", unit: "ear", units: "ears", price: "5" },
    ],
  },
```

In the code above:

i. `announcement` is a string that calls out to the public.

ii. `products` is an `Array` of `Object`s.
It is a list of items that the `Seller` for sale with their properties.

b. For the `reportReady`, enter the following code:

```
  reportReady: async (announcement, products) => {
    console.log(`Welcome to the Market`);
    console.log(
      `Contract info: ${JSON.stringify(
        await SellerContract.getInfo(announcement, products)
      )}`
    );
  },
```

In the code above,

i. We are first logging to the console a welcome message saying: `"Welcome to the Market"`

ii. We get the contract information which is an `Object` but we log it to the console as a JSON string.
You can see this as the seller's unique identifier or office address.

The `sellerInteract` now looks like this:

```
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
```

So `sellerInteract` output would look like:

```
Welcome to the Market
Contract info: {"type":"BigNumber","hex":"0x06"}
```

- `buyerInteract`:

a. Enter the following code:

```
const buyerInteract = {

}
```

This `buyerInteract` function will house the properties for the `Buyer` (i.e. `shop`).

This will mimic what happens when you go to an ecommerce website to buy something.
You first look around, pick a product, adjust the quantity and then checkout.

To build out the `shop` function, follow the next steps:

i. Enter the following code as the `shop` function skeleton:

```
shop: async (sellerInfo) => {

}
```

It takes `sellerInfo` which was made public by the `Seller ` initially.

ii. In the `shop` function, enter the following code:

```
    console.log(sellerInfo.announcement);
```

This logs the `Seller`'s announcement made public initially

iii. Next, enter the following code

```
    sellerInfo.products.forEach((product, index) => {
      console.log(
        `${index + 1}. ${product.name} at ${product.price} per ${product.unit}.`
      );
    });
```

This loops through the `Seller`'s products and list it out for the `Buyer` to see.

iv. The `Buyer` now makes a `choice`. What we do is that we just get a random number not more than `4` using the following code:

```
    const choice = Math.floor(Math.random() * 3);
```

This number stored as `choice` now represent the position of an item in the `products` array.
So if the `choice` is `2`, then the `product` choosen will be `{ name: "Corn", unit: "ear", units: "ears", price: "5" }`

v. Next the `Buyer` says the `quantity` of that `product` he or she wants with the following code:

```
    const quantity = Math.floor(Math.random() * 99);
```

This is also a random number that is not more than 100.

vi. We now display in the console the `name` of the product that the `Buyer` wants using the following code:

```
    console.log(`Buyer wants ${sellerInfo.products[choice].name}`);
```

vii. Finally, return the `decision` (i.e. the `choice` and `quantity`). Enter the following code:

```
    return { choice, quantity };
```

The `buyerInteract` now looks like this:

```
const buyerInteract = {
  shop: async (sellerInfo) => {
    console.log(sellerInfo.announcement);
    sellerInfo.products.forEach((product, index) => {
      console.log(
        `${index + 1}. ${product.name} at ${product.price} per ${product.unit}.`
      );
    });

    const choice = Math.floor(Math.random() * 3);
    const quantity = Math.floor(Math.random() * 99);
    console.log(`Buyer wants ${sellerInfo.products[choice].name}`);

    return { choice, quantity };
  },
};
```

So `buyerInteract` output would look like:

```
List of products for sale:
1. Potatoes at 10 per bag.
2. Carrots at 10 per bunch.
3. Corn at 5 per ear.
Buyer wants Carrots
```

- `commonInteract`
  a. Enter the following code:

```
const commonInteract = (person) => ({

});
```

This means that `commonInteract` takes an argument (i.e. the participant)

b. Inside that function, we will now define the `showResult` function that we declared.

The `showResult` function is meant to take the `decision` made by the `Buyer` and the `sellerInfo` made known by the `Seller`.
It then logs to the console the details of the `product` that the `Buyer` has decided to purchase.
It also logs to the console the details of the same `product` as the `product` that the `Seller` has decided to sell.

We will start by creating the skeleton of the function with the following code:

```
  showResult: (decision, sellerInfo) => {

  },
```

c. In the `showResult` enter the following code:

```
    console.log(
      `${person} agrees to ${person === "Seller" ? "sell" : "buy"} ${
        decision.quantity
      } ${
        decision.quantity > 1
          ? sellerInfo.products[decision.choice].units
          : sellerInfo.products[decision.choice].unit
      } of ${sellerInfo.products[decision.choice].name}`
    );
```

In the code above,

i. `${person}` is either `Seller` or `Buyer` depending on what is passed to the `commonInteract` function.

ii. `${person === "Seller" ? "sell" : "buy"}` means if the `${person}` is `Seller`, log `sell` to the console else log `buy` to the console.

iii. `${decision.quantity}` is the `quantity` that the `Buyer` wants out of the original quantity the `Seller` displayed.

iv. `${decision.quantity > 1 ? sellerInfo.products[decision.choice].units : sellerInfo.products[decision.choice].unit}` is either the `unit` or `units` of the product the `Buyer` chose. This is dependent on the `quantity` that the `Buyer` wants.

v. `${sellerInfo.products[decision.choice].name}` is the name of the product that the buyer chose.

Our `commonInteract` now looks like this:

```
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
```

So `commonInteract` output would look like:

```
Buyer agrees to buy 92 bunches of Carrots
Seller agrees to sell 92 bunches of Carrots
```


15. The time has arrived for us to use all that we have defined in `14`. We will use `Promise.all`. 

a. Enter the following code to begin:

```
await Promise.all([

]);
```

b. In the `Promise.all`, enter the following code:

```
  SellerContract.p.Seller({
    ...commonInteract("Seller"),
    ...sellerInteract,
  }),
```

We are saying that we are executing the `Seller`'s contract on the participant (i.e. `Seller`). 
And we are saying that we want this participant to have access to `commonInteract` and `sellerInteract` properties. 

c. Finally, do the same for the `Buyer`. Add the following code next:

```
  BuyerContract.p.Buyer({
    ...commonInteract("Buyer"),
    ...buyerInteract,
  }),
```

So `Promise.all` code would look like:

```
await Promise.all([
  SellerContract.p.Seller({
    ...commonInteract("Seller"),
    ...sellerInteract,
  }),
  BuyerContract.p.Buyer({
    ...commonInteract("Buyer"),
    ...buyerInteract,
  }),
]);
```

See the final code for the `index.mjs` file [here]().

At this juncture, we are almost done. 
All we need to do now is to connect our frontend (`index.mjs`) and backend (`index.rsh`). 
To do that, we will have to go back to the our backend.

16. Now in our `index.rsh` file, inside the `main` function, just below our `init();` line, take the following steps:

i. Enter the following code:

```
  Seller.only(() => {
    const sellerInfo = declassify(interact.sellerInfo);
  });
```
This is called a `local step`. 
A local step in the `Reach Language` is an action that happens on the participant machine. This step is used to execute codes that are only accessible to a particular participant.

In the code above, we are asking the `Seller` to `interact` with the `sellerInfo` object and do whatsoever that code is supposed to do. 
We are doing this in the local step because the `sellerInfo` is only accessible to the `Seller`.

After the interaction is done, we need to tell the program that we are now willing to share whatsoever the result of that interaction is with the public. To do this, we use the `declassify()` method.

ii. Since the `sellerInfo` has been declassified, we will now publicize it with the following code:

```
  Seller.publish(sellerInfo);
```

iii. Now we will also interact with the `Seller`'s `reportReady` function. Use the following code:

```
  Seller.interact.reportReady(sellerInfo.announcement, sellerInfo.products);
```
Remember that the `reportReady` takes in two arguments (i.e. announcement and products)

iv. Finally conclude the `Seller`'s step with the following code

```
  commit();
```

> Fun Fact: If you do a `./reach run` in the terminal, you will see some result

v. We will do the same for the `Buyer`. Enter the following code:

```
  Buyer.only(() => {
    const decision = declassify(interact.shop(sellerInfo));
  });
```

In the code above, the backend is asking the `Buyer` to interact with the `shop` function and give the program the permission to publisize the result.

vi. Now we publisize it with the following code:

```
  Buyer.publish(decision);
```

vii. Finally, we conclude the `Buyer`'s steps by commiting like so:

```
  commit();
```

// JP: ALREADY SAID THIS

> Fun Fact: If you do a `./reach run` in the terminal, you will see some more result.

viii. Every transaction must have an outcome. So the following code concludes our program:

```
  each([Seller, Buyer], () => interact.showResult(decision, sellerInfo));
```

In the code above, we are telling our program to execute `showResult` function on both participants.

// JP: STRONGER CONCLUSION TO THIS SECTION. THEN INTRO THE NEXT SECTION.
// WHAT DID WE LEARN HERE? DID I LEARN MY OBJECTIVES FROM THE TOP?