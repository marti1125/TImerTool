
function btnEvents(btnName){
	$('#btn-' + btnName).click(function (){
		$('.active').removeClass('active');		
		$('.activeText').removeClass('activeText');			
        $('#alarm').attr('src','img/alarm.png');
        $('#timer').attr('src','img/timer.png');
        $('#chronometer').attr('src','img/chronometer.png');
        $('.activeText').css('color','rgb(98, 198, 245)');      
        $('#'+btnName).attr('src','img/'+btnName+'2.png');        
	});
}

$(document).ready(function(){	

	$('.active').addClass('active');
    $('#alarm').attr('src','img/alarm2.png');
    $('.activeText').addClass('activeText');   

  	var buttons = ['alarm', 'timer', 'chronometer'];
	$.map(buttons, function(button){
		btnEvents(button);
	});

		
});
