var exitobj ={};
var currentId = '';
var currQues = 0;
var uniqArr = [];
var curVal = 0;
var folderIndex = new Array();
var recdLen = dataRecd.length;
//var recdLen=2;
var finalsub=['mainpage'];
var splVal;
var getLenName;
var firstRun = true;
var curNum = 0;
var leftrightanitag = true;
var moveBack;
var isAnimated=false;
var nameIdTemp ="";
var nextPreTag = true;
var $simBtn = $('.simbtn');
var totalNoFolder = 36;
var scoreCorr = 0;
var temppage = "";
var audPlay;
var codedIncorrect = 0, placedIncorrect = 0, crosRefNotCrt = 0, crosNotReq = 0;
var score = 0;
var isFirefox = navigator.userAgent.toLowerCase().toLowerCase().indexOf("firefox")>-1;
var recordSimScore=0,recordSimTimer=0,recordSimError=0;
var timerVar;
var currentDiv;
var crosCount=0;
var movingDist=0;
var movecount = 0; var lptag = true; var mutag = true;
var rptag = false;
var currentAnimPos =0;
var currElem = 0;
var finalCls = false;
var isLeftMousedown = false, isRightMousedown = false, clear, isRightArrEnable = true, isLeftArrEnable = false;
var reviewAnsClicked = false;
var is_android = navigator.userAgent.match(/Android/i);
var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
var mobile   = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); 


function initfun() 
{	

   if(navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.indexOf("Trident/") > -1 || navigator.userAgent.indexOf("Edge/") > -1){

        $('body').off('mouseleave').on('mouseleave',function(){
			$('body').trigger('mouseup');
		});
		
		if(navigator.userAgent.indexOf("Edge/") > -1)
		{
		$("#subpgclose").mouseenter(function(){
         $("#subpgclose > img").attr('src','assets/images/rm_logo_hvr.png').css({"position":"absolute","top":"-8px","left":"-7px","width":"44px","height":"39px"});
         })
		}
		else
		{
		$("#subpgclose").mouseenter(function(){
         $("#subpgclose > img").attr('src','assets/images/rm_logo_hvr.png').css({"position":"absolute","top":"-8px","left":"-7px","width":"44px","height":"40px"});
         })
		}		

        $("#subpgclose").mouseleave(function(){
         $("#subpgclose > img").attr('src','assets/images/rm_logo.png').css({"position":"absolute","top":"0px","left":"0px","width":"29px","height":"24px"});
        })
		
		$("#subpgclose").mousedown(function(){
         $("#subpgclose > img").attr('src','assets/images/rm_logo.png').css({"position":"absolute","top":"0px","left":"0px","width":"29px","height":"24px"});
        })
    }
	
var asciicodestartval;
	for(var i =0; i<totalNoFolder; i++)
	{
		//asciicodestartval = (i < 26)?65:22;
		asciicodestartval =(i < 1)?35:64;
		folderIndex[i]=i;
		//recordIndex=new Array();		
		$('.dragarea').append('<span id=dragtooldiv_'+i+' class="dragtooldiv"><img src="assets/images/foldericon.png" width="64" alt="foldericon"><span class="drogtoolname">&#'+(asciicodestartval+i)+';</span><span class="folderindex">'+0+'</span><span class="drogtoolnum">'+i+'</span></span>');
		$('.dragareaAnim').append('<span id=dragtooldivAni_'+i+' class="dragtooldivAnim"><img src="assets/images/foldericon.png" width="64" alt="foldericon"><span class="drogtoolname">&#'+(asciicodestartval+i)+';</span><span class="folderindex">'+0+'</span></span>');
	}
	$("#dragtooldiv_0 .drogtoolname, #dragtooldivAni_0 .drogtoolname").html('NUMBERS').css({'font-size':'8pt', 'padding-top':'10px'});
	if(ltirecive)
	{	
        finalPage=1;
		
		$('.subPopUp,.detReviewScore,.detReviewTime,.printBtn').show();
		$('#mainpage').hide();
		$('.detReviewScore span').text(recordSimScore+'%');	
		$('.detReviewTime span').html(recordSimTimer);
		$('[name=resultpage]').hide();
		//$('[name=reviewAnswer]').hide();
		$('.clkheretocls').css('right', '104px');
		audPlay = $('#audElem');		 
		//$('.subPopUp').css('height', '625px');
		//$('.subpgpopup').css('top', '50px');
		//uniqArr = errorobj.recdArr;
		randNum();
		codeForScoring();
		
		 $('#reviewAnswer').show().css({visibility:'visible'});
		// pushUser();
		/*$('#ctr0').append('<div class="overallScr"><div id="codeScr" class="scoring"><span>Code Score</span><span>: '+codescore+'/'+totcodescore+'</span></div><div id="folderScr" class="scoring"><span>Folder Score</span><span>: '+folderscore+'/'+totfolderscore+'</span></div></div>');*/
		 $('#resultpage').hide();
				//currentId = 'reviewAnswer';
		 $('.btn, .fbtn, .clkLink').bind('click', buttonEventCalling);
		 $(".rules").on("click", ruleclickevent);
	     $(".crossrules").on("click", crossruleevent);
	     $('.previouspage').off('click').on('click',shwPrevRule);
	     $('.nextpage').off('click').on('click',shwNxtRule);
	     $('.previouscrosspage').off('click').on('click',shwPrevCrossRule);
	     $('.nextcrosspage').off('click').on('click',shwNxtCrossRule);
		 if(currentId == 'reviewAnswer'){
		
	     $('.subpgpopup').css({'height':'450px'});
		 $('#closePopup').css({top: '65px','right':'95px'});
		 }else if(currentId =='videowalkthrough' || currentId == 'demonstration'){
		   $('#closePopup').css({top: '65px','right':'170px'});
	      }else{
		   $('#closePopup').css({top: '80px','right':'95px'});
		   $('.subpgpopup').css({'height':'420px'});
		
	     }
		
		myPdf();
		$('.subpgpopup').css({'height':'450px'});
		$('.ftrinner1').hide();
		$('.ftrinner3').show();
	    $('.brandIcon').css('cursor','default');
	    $('.fbtn p').eq(0).css({opacity:'0.5'}).css('cursor','default');
	    $('#dummySitemap').show();
		$('.clkheretocls').off('click').on('click', clsCnfPopup);
		$('#closePopup').off('click').on('click',clsPoponLTIreceive);
		updatePercentage();
		startToPlay('stop',0);
        var returnpagearr =['directionsforjobs', 'mainpage', 'sitemap', 'help' , 'alphabeticSimulation'];
        var footerarr = ['sitemap','help','exit','filingRules','reviewAnswer'];
        var currentidarr = ["mainpage"];
         commonArr=['directionsforjobs', 'mainpage', 'sitemap', 'help' , 'alphabeticSimulation','sitemap','help','exit','filingRules','reviewAnswer','overview','introduction','demonstration','videowalkthrough','resultpage'];
		return ;
	}
	function clsCnfPopup() {
		window.parent.ReturnToBack();
	   //window.parent.indexReturnToBack();
	}
   	hintFuncInit();
	//audPlay[0].play();
	audPlay = $('#audElem');
	hintaudPlay = $('#hintaudElem');
	$('.nameing>span').css('cursor','pointer');	
	
	//$("#dragtooldiv_0, #dragtooldivAni_0").css({width:'130px'});
	//$("#dragtooldiv_0 .folderindex, #dragtooldivAni_0 .folderindex").css('left','100px');
	
	//$("#dragtooldiv_0 img, #dragtooldivAni_0 img").css({width:'129px', height:'64px'});
	//$("#dragtooldiv_0 img, #dragtooldivAni_0 img").attr('src',"assets/images/foldericonnum.png");
	
	$('<div/>',{class:'callOut'}).appendTo('.dragtooldiv');
	
	
	//$('.leftarraw').off('click').on('click', moveleftoverfun);
	//$('.rightarraw').off('click').on('click', moverightoverfun);
	$('<div/>',{id:'myMove'}).appendTo('#alphabeticSimulation');
	
	//$('<div/>',{class:'hideBtns'}).appendTo('.container');
	//$('.leftarraw').droppable({over: moveleftfun ,out: leftrightarrow ,drop:setRevert});
	//$('.rightarraw').droppable({over: moverightfun,out: leftrightarrow , drop:setRevert});
	$( ".dragtooldiv" ).droppable({hoverClass:'hvr', out: function (){}});
	$('<div/>',{id:'cloneContainer'}).appendTo('#alphabeticSimulation');
	$('#cnfmsubmit').off('click').on('click', reviewAns);
	$('.sitemapbtn, .fbtn, .btn, .subbtn, .backBtn, #startbtn, .clkLink').on('click', buttonEventCalling);
	$('.crossbtn').bind('click', crossBtnEventCalling);
	$('.simbtn').bind('click', alpRulesselectfun);
//	$('#mainpage').bind('mouseup', function(){temppage = 'mainpage'; });
	//$('.fbtn').bind('mouseup', function(){$('.fbtn').attr('clk',true);temppage = 'sitemap'; });
	
//	$('.dragger').off('mouseenter').on('mouseenter' , function(){alert(); $( ".cross_unit" ).prop( "disabled", true ); });
	//$('.dragger').off('mouseleave').on('mouseleave' , function(){$( ".cross_unit" ).prop( "disabled", false );});
	
	$('<div/>',{class:'cardNum'}).appendTo('.simworkarea');
	$('<div/>',{class:'cardNum'}).appendTo('.crossreference');	
 
	
	randNum();	
	
	if(ltiexit)
	{
		$('.dummySubbtn').show();
	//recordIndex=[],
	dataRecdJob=[],dataRecd=[],uniqArr=[];
	//console.log(exitobj.recdArr)
	for(var i = 0; i<exitobj.folderIndexing.length; i++)
	{
		if(exitobj.folderIndexing[i] == null)
		{
			exitobj.folderIndexing[i] = [];
		}
	}

	
	recordIndex = exitobj.folderIndexing; // $.parseJSON(localStorage['record']);

	//dataRecdJob = exitobj.job1; //$.parseJSON(localStorage['job1']);
	dataRecd = exitobj.card; //$.parseJSON(localStorage['job2']);
	recordSimTimer = exitobj.timer;
	uniqArr = exitobj.recdArr; // $.parseJSON(localStorage['recdArr']);
	//console.log('resume '+uniqArr)
	if(uniqArr.length <= 0){
		$('.dummySubbtn').hide();
		$('[name = submitconfirmation]').removeClass('subbtn').addClass('subbtnActive');
		$('.offSteps').css('width','175px').css('height','183px').show();
		$('.simbtn,.crossbtn, .hintbtn').css('background','#5a4a42').css('cursor','default').css('opacity','0.5');
		updatePercentage();
		progressbarfun();
	}
	restorePage();
	$('.close').off('click').on('click',closePanel);	
		
	}else
	{
		//randNum();	
		//chngQues(currQues);	
		storeJobOne();

	}
	
		//chngQues(currQues);	
/*		storeJobOne();
if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
	
	if(typeof localStorage['record'] !='undefined'){
	recordIndex=[],dataRecdJob=[],dataRecd=[];
	recordIndex = $.parseJSON(localStorage['record']);
	dataRecdJob = $.parseJSON(localStorage['job1']);
	dataRecd = $.parseJSON(localStorage['job2']);
	uniqArr = $.parseJSON(localStorage['recdArr']);
	
	
	console.log(uniqArr+' dddd');
	//recordIndex = JSON.parse(localStorage.getItem("user"));
	/*$.each(dataRecdJob,function(index, value){
		
		if(typeof value.crossAns != 'undefined') {
		console.log(value);
		value.crossUnit.arr[9]=value.order;
			//value.crossUnit.arr[9] = value.order;
			value.crossUnit.job=1;
		}	
		});
	
	restorePage();
	
	//localStorage.clear();	
	$('.close').off('click').on('click',closePanel);
	}else{
		storeJobOne();
	}
	
	} else {
    // Sorry! No Web Storage support..
	}
	
	*/
	//storeJobTwo();
	
	//console.log(uniqArr.length, currQues)	
	if(uniqArr.length>0)
	chngQues(currQues);	
	else
	$('.simworkcontainer').hide();	
	$('.containerheader').show();	


if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	$('#startpopup').hide();
}else{
	//$('#startpopup').show();
	//playAudio('startbtn',0);	
	startToPlay('startbtn',0);	
}


