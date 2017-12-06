var idx; //to increse index of drop area
var indexId;
var getInx;
var prevIndex, prevInTxt;
var editDatInd;
var removedElem; 
var orginalPos;
var dropLef;
var getClass;
var finalPage=0;
var currAlphabet, currLetter, setTim;
var toRemArr = [] , dlt = [], goDrag = false;
var timeOut;
var md = 0;
var clost =[],crosDrop = [];
var scoreCnt=0;
var scoreArr=[];
var dragging = false; //  to prevent click while dragging
var inDevice =false;
var lastPos=0;
var holdUiPos;
var is_android = navigator.userAgent.match(/Android/i);
var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;


var enableDrag = function() {	

	$('.crossreference,.simworkarea').draggable({
								cursorAt : [0, 0],
								zIndex:500,								
								revert:'invalid',
								helper:'clone',
								start:setCursor,
								stop:resetScale,
								drag:changCursor,
								containment:'.cover',
								refreshPositions: true,
								cancel:'.clsCrosRef',								
								cursor:'move',
								handle:'.dragger'	
								});
								enableDrop();
								
								$('.simworkarea').draggable({disabled:true});
								clearTimeout(setTim);
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			//$('.simworkarea').draggable({cancel:'.nameing'});
			inDevice =true;
		}
		
        if((navigator.userAgent.match(/iPad/i))) {
			
           $('.tcent').css({height:'43px'});
         }
			
	//$('.crossreference').draggable({disabled:true});	
		dragcardcheck();
	
	//$.eachdataRecd[curVal].crossUnit
	
	/*if(dataRecd[curVal].crossUnit!=""){
		$('.crossreference').draggable({disabled:false});
	}else{
		$('.crossreference').draggable({disabled:true});
	}*/
	 var regExp = /^[A-Za-z0-9]+$/;
	$('.crossreference').draggable({disabled:true});
	var dragVal = true;
	$('.crossreference .cross_unit').each(function(i,v){		
		if($(this).val().trim()!="")
		
			dragVal = true;		
	});	
	if(dragVal)
		$('.crossreference').draggable({disabled:false});
	
	
}
var checkCrosRefDup = function(){
	
	var getCroUnit = dataRecd[curVal].crossUnit.slice();
	var areAnyDuplicates = false;
	getCroUnit.map(function(obj,index) {
		
		return (JSON.stringify(obj.arr));
	}).forEach(function (element, index, arr) {
			//console.log(element+' '+index, crosCount+' '+arr, JSON.stringify(arr[index]), JSON.stringify(element)), (JSON.stringify(arr[index]) ==  JSON.stringify(element));

		//arr = arr.replace("null","");
		//console.log(arr)
		if (arr.indexOf(element) !== index) {
      	  areAnyDuplicates = true;
    	}
	});
	
}
var dragcardcheck = function(){
	$(document).on("mouseup", function () {

    

	});
	
	if( skipstep)
	{	
		
		/*if( /Android/i.test(navigator.userAgent)) {	
		
			if(currentId!='Code' && currentId!='uIdentification' && currentId!='uNumbering'){
			$('.simworkarea').draggable({disabled:false});
			}
			else
			{
				$('.simworkarea').draggable({disabled:true});
			}
		}else{
			$('.simworkarea').draggable({disabled:false});
		}*/
		
		$('.simworkarea').draggable({disabled:false});
		
		
		enableDrop();
	}else{	
		clearTimeout(timeOut);
		$('.simworkarea').draggable({disabled:true});
	}

}

var storeJobOne = function() {
	var folLoc, folOrder;
	$.each(dataRecdJob,function(index, value){
		
		value.order=index+','+index;
	if(value.folderinfo.length>0){ 
		folLoc = value.folderinfo[0];
		folOrder = value.folderinfo[1];	
		
		
		if(typeof(recordIndex[[folLoc]])=='undefined'){
			recordIndex[[folLoc]] = new Array();
			$('#dragtooldiv_'+folLoc).attr('data',1);
		}
		
		recordIndex[[folLoc]][folOrder] = value;
		
		
		}
		
		if(typeof value.crossAns != 'undefined') {
			
			
			$.each(value.crossAns,function(inx,v){
			
			var crossAnsOdr = value.crossAns;	
			var insCrsInp = v[0];			
		
			folLoc = value.xfolderinfo[inx][0];
			folOrder = value.xfolderinfo[inx][1];	
				
			if(typeof(recordIndex[[folLoc]])=='undefined'){
				recordIndex[[folLoc]] = new Array();
				$('#dragtooldiv_'+folLoc).attr('data',1);
			}
			
			if(typeof(value.crossUnit[inx])=="undefined"){
				//value.crossUnit.push({arr:[],job:1});	
				value.crossUnit.push({arr:[],job:1,crosRefCount:0});				
			}
			for(i=0;i<insCrsInp.length;i++){
				
				value.crossUnit[inx].arr[i]=insCrsInp[i];
				
			}			
			
			value.crossUnit[inx].arr[9]=value.order;			


			recordIndex[[folLoc]][folOrder] = value.crossUnit[inx];		
			
			
		});
			
		}
		
	$('.dragtooldiv').eq(folLoc).off('click').on('click',showRelavPanel);
			getInx=folLoc;
			changeFolderImg();
	});
    
	
	
	$('.close').off('click').on('click',closePanel);
		chngQues(currQues);	
		
}
var storeJobTwo = function() {
	var folLoc, folOrder;
	
	$.each(dataRecd,function(index, value){
		
		value.order=index+','+index;
		
	if(value.folderinfo.length>0){ 
		folLoc = value.folderinfo[0];
		folOrder = value.folderinfo[1];			
		
		if(typeof(recordIndex[[folLoc]])=='undefined'){
			recordIndex[[folLoc]] = new Array();
			$('#dragtooldiv_'+folLoc).attr('data',1);
		}		
		recordIndex[[folLoc]][folOrder] = value;		
		
		}
		/*if(typeof value.crossAns != 'undefined') {
			
			var crossAnsOdr = value.crossAns;
			
			var insCrsInp = crossAnsOdr[0];		
			//if(index<=3)	
			{
			folLoc = value.folderinfo[0];
			folOrder = value.folderinfo[1];
			if(typeof(recordIndex[[folLoc]])=='undefined'){
				recordIndex[[folLoc]] = new Array();
				$('#dragtooldiv_'+folLoc).attr('data',1);
			}
			
			value.crossUnit={};
			
			value.crossUnit.arr[9]=value.order;
			
			
			recordIndex[[folLoc]][folOrder] = value.crossUnit;		
			
		}
			
		}*/
		
	$('.dragtooldiv').eq(folLoc).off('click').on('click',showRelavPanel);
			getInx=folLoc;
			changeFolderImg();
	});
    
	$.each(toRemArr,function(index, value){	
			if(uniqArr.indexOf(parseInt(value))>=0	){
				uniqArr.splice( $.inArray(value,uniqArr) ,1 );				
			}
		
	});

	
	$('.close').off('click').on('click',closePanel);
		chngQues(currQues);	
}
var setCursor = function(e,ui) {	
	  // shwCurrentElem();
		 $('.dragtooldiv').css({visibility:'visible'});
		   	$(this).draggable('instance').offset.click = {
            left: Math.floor(ui.helper.width() / 2),
            top: Math.floor(ui.helper.height() / 2)
         }; 
	$(ui.helper).find('.clsCrosRef').hide();		 
		
		$('.crossreference input').removeAttr('autofocus'); 
		$(this).find('.cross_unit').blur(); 
		$(ui.helper).find('*').css('cursor','move');                                                                                                                                                                                                                                                                                         
}



var changCursor = function(e,ui) {
	
var topstartpoint = 250;

	var xposition = window.innerWidth< 1000? e.pageX  : (e.pageX -(window.innerWidth-1000)/2); 
	
	var scalecard = Math.pow((parseInt(e.pageY)/topstartpoint),4);
	if(scalecard < 0.2) {scalecard = 0.2;}
	if(scalecard > 1) {scalecard = 1}
	
		$(ui.helper).css({transform:'scale('+scalecard+')',opacity:'1'});
	
	holdUiPos = ui.position.left;
	$(ui.helper).css({'cursor':'move'})
	
}


