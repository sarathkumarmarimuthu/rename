function codeonefun()
{
	//$('.simworkarea .nameing .names').mousemove(function(){currentDiv = $(this).index();  });
	$('.simworkarea em').off('click').on('click',emfunction);
	
	changeCursorAsDiv('.simworkarea em','/');
}
function codetwofun()
{	
	$('.simworkarea em').off('click');
	if(!dataRecd[curVal].level && currentId == 'leveling'){	dataRecd[curVal].level=true;
			removeNumbering();
			enableEventlevel(dataRecd[curVal],'.nameing','slash');
			if(dataRecd[curVal].numbering.length==0 || $('.simworkarea div').children('.underline').length>0){
						dataRecd[curVal].numbering = ['10']
						//divSpanInx = $('.cardnonClk2line').index()+' '+0;
						
						
						codetwofun();
						
			}			
			
		}
	$('.simworkarea .nameing span').css({cursor:'pointer'});
	$('span>em').css({cursor:'pointer'});
	$('div>em').css({cursor:'default'});
		
	$('.simworkarea .nameing span').off('click').on('click',function(e){
	    if($(this).html() == '(' || $(this).html() == ')' ){ return 0;}
		getProp = this;
		currDvForArr = $(this).parent().closest('div').attr('id').split('_')[1];
		
		currentDiv = $(this).parent().closest('div').index();
		
		currSpan = $(this).index();
		$('.simworkarea em').off('click');
		divSpanInx = currDvForArr+' '+currentDiv+' '+currSpan;
		
		if(currentId == 'uIdentification')	
			
		if(currentId == 'uIdentification' && $.inArray('10',dataRecd[curVal].numbering) != -1){
			removeNumbering(currDvForArr);
		}
		//console.log(dataRecd[curVal].numbering+' '+currDvForArr);
		
		if($(this).hasClass('underline') && currentId == 'uIdentification'){	
			$(this).toggleClass('underline');
			
			dataRecd[curVal].numbering = [];
			$('.simworkarea .num').remove();			
			$('.simworkarea .names span').removeClass('numbered');
			unitnum = false;		
						
		}else if($('.simworkarea .underline').length==0 && dataRecd[curVal].numbering.length==0 && currentId == 'uIdentification'){				
			$(this).toggleClass('underline');
			unitnum = true;			
			dataRecd[curVal].numbering.push(divSpanInx);			
			//alert($(this).attr('class'));
		}else{
			
			unitNumbering(e);	
		}	
	//console.log(dataRecd[curVal].numbering);		
		checkAnswer();
		changeCursorForNum();
		if(currentId == 'uIdentification')
			$('.tcent .mCSB_container').html(simaction.uIdentification);
		else if(currentId == 'leveling')
			$('.tcent .mCSB_container').html(simaction.leveling);
	});
	changeCursorForNum();
}
var changeCursorForNum =function(){
	
	if(dataRecd[curVal].numbering.length>0)
		changeCursorAsDiv('.simworkarea .nameing span',(dataRecd[curVal].numbering.length+1));
	else	
	changeCursorAsDiv('.simworkarea .nameing span','&#x2015;');
	if(dataRecd[curVal].level && currentId == 'uIdentification')
		changeCursorAsDiv('.simworkarea .nameing span','&#x2015;');
    if(titleNew !== 'uIdentification')
	{
	startToPlay("uIdentification",0,"steptwo");	
	}
	$('.tcent .mCSB_container').html(simaction.uIdentification);
}
function unitNumbering(e){
	
	if(!$(getProp).hasClass('underline') && !$(getProp).hasClass('numbered') ){	
		$(getProp).toggleClass('numbered');		
		var lenNumArr = $('.simworkarea .nameing .names').find('span').length;		
		lenNumArr=-lenNumArr;
		dataRecd[curVal].numbering.slice(lenNumArr);
		
		divSpanInx = currDvForArr+' '+currentDiv+' '+currSpan;
		dataRecd[curVal].numbering.push(divSpanInx);
		putNumber(dataRecd[curVal],'.nameing','na');
		
	}else if($(getProp).hasClass('numbered')){
		divSpanInx = currDvForArr+' '+currentDiv+' '+currSpan;
		$(getProp).toggleClass('numbered');
		var remAfter = dataRecd[curVal].numbering.indexOf(divSpanInx);
		
		for(i=remAfter;i<dataRecd[curVal].numbering.length;i++)
		{
			var splt = dataRecd[curVal].numbering[i].split(' ');
				//$('.names').eq(splt[0]).children().eq(splt[1]).css({background:'green'});
				$('.nameing .names').eq(splt[0]).children().eq(splt[1]).removeClass('numbered');
				$('.simworkarea #latteradd'+splt[0]+' .names').eq(splt[1]).children().eq(splt[2]).removeClass('numbered')
		}
		dataRecd[curVal].numbering.splice(remAfter, 50);
		//removeDuplicate(dataRecd[curVal].numbering,divSpanInx);
		putNumber(dataRecd[curVal],'.nameing','na');
	}
	
}