$('<div/>',{class:'dragger',title:'Drag to Folder'}).appendTo('.simworkarea,.crossreference');
	//$('.dragger').off('mouseenter').on('mouseenter' , function(){$( ".cross_unit" ).prop( "disabled", true ); });

	$('.crossreference .dragger').off('mouseenter').on('mouseenter', function(){
		if(inDevice){	$( ".crossreference .cross_unit" ).prop( "disabled", true );}
		checkCrosRefDup();
		});
		$('.crossreference .dragger').off('mouseout').on('mouseout', function(){
		if(inDevice){	$( ".crossreference .cross_unit" ).prop( "disabled", false );}
		
		});

$('.rightarraw').droppable({
		over : function(event,ui) {
			animateRightDir();
		},
		out : function(event,ui) {
			isRightMousedown = false;
			window.clearInterval(clear);
		},
		drop: function(event,ui) {
			$(ui.draggable).draggable({revert:true});
			window.clearInterval(clear);
		}
});

$('.leftarraw').droppable({
		over : function(event,ui) {
			animateLeftDir();
		},
		out : function(event,ui) {
			isLeftMousedown = false;
			window.clearInterval(clear);
		},
		drop: function(event,ui) {
			$(ui.draggable).draggable({revert:true});
			window.clearInterval(clear);
		}
});


var eventstart = mobile ? "touchstart" : "mousedown";

$('.leftarraw').off(eventstart).on(eventstart,function(e) {
	var ctl = e.which||e.keycode;
	if(ctl == 1 || inDevice)
	animateLeftDir();
}).on('mouseup mouseleave touchend',function() {
	//alert('l')
	isLeftMousedown = false;
});

$('.rightarraw').off(eventstart).on(eventstart,function(e) {
	var ctl = e.which||e.keycode;
	if(ctl == 1 || inDevice)
	animateRightDir();
}).on('mouseup mouseleave touchend',function() {
	isRightMousedown = false;
});

$('.cross_unit').off('focusin').on('focusin', function(e){	
	$('.tcent .mCSB_container').html(simaction.crossreference);	
	if(titleNew !== 'crossreference')
	{
	startToPlay('crossreference',0,'cr');
	}
});
$('.crossbtnBadge').off('click').on('click',editData);

}
var ctplay="";
var clsPoponLTIreceive = function()
{
	
		 	   $('#reviewAnswer').show();
		       $('#closePopup, #filingRules, #help, #demonstration, #videowalkthrough').hide();
			   $('#resultpage').hide();
			   $('.subpgpopup').css({'height':'450px'});
			   $('.fbtn p').removeClass('active');   
			   $('#progressBar').show();
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
		       	
		       } else {
		       	$('#iframevideoid1').attr('src','');
		       
		       }
}

var restorePage= function(){
	//console.log(recordIndex.length+'  ssssss');
	$.each(recordIndex,function(index,value){		
		
		if(value !== null && value !== undefined){
			//console.log(value+' '+value.length+(value !== null && value !== undefined));
			if(value.length>0){	
				$('#dragtooldiv_'+index).attr('data',1);		
			$('.dragtooldiv').eq(index).off('click').on('click',showRelavPanel);
			getInx=index;
			changeFolderImg();
			}
			
		
			
			
		}
		
	});
}



var animateRightDir = function() {
	if(isRightArrEnable) {
		isRightMousedown = true;
		window.clearInterval(clear)
		moveRightSide();
		 clear= setInterval(function() {
			moveRightSide();
			$('.dragtooldiv').removeClass('hvr');
		},300);
	}
}

var animateLeftDir = function() {
	if(isLeftArrEnable) {
		isLeftMousedown = true;
		window.clearInterval(clear)
		moveLeftSide();
		 clear= setInterval(function() {
			moveLeftSide();
			$('.dragtooldiv').removeClass('hvr');
		},300);
	}
}

var toggleArrow = function() {
	
	$('.dragarea').stop().animate({left:currentAnimPos+'px'},400);
	if(currentAnimPos >= 0) {
		window.clearInterval(clear);
		isLeftMousedown = false;
		isLeftArrEnable = false;
		$(".leftarraw").off('click').css({opacity:'0.5',cursor:'default'});
	}
	else if(currentAnimPos <= -952) {  //-952  -1564
		window.clearInterval(clear);
		isRightMousedown = false;	
		isRightArrEnable = false;
		$(".rightarraw").off('click').css({opacity:'0.5',cursor:'default'});
	}
	else {
		isLeftArrEnable = true, isRightArrEnable = true;
		$(".leftarraw").off('click').on('click',moveLeftSide).css({opacity:'1.0',cursor:'pointer'});
		$(".rightarraw").off('click').on('click',moveRightSide).css({opacity:'1.0',cursor:'pointer'});
	}		
   }
