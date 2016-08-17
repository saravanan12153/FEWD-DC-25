$(document).ready(function(){

var total = 0;

$('#zero').click(addzero);
$('#add5').click(addfive);

$('#add10').click(addten);
 
$('#sub1').click(sub1);

function addzero(){
	total= 0;
	$('#result').html(total);
}

function addfive(){
	total=total+5;
	$('#result').html(total);
}
function addten(){
	total=total+10;
	$('#result').html(total);
}
function sub1(){
	total=total-1;
	$('#result').html(total);
}


 
 
});