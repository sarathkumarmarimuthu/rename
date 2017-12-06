var temArray2 = [[],[]];
var main = [];
var answ = [];
var diff = [];
setTimeout(function(){
	
	
	$.each(foldertypeandName, function(key, value){
		temArray2[0][key] = (value[0]);
		temArray2[1][key] = (value[1]);
	})
	
	
},2000)
var openFolAction = function(e){
	
	$('.folOptions').removeClass('activeClk');
	$(this).addClass('activeClk');
	if($(this).hasClass('copyFol')){		
		copyFolToInactive();
		inactiveFolderAlign()
	}else if($(this).hasClass('moveFol')){	
if(fromActiveArea)
{	
		moveFolToInactive(e);
		}
		else
		{
		moveFolBackToActive($(".parentCardPanel").attr('letter').toString());
		inactiveFolderAlign()
		}
	}
}
var prevFolder;
var copyFolToInactive = function(){
	$('.copyFol,.moveFol,#scrollcards,#scrollcards3').css('display','none');
	$('#alphabet').text("Drag any active records back to the active file folder, in correct filing order.").css('left','130px');
	$('#activePanel .subPanelHeading').text(currLetter+' (Active)');
	$('#inactivePanel .subPanelHeading').text(currLetter+' (Inactive)');
	$('#totalCards,.leftDrawerArrow,.rightDrawerArrow').css('display','none')
	var mainLetter = $(".parentCardPanel").attr('letter').toString();
	
$('.dragarea2 .dragtooldiv').each(function(index) {

var go = $(this).find('.addfolder').text().toString();
if(go === mainLetter)
	{
	var activeFolderIndex = index+parseInt($('.dragarea').children().length);
	// recordIndex[activeFolderIndex].push(recordIndex[getInxClk]);
	Array.prototype.push.apply(recordIndex[activeFolderIndex], recordIndex[getInxClk])
	recordIndex[getInxClk] =[];
checkEmptyFolder(activeFolderIndex,'match');
checkEmptyFolder(getInxClk,'match');
	$('.dragarea2 .dragtooldiv').eq(index).off('click').on('click',showRelavPanel);
	closePanel();
	foundCard = true;
	}
	else
	{
		
	}
});
// $("div.copyFol.folOptions").hide()
// $("div.moveFol.folOptions").hide()

	
	var responseTo = getElement(getInx);
	
	folActive = responseTo.find('.addfolder').text();
	if(!foundCard)
	{
	addNewFolder(folActive);
	
	$('.activeInactive').show();
	recordIndex.splice(recordIndex.length,0,recordIndex[getInx]);
	
	prevFolder = recordIndex.length-1;
	currAlphabet = prevFolder;
	$('#cardPanl #scrollcards').remove();
	checkRecdIndex('#inactive-cardPanl');
	setTimeout(function(){
	$('#inactive-cardPanl').show();
	},1)
	recordIndex[activeRecdPos] =[];
	$('.dragarea2 .dragtooldiv').off('click').on('click',showRelavPanel);
	
	$('.cardPanel').hide();
	currAlphabet = activeRecdPos;
	// checkRecdIndex('#activePanel');
	
	currAlphabet = getInx;
	checkEmptyFolder(activeRecdPos,'match');
	checkEmptyFolder(recordIndex.length-1,'match');
	enableDrop();
	}
	foundCard = false;
	//$(responseTo.clone()).appendTo('.dragarea2');
	
	 $('.dragarea2 .dragtooldiv').eq(0).css({borderLeft:'1px solid #424143'});
	 $('.dragarea2 .dragtooldiv').eq(0).find('.lefCurve').css({background:'url(./assets/images/folderLeftlong_1.png'});	
	 	addPlacement();
scrollfun2()
}
var createCardInActive = 0,foundCard = false,foundCard2 = false;
var moveFolBackToActive = function(e){


var mainLetter = $(".parentCardPanel").attr('letter').toString();


$('.dragarea .dragtooldiv').each(function(index) {

var go = $(this).find('.addfolder').text().toString();
    if(go === mainLetter)
	{
	var activeFolderIndex = index;
	var zz=[];
	for(var i=0;i<recordIndex[activeFolderIndex].length;i++){
		for(var j=0;j<recordIndex[getInxClk].length;j++){
			console.log(JSON.stringify(recordIndex[activeFolderIndex][i].ansOrder) == JSON.stringify(recordIndex[getInxClk][j].ansOrder))
			if(JSON.stringify(recordIndex[activeFolderIndex][i].ansOrder) == JSON.stringify(recordIndex[getInxClk][j].ansOrder)){
				zz.push(j);
			}
		}
	}
	
	//recordIndex[activeFolderIndex] = [];
	$.each(recordIndex[getInxClk],function(i,vv){
		if(zz.indexOf(i) == -1){
			
			recordIndex[activeFolderIndex].push(recordIndex[getInxClk][i]);
		}
	});
	
	recordIndex[getInxClk] =[];
checkEmptyFolder(activeFolderIndex,'match');
checkEmptyFolder(getInxClk,'match');
	$('.dragarea .dragtooldiv').eq(activeFolderIndex).off('click').on('click',showRelavPanel);
	closePanel();
	foundCard = true;
	}
	else
	{
		createCardInActive = 1;
	}
});



if(foundCard)
{
	foundCard = false;
    recordIndex.splice(getInxClk,1);
}
else{
	recreateCardInActive()
}
$('.dragarea2').children().eq(activeRecdPos).remove();
$('.dragarea2 .dragtooldiv').each(function(index,value) {
		checkEmptyFolder(index,'match');
		})
		$('.dragarea .dragtooldiv').each(function(index,value) {
		checkEmptyFolder(index,'match');
		})
}

