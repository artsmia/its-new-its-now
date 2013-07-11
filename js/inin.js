/*
36698 - //Francesco Clemente
113142 //Chuck Close
111112 //David Hockney
111293 //Ellsworth Kelly
113402 //Joel Shapiro
113164 //Kiki Smith
111355 //Roman Verosko

*/


function log(msg) {
    setTimeout(function() {
        throw new Error(msg);
    }, 0);
}



var objectIDArray = [36698,113142,111112,111293,113402,113164,111355];

$(document).ready(function () {
	
	$('#content').scroll(function() {
    	var x = $(this).scrollTop();
    	//$(this).css('background-position', '0% ' + parseInt(-x / 10) + 'px');
    	$(this).css('background-position', parseInt(-x / 10) + 'px 0%');
    });
});