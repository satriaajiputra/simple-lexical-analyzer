import token from "./token.js";

const keywordsAndOperators = {
  for: token.KEYWORD,
  while: token.KEYWORD,
  if: token.KEYWORD,
  else: token.KEYWORD,
  function: token.KEYWORD,
  return: token.KEYWORD,
  print: token.KEYWORD,
  "+": token.OPERATOR_PLUS,
  "*": token.OPERATOR_TIMES,
  "/": token.OPERATOR_DIVIDE,
  "-": token.OPERATOR_MINUS,
  ">": token.GREATER_THAN,
  "<": token.LOWER_THAN,
  ">=": token.GREATER_OR_EQUALS,
  "<=": token.LOWER_OR_EQUALS,
  "=": token.EQUAL,
  ":=": token.ASSIGNMENT_OPERATOR,
  "{": token.LEFT_BRACE,
  "}": token.RIGHT_BRACE,
  "(": token.LEFT_PARENTHESIS,
  ")": token.RIGHT_PARENTHESIS,
  ";": token.SEMICOLON,
  ",": token.COMMA,
};

Object.freeze(keywordsAndOperators);

export default keywordsAndOperators;
