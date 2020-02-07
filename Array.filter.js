Array.prototype.arrayFilter = function(callback) {
  let arr = [];
  for(let i = 0; i < this.length; i++){
    callback(this[i]) ? arr[arr.length] = this[i] : null;
  }
  return arr;
}