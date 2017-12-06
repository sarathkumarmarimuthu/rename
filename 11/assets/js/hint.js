// Hint btn start

var dialogBoxTag  = false;
var delfol  = false;
var currRule=0,currRuleUrl;
var currenthintindex = 0;
var ccShowtag = false;
var currentcrosshintindex = 0;
var isFirefox = navigator.userAgent.toLowerCase().toLowerCase().indexOf("firefox")>-1;
var isiPad = false;
if (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i))
{
	isiPad = true;
}

var hintFuncInit = function () {

					
	findrulename('rule1');
	findcrossrulename('crossrule1A');
	$(".rules").on("click", ruleclickevent);
	$(".crossrules").on("click", crossruleevent);
	$('.previouspage').off('click').on('click',shwPrevRule);
	$('.nextpage').off('click').on('click',shwNxtRule);
	$('.previouscrosspage').off('click').on('click',shwPrevCrossRule);
	$('.nextcrosspage').off('click').on('click',shwNxtCrossRule);

	$('.subPopUp').hide();	
	$('#hntclse').off('click').on('click',hntClosePanel);	
	$('#chklistclose').off('click').on('click',filinghntClosePanel);
	$('#subpgclose').off('click').on('click',subPgClosePanel);
	$('#closePopup').off('click').on('click',clsPopup);
	//$('.clkheretocls').off('click').on('click',clsCnfPopup);
	$('#infoclse').off('click').on('click',infoClosePanel);
	
	if (currentId == 'alphabeticSimulation') {
	
		$('.fbtn p').removeClass('active');
		
	}
	
    $("div .radio_indicator1").click(function(){		
		 $('.radio_indicator2').removeClass('radio_indicatorActive');		
         $(this).addClass('radio_indicatorActive');		
    });		
	 $("div .radio_indicator2").click(function(){  		
	    $('.radio_indicator1').removeClass('radio_indicatorActive'); 			
		$(this).addClass('radio_indicatorActive');		
    });		
	

	
	$('.btn5').click(function(e){
		e.preventDefault();
	});
	//if($('.subbtn').css('opacity') == '0.5'){$('.subbtn').off('click');}
	$( "#hintbtnid" ).off('click').on('click',hintFun);

	
	$( "#cnfmhntpop" ).click(function() {
		//$('#hintbtnid').removeClass('hintClr');
	  $("#tooltip").hide();
		if(dialogBoxTag)
		{
			showfillingrulepopup();
		}
		else
		{
			$( "#cnfmhnt" ).show();
		}
		
	});
	
	$('.contentbox2 .rules').each(function(i,v){
		audSeq[$(v).attr('name')] = [$(v).attr('name')]		
	});
	
    $.each(dataRecd,function(index,value){
			      hintaudName= 'hint_'+index;
			      audhintSeq[hintaudName] = [hintaudName];
				  hintaudName++;
				  
	});
	
	console.log(JSON.stringify(audhintSeq))
	
}

function toolTiphide()
{
		if(cloneArr.length != 0){
		$( "#tooltip,#filingtooltip" ).hide();	
		$("#fileHint").removeAttr("style");
		$('#fileHint').removeClass("orangeColor");
		$('#fileHint').addClass("fileHintbtn");
	   }
}



var hintFun = function(e) {
	//currentId = "hint";
	//$('[name=Code]').css('background','#5a4a42')
	//$('[name=uIdentification]').css('background','#5a4a42')
	  e.stopPropagation();
	  showhintmin();
	  //hintshowtag = true;
	  $( "#tooltip" ).toggle();
	 
	 
	 
	if(dataRecd[curVal].hintv == 0)
		dataRecd[curVal].hintv=1;
	 // $(this).addClass('hintClr');
}
var showhintmin = function(){
	
     	$('.triangle-isosceles div p').html(dataRecd[curVal].hintt)
    //$('#hintbtnid').css({background:'#e85028',opacity:'1'});
}
	
/*var checklistFun = function(e){ 
    e.stopPropagation();
	$( "#filingtooltip" ).toggle();
	showdetailhint();
}	*/

var showdetailhint = function(){
	//$('.isosceles div p').html(dataRecd[curVal].filinghint);
	//$('#fileHint').toggleClass("fileHintbtn orangeColor");

}

function dialogboxChange(diaboxche) {
  if(diaboxche.checked == true){
   		dialogBoxTag = true;
	}
	else
	{
		dialogBoxTag = false;
	}
}