var moveFolToInactive = function(){
var responseTo = getElement(getInx);
	
	folActive = responseTo.find('.addfolder').text();
	addNewFolder(folActive);
	//$(responseTo.clone()).appendTo('.dragarea2');
	recordIndex.splice(recordIndex.length,0,recordIndex[getInx]);
	//checkRecdIndex('#inactivePanel');
	recordIndex[activeRecdPos] =[];
	$.each(temArray2[1],function(key, value){
		if(folActive == temArray2[1][key] && temArray2[0][key] == 'F')
		{
			temArray2[1][key] = 'moved '+temArray2[1][key];	
			
		}
	});
	
	$('.dragarea2 .dragtooldiv').off('click').on('click',showRelavPanel);
	
	$('.cardPanel').hide();
	currAlphabet = activeRecdPos;
	$('.activeInactive').show();
	
	currAlphabet = getInx;
	
	checkEmptyFolder(activeRecdPos,'match');
	checkEmptyFolder(recordIndex.length-1,'match');
	recordIndex.splice(activeRecdPos,1);
$('.dragarea').children().eq(activeRecdPos).remove();
$('.dragarea2 .dragtooldiv').eq(0).css({borderLeft:'1px solid #424143'});
$('.dragarea2 .dragtooldiv').eq(0).find('.lefCurve').css({background:'url(./assets/images/folderLeftlong_1.png'});
closePanel();
addPlacement();
	inactiveFolderAlign()
	ctStop = $('.dragareaall').scrollTop();
	
	addfoldcount--;
	folderborderdesign();
		window.setTimeout(function(){	
		scrollfun();
		folderborderdesign2();
		folderborderdesign();	
		$('.dragareaall').scrollTop(ctStop);		
		console.log(ctStop+" stop")
	},1)
	
	$('.dragareaInactive').scrollTop(1000)
	ctStop2 = $('.dragareaInactive').scrollTop();
	
	addfoldcount2++;
	folderborderdesign2();
	folderborderdesign();
		window.setTimeout(function(){	
		scrollfun2();
		folderborderdesign2();
		folderborderdesign();
		// $('.dragareaInactive').scrollTop(ctStop2);	
maxScrollTop2 = $('.dragareaInactive').scrollTop();		
	},1)
}
var recentString = "",whickType = "",whickIndex = "";
var recentArray = [];

