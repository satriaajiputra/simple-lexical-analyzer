import state from "./state.js";
import token from "./token.js";

class TypeIdentifier {
  _token = {};

  constructor() {
    this._token[state.Q1] = token.IDENTIFIER;
    this._token[state.Q3] = token.STRING;
    this._token[state.Q4] = token.INTEGER;
    this._token[state.Q7] = token.FLOAT;
  }

  _executeTransition(currentState, entry) {
    switch (currentState) {
      case state.INITIAL:
        if ((entry >= "A" && entry <= "Z") || (entry >= "a" && entry <= "z"))
          return state.Q1;
        else if (entry == '"') return state.Q2;
        else if (entry >= "0" && entry <= "9") return state.Q4;
        else if (entry == "+" || entry == "-") return state.Q5;
        else return state.INVALIDATION_STATE;
      case state.Q1:
        return (entry >= "A" && entry <= "Z") ||
          (entry >= "a" && entry <= "z") ||
          (entry >= "0" && entry <= "9")
          ? state.Q1
          : state.INVALIDATION_STATE;
      case state.Q2:
        return entry == '"' ? state.Q3 : state.Q2;
      case state.Q4:
        if (entry == ".") return state.Q6;
        else if (entry >= "0" && entry <= "9") return state.Q4;
        else return state.INVALIDATION_STATE;
      case state.Q5:
        return entry >= "0" && entry <= "9"
          ? state.Q4
          : state.INVALIDATION_STATE;
      case state.Q7:
        return entry >= "0" && entry <= "9"
          ? state.Q7
          : state.INVALIDATION_STATE;
      default:
        return state.INVALIDATION_STATE;
    }
  }

  evaluate(str) {
    let mState = state.INITIAL;
    for (const text of str.split("")) {
      mState = this._executeTransition(mState, text);
    }
    return this._token[mState] || token.INVALID;
  }
}

export default TypeIdentifier;