var putNumber = function(passObj,applyTo,slashAns){		//alert($(applyTo).parent().attr('class'));
        
		if( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
			$('.substeping .names span').css({marginTop:'4px',marginBottom:'12px',height:'21px'});
			$('.subinput input').css({height:'23px'});
			$('#reviewAns .substeping .names span').css({marginTop:'3px',marginBottom:'15px',height:'22px'});
			
		}
		
		var numObj,actualTop=-22;
		
		if(applyTo.indexOf('.nameing') != -1){
			$('.simworkarea '+applyTo+' .num').remove();
		}	
			if(slashAns == 'answer')
				numObj = 'anumbering';
			else	
				numObj = 'numbering';
				//console.log(passObj)
				
		
		$.each(passObj[numObj],function(inx, val){							
			//$.each(val,function(i,v){
				var splt = val.split(' ');				
					$(applyTo+' #latteradd'+splt[0]+' .names').eq(splt[1]).children().eq(splt[2]).removeClass('numbered').removeClass('underline');
				var posOf = $(applyTo+' #latteradd'+splt[0]+' .names').eq(splt[1]).children().eq(splt[2]);
				//$(applyTo+' .names').eq(splt[0]).css({background:'red'});
				//$(applyTo+' .names').eq(splt[0]).children().eq(splt[1]).css({background:'green'});
				//console.log(splt+' '+splt[1]);
				var applyOnParent = $(applyTo+' #latteradd'+splt[0]+' .names').eq(splt[1]);
				//$(applyTo)
				if(inx!=0){			
					if($('.simworkarea').hasClass('scaleCard') && applyTo == '.nameing'){
						var getLeft = posOf.position().left/0.28;
						var getTop = posOf.position().top/0.28;
					}else{
						var getLeft = posOf.position().left;
						var getTop = posOf.position().top;
					}
					wid = posOf.width(); 
					hei = posOf.height(); 	
					/*if(applyTo != '.nameing'){
						getTop=getTop-3;
					}else{
						getTop = getTop+1;						
					}*/
					if($(applyTo+' #latteradd'+splt[0]).hasClass('substeping')){		
					//console.log(applyTo.indexOf('simworkarea')+' '+applyTo);				
						if(applyTo.indexOf('.panelContainer') != -1){ //getTop=getTop+4; console.log(getTop+'in')	
						}
						else if(applyTo.indexOf('nameing') != -1){
							//getTop=getTop;
								//console.log(getTop+'out')
						}else{							
							//getTop=getTop+2;
							//console.log(getTop+'revir')
						}
					}
					
						 
						$('<div/>',{class:'num'}).appendTo(applyOnParent).text(inx+1).css({position:'absolute',left:getLeft+'px',top:getTop+'px',width:wid+'px',height:0+'px'});
					
					$(applyTo+' #latteradd'+splt[0]+' .names').eq(splt[1]).children().eq(splt[2]).addClass('numbered');
				}else{
					$(posOf).addClass('underline');
				}
			//})*/
		});
		
		
		if( /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
			$('.snellround4 .num,.snellroundex .num').css({'marginTop':'-46px', lineHeight:'85px'});
			$( '#reviewAnswer .snellround4 .num,#reviewAnswer .snellroundex .num').each(function () {
                 this.style.setProperty( 'margin-top', '-45px', 'important' );
			});	
		}else{
			$('.snellround4 .num,.snellroundex .num').css({'margin-top':'-43px', lineHeight:'85px'});	
		}
		
}

var leveling = function(){

	codetwofun();
}
var currentem =0;
var incid = 1;
var getTagText = function(num, num2, toThs) {
	var el = $("<div/>");
	el.html($(toThs+' #name_'+num+'_'+num2).html()).children().remove();
	return el.text();
}



