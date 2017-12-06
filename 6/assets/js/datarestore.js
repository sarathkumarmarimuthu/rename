
var plusVal = 1;
var currCrosref=0;
var notDropped = [];
var chngQues = function(currQues) {	
	inspecthidefun();
	if(uniqArr.length > 0)
	{
		$('.simbtn,.crossbtn .hintbtn').css('background','#5a4a42').css('cursor','pointer').css('opacity',1);
		$('.offSteps').css('width','0px').css('height','0px').show();
	}

	$('.inspectbtn').css({'background':'#fff', 'color':'#000'});
	recdLen = uniqArr.length;
	$('.simworkarea').children().css({visibility:'visible'});
	
	enableNav();
	if(currQues>=0 && currQues<uniqArr.length)
	pushData();	
	
	
	$('#rollNum').text(currQues+1);
	//$('.simworkcontainer .choseactn').html('RECORD '+(curVal+1)+' OF '+dataRecd.length);
	$('.simworkcontainer .choseactn').html('RECORD '+(curVal+1)+' OF '+jobTwoLen);
	if(onsitemapView){		
		$('.simworkcontainer .choseactn').html('RECORD 1 OF 1'); 		
	}
	$('.simbtn').css('background-color','#5a4a42');
	currentId = "empty";
	nextPreTag = false;
	simButtonEnableFun();		
	$('.simworkarea').draggable({disabled:false});	
	checkAnswer();		
	
	if(crossrefvis)
	{
		$('.crossreferenceContainter').show()
	}
	crossRefUpdate();
	dataRecd[curVal].crfLastVal = crosCount;
	
	storeCrossRef(crosCount);
	
	
	
	if(dataRecd[curVal].inspect >= 0)
	$('[name = '+dataRecd[curVal].inspect+']').css({'background':'#e75028','color':'#fff'});
	
	//console.log(dataRecd[curVal].subinputval)
	for(var i = 0; i<dataRecd[curVal].subinputval.length; i++)
	{
		
		$('.nameing  .subinput input:eq('+i+')').val(dataRecd[curVal].subinputval[i]);
	}
	
	applyHint();
	applyFilingHint();
	enableDrag();
	$('.tcent .mCSB_container').html(simaction.alphabeticSimulation);
	$('.containersubheadone').html(simactionTitle.alphabeticSimulation)
	
	hideSimArea();
	if($('.simworkarea ').hasClass('scaleCard')){
		$('.crossbtnlist,.clsCrosRef,.crfRefMin').hide();
		$('.crosref').show();
		if(dataRecd[currQues].job == 1){
		$('.codeEditIcon').hide();	
		}else{
			$('.codeEditIcon').show();
		}
	}else{
		$('.crossbtnlist,.clsCrosRef,.crfRefMin').show();
		$('.crosref').hide();
		
	}
	//$(".simworkarea.scrollBar").mCustomScrollbar("scrollTo","top");
	$(".simworkarea.scrollBar").mCustomScrollbar("scrollTo","top",{
    scrollInertia:0
	});
	if(cloneArr.length==0){
			$('[name = submitconfirmation]').removeClass('subbtn').addClass('subbtnActive');
			$('.offSteps').css('width','175px').css('height','178px').show();
			$('.offHint').css('width','175px').css('height','43px').show();
			$('.simbtn,.crossbtn, .hintbtn, .inspectSimbtn').css('background','#5a4a42').css('cursor','default').css('opacity','0.5');
			$('.dummySubbtn').hide();
			$('.crossreferenceContainter').css('visibility','hidden');
			
	}
	else{
		$('.simbtn,.crossbtn, .inspectSimbtn').css('background','#5a4a42').css('cursor','pointer').css('opacity','1');
		$('.offHint').css('width','175px').css('height','43px').hide();
		
	}
	updateCloneArr();
	if(!starttag)
		updatePercentage();
	
/*	console.log(prevCard);
	$('.newSim').remove();
    $(prevCard).appendTo('.simworkcontainer').addClass('newSim');*/
}
var hideSimArea = function(){
	
	if(dataRecd[curVal].dropped){
		$('.simworkarea,.simworkarea .mCustomScrollBox').css({visibility:'hidden'});
	}else{
		$('.simworkarea').css({visibility:'visible'});
	}	
}	
var crossRefUpdate = function() {		
		
		if(typeof(dataRecd[curVal].crossUnit)=="undefined"){
			dataRecd[curVal].crossUnit.push({'arr':[],'job':1});
			crosCount=0;			
		}
		
		
}
var crossReferAct = function() {
		
	if(typeof(dataRecd[curVal].crossUnit)=="undefined"){			
			dataRecd[curVal].crossUnit = new Array();
			dataRecd[curVal].crossUnit.push({'job':2});
	}else if(dataRecd[curVal].crossUnit.length<5)
	{
			$('.crossreferenceContainter').animate({height:'320px', width:'320px'},function(){$('#noOFCrds').html('CROSS-REFERENCE SHEET(S)');})
		dataRecd[curVal].crossUnit.push({'arr':[],'job':2});
		$('.crfRefMin').css({background: 'url(./assets/images/maximize.png) no-repeat'});
		
		if(dataRecd[curVal].crossUnit.length >crossLimit){
					xMove -= 39;				//animateXlst();				
		}
	}
	
	
	crosCount=dataRecd[curVal].crossUnit.length-1;
	
	keyPressOnCros();
	
	
}

