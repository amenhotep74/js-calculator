// Refactored code using jquery and the eval() method.

// When document is loaded 
$(document).ready(function(){
    // when button 1 is clicked
    $("#1").click(function() {
        //display value to the display 
        document.getElementById("display").value += '1';
    });
    $("#2").click(function() {
        //display value to the display 
        document.getElementById("display").value += '2';
    });
    $("#3").click(function() {
        //display value to the display 
        document.getElementById("display").value += '3';
    });
    $("#4").click(function() {
        //display value to the display 
        document.getElementById("display").value += '4';
    });
    $("#5").click(function() {
        //display value to the display 
        document.getElementById("display").value += '5';
    });
    $("#6").click(function() {
        //display value to the display 
        document.getElementById("display").value += '6';
    });
    $("#7").click(function() {
        //display value to the display 
        document.getElementById("display").value += '7';
    });
    $("#8").click(function() {
        //display value to the display 
        document.getElementById("display").value += '8';
    });
    $("#9").click(function() {
        //display value to the display 
        document.getElementById("display").value += '9';
    });
    $("#0").click(function() {
        //display value to the display 
        document.getElementById("display").value += '0';
    });
    $("#dot").click(function(){
        document.getElementById("display").value += '.';
    });
    // On click for operators 
    $("#plus").click(function(){
        document.getElementById("display").value += '+';
    });
    $("#minus").click(function(){
        document.getElementById("display").value += '-';
    });
    $("#multi").click(function(){
        document.getElementById("display").value += '*';
    });
    $("#divide").click(function(){
        document.getElementById("display").value += '/';
    });
    // Equals button using the eval method which takes a string to calculate as a integer
    $("#equals").click(function(){
        // takes the values from the display to calculate and output to display
        document.getElementById("display").value = 
        eval(document.getElementById("display").value);
    });
    // clear button 
    $("#AC").click(function(){
        // return display to blank 
        document.getElementById("display").value = '';
    });
















});

