var clkOn = true;
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
												    top : $('.simworkarea').offset().top-300,
													left : $('.simworkarea').offset().left-220,
													transform:'scale(0.43)'
													
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
			//$('#forswipe').show();
		}
		
		if( /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
			$('.form input').css({width:'147px'});	
			$('#trimSpace .form > input').css({width:'320px'})
		}

		
		   if (navigator.userAgent.indexOf('Mac OS X') != -1) {
		      if( !(/iPhone|iPad|iPod/i.test(navigator.userAgent)) ) {
			    $('.substeping .num').css({lineHeight:'25px'});
			    $('#reviewAns .substeping .num').css({lineHeight:'33px'});
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

		if(recordIndex[[folLoc]]== ''){
			recordIndex[[folLoc]] = new Array();
			$('.dragtooldiv').eq(folLoc).attr('data',1);
			$('.dragtooldiv').eq(folLoc).off('mouseup').on('mouseup',showRelavPanel);			
		}
		
		recordIndex[[folLoc]][folOrder] = value;
		$('.dragtooldiv').eq(folLoc).off('mouseup').on('mouseup',showRelavPanel);
			getInx=folLoc;			
			changeFolderImg();
		
		}
		
		if(typeof value.crossAns != 'undefined') {
			
			
			$.each(value.crossAns,function(inx,v){
			
				var crossAnsOdr = value.crossAns;	
				var insCrsInp = v[0];			
			
				folLoc = value.xfolderinfo[inx][0];
				folOrder = value.xfolderinfo[inx][1];	
		//alert(recordIndex[[folLoc]].length+'crf')				
				if(recordIndex[[folLoc]]==''){
					recordIndex[[folLoc]] = new Array();
					$('.dragtooldiv').eq(folLoc).attr('data',1);
				}
				
				if(typeof(value.crossUnit[inx])=="undefined"){
					value.crossUnit.push({arr:[],job:1});					
				}
				for(i=0;i<insCrsInp.length;i++){
					
					value.crossUnit[inx].arr[i]=insCrsInp[i];
					
				}			
				
				value.crossUnit[inx].arr[9]=value.order;			
				recordIndex[[folLoc]][folOrder] = value.crossUnit[inx];		
				
			
			});
			
		}
		
		$('.dragtooldiv').eq(folLoc).off('mouseup').on('mouseup',showRelavPanel);
			getInx=folLoc;			
			changeFolderImg();
	});	
//console.log(recordIndex);
	$('#close').off('click').on('click',closePanel);
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
			
			value.crossUnit.arr[9]=value.order;
			
			
			recordIndex[[folLoc]][folOrder] = value.crossUnit;		
			
		}
			
		}*/
		
	$('.dragtooldiv').eq(folLoc).off('mouseup').on('mouseup',showRelavPanel);
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
		 
		 if($(ui.helper).hasClass("simworkarea")){			
		    $(this).draggable('instance').offset.click = {
                 left: Math.floor(ui.helper.width() / 2) + 30,
			     top: Math.floor(ui.helper.height() / 2) + 105
            }; 									
		 }else {
			   $(this).draggable('instance').offset.click = {
                 left: Math.floor(ui.helper.width() / 2),	
			     //top: Math.floor(ui.helper.height() / 1.985)
			     top: Math.floor(ui.helper.height() / 2) + 70
            };
		 }
		 
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
	//	console.log(JSON.stringify($(this).clone()))
		//nxtRecord.find('.simworkarea').show();	
		$(ui.helper).html(nxtRecord).css({visibility:'visible'}).children().css({transform:'scale(1)',top:'0px',left:'0px'});	
		$('.crossreference ,.simworkarea').draggable({disabled:false});
		$( "#tooltip,#filingtooltip" ).hide();	
		$("#fileHint").removeAttr("style");
		$('#fileHint').removeClass("orangeColor");
		$('#fileHint').addClass("fileHintbtn");
}



var changCursor = function(e,ui) {
	var xaxis = Math.abs((window.innerWidth -1000 )/2 - e.pageX);
//		console.log(xaxis = Math.abs((window.innerWidth -1000 )/2 - e.pageX));
	//console.log($(hoverId).hasClass('addfolder'));
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
		//console.log(e.pageY +','+ initScrollAmt);
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
		var scalecard = Math.abs(parseInt(xaxis)-850)/1500;
		if(xaxis > 570){scalecard = 0.153;}	
		if(scalecard>0.43){
			scalecard = 0.43;
		}	
	}else{
		var scalecard = Math.abs(parseInt(xaxis)-1500)/1500;		
		if(xaxis > 570){scalecard = 0.43;}
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
	$('.dragareaall ').droppable({tolerance:'pointer',out:function(){highlightresetfolder()},accept:'.swapAreaDrop,.crossreference,.simworkarea',drop:dropfolderindex});
		//$('.highlightfol,.addfolder,.dummyFolder').droppable({accept:'.swapAreaDrop,.crossreference,.simworkarea',drop:dropfolderindex});
	//$( ".dragtooldiv,.addfolder" ).droppable({hoverClass:'hvr', out: function (){}});
}



