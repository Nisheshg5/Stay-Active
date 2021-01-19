$(document).ready(function() {
	$("#df").click(function() {
		$("#cross").trigger('click');
	}).children().click(function() {
		return false;
	});



	var h = ($(window).height())/2 - (325/2) +5;
	$("#cbdf1").css('top', h + 'px');
	$("#cbdf2").css('top', h + 65 + 'px');
	$("#cbdf3").css('top', h + 130 + 'px');
	$("#cbdf4").css('top', h + 195 + 'px');
	$("#cbdf5").css('top', h + 260 + 'px');
});



$(window).resize(function() {
	var h = ($(window).height())/2 - (325/2) +5;
	$("#cbdf1").css('top', h + 'px');
	$("#cbdf2").css('top', h + 65 + 'px');
	$("#cbdf3").css('top', h + 130 + 'px');
	$("#cbdf4").css('top', h + 195 + 'px');
	$("#cbdf5").css('top', h + 260 + 'px');
});








function scrollCB() {
	var h = $("#muscleimg").offset().top + $("#muscleimg").height() - $(window).height();
    if (document.documentElement.scrollTop >= h) {
        document.getElementById("cbdf1").style.right = "-130px";
        document.getElementById("cbdf2").style.right = "-130px";
        document.getElementById("cbdf3").style.right = "-130px";
        document.getElementById("cbdf4").style.right = "-130px";
        document.getElementById("cbdf5").style.right = "-130px";
    }
    else {
        document.getElementById("cbdf1").style.right = "-185px";
        document.getElementById("cbdf2").style.right = "-185px";
        document.getElementById("cbdf3").style.right = "-185px";
        document.getElementById("cbdf4").style.right = "-185px";
        document.getElementById("cbdf5").style.right = "-185px";
    }
}








function cb() {
	var cb1 = document.getElementById("cb1");
	var cb2 = document.getElementById("cb2");
	var cb3 = document.getElementById("cb3");
	var cb4 = document.getElementById("cb4");
	var cb5 = document.getElementById("cb5");
	var df1 = document.getElementsByClassName("df1");
	var df2 = document.getElementsByClassName("df2");
	var df3 = document.getElementsByClassName("df3");
	var df4 = document.getElementsByClassName("df4");
	var df5 = document.getElementsByClassName("df5");


	if (cb1.checked == true) {
		for (var i = 0; i < df1.length; i++) {
			df1[i].style.display = "inline-block";
		}
	}
	else {
		for (var i = 0; i < df1.length; i++) {
			df1[i].style.display = "none";
		}
	}


	if (cb2.checked == true) {
		for (var i = 0; i < df2.length; i++) {
			df2[i].style.display = "inline-block";
		}
	}
	else {
		for (var i = 0; i < df2.length; i++) {
			df2[i].style.display = "none";
		}
	}


	if (cb3.checked == true) {
		for (var i = 0; i < df3.length; i++) {
			df3[i].style.display = "inline-block";
		}
	}
	else {
		for (var i = 0; i < df3.length; i++) {
			df3[i].style.display = "none";
		}
	}


	if (cb4.checked == true) {
		for (var i = 0; i < df4.length; i++) {
			df4[i].style.display = "inline-block";
		}
	}
	else {
		for (var i = 0; i < df4.length; i++) {
			df4[i].style.display = "none";
		}
	}


	if (cb5.checked == true) {
		for (var i = 0; i < df5.length; i++) {
			df5[i].style.display = "inline-block";
		}
	}
	else {
		for (var i = 0; i < df5.length; i++) {
			df5[i].style.display = "none";
		}
	}
}










function divclose() {
	$("#df").css({
		opacity: '0',
		zIndex: '-1'
	});
	document.getElementById("viddf").src = "";
	$("body").removeClass('modal-open');
	$(".content").hide();
}










