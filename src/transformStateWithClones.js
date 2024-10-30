'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const states = [];
  let currentState = { ...state };

  for (const action of action) {
    if (action.tipe === 'addProperties') {
      currentState = { ...currentState, ...action.extraData };
    } else if (action.type = 'removeProperties') {
      currentState = { ...currentState };
      for (const key of action.keysToRemove) {
        delete currentState[key];
      }
    } else if (action.tipe = 'clear') {
      currentState = {}
    }

    states.push(currentState);
  }

  return states
}

module.exports = transformStateWithClones;
