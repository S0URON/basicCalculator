let currentValue = "";
let currentOperation ="";
let currentResult = 0;


document.querySelectorAll("button").forEach((e) => {
    e.onclick = () => {
        if(["*","/","+","-"].includes(e.innerHTML)){
            currentOperation = e.innerHTML;
            if((currentOperation === "/" || currentOperation === "*") && !currentResult)
                currentResult = 1;
            if(currentValue)
                eval(`currentResult${currentOperation}=${currentValue}`);
            currentValue = "";
        }
        else if( ["0","1","2","3","4","5","6","7","8","9"].includes(e.innerHTML)){
            currentValue += e.innerHTML;
        }
        else if(e.innerHTML === "="){
            eval(`currentResult${currentOperation}=${currentValue}`);
            currentValue = "";
            currentOperation = "";
        }
        if(currentResult)
            document.getElementById("result").innerHTML = "result :" + currentResult;

        console.log("currentValue : ",currentValue);
        console.log("currentOperation : ",currentOperation);
        console.log("currentResult:", currentResult);
    }
})