/*
console.log(document.getElementsByTagName('h1')[0].innerText);
console.log(document.getElementsByTagName('p')[0].innerText);
console.log(document.getElementById('title1').innerText);
console.log(document.getElementsByTagName('p')[1].innerText);
*/
function changeText(){
    document.getElementById('title1').innerText = "Title changed with function" ;
}
function changebackground(){
    document.getElementById('title1').style.backgroundColor = "#FF6666";
}

//document.getElementById('title1').innerText = "Title is changed";
document.getElementById('title1').style.color= "#A44B02";
document.getElementById('title1').style.backgroundColor="#9F9FFF";
document.getElementById('app').style.fontStyle = "italic";
document.getElementById('app').style.padding= "20px";
