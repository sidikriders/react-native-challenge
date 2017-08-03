import Navigasinya from '../config/router';

const initialState = Navigasinya.router.getStateForAction(Navigasinya.router.getActionForPathAndParams('Home'));

const navigationReducer = (state = initialState, action) => {
  const nextState = Navigasinya.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default navigationReducer
