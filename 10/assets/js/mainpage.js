	
var exitobj ={};
var currentId = '';
var currQues = 0;
var uniqArr = [];
var editArr = [];
var curVal = 0;
var folderIndex = new Array();
var recdLen = dataRecd.length;
//var recdLen=2;
var finalsub=['mainpage'];
var splVal;
curNav = 'none';
var firstRun = true;
var curNum = 0;
var leftrightanitag = true;
var moveBack;
var isAnimated=false;
var nameIdTemp ="";
var nextPreTag = true;
var $simBtn = $('.simbtn');
var totalNoFolder = 15;
var scoreCorr = 0;
var temppage = "";
var audPlay;
var codedIncorrect = 0, placedIncorrect = 0, crosRefNotCrt = 0, crosNotReq = 0;
var score = 0;
var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox")>-1;
var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
var is_safari = navigator.userAgent.indexOf("Safari") > -1;
var recordSimScore=0,recordSimTimer=0,recordSimError=0;
var timerVar;
var currentDiv;
var crosCount=0;
var movingDist=0;
var movecount = 0; var lptag = true; var mutag = true;
var rptag = false;
var currentAnimPos =0;
var currElem = 0;
var isLeftMousedown = false, isRightMousedown = false, clear, isRightArrEnable = true, isLeftArrEnable = true;
var totalscore=0;
var cloneArr =[]; 
var cloneCnt = 0;
var revTop = 0;
var maxfoldervisible = 11;
var firsteq = 0;
var lasteq = 0;
var totalfolder = 0;
var getScrolTop = 0;
var finalCls = false;
var folCls2 = 'undefined'; // get drop id
//var hoverId;
var reviewAnsClicked = false;
var ctplay="";

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
		
	$('#xRefLef').off('click').on('click',moveXleft);
	$('#xRefRig').off('click').on('click',moveXright);

	
	
	  var onetime=true;
	   $("#ctr").on("scrollstop",function(){
   		
		
 		 }); 

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
		 createFolders(folderArr);
		 codeForScoring();
		//console.log('after receive '+JSON.stringify(foldertypeandName))
		 maxNumofFolderandGuide += foldertypeandName.length+findAddedCorrectName.length;
		 totalfolderScore = findAddedCorrectName.length;
		 
		 $('#reviewAnswer').show().css({visibility:'visible'});
		// pushUser();
		 $('#resultpage').hide();
				//currentId = 'reviewAnswer';
		 $('.btn, .fbtn, .clkLink, .generalinfobtn, .filingprobtn, .subheadclick').bind('mousedown', buttonEventCalling);
		 $(".rules").on("click", ruleclickevent);
	     $(".crossrules").on("click", crossruleevent);
	     $('.previouspage').off('click').on('click',shwPrevRule);
	     $('.nextpage').off('click').on('click',shwNxtRule);
	     $('.previouscrosspage').off('click').on('click',shwPrevCrossRule);
	     $('.nextcrosspage').off('click').on('click',shwNxtCrossRule);
		 if(currentId == 'reviewAnswer'){	
	     $('.subpgpopup').css({'height':'450px'});
		 }
		 
		 //closeNdvideofun();
		 
		 //audioPlayfun();
		 
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
         var returnpagearr =['directionsforjobs', 'mainpage', 'sitemap', 'help' , 'alphabeticSimulation'];
         var footerarr = ['sitemap','help','exit','filingRules','reviewAnswer'];
         var currentidarr = ["mainpage"];
          commonArr=['directionsforjobs', 'mainpage', 'sitemap', 'help' , 'alphabeticSimulation','sitemap','help','exit','filingRules','reviewAnswer','overview','introduction','demonstration','videowalkthrough','resultpage'];
         
        
		return ;
	}
	function clsCnfPopup() {
		window.parent.ReturnToBack();
		
	   // window.parent.indexReturnToBack();
	}
   	hintFuncInit();
	//audPlay[0].play();
	audPlay = $('#audElem');
	hintaudPlay = $('#hintaudElem');
	$('.nameing>span').css('cursor','pointer');	
	
	createFolders(folderArr);
		 $(document).ready(function() {
	    
		/*$(".dragarea").bind("mousewheel", function() {
			return false;
		});*/
		 if(!isChrome && !is_safari){
		 /*$('.scrollBarFiling').enscroll({
		  verticalScrolling:true,
		  verticalTrackClass:'track1',
		  verticalHandleClass:'track2'
		  });*/
		  if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
$('.dragarea').css('z-index','0');			  
		  }
		  
		}
	   
	 });
	//$('<div/>',{class:'callOut'}).appendTo('.dragtooldiv');
	
	
	//$('.codeEditIcon').off('click').on('click', recordEditfun);
	//$('.rightarraw').off('click').on('click', moverightoverfun);
	$('<div/>',{id:'myMove'}).appendTo('#alphabeticSimulation');
	
	
	
	$('#cnfmsubmit').off('click').on('click', reviewAns);
	$('.sitemapbtn, .fbtn, .btn, .subbtn, .backBtn, #startbtn, .clkLink, .generalinfobtn, .filingprobtn, .subheadclick').bind('click', buttonEventCalling);
	
	$('.inspectSimbtn').bind('click', function()
		{  
		
			$('.simbtn, .crossbtn').css('background-color','rgb(90, 74, 66)');
			$('.inspect').toggle(); 
			if($('.inspect').css('display') == 'none')
				{
				$(this).css('background','#5a4a42');
				startToPlay('alphabeticSimulation',0);
				nameIdTemp = '';
				$('.tcent .mCSB_container').html(simaction.alphabeticSimulation)
				$('.containersubheadone').html(simactionTitle.alphabeticSimulation)
				}
			else
				{$(this).css('background','#e75028'); 	
		         currentId = $(this).attr('name');	
		         currentId="Inspect";
				 nameIdTemp = currentId;
	        	 //console.log(currentId);
		         startToPlay('Inspect',0);
		         $('.tcent .mCSB_container').html(simaction.Inspect)
				 $('.substeping').css('z-index','2');
		         $('.subinput').css('z-index','1');
			     $('.subinput input').prop( "disabled", true );
				}
	
		
		});
	$('.crossbtn').bind('click', crossBtnEventCalling);
	$('.fileBtn').bind('click', fileBtnCalling);
	$('.simbtn').bind('click', alpRulesselectfun);
	
	$('.inspectbtn').off('click').on('click', function()
		{
		 
			if($(this).css('background-color') == 'rgb(231, 80, 40)')
			{
				$('.inspectbtn').css({'background':'#fff', 'color':'#000'});
				dataRecd[curVal].inspect = -1;
	
				
			}
			else
			{
				$('.inspectbtn').css({'background':'#fff', 'color':'#000'});
				$(this).css({'background':'#e75028', 'color':'#fff'});
				dataRecd[curVal].inspect  = $(this).attr('name');
				
				
			}
				
		});
	
	//$('#mainpage').bind('mouseup', function(){temppage = 'mainpage'; });
	//$('.fbtn').bind('mouseup', function(){$('.fbtn').attr('clk',true);temppage = 'sitemap'; });
	
	$('<div/>',{class:'cardNum'}).appendTo('.simworkarea');
	$('<div/>',{class:'cardNum'}).appendTo('.crossreference'); 
	$('<div/>',{id:'zoompopup'}).appendTo('#alphabeticSimulation');
	$('<div/>',{id:'cloneContainer'}).appendTo('#zoompopup');
	$('<div/>',{id:'scaleCrdNo'}).appendTo('.simworkcontainer');
	$('.maximizeIcon').off('click').on('click', zoomCard);
	
	//$('.codeEditIcon').off('click').on('click', pageSwap);
	
	randNum();

    

	$('<div/>',{class:'dragger'}).appendTo('.simworkarea,.crossreference');
	$('<div/>',{class:'draggerForParent'}).appendTo('.crossreference');	
	if($('.simworkarea ').hasClass('scaleCard')){
			$('.dragger').show();
		}
	if(ltiexit)
	{
	
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
	
	foldertypeandName = exitobj.folderNames.reverse();
	uniqArr = exitobj.recdArr; // $.parseJSON(localStorage['recdArr']);
	//console.log('resume '+uniqArr)
	$('.dragtooldiv').remove();
	createFolders(folderArr);
	$('.dragarea').sortable({start:dragSortStart,helper:'clone',appendTo:'body', sort:setsortCursor,update:swapOrderFol,cancel:'.unsortable',axis:'y',refreshPositions: true,stop:sortStop,tolerance: "pointer",zIndex:100000,placeholder: "ui-state-highlight",scroll:false});
	maxNumofFolderandGuide += foldertypeandName.length+findAddedCorrectName.length;
	totalfolderScore = findAddedCorrectName.length;
	enableDrop();
	updateCloneArr();
	showFolder();
	
	if(cloneArr.length == 0){
		$('.simworkcontainer').show().css({visibility:'hidden'});
		$('.dragger').hide();
	}
	
	restorePage();
	
	$('#close').off('click').on('click',closePanel);
    if(cloneArr.length>0){
	
		$('[name = submitconfirmation]').removeClass('subbtnActive').addClass('subbtn');	
		$('.dummySubbtn').show();
		$('.hideAudio').hide();
		
	}else{ 
	 $('[name = submitconfirmation]').removeClass('subbtn').addClass('subbtnActive');
	 $('.dummySubbtn').hide();
	 updatePercentage();
	}	
		
		
	}else
	{
		//randNum();	
		//chngQues(currQues);
		
		storeJobOne();

	}
	
	hoverEffect();
    var Foldermodal = document.getElementById('createFolder');
    var Folderbtn = document.getElementById("createFolderbtn");
    var Folderspan = document.getElementsByClassName("close")[0];
    Folderbtn.onclick = function() {
		if($('#createFolderbtn').css('opacity') == 1){
		$('#guidename').val('');	
		$('#foldername').val('');
			if(folderArr.length+guideName.length >= maxNumofFolderandGuide)
			{
				alert("You have created maximum Folders.");
				return;
			}
			    Foldermodal.style.display = "block";
				$('.addFldrbtn').css({color:'#fff','background':'#e75028','cursor':'pointer'});
				$('.dummyDivGud').show();
				$('#foldername').focus();
				$('#foldername').keypress(function(e){ return e.which != 13; });
			/*if($('.rectangle').children().length==0){ 
				
			}else{
				alert('Move Folder/Guide to approriate location');
			}*/
		}
    }
    Folderspan.onclick = function() {
		
		
        Foldermodal.style.display = "none";
		$('.addFldrbtn').css({color:'#5a4a42','background':'#fff','cursor':'pointer'});
			$('.dummyDivGud').hide();
		
    }
    window.onclick = function(event) {
        if (event.target == Foldermodal) {
            Foldermodal.style.display = "none";
        }
    }
	
	/*var Guidemodal = document.getElementById('createGuide');
    var Guidebtn = document.getElementById("createGuidebtn");
    var guidespan = document.getElementsByClassName("closeGuide")[0];
    Guidebtn.onclick = function() {
		if($('#createGuidebtn').css('opacity') == 1){
		$('#guidename').val('');	
	$('#foldername').val('');
		if(folderArr.length+guideName.length >= maxNumofFolderandGuide)
		{
			alert("You have created maximum Folders.");
			return;
		}   
		
		Guidemodal.style.display = "block";
		$('.addGubtn').css({color:'#fff','background':'#e75028','cursor':'pointer'});
        $('.dummyDivGud').show();
		$('#guidename').focus();
		//if($('.rectangle').children().length==0){
     
		//}else{
			alert('Move Folder/Guide to approriate location');
		//}
		}
    }
    guidespan.onclick = function() {
        Guidemodal.style.display = "none";
		$('.addGubtn').css({color:'#5a4a42','background':'#fff','cursor':'pointer'});
		$('.dummyDivGud').hide();
    }
    window.onclick = function(event) {
        if (event.target == Guidemodal) {
            Guidemodal.style.display = "none";
        }
    }*/
	$('.crfRefMin').off('click').on('click',function(e){
		
		if(parseInt($('.crossreferenceContainter').css('height')) >= 150)
		{
			$('.crossreferenceContainter').animate({height:'25px', width:'320px'},function(){$('#noOFCrds').html('CROSS-REFERENCE SHEET(S)');});
			$('.crfRefMin').attr('data',1);
			$('.crfRefMin').css({background: 'url(./assets/images/minimize.png) no-repeat'});	
			
		}
		else
		{
			var topval = parseInt($('.crossreferenceContainter').css('top'))
			var leftval = parseInt($('.crossreferenceContainter').css('left'))
			if(topval > 185 ) {topval = 185}
			if(leftval > 695 ) {leftval = 695}
			{
				$('.crossreferenceContainter').animate({height:'320px', width:'320px', top:topval+'px', left:leftval+"px"},function(){$('#noOFCrds').html('CROSS-REFERENCE SHEET(S)');})
			}
			$('.crfRefMin').attr('data',0);
			$('.crfRefMin').css({background: 'url(./assets/images/maximize.png) no-repeat'});	
				
		}
			/*$(".crossreference:not('.draggerForParent')").children().slideToggle();
			$('#noOFCrds').toggle();
				e.stopImmediatePropagation();*/
		});
		
		//console.log(uniqArr.length, currQues)	
		if(uniqArr.length>0){
		chngQues(currQues);	
		}
		else{
		$('.simworkcontainer').hide();	
		$('.containerheader').show();	
		$('.crossreferenceContainter').css({visibility:'hidden'});
		
		}

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('#startpopup').hide();
	}else{
		//$('#startpopup').show();
		//playAudio('startbtn',0);	
		startToPlay('alphabeticSimulation',0);	
	}

    $('.crossreference .dragger').off('mouseenter').on('mouseenter', checkCrosRefDup);

	navigateFolder();