var recreateCardInActive = function(){
	if(createCardInActive == 1)
	{
	var mainLetter = $(".parentCardPanel").attr('letter').toString();
	var responseTo = getElement(getInxClk);
	folActive = responseTo.find('.addfolder').text();
	addNewFolder(mainLetter);
		var tempArray = recordIndex[getInxClk]
		recordIndex.splice(getInxClk,1);
	recordIndex.splice(parseInt($('.dragarea').children().length)-1,0,tempArray);
	//currAlphabet = getInxClk;
	//checkEmptyFolder(activeRecdPos,'match');
	checkEmptyFolder(recordIndex.length-1,'match');
	
	
	$('.dragarea .dragtooldiv').off('click').on('click',showRelavPanel);
	closePanel();
	stattag = false;
	$('.dragareaall').scrollTop();
	addfoldcount++;
			          scrollfun();
					  setTimeout(function(){
						$('.dragareaall').scrollTop(maxScrollTop);
							var temp = $('.dragareaall').scrollTop()
							$('.dragareaall').scrollTop(1000)
	
							 maxScrollTop = $('.dragareaall').scrollTop();
					  },100);
					  
					  
					  
					  ctStop2 = $('.dragareaInactive').scrollTop();
	
	addfoldcount2--;
	folderborderdesign2();
	folderborderdesign();
		window.setTimeout(function(){	
		scrollfun2();
		folderborderdesign2();
		folderborderdesign();
		$('.dragareaInactive').scrollTop(ctStop2);		
	},1)
	}
	createCardInActive = 0;
	
}
var createdAnswerPart = false;
var prepareLastScreen = function(){
	$('#ctr .testNew').after('<div id="answerAreaActive" class="answerCommanClass"><div class="trapezoid" ><div class="rectangle" ></div><div class="resultPageFol">ANSWER ACTIVE RECORDS</div></div><div class="leftarraw rectangleUp" title="Move Up" >	 moveLeftSide UP Arraw  </div><div class="dragareaall2"><div class="dragarea3 scrollBarFiling3" ></div></div><div class="rightarraw" title="Move Down" > moveRightSide UP Down</div></div>')
	
	$('#ctr #answerAreaActive').after('<div id="yourChoiceAreaActive" class="answerCommanClass"><div class="trapezoid" ><div class="rectangle" ></div><div class="resultPageFol">YOUR CHOICE ACTIVE RECORDS</div></div><div class="leftarraw rectangleUp" title="Move Up" >	 moveLeftSide UP Arraw  </div><div class="dragareaall4"><div class="dragarea5 scrollBarFiling3"></div></div><div class="rightarraw" title="Move Down" > moveRightSide UP Down</div></div>')
	
	$('#ctr #yourChoiceAreaActive').after('<div id="answerAreaInActive" class="answerCommanClass"><div class="trapezoid" ><div class="rectangle" ></div><div class="resultPageFol">ANSWER INACTIVE RECORDS</div></div><div class="leftarraw rectangleUp" title="Move Up" >	 moveLeftSide UP Arraw  </div><div class="dragareaall3"><div class="dragarea4 scrollBarFiling3"></div></div><div class="rightarraw" title="Move Down" > moveRightSide UP Down</div></div>')
	
	$('#ctr #answerAreaInActive').after('<div id="yourChoiceAreaInActive" class="answerCommanClass"><div class="trapezoid" ><div class="rectangle" ></div><div class="resultPageFol">YOUR CHOICE INACTIVE RECORDS</div></div><div class="leftarraw rectangleUp" title="Move Up" >	 moveLeftSide UP Arraw  </div><div class="dragareaall5"><div class="dragarea6 scrollBarFiling4"></div></div><div class="rightarraw" title="Move Down" > moveRightSide UP Down</div></div>')
	
	$('#ctr #yourChoiceAreaInActive').after('<div id="valid-forActive-cnt"><div id="valid-forActive" class="scrollBarFiling3"></div></div><div id="valid-forInActive-cnt"><div id="valid-forInActive" class="scrollBarFiling3"></div></div>');
	
	
		  
		  
		 
	 
			
		  
	createFoldersForAnswer(folderArr)
}



