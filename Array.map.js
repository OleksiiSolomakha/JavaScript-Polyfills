Array.prototype.arrayMap = function (callback) {
  let arr = [];
  for(let i = 0; i < this.length; i++){
    arr[arr.length] = callback(this[i]);
  }
  return arr;
}