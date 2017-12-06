var plusVal = 1;
var currCrosref=0;
var notDropped = [];
var chngQues = function(currQues) {
	if(uniqArr.length > 0)
	{
	$('.simbtn,.crossbtn .hintbtn').css('background','#5a4a42').css('cursor','pointer').css('opacity',1);
	$('.dummySubbtn').show();
	$('.offSteps').css('width','0px').css('height','0px').show();
		
	}

	
	/*if(Number(currQues) == dataRecd.length)
	{
		currQues--;
		
	}*/	
	recdLen = uniqArr.length;
	$('.simworkarea').children().css({visibility:'visible'});
	
	pushData();	
	enableNav();
	getLenName = splVal.length;
	$('#rollNum').text(currQues+1);
	//$('.simworkcontainer .choseactn').html('CARD '+(currQues+plusVal)+' OF '+uniqArr.length);
	//$('.simworkcontainer .choseactn').html('CARD '+(curVal+1)+' OF '+dataRecd.length +'<span class="">FILED CROSS-REFERENCES:</span>');
	$('.simworkcontainer .choseactn').html('CARD '+(curVal+1)+' OF '+dataRecd.length +'<span class="">FILED CROSS-REFERENCES:</span>');
//	<span class="crossbtnBadge" style="position:absolute; left:0; top:0px" ></span>
	$('.nameing>span').each(function( intIndex ) {
		$( this ).bind ("mousedown",function(e){			
			selectEventType(intIndex);			
			e.stopPropagation();			
			 //cancelBubbleEvent(e);
		});
	});	
	dataReset();

	$('.simbtn').css('background-color','#5a4a42');
	currentId = "empty";
	nextPreTag = false;
	simButtonEnableFun();	
	//cursorAction();
	$('.simworkarea').draggable({disabled:false});		
	
	checkAnswer();	
	
		
	/*if(typeof dataRecd[curVal].crossAns == 'undefined')
		$('[name=crossreference]').css('opacity','0.8');
	else	
		$('[name=crossreference]').css('opacity','1');
		*/
	if(crossrefvis)
	{
		$('.simworkcontainer').css({'left':'50px'});
		$('.crossreference').show()
	}
	crossRefUpdate();
	dataRecd[curVal].crfLastVal = crosCount;
crosCount = closestOnDrop(crosCount);	
	storeCrossRef(crosCount);
	if (!(dataRecd[curVal].crossUnit.length>0))	{
		$('.simworkcontainer').css({'left':'280px'});		
		$('.crossreference,.crosref').hide();
		$('.next').css({left:'335px'})	
	//	$('.tcent .mCSB_container').html(simaction.alphabeticSimulation);
		
	} else	{
		$('.simworkcontainer').css({'left':'50px'});		
				$('.crossreference,.crosref').show();
		$('.next').css({left:'675px'});
	}
	if(crosDrop.length == dataRecd[curVal].crossUnit.length){
		$('.simworkcontainer').css({'left':'280px'});		
		$('.crossreference,.crosref').hide();
		$('.next').css({left:'335px'});
	}
	applyHint();
	updatePercentage();	
	enableDrag();
	
	$('.tcent .mCSB_container').html(simaction.alphabeticSimulation);
	startToPlay('alphabeticSimulation', 0)
	
	//crossRefMaxCardfun();
	
	//console.log(dataRecd[curVal].crossUnit.length,notDropped.length)
	
	
			if(dataRecd[curVal].crossUnit.length-notDropped.length == 0)
			{
				$('.simworkcontainer .choseactn span').hide();
				$('.crossbtnBadge').hide();
				$('.choseactn').css('text-align','center');
			}
			else 
			{
				$('.simworkcontainer .choseactn span').show();
				$('.crossbtnBadge').show();
				$('.choseactn').css('text-align','left');

			}
			$('.simworkcontainer .choseactn span').html('FILED CROSS-REFERENCES: '+(dataRecd[curVal].crossUnit.length-notDropped.length))
			
			
			
			
}
	function cancelBubbleEvent(e) {
    if (!e)
      e = window.event;

    //IE9 & Other Browsers
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    //IE8 and Lower
    else {
      e.cancelBubble = true;
    }
	
	
}
var crossRefUpdate = function() {
		
		
		if(typeof(dataRecd[curVal].crossUnit)=="undefined"){
			dataRecd[curVal].crossUnit.push({'arr':[],'job':1});
			
			
			crosCount=0;			
		}
		//console.log(dataRecd[curVal].crossUnit.arr.length)	
		
		
}
var crossReferAct = function() {
		
	if(typeof(dataRecd[curVal].crossUnit)=="undefined"){			
			dataRecd[curVal].crossUnit = new Array();
			dataRecd[curVal].crossUnit.push({'arr':[],'job':2});
			
			
	}else if(dataRecd[curVal].crossUnit.length<5)
	{			
		dataRecd[curVal].crossUnit.push({'arr':[],'job':2});	
		dataRecd[curVal].crossUnit[0].arr[9]=dataRecd[curVal].order;		
	}
	

	

	crosCount=dataRecd[curVal].crossUnit.length;
	
	keyPressOnCros();
	
}

