var colorArray = ["#5A9C6E", "#A8BF5A", "#FAC46E", "#FAD5BB", "#F2FEFF"]; // создаем массив с цветами фона
var i = 0; 

function changeColor(){
    document.body.style.background = colorArray[i]; 
    i++;
    if( i > colorArray.length - 1){
        i = 0;
    }
}

function resetColor(){
    document.body.style.background = "#FFFFFF";
    i = 0;
    document.getElementById("color").value = '#000000';
}

function chooseColor() {
	document.body.style.background = document.getElementById("color").value;
	i = 0;
}