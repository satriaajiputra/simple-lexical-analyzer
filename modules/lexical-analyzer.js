import keywordsAndOperators from "./keywords-operators.js";
import TypeIdentifier from "./type-identifier.js";
import Lexeme from "./lexeme.js";

class LexicalAnalyzer {
  /**
   * Digunakan untuk menganalisa setiap baris dan
   * mengumpulkan setiap token yang teridentifikasi
   * @param {Array} lines
   * @param {Array}
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
   * Digunakan untuk menganalisa satu baris
   * dan mengubahnya menjadi berbagai jenis token
   * @param {String} line
   * @return {Object}
   */
  analyzeLine(line) {
    let lineTokens = {};

    const typeIdentifier = new TypeIdentifier();

    for (const str of line.split(" ")) {
      const keywordAndOperator = keywordsAndOperators[str.toLocaleLowerCase()];

      if (typeof keywordAndOperator != "undefined") {
        lineTokens[str] = keywordAndOperator;
      } else {
        lineTokens[str] = typeIdentifier.evaluate(str);
      }
    }

    return lineTokens;
  }
}

export default LexicalAnalyzer;
