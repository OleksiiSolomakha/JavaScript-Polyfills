Object.prototype.objectCreate = function (obj, props = null) {
  function Create() {};
  Create.prototype = obj;
  const newObject  = new Create();
  if (typeof(props) === "object") {
    for (prop in props) {
     if (props.hasOwnProperty((prop))) {
      newObject[prop] = props[prop].value;
     }
    }
   }
  return newObject;
}