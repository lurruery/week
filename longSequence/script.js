/**
 * Created by lurruery on 27/11/17.
 */
function solution(line) {
  var hashMap = [];
  var num = line.split(',');
  for(var i = 0 ; i < num.length; i ++) {
    hashMap.push(parseInt(num[i]));
  }

  for(var j = 0 ; j < num.length; j ++) {
    var maxLength = 1;
    var data = parseInt(num[j]);
    var k = 1;

    if(data!== num[num.length - 1]){
      while (k < num.length - 1) {
        // if(hashMap.indexOf(data + k) !== -1) {
        //   maxLength ++;
        //   k ++;
        // }
        console.log(k);
      }
    }

    // console.log(maxLength);
  }
}
solution('100,4,101,200,1,3,2,102');