/* Display Video And Content */
function dispdf101() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = 'https://www.youtube.com/embed/SibjPw9Khz4';
	document.getElementById("df101").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf102() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = 'https://www.youtube.com/embed/u5Hr3rNUZ24';
	document.getElementById("df102").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf103() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/i9u-svNHgao";
	document.getElementById("df103").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf104() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src ="https://www.youtube.com/embed/y3rJ5AzoQzk";
	document.getElementById("df104").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf105() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/P8DOZRtIIEQ";
	document.getElementById("df105").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf106() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/R0mMyV5OtcM";
	document.getElementById("df106").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf107() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/ar3BGF8do7I";
	document.getElementById("df107").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf108() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/XewzQ9MRDh8";
	document.getElementById("df108").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf109() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/5oj9-4ZQes4";
	document.getElementById("df109").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf110() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/g0XGO6HNPeY";
	document.getElementById("df110").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf201() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/32bzgV0lMRE";
	document.getElementById("df201").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf202() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/WK1t1-d2t1Y";
	document.getElementById("df202").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf203() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/o9XOgcw0eBo";
	document.getElementById("df203").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf204() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/YlsGj8v6hPs";
	document.getElementById("df204").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf205() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/9OVKJsNkMpE";
	document.getElementById("df205").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf206() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/-VXIVZXYyFo";
	document.getElementById("df206").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf207() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = src="https://www.youtube.com/embed/ns8JUSLod1I";
	document.getElementById("df207").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf208() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/QiuJ3ZFAiBg";
	document.getElementById("df208").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf209() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/mY-_xYd7nXU";
	document.getElementById("df209").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf210() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/A2jill_Lf0Y";
	document.getElementById("df210").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf301() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/KakbbW7Fz9Y";
	document.getElementById("df301").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf302() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/HY3Q7lBeb_M";
	document.getElementById("df302").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf303() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/gke_wunq7Ng";
	document.getElementById("df303").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf304() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/0hec67I04P8";
	document.getElementById("df304").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf305() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/YCCYBNlzUcg";
	document.getElementById("df305").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf306() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/OjeveoQgp6I";
	document.getElementById("df306").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf307() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/EfcrSJwjZzg";
	document.getElementById("df307").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf308() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/69Mg5mKxlOg";
	document.getElementById("df308").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf309() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/nNe1p2uPt_g";
	document.getElementById("df309").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf310() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/U7K6yFOjsJI";
	document.getElementById("df310").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf401() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/OUo0QofYx28";
	document.getElementById("df401").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf402() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/QOHJTIIfs9g";
	document.getElementById("df402").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf403() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src ="https://www.youtube.com/embed/5Yz9odanXN4";
	document.getElementById("df403").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf404() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/FR1BtM2CpRg";
	document.getElementById("df404").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf405() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/PSBGp79toaQ";
	document.getElementById("df405").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf406() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/qFYpy48x4ys";
	document.getElementById("df406").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf407() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/7f9XpgN9f6k";
	document.getElementById("df407").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf408() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/oudLZLcA3Gs";
	document.getElementById("df408").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf409() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/0IYlUbxwzOQ";
	document.getElementById("df409").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf410() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/EWoxVdAd-HI";
	document.getElementById("df410").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf411() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/5uVaKjtJHN8";
	document.getElementById("df411").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf412() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/P_5sIhCRmNM";
	document.getElementById("df412").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf413() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/FhXhOwlY2Ck";
	document.getElementById("df413").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf414() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/Ov2JzQrJ9XI";
	document.getElementById("df414").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf415() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/_Ov-lSkpOyI";
	document.getElementById("df415").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf501() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/HReVjURVMPs";
	document.getElementById("df501").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf502() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/9V9I1KbJvs0";
	document.getElementById("df502").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf503() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/EG3E1KX3Ti4";
	document.getElementById("df503").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf504() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/eHUX2Gz_dhg";
	document.getElementById("df504").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf505() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/fx9Lx9S4_xg";
	document.getElementById("df505").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf506() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/8lvKyuhdAT0";
	document.getElementById("df506").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf507() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/AFStdx5SCEE";
	document.getElementById("df507").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf508() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/s3zAG4zvVpc";
	document.getElementById("df508").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf509() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/zpeN0xX1VVg";
	document.getElementById("df509").style.display = "block";
	$("body").addClass('modal-open');
}


function dispdf510() {
	$("#df").css({
		opacity: '1',
		zIndex: '999'
	});
	$("#dfcon").scrollTop(0);
	document.getElementById("viddf").src = "https://www.youtube.com/embed/_Xm3GEDVmbM";
	document.getElementById("df510").style.display = "block";
	$("body").addClass('modal-open');
}