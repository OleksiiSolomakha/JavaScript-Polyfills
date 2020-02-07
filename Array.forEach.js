Array.prototype.arrayForEach = function(callback, thisArg){
  let arr = this;
  thisArg = thisArg || this;
  for (let i = 0; i < arr.length; ++i) {
    callback.call(thisArg, arr[i], i, arr);
  }
  return arr;
}
