import keywordsAndOperators from "./keywords-operators.js";
import TypeIdentifier from "./type-identifier.js";
import Lexeme from "./lexeme.js";

class LexicalAnalyzer {
  /**
   *
   * @param {Array} lines
   */
  analyzeCode(lines) {
    let lexemes = [];
    for (const numLine in lines) {
      let lexLine = this.analyzeLine(lines[numLine].trim());

      for (const str in lexLine) {
        lexemes.push(new Lexeme(lexLine[str], str, numLine));
      }
    }

    return lexemes;
  }

  /**
   *
   * @param {String} line
   */
  analyzeLine(line) {
    let lineTokens = {};

    const typeIdentifier = new TypeIdentifier();

    for (const str of line.split(" ")) {
      const keywordAndOperator = keywordsAndOperators[str.toLocaleLowerCase()];

      if (typeof keywordAndOperator != "undefined") {
        // lineTokens.set(str, keywordAndOperator);
        lineTokens[str] = keywordAndOperator;
      } else {
        // lineTokens.set(str, typeIdentifier.evaluate(str));
        lineTokens[str] = typeIdentifier.evaluate(str);
      }
    }

    return lineTokens;
  }
}

export default LexicalAnalyzer;
