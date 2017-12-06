var clkOn = true;
var deletedRecord = [];
var idx; //to increse index of drop area
var indexId;
var getInx;
var prevIndex, prevInTxt;
var editDatInd;
var removedElem; 
var orginalPos;
var dropLef,deg;
var getClass;
var finalPage=0;
var currAlphabet, currLetter, setTim;
var toRemArr = [] , dlt = [], goDrag = false;
var timeOut;
var md = 0;
var clost =[],crosDrop = [];
var scoreCnt=0;
var scoreArr=[];
var initScrollAmt=0;
var dragging = false; //  to prevent click while dragging
var inDevice =false;
hideMode = [1,2,3,4,10,12,13];  
var lastPos=0;	   
var starttag = false;

var enableDrag = function() {	

	$('.crossreference ,.simworkarea').draggable({
								cursorAt : [0, 0],
								zIndex:500,								
								revert : function(event, ui) {
									
											if($(this).hasClass('simworkarea')){
												$(this).data("uiDraggable").originalPosition = {
													top : $('.simworkarea').offset().top-180,
													left : $('.simworkarea').offset().left-170,
													transform:'scale(0.52)'
													
												};
											}else{

												$(this).data("uiDraggable").originalPosition = {
													top : $('.crossreference').offset().top,
													left : $('.crossreference').offset().left,					
													transform:'scale(0.9)'
												};
											}
											if(!event)
												$('.simworkcontainer .simworkarea,.simworkcontainer .crossreferenceContainter').fadeOut(500,function(){$(this).show()});
											return !event;
											
											
								},	
								helper:'clone',
								start:setCursor,
								stop:resetScale,
								drag:changCursor,
								//containment:'.cover',
								refreshPositions: true,
								cancel:'.clsCrosRef',								
								cursor:'move',
								handle:'.dragger',
								appendTo:'body',scroll: false
								});
								enableDrop();
								
								$('.simworkarea').draggable({disabled:true});
								clearTimeout(setTim);
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			//$('.simworkarea').draggable({cancel:'.nameing'});
			inDevice =true;
			
		}
		
		   if(navigator.userAgent.indexOf('Mac OS X') != -1) {
			    $('.substeping .num').css({lineHeight:'25px'});
			    $('#reviewAns .substeping .num').css({lineHeight:'33px'});
				if(1){
							if($('.substeping .names').eq(3).find('span').hasClass('numbered'))
							 {	
							$('.substeping > div:nth-of-type(4)').css({marginTop:'5px',background:'rgba(255,0,0,0.3)'});
							 }
							 if($('.substeping .names').eq(3).find('span').hasClass('underline'))
							 {
							$('.substeping > div:nth-of-type(4)').css({marginTop:'7px',background:'rgba(255,0,0,0.3)'}); 
							} 
					    }
           }
		
		$('.crossreferenceContainter').draggable({containment:'.cover',start:function(){
										
										},handle:'.draggerForParent,#noOFCrds'});		
	//$('.crossreference').draggable({disabled:true});	
	
		dragcardcheck();
	
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
			//(JSON.stringify(arr[index]) ==  JSON.stringify(element));

		//arr = arr.replace("null","");
		
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
	$('#close').off('click').on('click',closePanel);
	var folLoc, folOrder;
	var folLoc2, folOrder2;
	$.each(dataRecdJob,function(index, value){
		
		value.order=index+','+index;
		
	if(value.folderinfo.length>0){ 
		folLoc = value.folderinfo[0];
		folLoc2 = value.folderinfo[0];
		var responseTo = getElement(folLoc);
		
		folOrder = value.folderinfo[1];			
		folOrder2 = value.ansOrder[1];			
		
		if(typeof recordIndex[[folLoc]]== 'undefined'){
			recordIndex[[folLoc]] = new Array();
			responseTo.attr('data',1);
			responseTo.off('click').on('click',showRelavPanel);			
		}
		
		if(typeof recordIndex2[[folLoc]]== 'undefined' && value.ansOrder[2] == 'A')
		{
		recordIndex2[[folLoc2]] = new Array();
		recordIndex2[[folLoc]][folOrder2] = value;
		}
		
		
		
		if(typeof recordIndex3[[folLoc]]== 'undefined' && value.ansOrder[2] == 'I')
		{
		recordIndex3[[folLoc2]] = new Array();
		recordIndex3[[folLoc]][folOrder2] = value;
		}
		
		recordIndex[[folLoc]][folOrder] = value;	
        
		
				
		responseTo.off('click').on('click',showRelavPanel);
			getInx=folLoc;			
			changeFolderImg();
		
		}
		
		if(typeof value.crossAns != 'undefined') {
			
			$.each(value.crossAns,function(inx,v){
			
				var crossAnsOdr = value.crossAns;	
				var insCrsInp = v[0];			
			
				folLoc = value.folderinfo[0];
				responseTo = getElement(folLoc);
				folOrder = value.folderinfo[1];	
		//alert(recordIndex[[folLoc]].length+'crf')				
				if(recordIndex[[folLoc]]==''){
					recordIndex[[folLoc]] = new Array();
					responseTo.attr('data',1);
					responseTo.off('click').on('click',showRelavPanel);	
				}
				
				if(typeof(value.crossUnit[inx])=="undefined"){
					value.crossUnit.push({arr:[],job:1,xref:true,crosRefCount:0});					
				}
				
				for(i=0;i<insCrsInp.length;i++){
					
					value.crossUnit[inx].arr[i]=insCrsInp[i];
					
				}			
				
				value.crossUnit[inx].order=value.order;			
				recordIndex[[folLoc]][folOrder] = value;			
			
			});
			
		}
		
		if(typeof value.tickleAns != 'undefined') {
			
			
			$.each(value.tickleAns,function(inx,v){
			
				var tickleAnsOdr = value.tickleAns;	
				var insTickleInp = v[0];			
			
				folLoc = value.tickfolderinfo[inx][0];
				responseTo = getElement(folLoc);
				folOrder = value.tickfolderinfo[inx][1];	
		//alert(recordIndex[[folLoc]].length+'crf')				
				if(recordIndex[[folLoc]]==''){
					recordIndex[[folLoc]] = new Array();
					responseTo.attr('data',1);
					responseTo.off('click').on('click',showRelavPanel);	
				}
				
				if(typeof(value.tickleUnit[inx])=="undefined"){
					value.tickleUnit.push({arr:[],job:1});					
				}
				for(i=0;i<insTickleInp.length;i++){
					
					value.tickleUnit[inx].arr[i]=insTickleInp[i];
					
				}			
				
				value.tickleUnit[inx].order=value.order;			
				recordIndex[[folLoc]][folOrder] = value.tickleUnit[inx];		
				
			
			});
			
		}
		
		// responseTo.off('click').on('click',showRelavPanel);
			getInx=folLoc;			
			changeFolderImg();
	});	

	$('#close').off('click').on('click',closePanel);
		chngQues(currQues);	
		addPlacement();
		$.each(recordIndex2, function(index, value){
			if(typeof recordIndex2[index] =='undefined')
			{
				recordIndex2[index] = new Array();
			}
		})
		
		$.each(recordIndex3, function(index, value){
			if(typeof recordIndex3[index] =='undefined')
			{
				recordIndex3[index] = new Array();
			}
		})
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
			$('.dragtooldiv').eq(folLoc).attr('data',1);
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
				$('.dragtooldiv').eq(folLoc).attr('data',1);
			}
			
			value.crossUnit={};
			
			value.crossUnit.order=value.order;
			
			
			recordIndex[[folLoc]][folOrder] = value.crossUnit;		
			
		}
			
		}*/
		
	// $('.dragtooldiv').eq(folLoc).off('click').on('click',showRelavPanel);
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
		starttag = true;
		chkOnDrag=true;
	  // shwCurrentElem();
		
		 $('.dragtooldiv').css({visibility:'visible'});
		$(this).draggable('instance').offset.click = {
            left: Math.floor(ui.helper.width() / 2),	
			//top: Math.floor(ui.helper.height() / 1.985)
			top: Math.floor(ui.helper.height() / 2) + 70
         }; 
	$(ui.helper).find('.clsCrosRef').hide();
	/*$('.newSim').remove();
	$($('.simworkcontainer').clone()).appendTo('#alphabeticSimulation').addClass('newSim');*/
	  var nxtRecord =  $(this).clone();
	$('.crossreference .form > input').removeAttr('autofocus');
		$(this).find('.cross_unit').blur(); 
		$(ui.helper).find('.cross_unit').blur();
		//$( ".cross_unit" ).prop( "disabled", true );                                                                                                                                                                                                                                                                                        if (cloneArr.length!=0) {			
		if($(ui.helper).hasClass("simworkarea")){			
			dataRecd[curVal].dropped = true;										
		}else if($(ui.helper).hasClass("crossreference")){
			dataRecd[curVal].crossUnit[crosCount].dropped=true;
		}
		temp = curVal;
		temp2 = cloneCnt;
		xrefTemp = crosCount;
		
	   	updateCloneArr();	
		
	    updateNextInDrop();		
	
		//nxtRecord.find('.simworkarea').show();	
		$(ui.helper).html(nxtRecord).css({visibility:'visible'}).children().css({transform:'scale(1)',top:'0px',left:'0px'});	
		$('.crossreference ,.simworkarea').draggable({disabled:false});
		
}



var changCursor = function(e,ui) {
	var xaxis = Math.abs((window.innerWidth -1000 )/2 - e.pageX);
	
	/*if(hoverId != 'underfined' && $(hoverId).hasClass('addfolder'))
	{
		$(this).draggable('instance').offset.click = {
            left: Math.floor(ui.helper.width() / 2),	
			top: Math.floor(ui.helper.height() / 2) + 70
        }; 
	}else{
		$(this).draggable('instance').offset.click = {
            left: Math.floor(ui.helper.width() / 2),	
			top: Math.floor(ui.helper.height() / 2) + 70
        }; 
	}*/
	
	if($(this).hasClass('simworkarea'))
	{
		
		/*if(e.pageY >= initScrollAmt)
		{
			var topUpdateVal = Math.floor(ui.helper.height() / 2) + 65;			
		}
		else{
			var topUpdateVal = Math.floor(ui.helper.height() / 2) - 48;			
		}
		initScrollAmt = e.pageY; 
		$(this).draggable('instance').offset.click = {
		left: Math.floor(ui.helper.width() / 2),	
		top: Math.floor(ui.helper.height() / 2) + 70
		}; 			
		*/
		var scalecard = Math.abs(parseInt(xaxis)-1000)/1500;
		if(xaxis > 570){scalecard = 0.2003;}		
	}else{
		var scalecard = Math.abs(parseInt(xaxis)-1500)/1500;		
		if(xaxis > 570){scalecard = 0.4003;}
	}	
	if(xaxis>980){
		highlightresetfolder();
	}
	//$(ui.helper).css({transform:'scale('+scalecard+') rotate(-'+(xaxis-200*3.33)+'deg)',opacity:'1' });

	deg = Math.abs(Math.floor((xaxis-200)/5));
	
	if(xaxis > 570 || deg > 90){deg = 90}
	if(xaxis < 200 || deg < 0){deg = 0}
		$(ui.helper).css({transform:'scale('+scalecard+') rotate('+(-1*deg)+'deg)',opacity:'1' });
	 
	if(deg < 90){
				$('.highlightfol, .drogtoolname').css({'background-color': '#faf6e1'});
				$('.addfolder').css({'backgroundImage':'url(assets/images/leftguide.png)', 'background-color':'rgba(255,0,0,0.01)'});
	}
}

var finalChk;
var resetScale = function(e,ui) {
	//$('.newSim').remove();
	starttag = false;
	if(inDevice){	$( ".crossreference .cross_unit" ).prop( "disabled", false );}
	//ui.helper.css({transform:'scale(1,1)',opacity:'1'});	 
		curNum=0;
		$('.highlightfol, .drogtoolname').css('background-color', '#faf6e1')
		$('.addfolder').css({'backgroundImage':'url(assets/images/leftguide.png)', 'background-color':'rgba(255,0,0,0.01)'});
		//dataRecd[temp].dropped = false;	
		
		
		curVal = temp;
		cloneCnt = temp2;
		crosCount = xrefTemp;
		if(chkOnDrag){
			if($(ui.helper).hasClass("simworkarea")){			
				dataRecd[temp].dropped = false;	
				finalChk = "sim";									
			}else if($(ui.helper).hasClass("crossreference")){
				dataRecd[temp].crossUnit[xrefTemp].dropped = false;
				finalChk = "xref";
			}
		}
		updateCloneArr();
		
		updateNextInDrop();
}

var enableDrop = function() { 


	$('.highlightfol,.addfolder,.dummyFolder,#active-cardPanl,#trimSpace3').droppable({accept:'#inactive-cardPanl .dragCrd,.swapAreaDrop,.crossreference,.simworkarea',drop:dropfolderindex});
	
	
	//$( ".dragtooldiv,.addfolder" ).droppable({hoverClass:'hvr', out: function (){}});
}



