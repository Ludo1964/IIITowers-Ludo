/*Modal windows for floor plan and loatio images*/

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

/*Animated scrolling to the element using jQuery*/

$(()=>{

/*Scrolling using jQuery animation effect*/
	var menu = $(".menu");
	var menuLinks = menu.find("a");

	menuLinks.on("click", function(event){
	console.log($(this.hash).offset().top);
	var id = this.hash;

	$("html, body").animate({scrollTop: $(this.hash).offset().top}, 1000, function(){
		window.location.hash = id;
	});
	event.preventDefault();

	});

/*Changing element based on scrolling position*/
var tow = $("#Towers").offset().top -56;
var desc = $("#Description").offset().top -56;
var phot = $("#Photos").offset().top -56;
var loc = $("#Locations").offset().top -56;
var cont = $("#Contact").offset().top -800;

var $pos = $(window).scroll(()=>{

		if($pos.scrollTop() >= tow && $pos.scrollTop() < desc){
			$("a.tower").css("color", "white");
		}else{
			$("a.tower").css("color", "rgba(255,255,255,.5)");
		}

		if($pos.scrollTop() >= desc && $pos.scrollTop() < phot){
			$("a.description").css("color", "white");
		}else{
			$("a.description").css("color", "rgba(255,255,255,.5)");
		}

		if($pos.scrollTop() >= phot && $pos.scrollTop() < loc){
			/*$(".description").css("color", "black");*/
			$("a.photos").css("color", "white");
		}else{
			$("a.photos").css("color", "rgba(255,255,255,.5)");
		}

		if($pos.scrollTop() >= loc && $pos.scrollTop() < cont){
			/*$(".description").css("color", "black");*/
			$("a.location").css("color", "white");
		}else{
			$("a.location").css("color", "rgba(255,255,255,.5)");
		}

		if($pos.scrollTop() >= cont){
			/*$(".description").css("color", "black");*/
			$("a.contact").css("color", "white");
		}else{
			$("a.contact").css("color", "rgba(255,255,255,.5)");
		}

	})

});

/*Initiating tooltip animation*/
	$(function () {
  		$('[data-toggle="tooltip"]').tooltip()
	});

/*OpenLayer map logic*/
var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
        source: new ol.source.OSM()
    })
  ],

  controls: ol.control.defaults().extend([
  new ol.control.FullScreen()
  ]),

});

map.setTarget('map');

var view = new ol.View({
  zoom: 16,
  projection: 'EPSG:3857',
  maxZoom: 20,
  minZoom: 3,
});

view.setCenter([1907920.77, 6134071.43]);

map.setView(view);