var createFoldersForAnswer = function(folderArr){
	
	
	answerFolderArray.forEach(function(item,index)	
	{
		if(answerFolderArray[index][0] == 'F'){
		
		
		$('.dragarea3').prepend('<div id=dragtooldiv_'+index+' class="dragtooldiv folParent highlightfol folder"><span class="lefCurve"></span><div class="addfolder folParent highlightfol">'+(answerFolderArray[index][1])+'</div><span class="drogtoolname">'+(answerFolderArray[index][1])+'</span><span class="folderindex">'+0+'</span><span class="drogtoolnum">'+index+'</span><div id="clsFol" class="dltFolder"></div><span class="rigCurve"></span><div class="dummyFolder"></div></div>');
		
		$('.dragarea4').prepend('<div id=dragtooldiv_'+index+' class="dragtooldiv folParent highlightfol folder"><span class="lefCurve"></span><div class="addfolder folParent highlightfol">'+(answerFolderArray[index][1])+'</div><span class="drogtoolname">'+(answerFolderArray[index][1])+'</span><span class="folderindex">'+0+'</span><span class="drogtoolnum">'+index+'</span><div id="clsFol" class="dltFolder"></div><span class="rigCurve"></span><div class="dummyFolder"></div></div>');
			
			
			
			
		}
		else if(answerFolderArray[index][0] == 'S')
		{
        
		
		$('.dragarea3').prepend('<div id=dragtooldivguide_'+index+' class="dragtooldiv guidesp unsortable"><span class="lefCurve"></span><div class="addspecialguide">'+(answerFolderArray[index][1])+'</div><span class="drogtoolname">'+(answerFolderArray[index][1])+'</span><span class="folderindex">'+0+'</span><div class="dltFolder dltGudSp"></div><span class="rigCurveg"></span></div>');
		
		$('.dragarea4').prepend('<div id=dragtooldivguide_'+index+' class="dragtooldiv guidesp unsortable"><span class="lefCurve"></span><div class="addspecialguide">'+(answerFolderArray[index][1])+'</div><span class="drogtoolname">'+(answerFolderArray[index][1])+'</span><span class="folderindex">'+0+'</span><div class="dltFolder dltGudSp"></div><span class="rigCurveg"></span></div>');
			
			
		}
		else if(answerFolderArray[index][0] == 'G')
		{
		
		
		$('.dragarea3').prepend('<div id=dragtooldivguide_'+index+' class="dragtooldiv guide unsortable"><span></span><div class="addguide">'+(answerFolderArray[index][1])+'</div><span class="drogtoolname">'+(answerFolderArray[index][1])+'</span><span class="folderindex">'+0+'</span><span class="drogtoolnum">'+index+'</span><div id="clsFol" class="dltFolder dltGud"></div><span class="rigCurveg"></span></div>');
		
		$('.dragarea4').prepend('<div id=dragtooldivguide_'+index+' class="dragtooldiv guide unsortable"><span></span><div class="addguide">'+(answerFolderArray[index][1])+'</div><span class="drogtoolname">'+(answerFolderArray[index][1])+'</span><span class="folderindex">'+0+'</span><span class="drogtoolnum">'+index+'</span><div id="clsFol" class="dltFolder dltGud"></div><span class="rigCurveg"></span></div>');
			
		}
		
		
	   
	
	});
	
	
	
$.each(recordIndex2,function(index, value){
	var responseToNew;
	responseToNew = $('.dragarea3 .dragtooldiv').eq(index);
	responseToNew.find('.folderindex').show();
	
	if(recordIndex2[index].length ==0)
	{
		responseToNew.find('.folderindex').hide();
	}
	else
	{
		responseToNew.find('.folderindex').show();
		responseToNew.find('.folderindex').text(recordIndex2[index].length);
	}
})


$.each(recordIndex3,function(index, value){
	var responseToNew;
	responseToNew = $('.dragarea4 .dragtooldiv').eq(index);
	responseToNew.find('.folderindex').show();
	
	if(recordIndex3[index].length ==0)
	{
		responseToNew.find('.folderindex').hide();
	}
	else
	{
		responseToNew.find('.folderindex').show();
		responseToNew.find('.folderindex').text(recordIndex3[index].length);
	}
})

	
	



$('.dragarea3 .dragtooldiv').each(function(i,v){
	if($(this).children().hasClass('addfolder'))
	{
		  if($(this).find('.folderindex').text() ==0 ){
		   $(this).remove();
		   
	   }
		
	}
	   
	folderborderdesign()
});


$('.dragarea4 .dragtooldiv').each(function(i,v){
	
		  if($(this).find('.folderindex').text() ==0 ){
		   $(this).remove();
		   
	   }
		
	   
	folderborderdesign()
});
$('.dragareaall4 .dragarea5').append($('.dragareaall .dragarea').html());
$('.dragareaall5 .dragarea6').append($('.dragareaInactive .dragarea2').html());
if(isChrome)
{
if($('.dragarea6').children().length < 4 && $('.dragarea6').children().length > 1)
		{	
			$('.dragarea6').find('.dragtooldiv ').each(function(i){
				$('.dragarea6').css({"-webkit-padding-before":((margingValue2)-(i*30))+"px"})
			})
		}
		else if ($('.dragarea6').children().length == 4)
		{
			$('.dragarea6').css({"-webkit-padding-before":"50px"})
		}
		else if ($('.dragarea6').children().length == 1)
		{
			$('.dragarea6').css({"-webkit-padding-before":"130px"})
		}
}
else
{
if($('.dragarea6').children().length <= 4 && $('.dragarea6').children().length > 1)
		{	
			$('.dragarea6').find('.dragtooldiv ').each(function(i){
				$('.dragarea6').css({"padding-top":((margingValue2)-(i*30))+"px"})
			})
		}
		else if ($('.dragarea6').children().length == 1)
		{
			$('.dragarea6').css({"padding-top":"130px"})
		}
}

$('.dragarea3 .dragtooldiv').each(function(index) {
	main.push($(this).find('.drogtoolname').text())
})
$('.dragarea5 .dragtooldiv').each(function(index) {
	answ.push($(this).find('.drogtoolname').text())
})
arr_diff(main, answ)



$.each(main, function(index, value){
if(index == 0)
{
if(main[index] == answ[index])
{
//console.log('Correct');
}
else
{
//console.log('In-Correct');
}
}
else if($.inArray( main[index].toString(), diff )>-1)
{
	//console.log('You had deleted the ' + main[index]);
}
else if(index == main.length-1)
{

if(main[index-1] == answ[index-1] && main[main.length-1] == answ[main.length-1])
{
//console.log(main[index] + ' is placed Correct');
}
else
{
//console.log(main[index] + ' is placed In-Correctely. It should be placed in front of '+main[index-1]);
}



}
else
{

if(main[index-1] == answ[index-1] && main[index+1] == answ[index+1])
{
// console.log(main[index] + ' is placed Correct');
}
else
{
// console.log(main[index] + ' is placed In-Correctely. It should be placed in front of '+main[index-1]+' and before '+main[index+1]);
}




}
})
}