getInxClk = 'none';
var dropfolderindex = function(e, ui) {
	
	if(starttag && folCls2 != 'undefined' && typeof folCls2&&deg != 'undefined' || dropScpt)
	{	
	
	starttag = false;
    e.stopPropagation();
	getClass = ui.draggable;
	if(!$(getClass).hasClass("job1")){
	curNum=0;
	$('.close').off('click').on('click',closePanel);
	
		/*if($(this).hasClass('dragtooldiv'))
		{
			getInx = $(this).index();
			
			folCls =  $(this);
		}else
		{
			getInx = $(this).parent().index();
			folCls =  $(this).parent();	
		}*/
	
		
//	indexId=$(this).children().eq(2);	
	if(!dropScpt){
		getInx = folCls2.index();
		startClk();	
		//alert(folCls2.index()+' '+getInx+' '+folCls2.attr('class'));
		indexId = folCls2.find('.folderindex');
		var getData = folCls2.attr('data');
		
		
		if(getData!=1) {
			folCls2.attr('data','1');		
			recordIndex[[getInx]] = new Array();
		}
	}else{
		$('.highlightfol,.addfolder,.dummyFolder').droppable({disabled:true});
	}
	
	if($(getClass).hasClass("simworkarea")){
			dataRecd[temp].dropped = true;			
			recordIndex[[getInx]].push(dataRecd[temp]);				
			chkOnDrag = false;
			//checkFinalCard();    							//move next main card on drop
	}else if($(getClass).hasClass("crossreference")){
			//ui.draggable.hide();
			
			
			dragcardcheck();			
			
			dataRecd[temp].crossUnit[xrefTemp].crosRefCount = xrefTemp;		
			dataRecd[temp].crossUnit[xrefTemp].dropped=true;		
			dataRecd[temp].crossUnit[xrefTemp].order = dataRecd[temp].order;
			
			recordIndex[[getInx]].push(dataRecd[temp].crossUnit[xrefTemp]);			
			
			$.each(dataRecd[temp].crossUnit,function(i,v){						
							dataRecd[temp].crossUnit[i].first=true;
							dataRecd[temp].crossUnit[i].order =	dataRecd[temp].order;						
												
			});
			
			chkOnDrag = false;
			crossRefDropMove();
			
			
	}else {	
			if($(ui.draggable).hasClass('dragCrd')){
				toRemv = $(ui.draggable).closest('.swapAreaDrop').index();				
			}else{
				//ui.draggable.remove();
			}
			$('#active-cardPanl .panelContainer').children().eq(toRemv).hide( "fold", {horizFirst: true }, 300,function(){$(this).remove();} );			
			console.log(recordIndex[[prevIndex]][toRemv].order[0]);
			var ccc = recordIndex[[prevIndex]][toRemv];
			$(ui.draggable).closest('.swapAreaDrop').remove();
			/*dataRecdJob.splice(ccc,0,JSON.parse(JSON.stringify(dataRecdJob[ccc])));
				$.each(dataRecdJob,function(i,v){
					//v.order =i+','+i;
					
				});*/
			//delete recordIndex[[prevIndex]][toRemv];
			recordIndex[prevIndex].splice(toRemv,1)
			recordIndex[[getInx]].push(ccc);		
			currAlphabet = getInx;
			checkRecdIndex('#active-cardPanl');
			if(recordIndex[prevIndex].length>1)
			{
			filedcardscrollfun('#inactive-cardPanl')
			}
			//recordIndex[[prevIndex]].splice(toRemv,1);				
			

				//$('<div/>',{id:'topOrder_'+i,class:'sim'}).appendTo('.panelContainer2').text(i+1);
			//$('#topOrder_'+toRemv).remove();
			
			checkEmptyFolder(getInx,'prev');
			checkEmptyFolder(prevIndex,'prev');
			comeBack();	
		// $('#totalCards').text('Total: '+recordIndex[[currAlphabet]].length).css('display','block');
		$('#cloneContainer').hide();
		chkOnDrag = false;
		
	}
	updateCloneArr();
	
	//checkFinalCard();
	
	changeFolderImg();	
	$('.dragtooldiv').css({visibility:'visible'});
	
	}
	addPlacement();
	}
	
	$('div.dragtooldiv').each(function(i,v){
			
			if($(this).find('.folderindex').html() == 0){
				$(this).find('.folderindex').hide();
			}
	});

		highlightresetfolder()
	//moveNext();
	
	//cloneArr.splice(cloneCnt,1);
	//cloneCnt=cloneArr[cloneCnt];
	
	updateNextInDrop();
	updatePercentage();
	
	
	
if((parseInt($('.dragarea .dragtooldiv').eq(activeRecdPos).find('.folderindex').text())) > 0)
{
$('.dragarea .dragtooldiv').eq(activeRecdPos).off('click').on('click',showRelavPanel);	
}
}
var finalRecordrevert = false;
var updateNextInDrop = function(){
return;
	if(cloneArr.length==cloneCnt){
		if(cloneArr.length==0){
			$('.simworkcontainer').hide();
		
		}
		else if(cloneArr.length>0)
		{
			getCrosPrev();
			$('.simworkcontainer').show();
			
		}
		
		
	}
	
	if (cloneArr.length!=0) {		
	   
		
		showMainAndCros();
		if (cloneArr.length==1) {
			$('.nextCros').off('click').css('opacity','0.5');
		}
		$('#createGuidebtn,.addFldrbtn').css({opacity:1,cursor:'pointer'});
		
	    if(finalRecordrevert)
		{
			if($('.simworkarea ').hasClass('scaleCard')){
				$('.dragger').show();
			}
			
			$('.simworkcontainer .choseactn').html('RECORD 1 OF 1');
		 finalRecordrevert = false;
			if( finalChk == "sim" ){
				$('.simworkcontainer').show().css({visibility:'visible'});
				$('.simworkcontainer .simworkarea .mCustomScrollBox').css({visibility:'visible'});
				$('.simworkcontainer .simworkarea').css({visibility:'visible'});
			}else{
				$('.simworkcontainer').show().css({visibility:'visible'});
				$('.crossreferenceContainter').css({visibility:'visible'});
			
			}
		}
		
		if(cloneArr.length>0)
			$('[name = submitconfirmation]').css({opacity:0.5,cursor:'default',background:'#FFF',color:'rgb(90, 74, 66)'});	
		    $('.dummySubbtn').show();
			
	    } else {		
		$('.nextCros').off('click').css('opacity','0.5');
			 $('.prevCros').off('click').css('opacity','0.5');
		if(cloneArr.length==0  && !chkOnDrag)
			$('[name = submitconfirmation]').css({opacity:1,cursor:'pointer',background:'#e75028',color:'#fff'});
		    $('#createGuidebtn,.addFldrbtn').css({opacity:0.5,cursor:'default'});
			$('.dummySubbtn').hide();
		finalRecordrevert = true;
		$('.simworkcontainer').show().css({visibility:'hidden'});
		$('.simworkcontainer .simworkarea .mCustomScrollBox,.crossreferenceContainter').css({visibility:'hidden'});
		$('.simworkcontainer .simworkarea').css({visibility:'hidden'});
		$('.hideBtns').show();
		startToPlay('stop',0)
				$('.audPause').css({background: 'url(./assets/images/playbtn.png) no-repeat'});	
		$('.audPause1').css({background: 'url(./assets/images/playbtn.png) no-repeat'});
	    $('.startAud, .audPause').css('cursor','default').css('opacity','0.5');
	    $('.tcent .mCSB_container').html(simaction.file);
		$('.containersubheadone').html(simactionTitle.file)
		$('.containersubheadone').css({marginLeft: '0px',marginTop: '-22px',fontSize: '19pt'});
		$('.tcent').animate({'margin-left': '75px', 'width': '800px'},100);
		//$('.subinput').css('margin-top','30px');
		//$('.substeping').css('margin-top','25px');
		$('.dragger').hide();
		
	}
	if(!$('.simworkarea ').hasClass('scaleCard')){
		$('.simworkarea').css({visibility:'visible'});
		$('.simworkarea .mCustomScrollBox').css({visibility:'visible'});
		if(dataRecd[currQues].crossUnit.length>0){
			$('.crossreferenceContainter').css({visibility:'visible'});
		}else{
			$('.crossreferenceContainter').css({visibility:'hidden'});
		}
	 $('.tcent .mCSB_container').html(simaction.alphabeticSimulation);
				$('.containersubheadone').html(simactionTitle.alphabeticSimulation);
				
	}else{ 
		if(cloneArr.length>0){			
			$('.tcent').css({marginLeft: '370px',width: '540px',height:'42px',marginTop: '7px'});
		   $('.containersubheadone').css({marginLeft: '247px',marginTop: '-12px',fontSize: '17pt'});						
		}
					
					
   }
  
}
var moveNext = function(){
	var xxx= []
	var mveNxt = cloneDrop.filter(function(item,index,arr){
			if(item!=1 && index>=cloneCnt){
				xxx.push(index);
			}
	});
	cloneCnt=xxx[0];
	if(typeof cloneCnt != 'undefined')
		showMainAndCros();	
	
}
var crossRefDropMove = function(){curNav = 'none';
	if(dataRecd[curVal].crossUnit.length-notDropped.length < 0)
			{	$('.simworkcontainer .choseactn span').hide();
				$('.crossbtnBadge').hide();
				$('.choseactn').css('text-align','center');
			}
			else {
				
				$('.simworkcontainer .choseactn span').show(); 
				$('.crossbtnBadge').show();
				$('.choseactn').css('text-align','center');
			}
			$('.simworkcontainer .choseactn span').html('FILED CROSS-REFERENCES: '+(dataRecd[curVal].crossUnit.length-notDropped.length+1))
			
			
			/*if((dataRecd[curVal].crossUnit.length-notDropped.length)+1 == dataRecd[curVal].crossUnit.length)	{
				
				
				//crosCount = closestOnDrop(crosCount);	//today
				storeCrossRef(crosCount);
				$('.crossreference').draggable({disabled:true}).css({opacity:'0.5'}).prop("readonly", true);
				$('.clsCrosRef').off('click').css({opacity:0.5,cursor:'default'});	
				$('.crossreferenceContainter').css('opacity','0.002');			
				$('.crossbtn1').eq(crosCount).removeClass('activeClk').off('click').css({opacity:'0.5',cursor:'default'});	
				$('.crossRefOff').hide();
				$('.crossreference .cross_unit').val('');
				if(!dataRecd[curVal].dropped){	$('.simworkarea').css('opacity',1);}
			}
			else{
				
				$('.crossreference').draggable({disabled:false});				
			}	*/
				
}

var scorePros = [],folLst={};

