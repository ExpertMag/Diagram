var but = document.querySelector('.calc');
var enterValues = [];
var percent =  [];
var color = [];


const xmlns = "http://www.w3.org/2000/svg";

but.onclick = function(){
	var svg = document.getElementById('dsv')
	//console.log(svg)

	var circle = document.createElementNS(xmlns, "circle");
	circle.setAttribute('cx', '50%')
	circle.setAttribute('cy', '50%')
	circle.setAttribute('r', 15.9)
	svg.appendChild(circle);

	

	
	var two = ['unit'];
	for (var i = 0; i < two.length; i++) {
		var lists = document.querySelectorAll('circle');
		lists.forEach(function(circle){circle.classList.add('unit')});
	}
    
	



	const parentElem = document.querySelector('svg')
	const lastChild = parentElem.lastChild;
    
    color = colorGen();
	lastChild.style.stroke = 'rgb(' + color[0] + ', ' + color[1] + ', ' + color[2] + ')';
	
	var n1 = document.getElementById('n1').value;
	enterValues.push(parseInt(n1));


	
	var b = enterValues.reduce(add,0);

    for (var i = 0; i < enterValues.length; i++) {
        percent[i] = (enterValues[i]/b)*100
    }

	
	var one = document.querySelectorAll('.unit');
	one.forEach(function(item, i, one) {
			one[i].style.strokeDasharray = percent[i] + ' 100';

	});
	one[0].style.strokeDashoffset = 0;

	


	let offset = 0;
	for (var i = 0; i < one.length; i++) {
	  one[i].style.strokeDashoffset = offset;
	  offset -= percent[i];
	}
	
	

};

function add(accumulator, a) {
		return accumulator + a;
	};

function colorGen() {
        var R = Math.floor(Math.random() * (255 + 1));
    	var G = Math.floor(Math.random() * (255 + 1));
    	var B = Math.floor(Math.random() * (255 + 1));
    return [R, G, B]
}

