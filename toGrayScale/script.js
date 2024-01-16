var image = null;

function upload(){
	//Get input from file input
	var fileinput = document.getElementById("finput");
	//Make new SimpleImage from file input
	image = new SimpleImage(fileinput);
	//Get canvas
	var canvas = document.getElementById("can");
	//Draw image on canvas
	image.drawTo(canvas);
}

function makeGray(){
	//change all pixels of image to gray
	for( var pixel of image.values()){
		var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
		pixel.setRed(avg);
		pixel.setGreen(avg);
		pixel.setBlue(avg);
	}
	//Display new image
	var canvas = document.getElementById("can");
	image.drawTo(canvas);
}

/*
function gray(){
	var canvas = document.getElementById("can");
	canvas=canvas.getContext("2d")
	canvas.drawImage(myimage,0,0);
	var image= document.getElementById("finput");
	var width = image.width
	var height = image.height
	var imgPixels = canvas.getImageData(0,0,width,height)
	
	for(var y=0; y < height; y++){
		for(var x=0; x < width; x++){
			var i = (y*4) * width + x*4;
			var avg = (imgPixels.data[i] + imgPixels.data[i+1]+imgPixels.data[i+2])/3;
			imgPixels.data[i]=avg;
			imgPixels.data[i+1]=avg;
			imgPixels.data[i+2]=avg;
		}
	}
	canvas.putImageData(imgPixels,0,0,0,0,imgPixels.width,imgPixels.height);
}
var myimage = new Image();
myimage.onload = function(){gray(myimage)}
myimage.src = "test.png"
*/