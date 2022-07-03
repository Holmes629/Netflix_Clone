var x1 = document.getElementById("tab1");
var y1 =document.getElementById("Sectionid4");
var x2 = document.getElementById("tab2");
var y2 =document.getElementById("Sectionid5");
var x3 = document.getElementById("tab3");
var y3 =document.getElementById("Sectionid6");
function tabfunc1(){
    x2.className="col-4";
    x3.className="col-4";
    y2.className= "Section-5";
    y3.className= "Section-6";
    y1.className="Section-4onclickSec4";
    x1.className+=" firstClick1";
}
function tabfunc2(){
    x1.className="col-4";
    x3.className="col-4";
    y1.className="Section-4";
    y3.className="Section-6";
    x2.className+=" firstClick2";
    y2.className="Section-5onclickSec5";
}
function tabfunc3(){
    x1.className="col-4";
    x2.className="col-4";
    y1.className="Section-4";
    y2.className="Section-5";
    x3.className+=" firstClick3";
    y3.className="Section-6onclickSec6";
}
