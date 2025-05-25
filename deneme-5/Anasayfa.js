function buton(){
    let yazılan = document. getElementById ("yazılan").value;

    let yazıElemanı = document.getElementById("yazı");

    yazıElemanı.innerText=yazılan;
    yazıElemanı.style.color = "blue";
}