const truncate = function (str, n){
  return (str.length > n) ? str.substr(0, n-1) + '&hellip;' : str;
};

export { truncate };