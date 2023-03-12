const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");
const { threadId } = require("worker_threads");

function pwd(print) {
  print(process.cwd());
}

function date(print) {
  print(Date());
}

function echo(print, args) {
  print(args);
}

function ls(print) {
  fs.readdir(".", (err, data) => {
    if (err) {
      throw err;
    }
    print(data.join(" "));
  });
}

function cat(print, args) {
  fs.readFile(args, "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    print(data);
  });
}

function head(print, args) {
  fs.readFile(args, "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    print(data.split("\n").splice(0, 1).join("\n"));
  });
}

function tail(print, args) {
  fs.readFile(args, "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    print(data.split("\n").pop().trim());
  });
}

function curl(print, args) {
  utils.request(args, (err, response) => {
    if (err) {
      throw err;
    }
    print(response);
  });
}

module.exports = {
  pwd,
  date,
  echo,
  ls,
  cat,
  head,
  tail,
  curl,
};
