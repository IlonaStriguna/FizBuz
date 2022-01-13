const inputMin = document.getElementById("minInput"); //W3C
    const inputMax = document.getElementById("maxInput"); 
    const main = document.getElementById("container"); 

// initial values
    inputMin.value = 1;
    inputMax.value = 100;

const create = function () {            //Creating function that will generate 100 divs
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    };

    
      for (let i = 1; i <= 100; i++) {     
         let newDiv = document.createElement("div");
         let newPar = document.createElement("p");

        newDiv.appendChild(newPar);
        main.appendChild(newDiv).setAttribute("id", "div_" + i);    //giving "id" name to divs

        if (i < inputMin.value || i > inputMax.value) {
            newDiv.style = "display: none";
        } else {
            if (i % 3 === 0 && i % 5 === 0) {                              
                newPar.appendChild(document.createTextNode(i + ' FIZZ BUZZ'));
                main.appendChild(newDiv).setAttribute("class", "fizbuz");   //add class to divs

            } else if (i % 3 === 0) {
                newPar.appendChild(document.createTextNode(i + ' FIZZ'));
                main.appendChild(newDiv).setAttribute("class", "fiz");

            } else if (i % 5 === 0) {
                newPar.appendChild(document.createTextNode(i + ' BUZZ'));
                main.appendChild(newDiv).setAttribute("class", "buz");

            } else {
                newPar.appendChild(document.createTextNode(i));
                main.appendChild(newDiv).setAttribute("class", "num");
            }
        }
    }
};    

create();
 
//This adds an event to the first INPUT - sets the min value.

     inputMin.onkeyup = function (e) {
        this.value = inputMin.value.replace(/^(0*)/, "");
        if (inputMin.value >= 1 && inputMin.value <= 100) {
            this.value = inputMin.value;
        } else if (inputMin.value.length === 0) {
            inputMin.value = null;
        } else {
            inputMin.value = null;
            alert("Incorrect number!");
        }
        if (!((e.keyCode > 95 && e.keyCode < 106)
            || (e.keyCode > 47 && e.keyCode < 58)
            || [8, 13, 37, 39].indexOf(e.keyCode) >= 0
        )) {
            return false;
        }
        create();
    };
 
//This adds an event to the second INPUT - sets max value.

    inputMax.onkeyup = function (e) {
        this.value = inputMax.value.replace(/^(0*)/, "");
        if (inputMax.value >= 1 && inputMax.value <= 100) {
            this.value = inputMax.value;
        } else if (inputMax.value.length === 0) {
            inputMax.value = null;
            
        } else {
            inputMax.value = null;
            alert("Incorrect number!");
        }
        if (!((e.keyCode > 95 && e.keyCode < 106)
            || (e.keyCode > 47 && e.keyCode < 58)
            || [8, 13, 37, 39].indexOf(e.keyCode) >= 0
        )) {
            return false;
        }
        create();
    };