var moveLeftSide = function() {
	if(isLeftMousedown) {
	/*	if(currentAnimPos == -136)
		currentAnimPos = currentAnimPos + 136;
		else	*/	
		currentAnimPos = currentAnimPos + 68;
		currElem--;
		toggleArrow();
	}
	else {
		window.clearInterval(clear);
	}
}
var moveRightSide = function() {
	if(isRightMousedown) {
	/*	if(currentAnimPos == 0)
		currentAnimPos = currentAnimPos - 136;
		else*/
		currentAnimPos = currentAnimPos - 68;
		currElem++;
		toggleArrow();
	}
	else {
		window.clearInterval(clear);
	}

}
var shwCurrentElem = function() {
		$('.dragtooldiv').hide();
		for(var i = Math.abs(currentAnimPos/68); i<Math.abs(currentAnimPos/68)+13; i++)
		{
			$('#dragtooldiv_'+i).show();
		}
	}


var setRevert = function(e,ui) {
	
	 $('.simworkarea').draggable({revert:true});
	 //leftrightanitag = true;
}


var transition = function($curr, $next) {
    clearInterval(interval);
    $next.css('z-index', 2).fadeIn('slow', function () {
        $curr.hide().css('z-index', 0);
        $next.css('z-index', 1);
    });
}
var ran = new Array()
var conArr =[];
var randNum = function (){	
	
	ran = [];
	for(var i =0; i<recdLen; i++)
	{
		ran[i] = i;	
		uniqArr[i] = i;	
		conArr[i]=i;		
	}
	//uniqArr=[2,3,5,6,1,0,4,7]	;	

	/**/	
	/*while(ran.length>0){
		//uniqArr.push(Number(ran.splice(Math.floor(Math.random()*ran.length),1)));
		//dataRecd[uniqArr[i]].order=i+','+uniqArr[i];
		
		
	}*/
	
	for (var i =0; i<recdLen; i++)	{
		conArr[i]= uniqArr[i];
	}
	//console.log(JSON.stringify(dataRecd))
	$.each(uniqArr,function(index,value){
		dataRecd[value].order=index+','+uniqArr[index];
	});
	
	
	
	recdLen=uniqArr.length;
  }
  
var enableNav = function() {
	if(currQues==0){
		 $('.prev,.prevmin').off('click').css({opacity:'0.5',cursor:'default'});   
		 $('.next,.nextmin').off('click').on('click', getNext).css({opacity:'1.0',cursor:'pointer'});
		 $('[name = submitconfirmation]').removeClass('subbtnActive').addClass('subbtn');
		 if(uniqArr.length==1){
			 $('.next,.nextmin').off('click').css({opacity:'0.5',cursor:'default'});
			$('.prev,.prevmin').off('click').css({opacity:'0.5',cursor:'default'});
		 }
	 }
	else if(currQues==recdLen-1){
		$('.next,.nextmin').off('click').css({opacity:'0.5',cursor:'default'});
		$('.prev,.prevmin').off('click').on('click', getPrev).css('opacity','1');
	}else{
		$('.next,.nextmin').off('click').on('click', getNext).css({opacity:'1.0',cursor:'pointer'});
		$('.prev,.prevmin').off('click').on('click', getPrev).css({opacity:'1.0',cursor:'pointer'});
	}	
	
	
}
var getNext = function() { 
	currQues++;
	chngQues(currQues); 	
}
var getPrev = function() {    
	currQues--;
	chngQues(currQues);
	 
}
var arrowovertag = false;

/*var moveleftoverfun = function() { 
	folderreanimation();			
	moveleftfun();
}
var moverightoverfun = function() { 
	folderreanimation();			
	moverightfun();
}
	
var animlrfun = function() {		
	$('.dragtooldivAnim').css({visibility:'visible'});		
}

var folderreanimation = function() {	
	$('.dragtooldiv').css({visibility:'visible'});	
	
}*/

function leftrightarrow()
{
}

var endfun = function() {		
	//$('.dragtooldiv').css({visibility:'visible'});		
	//resetClone();
	moveBackFold();	
}
var moveBackFold = function() {
	//$('#dragtooldiv_'+getInxClk).css({visibility:'hidden'});
	//$('#dragtooldivAni_'+getInxClk).css({visibility:'visible'});
}

var temptcent =  'alphabeticSimulation';
var alpRulesselectfun = function() {
	
	
	if($(this).css('opacity') ==1)
	{
		currentId = $(this).attr('name');
		temptcent = currentId;	
		simButtonEnableFun();
		currPosition = $(this).index();
		
		$('.tcent .mCSB_container').html(simaction[currentId])
		
		//console.log(simaction[currentId])
		if (nameIdTemp == currentId && currentId!='crossreference' && nextPreTag ) {
			nameIdTemp = currentId = "empty";
			$('.simbtn').css('background-color','#5a4a42');
			$('.tcent .mCSB_container').html(simaction.alphabeticSimulation);
			temptcent = 'alphabeticSimulation';
			//startToPlay('alphabeticSimulation', 0)
			
			$('.nameing>span').css({cursor:'default'});
			$('.simworkarea em').off('click').css({cursor:'default'});
			$('.simworkarea .nameing span').off('click').css({cursor:'default'});
			$('#mymove').hide();
$('em,span').off('mousemove');
			
		}
		else if (Number($('[name='+currentId+']').css('opacity')) >= 1 && currentId != 'crossreference') {
			nameIdTemp = currentId;
			 $('.simbtn').css('background-color','#5a4a42');
			 $(this).css('background-color','#F05A2B');	
			if(currentId != 'leveling')
				dataRecd[curVal].level=false;
				//$('.simworkarea .nameing span').css({cursor:'pointer'});
				$('.simworkarea em').css({cursor:'pointer'});
			 //cursorAction();	
			 
			 if(currentId == 'Code')
			 {
				$('.simworkarea .nameing span').css({cursor:'default'});
				 $('.simworkarea em').css({cursor:'pointer'});
			 }
			 else if(currentId == 'uIdentification')
			 {
				$('.simworkarea .nameing span').css({cursor:'pointer'});
				$('span>em').css({cursor:'pointer'});
				$('div>em').css({cursor:'default'});				 
			 }
			 
			 
		 }
		//disableCursor();
		nextPreTag = true;
		
	 
		$('#informationIcon').off('click').on('click',informationPanel);
		
	    if(currentId == 'empty'){
			// $('.subinput').css('z-index','1');
			currentId = 'alphabeticSimulation';
		}
		
		
		startToPlay(currentId,0);
		
		
		
	}	
	
	crossRefLengthcheck();
}



var simButtonEnableFun = function() {
	//$('.simbtn').css('opacity','0.8');
	//$('.simbtn').css('cursor','default');
	$code = $('[name=Code]');
	$code.css('opacity','1.0');
	//$('[name=crossreference]').css('opacity','1.0');
	
	$code.css('cursor','pointer');
	$('.simworkarea .nameing span').off('click');
	
	if (currentId == 'Code'){
		if($.inArray('10',dataRecd[curVal].numbering) != -1){
			removeNumbering();
			enableEventlevel(dataRecd[curVal],'.nameing','slash');
		}
		codeonefun()	
	}else if (currentId == 'uIdentification') {
		$('[name=uIdentification]').css({opacity:'1',cusor:'pointer'});	
		if($.inArray('10',dataRecd[curVal].numbering) != -1){
			removeNumbering();
			enableEventlevel(dataRecd[curVal],'.nameing','slash');
		}
		codetwofun()	
	}else if (currentId == 'leveling'){
			
		leveling();
	}
	
	
	/*if (dataRecd[curVal].iuid.length > 0) {
		$('[name=uNumbering]').css({opacity:'1',cusor:'pointer'});		
	}*/
}


