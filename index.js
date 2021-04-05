const readline = require("readline");
const analyzer = require("./lexer.js");

const getInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

getInput.question("Input your code snippets ", function saveInput(codeSnippets) {
  const setOutput = new analyzer (codeSnippets);
  console.log(setOutput);
  getInput.close();
});

getInput.on("close", function saveInput() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});