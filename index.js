var index;
var numberInput;
var numbers; 
var primes;

function calculate()
{
    numberInput = document.getElementById("number").value;
    index = 0;
    numbers = new Array();
    primes = new Array();
    var output = ''; 

    for (var i = 2; i <= numberInput; i++) {
        numbers.push(i); 
    }

    while (index < numbers.length) {
        doChunk();
        index++;
    } 

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] != 0) {
            primes.push(numbers[i]);
        }
    }

    for (var i = 0; i < primes.length; i++) {
        output = output + '<div class="numberContainer">' + (primes[i]) + '</div>'; 
    }

    document.getElementById("gridContainer").innerHTML = output; 
}

function doChunk() {
    var chunk = 10;
    var count = chunk;
    var sqrtnumberInput = Math.sqrt(numberInput) - 2;

    while (count-- && index < numbers.length) {
        for (var i = 0; i <= sqrtnumberInput; i++) {
            var p = numbers[i]
            if (p) {
                for (var j = p * p - 2; j < numbers.length; j += p) {
                    numbers[j] = 0;
                }
            }
        }
    }
} 






