// alert('hello world');
// console.log(alert)

// var arr = [];
// for (var i = 0; i < 5; i++) {
// 	arr[i] = prompt('Введите имя пользователя', '')
// 	console.log(typeof arr[i], arr[i]);
// }
// console.log(arr);

// var name = prompt('Введите имя пользователя для получения доступа', '');
// console.log(typeof name, name);
var arr = [];
var name;

function init() {
	for (var i = 0; i < 5; i++) {
	arr[i] = prompt('Введите имя пользователя', '')
	console.log(typeof arr[i], arr[i]);
}
	console.log(arr);

	name = prompt('Введите имя пользователя для получения доступа', '');
	console.log(typeof name, name);
}

function search(arr, name) {
	for (var i = 0; i < arr.length; i++) {
	if (arr[i] === name) {
	console.log(arr.indexOf[i]);
	return true;
	} 
}
	return false;
}

function login() {
	if (search(arr, name) === true) {
		alert(name + ', Вы успешно вошли в систему');
	} else {
		alert('В доступе отказано');
	};
};

init();
login ();

// search(arr, name);



// var a = ["a", "b", "c"];
// a.forEach(function(entry) {
//     console.log(entry);
// });