module.exports = function check(str, bracketsConfig) {
  let a = 0
  let res = bracketsConfig.map(function (item) {
    return item.join('');
  });
  
  for (let i=0; a < res.length; i++) {
    if (str.includes(res[a])) {
      str = str.replace(res[a], '');
      a = 0;
    } else {
      a++;
    }
  }

  if(str){
    return false;
  }
  else{
    return true;
  }  
}
