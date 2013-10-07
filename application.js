$(document).ready(function() {

	$('#landingFeatureSection').delay(500).fadeIn(1000);

	/* hover-changing photo of me commented out: $('.imageHolder').on('mouseenter', function(){
		$('#serious').hide();
		$('#silly').show();
	});

	$('.imageHolder').on('mouseleave', function(){
		$('#silly').hide();
		$('#serious').fadeIn();
	});
*/

	var skillNormalize = function(){
		$('.blurbs').hide();
		$('.skillTitles').hide();
		$('.skillImgs').hide();
		$('#introBlurb').fadeIn();
	};

	$('#skillsTop').on('click', function(){
		skillNormalize();
	});


	$('#BinC').on('click', function(){
		skillNormalize();
		$('#introBlurb').hide();
		$('#chinaTitle').fadeIn();
		$('#chinaBlurb').fadeIn();
		$('#chinaImg').fadeIn();
	});

	$('#branding').on('click', function(){
		skillNormalize();
		$('#introBlurb').hide();
		$('#brandingTitle').fadeIn();
		$('#brandingBlurb').fadeIn();
		$('#brandingImg').fadeIn();
	});

	$('#BD').on('click', function(){
		skillNormalize();
		$('#introBlurb').hide();
		$('#BDTitle').fadeIn();
		$('#BDBlurb').fadeIn();
		$('#BDImg').fadeIn();
	});

	$('#product').on('click', function(){
		skillNormalize();
		$('#introBlurb').hide();
		$('#productTitle').fadeIn();
		$('#productBlurb').fadeIn();
		$('#productImg').fadeIn();
	});

	/*$('#OrgDev').on('click', function(){
		skillNormalize();
		$('#introBlurb').hide();
		$('#brandingTitle').fadeIn();
		$('#brandingBlurb').fadeIn();
		$('#brandingImg').fadeIn();
	});
	
	$('#investment').on('click', function(){
		skillNormalize();
		$('#introBlurb').hide();
		$('#brandingTitle').fadeIn();
		$('#brandingBlurb').fadeIn();
		$('#brandingImg').fadeIn();
	});

	$('#mgmt').on('click', function(){
		skillNormalize();
		$('#introBlurb').hide();
		$('#brandingTitle').fadeIn();
		$('#brandingBlurb').fadeIn();
		$('#brandingImg').fadeIn();
	});

	$('#community').on('click', function(){
		skillNormalize();
		$('#introBlurb').hide();
		$('#brandingTitle').fadeIn();
		$('#brandingBlurb').fadeIn();
		$('#brandingImg').fadeIn();
	});*/


});