var resetScale = function(e,ui) {
	if(inDevice){	$( ".crossreference .cross_unit" ).prop( "disabled", false );}
	ui.helper.css({transform:'scale(1,1)',opacity:'1'});	 
		curNum=0;
}

var enableDrop = function() { 
	$('.dragtooldiv').droppable({drop:dropfolderindex});
}


getInxClk = 'none';
var dropfolderindex = function(e, ui) {

	var ctrlFlag = false;
	//console.log($(ui.draggable).attr)dragCrd
	if((holdUiPos<909 && holdUiPos>50 && $(ui.draggable).hasClass('dragCrd')) || (holdUiPos<520 && holdUiPos>-358 && $(ui.draggable).hasClass('simworkarea')) || (holdUiPos<748 && holdUiPos>-117 && $(ui.draggable).hasClass('crossreference'))){ctrlFlag = true;}
	if(ctrlFlag){
	$(ui.draggable).draggable({revert:false});
	getClass = ui.draggable;
	if(!$(getClass).hasClass("job1")){
	curNum=0;
	$('.close').off('click').on('click',closePanel);	
		getInx = $(this).index();			
	startClk();		
	indexId=$(this).children().eq(2);	
	var getData = $(this).attr('data');	
	if(getData!=1) {
		$(this).attr('data','1');		
		recordIndex[[getInx]] = new Array();
	}
	
		hintshowtag = false;
		$('#tooltip').hide();
		
	if($(getClass).hasClass("simworkarea")){		
			recordIndex[[getInx]].push(dataRecd[curVal]);	
			
			//checkRecdIndex(e,ui);	
			nameIdTemp ="";
			checkFinalCard();
	}else if($(getClass).hasClass("crossreference")){
			//ui.draggable.hide();
			nameIdTemp ="";
			
			dragcardcheck();			
			$.each(dataRecd[curVal].crossUnit,function(i,v){
				v.crosRefCount = i;
			});
			//dataRecd[curVal].crossUnit[crosCount].crosRefCount=crosCount;		
			dataRecd[curVal].crossUnit[crosCount].dropped=true;		
			dataRecd[curVal].crossUnit[crosCount].arr[9] = dataRecd[curVal].order;
			
			recordIndex[[getInx]].push(dataRecd[curVal].crossUnit[crosCount]);			
			
			$.each(dataRecd[curVal].crossUnit,function(i,v){						
							dataRecd[curVal].crossUnit[i].first=true;	
												
			});
			
			
			if(dataRecd[curVal].crossUnit.length-notDropped.length < 0)
			{$('.simworkcontainer .choseactn span').hide();
				$('.crossbtnBadge').hide();
				$('.choseactn').css('text-align','center');
			}
			else {
				
				$('.simworkcontainer .choseactn span').show(); 
				$('.crossbtnBadge').show();
				$('.choseactn').css('text-align','left');
			}
			$('.simworkcontainer .choseactn span').html('FILED CROSS-REFERENCES: '+(dataRecd[curVal].crossUnit.length-notDropped.length+1))
			
			
			if((dataRecd[curVal].crossUnit.length-notDropped.length)+1 == dataRecd[curVal].crossUnit.length)	{
				
				
				crosCount = closestOnDrop(crosCount);	
				storeCrossRef(crosCount);
				$('.crossreference').draggable({disabled:true}).css({opacity:'0.5'}).prop("readonly", true);
				$('.clsCrosRef').off('click').css({opacity:0.5,cursor:'default'});				
				$('.crossbtn1').eq(crosCount).removeClass('activeClk').off('click').css({opacity:'0.5',cursor:'default'});	
				$('.crossRefOff').hide();
				$('.crossreference .cross_unit').val('');
			}
			else{		
				crosCount = closestOnDrop(crosCount);				
				storeCrossRef(crosCount);
				$('.crossreference').draggable({disabled:false});
			}
			
			
			
	}else if(getInx != prevIndex){	
			if($(ui.draggable).hasClass('dragCrd')){
				toRemv = $(ui.draggable).closest('.swapAreaDrop').index();				
			}else{
				ui.draggable.remove();
			}
			$(ui.draggable).hide();
			console.log('ssss')
			$('.panelContainer').children().eq(toRemv).hide( "fold", {horizFirst: true }, 300,function(){$(this).remove();} );			
			
			recordIndex[[getInx]].push(recordIndex[[prevIndex]][toRemv]);		
			recordIndex[[prevIndex]].splice(toRemv,1);				
			//checkRecdIndex(e,ui);
			$('.sim').remove();
			$.each(recordIndex[[prevIndex]],function(i,v){
				$('<div/>',{id:'topOrder_'+i,class:'sim'}).appendTo('.panelContainer2').text(i+1);
			});
			
				//$('<div/>',{id:'topOrder_'+i,class:'sim'}).appendTo('.panelContainer2').text(i+1);
			//$('#topOrder_'+toRemv).remove();
			checkEmptyFolder(prevIndex,'prev');
			comeBack();	
		$('#totalCards').text('Total Cards: '+recordIndex[[currAlphabet]].length);
		$('#cloneContainer').hide();
	    
        $('.cardPanel').css('height', ($(".panelContainer2").height() * 0.58) + 'px');	
		$(".trimSpace").getNiceScroll().resize();
		
	}
	//checkRecdIndex(e,ui);
	
	updatePercentage();
	changeFolderImg();	
	$('.dragtooldiv').css({visibility:'visible'});
	
	}
	addPlacement();
	}else{
		$(ui.draggable).draggable({revert:true});
	}
}
var addPlacement = function() {
	$.each(recordIndex,function(index,value){				
		if(typeof value !== 'undefined'){			
			$.each(value,function(inx,val){
				if(typeof val.name != 'undefined'){
					
					val.folderLocation = [index,inx];
					var mainCrd = val.order.split(',');
					if(val.job == 1){
					dataRecdJob[mainCrd[0]].folderLocation = [index,inx];}else{dataRecd[mainCrd[0]].folderLocation = [index,inx]}
				}else{
					val.folderLocation = [index,inx];
					var mainCrd = val.arr[9].split(',');
					var getMainXref = val.crosRefCount;
					//console.log(getMainXref+' '+index);
					if(val.job == 1){
					dataRecdJob[mainCrd[0]].crossUnit[getMainXref].folderLocation = [index,inx];	
					}else{
						dataRecd[mainCrd[0]].crossUnit[getMainXref].folderLocation = [index,inx];
					}
				}
			});

		}
		
	});
//console.log(JSON.stringify(dataRecd));
}
var closestOnDrop = function(closestTo) {
	clost = [];
	crosDrop=[];
	
		$.each(dataRecd[curVal].crossUnit,function(i,v){
			if(!v.dropped)
				clost.push(i);
			else{
				$('.crossbtn1').eq(i).off('click').css({opacity:0.5,cursor:'default'});
				crosDrop.push(i);
			}
		});
    $.each(dataRecd[curVal].crossUnit,function(i,v){	
	v.dropArr=	crosDrop;
	});
	//dataRecd[curVal].crossUnit.dropArr=	crosDrop;
	if(clost.length !=0){			
	   var nearest = clost.reduce(function (prev, curr) {
		   return (Math.abs(curr - closestTo) < Math.abs(prev - closestTo) ? curr : prev);
		});
	return nearest;
	}else{
		return 0;
	}

}
var comeBack = function() {

	//prevIndex=getInx;
	
	$('.calout').show();
}
var checkEmptyFolder = function(aIndexVal,toUpd) {
//alert(toUpd);
	if(recordIndex[[aIndexVal]].length>0) {		
			$('#dragtooldiv_'+aIndexVal).find('.folderindex').show().text(recordIndex[[aIndexVal]].length);
			$('#dragtooldivAni_'+aIndexVal).find('.folderindex').show().text(recordIndex[[aIndexVal]].length);
		}
		else{	//checkRecdIndex();
		
				$('#dragtooldiv_'+aIndexVal).find('.folderindex').hide();
				$('#dragtooldiv_'+aIndexVal).find('img').attr('src','assets/images/foldericon.png');
				$('#dragtooldivAni_'+aIndexVal).find('.folderindex').hide();
				$('#dragtooldivAni_'+aIndexVal).find('img').attr('src','assets/images/foldericon.png');
				$('.dragtooldiv').eq(aIndexVal).off('click');
				if(toUpd!='match'){	
				$('.parentCardPanel').fadeOut();	
				$(".trimSpace").getNiceScroll().hide();
				$('.callOut').css({visibility:'hidden'});
				}
				//$('.dragtooldiv').css({visibility:'visible'});
		}
		$(".cardPanel").prop("readonly", true);
}
var checkFinalCard = function() {
	
	if (uniqArr.length!=1) {		
		uniqArr.splice( currQues, 1 );			
		chngQues(currQues);
		if (uniqArr.length==1) {
			$('.next,.nextmin').off('click').css('opacity','0.5');
		}
		$('[name = submitconfirmation]').removeClass('subbtnActive').addClass('subbtn');
		$('.simworkcontainer').show();
		$('.hideBtns').hide();
			
	} else {		
		$('.next,.nextmin').off('click').css('opacity','0.5');
		$('.prev,.prevmin').off('click').css('opacity','0.5');
		$('.simworkarea').draggable({disabled:true});
		//$('.simbtn').off('mousedown');
		$('.simworkcontainer .choseactn').html('Card 0 of 0');
		$('.simworkarea').children().css({visibility:'hidden'});
		uniqArr=[];
		currQues=0;
		$('.simbtn,.crossbtn, .hintbtn').css('background','#5a4a42').css('cursor','pointer').css('opacity','0.5');
		$('.dummySubbtn').hide();
		$('.offSteps').css('width','175px').css('height','183px').show();
		$('.crossbtnBadge').hide();
		hintshowtag = false;
		$('#tooltip').hide();
		$('[name = submitconfirmation]').removeClass('subbtn').addClass('subbtnActive');
		$('.simworkcontainer').hide();
		$('.hideBtns').show();
		//playAudio('stop',0)
		$('.dummySubbtn').hide();
		$('.audPause').css({background: 'url(./assets/images/playbtn.png) no-repeat'});	
		$('.audPause1').css({background: 'url(./assets/images/playbtn.png) no-repeat'});
	    $('.startAud, .audPause').css('cursor','default').css('opacity','0.5');
	    $('.tcent .mCSB_container').html(simaction.alphabeticSimulation);
	   progressbarfun();
		
	}
	//console.log(uniqArr);
}
var changeFolderImg = function() {
	/*if(getInx == 0)
	{
		$('#dragtooldiv_'+getInx).find('img').attr('src','assets/images/folderopennum.png');
	}
	else*/
	{
		$('#dragtooldiv_'+getInx).find('img').attr('src','assets/images/folderopen.png');
	}
	$('#dragtooldiv_'+getInx).find('.folderindex').show();		
	if(recordIndex[[getInx]].length ==0)
	{
		$(indexId).hide();
	}
	else
	{
		$(indexId).show();
		$(indexId).text(recordIndex[[getInx]].length);
	}
	if(recordIndex[[getInx]].length == 0)
	$('#dragtooldiv_'+getInx).children().eq(2).text(recordIndex[[getInx]].length);
	$('#dragtooldiv_'+getInx).children().eq(2).text(recordIndex[[getInx]].length);
	/*if(getInx == 0)
	{
		$('#dragtooldiv_'+getInx).find('img').attr('src','assets/images/folderopennum.png');
	}
	else*/
	{
		$('#dragtooldiv_'+getInx).find('img').attr('src','assets/images/folderopen.png');
	}
	$('#dragtooldivAni_'+getInx).find('.folderindex').show();	
	$('#dragtooldivAni_'+getInx).find('.folderindex').text(recordIndex[[getInx]].length);
	
		
}

