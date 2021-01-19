/* Scroll */
function scrollto(a) {
	$(document).scrollTop($("#"+a).offset().top - 50);
}

$(document).scroll(function() {


	if (window.matchMedia('(max-width: 768px)').matches) {
		if ($(document).scrollTop()<=50) {
			$("#choice1, #choice2, #menua, #menuc").css('top', (50-$(document).scrollTop()) + "px");
		}
		else 
			$("#choice1, #choice2, #menua, #menuc").css('top', "0px");
		
	} else {
		$("#choice1, #choice2, #menua, #menuc").css('top', "50px");
	}
});



/* Animation */
	$(document).ready(function() {
		$("#topnav").removeClass().addClass('topnavani');
		setTimeout(appear, 1000);


		$(".sidenava button, .sidenavc button").click(function(event) {
			/* Act on the event */
			$(".sidenava, .sidenavc").trigger('mouseleave');
		});


	});
	function appear() {
		$("#choiceh2").removeClass().addClass('slidedownh2');
		$("#choicechild").removeClass().addClass('btn choicechild');
		$("#choiceadult").removeClass().addClass('btn choiceadult');
	}
	function disappear() {
		$("#choiceh2").removeClass().addClass('slidedownh2rev');
		$("#choicechild").removeClass().addClass('btn choicechildrev');
		$("#choiceadult").removeClass().addClass('btn choiceadultrev');
	}

	function appearadult() {
		$("#choice002").removeClass().addClass('choice2ani');
		$("#menua").removeClass().addClass('menuani');
		$("#adult").removeClass().addClass('adultani');
	}

	function disappearadult() {
		$("#choice002").removeClass().addClass('choice2rev');
		$("#menua").removeClass().addClass('menurev');
		$("#adult").removeClass().addClass('adultrev');
	}

	function appearchild() {
		$("#choice001").removeClass().addClass('choice1ani');
		$("#menuc").removeClass().addClass('menuani');
		$("#child").removeClass().addClass('childani');
	}

	function disappearchild() {
		$("#choice001").removeClass().addClass('choice1rev');
		$("#menuc").removeClass().addClass('menurev');
		$("#child").removeClass().addClass('childrev');
	}














/* Choice */
	function choicea() {
		disappear();
		setTimeout(appearadult,900);
		setTimeout(choiceadisp,900);
	}

	function choiceadisp() {
		$("#choice").css('display', 'none');
		$("#menua").css('display', 'block');
		$("#adult").css('display', 'block');
		$("#choice2").css('display', 'block');
	}


	function choicec() {
		$("#choiceh2").removeClass().addClass('slidedownh2rev');
		$("#choicechild").removeClass().addClass('btn choicechildrev');
		$("#choiceadult").removeClass().addClass('btn choiceadultrev');
		setTimeout(choicecdisp,900);
		setTimeout(appearchild,900);
	}

	function choicecdisp() {
		$("#choice").css('display', 'none');
		$("#menuc").css('display', 'block');
		$("#child").css('display', 'block');
		$("#choice1").css('display', 'block');
	}


/* Wrong Choice */
	function choice() {
		disappearadult();
		disappearchild();
		setTimeout(choicedisp,900);
		setTimeout(appear,900);
	}


	function choicedisp() {
		$("#choice").css('display', 'block');
		$("#menuc").css('display', 'none');
		$("#menua").css('display', 'none');
		$("#choice1").css('display', 'none');
		$("#choice2").css('display', 'none');
		$("#child").css('display', 'none');
		$("#adult").css('display', 'none');
	}


$(document).ready(function() {

/* Side Bar Appearing And Disappearing */

	/* Adult */

		/* menua */

			$("#menua").mouseenter(function() {
				$("#sidenava").css('width', '400px');
				$("#panela1").slideUp('slow');
			});

			/* sidenava */

				$("#sidenava").mouseenter(function() {
					$("#panela1").css('display', 'none');
				});
				$("#sidenava").mouseleave(function() {
					$("#sidenava").css('width', '0px');
					$("#panela1").slideUp('slow');
				});

				/* add1 */
					$("#add1").mouseenter(function() {
						$("#panela1").slideUp('fast');
					});
				/* add2 */
					$("#add2").mouseenter(function() {
						$("#panela1").slideDown('fast');
					});
				/* add3 */
					$("#add3").mouseenter(function() {
						$("#panela1").slideUp('fast');
					});

	/* Child */

		/* menuc */

			$("#menuc").mouseenter(function() {
				$("#sidenavc").css('width', '400px');
				$("#panelc1").slideUp('fast');
				$("#panelc2").slideUp('fast');
			});		

			/* sidenavc */

				$("#sidenavc").mouseleave(function() {
					$("#sidenavc").css('width', '0px');
					$("#panelc1").slideUp('fast');
					$("#panelc2").slideUp('fast');
				});

				$("#sidenavc").mouseenter(function() {
					$("#panelc1").slideUp('fast');
					$("#panelc2").slideUp('fast');
				});


				/* cdd2 */
					$("#cdd2").mouseenter(function() {
						$("#panelc1").slideUp('fast');
					});
				/* cdd3 */
					$("#cdd3").mouseenter(function() {
						$("#panelc1").slideDown('fast');
					});
				/* cdd4 */
					$("#cdd4").mouseenter(function() {
						$("#panelc1").slideUp('fast');
						$("#panelc2").slideUp('fast');
					});
				/* cdd5 */
					$("#cdd5").mouseenter(function() {
						$("#panelc2").slideDown('fast');
					});

					/* panelc1 */
						$("#panelc1").mouseleave(function() {
							$("#panelc1").slideUp('fast');
						});
					/* panelc2 */
						$("#panelc2").mouseleave(function() {
							$("#panelc2").slideUp('fast');
						});
});