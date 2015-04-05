var plus = document.getElementsByClassName("plus");
var minus = document.getElementsByClassName("minus");


plus[0].onclick = function() {
	var duration = document.getElementsByName("travel-time");
	var durationValue = parseInt(duration[0].value);
	var	durationNew = parseInt(durationValue)+1;
	document.getElementsByName("travel-time")[0].value = durationNew;
}
plus[1].onclick = function() {
	var adults = document.getElementsByName("people-count");
	var adultsValue = parseInt(adults[0].value);
	var	adultsNew = parseInt(adultsValue)+1;
	document.getElementsByName("people-count")[0].value = adultsNew;
}
plus[2].onclick = function() {
	var children = document.getElementsByName("children-count");
	var childrenValue = parseInt(children[0].value);
	var	childrenNew = parseInt(childrenValue)+1;
	document.getElementsByName("children-count")[0].value = childrenNew;
}


minus[0].onclick = function() {
	var duration = document.getElementsByName("travel-time");
	var durationValue = parseInt(duration[0].value);
		if(durationValue>0) {
			var	durationNew = parseInt(durationValue)-1;
		}
		else {
			var	durationNew = 0;
		}
	document.getElementsByName("travel-time")[0].value = durationNew;
}

minus[1].onclick = function() {
	var adults = document.getElementsByName("people-count");
	var adultsValue = parseInt(adults[0].value);
		if(adultsValue>0) {
			var	adultsNew = parseInt(adultsValue)-1;
		}
		else {
			var	adultsNew = 0;
		}
	document.getElementsByName("people-count")[0].value = adultsNew;
}


minus[2].onclick = function() {
	var children = document.getElementsByName("children-count");
	var childrenValue = parseInt(children[0].value);
		if(childrenValue>0) {
			var	childrenNew = parseInt(childrenValue)-1;
		}
		else {
			var	childrenNew = 0;
		}
	document.getElementsByName("children-count")[0].value = childrenNew;
}