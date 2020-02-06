Object.prototype.objectKeys = function (obj) {
  let arr = [];
  for(let key in obj){
    arr.push(key);
  }
  return arr;
}