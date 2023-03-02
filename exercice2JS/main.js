function changeSection(sectionNum){

    if(sectionNum == 1){
        //shox section About
        console.log(sectionNum);
        document.getElementById('aboutbtn').style.borderBottom = "none";
        document.getElementById('servicebtn').style.borderBottom = "1px solid black";
        document.getElementById('about').style.display = "block";
        document.getElementById('service').style.display = "none";
    }else{
        //show section Services
        console.log(sectionNum)
        document.getElementById('servicebtn').style.borderBottom = "none";
        document.getElementById('aboutbtn').style.borderBottom = "1px solid black";
        document.getElementById('service').style.display = "block";
        document.getElementById('about').style.display = "none"
    }

}