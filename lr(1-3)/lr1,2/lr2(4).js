var a=prompt("Введите первое число");
var b=prompt("Введите Второе число");
var c=prompt("Введите Третье число");

if(a>b&&a>c){
	alert("Первое число - максимальное"+" "+'('+a+')');
}
if (b>a&&b>c){
	alert("Второе число - максимальное"+" "+'('+b+')');
}
if (c>a&&c>b){
	alert("Третье  число - максимальное"+" "+'('+c+')');
}
if(a==b&&a==c){
	alert("Все числа равны"+" "+'('+a+')');
}
if(a==b&&a>c){
	alert("Первое и Второе числа - равны и максимальны"+" "+'('+a+')');
}
if(a==c&&a>b){
	alert("Первое и Третье числа - равны и максимальны"+" "+'('+a+')');
}
if(b==c&&b>a){
	alert("Второе и Третье числа - равны и максимальны"+" "+'('+b+')');
}