var cursorAction = function() {	
	
	if (currentId == 'Code') {	
		$('.nameing>span:even').css({cursor:'pointer'});
		$('.nameing>span:odd').css({cursor:'pointer'});
		changeCursorAsDiv('.nameing>span:odd','/');
	}else if (currentId == 'uIdentification') {
		$('.nameing>span:odd').css({cursor:'pointer'});
		$('.nameing>span:even').css({cursor:'pointer'});
		changeCursorAsDiv('.nameing>span:even','&#x2015;');
	}else if (currentId == 'uNumbering') {
		$('.nameing>span:even').css({cursor:'pointer'});
		
		$.each(dataRecd[curVal].iuid,function(inVal,curhdVal){
			//$('.nameing>span').eq(curhdVal).css('cursor','default'); 					//cursor individual for unit iden
		});		
	}
	
}
var cursorChangefun = function(e)
{

$('#myMove').show();
			if(currentId == 'leveling')
			{
				var xx= e.pageX-40;
			}else
			{
				var xx= e.pageX-10;
			}
			
			var yy= e.pageY-40;
		$('#myMove').offset({
		   left:  xx,
		   top:   yy
		});	
		
		
}

var changeCursorAsDiv = function(needToChange, toShow){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {}else{
		
		
	if(toShow == '&#x2015;')
		$('#myMove').css({lineHeight:'40px'});
	else
		$('#myMove').css({lineHeight:'27px'});	
	$('.nameing>span').unbind('mousemove');
	
	if(currentId == 'leveling')
	{
		$('#myMove').css('width','60px');
		$('#myMove').html('Level '+toShow);
	}else
	{
		$('#myMove').css('width','25px');
		$('#myMove').html(toShow);
	}
	//$(needToChange).off('mousemove').on('mousemove', cursorChangefun);
	//$(needToChange).off('mousedown').on('mousedown', cursorChangefun);
	//$(needToChange).off('mouseup').on('mouseup', cursorChangefun);


	

	$(needToChange).off('mousemove');
	$('em,span').off('mousemove');
	$('#myMove').hide();
	$(needToChange+':not(.numbered,.underline,.notclick)').off('mousemove').on('mousemove', function(e){
		if($(this).html() == '(' || $(this).html() == ')' ){$(this).addClass('notclick'); return 0;}
		//$('.nameing>span').css({cursor:'none'});
		
		if($(this).html() == '/' || typeof $(this).attr('class') != 'undefined' )
		{
			$('#myMove').hide();
		}
		else
		{
			$('#myMove').show();
		}
		/*if(typeof $(this).attr('class') == 'string')*/
			$('#myMove').show();
			if(currentId == 'leveling')
			{
				var xx= e.pageX-30;
			}else
			{
				var xx= e.pageX-10;
			}
			
			//var xx= e.pageX-10;
			var yy= e.pageY-30;
		$('#myMove').offset({
		   left:  xx,
		   top:   yy
		});
	}).off('mouseleave').on('mouseleave',function(e){
		$('#myMove').hide();
		$('.nameing>span').css({cursor:'pointer'});	
	});
	}
	
	
  
	//$(needToChange).css({cursor:'url(./assets/images/cursor/'+toShow+'.png)15 15,auto'});
}
var alpRules = function() {	
	$('.'+currentId).css('visibility','hidden');
	$('[name=crossreference]').css({cursor:'pointer'});
	$('.'+currentId).toggle();
}

var alphabeticSimulationvisite = false;
var currentclass =""


var crossBtnEventCalling = function() {

	//if($(this).css('opacity') ==1)
	{
		currentIds = $(this).attr('name');	
		currentId="crossreference";
		$('.tcent .mCSB_container').html(simaction[currentIds])
		crossReferAct();
		if($('.crossreference').css('display') == 'none'){	//alert("cross reference added");
			$('.simworkcontainer').stop().animate({'left':'50px'},function(){ $('.crossreference').css('display', 'block');$('.crossreference').css('visibility','visible'); $('.crosref,.crossbtnlist').show(); $('.next').css({left:'675px'})	});
			$('[name=crossreference]').css('background','#5a4a42');	
			$('.crossrefnameing .cross_unit').val('');	
			enableDrag();			
			//jQuery('input:first').focus();
		}
		dragcardcheck();
		
		
	$('#informationIcon').off('click').on('click',informationPanel);
	$('.clsCrosRef').off('click').on('click',delClk).css({opacity:'1'});
    if(titleNew !== 'crossreference')
	{
	startToPlay('crossreference',0,'cr');
	}
	}
}
var delClk = function(){
	
		//alert("cross reference deleted");
		if($('.crossreference').css('display') != 'none'){
			deleteCrosRef();	
		if(dataRecd[curVal].crossUnit.length ==0){	
			crossGhostimgRemove();
			
			}
		}
	}
	
var crossGhostimgRemove = function(){	
$('.simworkcontainer').stop().animate({'left':'280px'});
			$('.crossreference').css('display', 'none');
			$('.next').css({left:'335px'})	
			$('[name=crossreference]').css('background','#5a4a42');
			//console.log(simaction[temptcent], temptcent)
			if($('[name=uIdentification]').css('background-color') == 'rgb(90, 74, 66)' &&
					$('[name=Code]').css('background-color') == 'rgb(90, 74, 66)')
					// && $('[name=leveling]').css('background-color') == 'rgb(90, 74, 66)')
			{
				$('.tcent .mCSB_container').html(simaction.alphabeticSimulation)
				  startToPlay('alphabeticSimulation', 0)
				
			}
			else
			{
				$('.tcent .mCSB_container').html(simaction[temptcent])
				
				 startToPlay(temptcent, 0);
			}
			currentIds = temptcent;
			
			currentId = temptcent;
			startToPlay(currentId,0);
			$('.crosref, .crossbtnlist, .crossRefOff').hide();
}			
			
