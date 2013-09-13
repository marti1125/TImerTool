
function btnEvents(btnName){
	$('#btn-' + btnName).click(function (){
		$('#settings-view').removeClass('bajar');
		$('.active').removeClass('active');		
		$('#titulo').html($('#' + btnName).attr('alt'));
        $('#estacion').attr('src','img/estacion.png');
        $('#mapa').attr('src','img/mapa.png');
        $('#twitter').attr('src','img/twitter.png');
        $('#info').attr('src','img/info.png');
        $('#'+btnName).attr('src','img/'+btnName+'2.png');
	});
}

$(document).ready(function(){
    
	

	  

    

    
 
	

	$('.active').addClass('active');
    $('#estacion').attr('src','img/estacion2.png');

  	var buttons = ['estacion', 'mapa', 'twitter', 'info'];
  		$.map(buttons, function(button){
    		btnEvents(button);
  		});

	
		
});