var addPlacement = function() {

	scorePros=[];
	folLst ={};
	$.each(dataRecdJob,function(i,v){
		v.order =i+','+i;
	});
	
	$.each(recordIndex,function(index,value){				
		if(typeof value !== 'undefined'){			
			$.each(value,function(inx,val){
			
				if(typeof val.name != 'undefined'){
					
					val.folderLocation = [index,inx];
					val.folderinfo = [index,inx];
					var mainCrd = val.order.split(',');
					
					/*if(val.job == 1){										
						dataRecdJob[mainCrd[0]].folderLocation = [index,inx];						
					}else{dataRecd[mainCrd[0]].folderLocation = [index,inx]}*/
				}else{
					//val.folderLocation = [index,inx];
					var mainCrd = val.order.split(',');
					var getMainXref = val.crosRefCount;
					
					val.folderLocation = [index,inx];
					val.folderinfo = [index,inx]
					/*if(val.job == 1){  
						dataRecdJob[mainCrd[0]].crossUnit[getMainXref].folderLocation = [index,inx];	
					}else{						
						dataRecd[mainCrd[0]].crossUnit[getMainXref].folderLocation = [index,inx];
					}*/
				}
			});

		}
		
	});

}
var closestOnDrop = function(closestTo) {
	
	getDroppedValues();
		
	//dataRecd[curVal].crossUnit.dropArr=	crosDrop;
	if(clost.length !=0){			
	  
		
		
	
		if(curNav == 'prev'){
			closestTo = clost[(clost.indexOf(closestTo+1))-1]
		}else if(curNav == 'next'){
			closestTo = clost[(clost.indexOf(closestTo-1))+1]
		}
		var nearest = clost.reduce(function (prev, curr) {
			if(curNav == 'prev' || curNav == 'next'){
				return (Math.abs(curr - closestTo) < Math.abs(prev - closestTo) ?curr  : prev);
			}else{
				return (Math.abs(curr - closestTo) > Math.abs(prev - closestTo) ?prev  : curr);
			}
		   
		});	
		
		
		
		return nearest;
		
		
		//return clost[clost.indexOf(closestTo+1)];
	}else{
		return 0;
	}

}
var getDroppedValues = function(){
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
}
var comeBack = function() {

	//prevIndex=getInx;
	
	$('.calout').show();
}
var checkEmptyFolder = function(aIndexVal,toUpd) {
//alert(toUpd);
var responseTo;

	if(aIndexVal >= parseInt($('.dragarea').children().length)){	
		var redc = aIndexVal - parseInt($('.dragarea').children().length)	
		responseTo = $('.dragarea2 .dragtooldiv').eq(redc);
	}else{
		responseTo = $('.dragarea .dragtooldiv').eq(aIndexVal);
	}
	
	if(recordIndex[[aIndexVal]].length>0) {		
			responseTo.find('.folderindex').show().text(recordIndex[[aIndexVal]].length);
			
		}
		else{	//checkRecdIndex();
		
				responseTo.find('.folderindex').hide();
				
				responseTo.off('click');
				if(toUpd!='match'){
					if(whichContainer == '.cardPanel')
					{
				$('.parentCardPanel').fadeOut();
				
				$(".dummypanelCover").hide();	
				$(".cardPanel").getNiceScroll().hide();
				$('.callOut').css({visibility:'hidden'});
				}
				else
				{
					if($('#activePanel #active-cardPanl .panelContainer').children().length == 0 && $('#inactivePanel #inactive-cardPanl .panelContainer').children().length == 0)
					{
						
						$('.parentCardPanel,#activePanel,#inactivePanel').fadeOut();
				
				$(".dummypanelCover").hide();	
				$(".cardPanel").getNiceScroll().hide();
				$('.callOut').css({visibility:'hidden'});
					}
					else
					{	
						$('.parentCardPanel,#activePanel,#inactivePanel').show();
					}
					// alert($('#activePanel #active-cardPanl .panelContainer').children().length)
					// alert($('#inactivePanel #active-cardPanl .panelContainer').children().length)
				}
				}
				//$('.dragtooldiv').css({visibility:'visible'});
		}
}
var checkFinalCard = function() {
	hideSimArea();
	if (uniqArr.length!=1 && dataRecd[curVal].dropped) {
	
		getDroppedValues();
		
		if(clost.length==0){
			uniqArr.splice( currQues, 1 );			
			chngQues(currQues);
			if (uniqArr.length==1) {
				$('.next,.nextmin').off('click').css('opacity','0.5');
			}
			$('[name = submitconfirmation]').css({opacity:0.5,cursor:'default'});
            $('.dummySubbtn').show();			
			$('.simworkcontainer').show();
			$('.hideBtns').hide();
			
		}
			
	} else if(dataRecd[curVal].dropped){
		
		$('.simworkarea,.simworkarea .mCustomScrollBox ').css({visibility:'hidden'});	
		$('.next,.nextmin').off('click').css('opacity','0.5');
		$('.prev,.prevmin').off('click').css('opacity','0.5');
		$('.simworkarea').draggable({disabled:true});
		//$('.simbtn').off('mousedown');
		$('.simworkcontainer .choseactn').html('Card 0 of 0');
		$('.simworkarea').children().css({visibility:'hidden'});
		uniqArr=[];
		currQues=0;
		$('.simbtn,.crossbtn, .hintbtn').css('background','#5a4a42').css('cursor','pointer').css('opacity','0.5');
		$('.offSteps').css('width','175px').css('height','137px').show();
		$('.crossbtnBadge').hide();
		hintshowtag = false;
		$('#tooltip').hide();
		$('[name = submitconfirmation]').css({opacity:1,cursor:'pointer'});
		$('.simworkcontainer').hide();
		$('.hideBtns').show();
		$('.dummySubbtn').hide();
		playAudio('stop',0)
				$('.audPause').css({background: 'url(./assets/images/playbtn.png) no-repeat'});	
		$('.audPause1').css({background: 'url(./assets/images/playbtn.png) no-repeat'});
	    $('.startAud, .audPause').css('cursor','default').css('opacity','0.5');
	    $('.tcent .mCSB_container').html(simaction.file);
		$('.containersubheadone').html(simactionTitle.file)
		
	}
	
	
}
var changeFolderImg = function() {
	/*if(getInx == 0)
	{
		$('.dragtooldiv').eq(getInx).find('img').attr('src','assets/images/folderopennum.png');
	}
	else*/
	var responseTo, responseToNew, responseToNew2;
	if(getInx >= parseInt($('.dragarea').children().length)){	
		var redc = getInx - parseInt($('.dragarea').children().length)	
		responseTo = $('.dragarea2 .dragtooldiv').eq(redc);
	}else{
		responseTo = $('.dragarea .dragtooldiv').eq(getInx);
		// responseToNew = $('.dragarea3 .dragtooldiv').eq(getInx);
		// responseToNew2 = $('.dragarea4 .dragtooldiv').eq(getInx);
	}
	
	
	responseTo.find('.folderindex').show();
	// responseToNew.find('.folderindex').show();
	// responseToNew2.find('.folderindex').show();
		
	
	if(recordIndex[[getInx]].length ==0)
	{
		responseTo.find('.folderindex').hide();
	}
	else
	{
		responseTo.find('.folderindex').show();
		responseTo.find('.folderindex').text(recordIndex[[getInx]].length);
	}
	
	
	// if(recordIndex2[[getInx]].length ==0)
	// {
		// responseToNew.find('.folderindex').hide();
	// }
	// else
	// {
		// responseToNew.find('.folderindex').show();
		// responseToNew.find('.folderindex').text(recordIndex2[[getInx]].length);
	// }
	
	
	// if(recordIndex3[[getInx]].length ==0)
	// {
		// responseToNew2.find('.folderindex').hide();
	// }
	// else
	// {
		// responseToNew2.find('.folderindex').show();
		// responseToNew2.find('.folderindex').text(recordIndex3[[getInx]].length);
	// }
	
	
	if(recordIndex[[getInx]].length == 0){
		responseTo.off('click');
	}
	responseTo.find('.folderindex').text(recordIndex[[getInx]].length);
	// responseToNew.find('.folderindex').text(recordIndex2[[getInx]].length);
	// responseToNew2.find('.folderindex').text(recordIndex3[[getInx]].length);
		
}

