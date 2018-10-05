function insertHeader() {
	var numImg = 2;
	var imgIdx = Math.floor(Math.random() * 2) + 1;
	document.write("<div id=\"header-img" + imgIdx + "\"></div>");
}

/*
	Used to set the height of an iframe to fit the contents
*/
function autoHeight(iframe) {
//	var getFFVersion=navigator.userAgent.substring(navigator.userAgent.indexOf("Firefox")).split("/")[1]
//	var FFextraHeight=parseFloat(getFFVersion)>=0.1? 16 : 0 //extra height in px to add to iframe in FireFox 1.0+ browsers

	try {
		frameBody = iframe.contentDocument.body;

		if (frameBody && frameBody.scrollHeight) {
			var height = frameBody.scrollHeight + 16;
	
			iframe.style.height = height + "px";
		}
	} catch (e) {
	}
}
