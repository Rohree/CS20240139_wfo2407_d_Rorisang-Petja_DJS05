# Redux-Inspired Tally App Store

## Overview
This project implements a minimalistic Redux-inspired store for managing the state of a simple Tally App. The store features core functionalities such as incrementing, decrementing, and resetting a counter, logging state changes to the console to demonstrate state management.

## How to Run the Code
1. Ensure you have Node.js installed.
2. Save the `store.js` file.
3. Run the file using the command:
   ```bash
   node store.js


## Approach

* **State Management**: Built a Redux-like store with `getState`, `dispatch`, and `subscribe` methods.
* **Observer Pattern**: Used an observer pattern, where functions can subscribe to state changes and react accordingly.
* **Reducer Logic**: Defined a reducer to handle specific actions and update the counter state.

## Challenges

* **Functional Structure**: Translating Redux principles into a standalone class-based approach took time but highlighted how state management functions independently of UI.
* **State Change Notifications**: Ensuring all subscribed functions received notifications on every state change was critical for accurate console logging.