var crossRefLengthcheck = function(){
	
	
	if(dataRecd[curVal].crossUnit.length<5)
	{
		
		$('.crossbtn').css('opacity',1).css('cursor','pointer').unbind('click').bind('click', crossBtnEventCalling);
	}
	else
	{
		$('.crossbtn').css('opacity',0.5).css('cursor','default').unbind('click');
	}
}

var createCrosLables = function(){
	$('.crossbtnlist').empty();
	
	$.each(dataRecd[curVal].crossUnit,function(i){
	
		$('<div/>',{class:'crossbtn1'}).appendTo('.crossbtnlist').html(i+1);	
		$('.crossbtnlist').show();
	});
	$('.crossbtn1').off('click').on('click',function(){
			crosCount = $(this).index();				
			keyPressOnCros();			
	});
	crossRefDisableEnable();		
}

var keyPressOnCros = function(){
	//crossRefDisableEnable();
	$('.crossrefnameing .cross_unit').off('keyup').on('keyup',function(e,ui){
				var insertUnit = ($(this).index()-1)/2;
				if(typeof dataRecd[curVal].crossUnit[crosCount] == 'undefined'){
					dataRecd[curVal].crossUnit[crosCount]=new Array();					
					dataRecd[curVal].crossUnit[crosCount].arr=new Array();					
				}
				
				dataRecd[curVal].crossUnit[crosCount].arr[insertUnit] = ( $(this).val());				
				//console.log(JSON.stringify(dataRecd[curVal].crossUnit))
				//enableDrag();
				
			crossRefCardSelect(insertUnit);	
				
	});
	crosCount = closestOnDrop(crosCount);

	storeCrossRef(crosCount);
}

var crossRefCardSelect = function(insertUnit){
}








