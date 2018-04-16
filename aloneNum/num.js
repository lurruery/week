/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */

/* 方法一 */
function solution(line) {
  var lineArray = line.split(' ');
  var sum = lineArray[0];
  var i = 0;
  var flagArray = [];
  for(var j = 1; j < line.length; j++) {
    sum = lineArray[i];
    if(sum === lineArray[j] || flagArray.indexOf(sum) !== -1) {
      i ++;
      j = i;
      if(flagArray.indexOf(sum) === -1) {
        flagArray.push(sum);
      }
    }
  }
  return Number(sum);
}
