console.log("hello world");

var num = 100;
console.log(typeof num);
var obj = { };
console.log(typeof obj);
console.log(typeof "obj");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null); // 输出的是object
/* remark:
    为什么 typeof 运算符对于 null 值会返回 "Object"?
    这实际上是 JavaScript 最初实现中的一个错误，然后被 ECMAScript 沿用了。
    现在，null 被认为是对象的占位符，从而解释了这一矛盾，但从技术上来说，它仍然是原始值。
*/
// 基本类型：number、string、boolean、undefined
// 引用类型：Object/Class/Number/String/Boolean

var oNum = new Number(18);
console.log(oNum.toFixed(2));
console.log(oNum.toString(2));
console.log(typeof oNum);

console.log(oNum instanceof Number); // instanceof判断对象实例的类型

/*
== 的比较规则
    执行类型转换的规则如下：
    如果一个运算数是 Boolean 值，在检查相等性之前，把它转换成数字值。false 转换成 0，true 为 1。
    如果一个运算数是字符串，另一个是数字，在检查相等性之前，要尝试把字符串转换成数字。
    如果一个运算数是对象，另一个是字符串，在检查相等性之前，要尝试把对象转换成字符串。
    如果一个运算数是对象，另一个是数字，在检查相等性之前，要尝试把对象转换成数字。
    在比较时，该运算符还遵守下列规则：

    值 null 和 undefined 相等。
    在检查相等性时，不能把 null 和 undefined 转换成其他值。
    如果某个运算数是 NaN，等号将返回 false，非等号将返回 true。
    如果两个运算数都是对象，那么比较的是它们的引用值。如果两个运算数指向同一对象，那么等号返回 true，否则两个运算数不等。
=== 全等号
    只有在无需类型转换运算数就相等的情况下，才返回 true
*/
console.log(3 == 3);
console.log(3 === 3);
console.log(3 == "3");
console.log(3 === "3");

/**
 * for-in 语句是严格的迭代语句，用于枚举对象的属性
 */
for (sProp in window) {
    // console.log(sProp);
}

/**
 * 对数组而已，for..in 接受的是下标
 */
var numArray = [1,3,5,6,8,99];
for (const index in numArray) {
    console.log(index + "=" + numArray[index])
    // break;
}

// forEach函数中接受的参数直接就是数组的元素
numArray.forEach(function(value){
    console.log(value)
});

