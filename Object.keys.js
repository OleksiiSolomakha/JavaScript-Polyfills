function objectKeys(obj) {
  let arr = [];
  for(let key in obj){
    arr.push(key);
  }
  return arr;
}