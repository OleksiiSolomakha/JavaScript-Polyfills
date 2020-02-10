Array.prototype.arrayReduce = function (callback, start) {
  let result = start;
  for(let i = 0; i < this.length; i++){
    if(result !== undefined){
      result = callback.call(undefined, result, this[i], i);
    } else {
      result = this[i];
    }
  }
  return result;
}