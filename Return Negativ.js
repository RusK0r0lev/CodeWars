// function makeNegative(num) {
// 	if (num >= 0) {
// 		return -num
// 	}
// 	return num
// }

// const makeNegative = (num) => num >= 0 ? -num : num

function makeNegative(num) {
	return -Math.abs(num)      //Math.abs(num) берет число без знака        
}