/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
  var hashMap = [];
  var num = line.split(',');
  for(var i = 0 ; i < num.length; i ++) {
    hashMap.push(num[i]);
  }

  // Array.prototype = {
  //   constructor:Array,
  //   // remove:function(elem) {     //删除某个固定元素
  //   //   var index = this.indexOf(elem.toString());
  //   //   console.log(index);
  //   //   if(index > -1) {
  //   //     this.splice(index, 1);
  //   //   }
  //   // },
  //   max:function(){
  //     console.log('这不是一个函数?')
  //     // var max = this[0];
  //     // this.forEach (function(ele,index, arr){
  //     //   if(ele > max) {
  //     //     max = ele;
  //     //   }
  //     // })
  //     // return max;
  //   },
  //   min:function () {
  //     var min = this[0];
  //     this.forEach (function(ele,index,arr){
  //       if(ele < min) {
  //         min = ele;
  //       }
  //     })
  //     return min;
  //   }
  // }


  for(var j = 0 ; j < num.length; j ++) {
    var max = 1;
    var cur = parseInt(num[j]) + 1;
     //console.log(hashMap.max);
    // while (cur < Math.max(num)]){
    //
    // }
    if(hashMap.indexOf(cur) === -1) {
      hashMap.remove(cur);
      max ++;
      cur ++;
    }
    console.log(hashMap);
  }
}
solution('100,4,101,200,1,3,2,102');