var checkRecdIndex = function(e, ui) {		
	changeFolderImg();
	idx=0;
	$('.panelContainer,.editclk,.panelContainer2').remove();
	$('<div/>',{class:'panelContainer2'}).appendTo('.cardPanel');	
	$('<div/>',{class:'panelContainer'}).appendTo('.cardPanel');
	$('.swapArea').remove();
	//$('.swapArea').children().empty();
	//console.log(JSON.stringify(recordIndex[[currAlphabet]]));

	$.each(recordIndex[[currAlphabet]],function(i,recdIndVal){	
		//$('<div/>',{id:'swapOrder_'+i,class:'swapOrderNums'}).css({left:'100px'}).appendTo('.panelContainer').text(i);
		$('<div/>',{id:'topOrder_'+i,class:'sim'}).appendTo('.panelContainer2').text(i+1);
		
		if(typeof recdIndVal.name !='undefined'){
				swapInside(i,recdIndVal,'.panelContainer');					
			}
		else{		
				addCrossRef(i,recdIndVal,'.panelContainer','notAns');
			}

		idx++;
	});
	
	$('<div/>',{class:'dg',title:'Drag to Folder'}).appendTo('.dragCrd');	
	//$('.sim').css({position:'fixed'});
	$('#totalCards').text('Total Cards: '+recordIndex[[currAlphabet]].length);
	$('.panelContainer,.panelContainer2').css({transform:'scale(0.58)',transformOrigin:'0 0'});
	$('.panelContainer').sortable({start:getPrevIndex,containment:'.parentCardPanel',sort:changCursor2,stop:restScl,update:swapOrder,refreshPositions: true,cancel:'.swapOrderNums,.dragCrd',scroll:true, zIndex:10000});
		$('.panelContainer').children().off('click touchend').on('click touchend',zoomCard);
	$('.cardPanel').css('height', ($(".panelContainer2").height() * 0.58) + 'px');
	lastPos=0;
	$(".trimSpace").getNiceScroll().resize();
}
var startClk = function() {	
	$('.dragtooldiv').eq(getInx).off('click').on('click',showRelavPanel);
}
var zoomCard = function(){

	if(!dragging){
	
	$('.zoompopup').show()
	$('#cloneContainer').empty().show();
	
		$($(this).clone()).appendTo('#cloneContainer').attr('moveCrd',$(this).index());
		//$('<div/>',{class:'dragger'}).appendTo('#cloneContainer .swapAreaDrop .swapArea');
		$('<div/>',{id:'close'}).appendTo('#cloneContainer').text('.');
		$('#close').off('click').on('click',function(){$(this).parent().hide();$(".trimSpace").getNiceScroll().show(); 	$('.zoompopup').hide()
	$('.footer').css('z-index','unset');
});
		
		//$('#cloneContainer .swapAreaDrop').draggable({ helper:'clone',appendTo: "body",start:getRmvVal,drag:changCursorClone,stop:restScl,zIndex:5000,revert:'invalid',containment:'.cover',refreshPositions: true,cursor:'move'}).css({position:'absolute', left:'407px',top:'74px'});
		$(".trimSpace").getNiceScroll().hide();
		$('#cloneContainer .swapAreaDrop').find('.editClk').remove();
		var lenOfdivs = $('#cloneContainer .cdsname').children().length
			$('#cloneContainer .swapAreaDrop ').css({top:'54px', 'left':'auto'});
			$("#cloneContainer .swapArea ").css({'max-height':'230px'})				
			$('#cloneContainer .swapArea').css({height:'auto'});
		
		if(lenOfdivs>0){
			$('#cloneContainer .swapArea').css({top: ((8-lenOfdivs)*10)+'px'});
			$('#close').css({top:(((7-lenOfdivs)*10)+30)+'px'});
		}	
		else if(lenOfdivs <= 0){
			$("#cloneContainer .swapArea ").css({'height':'186px'})	
			$('#cloneContainer .swapArea').css({top: '20px'});
			$('#close').css({top:'36px'});
			
		}	
		
		
		
	}else{
		
		
	}
//	$("#cloneContainer .swapArea .form").css({'background':'red', 'height':'176px'})
}
var getRmvVal = function(e,ui){
	prevIndex = getInxClk;	
	dragging = true;
	toRemv = $(this).attr('moveCrd');	
	 //$('.dragtooldiv').css({visibility:'visible'});
		   	$(this).draggable('instance').offset.click = {
            left: Math.floor(ui.helper.width() / 2),
            top: Math.floor(ui.helper.height() / 2)
         }; 
		$(ui.helper).find('.dg').hide();
		$(ui.helper).find('.editclk').hide();
		$('#close').hide(); 
		if($(this).hasClass('dragCrd')){		
		$(this).find('.swapAreaDrop').remove();
			$($(this).closest('.swapAreaDrop').clone()).appendTo(ui.helper).css({position:'absolute',left:'-30px',right:'0px',top:'-40px',margin:'auto',transform:'scale(0.58)',transformOrigin:'0 0'});
			$('.dg').text('');
			$(ui.helper).find('*').css({cursor:'move'});
		}else{
			
		}
		//$('.cardPanel').css({overflow:'hidden'});
		
}
var changCursorClone = function(e,ui){
	topstartpoint =200;
	var xposition = window.innerWidth< 1000? e.pageX  : (e.pageX -(window.innerWidth-1000)/2); 
	
	var scalecard = Math.pow((parseInt(e.pageY)/topstartpoint),4);
	if(scalecard < 0.2) {scalecard = 0.2;}
	if(scalecard > 1) {scalecard = 1}
	
		$(ui.helper).css({transform:'scale('+scalecard+')',opacity:'1'});
		holdUiPos = ui.position.left;
		//ui.position.left/=scalecard;
		//ui.position.top/=scalecard;
}
var showRelavPanel = function(e) {
	
	getInxClk = $(this).index();
	$('.parentCardPanel').attr('name',getInxClk);	
	$('.parentCardPanel').attr('letter',$(this).find('.drogtoolname').text());	
	currLetter = $('.parentCardPanel').attr('letter');
	$('#alphabet').text(currLetter);
	getInx = $('.parentCardPanel').attr('name');
	currAlphabet = $('.parentCardPanel').attr('name');
	indexId = $(this).children().eq(2);	
	if(recordIndex[[getInx]].length>0){		
		$('.parentCardPanel').fadeIn();			
		checkRecdIndex();		
	}
	var lef = $(this).position().left;	

	//resetClone();
	$('.callOut').css({visibility:'hidden'});
	$('#dragtooldiv_'+getInx).find('.callOut').css({visibility:'visible'});
	$(document).ready(function(){
				if(!inDevice){
		$(".trimSpace").getNiceScroll().remove();
		$(".trimSpace").getNiceScroll().resize().show();
		$(".trimSpace").niceScroll({cursorcolor:"#16b8e9",cursorborder: "0px solid #fff",cursorwidth:'7px',autohidemode: false, horizrailenabled: false});
		
		/*$(".trimSpace").on('touchmove',function(e){
			e.preventDefault();
			e.stopPropagation();
		});*/
		
		}else{
			if(is_firefox && is_android){
				$(".trimSpace").enscroll('destroy');
		        $('.trimSpace').enscroll({
		        verticalScrolling:true,
		        verticalTrackClass:'track1',
		        verticalHandleClass:'track2'
		        });
		     $(".trimSpace").css({width:'96.5%'});
		   }else{
			$(".trimSpace").css({width:'97.5%'});
		   }
		}
	
      /*  $('.cardPanel').enscroll({propagateWheelEvent:false,
		  verticalScrolling:true,
		  verticalTrackClass:'track1',
		  verticalHandleClass:'track2'
		  });*/
	$('.trimSpace').scrollTop(0);
	});
	$('.parentCardPanel input').blur();
}
var resetClone = function(){
	$('.dragtooldiv').css({visibility:'visible'});
	$('.dragtooldivAnim').css({visibility:'hidden'});
}
var editDataClk = function(){
	
	$('.editclk').off('touchstart mousedown').on('touchstart mousedown',editData);
	$('.dragCrd').draggable({ helper:'clone',appendTo: "#alphabeticSimulation",start:getRmvVal,drag:changCursorClone,stop:restScl,zIndex:1000,revert:'invalid',containment:'.panelcover',refreshPositions: true,cursor:'move','scroll':false});
}
var removAll = true;
var editData = function(e){
	
   var ctl = e.which||e.keycode;
   if(ctl == 1 || inDevice){
    e.preventDefault();	
	if($(this).hasClass('crossbtnBadge') && typeof dataRecd[curVal].crossUnit != 'undefined'){	
		
		if(crosDrop.length>0){
		removAll  = true;
		
		removedElem = dataRecd[curVal].crossUnit[0].arr[9];
		
		orginalPos = removedElem.split(',');
		crosCount=0;
		
		placeItBack();
		if(dataRecd[orginalPos[1]].crossUnit.length >0){			
			$.each(dataRecd[orginalPos[1]].crossUnit[0].dropArr,function(i,v){
				dataRecd[orginalPos[1]].crossUnit[v].dropped=false;
			});	
		}
		}
		//checkEmptyFolder(currAlphabet,'curr');
	}else if(!$(this).hasClass('crossbtnBadge')){
		removAll  = false;
		
			//alert($(this).parent().parent().parent().index())
		editDatInd = $(this).parent().parent().parent().index();
		e.stopPropagation();
		if(typeof(recordIndex[[currAlphabet]][editDatInd].order) != 'undefined'){
			removedElem = recordIndex[[currAlphabet]][editDatInd].order;		
			recordIndex[[currAlphabet]].splice(editDatInd,1);			
			orginalPos = removedElem.split(',');				
			placeItBack();		
		}	
		else{				
			removedElem = recordIndex[[currAlphabet]][editDatInd].arr[9];		
			crosCount = recordIndex[[currAlphabet]][editDatInd].crosRefCount;			
			recordIndex[[currAlphabet]][editDatInd].dropped = false;
			recordIndex[[currAlphabet]][editDatInd].folderLocation = [];			
			recordIndex[[currAlphabet]].splice(editDatInd,1);
			orginalPos = removedElem.split(',');
			dataRecd[orginalPos[0]].crossUnit[crosCount].dropped = false;
			placeItBack();	
			
		}
		checkRecdIndex();
	
		checkEmptyFolder(currAlphabet,'curr');
	}
	
	
	/*if(dataRecd[orginalPos[1]].crossUnit.length >0){
		$.each(dataRecd[orginalPos[1]].crossUnit[0].dropArr,function(i,v){
		dataRecd[orginalPos[1]].crossUnit[v].dropped=false;
	});	
	}*/
	/*checkRecdIndex();
	checkEmptyFolder(currAlphabet,'curr');*/
	addPlacement();

	if(typeof orginalPos != 'undefined'){
		if(uniqArr.indexOf(parseInt(orginalPos[1]))==-1)
		{
				uniqArr.push(parseInt(orginalPos[1]));
				
		}
			//placeItBack();
		uniqArr.sort(sortFunction);		
		
		currQues = uniqArr.indexOf(parseInt(orginalPos[1]));
		$('.simworkcontainer').show();	
		chngQues(currQues);	
		$('.hideBtns').hide();
	}
   }
}
var placeItBack = function(){

	dlt=[];
	
	$.each(recordIndex,function(index,value){		
	
		if(typeof(value) != 'undefined' && value !== null){
			
			$.each(value,function(i,v){	
			if(v.job != 1){			
					if(typeof(v.order) != 'undefined'){
						var getOr = v.order.split(',');
						if(getOr[1] == orginalPos[1]){
							dlt.push([index,i]);						
						}					
					}else if(removAll){				
						if(typeof(v.arr[9]) != 'undefined'){;	
						var gettt = v.arr[9].split(',');
						if(gettt[1] == orginalPos[1]){
								dlt.push([index,i]);
							}
						}
					}
				}
			});
			
		}
		
	});
	
	if(typeof dlt != 'undefined') {		
		for (var i = dlt.length -1; i >= 0; i--){
		
				recordIndex[dlt[i][0]][dlt[i][1]].dropped = false;
				//console.log(JSON.stringify(recordIndex[dlt[i][0]][dlt[i][1]]));
				//recordIndex[dlt[i][0]][dlt[i][1]].dropped
				//console.log(recordIndex[dlt[i][0]][dlt[i][1]])
				//console.log(recordIndex[dlt[i][0]][dlt[i][1]].folderLocation)
				recordIndex[dlt[i][0]][dlt[i][1]].folderLocation = [];
				recordIndex[dlt[i][0]].splice(dlt[i][1],1);
				checkEmptyFolder(dlt[i][0],'match');
				
			}				
		}
		progressbarfun();
	}