var deleteCrosRef = function(){
			closestOnDrop(crosCount);
			
		if(clost.length != 0){
			$('.crossbtn1').eq(crosCount).animate({width:'0px',marginTop:'10px'},500);
			$('.cross_unit').animate({color:'#fff'},500, function(){$('.cross_unit').css({color:'#000'})});
			
			//$('.crossbtn1').eq(crosCount).hide('slide',{direction:'left'},1000)//("drop",{direction: "left"},800);
			//$(".crossbtn1").eq(crosCount).show( "fold", {horizFirst: true}, 2000 );
			//alert($('.crossreference').effect())
			//$($('.crossreference').clone()).appendTo('body');
			$('.crossreference').stop().effect("transfer",{ to: $('.clsCrosRef') }, 500,function(){storeCrossRef(crosCount);});
			dataRecd[curVal].crossUnit.splice(crosCount,1);	
			
	
			if(dataRecd[curVal].crossUnit.length!=0){
					
				crosCount = closestOnDrop(crosCount);	
				
			}
			
			
		}
		if(clost.length==0){
			$('.crossreference').draggable({disabled:true}).css({opacity:'0.5'}).prop("readonly", true);
			$('.clsCrosRef').off('click').css({opacity:'0.5'});
			$('.crossRefOff').show();
			$('.tcent .mCSB_container').html(simaction.alphabeticSimulation);
			
			
		}		
			//alert(crosCount);
			
			
		
			//createCrosLables();				
}
var closest = function(closestTo) {
	var clost = [];
	for(i=0;i<dataRecd[curVal].crossUnit.length;i++){
		clost[i]=i;
	}		
   var nearest = clost.reduce(function (prev, curr) {
	   return (Math.abs(curr - closestTo) < Math.abs(prev - closestTo) ? curr : prev);
	});
	return nearest;

}
var takentime = 0;
var buttonEventCalling = function() {
	
	$('.fbtn p').removeClass('active');
	
	$(".trimSpace").getNiceScroll().hide();
	
	
	currentId = $(this).attr('name');	
	
	/*if($.inArray(currentId,commonArr)!=-1)
	{
		if(currentId != finalsub[finalsub.length-1])
		finalsub.push(currentId);
		
	}*/
    if(currentId == 'alphabeticSimulation' && (uniqArr.length<=0))
	{	
		progressbarfun();
	}
	$('#closePopup').attr('name',currentId);
//	alert(currentidarr.indexOf(currentId)+' '+currentId)
	if(currentId != currentidarr[currentidarr.length-1] && currentId !="startbtn" ){
		
		if(currentId == 'mainpage')
		{
			currentidarr = ['mainpage'];
		
		}
		else if(currentidarr.indexOf(currentId) > -1 && currentId == 'sitemap')
		{
			currentidarr.splice(currentidarr.indexOf(currentId));
			currentidarr.push(currentId);
			//console.log(currentidarr+' sitemap');
		}
		else if(currentidarr.indexOf(currentId) > -1 )
		{   
			//alert(currentId+' '+currentidarr[1] != ['demonstration']);
			/*if(currentidarr[1] != ['demonstration'])
				currentidarr.splice(currentidarr.indexOf(currentId));*/
			currentidarr.push(currentId)
		}
		else if(footerarr.indexOf(currentidarr[currentidarr.length-1])>-1 && currentidarr[currentidarr.length-1] != currentId && footerarr.indexOf(currentId)> -1 && !reviewAnsClicked )
		{
				
				console.log(currentidarr+' pop');			//console.log('pop '+currentidarr);
			//alert('pop '+currentId);
		//	if(currentidarr.length >3)
			
			currentidarr.pop();
			currentidarr.push(currentId);
		}
		else
		{
			//if(currentidarr[0] == 'mainpage' && currentId!= 'sitemap')	
			
			currentidarr.push(currentId);
//			alert(currentidarr);
		}
		//console.log(newArr.length)
		if((currentId == 'help' || currentId == 'sitemap' || currentId == 'filingRules') && subclick==false){
			
			xx = [];
			
	if((currentId == 'help' && currentidarr.indexOf('sitemap')>-1) || (currentId == 'sitemap' && currentidarr.indexOf('help')>-1) ||(currentidarr.indexOf('sitemap')>-1 || currentidarr.indexOf('help')>-1 || currentId == 'filingRules') || currentId == 'help'){
		progressbarfun();
		//alert(currentidarr+' '+currentidarr[currentidarr.length-2]);
		if(!alphabeticSimulationvisite && currentId == 'help' && (currentidarr[currentidarr.length-2] == 'demonstration' || currentidarr[currentidarr.length-2] == 'videowalkthrough')){
			currentidarr.splice(2,2)
		}
		
			if(currentidarr.indexOf(currentId)>-1 && currentidarr.length>2){
				 xx = currentidarr.filter(function(item,index,value){
					 var cnInx ;
					if(currentidarr.indexOf('mainpage') == -1){
						cnInx = 0;
					}else{
						cnInx = 2
					}	
					
					if(index>=cnInx && item != currentId){
						return false;
					}else{
						return true;
					}
				});
			}
			if(xx.length>=1)
			currentidarr = xx.slice();
			
			}
		}
	}
	//console.log(currentidarr+' overall');	
	
	currentclass= $(this).attr('class');
	if(typeof(currentclass) != 'undefined'){
		if(currentclass.indexOf("sitemapbtn")>-1)	
		{
			temppage = "sitemap";
			
		}
		else if(currentclass.indexOf("mainbtn")>-1)
		{
			$('#closePopup').hide();
			temppage = "mainpage";
			$('.fbtn p').removeClass('active');
		}
		else
		{	$('.fbtn p').removeClass('active');
			temppage = "";
		}

	}
	
	
	
	
	var minvar;
	var secvar;
	var hrsvar;
	if(currentId == 'alphabeticSimulation')
	{	
		currentidarr =[];
		$('#closePopup, .subpage,.subPopUp').hide();
		$('#alphabeticSimulation').show();
		alphabeticSimulationvisite = true;
		chngQues(currQues);	
		var start = new Date;
		timerVar = setInterval(function() {
		takentime = (new Date - start) / 1000;
		if(ltiexit && typeof exitobj.extTimer != 'undefined'){
					takentime = ((new Date - start) / 1000)+exitobj.extTimer;
				}
		hrsvar = Math.floor(takentime/3600).toFixed(0)<10?'0'+Math.floor(takentime/3600).toFixed(0):Math.floor(takentime/3600).toFixed(0);
		minvar = Math.floor((takentime % 3600) / 60).toFixed(0)<10?'0'+Math.floor((takentime % 3600) / 60).toFixed(0):Math.floor((takentime % 3600) / 60).toFixed(0);
		secvar = Math.floor((takentime % 3600) % 60).toFixed(0)<10?'0'+Math.floor((takentime % 3600) % 60).toFixed(0):Math.floor((takentime % 3600) % 60).toFixed(0);
			recordSimTimer = hrsvar+' hrs '+minvar+' mins '+secvar+' secs ';
			
			
		}, 1000); 
	
			//playAudio('alphabeticSimulation',0);
			checkNiceScroll();
			startToPlay('alphabeticSimulation',0);
			
	}
	else if(currentId != 'exit')
	{
		
		if (currentId == 'filingRules')	{
			fillreset();
			findrulename(fillingrules[cardrulearr[0]].title)
		}
		if (currentId == 'crossreferencerules')	{
			crossfillreset();
			findcrossrulename(crossfilingrules[cardcrossrulearr[0]].title)
		}
		$('.subpage,.mainpage').hide();		
		$('#alphabeticSimulation').show();
		
		if(currentId!="submitconfirmation")
		{
		$('#'+currentId).show();
		$('.subPopUp').show();
		$('#closePopup').show();
		}
		
		if(currentId=="submitconfirmation" && $('[name=submitconfirmation]').css('opacity') == 1 && uniqArr.length == 0)			
		{
			$('#submitconfirmation, .confirmsubmit').show();	
			$('.subPopUp, #closePopup').hide();
			$('#dummyDiv').show();	
			$('.confirmsubmit').css("z-index","100000000");		
			$('.container>div:not(#closePopup, .audiocc)').css('height','475px');
			$('.dummySubbtn').hide();
			$('#dummyDiv').css('height','625px')
		}
	   else
		{
			$('#dummyDiv').hide();	
			$('.confirmsubmit').css("z-index","11");
		}	

		if(currentId=="closeparent"){$('.confirmsubmit').hide(); $('.subPopUp, #closePopup').hide();  }
		if(currentId=="reviewAnswer")
		{ 
			reviewAns();  
			/*setTimeout(function(){
				myPdf();
			},1000);  */
		}
		if(currentId=="mainpage")			
		{
			$('#submitconfirmation').hide();
		}
	}
	

	
	 if(currentId == 'reviewAnswer'){	  
	   
	   $('#submitconfirmation').hide();	
	   $('#alphabeticSimulation').show();
	   $('.subpgpopup').css({'height':'450px'});
	   $('#closePopup').css({top: '65px','right':'95px'});
	   $('.brandIcon').css('cursor','default');
	   $('.fbtn p').eq(0).css({opacity:'0.5'}).css('cursor','default');
	   $('#dummySitemap').show();
	   reviewAnsClicked = true;
	   	   
	   }else if(currentId =='videowalkthrough' || currentId == 'demonstration'){
		   $('#closePopup').css({top: '65px','right':'170px'});
	   }else{
	       $('#closePopup').css({top: '80px','right':'95px'});
		   $('.subpgpopup').css({'height':'420px'});
	   }
	   
	$('.fbtn').attr('clk',false)
	if (currentId == 'demonstration'  )	{
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
		} else {
			$('#iframevideoid').attr('src','');
		}
		
	if (currentId == 'videowalkthrough'  )	{
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
		} else {
			$('#iframevideoid1').attr('src','');
		}
		
	if(currentId == "mainpage")
	{ 
	$('#closePopup').hide();
	}
	if(currentclass == 'fbtn'){	
		$('.fbtn p').removeClass('active');
       $('.fbtn p').eq($(this).index()).addClass('active');
	  
	   }
	   
	   if(currentId == 'startbtn'){	
	   $('#startpopup, .startmid,  #closePopup').hide();	
	   $('#mainpage').show();
	   }
	   if(currentId!='empty'){   //playAudio(currentId,0);
			startToPlay(currentId,0);
	   }
	  

 if (currentId == 'resultpage') {

    
	   $('.brandIcon').css('cursor','default');
	   $('.fbtn p').eq(0).css({opacity:'0.5'}).css('cursor','default');
	   $('#dummySitemap').show();
        clearInterval(timerVar);	
	   $('#reviewAnswer').show().css({visibility:'hidden'});
	   $( "#closePopup" ).hide();
	   $('#resultpage').css('visibility','visible');
		
	   	finalCls = true;
	   	codeForScoring();

		   
	   }
	   if(currentId == 'exit')
	   {
		   if(finalCls || ltirecive){
			   
			   clsCnfPopup();
			   
		   }else{
			   exitSendDataToLTI();  
		   }
	
		 /* 
		  localStorage['record'] =[], localStorage['job1'],localStorage['job2']=[];
		  localStorage['job1'] = JSON.stringify(dataRecdJob);
		  localStorage['job2'] = JSON.stringify(dataRecd);
		  localStorage['record'] = JSON.stringify(recordIndex);
		  localStorage['recdArr'] = JSON.stringify(uniqArr);
		  recordIndex=$.parseJSON(localStorage['record'])
		 var dat=[{'name':'raj','cros':[1,2]},{'name':'sarath','cros':[3]}];
		 dat[0].cros.job=1;
		 console.log(dat[0].cros);
			//localStorage.setItem("user",JSON.stringify(recordIndex));
			console.log(JSON.stringify(dat[0]));
		 */	
	   }
	   
	progressbarfun();

}

