var popVisited = false;	
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
var tickleCount=0;
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
var tickleLimit = 3;
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
	
		var myDiv = $('.tickle-unit');
        myDiv.text(myDiv.text().substring(0,10))

	$('#xRefLef').off('click').on('click',moveXleft);
	$('#xRefRig').off('click').on('click',moveXright);

	
	
	  var onetime=true;
	   $("#ctr").on("scrollstop",function(){
   		
		
 		 }); 
	 
//$('.cover').css({position:'fixed',width:window.outerWidth+'px',height:window.outerHeight+'px',background:'blue'});
	 if(ltirecive)
	 {	
		finalPage=1;
		$(".simworkcontainer #tickledate").dateDropdowns({'displayFormat':'md'}); 
	    $(".simworkcontainer #ticklerecorddate").dateDropdowns({submitFieldName: 'dateSelect1',displayFormat:'md'});
		$('.subPopUp,.detReviewScore,.detReviewTime,.printBtn').show();
		$('#mainpage').hide();
		$('.detReviewScore span').text(recordSimScore+'%');	
		$('.detReviewTime span').html(recordSimTimer);
		$('[name=resultpage]').hide();
		//$('[name=reviewAnswer]').hide();
		$('.clkheretocls').css('right', '104px');
		audPlay = $('#audElem');
		 
		createTickleFolders(folderArr);
		createFolders(folderArr); 
		//$('.subPopUp').css('height', '625px');
		//$('.subpgpopup').css('top', '50px');
		//uniqArr = errorobj.recdArr;
		$('#reviewAnswer').show().css({visibility:'visible'});
		
		randNum();
		pushUser();
		//codeForScoring();
		//console.log('after receive '+JSON.stringify(foldertypeandName))
		maxNumofFolderandGuide += foldertypeandName.length+findAddedCorrectName.length;
		totalfolderScore = findAddedCorrectName.length;
		
		
				 
		/*$('#ctr0').append('<div class="overallScr"><div id="codeScr" class="scoring"><span>Code Score</span><span>: '+codescore+'/'+totcodescore+'</span></div><div id="folderScr" class="scoring"><span>Folder Score</span><span>: '+folderscore+'/'+totfolderscore+'</span></div></div>')*/	
		// pushUser();
		 $('#resultpage').hide();
				//currentId = 'reviewAnswer';
		 $('.btn, .fbtn, .clkLink, .generalinfobtn').bind('mousedown', buttonEventCalling);
		 $(".rules").on("click", ruleclickevent);
	     $(".crossrules").on("click", crossruleevent);
	     $('.previouspage').off('click').on('click',shwPrevRule);
	     $('.nextpage').off('click').on('click',shwNxtRule);
	     $('.previouscrosspage').off('click').on('click',shwPrevCrossRule);
	     $('.nextcrosspage').off('click').on('click',shwNxtCrossRule);
		 if(currentId == 'reviewAnswer'){
		
	     $('.subpgpopup').css({'height':'450px'});
		 $('#closePopup').css({top: '65px','right':'95px'});

		 }else if(currentId =='overview' || currentId == 'introduction' || currentId == 'directionsforjobs' || currentId == 'generalinfo' || currentId == 'generalinfoSim'){
		   $('#closePopup').css({top: '100px','right':'192px'});
		 }else if(currentId =='videowalkthrough' || currentId == 'demonstration'){
		   $('#closePopup').css({top: '65px','right':'170px'});
	     }else{
	       $('#closePopup').css({top: '85px','right':'94px'});
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
		
	   // window.parent.indexReturnToBack();
	}
	
   	hintFuncInit();
	//audPlay[0].play();
	audPlay = $('#audElem');
	hintaudPlay = $('#hintaudElem');
	$('.nameing>span').css('cursor','pointer');	
	createTickleFolders(folderArr);
	createFolders(folderArr);
	
		 $(document).ready(function() {
	    
		/*$(".dragarea").bind("mousewheel", function() {
			return false;
		});*/
		
	 if( !(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) ){
		  // $('.scrollBarFiling').enscroll({
		  // verticalScrolling:true,
		  // verticalTrackClass:'track1',
		  // verticalHandleClass:'track2'
		  // });
	   }else{
	   
	   }
	   
	 });
	//$('<div/>',{class:'callOut'}).appendTo('.dragtooldiv');
	
	
	//$('.codeEditIcon').off('click').on('click', recordEditfun);
	//$('.rightarraw').off('click').on('click', moverightoverfun);
	$('<div/>',{id:'myMove'}).appendTo('#alphabeticSimulation');
	
	hoverEffect();
	
	$('#cnfmsubmit').off('click').on('click', reviewAns);
	$('.sitemapbtn, .fbtn, .btn, .subbtn, .backBtn, #startbtn, .clkLink, .generalinfobtn').bind('click', buttonEventCalling);
	$('.ticklebtn').off('click').on('click', ticklerFileBtnEventCalling);
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
		    $('.simworkarea em').off('click').css({cursor:'default'});
			$('.simworkarea .nameing span').off('click').css({cursor:'default'});
			$('#mymove').hide();
			$('em,span').off('mousemove');
		
		});
	$('.crossbtn').bind('click', crossBtnEventCalling);
	$('.fileBtn').bind('click', fileBtnCalling);
	$('.simbtn').bind('click', alpRulesselectfun);
	
	$('.inspectbtn').off('click').on('click', function()
		{
			
			//console.log('test')
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
	$('<div/>',{class:'cardNum'}).appendTo('.ticklefile'); 
	$('<div/>',{id:'zoompopup'}).appendTo('#alphabeticSimulation');
	$('<div/>',{id:'cloneContainer'}).appendTo('#zoompopup');
	$('<div/>',{id:'scaleCrdNo'}).appendTo('.simworkcontainer');
	$('.maximizeIcon').off('click').on('click', zoomCard);
	
	//$('.codeEditIcon').off('click').on('click', pageSwap);
	
	randNum();	
	
	$('<div/>',{class:'dragger'}).appendTo('.simworkarea,.crossreference, .ticklefile');
	$('<div/>',{class:'draggerForParent'}).appendTo('.crossreference');	
	$('<div/>',{class:'draggerForParent'}).appendTo('.ticklefile');
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

	dataRecdJob = exitobj.job1; //$.parseJSON(localStorage['job1']);
	dataRecd = exitobj.card; //$.parseJSON(localStorage['job2']);
	
	foldertypeandName = exitobj.folderNames.reverse();
	//foldertypeandName = (exitobj.folderNames.slice()).reverse();
	uniqArr = exitobj.recdArr; // $.parseJSON(localStorage['recdArr']);
	//console.log('resume '+uniqArr)
	popVisited = exitobj.pageVisited;
	$('.dragtooldiv').remove();
	createTickleFolders(folderArr);
	createFolders(folderArr);
	$('.dragarea').sortable({start:dragSortStart,helper:'clone',appendTo:'body', sort:setsortCursor,update:swapOrderFol,cancel:'.unsortable',axis:'y',refreshPositions: true,stop:sortStop,tolerance: "pointer",zIndex:100000,placeholder: "ui-state-highlight",scroll:false});
	maxNumofFolderandGuide += foldertypeandName.length+findAddedCorrectName.length;
	totalfolderScore = findAddedCorrectName.length;
	enableDrop();
	updateCloneArr();
	if(popVisited){
	showFolder();
	}
	restorePage();
	hoverEffect();
		
	if(cloneArr.length == 0){
		$('.simworkcontainer').show().css({visibility:'hidden'});
		$('.dragger').hide();
	}
	
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
	
	
    var Foldermodal = document.getElementById('createFolder');
    var Folderbtn = document.getElementById("createFolderbtn");
    var Folderspan = document.getElementsByClassName("close")[0];
    Folderbtn.onclick = function() {
	   
		if($('#createFolderbtn').css('opacity') == 1){
		$('#guidename').val('');	
		$('#foldername').val('');
			if(folderArr.length+guideName.length >= maxNumofFolderandGuide)
			{
				alert("You have created maximum Guides and Folders.");
				return;
			}
			    Foldermodal.style.display = "block";
				$('.addFldrbtn').css({color:'#fff','background':'#e75028','cursor':'pointer'});
				$('.dummyDivGud').show();
				$('#foldername').focus();
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
	
	var Guidemodal = document.getElementById('createGuide');
    var Guidebtn = document.getElementById("createGuidebtn");
    var guidespan = document.getElementsByClassName("closeGuide")[0];
    Guidebtn.onclick = function() {
		if($('#createGuidebtn').css('opacity') == 1){
		$('#guidename').val('');	
	$('#foldername').val('');
		if(folderArr.length+guideName.length >= maxNumofFolderandGuide)
		{
			alert("You have created maximum Guides and Folders.");
			return;
		}   
		
		Guidemodal.style.display = "block";
		$('.addGubtn').css({color:'#fff','background':'#e75028','cursor':'pointer'});
        $('.dummyDivGud').show();
		$('#guidename').focus();
		/*if($('.rectangle').children().length==0){
     
		}else{
			alert('Move Folder/Guide to approriate location');
		}*/
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
    }
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

	$('.tickleMin').off('click').on('click',function(e){
		
		if(parseInt($('.tickleContainer').css('height')) >= 150)
		{
			$('.tickleContainer').animate({height:'25px', width:'340px'},function(){$('#noofTicklecrds').html('TICKLER CARD(S)')});
			$('.tickleMin').attr('data',1);
			$('.tickleMin').css({background: 'url(./assets/images/minimize.png) no-repeat'});	
			
		}
		else
		{
			var topval = parseInt($('.tickleContainer').css('top'))
			var leftval = parseInt($('.tickleContainer').css('left'))
			if(topval > 185 ) {topval = 185}
			if(leftval > 695 ) {leftval = 695}
			{
				$('.tickleContainer').animate({height:'320px', width:'340px', top:topval+'px', left:leftval+"px"},function(){$('#noofTicklecrds').html('TICKLER CARD(S)')});
			}
			$('.tickleMin').attr('data',0);
			$('.tickleMin').css({background: 'url(./assets/images/maximize.png) no-repeat'});	
				
		}

		});

		
		//console.log(uniqArr.length, currQues)	
	if(uniqArr.length>0)
		chngQues(currQues);	
		else
		$('.simworkcontainer').hide();	
		$('.containerheader').show();	
		$('.crossreferenceContainter').css({visibility:'hidden'});
		$('.tickleContainer').css({visibility:'hidden'});

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		//$('#startpopup').show();
	}else{
		//$('#startpopup').show();
		//playAudio('startbtn',0);	
		startToPlay('alphabeticSimulation',0);	
	}


    $('.crossreference .dragger').off('mouseenter').on('mouseenter', checkCrosRefDup);
    $('.ticklefile .dragger').off('mouseenter').on('mouseenter', checkTickleCardDup);
	
	navigateFolder();


  $('.cross_unit').off('focusin').on('focusin', function(e){	
	$('.tcent .mCSB_container').html(simaction.crossreference);	
	if(titleNew !== 'crossreference')
	{
	startToPlay('crossreference',0,'cr');
	}
  });
  
  
  $('.tickle_unit').off('focusin').on('focusin', function(e){	
	$('.tcent .mCSB_container').html(simaction.ticklefile);	
	if(titleNew !== 'ticklefile')
	{
	startToPlay('ticklefile',0,'tr');
	}
  });
	 
    //showFolder();
	
	//storeJobTwo();
	addNewFolder();




	toggleArrow();
	$("#tickledate").dateDropdowns({'displayFormat':'md'}); 
	$("#ticklerecorddate").dateDropdowns({submitFieldName: 'dateSelect1',displayFormat:'md'});
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
	// showFolder()
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
//				console.log(innercon+" initial")
				
			}
var stattag2 = true;
var addfoldcount2 =0;
var gcount2 =0;
var scrollPos2;
var scrollinc2;
function scrollfun2(){
				var elem2 = $(".dragareaalltickle");
								 
				
				
				

				dragareaval2 = $('.dragareaalltickle')[0].scrollHeight; 

				

				var innercon2 = Math.round(parseInt($('.dragareaalltickle').innerHeight()))
				var contscro2 = dragareaval2;
					
				scrollbarfolderheight2 = parseInt($( "#scrollbarfolder2" ).css('height'))
			
				var viewportRatio2 = $('.dragareaalltickle').height() / $('.dragareatickle').outerHeight(true);
				$( "#scrollthumb2" ).height(
					Math.max(
					50,
					Math.floor(scrollbarfolderheight2 * viewportRatio2)
					)
				);
				
				$( "#scrollthumb2" ).css('height', innercon2/(Math.round(parseInt(contscro2))/scrollbarfolderheight2))
				 scrolldif2 = scrollbarfolderheight2 - (Math.round(parseInt($( "#scrollthumb2" ).css('height'))))
				
			
			
				
				var elem2 = $(".dragareaalltickle");
				var elemcon2 = $(".dragareatickle");
				// maxScrollTop = dragareaval - elem.outerHeight();
				 
				$('.dragareaalltickle').scrollTop(maxScrollTop2);
						
				$('.dragareaalltickle').scrollTop(1000)
				maxScrollTop2 = $('.dragareaalltickle').scrollTop();
				
				scrollPos2 = $('.dragareaalltickle').scrollTop();
				/*if(stattag)*/
				{
					$( "#scrollthumb2" ).css('top', (scrollPos2/maxScrollTop2) * scrolldif2)
				}
				
				
				//$('.dragareaall').scrollTop(100000)//(Number(maxScrollTop)+100))
				if(stattag2){ }
				$( "#scrollthumb2" ).css('top',  parseInt($( "#scrollbarfolder2" ).css('height')) - parseInt($( "#scrollthumb2" ).css('height')))
				
				scrollinc2 = $('.dragareaalltickle').scrollTop();
				
				maxTop2 = $('#scrollthumb2').position().top;
				
				
			}
var maxTop = 0,maxTop2 = 0;		
var maxScrollTop,maxScrollTop2;
var scrolldif,scrolldif2;
function dragfun(e){
	
	$( "#scrollbarfoldercon	p").eq(4).html('5 scrolldif '+$('.dragareaall').scrollTop() +'  '+ parseInt($('#'+e.target.id).css('top')) +'  '+ $('.dragarea').height() +'  '+ scrolldif +'  '+ maxScrollTop)
	ctStop = $('.dragareaall').scrollTop();
	$('.dragareaall').scrollTop(parseInt($('#'+e.target.id).css('top'))/scrolldif*maxScrollTop);
	
	if($('.dragareaall').scrollTop() > maxScrollTop-30){$('.dragarea').scrollTop(20000)}
	}
function dragfun2(e){
	
	
	ctStop = $('.dragareaalltickle').scrollTop();
	$('.dragareaalltickle').scrollTop(parseInt($('#'+e.target.id).css('top'))/scrolldif2*maxScrollTop2);
	
	if($('.dragareaalltickle').scrollTop() > maxScrollTop2-30){$('.dragareatickle').scrollTop(20000)}
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


guideMax = [];
folderMax = [];

var createFolders = function(folderArr){
	
	var asciicodestartval,divId;
	
	
	//for(var i =0; i<totalNoFolder; i++)
//	console.log(foldertypeandName)
	foldertypeandName.forEach(function(item,index)	
	{
		if(foldertypeandName[index][0] == 'F'){
		$('.dragarea').prepend('<div id=dragtooldiv_'+index+' class="dragtooldiv folParent highlightfol unsortable folder"><span class="lefCurve"></span><div class="addfolder folParent highlightfol">'+(foldertypeandName[index][1])+'</div><span class="drogtoolname">'+(foldertypeandName[index][1])+'</span><span class="folderindex">'+0+'</span><span class="drogtoolnum">'+index+'</span><div id="clsFol" class="dltFolder"></div><span class="rigCurve"></span><div class="dummyFolder"></div></div>');
			folderMax.push(foldertypeandName[index][1]);
			folderArr.push(foldertypeandName[index][1]);
			if(foldertypeandName[index][1].length>32)
			{
				$('#dragtooldiv_'+index+' .highlightfol').attr('title',(foldertypeandName[index][1]))
			}
				divId = $('#dragtooldiv_'+index);
		
		}
		else if(foldertypeandName[index][0] == 'S')
		{
		$('.dragarea').prepend('<div id=dragtooldivguide_'+index+' class="dragtooldiv guidesp unsortable"><span class="lefCurve"></span><div class="addspecialguide">'+(foldertypeandName[index][1])+'</div><span class="drogtoolname">'+(foldertypeandName[index][1])+'</span><span class="folderindex">'+0+'</span><div id="clsFol" class="dltFolder dltGudSp"></div><span class="rigCurveg"></span></div>');
			spGuideMax.push(foldertypeandName[index][1]);
			spGuideName.push(foldertypeandName[index][1]);
			if(foldertypeandName[index][1].length>12)
			{
				$('#dragtooldivguide_'+index+' .addspecialguide').attr('title',(foldertypeandName[index][1]))
			
			
		    }
			$('.addspecialguide').css({'padding':'2px 20px 0 17px'})
			divId = $('#dragtooldivguide_'+index);
			
		}
		else if(foldertypeandName[index][0] == 'G')
		{
		$('.dragarea').prepend('<div id=dragtooldivguide_'+index+' class="dragtooldiv guide unsortable"><span></span><div class="addguide">'+(foldertypeandName[index][1])+'</div><span class="drogtoolname">'+(foldertypeandName[index][1])+'</span><span class="folderindex">'+0+'</span><span class="drogtoolnum">'+index+'</span><div id="clsFol" class="dltFolder dltGud"></div><span class="rigCurveg"></span></div>');
			guideMax.push(foldertypeandName[index][1]);
			guideName.push(foldertypeandName[index][1]);
			if(foldertypeandName[index][1].length>22)
			{
				$('#dragtooldivguide_'+index+' .addguide').attr('title',(foldertypeandName[index][1]))
			
		    }
			divId = $('#dragtooldivguide_'+index);
			
		}
		//$("#dragtooldiv_"+index).css('margin-top',(425-(index*20))).css('padding-top','5px');
		if(foldertypeandName[index][2] == 'new'){
			divId.removeClass('unsortable');
		//	console.log('show '+divId.find('#clsFol'))
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
	
	
//	$('.dltFolder').hide();
//	updateFolderArr();
	updateFolderArr();
	removeFolder();
	
	folderborderdesign()
	

	
}

var createTickleFolders = function(folderArr){

	tickletypeandName.forEach(function(item,index)	
	{
		if(tickletypeandName[index][0] == 'F'){
		$('.dragareatickle').prepend('<div id=dragtooldiv_'+index+' class="dragtooldiv folParent highlightfol unsortable folder"><span class="lefCurve"></span><div class="addfolder folParent highlightfol">'+(tickletypeandName[index][1])+'</div><span class="drogtoolname">'+(tickletypeandName[index][1])+'</span><span class="folderindex">'+0+'</span><span class="drogtoolnum">'+index+'</span><span class="rigCurve"></span><div class="dummyFolder"></div></div>');
			folderMax.push(tickletypeandName[index][1]);
			folderArr.push(tickletypeandName[index][1]);
			if(tickletypeandName[index][1].length>32)
			{
				$('#dragtooldiv_'+index+' .highlightfol').attr('title',(tickletypeandName[index][1]))
			}
			
		
		}
		else if(tickletypeandName[index][0] == 'S')
		{
		$('.dragareatickle').prepend('<div id=dragtooldivguide_'+index+' class="dragtooldiv guidesp unsortable"><span class="lefCurve"></span><div class="addspecialguide">'+(tickletypeandName[index][1])+'</div><span class="drogtoolname">'+(tickletypeandName[index][1])+'</span><span class="folderindex">'+0+'</span><div class="dummyspguide">'+(tickletypeandName[index][2])+'</div><span class="rigCurveg"></span></div>');
			spGuideMax.push(tickletypeandName[index][1]);
			spGuideName.push(tickletypeandName[index][1]);
			if(tickletypeandName[index][1].length>12)
			{
				$('#dragtooldivguide_'+index+' .addspecialguide').attr('title',(tickletypeandName[index][1]))
			
			
		    }
			$('.addspecialguide').css({'padding':'2px 20px 0 17px'})
			
		}
		else if(tickletypeandName[index][0] == 'G')
		{
		$('.dragareatickle').prepend('<div id=dragtooldivguide_'+index+' class="dragtooldiv guide unsortable"><span></span><div class="addguide">'+(tickletypeandName[index][1])+'</div><span class="drogtoolname">'+(tickletypeandName[index][1])+'</span><span class="folderindex">'+0+'</span><span class="drogtoolnum">'+index+'</span><div class="dummyguide">'+(tickletypeandName[index][2])+'</div><span class="rigCurveg"></span></div>');
			guideMax.push(tickletypeandName[index][1]);
			guideName.push(tickletypeandName[index][1]);
			if(tickletypeandName[index][1].length>22)
			{
				$('#dragtooldivguide_'+index+' .addguide').attr('title',(tickletypeandName[index][1]))
			
		    }
		}
		//$("#dragtooldiv_"+index).css('margin-top',(425-(index*20))).css('padding-top','5px');
		
	
	});
	
	totalfolder = $('.dragareatickle').children().length;
	
	for(var i =0; i< totalfolder - maxfoldervisible ; i++)
	{
		//$('.dragarea').children().eq(i).hide();
	}
	
	
	
	firsteq = totalfolder - maxfoldervisible;
	lasteq = totalfolder-1;
	
	
//	$('.dltFolder').hide();
//	updateFolderArr();
	updateFolderArr();
	removeFolder();
	
	folderborderdesignTickle()
	

	
}

var folderborderdesign = function(){
	$('.dragarea .dragtooldiv .lefCurve').css({background:'url(./assets/images/folderLeftlong.png)'});
	$('.dragarea .dragtooldiv .rigCurveg').css({background:'url(./assets/images/folderRightlong.png)'});
	$('.dragarea .dragtooldiv').css({borderRight:'1px solid #000',borderLeft:'1px solid #000','margin-bottom':'0px'});
	$('.dragarea .dragtooldiv .drogtoolname').css({height:'20px',borderLeft:'1px solid #000'});

	$('.dragarea .dragtooldiv').each(function(index, value){		
		if($(this).hasClass('highlightfol') && $(this).next().hasClass('highlightfol')){
			//console.log($(this).hasClass('highlightfol')+' '+$(this).next().hasClass('highlightfol'))
			$(this).find('.lefCurve').css({background:'url(./assets/images/folderLeftlong.png)','height':'20px'});
			$(this).next().find('.lefCurve').css({background:'url(./assets/images/folderLeftlong.png)','height':'20px'});
			$(this).css({'height':'15px','margin-bottom':'17px'});
			//$(this).next().css({'height':'15px','margin-bottom':'17px'});
		}
		if($(this).hasClass('highlightfol') && $(this).next().hasClass('guide')){
			$(this).find('.lefCurve').css({background:'rgb(250, 246, 225)','height':'20px'});
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
			$(this).find('.rigCurveg').css({background:'rgb(250, 246, 225)','height':'20px','opacity':'1'});
				
				
		}
		if($(this).hasClass('guidesp') && $(this).next().hasClass('guide')){
			$(this).find('.lefCurve').css({background:'rgb(250, 246, 225)','height':'20px'});	
			$(this).find('.rigCurveg').css({background:'url(./assets/images/folderRightlong.png)','height':'20px','opacity':'1'});	
		}
		if($(this).hasClass('guidesp') && $(this).next().hasClass('highlightfol')){
			$(this).find('.rigCurveg').css({background:'rgb(250, 246, 225)','height':'20px','opacity':'1'});		
			$(this).find('.lefCurve').css({background:'url(./assets/images/folderLeftlong.png)','height':'20px','opacity':'1'});		
		}
	
		if($(this).hasClass('guidesp') && $(this).next().hasClass('guidesp')){
			
			$(this).find('.rigCurveg').css({background:'url(./assets/images/folderRightlong.png)'});
			$(this).find('.lefCurve').css({background:'url(./assets/images/folderLeftlong.png)','height':'20px','opacity':'1'});		
			$(this).css({'height':'15px','margin-bottom':'17px'});
		}
		
	   
	});
	
   if($('.dragarea .dragtooldiv').last().hasClass('guide')){
		
		$('.dragarea  .dragtooldiv').last().find('.rigCurveg').css({background:'url(./assets/images/folderRightlong.png)','height':'20px','opacity':'1',borderLeft:'0px solid rgb(250, 246, 225)'});	
		
		  $('.dragarea .dragtooldiv').eq(0).find('.lefCurve').css({borderLeft:'0 solid #ccc'});
		
	}
	

	
	if($('.dragarea .dragtooldiv').eq(0).hasClass('highlightfol')){
		  $('.dragarea .dragtooldiv').eq(0).css({borderLeft:'1px solid #424143'});
		  $('.dragarea .dragtooldiv').eq(0).find('.lefCurve').css({background:'url(./assets/images/folderLeftlong_1.png'});
		
	   if($('.dragarea .dragtooldiv').eq(0).next().hasClass('highlightfol')){
		    $('.dragarea .dragtooldiv').eq(0).find('.lefCurve').css({background:'url(./assets/images/folderLeftlong_1.png)','height':'20px',borderLeft:'0px solid rgb(250, 246, 225)'});
		
		  }
	   else if($('.dragarea .dragtooldiv').eq(0).next().hasClass('guide'))
		  {
		    $('.dragarea .dragtooldiv').eq(0).find('.lefCurve').css({borderRight:'0px solid #424143',background:'#424143',borderLeft:'0 solid rgb(250, 246, 225)'});
			
		   }
	   else if($('.dragarea .dragtooldiv').eq(0).prev().hasClass('guide'))
		  {
			$('.dragarea .dragtooldiv').last().prev().find('.lefCurve').css({background:'red',borderRight:'0px solid rgb(250, 246, 225)',borderLeft:'1px solid rgb(250, 246, 225)',height:'20px'});
			
		  }
	   }
	else if($('.dragarea .dragtooldiv').eq(0).hasClass('guide')){
		 $('.dragarea .dragtooldiv').eq(0).find('.rigCurveg').css({background:'#424143',opacity:'1'});
		 $('.dragarea .dragtooldiv').eq(0).css({borderRight:'0px solid rgb(250, 246, 225)',borderLeft:'0px'});
		 
		  if($('.dragarea .dragtooldiv').eq(0).next().hasClass('guide'))
		  {
		    $('.dragarea .dragtooldiv').eq(0).find('.rigCurveg').css({borderRight:'0px solid #424143',background:'url(./assets/images/folderRightlong_1.png)',borderLeft:'0 solid rgb(250, 246, 225)'});
			
		   }
		  if($('.dragarea .dragtooldiv').eq(0).next().hasClass('guidesp'))
		  {
		    $('.dragarea  .dragtooldiv').eq(0).find('.rigCurveg').css({borderRight:'0px solid #424143',background:'url(./assets/images/folderRightlong_1.png)',borderLeft:'0 solid rgb(250, 246, 225)'});
			
		   }
		  
	     }
	else if($('.dragarea .dragtooldiv').eq(0).hasClass('guidesp')){
		 $('.dragarea .dragtooldiv').eq(0).find('.lefCurve').css({background:'url(./assets/images/folderLeftlong_1.png)'});
		 $('.dragarea .dragtooldiv').eq(0).find('.rigCurveg').css({background:'#424143'});
		 $('.dragarea .dragtooldiv').eq(0).css({borderRight:'0px solid rgb(250, 246, 225)',borderLeft:'0 solid rgb(250, 246, 225)'});
		 
		   if($('.dragarea .dragtooldiv').eq(0).next().hasClass('guidesp'))
		  {
		    $('.dragarea .dragtooldiv').eq(0).find('.rigCurveg').css({borderRight:'0px solid #424143',background:'url(./assets/images/folderRightlong_1.png)',borderLeft:'0 solid rgb(250, 246, 225)'});
			
		   }
		   
		  if($('.dragarea .dragtooldiv').eq(0).next().hasClass('guide'))
		  {
		    $('.dragarea  .dragtooldiv').eq(0).find('.rigCurveg').css({borderRight:'0px solid #424143',background:'url(./assets/images/folderRightlong_1.png)',borderLeft:'0 solid rgb(250, 246, 225)'});
			
		   }
		  
	   }
	   
	    if($('.dragarea .dragtooldiv').last().hasClass('highlightfol')){
		   $('.dragarea .dragtooldiv').eq(0).prev().find('.rigCurveg').css({background:'url(./assets/images/folderRightlong.png)','height':'20px','opacity':'1'}); 
           	   
	    }
		
	foldertypeandName = [];			
	$('.dragarea  .dragtooldiv').each(function(index, value){	
	
	
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
$('.dragareaall').scrollTop(1000)

	$( "#scrollbarfoldercon	p").eq(4).html('4 scrolldif '+$('.dragareaall').scrollTop() +'  '+ $('.dragarea').height() +'  '+ $('.dragarea').innerHeight() +'  '+ $('.dragarea').outerHeight())
	 maxScrollTop = $('.dragareaall').scrollTop();	
//	console.log(foldertypeandName)
}

var folderborderdesignTickle = function(){

	$('.dragareatickle .dragtooldiv .lefCurve').css({background:'url(./assets/images/folderLeftlong.png)'});
	$('.dragareatickle .dragtooldiv .rigCurveg').css({background:'url(./assets/images/folderRightlongtickle.png)'});
	$('.dragareatickle .dragtooldiv').css({borderRight:'1px solid #000',borderLeft:'1px solid #000','margin-bottom':'0px'});
	$('.dragareatickle .dragtooldiv .drogtoolname').css({height:'20px',borderLeft:'1px solid #000'});

	$('.dragareatickle .dragtooldiv').each(function(index, value){		

		if($(this).hasClass('guidesp') && $(this).next().hasClass('guidesp')){
			
			$(this).find('.rigCurveg').css({background:'url(./assets/images/folderRightlongtickle.png)'});
			$(this).find('.lefCurve').css({background:'url(./assets/images/folderLeftlong.png)','height':'20px','opacity':'1'});		
			$(this).css({'height':'15px','margin-bottom':'17px'});
		}
		
	});
	
	  if($('.dragareatickle .dragtooldiv').eq(0).hasClass('guide')){

          $('.dragareatickle .dragtooldiv').eq(0).find('.rigCurveg').css({height: '20px',borderRight:'0px solid rgb(66, 65, 67)',background:'url(./assets/images/folderRightlongtickle_end.png)',borderLeft:'0 solid rgb(250, 246, 225)',marginRight:'-1px'});
		   $('.dragareatickle .dragtooldiv').eq(0).next().append('<div class="dummyOut" >');
		
	  }
	  
	  
	  if($('.dragareatickle .dragtooldiv').last().hasClass('guide')){
		$('.dragareatickle .dragtooldiv').last().prev().find('.lefCurve').css({background:'rgb(250, 246, 225)',height:'20px'});
	  }
		
	
}

var hoverEffect = function(){
		hoverTopContainer();
		hoverDownContainer();	  
	$( ".dragareaalltickle, .dragareaall" ).bind({'mouseleave':function(){
			   highlightresetfolder();
	    }	
	});
	

	
}
var dropFlag = false;
var hoverTopContainer = function(){
	
	       $( ".dummyOut" ).droppable({tolerance:'pointer',
	         over:function (){
		        highlightresetfolder();
		
	        } });
		
	//$( ".dragarea .addfolder,.dragarea .dummyFolder" ).droppable({disbaled:true});
	$( ".dragareatickle .addspecialguide,.dragareatickle .addguide,.dragareatickle .dummyspguide,.dragareatickle .dummyguide").droppable({tolerance:'pointer',hoverClass:'hvr',accept:'.crossreference ,.simworkarea, .ticklefile',out:function(){
		//		console.log('out')
	}
		, over:function (){
//      console.log($(this).attr('id'));
	//$( ".dragarea .addfolder,.dragarea .dummyFolder" ).droppable({disabled:true})
			if(typeof $(this).attr('id') == 'undefined' && deg>=90 && dropFlag)
			{				
				$('.dragareatickle .guidesp,.dragareatickle .guide,.dragareatickle .drogtoolname, .rigCurveg').css({'background-color': '#faf6e1'})
				$('.dragareatickle .addspecialguide, .dragareatickle .addguide').css({'backgroundImage':'url(assets/images/leftguide.png)', 'background-color':'rgba(255,0,0,0.01)'})

				$('.dragareatickle #'+$(this).parent().attr('id')).css('background-color','#90CFE0')
				$('.dragareatickle #'+$(this).parent().attr('id') +' .guidesp').css('background-color','rgba(0,0,0,0.01)');
				$('.dragareatickle #'+$(this).parent().attr('id') +' .guide').css('background-color','rgba(0,0,0,0.01)');
				$('.dragareatickle #'+$(this).parent().attr('id') +' .addspecialguide').css({'backgroundImage':'url(assets/images/folderLeftOver.png)','background-repeat': 'no-repeat'});	
				$('.dragareatickle #'+$(this).parent().attr('id') +' .addguide').css({'backgroundImage':'url(assets/images/folderLeftOver.png)','background-repeat': 'no-repeat'});
				$('.dragareatickle #'+$(this).parent().attr('id') +' .rigCurveg').css({'background-color': '#90CFE0'});
				$('.dragareatickle #'+$(this).parent().attr('id') +' .rigCurveg').css({'background-repeat': 'no-repeat'});
				$('.dragareatickle #'+$(this).parent().attr('id') +' .drogtoolname').css({'background-color': '#90CFE0'});
				//	console.log($(this).parent().attr('id')+' on over');
				folCls2 = $(this).parent();
				
			}		
		}
		});
}


var hoverDownContainer = function(){
	//$( ".dragareatickle .addspecialguide").droppable({disbaled:true});
	$( ".dragarea .addfolder,.dragarea .dummyFolder" ).droppable({tolerance:'pointer',hoverClass:'hvr',accept:'.crossreference ,.simworkarea, .ticklefile',out:function(){
		if($(this).parent().hasClass('highlightfol') && $(this).parent().index() == 0){
				$('.dragarea .highlightfol,.dragarea .drogtoolname').css({'background-color': '#faf6e1'});
				$('.dragarea .addfolder').css({'backgroundImage':'url(assets/images/leftguide.png)', 'background-color':'rgba(255,0,0,0.01)'});		
				}
				folCls2 = 'undefined';
				//console.log('ss');
	}
		, over:function (){
			//console.log($(this).parent().attr('id')+' '+dropTopDown+' '+$(this).parent().position().top+' '+$(this).parent().offset().top)
			//hoverId = $(this);
			//$( ".dragareatickle .addspecialguide,.dragareatickle .addguide,.dragareatickle .dummyspguide,.dragareatickle .dummyguide").droppable({disabled:true})
			if(typeof $(this).attr('id') == 'undefined' && deg>=90 && dropFlag)
			{				
				$('.highlightfol, .drogtoolname').css({'background-color': '#faf6e1'})
				$('.dragarea .addfolder').css({'backgroundImage':'url(assets/images/leftguide.png)', 'background-color':'rgba(255,0,0,0.01)'})
				//$('.highlightfol, .addfolder').css('background-color', '#f00')

				$('.dragarea #'+$(this).parent().attr('id')).css('background-color','#90CFE0')
				$('.dragarea #'+$(this).parent().attr('id') +' .highlightfol').css('background-color','rgba(0,0,0,0.01)');
				$('.dragarea #'+$(this).parent().attr('id') +' .highlightfol').css({'backgroundImage':'url(assets/images/folderLeftOver.png)'});
				$('.dragarea #'+$(this).parent().attr('id') +' .highlightfol').css({'background-repeat': 'no-repeat'});
				$('.dragarea #'+$(this).parent().attr('id') +' .drogtoolname').css({'background-color': '#90CFE0'});
				//	console.log($(this).parent().attr('id')+' on over');
				folCls2 = $(this).parent();				
			}		
		}
		});
}

var highlightresetfolder = function(){


			$('.highlightfol, .drogtoolname,.dragtooldiv').css('background-color', '#faf6e1')
			$('.dragareatickle .rigCurveg').css('background-color', '#faf6e1')
			$('.addfolder, .addspecialguide, .addguide').css({'backgroundImage':'url(assets/images/leftguide.png)', 'background-color':'rgba(255,0,0,0.01)'});
			folCls2 = 'undefined';	
				
	  if($('.dragareatickle .dragtooldiv').eq(0).hasClass('guide')){
		 $('.dragareatickle .dragtooldiv').eq(0).find('.rigCurveg').css({background:'url(./assets/images/folderRightlongtickle_end.png)','background-repeat': 'no-repeat','background-color':'rgba(255,0,0,0.01)','height':'12px','opacity':'1'});
	  }
}

var navigateFolder = function(){
   navigateFolderMain();
   navigateFoldertickle();
	$('.codeEditIcon').off('click').on('click',editData);
}

var navigateFolderMain = function(){

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
						accept:'.dragtooldiv,.crossreference ,.simworkarea,.ticklefile'
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
						accept:'.dragtooldiv,.crossreference ,.simworkarea,.ticklefile'
	});


 /*	$('.leftarraw').on('mousedown touchstart',function() {		
		animateLeftDir();
		
	}).on('mouseup mouseleave touchend',function() {
		//alert('l')
		isLeftMousedown = false;
	});
	$('.rightarraw').on('mousedown touchstart',function() {
		animateRightDir();
		
	}).on('mouseup mouseleave touchend',function() {
		isRightMousedown = false;
	}); */
	
}	
var navigateFoldertickle = function(){
		$('.rightarrawTickle').droppable({
			tolerance: "pointer",
			over : function(event,ui) {
				animateRightDirtickle(ui);
			},
			out : function(event,ui) {
				isRightMousedown = false;
				window.clearInterval(clear);
			},
			drop: function(event,ui) {
				//$(ui.draggable).draggable({revert:true});
				window.clearInterval(clear);
			},
						accept:'.dragtooldiv,.crossreference ,.simworkarea,.ticklefile'
	});

	$('.leftarrawTickle').droppable({
			tolerance: "pointer",
			over : function(event,ui) {
				animateLeftDirtickle(ui);
			},
			out : function(event,ui) {
				isLeftMousedown = false;
				window.clearInterval(clear);
			},
			drop: function(event,ui) {
				//$(ui.draggable).draggable({revert:true});
				window.clearInterval(clear);
			},
						accept:'.dragtooldiv,.crossreference ,.simworkarea,.ticklefile'
	});


/*	$('.leftarrawTickle').on('mousedown touchstart',function() {		
		animateLeftDirtickle();
		
	}).on('mouseup mouseleave touchend',function() {
		//alert('l')
		isLeftMousedown = false;
	});
	$('.rightarrawTickle').on('mousedown touchstart',function() {
		animateRightDirtickle();
		
	}).on('mouseup mouseleave touchend',function() {
		isRightMousedown = false;
	});*/
}

var clsPoponLTIreceive = function()
{
	
		 	   $('#reviewAnswer').show();
		       $('#closePopup, #filingRules, #help, #demonstration, #videowalkthrough').hide();
			   $('#resultpage').hide();
			   $('.subpgpopup').css({'height':'450px'});
			   $('.fbtn p').removeClass('active'); 
               updatePercentage();			   
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
			var responseTo;
			if(value.length>0){	
				
				responseTo = getElement(index)
				responseTo.attr('data',1);		
				responseTo.off('click').on('click',showRelavPanel);
				getInx=index;
				changeFolderImg();
			}
			
			
		}
		
	});
}

var getElement = function(aIndex){
	var returnElem;
	if(aIndex >= parseInt($('.dragareatickle').children().length)){	
					var redc = aIndex - parseInt($('.dragareatickle').children().length)	
					returnElem = $('.dragarea .dragtooldiv').eq(redc);
			//console.log('placed '+redc);
	}else{
		returnElem = $('.dragareatickle .dragtooldiv').eq(aIndex);			
	}
	return returnElem;
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
		moveLeftSide();
		 clear= setInterval(function() {
		 highlightresetfolder()
			 $(ui.helper).css({opacity:0.5});
			//moveLeftSide();
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

var animateRightDirtickle = function(ui) {
	strTop2 = $('.dragareaalltickle').scrollTop();
	if(isRightArrEnable) {
		isRightMousedown = true;
		window.clearInterval(clear)
		moveRightSidetickle();
		 clear= setInterval(function() {
			 highlightresetfolder()
			  $(ui.helper).css({opacity:0.5});
			//moveRightSidetickle();
			$('.dragtooldiv').removeClass('hvr');
			strTop2 = strTop2+10;
			if(strTop2 <=maxScrollTop2){
				$('.dragareaalltickle').scrollTop(parseInt(strTop2));
					}else{
						$('.dragareaalltickle').scrollTop(maxScrollTop2);
						clearInterval(clear);
						$('#scrollthumb2').css('top',maxTop2)
				}
		},50);
	}
}

var animateLeftDirtickle = function(ui) {
	strTop2 = $('.dragareaalltickle').scrollTop();
	if(isLeftArrEnable) {
		isLeftMousedown = true;
		window.clearInterval(clear)
		moveLeftSidetickle();
		 clear= setInterval(function() {
		 //highlightresetfolder()
			 $(ui.helper).css({opacity:0.5});
			// moveLeftSidetickle();
			$('.dragtooldiv').removeClass('hvr');
			strTop2 = strTop2-10;
			if(strTop2 >=0){
						
						$('.dragareaalltickle').scrollTop(parseInt(strTop2));
						}else{
							$('.dragareaalltickle').scrollTop(0);
							clearInterval(clear);
						}
		},50);
	}
}

var toggleArrow = function() {
	toggleArrowmain()
	toggleArrowtickle()
}
var toggleArrowmain = function() {
	folderarrange()
	
	if(firsteq  == 0) {
		window.clearInterval(clear);
		isLeftMousedown = false;
		isLeftArrEnable = false;
	}
	else if(lasteq == totalfolder-1) {  //-952  -1564
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
	isLeftArrEnable = true, isRightArrEnable = true;	
}

var toggleArrowtickle = function() {
	folderarrangetickle()
	
	if(firsteq  == 0) {
		window.clearInterval(clear);;
		isLeftMousedown = false;
		isLeftArrEnable = false;
//		$(".leftarraw").off('click').css({opacity:'1',cursor:'default'});
	}
	else if(lasteq == totalfolder-1) {  //-952  -1564
		window.clearInterval(clear);
		isRightMousedown = false;
		isRightArrEnable = false;
		$(".rightarrawTickle").off('click').css({opacity:'0.5',cursor:'default'});
	}
	else {
		isLeftArrEnable = true, isRightArrEnable = true;
		$(".leftarrawTickle").off('click').on('click',moveLeftSidetickle).css({opacity:'1.0',cursor:'pointer'});
		$(".rightarrawTickle").off('click').on('click',moveRightSidetickle).css({opacity:'1.0',cursor:'pointer'});
	}	
	isLeftArrEnable = true, isRightArrEnable = true;	
}

var folderarrange = function(){
	totalfolder = $('.dragarea').children().length;
	firsteq = $('.dragarea').children().filter(':visible').eq(0).index();
	lasteq  = $('.dragarea').children().filter(':visible').eq($('.dragarea').children().filter(':visible').length-1).index();
}

var folderarrangetickle = function(){
	totalfolder = $('.dragareatickle').children().length;
	firsteq = $('.dragareatickle').children().filter(':visible').eq(0).index();
	lasteq  = $('.dragareatickle').children().filter(':visible').eq($('.dragareatickle').children().filter(':visible').length-1).index();
}

var filterfun = function(){
	console.log($('.dragarea').children().filter(':visible').length);
	console.log('first '+$('.dragarea').children().filter(':visible').eq(0).index());
	console.log('LAST '+$('.dragarea').children().filter(':visible').eq($('.dragarea').children().filter(':visible').length).index());
}

var moveLeftSide = function() {

	if(isLeftMousedown) {
		if($('.dragarea').scrollTop()>0){
			currentAnimPos = $('.dragarea').scrollTop()

			currentAnimPos-=15;
			$('.dragarea').scrollTop(currentAnimPos)
			updateScroll();
		}
	}else {
		window.clearInterval(clear);
	}
}
var moveRightSide = function() {
	
	if(isRightMousedown) {
		
		
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

var moveLeftSidetickle = function() {

	if(isLeftMousedown) {
		if($('.dragareatickle').scrollTop()>0){
			currentAnimPos = $('.dragareatickle').scrollTop()

			currentAnimPos-=15;
			$('.dragareatickle').scrollTop(currentAnimPos)
			updateScroll();
		}
	}else {
		window.clearInterval(clear);
	}
}

var moveRightSidetickle = function() {
	
	if(isRightMousedown) {
		
		
		{
			currentAnimPos = $('.dragareatickle').scrollTop()
			currentAnimPos+=15;
			$('.dragareatickle').scrollTop(currentAnimPos)
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
var jobTwoLen = 0;
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
	
	$.each(dataRecd,function(index,value){
		value.order=index+','+index;
		if(value.job != 1){
			jobTwoLen++;
		}
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
		 if(jobTwoLen==1){
			 $('.next,.nextmin').off('click').css({opacity:'0.5',cursor:'default'});
			 $('.prev,.prevmin').off('click').css({opacity:'0.5',cursor:'default'});
		 }
	 }
	else if(currQues==jobTwoLen-1){
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

var findnexttickle = function(a,b)
{
	var initnum =0;
	while(initnum < tickleDrop.length)
	{
		if(initnum != tickleDrop[initnum])
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
		storeCrossRef(crosCount);
		
	}else if($('.simworkarea ').hasClass('scaleCard') && (dataRecd[curVal].tickleUnit.length > 0)){
		
		$('.tickleContainer').css('opacity','1');
		$('.nextTickle, .prevTickle').css('opacity','0.8')
		$('.prev, .next, .simworkarea, .crossreferenceContainter').css({'opacity':'0.2','color':'red'});
		findnexttickle(tickleDrop, dataRecd[curVal].tickleUnit.length);
		tickleCount =0;
		storeTickle(tickleCount);
		
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
	getDroppedTickleValues();
	if($('.simworkarea ').hasClass('scaleCard') && clost.length > 0)
	{		
			crossRefCard();
			crosCount = clost[0];
			storeCrossRef(crosCount);			
	}
	else if($('.simworkarea ').hasClass('scaleCard') && tickleclost.length > 0){
		crossRefCard();
			tickleCount = tickleclost[0];
			storeTickle(tickleCount);
	}
	else{
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
	getDroppedTickleValues();
	if($('.simworkarea ').hasClass('scaleCard') && clost.length > 0)
	{				
		$('.prev, .next').css('opacity','0.2');
		$('.crossreferenceContainter').css('opacity','1');	
		
		crosCount = clost[clost.length-1];
		storeCrossRef(crosCount);		
	}else if($('.simworkarea ').hasClass('scaleCard') && tickleclost.length > 0){
			$('.prev, .next').css('opacity','0.2');
		    $('.tickleContainer').css('opacity','1');	
			tickleCount = tickleclost[tickleclost.length-1];
			storeTickle(tickleCount);
	}
	hideshowXRex();
	startToPlay('alphabeticSimulation',0)
}
var hideshowXRex = function(){
	        if(dataRecd[curVal].crossUnit.length!=0) {
					
					if(!$('.simworkarea ').hasClass('scaleCard')){
						$('.crossreferenceContainter').css({visibility:'visible'});
						$('.tickleContainer').css({visibility:'visible'});
						$('.simworkAreaOff,.offSteps,.crossreference').show();	
						console.log('2')
						}			
					
			}else {
					$('.simworkAreaOff,.offSteps').hide();
					$('.crossreferenceContainter').css({visibility:'hidden'});
			}
			if(dataRecd[curVal].tickleUnit.length!=0){
				$('.tcent .mCSB_container').html(simaction.ticklefile);
				    if(!$('.simworkarea ').hasClass('scaleCard')){
						$('.tickleContainer').css({visibility:'visible'});
					    
						$('.simworkAreaOff,.offSteps,.ticklefile').show();	
						}	
				
				
			}else{
					$('.simworkAreaOff,.offSteps').hide();
					$('.tickleContainer').css({visibility:'hidden'});	
							        
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
				 // $('.subinput').css('z-index','2');
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
		
	 
		//$('#informationIcon').off('click').on('click',informationPanel);
		
		
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
	if(dataRecd[curVal].crossRefIP!='d')
		$('[name=crossreference]').css({opacity:'1',cusor:'pointer'});
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
        
		currentId = $(this).attr('name');	
		currentId="file";
	//	console.log(currentId);
	
	onsitemapView = 1;
	if($('.fileBtn').attr('data-click-state') == 1) {
		
		hideFolder();		
	
		//chngQues(editArr[0])
		
	} else {
		
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
	
		//currQues = editArr.length-1;	
}

tempClone = [];
var audioCorrect=0;
var onsitemapView=0;
var showFolder = function(){
popVisited = true;
	onsitemapView=1;
	$('.fileBtn').attr('data-click-state', 1);
	$('.fileBtn').addClass('btnclkClr');
	$('.simworkarea ').addClass('scaleCard');
	$('.crossreferenceContainter').addClass('crfScale');
    $('.tickleContainer').addClass('tickleScale');
	//$('.crossreferenceContainter, .prevCros, .nextCros').css('opacity','0.2');
	$('.prev,.prevCros, .prevTickle').addClass('scalePrev');
	$('.next,.nextCros, .nextTickle').addClass('scaleNext');
	//$('.prevCros, .nextCros').css('top','400px');
	$('.toolsarea').show();
	$('.draggerForParent').hide();
	$('.dragger').show();
	$('.maximizeIcon').show();
	$('.codeEditIcon').show();
	$('.crfRefMin, .xRefMove, .tickleMin').hide();
	$('.simbtncontiner').hide();
	//$('.tcent').css({marginLeft: '370px',width: '540px',height:'42px',marginTop: '7px'});
	//$('.containersubheadone').css({marginLeft: '240px',marginTop: '-20px',fontSize: '17pt'});
	
	$('.tcent').css({marginLeft: '370px',width: '540px',height:'40px',marginTop: '0px'});
	$('.containersubheadone').css({marginLeft: '240px',marginTop: '-27px',fontSize: '20px'});	
	$('.crossreferenceContainter, .tickleContainer').css({height:'320px'});
	$('#inspectid').hide();
	$('#tooltip').hide();
	$('#noOFCrds, #noofTicklecrds, .choseactn').hide();
	$('.simworkcontainer > p').css({marginLeft: '-17px'});
	$('.inspectSimbtn').css('background','#5a4a42');
	 //$('.next, .prev').hide(); 
	 $('#scaleCrdNo').show();
	crosCount = 0;
	tickleCount = 0;
	//alert(uniqArr+' e'+editArr);
	uniqArr.concat(editArr);
	uniqArr = uniqArr.concat(editArr).slice();
	uniqArr.sort(function(a,b){ return a-b;});
	editArr = [];
	
		if(onsitemapView){
			$('.next, .prev').hide(); 
		}
	updateCloneArr();
	cloneCnt=0;
	currQues=0;
	chngQues(0);		
	showMainAndCros();
	$('.prevCros, .nextCros, .prevTickle, .nextTickle').show();
	
  $('.track2').animate({bottom:'0px'});
			/*$('.dragarea,.dragareatickle').animate({
			   scrollTop: $('.dragarea')[0].scrollHeight+200,
			   //scrollTop: $('#your-id').offset().top
			   //scrollTop: $('.your-class').offset().top
			}, 'slow');
			 $('.enscroll-track track1').animate({
			   scrollTop: $('.enscroll-track track1')[0].scrollHeight,
			   //scrollTop: $('#your-id').offset().top
			   //scrollTop: $('.your-class').offset().top
			}, 'slow');*/
	/*if(dataRecd[curVal].crossUnit.length!=0) {
		$('.simworkarea ').addClass('withCrf')
	}*/
	maxHgt = $('.dragarea').children().length*15;
	updateScroll();
	
	audioCorrect=1;
	
setTimeout(function(){
	scrollfun()
	scrollfun2()
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
					
					
	$('.dragareaalltickle').scroll(function(){
					
						
				scrollPos2 = $('.dragareaalltickle').scrollTop();
					
					if(stattag2)
					{
					$( "#scrollthumb2" ).css('top', (scrollPos2/maxScrollTop2) * scrolldif2)
					if($('.dragareaalltickle').scrollTop() > maxScrollTop2){$('.dragareaalltickle').scrollTop(20000)}
					}
			})
					
					
	$( "#scrollthumb" ).draggable({start:function(){stattag = false},stop:function(){stattag = true}, drag: dragfun, axis: "y", containment: "parent" });
	
	$( "#scrollthumb2" ).draggable({start:function(){stattag2 = false},stop:function(){stattag2 = true}, drag: dragfun2, axis: "y", containment: "parent" });
	
	},100)
	$('.offSteps').hide();
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
			
			$.each(val.tickleUnit,function(i,v){
				if(!v.dropped)	
					cloneArr.push('t_'+ord+'_'+i);
				else
					v.revtBak = cloneArr.length;
					tempClone.push('t_'+ord+'_'+i);
				updateDrop(v);
			});
		
	});
}
var nondropedarr = [];
var job_c = []
var updateDrop = function(obj){
	if(obj.job != 1){
		job_c.push('1')
	}
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
	$('.fileBtn').attr('data-click-state', 0);
		$('.fileBtn').removeClass('btnclkClr');
	//console.log('h')
	$('.simworkarea ').removeClass('scaleCard');
	$('.crossreferenceContainter').removeClass('crfScale');
	$('.tickleContainer').removeClass('tickleScale');
	$('.prev,.prevCros, .prevTickle').removeClass('scalePrev');
	$('.next,.nextCros, .nextTickle').removeClass('scaleNext');	
	$('.toolsarea').hide();
	$('.draggerForParent').show();
	$('.dragger').hide();
	$('.maximizeIcon').hide();
	$('.modalGuide, .modal').hide();
	$('.codeEditIcon,#scaleCrdNo').hide();
	$('.crossbtnlist,.clsCrosRef,.crfRefMin,.choseactn,.xRefMove').show();
	$('.ticklebtnlist,.clsTickleCard,.tickleMin,.choseactn').show();
	$('.simbtncontiner,.simworkarea').show();
	
	$('.tcent').css({marginLeft: '75px',width: '800px'});
	$('.containersubheadone').css({marginLeft: '-63px',marginTop: '-13px',fontSize: '19pt'});
	//$('#inspectid').hide();
	$('.simworkarea').removeClass('withCrf').css('opacity','1');
    $('#noOFCrds').show();
	$('#noofTicklecrds').show();
	$('#noOFCrds').html('CROSS-REFERENCE SHEET(S)');;
	$('#noofTicklecrds').html('TICKLER CARD(S)');
	$('.simworkcontainer > p').css({marginLeft: '160px'});
	$('#tooltip').hide();
	$('.crossreferenceContainter').css('opacity','1');
	$('.tickleContainer').css('opacity','1');
		$('.nextCros, .prevCros, .nextTickle, .prevTickle').show();
		
	    curNav = 'none';
	    chngQues(currQues);
		
		
		
		$('.crfRefMin, .tickleMin').attr('data',0);
		//$('#noOFCrds').hide();
		$('.crfRefMin, .tickleMin').css({background: 'url(./assets/images/maximize.png) no-repeat'});
		
	audioCorrect=0;
	
}
var enableCrosNav = function(crosCount) {	
	
//	console.log(cloneArr.indexOf(tempClone[cloneCnt])+' '+cloneCnt);
	if(cloneCnt == 0){		
		 $('.prevCros').off('click').css({opacity:'0.5',cursor:'default'});
		 $('.nextCros').off('click').on('click', getCrosNext).css({opacity:'1.0',cursor:'pointer'});
		 if(cloneArr.length==1){
			 $('.prevCros').off('click').css({opacity:'0.5',cursor:'default'});
			 $('.nextCros').off('click').css({opacity:'0.5',cursor:'default'});
		 }			
	 }
	else if(cloneCnt == cloneArr.length-1){
		
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

var getTickleNext = function() {
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
		
	var xx= [];
	var mveNxt = nondropedarr.filter(function(item,index,arr){
			if(index>cloneCnt){
				xx.push(index);
			}
	});
	
	cloneCnt=xx[0];
	showMainAndCros();	
}



var prevCard=0;
var showMainAndCros = function(){
	
	enableCrosNav();
	//enableTickleNav();
	var getMX, mainCrd;
	if(cloneArr.length>0){
//	console.log(tempClone+' '+cloneArr);
	if(cloneArr[cloneCnt].indexOf('m') != -1){
		$('.simworkarea').css({visibility:'visible'});
		$('.crossreferenceContainter').css({visibility:'hidden'});
			getMX = cloneArr[cloneCnt].split('_');
			currQues = getMX[1];

					
	}else if(cloneArr[cloneCnt].indexOf('c') != -1){
		$('.simworkarea,.simworkarea .mCustomScrollbar,.tickleContainer').css({visibility:'hidden'});
		$('.crossreferenceContainter').css({visibility:'visible'});
			getMX = cloneArr[cloneCnt].split('_');
			currQues = getMX[1];
			crosCount = getMX[2];	
			
	}else{
		$('.simworkarea,.simworkarea .mCustomScrollbar,.crossreferenceContainter').css({visibility:'hidden'});
		$('.tickleContainer').css({visibility:'visible'});
			getMX = cloneArr[cloneCnt].split('_');
			currQues = getMX[1];
			tickleCount = getMX[2];
	}
//console.log(currQues+' '+cloneCnt+' '+cloneArr[cloneCnt])	
	chngQues(currQues);		
	
//console.log(currQues+' '+crosCount+' '+cloneCnt)
	if(cloneArr[cloneCnt].indexOf('m') != -1){
		//console.log($('#toolsarea').css('display'));
		prevCard = $('.simworkarea').clone();
		$('.simworkarea').css({visibility:'visible'});
		$('.crossreferenceContainter, .tickleContainer').css({visibility:'hidden'});
	}
	else if(cloneArr[cloneCnt].indexOf('c') != -1){
		$('.simworkarea,.tickleContainer').css({visibility:'hidden'});
		
		$('.simworkarea').children().css({visibility:'hidden'})
		prevCard = $('.crossreferenceContainter').clone();
		$('.crossreferenceContainter').css({visibility:'visible'});
	}else{
	
		$('.simworkarea,.crossreferenceContainter').css({visibility:'hidden'});
		
		$('.simworkarea').children().css({visibility:'hidden'})
		prevCard = $('.tickleContainer').clone();
		$('.tickleContainer').css({visibility:'visible'});
	/*	$('.tcent').css({'margin-left': '80px', 'width': '800px'});	
	$('.containersubheadone').css({marginLeft: '0px',marginTop: '-22px',fontSize: '19pt'});*/
	//$('.titleLine').hide();	

	}
	//$('#scaleCrdNo').html(''+(tempClone.indexOf(cloneArr[cloneCnt])+1)+' / '+tempClone.length);
	
		$('#createGuidebtn,.addFldrbtn,#fileHint').css({opacity:1,cursor:'pointer'});
		
	$('.tcent .mCSB_container').html(simaction.file);
	$('.containersubheadone').html(simactionTitle.file);
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
			dataRecd[curVal].crossRefIP = 1;
			//jQuery('input:first').focus();
			
		}
		dragcardcheck();
		
	
	//$('#informationIcon').off('click').on('click',informationPanel);
	$('.clsCrosRef').off('click').on('click',delClk).css({opacity:'1'});
  	if(titleNew !== 'crossreference')
	{
	startToPlay('crossreference',0,'cr');
	}
	}
}


var ticklerFileBtnEventCalling = function(){
	
	inspecthidefun();
		currentIds = $(this).attr('name');	
		currentId="ticklefile";
		$('.tcent .mCSB_container').html(simaction[currentIds])
		
		$(".simworkcontainer #tickledate").dateDropdowns({'displayFormat':'md'}); 
		$(".simworkcontainer #ticklerecorddate").dateDropdowns({submitFieldName: 'dateSelect1',displayFormat:'md'});
          tickleCardAct();
    	if($('.ticklefile').css('display') == 'none'){
		     $('.ticklefile').css('display','block');
			 enableDrag();
			 	$('.ticklenameing .tickle_unit').val('');
	       dataRecd[curVal].TickleIP = 1;	
	   
		}
      $('.clsTickleCard').off('click').on('click',delTickleClk).css({opacity:'1'});
      
	if(titleNew !== 'ticklefile')
	{
		startToPlay('ticklefile',0,'tr');
	} 
}

var delClk = function(){
	

		if($('.crossreference').css('display') != 'none'){
			deleteCrosRef();	
		if(dataRecd[curVal].crossUnit.length ==0){	
			//$('.crossreference').css('display', 'none')
			$('[name=crossreference]').css('background','#5a4a42');
			dataRecd[curVal].crossRefIP = 0;
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
	
var delTickleClk = function(){
	

		if($('.ticklefile').css('display') != 'none'){
			deleteTickleCard();	
		if(dataRecd[curVal].tickleUnit.length ==0){	
			//$('.crossreference').css('display', 'none')
			$('[name=ticklefile]').css('background','#5a4a42');
			dataRecd[curVal].TickleIP = 0;
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

var deleteTickleCard = function(){
			
		getDroppedTickleValues();
		if(tickleclost.length != 0){
			 if(titleNew !== 'ticklefile')
	         {
	              startToPlay('tickle',0,'tr');
			      $('.tcent .mCSB_container').html(simaction.ticklefile);
	         }
			$('.ticklebtn1').eq(tickleCount).css({width:'0px'});
			$('.tickle_unit').animate({color:'#fff'}, function(){$('.tickle_unit').css({color:'#000'})});
			
			//$('.crossbtn1').eq(crosCount).hide('slide',{direction:'left'},1000)//("drop",{direction: "left"},800);
			//$(".crossbtn1").eq(crosCount).show( "fold", {horizFirst: true}, 2000 );
			//alert($('.crossreference').effect())
			//$($('.crossreference').clone()).appendTo('body');
			$('.ticklefile').stop().effect("transfer",{ to: $('.clsTickleCard') }, 500,function(){storeTickle(tickleCount);});
			dataRecd[curVal].tickleUnit.splice(tickleCount,1);	
	        if($('.ticklebtn1').length >tickleLimit){	
				if(xMove != 0){
					xMove += 39;
					animateXlst();
				}
			}
			if(dataRecd[curVal].tickleUnit.length!=0){
					
				tickleCount = closestOnTickleDrop(tickleCount);	
				
			}
			
			
		}
		
		if(dataRecd[curVal].tickleUnit.length == 0){
			$('.ticklefile').draggable({disabled:true}).css({opacity:'0.5'}).prop("readonly", true);
			$('.clsTickleCard').off('click').css({opacity:'0.5'});
			$('.tickleCardOff').show();
			 $('.tickleContainer').css('visibility','hidden');
			$('.tcent .mCSB_container').html(simaction.alphabeticSimulation);
			$('.containersubheadone').html(simactionTitle.alphabeticSimulation);
			
		}		
			//alert(crosCount);
			
			
		
			//createCrosLables();				
}

var emptyView=0;
var firstTime = true;
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
	if((currentId == 'help' || currentId == 'sitemap' || currentId == 'filingRules' || currentId == 'generalinfoSim' ) && newArr.length==0){
			
			xx = [];
	if((currentId == 'help' && currentidarr.indexOf('sitemap')>-1) || (currentId == 'sitemap' && currentidarr.indexOf('help')>-1) ||(currentidarr.indexOf('sitemap')>-1 || currentidarr.indexOf('help')>-1 || currentId == 'filingRules') || currentId == 'help' || currentId == 'generalinfoSim'){
				
				progressbarFun();	
				
				if(!alphabeticSimulationvisite && currentId == 'help' && (currentidarr[currentidarr.length-2] == 'demonstration' || currentidarr[currentidarr.length-2] == 'videowalkthrough' || currentidarr[currentidarr.length-2] == 'generalinfoSim')){		
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
		if(firstTime){	
			firstTime = false;
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
		}
			//playAudio('alphabeticSimulation',0);
			if($(this).hasClass('codeScreen')){
			hideFolder();
			if(dataRecd[currQues].tickleUnit.length>0){
			$('.tickleContainer').css({visibility:'visible'});
			}else{
			$('.tickleContainer').css({visibility:'hidden'});
			}
			if(cloneArr.length == 0){
				$('.tickleContainer').css({visibility:'hidden'});
			}
			$('#alphabeticSimulation').show();
		}else if($(this).hasClass('fileScreen')){
		   showFolder();
			$('#alphabeticSimulation').show();
 
		}
			
		if(audioCorrect){	
		scrollfun()
		scrollfun2()
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
			},1000);*/
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
	   
	     if(currentId == 'reviewAnswer'){		  
	     $('#submitconfirmation').hide();	
	     $('#alphabeticSimulation').show();
	     $('#closePopup').css({top: '75px','right':'20px'});
	     $('.brandIcon').css('cursor','default');
	     $('.fbtn p').eq(0).css({opacity:'0.5'}).css('cursor','default');
		//$('#closePopup img').css({height:'24px',width:'24px'})
	     $('#dummySitemap').show();
	      reviewAnsClicked = true;
	     }else if(currentId =='overview' || currentId == 'introduction' || currentId == 'directionsforjobs' || currentId == 'generalinfo' || currentId == 'generalinfoSim'){
		    $('#closePopup').css({top: '100px','right':'192px'});
		 }else if(currentId =='videowalkthrough' || currentId == 'demonstration'){
		   $('#closePopup').css({top: '65px','right':'170px'});
	     }else{
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
		startToPlay('stop', 0)
		
		$('#resultpage').css('visibility','visible');
		pushUser()	
		$.each(dataRecd,function(i,v){
				
				if(v.hintv>1){
					if(scoreCnt!=0)
						scoreCnt-=1;					
				}
			});
		//console.log(codescore, folderscore, inspectscore, folderGuideextraScore)      
        //console.log(totcodescore, totfolderscore, totinspectscore, (totalfolderScore*2))
		recordSimScore = (((Number(codescore) + Number(folderscore) + Number(inspectscore) + Number(folderGuideextraScore)) / (Number(totcodescore) + Number(totfolderscore) + Number(totinspectscore) + Number(totalfolderScore*2))) * 100).toFixed(2);
		recordSimScore = recordSimScore > 100? 100: recordSimScore;
		recordSimScore = recordSimScore < 0? 0: recordSimScore;
		$('#resultpage .scoreDetails span').text(recordSimScore+'%');	
		$('#resultpage .timeDetails span').html(recordSimTimer);
		$('#ctr0').append('<div class="overallScr"><div id="codeScr" class="scoring"><span>Code Score</span><span>: '+codescore+'/'+totcodescore+'</span></div><div id="folderScr" class="scoring"><span>Folder Score</span><span>: '+folderscore+'/'+totfolderscore+'</span></div></div>')	

			setTimeout(function(){
			$('.clkheretocls').off('click').on('click',clsCnfPopup);
			},30);
			
			var errorst ="";
			if(codedIncorrect!= 0)
			{
				errorst += codedIncorrect + " cards were incorrectly coded.<br/>"
			}
			if(placedIncorrect!= 0)
			{
				errorst += placedIncorrect + " cards were incorrectly placed.<br/>"
			}
			if(crosRefNotCrt!= 0)
			{
				errorst += 'cross-reference card was not creaded for '+crosRefNotCrt + 'cards.<br/>' 
			}
			if(crosNotReq!= 0)
			{
				errorst += crosNotReq+' cross-reference card was created which is not required' 
			}
			recordSimError = errorst;
			 if (!ltirecive) {
                $.each(dataRecd, function (di, dv) {
                    $.each(dv.crossUnit, function (i, v) {
                        // console.log('befr '+JSON.stringify(dv.crossUnit));
                        if (v.submt) {


                            dv.crossUnit.splice(i, 3);

                        //    console.log(i+' updated '+JSON.stringify(dv));
                            return false;
                        }
                        //console.log('outer '+JSON.stringify(dv.crossUnit));
                    });
					
					 $.each(dv.tickleUnit, function (i, v) {
                        // console.log('befr '+JSON.stringify(dv.crossUnit));
                        if (v.submt) {


                           dv.tickleUnit.splice(i, 3);

                        //    console.log(i+' updatedtick '+JSON.stringify(dv));
                            return false;
                        }
                        //console.log('outer '+JSON.stringify(dv.crossUnit));
                    });
					
                });
				 sentDataReportOtLTI();
            }
			//exitSendDataToLTI();
	   }
	   if(currentId == 'exit')
	   {
		  if(finalCls || ltirecive){
			   
			   clsCnfPopup();
			   
		   }else{
			   exitSendDataToLTI();  
		   }
		
	   }
	  		
progressbarFun();		
}


var progressbarFun = function(){
	
	if(currentId =='overview' || currentId == 'introduction' || currentId == 'directionsforjobs' || currentId == 'mainpage' 
		|| currentId == 'demonstration' || currentId == 'sitemap' || currentId == 'help' || currentId == 'filingRules' || currentId == 'demonstration' || currentId == 'videowalkthrough' || currentId == 'generalinfo' || currentId == 'generalinfoSim' )
		{
			$('#progressBar').hide();
		   
		}else{
			
			$('#progressBar').show();
			
		}
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
	if(dataRecd[curVal].job != 1){
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
//			console.log(dataRecd[curVal].subinputval+' '+dataRecd[curVal].subjectinput)
			if(dataRecd[curVal].alignClass[splt2[0]].indexOf('substeping')>-1){
				userAns = dataRecd[curVal].subinputval[splt[1]]	
			}
			
			//console.log(relAns+' cc '+ userAns, $('.simworkarea  #latteradd'+i).attr('class'))
			//console.log(dataRecd[curVal].numbering[i]+' ansnum '+dataRecd[curVal].anumbering[i]) ;
			//console.log(splt2+'b')
			//console.log(userAns+' --- '+spacewostring[splt2[0]][splt2[1]][splt2[2]/2]+' '+dataRecd[curVal].subinputval);
			var usernumcheck =  splt.pop();
			var answnumcheck =  splt2.pop()
//						console.log(splt+' '+splt2, splt.toString()==splt2.toString())
//console.log('slash '+dataRecd[curVal].slash[splt[0][splt[1]]]);			
			
			if(typeof userAns != 'undefined' && userAns.replace(/\s/g,'#')==relAns.replace(/\s/g,'#') && splt.toString() == splt2.toString() )
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

	scoreCorr=0;
	
	$('.scrbtn').text(score);
	}
}


var updatePercentage = function() {
//		console.log(tempClone+' '+cloneArr+' '+nondropedarr)
		progressBar( (tempClone.length-cloneArr.length), $('#progressBar'));
		$('#simbtncontiner div').removeClass();
		$(this).addClass('active');
}
	
function progressBar(percent, $element) {
	var progressBarWidth =percent * $element.width() / tempClone.length;
	var perct = parseInt(percent/tempClone.length*100);
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
	//console.log(audNam, seq)
	
		
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
//	console.log($('#alphabeticSimulation').css('display'),$('.subpage').filter(':visible').attr('id'),typeof $('.subpage').filter(':visible').attr('id') == 'undefined')
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

/* hint audio*/

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

/* hint audio*/

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
            
		var pdfscr = recordSimScore;
		$('.detReviewScore,.detReviewTime,.printBtn').show();
		$('#newdivParent').remove();
		$('<div/>',{id:'newdivParent'}).appendTo('body');
		$('.printBtn').off('click').on('click', function() {		
		$('.newdiv').remove();			
		$('<div/>',{class:'newdiv'}).appendTo('#newdivParent').append($('#ctr0').clone());	
        $('<div/>',{class:'pdfHead'}).appendTo('.newdiv').html('Job 7: Correspondence Filing: Rules 1-10 and<br/>Tickler File Usage');
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
					windowContent += '<body style="overflow:scroll;">'					
					
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