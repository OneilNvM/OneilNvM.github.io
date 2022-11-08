let demo1 = document.getElementById("demo_1");

function myFunction(num1, num2){
	return num1 * num2;
}

demo1.innerHTML = myFunction(7, 4);

function loadDoc() {
	var xHttp = new XMLHttpRequest()
	xHttp.onload = function() {
        tableFunction(this);
    }
	xHttp.open('GET', 'text.xml', true);
	xHttp.send();
}

function tableFunction(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName('book');
    let table = "<tr><td>Title</td><td>Author</td><td>Year</td><td>Price</td></tr>"

    for (let i = 0; i < x.length; i++) {
        table += "<tr><td>" +
        x[i].getElementsByTagName('title')[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName('author')[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName('year')[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName('price')[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
document.getElementById('demo_3').innerHTML = table;
}
