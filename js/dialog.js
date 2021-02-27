$( function() {
	$( ".widget button" ).button();
	$( "button" ).click(function() {

		$('#block').text("This load was paid on delivery. If load is updated successfully would you like to be redirected to the payment creation screen?");
		
		$( "#block" ).dialog({
			height: "auto",
			width: 400,
			modal: true,
			buttons: {
				Yes: function() {
					$( this ).dialog( "close" );
					},
				No: function() {
					$( this ).dialog( "close" );
					}
			},
			open: function(){
	            $('.ui-widget-overlay').bind('click',function(){
	                $('#block').dialog('close');
	            })
	        }
		})
    });
});