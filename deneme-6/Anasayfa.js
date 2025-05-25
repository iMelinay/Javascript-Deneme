function buton(){
    let yazılan=document.getElementById("yazılan").value;

    let yazıElemanı = document.getElementById("yazı");

    yazıElemanı.innerText = yazılan;

    let renkler=["red","blue","green","purple","orange"];

    let rastgeleRenkler=renkler[Math.floor(Math.random()*renkler.length)];

    yazıElemanı.style.color=rastgeleRenkler;
}