var sortFunction = function(a,b){

	var indexA = conArr.indexOf(a);
	var indexB = conArr.indexOf(b);
	//console.log('inside '+indexA+' '+indexB)
	if (indexA < indexB) {
		return -1;
	}else if (indexA > indexB) {
		return 1;
	}else {
		return 0;
	}
}
var getPrevIndex = function(e,ui) {
	prevIndex = getInxClk;	
	toRemv = $(this).index();	
	toRemv = ui.item.index();

	if($('.trimSpace').scrollTop()!=0 && lastPos ==0)
	{
		lastPos=1;
		$('.panelContainer').sortable("refreshPositions");
		//$(ui.item).css('top',ui.position.top-$('.cardPanel').scrollTop());	
	}		
	/*toRemv = toRemv.split('_')[1];*/
	$(this).attr('data-previndex', ui.item.index());
	
		  if(prevIndex==$('.parentCardPanel').attr('name')){
			moveBack = prevIndex;
			//$('#dragtooldiv_'+prevIndex).css({visibility:'hidden'});
			//$('#dragtooldivAni_'+prevIndex).css({visibility:'visible'});
		  }
//		 console.log(ui.item.attr('id'));
	/*$(this).sortable('instance').offset.click = {
            left: Math.floor(ui.helper.width() / 2),
            top: Math.floor(ui.helper.height() / 2)
          };*/
		 
		  $(this).addClass('noclick');
		   dragging = true;
		   $('.dg').text('');

}	

