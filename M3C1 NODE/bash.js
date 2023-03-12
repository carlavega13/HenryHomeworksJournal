const process = require("process");
const { Z_ASCII } = require("zlib");
const commands = require("./commands/index.js");

const print = (output) => {
  process.stdout.write(output);
  process.stdout.write(`\nprompt > `);
};
function bash() {
  process.stdout.write("prompt > ");
  process.stdin.on("data", (data) => {
    let args = data.toString().trim();

    let cmd = args.split(" ")[0];
    commands[cmd]
      ? commands[cmd](print, args)
      : print(`command not found: ${cmd}`);
  });
}

bash();
module.exports = {
  print,
  bash,
};
