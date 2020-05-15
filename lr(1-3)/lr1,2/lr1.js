var randomLoc=Math.floor(Math.random()*5);
var loc1=randomLoc;
var loc2=loc1+1;
var loc3=loc2+1;
var guess;
var hits=0;
var guesses=0;
var isSunk=false;

while(isSunk==false){

	guess=prompt("Атакуй!!!!) (введите число от 0 до 6):");
	if (guess<0 ||guess>6){

		alert("введите действительные координаты корабля");

	}
	else{
		guesses++;
		if(guess==loc1||guess==loc2||guess==loc3){

			alert("Попадание");
			hits++;
			if(hits==3){
				isSunk=true;
				alert("Корабыль утонул");
			}
		}else{
			alert("ПРОМАХ!!!");
		}
	}

	}
var stats="Вы совершили"+" "+guesses+" "+"догадки(ок)"+","+" "+"чтобы потопить корабыль."+" "+"Это означает, что ваша точность стрельбы была"+" "+((3/guesses)*100)+"%";
alert(stats);