var checkRecdIndex = function(apnTo) {		
	changeFolderImg();
	idx=0;	
	// $(apnTo+' #scrolldrag,'+apnTo+' #scrollcards').remove();	
	$(apnTo+' .panelContainer,'+apnTo+' .panelContainer2').remove();	
	$('<div/>',{class:'panelContainer2'}).appendTo(apnTo);	
	$('<div/>',{class:'panelContainer'}).appendTo(apnTo);
	// $('<div/>',{id:'scrollcards'}).appendTo(apnTo);
	// $('<div/>',{id:'scrolldrag'}).appendTo(apnTo+' #scrollcards');

	$(apnTo+' .panelContainer').attr('name',currAlphabet);	
	
	//$('.swapArea').children().empty();
	
	$.each(recordIndex[[currAlphabet]],function(i,recdIndVal){	
		//$('<div/>',{id:'swapOrder_'+i,class:'swapOrderNums'}).css({left:'100px'}).appendTo('.panelContainer').text(i);
		$('<div/>',{id:'topOrder_'+i,class:'sim'}).appendTo(apnTo+' .panelContainer2').text(i+1);
		
		if(typeof recdIndVal.name !='undefined')
		{
			swapInside(i,recdIndVal,apnTo+' .panelContainer');		
		}
		else
			addCrossRef(i,recdIndVal.crossUnit[0],apnTo+' .panelContainer','notAns');
		//$('#swapAreaDrop_'+i).css({zIndex:i});
		idx++;
	});
	$('.panelContainer .swapAreaDrop').css('cursor','pointer')
	if(recordIndex[[currAlphabet]].length>1)
	{
		$('.panelContainer .swapArea,.panelContainer .swapAreaDrop .cross_unit').css('cursor','e-resize')
		
	}
	
	$('<div/>',{class:'dg',title:'Drag to Folder'}).appendTo('.dragCrd');	
	//$('.sim').css({position:'fixed'});
	$('#totalCards').text('Total: '+recordIndex[[currAlphabet]].length);
	
	if($("#active-cardPanl .panelContainer").children().length == 0)
	{
	$('#totalCardsActive').hide();
	}
	else
	{
	$('#totalCardsActive').text('Total: '+$("#active-cardPanl .panelContainer").children().length).show();
	}
	
	if($("#inactive-cardPanl .panelContainer").children().length == 0)
	{
	$('#totalCardsInactive').hide();
	}
	else
	{
	$('#totalCardsInactive').text('Total: '+$("#inactive-cardPanl .panelContainer").children().length).show();
	}
	
	
	
	
	//$('.panelContainer,.panelContainer2').css({transform:'scale(0.4)',transformOrigin:'0 0'});,containment:'#alphabeticSimulation'
	$('#cardPanl .panelContainer .swapArea').css({transform:'scale(0.35)',transformOrigin:'0 0'});
	$('#activePanel .panelContainer .swapArea').css({transform:'scale(0.25)',transformOrigin:'0 0'});
	$('#inactivePanel .panelContainer .swapArea').css({transform:'scale(0.25)',transformOrigin:'0 0'});
	$('.panelContainer').sortable({start:getPrevIndex,tolerance: 'pointer',sort:changCursor2,stop:restScl,update:swapOrder,refreshPositions: true,cancel:'.swapOrderNums,.dragCrd',axis:'x',handle:'.swapArea'});
	
	
	$('.panelContainer').children().find('.swapArea').off('click touchend').on('click touchend',zoomCard);
	
	$('.cardPanel').css({width:($('.cardPanel .panelContainer').children().length*285)+'px'})
	$('#inactive-cardPanl').css({width:($('#inactive-cardPanl .panelContainer').children().length*220)+'px'});
	$('#active-cardPanl').css({width:($('#active-cardPanl .panelContainer').children().length*220)+'px'});
	lastPos=0;
	$('.folOptions').off('click').on('click',openFolAction);
	filedcardscrollfun(apnTo);
	
}
var tchEvt,tchEvtEnd;
var startClk = function() {	
	$('.dragtooldiv').eq(getInx).off('mouseup').on('mouseup',showRelavPanel);
	
	$('.dragtooldiv').off('mousedown touchstart').on('mousedown touchstart',function(e){
		//console.log(e.page.x +' '+e.currentTarget.id);			
	});	
	//$('.dragtooldiv').eq(getInx).off('touchend').on('touchend',function(e){console.log(e.pageX +' '+e.currentTarget.id)});	
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
		//	$('.containersubheadone').text(tchEvt+' start');
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
var diffchk = function(a, b){
	return Math.abs(a-b);	
}
var zoomCard = function(){
	/**/
	if(!dragging){
		$('.footer').css('z-index','0');
		
		$('#zoompopup').show()
		$('#cloneContainer').empty().show();
		if($('.parentCardPanel').is(":visible")){			
			$($(this).parent().clone()).appendTo('#cloneContainer');
			if(!$("#cloneContainer .swapArea").children().hasClass('form'))
			{
				$("#cloneContainer .swapArea").addClass('scrollBar');
			}
		}else{
			if(cloneArr[cloneCnt].indexOf('m') != -1){
				$($('.simworkcontainer').clone()).appendTo('#cloneContainer');
			}else{
				$($('.simworkcontainer .crossreference').clone()).appendTo('#cloneContainer');
			}
		}
	$("#zoompopup .mCSB_scrollTools_vertical").remove();
	$("#cloneContainer .swapArea").css({transform:'scale(1)'});
	$("#cloneContainer .simworkcontainer").children().hide();
	$("#cloneContainer .simworkcontainer .simworkarea").show();
	$("#cloneContainer .simworkcontainer").css({transform:'scale(1.2)',left:'132px',top:'190px'});
	$("#cloneContainer .swapAreaDrop").css({position:'absolute',transform:'scale(0.7)'});
	$("#cloneContainer input").prop('disabled', true);
	$("#cloneContainer .swapArea").css({border:'5px solid transparent'});
		$(".scrollBar").mCustomScrollbar({
					theme:"3d-dark",
					axis:"y",
					advanced: {
					updateOnContentResize: true
					}
					});
				
				
				$('<div/>',{id:'close2'}).appendTo('#cloneContainer').html('&nbsp;').attr({'title':'close'});
				$('#close2').off('click').on('click',function(){ 	$('#zoompopup').hide();
					$('#cloneContainer').empty();
					$('.footer').css('z-index','unset');
				});		
				
				$('#cloneContainer .swapAreaDrop').find('.editClk').remove();
				$('#cloneContainer .mCSB_container').css('top','0px');
			
				
				
		
	}else{
		
		
	}
//	$("#cloneContainer .swapArea .form").css({'background':'red', 'height':'176px'})
}
var dropScpt = 0;
var getRmvVal = function(e,ui){
	dropScpt = 1;
	prevIndex = prevFolder;	
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
			$($(this).closest('.swapAreaDrop').clone()).appendTo(ui.helper).css({position:'absolute',left:'70px',right:'0px',top:'-40px',margin:'auto',transform:'scale(0.58)',transformOrigin:'0 0'});
			
			$(ui.helper).find('.dg').text('').css({"width":"167px"});
		}else{
			
		}
		
}
var changCursorClone = function(e,ui){
	topstartpoint =200;
	var xposition = window.innerWidth< 1000? e.pageX  : (e.pageX -(window.innerWidth-1000)/2); 
	
	var scalecard = Math.pow((parseInt(e.pageY)/topstartpoint),4);
	if(scalecard < 0.2) {scalecard = 0.2;}
	if(scalecard > 1) {scalecard = 1}
	
		//$(ui.helper).find('.swapArea').css({transform:'scale('+0.4+')',opacity:'1'});
		//ui.position.left/=scalecard;
		//ui.position.top/=scalecard;
}
var activeRecdPos;
var fromActiveArea = true;
var showRelavPanel = function(e) {
var ctl = e.which||e.keycode;
if(ctl == 1 || inDevice){
e.preventDefault();	
if(clkOn)		
	{	
	$('#active-cardPanl,#inactive-cardPanl').empty()	
	$('.copyFol,.moveFol').removeClass('activeClk');
	
    $('.dummypanelCover').show();	
	getInxClk = $(this).index();
	
	activeRecdPos = getInxClk; //holds active record index
	if($(this).parent().hasClass('dragarea2')){	
		getInxClk = getInxClk+parseInt($('.dragarea').children().length);
		fromActiveArea = false;
	}
	else
	{
	fromActiveArea = true;
	}
	
	$('.parentCardPanel').attr('name',getInxClk);	
	$('.parentCardPanel').attr('letter',$(this).find('.addfolder').text());	
	currLetter = $('.parentCardPanel').attr('letter');
	
	if($(this).parent().hasClass('dragarea2')){	
		$('#alphabet').text(currLetter+" (Inactive)").css('left','20px');
		$('.moveFol').attr('title','Move this folder and all of its records to the Active Records file drawer.');
	}
	else
	{
	$('#alphabet').text(currLetter+" (Active)").css('left','20px');
	$('.moveFol').attr('title','Move this folder and all of its records to the Inactive Records file drawer.');
	}
	
	getInx = $('.parentCardPanel').attr('name');
	currAlphabet = getInx;
	indexId = $(this).find('.folderindex');
	
	$(".cardPanel").show();
	if(recordIndex[[getInx]].length>0){		
		$('.parentCardPanel').fadeIn();	
// .cardPanel[name=my]		
		checkRecdIndex('.cardPanel');	
			//$('#toolsarea').hide();	
			
	}
	 if(recordIndex[[getInx]].length<=3)
    {
		$('#scrollcards').hide();
	 $('#totalCards').css('display','block')
	}else{
		$('#scrollcards').show();
		$('#totalCards').css('display','block')
		}
		$('.leftDrawerArrow, .rightDrawerArrow').show();
	var lef = $(this).position().left;	
  
	//resetClone();
	
	$(document).ready(function(){
		if(!inDevice){
			$(".cardPanel").show();
		}
		$('.cardPanel').scrollTop(0);
	});
	updateStackOrder();
	$('#scrolldrag,#scrolldrag2,#scrolldrag3').css({left:0});		
	$('#trimSpace,#trimSpace2,#trimSpace3').scrollLeft(0);		
	// filedcardscrollfun();
	
	if($(this).parents().is(".dragareaInactive"))
	{
		// $("div.copyFol.folOptions.activeClk").hide()
		$("div.copyFol.folOptions").hide();
		$("div.moveFol.folOptions").css('margin-left','85px');
		
	}
	else
	{
		// $("div.copyFol.folOptions.activeClk").show()
		$("div.copyFol.folOptions").show();
		$("div.moveFol.folOptions").css('margin-left','20px');
	}
	
	// $("div.moveFol.folOptions.activeClk").show()
		$("div.moveFol.folOptions").show()

		
	if($('.dragarea2').children().length>0 && $(this).parents().is(".dragarea"))
	{
var mainLetter = $(".parentCardPanel").attr('letter').toString();


$('.dragarea2 .dragtooldiv').each(function(index) {

var go = $(this).find('.addfolder').text().toString();
    if(go === mainLetter)
	{
		$('.moveFol').css('display','none');
	}
})
	}
}
}	
$('.crossreference .form > input').removeAttr('autofocus');
}
var resetClone = function(){
	$('.dragtooldiv').css({visibility:'visible'});
	$('.dragtooldivAnim').css({visibility:'hidden'});
}
var editDataClk = function(){
	
	$('.editclk').off('mousedown touchend').on('mousedown touchend',editData);
	$('.dragCrd').draggable({ helper:'clone',appendTo: "body",start:getRmvVal,drag:changCursorClone,stop:restScl,zIndex:1000,containment:'.cover',refreshPositions: true,cursor:'move'});
}
var removAll = true;
var whichContainer;
var editData = function(e){ 
// e.stopPropagation();
    var ctl = e.which||e.keycode;
	if(ctl == 1 || inDevice){
	e.preventDefault();	
	if($(this).hasClass('codeEditIcon') && typeof dataRecd[curVal].crossUnit != 'undefined'){	

	   if(dataRecd[curVal].crossUnit.length>0){
				removAll  = true;		
				removedElem = dataRecd[curVal].order;
				if(typeof removedElem != 'undefined'){	
				orginalPos = removedElem.split(',');
				crosCount=0;		
				placeItBack();
				
				
				if(dataRecd[orginalPos[1]].crossUnit.length >0){			
					$.each(dataRecd[orginalPos[1]].crossUnit[0].dropArr,function(i,v){
						dataRecd[orginalPos[1]].crossUnit[v].dropped=false;
					});	
				}
				}
			}
		
		//checkEmptyFolder(currAlphabet,'curr');
	}else if(!$(this).hasClass('codeEditIcon')){
		var delContent = '';
		$(this).attr('data','remove');
		var removeCardIndex = $('.editclk[data="remove"]');
		$(removeCardIndex).closest('.swapArea').addClass('overlay');
		$(removeCardIndex).closest('.swapArea').find('input').css('background-color','yellow');
		$(removeCardIndex).closest('.swapArea').find('.quantityDetails th,.quantityDetails tr,.quantityDetails tr:nth-child(2n)').css('background-color','yellow');
		$(removeCardIndex).closest('.swapArea').find('.transactionDetails th,.transactionDetails tr,.transactionDetails tr:nth-child(2n)').css('background-color','yellow');
		
		
		doConfirm2(delContent, function yes() {
			
			
			
	    removAll  = false;
		editDatInd = $(removeCardIndex).closest('.swapAreaDrop').index();
		e.stopPropagation();
		whichContainer = $(removeCardIndex).closest('.panelContainer').parent().attr('id');
		console.log(whichContainer);
		if(whichContainer == 'inactive-cardPanl')
		{
			
		}
		currAlphabet = parseInt($(removeCardIndex).closest('.panelContainer').attr('name'));
		if(typeof(recordIndex[[currAlphabet]][editDatInd].order) != 'undefined'){
			removedElem = recordIndex[[currAlphabet]][editDatInd].order;
			recordIndex[[currAlphabet]][editDatInd].dropped = false;
			var ccc = dataRecdJob.indexOf(recordIndex[[currAlphabet]][editDatInd]);
			cloneCnt = recordIndex[[currAlphabet]][editDatInd].revtBak;	
            deletedRecord.push(recordIndex[[currAlphabet]][editDatInd])			
			recordIndex[[currAlphabet]].splice(editDatInd,1);	
		
			
			dataRecdJob.splice(ccc,1);
			
				$.each(dataRecdJob,function(i,v){
					//v.order =i+','+i;
				});			
			orginalPos = removedElem.split(',');
			//dataRecd[orginalPos[0]].dropped = false;				
			placeItBack();	
			finalChk = 'sim';	
		}	
		else{		
		
			removedElem = recordIndex[[currAlphabet]][editDatInd].order;		
			crosCount = recordIndex[[currAlphabet]][editDatInd].crosRefCount;			
			recordIndex[[currAlphabet]][editDatInd].dropped = false;
			cloneCnt = recordIndex[[currAlphabet]][editDatInd].revtBak;
			recordIndex[[currAlphabet]][editDatInd].folderLocation = [];			
			recordIndex[[currAlphabet]].splice(editDatInd,1);
			orginalPos = removedElem.split(',');
			//dataRecd[orginalPos[0]].crossUnit[crosCount].dropped = false;
			//placeItBack();	//to remove crossref with maincard from folder
			finalChk = 'xref';	
		}
		if(whichContainer == 'inactive-cardPanl')
		{
			whichContainer = '#inactive-cardPanl'
		checkRecdIndex('#inactive-cardPanl');
		}
		else if(whichContainer == 'active-cardPanl')
		{
			whichContainer = '#active-cardPanl'
			checkRecdIndex('#active-cardPanl');
		}
		else
		{
			whichContainer = '.cardPanel'
			checkRecdIndex('.cardPanel');
		}
		checkEmptyFolder(currAlphabet,'curr');
			
			
			
			
			
			
			$('.editclk[data="remove"]').removeAttr('data');
			$(removeCardIndex).closest('.swapArea').removeClass('overlay');
		$(removeCardIndex).closest('.swapArea').find('input').css('background-color','white');
		$(removeCardIndex).closest('.swapArea').find('.quantityDetails th,.quantityDetails tr').css('background-color','white');
		$(removeCardIndex).closest('.swapArea').find('.transactionDetails th,.transactionDetails tr').css('background-color','white');
		
		$(removeCardIndex).closest('.swapArea').find('.quantityDetails tr:nth-child(2n),.transactionDetails tr:nth-child(2n)').css('background-color','#CCC');
		filedcardscrollfun(whichContainer);
		addPlacement();
		},function no(){
			$('.editclk[data="remove"]').removeAttr('data');
			$(removeCardIndex).closest('.swapArea').removeClass('overlay');
			$(removeCardIndex).closest('.swapArea').css('background-color','white');
		$(removeCardIndex).closest('.swapArea').find('input').css('background-color','white');
		$(removeCardIndex).closest('.swapArea').find('.quantityDetails th,.quantityDetails tr').css('background-color','white');
		$(removeCardIndex).closest('.swapArea').find('.transactionDetails th,.transactionDetails tr').css('background-color','white');
		$(removeCardIndex).closest('.swapArea').find('.quantityDetails tr:nth-child(2n),.transactionDetails tr:nth-child(2n)').css('background-color','#CCC');
		})
		e.stopPropagation();
		
			
		
	}	
	
	addPlacement();

	if(typeof orginalPos != 'undefined'){
		if(uniqArr.indexOf(parseInt(orginalPos[1]))==-1)
		{
				uniqArr.push(parseInt(orginalPos[1]));
				
		}
			//placeItBack();
		uniqArr.sort(sortFunction);		
		//updateCloneArr();	
		currQues = uniqArr.indexOf(parseInt(orginalPos[1]));
		$('.simworkcontainer').show();
		if($('.simworkarea ').hasClass('scaleCard'))	
			//showMainAndCros();		
		$('.hideBtns').hide();
	}
	if($(this).hasClass('codeEditIcon')){
		$('.fileBtn').attr('data-click-state',0);
		
			// hideFolder();
		       /* $('.tcent .mCSB_container').html(simaction.alphabeticSimulation);
				$('.containersubheadone').html(simactionTitle.alphabeticSimulation);
				$('.containersubheadone').css({marginLeft: '0px',marginTop: '-22px',fontSize: '19pt'});
		$('.tcent').animate({'margin-left': '80px', 'width': '800px'},100);	*/
	}		
	if($('.simworkarea ').hasClass('scaleCard')){		
		$('#toolsarea').show();
	}
	$('[name = submitconfirmation]').css({opacity:1,cursor:'default'});
	$('.dummySubbtn').show();
	$('#createGuidebtn,.addFldrbtn').css({opacity:1,cursor:'pointer'});	
		
	
	// $('.cardPanel').scrollLeft((getInx-1)*270)
	
	if(recordIndex[[getInx]].length<=3)
    {
		// $('#scrollcards').hide();
	}else{
		// $('#scrollcards').show();
	}
   finalRecordrevert = true;
	//updateNextInDrop();
	
if($(this).hasClass('codeEditIcon')){
	//$('.simworkarea .mCustomScrollBox').css({visibility:'visible'});
}
	$('.drogtoolname').show();
	$('.simworkcontainer').hide();
	}
	startToPlay('file',0);
}

function doConfirm2(msg, yesFn, noFn) {
    var confirmBox = $("#dltConfirmBox");
    // confirmBox.find(".message").html(msg);
    confirmBox.find(".agree,.disagree").unbind().click(function () {
        confirmBox.hide();
		 $('#parentCardPanelBlocker').hide();
    });
    confirmBox.find(".agree").click(yesFn);
    confirmBox.find(".disagree").click(noFn);
    confirmBox.show();
		   $('#parentCardPanelBlocker').show();
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
						if(typeof(v.order) != 'undefined'){;	
						var gettt = v.order.split(',');
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
				
				//recordIndex[dlt[i][0]][dlt[i][1]].dropped
				
			
				recordIndex[dlt[i][0]][dlt[i][1]].folderLocation = [];
				
				recordIndex[dlt[i][0]].splice(dlt[i][1],1);
				checkEmptyFolder(dlt[i][0],'match');
				
				
			}				
		}
	
	 $('.hideAudio').hide();		
	 //progressbarFun();

	}
