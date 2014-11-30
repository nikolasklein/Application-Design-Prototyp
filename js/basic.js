$(document).ready(function(){

    $(".numberwrapper").click(function(){
        event.stopPropagation();
    });
   
    $(".discard, .numberwrapper").click(function(){
        var thisOne = $(this).parent();
        var child = thisOne.children(".downloadAll");
        child.addClass("inactive");
        thisOne.parent().children(".readmore").children("li").children(".download").addClass("inactive");
        thisOne.parent().children(".readmore").children("li").children(".discardRight").addClass("inactive");        
        child.html("<div class='number'>0</div>");
        thisOne.addClass("noFiles");
    });
    
    $(".discardRight").click(function(){
        var thisOne = $(this).parent().children(".download");
        var wholenumber = $(this).parent().parent().parent().children(".course").children(".downloadAll").children(".number");
        switch (wholenumber.html()){
            case "9":
                wholenumber.html("8");
                break;
            case "8":
                wholenumber.html("7");
                break;
            case "7":
                wholenumber.html("6");
                break;
            case "6":
                wholenumber.html("5");
                break;
            case "5":
                wholenumber.html("4");
                break;
            case "4":
                wholenumber.html("3");
                break;
            case "3":
                wholenumber.html("2");
                break;
            case "2":
                wholenumber.html("1");
                break;
            case "1":
                wholenumber.html("0");
                wholenumber.parent().addClass("inactive");
                wholenumber.parent().parent().addClass("noFiles");
                break;
        }
        thisOne.addClass("inactive");
        $(this).addClass("inactive");
    });

    $(".readmore li").click(function(){
        var thisOne = $(this).children(".download");
        $(this).children(".discardRight").addClass("inactive");        
        var wholenumber = $(this).parent().parent().children(".course").children(".downloadAll").children(".number");
        switch (wholenumber.html()){
            case "9":
                wholenumber.html("8");
                break;
            case "8":
                wholenumber.html("7");
                break;
            case "7":
                wholenumber.html("6");
                break;
            case "6":
                wholenumber.html("5");
                break;
            case "5":
                wholenumber.html("4");
                break;
            case "4":
                wholenumber.html("3");
                break;
            case "3":
                wholenumber.html("2");
                break;
            case "2":
                wholenumber.html("1");
                break;
            case "1":
                wholenumber.html("0");
                wholenumber.parent().addClass("inactive");
                wholenumber.parent().parent().addClass("noFiles");
                break;
        }
        thisOne.addClass("inactive");
    }); 
   
    
    $(".course").click(function(){
		var thisOne = $(this).parent();
		
		var x=thisOne.offset().top;
		var w=$(document).scrollTop();
		var thisActive = thisOne.hasClass("active");


		thisOne.toggleClass("active");		

		thisOne.children(".readmore").slideToggle(300, "easeInOutCubic", function(){		
			if(!thisActive){
				var z=thisOne.outerHeight();
				var y=$(window).height();
				
				if(y<x-w+z){
					$("html, body").animate({ scrollTop: x-y/15}, 300, "easeInOutCubic");
				}else if(y-((x-w)+z) < 50){
					$("html, body").animate({ scrollTop: x-y/15}, 300, "easeInOutCubic");
				}else if(w>x){
					$("html, body").animate({ scrollTop: x-y/15}, 300, "easeInOutCubic");
				};
			}
		});

		onceclicked = false;

		var checkIfOpen = $(".course").get();
		$.each(checkIfOpen, function(i, item){
			if($(item).hasClass("active")){
				onceclicked = true;
			}
		});
	});


});

