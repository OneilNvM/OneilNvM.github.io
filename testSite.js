let demo1 = document.getElementById("demo_1");

function myFunction(num1, num2){
	return num1 * num2;
}

demo1.innerHTML = myFunction(7, 4);

function loadDoc() {
	var xHttp = new XMLHttpRequest()
	xHttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById('demo_3').innerHTML = this.responseText;
		}
	}
	xHttp.open('GET', 'text.xml', true);
	xHttp.send();

}

