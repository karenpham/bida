/**
 * @description:  Call functions of website
 * @version: 1.0 
 **/
 
/****************************
 ***** Global variables *****
 ****************************/
var gProject = {};	

/*************************************
 ***** Main functions start here *****
 *************************************/
$(document).ready(function(){	
	gProject.initForm.initFormSearch();
	gProject.initElements.nivoSlider();
	gProject.initElements.dropdownMenu();
});

/******************************
 ***** Show error if have *****
 ******************************/
window.onerror = errorHandler;
function errorHandler(msg, url, l){
	if (window.console){
		console.log(msg + " : " + url + " : " + l);
	}
	return true;
}

/******************************
 ***** Functions built in *****
 ******************************/ 
gProject.initForm = { 
	initFormSearch: function(){
		var strId = 'frmSearch';
		var elements = [{
			field: 'txtSearch',
			init: 'Search...',
			valid: 'required',
			messages: 'Please insert search text!'
		}];
		jValidateForm(strId, elements);
	}
};

gProject.initElements = {
	nivoSlider: function(){
		$(window).load(function() {
        	$('#slider').nivoSlider({directionNav: false, pauseOnHover: false});
    	});
	},
	dropdownMenu: function(){
		$("#nav li").hover(function(){
			$(this).find('.subMenu').css({display: "none"}).stop().fadeIn(500);
			if ($(this).find('div').hasClass('subMenu'))
				$(this).addClass("activeTab");
        },function(){ 
			$(this).find('.subMenu').stop().fadeOut(300);
			$(this).removeClass("activeTab");
        }); 
	}
}