var hntClosePanel = function() {
	//hintshowtag = false;
	$('#hintbtnid').removeClass('hintClr');
	$("#tooltip").hide();
}

var filinghntClosePanel = function() {
    hintaudPlay[0].pause();
	$(".checklistContainer").hide();
	$("#fileHint").removeAttr("style");
	$('#fileHint').removeClass("orangeColor");
	$('#fileHint').addClass("fileHintbtn");
}

var hntCnfcCosePanel = function() {
	$("#cnfmhnt").hide();
}


var hntAgreeClosePanel = function() {
	currenthintindex = 0;
 	showfillingrulepopup();
   	$("#cnfmhnt,#mainpage").hide();
}

var subPgClosePanel = function() {
	$('#closePopup').hide();
    $( "#mainpage" ).show();
    $('.subpage,.subPopUp').hide();
    $('#iframevideoid').attr('src','');
    $('#iframevideoid1').attr('src','');
    startToPlay('stop',0)
    currentidarr = ["mainpage"];
}

var returnpagearr =['directionsforjobs', 'mainpage', 'sitemap', 'help' , 'alphabeticSimulation'];
var footerarr = ['sitemap','help','exit','filingRules','reviewAnswer'];
var currentidarr = ["mainpage"];
 //commonArr=['directionsforjobs', 'mainpage', 'sitemap', 'help' , 'alphabeticSimulation','sitemap','help','exit','filingRules','reviewAnswer','overview','introduction','demonstration','videowalkthrough','resultpage'];