var sortFunction = function(a,b){

	var indexA = conArr.indexOf(a);
	var indexB = conArr.indexOf(b);
	
	if (indexA < indexB) {
		return -1;
	}else if (indexA > indexB) {
		return 1;
	}else {
		return 0;
	}
}
var getPrevIndex = function(e,ui) {
	prevIndex = prevFolder;
	currAlphabet = parseInt($(ui.item).parent().attr('name'));
console.log(currAlphabet+' '+prevIndex);
	toRemv = $(this).index();	
	toRemv = ui.item.index();
	
	if($('.trimSpace').scrollLeft()!=0 && lastPos ==0)			
	{		
		lastPos=1;		
		$('.panelContainer').sortable("refreshPositions");		
				
	}
	/*toRemv = toRemv.split('_')[1];*/
	$(this).attr('data-previndex', ui.item.index());
	
		  if(prevIndex==$('.parentCardPanel').attr('name')){
			moveBack = prevIndex;
			//$('.dragtooldiv').eq(prevIndex).css({visibility:'hidden'});
			//$('#dragtooldivAni_'+prevIndex).css({visibility:'visible'});
		  }

	/*$(this).sortable('instance').offset.click = {
            left: Math.floor(ui.item.width() / 2),
            top: Math.floor(ui.item.height() / 2)
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
	dropScpt = 0;
	//$('.panelContainer').children().off('click').on('click',zoomCard);
}
var temparr = [];
var newFlag = true;
var swapInside = function(i,objVal,appendClass) {	
// if(newFlag)
// {
	// newFlag = false;

// $('.dragareaall').clone().appendTo(".testNew");
		// $('.testNew').append('<div id=dragtooldiv_'+1+' class="dragtooldiv folParent highlightfol folder"><span class="lefCurve"></span><div class="addfolder folParent highlightfol">'+(foldertypeandName[0][1])+'</div><span class="drogtoolname">'+(foldertypeandName[0][1])+'</span><span class="folderindex">'+0+'</span><span class="drogtoolnum">'+0+'</span><div id="clsFol" class="dltFolder"></div><span class="rigCurve"></span><div class="dummyFolder"></div></div>');
		// }
	
	$('<div/>',{id:'swapAreaDrop_'+i,class:'swapAreaDrop'}).appendTo(appendClass);		
	
	$('<div/>',{id:'swapArea_'+i,class:'swapArea'}).appendTo(appendClass+' #swapAreaDrop_'+i);
	var getId=$(appendClass).find('.swapArea').eq(i).attr('id');	

	$('<div/>',{id:'card'+i,class:'carDrop'}).appendTo(appendClass+' #'+getId);
	$('<div/>',{class:'cdsname nameIns'+i}).appendTo(appendClass+' #card'+i);
	$('<ul/>',{class:'card card'+i}).appendTo(appendClass+' #card'+i);
	$('<p/>',{class:'forPushPara'+i}).appendTo(appendClass+' #card'+i);
	$('<div/>',{class:'editclk'}).appendTo(appendClass+' #swapArea_'+i);
	$('<div/>',{class:'dragCrd'}).appendTo(appendClass+' #swapAreaDrop_'+i);
	$('<div/>',{class:'cardNum'}).appendTo('#swapArea_'+i);
	 $('.editclk').attr('title', 'Destroy record');
	$('#swapArea_'+i+' .cardNum').text(objVal.order);
	pushDataPanel(i,objVal,appendClass);
	$(appendClass+' #swapAreaDrop_'+i+' .swapArea').addClass('scrollBarReview');
	/*if(objVal.job == 1){
		$(appendClass+' #swapAreaDrop_'+i).addClass('job1');
		if(appendClass == ".userPanel"){			
				$(appendClass+' #swapAreaDrop_'+i+' .swapArea').parent().append('<span class="jobSpan"><i>Record from Job 5</i></span>');
				$(appendClass+' #swapAreaDrop_'+i+' .swapArea').find('.carDrop').css({visibility:'hidden'});				
		}
	}else{
		$(appendClass+' #swapAreaDrop_'+i).addClass('job2');
	}
	
	$(appendClass+' #swapAreaDrop_'+i+' .swapArea').addClass('scrollBarReview')
	
	
	temparr = [];*/
	
/*	if(typeof objVal.crossUnit != 'undefined' && appendClass == ".userPanel")
	{
		if(typeof objVal.xreffolderinfo != 'undefined'){
			
			$.each(objVal.crossUnit,function(i,v){
				if(typeof v.folderLocation != 'undefined'){
					for (var i = 0; i < objVal.xreffolderinfo.length; i++) {
						// This if statement depends on the format of your array						
						var fol = $('.dragtooldiv').eq(v.folderLocation[0]).find('.addfolder').text();				
						
						if (objVal.xreffolderinfo[i][0] == fol && objVal.xreffolderinfo[i][1] == v.folderLocation[1]) {
							
							v.ansMatchWith =i;
							
							return true;   // Found it
						}
					}
				}
			
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
	
	
	}*/

	


}
var addCrossRef = function(i,objVal,appendClass,isAns) {
	
		
		
	$('<div/>',{id:'swapAreaDrop_'+i,class:'swapAreaDrop'}).appendTo(appendClass).html();
	$('<div/>',{id:'swapArea_'+i,class:'swapArea'}).appendTo(appendClass+' #swapAreaDrop_'+i);
	$($('.crossrefnameing .form').clone()).appendTo(appendClass+' #swapArea_'+i);
	$('<div/>',{class:'editclk crossClk'}).appendTo(appendClass+' #swapArea_'+i);
	$('<div/>',{class:'offFocus'}).appendTo(appendClass+' #swapArea_'+i);	
	$('<div/>',{class:'crossrefhead'}).appendTo(appendClass+' #swapArea_'+i).html('NAME OR SUBJECT:');
	$('<div/>',{class:'dragCrd'}).appendTo(appendClass+' #swapAreaDrop_'+i);	
	$('.crossClk').attr('title', 'Destroy record');
	$(appendClass+' .swapArea .form').find('input').attr('readonly','readonly');		
	$(appendClass+' #swapArea_'+i+' .cross_unit').html('');
	$('<div/>',{class:'cardNum'}).appendTo('#swapArea_'+i);
	
	$(appendClass+' #swapArea_'+i+' .cardNum').text(objVal.order);
	/*if(objVal.job == 1 ){
		$(appendClass+' #swapAreaDrop_'+i).addClass('job1');
		if(appendClass == ".userPanel"){			
		$(appendClass+' #swapAreaDrop_'+i+' .swapArea').parent().append('<span class="jobSpan"><i>Sheet from Job 5</i></span>');
				$(appendClass+' #swapAreaDrop_'+i+' .swapArea').find('.form,.crossrefhead').css({visibility:'hidden'});
			//$(appendClass+' #swapAreaDrop_'+i+' .swapArea').empty().html('<span class="jobSpan">Sheet from Job 5</span>');
		}
	}else if(objVal.job != 1 && typeof objVal.order != 'undefined' ){
		var getCrossAns = objVal.order.split(',');
		var crossAnsOdr = getCrossAns[1];
		//var isAns = arguments[3];
		crossAnsOdr = dataRecd[crossAnsOdr].crossAns;
		
	}*/
	
	$(appendClass+' #swapArea_'+i).find('.cross_unit').each(function(index,value){	
		
		if(isAns != 'notAns' && typeof crossAnsOdr != 'undefined'){
			
			if(typeof crossAnsOdr[objVal.ansMatchWith] != 'undefined'){			
				
				$(appendClass+' #swapArea_'+i+' .cross_unit').eq(index).val(crossAnsOdr[objVal.ansMatchWith][0][index]);		
			}	
			else
				$(appendClass+' #swapArea_'+i+' .cross_unit').eq(index).val('');
		}else{
			if(isAns != 'notAns'){
				$(appendClass+' #swapArea_'+i+' .cross_unit').eq(index).val("");		
			}else{			

				$(appendClass+' #swapArea_'+i+' .cross_unit').eq(index).val($.trim(objVal.arr[index]));		
			}
		}
		if(objVal.job == 1){
				$(appendClass+' #swapArea_'+i+' .cross_unit').eq(index).val($.trim(objVal.arr[index]));	
		}
		
	});
	if(typeof arguments[4] != 'undefined')
	{	
		$(appendClass+' #swapArea_'+i).find('.cross_unit').each(function(index,value){	
		
		if(typeof crossAnsOdr != 'undefined'){
			
			if(typeof crossAnsOdr[objVal.ansMatchWith] != 'undefined'){				
				$(appendClass+' #swapArea_'+i+' .cross_unit').eq(index).val(crossAnsOdr[objVal.ansMatchWith][0][index]);		
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
		
			if(v === $.trim($('.userPanel #swapArea_'+ix+' .cross_unit').eq(i).val())){
				rigcnt++;
				
			}
		});
	});
	
}
var pushDataPanel = function(i,objVal,appendClass) {
	curVal=uniqArr[currQues];	
	
	splitName(objVal,appendClass+' .nameIns'+i,'addInsd'+i);
	//splitAddress(objVal.add,appendClass+' .card'+i);
	//splitNum(objVal.num,appendClass+' .forPushPara'+i);
	
	recrtAndPush(i,objVal,appendClass);
	editDataClk();
}
var recrtAndPush = function(i,objVal,appendClass) {
	var conCat = appendClass+' .nameIns'+i;
	if(appendClass==".userPanel" || appendClass.indexOf("panelContainer")){
	
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
if($(ui.item).parent().parent().attr('id') == 'cardPanl')
{
	$(ui.item).css({top:'35px'});
	}
	else
	{
		$(ui.item).css({top:'75px'});
	}
	gScroll = $(this).closest('.trimmer').attr('id');
		dragscrollfun('#'+$(this).closest('.trimmer').attr('data-scroll'),gScroll);
}

var swapOrder = function(e,ui) {
	dragscrollend();
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
	updateStackOrder();

}
var updateStackOrder = function(){
		$('.panelContainer').children().each(function(i,v){
			$('.swapAreaDrop').eq(($('.panelContainer').children().length-1)-i).css({zIndex:i});
		});
}
var arrayMove = function(arr, oldIndex, newIndex) {
    var element = arr[oldIndex];
    arr.splice(oldIndex, 1);
    arr.splice(newIndex, 0, element);	
}
var closePanel = function() {
	$('.parentCardPanel').hide();
	$('.dummypanelCover').hide();
	$('.callOut').css({visibility:'hidden'});
	$('.dragtooldiv').css({visibility:'visible'});
	$('#cloneContainer').hide();
	$(".cardPanel").getNiceScroll().hide();
	$('#toolsarea').show();
	$('.activeInactive').hide();
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

var pushUser = function() {
	$.each(deletedRecord,function(index, val){
		deletedRecord[index].deleted = true;
		dataRecdJob.push(deletedRecord[index])
	})
	alphabeticSimulationvisite = false;
	idx=0;	
	placedIncorrect = 0, crosRefNotCrt = 0, crosNotReq = 0;
	scoreArr=[];
	newArr = [];
	$('.userPanel,	.correctPanel, .codeResult,.orderResult').empty();	
		$.each(dataRecdJob,function(i,v){
			newArr.push(v);
		});
		/*$.each(dataRecd,function(i,v){
			// newArr.push(v);
		});*/
		// newArr.unshift(newArr[0]);
		// $('.correctPanel').append('<div id="swapAreaDrop_0" class="swapAreaDrop"><div id="swapArea_2" class="swapArea scrollBarReview mCustomScrollbar _mCS_12"></div></div>');
		for(var i=0; i<=1; i++)
		{
		appendClass = '.correctPanel'
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
	 $('.editclk').attr('title', 'Destroy record');
	// $('#swapArea_'+i+' .cardNum').text(objVal.order);
	// pushDataPanel(i,objVal,appendClass);
	$(appendClass+' #swapAreaDrop_'+i+' .swapArea').addClass('scrollBarReview');
	
	appclass = '.orderResult'
	$('<div/>',{id:'cardOdr_'+i,class:'swapAreaDrop'}).appendTo(appclass);
	$('<div/>',{id:'cardOdrIn_'+i,class:'cardsOrderChild'}).appendTo('#cardOdr_'+i);
		}
		
		idx=2;
		$.each(newArr,function(order,details){
							//console.log(details.deleted);
						if(typeof details.name != 'undefined'){
							//swapInside(idx,details,'.userPanel');			
							swapInside(idx,details,'.correctPanel');
							//createCode(idx,details,'.codeResult');
							createOrder(idx,details,'.orderResult',details.folderLocation[0],details.folderLocation[1]);
							idx++;
						}else{
							$.each(details.crossUnit,function(ii,vv){
							{	
								var getCrossAns = details.order.split(','),getOrg;
							var crossAnsOdr = getCrossAns[1];
							if(vv.job ==1)
								getOrg = dataRecdJob[crossAnsOdr]; 
							else	
								getOrg = dataRecd[crossAnsOdr];					
									
							
									//addCrossRef(idx,vv,'.userPanel','notAns');
									addCrossRef(idx,vv,'.correctPanel','refAns');						
									//createCrossAns(idx,vv,'.codeResult','notCrosRef',details.folderLocation[0],details.folderLocation[1],getOrg);															
								

							if(typeof getOrg.crossAns != 'undefined'){								
								 createOrder(idx,details,'.orderResult',details.folderLocation[0],details.folderLocation[1]);
							}
								
						}
						idx++;
					});
				}
				
		});
		
		$('#reviewAnswer  .swapArea').css({transform:'scale(0.63)',transformOrigin:'0 0',marginLeft:'17px'});
		$('.blankcard').parent().addClass('forPdf');
		for(var i=0;i<dataRecd.length; i++)
		{
			dataRecd[i].codeScore[0]+'/'+dataRecd[i].codeScore[1];
			codescore += dataRecd[i].codeScore[0];
			totcodescore += dataRecd[i].codeScore[1];		
		}
	/*$('.correctPanel #swapAreaDrop_'+(idx-1)).css({height:'400px'})
	$('<div/>',{id:'swapAreaDrop_'+(idx),class:'swapAreaDrop'}).appendTo('.userPanel');
	
	$('<div/>',{id:'validationResult'}).appendTo('#swapAreaDrop_'+idx).css({marginTop:'20px'});*/
	//$('<div/>',{class:'swapAreaBorder'}).appendTo('.correctPanel .swapArea');
	
	
	
	/*$('#reviewAnswer #swapAreaDrop_0').find('#card0').empty();
	$('#reviewAnswer #swapAreaDrop_1').find('#card1').empty();
	var cloneobj = $('#answerAreaActive').wrap('<div/>').parent().html()+$('#yourChoiceAreaActive').wrap('<div/>').parent().html();
	
	$('#reviewAnswer #swapAreaDrop_0').find('#card0').append(cloneobj);
	
	var cloneobj = $('#answerAreaInActive').wrap('<div/>').parent().html()+$('#yourChoiceAreaInActive').wrap('<div/>').parent().html()+$('#valid-forInActive').wrap('<div/>').parent().html();
	
	$('#reviewAnswer #swapAreaDrop_1').find('#card1').append(cloneobj);
	
	// setTimeout(function(){$('.testClass').eq(0).empty();},5000)*/
	
	//folderNdGuideValidation();
	folderNdGuideValidation('.dragarea5',findActiveCorrectName,'valid-forActive','Active')
	folderNdGuideValidation('.dragarea6',findAddedCorrectName,'valid-forInActive','InActive')
	
	$('.scrollBarFiling3').mCustomScrollbar ({
   theme:"3d-dark",
		  });
	
	$('.scrollBarFiling4').enscroll({
		  verticalScrolling:true,
		  verticalTrackClass:'track1',
		  verticalHandleClass:'track2'
		  });	  
	
if( !(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) ) {    
	$(".scrollBarReview").mCustomScrollbar({
            theme:"3d-dark",
            axis:"y",
			scrollButtons:{enable:true,scrollType: "stepped", snapAmount : 400},
			scrollInertia: 0,
            advanced: {
            updateOnContentResize: true
            },
			//scrollAmount: 553,
		   // snapAmount : 400,
			scrollEasing:"easeOut",		
		  callbacks:{whileScrolling:function(){
				revTop = this.mcs.topPct;
				console.log(this.mcs.topPct)
				var moveScrol = $(this).parent().parent().hasClass('userPanel')?'.correctPanel':'.userPanel';
			
					$(moveScrol+' #'+$(this).parent().attr('id')+' .swapArea .mCSB_container').css({top:this.mcs.top});
					$(moveScrol+' #'+$(this).parent().attr('id')+' .swapArea .mCSB_dragger').css({top:this.mcs.draggerTop});
				
					
				}
			}
		
	  }); 
	 
			
	} else{
		$(".scrollBarReview").mCustomScrollbar({
            theme:"3d-dark",
            axis:"y",
			scrollButtons:{enable:true,scrollType: "stepped", snapAmount : 400},
			scrollInertia: 0,
            advanced: {
            updateOnContentResize: true
            },
			//scrollAmount: 553,
		   snapAmount : 400,
			scrollEasing:"easeOut",		
		  callbacks:{whileScrolling:function(){
				revTop = this.mcs.topPct;
				console.log(this.mcs.topPct)
				var moveScrol = $(this).parent().parent().hasClass('userPanel')?'.correctPanel':'.userPanel';
			
					$(moveScrol+' #'+$(this).parent().attr('id')+' .swapArea .mCSB_container').css({top:this.mcs.top});
					$(moveScrol+' #'+$(this).parent().attr('id')+' .swapArea .mCSB_dragger').css({top:this.mcs.draggerTop});
				
					
				}
			}
		
	  }); 
	  }/**/
	$('.userPanel .swapArea').css({overflow:'visible'});	
	 $scrolable = $('.swapArea');
/*	$('#ctr').off('touchstart').on('touchstart',function(e){
		//alert(e.target.id);
	});*/

		
 $(".scrollBar1").mCustomScrollbar ({
   theme:"3d-dark",
   scrollAmount: 423,
   snapAmount : 423,
//   setHeight:'200px',
   scrollButtons:{enable:true,scrollAmount: 423,scrollType: "stepped",tabindex: 11},		
   axis:"y",
   advanced: {
          updateOnContentResize: true
        },
		contentTouchScroll: 350,
		documentTouchScroll: true,
  keyboard:{  enable: true,scrollAmount: 423,snapAmount : 423,scrollType: "stepless" },
  scrollEasing:"easeOut",
  callbacks:{whileScrolling:function(){	
if(this.mcs.topPct>=3){
	$('#ctr0 .orderRes-Heading').css('display','block');
	$('#ctr0 .arrng1').text('Record').css('margin-top','-9px');
	$('#ctr0 .arrng2').text('Order Result').css('margin-top','-9px');
}
else
{
$('.orderRes-Heading').css('display','none;');
	$('#ctr0 .arrng1').text('Correct Answer').css('margin-top','0px');
	$('#ctr0 .arrng2').text('Your Choice').css('margin-top','0px');	
}

  
		  // if(this.mcs.topPct>=98){
			  // $('#ctr0').css({visibility:'hidden'});
		  // }else{
			   // $('#ctr0').css({visibility:'visible'});
		  // }
		},
		onScroll:function(){
      		getScrolTop = this.mcs.topPct;
			getScrolTop = getScrolTop*$('.userPanel .swapArea').length/100;
			
            getScrolTop = Math.round(getScrolTop);
			
			
			
    	}
		}
		
});
//}/* */

	$('.userPanel .swapArea,.correctPanel .swapArea').scroll(function(i,v){
		$('.correctPanel #'+$(this).attr('id')).scrollTop($(this).scrollTop());
		            $('.userPanel #'+$(this).attr('id')).scrollTop($(this).scrollTop());		
	});
	$('#dummyDiv1').hide();
	/////ending		
// prepareLastScreen();
}
var folderGuideCurreScore = 0;
var inactiveArrayForVal=[],ActiveArrayForVal=[];
var folderNdGuideValidation = function(whcFol, whcArr, feedCont, whcDraw){

	
	var folderCorr = "";
	var guideCorr = "";
	var folderExtra="";
	var guideExtra="";
	var folderCreate ="";
	var guideCreate ="";
	

	var folGuiOrder = [];	
	var folGuiOrdertype = [];	
	
	$(whcFol+' .dragtooldiv').each(function(i,v){
		//console.log(v);
		folGuiOrder.push($(this).children().eq(1).text());	
		if($(this).children().eq(1).hasClass("addfolder"))
		{
			folGuiOrdertype.push('F');
			// valArr.push($(this).children().eq(1).text());
			
		}else if($(this).children().eq(1).hasClass("addguide"))
		{
			folGuiOrdertype.push('G')
		}
		else if($(this).children().eq(1).hasClass("addspecialguide"))
		{
			folGuiOrdertype.push('S')
		}
		
		
	});
	console.log(whcFol+' '+folGuiOrdertype);
	
	var foldercreation = "<br/><b>Order Result:</b><ul>"
	folderplacement = "</ul><b>Folder Placement:</b><ul>"

/*	// FOLDER 
	
							// CC-0 FINDING ADDED G/F/S IN FOLDER 
							// F/G/S - 1 TYPE OF THE FINDING ADDEF F/G/S
							// NUMBER -2 BEGIND THE FINDING F/G/S
							// F/G/S - 3 TYPE OF THE BEGIND F/G/S
							// 3 f - highlightfol
							// 3 g - guide
							// 3 s - guidesp 
	var whcArr =[['99','F','Folder','NUMBERS','F','Folder','highlightfol'],
						   ['IV','F','Folder','IV','S','Special Guide','guidesp'],
						   ['IC','F','Folder','I','F','Folder','highlightfol'],
						   ['IV','S','Special Guide','I','G','Guide','guide']]*/
	
	
	var createdCorrectly ,getFGS ;
	for(var i = 0; i<whcArr.length; i++)
	{	
		if(whcArr[i][1] == 'F'){
			folderMax.push(whcArr[i][0]);
			getFGS = 'folder';
			//folderArr.push(whcArr[i][0]);
		}
		else if(whcArr[i][1] == 'G'){
			guideMax.push(whcArr[i][0]);
			getFGS = 'guide';
			
			//guideName.push(whcArr[i][0]);
		}
		else if(whcArr[i][1] == 'S'){
			spGuideMax.push(whcArr[i][0]);
			getFGS = 'guidesp';
			//spGuideName.push(whcArr[i][0]);
		}
		
		createdCorrectly = 0;
		$(whcFol+' .'+whcArr[i][6]).each(function(index,v){
			
			if($(this).children().eq(1).html() == whcArr[i][3]){				
				currentindex = $(this).index();				
			}
			/*if($(this).children().eq(1).html() == whcArr[i][0]){
				createdCorrectly = 1;
			}*/
		
		});	
		
		var behindName;
		var beforeName;
		var behindType;
		var beforeType;

		$(whcFol+' .'+getFGS).each(function(index,v){
	
			if($(this).children().eq(1).html() == whcArr[i][0]){
				
				beforeName = $(this).next().find('.drogtoolname').text();
				behindName = $(this).prev().find('.drogtoolname').text();
				//console.log(whcArr[i][0]+' '+getFGS+' '+beforeName);
			    if($(this).next().children().eq(1).hasClass("addfolder"))
	        	{
	        		beforeType = 'folder';
					
	        	}else if($(this).next().children().eq(1).hasClass("addguide"))
	        	{					
	        	    beforeType = 'guide';
	        	}
	        	else if($(this).next().children().eq(1).hasClass("addspecialguide"))
	        	{
	        		beforeType = 'special guide';
	        	}
			    
                  if($(this).prev().children().eq(1).hasClass("addfolder"))
	        	{
	        		behindType = 'folder';
					
	        	}else if($(this).prev().children().eq(1).hasClass("addguide"))
	        	{
	        	    behindType = 'guide';
	        	}
	        	else if($(this).prev().children().eq(1).hasClass("addspecialguide"))
	        	{
	        		behindType = 'special guide';
	        	}
				createdCorrectly = 1;
			}
		
		});	
		
	// F / G / S Creation
		if(createdCorrectly)
		{
			 folderCorr += "<li><span class='right'>You correctly placed the  \""+whcArr[i][0]+"\" "+whcArr[i][2]+".</span><font> Score: 1/1</font></li>";
			 folderGuideCurreScore++;
			 //alert(folderGuideCurreScore)
		}		
		else
		{
			 folderCorr += '<li><span class="wrong">The \"'+whcArr[i][0]+'\" '+whcArr[i][2]+' is missing from the '+whcDraw+' Records file drawer.</span></li>';
		
		}


		//placement
	//	console.log(whcArr[i][6]+' '+folGuiOrdertype[currentindex]+' '+whcArr[i][4]+' '+folGuiOrdertype[(Number(currentindex)-1)]+' '+whcArr[i][1]+' '+folGuiOrder[(Number(currentindex)-1)]+' '+whcArr[i][0])
		if(	folGuiOrdertype[currentindex] == whcArr[i][4] && 
			folGuiOrdertype[(Number(currentindex)-1)] == whcArr[i][1] && 
			folGuiOrder[(Number(currentindex)-1)] == whcArr[i][0]) 
		{	
			folderplacement += "<li><span class='right'>You correctly placed the \""+whcArr[i][0]+"\" "+whcArr[i][2]+". </span><font> Score: 1/1</font></li>";			  
			folderGuideCurreScore++;
		}
		else
		{
			 if(createdCorrectly){
			  
			  if(beforeName == ''){
			  folderplacement += "<li><span class='wrong'>You incorrectly placed the \""+whcArr[i][0]+"\" "+whcArr[i][2]+" before the \""+behindName+"\" "+behindType+". It should be placed behind the \""+whcArr[i][3]+"\" "+whcArr[i][5]+". </span><font> Score: 0/1</font></li>";
			  }else{ //console.log(beforeName+' '+whcArr[i][0])
			  folderplacement += "<li><span class='wrong'>You incorrectly placed the \""+whcArr[i][0]+"\" "+whcArr[i][2]+" behind the \""+beforeName+"\"  "+beforeType+". It should be placed behind the \""+whcArr[i][3]+"\" "+whcArr[i][5]+". </span><font> Score: 0/1</font></li>";
			  }
			}
		  else
			{
			   folderplacement += "<li><span class='wrong'>The \""+whcArr[i][0]+"\" "+whcArr[i][2]+" should have been placed behind the \""+whcArr[i][3]+"\" "+whcArr[i][5]+". </span><font> Score: 0/1</font></li>";
				
			}
			
		}
		
		
	}
	

	
	
	foldercreation += guideCorr+folderCorr;
	
		
	
	folderExtra = "";
	guideExtra = "";
	spGuideExtra = "";

	
	
	
	additionalFol = [];
	additionalGui = [];
	additionalspGui = [];
	
	$.each(folderArr,function(i,v){
		if(folderMax.indexOf(v) == -1){
			additionalFol.push(v);
		}
	});
	$.each(guideName,function(i,v){
		if(guideMax.indexOf(v) == -1){
			additionalGui.push(v);
		}
	});
	$.each(spGuideName,function(i,v){
		if(spGuideMax.indexOf(v) == -1){
			additionalspGui.push(v);
		}
	});



	addFolstr= additionalFol.toString();
//	alert(addFolstr.join(',',"a"));
	if(additionalFol.length>0)	
	{
		//folderExtra+='<li><span class="wrong">'
		for(var i = 0; i<additionalFol.length; i++)
		{
			
				folderExtra+='<li> <span class="wrong"> You created an unnecessary folder \"'+additionalFol[i]+'\". </span><font> Score: -1</font></li>';

		}
		//folderExtra+='</span> Score: -'+ additionalFol.length+'</li>';
	}
	if(additionalFol.length==0){folderExtra=""}
		
	if(additionalGui.length>0)	
		
			{
			//	guideExtra+='<li><span class="wrong">You created an unnecessary guide'
		for(var i = 0; i<additionalGui.length; i++)
		{

				guideExtra+='<li><span class="wrong"> You created an unnecessary guide \"'+additionalGui[i]+'\". </span><font> Score: -1</font></li>';

		}
		//guideExtra+='</span> Score: -'+ additionalGui.length+'</li>';
	}
	if(additionalGui.length==0){guideExtra=""}
	if(additionalspGui.length>0)	
		
			{
			//	spGuideExtra+='<li><span class="wrong">You created an unnecessary special guide'
		for(var i = 0; i<additionalspGui.length; i++)
		{

				spGuideExtra+='<li><span class="wrong"> You created an unnecessary special guide \"'+additionalspGui[i]+'\". </span><font> Score: -1</font></li>';
			
		}
		//spGuideExtra+='</span> Score: -'+ additionalspGui.length+'</li>';
	}
	if(additionalspGui.length==0){spGuideExtra=""}

		
	//console.log(folderGuideCurreScore , additionalFol.length, additionalGui.length, additionalspGui.length)
	//console.log(folderGuideCurreScore-(additionalFol.length+additionalGui.length+additionalspGui.length))
	
	
	folderGuideextraScore = folderGuideCurreScore-(additionalFol.length+additionalGui.length+additionalspGui.length);
		





	 
	$('#'+feedCont).html(foldercreation+folderExtra+guideExtra+spGuideExtra+folderplacement).css({width:'800px','font-size':'14px'});
	

}
var createCode = function(inx, val, appclass) {
	
	$('<div/>',{id:'card_'+inx,class:'swapAreaDrop'}).appendTo(appclass);
	$('<div/>',{id:'cardIn_'+inx,class:'cardsChild'}).appendTo('#card_'+inx);
		
	if(val.job == 1){
		$('#cardIn_'+inx).html('<span style="color:#999"; class="wrong"><font style="color:#000;font-weight:bold;">Coding Result: </font>N/A</span>');
	}else{	
			var gtxt = ' ';
		if(val.codeScore[0] == val.codeScore[1]){
			if(val.codeScore[2] ==1){
				
				gtxt = ' You had additional coding on this record that was not graded. ';
			}
			$('#cardIn_'+inx).html('<span class="right"><font style="color:#000;font-weight:bold;">Coding Result:</font> You coded the required units correctly.<font color="#000">'+gtxt+'Score:&nbsp;'+val.codeScore[0]+'/'+val.codeScore[1]+'</font></span>');
		}else{
			if(val.codeScore[2] ==1){
				
				gtxt = ' You had additional coding on this record that was not graded. ';
			}
			
			$('#cardIn_'+inx).html('<span class="wrong"><font style="color:#000;font-weight:bold;">Coding Result: </font> Your coded record contains errors in the units required for this job.<font color="#000">'+gtxt+'Score:&nbsp;'+val.codeScore[0]+'/'+val.codeScore[1]+'</font></span>');
		}
	}
	
	
	
	
	//if(typeof val.crossAns == 'undefined')
	{
	
	if(val.job == 1)
		{
			$('<span class="wrong" style="color:#999"><font style="color:#000;font-weight:bold;">Inspection Result: </font>N/A</span>').prependTo('#cardIn_'+inx);
		}else if(val.inspect == -1)
		{
			$('<span class="wrong"><font style="color:#000;font-weight:bold;">Inspection Result: </font> '+inspectNotCheck[val.ainspect]+'<font color="#000"> Score: 0</font></span>').prependTo('#cardIn_'+inx);
			
		}
		else if(val.inspect == val.ainspect)
		{
			$('<span class="right"><font style="color:#000;font-weight:bold;">Inspection Result: </font> '+inspectCorrectArr[val.inspect] +'<font color="#000"> Score: 1</font></span>').prependTo('#cardIn_'+inx);
			inspectscore++;
		}
		else
		{
			$('<span class="wrong"><font style="color:#000;font-weight:bold;">Inspection Result: </font> '+(ainspectwrongArr[val.ainspect] + inspectwrongArr[val.inspect])+' <font color="#000"> Score: 0</font></span>').prependTo('#cardIn_'+inx);
			
		}
		
		
	//	$('<span class="wrong"><font style="color:#000;font-weight:bold;">Inspection Result: </font> You correctly determined that this record has a release mark (yes).<font color="#000">'+gtxt+'Score: '+val.inspect+'</font></span>').appendTo('#cardIn_'+inx);
		
		
	}
}
var arrng = function(getclass,inx,val,crosVal){
	
	var rigCnt = 0, chk, ans;	
	rigCnt = multipleCrosref2(val,getclass,inx);
		$('#cardIn_'+inx).html('<span class="wrong" style="color:#999"><font style="color:#000;font-weight:bold;">Inspection Result: </font>N/A</span> <span class="right"><font style="color:#000;font-weight:bold;">Coding Result: </font>You created a necessary cross-reference sheet.<font color="#000">&nbsp;Note that coding on cross-reference sheets is not graded.</font><font color="#000"> Score: 1/1</font></span>');
		codescore++;
		totcodescore++;
}
var curIndex = 0;
var multipleCrosref2 = function(val,getclass,area){

var rigcnt =0;
curIndex = 0;
if(typeof val.crossAns != 'undefined'){
	$.each(val.crossAns,function(inx,value){
		curIndex = inx;
	
		rigcnt=0;
		$.each(value[0],function(i,v){
			if($.trim(v).toLowerCase() === $.trim($('.userPanel #swapArea_'+area+' .cross_unit').eq(i).val()).toLowerCase()){
				rigcnt++;
			}
			
		});
		if(rigcnt==9){		
				return false;					
			}
	});
	
}	
	return rigcnt;
	
}
var createCrossAns = function(inx, val, appclass, isCrsRef, afol,ainx,getOrg) {
		
	$('<div/>',{id:'card_'+inx,class:'swapAreaDrop'}).appendTo(appclass);
	$('<div/>',{id:'cardIn_'+inx,class:'cardsChild'}).appendTo('#card_'+inx);
	
	if(val.job == 1){
		$('#cardIn_'+inx).html('<span style="color:#999"; class="wrong"><font style="color:#000;font-weight:bold;">Inspection Result: </font>N/A</span><span style="color:#999"; class="wrong"><font style="color:#000;font-weight:bold;">Coding Result: </font>N/A</span>');
	}else{
		var getCrossAns = val.order.split(',');
		var crossAnsOdr = getCrossAns[1];
		
		if(isCrsRef == 'notCrosRef') {
			
			
			$('#cardIn_'+inx).addClass('already');
				
				$('#cardIn_'+inx).html('<span class="wrong" style="color:#999"><font style="color:#000;font-weight:bold;">Inspection Result: </font>N/A</span><span class="wrong"><font style="color:#000;font-weight:bold;">Coding Result: </font>You created an extra cross-reference sheet.<font color="#000"> Score: -1</font></span>');
				$('.correctPanel #swapArea_'+inx).empty().html('<span class="blankcard"><i>Not Applicable</i></span>');
				codescore--;
			crosNotReq++;
			totextracard++;
		}else{			
			if(val.ansMatchWith != -1){
			var aFol=afol;
			var tempFol=ainx;				
				arrng('.arrng1',inx,dataRecd[crossAnsOdr],val);								
			}else{								
				$('#cardIn_'+inx).addClass('already');
				
				$('.already').html('<span class="wrong"><font style="color:#000;font-weight:bold;">Inspection Result: </font>N/A</span><span class="wrong"><font style="color:#000;font-weight:bold;">Coding Result: </font>You created an extra cross-reference sheet.<font color="#000"> Score: -1</font></span>');
				//totfolderscore--;
				codescore--;
				totextracard++;

				$('.correctPanel #swapArea_'+idx).empty().html('<span class="blankcard"><i>Not Applicable</i></span>');
			}		
				
		}
		
	}
}
var createOrder = function(inx, val, appclass,index,order){
	$('<div/>',{id:'cardOdr_'+inx,class:'swapAreaDrop'}).appendTo(appclass);
	$('<div/>',{id:'cardOdrIn_'+inx,class:'cardsOrderChild'}).appendTo('#cardOdr_'+inx);
	if(typeof val.ansOrder !== 'undefined'){
		var getFolOdr = val.ansOrder[0];
		var getInsOdr = val.ansOrder[1];
		var getActOdr = val.ansOrder[2];

		showOrders(index, inx, getFolOdr, getInsOdr, getActOdr, order, val);
		if(val.job != 1 && typeof val.crossAns != 'undefined')
		{
			if(val.crossUnit.length == 0) {
				//$('#cardIn_'+inx).append('<span class="wrong"> This main card needs a cross-reference card.</span>');
				crosRefNotCrt++;	
			}
		}		
		
	}else if(typeof val !== 'undefined'){		
		var getOrg;
		var getCrossAns = val.order.split(',');
		var crossAnsOdr = getCrossAns[1];
		
		if(val.job ==1)
			getOrg = val.crossAns; 
		else	
			getOrg = val.crossAns;
		
		
		//if(typeof val.ansMatchWith != 'undefined')
		{
		
			if(val.job == 1){
				var getFolOdr = getOrg[0][1][0];
				var getInsOdr = getOrg[0][1][1];			
				var getActOdr = getOrg[0][1][2];			
				var fol = $('.dragtooldiv').eq(index).find('.addfolder').text();
				showOrders(index, inx, getFolOdr, getInsOdr, getActOdr, order, val);				
			}else{
				//var getOrds = multipleCrfFolOdr(val, getOrg, index, order, 'currentJob');

				var getOrds = multipleCrfFolOdr(val, getOrg, index, order, 'currentJob');			
				var getFolOdr = getOrds[0];
				var getInsOdr = getOrds[1];	
				var getActOdr = getOrds[2];				
				
				var fol = $('.dragtooldiv').eq(index).find('.addfolder').text();
				
				if(typeof val.ansMatchWith != 'undefined' && typeof getOrg[val.ansMatchWith] != 'undefined'){
					
					getFolOdr = getOrg[val.ansMatchWith][1][0];
					getInsOdr =getOrg[val.ansMatchWith][1][1];
					getActOdr =getOrg[val.ansMatchWith][1][2];
				}
				
				showOrders(index, inx, getFolOdr, getInsOdr, getActOdr, order, val);
						
			}
		}
		/*else{
			showOrders(index, inx, getFolOdr, getInsOdr, order, val, getOrg);
		}*/
	}
	
}
var multipleCrfFolOdr = function(val, getOrg, index, order, job){

var rigcnt;
			var getCrossAns = val.order.split(',');
			var crossAnsOdr = getCrossAns[1];						
		if(typeof getOrg == 'undefined')
			return [0];
			
		$.each(getOrg,function(inx,value){
			
			rigcnt=0;
			var fol = $('.dragtooldiv').eq(index).find('.addfolder').text();
						
				if(fol == value[1][0] && order === value[1][1]){
					//alert(fol+' '+index+' = '+value[1][0]+'     '+order +' = '+ value[1][1]);
					rigcnt=[value[1][0],value[1][1]];			
					
					return false;
				}
		});	

	return rigcnt;
	
}

var nucard = 0;
var crscoreassign = function(val, numval)
{
	if(typeof val.name != 'undefined'){						
	}
	else 
	{
		var getCrossAns = val.order.split(',');
		var crossAnsOdr = getCrossAns[1];		
	}
			
}
var showOrders = function(index, inx, getFolOdr, getInsOdr, getActOdr, order, val, getOrg) {
							//if(typeof val.deleted)
							//{
							//console.log(val.name[0]);							
							//}
						//	else if ('crossAns' in val) {
						//console.log(val.crossAns[0][0]);
						//	}
var twoReturns = responsToFolderIndex(index);
var fol = twoReturns[0];
var side = twoReturns[1];

	//var fol = $('.dragtooldiv').eq(index).find('.addfolder').text();
	var rigFol = $('.dragarea .dragtooldiv').eq(getFolOdr).find('.addfolder').text();
	var checker = (twoReturns[1] == 'I')?'INACTIVE FOLDER':'ACTIVE FOLDER'


		crscoreassign(val, 0);
	
		
	if(val.job != 1 && typeof val.arr != 'undefined' && typeof val.first == 'undefined'){
			$('#cardOdrIn_'+inx).html('<span class="wrong"><font style="color:#000;font-weight:bold;"></font>You placed this record as ['+fol+']'+(order+1)+'.<font color="#000"> Score: 0/0</font></span>');
			//totfolderscore--;
		}else{	
			//totfolderscore++;
			/*if(typeof val.arr != 'undefined' && val.job != 1)
			*/
			if(fol == getFolOdr && order === getInsOdr && getActOdr == side){
				if ("deleted" in val) {
				$('#cardOdrIn_'+inx).html('<span class="wrong"><font style="color:#000;font-weight:bold;"></font>You incorrectly destroyed the record "XXXXXXXXXXXXXXXX".<font color="#000"> Score: 0</font>');			
				}
				else
				{
				crscoreassign(val, 1)	
				folderscore++;
				totfolderscore++;
				$('#cardOdrIn_'+inx).html('<span class="right"><font style="color:#000;font-weight:bold;"></font>You placed this record correctly as  ['+fol+']'+(order+1)+' in ' +checker+'.<font color="#000"> Score: 1/1</font>');			
				}
				
			}else if(typeof getInsOdr == 'undefined'){
			console.log(getInsOdr)
					if ("deleted" in val) {
					
							$('#cardOdrIn_'+inx).html('<span class="right"><font style="color:#000;font-weight:bold;"></font>You correctly destroyed the record '+val.name[0][0]+'<font color="#000"> Score: 1/1</font></span>');                               
							folderscore++;
				totfolderscore++;
					}
					else
					{
				$('#cardOdrIn_'+inx).html('<span class="wrong"><font style="color:#000;font-weight:bold;"></font>You placed this record as ['+fol+']'+(order+1)+' in ' +checker+'. This card needs to be deleted.<font color="#000"> Score: 0</font></span>');
				}
			//	folderscore--;
						
			}else{
				if ("deleted" in val) {
				$('#cardOdrIn_'+inx).html('<span class="wrong"><font style="color:#000;font-weight:bold;"></font>You incorrectly destroyed the record "XXXXXXXXXXXXXXXX".<font color="#000"> Score: 0</font>');	
				}
				else
				{
				var checker2 = (val.ansOrder[2] == 'I')?'INACTIVE FOLDER':'ACTIVE FOLDER'	
				$('#cardOdrIn_'+inx).html('<span class="wrong"><font style="color:#000;font-weight:bold;"></font>You placed this record as ['+fol+']'+(order+1)+' in '+checker+'. It should be ['+getFolOdr+']'+(getInsOdr+1)+' in '+checker2+'.<font color="#000"> Score: 0/1</font></span>');
				totfolderscore++;
				placedIncorrect++;
				}
			}
		}
		
}
var responsToFolderIndex = function(rowIndex){
	var responseTo;
	var drawerLabel;
	
	if(rowIndex >= parseInt($('.dragarea').children().length)){	
		
		var redc = rowIndex - parseInt($('.dragarea').children().length)	
		responseTo = $('.dragarea2 .dragtooldiv').eq(redc).find('.addfolder').text();
		drawerLabel = 'I';
		
	}else{
		responseTo = $('.dragarea .dragtooldiv').eq(rowIndex).find('.addfolder').text();
		drawerLabel = 'A';
	}
	return [responseTo,drawerLabel];
}
var tempid=100;
var addNewFolder = function(folTxt){	

	
	
		
		
		var folderguidname = '';	
			


		
		//folderguidtype=($('input[name=guider]:checked').val());
		folderguidname=folTxt;
		
		if(fromActiveArea)
		{
		$('.dragarea2').append('<div id=dragtooldiv_'+tempid+' class="dragtooldiv folParent highlightfol folder"><span class="lefCurve"></span><div class="addfolder folParent highlightfol">'+(folderguidname)+'</div><span class="drogtoolname">'+(folderguidname)+'</span><span class="folderindex">'+0+'</span><span class="drogtoolnum">'+folderguidname+'</span><div class="dltFolder" style="display:block"></div><span class="rigCurve"></span><div class="dummyFolder"></div></div>');	
		}
		else
		{
			$('.dragarea').append('<div id=dragtooldiv_'+tempid+' class="dragtooldiv folParent highlightfol folder"><span class="lefCurve"></span><div class="addfolder folParent highlightfol">'+(folderguidname)+'</div><span class="drogtoolname">'+(folderguidname)+'</span><span class="folderindex">'+0+'</span><span class="drogtoolnum">'+folderguidname+'</span><div class="dltFolder" style="display:block"></div><span class="rigCurve"></span><div class="dummyFolder"></div></div>');
			recentArray = [];
			
		}
		
          
		$('#createFolder').hide();
		$('.addFldrbtn').css({color:'#5a4a42','background':'#fff'});
		$('.dummyDivGud').hide();
		folderArr.push(folderguidname);
		hoverEffect();
		if(folderguidname.length>16)
			{
				$('#dragtooldiv_'+tempid+' .addfolder').attr('title',folderguidname)
			
		    }
			
		addfoldcount++;
	scrollfun();
					  setTimeout(function(){
						$('.dragareaall').scrollTop(maxScrollTop);
							var temp = $('.dragareaall').scrollTop()
							$('.dragareaall').scrollTop(1000)
	
							$( "#scrollbarfoldercon	p").eq(4).html('4 scrolldif '+$('.dragareaall').scrollTop() +'  '+ $('.dragarea').height() +'  '+ $('.dragarea').innerHeight() +'  '+ $('.dragarea').outerHeight())
							 maxScrollTop = $('.dragareaall').scrollTop();
					  },100);
		
		

	$('.dragareaInactive .dragtooldiv:not(.unsortable)').find('.dltFolder').show();
	folderborderdesign();
	tempid++;
	toggleArrow();
	//$('.dummyfolderhide').show();
	//$('.dummyfolderhide').off('mousedown').on('mousedown',function(){ alert('Move Folder/Guide to appropriate location') });
	$('#guidename').val('');
	
	$('#foldername').val('');
	
	//updateFolderArr();
	removeFolder();
	$('.rectangle').sortable({start:dragSortStart, connectWith:'.dragarea',helper:'clone',appendTo:'body',sort:setsortCursor,update:changeArrOrder,axis:'y',refreshPositions: true,stop:sortStop, tolerance: "pointer",placeholder: "ui-state-highlight"});
	$('.dragarea2').sortable({start:dragSortStart,helper:'clone',appendTo:'body', sort:setsortCursor,update:swapOrderFol,cancel:'.unsortable',axis:'y',refreshPositions: true,stop:sortStop,tolerance: "pointer",zIndex:100000,placeholder: "ui-state-highlight",scroll:false});
	
	
		//recordIndex.splice(recordIndex.length,0,[]);	
		$('.dragarea').scrollTop($('.dragarea').scrollTop()+15)
		updateScroll();
		$('.track2').animate({bottom:'0px'});
		$('.dragarea,.dragarea2').animate({
			   scrollTop: $('.dragarea')[0].scrollHeight+200,			   
			}, 'slow');
			

	
		
		
	//	$(".dragtooldiv ").draggable({axis:'y',containment:'.dragarea',drag:createSpace});
}
var createSpace = function(){
	
}
var dragSortStart = function(e,ui){
	
	$(this).attr('data-previndex', ui.item.index());
	//$(this).children().find('.drogtoolname').hide();
	
	
	$(ui.helper).find('.drogtoolname').hide();
	$(this).sortable('instance').offset.click = {
            left: Math.floor(ui.item.width() / 2),
            top: Math.floor(ui.item.height() / 2)
          };
	//$(ui.item).children().find('.drogtoolname').css({background:'red'});
	$(ui.helper).css({'opacity':'0.5', 'background':'#99CCCC'});
	$(ui.helper).children().eq(0).css({'opacity':'0.0'});
	
	//$('.addfolder').css({'backgroundImage':'url(assets/images/leftguide.png)', 'background-color':'rgba(255,0,0,0.01)'})
	$(ui.helper).children().eq(1).css({'backgroundImage':'url(assets/images/folderLeftOver.png)'});
	
	$('.rightarraw').show();
}
var sortStop = function(e,ui){
	$(ui.helper).children().eq(0).css({'opacity':'1'});
	$(ui.helper).children().eq(1).css({'backgroundImage':'url(assets/images/folderLeftOver.png)'});
	$(ui.item).css('opacity',1);
	$(ui.item).find('.drogtoolname').show();
}
var setsortCursor = function(e,ui){
	
if($(this).parents().is(".dragareaInactive"))
	{
	$(ui.helper).css({left:'500px'});	
}
else
{
$(ui.helper).css({left:'-520px'});	
}
	if(ui.item[0].previousSibling != null)
	{		
		if($('.dragarea').children().eq(0).hasClass('ui-state-highlight'))	
		{
			$('.ui-state-highlight').removeClass('middleHighlight').addClass('firstHighlight');
			//$('.dragarea').children().prepend("<div class='firstHighlight'></div>");
		}else{
			$('.ui-state-highlight').removeClass('firstHighlight').addClass('middleHighlight');
		}
	}
	else{
		if($('.dragarea').children().eq(1).hasClass('ui-state-highlight'))	
		{
			$('.ui-state-highlight').removeClass('middleHighlight').addClass('firstHighlight');
			//$('.dragarea').children().prepend("<div class='firstHighlight'></div>");
		}else{
			$('.ui-state-highlight').removeClass('firstHighlight').addClass('middleHighlight');
		}
	}
}

var updateScroll = function(){
	
		/*	if($('.dragarea').scrollTop()<= 0){
				$('.leftarraw').css({opacity:1,cusor:'default'});
				$('.rightarraw').css({opacity:1,cusor:'pointer'});
			}else{
				$('.leftarraw').css({opacity:1,cusor:'pointer'});
				$('.rightarraw').css({opacity:0.3,cusor:'default'});
			}
			
			
			
			
			maxscroll = maxHgt*0.48 + maxHgt*0.01
			
			
			if($('.dragarea').scrollTop()>maxscroll)
			{
				
				$('.dragarea').scrollTop(maxscroll);
				$('.rightarraw').css({opacity:0.3});
			}else if($('.dragarea').scrollTop()<(maxHgt+20)/2){
				$('.rightarraw').css({opacity:1,cusor:'pointer'});
			}

			
		$('.dragarea').scroll(function(){
			if ($(".dragarea").prop('scrollHeight') - $(".dragarea").scrollTop() <= $(".dragarea").height() + 53 )  
			 {
				
				$('.rightarraw').css({opacity:0.3,cusor:'default'});	
			}			
		});
		 
	*/
}
var sortfun = function(){
	

	if($('.dragarea').scrollTop()>maxHgt+20)
	{
		
		$('.dragarea').scrollTop(maxHgt+20);
	}
}

var swapOrderFol = function(e,ui) {
	var newIndex = ui.item.index();
    var oldIndex = $(this).attr('data-previndex');	
	if($(this).parents().is(".dragareaInactive"))
	{
	newIndex = newIndex+parseInt($('.dragarea').children().length)
	oldIndex = parseInt(oldIndex)+parseInt($('.dragarea').children().length)
	}
	
	$(this).removeAttr('data-previndex');
	
	
       // alert(ui.item[0].nextElementSibling);
       
    
	// x,y  1,3, 

	if(newIndex!=-1 && typeof oldIndex != 'undefined'){
		//recordIndex[[currAlphabet]][oldIndex] = recordIndex[[currAlphabet]].splice(newIndex, 1, recordIndex[[currAlphabet]][oldIndex])[0];
		
		var myFol = recordIndex;
 
		myFol = arrayMoveFol(myFol,oldIndex, newIndex);

	}	
	folderborderdesign();
	$(".scrollBar").mCustomScrollbar({
					theme:"3d-dark",
					axis:"y",
					advanced: {
					updateOnContentResize: true
					}
					});
	
	maxHgt = $('.dragarea')[0].scrollHeight;
	addPlacement()
	
	window.setTimeout(function(){		
		folderborderdesign();
		$('.dragareaall').scrollTop(ctStop);		
		console.log(ctStop+" stop")
	},1)
}
var arrayMoveFol = function(arr, oldIndex, newIndex) {
    var element = arr[oldIndex];
    arr.splice(oldIndex, 1);
    arr.splice(newIndex, 0, element);

}

function doConfirm(msg, yesFn, noFn) {
    var confirmBox = $(".cnfmhntcnt");
    confirmBox.find(".message").html(msg);
    confirmBox.find(".agree,.disagree").unbind().click(function () {
        confirmBox.hide();
		 $('.dummyfolDelCover').hide();
    });
    confirmBox.find(".agree").click(yesFn);
    confirmBox.find(".disagree").click(noFn);
    confirmBox.show();
		   $('.dummyfolDelCover').show();
}



var removeFolder = function(){

	
	$('.dltFolder').off('mousedown').on('mousedown',function(){
		var chkDup = false;
		$('.dummyfolderhide').hide();
	    var delFol = $(this);
		var gudAlert="<span>&nbsp;<br><br>Are you sure you want to delete this guide?</span>";
	    var folAlert="Are you sure you want to delete<br>this folder? Deleting the folder<br> will move all records back into<br>the Active Folder File Box.";
		var delContent = delFol.hasClass('dltGud') || delFol.hasClass('dltGudSp') ?  gudAlert : folAlert;
  doConfirm(delContent, function yes() {
	  

		var remFrmArr = delFol.parent().children().eq(2).html();
		if(delFol.hasClass('dltGud')){
			remFrmArr= guideName.indexOf(remFrmArr);			
			guideName.splice(remFrmArr,1);

		}else if(delFol.hasClass('dltGudSp')){
				remFrmArr= spGuideName.indexOf(remFrmArr);		
				spGuideName.splice(remFrmArr,1);
		}
	  
		else{
			$("#folDelete").show();
			remFrmArr= folderArr.indexOf(remFrmArr);		
			folderArr.splice(remFrmArr,1);

		}
	 
	if(delFol.parent().index() != 0)
	    var rmvFol = $('.dragarea').children().length+delFol.parent().index(); 
	else{
		var rmvFol = $('.dragarea').children().length+delFol.parent().index();
	}
		
		//alert($('.dragarea').children().length+' '+delFol.parent().index())
		var mainLetter = getElement(rmvFol);
	 mainLetter = mainLetter.find('.drogtoolname').text();
	 console.log(mainLetter+' '+recordIndex[rmvFol].length)
		delFol.parent().remove();
		
		
    	if(delFol.parent().hasClass('dragtooldiv'))				
		$.each(recordIndex[rmvFol],function(i,v){
			if(typeof v.order !='undefined'){
				var orginalPos = v.order.split(',');
			if(uniqArr.indexOf(parseInt(orginalPos[1]))==-1)
			{
					uniqArr.push(parseInt(orginalPos[1]));
					
			}
				v.dropped = false;
			}else{
				v.dropped = false;
			}
		});
		
		folderborderdesign();

	if(recordIndex[rmvFol].length>0){
		// $('.simworkcontainer').show();
		}
		
	$('.dragarea .dragtooldiv').each(function(ii,value) {
	var go = $(this).find('.addfolder').text();
	//console.log(ii+' '+go+' '+mainLetter)
		if(go == mainLetter && $(this).hasClass('highlightfol'))
		{
		var activeFolderIndex = ii;
		console.log(activeFolderIndex+' '+rmvFol+' '+ii)
		var zz=[];
	for(var i=0;i<recordIndex[ii].length;i++){
		for(var j=0;j<recordIndex[rmvFol].length;j++){
			console.log(JSON.stringify(recordIndex[ii][i].ansOrder) == JSON.stringify(recordIndex[rmvFol][j].ansOrder))
			if(JSON.stringify(recordIndex[ii][i].ansOrder) == JSON.stringify(recordIndex[rmvFol][j].ansOrder)){
				zz.push(j);
			}
		}
	}
	
	$.each(recordIndex[rmvFol],function(i,vv){
		if(zz.indexOf(i) == -1){
			
			recordIndex[ii].push(recordIndex[rmvFol][i]);
		}
	});
		// recordIndex[ii] = recordIndex[rmvFol];
		chkDup = true;
	checkEmptyFolder(activeFolderIndex,'match');
	//checkEmptyFolder(rmvFol,'match');
		$('.dragarea .dragtooldiv').eq(activeFolderIndex).off('click').on('click',showRelavPanel);
		closePanel();
		
		}
		
	});
	if(!chkDup){
		fromActiveArea = false;
			addNewFolder(mainLetter);
			// alert(folActive)
			var tempArray = recordIndex[rmvFol]
			recordIndex.splice(parseInt($('.dragarea').children().length)-1,0,tempArray);
			checkEmptyFolder(recordIndex.length-1,'match');
			rmvFol+=1;
			$('.dragarea .dragtooldiv').off('click').on('click',showRelavPanel);
	}
		
		
		// fromActiveArea = false;
		// createCardInActive = 1;
		// recreateCardInActive()
	    recordIndex.splice(rmvFol,1);
		console.log(recordIndex+' '+rmvFol)
		$('.dragarea2 .dragtooldiv').each(function(index,value) {
		checkEmptyFolder(index,'match');
		})
		$('.dragarea .dragtooldiv').each(function(index,value) {
		checkEmptyFolder(index,'match');
		})
		// getInxClk = rmvFol;
		// fromActiveArea = false;
		// moveFolBackToActive(delFol.parent().children().eq(2).html())
		
		// showFolder();
		folderborderdesign();
		inactiveFolderAlign()
		}, function no() {
            // do nothing
        });
	});
	
}


var changeArrOrder = function(e,ui){	
	var sortOrder = ui.item.index();		
	recordIndex.splice(sortOrder,0,[]);
	$('.dummyfolderhide').hide();
	enableDrop();
	
	
	
	maxHgt = $('.dragarea')[0].scrollHeight;
}
var updateFolderArr = function(){
	$('div.dragtooldiv').each(function(index, value){
		
		if(typeof recordIndex[index] == 'undefined')
			recordIndex[index]=new Array();
		
	});
	
}
