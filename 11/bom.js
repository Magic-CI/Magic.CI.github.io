var person = {
	name:'goudaner',
	gender:'female',
	age:22,
	sing:function(){
		console.log('你猜我在干啥')
	}

}




//console.log(person.name);
//person.sing(;
//for (var i in person){
//    console.log(i+":"+person[i])     





for (var i in console){
    console.log(i+":"+console[i]);
}
console.clear();

console.log(typeof person);

//布尔类型
console.log(typeof false);
console.log(typeof 'false');

//数字类型
console.log(typeof 100);

//字符串类型
console.log(typeof person.name);

//定义数组
var sites = ['baidu.com','sohu.com','sina.com','163.com'];
console.log(sites[0]);
console.log(typeof sites);