var clsPopup = function(){
	
	if (currentId == 'demonstration' )	{
			$('#iframevideoid').attr('src','');	
		}
		
    if (currentId == 'videowalkthrough' )	{
			$('#iframevideoid1').attr('src','');	
		}
	
 	$('.fbtn p').removeClass('active');
   audPlay[0].pause();	
   $('.audiocc').hide();
   currentId = $('.subpage').filter(":visible").attr('id')
	
   if(alphabeticSimulationvisite && currentidarr.length <= 1)
   { 
	   $('#'+currentId).hide();
	   currentidarr=[];
	   $('#closePopup, .subpage, .subPopUp').hide();
	   $('#alphabeticSimulation').show();
	   	if(audioCorrect){	
   		     startToPlay('file',0);		
		     $('.tcent .mCSB_container').html(simaction.file);		
		     $('.containersubheadone').html(simactionTitle.file); 
		}else{
             startToPlay('alphabeticSimulation',0);
			 $('.tcent .mCSB_container').html(simaction.alphabeticSimulation);
			 $('.containersubheadone').html(simactionTitle.alphabeticSimulation); 
		     $('#progressBar').show();
		   if(nameIdTemp == 'Code' || nameIdTemp == 'uIdentification'){
			  startToPlay(nameIdTemp,0);
			  $('.tcent .mCSB_container').html(simaction[nameIdTemp])
			
		   }
			 
		 }
			
		if(cloneArr.length==0 && audioCorrect){		
		  startToPlay('stop',0);		
		}
   }
   else if(currentId == currentidarr[currentidarr.length-1])
   {	
    
	
	   $('#'+currentId).hide();
	  
	   currentidarr.pop();
	 // alert('here a'+currentidarr);
	   $('#'+currentidarr[currentidarr.length-1]).show();
	    $('#closePopup').css({top: '85px','right':'94px'});
		//alert('hhh '+currentId+' shw'+currentidarr[currentidarr.length-1]);
		
   }
   else
   {
	  // console.log('closed here'+currentId);
	  $('#'+currentId).hide();	   
	   $('#'+currentidarr[currentidarr.length-1]).show();
		
   }
 
   
  
   if($('.subpage').filter(":visible").attr('id') == 'resultpage')
   {	
		
	   currentidarr=['resultpage'];
	    $('#closePopup').hide();
		$('#progressBar').show();
   }
   
   if(currentId == 'reviewAnswer'){
		reviewAnsClicked = false;
   }
		  
	if(finalPage==1)
	{
		$('#'+finalsub[finalsub.length-1]).hide();
		finalsub=['mainpage'];
		$('#resultpage').show();
		$('#closePopup').hide();
		$('#progressBar').show();
		
		
	}else
	{
		$('#'+finalsub[finalsub.length-1]).hide();
		$('#'+finalsub[finalsub.length-2]).show();
		if(finalsub[finalsub.length-2]=='alphabeticSimulation')
		{
			   //$('#closePopup, .subpage, .subPopUp').hide();
			   $('#alphabeticSimulation').show();
			   $('#progressBar').show();
		alert('finalsub')
		}/*else if(finalsub[finalsub.length-2]=='mainpage')
		{
			$('#closePopup').hide();
		}*/
		finalsub.pop();
		
	}

   if($('.subpage').filter(":visible").attr('id') == 'directionsforjobs')
   {
	   startToPlay('directionsforjobs', 0)
		  $('#closePopup').css({top: '100px','right':'192px'});
   }
    if($('.subpage').filter(":visible").attr('id') == 'overview')
   {
	   startToPlay('overview', 0)
		   $('#closePopup').css({top: '100px','right':'192px'});
   }
    if($('.subpage').filter(":visible").attr('id') == 'introduction')
   {
	   startToPlay('introduction', 0)
		   $('#closePopup').css({top: '100px','right':'192px'});
   }
   
   if($('.subpage').filter(":visible").attr('id') == 'reviewAnswer'){
	    $('#closePopup').css({top: '75px','right':'20px'});
	   
   }
   
   if($('.subpage').filter(":visible").attr('id') == 'help' || $('.subpage').filter(":visible").attr('id') == 'filingRules'){		
	   $('#closePopup').css({top: '85px','right':'94px'});		
   }

   if($('.subpage').filter(":visible").attr('id') == 'generalinfo' || $('.subpage').filter(":visible").attr('id') == 'generalinfoSim' )		
       {			
	      startToPlay('generalinfo', 0)		
		  $('#closePopup').css({top: '100px','right':'192px'});		
       
       }
	
	if ($('.subpage').filter(":visible").attr('id') == 'demonstration' )	{
			if(navigator.userAgent.indexOf("Edge/") > -1){
			  setTimeout(function(){
	                var videosrc = "playvideo/navigationvideo_edge.html";
                    var iframe1 = document.getElementById('iframevideoid');
                    iframe1.src = videosrc;
	               }, 5);
			   $('#closePopup').css({top: '65px','right':'170px'});
			}else{
			   $('#iframevideoid').attr('src','playvideo/navigationvideo.html');
			   $('#closePopup').css({top: '65px','right':'170px'});
			}
			startToPlay('stop', 0)
		} else {
			$('#iframevideoid').attr('src','');
		
		}
    if ($('.subpage').filter(":visible").attr('id') == 'videowalkthrough' )	{
			if(navigator.userAgent.indexOf("Edge/") > -1){
			   setTimeout(function(){
	                var videosrc = "playvideo/walkthroughvideo_edge.html";
                    var iframe1 = document.getElementById('iframevideoid1');
                    iframe1.src = videosrc;
	               }, 5);
			   $('#closePopup').css({top: '65px','right':'170px'});
			}else{
			   $('#iframevideoid1').attr('src','playvideo/walkthroughvideo.html');
			   $('#closePopup').css({top: '65px','right':'170px'});
			}
			startToPlay('stop', 0)
		} else {
			$('#iframevideoid1').attr('src','');
		
		}
		 
	 if($('.subpage').filter(":visible").attr('id') == 'resultpage' ){			  
		    startToPlay('stop', 0)	
			
	 } 
	 
	 if($('.subpage').filter(":visible").attr('id') == 'reviewAnswer' ){			  
		    startToPlay('stop', 0)	
			
	 }
	 	
	if($('.subpage').filter(":visible").attr('id') == 'filingRules' ){			  
		    startToPlay('filingRules', 0)	
	 }  
	 
	if($('.subpage').filter(":visible").attr('id') == 'help' ){			  
		    startToPlay('help', 0)	
	 } 
		
		
		
    if((currentId == 'help' || currentId == 'filingRules' )&& ($.inArray('mainpage',currentidarr) != 0)){
		
		
		//console.log('before filtered '+currentidarr)
		var xxx = currentidarr.filter(function(item,value,index){
			//console.log('item '+item);
			if(item != 'help' && item != 'demonstration' && item != 'videowalkthrough'){			
				return true;
				
			}else{
				$('#'+item).hide();
			
			}
		});
		currentidarr = xxx.slice();
		//console.log('filtered '+xxx)
			$('#'+currentidarr[currentidarr.length-1]).show();
			if(currentidarr[currentidarr.length-1] == 'resultpage'){
				$('#closePopup').hide();
			}
	   }
		
	if(reviewAnsClicked && (currentId == 'help' || currentId == 'filingRules') ){
		$('#closePopup').show();
		$('#reviewAnswer').show().css({height:'450px'});
		$('#help,#filingRules,#demonstration').hide();
		$('#resultpage').hide(); 	
		$('#progressBar').show();
		$('#closePopup').css({top: '75px','right':'20px'});
		
         	
	}

	if(currentidarr.length == 1 && currentidarr[0] == 'mainpage' )
   {
	   currentidarr=['mainpage'];
	   $('#mainpage').show();
	   $('#closePopup,#demonstration').hide();
   }
   if(alphabeticSimulationvisite && currentidarr.length == 0)
   {
	  
	   currentidarr=[];
	   $('#closePopup, .subpage, .subPopUp').hide();
	   $('#alphabeticSimulation').show();
	   $('#progressBar').show();
	   
   }
   
	  if($('.subpage').filter(":visible").attr('id') == 'sitemap' || $('.subpage').filter(":visible").attr('id') == 'help'){			  
		  	$('[name='+$('.subpage').filter(":visible").attr('id')+']  p').addClass('active');
	        $('#closePopup').css({top: '85px','right':'94px'});			
	  }
	
	$('#informationIcon').removeClass('informationiconActive').addClass('informationicon')
	$('.ccicon').removeClass('cciconActive').addClass('ccIcon');
	

}