$('.cross_unit').off('focusin').on('focusin', function(e){	
	$('.tcent .mCSB_container').html(simaction.crossreference);	
	if(titleNew !== 'crossreference')
	{
	startToPlay('crossreference',0,'cr');
	}
});
	 
	//showFolder();
	
	//storeJobTwo();
	addNewFolder();




	toggleArrow();

/*
	isRightArrEnable = false;
	$('.leftarraw').css('background-color','green');
	$('.rightarraw').css('background-color','red');
*/
/*for(var i=0; i<$('.dragtooldiv').length-1 ; i++)
{
	$('.dragtooldiv').eq(i).append(i);
}*/
		
	/*	$("#ctr").on( "vmousedown", function() {
			$(this).scrollTop($(this).scrollTop())
		})*/

//document.body.addEventListener('touchmove', function(e){ e.preventDefault(); });
        $('.dragtooldiv,.dragarea').off('touchmove').on('touchmove',function(e){		
		  //e.preventDefault();
		  jQuery('body').unbind('touchmove');
	    });
		
	
	$('.dragtooldiv').off('touchmove').on('touchmove',function(e){		
		//console.log(e.originalEvent.touches[0].pageY+' aaaa');			
		//clkOn = false;		
		//clkOn = false;			
		//$('.containersubheadone').text(e.originalEvent.touches[0].pageY+' move');			
		tchEvtEnd = e.originalEvent.touches[0].pageY;		
	});			
	$('.dragtooldiv').off('touchstart').on('touchstart',function(e){		
		//clkOn = true;		
			tchEvt = e.originalEvent.touches[0].pageY;		
			tchEvtEnd = e.originalEvent.touches[0].pageY;		
			//$('.containersubheadone').text(tchEvt+' start');		
	});		
	$('.dragtooldiv').off('touchend').on('touchend',function(e){			
		//$('.containersubheadone').text(tchEvtEnd+' stop');		
		//if(typeof tchEvtEnd != 'undefined')		
		{		
		var d = diffchk(tchEvt,tchEvtEnd);		
		clkOn = d>2?false:true;				
		}		
		/*else{		
			clkOn = true;		
		}*/		
	});	
	
}

var stattag = true;		
var addfoldcount =0;		
var gcount =0;		
var scrollPos;		
var scrollinc;		
function scrollfun(){		
				var elem = $(".dragareaall");		
								 		
						
						
						
				dragareaval = $('.dragareaall')[0].scrollHeight; // 332 - initial dragarea height; 30 - each folder outer height		
						
				var innercon = Math.round(parseInt($('.dragareaall').innerHeight()))		
				var contscro = dragareaval //Math.round(parseInt($('.dragarea').innerHeight()))		
							
				scrollbarfolderheight = parseInt($( "#scrollbarfolder" ).css('height'))		
					
				var viewportRatio = $('.dragareaall').height() / $('.dragarea').outerHeight(true);		
				$( "#scrollthumb" ).height(		
					Math.max(		
					50,		
					Math.floor(scrollbarfolderheight * viewportRatio)		
					)		
				);		
						
				$( "#scrollthumb" ).css('height', innercon/(Math.round(parseInt(contscro))/scrollbarfolderheight))		
				 scrolldif = scrollbarfolderheight - (Math.round(parseInt($( "#scrollthumb" ).css('height'))))		
						
					
					
						
				var elem = $(".dragareaall");		
				var elemcon = $(".dragarea");		
				// maxScrollTop = dragareaval - elem.outerHeight();		
				 		
				$('.dragareaall').scrollTop(maxScrollTop);		
								
				$('.dragareaall').scrollTop(1000)		
				maxScrollTop = $('.dragareaall').scrollTop();		
				 		
				$( "#scrollbarfoldercon	p").eq(-2).html('maxScrollTop '+maxScrollTop +' '+elem[0].scrollHeight +' '+ elem.outerHeight())		
						
				scrollPos = $('.dragareaall').scrollTop();		
				/*if(stattag)*/		
				{		
					$( "#scrollthumb" ).css('top', (scrollPos/maxScrollTop) * scrolldif)		
				}		
						
				$( "#scrollbarfoldercon	p").last().html('dragareaall '+Math.round(parseInt($('.dragareaall').css('height')))+ ' ' + $('.dragareaall').scrollTop()+' '+gcount++)		
				//$('.dragareaall').scrollTop(100000)//(Number(maxScrollTop)+100))		
				if(stattag){ }		
				$( "#scrollthumb" ).css('top',  parseInt($( "#scrollbarfolder" ).css('height')) - parseInt($( "#scrollthumb" ).css('height')))		
						
				scrollinc = $('.dragareaall').scrollTop();		
				//alert(maxScrollTop)		
				//alert($('.dragareaall').innerHeight()+' '+$('.dragareaall .dragarea').innerHeight())		
				//alert((parseInt($('.dragareaall').innerHeight())))}		
						
				maxTop = $('#scrollthumb').position().top;		
				console.log(innercon+" initial")		
						
			}		
var maxTop = 0;				
var maxScrollTop;		
var scrolldif;		
function dragfun(e){		
			
	$( "#scrollbarfoldercon	p").eq(4).html('5 scrolldif '+$('.dragareaall').scrollTop() +'  '+ parseInt($('#'+e.target.id).css('top')) +'  '+ $('.dragarea').height() +'  '+ scrolldif +'  '+ maxScrollTop)		
	ctStop = $('.dragareaall').scrollTop();		
	$('.dragareaall').scrollTop(parseInt($('#'+e.target.id).css('top'))/scrolldif*maxScrollTop);		
			
	if($('.dragareaall').scrollTop() > maxScrollTop-30){$('.dragarea').scrollTop(20000)}		
	}
/*
$(document).on("pagecreate","#ctr",function(){
  $("p").on("swipeleft",function(){
    alert("You swiped left!");
  }); 

});
*/

var xMove = 0;
var isLeftCrossMousedown = false, isRightCrossMousedown = false, isRightCrossArrEnable = false, isLeftCrossArrEnable = false; 
var clearCrossAnim;
var Leftanimval= 33+(4/2)+(2/2);

var animateXlst = function(){	
 
    $('.crossArea').stop().animate({left:xMove+'px'},500);
	if( xMove >=0){
		$('#xRefLef').off('click').css({opacity:'0.3',cursor:'default'});
		if($('.crossbtn1').length >crossLimit){
		$('#xRefRig').off('click').on('click',moveXright).css({opacity:'1',cursor:'pointer'});
		}else{
		$('#xRefRig').off('click').css({opacity:'0.3',cursor:'default'});
		}
	}else if(xMove <=-($('.crossbtn1').length-5)*39){
		$('#xRefRig').off('click').css({opacity:'0.3',cursor:'default'});
		$('#xRefLef').off('click').on('click',moveXleft).css({opacity:'1',cursor:'pointer'});
	}else{
		$('#xRefLef').off('click').on('click',moveXleft).css({opacity:'1',cursor:'pointer'});
		$('#xRefRig').off('click').on('click',moveXright).css({opacity:'1',cursor:'pointer'});		
	}
	
	
   
}

var crossLimit = 5;

var moveXleft = function(){
	
	    if($('.crossbtn1').length >crossLimit){
			xMove += 39;
			animateXlst();
						
	    }
	
}
var moveXright = function(){
		
		if($('.crossbtn1').length > crossLimit){
			xMove -= 39;
			animateXlst();		
	}
	
}



	
	
var inspecthidefun = function()
{
	$('.inspect').hide(); 
	$('.inspectSimbtn').css('background','#5a4a42');
	
}


var hoverEffect = function(){
	//$('.highlightfol').css({'backgroundImage':'url(assets/images/folderLeftOver.png)'});
	
	/*$( ".dummyGuide" ).droppable({tolerance:'pointer',
	      over:function (){
		     highlightresetfolder();
		
	    }
	
	});*/
	
	$( ".addfolder,.dummyFolder,.dummyGuide,.dumover" ).droppable({tolerance:'pointer',hoverClass:'hvr',out:function(){
		if($(this).parent().hasClass('highlightfol') && $(this).parent().index() == 0){
				$('.highlightfol, .drogtoolname').css({'background-color': '#faf6e1'});				
				$('.addfolder').css({'backgroundImage':'url(assets/images/leftguide.png)', 'background-color':'rgba(255,0,0,0.01)'});		
				folCls2 = 'undefined';
		}
			//	console.log('out'+' '+$(this).attr('class'));
				
				/*if($(this).hasClass('dummyFolder'))
					highlightresetfolder();*/
				
	}
		, over:function (){
			
			//hoverId = $(this);
		
			if($(this).parent().hasClass('highlightfol') && typeof $(this).attr('id') == 'undefined' && deg>=90)
			{				
				$('.highlightfol, .drogtoolname').css({'background-color': '#faf6e1'})
				$('.addfolder').css({'backgroundImage':'url(assets/images/leftguide.png)', 'background-color':'rgba(255,0,0,0.01)'})
				//$('.highlightfol, .addfolder').css('background-color', '#f00')

				$('#'+$(this).parent().attr('id')).css('background-color','#90CFE0')
				$('#'+$(this).parent().attr('id') +' .highlightfol').css('background-color','rgba(0,0,0,0.01)');
				$('#'+$(this).parent().attr('id') +' .highlightfol').css({'backgroundImage':'url(assets/images/folderLeftOver.png)'});
				$('#'+$(this).parent().attr('id') +' .highlightfol').css({'background-repeat': 'no-repeat'});
				$('#'+$(this).parent().attr('id') +' .drogtoolname').css({'background-color': '#90CFE0'});
					//console.log($(this).parent().attr('id')+' on over');
				folCls2 = $(this).parent();
				
			}else{
				highlightresetfolder();
			}	
		}
		});
		
	  
	
	$( ".dragareaall" ).bind({'mouseleave':function(){
			highlightresetfolder();
		}
		
	});
	

	
}


var highlightresetfolder = function(){

			$('.highlightfol, .drogtoolname').css('background-color', '#faf6e1')
			$('.addfolder').css({'backgroundImage':'url(assets/images/leftguide.png)', 'background-color':'rgba(255,0,0,0.01)'});
			folCls2 = 'undefined';

}

