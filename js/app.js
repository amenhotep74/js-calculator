console.log("js loaded!");
// determine which button user pressed and assign value to first number
    var display = "0";
    var num1 = [];
    var num2 = [];
    var num1calc;
    var num2calc;
    var num1pressed = false;
    var num2pressed = false;
    var operator;
    var operatorSelected = false;
    
    document.getElementById('0').onclick = function() {
        // only activate if operator selected
        if (operatorSelected == true) {
            console.log("0 was clicked second!");
            // push number into the array
            num2.push(0);
            // concat array together
            num2calc = Number(num2.join(''));
            document.getElementById('display').value = num2calc;
        } else {
            console.log("0 was clicked first!");
            num1.push(0);
            // concat array together
            num1calc = Number(num1.join(''));
            num1pressed = true;
            document.getElementById('display').value = num1calc;
        }
    }

    document.getElementById('1').addEventListener("click", function() {
        // only activate if operator selected
        if (operatorSelected == true) {
            console.log("1 was clicked second!");
            // push number into the array
            num2.push(1);
            // concat array together
            num2calc = Number(num2.join(''));
            num2pressed = true;
            console.log("num2: " + num2);
            document.getElementById('display').value = num2calc;

        } else { 
            console.log("1 was clicked first!");
            num1.push(1);
            // concat array together
            num1calc = Number(num1.join(''));
            num1pressed = true;
            console.log("num1: " + num1);
            console.log("num1pressed: " + num1pressed);
            document.getElementById('display').value = num1calc;
        }
    });

    document.getElementById('2').addEventListener("click", function() {
        // only activate if operator selected
        if (operatorSelected == true) {
            console.log("1 was clicked second!");
            // push number into the array
            num2.push(2);
            // concat array together
            num2calc = Number(num2.join(''));
            num2pressed = true;
            console.log("num2: " + num2);
            document.getElementById('display').value = num2calc;

        } else { 
            console.log("1 was clicked first!");
            num1.push(2);
            // concat array together
            num1calc = Number(num1.join(''));
            num1pressed = true;
            console.log("num1: " + num1);
            console.log("num1pressed: " + num1pressed);
            document.getElementById('display').value = num1calc;
        }
    });

    document.getElementById('3').addEventListener("click", function() {
        // only activate if operator selected
        if (operatorSelected == true) {
            console.log("1 was clicked second!");
            // push number into the array
            num2.push(3);
            // concat array together
            num2calc = Number(num2.join(''));
            num2pressed = true;
            console.log("num2: " + num2);
            document.getElementById('display').value = num2calc;

        } else { 
            console.log("1 was clicked first!");
            num1.push(3);
            // concat array together
            num1calc = Number(num1.join(''));
            num1pressed = true;
            console.log("num1: " + num1);
            console.log("num1pressed: " + num1pressed);
            document.getElementById('display').value = num1calc;
        }
    });

    document.getElementById('4').addEventListener("click", function() {
        // only activate if operator selected
        if (operatorSelected == true) {
            console.log("1 was clicked second!");
            // push number into the array
            num2.push(4);
            // concat array together
            num2calc = Number(num2.join(''));
            num2pressed = true;
            console.log("num2: " + num2);
            document.getElementById('display').value = num2calc;

        } else { 
            console.log("1 was clicked first!");
            num1.push(4);
            // concat array together
            num1calc = Number(num1.join(''));
            num1pressed = true;
            console.log("num1: " + num1);
            console.log("num1pressed: " + num1pressed);
            document.getElementById('display').value = num1calc;
        }
    });

    document.getElementById('5').addEventListener("click", function() {
        // only activate if operator selected
        if (operatorSelected == true) {
            console.log("1 was clicked second!");
            // push number into the array
            num2.push(5);
            // concat array together
            num2calc = Number(num2.join(''));
            num2pressed = true;
            console.log("num2: " + num2);
            document.getElementById('display').value = num2calc;

        } else { 
            console.log("1 was clicked first!");
            num1.push(5);
            // concat array together
            num1calc = Number(num1.join(''));
            num1pressed = true;
            console.log("num1: " + num1);
            console.log("num1pressed: " + num1pressed);
            document.getElementById('display').value = num1calc;
        }
    });

    document.getElementById('6').addEventListener("click", function() {
        // only activate if operator selected
        if (operatorSelected == true) {
            console.log("1 was clicked second!");
            // push number into the array
            num2.push(6);
            // concat array together
            num2calc = Number(num2.join(''));
            num2pressed = true;
            console.log("num2: " + num2);
            document.getElementById('display').value = num2calc;

        } else { 
            console.log("1 was clicked first!");
            num1.push(6);
            // concat array together
            num1calc = Number(num1.join(''));
            num1pressed = true;
            console.log("num1: " + num1);
            console.log("num1pressed: " + num1pressed);
            document.getElementById('display').value = num1calc;
        }
    });

    document.getElementById('7').addEventListener("click", function() {
        // only activate if operator selected
        if (operatorSelected == true) {
            console.log("1 was clicked second!");
            // push number into the array
            num2.push(7);
            // concat array together
            num2calc = Number(num2.join(''));
            num2pressed = true;
            console.log("num2: " + num2);
            document.getElementById('display').value = num2calc;

        } else { 
            console.log("1 was clicked first!");
            num1.push(7);
            // concat array together
            num1calc = Number(num1.join(''));
            num1pressed = true;
            console.log("num1: " + num1);
            console.log("num1pressed: " + num1pressed);
            document.getElementById('display').value = num1calc;
        }
    });

    document.getElementById('8').addEventListener("click", function() {
        // only activate if operator selected
        if (operatorSelected == true) {
            console.log("1 was clicked second!");
            // push number into the array
            num2.push(8);
            // concat array together
            num2calc = Number(num2.join(''));
            num2pressed = true;
            console.log("num2: " + num2);
            document.getElementById('display').value = num2calc;

        } else { 
            console.log("1 was clicked first!");
            num1.push(8);
            // concat array together
            num1calc = Number(num1.join(''));
            num1pressed = true;
            console.log("num1: " + num1);
            console.log("num1pressed: " + num1pressed);
            document.getElementById('display').value = num1calc;
        }
    });

    document.getElementById('9').addEventListener("click", function() {
        // only activate if operator selected
        if (operatorSelected == true) {
            console.log("1 was clicked second!");
            // push number into the array
            num2.push(9);
            // concat array together
            num2calc = Number(num2.join(''));
            num2pressed = true;
            console.log("num2: " + num2);
            document.getElementById('display').value = num2calc;

        } else { 
            console.log("1 was clicked first!");
            num1.push(9);
            // concat array together
            num1calc = Number(num1.join(''));
            num1pressed = true;
            console.log("num1: " + num1);
            console.log("num1pressed: " + num1pressed);
            document.getElementById('display').value = num1calc;
        }
    });

    // if clear button is clicked reset all variables 
    document.getElementById("AC").addEventListener("click", function() {
        // reset the display 
        display = "0";
        num1 = [];
        num2 = [];
        num1calc;
        num2calc;
        num1pressed = false;
        num2pressed = false;
        operator;
        operatorSelected = false;
        document.getElementById('display').value = "0";
    });
    

    // Operator listeners
    document.getElementById('+').addEventListener("click", function() {
        // change display onclick 
        document.getElementById('display').value = '+';
        operator = '+';
        operatorSelected = true;
    });

    document.getElementById('-').addEventListener("click", function() {
        // change display onclick 
        document.getElementById('display').value = '-';
        operator = '-';
        operatorSelected = true;
    });

    document.getElementById('*').addEventListener("click", function() {
        // change display onclick 
        document.getElementById('display').value = '*';
        operator = '*';
        operatorSelected = true;
    });

    document.getElementById('/').addEventListener("click", function() {
        // change display onclick 
        document.getElementById('display').value = '/';
        operator = '/';
        operatorSelected = true;
    });

    // Calculate answer 
    document.getElementById('=').addEventListener("click", function() {
        // stop execution of the code if user has not selected an operator 
        if (operatorSelected == true) { 
            // Calculate answer 
                console.log(num1calc);
                console.log(num2calc);
                // if user pressed + 
                if (operator == '+') {
                    display = num1calc + num2calc;
                }
                // if user pressed = 
                if (operator == '-') {
                    display = num1calc - num2calc;
                }
                // if user pressed *
                if (operator == '*') {
                    display = num1calc - num2calc;
                }
                // if user pressed /
                if (operator == '/'){
                    display = num1calc - num2calc;
                }
            // change display to the calculated answer
            document.getElementById('display').value = display;
        } 
    });