var clsCnfPopup = function() {
	 //$('#submitconfirmation').hide();
	 //alert('test')
	 window.parent.ReturnToBack();
	
}

var infoClosePanel = function() {
	$("#tooltip1").hide();
    }

//Hint btn end


//rules page start

var ruleclickevent = function(){
	
	if(($('[name='+$(this).attr('name')+']').css('opacity')) ==1)
	{
		findrulename($(this).attr('name')); 
		currenthintindex = cardrulearr.indexOf(Number(currentrules($(this).attr('name'))));
		navigationnexprefullrul() 
		//console.log(currenthintindex,cardrulearr[currenthintindex], fillingrules[cardrulearr[currenthintindex]].title)
	}
}



function findrulename(comname) {
	var comnamecoun = comname.length-1;
	$(".rules").css({color:'#5d2f18'});
    //console.log(comname.slice(0,comname.length-1), comname)
	$('.'+comname.slice(0,comname.length-1)).css({color:'#E75028'});
	$('[name='+comname+']').css({color:'#E75028'});
	//currnamescroll(comname)
	currentrules(comname)
	
}

function currnamescroll(attrName)
{
/*	console.log(Number(attrName.match(/\d+/g)) +'                         num   '+(Number(attrName.match(/\d+/g))> 8))
	if(Number(attrName.match(/\d+/g))> 8)
	{
		$('#mCSB_4_container').css('top', '-416px')
	}
	else
	{
		$('#mCSB_4_container').css('top', '0px')
	}
	$(".scrollBar").mCustomScrollbar({
 	keyboard:{  enable: true,}
	   });*/
	
}


function currentrules(name)
{
	for(i=0; i< fillingrules.length; i++)
	{
		if(fillingrules[i].title == name)
		{
			$('.rulescontainer').html(fillingrules[i].discription)
			startToPlay(name,0)
			$(".scrollBar").mCustomScrollbar({
            theme:"3d-dark",
            axis:"y",
            advanced: {
            updateOnContentResize: true
            }
	        });
			return i;
		}
	}
	return 0
}



var hintpopuptag = false;
var showfillingrulepopup = function(){
	
	dataRecd[curVal].hintv++;
	hintpopuptag = true;
	findrules();
	//findcrossrules();
	$( "#filingRules,.subPopUp, #closePopup" ).show();
	//$( "#crossreferencerules,.subPopUp, #closePopup" ).show();
	//$(document).on("keypress", keypressfillresetfunction);
}
/*
function keypressfillresetfunction(e)
{
	
  if((e.keyCode == 37) || (e.keyCode == 38)) { // left
  shwPrevRule()
  }
   else if((e.keyCode == 39)  || (e.keyCode == 40)) { // right
  shwNxtRule()
  }
	
}

document.onkeydown = checkKey;

function checkKey(e) {
	if(currentId == 'filingRules')
	{
    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
	//	shwPrevRule()
    }
    else if (e.keyCode == '40') {
        // down arrow
	//	shwNxtRule()
    }
    else if (e.keyCode == '37') {
       // left arrow
	   shwPrevRule()
    }
    else if (e.keyCode == '39') {
       // right arrow
	   shwNxtRule()
    }
	
	}
}

*/

