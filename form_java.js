//from validation

var sub = document.getElementById("sb");
sub.onclick = function validate(){

	var n = document.getElementById("fn");
	var m = document.getElementById("pw");

	if (n.value=='' ||m.value=='') {

		alert("Field can't be empty");
	}

	else{}

	if (m.value.length<3 || m.value.length>10)
	{
		alert("Password is not valid");
	}

	var str=n.value.silence(0,1);
	if( str=='_' || str=='$' ){
		alert("Enter valid name!");
	}	

}