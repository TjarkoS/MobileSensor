function initialize(){
	
	//Text der Überschrift ändern:
	let ueberschrift = document.getElementById("grueneUeberschrift");
	ueberschrift.innerHTML = "neue Überschrift über .js";
	ueberschrift.style["color"] = "rgb(255, 0, 0)";
	let fontSize = 70;
	ueberschrift.style["font-size"] = fontSize + "px";
	
	
	// define event listener
	function onSliderChanged(){
		// get the R, G, B values from the slider
		let slider = document.getElementById("slider-red");
		let red = slider.value;
		
		let labelRed = document.getElementById("labelRed");
		labelRed.innerHTML = red;
	
		
		slider = document.getElementById("slider-green");
		let green = slider.value;
		
		let labelGreen = document.getElementById("labelGreen");
		labelGreen.innerHTML = green;

		
		slider = document.getElementById("slider-blue");
		let blue = slider.value;
		
		let labelBlue = document.getElementById("labelBlue");
		labelBlue.innerHTML = blue;
		
		
		
		// set the background color of the body tag 
		let body = document.getElementById("body");
		body.style["background-color"] 
				= `rgb(${red}, ${green}, ${blue})`;
 //oder:		= "rgb(" + red + "," + green + "," + blue + ")";
	}
	
	// set event listener
	//RED
	let redSlider = document.getElementById("slider-red");
	redSlider.addEventListener("input", onSliderChanged);
	
		
	let greenSlider = document.getElementById("slider-green");
	greenSlider.addEventListener("input", onSliderChanged);
	
	
	
	let blueSlider = document.getElementById("slider-blue");
	blueSlider.addEventListener("input", onSliderChanged);
	// initialize the color
	onSliderChanged();

	alert ("Script erfolgreich geladen");
	
}