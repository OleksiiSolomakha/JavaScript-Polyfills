Function.prototype.bindMethod = function(context){
  let thisArg = this;
  let args = Array.prototype.slice.call(arguments, 1);
  return function(){
    return thisArg.apply(context, args.concat(Array.prototype.slice.call(arguments)));
  }
}

// Function.prototype.bindMethod = function(context, ...args){
//   let thisArg = this;
//   return function(){
//     return thisArg.apply(context, args.concat(...arguments));
//   }
// }