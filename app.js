$(document).ready(function() {
    var numOfButtons = 10;
    var clickCounter = 0;
    var num1 = 0;
    var num2 = 0;
    for (var i = 0; i < numOfButtons; i++) {
        $(".buttonHolder").append("<button id=" + "num" + i + ">" + i + "</button>");
    }
    $("button").on("click", function() {
        var num = $(this).text();
        clickCounter++;
        if (clickCounter % 2 == 1) {
            num1 = Number(num);
            $("#number1").text(num1);
            $("#number2").text(0);
            $("#result").text("pick next number")
        } else {
            num2 = Number(num);
            $("#number2").text(num2);
        }
        if (clickCounter%2 ==0){
          var total=num1+num2;
          $("#result").text(total);
        }
        console.log(num1, num2);
    });
});