var crossRefDisableEnable = function(){

	notDropped = [];
	//console.log(JSON.stringify(dataRecd[curVal].crossUnit));
	$.each(dataRecd[curVal].crossUnit,function(i,v){
		
			if(v.dropped){				
				$('.crossbtn1').eq(i).off('click').css({opacity:0.5,cursor:'default'});			
			}
			else{
				notDropped.push(i);				
			}
		});
//		console.log(crosCount+'...............'+notDropped);
		crosCount = closestOnDrop(crosCount);
	$('.crossbtn1').removeClass('activeClk');
	
	if($.inArray(crosCount,crosDrop) == -1)
		$('.crossbtn1').eq(crosCount).addClass('activeClk');
}



	
var storeCrossRef = function(crosCount) {	
	createCrosLables();	
	
	$('.crossrefnameing .cross_unit').val('');		

	if(typeof dataRecd[curVal].crossUnit[crosCount] != 'undefined'){	
		for(i = 0; i < $('.crossrefnameing .cross_unit').length; i++) {
				$('.crossrefnameing .cross_unit').eq(i).val($.trim(dataRecd[curVal].crossUnit[crosCount].arr[i]));
		}
		dataRecd[curVal].crossUnit[crosCount].dropArr=crosDrop;
	}
	
	$('.simworkarea .cardNum').text(dataRecd[curVal].order);
	$('.crossreference .cardNum').text(dataRecd[curVal].order);
	
	//enableDrag();
	$('.clsCrosRef').off('click').on('click',delClk).css({opacity:'1',cursor:'pointer'});
	
	enableCrosNav(crosCount);
	$('.crossreference').draggable({disabled:true});
	//alert(dataRecd[curVal].crossUnit.dropArr.length+' '+dataRecd[curVal].crossUnit.arr.length);
	//jQuery('input').blur();
if(dataRecd[curVal].crossUnit.length!=0 && (crosDrop.length == dataRecd[curVal].crossUnit.length)){
		$('.crossreference').draggable({disabled:true}).css({opacity:'0.5'}).prop("readonly", true);
		
		$('.crossRefOff').show();
		$('.simworkAreaOff,.offSteps').hide();
		
		$('.tcent .mCSB_container').html(simaction.alphabeticSimulation);
		$('.crossreference .cross_unit').val('');
		//$('.crossbtnBadge').html(dataRecd[curVal].crossUnit.length).show();
		crossGhostimgRemove();
		//jQuery('input:first').blur();
	}
else{
	$('.crossreference').draggable({disabled:false}).css({opacity:'1'}).prop("readonly", true);
		$('.crossRefOff').hide();
		
		if(dataRecd[curVal].crossUnit.length!=0) {
					$('.tcent .mCSB_container').html(simaction.crossreference);
					//$('.crossbtnBadge').html(dataRecd[curVal].crossUnit.length).show();
					$('.simworkAreaOff,.offSteps').show();
					if(titleNew !== 'crossreference')
	                {
					     startToPlay('crossreference',0);
	                }
					crossRefCardSelect(0);
			}else{
					$('.simworkAreaOff,.offSteps').hide();
					$('.crossbtnBadge').hide();
					$('.choseactn').css('text-align','center');

					//$('.tcent .mCSB_container').html(simaction.alphabeticSimulation);
			}
		
	}
	$.each(dataRecd[curVal].crossUnit,function(i,v){
				v.crosRefCount = i;
	});		
	crossRefLengthcheck();
}
var enableCrosNav = function(crosCount) {

	//alert(drp);
	if(crosCount==0){
		 $('.prevCros').off('click').css('opacity','0.5');    
		 $('.nextCros').off('click').on('click', getCrosNext).css('opacity','1');
			if(dataRecd[curVal].crossUnit.length==1 || dataRecd[curVal].crossUnit.length==0){			 
			$('.prevCros,.nextCros').off('click').css('opacity','0.5');
		 }
	 }
	else if(crosCount==dataRecd[curVal].crossUnit.length-1){
		$('.nextCros').off('click').css('opacity','0.5');	
		$('.prevCros').off('click').on('click', getCrosPrev).css('opacity','1');
	}else{
		$('.nextCros').off('click').on('click', getCrosNext).css('opacity','1');
		$('.prevCros').off('click').on('click', getCrosPrev).css('opacity','1');
	}	
	
	
}
var getCrosNext = function() {    
	crosCount++;	
	storeCrossRef(crosCount); 	
}
var getCrosPrev = function() {    
	crosCount--;	
	storeCrossRef(crosCount);	 
}
var applyHint = function() {
	if(dataRecd[curVal].hintt == "" ){
		$('#hintbtnid').off('click').css({background:'#5a4a42',opacity:'0.5',cursor:'default'});
		$("#tooltip").hide();
	}else{
		$('.triangle-isosceles div p').html(dataRecd[curVal].hintt)
		$( "#hintbtnid" ).off('click').on('click',hintFun).css({opacity:'1',cursor:'pointer'});
		//if(hintshowtag){	$("#tooltip").show(); }
		if(dataRecd[curVal].hintRus.length == 0){
			$('#cnfmhntpop').hide();
		}else{
			$('#cnfmhntpop').show();
		}
		//showhintmin();
	}
	
}
var dataReset = function() {	
	//storeData(dataRecd[curVal].icode,'.nameing>span');	
	//storeUnitIden(dataRecd[curVal].iuid,'.nameing>span');			//restore all data code ,unit identification,unit numbering
	//storeSequence(dataRecd[curVal].iunum,'.nameing>span');
}
var storeData = function(storeVal,splCls) {	

	$.each(storeVal,function(strInx,icdVal){		
		$(splCls).eq(icdVal).html('/');
	});
	
}
var storeUnitIden = function(storeVal,splCls) {	
	$.each(storeVal,function(strInx,uidVal){
		$(splCls).eq(uidVal).css('text-decoration', 'underline');
	});
}
var storeSequence = function(storeVal,splCls) {
	$.each(storeVal,function(strInx,unumVal){		
		$(splCls).eq(unumVal).find('.topNumTxt').text(strInx+2).show();
	});
}
var pushData = function() {
	
	if (Number(currQues) == uniqArr.length)	{	
		currQues = uniqArr.length-1;
		plusVal = 0;
		curVal = uniqArr[currQues];	
	}
	else {	plusVal=1;
		curVal=uniqArr[currQues];
	}	
	
	splitName(dataRecd[curVal].name,'.simworkarea .nameing','addInsd');
	//splitAddress(dataRecd[curVal].add,'.simworkarea ul');
	//splitNum(dataRecd[curVal].num,'.forPushPara');
	//curVal=uniqArr[currQues];	
	 enableEvents(dataRecd[curVal],'.nameing');
}
var splitName = function(getName,addClass,addLabel) {

	splVal = getName;	
	//splVal = splVal.split(' ');	
	$(addClass).empty();
	
	$.each(splVal,function(index,value){
	
		var creatRow = value.toString().split(' ');		
		$('<div/>',{id:'name_'+index,class:'names nameing_'+index}).appendTo(addClass);
		$(addClass+' .nameing_'+index).html(value);	
		
	});	
	if(splVal.length==6 && addClass == '.simworkarea .nameing'){
		$('.simworkarea').css({height:'188px'});
		$('.simworkcontainer > p').css({marginTop: '255px'});
		$('.crossbtnBadge').css({top: '255px'});
	}else if(splVal.length==7 && addClass == '.simworkarea .nameing'){
		$('.simworkarea').css({height:'220px'});
		$('.simworkcontainer > p').css({marginTop: '290px'});
		$('.crossbtnBadge').css({top: '290px'});
	}else if(splVal.length==8 && addClass == '.simworkarea .nameing'){
		$('.simworkarea').css({height:'255px'});
		$('.simworkcontainer > p').css({marginTop: '309px'});
		$('.crossbtnBadge').css({top: '309px'});

	}
	else if(addClass == '.simworkarea .nameing'){
		$('.simworkarea').css({height:'163px'});
		$('.simworkcontainer > p').css({marginTop: '235px'});
		$('.crossbtnBadge').css({top: '235px'});
	}	
}
var splitAddress = function(getAdd,addClass) {	
	$(addClass).empty();
	$.each(getAdd,function(splInx,adVal){	
		$('<li/>',{class:'forPushLis'}).appendTo(addClass).html(adVal);
	});	
}
var splitNum = function(getNum,addClass) {
	$(addClass).empty();	
	getNum  = getNum.toString().split('');	
	$(addClass).append('&nbsp;')
	$.each(getNum,function(splInx,splNumVal){
		$(addClass).append('<span>'+splNumVal+'</span>');
	});
	$(addClass).append('&nbsp;')
}
var createLabel = function(addLabel) {
	$('.'+addLabel).each(function(splInx,lblVal){	
		var wid=$(this).width();
		var hgh=$(this).height();
		var lef=$(this).position().left;
		$('<div/>',{id:'topNum'+splInx,class:'topNum'}).appendTo(this).css({left:lef+'px',width:wid+'px',height:hgh+'px'}).html('<p class="topNumTxt"></p>');
		//$('<p/>',{class:'topNumTxt'}).appendTo('#topNum'+splInx);		
		
	});
	
}	