var enableEventlevel = function(mainObj,toThs,slashAns) {
	var slaObj;
	
	
	var strstr = ''
	if(slashAns == "answer")
		slaObj = 'aslash';
	else
	 	slaObj = 'slash';
	//console.log(mainObj)
	
	if(typeof(mainObj[slaObj]) != 'undefined'){     	// need to set slash answer array or input array
	for(var i = 0; i< mainObj.name.length; i++){
		
		for(var j = 0; j< mainObj.name[i].length; j++){
			var strstr =$(toThs+' #name_'+i+'_'+j).text();
	
			strstr = strstr.replace(/\//g, ' ');
	
			mainObj[slaObj] = [[]];
			$(toThs+' #name_'+i+''+j).html('');
			$(toThs+' #name_'+i+''+j).html(strstr);
		}
	}
}


	for(var i =0; i<splVal.length; i++)
	{
		var temphideid = -1;
		var strstr = getTagText(i,toThs);
		strstr = strstr.replace(/-\ /g,'@');
		strstr = strstr.replace(/\//g, '</span><em>/</em><span>');
		strstr = strstr.replace(/\-/g, '<em>-</em>');
		
		if(strstr.match(/\[{/g) == '[{' && strstr.match(/\}]/g) == '}]'){
			temphideid = i;
			strstr = strstr.replace(/\[{/g, '<span>[{</span>');
			strstr = strstr.replace(/\}]/g, '<span>}]</span>');
			
		}		
		
		/*if(i!= temphideid)
		{
			strstr = strstr.replace(/\(/g, '(</span><span>');
			strstr = strstr.replace(/\s/g, '<em>&nbsp;</em>');
			strstr = strstr.replace(/\)/g, '</span><span>)</span>');
		}*/
		var index = 0;
		while ((index = strstr.indexOf('@', index + 1)) > 0) {
			strstr = strstr.replace('@', '<em class="g_'+(curVal+''+index)+'">-</em></span><span>');
			
		}
		//$(toThs+' #name_'+i).html('');
		$(toThs+' #name_'+i).html('<span>'+strstr+'</span>');
		if(temphideid >= 0)
		{
			$(toThs+' #name_'+temphideid).css('color','#666');
			$(toThs+' #name_'+temphideid).html(strstr);
			if(parseInt($(toThs+' #name_'+temphideid).css('height')) > 50)
			{
				$(toThs+' #name_'+temphideid).addClass('cardnonClk2line');
				$(toThs+' #name_'+temphideid).css('width','80%');
				$(toThs+' #name_'+temphideid).css('padding-left','10%');
				$(toThs+' #name_'+temphideid).css('padding-right','10%');
			}
			else
			{
				$(toThs+' #name_'+temphideid).addClass('cardnonClk1line');
			}
			$(toThs+' #name_'+temphideid +' span').css('color','#fff');
			$(toThs+' #name_'+temphideid +' span').css('opacity','0.01');
		}
	}
	
	//var currentSpan =0;
	//var currentDiv =0;
	$('.nameing .names').off('mousemove').on('mousemove',function(){
		//currentDiv = $(this).attr('id').split('_')[1]; 
	});
	
	//putNumber(mainObj,toThs,slashAns,i);
}
var enableEvents = function(mainObj,toThs,slashAns) {
	
	var slaObj;
//	getTagText();
	var strstr = ''
	if(slashAns == "answer")
		slaObj = 'aslash';
	else
	 slaObj = 'slash';
	//console.log(toThs+' '+mainObj[toThs]);
	if(typeof(mainObj[slaObj]) != 'undefined'){     	// need to set slash answer array or input array
		var kval = 0;
		for(var i = 0; i< mainObj[slaObj].length; i++){
			//if(mainObj.alignClass[i] != 'letCon')
			if(notstepclass.indexOf(mainObj.alignClass[i]) == -1 )
			{				
				for(var j = 0; j< mainObj[slaObj][i].length; j++)
				{	
					var strstr = getTagText(i,j,toThs);
					strstr = strstr.split("");	
					kval = j;
					for(var k=0; k < mainObj[slaObj][i][j].length; k++)
					{
						//console.log(strstr, mainObj[slaObj][i][j])
						//console.log(mainObj[slaObj][i])
						//console.log(mainObj.space[i][j][k], i, mainObj[slaObj].length,  mainObj[slaObj][i].length)
						//console.log(j,mainObj.space[i][mainObj.space[i][j]])
						//console.log('test'+mainObj.space[0][3][0])
						//console.log(mainObj.space[i], mainObj.space[i][j][mainObj[slaObj][i][j][k]], j,k)
						//console.log(strstr, mainObj.space[i][j][mainObj[slaObj][i][j]])
						if(strstr[mainObj.space[i][j][mainObj[slaObj][i][j][k]]] == ' ')
						{
							
							strstr[mainObj.space[i][j][mainObj[slaObj][i][j][k]]] = '/';
							//console.log(strstr);
						}else if(strstr[mainObj.space[i][j][mainObj[slaObj][i][j][k]]] == '-'){
							strstr[mainObj.space[i][j][mainObj[slaObj][i][j][k]]] = '@';
						}
					}
				
				
				strstr = strstr.join("");
				
				$(toThs+' #name_'+i+'_'+j).html('');
				$(toThs+' #name_'+i+'_'+j).html(strstr);
				//console.log($(toThs+' #name_'+i+'_'+j).html());
				
				}
			}
		}
	}
	

	//for(var j =0; j<splVal[i].name.length; j++)
	
	for(var i =0; i<splVal.name.length; i++){
		
		//if(mainObj.alignClass[i] != 'letCon')
		if(notstepclass.indexOf(mainObj.alignClass[i]) == -1 )
		{
			for(var j =0; j<splVal.name[i].length; j++)
			{
				//console.log(splVal.name[i][j])
				var temphideid = -1;
				
				var strstr = getTagText(i,j,toThs);

				strstr = strstr.replace(/-\//g,'@');
				strstr = strstr.replace(/\//g, '</span><em>/</em><span>');
				strstr = strstr.replace(/\-/g, '<em>-</em>');
				
				
				if(strstr.match(/\[{/g) == '[{' && strstr.match(/\}]/g) == '}]'){
					//temphideid = i+'_'+j;
					strstr = strstr.replace(/\[{/g, '<span>[{</span>');
					strstr = strstr.replace(/\}]/g, '<span>}]</span>');
					
				}		
				
				if(temphideid != i+'_'+j)
				{
					//strstr = strstr.replace(/\(/g, '(</span><span>');
					strstr = strstr.replace(/\s/g, '<em>&nbsp;</em>');
					//strstr = strstr.replace(/\)/g, '</span><span>)</span><span>');
				}
				var index = 0;
				while ((index = strstr.indexOf('@', index + 1)) > 0) {
					strstr = strstr.replace('@', '<em class="g_'+(curVal+''+index)+'">-</em></span><em class="p_'+(curVal+''+index)+'">/</em><span>');
					
				}
				//$(toThs+' #name_'+i).html('');
				//console.log(strstr)
				$(toThs+' #name_'+i+'_'+j).html('<span>'+strstr+'</span>');
				if(temphideid != -1)
				{
					$(toThs+' #name_'+temphideid).css('color','#666');
					$(toThs+' #name_'+temphideid).html(strstr);
					if(parseInt($(toThs+' #name_'+temphideid).css('height')) > 50)
					{
						$(toThs+' #name_'+temphideid).addClass('cardnonClk2line');
						$(toThs+' #name_'+temphideid).css('width','80%');
						$(toThs+' #name_'+temphideid).css('padding-left','10%');
						$(toThs+' #name_'+temphideid).css('padding-right','10%');
					}
					else
					{
						$(toThs+' #name_'+temphideid).addClass('cardnonClk1line');
					}
					$(toThs+' #name_'+temphideid +' span').css('color','#fff');
					$(toThs+' #name_'+temphideid +' span').css('opacity','0.01');
				}
				
				//putNumber(mainObj,toThs+' #latteradd'+i ,slashAns,i);
			}
		}
		
		
	}
	/*for(var i =0; i<splVal.name.length; i++){
		
		if(typeof mainObj.numbering[i] == 'undefined'){
			mainObj.numbering[i]=[];	
		}
		putNumber(mainObj,toThs+' #latteradd'+i ,slashAns,i);
	}*/
	var currentSpan =0;
	var currentDiv =0;
	$('.nameing .names').off('mousemove').on('mousemove',function(){
		//currentDiv = $(this).attr('id').split('_')[1]; 
	});
	
	putNumber(mainObj,toThs ,slashAns,i);
	if(slaObj == 'slash'){
			for(var i = 0; i<mainObj.subinputval.length; i++)
			{
				
				$(toThs+' .subinput input:eq('+i+')').val(mainObj.subinputval[i]);
				$(toThs+' .subinput input:eq('+i+')').attr('value',mainObj.subinputval[i]);
			}
		}
	else if(slaObj == 'aslash')	{
		
		for(var i = 0; i<mainObj.subinputval.length; i++)
			{
	
				$(toThs+' .subinput input:eq('+i+')').val(mainObj.subjectinput[i]);
				$(toThs+' .subinput input:eq('+i+')').attr('value',mainObj.subjectinput[i]);
			}
		}	
}
var tempcount = 0
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
var removeNumbering = function(removePlace){
	//$('.simworkarea .nameing span').off('click');
	$('.simworkarea .nameing  span').removeClass('underline').removeClass('numbered');
	$('.simworkarea .num').remove();
	dataRecd[curVal].numbering = [];
	
}
function emfunction(e)
{	
	e.stopPropagation();
	cancelBubbleEvent(e);
	
	$('.simworkarea').draggable({disabled:true});
	//dataRecd[curVal].level=false;
	
	enableDrag();
	
	curParenInx = $(this).parent().closest('div').attr('id').split('_')[1];
	currentDiv = $(this).parent().closest('div').index();
	currenDivSlash = $(this).parent().closest('div').attr('id');
	removeNumbering(curParenInx);
	//$('span').off('click');
	var cclass = $(this).attr('class');
	if(typeof cclass != 'undefined')
	{
		$('.p_'+cclass.split('_')[1]).remove();
	}

	if($(this).html() == '&nbsp;')
	{
		$(this).html('/');
	}else if($(this).html() == '/')
	{
		$(this).html('&nbsp;');
	}else if($(this).html() == '-')
	{
		$(this).html('-/');
	}
	convertodomtype($('.simworkarea .nameing #'+currenDivSlash).text());
	
	changeCursorAsDiv('.simworkarea em','/');
	$('.tcent .mCSB_container').html(simaction.Code);
	
}





var convertodomtype = function(stepstr)
{
	
	index = 0,
	
	stepstr = stepstr.replace(/-\//g,'@');
    slashcount = [];
	while ((index = stepstr.indexOf('/', index + 1)) > 0) {
    	slashcount.push(index);
	}
	while ((index = stepstr.indexOf('@', index + 1)) > 0) {
		slashcount.push(index);
	}	
	
	slashcount.sort(function(a, b){return a-b});
//	console.log(dataRecd[curVal].space)	
	//console.log(dataRecd[curVal].slash)
	
	//console.log('~~~~~~~~~~~~~~~~~~',curParenInx,currentDiv)

	//console.log(dataRecd[curVal].slash[curParenInx][currentDiv],curParenInx,currentDiv)
	
	dataRecd[curVal].slash[curParenInx][currentDiv]=[];
	
	
	for(i=0; i<slashcount.length; i++)
	{
		dataRecd[curVal].slash[curParenInx][currentDiv].push(dataRecd[curVal].space[curParenInx][currentDiv].indexOf(slashcount[i]))
	}
	//console.log(stepstr+' res  '+dataRecd[curVal].slash[curParenInx][currentDiv], curParenInx, currentDiv);
	//console.log(dataRecd[curVal].slash[curParenInx])

	stepstr = stepstr.replace(/\//g, '</span><em>/</em><span>');
	stepstr = stepstr.replace(/\-/g, '<em>-</em>');
	//stepstr = stepstr.replace(/\(/g, '(</span><span>')
	//stepstr = stepstr.replace(/\:/g, ':</span><span>')
	//stepstr = stepstr.replace(/\)/g, '</span><span>)</span>')


	stepstr = stepstr.replace(/\s/g, '<em>&nbsp;</em>');
	var index = 0;
	while ((index = stepstr.indexOf('@', index + 1)) > 0) {
 		stepstr = stepstr.replace('@', '<em class="g_'+(currentDiv+''+index)+'">-</em></span><em class="p_'+(currentDiv+''+index)+'">/</em><span>');		
		$('.p_'+(currentDiv+''+index)).css('color','red')
	}
	
	incid++;
	
	$('.simworkarea .nameing #'+currenDivSlash).html('<span>'+stepstr+'</span>');
	
	$('.simworkarea em').off('click').on('click',emfunction).css('cursor','pointer');
	checkAnswer();
	if(titleNew !== 'Code')
	{
		startToPlay("Code",0,"stepOne");
	}
}