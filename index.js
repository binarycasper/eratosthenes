function calculate()
{
    var numberInput = document.getElementById("number").value;
    var output = ''; 
    
    var primes = [];
    var sqrtnumberInput = Math.sqrt(numberInput) - 2;
    var numbers = new Array();

    for (var i = 2; i <= numberInput; i++) 
        numbers.push(i); 
    
    for (var i = 0; i <= sqrtnumberInput; i++) {
    var p = numbers[i]
    if (p)
        for (var j = p * p - 2; j < numbers.length; j += p)
            numbers[j] = 0;
    }
    
    for (var i = 0; i < numbers.length; i++) {
        var p = numbers[i];
        if (p)
            primes.push(p);
    }

    for (var i = 0; i < numbers.length; i++)
    {
        if (numbers[i] != 0)
        output = output + '<div id="prime">' + (i + 2) + '</div>'; 
        else  
        output = output + '<div id="notprime">' + (i + 2) + '</div>';
    }

    document.getElementById("gridContainer").innerHTML = output; 
}







