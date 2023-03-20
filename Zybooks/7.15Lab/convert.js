window.addEventListener('DOMContentLoaded', domLoaded);

function convertCtoF(degreesCelsius) {
    var CtoF = degreesCelsius * 9 / 5 + 32;
    return CtoF;
}
function convertFtoC(degreesFahrenheit) {
    var FtoC = (degreesFahrenheit - 32) * 5 / 9;
    return FtoC;
}

function domLoaded() {
    //fetch convert btutton using id using getElementById
    var convertBtn = document.getElementById("convertButton");

    //fetch Error Msg displayer using id using getElementById
    var errMsg = document.getElementById("errorMessage");

    //fetch Error celsiusIn input using id using getElementById
    var celsiusIn = document.getElementById("cInput");

    //fetch Error fahrenheitIn input using id using getElementById
    var fahrenheitIn = document.getElementById("fInput");

    //fetch Error image using id using getElementById
    var img = document.getElementById("weatherImage")

    //add evenetlistener on button    
    convertBtn.addEventListener("click", function () {
        // get value of both input in celsius and fahrenheit
        var celsius = parseFloat(celsiusIn.value);
        var fahrenheit = parseFloat(fahrenheitIn.value);
        // if any of input in NaN then assing value to 0
        if(isNaN(celsius)) celsius = 0; 
        if(isNaN(fahrenheit)) fahrenheit = 0;
        //make empty errMsg div
        errMsg.innerHTML = "";
        // fahrenheit less than 32 than set img src to ice 
        if (fahrenheit < 32) {
            img.setAttribute("src", "cold.png");
        }
        // fahrenheit geater than 32 than and less than 50  set img src to rain 
        else if (fahrenheit >= 32 && fahrenheit <= 50) {
            img.setAttribute("src", "cool.png");
        }// fahrenheit geater than 50 set img src to sun 
        else if (fahrenheit > 50) {
            img.setAttribute("src", "warm.png");
        }
        else {
            console.log("non");
        }


        // celsius not 0  
        if (celsius != 0 ) {    //cheack input is valid or not
            console.log("here")
            if (Math.sign(celsius) == 1 || Math.sign(celsius) == -1) {
                //conver value in integer format
                ans = convertCtoF(celsius);
                // ans less than 32 than set img src to ice 
                if (ans < 32) {
                    img.setAttribute("src", "cold.png");
                }// ans geater than 32 than and less than 50  set img src to rain
                else if (ans >= 32 && ans <= 50) {
                    img.setAttribute("src", "cool.png");
                }// ans geater than 50 set img src to sun 
                else if (ans > 50) {
                    img.setAttribute("src", "warm.png");
                }
                else {
                    console.log("non");
                }

                // put fahrenheitIn input value to ans
                fahrenheitIn.value = ans;
            }
            else {//otherwise set src  empty and display error errMsg
                img.setAttribute("src", "");
                errMsg.innerHTML = celsius + " is not a number";
            }
        }
        else if (fahrenheit != 0) //if fahrenheit notqual to 0
        {
            if (Math.sign(fahrenheit) == 1 || Math.sign(fahrenheit) == -1)//cheack fahrenheit input is valid or not
            {
                //conver fahrenheit in to integer
                ans = convertFtoC(fahrenheit);
                //put celsius input value to ans
                celsiusIn.value = ans;

            }
            else { //otherwise empty img and display error
                img.setAttribute("src", "");
                errMsg.innerHTML = fahrenheit + " is not a number";
            }
        }
        else { //cheack if input value is empty than display error
            errMsg.innerHTML = fahrenheit + " is not a number";
        }
    });


    //add celsiusIn on input evenetlistener
    celsiusIn.addEventListener('input', function () {
        fahrenheitIn.value = "";
    });

    //add fahrenheitIn on input evenetlistener
    fahrenheitIn.addEventListener('input', function () {
        celsiusIn.value = "";
    });

}