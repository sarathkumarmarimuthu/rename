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
		
	$('.simworkarea .nameing span:not(.notclick)').off('click').on('click',function(e){
		if($(this).html() == '(' || $(this).html() == ')' ){ return 0;}
		getProp = this;
		currentDiv = $(this).parent().closest('div').index();
		currSpan = $(this).index();
		$('.simworkarea em').off('click');
		divSpanInx = currentDiv+' '+currSpan;
		if(currentId == 'uIdentification')	
			
		if(currentId == 'uIdentification' && $.inArray('10',dataRecd[curVal].numbering) != -1){
			removeNumbering();
		}
		if($(this).hasClass('underline') && (currentId == 'uIdentification' || currentId == 'crossreference')){		
			$(this).toggleClass('underline');
			
			dataRecd[curVal].numbering = [];
			$('.simworkarea .num').remove();
			$('.simworkarea .nameing span').removeClass('numbered');
			unitnum = false;		
						
		}else if($('.simworkarea div').children('.underline').length==0 && dataRecd[curVal].numbering.length==0 && currentId == 'uIdentification'){				
			$(this).toggleClass('underline');
			unitnum = true;
			
			dataRecd[curVal].numbering.push(divSpanInx);
			
			//alert($(this).attr('class'));
		}else{
			
			unitNumbering(e);	
		}		
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
}
function unitNumbering(e){
	
	if(!$(getProp).hasClass('underline') && !$(getProp).hasClass('numbered') ){	
		$(getProp).toggleClass('numbered');		
		var lenNumArr = $('.simworkarea .nameing').find('span').length;		
		lenNumArr=-lenNumArr;
		dataRecd[curVal].numbering.slice(lenNumArr);
		divSpanInx = currentDiv+' '+currSpan;
		dataRecd[curVal].numbering.push(divSpanInx);
		putNumber(dataRecd[curVal],'.nameing');
		
	}else if($(getProp).hasClass('numbered')){
		divSpanInx = currentDiv+' '+currSpan;
		$(getProp).toggleClass('numbered');
		//console.log(dataRecd[curVal].numbering+' bf '+divSpanInx);
		var remAfter = dataRecd[curVal].numbering.indexOf(divSpanInx);
		
		for(i=remAfter;i<dataRecd[curVal].numbering.length;i++)
		{
			var splt = dataRecd[curVal].numbering[i].split(' ');
				//$('.names').eq(splt[0]).children().eq(splt[1]).css({background:'green'});
				$('.nameing .names').eq(splt[0]).children().eq(splt[1]).removeClass('numbered');
		}
		dataRecd[curVal].numbering.splice(remAfter, 22);
		//removeDuplicate(dataRecd[curVal].numbering,divSpanInx);
		
		putNumber(dataRecd[curVal],'.nameing');
	}
	
}

var putNumber = function(passObj,applyTo,slashAns){		//alert($(applyTo).parent().attr('class'));
		var numObj,actualTop=-22;
		if(applyTo == '.nameing'){
			$('.simworkarea .num').remove();
		}	
			if(slashAns == 'answer')
				numObj = 'anumbering';
			else	
				numObj = 'numbering';
		$.each(passObj[numObj],function(inx, val){	
			var splt = val.split(' ');
				//$('.names').eq(splt[0]).children().eq(splt[1]).css({background:'green'});
				$(applyTo+' .names').eq(splt[0]).children().eq(splt[1]).removeClass('numbered').removeClass('underline');
			var posOf = $(applyTo+' .names').eq(splt[0]).children().eq(splt[1]);
			var applyOnParent = $(applyTo).parent();
			if(inx!=0){						
				var getLeft = posOf.position().left;
				var getTop = posOf.position().top;
				wid = posOf.width(); 
				hei = posOf.height(); 	
				if(applyTo != '.nameing')
					getTop=getTop+10;
				$('<div/>',{class:'num'}).appendTo(applyOnParent).text(inx+1).css({position:'absolute',left:getLeft+'px',top:getTop-20.2+'px',width:wid+'px',height:hei+'px'});
				
				$(applyTo+' .names').eq(splt[0]).children().eq(splt[1]).addClass('numbered');
			}else{
				$(posOf).addClass('underline');
			}
		});	
}

var leveling = function(){

	codetwofun();
}
var currentem =0;
var incid = 1;
var getTagText = function(num, toThs) {
	var el = $("<div/>");
	el.html($(toThs+' #name_'+num).html()).children().remove();
	return el.text();
}
var enableEventlevel = function(mainObj,toThs,slashAns) {
	var slaObj;
	
	
	var strstr = ''
	if(slashAns == "answer")
		slaObj = 'aslash';
	else
	 	slaObj = 'slash';
	//console.log(slaObj+' '+mainObj[slaObj]);
	
	//if(mainObj.level){	mainObj[slaObj] = [[]];}
	if(typeof(mainObj[slaObj]) != 'undefined'){     	// need to set slash answer array or input array
	for(var i = 0; i< mainObj.name.length; i++){
		var strstr =$(toThs+' #name_'+i).text();

		//strstr = strstr.split("");
		/*		
		for(var j = 0; j< mainObj[slaObj][i].length; j++)
		{
			if(strstr[mainObj.space[i][mainObj[slaObj][i][j]]] == '/')
			{
				strstr[mainObj.space[i][mainObj[slaObj][i][j]]] = ' ';
			}else if(strstr[mainObj.space[i][mainObj[slaObj][i][j]]] == '-'){
				strstr[mainObj.space[i][mainObj[slaObj][i][j]]] = '@';
			}
		}*/
		strstr = strstr.replace(/\//g, ' ');
		//strstr = strstr.join("");

		mainObj[slaObj] = [[]];
		$(toThs+' #name_'+i).html('');
		$(toThs+' #name_'+i).html(strstr);
	}
}


	for(var i =0; i<splVal.length; i++)
	{
		var temphideid = -1;
		var strstr = getTagText(i,toThs);
		strstr = strstr.replace(/-\ /g,'@');
		strstr = strstr.replace(/\//g, '</span><em>/</em><span>');
		strstr = strstr.replace(/\-/g, '<em>-</em>');
		
		if(strstr.match(/\[/g) == '[' && strstr.match(/\]/g) == ']'){
			temphideid = i;
			strstr = strstr.replace(/\[/g, '<span>[</span>');
			strstr = strstr.replace(/\]/g, '<span>]</span>');
			
		}		
		
		if(i!= temphideid)
		{
			strstr = strstr.replace(/\(/g, '(</span><span>');
			strstr = strstr.replace(/\s/g, '<em>&nbsp;</em>');
			strstr = strstr.replace(/\)/g, '</span><span>)</span>');
		}
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
	
	//putNumber(mainObj,toThs,slashAns);
}
var enableEvents = function(mainObj,toThs,slashAns) {
	var slaObj;
	//getTagText();
	var strstr = ''
	if(slashAns == "answer")
		slaObj = 'aslash';
	else
	 slaObj = 'slash';
	//console.log(slaObj+' '+mainObj[slaObj]);
	if(typeof(mainObj[slaObj]) != 'undefined'){     	// need to set slash answer array or input array
	for(var i = 0; i< mainObj[slaObj].length; i++){
		if(typeof mainObj[slaObj][i] != 'undefined')
		{ 
		var strstr = getTagText(i,toThs);
		strstr = strstr.split("");
		
		for(var j = 0; j< mainObj[slaObj][i].length; j++)
		{
			if(strstr[mainObj.space[i][mainObj[slaObj][i][j]]] == ' ')
			{
				strstr[mainObj.space[i][mainObj[slaObj][i][j]]] = '/';
			}else if(strstr[mainObj.space[i][mainObj[slaObj][i][j]]] == '-'){
				strstr[mainObj.space[i][mainObj[slaObj][i][j]]] = '@';
			}
		}
		strstr = strstr.join("");
		
		$(toThs+' #name_'+i).html('');
		$(toThs+' #name_'+i).html(strstr);
		}
	}
}
	
	for(var i =0; i<splVal.length; i++)
	{
		var temphideid = -1;
		var strstr = getTagText(i,toThs);
		strstr = strstr.replace(/-\//g,'@');
		strstr = strstr.replace(/\//g, '</span><em>/</em><span>');
		strstr = strstr.replace(/\-/g, '<em>-</em>');
		
		
		if(strstr.match(/\[{/g) == '[{' && strstr.match(/\}]/g) == '}]'){
			temphideid = i;
			strstr = strstr.replace(/\[{/g, '<span>[{</span>');
			strstr = strstr.replace(/\}]/g, '<span>}]</span>');
			
		}		
		
		if(i!= temphideid)
		{
			strstr = strstr.replace(/\(/g, '(</span><span>');
			strstr = strstr.replace(/\s/g, '<em>&nbsp;</em>');
			strstr = strstr.replace(/\)/g, '</span><span>)</span>');
		}
		var index = 0;
		while ((index = strstr.indexOf('@', index + 1)) > 0) {
			strstr = strstr.replace('@', '<em class="g_'+(curVal+''+index)+'">-</em></span><em class="p_'+(curVal+''+index)+'">/</em><span>');
			
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
	
	var currentSpan =0;
	var currentDiv =0;
	$('.nameing .names').off('mousemove').on('mousemove',function(){
		//currentDiv = $(this).attr('id').split('_')[1]; 
	});
	
	putNumber(mainObj,toThs,slashAns);
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
var removeNumbering = function(){
	//$('.simworkarea .nameing span').off('click');
	$('.simworkarea .nameing span').removeClass('underline').removeClass('numbered');
	$('.simworkarea .num').remove();
	dataRecd[curVal].numbering = [];
}
function emfunction(e)
{	
	e.stopPropagation();
	cancelBubbleEvent(e);
	removeNumbering();
	$('.simworkarea').draggable({disabled:true});
	//dataRecd[curVal].level=false;
	
	enableDrag();
	currentDiv = $(this).parent().closest('div').index();
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
	convertodomtype($('.simworkarea .nameing #name_'+currentDiv).text());
	
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
	dataRecd[curVal].slash[currentDiv] = [];
	for(i=0; i<slashcount.length; i++)
	{
		dataRecd[curVal].slash[currentDiv].push(dataRecd[curVal].space[currentDiv].indexOf(slashcount[i]))
	}	

	stepstr = stepstr.replace(/\//g, '</span><em>/</em><span>');
	stepstr = stepstr.replace(/\-/g, '<em>-</em>');
	stepstr = stepstr.replace(/\(/g, '(</span><span>')
	//stepstr = stepstr.replace(/\:/g, ':</span><span>')
	stepstr = stepstr.replace(/\)/g, '</span><span>)</span>')


	stepstr = stepstr.replace(/\s/g, '<em>&nbsp;</em>');
	var index = 0;
	while ((index = stepstr.indexOf('@', index + 1)) > 0) {
 		stepstr = stepstr.replace('@', '<em class="g_'+(currentDiv+''+index)+'">-</em></span><em class="p_'+(currentDiv+''+index)+'">/</em><span>');		
		$('.p_'+(currentDiv+''+index)).css('color','red')
	}
	
	incid++;
	
	$('.simworkarea .nameing  #name_'+currentDiv).html('<span>'+stepstr+'</span>');
	
		
	
	$('.simworkarea em').off('click').on('click',emfunction).css('cursor','pointer');
	checkAnswer();
	
}