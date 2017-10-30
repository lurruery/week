/**
* @param  string   line 单行测试数据
* @return string        返回处理结果
*/
function solution(line) {
  var num1 = line.split(' - ')[0];
  var num2 = line.split(' - ')[1];
  var length1 = num1.length - 1;
  var length2 = num2.length - 1;
  var flag = 0; //用来表示是否需要借位
  var num = '';  //最后的数字
  var zero = '';

  //字符串反转
  function reverseString(str) {
    return str && reverseString(str.substr(1)) + str[0];
  };

  //字符串拼接,对num2 进行补0处理
  for(var i = 0; i < length1 - length2; i++){
    zero += '0';
  }
  num2 = zero + num2;  //字符串转数字

  for(var j = length1; j >= 0; j--) {
    var a = num1[j] -  0 - flag;  //转化为数字;
    var b = num2[j] - 0;
    if(a < b) {
      flag = 1;
      num += Number(a + 10 - b )+ '';//转化为字符串
    } else {
      flag = 0;
      num += Number(a - b) + '';
    }
  }
  return reverseString(num);
}

//solution('1231231237812739878951331231231237812739878951331231231237812739878951331231231237812739878951331231231237812739878951331231231237812739870 - 89513312312312378127398789513312312312378127398789513312312312378127398789513');