function arr_diff (main, answ) {

    var a = [];

    for (var i = 0; i < main.length; i++) {
        a[main[i]] = true;
    }

    for (var i = 0; i < answ.length; i++) {
        if (a[answ[i]]) {
            delete a[answ[i]];
        } else {
            a[answ[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    // console.log(diff);
};

var margingValue = 235;
var margingValue2 = 130;
var inactiveFolderAlign = function()
{
if(isChrome)
{
if($('.dragarea2').children().length <= 6 && $('.dragarea2').children().length > 1)
		{	
			$('.dragarea2').find('.dragtooldiv ').each(function(i){
				$('.dragarea2').css({"-webkit-padding-before":((margingValue)-(i*30))+"px"})
			})
		}
		else if ($('.dragarea2').children().length == 7)
		{
			$('.dragarea2').find('.dragtooldiv ').each(function(i){
				// $('.dragarea2').css({"padding-top":((margingValue)-(i*30))+"px"})
			})
		}
		else if ($('.dragarea2').children().length == 1)
		{
			$('.dragarea2').css({"-webkit-padding-before":"235px"})
		}
}
else
{
if($('.dragarea2').children().length <= 6 && $('.dragarea2').children().length > 1)
		{	
			$('.dragarea2').find('.dragtooldiv ').each(function(i){
				$('.dragarea2').css({"padding-top":((margingValue)-(i*30))+"px"})
			})
		}
		else if ($('.dragarea2').children().length == 7)
		{
		$('.dragarea2').find('.dragtooldiv ').each(function(i){
				$('.dragarea2').css({"padding-top":((margingValue)-(i*30))+"px"})
			})
		}
		else if ($('.dragarea2').children().length == 1)
		{
			$('.dragarea2').css({"padding-top":"235px"})
		}
}
	
	
	if($('.dragarea2').children().length <= 6){
	$('#scrollbarfolder2').hide();
	}
	else
	{
	$('#scrollbarfolder2').show();
	}
}