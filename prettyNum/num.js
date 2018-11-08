function solution(line) {

  var result = '';
  var bool = false;
  var num = parseInt(line);

  //因为精度问题,需要封装一个大整数除法 比如 18014398509481985 / 2
  function div(arg) {
    var length = arg.length;
    var arr = '';
    var num = '';
    var res = 0;
    for(var i = 0 ; i < length ; i++) {
      var temp = parseInt(arg[i]) + res * 10;
      if(temp < 2) {
        if(i !== 0) {
          num = 0
        }
      } else {
        if(i === length - 1) {
          num = temp / 2;
        } else{
          num = Math.floor(temp / 2);
        }
      }
      res = temp % 2;
      arr += num;
    }
    return arr;
  }

  //因为精度问题, 封装一个大数 + 1 和大数 - 1
  function commonBaseCal(sign, arg){
    var length = arg.length;
    var arr = '';
    var num = '';
    for(var i = 0 ; i < length ; i++) {

      //取最后一位进行加减运算
      if(i === length - 1) {
        if(sign === 'add') {
          num = parseInt(arg[i]) + 1;
        }
        if(sign === 'sub') {
          num = parseInt(arg[i]) - 1;
        }
      }else{
        num = arg[i];
      }
      arr += num;
    }
    return arr;
  }


  function checkPower(data) {
    var parseData = parseInt(data);
    if(parseData === 0){bool = false}
    if(parseData === 1){bool = true}
    if(parseData >= 2) {
      var res = div(data);
      if(res >= 2){
        checkPower(res);
      } else{
        if(res % 1 === 0){
          bool = true;
        }else{
          bool = false;
        }
      }
    }
    return bool;
  };

  if(num > 1) {
    if(checkPower(commonBaseCal('add', line)) && checkPower(commonBaseCal('sub', line))){
      result = 'Very Good';
    } else if(checkPower(commonBaseCal('sub', line))) {
      result = 'Good';
    } else if(checkPower(commonBaseCal('add', line))) {
      result = 'Bad' ;
    } else{
      result = 'Normal';
    }
  } else{
    result = 'Bad' ;
  }

  // 返回处理后的结果
  return result;
}