var createFolders = function(folderArr){
	
	var asciicodestartval,divId;
	folderMax = [];
	guideMax = [];
	//for(var i =0; i<totalNoFolder; i++)
	foldertypeandName.forEach(function(item,index)	
	{
		if(foldertypeandName[index][0] == 'F'){
		$('.dragarea').prepend('<div id=dragtooldiv_'+index+' class="dragtooldiv folParent highlightfol unsortable folder"><span class="lefCurve"></span><div class="addfolder folParent highlightfol">'+(foldertypeandName[index][1])+'</div><span class="drogtoolname">'+(foldertypeandName[index][1])+'</span><span class="folderindex">'+0+'</span><span class="drogtoolnum">'+index+'</span><div id="clsFol" class="dltFolder"></div><span class="rigCurve"></span><div class="dummyFolder"></div></div>');
			folderMax.push(foldertypeandName[index][1]);
			folderArr.push(foldertypeandName[index][1]);
			/*if(foldertypeandName[index][1].length>32)
			{
				$('#dragtooldiv_'+index+' .highlightfol').attr('title',(foldertypeandName[index][1]))
			}*/
			divId = $('#dragtooldiv_'+index);
		
		}
		else if(foldertypeandName[index][0] == 'S')
		{
		$('.dragarea').prepend('<div id=dragtooldivguide_'+index+' class="dragtooldiv guidesp unsortable"><span class="lefCurve"></span><div class="addspecialguide">'+(foldertypeandName[index][1])+'</div><span class="drogtoolname">'+(foldertypeandName[index][1])+'</span><span class="folderindex">'+0+'</span><div class="dltFolder dltGudSp"></div><span class="rigCurveg"></span><div class="dummyGuide"></div></div>');
			spGuideMax.push(foldertypeandName[index][1]);
			spGuideName.push(foldertypeandName[index][1]);
			if(foldertypeandName[index][1].length>12)
			{
				$('#dragtooldivguide_'+index+' .addspecialguide').attr('title',(foldertypeandName[index][1]))
			
			
		    }
			divId = $('#dragtooldivguide_'+index);
			$('.addspecialguide').css({'padding':'2px 20px 0 17px'})
			
		}
		else if(foldertypeandName[index][0] == 'G')
		{
		$('.dragarea').prepend('<div id=dragtooldivguide_'+index+' class="dragtooldiv guide unsortable"><span></span><div class="addguide">'+(foldertypeandName[index][1])+'</div><span class="drogtoolname">'+(foldertypeandName[index][1])+'</span><span class="folderindex">'+0+'</span><span class="drogtoolnum">'+index+'</span><div id="clsFol" class="dltFolder dltGud"></div><span class="rigCurveg"></span><div class="dummyGuide"><div class="dumover"></div></div></div>');
			guideMax.push(foldertypeandName[index][1]);
			guideName.push(foldertypeandName[index][1]);
			if(foldertypeandName[index][1].length>22)
			{
				$('#dragtooldivguide_'+index+' .addguide').attr('title',(foldertypeandName[index][1]))
			
		    }
			divId = $('#dragtooldivguide_'+index);
		}
		//$("#dragtooldiv_"+index).css('margin-top',(425-(index*20))).css('padding-top','5px');
	    //$('.dltFolder').hide();	
        //console.log(divId+' '+index+' '+foldertypeandName[index][2])
		if(foldertypeandName[index][2] == 'new'){
			divId.removeClass('unsortable');
			//console.log('show '+divId.find('#clsFol'))
			divId.find('#clsFol').show();
			
		}
	});
	
	totalfolder = $('.dragarea').children().length;
	
	for(var i =0; i< totalfolder - maxfoldervisible ; i++)
	{
		//$('.dragarea').children().eq(i).hide();
	}
	
	
	
	firsteq = totalfolder - maxfoldervisible;
	lasteq = totalfolder-1;
	
	
	
//	updateFolderArr();
	updateFolderArr();
	removeFolder();
	
	folderborderdesign()
	

	
}

var folderborderdesign = function(){
	$('.lefCurve').css({background:'url(./assets/images/folderLeftlong.png)'});
	$('.rigCurveg').css({background:'url(./assets/images/folderRightlong.png)'});
	$('.dragtooldiv').css({borderRight:'1px solid #000',borderLeft:'1px solid #000','margin-bottom':'0px'});
	$('.dragtooldiv .drogtoolname').css({height:'40px',borderLeft:'1px solid #000'});

	$('.dragtooldiv').each(function(index, value){		
		if($(this).hasClass('highlightfol') && $(this).next().hasClass('highlightfol')){
			//console.log($(this).hasClass('highlightfol')+' '+$(this).next().hasClass('highlightfol'))
			$(this).find('.lefCurve').css({background:'url(./assets/images/folderLeftlong.png)','height':'20px'});
			$(this).next().find('.lefCurve').css({background:'url(./assets/images/folderLeftlong.png)','height':'20px'});
			$(this).css({'height':'30px','margin-bottom':'17px'});
			//$(this).next().css({'height':'15px','margin-bottom':'17px'});
		}
		if($(this).hasClass('highlightfol') && $(this).next().hasClass('guide')){
			$(this).find('.lefCurve').css({background:'url(./assets/images/folderLeftlong.png)','height':'20px'});
		}
		if($(this).hasClass('highlightfol') && $(this).next().hasClass('guidesp')){
			$(this).find('.lefCurve').css({'opacity':'0'});
			$(this).find('.lefCurve').css({background:'url(./assets/images/folderLeftlong.png)','height':'20px','opacity':'1'});	
		}
		if($(this).hasClass('highlightfol') && $(this).next().hasClass('highlightfol')){
			$(this).find('.lefCurve').css({background:'url(./assets/images/folderLeftlong.png)','height':'20px','opacity':'1'});		
		}
		if($(this).hasClass('guide') && $(this).next().hasClass('guide')){
			
			$(this).find('.rigCurveg').css({background:'url(./assets/images/folderRightlong.png)'});
			$(this).next().find('.rigCurveg').css({background:'url(./assets/images/folderRightlong.png)'});
			$(this).css({'height':'15px','margin-bottom':'17px'});
		}
		if($(this).hasClass('guide') && $(this).next().hasClass('guidesp')){
			$(this).find('.rigCurveg').css({'opacity':'1'});
			
		}
		if($(this).hasClass('guide') && $(this).next().hasClass('highlightfol')){
			$(this).find('.rigCurveg').css({background:'url("./assets/images/folderRightlong.png")','height':'20px','opacity':'1'});
		}
		if($(this).hasClass('guidesp') && $(this).next().hasClass('guide')){
			$(this).find('.lefCurve').css({background:'url(./assets/images/folderLeftlong.png)','height':'20px','opacity':'1'});	
			$(this).find('.rigCurveg').css({background:'url(./assets/images/folderRightlong.png)','height':'20px','opacity':'1'});	
		}
		if($(this).hasClass('guidesp') && $(this).next().hasClass('highlightfol')){
			$(this).find('.rigCurveg').css({background:'url("./assets/images/folderRightlong.png")','height':'20px','opacity':'1'});		
			$(this).find('.lefCurve').css({background:'url(./assets/images/folderLeftlong.png)','height':'20px','opacity':'1'});		
		}
	
		if($(this).hasClass('guidesp') && $(this).next().hasClass('guidesp')){
			
			$(this).find('.rigCurveg').css({background:'url(./assets/images/folderRightlong.png)'});
			$(this).find('.lefCurve').css({background:'url(./assets/images/folderLeftlong.png)','height':'20px','opacity':'1'});		
			$(this).css({'height':'15px','margin-bottom':'17px'});
		}
		
	});
	
   if($('.dragtooldiv').last().hasClass('guide')){
		
		$('.dragtooldiv').last().find('.rigCurveg').css({background:'url(./assets/images/folderRightlong.png)','height':'20px','opacity':'1',borderLeft:'0px solid rgb(250, 246, 225)'});	
		
		  $('.dragtooldiv').eq(0).find('.lefCurve').css({borderLeft:'0 solid #ccc'});
		
	}
	

	
	if($('.dragtooldiv').eq(0).hasClass('highlightfol')){
		  $('.dragtooldiv').eq(0).css({borderLeft:'1px solid #424143'});
		  $('.dragtooldiv').eq(0).find('.lefCurve').css({background:'url(./assets/images/folderLeftlong_1.png'});
		
	   if($('.dragtooldiv').eq(0).next().hasClass('highlightfol')){
		    $('.dragtooldiv').eq(0).find('.lefCurve').css({background:'url(./assets/images/folderLeftlong_1.png)','height':'20px',borderLeft:'0px solid rgb(250, 246, 225)'});
		
		  }
	   else if($('.dragtooldiv').eq(0).next().hasClass('guide'))
		  {
		    $('.dragtooldiv').eq(0).find('.lefCurve').css({borderRight:'0px solid #424143',background:'#424143',borderLeft:'0 solid rgb(250, 246, 225)'});
			
		   }
	   else if($('.dragtooldiv').eq(0).prev().hasClass('guide'))
		  {
			$('.dragtooldiv').last().prev().find('.lefCurve').css({background:'red',borderRight:'0px solid rgb(250, 246, 225)',borderLeft:'1px solid rgb(250, 246, 225)',height:'20px'});
			
		  }
	   }
	else if($('.dragtooldiv').eq(0).hasClass('guide')){
		 $('.dragtooldiv').eq(0).find('.rigCurveg').css({background:'#424143',opacity:'1'});
		 $('.dragtooldiv').eq(0).css({borderRight:'0px solid rgb(250, 246, 225)',borderLeft:'0px'});
		 
		  if($('.dragtooldiv').eq(0).next().hasClass('guide'))
		  {
		    $('.dragtooldiv').eq(0).find('.rigCurveg').css({borderRight:'0px solid #424143',background:'url(./assets/images/folderRightlong_1.png)',borderLeft:'0 solid rgb(250, 246, 225)'});
			
		   }
		  if($('.dragtooldiv').eq(0).next().hasClass('guidesp'))
		  {
		    $('.dragtooldiv').eq(0).find('.rigCurveg').css({borderRight:'0px solid #424143',background:'url(./assets/images/folderRightlong_1.png)',borderLeft:'0 solid rgb(250, 246, 225)'});
			
		   }
		  
	     }
	else if($('.dragtooldiv').eq(0).hasClass('guidesp')){
		 $('.dragtooldiv').eq(0).find('.lefCurve').css({background:'url(./assets/images/folderLeftlong_1.png)'});
		 $('.dragtooldiv').eq(0).find('.rigCurveg').css({background:'#424143'});
		 $('.dragtooldiv').eq(0).css({borderRight:'0px solid rgb(250, 246, 225)',borderLeft:'0 solid rgb(250, 246, 225)'});
		 
		   if($('.dragtooldiv').eq(0).next().hasClass('guidesp'))
		  {
		    $('.dragtooldiv').eq(0).find('.rigCurveg').css({borderRight:'0px solid #424143',background:'url(./assets/images/folderRightlong_1.png)',borderLeft:'0 solid rgb(250, 246, 225)'});
			
		   }
		   
		  if($('.dragtooldiv').eq(0).next().hasClass('guide'))
		  {
		    $('.dragtooldiv').eq(0).find('.rigCurveg').css({borderRight:'0px solid #424143',background:'url(./assets/images/folderRightlong_1.png)',borderLeft:'0 solid rgb(250, 246, 225)'});
			
		   }
		  
	   }
	   
	    if($('.dragtooldiv').last().hasClass('highlightfol')){
		$('.dragtooldiv').eq(0).prev().find('.rigCurveg').css({background:'url(./assets/images/folderRightlong.png)','height':'20px','opacity':'1'});	
		
	   }
	foldertypeandName = [];
	$('.dragtooldiv').each(function(index, value){
		var name = $(this).find('.drogtoolname').text();
		var oldNew ;
		if($(value).hasClass('unsortable')){
			oldNew = 'old';
		}else{
			oldNew = 'new';
		}
		if($(this).hasClass('highlightfol')){ 
			foldertypeandName[index] = ['F',name,oldNew]
		}else if($(this).hasClass('guide')){
			foldertypeandName[index] = ['G',name,oldNew]
		}else{
			foldertypeandName[index] = ['S',name,oldNew]
		}
	});	
//	console.log(JSON.stringify(foldertypeandName))
  $('.dragareaall').scrollTop(1000)		
	$( "#scrollbarfoldercon	p").eq(4).html('4 scrolldif '+$('.dragareaall').scrollTop() +'  '+ $('.dragarea').height() +'  '+ $('.dragarea').innerHeight() +'  '+ $('.dragarea').outerHeight())		
	 maxScrollTop = $('.dragareaall').scrollTop();

}


var navigateFolder = function(){
		$('.rightarraw').droppable({
			tolerance: "pointer",
			over : function(event,ui) {
				animateRightDir(ui);
			},
			out : function(event,ui) {
				isRightMousedown = false;
				window.clearInterval(clear);
			},
			drop: function(event,ui) {
				//$(ui.draggable).draggable({revert:true});
				window.clearInterval(clear);
			},
			accept:'.dragtooldiv,.crossreference ,.simworkarea'
	});

	$('.leftarraw').droppable({
			tolerance: "pointer",
			over : function(event,ui) {
				animateLeftDir(ui);
			},
			out : function(event,ui) {
				isLeftMousedown = false;
				window.clearInterval(clear);
			},
			drop: function(event,ui) {
				//$(ui.draggable).draggable({revert:true});
				window.clearInterval(clear);
			},
			accept:'.dragtooldiv,.crossreference ,.simworkarea'
	});


	/*$('.leftarraw').on('mousedown touchstart',function() {		
		animateLeftDir();
		
	}).on('mouseup mouseleave touchend',function() {
		//alert('l')
		isLeftMousedown = false;
	});
	$('.rightarraw').on('mousedown touchstart',function() {
		animateRightDir();
		
	}).on('mouseup mouseleave touchend',function() {
		isRightMousedown = false;
	});*/
	
	$('.codeEditIcon').off('click').on('click',editData);
}