var fillreset = function()
{
	$("#crossruleleft").show();
	
	//$(document).on("keypress", keypressfillresetfunction);
	//document.onkeydown = checkKey;
	cardrulearr = [];
	for(var i = 0; i<fillingrules.length; i++)
	{
		cardrulearr.push(Number(i))
	}
	$(".rules").css('opacity','1');
	$(".rules").css('cursor','pointer');
	$(".rules").show();
	currenthintindex = 0;
	navigationnexprefullrul();
	 
}




function findrules()
{
	cardrulearr = [];

	$(".rules").hide();
	$(".rules").css('opacity','0.2');
	$(".rules").css('cursor','default');
	
	for(i=0; i< dataRecd[curVal].hintRus.length; i++)
	{
		cardrulearr.push(Number(getfillingrulesindex(dataRecd[curVal].hintRus[i])));	
	}
	
	cardrulearr.sort()
	
	
	for(i=0; i< cardrulearr.length; i++)
	{    
		$('[name = '+fillingrules[cardrulearr[i]].title+']').show();
		$('[name = '+fillingrules[cardrulearr[i]].title+']').css('opacity','1');
		$('[name = '+fillingrules[cardrulearr[i]].title+']').css('cursor','pointer');
		$('.'+fillingrules[cardrulearr[i]].title.slice(0,fillingrules[cardrulearr[i]].title.length-1)).show()
		$('.'+fillingrules[cardrulearr[i]].title.slice(0,fillingrules[cardrulearr[i]].title.length-1)).css('opacity','0.99');
		$('.'+fillingrules[cardrulearr[i]].title.slice(0,fillingrules[cardrulearr[i]].title.length-1)).css('cursor','pointer');
		
	}
	currenthintindex = 0;
	navigationnexprefullrul();
	
	//console.log(cardrulearr)
	
	findrulename(fillingrules[cardrulearr[currenthintindex]].title)
	$(".discriptioncontent").hide();
	$("#crossruleleft").hide();
	$(".discriptionexample").css('margin-top','0px');
	$('.rulestitle').find('br').remove();


}

function getfillingrulesindex(rulestr)
{
	for(var i = 0; i < fillingrules.length; i++)
	{
		if(fillingrules[i].title.toLowerCase() ==  rulestr.toLowerCase())
		{
			return [i];
		}
	}
}



var shwPrevRule = function() {
	if(currenthintindex >0)
	{
		currenthintindex--;
		findrulename(fillingrules[cardrulearr[currenthintindex]].title)
		navigationnexprefullrul();
	}
}


var shwNxtRule = function() {
	if(currenthintindex < cardrulearr.length-1)
	{	
		currenthintindex++;
		findrulename(fillingrules[cardrulearr[currenthintindex]].title)
		navigationnexprefullrul();
	}
		updateCloneArr();	
		
	   updateNextInDrop();
}


var navigationnexprefullrul = function(){
			$('.nextpage').css('opacity','1');
			$('.nextpage').css('cursor', 'pointer');
			$('.previouspage').css('opacity','1');
			$('.previouspage').css('cursor', 'pointer');
		
		if(currenthintindex == 0){
			$('.previouspage').css('opacity','0.2'); 
			$('.previouspage').css('cursor', 'default');
			$('.nextpage').css('opacity','1');
			$('.nextpage').css('cursor', 'pointer');
		}
		if(currenthintindex == cardrulearr.length-1){
			$('.nextpage').css('opacity','0.2'); 
			$('.nextpage').css('cursor', 'default');
			$('.previouspage').css('opacity','1');
			$('.previouspage').css('cursor', 'pointer');
		}		
		if(1 == cardrulearr.length){ 
		$('.previouspage').css('opacity','0.2'); 
		$('.previouspage').css('cursor', 'default');
		$('.nextpage').css('opacity','0.2');
		$('.nextpage').css('cursor', 'default');
		 }
		 


}



var fillingrulelengthone = function(){
}
		
//rules page end

/* cross rule page start */

var crossruleevent = function(){
	
	if(($('[name='+$(this).attr('name')+']').css('opacity')) ==1)
	{
		findcrossrulename($(this).attr('name')); 
		currentcrosshintindex = cardcrossrulearr.indexOf(Number(currentCrossRules($(this).attr('name'))));
		navigationnexprefullcrossrul() 
		
	}
	
}



function findcrossrulename(comcrossname) {

var comnamecoun = comcrossname.length-1;
		

	$(".crossrules").css({color:'#5d2f18'});
//	$('.'+comcrossname.slice(0,comnamecoun)).css({color:'#E75028'});
//	$('[name='+comcrossname+']').css({color:'#E75028'});
//	currentCrossRules(comcrossname);
}

