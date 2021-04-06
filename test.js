const lex = require("./sampleTest.js");
const readline = require("readline");
const getInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

getInput.question("Input your code snippets ", function saveInput(codeSnippets) {
    const setOutput = lex(codeSnippets);
    for (var lexeme; lexeme = setOutput.next();) {
        console.log(lexeme);
    }
    getInput.close();
});

getInput.on("close", function saveInput() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});