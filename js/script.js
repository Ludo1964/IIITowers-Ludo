var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption")

img.addEventListener("click", function(){
	modal.style.display = "block";
	modalImg.src = "img/PlanLarge.JPG";
	captionText.innerHTML = this.alt;
})

var span = document.getElementsByClassName("close")[0];

span.addEventListener("click", function(){
	modal.style.display = "none";
})