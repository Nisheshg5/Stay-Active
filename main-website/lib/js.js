$(document).ready(function() {
	var h = $("#d1").outerHeight() + $("#d2").outerHeight() + $("#d3").outerHeight() + $(window).height();
	$("html").css('height', h+'px');



	if(localStorage.getItem("curlogin") == null)
		localStorage.setItem("curlogin",0);
	if (localStorage.getItem("curlogin") == 0) {
		$("#gymdesc22").css('display', 'none');
		$("#gyma1, #bdlk").click(info);
	}
	else if (localStorage.getItem("curlogin") == 1) {
		$("#gymdesc21").css('display', 'none');
		$("#bdlk").click(function() {
			window.location = "html/bd.html";
		});
		$("#gyma1").click(function() {
			window.location = "html/gymhp.html";
		});
		var i = localStorage.getItem("curloginno")
	} 
});


$(window).scroll(function() {	
	if ($(document).scrollTop() >= $("#d1").outerHeight()) {
		$("#d3").css('position', 'fixed');
		$("#d3").css('top', '0');
	}
	else {
		$("#d3").css('position', 'absolute');
		$("#d3").css('top', $("#d1").outerHeight() + 'px');
	}
	if ($(document).scrollTop() >= $("#d1").outerHeight() + $("#d3").outerHeight()) {
		$("#d2").css('position', 'fixed');
		$("#d2").css('top', '0');
	}
	else {
		$("#d2").css('position', 'absolute');
		$("#d2").css('top', $("#d1").outerHeight() + $("#d3").outerHeight() + 'px');
	}
	if (document.documentElement.scrollTop >= $("#d1").outerHeight() + $("#d3").outerHeight()*0.9) {
		$("#gymi, #gymdesc1, #gymdesc21, #gymdesc22, #gymdesc3").removeClass();
		$("#gymi").addClass('gymiani');
		$("#gymdesc1, #gymdesc21, #gymdesc22, #gymdesc3").addClass('gymdescani');
	}
	else if (document.documentElement.scrollTop <= $("#d1").outerHeight()) {
		$("#gymi, #gymdesc1, #gymdesc21, #gymdesc22, #gymdesc3").removeClass();
		$("#gymi").addClass('gymi');
		$("#gymdesc1, #gymdesc21, #gymdesc22, #gymdesc3").addClass('gymdesc');
	}
});





function info() {
		swal({
			type: "info",
			title: "This Content Is Only Available For Our Members",
			text: "Do You Want To Become A Member Now?",
			backdrop: true,
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes!',
			cancelButtonText: 'Not Now!',
		})
		.then((result) => {
			if (result.value) {
					window.location = "html/login.html";
			}
		});
	}




function info2() {
		swal({
			html: "We Understand It's A Big Commitment. <br> Are You Sure You Don't Want To Be Our Member Yet?<br> You Can Always Become A Member Again!",
			type: "warning",
			title: "You Will No Longer Be Our Member",
			backdrop: true,
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: "Yes! I Don't Want To Be A Member",
			cancelButtonText: 'No! I Want To Stay A Member!',
		})
		.then((result) => {
			if (result.value) {
				window.location = "index.html";
				localStorage.setItem("curlogin", 0);
			}
		});
	}