var restScl = function(e, ui) {
	$(this).parent().css({visibility:'visible'});
	//$(this).css({transform:'scale(1,1)',opacity:'1'});	
	$(this).show();
	$('#close').show();
	comeBack();
	moveBackFold();
	$('.dg').text('');
	setTimeout(function(){dragging = false;}, 300);
	//$('.panelContainer').children().off('click').on('click',zoomCard);
}
var temparr = [];
var swapInside = function(i,objVal,appendClass) {	
	$('<div/>',{id:'swapAreaDrop_'+i,class:'swapAreaDrop'}).appendTo(appendClass);		
	
	$('<div/>',{id:'swapArea_'+i,class:'swapArea'}).appendTo(appendClass+' #swapAreaDrop_'+i);
	var getId=$(appendClass).find('.swapArea').eq(i).attr('id');	

	$('<div/>',{id:'card'+i,class:'carDrop'}).appendTo(appendClass+' #'+getId);
	$('<div/>',{class:'cdsname nameIns'+i}).appendTo(appendClass+' #card'+i);
	$('<ul/>',{class:'card card'+i}).appendTo(appendClass+' #card'+i);
	$('<p/>',{class:'forPushPara'+i}).appendTo(appendClass+' #card'+i);
	$('<div/>',{class:'editclk'}).appendTo(appendClass+' #card'+i);
	$('<div/>',{class:'dragCrd'}).appendTo(appendClass+' #swapAreaDrop_'+i);
	$('<div/>',{class:'cardNum'}).appendTo('#swapArea_'+i);
	 $('.editclk').attr('title', 'Move card to deck');
	$('#swapArea_'+i+' .cardNum').text(objVal.order);
	
	pushDataPanel(i,objVal,appendClass);	
	
	if(objVal.job == 1){
		$(appendClass+' #swapAreaDrop_'+i).addClass('job1');
		if(appendClass == ".userPanel"){
			
			$(appendClass+' #swapAreaDrop_'+i+' .swapArea').empty().html('<span class="jobSpan">Card from Job 1</span>');
			}
	}
	temparr = [];
	if(typeof objVal.crossUnit != 'undefined' && appendClass == ".userPanel"){
		if(typeof objVal.xreffolderinfo != 'undefined'){
			$.each(objVal.crossUnit,function(i,v){				
				for (var i = 0; i < objVal.xreffolderinfo.length; i++) {
					// This if statement depends on the format of your array
					if (objVal.xreffolderinfo[i][0] == v.folderLocation[0] && objVal.xreffolderinfo[i][1] == v.folderLocation[1]) {
						
						v.ansMatchWith =i;
						
						return true;   // Found it
					}
				}
				
				//console.log('                 '+JSON.stringify(v))
			});
		}
		
		
		temparr = [];
		for(var i=0; i<objVal.crossUnit.length; i++)
		{
			temparr[i] = -1;
			if(typeof objVal.crossUnit[i].ansMatchWith != 'undefined')
			{
				temparr[i] = objVal.crossUnit[i].ansMatchWith
			}
		}
		var count = 0;
		if(typeof objVal.crossAns != 'undefined')
		{
			while(count < objVal.crossAns.length)
			{
				if(temparr.indexOf(count) ==-1)
				{
					temparr[temparr.indexOf(-1)] =  count
				}
				count++
				
			}
		
			for(var i=0; i<objVal.crossUnit.length; i++)
			{
				objVal.crossUnit[i].ansMatchWith = temparr[i]
			}
		
		}
	}	

}



