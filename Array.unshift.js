Array.prototype.arrayUnshift = function () {
  Array.prototype.splice.call( arguments, 0, 0, 0, 0 );
  Array.prototype.splice.apply( this, arguments );
  
  return this.length;
}