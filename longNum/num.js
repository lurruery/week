/**
 * @param  string   line 单行测试数据
 * @return string        返回处理结果
 */
function solution(line) {
	let arr = line.split(',').map(Number); //字符串抓换成数组
	let maxLength = 0 ; //记录结果
	let resultArr = [];

	//从数组中删除一个元素
	let deleteData = (num) => arr.splice(arr.findIndex(item => item === num), 1);

	let getLength = (num) => {
		let num1 = 0;
		let num2 = 0;
		arr.forEach(function(k,i){
			if(arr.indexOf(Number(num) + i + 1) > -1){
				num1 ++;
			}
			if(arr.indexOf(Number(num) - i - 1) > -1){
				num2 ++;
			}
		});
		return num1 + num2 + 1;
	}

	arr.forEach(function(k, i){
		resultArr.push(getLength(k));
	});

	return Math.max.apply(null, resultArr);
}
