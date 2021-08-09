import LexicalAnalyzer from "./lexical-analyzer.js";

class Main {
  tokensTable = [];

  constructor(fieldSourceCode) {
    this.fieldSourceCode = fieldSourceCode;
  }

  analyze() {
    let lines = this.fieldSourceCode.value.split("\n");
    let code = {};
    let lock = true; // to ignore multiple line comments

    for (const i in lines) {
      let line = lines[i];
      if (
        !line.trim().startsWith("//") &&
        lock &&
        !line.trim().startsWith("/*") &&
        line.trim().length > 0
      ) {
        code[parseInt(i) + 1] = line;
      }

      if (line.trim().startsWith("/*")) {
        lock = false;
      }

      if (line.trim().endsWith("*/")) {
        lock = true;
      }
    }
    let lexemes = new LexicalAnalyzer().analyzeCode(code);

    this.tokensTable = lexemes;
  }
}

window.MainSystem = Main;