var progressbarfun = function() {

		
		if(currentId =='overview' || currentId == 'introduction' || currentId == 'directionsforjobs' || currentId == 'mainpage' 
		|| currentId == 'demonstration' || currentId == 'sitemap' || currentId == 'help' || currentId == 'filingRules' || currentId == 'demonstration' || currentId == 'videowalkthrough' )
		{
			$('#progressBar').hide();
		   
		}else{
			
			$('#progressBar').show();
			
		}
}


var codeForScoring = function(){	   
	   		
  //--------------- New Scoring code: Modifications by Larry start here ---------------//
        var card_output_array = [];
        var cross_ref_output_array = [];

        /**
         * Tell Javascript to pause for a certain time.
         *
         * @param {int} milliseconds - How long to wait
         */
        function sleep(milliseconds) {
            var start = new Date().getTime();
            for (var i = 0; i < 1e7; i++) {
                if ((new Date().getTime() - start) > milliseconds){
                    break;
                }
            }
        }

        /**
         * Convert an index to its corresponding letter.
         *
         * @param {int} index - The index of the object to convert to a letter.
         * @return {String} - The letter corresponding to the index
         */
        function makeMapKey(index) {
            var mapKey = "";
            if (index == 0) {
                mapKey = "NUM";
            }
            else {
                mapKey = String.fromCharCode(index + 64);	// Convert the folder index into the appropriate letter
            }

            return mapKey;
        }


        /**
         *  Get the card location and store it in a map
         *  The folders exist sequentially as NUM, A, B, C, ... , Y, Z
         *
         * @return {String} - The json string with the cards in order
         */
        function makeFolderLabels() {

            var allCardsArray = [];

            // Get all the cards from the previous jobs and the current job
            // $.each(dataRecdJob, function (i, card) {
            //     allCardsArray.push(card);
            // });
            $.each(dataRecd, function (i, card) {
                allCardsArray.push(card);
            });

            $.each(allCardsArray, function (cardIndex, card) {  // Loop through the cards and get location and answer

                if (card.hasOwnProperty('ansOrder')) {
                    var prev_job_card_obj = {
                        'folder_loc': card.folderLocation,
                        'ans_loc': card.ansOrder
                    };

                    card_output_array.push(prev_job_card_obj);

                    if (card.hasOwnProperty('crossUnit')) { // Loop through the cross refs and get location and answer
                        $.each(card.crossUnit, function (crossRefIndex, crossRef){
                            var cross_ref_answer_location = [-1, -1];
                            if (card.hasOwnProperty('crossAns')) {
                                if (crossRefIndex < card.crossAns.length) {
                                    cross_ref_answer_location = card.crossAns[crossRefIndex][1];
                                }
                            }
                            var prev_job_cross_ref_obj = {
                                'folder_loc': crossRef.folderLocation,
                                'ans_loc': cross_ref_answer_location,
                                'count': crossRefIndex
                            };

                            cross_ref_output_array.push(prev_job_cross_ref_obj);

                        });
                    }
                }
            });

            var json_output_object = {
                'cards': card_output_array,
                'cross_refs': cross_ref_output_array
            };

            return JSON.stringify(json_output_object);
        }


        // Send and receive the scoring algorithm response from the server
        function getStuff(json_string) {
            return $.ajax({
                type: "POST",
                url: "https://stt.adaptive-datamatics.com/rest/sortingjob/", 
                headers: {"Authorization": "Token c1d8f0a4be288a7edd90804ad835be14f77d8a56"},
                datatype: 'json',
                data: {
                    'api_key': 'c1d8f0a4be288a7edd90804ad835be14f77d8a56',  // external staging api key
                    'job_id': 'Sorting_01',
                    'student_id': 'student_0099',
                    'card_order': json_string
                },
                error: function (xhr, textStatus, errorThrown) {
                    alert(xhr.responseText);
                }
            });
        }

        // Make the labels
        var folder_labels = makeFolderLabels();

        // Process the scored result
        // NOTE: I have pulled several functions that were previously outside of the AJAX call inside this function
        // to allow processing using the scoring result
        getStuff(folder_labels).done(function (result) {
            scoreAjaxData = result;

            pushUser();
            $.each(dataRecd, function (i, v) {

                if (v.hintv > 1) {
                    if (scoreCnt != 0)
                        scoreCnt -= 1;
                }
            });
        
            folderscore = result[0]["raw_score"];
            totfolderscore = result[0]["max_raw_score"];
console.log((Number(codescore) +' '+ Number(folderscore))+' : '+(Number(totcodescore) +' '+ Number(totfolderscore)))
            recordSimScore = (((Number(codescore) + Number(folderscore)) / (Number(totcodescore) + Number(totfolderscore))) * 100).toFixed(2);
			recordSimScore = recordSimScore > 100? 100: recordSimScore;
            recordSimScore = recordSimScore < 0 ? 0 : recordSimScore;
			
			//recordSimScore = 97.68;
			//recordSimScore = recordSimScore.toFixed(2)
			
			
            $('#resultpage .scoreDetails span').text(recordSimScore + '%');
            $('#resultpage .timeDetails span').html(recordSimTimer);
			 $('#ctr0').append('<div class="overallScr"><div id="codeScr" class="scoring"><span>Code Score</span><span>: '+codescore+'/'+totcodescore+'</span></div><div id="folderScr" class="scoring"><span>Folder Score</span><span>: '+folderscore+'/'+totfolderscore+'</span></div></div>');
		   
		    setTimeout(function(){
			$('.clkheretocls').off('click').on('click',clsCnfPopup);
			},30);
			
			
            var errorst = "";
            if (codedIncorrect != 0) {
                errorst += codedIncorrect + " cards were incorrectly coded.<br/>";
            }
            if (placedIncorrect != 0) {
                errorst += placedIncorrect + " cards were incorrectly placed.<br/>";
            }
            if (crosRefNotCrt != 0) {
                errorst += 'cross-reference card was not creaded for ' + crosRefNotCrt + 'cards.<br/>';
            }
            if (crosNotReq != 0) {
                errorst += crosNotReq + ' cross-reference card was created which is not required';
            }
            recordSimError = errorst;
			
			if(!ltirecive){
			
					$.each(dataRecd,function(di,dv){					 
						 $.each(dv.crossUnit,function(i,v){
							// console.log('befr '+JSON.stringify(dv.crossUnit));
							if(v.submt){						
								
								
								dv.crossUnit = [];
								
								//console.log(i+' updated '+JSON.stringify(dv));
								return false;
							}	
							//console.log('outer '+JSON.stringify(dv.crossUnit));
						 });					 
				 });
				  sentDataReportOtLTI();
				 }
           
            //exitSendDataToLTI();

        }).fail(function () {
            alert('AJAX call failed!! Make sure scoring api is running on remote server.');
        });

        //--------------- Modifications by Larry End Here ---------------//
	}




var selectEventType = function(intIndex) {
	if (intIndex%2 == 1 && currentId == 'Code')	{		
		//codeFun(intIndex);
		codeonefun();
	}
	else if (currentId == 'uIdentification') {		
		//unitIdentification(intIndex);		
		 codetwofun();
	}
	/*else if (intIndex%2 == 0 && currentId == 'uNumbering' && dataRecd[curVal].iuid.length > 0) {		
		uNumberingFun(intIndex);	
	}*/
	$('#myMove').hide();
	simButtonEnableFun();
	enableSubmit();
	checkAnswer();
	
	//disableCursor();
}



var offClk = function(getLen) {
	if (getLen == 0) {			
			$('.simbtn').eq(currPosition-1).nextAll().off('click');			
	}
}
function removeDuplicate(rmvData , intIndex) {
	rmvData.splice( $.inArray(intIndex, rmvData), 1 );
}
function enableSubmit(){
	
}

