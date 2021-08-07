import token from "./token.js";
import { getKeyByValue } from "./utils.js";

// merupakan model untuk setiap leksem (leksem adalah satuan terkecil dari leksikom)
class Lexeme {
  _token = [];
  _value = [];
  _line = [];

  constructor(token, value, line) {
    this.setToken(token);
    this.setValue(value);
    this.setLine(line);
  }

  setToken(token) {
    this._token.push(token);
  }

  getToken() {
    console.log(this._token, this._value);
    return getKeyByValue(token, this._token);
  }

  setValue(value) {
    this._value.push(value);
  }

  getValue() {
    return this._value;
  }

  setLine(line) {
    this._line.push(line);
  }

  getLine() {
    return this._line;
  }
}

export default Lexeme;
