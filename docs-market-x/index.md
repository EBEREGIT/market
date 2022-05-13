# Market Day

## Introduction

In this tutorial, I am going to walk you through creating a safe application that ensures trust in transacting businesses between individuals.

For the purpose of this tutorial, we will use a `seller` and a `buyer`. And we will be using [Reach](https://reach.sh/).

The following image is a pictorial description of how the application will work at the end of this tutorial.

> **Insert Image Describing the flow of transactions**

We will go from building a basic DApp to a more advanced one.
By the end, you will have learnt about the Reach standard library, Participants, Reach Types, variable declaration and definition, steps and so on

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

Start working in `index.rsh`. // JP: NEED TO CREATE INDEX.MJS AND INDEX.RSH

3. In the `index.rsh` file, define the `language` and `version`.

```reach
'reach 0.1'
```

This helps `Reach` to decide how to compile or run the DApp.
Without it, you will get an error from the editor.

4. Next we need to declare a couple of constants. 

> Since `Reach` is a strongly typed language, we must explicitly declare our variables at the backend before using them at the frontend. 

Enter the following code:

```reach
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
```

- `choice`: This will hold an `integer` that will represent the product the buyer decides to choose.
  An integer is represented by `UInt`. So add the following line of code:

- `quantity`: This will hold an `integer` that will represent the quantity of the product that the buyer chose.

- `announcement`: This will hold a `string` that will represent a short advertisement to the buyer. A string is represented by `Bytes(28)`.
  The integer (28) in braces defines how long the string can be.

- `product`: This will hold an `Object` that will contain the properties (i.e. key-value pair) of each product that the `seller` has in stock for sale.

- `products`: This will hold an `array` of `product`. We define it as:

- `commonInteract`: This will hold properties that are common to the `seller` and `buyer`.

One common property is:

a. `showResult`: This will be `function` that takes an `Object`s and returns nothing.
A `function` in Reach is defined as `Fun([input], output)`.

- `sellerInteract`: This will hold all properties concerning the `seller`. It includes:

a. `sellerInfo`: This is an `Object` containing the `announcement` and `products` that we defined earlier.

b. `reportReady`: This is a `function` that takes in the `announcement` and `products` and returns nothing.

- `buyerInteract`: This will hold all properties concerning the `buyer`. It includes:

a. `shop`: This is a `function` that represents the buyer's process in looking through the `seller`'s `products` and making a decision as to which one to pick and how many is needed.

The `function` takes in an `Object` of the `seller`'s `announcement` and `products`. It then returns an `Object` of the `buyer`'s `choice` and `quantity`.

> I know that feels like a lot of work especially if you are coming from a language like JavaScript that is weakly typed.

> But we will rather use an application with strong security than one with a weak security especially when it has to do with money and trust.

5. It is time to start building the `Reach` app by declaring the following function:

```
const main = Reach.App(() => {
 // code goes here
});
```

6. To ensure that this `main` Reach App will be available for use in other files in this project, `export` it by adding `export` before the `const`:

```
export const main = Reach.App(() => {
 // code goes here
});
```

7. For any transaction to take place, there must be at least 2 participants.
   So begin the code in the `main` Reach function above by defining 2 participants. 
   Add the following code in the function:

```
const Seller = Participant("Seller", {
    ...commonInteract,
    ...sellerInteract,
});
```

In the code above tells `Reach` to recognize `Seller` as a participant in this transaction.
It also goes ahead to tell `Reach` that the `Seller` will have access to the `commonInteract` and `sellerInteract` properties.

8. Add the following code for the second participant (`Buyer`).

```
  const Buyer = Participant("Buyer", {
    ...commonInteract,
    ...buyerInteract,
  });
```

9. Now that participants are setup, start the application.
   Enter the following code:

```
init();
```

Yes. That's all the application needs to get started.
Now the `index.rsh` file looks like this:

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

That is looking good. So far, the program has started on a beautiful note but there is still no output if we do a `./reach run` in the terminal.
This is because there is nothing in the frontend to interact with yet.

// JP: LINK TO THE FULL CODE AROUND HERE ^^

It's time to turn attention to our `index.mjs` file.

```reach
import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
```

10. We begin by importing a few necessary things:

- `loadStdlib`: This the `Reach` standard library. It contains certain in-built functions provided for us by `Reach`. 

- `index.main.mjs`: This is a file that is generated when during `build` time.
  It contains certain important information about our application.
  You really don't have to bother with what is inside.

```reach
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);

const SellerBalance = await stdlib.newTestAccount(startingBalance);
const BuyerBalance = await stdlib.newTestAccount(startingBalance);

const SellerContract = SellerBalance.contract(backend);
const BuyerContract = BuyerBalance.contract(backend, SellerContract.getInfo());
```

11. Initialize the standard library that we imported on line 1 of the `index.mjs` file. 

12. Set up an amount that will be used as the starting balance for each participant.

`parseCurrency` is one of those functions provided for us by `Reach`.
It helps us convert any number we enter into a currency that is acceptable on a DApp.

13. Set up an account for each participant and fund the account with the `startingBalance`.
It will be for test purposes. 

14. Define the constants that was declared earlier in the `index.rsh` file:

```reach
const sellerInteract = {
  sellerInfo: {
    announcement: 'List of products for sale:',
    products: [
      { name: 'Potatoes', unit: 'bag', units: 'bags', price: '10' },
      { name: 'Carrots', unit: 'bunch', units: 'bunches', price: '10' },
      { name: 'Corn', unit: 'ear', units: 'ears', price: '5' },
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

const commonInteract = (person) => ({
  showResult: (decision, sellerInfo) => {
    console.log(
      `${person} agrees to ${person === 'Seller' ? 'sell' : 'buy'} ${
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

- `sellerInteract`:

This function houses two properties for the `Seller` (i.e. `sellerInfo` and `reportReady`)

```reach
const sellerInteract = {
  sellerInfo: {
    announcement: 'List of products for sale:',
    products: [
      { name: 'Potatoes', unit: 'bag', units: 'bags', price: '10' },
      { name: 'Carrots', unit: 'bunch', units: 'bunches', price: '10' },
      { name: 'Corn', unit: 'ear', units: 'ears', price: '5' },
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

For the `sellerInfo`:

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

i. `announcement` is a string that calls out to the public.

ii. `products` is an `Array` of `Object`s.
It is a list of items that the `Seller` puts up for sale with their properties.

For the `reportReady`:

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

i. First log to the console a welcome message saying: `"Welcome to the Market"`

ii. Get the contract information which is an `Object` and log it to the console as a JSON string.
You can see this as the seller's unique identifier or office address.

The `sellerInteract` output would look like:

```
Welcome to the Market
Contract info: {"type":"BigNumber","hex":"0x06"}
```

- `buyerInteract`:

The `buyerInteract` function houses the properties for the `Buyer` (i.e. `shop`).

```reach
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

The code above mimics what happens when a person visits an e-commerce website to buy something.
The person first looks around, picks a product, adjust the quantity and then checkout.

To build out the `shop` function,

i. Define an empty function that takes `sellerInfo` as an argument.

ii. Log the `Seller`'s announcement to the console

iii. Loops through the `Seller`'s products and list it out for the `Buyer` to see in the console.

iv. The `Buyer` now makes a `choice`. 
What we do is that we just get a random number not more than `4`.

This number stored as `choice` now represent the position of an item in the `products` array.
So if the `choice` is `2`, 
then the `product` chosen will be `{ name: "Corn", unit: "ear", units: "ears", price: "5" }`

v. Next the `Buyer` picks the `quantity` of that `product` he or she wants.
This is also a random number that is not more than `100`.

vi. Display the `name` of the product that the `Buyer` wants in the console.

vii. Finally, return the `decision` (i.e. the `choice` and `quantity`).

The `buyerInteract` output would look like:

```
List of products for sale:
1. Potatoes at 10 per bag.
2. Carrots at 10 per bunch.
3. Corn at 5 per ear.
Buyer wants Carrots
```

- `commonInteract`

The `commonInteract` function houses the properties for both the `Seller` and `Buyer` (i.e. `showResult`).

```
const commonInteract = (person) => ({
  showResult: (decision, sellerInfo) => {
    console.log(
      `${person} agrees to ${person === 'Seller' ? 'sell' : 'buy'} ${
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

To achieve the code above, follow these steps:

Create a function named `commonInteract` that takes an argument: `person` (i.e. the participant)

Inside that function, we will now define the `showResult` function that we declared.

The `showResult` function is meant to take the `decision` made by the `Buyer` and the `sellerInfo` made known by the `Seller` as arguments.
It then logs to the console the details of the `product` that the `Buyer` has decided to purchase.
The same `product` is logged to the console as the `product` that the `Seller` has decided to sell.

Start by creating a function named `showResult`. It takes `decision` and `sellerInfo` as arguments

In the `showResult` function,

i. `${person}` is either `Seller` or `Buyer` depending on what is passed to the `commonInteract` function.

ii. `${person === "Seller" ? "sell" : "buy"}` means if the `${person}` is `Seller`, log `sell` to the console else log `buy` to the console.

iii. `${decision.quantity}` is the `quantity` that the `Buyer` wants out of the original quantity the `Seller` displayed.

iv. `${decision.quantity > 1 ? sellerInfo.products[decision.choice].units : sellerInfo.products[decision.choice].unit}` is either the `unit` or `units` of the product the `Buyer` chose. This is dependent on the `quantity` that the `Buyer` wants.

v. `${sellerInfo.products[decision.choice].name}` is the name of the product that the buyer chose.

The `commonInteract` output would look like:

```
Buyer agrees to buy 92 bunches of Carrots
Seller agrees to sell 92 bunches of Carrots
```

15. The time has arrived to use all that have been defined in `14`. `Promise.all` would be used. 

```reach
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

a. Start with the following

```
await Promise.all([

]);
```

b. In the `Promise.all`, first execute the `Seller`'s contract on the participant (i.e. `Seller`). 
And give the `Seller` access to `commonInteract` and `sellerInteract` properties. 

c. Finally, do the same for the `Buyer`. 
But this time around, give the `Buyer` access to `commonInteract` and `buyerInteract` properties. 

See the final code for the `index.mjs` file [here]().


At this juncture, the program is almost ready. 
All that needs to be done is to connect the frontend (`index.mjs`) to the backend (`index.rsh`). 
To do that, go back to the backend.

16. Now in the `index.rsh` file, inside the `main` function, just below the `init();` line, 
Enter the following code:

```
  Seller.only(() => {
    const sellerInfo = declassify(interact.sellerInfo);
  });
  Seller.publish(sellerInfo);
  Seller.interact.reportReady(sellerInfo.announcement, sellerInfo.products);
  commit();
```
i. This is called a `local step`. 
A local step in the `Reach Language` is an action that happens on the participant machine. This step is used to execute codes that are only accessible to a particular participant.

In the code above, the `Seller` `interact`s with the `sellerInfo` object and do whatsoever that code is supposed to do. 
This is done in the local step because the `sellerInfo` is only accessible to the `Seller`.

After the interaction is done, the program is then given the permission to share whatsoever the result of that interaction is with the public. To do this, `declassify()` method is used.

ii. Next, since the `sellerInfo` has been declassified, it now being publicized:

iii. interact with the `Seller`'s `reportReady` function now. 
Remember that the `reportReady` takes in two arguments (i.e. `announcement` and `products`)

iv. Finally conclude the `Seller`'s step with the `commit();`.

> Fun Fact: If you do a `./reach run` in the terminal, you will see some result


v. Do the same for the `Buyer`. Enter the following code:

```
  Buyer.only(() => {
    const decision = declassify(interact.shop(sellerInfo));
  });
  Buyer.publish(decision);
  commit();
```

In the code above, the backend is asking the `Buyer` to interact with the `shop` function and give the program the permission to publicize the result.

vi. It is then publicized

vii. Finally, we conclude the `Buyer`'s steps by `commit();`

viii. Every transaction must have an outcome. So the following code concludes our program:

```
  each([Seller, Buyer], () => interact.showResult(decision, sellerInfo));
```

In the code above, the program is instructed to execute `showResult` function on both participants.

Now do a `./reach run` in your terminal. The output you get should look like this:

```
Welcome to the Market
Contract info: {"type":"BigNumber","hex":"0x6d"}
List of products for sale:
1. Potatoes at 10 per bag.
2. Carrots at 10 per bunch.
3. Corn at 5 per ear.
Buyer wants Potatoes
Buyer agrees to buy 9 bags of Potatoes
Seller agrees to sell 9 bags of Potatoes
```

Walah!!! You made it.
You did awesomely.

### Conclusion
This was a good way to start building the market place application that we just embarked upon. I hope you found it really helpful and easy to follow through. 

This tutorial has been able to teach the basics of the `Reach` language. 
Concepts that was covered include, variable declaration and definition, 
the `Reach` standard library, Participant, Types, steps and so on.

Congratulations!!! You just became a `Reach developer`.

In the next section, there is more to learn about Reach to enhance the concepts that has been taught in this tutorial already.