var clsPoponLTIreceive = function()
{
	
		 	   $('#reviewAnswer').show();
		       $('#closePopup, #filingRules, #help, #demonstration, #videowalkthrough').hide();
			   $('#resultpage').hide();
			   $('.subpgpopup').css({'height':'450px'});
			    updatePercentage();
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
				$('.dragtooldiv').eq(index).attr('data',1);		
			$('.dragtooldiv').eq(index).off('click').on('click',showRelavPanel);
			getInx=index;
			changeFolderImg();
			}
			
		
			
			
		}
		
	});
}



var animateRightDir = function(ui) {
	strTop = $('.dragareaall').scrollTop();
	if(isRightArrEnable) {
		isRightMousedown = true;
		window.clearInterval(clear)
		moveRightSide();
		  clear= setInterval(function() {
			 highlightresetfolder()
			  $(ui.helper).css({opacity:0.5});
			// moveRightSide();
			$('.dragtooldiv').removeClass('hvr');
			strTop = strTop+10;
			if(strTop <=maxScrollTop){
				$('.dragareaall').scrollTop(parseInt(strTop));
					}else{
						$('.dragareaall').scrollTop(maxScrollTop);
						clearInterval(clear);
						$('#scrollthumb').css('top',maxTop)
				}
		},50);
	}
}

var animateLeftDir = function(ui) {
	strTop = $('.dragareaall').scrollTop();
	if(isLeftArrEnable) {
		isLeftMousedown = true;
		window.clearInterval(clear)
		//moveLeftSide();
		clear= setInterval(function() {
		 highlightresetfolder()
			 $(ui.helper).css({opacity:0.5});
			// moveLeftSide();
			$('.dragtooldiv').removeClass('hvr');
			strTop = strTop-10;
			if(strTop >=0){
						
						$('.dragareaall').scrollTop(parseInt(strTop));
						}else{
							$('.dragareaall').scrollTop(0);
							clearInterval(clear);
						}
		},50);
	}
}

var toggleArrow = function() {
	folderarrange()
	
	/*console.log('first              '+ firsteq)
	console.log('lasteq             '+ lasteq)
	console.log('maxfoldervisible   '+ maxfoldervisible)
	console.log('totalfolder        '+ totalfolder)
	
	console.log('toggle'+firsteq, maxfoldervisible ,  lasteq,totalfolder, lasteq == totalfolder-1);*/
	
	
	
	//$('.dragareaall').stop().animate({top:currentAnimPos+'px'},400);
	
	if(firsteq  == 0) {
		window.clearInterval(clear);
		//$('.leftarraw').css('background-color','red');
		//$('.rightarraw').css('background-color','green');
		isLeftMousedown = false;
		isLeftArrEnable = false;
//		$(".leftarraw").off('click').css({opacity:'1',cursor:'default'});
	}
	else if(lasteq == totalfolder-1) {  //-952  -1564
		window.clearInterval(clear);
		isRightMousedown = false;
		isRightArrEnable = false;
		//$('.leftarraw').css('background-color','green');
		//$('.rightarraw').css('background-color','red');
		$(".rightarraw").off('click').css({opacity:'0.5',cursor:'default'});
	}
	else {
		isLeftArrEnable = true, isRightArrEnable = true;
		//$('.leftarraw').css('background-color','green');
		//$('.rightarraw').css('background-color','green');
		$(".leftarraw").off('click').on('click',moveLeftSide).css({opacity:'1.0',cursor:'pointer'});
		$(".rightarraw").off('click').on('click',moveRightSide).css({opacity:'1.0',cursor:'pointer'});
	}	
	isLeftArrEnable = true, isRightArrEnable = true;	
}

var folderarrange = function(){
	totalfolder = $('.dragarea').children().length;
	firsteq = $('.dragarea').children().filter(':visible').eq(0).index();
	lasteq  = $('.dragarea').children().filter(':visible').eq($('.dragarea').children().filter(':visible').length-1).index();
}


var filterfun = function(){
	console.log($('.dragarea').children().filter(':visible').length);
	console.log('first '+$('.dragarea').children().filter(':visible').eq(0).index());
	console.log('LAST '+$('.dragarea').children().filter(':visible').eq($('.dragarea').children().filter(':visible').length).index());
}

var moveLeftSide = function() {
	//filterfun()
	/*
	if(isLeftMousedown) {
		//currentAnimPos = currentAnimPos + 1;
		currElem++;
		console.log($('.dragarea').children().filter(':visible').eq(0).index())
		lasteq= $('.dragarea').children().filter(':visible').eq($('.dragarea').children().filter(':visible').length-1).index();
		$('.dragarea').children().eq(lasteq).hide()
		firsteq = $('.dragarea').children().filter(':visible').eq(0).index()-1;
		$('.dragarea').children().eq(firsteq).show();		
		toggleArrow();
	}
	else {
		window.clearInterval(clear);
	}*/
	if(isLeftMousedown) {
		if($('.dragarea').scrollTop()>0){
			currentAnimPos = $('.dragarea').scrollTop()
			console.log(currentAnimPos)
			currentAnimPos-=15;
			$('.dragarea').scrollTop(currentAnimPos)
			updateScroll();
		}
	}else {
		window.clearInterval(clear);
	}
}
var moveRightSide = function() {
	//filterfun()
	/*
	if(isRightMousedown) {
		
		//currentAnimPos = currentAnimPos - 1;
		currElem++;
		console.log($('.dragarea').children().filter(':visible').eq($('.dragarea').children().filter(':visible').length).index())
		firsteq = $('.dragarea').children().filter(':visible').eq(0).index()	
		lasteq= $('.dragarea').children().filter(':visible').eq($('.dragarea').children().filter(':visible').length-1).index();
		$('.dragarea').children().eq(firsteq+maxfoldervisible).show()	
		$('.dragarea').children().eq(firsteq).hide()
		toggleArrow();
	}
	else {
		window.clearInterval(clear);
	}*/
	
	if(isRightMousedown) {
		
		//if($('.dragarea').scrollTop()<maxHgt)
		
		{
			currentAnimPos = $('.dragarea').scrollTop()
			currentAnimPos+=15;
			$('.dragarea').scrollTop(currentAnimPos)
			updateScroll();
		}
		
	}else {
		window.clearInterval(clear);
	}

}
var shwCurrentElem = function() {
		$('.dragtooldiv').hide();
		for(var i = Math.abs(currentAnimPos/68); i<Math.abs(currentAnimPos/68)+13; i++)
		{
			$('.dragtooldiv').eq(i).show();
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
	
	$.each(uniqArr,function(index,value){
		dataRecd[value].order=index+','+uniqArr[index];
		dataRecd[value].crossRefCard=0;
		//dataRecd[value].crossRefIP=0;
		dataRecd[value].score=0;		
	});
	
	
	
	recdLen=uniqArr.length;
  }
  
var enableNav = function() {
	/*var gtArr = $.map(uniqArr,function(item,index){
		return uniq
	});*/

	if(editArr.length > 0 && $('.fileBtn').attr('data-click-state') == 0){
		dependsOn(editArr,'e');
		
	}else{
		dependsOn(uniqArr,'m');
	}
	
}
var dependsOn = function(cArr,g){
	//currQues = getClosestArr(cArr,g);
	//console.log(cArr.length+' nn '+cArr);
	if(currQues==0){
		 $('.prev,.prevmin').off('click').css({opacity:'0.5',cursor:'default'});  
		 $('.next,.nextmin').off('click').on('click', getNext).css({opacity:'1.0',cursor:'pointer'});
	  if(!ltiexit)
		 $('[name = submitconfirmation]').removeClass('subbtnActive').addClass('subbtn');
	     // $('.dummySubbtn').show();
		 if(cArr.length==1){
			 $('.next,.nextmin').off('click').css({opacity:'0.5',cursor:'default'});
			 $('.prev,.prevmin').off('click').css({opacity:'0.5',cursor:'default'});
		 }
	 }
	else if(currQues==cArr.length-1){
		$('.next,.nextmin').off('click').css({opacity:'0.5',cursor:'default'});
		$('.prev,.prevmin').off('click').on('click', getPrev).css({opacity:'1.0',cursor:'pointer'});
	}else{
		$('.next,.nextmin').off('click').on('click', getNext).css({opacity:'1.0',cursor:'pointer'});
		$('.prev,.prevmin').off('click').on('click', getPrev).css({opacity:'1.0',cursor:'pointer'});
	}
	
}

var recordEditfun = function(){

	if(editArr.indexOf(curVal)==-1)
	{
		//$('.hidesimbtncontain').css('opacity', 1);
		//$('.hidesimbtncontain').css('cursor', 'pointer');
		editArr.push(curVal);		
		editArr.sort();
		
		
		var ainx = curVal;
		var dArr = uniqArr.indexOf(ainx);
		var fnVal= 	uniqArr[dArr];
		uniqArr.splice(dArr,1);
		if(uniqArr.length!=0){
			currQues = getClosestArr(uniqArr,fnVal);		
			chngQues(currQues);
			
		}else{
			$('.fileBtn').attr('data-click-state',0);			
			hideFolder();
			currQues=0;
			chngQues(currQues);	
			dependsOn(uniqArr,'m');
			
			
		}
	}
	
	
}
var getClosestArr = function(cArr,cq)
{	
	var nearest = 0;	
	/*nearest = cArr.reduce(function (prev, curr) {
	   return (Math.abs(curr - cq) < Math.abs(prev - cq) ? curr : prev);
	});*/
	
	return nearest;
	
}
var editcurrQues;


var findnextcr = function(a,b)
{
	var initnum =0;
	while(initnum < crosDrop.length)
	{
		if(initnum != crosDrop[initnum])
		{
			return initnum;
		}
		initnum++;
	}
	return initnum
}

var crossRefCard = function()
{
	if($('.simworkarea ').hasClass('scaleCard') && (dataRecd[curVal].crossUnit.length > 0))
	{
		$('.crossreferenceContainter').css('opacity','1');
		$('.nextCros, .prevCros').css('opacity','0.8')
		$('.prev, .next, .simworkarea').css('opacity','0.2');
		
		findnextcr(crosDrop, dataRecd[curVal].crossUnit.length)
		crosCount =0;
		storeCrossRef(crosCount)
	}	
}
var crossToMainCard = function()
{
		$('.crossreferenceContainter').css('opacity','0.1');
		$('.nextCros, .prevCros').css('opacity','0.2')
		$('.prev, .next, .simworkarea').css('opacity','1');
		checkMainDropped();
		
}
var drpArr = [];
var checkMainDropped = function(){
	drpArr= [];
	$.each(dataRecd,function(i,v){
		if(!v.dropped)
			drpArr.push(i);	 
	});
	
	if(currQues != 0 && currQues != uniqArr.length){
		
			if(curNav == 'prev' && dataRecd[curVal].dropped){
				
				var nextPos = uniqArr.filter(function(item,val){					
					return item<currQues;					
				});
				
				// prev crossref if it is present
				
				
				
					nextPos.reverse();
					{
						currQues = nextPos[0];
						chngQues(currQues);
					}
				/*if(clost.length> 0)
				{
					alert('true'+ currQues)
					crosCount = clost.length;
					crossRefCard()
				}*/
				
			}else if(curNav == 'next' && dataRecd[curVal].dropped){
				var nextPos = uniqArr.filter(function(item,val){
					
					return item>=currQues;					
				});
				
				
				
					{
						currQues = nextPos[0];
						chngQues(currQues);
					}
				/*if(clost.length> 0)
				{
					
					crosCount = clost[0];
					crossRefCard()
				}*/
					
			}
				
		}
}
var getNext = function() {
	curNav = 'none';
	
	getDroppedValues();
	
	if($('.simworkarea ').hasClass('scaleCard') && clost.length > 0)
	{		
			crossRefCard();
			crosCount = clost[0];
			storeCrossRef(crosCount);			
	}
	else
	{
   		currQues++;
		chngQues(currQues); 		
	}	
	startToPlay('alphabeticSimulation',0);
	
	hideshowXRex();
}
var getPrev = function() { 
	curNav = 'none';
	
	currQues--;
	chngQues(currQues); 
	crossRefCard()
	getDroppedValues();
	if($('.simworkarea ').hasClass('scaleCard') && clost.length > 0)
	{				
		$('.prev, .next').css('opacity','0.2');
		$('.crossreferenceContainter').css('opacity','1');	
		
		crosCount = clost[clost.length-1];
		storeCrossRef(crosCount);		
	}
	hideshowXRex();
	startToPlay('alphabeticSimulation',0)
}
var hideshowXRex = function(){
	if(dataRecd[curVal].crossUnit.length!=0) {
					//$('.tcent .mCSB_container').html(simaction.crossreference);
					if(!$('.simworkarea ').hasClass('scaleCard')){
						$('.crossreferenceContainter').css({visibility:'visible'});
						$('.simworkAreaOff,.offSteps,.crossreference').show();	
						}			
					
			}else{
					$('.simworkAreaOff,.offSteps,.crossreference').hide();
					$('.crossreferenceContainter').css({visibility:'hidden'});			        
			}
}

/*var getCrosNext = function() { 
		curNav = 'next';
		moveMainCard();
		getDroppedValues();
		crosCount++;
		goNextAuto();
		
}

var getCrosPrev = function() { 
	curNav = 'prev';  
console.log('prev '+crosCount);
	
	crosCount--;	
	var nextPos = clost.filter(function(item,val){					
		return item<=crosCount;					
	});
				
		console.log('nextArr: '+nextPos);
		nextPos.reverse();
		crosCount = nextPos[0];
		storeCrossRef(crosCount);	//	alert(crosDrop+' '+crosDrop.indexOf(crosCount));
	//storeCrossRef(crosCount);	
	
	if(nextPos.length ==0){
			chngQues(currQues); 
			crossToMainCard();			
	}
	
}*/

/*var enableCrosNav = function(crosCount) {	
	
	if(crosCount==-1){
		
		$('.crossreferenceContainter').css('opacity','0.2');
		 $('.prevCros').off('click').css('opacity','0.5').hide();
		 $('.nextCros').off('click').on('click', getCrosNext).css('opacity','1').show();
			if(dataRecd[curVal].crossUnit.length==1 || dataRecd[curVal].crossUnit.length==0){			 
			$('.prevCros,.nextCros').off('click').css('opacity','0.5').hide();
			}
			if($('.simworkarea ').hasClass('scaleCard') && (dataRecd[curVal].crossUnit.length > 0))
			{
				
				crossToMainCard();
				//chngQues(--currQues); 
			}
		 
	 }
	else if(crosCount==dataRecd[curVal].crossUnit.length){
		
		$('.nextCros').off('click').css('opacity','0.5').hide();
		$('.prevCros').off('click').on('click', getCrosPrev).css('opacity','1').show();
			if($('.simworkarea ').hasClass('scaleCard') && (dataRecd[curVal].crossUnit.length > 0))
			{
				$('.simworkarea').css('opacity','1');
				chngQues(++currQues); 
			}
	}else if(crosCount>=0 || crosCount<=dataRecd[curVal].crossUnit.length){
		
		if($('.crossreferenceContainter').css('opacity') > 0.5)
		{
			$('.nextCros').off('click').on('click', getCrosNext).css('opacity','1').show();
			$('.prevCros').off('click').on('click', getCrosPrev).css('opacity','1').show();
		}
		else
		{
			$('.nextCros, .prevCros').css('opacity','0.2')
		}
	}		
	
}*/


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
	//$('.dragtooldiv').eq(getInxClk).css({visibility:'hidden'});
	//$('#dragtooldivAni_'+getInxClk).css({visibility:'visible'});
}

