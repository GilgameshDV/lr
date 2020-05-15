var name=prompt("Введите имя");
var pas=prompt("Введите пароль");
var ivan="ivan";
var ssss="ssss";
var gibs="gibs";

var a="0000"//обидно, но округляет до 0
if(name==ivan&&pas==333||name==ssss&&pas==666||name==gibs&&pas==a){

	alert("Доброе пожаловать"+","+" " +name);

}

else{
	alert("Пользователь не найден");
}