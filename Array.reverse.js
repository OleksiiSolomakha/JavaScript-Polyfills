Array.prototype.arrayReverse = function(){
  let arr = [];
  for(let i = this.length - 1; i >= 0; i--){
    arr[arr.length] = this[i];
  }
  return arr;
}