var crossRefLengthcheck = function(){
	
	//console.log(dataRecd[curVal].correct)
	
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
	$('.crossArea').empty();
	
	$.each(dataRecd[curVal].crossUnit,function(i){
	
		$('<span/>',{class:'crossbtn1'}).appendTo('.crossArea').html(i+1);	
		$('.crossbtnlist').show();
	});
	$('.crossbtn1').off('click').on('click',function(){
		curNav = 'none';
			crosCount = $(this).index();				
			keyPressOnCros();			
	});
	crossRefDisableEnable();		
}
var keyPressOnCros = function(){
	//crossRefDisableEnable();
	$('.crossrefnameing .cross_unit').off('keyup change').on('keyup change',function(e,ui){
				var insertUnit = ($(this).index()-1)/2;
				if(typeof dataRecd[curVal].crossUnit[crosCount] == 'undefined'){
					dataRecd[curVal].crossUnit[crosCount]=new Array();					
					dataRecd[curVal].crossUnit[crosCount].arr=new Array();					
				}
				
				dataRecd[curVal].crossUnit[crosCount].arr[insertUnit] = ( $(this).val());				
				//console.log(JSON.stringify(dataRecd[curVal].crossUnit))
				//enableDrag();
				
				
	});
	
	storeCrossRef(crosCount);
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
		//crosCount = closestOnDrop(crosCount);
	$('.crossbtn1').removeClass('activeClk');
//	console.log('cls:  '+clost+'   dropd: '+crosDrop+' current: '+crosCount+' res: '+$.inArray(crosCount,crosDrop))
	if($.inArray(crosCount,crosDrop) == -1)
		$('.crossbtn1').eq(crosCount).addClass('activeClk');
		
	
		
}
	
var storeCrossRef = function(crosCount) {	
//	console.log('                                                    '+uniqArr, clost, curVal)
	createCrosLables();	
	
	
	//console.log(crosCount);
	$('.crossrefnameing .cross_unit').val('');		
	
	if(typeof dataRecd[curVal].crossUnit[crosCount] != 'undefined'){	
		for(i = 0; i < $('.crossrefnameing .cross_unit').length; i++) {
				$('.crossrefnameing .cross_unit').eq(i).val($.trim(dataRecd[curVal].crossUnit[crosCount].arr[i]));
		}
		dataRecd[curVal].crossUnit[crosCount].dropArr=crosDrop;
	}
	
	$('.simworkarea .cardNum').text(dataRecd[curVal].order);
	$('.crossreference .cardNum').text(dataRecd[curVal].order);	
	$('.clsCrosRef').off('click').on('click',delClk).css({opacity:'1',cursor:'pointer'});	
	enableCrosNav(crosCount);
	$('.crossreference').draggable({disabled:true});
	
if(dataRecd[curVal].crossUnit.length!=0 && (crosDrop.length == dataRecd[curVal].crossUnit.length)){
		$('.crossreference').draggable({disabled:true}).css({opacity:'0.5'}).prop("readonly", true);
		$('.crossRefOff').show();
		$('.simworkAreaOff,.offSteps').hide();
		$('.tcent .mCSB_container').html(simaction.alphabeticSimulation);
		$('.containersubheadone').html(simactionTitle.alphabeticSimulation)
		$('.crossreference .cross_unit').val('');
		jQuery('input:first').blur();
	}
else{
	$('.crossreference').draggable({disabled:false}).css({opacity:'1'}).prop("readonly", true);
		$('.crossRefOff').hide();
		
		if(dataRecd[curVal].crossUnit.length!=0) {
					//$('.tcent .mCSB_container').html(simaction.crossreference);
					if(!$('.simworkarea ').hasClass('scaleCard')){
						$('.crossreferenceContainter').css({visibility:'visible'});
						$('.simworkAreaOff,.offSteps').show();	
						}			
					
			}else{
					$('.simworkAreaOff,.offSteps').hide();
					$('.crossreferenceContainter').css({visibility:'hidden'});			        
			}
		
	}
	crossRefLengthcheck();
	
	$('#noOFCrds').html('CROSS-REFERENCE SHEET(S)');
	
	animateXlst();
	//console.log('                                                              '+clost, dataRecd[curVal].dropped)
	$('.crossreference').show();
}

