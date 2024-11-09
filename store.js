
// Action types
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const RESET = 'RESET';

/**
 * A Redux-inspired Store class to manage state for the Tally App.
 * Implements methods to get state, dispatch actions, and subscribe to state changes.
 */
class Store {
  /**
   * Creates a new store instance.
   * @param {Function} reducer - A function that defines how the state is updated based on actions.
   * @param {Object} initialState - The initial state of the store.
   */
  constructor(reducer, initialState) {
    this.reducer = reducer;
    this.state = initialState;
    this.listeners = [];
  }

  /**
   * Returns the current state of the store.
   * @returns {Object} The current state object.
   */
  getState() {
    return this.state;
  }

  /**
   * Dispatches an action to update the state.
   * Uses the reducer to determine the new state based on the action type.
   * @param {Object} action - An action object with a type property.
   */
  dispatch(action) {
    this.state = this.reducer(this.state, action);
    this.notify();
  }

  /**
   * Registers a new listener function that will be called whenever the state changes.
   * @param {Function} listener - A callback function to be executed on state updates.
   */
  subscribe(listener) {
    this.listeners.push(listener);
  }

  /**
   * Notifies all registered listeners of a state change.
   * Calls each subscribed listener function with the current state.
   */
  notify() {
    this.listeners.forEach(listener => listener(this.state));
  }
}

/**
 * Reducer function to manage state transitions for the tally counter.
 * Updates the state based on the action type (ADD, SUBTRACT, RESET).
 * @param {Object} state - The current state object.
 * @param {Object} action - The action object with a type property to dictate state changes.
 * @returns {Object} The updated state object.
 */
function tallyReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case ADD:
      return { count: state.count + 1 };
    case SUBTRACT:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
}

// Initialize the store
const store = new Store(tallyReducer, { count: 0 });

// Subscribe to state changes to log the new state
store.subscribe((state) => console.log("New state:", state));

// Initial State Verification
// Scenario 1: Verify initial state
console.log("Initial state:", store.getState());

// Scenario 2: Increment the Counter
store.dispatch({ type: ADD });
store.dispatch({ type: ADD });

// Scenario 3: Decrement the Counter
store.dispatch({ type: SUBTRACT });

// Scenario 4: Reset the Counter
store.dispatch({ type: RESET });