/* ################## alter code vom tutorienprogramm

window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

var windowHeight = $(window).height();
var	windowWidth = $(window).width();
var onceclicked = false;
var waited = false;


$(document).ready(function(){

	
	windowHeight = $(window).height();
	windowWidth = $(window).width();
	$(".furtherinfo").click(function(event){
		event.stopPropagation();
	});
	
	$(".tutorium").click(function(){
		var thisOne = $(this);
		
		var x=thisOne.offset().top;
		var w=$(document).scrollTop();
		var thisActive = thisOne.hasClass("active");

		
		if(thisActive){
			thisOne.addClass("backgroundBack");
		}else{
			thisOne.removeClass("backgroundBack");
		}

		thisOne.toggleClass("active");		

		thisOne.children(".furtherinfo").slideToggle(300, "easeInOutCubic", function(){		
			if(!thisActive){
				var z=thisOne.outerHeight();
				var y=$(window).height();
				
				if(y<x-w+z){
					$("html, body").animate({ scrollTop: x-y/15}, 300, "easeInOutCubic");
				}else if(y-((x-w)+z) < 50){
					$("html, body").animate({ scrollTop: x-y/15}, 300, "easeInOutCubic");
				}else if(w>x){
					$("html, body").animate({ scrollTop: x-y/15}, 300, "easeInOutCubic");
				};
			}
		});

		onceclicked = false;

		var checkIfOpen = $(".tutorium").get();
		$.each(checkIfOpen, function(i, item){
			if($(item).hasClass("active")){
				onceclicked = true;
			}
		});
	});
	
	$("header div").addClass("fadeInSide");
	
	$("header").removeClass("nobg");

	
	
	$(".points").waypoint(function(direction) {
		if(windowWidth > 699){
			var divs = $(".pointFade").get();
	
			$.each(divs, function(i, item) {
				//console.log(i);
				setTimeout(function() {
					$(item).addClass("fadeInUp");
				}, 80 * i);
			});			
		}
	}, {offset: windowHeight-35});

	$(".points").waypoint(function(direction) {
		if(windowWidth > 699 && direction == "up" && !onceclicked){
			var divs = $(".pointcolumn").get();
	
			$.each(divs, function(i, item) {
				//console.log(i);
				setTimeout(function() {
					$(item).removeClass("fadeInUp");
				}, 170 * i);
			});			
		}
	}, {offset: windowHeight-10});
	
	
	$(".pointcolumn").waypoint(function(direction){
		if(windowWidth < 700 && !onceclicked){
			$(this).addClass("fadeInUp");
		}
	}, {offset: windowHeight-35});


	
	$(".pointcolumn").waypoint(function(direction){
		if(windowWidth < 700 && direction == "up" && !onceclicked){
			$(this).removeClass("fadeInUp");
		}
	}, {offset: windowHeight-10});



	$(".moreinformation").waypoint(function(direction) {
		var divs = $(".elementFade").get();

		$.each(divs, function(i, item) {
			//console.log(i);
			setTimeout(function() {
				$(item).addClass("fadeInUp");
			}, 150 * i);
		});
	}, {offset: windowHeight-35});
	
	$(".moreinformation").waypoint(function(direction) {
		if(direction == "up" && !onceclicked){
			var divs = $(".elementFade").get();
	
			$.each(divs, function(i, item) {
				//console.log(i);
				setTimeout(function() {
					$(item).removeClass("fadeInUp");
				}, 150 * i);
			});
		}
	}, {offset: windowHeight-10});


	
	
	

	$(".elementFadeIn").waypoint(function(direction) {
		$(this).addClass("fadeInUp");
		$(this).children(".applybutton").addClass("fadeInUp");
	}, {offset: windowHeight-35});

	$(".elementFadeIn").waypoint(function(direction) {
		if(direction == "up" && !onceclicked){
			$(this).removeClass("fadeInUp");
			$(this).children(".applybutton").removeClass("fadeInUp");
		}
	}, {offset: windowHeight-10});



	$(".tutorium").waypoint(function(direction) {
		$(this).addClass("fadeInSide");		
	}, {offset: windowHeight-35});	
	
	$(".tutorium").waypoint(function(direction) {
		if(direction == "up" && !onceclicked){
			$(this).removeClass("fadeInSide");
		}
	}, {offset: windowHeight-10});
	
	
	
	
	
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top-30
				}, 600, "easeInOutCubic");
				return false;
			}
		}
	});	
	
});



$(window).resize(function(){
	windowHeight = $(window).height();
	windowWidth = $(window).width();
});
*/