var applyHint = function() {
	if(dataRecd[curVal].hintt == "" ){
		$('#hintbtnid').off('click').css({background:'#5a4a42',opacity:'0.5',cursor:'default'});
		$("#tooltip").hide();
	}else{
		$('.triangle-isosceles div p').html(dataRecd[curVal].hintt);
		$( "#hintbtnid" ).off('click').on('click',hintFun).css({opacity:'1',cursor:'pointer'});
	
		if(dataRecd[curVal].hintRus.length == 0){
			$('#cnfmhntpop').hide();
		}else{
			$('#cnfmhntpop').show();
		}
		//showhintmin();
	}
	
}
var applyFilingHint = function() {
 if(dataRecd[curVal].job != 1){
	if(dataRecd[curVal].filinghint == "" ){
//		console.log(curVal, dataRecd[curVal].filinghint)
		$("#fileHint").off('click').addClass("graybackground").css({"background":"#A1A0A1","opacity":"0.5"});
		$(".dummy").show();
		$("#filingtooltip").hide();
	}else{
		$(".dummy").hide();
		$('isosceles div p').html(dataRecd[curVal].filinghint);
		$("#fileHint").off('click').on('click',filinghintFun).removeClass("graybackground").css({"background":"#fff","opacity":"1"});
	}
  }else{
	    $("#fileHint").addClass("graybackground").css({"background":"#A1A0A1","opacity":"0.5"});
        $(".dummy").show();
  }	
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

if(editArr.length > 0 && $('.fileBtn').attr('data-click-state') == 0){
		beforeEdit(editArr);
		
	}else{
		beforeEdit(uniqArr);
	}
	
	
	
	splitName(dataRecd[curVal],'.simworkarea .nameing','addInsd');
	//splitAddress(dataRecd[curVal].add,'.simworkarea ul');
	//splitNum(dataRecd[curVal].num,'.forPushPara');
	//curVal=uniqArr[currQues];	
	enableEvents(dataRecd[curVal],'.nameing');	
	
}
var beforeEdit = function(cArr){
	if (Number(currQues) == cArr.length)	{	
		currQues = cArr.length-1;
		plusVal = 0;
		curVal = cArr[currQues];	
	}
	else {	plusVal=1;
		curVal=cArr[currQues];
	}
		
}
var splitName = function(getName,addClass,addLabel) {

	splVal = getName;	
	$(addClass).empty();
	
	$.each(splVal.name,function(index,value){
		
		//$('<div/>',{id:'latteradd'+index, class:splVal.alignClass[index]}).appendTo(addClass);
		if(	splVal.alignClass[index].indexOf('substeping')> -1){
			$('<div/>',{id:'latteradd'+index, class:splVal.alignClass[index]}).appendTo(addClass+' #latteradd'+(index-1));
			       if($('.simworkarea').hasClass('scaleCard') && addClass.indexOf('nameing') > -1){
				    
						var spLeft = $(addClass+' #latteradd'+(index-1)).position().left/0.43;
						var spTop = $(addClass+' #latteradd'+(index-1)).position().top/0.43;
					}
					else{
						var spLeft = $(addClass+' #latteradd'+(index-1)).position().left;
						var spTop = $(addClass+' #latteradd'+(index-1)).position().top;
					}
              //alert(spTop) 
			//$(addClass+' #latteradd'+index).css({position:'absolute',right:'11px',top:spTop+'px'});
			$(addClass+' #latteradd'+index).css({position:'absolute',right:'11px',top:0+'px'});
			 
			 /*var userAgent = window.navigator.userAgent;
			 if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
				
			   var spTop = $(addClass+' #latteradd'+(index-1)).position().top+120;
			   //alert(spTop) 	
             }*/
		}else{
			$('<div/>',{id:'latteradd'+index, class:splVal.alignClass[index]}).appendTo(addClass);
		}
		$.each(value,function(ind,val){
			var creatRow = value.toString().split(' ');	
			if(splVal.alignClass[index].indexOf('subinput')>-1)
			{
				$('<div/>',{id:'namesub_'+index+'_'+ind,class:'names nameing_'+index}).appendTo(addClass+' #latteradd'+index).html('<div ><form><div><div class="fieldDiv"> <div class="labelLeft">Subject :</div><div class="InputRight"><input type="text" style="width:138px;" name="userid"></div></div><div class="fieldDiv"> <div class="labelLeft">Additional Unit:</div><div class="InputRight"><input  style="width:138px;" type="text" name="userid"></div></div><div class="fieldDiv"> <div class="labelLeft">Additional Unit:</div><div class="InputRight"><input  style="width:138px;" type="text" name="userid"></div></div><div class="fieldDiv"> <div class="labelLeft">Additional Unit:</div><div class="InputRight"><input type="text" name="userid"  style="width:138px;" ></div></div></div></form></div>');
			}
			else
			{
				$('<div/>',{id:'name_'+index+'_'+ind,class:'names nameing_'+index}).appendTo(addClass+' #latteradd'+index).html(val);
			}
		});
		
		
	});
	//$('.subinput input').keyup(function(e){
	$('.subinput input').off('keyup change').on('keyup change',function(e,ui){	
		removeNumbering();		
		dataRecd[curVal].subinputval[$(this).parent().parent().index()] = $(this).val();
		
	});

	
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


