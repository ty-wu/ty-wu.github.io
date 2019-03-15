//
$('#chbio').click(function(){ 
	$('.eng').hide();
	$('.chn').show();
});
$('#enbio').click(function(){ 
	$('.eng').show();
	$('.chn').hide();
});

//------------------------------------- Navigation setup ------------------------------------------------//

$('a.scroll').smoothScroll({
        speed: 800,
        offset: -78
});

$('a.scroll').click(function(e){
	
	e.preventDefault();
	$('.wrapper').toggleClass('showNav');
	$('.mainHeader').toggleClass('showNav');
	$('.offestNavCanvas').toggleClass('showNav');
	
});


$('.showOffsetNav').click(function(e){
	
	e.preventDefault();
	$('.wrapper').toggleClass('showNav');
	$('.mainHeader').toggleClass('showNav');
	$('.offestNavCanvas').toggleClass('showNav');


	
});

$('body').click(function(e) {
    var target = $(e.target);
    if(!target.is('.btn') && !target.is('a.showOffsetNav') && !target.is('.offestNavCanvas')) {
    	if($('.mainHeader').hasClass('showNav')){
			$('.wrapper').toggleClass('showNav');
			$('.mainHeader').toggleClass('showNav');
			$('.offestNavCanvas').toggleClass('showNav');
		}
    }
});

