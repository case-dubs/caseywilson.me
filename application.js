$(document).ready(function() {

var skillNormalize = function(){
		$('.blurbs').hide();
		$('.skillTitles').hide();
		$('.skillImgs').hide();
		$('#introBlurb').fadeIn();
}

	$('#skillsTop').on('click', function(){
		skillNormalize();
	});



	$('#BinC').on('click', function(){
		$('#introBlurb').hide();
		$('#brandingTitle').fadeIn();
		$('#brandingBlurb').fadeIn();
		$('#brandingImg').fadeIn();
	});

	$('#BinC').off('click', function(){
		skillNormalize();
	});

	$('#branding').on('click', function(){
		$('#introBlurb').hide();
		$('#brandingTitle').fadeIn();
		$('#brandingBlurb').fadeIn();
		$('#brandingImg').fadeIn();
	});
//only correct one
	$('#BD').on('click', function(){
		$('#introBlurb').hide();
		$('#brandingTitle').fadeIn();
		$('#brandingBlurb').fadeIn();
		$('#brandingImg').fadeIn();
	});

	$('#product').on('click', function(){
		$('#introBlurb').hide();
		$('#brandingTitle').fadeIn();
		$('#brandingBlurb').fadeIn();
		$('#brandingImg').fadeIn();
	});

	$('#OrgDev').on('click', function(){
		$('#introBlurb').hide();
		$('#brandingTitle').fadeIn();
		$('#brandingBlurb').fadeIn();
		$('#brandingImg').fadeIn();
	});
	
	$('#investment').on('click', function(){
		$('#introBlurb').hide();
		$('#brandingTitle').fadeIn();
		$('#brandingBlurb').fadeIn();
		$('#brandingImg').fadeIn();
	});

	$('#mgmt').on('click', function(){
		$('#introBlurb').hide();
		$('#brandingTitle').fadeIn();
		$('#brandingBlurb').fadeIn();
		$('#brandingImg').fadeIn();
	});

	$('#community').on('click', function(){
		$('#introBlurb').hide();
		$('#brandingTitle').fadeIn();
		$('#brandingBlurb').fadeIn();
		$('#brandingImg').fadeIn();
	});


});