

	var totalDisplay = '';
	var sum = '';
	
	var DOMstrings = {
		calcbuttons: '.calcButtons',
		number: '.number',
		operator: '.operator',
		equals: '.equals',
		total: '#total',
		allclear: '.allClear',
		back: '.back'
	};

	var clearAll = function() {
			totalDisplay = '';
			sum = '';
			document.querySelector(DOMstrings.total).innerHTML = totalDisplay;
		};

	var clearDisplay = function() {
			totalDisplay = '';
			document.querySelector(DOMstrings.total).innerHTML = totalDisplay;
	};


	var showNum = function(num) {

			if (totalDisplay.length === 15){
					return;
				} 

				totalDisplay += num;
				document.querySelector(DOMstrings.total).innerHTML = totalDisplay;
		};

	var addNum = function (op) {
			sum += totalDisplay + op;
			console.log(sum);
			clearDisplay();
		};

	var equals = function() {
			var finalNum = document.querySelector(DOMstrings.total).innerHTML;
			sum += finalNum;
			console.log(sum);
			var answer = eval(sum);
			totalDisplay = answer.toString();
			document.querySelector(DOMstrings.total).innerHTML = totalDisplay.slice(0, 16);
			totalDisplay = '';
			sum = '';
			answer = '';
		};

	// var clearTotal = function() {
	// 		var totalDisplay = '';
	// 		var sum ='';
	// 		document.querySelector(DOMstrings.total).innerHTML = totalDisplay;
	// 	};

	var back = function () {
		var str = totalDisplay.slice(0, -1);
		totalDisplay = str;
		document.querySelector(DOMstrings.total).innerHTML = totalDisplay;
	};

	var setupEventListeners = function() {
		console.log("application has started");

		document.querySelector(DOMstrings.calcbuttons).addEventListener('click', function(e){ 
			var table = e.target;
			if (table.className === "number") {
				var selectedNum = table.firstChild.data;
				showNum(selectedNum);
			} //click AC
			else if (table.className === "allClear") {
				clearAll();
			}  // click equals
			else if (table.className === "equals") {
				equals();
				return;
			} // click operator
			else if (table.classList.contains("operator")) {
				var operator = '';
				if(table.className === "operator divide") {
					operator = '/';
					addNum(operator);
				} else if (table.className === "operator times") {
					operator = '*';
					addNum(operator);
				} else if (table.className === "operator minus") {
					operator = '-';
					addNum(operator);
				} else if (table.className === "operator add") {
					operator = '+';
					addNum(operator);
				}	
			} 
			else if (table.className === "back") {
				back();
			};
		});
	};

setupEventListeners();
