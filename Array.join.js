Array.prototype.arrayJoin = function(el = ''){
  let str = '';
  for(let i = 0; i < this.length; i++){
    str += `${this[i]+el}`;
  }
  return el === '' ? str : str.substr(0, str.length - 1);
}