getInxClk = 'none';
var dropfolderindex = function(e, ui) {

	if(starttag && folCls2 != 'undefined' && typeof folCls2&&deg != 'undefined')
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
	//p	console.log(getInx)
		
//	indexId=$(this).children().eq(2);	
	
	getInx = folCls2.index();
	startClk();	
	//alert(folCls2.index()+' '+getInx+' '+folCls2.attr('class'));
	indexId = folCls2.find('.folderindex');
	var getData = folCls2.attr('data');
	
	if(getData!=1) {
		folCls2.attr('data','1');		
		recordIndex[[getInx]] = new Array();
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
			dataRecd[temp].crossUnit[xrefTemp].arr[9] = dataRecd[temp].order;
			
			recordIndex[[getInx]].push(dataRecd[temp].crossUnit[xrefTemp]);			
			
			$.each(dataRecd[temp].crossUnit,function(i,v){						
							dataRecd[temp].crossUnit[i].first=true;
							dataRecd[temp].crossUnit[i].arr[9] =	dataRecd[temp].order;						
												
			});
			
			chkOnDrag = false;
			crossRefDropMove();
			
			
	}else if(getInx != prevIndex){	
			if($(ui.draggable).hasClass('dragCrd')){
				toRemv = $(ui.draggable).closest('.swapAreaDrop').index();				
			}else{
				ui.draggable.remove();
			}
			
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
		$('#totalCards').text('Total: '+recordIndex[[currAlphabet]].length);
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
	
	$('.dragtooldiv').each(function(i,v){
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
	
	
	
}
var finalRecordrevert = false;
var updateNextInDrop = function(){

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
		$('#createGuidebtn,#fileHint').css({opacity:1,cursor:'pointer'});
		
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
			$('[name = submitconfirmation]').removeClass('subbtnActive').addClass('subbtn');
		    $('.dummySubbtn').show();
			
	   } else {		
		$('.nextCros').off('click').css('opacity','0.5');
			 $('.prevCros').off('click').css('opacity','0.5');
		if(cloneArr.length==0  && !chkOnDrag)
			$('[name = submitconfirmation]').removeClass('subbtn').addClass('subbtnActive');
		    $('#createGuidebtn,#fileHint').off("click").css({opacity:0.5,cursor:'default'});
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
	$.each(recordIndex,function(index,value){				
		if(typeof value !== 'undefined'){			
			$.each(value,function(inx,val){
				if(typeof val.name != 'undefined'){
					
					val.folderLocation = [index,inx];
					var mainCrd = val.order.split(',');
					
					if(val.job == 1){
					//console.log(mainCrd[0]+' '+JSON.stringify(dataRecdJob[mainCrd[0]])+' ss'+dataRecdJob[16]);
					
					dataRecdJob[mainCrd[0]].folderLocation = [index,inx];}else{dataRecd[mainCrd[0]].folderLocation = [index,inx]}
				}else{
					val.folderLocation = [index,inx];
					var mainCrd = val.arr[9].split(',');
					var getMainXref = val.crosRefCount;
					
					if(val.job == 1){console.log(mainCrd[0]+' '+getMainXref+' '+JSON.stringify(dataRecdJob[mainCrd[0]]));
					dataRecdJob[mainCrd[0]].crossUnit[getMainXref].folderLocation = [index,inx];	
					}else{
						
						dataRecd[mainCrd[0]].crossUnit[getMainXref].folderLocation = [index,inx];
					}
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
	if(recordIndex[[aIndexVal]].length>0) {		
			$('.dragtooldiv').eq(aIndexVal).find('.folderindex').show().text(recordIndex[[aIndexVal]].length);
			
		}
		else{	//checkRecdIndex();
		
				$('.dragtooldiv').eq(aIndexVal).find('.folderindex').hide();
				$('.dragtooldiv').eq(aIndexVal).find('img').attr('src','assets/images/foldericon.png');			
				$('.dragtooldiv').eq(aIndexVal).off('click');
				if(toUpd!='match'){	
				$('.parentCardPanel').fadeOut();
				$(".dummypanelCover").hide();
                			
				$(".cardPanel").getNiceScroll().hide();
				$('.callOut').css({visibility:'hidden'});
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
			$('[name = submitconfirmation]').removeClass('subbtnActive').addClass('subbtn');
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
		$('#tooltip,#filingtooltip').hide();
		$('[name = submitconfirmation]').removeClass('subbtn').addClass('subbtnActive');
		$('.dummySubbtn').hide();
		$('.simworkcontainer').hide();
		$('.hideBtns').show();
		playAudio('stop',0)
				$('.audPause').css({background: 'url(./assets/images/playbtn.png) no-repeat'});	
		$('.audPause1').css({background: 'url(./assets/images/playbtn.png) no-repeat'});
	    $('.startAud, .audPause').css('cursor','default').css('opacity','0.5');
	    $('.tcent .mCSB_container').html(simaction.file);
		$('.containersubheadone').html(simactionTitle.file)
		
	}
	
	//console.log(uniqArr);
}
var changeFolderImg = function() {
	/*if(getInx == 0)
	{
		$('.dragtooldiv').eq(getInx).find('img').attr('src','assets/images/folderopennum.png');
	}
	else*/
	{
		$('.dragtooldiv').eq(getInx).find('img').attr('src','assets/images/folderopen.png');
	}
	
	$('.dragtooldiv').eq(getInx).find('.folderindex').show();		
	if(recordIndex[[getInx]].length ==0)
	{
		$(indexId).hide();
	}
	else
	{
		$(indexId).show();
		$(indexId).text(recordIndex[[getInx]].length);
		
	}
	if(recordIndex[[getInx]].length == 0){
		$('.dragtooldiv').eq(getInx).off('click');
	}
	$('.dragtooldiv').eq(getInx).find('.folderindex').text(recordIndex[[getInx]].length);
	
	/*if(getInx == 0)
	{
		$('.dragtooldiv').eq(getInx).find('img').attr('src','assets/images/folderopennum.png');
	}
	else*/
	{
		$('.dragtooldiv').eq(getInx).find('img').attr('src','assets/images/folderopen.png');
	}
	
	
	
		
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
		
		if(typeof recdIndVal.name !='undefined')
			swapInside(i,recdIndVal,'.panelContainer');		
		else
			addCrossRef(i,recdIndVal,'.panelContainer','notAns');
		//$('#swapAreaDrop_'+i).css({zIndex:i});
		idx++;
	});
	$('.panelContainer .swapAreaDrop').css('cursor','pointer')
	if(recordIndex[[currAlphabet]].length>1)
	{
		$('.panelContainer .swapAreaDrop,.panelContainer .swapAreaDrop .cross_unit').css('cursor','ew-resize')
		
	}
	
	$('<div/>',{class:'dg',title:'Drag to Folder'}).appendTo('.dragCrd');	
	//$('.sim').css({position:'fixed'});
	$('#totalCards').text('Total: '+recordIndex[[currAlphabet]].length);
	//$('.panelContainer,.panelContainer2').css({transform:'scale(0.4)',transformOrigin:'0 0'});,containment:'#alphabeticSimulation'
	$('.panelContainer .swapArea').css({transform:'scale(0.35)',transformOrigin:'0 0'});
	$('.panelContainer').sortable({start:getPrevIndex,tolerance: 'pointer',sort:changCursor2,stop:restScl,update:swapOrder,refreshPositions: true,cancel:'.swapOrderNums,.dragCrd',axis:'x'});
	
	
	$('.panelContainer').children().off('click touchend').on('click touchend',zoomCard);
	$('.cardPanel').css({width:($('.panelContainer').children().length*285)+'px'})		
	lastPos=0;
	/*$('.cardPanel').scroll(function(){
	dragscrollfun();
	});*/
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
			$($(this).clone()).appendTo('#cloneContainer');
			if(!$("#cloneContainer .swapArea").children().hasClass('form'))
			{
				$("#cloneContainer .swapArea").addClass('scrollBar');
			}
		}else{
			if(cloneArr[cloneCnt].indexOf('m') != -1){
				$($('.simworkcontainer').clone()).appendTo('#cloneContainer');
				setTimeout(function(){$('#zoompopup #cloneContainer').find('#close2').css({'top':'15px','right':'280px'});},5)
			}else{
				$($('.simworkcontainer .crossreference').clone()).appendTo('#cloneContainer');
				setTimeout(function(){
					$('#zoompopup #cloneContainer #close2').css({'top':'93px','right':'316px'});
				},5)
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
				
				
				$('<div/>',{id:'close2'}).appendTo('#cloneContainer').html('&nbsp;').attr({'title':'Close'});
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
var getRmvVal = function(e,ui){
	prevIndex = getInxClk;	
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
		}else{
			
		}
		
}
var changCursorClone = function(e,ui){
	topstartpoint =200;
	var xposition = window.innerWidth< 1000? e.pageX  : (e.pageX -(window.innerWidth-1000)/2); 
	
	var scalecard = Math.pow((parseInt(e.pageY)/topstartpoint),4);
	if(scalecard < 0.2) {scalecard = 0.2;}
	if(scalecard > 1) {scalecard = 1}
	
		$(ui.helper).css({transform:'scale('+scalecard+')',opacity:'1'});
		//ui.position.left/=scalecard;
		//ui.position.top/=scalecard;
}
var showRelavPanel = function(e) {
	var ctl = e.which||e.keycode;
		if(ctl == 1 || inDevice){
  if(clkOn)		
   { 
	getInxClk = $(this).index();
	$('.parentCardPanel').attr('name',getInxClk);	
	$('.parentCardPanel').attr('letter',$(this).find('.addfolder').text());	
	currLetter = $('.parentCardPanel').attr('letter');
	$('#alphabet').text(currLetter);
	getInx = $('.parentCardPanel').attr('name');
	currAlphabet = $('.parentCardPanel').attr('name');
	indexId = $(this).find('.folderindex');
	
	//console.log('errrr ',getInx,recordIndex[[getInx]],recordIndex);
	if(recordIndex[[getInx]].length>0){	
        
        $('.dummypanelCover').show();	
		$('.parentCardPanel').fadeIn();			
		checkRecdIndex();	
			$('#toolsarea').hide();	
			
	}
	 if(recordIndex[[getInx]].length<=3)
    {
		$('#scrollcards').hide();
	 
	}else{
		$('#scrollcards').show();
		}
	var lef = $(this).position().left;	
  
	//resetClone();
	$('.callOut').css({visibility:'hidden'});
	$('.dragtooldiv').eq(getInx).find('.callOut').css({visibility:'visible'});
	$(document).ready(function(){
		if(!inDevice){
		$(".cardPanel").show();
		}
		$('.cardPanel').scrollTop(0);
	});
	updateStackOrder();		
	$('#scrolldrag').css({left:0});		
	$('#trimSpace').scrollLeft(0);		
	filedcardscrollfun();
   }
}
}
var resetClone = function(){
	$('.dragtooldiv').css({visibility:'visible'});
	$('.dragtooldivAnim').css({visibility:'hidden'});
}
var editDataClk = function(){
	
	$('.editclk').off('mousedown touchstart').on('mousedown touchstart',editData);
	//$('.dragCrd').draggable({ helper:'clone',appendTo: "body",start:getRmvVal,drag:changCursorClone,stop:restScl,zIndex:1000,revert:'invalid',containment:'.cover',refreshPositions: true,cursor:'move'});
}
var removAll = true;
var editData = function(e){ 
    
    
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
		removAll  = false;
			//alert($(this).parent().parent().parent().index())
		editDatInd = $(this).parent().parent().parent().index();
		e.stopPropagation();
		if(typeof(recordIndex[[currAlphabet]][editDatInd].order) != 'undefined'){
			removedElem = recordIndex[[currAlphabet]][editDatInd].order;
			recordIndex[[currAlphabet]][editDatInd].dropped = false;
			cloneCnt = recordIndex[[currAlphabet]][editDatInd].revtBak;			
			recordIndex[[currAlphabet]].splice(editDatInd,1);			
			orginalPos = removedElem.split(',');
			dataRecd[orginalPos[0]].dropped = false;
			placeItBack();	
			finalChk = 'sim';	
		}	
		else{				
			removedElem = recordIndex[[currAlphabet]][editDatInd].arr[9];		
			crosCount = recordIndex[[currAlphabet]][editDatInd].crosRefCount;			
			recordIndex[[currAlphabet]][editDatInd].dropped = false;
			cloneCnt = recordIndex[[currAlphabet]][editDatInd].revtBak;
			recordIndex[[currAlphabet]][editDatInd].folderLocation = [];			
			recordIndex[[currAlphabet]].splice(editDatInd,1);
			orginalPos = removedElem.split(',');
			dataRecd[orginalPos[0]].crossUnit[crosCount].dropped = false;
			//placeItBack();	//to remove crossref with maincard from folder
			finalChk = 'xref';			
		}
		checkRecdIndex();
		checkEmptyFolder(currAlphabet,'curr');
		
	}	
	
	addPlacement();

	if(typeof orginalPos != 'undefined'){
		if(uniqArr.indexOf(parseInt(orginalPos[1]))==-1)
		{
				uniqArr.push(parseInt(orginalPos[1]));
				
		}
			//placeItBack();
		uniqArr.sort(sortFunction);		
		updateCloneArr();	
		currQues = uniqArr.indexOf(parseInt(orginalPos[1]));
		$('.simworkcontainer').show();
		if($('.simworkarea ').hasClass('scaleCard'))	
			showMainAndCros();		
		$('.hideBtns').hide();
	}
	if($(this).hasClass('codeEditIcon')){
		$('.fileBtn').attr('data-click-state',0);
		
			hideFolder();
			oneTimescroll = false;
		       /* $('.tcent .mCSB_container').html(simaction.alphabeticSimulation);
				$('.containersubheadone').html(simactionTitle.alphabeticSimulation);
				$('.containersubheadone').css({marginLeft: '0px',marginTop: '-22px',fontSize: '19pt'});
		$('.tcent').animate({'margin-left': '80px', 'width': '800px'},100);	*/
	}		
	if($('.simworkarea ').hasClass('scaleCard')){		
		$('#toolsarea').show();
	}
	$('[name = submitconfirmation]').removeClass('subbtnActive').addClass('subbtn');
	$('.dummySubbtn').show();
	$('#createGuidebtn').css({opacity:1,cursor:'pointer'});	
	
	//filedcardscrollfun();
	$('.cardPanel').scrollLeft((getInx-1)*270)
	if(typeof recordIndex[[getInx]] != 'undefined'){
		if(recordIndex[[getInx]].length<=3)
		{
			$('#scrollcards').hide();
		}else{
			$('#scrollcards').show();
		}
	}
    finalRecordrevert = true;
	updateNextInDrop();
	filedcardscrollfun();
	dragscrollfun();
if($(this).hasClass('codeEditIcon')){
	//$('.simworkarea .mCustomScrollBox').css({visibility:'visible'});
}
	$('.drogtoolname').show();
	}
	//$('.panelContainer .swapAreaDrop').css({position:'relative',left:'0px'});
startToPlay('alphabeticSimulation',0);	
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
			//p	console.log(recordIndex[dlt[i][0]][dlt[i][1]].folderLocation)
				recordIndex[dlt[i][0]][dlt[i][1]].folderLocation = [];
				
				recordIndex[dlt[i][0]].splice(dlt[i][1],1);
				checkEmptyFolder(dlt[i][0],'match');
				
				
			}				
		}
      $('.hideAudio').hide();
	  progressbarFun();
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
//		 console.log(ui.item.attr('id'));
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
				$(appendClass+' #swapAreaDrop_'+i+' .swapArea').parent().append('<span class="jobSpan"><i>Record from Job 5</i></span>');
				$(appendClass+' #swapAreaDrop_'+i+' .swapArea').find('.carDrop').css({visibility:'hidden'});				
		}
	}else{
		$(appendClass+' #swapAreaDrop_'+i).addClass('job2');
	}
	
	$(appendClass+' #swapAreaDrop_'+i+' .swapArea').addClass('scrollBarReview')
	
	
	temparr = [];
	
	if(typeof objVal.crossUnit != 'undefined' && appendClass == ".userPanel")
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
	
		
		//console.log('test all '+i+' '+objVal);
	$('<div/>',{id:'swapAreaDrop_'+i,class:'swapAreaDrop'}).appendTo(appendClass).html();
	$('<div/>',{id:'swapArea_'+i,class:'swapArea'}).appendTo(appendClass+' #swapAreaDrop_'+i);
	$($('.crossrefnameing .form').clone()).appendTo(appendClass+' #swapArea_'+i);
	$('<div/>',{class:'editclk crossClk'}).appendTo(appendClass+' #swapArea_'+i+' .form');
	$('<div/>',{class:'offFocus'}).appendTo(appendClass+' #swapArea_'+i);	
	$('<div/>',{class:'crossrefhead'}).appendTo(appendClass+' #swapArea_'+i).html('NAME OR SUBJECT:');
	$('<div/>',{class:'dragCrd'}).appendTo(appendClass+' #swapAreaDrop_'+i);	
	$('.crossClk').attr('title', 'Move card to deck');
	$(appendClass+' .swapArea .form').find('input').attr('readonly','readonly');
        if( /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
		    $('.swapArea .form > input').css({width:'320px'});
		}		
	$(appendClass+' #swapArea_'+i+' .cross_unit').html('');
	$('<div/>',{class:'cardNum'}).appendTo('#swapArea_'+i);
	
	$(appendClass+' #swapArea_'+i+' .cardNum').text(objVal.arr[9]);
	if(objVal.job == 1 ){
		$(appendClass+' #swapAreaDrop_'+i).addClass('job1');
		if(appendClass == ".userPanel"){			
		$(appendClass+' #swapAreaDrop_'+i+' .swapArea').parent().append('<span class="jobSpan"><i>Sheet from Job 5</i></span>');
				$(appendClass+' #swapAreaDrop_'+i+' .swapArea').find('.form,.crossrefhead').css({visibility:'hidden'});
			//$(appendClass+' #swapAreaDrop_'+i+' .swapArea').empty().html('<span class="jobSpan">Sheet from Job 5</span>');
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
		}
		if(objVal.job == 1){
				$(appendClass+' #swapArea_'+i+' .cross_unit').eq(index).val($.trim(objVal.arr[index]));	
				$(appendClass+' #swapArea_'+i+' .cross_unit').eq(index).attr('value',$.trim(objVal.arr[index]));	
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
	splitName(objVal,appendClass+' .nameIns'+i,'addInsd'+i);
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

	//$(ui.item).css({top:'55px'});
    dragscrollfun();
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
        //createOrder(idx,details,'.orderResult',details.folderLocation[0],details.folderLocation[1]);
        createOrder(idx, details, '.orderResult', details.folderLocation[0], details.folderLocation[1], false);     // Create the grades for regular cards
        idx++;

        if (typeof details.crossUnit != 'undefined') {      // A cross reference exists for the card
            $.each(details.crossUnit, function (ii, vv) {
                {
                    var getCrossAns = vv.arr[9].split(','), getOrg;
                    var crossAnsOdr = getCrossAns[1];
                    if (vv.job == 1)    // Cross ref from a previous job
                        getOrg = dataRecdJob[crossAnsOdr];
                    else    // Cross ref from the current job
                        getOrg = dataRecd[crossAnsOdr];


                     if ((typeof getOrg.crossAns != 'undefined') && ii < getOrg.crossAns.length) {	// Proper cross reference created and its not a duplicate
                        addCrossRef(idx, vv, '.userPanel', 'notAns');
                        // if ((typeof vv.first != 'undefined' || vv.job == 1) && (getOrg.crossAns.length < 2 || vv.job == 1)) {
                        //
                        //     //to show maincard for multiplecrosref
                        //     addCrossRef(idx, vv, '.correctPanel', 'refAns');
                        // } else {
                        //     addCrossRef(idx, vv, '.correctPanel', 'refAns');
                        // }
                        addCrossRef(idx, vv, '.correctPanel', 'refAns');
                        createCrossAns(idx, vv, '.codeResult', 'crosRef', vv.folderLocation[0], vv.folderLocation[1], getOrg);

                    }
                    else {
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
        if (typeof details.crossAns != 'undefined') {
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
                        details.crossUnit[i].ansMatchWith = i
                    }
                    else {

                        details.crossUnit[i].ansMatchWith = temparr[i];
                        details.crossUnit[i].folderLocation = details.crossAns[temparr[i]][1];
                    }

                    details.crossUnit[i].arr[9] = details.order;
                    details.crossUnit[i].first = true;
                    //alert(details.crossUnit[i].folderLocation)

                    addCrossRef(idx, details.crossUnit[i], '.userPanel', 'notAns', 'empty');
                    addCrossRef(idx, details.crossUnit[i], '.correctPanel', 'refAns', 'empty');
                    createCrossAns(idx, details.crossUnit[i], '.codeResult', 'add', details.crossUnit[i].folderLocation[0], details.crossUnit[i].folderLocation[1], details.crossAns);
                    $('#cardIn_' + idx).html('<span class="wrong" style="color:#999"><font style="color:#000;font-weight:bold;">Inspection Result: </font>N/A</span><span class="wrong"><font style="color:#000;font-weight:bold;">Coding Result: </font>You did not create this required cross-reference sheet.<font color="#000">&nbsp;Score: 0/1</font></span>');
                    $('.userPanel #swapArea_' + idx).empty().html('<span class="blankcard"><i>Not Created</i></span>');
                    //	alert('x')
                    codescore--;
                    //totcodescore++;

                    //createOrder(idx,details.crossUnit[i],'.orderResult',details.crossUnit[i].folderLocation[0],details.crossUnit[i].folderLocation[1]);
                    // Create order for missing cross reference
                    //createOrder(idx,details.crossUnit[i],'.orderResult',details.crossUnit[i].folderLocation[0],details.crossUnit[i].folderLocation[1]);
                    createOrder(idx, details.crossUnit[i], '.orderResult', details.crossUnit[i].folderLocation[0], details.crossUnit[i].folderLocation[1], true);

                    var fol = details.crossUnit[i].folderLocation[0];
                    $('#cardOdrIn_' + idx).html('<span class="wrong"><font style="color:#000;font-weight:bold;">Order Result:</font> This record should be placed as [' + fol + ']' + (details.crossUnit[i].folderLocation[1] + 1) + '.<font color="#000"> Score: 0/1</font></span>');
                    //folderscore--;
                    idx++;
                    details.crossUnit[i].submt = true;

                }

            }
        }
    })
    ;

   $('#reviewAnswer  .swapArea').css({transform: 'scale(0.63)', transformOrigin: '0 0', marginLeft: '5px'});
   $('#reviewAnswer .correctPanel .swapArea').css({transform: 'scale(0.63)', transformOrigin: '0 0', marginLeft: '12px'});
   $('#reviewAnswer .swapArea .markingNamesnew2').css('top','-15px');
   
    for (var i = 0; i < dataRecd.length; i++) {
        dataRecd[i].codeScore[0] + '/' + dataRecd[i].codeScore[1];
        codescore += dataRecd[i].codeScore[0];
        totcodescore += dataRecd[i].codeScore[1];
		//console.log(codescore)
    }
    $('.correctPanel #swapAreaDrop_' + (idx - 1)).css({height: '400px'})
    $('<div/>', {id: 'swapAreaDrop_' + (idx), class: 'swapAreaDrop'}).appendTo('.userPanel');
   // $('<div/>', {class: 'swapAreaBorder'}).appendTo('.userPanel .swapArea');
    $('<div/>', {id: 'validationResult'}).appendTo('#swapAreaDrop_' + idx).css({marginTop: '20px'});
    folderNdGuideValidation();


    if (!(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent))) {
        $("#reviewAns .scrollBarReview").mCustomScrollbar({
            theme: "3d-dark",
            axis: "y",
            scrollButtons: {enable: true, scrollType: "stepped"},
            scrollInertia: 0,
            advanced: {
                updateOnContentResize: true
            },
            //scrollAmount: 553,
            // snapAmount : 400,
            scrollEasing: "easeOut",
            callbacks: {
                whileScrolling: function () {
                    revTop = this.mcs.topPct;
                    var moveScrol = $(this).parent().parent().hasClass('userPanel') ? '.correctPanel' : '.userPanel';

                    $(moveScrol + ' #' + $(this).parent().attr('id') + ' .swapArea .mCSB_container').css({top: this.mcs.top});
                    $(moveScrol + ' #' + $(this).parent().attr('id') + ' .swapArea .mCSB_dragger').css({top: this.mcs.draggerTop});


                }
            }

        });


    } else {
        $("#reviewAns .scrollBarReview").mCustomScrollbar({
            theme: "3d-dark",
            axis: "y",
            scrollButtons: {enable: true, scrollType: "stepped"},
            scrollInertia: 0,
            advanced: {
                updateOnContentResize: true
            },
            //scrollAmount: 553,
            //snapAmount: 400,
            scrollEasing: "easeOut",
            callbacks: {
                whileScrolling: function () {
                    revTop = this.mcs.topPct;
                    var moveScrol = $(this).parent().parent().hasClass('userPanel') ? '.correctPanel' : '.userPanel';

                    $(moveScrol + ' #' + $(this).parent().attr('id') + ' .swapArea .mCSB_container').css({top: this.mcs.top});
                    $(moveScrol + ' #' + $(this).parent().attr('id') + ' .swapArea .mCSB_dragger').css({top: this.mcs.draggerTop});


                }
            }

        });
    }
    /**/
    $('.userPanel .swapArea').css({overflow: 'visible'});
    $scrolable = $('.swapArea');
	$('<div/>', {class: 'swapAreaBorder'}).prependTo('.userPanel .swapArea');
    /*	$('#ctr').off('touchstart').on('touchstart',function(e){
     //alert(e.target.id);
     });*/


    $(".scrollBar1").mCustomScrollbar({
        theme: "3d-dark",
        scrollAmount: 423,
        snapAmount: 423,
//   setHeight:'200px',
        scrollButtons: {enable: true, scrollAmount: 423, scrollType: "stepped", tabindex: 11},
        axis: "y",
        advanced: {
            updateOnContentResize: true
        },
        contentTouchScroll: 350,
        documentTouchScroll: true,
        keyboard: {enable: true, scrollAmount: 423, snapAmount: 423, scrollType: "stepless"},
		scrollInertia:2000,
        scrollEasing: "easeOut",
        callbacks: {
            whileScrolling: function () {

                if (this.mcs.topPct >= 98) {
                    $('#ctr0').css({visibility: 'hidden'});
                } else {
                    $('#ctr0').css({visibility: 'visible'});
                }
            },
            onScroll: function () {
                getScrolTop = this.mcs.topPct;
                getScrolTop = getScrolTop * $('.userPanel .swapArea').length / 100;

                getScrolTop = Math.round(getScrolTop);


            }
        }

    });
//}/* */

    $('.userPanel .swapArea,.correctPanel .swapArea').scroll(function (i, v) {
        $('.correctPanel #' + $(this).attr('id')).scrollTop($(this).scrollTop());
        $('.userPanel #' + $(this).attr('id')).scrollTop($(this).scrollTop());
    });
    $('#dummyDiv1').hide();
/////ending

}
var folderNdGuideValidation = function(){
	
	var folderGuideCurreScore = 0;
	var folderCorr = "";
	var guideCorr = "";
	var folderExtra="";
	var guideExtra="";
	var folderCreate ="";
	var guideCreate ="";
	

	var folGuiOrder = [];	
	var folGuiOrdertype = [];	
	
	$('.dragtooldiv').each(function(i,v){
		//console.log(v);
		folGuiOrder.push($(this).children().eq(1).text());	
		if($(this).children().eq(1).hasClass("addfolder"))
		{
			folGuiOrdertype.push('F')
		}else if($(this).children().eq(1).hasClass("addguide"))
		{
			folGuiOrdertype.push('G')
		}
		else if($(this).children().eq(1).hasClass("addspecialguide"))
		{
			folGuiOrdertype.push('S')
		}
		
		
	});
	
	
	var foldercreation = "<br/><b>FOLDER CREATION:</b><ul>"
	folderplacement = "</ul><b>FOLDER PLACEMENT:</b><ul>"

/*	// FOLDER 
	
							// CC-0 FINDING ADDED G/F/S IN FOLDER 
							// F/G/S - 1 TYPE OF THE FINDING ADDEF F/G/S
							// NUMBER -2 BEGIND THE FINDING F/G/S
							// F/G/S - 3 TYPE OF THE BEGIND F/G/S
							// 3 f - highlightfol
							// 3 g - guide
							// 3 s - guidesp 
	var findAddedCorrectName =[['99','F','Folder','NUMBERS','F','Folder','highlightfol'],
						   ['IV','F','Folder','IV','S','Special Guide','guidesp'],
						   ['IC','F','Folder','I','F','Folder','highlightfol'],
						   ['IV','S','Special Guide','I','G','Guide','guide']]*/
	
	
	var createdCorrectly ,getFGS ;
	for(var i = 0; i<findAddedCorrectName.length; i++)
	{	
		if(findAddedCorrectName[i][1] == 'F'){
			folderMax.push(findAddedCorrectName[i][0]);
			getFGS = 'folder';
			//folderArr.push(findAddedCorrectName[i][0]);
		}
		else if(findAddedCorrectName[i][1] == 'G'){
			guideMax.push(findAddedCorrectName[i][0]);
			getFGS = 'guide';
			//guideName.push(findAddedCorrectName[i][0]);
		}
		else if(findAddedCorrectName[i][1] == 'S'){
			spGuideMax.push(findAddedCorrectName[i][0]);
			getFGS = 'guidesp';
			//spGuideName.push(findAddedCorrectName[i][0]);
		}
		
		createdCorrectly = 0;
		$('.'+findAddedCorrectName[i][6]).each(function(index,v){
			
			if($(this).children().eq(1).html() == findAddedCorrectName[i][3]){				
				currentindex = $(this).index();				
			}
			/*if($(this).children().eq(1).html() == findAddedCorrectName[i][0]){
				createdCorrectly = 1;
			}*/
		
		});	
		
		var behindName;
		var beforeName;
		var behindType;
		var beforeType;
		
		$('.'+getFGS).each(function(index,v){			
			if($(this).children().eq(1).html() == findAddedCorrectName[i][0]){
				
			    beforeName = $(this).next().find('.drogtoolname').text();
				behindName = $(this).prev().find('.drogtoolname').text();
			//console.log(behindName)
		    //console.log(beforeName)
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
			 folderCorr += "<li><span class='right'>You created the necessary "+findAddedCorrectName[i][2]+" \""+findAddedCorrectName[i][0]+"\".</span><font> Score: 1/1</font></li>";
			 folderGuideCurreScore++;
			 //alert(folderGuideCurreScore)
		}		
		else
		{
			 folderCorr += "<li><span class='wrong'>You failed to create the necessary \""+findAddedCorrectName[i][0]+"\" "+findAddedCorrectName[i][2]+".</span><font> Score: 0/1</font></li>";
		
		}


		//placement
//		console.log(findAddedCorrectName+' '+folGuiOrder[(Number(currentindex)-1)]+' '+findAddedCorrectName[i][0])
		if(	folGuiOrdertype[currentindex] == findAddedCorrectName[i][4] && 
			folGuiOrdertype[(Number(currentindex)-1)] == findAddedCorrectName[i][1] && 
			folGuiOrder[(Number(currentindex)-1)] == findAddedCorrectName[i][0]) 
		{	
			folderplacement += "<li><span class='right'>You correctly placed the \""+findAddedCorrectName[i][0]+"\" "+findAddedCorrectName[i][2]+". </span><font> Score: 1/1</font></li>";	
            folderGuideCurreScore++;			
			
		}
		else
		{
	       if(createdCorrectly){
			  
			  if(beforeName == ''){
			  folderplacement += "<li><span class='wrong'>You incorrectly placed the \""+findAddedCorrectName[i][0]+"\" "+findAddedCorrectName[i][2]+" before the \""+behindName+"\" "+behindType+". It should be placed behind the \""+findAddedCorrectName[i][3]+"\" "+findAddedCorrectName[i][5]+". </span><font> Score: 0/1</font></li>";
			  }else{ 
			  folderplacement += "<li><span class='wrong'>You incorrectly placed the \""+findAddedCorrectName[i][0]+"\" "+findAddedCorrectName[i][2]+" behind the \""+beforeName+"\"  "+beforeType+". It should be placed behind the \""+findAddedCorrectName[i][3]+"\" "+findAddedCorrectName[i][5]+". </span><font> Score: 0/1</font></li>";
			  }
			}
		  else
			{
			   folderplacement += "<li><span class='wrong'>The \""+findAddedCorrectName[i][0]+"\" "+findAddedCorrectName[i][2]+" should have been placed behind the \""+findAddedCorrectName[i][3]+"\" "+findAddedCorrectName[i][5]+". </span><font> Score: 0/1</font></li>";
				
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
		





	 
	$('#validationResult').html(foldercreation+folderExtra+guideExtra+spGuideExtra+folderplacement).css({width:'900px','font-size':'14px'});

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
			$('<span class="wrong"><font style="color:#000;font-weight:bold;">Inspection Result: </font> '+inspectNotCheck[val.ainspect]+'<font color="#000"> Score: 0/1</font></span>').prependTo('#cardIn_'+inx);
			
		}
		else if(val.inspect == val.ainspect)
		{
			$('<span class="right"><font style="color:#000;font-weight:bold;">Inspection Result: </font> '+inspectCorrectArr[val.inspect] +'<font color="#000"> Score: 1/1</font></span>').prependTo('#cardIn_'+inx);
			inspectscore++;
		}
		else
		{
			$('<span class="wrong"><font style="color:#000;font-weight:bold;">Inspection Result: </font> '+(ainspectwrongArr[val.ainspect] + inspectwrongArr[val.inspect])+' <font color="#000"> Score: 0/1</font></span>').prependTo('#cardIn_'+inx);
			
		}
		
		//console.log('n,y'+dataRecd[inx].inspect, dataRecd[inx].ainspect, val.ainspect,inx)
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
//console.log(JSON.stringify(val)+' '+getclass+' '+inx);
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
		var getCrossAns = val.arr[9].split(',');
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
                var fol = $('.dragtooldiv').eq(index).find('.drogtoolname').text();
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

var multipleCrfFolOdr = function(val, getOrg, index, order, job){
//console.log(JSON.stringify(val)+' '+getclass+' '+inx);
var rigcnt;
			var getCrossAns = val.arr[9].split(',');
			var crossAnsOdr = getCrossAns[1];						
		if(typeof getOrg == 'undefined')
			return [0];
			
		$.each(getOrg,function(inx,value){
			
			rigcnt=0;		
			var fol = $('.dragtooldiv').eq(index).find('.addfolder').text();			
				if(fol == value[1][0] && order === value[1][1]){
					rigcnt=[value[1][0],value[1][1]];			//console.log('ans Rig '+rigcnt);
					
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


    var fol = $('.dragtooldiv').eq(index).find('.addfolder').text();
    //console.log('ssss '+fol+' '+index);
    //var rigFol = $('.dragtooldiv').eq(getFolOdr).find('.addfolder').text();

    var folder_label = "";

    crscoreassign(val, 0);

    function makeInternalMapping() {
        var mappingObject = {};

        for (var j = 0; j < foldertypeandName.length; j++) {
            if (foldertypeandName[j][0] == "F") {
                mappingObject[j] = foldertypeandName[j][1];
            }
        }

        return mappingObject;
    }

    var internalMapping = makeInternalMapping();
    folder_label = internalMapping[index];

    if (val.job != 1 && typeof val.arr != 'undefined' && typeof val.first == 'undefined') {
        $('#cardOdrIn_' + inx).html('<span class="wrong"><font style="color:#000;font-weight:bold;">Order Result:</font> You placed this record as [' + fol + ']' + (order + 1) + '.<font color="#000"> Score: 0/0</font></span>');
        //totfolderscore--;
    } else {
        //totfolderscore++;
        if (fol === getFolOdr && order === getInsOdr) {
            //console.log('main '+ index, 1);
            crscoreassign(val, 1);
            folderscore++;
            totfolderscore++;
            //$('#cardOdrIn_'+inx).html('<span class="right"><font style="color:#000;font-weight:bold;">Order Result:</font> You placed this record correctly as ['+fol+']'+(order+1)+'.<font color="#000"> Score: 1/1</font>');
            $('#cardOdrIn_' + inx).html('<span class="right"><font style="color:#000;font-weight:bold;">Order Result:</font> You placed this record correctly.<font color="#000"> Score: 1/1</font>');
        } else if (typeof getInsOdr == 'undefined') {
            //console.log('main els '+ index, 21);
            $('#cardOdrIn_' + inx).html('<span class="wrong"><font style="color:#000;font-weight:bold;">Order Result:</font> You placed this record as [' + fol + ']' + (order + 1) + '. This is an extra cross-reference sheet.<font color="#000"> Score: 0</font></span>');
           // folderscore--;

        }
        else if (noXRefFlag == false) {
            if (scoreAjaxData[0][folder_label].item_grading[order] == 'Correct') {
                crscoreassign(val, 1);
                folderscore++;
                totfolderscore++;
                //$('#cardOdrIn_'+inx).html('<span class="right">You placed this card correctly as ['+fol+']'+(order+1)+'.<br><font color="#000">Score: 1/1</font>');
                $('#cardOdrIn_' + inx).html('<span class="right"><font style="color:#000;font-weight:bold;">Order Result:</font> You placed this record correctly.<font color="#000"> Score: 1/1</font>');
            }
            else {
                // $('#cardOdrIn_' + inx).html('<span class="wrong">You placed this card as [' + fol + ']' + (order + 1) + '.<br>It should be [' + rigFol + ']' + (getInsOdr + 1) + '.<br><font color="#000">Score: 0/1</font></span>');
                $('#cardOdrIn_' + inx).html('<span class="wrong"><font style="color:#000;font-weight:bold;">Order Result:</font> You placed this record as [' + fol + ']' + (order + 1) + '. It should be [' + getFolOdr + ']' + (getInsOdr + 1) + '. <font color="#000"> Score: 0/1</font></span>');
                totfolderscore++;
                placedIncorrect++;
            }
        }
        else {
            //console.log('main el '+ index, 31);
            $('#cardOdrIn_' + inx).html('<span class="wrong"><font style="color:#000;font-weight:bold;">Order Result:</font> You placed this record as [' + fol + ']' + (order + 1) + '. It should be [' + getFolOdr + ']' + (getInsOdr + 1) + '.<font color="#000"> Score: 0/1</font></span>');
            totfolderscore++;
            placedIncorrect++;
        }
    }

}

var tempid=100;
var addNewFolder = function(){	

	
	$('#createFol, #createGuidesubbtn').off('click').on('click',function(){
		stattag = false;
		$('.dragareaall').on('touchmove',function(e){  		
         // e.preventDefault();		
	    }); 
		var fol = $('.modal-body input').val();
		fol = fol.slice(0,1);
	//	$('#createFolder').hide();
		
		var folderguidname = '';	
		var folderguidtype = '';
		

	if($(this).attr('id') == 'createGuidesubbtn')
	{
		$('#createGuide').show();
		//$('.addGubtn').css({'background':'#e75028', 'color':'#fff'});
	    if ($('.radio_indicator1').hasClass('radio_indicatorActive'))
		{
			folderguidtype=($('#radioGud').val());
		}
		else 
		{
			folderguidtype=($('#radioSpgud').val());
		}
	
		folderguidname=($('#guidename').val().toUpperCase());
		if(folderguidname.trim().length == 0)	{	alert("Enter Guide Name");	return;	}
		
		if(guideName.indexOf(folderguidname.toUpperCase()) > -1 )	{	alert("Name already exist");		return; }
		else if( spGuideName.indexOf(folderguidname.toUpperCase()) > -1){
			alert("Name already exist");		return; 
		}
		else
		{
			//$('.modal-content').hide();
			//$('.modal-content').css('opacity','0.5');
		}
		if(folderguidtype == 'guide')
		{	
		
			$('.dragarea ').append('<div id=dragtooldivguide_'+tempid+' class="dragtooldiv guide"><span></span><div class="addguide">'+(folderguidname)+'</div><span class="drogtoolname">'+(folderguidname)+'</span><span class="folderindex">'+0+'</span><span class="drogtoolnum">'+folderguidname+'</span><div class="dltFolder dltGud" style="display:block"></div><span class="rigCurveg"></span><div class="dummyGuide"></div></div>');
			guideName.push(folderguidname);
			if(folderguidname.length>12)
			{
		
				$('#dragtooldivguide_'+tempid+' .addguide').attr('title',folderguidname.replace(/\s+/g,' '))
			
		    }
		}
		else
		{
			$('.dragarea ').append('<div id=dragtooldivguide_'+tempid+' class="dragtooldiv guidesp"><span class="lefCurve"></span><div class="addspecialguide">'+(folderguidname)+'</div><span class="drogtoolname">'+(folderguidname)+'</span><span class="folderindex">'+0+'</span><span class="drogtoolnum">'+folderguidname+'</span><div class="dltFolder dltGudSp" style="display:block"></div><span class="rigCurveg"></span><div class="dummyGuide"></div></div>');
			spGuideName.push(folderguidname);
			if(folderguidname.length>12)
			{
				$('#dragtooldivguide_'+tempid+' .addspecialguide').attr('title',folderguidname.replace(/\s+/g,' '))
			
		    }
		}
		
		$('#createGuide').hide();
	    $('.addGubtn').css({color:'#5a4a42','background':'#fff'});
		$('.dummyDivGud').hide();
		
	} else if($(this).attr('id') == 'createFol'){
		
		//folderguidtype=($('input[name=guider]:checked').val());
		folderguidname=($('#foldername').val().toUpperCase());
		
		if(folderguidname.trim().length == 0)	{	alert("Enter Folder Name");	return;	}
		if(folderArr.indexOf(folderguidname.toUpperCase()) > -1)	{	alert("Name already exist");		return; }
		else
		{
			//$('.modal-content').hide();
			//$('.modal-content').css('opacity','0.5');
		}
		
		$('.dragarea').append('<div id=dragtooldiv_'+tempid+' class="dragtooldiv folParent highlightfol folder"><span class="lefCurve"></span><div class="addfolder folParent highlightfol">'+(folderguidname)+'</div><span class="drogtoolname">'+(folderguidname)+'</span><span class="folderindex">'+0+'</span><span class="drogtoolnum">'+folderguidname+'</span><div class="dltFolder" style="display:block"></div><span class="rigCurve"></span><div class="dummyFolder"></div></div>');
        addfoldcount++;
          scrollfun();
		  setTimeout(function(){
		  $('.dragareaall').scrollTop(maxScrollTop);
		  },100);
		  
		$('#createFolder').hide();
		$('.addFldrbtn').css({color:'#5a4a42','background':'#fff'});
		$('.dummyDivGud').hide();
		folderArr.push(folderguidname);
		hoverEffect();
		if(folderguidname.length>16)
			{
				$('#dragtooldiv_'+tempid+' .addfolder').attr('title',folderguidname.replace(/\s+/g,' '))
			
		    }	
		
		$('.dragareaall').scrollTop();	
	}
	$('.dragtooldiv:not(.unsortable)').find('.dltFolder').show();
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
	$('.dragarea').sortable({start:dragSortStart,helper:'clone',appendTo:'body', sort:setsortCursor,update:swapOrderFol,cancel:'.unsortable, .dltFolder',axis:'y',refreshPositions: true,stop:sortStop,tolerance: "pointer",zIndex:100000,placeholder: "ui-state-highlight",scroll:false});
	//$('.rightarraw').hide();
	//$('.dragarea').addClass('scrollBar');
	//containment:'.dragareaall',sort:sortfun
		//recordIndex=new Array();
		//$('.dragarea').append('<div id=dragtooldiv_'+fol+' class="dragtooldiv"><img src="assets/images/foldericon.png" width="300" height="20"  ><span class="drogtoolname">&#'+(asciicodestartval+fol)+';</span><span class="folderindex">'+0+'</span><span class="drogtoolnum">'+fol+'</span></div>');
	
		recordIndex.splice(recordIndex.length,0,[]);	
		// $('.dragarea').scrollTop($('.dragarea').scrollTop()+20)
		updateScroll();
		$('.track2').animate({bottom:'0px'});
		
			/*$('.enscroll-track track1').animate({
			   scrollTop: $('.enscroll-track track1')[0].scrollHeight,
			   //scrollTop: $('#your-id').offset().top
			   //scrollTop: $('.your-class').offset().top
			}, 'slow');*/

		
		});
		addPlacement();
		
	//	$(".dragtooldiv ").draggable({axis:'y',containment:'.dragarea',drag:createSpace});
}

var createSpace = function(){
	
}
var dragSortStart = function(e,ui){
	//console.log(maxHgt)
	stattag = true;
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
	//console.log($(ui.helper).children().eq(1).hasClass('highlightfol'))
	//$('.addfolder').css({'backgroundImage':'url(assets/images/leftguide.png)', 'background-color':'rgba(255,0,0,0.01)'})
	$(ui.helper).children().eq(1).css({'backgroundImage':'url(assets/images/folderLeftOver.png)'});
	
	$('.rightarraw').show();
	$( "#tooltip,#filingtooltip" ).hide();	
	$("#fileHint").removeAttr("style");
	$('#fileHint').removeClass("orangeColor");
	$('#fileHint').addClass("fileHintbtn");
	$( ".addfolder,.dummyFolder" ).droppable({disabled:true});
}
var sortStop = function(e,ui){
	$(ui.helper).children().eq(0).css({'opacity':'1'});
	$(ui.helper).children().eq(1).css({'backgroundImage':'url(assets/images/folderLeftOver.png)'});
	$(ui.item).css('opacity',1);
	$(ui.item).find('.drogtoolname').show();
	$( ".addfolder,.dummyFolder" ).droppable({disabled:false});
}
var setsortCursor = function(e,ui){
	$(ui.helper).css({left:'360px'});	

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
			
			
			//console.log($('.dragarea').scrollTop(),maxHgt, maxHgt*0.52 +' -scroll- '+maxHgt+20, maxScrollTop)
			
			maxscroll = maxHgt*0.48 + maxHgt*0.01
			
			
			if($('.dragarea').scrollTop()>maxscroll)
			{
				//console.log( '                                                                 max'+ maxHgt);
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
	//console.log('height'+$('.dragarea')[0].scrollHeight,$('.dragarea').scrollTop(),($('.dragarea').children().length*15)+25);

	if($('.dragarea').scrollTop()>maxHgt+20)
	{
		
		$('.dragarea').scrollTop(maxHgt+20);
	}
}

var swapOrderFol = function(e,ui) {
	var newIndex = ui.item.index();
    var oldIndex = $(this).attr('data-previndex');	
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
	//console.log(maxHgt)
	maxHgt = $('.dragarea')[0].scrollHeight;
	//console.log(maxHgt)
	//console.log('@@@@@@@@@@@@@@@@@@@@@@@@@')
	addPlacement();
}
var arrayMoveFol = function(arr, oldIndex, newIndex) {
    var element = arr[oldIndex];
    arr.splice(oldIndex, 1);
    arr.splice(newIndex, 0, element);
//p	console.log(recordIndex);	
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

var oneTimescroll = false;

var removeFolder = function(){

	$('.dltFolder').off('mousedown touchstart').on('mousedown touchstart',function(e){
	sctp = $('.dragareaall').scrollTop();
	e.stopPropagation();
	oneTimescroll = true;
   var ctl = e.which||e.keycode;
   if(ctl == 1 || inDevice){
        e.preventDefault();
			
		$('.dummyfolderhide').hide();
	    var delFol = $(this);
		var gudAlert="<span>&nbsp;<br><br>Are you sure you want to delete this guide?</span>";
	    var folAlert="If you delete this folder, the records in this folder will<br> be moved back to the pile of unfiled records at the<br> left side of this screen. <br>Are you sure you want to delete this folder?";
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
	 
	    var rmvFol = delFol.parent().index();
		delFol.parent().remove();
		
		
    	if(delFol.parent().hasClass('dragtooldiv'))	
	
		$.each(recordIndex[rmvFol],function(i,v){
		   if(typeof v.order !='undefined'){
			  var orginalPos = v.order.split(',');
			if(uniqArr.indexOf(parseInt(orginalPos[1]))==-1)
			{
					uniqArr.push(parseInt(orginalPos[1]));
					
			}
			   dataRecd[orginalPos[0]].dropped = false;
				
			}else{
			
				var orginalPos = v.arr[9].split(',');
			    var getMainXref = v.crosRefCount;
				dataRecd[orginalPos[0]].crossUnit[getMainXref].dropped = false;
				
			}
		});
	 
		folderborderdesign();

	if(recordIndex[rmvFol].length>0){
	    showFolder();
		$('.simworkcontainer').show();
		}
	    recordIndex.splice(rmvFol,1);
	
		if(cloneArr.length>0){
			$('.simworkcontainer').css({visibility:'visible'});
			$('[name = submitconfirmation]').removeClass('subbtnActive').addClass('subbtn');
		}
		folderborderdesign();
		addfoldcount--;
		 scrollfun();
		  $('.dragareaall').scrollTop(sctp);
		}, function no() {
            // do nothing
        });
	  }
	});
 
}


var changeArrOrder = function(e,ui){	
	var sortOrder = ui.item.index();		
	recordIndex.splice(sortOrder,0,[]);
	$('.dummyfolderhide').hide();
	enableDrop();
	
	//console.log($('.dragarea')[0].scrollHeight)
	
	maxHgt = $('.dragarea')[0].scrollHeight;
	
}
var updateFolderArr = function(){
	$('.dragtooldiv').each(function(index, value){
		if(typeof recordIndex[index] == 'undefined')
			recordIndex[index]=new Array();
	});	

}
