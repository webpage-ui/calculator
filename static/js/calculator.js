function EvaluateMathOperation(){
    math_string = document.getElementById("operation").value;
    result = eval(math_string);
    document.getElementById("operation").value = result; 
}