var addCrossRef = function(i,objVal,appendClass,isAns) {
	
	$('<div/>',{id:'swapAreaDrop_'+i,class:'swapAreaDrop'}).appendTo(appendClass).html();
	$('<div/>',{id:'swapArea_'+i,class:'swapArea'}).appendTo(appendClass+' #swapAreaDrop_'+i);
	$($('.crossrefnameing .form').clone()).appendTo(appendClass+' #swapArea_'+i);
	$('<div/>',{class:'editclk crossClk'}).appendTo(appendClass+' #swapArea_'+i+' .form');
	$('<div/>',{class:'offFocus'}).appendTo(appendClass+' #swapArea_'+i);	
	$('<div/>',{class:'dragCrd'}).appendTo(appendClass+' #swapAreaDrop_'+i);	
	$('.crossClk').attr('title', 'Move card to deck');
	$(appendClass+' .swapArea .form').find('input').attr('readonly','readonly');		
	$(appendClass+' #swapArea_'+i+' .cross_unit').html('');
	$('<div/>',{class:'cardNum'}).appendTo('#swapArea_'+i);
	
	$(appendClass+' #swapArea_'+i+' .cardNum').text(objVal.arr[9]);
	if(objVal.job == 1 ){
		$(appendClass+' #swapAreaDrop_'+i).addClass('job1');
		if(appendClass == ".userPanel"){			
			$(appendClass+' #swapAreaDrop_'+i+' .swapArea').empty().html('<span class="jobSpan">Card from Job 1</span>');
			}
	}else if(objVal.job != 1 && typeof objVal.arr[9] != 'undefined' ){
		var getCrossAns = objVal.arr[9].split(',');
		var crossAnsOdr = getCrossAns[1];
		//var isAns = arguments[3];
		crossAnsOdr = dataRecd[crossAnsOdr].crossAns;
		
	}
	
	$(appendClass+' #swapArea_'+i).find('.cross_unit').each(function(index,value){	
		
		if(isAns != 'notAns' && typeof crossAnsOdr != 'undefined'){
			//console.log(objVal.ansMatchWith+' matched');
			if(typeof crossAnsOdr[objVal.ansMatchWith] != 'undefined'){			
				
				$(appendClass+' #swapArea_'+i+' .cross_unit').eq(index).val(crossAnsOdr[objVal.ansMatchWith][0][index]);	
                $(appendClass+' #swapArea_'+i+' .cross_unit').eq(index).attr('value',crossAnsOdr[objVal.ansMatchWith][0][index]);				
			}	
			else
				$(appendClass+' #swapArea_'+i+' .cross_unit').eq(index).val('');
		}else{
			if(isAns != 'notAns'){
				$(appendClass+' #swapArea_'+i+' .cross_unit').eq(index).val("");		
			}else{		
				$(appendClass+' #swapArea_'+i+' .cross_unit').eq(index).val($.trim(objVal.arr[index]));	
                $(appendClass+' #swapArea_'+i+' .cross_unit').eq(index).attr('value',$.trim(objVal.arr[index]));					
			}
			if(objVal.job == 1){
				$(appendClass+' #swapArea_'+i+' .cross_unit').eq(index).val($.trim(objVal.arr[index]));	
				$(appendClass+' #swapArea_'+i+' .cross_unit').eq(index).attr('value',$.trim(objVal.arr[index]));
			}
			
		}
		
		//console.log(objVal[index], $('.cross_unit').val());
	});
	if(typeof arguments[4] != 'undefined')
	{	
		$(appendClass+' #swapArea_'+i).find('.cross_unit').each(function(index,value){	
		
		if(typeof crossAnsOdr != 'undefined'){
			//console.log(objVal.ansMatchWith+' matched');
			if(typeof crossAnsOdr[objVal.ansMatchWith] != 'undefined'){				
				$(appendClass+' #swapArea_'+i+' .cross_unit').eq(index).val(crossAnsOdr[objVal.ansMatchWith][0][index]);	
                $(appendClass+' #swapArea_'+i+' .cross_unit').eq(index).attr('value',crossAnsOdr[objVal.ansMatchWith][0][index]);				
			}
		}
		});
	}
	editDataClk();
	
}
var multipleCrosref = function(val,appendClass,ix){
var rigcnt=0;
	$.each(val,function(inx,val){
		$.each(val[0],function(i,v){
		//console.log(v+' '+$.trim($('.userPanel #swapArea_'+ix+' .cross_unit').eq(i).val()));
			if(v === $.trim($('.userPanel #swapArea_'+ix+' .cross_unit').eq(i).val())){
				rigcnt++;
				//console.log($('.userPanel #swapArea_'+ix+' .cross_unit').eq(i).val());
			}
		});
	});
	
}
var pushDataPanel = function(i,objVal,appendClass) {
	curVal=uniqArr[currQues];	
	splitName(objVal.name,appendClass+' .nameIns'+i,'addInsd'+i);
	//splitAddress(objVal.add,appendClass+' .card'+i);
	//splitNum(objVal.num,appendClass+' .forPushPara'+i);
	
	recrtAndPush(i,objVal,appendClass);
	editDataClk();
}
var recrtAndPush = function(i,objVal,appendClass) {
	var conCat = appendClass+' .nameIns'+i;
	if(appendClass==".userPanel" || appendClass==".panelContainer"){
	
		//storeData(objVal.icode,conCat);	
		//storeUnitIden(objVal.iuid,conCat);			//restore all data code ,unit identification,unit numbering
		//storeSequence(objVal.iunum,conCat);
		enableEvents(objVal,appendClass+' .nameIns'+i,'notAns');
	}else{
		//storeData(objVal.acode,conCat);	
		//storeUnitIden(objVal.auid,conCat);			//restore all data code ,unit identification,unit numbering
		//storeSequence(objVal.aunum,conCat);			
		enableEvents(objVal,appendClass+' .nameIns'+i,'answer');
	}
}
var revertManual = function(event,ui) {
	 
}
var changCursor2 = function(e,ui) {
	
	/* 
	if(ui.position.top > 180 && ui.position.top < 380)
	{
		tempdif = recordIndex[[currAlphabet]].length/3*(.33+recordIndex[[currAlphabet]].length/3*0.09);
		$('.cardPanel').scrollTop( (ui.offset.top-190)*tempdif);
	}
	*/
	var topstartpoint = 200;

	var xposition = window.innerWidth< 1000? e.pageX  : (e.pageX -(window.innerWidth-1000)/2); 
	
	var scalecard = Math.pow((parseInt(e.pageY)/topstartpoint),4);
	//scalecard = (parseInt(e.clientY)/100)*0.15;
	
	if(scalecard < 0.2) {scalecard = 0.2;}
	if(scalecard > 0.6) {scalecard = 0.6}
	if(e.pageY < 220 && ($(ui.item).attr('class').indexOf('job1')>-1)){$(ui.helper).css({top:'190px'});scalecard = 0.6;}	
		//scalecard = 0.6 
		//$(ui.item).css({transform:'scale('+scalecard+')',opacity:'1'});
		//ui.position.left/=scalecard;
		//console.log(ui.position.left+' '+ui.offset.left);
		$(ui.item).css('left',ui.position.left/0.58);
		$(ui.item).css('top',ui.position.top/0.58);

		
		
	//$('.cardPanel').scrollTop($(ui.helper).position().top);
	
		
}

var swapOrder = function(e,ui) {
    lastPos=1;
	var newIndex = ui.item.index();
    var oldIndex = $(this).attr('data-previndex');	
	$(this).removeAttr('data-previndex');

	// x,y  1,3, 

	if(newIndex!=-1){
		//recordIndex[[currAlphabet]][oldIndex] = recordIndex[[currAlphabet]].splice(newIndex, 1, recordIndex[[currAlphabet]][oldIndex])[0];
		
		var myData = recordIndex[[currAlphabet]];
 
		myData = arrayMove(myData,oldIndex, newIndex);

	}


	addPlacement();

}
var arrayMove = function(arr, oldIndex, newIndex) {
    var element = arr[oldIndex];
    arr.splice(oldIndex, 1);
    arr.splice(newIndex, 0, element);	
}
var closePanel = function() {
	$('.parentCardPanel').hide();
	$('.callOut').css({visibility:'hidden'});
	$('.dragtooldiv').css({visibility:'visible'});
	$('#cloneContainer').hide();
	$(".trimSpace").getNiceScroll().hide();
}

matrixrow = 3;
matrixcol = 3;
defLef = 280;
deftop = 160;
//defLef = 0;
//deftop = 0;
var create3c3 = function() {
	for(i=1;i<=matrixrow;i++){
		for(j=1;j<=matrixcol;j++){
			$('<div/>',{id:'swapArea_'+i+j,class:'swapArea'}).appendTo('.panelContainer');
			//.css({left:(30+(defLef*(j-1)))+'px',top:(30+(deftop*(i-1)))+'px'});
			
		}
	}
}
// name class card