var checkAnswer = function() {
	var codeInp = dataRecd[curVal].slash.join('').replace(/\s/g,'').replace(/,/g,'');
	var unitInp = dataRecd[curVal].numbering.join('').replace(/\s/g,'').replace(/,/g,'');
	var codeAns = dataRecd[curVal].aslash.join('').replace(/\s/g,'').replace(/,/g,'');
	var unitAns = dataRecd[curVal].anumbering.join('').replace(/\s/g,'');
	
	var spacewostring = [];
	var tempstr;
	
	for(var i =0; i<dataRecd[curVal].aslash.length; i++)
	{
		tempstr = dataRecd[curVal].name[i][0].split("");
		
		for(var j =0; j<dataRecd[curVal].aslash[i].length; j++)
		{
			tempstr[dataRecd[curVal].space[i][dataRecd[curVal].aslash[i][j]]] = '#'
		}
		tempstr = tempstr.join('');
//		console.log(tempstr)
		spacewostring[i] = tempstr.toString().split('#');
	}
	count=0;

	dataRecd[curVal].codeScore[2] =0;	
	ipslash = dataRecd[curVal].slash.join(',')
	anslash = dataRecd[curVal].aslash.join(',')
	
	if(ipslash.replace(/,/g,'').length > anslash.replace(/,/g,'').length)
		{
		//	console.log( '                               slash      xtra')
			dataRecd[curVal].codeScore[2] = 1;
		}
	for(var i = 0; i<dataRecd[curVal].numbering.length; i++)
	{
		
		
		if(typeof dataRecd[curVal].anumbering[i] != 'undefined')
		{
			var splt = dataRecd[curVal].numbering[i].split(' ');			
			var st = $('.nameing .names').eq(splt[0]).children().eq(splt[1]).text();
			var userAns = st.toString();
			
			var splt2 = dataRecd[curVal].anumbering[i].split(' ');
			if(splt2[1]%2 == 1){splt2[1]= splt2[1]-1; }
			var relAns = spacewostring[splt2[0]][splt2[1]/2];
			relAns = relAns.replace(/\)/g,'');
			//console.log(userAns+' '+relAns+' '+dataRecd[curVal].numbering[i][0]+' '+dataRecd[curVal].anumbering[i][0]);
			if(userAns.replace(/\s/g,'#')==relAns.replace(/\s/g,'#') && dataRecd[curVal].numbering[i][0] == dataRecd[curVal].anumbering[i][0])
			{
				count++;
			}	
		}
		else
		{
			//console.log( '                                     xtra')
			dataRecd[curVal].codeScore[2] = 1;
		}
	}
	dataRecd[curVal].codeScore[0] = count;

	scoreCorr=0
	//console.log(codeInp+' == '+codeAns+' && '+unitInp+' == '+unitAns);

	
	
	$('.scrbtn').text(score);
	
	
}
var updatePercentage = function() {	
		progressBar( (ran.length-uniqArr.length), $('#progressBar'));
		$('#simbtncontiner div').removeClass();
		$(this).addClass('active');
}
	
function progressBar(percent, $element) {
	var progressBarWidth =percent * $element.width() / ran.length;
	var perct = parseInt(percent/ran.length*100);	
	$element.find('div').stop().animate({ width: progressBarWidth }, 500);
	if(ltirecive){
		perct = 100;
		$element.find('div').stop().animate({ width: '100%' });
	}
	$element.find('span').html(perct + "%&nbsp;");
	'<p class="topNumTxt"></p>'
}

var titleNew = "";
var startToPlay = function(audNam, seq, cd) {
	//console.log(ctplay != cd, cd);	
	var getAudFrmData = audSeq[audNam];
	titleNew = audNam;
	
	if((ctplay != cd) || (typeof cd=='undefined')) 
	{
	
	audPlay[0].pause();
	$('.audPause').css({background: 'url(./assets/images/playbtn.png) no-repeat'});
	$('.audPause1').css({background: 'url(./assets/images/playbtn.png) no-repeat'});
	$('.audPause').off('click');
	$('.audPause1').off('click');
	$('.audiocc').html('').hide();
	//$('.reply').off('click').css({opacity:'0.5'});
	 $('.ccicon').off('click').removeClass('cciconActive').addClass('ccIcon');
	 
	if(typeof(getAudFrmData)!="undefined"){
		$('.startAud').off('click').on('click',function(){
			//$(this).off('click').css({opacity:'0.5'});
			
			playAudio(audNam, seq);
			$('.audPause').off('click').on('click', pauseAud);
		}).css({opacity:'1'}).css('cursor','pointer');
	}else{
		$('.startAud').off('click').css({opacity:'0.5'}).css('cursor','default');
		
	}
	if(typeof(getAudFrmData)!="undefined"){
		$('.startAud1').off('click').on('click',function(){
			//$(this).off('click').css({opacity:'0.5'});
			
			playAudio(audNam, seq);
			$('.audPause1').off('click').on('click', pauseAud);
		}).css({opacity:'1'});
	}else{
		$('.startAud1').off('click').css({opacity:'0.5'});
		}
	}
	ctplay = cd;
}
var palyaudioname ="";
var playAudio = function(getAudName, getIndex) {
	hintaudPlay[0].pause();	
	palyaudioname = getAudName;	
//	console.log(getAudName);
	var getAudFrmData = audSeq[getAudName];
	var getCcTxt =	audCcTxt[getAudName];
	//console.log($('#alphabeticSimulation').css('display'),$('.subpage').filter(':visible').attr('id'),typeof $('.subpage').filter(':visible').attr('id') == 'undefined')
	if(typeof $('.subpage').filter(':visible').attr('id') == 'undefined' && $('#alphabeticSimulation').css('display') == 'block' && 
		$('[name=Code]').css('background-color') == 'rgb(90, 74, 66)' &&
		$('[name=uIdentification]').css('background-color') == 'rgb(90, 74, 66)' &&
		$('[name=crossreference]').css('background-color') == 'rgb(90, 74, 66)')
	{
		if(getAudName == 'crossreference')
		{
		getAudName = 'crossreference'
		getAudFrmData = audSeq[getAudName];
			
		getCcTxt =	audCcTxt[getAudName];
		}
	/*else
		{
		getAudName = 'alphabeticSimulation'
		getAudFrmData = audSeq[getAudName];
		getCcTxt =	audCcTxt[getAudName];
		}*/
		
	}
	
	$('.audiocc').html('').hide();
	
	if(getIndex == 0) {
		$('.muteIcon').off('click').css({background: 'url(./assets/images/audio_icon.png) no-repeat'});
		audPlay[0].muted = false;
		$('.audPause').css({background: 'url(./assets/images/pausebtn.png) no-repeat'});				
		$('.audPause1').css({background: 'url(./assets/images/pausebtn.png) no-repeat'});	
		
	}	
	$('.ccicon').off('click').removeClass('cciconActive').addClass('ccIcon');
	//$('.reply').off('click').css({opacity:'0.5'});
		audPlay[0].pause();	
		
	if(typeof(getAudFrmData)!="undefined" && getAudFrmData.length>=1){
		audPlay.attr('src','');
		audPlay.attr('src','./assets/audio/'+getAudFrmData[getIndex]+(isFirefox?".ogg":".mp3"));
		
		//audPlay[0].currentTime = 0;		
		audPlay[0].play();
		$('.muteIcon').off('click').on('click', muteAudio);
		$('.audPause').off('click').on('click', pauseAud);
	    $('.audPause1').off('click').on('click', pauseAud)
		checkEnd(getAudFrmData,getIndex);
		if($('.audiocc').css('display') == 'none' )
		{$('.ccicon').removeClass('cciconActive').addClass('ccIcon');}
	}

}
var muteAudio = function() {	
	audPlay[0].muted = !audPlay[0].muted;
	if(audPlay[0].muted)
		$('.muteIcon').css({background: 'url(./assets/images/muit_icon.png) no-repeat'});
	else
		$('.muteIcon').css({background: 'url(./assets/images/audio_icon.png) no-repeat'});
}
var pauseAud = function(){	
	if(audPlay[0].paused){
		audPlay[0].play();
		$('.audPause').css({background: 'url(./assets/images/pausebtn.png) no-repeat'});
		$('.audPause1').css({background: 'url(./assets/images/pausebtn.png) no-repeat'});
		
	}
	else{
		audPlay[0].pause();
		$('.audPause').css({background: 'url(./assets/images/playbtn.png) no-repeat'});	
		$('.audPause1').css({background: 'url(./assets/images/playbtn.png) no-repeat'});
	}
}
var checkEnd = function(getAudFrmData,getIndex){
	audPlay.off().on('ended', function() {		
		if(getIndex<getAudFrmData.length-1)
		{
			getIndex++;			
			playAudio(palyaudioname,getIndex); 			
		}else if(getIndex == getAudFrmData.length-1){
				$('.audPause1').off('click').on('click',enableReset).css({background: 'url(./assets/images/playbtn.png) no-repeat'});
				$('.audPause').off('click').on('click',enableReset).css({background: 'url(./assets/images/playbtn.png) no-repeat'});
				$('.audiocc').html('').hide();	
                $('.ccicon').off('click').removeClass('cciconActive').addClass('ccIcon');
				$('.muteIcon').off('click').css({background: 'url(./assets/images/audio_icon.png) no-repeat'});
				audPlay[0].muted = false;					
			}	
	});
	
}

