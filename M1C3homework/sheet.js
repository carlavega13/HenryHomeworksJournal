function cacheFunction(cb) {
  let cache = {};
  return function (arg) {
    cache.hasOwnProperty(arg) ? cache[arg] : (cache[arg] = cb(arg));
    return cache[arg];
  };
}
let cb = function (num) {
  return num * num;
};

let unCache = cacheFunction(cb);
console.log(unCache(2));
console.log(unCache(3));
console.log(unCache(2));