var reviewAns = function() {	
	//$('.subbtn').off('click');
	//pushUser();
	$('#reviewAnswer').css({visibility:'visible'});
	
	
	
	
	
	
}
newArr = [];
var pushUser = function () {
    alphabeticSimulationvisite = false;
    idx = 0;
    placedIncorrect = 0, crosRefNotCrt = 0, crosNotReq = 0;
    scoreArr = [];
    newArr = [];
    $('.userPanel,	.correctPanel, .codeResult,.orderResult').empty();

    //dataRecd.unshift(dataRecdJob[0]);
    $.each(dataRecdJob, function (i, v) {
        newArr.push(v);
    });
    $.each(dataRecd, function (i, v) {
        newArr.push(v);
    });
    idx = 0;
    $.each(newArr, function (order, details) {
        swapInside(idx, details, '.userPanel');
        swapInside(idx, details, '.correctPanel');
        createCode(idx, details, '.codeResult');
        //createOrder(idx, details, '.orderResult', details.folderLocation[0], details.folderLocation[1]);
        createOrder(idx,details,'.orderResult',details.folderLocation[0],details.folderLocation[1], false);
        idx++;

        if (typeof details.crossUnit != 'undefined') {
            $.each(details.crossUnit, function (ii, vv) {
                {
                    var getCrossAns = vv.arr[9].split(','), getOrg;
                    var crossAnsOdr = getCrossAns[1];
                    if (vv.job == 1)
                        getOrg = dataRecdJob[crossAnsOdr];
                    else
                        getOrg = dataRecd[crossAnsOdr];


                   if ((typeof getOrg.crossAns != 'undefined') && ii < getOrg.crossAns.length) {
                        addCrossRef(idx, vv, '.userPanel', 'notAns');
                        if ((typeof vv.first != 'undefined' || vv.job == 1) && (getOrg.crossAns.length < 2 || vv.job == 1)) {

                            //to show maincard for multiplecrosref
                            addCrossRef(idx, vv, '.correctPanel', 'refAns');
                        } else {
                            addCrossRef(idx, vv, '.correctPanel', 'refAns');
                        }
                        createCrossAns(idx, vv, '.codeResult', 'crosRef', vv.folderLocation[0], vv.folderLocation[1], getOrg);

                    } else {
                        addCrossRef(idx, vv, '.userPanel', 'notAns');
                        addCrossRef(idx, vv, '.correctPanel', 'refAns');
                        createCrossAns(idx, vv, '.codeResult', 'notCrosRef', vv.folderLocation[0], vv.folderLocation[1], getOrg);
                    }
                    //addCrossRef(idx,details,'.orderResult');
                    //if(typeof getOrg.crossAns != 'undefined')
                    //createOrder(idx,vv,'.orderResult',vv.folderLocation[0],vv.folderLocation[1]);
                    // Create the cross ref in the card order

                    //createOrder(idx,vv,'.orderResult',vv.folderLocation[0],vv.folderLocation[1]);
                    createOrder(idx, vv, '.orderResult', vv.folderLocation[0], vv.folderLocation[1], false);

                }
                idx++;
            });
            /**/
        }


        if (typeof details.crossAns != 'undefined' && details.job == 2) {
            if (typeof details.crossUnit != 'undefined' && details.crossUnit.length < details.crossAns.length) {
                if (details.crossUnit.length == 0) {
                    ansMattag = true
                } else {
                    ansMattag = false
                }

                if (details.crossUnit.length < details.crossAns.length) {
                    var count = 0;
                    while (temparr.length < details.crossAns.length) {
                        if (temparr.indexOf(count) == -1) {
                            temparr.push(count);
                        }
                        count++;
                    }
                }

                for (var i = details.crossUnit.length; i < details.crossAns.length; i++) {
                    details.crossUnit[i] = {'arr': [], 'job': 2};
                    details.crossUnit[i].folderLocation = details.crossAns[i][1];

                    //console.log(details.crossUnit[i].ansMatchWith)
                    if (ansMattag) {
                        details.crossUnit[i].ansMatchWith = i;
                    }
                    else {

                        details.crossUnit[i].ansMatchWith = temparr[i];
                        details.crossUnit[i].folderLocation = details.crossAns[temparr[i]][1];

                    }

                    details.crossUnit[i].arr[9] = details.order;
                    details.crossUnit[i].first = true;


                    addCrossRef(idx, details.crossUnit[i], '.userPanel', 'notAns', 'empty');
                    addCrossRef(idx, details.crossUnit[i], '.correctPanel', 'refAns', 'empty');
                    createCrossAns(idx, details.crossUnit[i], '.codeResult', 'add', details.crossUnit[i].folderLocation[0], details.crossUnit[i].folderLocation[1], details.crossAns);
                    $('#cardIn_' + idx).html('<span class="wrong">You did not create this required cross-reference card.<br><font color="#000">Score: 0/1</font></span>');
                    $('.userPanel #swapArea_' + idx).empty().html('<span class="blankcard"><i>Not Created</i></span>');
                    //	alert('x')
                    codescore--;
                    //totcodescore++;

                    //createOrder(idx,details.crossUnit[i],'.orderResult',details.crossUnit[i].folderLocation[0],details.crossUnit[i].folderLocation[1]);
                    // Create order for missing cross reference
                    //createOrder(idx,details.crossUnit[i],'.orderResult',details.crossUnit[i].folderLocation[0],details.crossUnit[i].folderLocation[1]);
                    createOrder(idx, details.crossUnit[i], '.orderResult', details.crossUnit[i].folderLocation[0], details.crossUnit[i].folderLocation[1], true);

                    var fol = $('#dragtooldiv_' + (details.crossUnit[i].folderLocation[0])).find('.drogtoolname').text();
                    $('#cardOdrIn_' + idx).html('<span class="wrong">This card should be placed as [' + fol + ']' + (details.crossUnit[i].folderLocation[1] + 1) + '.<br><font color="#000">Score: 0/1</font></span>');
                    //folderscore--;
                    idx++;

                    details.crossUnit[i].submt = true;

                    //details.crossUnit.splice(i,1);


                }

            }
        }
        //codescore = 0;
        //totcodescore =0;
        //console.log('codescore       '+ codescore +' / '+totcodescore )
        //console.log('folder      '+ folderscore+' / '+totfolderscore)
    });
    $('.blankcard').parent().addClass('forPdf');
    for (var i = 0; i < dataRecd.length; i++) {
        dataRecd[i].codeScore[0] + '/' + dataRecd[i].codeScore[1]
        codescore += dataRecd[i].codeScore[0]
        totcodescore += dataRecd[i].codeScore[1]


        //console.log('code score  '+ codescore, totcodescore, dataRecd[i].codeScore)

    }
    //console.log('code score  ', codescore,folderscore, totcodescore, totfolderscore)
    //console.log('code score  ', codescore+folderscore, totcodescore+totfolderscore)
    //console.log('score  ', (codescore+folderscore) / (totcodescore+totfolderscore)*100)


    /*$.each(scoreArr,function(i,v){
     $('#cardOdrIn_'+v[1]+' span').append('<br><font color="black">Score : '+v[0].reduce(function(a, b) { return a + b; }, 0)+'/'+v[2]+'</font>');
     console.log('Score : '+v[0].reduce(function(a, b) { return a + b; }, 0)+'/'+v[2]+' '+v[0])
     });*/

}

var createCode = function (inx, val, appclass) {

    $('<div/>', {id: 'card_' + inx, class: 'swapAreaDrop'}).appendTo(appclass);
    $('<div/>', {id: 'cardIn_' + inx, class: 'cardsChild'}).appendTo('#card_' + inx);

    if (val.job == 1) {
        $('#cardIn_' + inx).html('<span style="color:#999"; class="wrong">N/A</span>');
    } else {
        var gtxt = ' ';
        if (val.codeScore[0] == val.codeScore[1]) {
            if (val.codeScore[2] == 1) {

                gtxt = 'You had additional coding on this card that was not graded.<br>';
            }
            $('#cardIn_' + inx).html('<span class="right">You coded the required units correctly.<br><font color="#000">' + gtxt + 'Score: ' + val.codeScore[0] + '/' + val.codeScore[1] + '</font></span>');
        } else {
            if (val.codeScore[2] == 1) {

                gtxt = 'You had additional coding on this card that was not graded.<br>';
            }

            $('#cardIn_' + inx).html('<span class="wrong">Your coded card contains errors in the units required for this job.<br><font color="#000">' + gtxt + 'Score: ' + val.codeScore[0] + '/' + val.codeScore[1] + '</font></span>');
        }
    }

}
var arrng = function (getclass, inx, val, crosVal) {

    var rigCnt = 0, chk, ans;
    rigCnt = multipleCrosref2(val, getclass, inx);
    $('#cardIn_' + inx).html('<span class="right">You created a necessary cross-reference card.<br><font color="#000">Note that coding on cross-reference cards is not graded.</font><br><font color="#000">Score: 1/1</font></span>');
    codescore++;
    totcodescore++;
}
var curIndex = 0;
var multipleCrosref2 = function (val, getclass, area) {
//console.log(JSON.stringify(val)+' '+getclass+' '+inx);
    var rigcnt = 0;
    curIndex = 0;
    if (typeof val.crossAns != 'undefined') {
        $.each(val.crossAns, function (inx, value) {
            curIndex = inx;

            rigcnt = 0;
            $.each(value[0], function (i, v) {
                if ($.trim(v).toLowerCase() === $.trim($('.userPanel #swapArea_' + area + ' .cross_unit').eq(i).val()).toLowerCase()) {
                    rigcnt++;
                }

            });
            if (rigcnt == 9) {
                return false;
            }
        });

    }
    return rigcnt;

}
var createCrossAns = function (inx, val, appclass, isCrsRef, afol, ainx, getOrg) {

    $('<div/>', {id: 'card_' + inx, class: 'swapAreaDrop'}).appendTo(appclass);
    $('<div/>', {id: 'cardIn_' + inx, class: 'cardsChild'}).appendTo('#card_' + inx);

    if (val.job == 1) {
        $('#cardIn_' + inx).html('<span style="color:#999"; class="wrong">N/A</span>');
    } else {
        var getCrossAns = val.arr[9].split(',');
        var crossAnsOdr = getCrossAns[1];

        if (isCrsRef == 'notCrosRef') {


            $('#cardIn_' + inx).addClass('already');

            $('#cardIn_' + inx).html('<span class="wrong">You created an extra cross-reference card.<br><font color="#000">Score: -1</font></span>');
            $('.correctPanel #swapArea_' + inx).empty().html('<span class="blankcard"><i>Not Applicable</i></span>');
            codescore--;
            crosNotReq++;
            totextracard++;
        } else {
            if (val.ansMatchWith != -1) {
                var aFol = afol;
                var tempFol = ainx;
                arrng('.arrng1', inx, dataRecd[crossAnsOdr], val);
            }
            else {
                $('#cardIn_' + inx).addClass('already');

                $('.already').html('<span class="wrong">You created an extra cross-reference card.<br><font color="#000">Score: -1</font></span>');
                //totfolderscore--;
                codescore--;
                totextracard++;

                $('.correctPanel #swapArea_' + idx).empty().html('<span class="blankcard"><i>Not Applicable</i></span>');
            }

        }
        //console.log('folder      '+ folderscore+' / '+totfolderscore, totextracard)
    }
}