var temptcent =  'alphabeticSimulation';
var alpRulesselectfun = function() {
	
	inspecthidefun();
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
			$('.tcent  .mCSB_container').html(simaction.alphabeticSimulation);
			$('.containersubheadone').html(simactionTitle.alphabeticSimulation)
			temptcent = 'alphabeticSimulation';
			$('.nameing>span').css({cursor:'default'});
			$('.simworkarea em').off('click').css({cursor:'default'});
			$('.simworkarea .nameing span').off('click').css({cursor:'default'});
			$('#mymove').hide();
$('em,span').off('mousemove');
			$('.substeping').css('z-index','1');
			
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
			 
			 if(currentId == 'Inspect')
			 {
				
				 //$('.inspect').toggle();
			 $('.tcent .mCSB_container').html(simaction.Inspect);
			
			 }
			 else if(currentId == 'Code')
			 {
				  $(this).css('background-color','#F05A2B');	
				$('.simworkarea .nameing span').css({cursor:'default'});
				 $('.simworkarea em').css({cursor:'pointer'});
				  $('.substeping').css('z-index','-1');
				  $('.subinput').css('z-index','2');
				  $('.subinput input').prop( "disabled", false );
				 
			 }
			 else if(currentId == 'uIdentification')
			 {
				   $('.subinput input').prop( "disabled", true );
				  $(this).css('background-color','#F05A2B');	
				  $('.substeping').css('z-index','1');
				  $('.subinput').css('z-index','1');
				  
				$('.simworkarea .nameing span').css({cursor:'pointer'});
				$('span>em').css({cursor:'pointer'});
				$('div>em').css({cursor:'default'});				 
			 }else if(currentId == 'file')
			 {
				 //$('.inspect').toggle();
			$('.tcent .mCSB_container').html(simaction.file);
			$('.containersubheadone').html(simactionTitle.file)
			 }
			 
			 
		 }
		//disableCursor();
		nextPreTag = true;
		
	 
		$('#informationIcon').off('click').on('click',informationPanel);
		
		
		if(currentId == 'empty'){
			 $('.subinput').css('z-index','1');
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
	if(currentId == 'Inspect'){
	    $('.tcent .mCSB_container').html(simaction.Inspect);
		$('.inspect').toggle();
	
	}
	else if (currentId == 'Code'){
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



var fileBtnCalling = function() {
        onsitemapView = 1;
		currentId = $(this).attr('name');	
		currentId="file";
	//	console.log(currentId);
	
	if($('.fileBtn').attr('data-click-state') == 1) {
		if(1)
		{
		$('.fileBtn').attr('data-click-state', 0);
		$('.fileBtn').removeClass('btnclkClr');
		
		hideFolder();		
	
		//chngQues(editArr[0])
		}
	} else {
		$('.fileBtn').attr('data-click-state', 1);
		$('.fileBtn').addClass('btnclkClr');
		//$('.hidesimbtncontain').css('opacity', 0.5);
		//$('.hidesimbtncontain').css('cursor', 'default');
		//$('.hidesimbtncontain').css('display', 'block');
		hintshowtag = false;
		showFolder();	
		$('#tooltip').hide();
      
	
	    
		//alert()
	
	}
	chngQues(uniqArr[0]);
	currentId="file";
	$('.tcent .mCSB_container').html(simaction[currentId]);
	$('.containersubheadone').html(simactionTitle[currentId]);
	startToPlay('file',0);
    oneTimescroll = false;	
		//currQues = editArr.length-1;	
}

tempClone = [];
var audioCorrect=0;
var onsitemapView=0;

var showFolder = function(){
	onsitemapView=1;
	$('.fileBtn').attr('data-click-state', 1);
	$('.fileBtn').addClass('btnclkClr');
	$('.simworkarea ').addClass('scaleCard');
	$('.crossreferenceContainter').addClass('crfScale');
	//$('.crossreferenceContainter, .prevCros, .nextCros').css('opacity','0.2');
	$('.prev,.prevCros').addClass('scalePrev');
	$('.next,.nextCros').addClass('scaleNext');
	//$('.prevCros, .nextCros').css('top','400px');
	$('.toolsarea').show();
	$('.draggerForParent').hide();
	$('.dragger').show();
	$('.maximizeIcon').show();
	$('.codeEditIcon').show();
	$('.crfRefMin, .xRefMove').hide();
	$('.simbtncontiner').hide();
	$('.tcent').css({marginLeft: '370px',width: '540px',height:'42px',marginTop: '7px'});
	$('.containersubheadone').css({marginLeft: '247px',marginTop: '-12px',fontSize: '17pt'});
	$('.crossreferenceContainter').css({height:'320px'});
	$('#inspectid').hide();
	$('#tooltip').hide();
	$('#noOFCrds,.choseactn').hide();
	 $('.simworkcontainer > p').css({marginLeft: '-17px'});
	 $('.inspectSimbtn').css('background','#5a4a42');
		if(onsitemapView){		
			$('.next, .prev').hide(); 		
		}
	 //$('.next, .prev').show(); 
	 $('#scaleCrdNo').show();
	crosCount = 0;
	//alert(uniqArr+' e'+editArr);
	uniqArr.concat(editArr);
	uniqArr = uniqArr.concat(editArr).slice();
	uniqArr.sort(function(a,b){ return a-b;});
	editArr = [];
	
	updateCloneArr();
	cloneCnt=0;
	currQues=0;
	chngQues(0);		
	showMainAndCros();
	$('.prevCros,.nextCros').show();
	
	if(!oneTimescroll){
		oneTimescroll = true;	
		/*$('.track2').animate({bottom:'0px'},50);
				$('.dragarea').animate({
				   scrollTop: parseInt($('.dragarea')[0].scrollHeight)+200,			   
				}, 50);*/
	}		
	maxHgt = $('.dragarea').children().length*15;
	updateScroll();
	
	audioCorrect=1;
	
	setTimeout(function(){		
	scrollfun()		
	$('.dragareaall').scroll(function(){		
							
								
				scrollPos = $('.dragareaall').scrollTop();		
					$( "#scrollbarfoldercon	p").eq(0).html('dragareaall '+stattag)		
					if(stattag)		
					{		
					$( "#scrollthumb" ).css('top', (scrollPos/maxScrollTop) * scrolldif)		
					if($('.dragareaall').scrollTop() > maxScrollTop){$('.dragareaall').scrollTop(20000)}		
					}		
							
					$( "#scrollbarfoldercon	p").eq(4).html('4 scrolldif '+$('.dragareaall').scrollTop() +'  '+ $('.dragarea').height() +'  '+ $('.dragarea').innerHeight() +'  '+ $('.dragarea').outerHeight())		
					// console.log(scrollPos)		
					})		
	$( "#scrollthumb" ).draggable({start:function(){stattag = false},stop:function(){stattag = true}, drag: dragfun, axis: "y", containment: "parent" });		
			
	},100)
}

var updateCloneArr = function(){
	cloneArr = [];
	cloneDrop = [];	
	tempClone = [];
	$.each(dataRecd,function(ord,val){
		if(typeof val.name != 'undefined'){
			if(!val.dropped)
				cloneArr.push('m_'+ord);
			else
				val.revtBak = cloneArr.length;
				tempClone.push('m_'+ord);
			updateDrop(val);
		}
			$.each(val.crossUnit,function(i,v){
				if(!v.dropped)	
					cloneArr.push('c_'+ord+'_'+i);
				else
					v.revtBak = cloneArr.length;
					tempClone.push('c_'+ord+'_'+i);
				updateDrop(v);
			});
		
	});
	
//console.log(cloneArr+' drop '+tempClone);
	//console.log('nondropedarr    :  '+nondropedarr);
}
var nondropedarr = [];

var updateDrop = function(obj){
	if(obj.dropped){		
		cloneDrop.push(1);
	}else{
		cloneDrop.push(0)
	}
	nondropedarr = [];
	for(var i=0; i<cloneDrop.length; i++)
	{
		if(cloneDrop[i] == 0)
		{
			nondropedarr.push(i)
		}
	}
	
}
var hideFolder = function(){
	//console.log('h')
    $('.fileBtn').attr('data-click-state', 0);
    $('.fileBtn').removeClass('btnclkClr');
	$('.simworkarea ').removeClass('scaleCard');
	$('.crossreferenceContainter').removeClass('crfScale');
	$('.prev,.prevCros').removeClass('scalePrev');
	$('.next,.nextCros').removeClass('scaleNext');	
	$('.toolsarea').hide();
	$('.draggerForParent').show();
	$('.dragger').hide();
	$('.maximizeIcon').hide();
	$('.modalGuide, .modal').hide();
	$('.codeEditIcon,#scaleCrdNo').hide();
	$('.crossbtnlist,.clsCrosRef,.crfRefMin,.choseactn,.xRefMove').show();
	$('.simbtncontiner,.simworkarea').show();
	
	$('.tcent').css({marginLeft: '75px',width: '800px'});
	$('.containersubheadone').css({marginLeft: '0px',marginTop: '-13px',fontSize: '19pt'});
	//$('#inspectid').hide();
	$('.simworkarea').removeClass('withCrf').css('opacity','1');
    $('#noOFCrds').show();
	$('#noOFCrds').html('CROSS-REFERENCE SHEET(S)');
	$('.simworkcontainer > p').css({marginLeft: '160px'});
	$('#tooltip').hide();
	$('.crossreferenceContainter').css('opacity','1');
		$('.nextCros, .prevCros').show();
		//$('.next, .prev').hide(); 
	    curNav = 'none';
	    chngQues(currQues);
		
		
		$('.crfRefMin').attr('data',0);
		//$('#noOFCrds').hide();
		$('.crfRefMin').css({background: 'url(./assets/images/maximize.png) no-repeat'});
		
	audioCorrect=0;
	
}
var enableCrosNav = function(crosCount) {	
	
	
	if(cloneCnt==0){		
		 $('.prevCros').off('click').css({opacity:'0.5',cursor:'default'});
		 $('.nextCros').off('click').on('click', getCrosNext).css({opacity:'1.0',cursor:'pointer'});
		 if(cloneArr.length==1){
			 $('.prevCros').off('click').css({opacity:'0.5',cursor:'default'});
			 $('.nextCros').off('click').css({opacity:'0.5',cursor:'default'});
		 }			
	 }
	else if(cloneCnt==cloneArr.length-1){
		
		$('.nextCros').off('click').css({opacity:'0.5',cursor:'default'});
		$('.prevCros').off('click').on('click', getCrosPrev).css({opacity:'1.0',cursor:'pointer'});
			
	}else {		
		$('.nextCros').off('click').on('click', getCrosNext).css({opacity:'1.0',cursor:'pointer'});
		$('.prevCros').off('click').on('click', getCrosPrev).css({opacity:'1.0',cursor:'pointer'});
	}		
	if($('.simworkarea ').hasClass('scaleCard')){
		$('.crosref').show();
	}else{
		$('.crosref').hide();
	}
	
}
var inn = 0;
var getCrosNext = function() {
	/* if(dropedflag)
	 {
		 dropedflag = false;
		 cloneCnt = nondropedarr[inn]	
	 }
	 else
	 {
		cloneCnt = nondropedarr[++inn]	
	 }*/
		//cloneCnt++;
		
	var xxx= [];
	var mveNxt = nondropedarr.filter(function(item,index,arr){
			if(index>cloneCnt){
				xxx.push(index);
			}
	});
	
	cloneCnt=xxx[0];
		showMainAndCros();	
}

var getCrosPrev = function() { 
	cloneCnt--;
	
	//cloneCnt = nondropedarr[--inn]	
	
	var xxx= []
	var mveNxt = nondropedarr.filter(function(item,index,arr){
			if(index<=cloneCnt){
				xxx.push(index);
			}
	});
	xxx.reverse();
	cloneCnt=xxx[0];
	showMainAndCros();	
	
}
var prevCard=0;
var showMainAndCros = function(){
	
	enableCrosNav();
	
	var getMX, mainCrd, crfCard;
  if(cloneArr.length>0){
	  //console.log(cloneCnt)
	if(cloneArr[cloneCnt].indexOf('m') != -1){
		$('.simworkarea').css({visibility:'visible'});
		$('.crossreferenceContainter').css({visibility:'hidden'});
			getMX = cloneArr[cloneCnt].split('_');
			currQues = getMX[1];

					
	}else{
		$('.simworkarea,.simworkarea .mCustomScrollbar').css({visibility:'hidden'});
		$('.crossreferenceContainter').css({visibility:'visible'});
			getMX = cloneArr[cloneCnt].split('_');
			currQues = getMX[1];
			crosCount = getMX[2];						
	}		
	chngQues(currQues);		

	if(cloneArr[cloneCnt].indexOf('m') != -1){
		//console.log($('#toolsarea').css('display'));
		prevCard = $('.simworkarea').clone();
		$('.simworkarea').css({visibility:'visible'});
		$('.crossreferenceContainter').css({visibility:'hidden'});
	}
	else{
		$('.simworkarea').css({visibility:'hidden'});
		
		$('.simworkarea').children().css({visibility:'hidden'})
		prevCard = $('.crossreferenceContainter').clone();
		$('.crossreferenceContainter').css({visibility:'visible'});
	/*	$('.tcent').css({'margin-left': '80px', 'width': '800px'});	
		$('.containersubheadone').css({marginLeft: '0px',marginTop: '-22px',fontSize: '19pt'});*/
		//$('.titleLine').hide();	

	}
	$('#scaleCrdNo').html(''+(tempClone.indexOf(cloneArr[cloneCnt])+1)+' / '+tempClone.length);
	if(cloneArr.length>0){
		$('#createGuidebtn,.addFldrbtn').css({opacity:1,cursor:'pointer'});
	}	
	$('.tcent .mCSB_container').html(simaction.file);
	$('.containersubheadone').html(simactionTitle.file);
	startToPlay('file',0);
  }
}
var crossBtnEventCalling = function() {
	inspecthidefun();
	//if($(this).css('opacity') ==1)
	{
		currentIds = $(this).attr('name');	
		currentId="crossreference";
		$('.tcent .mCSB_container').html(simaction[currentIds])
		crossReferAct();
		if($('.crossreference').css('display') == 'none'){
			$('.crossreference').css('display', 'block');
			//$('.crossreference').css('visibility','visible'); 
			//$('.crosref,.crossbtnlist').show();
			//$('[name=crossreference]').css('background','#5a4a42');	
			$('.crossrefnameing .cross_unit').val('');	
			enableDrag();			
			//dataRecd[curVal].crossRefIP = 1;
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
	

		if($('.crossreference').css('display') != 'none'){
			deleteCrosRef();	
		if(dataRecd[curVal].crossUnit.length ==0){	
			//$('.crossreference').css('display', 'none')
			$('[name=crossreference]').css('background','#5a4a42');
			//dataRecd[curVal].crossRefIP = 0;
			 if($('[name=uIdentification]').css('background-color') == 'rgb(90, 74, 66)' && $('[name=Code]').css('background-color') == 'rgb(90, 74, 66)' && $('[name=Inspect]').css('background-color') == 'rgb(90, 74, 66)')
			{
				$('.tcent .mCSB_container').html(simaction.alphabeticSimulation)
				startToPlay('alphabeticSimulation', 0)
				
			}else{
			$('.tcent .mCSB_container').html(simaction[temptcent])
			currentIds = temptcent;
			currentId = temptcent;
			startToPlay(currentId,0);
			}
			$('.crosref').hide();
			
			}
		}
	}
	
var deleteCrosRef = function(){
			
		getDroppedValues();
		if(clost.length != 0){
			
			 if(titleNew !== 'crossreference')
	         {
	              startToPlay('crossreference',0,'cr');
			      $('.tcent .mCSB_container').html(simaction.crossreference);
	         }
			$('.crossbtn1').eq(crosCount).css({width:'0px'});
			$('.cross_unit').animate({color:'#fff'}, function(){$('.cross_unit').css({color:'#000'})});
			
			//$('.crossbtn1').eq(crosCount).hide('slide',{direction:'left'},1000)//("drop",{direction: "left"},800);
			//$(".crossbtn1").eq(crosCount).show( "fold", {horizFirst: true}, 2000 );
			//alert($('.crossreference').effect())
			//$($('.crossreference').clone()).appendTo('body');
			$('.crossreference').stop().effect("transfer",{ to: $('.clsCrosRef') }, 500,function(){storeCrossRef(crosCount);});
			dataRecd[curVal].crossUnit.splice(crosCount,1);	
	        if($('.crossbtn1').length >crossLimit){	
				if(xMove != 0){
					xMove += 39;
					animateXlst();
				}
			}
			if(dataRecd[curVal].crossUnit.length!=0){
					
				crosCount = closestOnDrop(crosCount);	
				
			}
			
			
		}
		if(clost.length==0){
			$('.crossreference').draggable({disabled:true}).css({opacity:'0.5'}).prop("readonly", true);
			$('.clsCrosRef').off('click').css({opacity:'0.5'});
			$('.crossRefOff').show();
			$('.tcent .mCSB_container').html(simaction.alphabeticSimulation);
			$('.containersubheadone').html(simactionTitle.alphabeticSimulation);
			
		}		
			//alert(crosCount);
			
			
		
			//createCrosLables();				
}
var takentime = 0;
var buttonEventCalling = function() {
	inspecthidefun();
	$('.fbtn p').removeClass('active');
	
	$(".cardPanel").getNiceScroll().hide();

		
	currentId = $(this).attr('name');
	
    if(cloneArr.length==0 && currentId == 'alphabeticSimulation'){		
        progressbarFun();
		$('.dummySubbtn').hide();
		$('.hideAudio').show();
		
	}else{
		$('.hideAudio').hide();
		
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
		{   //console.log('slice '+currentidarr);
			//console.log(currentidarr+' here'+' '+currentId);
			
			if(currentidarr[1] != ['demonstration'])
			currentidarr.splice(currentidarr.indexOf(currentId));
			currentidarr.push(currentId)
		}
		else if(footerarr.indexOf(currentidarr[currentidarr.length-1])>-1 && currentidarr[currentidarr.length-1] != currentId && footerarr.indexOf(currentId)> -1 && !reviewAnsClicked )
		{
				
				//console.log(currentidarr+' pop');			//console.log('pop '+currentidarr);
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
		if((currentId == 'help' || currentId == 'sitemap' || currentId == 'filingRules' || currentId == 'generalinfoSim' || currentId == 'fileprocedureSim') && newArr.length==0){
			
			xx = [];
			if((currentId == 'help' && currentidarr.indexOf('sitemap')>-1) || (currentId == 'sitemap' && currentidarr.indexOf('help')>-1) ||(currentidarr.indexOf('sitemap')>-1 || currentidarr.indexOf('help')>-1 || currentId == 'filingRules') || currentId == 'help' || currentId == 'generalinfoSim' || currentId == 'fileprocedureSim'){
				
				progressbarFun();	
				
				if(!alphabeticSimulationvisite && currentId == 'help' && (currentidarr[currentidarr.length-2] == 'demonstration' || currentidarr[currentidarr.length-2] == 'videowalkthrough' || currentidarr[currentidarr.length-2] == 'generalinfoSim' || currentidarr[currentidarr.length-2] == 'fileprocedureSim')){		
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
			//console.log('help clicked '+xx);
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
				//console.log(takentime)
			hrsvar = Math.floor(takentime/3600).toFixed(0)<10?'0'+Math.floor(takentime/3600).toFixed(0):Math.floor(takentime/3600).toFixed(0);
		minvar = Math.floor((takentime % 3600) / 60).toFixed(0)<10?'0'+Math.floor((takentime % 3600) / 60).toFixed(0):Math.floor((takentime % 3600) / 60).toFixed(0);
		secvar = Math.floor((takentime % 3600) % 60).toFixed(0)<10?'0'+Math.floor((takentime % 3600) % 60).toFixed(0):Math.floor((takentime % 3600) % 60).toFixed(0);
			recordSimTimer = hrsvar+' hrs '+minvar+' mins '+secvar+' secs ';
			
			}, 1000);
			//playAudio('alphabeticSimulation',0);
			
			if($(this).hasClass('codeScreen')){
			hideFolder();
			$('#alphabeticSimulation').show();
		}else if($(this).hasClass('fileScreen')){
		showFolder();
			$('#alphabeticSimulation').show();
			
			}
			
			
		if(audioCorrect){	
		scrollfun()
   		     startToPlay('file',0);		
		     $('.tcent .mCSB_container').html(simaction.file);		
		     $('.containersubheadone').html(simactionTitle.file); 
		}else{
             startToPlay('alphabeticSimulation',0);
			 $('.tcent .mCSB_container').html(simaction.alphabeticSimulation);
			 $('.containersubheadone').html(simactionTitle.alphabeticSimulation); 
		     progressbarFun();
		}
			
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
		
	 if(currentId=="submitconfirmation" && $('#submitconfirmationid').css('opacity') == 1 )			
		{ 
			$('#submitconfirmation, .confirmsubmit').show();	
			$('.subPopUp, #closePopup').hide();
			$('#dummyDiv').show();	
				$('.dummyDivFldronsub').show();
			$('.confirmsubmit').css("z-index","100000000");		
			$('.container>div:not(#closePopup, .audiocc)').css('height','475px');
			$('.dummySubbtn').hide();
			$('#dummyDiv').css('height','625px');
		}
	   else
		{
			$('#dummyDiv').hide();	
			$('.confirmsubmit').css("z-index","11");
		}	

		if(currentId=="closeparent"){$('.confirmsubmit').hide(); $('.subPopUp, #closePopup').hide(); }
		if(currentId=="reviewAnswer")
		{ 
			reviewAns();  
		    /*setTimeout(function(){
				myPdf();
			},1000);	*/
		}
		if(currentId=="mainpage")			
		{
			$('#submitconfirmation').hide();
		}

	}
	
	$('.fbtn').attr('clk',false)
	if (currentId == 'demonstration')	{
			if(navigator.userAgent.indexOf("Edge/") > -1){
				setTimeout(function(){
	                var videosrc = "playvideo/navigationvideo_edge.html";
                    var iframe1 = document.getElementById('iframevideoid');
                    iframe1.src = videosrc;
	               }, 5);
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
	   
	     if(currentId == 'reviewAnswer'){		  
	     $('#submitconfirmation').hide();	
	     $('#alphabeticSimulation').show();
	     $('#closePopup').css({top: '75px','right':'20px'});
	     $('.brandIcon').css('cursor','default');
	     $('.fbtn p').eq(0).css({opacity:'0.5'}).css('cursor','default');
		//$('#closePopup img').css({height:'24px',width:'24px'})
	     $('#dummySitemap').show();
	      reviewAnsClicked = true;
	     }else if(currentId =='overview' || currentId == 'introduction' || currentId == 'directionsforjobs' || currentId == 'generalinfo' || currentId == 'generalinfoSim' || currentId == 'fileprocedureSim' || currentId == 'fileprocedure' ){
		   $('#closePopup').css({top: '100px','right':'192px'});
		 }else if(currentId =='videowalkthrough' || currentId == 'demonstration'){
		   $('#closePopup').css({top: '65px','right':'170px'});
	      }else
	     {
	       $('#closePopup').css({top: '85px','right':'94px'});
	     }
	   
	    if(currentId == 'resultpage')
	   {
		   	finalCls = true;
			clearInterval(timerVar);	
			$('#reviewAnswer').show().css({visibility:'hidden'});
			$( "#closePopup" ).hide();
		    $('.brandIcon').css('cursor','default');
		    $('.fbtn p').eq(0).css({opacity:'0.5'}).css('cursor','default');
		    $('#dummySitemap').show();

		    $('#resultpage').css('visibility','visible');
			
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
	  
	  

	progressbarFun();	
		


		
}


var closeNdvideofun = function(){
	 switch (currentId) {
             case "demonstration": 
                 $('#closePopup').css({top: '65px','right':'170px'});
				 if(navigator.userAgent.indexOf("Edge/") > -1){
			          $('#iframevideoid').attr('src','playvideo/navigationvideo_edge.html');  
			     }else{
			         $('#iframevideoid').attr('src','playvideo/navigationvideo.html');
			      }
                 break;
			 case "videowalkthrough":
			      if(navigator.userAgent.indexOf("Edge/") > -1){
			           $('#iframevideoid1').attr('src','playvideo/walkthroughvideo_edge.html');  
			      }else{
			          $('#iframevideoid1').attr('src','playvideo/walkthroughvideo.html'); 
			      }
                 $('#closePopup').css({top: '65px','right':'170px'});	 
				 break;
             case "reviewAnswer":
                  $('#closePopup').css({top: '75px','right':'20px'});
                 break;
             case "overview": case "introduction": case "directionsforjobs": case "generalinfo": 
	         case "generalinfo": case "fileprocedure": case "fileprocedureSim": case "generalinfoSim":
                 $('#closePopup').css({top: '100px','right':'192px'});
                 break;
             default:
			     $('#iframevideoid').attr('src','');
				 $('#iframevideoid1').attr('src','');
                 $('#closePopup').css({top: '85px','right':'94px'});
         }	
}

var audioPlayfun = function(){
        switch (currentId) {
             case "demonstration":  case "videowalkthrough":  case "resultpage":  case "reviewAnswer": case "sitemap":
			      startToPlay('stop', 0) 
			     break; 
			  case "directionsforjobs":  
			     startToPlay('directionsforjobs', 0)
			     break;  
			 case "overview":
                 startToPlay('overview', 0)
                 break;
			 case "introduction":
                 startToPlay('introduction', 0)
                 break;	 
			 case "help":
                  startToPlay('help', 0) 
                 break;	 
             case "filingRules":
                   startToPlay('filingRules', 0) 
                 break;					 
			 case "generalinfo":  case "generalinfoSim":
                 startToPlay('generalinfo', 0)			 
                 break;		 
			 case "fileprocedure": case "fileprocedureSim": 
                 startToPlay('fileprocedure', 0)	 
                 break;			 
         }
}


var progressbarFun = function(){
	
	if(currentId =='overview' || currentId == 'introduction' || currentId == 'directionsforjobs' || currentId == 'mainpage' 
		|| currentId == 'demonstration' || currentId == 'sitemap' || currentId == 'help' || currentId == 'filingRules' || currentId == 'demonstration' || currentId == 'videowalkthrough' || currentId == 'generalinfo' || currentId == 'generalinfoSim' || currentId == 'fileprocedure' || currentId == 'fileprocedureSim' )
		{
			$('#progressBar').hide();
		   
		}else{
			
			$('#progressBar').show();
			
		}
}

var codeForScoring = function(){

       //--------------- New Scoring code: Modifications by Larry start here ---------------//
        var scoring_location = "production";
		   
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
                if ((new Date().getTime() - start) > milliseconds) {
                    break;
                }
            }
        }


        // NOTE: This mapping must be changed for each Job
         var folderLabelArray = ['CIQ CUSTOMER INQUIRIES', 'CIQ CUSTOMER INQUIRIES ABOVE AND BEYOND INSURANCE CO',
            'CIN CUSTOMER INVOICES', 'AGR ADMINISTRATION GOVERNMENT REGULATIONS', 'AAS ADMINISTRATION APPLICATIONS',
            'AAP ADMINISTRATION ADVERTISING AND PUBLICITY'];

        var folderLabelSet = new Set(folderLabelArray);

        /**
         * For Job 10 Map folder letters to indices in recordIndex using foldertypeandName, so we can map them
         * to the output structure we use in Levenshtien scoring
         *
         * NOTE -- This must be customized for each job moving forward
         *
         * @return {Object} - An object mapping the letters to indices
         */
        function makeLettersToIndicesMapping() {
            var mappingObject = {};

            // mappingObject["NUM"] = 0;

            // Any folder that is not tracked will be mapped larger than this
            // NOTE: This must be changed for each job
            var untrackedFolderIndex = 6;

            for (var i = 0; i < folderLabelArray.length; i++){
                mappingObject[folderLabelArray[i]] = i + 1;
            }

            for (var j = 0; j < foldertypeandName.length; j++){  // This is a folder that holds cards
                if (foldertypeandName[j][0] === "F") {
                    if (!folderLabelSet.has(foldertypeandName[j][1])) {
                        mappingObject[foldertypeandName[j][1]] = untrackedFolderIndex;
                        untrackedFolderIndex += 1;
                    }
                }
            }


            return mappingObject;
        }

        var mapping = makeLettersToIndicesMapping();

        /**
         * Convert a folder label to a Levenshtein index
         *
         * @param {String} folder_name: the folder_name
         * @return {int} - A Levenshtein index
         */
        function convertLabelToLevIndex(folder_name){
            if (mapping.hasOwnProperty(folder_name)){
                return mapping[folder_name]
            }
            else {
                return -999;
            }
        }

        /**
         * Change folder indices from recordIndex to the indices for the Levenshtien scoring
         *
         * NOTE -- This must be customized for each job moving forward
         *
         * @param {int} job_folder_index: The folder index to convert
         * @return {int} - The Levenshtein index
         */
        function convertJobIndexToLevIndex(job_folder_index) {

            // Any folder that is not tracked will be mapped larger than this
            // NOTE: This must be changed for each job
            // var untrackedFolderIndex = 30;

            // Map the folder labels to indices
            // NOTE: This must be changed for each job
            for (var i = 0; i < foldertypeandName.length; i++){
                if (i == job_folder_index){
                    var folderLabel = foldertypeandName[i][1];
					//console.log('ssssss '+folderLabel+' '+job_folder_index+' '+foldertypeandName);
                    return convertLabelToLevIndex(folderLabel);
                }
            }
            alert('Levenshtein index not found in mainpage for' + job_folder_index);
            return -999;
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
            $.each(dataRecdJob, function (i, card) {
                allCardsArray.push(card);
            });
            $.each(dataRecd, function (i, card) {
                allCardsArray.push(card);
            });

            $.each(allCardsArray, function (cardIndex, card) {  // Loop through the cards and get location and answer

                if (card.hasOwnProperty('ansOrder')) {
                    var prev_job_card_obj = {
                        'folder_loc': [convertJobIndexToLevIndex(card.folderLocation[0]), card.folderLocation[1]],
                        'ans_loc': [convertLabelToLevIndex(card.ansOrder[0]), card.ansOrder[1]]
                    };

                    card_output_array.push(prev_job_card_obj);

                    if (card.hasOwnProperty('crossUnit')) { // Loop through the cross refs and get location and answer
                        $.each(card.crossUnit, function (crossRefIndex, crossRef){
                            var cross_ref_answer_location = [-1, -1];
                            if (card.hasOwnProperty('crossAns')) {
                                if (crossRefIndex < card.crossAns.length) {
                                    cross_ref_answer_location = [convertLabelToLevIndex(card.crossAns[crossRefIndex][1][0]), card.crossAns[crossRefIndex][1][1]];
                                }
                            }
                            var prev_job_cross_ref_obj = {
                                'folder_loc': [convertJobIndexToLevIndex(crossRef.folderLocation[0]), crossRef.folderLocation[1]],
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
                'cross_refs': cross_ref_output_array,
                'folder_mapping': mapping
            };

            return JSON.stringify(json_output_object);
        }


        // Set URL and Token for scoring based upon location
        var scoring_url = "";
        var scoring_token = "";

        if (scoring_location === "localhost") {
            scoring_url = "http://localhost:8000/rest/sortingjob/";
            scoring_token = "fb36246f7f47833d4b0c646a8fba9b16b77d0222";
        }
        else if (scoring_location === "internal") {
            scoring_url = "https://internal-staging-01.adaptive-datamatics.com/rest/sortingjob/";
            scoring_token = "9f772197b2f91db24cb4e0cb7e84f02f4ecbbb93";
        }
        else if (scoring_location === "external") {
            scoring_url = "https://external-staging-01.adaptive-datamatics.com/rest/sortingjob/";
            scoring_token = "09f4e3cee76fde782ae914b9841283de278dde32";
        }
        else if (scoring_location === "production") {
            scoring_url = "https://stt.adaptive-datamatics.com/rest/sortingjob/";
            scoring_token = "c1d8f0a4be288a7edd90804ad835be14f77d8a56";
        }
        else {   // default to external staging
            scoring_url = "https://external-staging-01.adaptive-datamatics.com/rest/sortingjob/";
            scoring_token = "09f4e3cee76fde782ae914b9841283de278dde32";
        }

        // Send and receive the scoring algorithm response from the server
        function getStuff(json_string) {
            return $.ajax({
                type: "POST",
                url: scoring_url,
                headers: {"Authorization": "Token " + scoring_token},
                datatype: 'json',
                data: {
                    'api_key': scoring_token,
                    'job_id': 'Sorting_10',
                    'student_id': 'student_0099',
                    'card_order': json_string
                },
                error: function (xhr, textStatus, errorThrown) {
                    if (scoring_location !== "production") {
                        alert(xhr.responseText);
                        alert(textStatus);
                        alert(errorThrown);
                    }
                }
            });
        }

        // Make the labels
        var folder_labels = makeFolderLabels();
		
        //console.log('lables '+folder_labels)
        // Process the scored result
        // NOTE: I have pulled several functions that were previously outside of the AJAX call inside this function
        // to allow processing using the scoring result
        getStuff(folder_labels).done(function (result) {
            scoreAjaxData = result;
            //console.log(result[0])
            pushUser();
            $.each(dataRecd, function (i, v) {

                if (v.hintv > 1) {
                    if (scoreCnt !== 0)
                        scoreCnt -= 1;
                }
            });

            folderscore = result[0]["raw_score"];
            totfolderscore = result[0]["max_raw_score"];
			
            recordSimScore = (((Number(codescore) + Number(folderscore) + Number(folderGuideextraScore)) / (Number(totcodescore) + Number(totfolderscore) + Number(totalfolderScore*2))) * 100).toFixed(2);
            recordSimScore = recordSimScore > 100 ? 100 : recordSimScore;
            recordSimScore = recordSimScore < 0 ? 0 : recordSimScore;
            $('#resultpage .scoreDetails span').text(recordSimScore + '%');
            $('#resultpage .timeDetails span').html(recordSimTimer);
			$('#ctr0').append('<div class="overallScr"><div id="codeScr" class="scoring"><span>Code Score</span><span>: '+codescore+'/'+totcodescore+'</span></div><div id="folderScr" class="scoring"><span>Folder Score</span><span>: '+folderscore+'/'+totfolderscore+'</span></div></div>')
			
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
            if (!ltirecive) {
                $.each(dataRecd, function (di, dv) {
                    $.each(dv.crossUnit, function (i, v) {
                        // console.log('befr '+JSON.stringify(dv.crossUnit));
                        if (v.submt) {


                            dv.crossUnit.splice(i, 3);

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
            alert('Whoops! Please reload the simulation page.  If you have received this error previously while attempting this task, please contact your program administrator');
        });

        //--------------- Modifications by Larry End Here ---------------//

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
	//console.log(dataRecd[curVal].aslash.length, dataRecd[curVal].aslash)
	for(var i =0; i<dataRecd[curVal].aslash.length; i++)
	{
		spacewostring[i]=[];
		for(k=0;k<dataRecd[curVal].aslash[i].length;k++){
		tempstr = dataRecd[curVal].name[i][k].split("");
		//console.log(tempstr, dataRecd[curVal].aslash[i][k]);
		for(var j =0; j<dataRecd[curVal].aslash[i][k].length; j++)
		{
			tempstr[dataRecd[curVal].space[i][k][dataRecd[curVal].aslash[i][k][j]]] = '#'
		}
		tempstr = tempstr.join('');

		spacewostring[i][k] = tempstr.toString().split('#');
		}
	}
	//console.log(spacewostring);
	count=0;

	dataRecd[curVal].codeScore[2] =0;	
	ipslash = dataRecd[curVal].slash.join(',')
	anslash = dataRecd[curVal].aslash.join(',')
	
	if(ipslash.replace(/,/g,'').length > anslash.replace(/,/g,'').length)
		{
			//console.log( '                               slash      xtra')
			dataRecd[curVal].codeScore[2] = 1;
		}
	for(var i = 0; i<dataRecd[curVal].numbering.length; i++)
	{
		var getFrst = dataRecd[curVal].numbering[i].split(' ');
	if($('.simworkarea  #latteradd'+getFrst[0]).hasClass('substeping')){			
				//alert(dataRecd[curVal].alignClass[dataRecd[curVal].numbering[getFrst[0]]-1]);
			}
		if(typeof dataRecd[curVal].anumbering[i] != 'undefined')
		{
			var splt = dataRecd[curVal].numbering[i].split(' ');
			//console.log(splt);			
			var st = $('.simworkarea  #latteradd'+splt[0]+' .names').eq(splt[1]).children().eq(splt[2]).text();
			
			var userAns = st.toString();
			//console.log(userAns);
			var splt2 = dataRecd[curVal].anumbering[i].split(' ');
			if(splt2[2]%2 == 1){splt2[2]= splt2[2]-1; }
			var relAns = spacewostring[splt2[0]][splt2[1]][splt2[2]/2];
			relAns = relAns.replace(/\)/g,'');
			if(dataRecd[curVal].alignClass[splt2[0]].indexOf('substeping')>-1){
				userAns = dataRecd[curVal].subinputval[splt[1]]	
			}
			
			//console.log(relAns+' cc '+ userAns, $('.simworkarea  #latteradd'+i).attr('class'))
			//console.log(dataRecd[curVal].numbering[i]+' ansnum '+dataRecd[curVal].anumbering[i]) ;
			//console.log(splt2+'b')
			var usernumcheck =  splt.pop();
			var answnumcheck =  splt2.pop()
//						console.log(splt+' '+splt2, splt.toString()==splt2.toString())
//console.log('slash '+dataRecd[curVal].slash[splt[0][splt[1]]]);			
			
			if(userAns.replace(/\s/g,'#')==relAns.replace(/\s/g,'#') && splt.toString() == splt2.toString() )
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
	//console.log(dataRecd[curVal].codeScore)

	
	
	$('.scrbtn').text(score);
	
	
}


var updatePercentage = function() {	
		progressBar( (tempClone.length-cloneArr.length), $('#progressBar'));
		$('#simbtncontiner div').removeClass();
		$(this).addClass('active');
}
	
function progressBar(percent, $element) {
	var progressBarWidth =percent * $element.width() / tempClone.length;
	var perct = parseInt(percent/tempClone.length*100);
	if(ltirecive){
		perct = 100;
		$element.find('div').stop().animate({ width: '100%' });
	}
	$element.find('div').stop().animate({ width: progressBarWidth }, 500);
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
	var getAudFrmData = audSeq[getAudName];//
	var getCcTxt =	audCcTxt[getAudName];
	//console.log($('#alphabeticSimulation').css('display'),$('.subpage').filter(':visible').attr('id'),typeof $('.subpage').filter(':visible').attr('id') == 'undefined')
	if(typeof $('.subpage').filter(':visible').attr('id') == 'undefined' && $('#alphabeticSimulation').css('display') == 'block' && 
		$('[name=Code]').css('background-color') == 'rgb(90, 74, 66)' &&
		$('[name=Inspect]').css('background-color') == 'rgb(90, 74, 66)' &&
		$('[name=uIdentification]').css('background-color') == 'rgb(90, 74, 66)' &&
		$('[name=crossreference]').css('background-color') == 'rgb(90, 74, 66)'  &&
		$('[name=file]').css('background-color') == 'rgb(90, 74, 66)') 
		
		
	{
		if(getAudName == 'crossreference')
		{
		getAudName = 'crossreference'
		getAudFrmData = audSeq[getAudName];
			
		getCcTxt =	audCcTxt[getAudName];}
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
		audPlay.attr('src','./assets/audio/'+getAudFrmData[getIndex]+(isFirefox?".ogg":".mp3"));		
		audPlay[0].play();
		//$('.ccicon').off('click').on('click', audioccfun).removeClass('ccIcon').addClass('cciconActive');
/*		if($('.ftrinner1').css('display') != 'none')
		{ccShowtag=true;
		$('.audiocc').html(getCcTxt[getIndex]);
	 if(typeof $('.ccicon').attr('clicked') == 'undefined' || $('.ccicon').attr('clicked') == 0){

		$('.audiocc').show();
		}
			
	    }
	  else
	   { 
		$('.audiocc').hide();
	   }*/
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


var filedcardscrollfun = function(){
	//$('#scrolldrag').css({left:0});
	//$('.cardPanel').scrollLeft(0);
	$('#scrollcards').off('click').on('click', scrollfiledcards);
	$( "#scrolldrag" ).draggable({axis: "x", containment: "parent", 
		drag: function(event) {
				$('#trimSpace').scrollLeft(parseInt($('#scrolldrag').css('left'))*285/parseInt($('#scrolldrag').css('width')))
				var numgrid = Math.round(parseInt($('#scrollcards').css('width'))/parseInt($('#scrolldrag').css('left')))
				//console.log($('#scrollcards').css('width'),$('#scrolldrag').css('width'), $('#scrolldrag').css('left'), numgrid)	
			},
		stop: function(event){
				var numgrid = Math.round(parseInt($('#scrolldrag').css('left'))/parseInt($('#scrolldrag').css('width')))
				console.log($('#scrollcards').css('width'), $('#scrolldrag').css('left'), numgrid)	
				//$('.cardPanel').scrollLeft((numgrid-2)*270)
				$('#trimSpace').animate({scrollLeft: (numgrid)*285}, 400);
				$('#scrolldrag').animate({left:(parseInt($('#scrolldrag').css('width'))*numgrid)}, 400);
			},
	});
	
	
	filedcardwidth = parseInt($(".panelContainer .swapAreaDrop").css('width'));
	
	//console.log('test'+$('.cardPanel').scrollLeft(), $('.cardPanel').css('width'), $('.panelContainer').children().length*filedcardwidth);
	
	var vh = 3*filedcardwidth;
	var ch = $('.panelContainer').children().length*filedcardwidth;	
	
		var maxScroll = vh - ch;	

	var h = parseInt(vh -((ch-vh)/(ch/vh)));	
	$('#scrolldrag').css('width', vh / ($('.panelContainer').children().length-2))


}


var scrollfiledcards = function(e){	
	if(e.target !== e.currentTarget) return;
	var scrollleft = Number($('#trimSpace').scrollLeft());
	var x = e.clientX-$(this).offset().left;
 	if(x < parseInt($('#scrolldrag').css('left')))
	{
		$('#trimSpace').scrollLeft(scrollleft-filedcardwidth)
	}
	else
	{
		$('#trimSpace').scrollLeft(scrollleft+filedcardwidth)
	}
	dragscrollfun();
}


var dragscrollfun = function(e){	

	$('#scrolldrag').css('left', $('#trimSpace').scrollLeft()/285 * parseInt($('#scrolldrag').css('width')));

	
}

var dragscrollend = function(){
	var numgrid = Math.round(parseInt($('#scrolldrag').css('left'))/parseInt($('#scrolldrag').css('width')))
	$('#trimSpace').animate({scrollLeft: (numgrid)*285}, 400);
	$('#scrolldrag').animate({left:(parseInt($('#scrolldrag').css('width'))*numgrid)}, 400);	
}


var myPdf= function(){	
       var pdfscr=recordSimScore;
	   
		$('.detReviewScore,.detReviewTime,.printBtn').show();
		$('#newdivParent').remove();
		$('<div/>',{id:'newdivParent'}).appendTo('body');
		$('.printBtn').off('click').on('click', function() {		
		$('.newdiv').remove();			
		$('<div/>',{class:'newdiv'}).appendTo('#newdivParent').append($('#ctr0').clone());	
		
        $('<div/>',{class:'pdfHead'}).appendTo('.newdiv').text('Job 10: Subject Correspondence Filing');
		$('<div/>',{class:'pdfScore'}).appendTo('.newdiv').text('Score: '+pdfscr+'%');
		$('<div/>',{class:'pdfTime'}).appendTo('.newdiv').html('Elapsed Time: '+recordSimTimer);
		$('<div/>',{class:'codeScr'}).appendTo('.newdiv').text('Code Score:'+codescore+'/'+totcodescore);
		$('<div/>',{class:'folScr'}).appendTo('.newdiv').text('Folder Score:'+folderscore+'/'+totfolderscore);	
		$('<img src="./assets/images/logo.png" class="pdfLogo">').appendTo('.newdiv');
        $('<div/>',{class:'yourchoice'}).appendTo('.newdiv').html('Your Choice');
		$('<div/>',{class:'correctans'}).appendTo('.newdiv').html('Correct Answer');
		
		$('.newdiv').append($('#ctr .mCSB_container').html());
		$('.newdiv .userPanel').children().each(function(i,v){
			var gElm = $(v).find('.jobSpan');
			
			$(gElm).appendTo($(v).find('.swapArea'));
		});
		$('.newdiv .codeResult').children().each(function(i,v){						
			var dd = $('.newdiv .userPanel #swapArea_'+i).outerHeight();
			console.log(($('.newdiv .userPanel #swapArea_'+i).height()/0.67)+' '+$('.newdiv .userPanel #swapArea_'+i).outerHeight())
			dd/=0.67;			//console.log(dd+' '+(dd));
			$($(v).find('.cardsChild')).insertAfter($('.newdiv .userPanel #swapArea_'+i)).css({position:'relative',top:(-140/0.67)+'px',left:'20px'});
			$('.newdiv .orderResult #cardOdrIn_'+i).insertAfter($('.newdiv .userPanel #swapAreaDrop_'+i+' .cardsChild')).css({position:'relative',top:(-140/0.67)+'px',left:'20px'});;		
			//$('.newdiv .orderResult #cardOdrIn_'+i).css({background:'red'});
			//$('.newdiv .userPanel #swapArea_'+i+' .cardsChild').css({background:'green'});
		});
		setTimeout(function(){
				
					var windowContent = '<!DOCTYPE html>';
					windowContent += '<html>'
					windowContent += '<head><title>Records Management</title></head> <link type="text/css" href="assets/css/fonts.css" rel="stylesheet"/> <link type="text/css" href="assets/css/global.css" rel="stylesheet"/><link type="text/css" href="assets/css/main.css" rel="stylesheet"/><link rel="stylesheet" href="assets/css/jquery.mCustomScrollbar.min.css"><link type="text/css" href="assets/css/alpsim.css" rel="stylesheet"/><link type="text/css" href="assets/css/resultpagezoom.css" rel="stylesheet"/><link type="text/css" href="assets/css/align.css" rel="stylesheet"/></head>';
					windowContent+="<style>@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) { .btn, .simbtn, .hintbtn, .subbtn,.crossbtn{padding-top:14px;padding-bottom:10px;}.fbtn p {padding-top:7px;padding-bottom:4px;}.fbtn p.active{padding-top:7px; padding-bottom:4px;}.sitemapbtn{  padding-top:11px; padding-bottom	:8px; }.crossbtn1{line-height:21px;}.clsCrosRef span{line-height:0px;padding-top:4px;}.line1{top:123px;}.line3 {top: 39px;}.centersitemapbtn1{top: 225px;}.centersitemapbtn2{top: 292px !important;}.centersitemapbtn3{top: 324px !important;}.rightsitemapbtn{bottom:24px;}.clkheretocls{ padding-top:14px; padding-bottom:10px;}.addfolder{padding-top:2px;}.addguide{padding-top:2px;}.addspecialguide{padding-top:2px !important;}}</style>"
					windowContent += '<body style="overflow:scroll;" >'					
					
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
