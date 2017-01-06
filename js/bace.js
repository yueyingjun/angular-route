function resize(origin,type){
	type = type || "x";
	if(type == "x"){
		var widths = document.documentElement.clientWidth;
		var scale = widths/origin*100 + "px";
	}else if(type == "y"){
		var heights = document.documentElement.clientHeight;
		var scale = heights/origin*100 + "px";
	}
	document.getElementsByTagName("html")[0].style.fontSize = scale;
}