//--------- createOrder Modified by Larry -----------------//

// createOrder = function(inx, val, appclass,index,order, noXRefFlag)
//  inx is the index in the dataRecd or dataReced.crossUnit array
//  val is dataRecd or dataRecd.crossUnit
//  appclass is '.orderResult' -- the place in the html where things should appear
//  index is dataRecd.folderLocation[0] -- the folder where the card actually is
//  order is dataRecd.folderLocation[1] -- the order where the card actually is in the folder
//  noXRefFlag is a boolean that indicates the card is a cross reference that has not been created (but should be) -- this was added by Larry

var createOrder = function (inx, val, appclass, index, order, noXRefFlag) {
    $('<div/>', {id: 'cardOdr_' + inx, class: 'swapAreaDrop'}).appendTo(appclass);
    $('<div/>', {id: 'cardOdrIn_' + inx, class: 'cardsOrderChild'}).appendTo('#cardOdr_' + inx);
    if (typeof val.ansOrder !== 'undefined') {
        var getFolOdr = val.ansOrder[0];
        var getInsOdr = val.ansOrder[1];
        //showOrders(index, inx, getFolOdr, getInsOdr, order, val);
        showOrders(index, inx, getFolOdr, getInsOdr, order, val, noXRefFlag);

        if (val.job != 1 && typeof val.crossAns != 'undefined') {
            if (val.crossUnit.length == 0) {
                //$('#cardIn_'+inx).append('<span class="wrong"> <br>This main card needs a cross-reference card.</span>');
                crosRefNotCrt++;
            }
        }

    } else if (typeof val !== 'undefined') {
        var getOrg;
        var getCrossAns = val.arr[9].split(',');
        var crossAnsOdr = getCrossAns[1];

        if (val.job == 1)
            getOrg = dataRecdJob[crossAnsOdr].crossAns;
        else
            getOrg = dataRecd[crossAnsOdr].crossAns;


        //if(typeof val.ansMatchWith != 'undefined')
        {

            if (val.job == 1) {
                var getFolOdr = getOrg[val.ansMatchWith][1][0];
                var getInsOdr = getOrg[val.ansMatchWith][1][1];
                var fol = $('#dragtooldiv_' + index).find('.drogtoolname').text();
                //showOrders(index, inx, getFolOdr, getInsOdr, order, val);
                showOrders(index, inx, getFolOdr, getInsOdr, order, val, noXRefFlag);

            } else {
                //var getOrds = multipleCrfFolOdr(val, getOrg, index, order, 'currentJob');
//console.log('matccc '+getOrg[val.ansMatchWith][1][1]);

                var getOrds = multipleCrfFolOdr(val, getOrg, index, order, 'currentJob');

                var getFolOdr = getOrds[0];
                var getInsOdr = getOrds[1];
                var fol = $('#dragtooldiv_' + index).find('.drogtoolname').text();
                if (typeof val.ansMatchWith != 'undefined' && typeof getOrg[val.ansMatchWith] != 'undefined') {

                    getFolOdr = getOrg[val.ansMatchWith][1][0];
                    getInsOdr = getOrg[val.ansMatchWith][1][1];
                }
                // showOrders(index, inx, getFolOdr, getInsOdr, order, val);
                showOrders(index, inx, getFolOdr, getInsOdr, order, val, noXRefFlag);

            }
        }
        /*else{
         showOrders(index, inx, getFolOdr, getInsOdr, order, val, getOrg);
         }*/
    }

}


var multipleCrfFolOdr = function (val, getOrg, index, order, job) {
//console.log(JSON.stringify(val)+' '+getclass+' '+inx);
    var rigcnt;
    var getCrossAns = val.arr[9].split(',');
    var crossAnsOdr = getCrossAns[1];
    if (typeof getOrg == 'undefined')
        return [0];

    $.each(getOrg, function (inx, value) {

        rigcnt = 0;
        if (index === value[1][0] && order === value[1][1]) {
            rigcnt = [value[1][0], value[1][1]];			//console.log('ans Rig '+rigcnt);

            return false;
        }
    });

    return rigcnt;

}

var nucard = 0;
var crscoreassign = function (val, numval) {
    if (typeof val.name != 'undefined') {
    }
    else {
        var getCrossAns = val.arr[9].split(',');
        var crossAnsOdr = getCrossAns[1];
    }

}

//------------Show Orders Modified by Larry --------------------//

//showOrders = function(index, inx, getFolOdr, getInsOdr, order, val, realCardFlag)
//  index is folderLocation[0] -- the index of the folder that the card is placed in (NUM - Z)
//  inx is the index of the card in the dataRecd or dataRecd.crossUnit array
//  getFolOdr is dataRecd.ansOrder[0] -- the folder that the card is supposed to be in
//  getInsOdr is dataRecd.ansOrder[1] -- the order in the folder that the card is supposed to be placed in
//  order is folderLocation[1] -- the index of the card in the folder
//  val is dataRecd
//  realCardFlag is a boolean that indicates whether the card is a missing cross reference card (should be here but isn't)
var showOrders = function (index, inx, getFolOdr, getInsOdr, order, val, noXRefFlag) {

    var fol = $('#dragtooldiv_' + index).find('.drogtoolname').text();
    var rigFol = $('#dragtooldiv_' + getFolOdr).find('.drogtoolname').text();

    var folder_label = "";

    crscoreassign(val, 0);

    if (index == 0) {
        folder_label = "NUM";
    }
    else {
        folder_label = String.fromCharCode(index + 64);
    }

    if (val.job != 1 && typeof val.arr != 'undefined' && typeof val.first == 'undefined') {
        $('#cardOdrIn_' + inx).html('<span class="wrong">You placed this card as [' + fol + ']' + (order + 1) + '.<br><font color="#000">Score: 0/0</font></span>');
        totfolderscore--;
    } else {
        if (index === getFolOdr && order === getInsOdr) {


            crscoreassign(val, 1)
            folderscore++;
            totfolderscore++;
            //$('#cardOdrIn_'+inx).html('<span class="right">You placed this card correctly as ['+fol+']'+(order+1)+'.<br><font color="#000">Score: 1/1</font>');
            $('#cardOdrIn_' + inx).html('<span class="right">You placed this card correctly.<br><font color="#000">Score: 1/1</font>');
        }
        else if (typeof getInsOdr == 'undefined') {
            $('#cardOdrIn_' + inx).html('<span class="wrong">You placed this card as [' + fol + ']' + (order + 1) + '. This is an extra cross-reference card.<br><font color="#000"> Score: 0</font></span>');
            //folderscore--;

        }
        else if (noXRefFlag == false) {
            if (scoreAjaxData[0][folder_label].item_grading[order] == 'Correct') {
                crscoreassign(val, 1);
                folderscore++;
                totfolderscore++;
                //$('#cardOdrIn_'+inx).html('<span class="right">You placed this card correctly as ['+fol+']'+(order+1)+'.<br><font color="#000">Score: 1/1</font>');
                $('#cardOdrIn_' + inx).html('<span class="right">You placed this card correctly.<br><font color="#000">Score: 1/1</font>');
            }
            else {
                $('#cardOdrIn_' + inx).html('<span class="wrong">You placed this card as [' + fol + ']' + (order + 1) + '.<br>It should be [' + rigFol + ']' + (getInsOdr + 1) + '.<br><font color="#000">Score: 0/1</font></span>');
                totfolderscore++;
                placedIncorrect++;
            }
        }
        else {
            $('#cardOdrIn_' + inx).html('<span class="wrong">You placed this card as [' + fol + ']' + (order + 1) + '.<br>It should be [' + rigFol + ']' + (getInsOdr + 1) + '.<br><font color="#000">Score: 0/1</font></span>');
            totfolderscore++;
            placedIncorrect++;
        }
    }
}