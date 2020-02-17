Promise.All = function (promises) {
  let promiseAll = new Promise((resolve, reject) => {
    const resultArray = [];
    let status = function () { 
      if(!(--promises.length)) {
        resolve(resultArray); 
      }
    }
    promises.forEach((el, i) => {
      el.then(result => resultArray[i] = result, reject).then(status);
    });
  });
  return promiseAll;
}