function currentCrossRules(name)
{
	
	
	for(i=0; i< crossfilingrules.length; i++)
	{
		
		if(crossfilingrules[i].title == name)
		{
			
			$('.crossrulescontainer').html(crossfilingrules[i].discription);
				
     $(".scrollBar").mCustomScrollbar({
    theme:"3d-dark",
    axis:"y",
     advanced: {
          updateOnContentResize: true
        }
	   });
			return i;
		}
	}
	return 0
}

var crossfillreset = function()
{
	
	//$(document).on("keypress", keypressfunction);
	cardcrossrulearr = [];
	for(var i = 0; i<crossfilingrules.length; i++)
	{
		cardcrossrulearr.push(Number(i))
	}
	$(".crossrules").css('opacity','1');
	$(".crossrules").css('cursor','pointer');
	$(".crossrules").show();
	currentcrosshintindex = 0;
	navigationnexprefullcrossrul();
	
}	


var shwPrevCrossRule = function() {
	if(currentcrosshintindex >0)
	{
		currentcrosshintindex--;
		findcrossrulename(crossfilingrules[cardcrossrulearr[currentcrosshintindex]].title)
		navigationnexprefullcrossrul();
	}
}


var shwNxtCrossRule = function() {
	if(currentcrosshintindex < cardcrossrulearr.length-1)
	{	
		currentcrosshintindex++;
		findcrossrulename(crossfilingrules[cardcrossrulearr[currentcrosshintindex]].title)
		navigationnexprefullcrossrul();
	}
}

function findcrossrules()
{
	cardcrossrulearr = [];
	$(".crossrules").hide();
	$(".crossrules").css('opacity','0.2');
	$(".crossrules").css('cursor','default');
	
	for(i=0; i< dataRecd[curVal].hintRus.length; i++)
	{
		cardcrossrulearr.push(Number(getfillingcrossrulesindex(dataRecd[curVal].hintRus[i])));	
	}
	cardcrossrulearr.sort()
	
	for(i=0; i< cardcrossrulearr.length; i++)
	{
		$('[name = '+crossfilingrules[cardcrossrulearr[i]].title+']').show();
		$('[name = '+crossfilingrules[cardcrossrulearr[i]].title+']').css('opacity','1');
		$('[name = '+crossfilingrules[cardcrossrulearr[i]].title+']').css('cursor','pointer');
	}
	currentcrosshintindex = 0;
	navigationnexprefullcrossrul();

	findcrossrulename(crossfilingrules[cardcrossrulearr[currentcrosshintindex]].title)
}

function getfillingcrossrulesindex(crossrulestr)
{
	for(var i = 0; i < crossfilingrules.length; i++)
	{
		if(crossfilingrules[i].title.toLowerCase() ==  crossrulestr.toLowerCase())
		{
			return [i];
		}
	}
}

var navigationnexprefullcrossrul = function(){
			$('.nextcrosspage').css('opacity','1');
			$('.nextcrosspage').css('cursor', 'pointer');
			$('.previouscrosspage').css('opacity','1');
			$('.previouscrosspage').css('cursor', 'pointer');
		
		if(currentcrosshintindex == 0){
			$('.previouscrosspage').css('opacity','0.2'); 
			$('.previouscrosspage').css('cursor', 'default');
			$('.nextcrosspage').css('opacity','1');
			$('.nextcrosspage').css('cursor', 'pointer');
		}
		if(currentcrosshintindex == cardcrossrulearr.length-1){
			$('.nextcrosspage').css('opacity','0.2'); 
			$('.nextcrosspage').css('cursor', 'default');
			$('.previouscrosspage').css('opacity','1');
			$('.previouscrosspage').css('cursor', 'pointer');
		}		
		if(1 == cardcrossrulearr.length){ 
		$('.previouscrosspage').css('opacity','0.2'); 
		$('.previouscrosspage').css('cursor', 'default');
		$('.nextcrosspage').css('opacity','0.2');
		$('.nextcrosspage').css('cursor', 'default');
		 }
		 


}


/* cross rule page end */

/*scroll js start*/
$(window).load(function(){	/*	*/
$(".scrollBar").mCustomScrollbar({
   theme:"3d-dark",
   axis:"y",
     advanced: {
          updateOnContentResize: true
        },
			//keyboard:{  enable: true,}
	   });
	   
var amount=553;

//if( !/Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ) { 

//}
});

/*scroll js end */
