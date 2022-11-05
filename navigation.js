var button=document.getElementById("router");
function routing(){
    location.href=document.getElementById(`novels`).value;

}


var button=document.getElementById("match");
function hea() {
        alert("Yay! We love a happily ever after.")

}


var button=document.getElementById("home");
function home() {
   location.href="./index.html";
}


var button=document.getElementById("borrow");
function findlibrary(){
    location.href=document.getElementByClass(`book-image`).value;
}