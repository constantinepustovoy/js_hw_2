// alert('hello world');
// console.log(alert)

var arr = [];
arr.length = 5;
for (var i = 0; i < arr.length; i++) {
	arr[i] = prompt('Введите имя пользователя', '')
	console.log(typeof arr[i], arr[i]);
}
console.log(arr);

var name = prompt('Введите имя пользователя для получения доступа', '');
console.log(typeof name, name);

function search(arr, name) {
	for (var i = 0, l = arr.length; i < l; i++) {
	if (arr[i] === name) {
	alert(name + ', Вы успешно вошли в систему');
	break;
	} else if (arr[i] != name){
		continue;
	} else {
	alert('Попытка несанкционированного доступа запротоколирована');
}
}
}

search(arr, name);



// var a = ["a", "b", "c"];
// a.forEach(function(entry) {
//     console.log(entry);
// });