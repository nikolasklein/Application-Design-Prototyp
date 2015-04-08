$(document).ready(function(){
    
    var saveDocumentTitle = document.title;
    var mainContentHeight = $(".mainContent")[0].scrollHeight;
    

    $(".number").click(function(){
        $(".tinderview").fadeIn(200);
        $(".tinderview").addClass("show");
        showNextFile();
        newNumber = $(this).html();
        document.title = "1/" + newNumber + " neuen Dateien";
        $(".mainContent").disablescroll();

        var newHeight = $(".main").height() - $(".information").outerHeight();
        $(".contentwrapper, .decision").css({"height" : newHeight + "px" });
        
    });
    

    $(".tinderview").click(function(){
        $(".tinderview").fadeOut(200);
        $(".tinderview").removeClass("show");
        document.title = saveDocumentTitle;
        $(".mainContent").disablescroll("undo");
    })

    $(".startPage.fromTop, .courseWrapper").each(function(i){
        var whichOne = $(this);
        setTimeout(function(){
            whichOne.removeClass("fromTop")
        }, 35*i);
    });

    $(".tinderview .controls, .tinderview .main").click(function(event){
        event.stopPropagation();
    })
    
    $("#inventiondesign").click(function(){
        $("#inventiondesignTitle").removeClass("fromRight");
        $("#startPageTitle").addClass("fromLeft");
        $("nav").addClass("courseView");
        $("#inventionContents").removeClass("fromRight");
        $(".courseWrapper").each(function(i){
	        var whichOne = $(this);
	        setTimeout(function(){
	            whichOne.addClass("fromLeft")
	        }, 35*i);
        })

        $(".file").each(function(i){
	        var whichOne = $(this);
	        setTimeout(function(){
	            whichOne.removeClass("fromRight")
	        }, 35*i);
        })

    })

    $("#inventiondesignTitle span").click(function(e){
		e.stopPropagation();
    });

    $("#inventiondesignTitle").click(function(){
        $("#inventiondesignTitle").addClass("fromRight");
        $("#startPageTitle").removeClass("fromLeft");
        $("nav").removeClass("courseView");
        $("#inventionContents").addClass("fromRight");

        $(".courseWrapper").each(function(i){
	        var whichOne = $(this);
	        setTimeout(function(){
	            whichOne.removeClass("fromLeft")
	        }, 35*i);
        })

        $(".file").each(function(i){
	        var whichOne = $(this);
	        setTimeout(function(){
	            whichOne.addClass("fromRight")
	        }, 35*i);
        })
    });
    
    $("#inventiondesignTitle span sub ul li").click(function(){
        var whichToShow = $(this).attr("id");

        $(".subContentWrapper").addClass("fromTop");
        
        if(!$(this).hasClass("selected")){
            $(".selected").removeClass("selected");
            $(this).addClass("selected");
            $("#submenu").addClass("shown");
            $("#" + whichToShow + "Content").removeClass("fromTop");
        }else{
            $(".selected").removeClass("selected");
            $("#submenu").removeClass("shown");
        }



        // hier eventuell noch die höhe anpassen, falls es einzelne cases gibt, in denen etwas anders dargestellt wird
        switch(whichToShow){
            case "anzeigen":
                $(".mainContent").disablescroll("undo");
                $("#submenu").removeClass("mailList");
                break;

            case "verknüpfung":
                $(".mainContent").disablescroll("undo");
                $("#submenu").removeClass("mailList");
                break;

            case "mitglieder":
                $("#submenu").addClass("mailList");
                $(".mainContent").disablescroll();
                $("#submenu").disablescroll("undo");
                break;
        }

    });
    
    $(".subContent li").click(function(){
       $(this).toggleClass("subSelected");
    });


    $(".decision").click(function(){
        $(this).addClass("marked");
        if($(this).hasClass("sayYes")){
            $(this).addClass("yes");

            var saveThis = $(this)
            setTimeout(function(){
                saveThis.parent().parent().addClass("keep");
            }, 50);
        }else {
            $(this).addClass("no");

            var saveThis = $(this)
            setTimeout(function(){
                saveThis.parent().parent().addClass("away");
            }, 50);
        }
        setTimeout(function(){
            if(whichIsNext == "close"){
                $(".tinderview").click();
            }
            showNextFile();
        }, 300);
    });
    
    $("#arbeitsunterlagen").click(function(){
        $(".goAway").fadeToggle(300);
    });

    $(".mainContent").scroll(function(){
        var scrolled = Math.round(($(".mainContent").scrollTop() / mainContentHeight) * 100);
        $(this).css({"background-position" : "center " + scrolled + "%"});
    });
    
    $(".addNewOne").keypress(function(e) {
        if(e.which == 13) {
            $(".nameColumn ul").append("<li>Nikolas Klein</li>");
            $(".mailColumn ul").append("<li>nikolas.klein@hfg-gmuend.de</li>");
            $(this).val("");
        }
    });

});

var whichIsNext = "firstFile";
var newNumber;


// reihenfolge
// designgeschichte
// invention
// application
// applicatin
// designgeschichte

function showNextFile(){
    switch (whichIsNext){
        case "firstFile":
            $("#" + whichIsNext).addClass("show");
            whichIsNext = "secondFile";
            break;
        case "secondFile":
            $("#" + whichIsNext).addClass("show");
            whichIsNext = "thirdFile";
            $(".mainContent nav .center.startPage .number").html("4");
            $("#designgeschichte .course .number").html("1")
            document.title = "2/" + newNumber + " neuen Dateien";
            break;
        case "thirdFile":
            $("#" + whichIsNext).addClass("show");
            whichIsNext = "fourthFile";
            $(".mainContent nav .center.startPage .number").html("3");
            $("#inventiondesign .course").html("<h2>Application Design</h2>")
            document.title = "3/" + newNumber + " neuen Dateien";
            break;
        case "fourthFile":
            $("#" + whichIsNext).addClass("show");
            whichIsNext = "fifthFile";
            $(".mainContent nav .center.startPage .number").html("2");
            $("#applicationdesign .course .number").html("1")
            document.title = "4/" + newNumber + " neuen Dateien";
            break;
        case "fifthFile":
            $("#" + whichIsNext).addClass("show");
            $(".mainContent nav .center.startPage .number").html("1");
            $("#applicationdesign .course").html("<h2>Invention Design</h2>")
            document.title = "5/" + newNumber + " neuen Dateien";
            whichIsNext = "close";
            break;
        case "close":
            $("#designgeschichte .course").html("<h2>Design- und Mediengeschichte</h2>")
            $(".mainContent nav .center.startPage h1#startPageTitle").html("Du hast keine neuen Dateien. Genieße den Tag Max!")
            break;
    }
}