var enableReset = function() {
	playAudio(palyaudioname,0);
}

var startToHintPlay = function(audNam, seq) {	
	var gethintAudFrmData = audhintSeq[audNam];
	hintaudPlay[0].pause();	
	$('.hintaudPause').css({background: 'url(./assets/images/hintplaybtn.png) no-repeat'});
	$('.hintaudPause').off('click');
	 
	if(typeof(gethintAudFrmData)!="undefined"){
		$('.hintaudStart').off('click').on('click',function(){
			playhintAudio(audNam, seq);
			$('.hintaudPause').off('click').on('click', pausehintAud);
		}).css({opacity:'1'}).css('cursor','pointer');
	}else{
		$('.hintaudStart').off('click').css({opacity:'0.5'}).css('cursor','default');
		
	}
}

var palyhintaudioname ="";
var playhintAudio = function(gethintAudName, hintIndex) {
	audPlay[0].pause();
	$('.audPause').css({background: 'url(./assets/images/playbtn.png) no-repeat'});	
	palyhintaudioname = gethintAudName;		
	var gethintAudFrmData = audhintSeq[gethintAudName];//
	
	if(hintIndex == 0) {
		$('.hintaudPause').css({background: 'url(./assets/images/hintpausebtn.png) no-repeat'});	
	}
		hintaudPlay[0].pause();	
		
	if(typeof(gethintAudFrmData)!="undefined" && gethintAudFrmData.length>=1){			
		hintaudPlay.attr('src','./assets/audio/'+gethintAudFrmData[hintIndex]+(isFirefox?".ogg":".mp3"));		
		hintaudPlay[0].play();
		$('.hintaudPause').off('click').on('click', pausehintAud);
		checkhintEnd(gethintAudFrmData,hintIndex);
	}
	

}

var pausehintAud = function(){	
	if(hintaudPlay[0].paused){
		hintaudPlay[0].play();
		$('.hintaudPause').css({background: 'url(./assets/images/hintpausebtn.png) no-repeat'});		
	}
	else{
		hintaudPlay[0].pause();
		$('.hintaudPause').css({background: 'url(./assets/images/hintplaybtn.png) no-repeat'});
	}
}
var checkhintEnd = function(gethintAudFrmData,hintIndex){
	hintaudPlay.off().on('ended', function() {
		
		if(hintIndex<gethintAudFrmData.length-1)
		{
			hintIndex++;			
			playhintAudio(palyhintaudioname,hintIndex); 			
		}else if(hintIndex == gethintAudFrmData.length-1){
				$('.hintaudPause').off('click').on('click',enableHintReset).css({background: 'url(./assets/images/hintplaybtn.png) no-repeat'});					
			}	
	});
	
}

var enableHintReset = function() {
	playhintAudio(palyhintaudioname,0);
}

var getfromLTI = function(sendobj){
}

var geterrorFromLTI = function(errorobj){
}


var myPdf= function(){	
		$('.detReviewScore,.detReviewTime,.printBtn').show();
		$('#newdivParent').remove();
		$('<div/>',{id:'newdivParent'}).appendTo('body');
		$('.printBtn').off('click').on('click', function() {		
		$('.newdiv').remove();			
		$('<div/>',{class:'newdiv'}).appendTo('#newdivParent').append($('#ctr0').clone());	
        $('<div/>',{class:'pdfHead'}).appendTo('.newdiv').text('Job 1: Alphabetic Filing Rules');
		$('<div/>',{class:'pdfScore'}).appendTo('.newdiv').text('Score: '+recordSimScore+'%');
		$('<div/>',{class:'pdfTime'}).appendTo('.newdiv').html('Elapsed Time: '+recordSimTimer);
		//$('<div/>',{class:'pdfLogo'}).appendTo('.newdiv');
		$('<img src="./assets/images/logo.png" class="pdfLogo">').appendTo('.newdiv');
		
		$('.newdiv').append($('#ctr .mCSB_container').html());
		//$('.newdiv').prepend($('#ctr0').html());
		//$('.newdiv #swapAreaDrop_0').prepend($('#reviewAns').children().eq(0).html());
			
				setTimeout(function(){
				
					var windowContent = '<!DOCTYPE html>';
					windowContent += '<html>'
					windowContent += '<head><title>Records Management</title></head> <link type="text/css" href="assets/css/fonts.css" rel="stylesheet"/> <link type="text/css" href="assets/css/global.css" rel="stylesheet"/><link type="text/css" href="assets/css/main.css" rel="stylesheet"/><link rel="stylesheet" href="assets/css/jquery.mCustomScrollbar.min.css"><link type="text/css" href="assets/css/alpsim.css" rel="stylesheet"/><link type="text/css" href="assets/css/resultpagezoom.css" rel="stylesheet"/><link type="text/css" href="assets/css/align.css" rel="stylesheet"/></head>';
					windowContent+="<style>@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) { .btn, .simbtn, .hintbtn, .subbtn,.crossbtn{padding-top:14px;padding-bottom:10px;}.fbtn p {padding-top:7px;padding-bottom:4px;}.fbtn p.active{padding-top:7px; padding-bottom:4px;}.sitemapbtn{  padding-top:11px; padding-bottom	:8px; }.crossbtn1{line-height:21px;}.clsCrosRef span{line-height:0px;padding-top:4px;}.line1{top:123px;}.line3 {top: 39px;}.centersitemapbtn1{top: 225px;}.centersitemapbtn2{top: 292px !important;}.centersitemapbtn3{top: 324px !important;}.rightsitemapbtn{bottom:24px;}.clkheretocls{ padding-top:14px; padding-bottom:10px;}.addfolder{padding-top:2px;}.addguide{padding-top:2px;}.addspecialguide{padding-top:2px !important;}}</style>"
					windowContent += '<body>'					
					
						windowContent += '<div>'+$('#newdivParent').html()+'</div>';						
					
					
					windowContent += '</body>';
					windowContent += '</html>';
					
					 printWin = window.open('','_blank','scrollbars=1,location=no,toolbar=no,menubar=no,scrollbars=yes,resizable=yes',false );
					
					
					//window.open('Result.html','null',winFeature);  
					//printWin.document.open();
					
					printWin.document.write(windowContent);
					printWin.document.close();
					printWin.focus();
					setTimeout(function(){									
						printWin.print();
					},1500);
				},1500);
			
		});
			 
		

}

parts  = [];  
function splitImg(){
	var canvas = document.createElement('canvas'); // In memory canvas
		ctx    = canvas.getContext("2d");
		
	                            // to push into oud base64 strings
	img    = new Image();

img.onload = split_4;
imgsplit = (idx+1)/5;
img.src = imgData;
	function split_4(){
	  
	  	 w2 = img.width ///2 ;  // 130
		  h2 = img.height / imgsplit; // 40
	parts = [];
	  for(var i=0; i<imgsplit; i++){
		
			 x =  0//(-w2*i) % (w2*2),
			y = (h2*i)*-1;
		
	
		canvas.width  = w2;
		canvas.height = h2;
		
			
		ctx.fillStyle = "#FFFFFF";
		ctx.fillRect(0,0,w2,h2);
		//	ctx.translate(0,10);
		ctx.drawImage(this, x, y, w2, h2*imgsplit); // img, x, y, w, h
		parts.push( canvas.toDataURL("image/jpeg") );     // ("image/jpeg") for jpeg
		
			var slicedImage = document.createElement("img")
			slicedImage.src = parts[i];				  
			
		// ----------	  
		
	  }
	  console.log(parts.length)
	  
	  
	};	
}




