$('#alert').click( function(){
alert('You clicked me!');});


$('#makeRed').click( function(){$('#myFirstDiv').css('background-color','red');});
//initialize the variable "myNumber"
var myNumber =1;
//Listeners
//When the add button is clicked, increment myNumber
//and update page
$('#addOne').click(function(){myNumber = myNumber +1;
$('#myNumber').text(myNumber);
}
)

$('#SubstractOne').click(function(){myNumber = myNumber -1;
$('#myNumber').text(myNumber);
}
)




$('#makeBlue').click( function(){$('#myFirstDiv').css('background-color','blue');});


$('#makeGreen').click( function(){$('#myFirstDiv').css('background-color','green')

//$('#myNumber').text('5');

$('#myNumber').text('5');

});