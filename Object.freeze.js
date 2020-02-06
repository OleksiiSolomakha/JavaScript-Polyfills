Object.prototype.objectFreeze = function (obj) {
  let freezedObj = {};
  for(let key in obj){
    freezedObj = Object.defineProperty(obj, key, {writable: false, configurable: false});
  }
  return freezedObj;
}

