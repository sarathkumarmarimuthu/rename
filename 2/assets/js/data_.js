	// feeding the datas

//.name - 
ltirecive = false;
ltiexit = false;
codemaxlength = 100;
unitidmaxlength = 1;
var cardrulearr = [];
var cardcrossrulearr = [];
var recordIndex=[];
var timesec = "00:00";
var dataSet=[];
var errorobj;
var sendobj;
var rightFolder=0;
var folderscore =0;
var totfolderscore =0;
var codescore = 0;
var totcodescore =0;
var totextracard =0;
var scoreAjaxData;		// Added by Larry -- Holds the results of the AJAX call for the new scoring algorithm



// Developer skip for function
var skipstep = 1;
var crossrefvis = false;


var dataRecdJob=[{	'name':[['Richard Anderson'],['4110 W. Oak St.'],['Chicago, IL 60628-4110'],['312-555-0110']],
                    'slash':[[0]],
					'numbering':['0 2','0 0'],
					'hintt':['Name transposition is all that is required.'],
					'hintRus':[],
					'folderinfo':[1,6],
					'ansOrder':[1,8],		
					
					},    // 0
					
				
				{	'name':[['All About You'],['204 S. Emert St.'],['Oak Park, IL 60302-0204'],['708-555-0105']],
				    'slash':[[0, 1]],
					'numbering':['0 0','0 2','0 4'],
					'hintt':['This is a business name; index it as written (Rule 1B).'],
					'hintRus':[''],
					'folderinfo':[1,2],
					'ansOrder':[1,3],
					}, 	//	1
				{	'name':[['Lance Udey'],['161 W. Wade Ave.'],['Chicago, IL 60657-0161'],['312-555-0106']],
				    'slash':[[0]],
					'numbering':['0 2','0 0'],
					'hintt':['Name transposition is all that is required.'],
					'hintRus':[],
					'folderinfo':[21,0],
					'ansOrder':[21,0]
					},  // 2
				
				{	'name':[['Jennifer Taylor-Anderson'],['1625 Blue Fox Ct.'],['Park Ridge, IL 60068-1625'],['847-555-0206']],
				    'slash':[[0]],
					'numbering':['0 2','0 0'],
					'hintt':['This is a hyphenated surname. Follow rule 3 in coding, and prepare a cross-reference card.'],
					'hintRus':[''],
					'folderinfo':[20,2],
					'ansOrder':[20,3],
					'xfolderinfo':[[1,4]],
					'crossAns':[[['Anderson','Jennifer','Taylor','','','','','','SEE TaylorAnderson Jennifer'],[1,6]]]
					},  //3
					{	
					'name':[['SODA, Inc.'],['(Acronym for Stop on a Dime Assets)'],['4800 N. Beech St.'],['Chicago, IL 60657-4800'],['312-555-0200']],
					'slash':[[0]],
					'numbering':['0 0','0 2'],
					'hintt':['Prepare a cross-reference for this business acronym.'],
					'hintRus':[''],
					'folderinfo':[19,0],
					'xfolderinfo':[[19,3]],
					'ansOrder':[19,1],
					'crossAns':[[['Stop','on','a','Dime','Assets','','','','SEE SODA Inc'],[19,10]]]
					},    //4
					{	
					'name':[['Amanda Rustin-Underwood'],['13143 SE Everett St.'],['Chicago, IL 60625-1343'],['312-555-0109']],
					'slash':[[0]],
					'numbering':['0 2','0 0'],
					'hintt':['This is a hyphenated surname. Prepare a cross-reference card.'],
					'hintRus':[''],
					'folderinfo':[18,5],
					'xfolderinfo':[[21,1]],
					'ansOrder':[18,9],
					'crossAns':[[['Underwood','Amanda','Rustin','','','','','','SEE RustinUnderwood Amanda'],[21,4]]]
					},    //5
					{	
					'name':[['J. R. Andersen'],['11044 Overlook Dr. W.'],['Waukegan, IL 60085-1044'],['847-555-0101']],
					'slash':[[0,1,2]],
					'numbering':['0 4','0 0','0 2'],
					'hintt':['Transposition is required.'],
					'hintRus':[''],
					'folderinfo':[1,3],
					'ansOrder':[1,5]
					},    //6
					{
					'name':[['RV Park and Store'],['117 E. Circle Drive'],['Chicago, IL 60619-0117'],['312-555-0116']],
					'slash':[[0,1,2]],
					'numbering':['0 0','0 2','0 4','0 6'],
					'hintt':['Refer to Rule 1B, Rule 2, and Rule 4B.'],
					'hintRus':[''],
					'folderinfo':[18,6],
					'ansOrder':[18,10]
					},      //7
					{
					'name':[['Ahmad Rostamian'],['1951 N. Lewiston St.'],['Chicago, IL 60628-1951'],['312-555-0111']],
					'slash':[[0]],
					'numbering':['0 2','0 0'],
					'hintt':['Prepare a cross-reference card because of the unusual name.'],
					'hintRus':[''],
					'folderinfo':[18,2],
					'xfolderinfo':[[1,1]],
					'ansOrder':[18,6],
					'crossAns':[[['Ahmad','Rostamian','','','','','','','SEE Rostamian Ahmad'],[1,2]]]
					},     //8
					{
					'name':[['David A. Russell'],['307 Sawyer Way'],['Evanston, IL 60203-0307'],['847-555-0111']],
					'slash':[[0,1]],
					'numbering':['0 4','0 0','0 2'],
					'hintt':[''],
					'hintRus':[''],
					'folderinfo':[18,3],
					'ansOrder':[18,7]
					},     //9
					{
					'name':[['Raj Solanki'],['806 Blackberry Ct.'],['Oak Lawn, IL 60453-0806'],['708-555-0201']],
					'slash':[[0]],
					'numbering':['0 2','0 0'],
					'hintt':['Prepare a cross-reference card.'],
					'hintRus':[''],
					'folderinfo':[19,1],
					'ansOrder':[19,2],
					'xfolderinfo':[[18,0]],
					'crossAns':[[['Raj','Solanki','','','','','','','SEE Raj Solanki'],[18,1]]]
					},     //10
					{
					'name':[['"That\'s My Baby" Photography'],['1431 N. Pinewood Dr.'],['Chicago, IL 60657-1431'],['312-555-0207']],
					'slash':[[0,1,2]],
					'numbering':['0 0','0 2','0 4','0 6'],
					'hintt':['This is a hyphenated surname. Follow rule 3 in coding, and prepare a cross-reference card.'],
					'hintRus':[''],
					'folderinfo':[20,3],
					'ansOrder':[20,4]
					},       //11
					{
					'name':[['Taylor and Unrah Brokerage'],['2400 S. Hunters Point'],['Chicago, IL 60625-2400'],['708-555-0108']],
					'slash':[[0,1,2]],
					'numbering':['0 0','0 2','0 4','0 6'],
					'hintt':['Prepare a cross-reference card.'],
					'hintRus':[''],
					'folderinfo':[20,0],
					'xfolderinfo':[[21,2]],
					'ansOrder':[20,1],
					'crossAns':[[['Unrah','and','Taylor','Brokerage','','','','','SEE Taylor and Unrah Brokerage'],[21,5]]]
					},       //12
					{	
					'name':[['Nancy Russell-Anderson'],['8900 E. Waldon St.'],['Northbrook, IL 60062-8900'],['847-555-0112']],
					'slash':[[0]],
					'numbering':['0 2','0 0'],
					'hintt':['Prepare a cross-reference card.'],
					'hintRus':[''],
					'folderinfo':[18,4],
					'xfolderinfo':[[1,5]],
					'ansOrder':[18,8],
					'crossAns':[[['Anderson','Nancy','Russell','','','','','','SEE RussellAnderson Nancy'],[1,7]]]
					},        //13
					{
					'name':[['Timothy Taylor'],['300 Front Street'],['Chicago, IL 60630-0300'],['312-555-0208']],
					'slash':[[0]],
					'numbering':['0 2','0 0'],
					'hintt':[''],
					'hintRus':[''],
					'folderinfo':[20,1],
					'ansOrder':[20,2]
					},      //14
					{	
					'name':[['Randy\'s Restaurant'],['2010 NW 23<sup>rd</sup> Ave.'],['Chicago, IL 60623-2010'],['312-555-0115']],
					'slash':[[0]],
					'numbering':['0 0','0 2'],
					'hintt':[''],
					'hintRus':[''],
					'folderinfo':[18,1],
					'ansOrder':[18,4]
					},	  //15
					{	
					'name':[['Shanna Acoba'],['3102 Iron Mountain Rd.'],['Chicago, IL 60643-3102'],['708-555-0104']],
					'slash':[[0]],
					'numbering':['0 2','0 0'],
					'hintt':[''],
					'hintRus':[''],
					'folderinfo':[1,0],
					'ansOrder':[1,1]
					},    //16
					{	
					'name':[['Stash-the-Cash Savings Co.'],['1652 Springhill Dr.'],['Glencoe, IL 60022-1652'],['847-555-0202']],
					'slash':[[2,3]],
					'numbering':['0 0','0 2','0 4'],
					'hintt':[''],
					'hintRus':[''],
					'folderinfo':[19,2],
					'ansOrder':[19,8]
					}    //17 
					];
					
var totalscore = dataRecdJob.length;					
var tempiii = 0;				
for(var i=0;i<dataRecdJob.length; i++)
{
	dataRecdJob[i].codeScore = [0,0,0]
	if(typeof dataRecdJob[i].crossAns != 'undefined')
	{
		if(typeof dataRecdJob[i].crossUnit == 'undefined'){		
			dataRecdJob[i].crossUnit=[];
			//dataRecdJob[i].crossUnit.arr=[];						
			dataRecdJob[i].crossUnit.job=1;		
		}
	}
	
   // dataRecdJob[i].folderinfo = [0,i]
	dataRecdJob[i].space =[];
	dataRecdJob[i].aslash = dataRecdJob[i].slash;
	dataRecdJob[i].anumbering = dataRecdJob[i].numbering;
	dataRecdJob[i].job=1;
	//dataRecdJob[i].slash =[];
	for(var j = 0; j<dataRecdJob[i].name.length; j++)
	{
		dataRecdJob[i].space[j] = [];
		
		//dataRecdJob[i].slash[j] =[];
		var str = dataRecdJob[i].name[j][0];
		var index = 0;
		str = str.replace(/\s/g, '^');
		while ((index = str.indexOf('^', index + 1)) > 0) {
    		dataRecdJob[i].space[j].push(index)
		}
		while ((index = str.indexOf('-', index + 1)) > 0) {
    		dataRecdJob[i].space[j].push(index);
		}
		dataRecdJob[i].space[j].sort(function(a, b){return a-b});
	}
	//dataRecdJob[i].folderinfo = [8,i]
	tempiii = i
	//dataRecdJob[0].slash =[[0]];
}


var dataRecd=[{	    
                    'name':[['RC Day Care'],['(Changed its name from Rainbow '],['Connection Day Care)'],['3605 Pierce Rock Ln.'],['Chicago, IL 60618-3605'],['312-555-0114']],
					'aslash':[[0,1]],
					'anumbering':['0 0', '0 2', '0 4'],
					'hintt':['This business changed its name.'],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[18,5],
					'crossAns':[[['Rainbow','Connection','Day','Care','','','','','SEE RC Day Care'],[18,0]]]	
					//'crossUnit':[["aaa"], ["aaa"], ["ccccc"], ["dddd"], []]	
					
					},    // 0/**/
					
				
				{	
				    'name':[['Taylor & Randall Brokers'],['125 E Rice St.'],['Chicago, IL 60818-0125'],['312-555-0210']],
					'aslash':[[0,1,2]],
					'anumbering':['0 0', '0 2', '0 4','0 6'],
					'hintt':['This is a compound business name.'],
					'hintRus':[],				
					'folderinfo':[],
					'ansOrder':[20,0],
					'crossAns':[[['Randall','and','Taylor','Brokers','','','','','SEE Taylor and Randall Brokers'],[18,2]]]
					}, 	//	1

				{	
				    'name':[['Mr. Wm. A. Smith, CRM'],['2902 S. McAdam St.'],['Oak Park, IL 60302-0676'],['708-555-0202']],
					'aslash':[[0,1,2,3]],
					'anumbering':['0 6', '0 2','0 4','0 8','0 0'],
					'hintt':['Refer to rule 5 for personal titles and suffixes.'],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[19,0]
					},  // 2
				
				{	
				    'name':[['South West Music School'],['1840 E. Lake St.'],['Chicago, IL 60818-1840'],['312-555-0136']],
					'aslash':[[0,1,2]],
					'anumbering':['0 0','0 2','0 4','0 6'],
					'hintt':['Prepare a similar name SEE ALSO cross-reference.'],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[19,4],
					'crossAns':[[['Southwest','','','','','','','','SEE ALSO South West'],[19,5]]]
					}, //3
				{	
				    'name':[['Mrs. Gladys Uffelman'],['(Mrs. Melvin Uffelman)'],['798 S. Wabash Circle'],['Chicago, IL 60660-0798'],['708-555-0107']],
					'aslash':[[0,1]],
					'anumbering':['0 4','0 2','0 0'],
					'hintt':['This customer has an alternate name. Prepare a cross-reference card for the alternate name.'],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[21,2],
					'crossAns':[[['Uffelman','Melvin','Mrs','','','','','','SEE Uffelman Gladys Mrs'],[21,3]]]
					}, // 4
				{	
				    'name':[['St. John\'s Community Club'],['375 E. Washington St.'],['Chicago, IL 60630-1022'],['847-555-0201']],
					'aslash':[[1,2]],
					'anumbering':['0 0','0 2','0 4'],
					'hintt':['Refer to rule 6 for articles and particles.'],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[19,9]
					}, // 5
				{	
				    'name':[['Tyson Tibbetts, M.D.'],['1541 E. 126th St.'],['Chicago, IL 60637-1541'],['312-555-0205']],
				    'aslash':[[0,1]],
					'anumbering':['0 2','0 0','0 4'],
					'hintt':[],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[20,6]
					}, // 6				
				
				{	
				    'name':[['Randall & Tibbetts Tax Accounting'],['250 SW Main Street'],['Evanston, IL 60203-5065'],['847-555-0118']],
					'aslash':[[0,1,2,3]],
					'anumbering':['0 0', '0 2','0 4','0 6','0 8'],
					'hintt':['This is a compound business name.'],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[18,3],
					'crossAns':[[['Tibbetts','and','Randall','Tax','Accounting','','','','SEE Randall and Tibbetts Tax Accounting'],[20,5]]]
					}, // 7 
					
				{	
				    'name':[['System One'],['5926 N. Hassalo St.'],['Chicago, IL 60620-5926'],['312-555-0204']],
					'aslash':[[0]],
					'anumbering':['0 0', '0 2'],
					'hintt':[],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[19,11]
					}, // 8 
					
			   {	
			        'name':[['Ms. Lauren Udey, CPA'],['838 W. Clark St.'],['Chicago, IL 60657-0838'],['312-555-0120']],
					'aslash':[[0,1,2]],
					'anumbering':['0 4', '0 2','0 6','0 0'],
					'hintt':[],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[21,1]
					}, // 9 
					
				{	
				    'name':[['360 Dancers Club'],['8850 E. Pyramid Lake'],['Chicago, IL 60660-8850'],['708-555-0122']],
					'aslash':[[0,1]],
					'anumbering':['0 0', '0 2','0 4'],
					'hintt':['Refer to rule 7 for business names that include numbers.'],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[0,0]
					}, // 10 
					
			   {  
			        'name':[['The American Business Institute'],['P.O. Box 1001'],['Oak Park, IL 60302-1001'],['709-555-0124']],
					'aslash':[[0,1,2]],
					'anumbering':['0 2', '0 4','0 6','0 0'],
					'hintt':[],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[1,4]
					}, // 11 
			   {    
			        'name':[['AB Associates'],['(A division of Andrews, Inc.)'],['383 West First St.'],['Chicago, IL 60643-0383'],['312-555-0125']],
			        'aslash':[[0]],
					'anumbering':['0 0', '0 2'],
					'hintt':['AB Associates is a division of Andrews, Inc.'],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[1,0],
					'crossAns':[[['Andrews','Inc','','','','','','','SEE AB Associates'],[1,9]]]
					}, // 12 
			   {     
			        'name':[['750 Landmarks, Inc.'],['4900 S. 10th St.'],['Chicago, IL 60670-4900'],['708-555-0148']],
				    'aslash':[[0,1]],
					'anumbering':['0 0', '0 2','0 4'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[0,1]
					}, // 13
			   {    
			        'name':[['South Chicago Savings & Loan'],['6250 S. Winsome Way'],['Waukegan, IL 60085-6250'],['847-555-0126']],
					'aslash':[[0,1,2,3]],
					'anumbering':['0 0', '0 2','0 4','0 6','0 8'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[19,3]
					}, // 14
			   {      
			        'name':[['Star Neighborhood Assn.'],['1425 N. 4th Street'],['Chicago, IL 60628-1425'],['312-555-0127']],
					'aslash':[[0,1]],
					'anumbering':['0 0', '0 2','0 4'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[19,7]
					}, // 15
			   {	
			        'name':[['St. Andrew’s Parrish'],['980 N. River Dr.'],['Chicago, IL 60643-0980'],['708-555-0128']],
					'aslash':[[1]],
					'anumbering':['0 0', '0 2'],
					'hintt':['Refer to rule 6 for articles and particles.'],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[19,6]
					}, // 16
			  {	    
			        'name':[['2001 Networks, Inc.'],['5505 E. Burnside'],['Chicago, IL 60625-5505'],['312-555-0144']],
					'aslash':[[0,1]],
					'anumbering':['0 0','0 2','0 4'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[0,2]
					} // 17
					
					];
					
					

for(var i=0;i<dataRecd.length; i++)
{
	
	dataRecd[i].chcard =[];
	dataRecd[i].codeScore = [0,dataRecd[i].anumbering.length,0];
	dataRecd[i].xreffolderinfo = [];
	
	if(typeof dataRecd[i].crossAns != 'undefined')
	{
		
		for(var k = 0; k<dataRecd[i].crossAns.length; k++)
		{
			dataRecd[i].xreffolderinfo.push(dataRecd[i].crossAns[k][1])
		}
	}
	dataRecd[i].job=2;
	
	dataRecd[i].space =[];
	dataRecd[i].slash =[];
	dataRecd[i].crossUnit=[];
	dataRecd[i].level=false;
	for(var j = 0; j<dataRecd[i].name.length; j++)
	{
		dataRecd[i].space[j] = [];
		dataRecd[i].slash[j] =[];
		dataRecd[i].numbering=[];
		dataRecd[i].hintv=0;
		var str = dataRecd[i].name[j][0];
		var index = 0;
		str = str.replace(/\s/g, '^');
		while ((index = str.indexOf('^', index + 1)) > 0) {
    		dataRecd[i].space[j].push(index)
		}
		while ((index = str.indexOf('-', index + 1)) > 0) {
    		dataRecd[i].space[j].push(index);
		}
		dataRecd[i].space[j].sort(function(a, b){return a-b});
	}
}



/*
for(var i=0;i<dataRecd.length; i++)
{
	dataRecd[i].slash = dataRecd[i].aslash.slice();
	dataRecd[i].numbering = dataRecd[i].anumbering.slice();
	//dataRecd[i].folderinfo = [5,i]
}*/



var fillingrules = [
	{
		'title':'rule1A',
		'discription': '<h2>Alphabetic Indexing Rules</h2><p style="margin-top:-5px; margin-bottom:0px;">Rule 1: Indexing Order of Units<br><br>A. Personal Names</p><div class="innerruleContent scrollBar">A personal name is indexed in this manner: <ol style="margin-left: -15px;"><li> the surname (last name) is the key unit,</li> <li>the given name (first name) or initial is the second unit, and</li> <li>the middle name or initial is the third unit. If determining the surname is difficult, consider the last name written as the surname. (You will learn how to handle titles that appear with names in a later rule.)</li></ol></p><p class="discriptionexample">A unit consisting of just an initial precedes a unit that consists of a complete name beginning with the same letter - <i>nothing before something.</i> Punctuation is omitted. Remember, the underscored letter in the examples in the textbook shows the correct order.</div>'
	},
	{
		'title':'rule1B',
		'discription': '<h2>Alphabetic Indexing Rules</h2><p style="margin-top:-5px; margin-bottom:0px;">Rule 1: Indexing Order of Units<br><br>B.   Business Names</p><p class="discriptioncontent" >Business names are indexed <i>as written</i> using letterheads or trademarks as guides. Each word in a business name is a separate unit. Business names containing personal names are indexed as written.</p><p class="discriptionexample"></p></div>'
	},
	{
		'title':'rule2',
		'discription': '<h2>Alphabetic Indexing Rules</h2><p style="margin-top:-5px; margin-bottom:0px;">Rule 2: Minor Words and Symbols in Business Names</p><p class="discriptioncontent" >Articles, prepositions, conjunctions, and symbols are considered separate indexing units. Symbols are considered as spelled in full. When the word <i>The</i> appears as the first word of a business name, it is considered the last indexing unit.</p><p><table><tbody><tr><td><b>Articles:</b></td><td >a, an, the</td></tr><tr><td ><b>Prepositions:</b></td><td >at, in, out, on, off, by, to, with, for, of, over</td></tr><tr><td ><b>Conjunctions:</b></td><td>and, but, or, nor</td></tr><tr><td ><b>Symbols:</b></td><td>&, &#x00A2;, $, #, % (and, cent <i>or</i> cents, dollar <i>or</i> dollars, number <i>or</i> pound, percent)</td></tr></tbody></table></p></div>'
	},
	{
		'title':'rule3',
		'discription': '<h2>Alphabetic Indexing Rules</h2><p style="margin-top:-5px; margin-bottom:0px;">Rule 3: Punctuation and Possessives</p><p class="discriptioncontent" >All punctuation is disregarded when indexing personal and business names. Commas, periods, hyphens, apostrophes, dashes, exclamation points, question marks, quotation marks, underscores, and diagonals (/) are disregarded, and names are indexed as written.</p></div>'
	},
	{
		'title':'rule4A',
		'discription': '<h2>Alphabetic Indexing Rules</h2><p style="margin-top:-5px; margin-bottom:0px;">Rule 4: Single Letter and Abbreviations<br><br>A. Personal Names</p><p class="discriptioncontent" >Initials in personal names are considered separate indexing units. Abbreviations of personal names (Wm., Jos., Thos.) and nicknames (Liz, Bill) are indexed as they are written.</p></div>'
	},
	{
		'title':'rule4B',
		'discription': '<h2>Alphabetic Indexing Rules</h2><p style="margin-top:-5px; margin-bottom:0px;">Rule 4: Single Letter and Abbreviations<br><br>B. Business Names</p><p class="discriptioncontent" >Single letters in business and organization names are indexed as written. If single letters are separated by spaces, index each letter as a separate unit. An acronym (a word formed from the first, or first few, letters of several words, such as NASDAQ and ARCO) is indexed as one unit regardless of punctuation or spacing. Abbreviated words (Mfg., Corp., Inc.) and names (IBM, GE) are indexed as one unit regardless of punctuation or spacing. Radio and television station call letters (KDKA, WNBC) are indexed as one unit.</p></div>'
	},
	{
		'title':'rule5A',
		'discription': '<h2>Alphabetic Indexing Rules</h2><p style="margin-top:-5px; margin-bottom:0px;">Rule 5: Titles and Suffixes</p><p style="margin-bottom: 0px; margin-top: 8px;">A. Personal Names</p><div class="innerruleContent scrollBar"><p class="discriptioncontent" >A title before a name (Dr., Miss, Mr., Mrs., Ms., Professor, Sir, Sister), a seniority suffix (II, III, Jr., Sr.), or a professional suffix (CRM, DDS, Mayor, M.D., Ph.D., Senator) after a name is the last indexing unit. Numeric suffixes (II, III) are filed before alphabetic suffixes (Jr., Mayor, Senator, Sr.). If a name contains a title and a suffix (Ms. Lucy Wheeler, DVM), the title <i>Ms</i> is the last unit.</p><p>Royal and religious titles followed by either a given name or a surname only (Princess Anne, Father Leo) are indexed and filed as written.</p></div>'
	},
	{
		'title':'rule5B',
		'discription': '<h2>Alphabetic Indexing Rules</h2><p style="margin-top:-5px; margin-bottom:0px;">Rule 5: Titles and Suffixes</p><p style="margin-bottom: 0px; margin-top: 8px;">B. Business Names</p><div class="innerruleContent scrollBar"><p class="discriptioncontent" >Titles in business names (Capt. Hook\'s Bait Shop) are indexed as written. The word <i>The</i> is considered the last indexing unit when it appears as the first word of a business name.</p></div>'
	},
	{
		'title':'rule6',
		'discription': '<h2>Alphabetic Indexing Rules</h2><p style="margin-top:-5px; margin-bottom:0px;">Rule 6: Prefixes-Articles and Particles</p><div class="innerruleContent scrollBar"><p class="discriptioncontent" >A foreign article or particle in a personal or business name is combined with the part of the name following it to form a single indexing unit. The indexing order is not affected by a space between a prefix and the rest of the name (Alexander La Guardia), and the space is disregarded when indexing.</p><p>Examples of articles and particles are: a la, D\', Da, De, Del, De La, Della, Den, Des, Di, Dos, Du, E\', El, Fitz, Il, L\', La, Las, Le, Les, Lo, Los, M\', Mac, Mc, O\', Per, Saint, San, Santa, Santo, St., Ste., Te, Ten, Ter, Van, Van de, Van der, Von, Von der.</p></div>'
	},
	{
		'title':'rule7',
		'discription': '<h2>Alphabetic Indexing Rules</h2><p style="margin-top:-5px; margin-bottom:0px;">Rule 7: Numbers in Business Names</p><div class="innerruleContent scrollBar"><p class="discriptioncontent" >Numbers spelled out (Seven Lakes Nursery) in business names are filed alphabetically. Numbers written in digits are filed before alphabetic letters or words (B4 Photographers comes before Beleau Building and Loan).</p><p class="discriptioncontent" >Names with numbers written in digits in the first units are filed in ascending order (lowest to highest number) before alphabetic names (229 Club, 534 Shop, First National Bank of Chicago). Arabic numerals are filed before Roman numerals (2 Brothers Deli, 5 Cities Transit, XII Knights Inn).</p><p class="discriptioncontent" >Names with inclusive numbers (20-39 Singles Club) are arranged by the first digit(s) only (20). Names with numbers appearing in other than the first position (Pier 36 Cafe) are filed alphabetically and immediately before a similar name without a number (Pier 36 Cafe comes before Pier and Port Cafe).</p><p>When indexing names with numbers written in digit form that contain <i>st, d,</i> and <i>th</i> (1st Mortgage Co., 2nd Avenue Cinemas, 3rd Street Pest Control), ignore the letter endings and consider only the digits (1, 2, 3).</p><p>When indexing names with a number (in figures or words) linked by a hyphen to a letter or word (A- 1 Laundry, Fifty- Eight Auto Body, 10-Minute Photo), ignore the hyphen and treat it as a single unit (10Minute, A1, FiftyEight).</p><p>When indexing names with a number plus a symbol (55+ Social Center), treat it as a single unit (55plus).</p></div>'
	},
	{
		'title':'rule8',
		'discription': '<h2>Alphabetic Indexing Rules</h2><p style="margin-top:-5px; margin-bottom:0px;">Rule 8: Organizations and Institutions</p><div class="innerruleContent scrollBar"><p class="discriptioncontent" >Banks and other financial institutions, clubs, colleges, hospitals, hotels, lodges, magazines, motels, museums, newspapers, religious institutions, schools, unions, universities, and other organizations and institutions are indexed and filed according to the names written on their letterheads.</p></div>'
	},
	{	
	    'title':'rule9',
		'discription': '<h2>Alphabetic Indexing Rules</h2><p style="margin-top:-5px; margin-bottom:0px;">Rule 9: Identical Names</p><div class="innerruleContent scrollBar"><p class="discriptioncontent" >In correspondence files, determining which person or business is the correct one when there are others with identical names can be a challenge. When personal names and names of businesses, institutions, and organizations are identical (including titles, as explained in Rule 5), filing order is determined by the addresses. Compare addresses in the following order:<ul style="list-style:none;" class="discriptioncontent"><li>1. City names</li><li>2. State or province names (if city names are identical).</li><li>3. Street names, which include <i>Avenue, Boulevard, Drive, Street,</i> (if city and state names are identical). </li><ul style="list-style:none;"><li>a. When the first units of street names are written in digits (18th Street), the names are considered in ascending numeric order (1, 2, 3) and placed together before alphabetic street names (18th Street, 24th Avenue, Academy Circle). </li><li>b. Street names written as digits are filed before street names written as words (22nd Street, 34th Avenue, First Street, Second Avenue).</li><li>c. Street names with compass directions (North, South, East, and West) are considered as written (SE Park Avenue, South Park Avenue).</li><li>d. Street names with numbers written as digits after compass directions are considered before alphabetic names (East 8th Street, East Main Street, Sandusky Drive, SE Eighth Avenue, Southeast Eighth Street).</li></ul><li>4. House or building numbers (if city, state, and street names are identical).</li><ul style="list-style:none;"><li>a. House and building numbers written as digits are considered in ascending numeric order (8 Riverside Terrace, 912 Riverside Terrace) and placed together before spelled-out building names (The Riverside Terrace).</li><li>b. House and building numbers written as words are filed after house and building numbers written as digits (11 Park Avenue South, One Park Avenue).</li><li>c. If a street address and a building name are included in an address, disregard the building name.</li><li>d. ZIP Codes are not considered in determining filing order.</li></ul></ul></p></div>'
	},
	{
		'title':'rule10A',
		'discription': '<h2>Alphabetic Indexing Rules</h2><p style="margin-top:-5px; margin-bottom:0px;">Rule 10: Government Names</p><div class="innerruleContent scrollBar"><p class="discriptioncontent" >Government names are indexed first by the name of the governmental unit-city, county, state or country. Next, index the distinctive name of the department, bureau, office, or board.</p><p class="discriptionexample"></p></div>'
	},
	{
		'title':'rule10B',
		'discription': '<h2>Alphabetic Indexing Rules</h2><p style="margin-top:-11px; margin-bottom:0px;">Rule 10: Government Names</p><p style="margin-top:8px; margin-bottom:0px;">A. Local and Regional Government Names</p><div class="innerruleContent scrollBar"><p class="discriptioncontent" >The first indexing unit is the name of the county, parish, city, town, township, or village. <i>Charlotte Sanitation Department</i> is an example. <i>Charlotte</i> (a city) would be the first indexing unit. Next, index the most distinctive name of the department, board, bureau, office, or government/political division. In this case, <i>Sanitation</i> would be the most distinctive name of the department. The words <i>County of, City of, Department of,</i> etc., are added for clarity and are considered separate indexing units. If <i>of</i> is not a part of the official name as written, it is not added as an indexing unit. Five examples follow.</p><p><table class="tableBorder" style="width:100%; display:block; cell-padding:0; cell-spacing:0;  border: 1px solid #5d2f18;"><tbody><tr><td  style="border-bottom:1px solid #5d2f18;    width: 50%;">Filing Segment</td><td  style="border-bottom:1px solid #5d2f18;   text-align:center; width: 50%;" colspan=5 >Indexing Order of Units</td></td></tr><tr><td style=" width: 50%;"><b>Name</b></td><td style="width: 10%;"><b>Key Unit</b></td><td style=" width: 10%;"><b>Unit</b> 2</td><td style="width: 10%;"><b>Unit 3</b></td><td style=" width: 10%;"><b>Unit 4</b></td><td style=" width: 10%;"><b>Unit 5</b></td></tr><tr><td style="width: 50%;">1. County of Alameda Aquatic Center</td><td style="width: 10%;">Alameda</td><td style=" width: 10%;">County</td><td style="width: 10%;">of</td><td style=" width: 10%;">Aquatic</td><td style=" width: 10%;">Center</td></tr><tr><td style="width: 50%;">2. City of Arlington Public Library</td><td style="width: 10%;">A<u>r</u>lington</td><td style=" width: 10%;">City</td><td style="width: 10%;">of</td><td style=" width: 10%;">Public</td><td style=" width: 10%;">Library</td></tr><tr><td style="width: 50%;">3. City of Arlington Senior Center</td><td style="width: 10%;">Arlington</td><td style=" width: 10%;">City</td><td style="width: 10%;">of</td><td style=" width: 10%;"><u>S</u>enior</td><td style=" width: 10%;">Center</td></tr><tr><td style="width: 50%;">4. Ashley County Department of Elections</td><td style="width: 10%;">A<u>s</u>hley</td><td style=" width: 10%;">County</td><td style="width: 10%;">Elections</td><td style=" width: 10%;">Department</td><td style=" width: 10%;">of</td></tr><tr><td style="width: 50%;">5. Augusta City Water Works</td><td style="width: 10%;">A<u>u</u>gusta</td><td style=" width: 10%;">City</td><td style="width: 10%;">Water</td><td style=" width: 10%;">Works</td><td style=" width: 10%;"></td></tr></tbody></table></p></div>'
	},
	{
		'title':'rule10C',
		'discription': '<h2>Alphabetic Indexing Rules</h2><p style="margin-top:-11px; margin-bottom:0px;">Rule 10: Government Names</p><p style="margin-top:8px; margin-bottom:0px;">B. State Government Names</p><div class="innerruleContent scrollBar"><p class="discriptioncontent" >Similar to local and regional political/governmental agencies, the first indexing unit is the name of the state or province. Then index the most distinctive name of the department, board, bureau, office, or government/political division. The words <i>State of, Province of, Department of,</i> etc., are added for clarity and are considered separate indexing units. If <i>of</i> is not a part of the official name as written, it is not added as an indexing unit. Two examples follow.</p><p><table class="tableBorder" style="width:100%; display:block; cell-padding:0; cell-spacing:0;  border: 1px solid #5d2f18;"><tbody><tr><td  style="border-bottom:1px solid #5d2f18;    width: 30%;">Filing Segment</td><td  style="border-bottom:1px solid #5d2f18;  text-align:center;  width: 70%;" colspan=5 >Indexing Order of Units</td></td></tr><tr><td style=" width: 30%;"><b>Name</b></td><td style="width: 10%;"><b>Key Unit</b></td><td style=" width: 15%;"><b>Unit 2</b></td><td style="width: 15%;"><b>Unit 3</b></td><td style=" width: 15%;"><b>Unit 4</b></td><td style=" width: 15%;"><b>Unit 5</b></td></tr><tr><td style="width: 30%;">1.Michigan Department of Education</td><td style="width: 10%;">Michigan</td><td style=" width: 10%;">Education</td><td style="width: 10%;">Department</td><td style=" width: 10%;">of</td><td style=" width: 10%;"></td></tr><tr><td style="width: 30%;">2.Michigan State Police</td><td style="width: 10%;">Michigan</td><td style=" width: 10%;"><u>S</u>tate</td><td style="width: 10%;">Police</td><td style=" width: 10%;"></td><td style=" width: 10%;"></td></tr></tbody></table></p></div>'
	},
	{
		'title':'rule10D',
		'discription': '<h2>Alphabetic Indexing Rules</h2><p style="margin-top:-11px; margin-bottom:0px;">Rule 10: Government Names</p><p style="margin-top:8px; margin-bottom:0px;">C. Federal Government Names</p><div class="innerruleContent scrollBar"><p class="discriptioncontent" >Use three indexing "levels" (rather than units) for the United States federal government. Consider <i>United States Government</i> as the first level. The second level is the name of a department or top-level agency that is rearranged to show the most distinctive part first; for example, <i>Agriculture Department (of).</i> Level three is the next most distinctive name; for example, <i>Forest Service.</i> The words <i>of</i> and <i>of the</i> are extraneous and should <u>not</u> be considered when indexing. These words are shown in parentheses for reference only. Two examples follow.</p><table class="tableBorder" style="width:99%; display:block; cell-padding:0; cell-spacing:0;  border: 0px solid #5d2f18; font-size:14px;"><tbody style="border: 1px solid #5d2f18;"><tr><td  style="border-bottom:1px solid #5d2f18;  text-align:center;   width: 50%;">Filing Segment</td><td  style="border-bottom:1px solid #5d2f18;    width: 50%;" colspan="2"></td></td></tr><tr><td style="border-bottom:1px solid #5d2f18; width: 50%;"></td><td style="border-bottom:1px solid #5d2f18; width: 50%;" colspan="2"><b>Level 1</b><br>United States Government</td></td></tr><tr><td style=" width: 50%;"><b>Name</b></td><td style="width: 25%;"><b>Level 2</b></td><td style="width: 25%;"><b>Level 3</b></td></tr><tr><td style="width: 50%;">1. National Weather Service, Department of Commerce</td><td style="width: 25%;">Commerce Department (of)</td><td style=" width: 25%;">National Weather Service</td></tr><tr><td style="border-bottom:1px solid #5d2f18; width: 50%;">2. Office of Civil Rights, Department of Education</td><td style="border-bottom:1px solid #5d2f18; width: 25%;"><u>E</u>ducation Department (of)</td><td style="border-bottom:1px solid #5d2f18; width: 25%;">Civil Rights Office (of)</td></tr></tbody></table></div>'
	},
	{
		'title':'rule10E',
		'discription': '<h2>Alphabetic Indexing Rules</h2><p style="margin-top:-11px; margin-bottom:0px;">Rule 10: Government Names</p><p style="margin-top:8px; margin-bottom:0px;">D. Foreign Government Names</p><div class="innerruleContent scrollBar"><p class="discriptioncontent" >The name of a foreign government and its agencies is often written in a foreign language. When indexing foreign names, begin by writing the English translation of the government name on the document. The English name is the first indexing unit. Then index the balance of the formal name of the government, if needed, or if it is in the official name (China Republic of). Branches, departments, and divisions follow in order by their distinctive names. States, colonies, provinces, cities, and other divisions of foreign governments are followed by their distinctive or official names as spelled in English.</p>'
	},
	{'title':'rule11',
	'discription': '<h2>Cross Reference Rules</h2><div class="innercrossContent scrollBar"><p >Some records of persons and businesses may be requested by a name that is different from the one by which it was stored. This is particularly true if the key unit is difficult to determine. When a record is likely to be requested by more than one name, an aid called a cross-reference is prepared.<br> A <b>cross-reference</b> shows the name in a form other than that used on the original record, and it indicates the storage location of the original record. The filer can then find requested records regardless of the name used in the request for those records. A copy of the document may be stored in the cross-reference location or a cross-reference sheet may be prepared.<br>Four types of personal names should be cross-referenced:<ol><li>Unusual (easily confused) names</li>  <li>Hyphenated surnames</li> <li>Alternate names</li> <li>Similar names</li></ol></p><p>Nine types of business names should be cross-referenced:<ol><li>Compound names</li> <li>Names with abbreviations and acronyms</li> <li>Popular and coined names</li> <li>Hyphenated names</li><li>Divisions and subsidiaries</li><li>Changed names</li><li>Similar names</li><li>Foreign business names</li><li>Foreign government names</li></ol></p></div>'},
	{'title':'rule11A',
	'discription': '<h2>Cross Reference Rules</h2><p style="margin-top:-12px; margin-bottom:0px;">Rule 1: Personal Names</p><div class="innercrossContent scrollBar"><p >Cross-references should be prepared for the following types of personal names.</p></div>'},
	{'title':'rule11B',
	'discription': '<h2>Cross Reference Rules</h2><p style="margin-top:-12px; margin-bottom:0px;">Rule 1: Personal Names</p><p style="margin-top:8px; margin-bottom:0px;">A. Unusual (Easily Confused) Names</p><div class="innercrossContent scrollBar"><p >When determining the surname is difficult, use the last name written as the key unit on the original record. Prepare a cross-reference with the first name written as the key unit. An example is  <i>Charles David.</i> On the original correspondence for Charles David, <i>David</i> is the key unit, and <i>Charles</i> is the second unit. The cross-reference sheet would show <i>Charles</i> as the key unit and <i>David</i> as the second unit. Someone looking under <i>Charles</i> would find the cross-reference that shows the original record is filed under D for David. Two additional examples follow.</p>Example:<br/><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;"><tr><td style="text-align:center; colspan=2; " >2</td></tr><tr><td>Charles</td><td>/</td><td><u>David</u></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 67px;"><tr><td></td><td></td><td style="text-align:center;" >2</td></tr><tr><td><u>Charles</u></td><td>/</td><td>David</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 182px;  margin-top: -10px;"><tr><td>SEE</td><td>David</td><td>Charles</td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;"><tr><td style="text-align:center; colspan=2;" >2</td></tr><tr><td>Gee-Hong</td><td>/</td><td><u>Cheung</u></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 35px;"><tr><td></td><td></td><td style="text-align:center;" >2</td></tr><tr><td><u>Gee-Hong</u></td><td>/</td><td>Cheung</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 182px;  margin-top: -10px;"><tr><td>SEE</td><td>Cheung</td><td>GeeHong</td></tr></table><br><table style="width:100% cell-padding:0; display: inline-block; cell-spacing:0;"><tr><td style="text-align:center; colspan=2;" >2</td></tr><tr><td>Keooudon</td><td>/</td><td><u>Sayasene</u></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;  margin-left: 27px" ><tr><td></td><td></td><td style="text-align:center;" >2</td></tr><tr><td><u>Keooudon</u></td><td>/</td><td>Sayasene</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 186px;  margin-top: -10px;"><tr><td>SEE</td><td>Sayasene</td><td>Keooudon</td></tr></table></div>'},
	{'title':'rule11C',
	'discription': '<h2>Cross Reference Rules</h2><p style="margin-top:-12px; margin-bottom:0px;">Rule 1: Personal Names</p><p style="margin-top:8px; margin-bottom:0px;">B. Hyphenated Surnames</p><div class="innercrossContent scrollBar" ><p>Hyphenated surnames often are used by married women. With hyphenated surnames, a request for records could be in either of the two surnames. A cross-reference enables retrieval in either case. An example is <i>Wendy Reardon-Bruss</i> shown below.</p><p>Many men use hyphenated surnames that are their family names, and they are known only by their hyphenated surnames. A cross-reference is not necessary. If men choose to adopt a hyphenated surname when they marry and may, in that case, be known by more than one name, a cross-reference is needed. See <i>Douglas Edwards-Read</i> shown below. You will be told when a cross-reference is needed for a man\'s name; otherwise, a cross-reference will not be required.</p>Example:<br/><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;"><tr><td style="text-align:center; colspan=2; " >2</td></tr><tr><td>Wendy</td><td>/</td><td><u>Reardon-Bruss</u></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 34px;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" >3</td></tr><tr><td><u>Bruss</u></td><td>/</td><td>Wendy</td><td>/</td><td>Reardon</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 208px;  margin-top: -10px;"><tr><td>SEE</td><td>ReardonBruss</td><td>Wendy</td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;"><tr><td style="text-align:center; colspan=2; " >2</td></tr><tr><td>Douglas</td><td>/</td><td><u>Edwards-Read</u></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 34px;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" >3</td></tr><tr><td><u>Read</u></td><td>/</td><td>Douglas</td><td>/</td><td>Edwards</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 212px;  margin-top: -10px;"><tr><td>SEE</td><td>EdwardsRead</td><td>Douglas</td></tr></table></div>'},
	{'title':'rule11D',
	'discription': '<h2>Cross Reference Rules</h2><p style="margin-top:-12px; margin-bottom:0px;">Rule 1: Personal Names</p><p style="margin-top:8px; margin-bottom:0px;">C. Alternate Names</p><div class="innercrossContent scrollBar"><p>When a person is known by more than one name, a cross-reference is needed. Examples are <i>Michelle Starkinsky</i> doing business as <i>Michelle Star</i> and <i>Faith Moran</i>, who is also known by three other names.</p>Example:<br/><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;"><tr><td style="text-align:center; colspan=2; " >2</td></tr><tr><td>Michelle</td><td>/</td><td><u>Star</u></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 28px;"><tr><td></td><td></td><td style="text-align:center;" >2</td></tr><tr><td><u>Starkinsky</u></td><td>/</td><td>Michelle</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 136px;  margin-top: -10px;"><tr><td>SEE</td><td>Star</td><td>Michelle</td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;"><tr><td style="text-align:center; colspan=2;" >2</td></tr><tr><td>Faith</td><td>/</td><td><u>Moran</u></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 35px;"><tr><td></td><td></td><td style="text-align:center;" >2</td></tr><tr><td><u>MorganRipley</u></td><td>/</td><td>Faith</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 140px;  margin-top: -10px;"><tr><td>SEE</td><td>Moran</td><td>Faith</td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 141px;  border-top: 1.8px dashed;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" >3</td></tr><tr><td><u>Ripley</u></td><td>/</td><td>Michael</td><td>/</td><td>Mrs</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 143px;  margin-top: -10px;"><tr><td>SEE</td><td>Moran</td><td>Faith</td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 141px;  border-top: 1.8px dashed;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" >3</td></tr><tr><td><u>Ripley</u></td><td>/</td><td>Faith</td><td>/</td><td>Mrs</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 143px;  margin-top: -10px;"><tr><td>SEE</td><td>Moran</td><td>Faith</td></tr></table></div>'},
	 { 'title':'rule11E',
	'discription': '<h2>Cross Reference Rules</h2><p style="margin-top:-12px; margin-bottom:0px;">Rule 1: Personal Names</p><p style="margin-top:8px; margin-bottom:0px;">D. Similar Names</p><div class="innercrossContent scrollBar" ><p>A variety of spellings exist for some names like <i>Brown</i> and <i>Johnson</i>. A SEE ALSO cross-reference is prepared for all likely spellings. A SEE ALSO sheet directs the filer to multiple locations for related information. If the name is not found under one spelling, the filer checks the SEE ALSO sheet for other possible spellings. Two examples follow.</p>Example:<br/><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; font-size:14px;"><tr><td style="text-align:center; colspan=2;" ></td></tr><tr><td><u>Brown</u></td><td></td><td></td></tr><tr><td>SEE ALSO Browne, Braun, Brawn</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;  margin-left: 0px; font-size:14px;"><tr><td style="text-align:center; colspan=2;" ></td></tr><tr><td><u>Browne</u></td><td></td><td></td></tr><tr><td>SEE ALSO Brown, Braun, Brawn</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;  margin-left: 216px; font-size:14px; border-top:1.8px dashed;"><tr><td style="text-align:center; colspan=2;" ></td></tr><tr><td><u>Braun</u></td><td></td><td></td></tr><tr><td>SEE ALSO Brown, Brawn, Browne</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;  margin-left: 216px; font-size:14px; border-top:1.8px dashed;"><tr><td style="text-align:center; colspan=2;" ></td></tr><tr><td><u>Brawn</u></td><td></td><td></td></tr><tr><td>SEE ALSO Brown, Browne, Braun</td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; font-size:14px;   margin-left: 13px;"><tr><td style="text-align:center; colspan=2;" ></td></tr><tr><td><u>Johnson</u></td><td></td><td></td></tr><tr><td>SEE ALSO Johnsen, Johnston,</td></tr><tr><td>Jonson</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;  margin-left: 0px; font-size:14px;"><tr><td style="text-align:center; colspan=2;" ></td></tr><tr><td><u>Johnsen</u></td><td></td><td></td></tr><tr><td>SEE ALSO Johnson, Johnston,<br> Jonson</td></tr><tr><td></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;  margin-left: 216px; font-size:14px; border-top:1.8px dashed;"><tr><td style="text-align:center; colspan=2;" ></td></tr><tr><td><u>Johnston</u></td><td></td><td></td></tr><tr><td>SEE ALSO Johnson, Jonson, Johnsen</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;  margin-left: 216px; font-size:14px; border-top:1.8px dashed;"><tr><td style="text-align:center; colspan=2;" ></td></tr><tr><td><u>Jonson</u></td><td></td><td></td></tr><tr><td>SEE ALSO Johnson, Johnsen, Johnston</td></tr></table></div>'},
	{'title':'rule12',
	'discription': '<h2>Cross Reference Rules</h2><p style="margin-top:-12px; margin-bottom:0px;">Rule 2: Business Names</p><div class="innercrossContent scrollBar"><p>Cross-references should be prepared for the following types of business names. The original name is the name appearing on the letterhead.</p></div>'},
	
	 {'title':'rule12A',
	'discription': '<h2>Cross Reference Rules</h2><p style="margin-top:-12px; margin-bottom:0px;">Rule 2: Business Names</p><p style="margin-top:8px; margin-bottom:0px;">A. Compound Names</p><div class="innercrossContent scrollBar"><p>When a business name includes two or more individual surnames, prepare a cross-reference for each surname other than the first. In the following example, two cross-references are needed for the name <i>Jarvis, Rasmussen, and Sheraden Antiques</i></p>Example:<br/><p>Coded Filing Segment:</p><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;" ><tr style="text-align:center"><td></td><td></td><td>2</td><td></td><td>3</td><td></td><td>4</td><td></td><td>5</td></tr><tr><td><u>Jarvis</u>,</td><td>/</td><td>Rasmussen,</td><td>/</td><td>and</td><td>/</td><td>Sheraden</td><td>/</td><td>Antiques</td></tr></table><br/><p>Cross-Reference:</p><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;" ><tr style="text-align:center"><td></td><td></td><td>2</td><td></td><td>3</td><td></td><td>4</td><td></td><td>5</td></tr><tr><td><u>Rasmussen</u></td><td>/</td><td>Sheraden</td><td>/</td><td>and</td><td>/</td><td>Jarvis</td><td>/</td><td>Antiques</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-top:-10px" ><tr><td colspan="9">SEE Jarvis Rasmussen and Sheraden Antiques</td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; border-top: 1.8px dashed;" ><tr style="text-align:center"><td></td><td></td><td>2</td><td></td><td>3</td><td></td><td>4</td><td></td><td>5</td></tr><tr><td><u>Sheraden</u></td><td>/</td><td>Jarvis</td><td>/</td><td>and</td><td>/</td><td>Rasmussen</td><td>/</td><td>Antiques</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-top: -16px;" ><tr><td colspan="9">SEE Jarvis Rasmussen and Sheraden Antiques</td></tr></table></div>'},
	 { 'title':'rule12B',
	'discription': '<h2>Cross Reference Rules</h2><p style="margin-top:-12px; margin-bottom:0px;">Rule 2: Business Names</p><p style="margin-top:8px; margin-bottom:0px;">B. Abbreviations and Acronyms</p><div class="innercrossContent scrollBar"><p> When a business is commonly known by an abbreviation or an acronym, a cross-reference is prepared for the full name. Two examples are <i>MADD</i> (Mothers Against Drunk Driving) and <i>EZ Electronics</i> (Ewen and Zucker Electronics).</p>Example:<br/><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;"><tr><td style="text-align:center; colspan=2; " ></td></tr><tr><td><u>MADD</u></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 123px;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" >3</td><td></td><td style="text-align:center;" >4</td></tr><tr><td><u>Mothers</u></td><td>/</td><td>Against</td><td>/</td><td>Drunk</td><td>/</td><td>Driving</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 179px;  margin-top: -10px;"><tr><td>SEE MADD</td><td></td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;"><tr><td></td><td></td><td style="text-align:center;" >2</td></tr><tr><td><u>EZ</u></td><td>/</td><td>Electronics</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 69px;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" >3</td><td style="text-align:center;" ></td><td style="text-align:center;" >4</td></tr><tr><td><u>Ewen</u></td><td>/</td><td>and</td><td>/</td><td>Zucker</td><td>/</td><td>Electronics</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 187px;  margin-top: -10px;"><tr><td>SEE</td><td>EZ</td><td>Electronics</td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 186px;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" >3</td><td style="text-align:center;" ></td><td style="text-align:center;" >4</td></tr><tr><td><u>Zucker</u></td><td>/</td><td>and</td><td>/</td><td>Ewen</td><td>/</td><td>Electronics</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 187px;  margin-top: -10px;"><tr><td>SEE</td><td>EZ</td><td>Electronics</td></tr></table></div>'},
	  {'title':'rule12C',
		'discription': '<h2>Cross Reference Rules</h2><p style="margin-top:-12px; margin-bottom:0px;">Rule 2: Business Names</p><p style="margin-top:8px; margin-bottom:0px;">C. Popular and Coined Names</p><div class="innercrossContent scrollBar"><p>Often a business is known by its popular or coined name. The official name is shown on the original record. To assist in retrieving, a cross-reference is prepared for the popular name. Two examples follow.</p>Example:<br/><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; font-size:13px; "><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" >3</td><td style="text-align:center;" ></td><td style="text-align:center;" >4</td><td></td><td style="text-align:center;" >5</td></tr><tr><td><u>Fred</u></td><td>/</td><td>Meyer</td><td>/</td><td>One</td><td>/</td><td>Stop</td><td>/</td><td>Shopping</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 13px; font-size:13px;"><tr><td></td><td></td><td style="text-align:center;" ></td></tr><tr><td><u>Freddys</u></td><td></td><td></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 238px;  margin-top: -10px; font-size:13px;"><tr><td style="padding-top:6px;">SEE Fred Meyer One Stop Shopping</td><td></td><td></td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; font-size:13px;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td></td><td style="text-align:center;" >3</td></tr><tr><td><u>Smiths</u></td><td>/</td><td>Homestyle</td><td>/</td><td>Eatery</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 64px; font-size:13px;"><tr><td></td><td></td><td style="text-align:center;" ></td></tr><tr><td><u>Smittys</u></td><td></td><td></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 238px;  margin-top: -10px; font-size:13px;"><tr><td>SEE Smiths Homestyle Eatery</td><td></td><td></td></tr></table></div>'},
	 {'title':'rule12D',
	'discription': '<h2>Cross Reference Rules</h2><p style="margin-top:-12px; margin-bottom:0px;">Rule 2: Business Names</p><p style="margin-top:8px; margin-bottom:0px;">D. Hyphenated Names</p><div><p>Many business names include hyphenated surnames. Like hyphenated personal names, business surnames with hyphens need to be cross referenced for each surname combination. Two examples follow</p>Example:<br/><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; font-size:13px; "><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" >3</td></tr><tr><td><u>Jolly-Reardon</u></td><td>/</td><td>Consulting</td><td>/</td><td>Co.</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 33px; font-size:13px;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td></td><td style="text-align:center;" >3</td></tr><tr><td><u>ReardonJolly</u></td><td>/</td><td>Consulting</td></td><td>/</td><td>Co</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 224px;  margin-top: -10px; font-size:13px;"><tr><td>SEE JollyReardon Consulting Co</td><td></td><td></td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; font-size:13px; "><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" >3</td></tr><tr><td><u>Heckman-O\'Connor</u></td><td>/</td><td>Tour</td><td>/</td><td>Guides</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 13px; font-size:13px;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td></td><td style="text-align:center;" >3</td></tr><tr><td><u>OConnorHeckman</u></td><td>/</td><td>Tour</td></td><td>/</td><td>Guides</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 225px;  margin-top: -10px; font-size:13px;"><tr><td>SEE HeckmanOConnor Tour Guides</td><td></td><td></td></tr></table></div>'},
	 { 'title':'rule12E',
	'discription': '<h2>Cross Reference Rules</h2><p style="margin-top:-12px; margin-bottom:0px;">Rule 2: Business Names</p><p style="margin-top:8px; margin-bottom:0px;">E. Divisions and Subsidiaries</p><div class="innercrossContent scrollBar" ><p>When one company is a subsidiary or a division or branch of another company, the name appearing on the letterhead of the branch or subsidiary is the one indexed on the original record. A cross-reference is made under the name of the parent company. Two examples follow.</p>Example:<br/><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" >3</td></tr><tr><td><u>Ricoh</u></td><td>/</td><td>Business</td><td>/</td><td>Systems</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 29px;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td></td><td style="text-align:center;" ></td></tr><tr><td><u>Ricoh</u></td><td>/</td><td>USA</td></td><td></td><td></td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 0px;  margin-top: -10px; font-size:13px;"><tr><td>(a division of Ricoh USA)</td><td></td><td></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 71px; margin-top: -10px; "><tr><td>SEE Ricoh Business Systems</td><td></td><td></td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" ></td></tr><tr><td><u>Micro-Weld</u></td><td>/</td><td>Operations</td><td></td><td></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 33px;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td></td><td style="text-align:center;" ></td></tr><tr><td><u>Kintech</u></td><td>/</td><td>Corporation</td></td><td></td><td></td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 0px;  margin-top: -10px; font-size:13px;"><tr><td>(a subsidiary of Kintech Corporation)</td><td></td><td></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left:3px; margin-top: -10px; "><tr><td>SEE MicroWeld Operations</td><td></td><td></td></tr></table></div>'},
	 { 'title':'rule12F',
	'discription': '<h2>Cross Reference Rules</h2><p style="margin-top:-12px; margin-bottom:0px;">Rule 2: Business Names</p><p style="margin-top:8px; margin-bottom:0px;">F. Changed Names</p><div class="innercrossContent scrollBar"><p>A company may change its name. Records must then be changed to indicate the name change and to ensure that the new name will be used for storage purposes. If only a few records are already in storage, they are usually re-filed under the new name, and the former name is marked as a cross reference. If many records are filed under the former name, a permanent cross-reference is placed at the beginning of the records for the former name. Any new records are placed under the new name. In the following examples, <i>AT&T Wireless</i> changed its name to <i>Cingular Wireless,</i> and <i>Hershey Foods Corporation</i> changed its name to <i>The Hershey Co.</i></p>Example:<br/><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;"><tr><td></td><td></td><td style="text-align:center; colspan=2; " >2</td></tr><tr><td><u>Cingular</u></td><td>/</td><td>Wireless</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 34px;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" ></td></tr><tr><td><u>ATandT</u></td><td>/</td><td>Wireless</td><td></td><td></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 174px;  margin-top: -10px;"><tr><td>SEE</td><td>Cingular</td><td>Wireless</td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;"><tr><td style="text-align:center; colspan=2; " >3</td><td></td><td ></td><td ></td><td style="text-align:center;" >2</td></tr><tr><td>The</td><td>/</td><td><u>Hershey</u></td><td>/</td><td>Co.</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 34px;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" >3</td></tr><tr><td><u>Hershey</u></td><td>/</td><td>Foods</td><td>/</td><td>Corporation</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 177px;  margin-top: -10px;"><tr><td>SEE Hershey Co The</td><td></td><td></td></tr></table></div>'},
	 { 'title':'rule12G',
	'discription': '<h2>Cross Reference Rules</h2><p style="margin-top:-12px; margin-bottom:0px;">Rule 2: Business Names</p><p style="margin-top:8px; margin-bottom:0px;">G. Similar Names</p><div class="innercrossContent scrollBar"><p>A SEE ALSO cross-reference is used to alert the filer to check other possible spellings for a business name. The complete business name is not cross-referenced &mdash; only the similar name. Similar names for a business include examples like <i>Northwest</i> or <i>North West</i>, <i>Southeast</i> or <i>South East</i>, <i>Goodwill</i> or <i>Good Will</i>, and <i>All State</i> or <i>Allstate</i>. If a name could be considered either as one unit or as two units, it is a good candidate for a cross-reference. Two examples follow.</p>Example:<br/><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;"><tr><td></td><td></td><td style="text-align:center; colspan=2; " >2</td><td></td><td style="text-align:center;" >3</td><td></td></tr><tr><td><u>Allstate</u></td><td>/</td><td>Insurance</td><td>/</td><td>Co.</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 34px;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" ></td></tr><tr><td><u>All</u></td><td>/</td><td>State</td><td></td><td></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 218px;  margin-top: -10px;"><tr><td>SEE</td><td>ALSO</td><td>Allstate</td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; font-size:13px;"><tr><td></td><td></td><td style="text-align:center; colspan=2; " >2</td><td></td><td style="text-align:center; colspan=2; " >3</td><td></td><td style="text-align:center; colspan=2; " >4</td></tr><tr><td><u>South</u></td><td>/</td><td>East</td><td>/</td><td>Distribution</td><td>/</td><td>Co.</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 19px; font-size: 13px;"><tr><td></td><td></td><td style="text-align:center;" ></td><td style="text-align:center;" ></td><td style="text-align:center;" ></td></tr><tr><td><u>Southeast</u></td><td></td><td></td><td></td><td></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 212px;  margin-top: -10px; font-size: 13px;"><tr><td>SEE ALSO South East</td><td></td><td></td></tr></table></div>'},
	 { 'title':'rule12H',
	'discription': '<h2>Cross Reference Rules</h2><p style="margin-top:-12px; margin-bottom:0px;">Rule 2: Business Names</p><p style="margin-top:8px; margin-bottom:0px;">H. Foreign Business Names</p><div class="innercrossContent scrollBar"><p>Write the English translation of the foreign business name on each document to be stored and store the document under the English spelling. Prepare a cross-reference sheet using the foreign spelling as written in the native language, using the first word as the key unit. Two examples follow.</p>Example:<br/><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;"><tr><td></td><td></td><td style="text-align:center; " >2</td><td style="text-align:center;" ></td><td></td><td></td></tr><tr><td><u>Humboldt</u></td><td>/</td><td>University</td><td></td><td></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 34px;"><tr><td></td><td></td><td style="text-align:center;" ></td><td style="text-align:center;" ></td><td style="text-align:center;" ></td></tr><tr><td><u>Humboldt-Universit&#228;t</u></td><td></td><td></td><td></td><td></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 208px;  margin-top: -10px;"><tr><td>SEE</td><td>Humboldt</td><td>University</td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;"><tr><td></td><td></td><td style="text-align:center; " >2</td><td style="text-align:center;" ></td><td></td><td></td></tr><tr><td><u>Venezuelan</u></td><td>/</td><td>Line</td><td></td><td></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 64px;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" >3</td></tr><tr><td><u>Venezolana</u></td><td>/</td><td>de</td><td>/</td><td>Navegacion</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 208px;  margin-top: -10px;"><tr><td>SEE</td><td>Venezuelan</td><td>Line</td></tr></table></div>'},
	{  'title':'rule12I',
	'discription': '<h2>Cross Reference Rules</h2><p style="margin-top:-12px; margin-bottom:0px;">Rule 2: Business Names</p><p style="margin-top:8px; margin-bottom:0px;">I. Foreign Government Names</p><div class="innercrossContent scrollBar"><p>The name of a foreign government and its agencies, like foreign businesses, is often written in a foreign language. Write the English translation of the government name on each document to be stored. Store all documents under the English spelling. Prepare a cross-reference sheet using the foreign spelling as written in its native language, using the first word as the key unit. Two examples follow.</p>Example:<br/><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; font-size:13px; "><tr><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" >3</td><td style="text-align:center;" ></td><td style="text-align:center;" >4</td><td></td><td style="text-align:center;" ></td></tr><tr><td>Federal</td><td>/</td><td>Republic</td><td>/</td><td>of</td><td>/</td><td><u>Brazil</u></td><td></td><td></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 13px; font-size:13px;"><tr><td style="text-align:center;" ></td><td style="text-align:center;" ></td><td style="text-align:center;" >2</td><td></td><td style="text-align:center;" >3</td><td></td><td style="text-align:center;" >4</td><td></td><td style="text-align:center;" ></td></tr><tr><td><u>Republica</u></td><td>/</td><td>Federativa</td><td>/</td><td>do</td><td>/</td><td>Brasil</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 201px;  margin-top: -10px; font-size:13px;"><tr><td>SEE Brazil Federal Republic of</td><td></td><td></td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; font-size:13px;"><tr><td style="text-align:center;" >2</td><td></td><td style="text-align:center;" >3</td></tr><tr><td>Kingdom</td><td>/</td><td>of</td><td>/</td><td><u>Bhutan</u></td></tr></table>&nbsp;<table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 64px; font-size:13px;"><tr><td></td><td></td><td style="text-align:center;" ></td></tr><tr><td><u>Druk-yul</u></td><td></td><td></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 202px;  margin-top: -10px; font-size:13px;"><tr><td>SEE Bhutan Kingdom of</td><td></td><td></td></tr></table></div>'},
   {
		'title':'rule13',
		'discription': '<h2>Subjects Within an Alphabetic Arrangement</h2><div class="innerruleContent scrollBar"><p class="discriptioncontent" >Within an alphabetic arrangement, records may sometimes be stored and retrieved more conveniently by a subject title than by a specific name. Beware, however, of using so many subjects that the arrangement becomes primarily a subject arrangement with alphabetic names as subdivisions. A few typical examples of acceptable subjects to use within an otherwise alphabetic name arrangement are:<ul><li><b>Applications.</b> The job for which individuals are applying is more important than are the names of the applicants.</li><li><b>Bids or projects.</b> All records pertaining to the same bid or the same project are kept together under the project or bid title.</li><li><b>Special promotions or celebrations.</b> All records relating to a specific event are grouped together by subject.</li></ul>When coding a record, the main subject is the key unit. Subdivisions of the main subject are considered as successive units. The name of the correspondent (individual or company name) is considered last. For example, on all records pertaining to applications, the word <i>Applications</i> is written as the key unit. The specific job applied for is a subdivision of that main subject and is the next unit (<i>Assistant,</i> for example). The applicant\'s name is coded last.</p><p class="discriptionexample"><table style="width:90%; display:block; cell-padding:0; cell-spacing:0;  border: 1px solid #5d2f18; border-spacing: 0px;" class="tableBorder1"  ><tr><td  style="border-bottom: 1px solid #5d2f18; text-align:center;" colspan="5" ><b>Indexing Order of Units</b></td></tr><tr><td style="width:30%; text-align:center;"><b>Key Unit</b></td><td style="width:15%;"><b>Unit 2</b></td><td style="width:15%;"><b>Unit 3</b></td><td style="width:15%;"><b>Unit 4</b></td><td style="width:15%;"><b>Unit 5</b></td></tr><tr><td>1. Applications</td><td>Assistant</td><td>Bianchi</td><td>Jason</td><td></td></tr><tr><td>2. Applications</td><td>Assistant</td><td><u>F</u>ung</td><td>Brenda</td><td></td></tr><tr><td>3. Applications</td><td><u>C</u>ashier</td><td>Corbett</td><td>Lucy</td><td></td></tr><tr><td>4. Applications</td><td>Cashier</td><td><u>J</u>ennings</td><td>Kenneth</td><td></td></tr><tr><td>5. Applications</td><td><u>D</u>ata</td><td>Entry</td><td>Neally</td><td>Joyce</td></tr><tr><td>6. Applications</td><td>Data</td><td>Entry</td><td><u>R</u>odrigez</td><td>Luis</td></tr></table></p></div>'
	},
	];
	

var crossfilingrules= [ 

	{'title':'crossrule1A',
	'discription': '<h3>Alphabetic Indexing Rules</h3><p style="margin-top:-5px; margin-bottom:0px;">Rule 1: Personal Names</h3><p>A. Unusual (Easily Confused) Names</p></div><div class="innercrossContent scrollBar"><p >When determining the surname is difficult, use the last name written as the key unit on the original record. Prepare a cross-reference with the first name written as the key unit. An example is  <i>Charles David.</i> On the original correspondence for Charles David, <i>David</i> is the key unit, and <i>Charles</i> is the second unit. The cross-reference sheet would show <i>Charles</i> as the key unit and <i>David</i> as the second unit. Someone looking under <i>Charles</i> would find the cross-reference that shows the original record is filed under D for David. Two additional examples follow.</p>Example:<br/><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;"><tr><td style="text-align:center; colspan=2; " >2</td></tr><tr><td>Charles</td><td>/</td><td><u>David</u></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 67px;"><tr><td></td><td></td><td style="text-align:center;" >2</td></tr><tr><td><u>Charles</u></td><td>/</td><td>David</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 182px;  margin-top: -10px;"><tr><td>SEE</td><td>David</td><td>Charles</td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;"><tr><td style="text-align:center; colspan=2;" >2</td></tr><tr><td>Gee-Hong</td><td>/</td><td><u>Cheung</u></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 35px;"><tr><td></td><td></td><td style="text-align:center;" >2</td></tr><tr><td><u>Gee-Hong</u></td><td>/</td><td>Cheung</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 182px;  margin-top: -10px;"><tr><td>SEE</td><td>Cheung</td><td>GeeHong</td></tr></table><br><table style="width:100% cell-padding:0; display: inline-block; cell-spacing:0;"><tr><td style="text-align:center; colspan=2;" >2</td></tr><tr><td>Keooudon</td><td>/</td><td><u>Sayasene</u></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;  margin-left: 27px" ><tr><td></td><td></td><td style="text-align:center;" >2</td></tr><tr><td><u>Keooudon</u></td><td>/</td><td>Sayasene</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 186px;  margin-top: -10px;"><tr><td>SEE</td><td>Sayasene</td><td>Keooudon</td></tr></table></div>'},
	{'title':'crossrule1B',
	'discription': '<div><p>B. Hyphenated Surnames</p></div><div class="innercrossContent scrollBar" ><p>Hyphenated surnames often are used by married women. With hyphenated surnames, a request for records could be in either of the two surnames. A cross-reference enables retrieval in either case. An example is <i>Wendy Reardon-Bruss</i> shown below.</p><p>Many men use hyphenated surnames that are their family names, and they are known only by their hyphenated surnames. A cross-reference is not necessary. If men choose to adopt a hyphenated surname when they marry and may, in that case, be known by more than one name, a cross-reference is needed. See <i>Douglas Edwards-Read</i> shown below. You will be told when a cross-reference is needed for a man\'s name; otherwise, a cross-reference will not be required.</p>Example:<br/><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;"><tr><td style="text-align:center; colspan=2; " >2</td></tr><tr><td>Wendy</td><td>/</td><td><u>Reardon-Bruss</u></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 34px;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" >3</td></tr><tr><td><u>Bruss</u></td><td>/</td><td>Wendy</td><td>/</td><td>Reardon</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 208px;  margin-top: -10px;"><tr><td>SEE</td><td>ReardonBruss</td><td>Wendy</td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;"><tr><td style="text-align:center; colspan=2; " >2</td></tr><tr><td>Douglas</td><td>/</td><td><u>Edwards-Read</u></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 34px;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" >3</td></tr><tr><td><u>Read</u></td><td>/</td><td>Douglas</td><td>/</td><td>Edwards</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 212px;  margin-top: -10px;"><tr><td>SEE</td><td>EdwardsRead</td><td>Douglas</td></tr></table></div>'},
	{'title':'crossrule1C',
	'discription': '<div> <p>C. Alternate Names</p></div><div class="innercrossContent scrollBar"><p>When a person is known by more than one name, a cross-reference is needed. Examples are <i>Michelle Starkinsky</i> doing business as <i>Michelle Star</i> and <i>Faith Moran</i>, who is also known by three other names.</p>Example:<br/><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;"><tr><td style="text-align:center; colspan=2; " >2</td></tr><tr><td>Michelle</td><td>/</td><td><u>Star</u></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 28px;"><tr><td></td><td></td><td style="text-align:center;" >2</td></tr><tr><td><u>Starkinsky</u></td><td>/</td><td>Michelle</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 136px;  margin-top: -10px;"><tr><td>SEE</td><td>Star</td><td>Michelle</td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;"><tr><td style="text-align:center; colspan=2;" >2</td></tr><tr><td>Faith</td><td>/</td><td><u>Moran</u></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 35px;"><tr><td></td><td></td><td style="text-align:center;" >2</td></tr><tr><td><u>MorganRipley</u></td><td>/</td><td>Faith</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 140px;  margin-top: -10px;"><tr><td>SEE</td><td>Moran</td><td>Faith</td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 141px;  border-top: 1.8px dashed;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" >3</td></tr><tr><td><u>Ripley</u></td><td>/</td><td>Michael</td><td>/</td><td>Mrs</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 143px;  margin-top: -10px;"><tr><td>SEE</td><td>Moran</td><td>Faith</td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 141px;  border-top: 1.8px dashed;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" >3</td></tr><tr><td><u>Ripley</u></td><td>/</td><td>Faith</td><td>/</td><td>Mrs</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 143px;  margin-top: -10px;"><tr><td>SEE</td><td>Moran</td><td>Faith</td></tr></table></div>'},
	 { 'title':'crossrule1D',
	'discription': '<div><p>D. Similar Names</p></div><div class="innercrossContent scrollBar" ><p>A variety of spellings exist for some names like <i>Brown</i> and <i>Johnson</i>. A SEE ALSO cross-reference is prepared for all likely spellings. A SEE ALSO sheet directs the filer to multiple locations for related information. If the name is not found under one spelling, the filer checks the SEE ALSO sheet for other possible spellings. Two examples follow.</p>Example:<br/><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; font-size:14px;"><tr><td style="text-align:center; colspan=2;" ></td></tr><tr><td><u>Brown</u></td><td></td><td></td></tr><tr><td>SEE ALSO Browne, Braun, Brawn</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;  margin-left: 0px; font-size:14px;"><tr><td style="text-align:center; colspan=2;" ></td></tr><tr><td><u>Browne</u></td><td></td><td></td></tr><tr><td>SEE ALSO Brown, Braun, Brawn</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;  margin-left: 216px; font-size:14px; border-top:1.8px dashed;"><tr><td style="text-align:center; colspan=2;" ></td></tr><tr><td><u>Braun</u></td><td></td><td></td></tr><tr><td>SEE ALSO Brown, Brawn, Browne</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;  margin-left: 216px; font-size:14px; border-top:1.8px dashed;"><tr><td style="text-align:center; colspan=2;" ></td></tr><tr><td><u>Brawn</u></td><td></td><td></td></tr><tr><td>SEE ALSO Brown, Browne, Braun</td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; font-size:14px;   margin-left: 13px;"><tr><td style="text-align:center; colspan=2;" ></td></tr><tr><td><u>Johnson</u></td><td></td><td></td></tr><tr><td>SEE ALSO Johnsen, Johnston,</td></tr><tr><td>Jonson</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;  margin-left: 0px; font-size:14px;"><tr><td style="text-align:center; colspan=2;" ></td></tr><tr><td><u>Johnsen</u></td><td></td><td></td></tr><tr><td>SEE ALSO Johnson, Johnston,<br> Jonson</td></tr><tr><td></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;  margin-left: 216px; font-size:14px; border-top:1.8px dashed;"><tr><td style="text-align:center; colspan=2;" ></td></tr><tr><td><u>Jonsen</u></td><td></td><td></td></tr><tr><td>SEE ALSO Johnson, Johnsen, Johnston</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;  margin-left: 216px; font-size:14px; border-top:1.8px dashed;"><tr><td style="text-align:center; colspan=2;" ></td></tr><tr><td><u>Johnston</u></td><td></td><td></td></tr><tr><td>SEE ALSO Johnson, Jonson, Johnsen</td></tr></table></div>'},
	
	 {'title':'crossrule2A',
	'discription': '<h3>Alphabetic Indexing Rules</h3><p style="margin-top:-5px; margin-bottom:0px;">Rule 2: Business Names</h3><p>A. Compound Names </p></div><div class="innercrossContent scrollBar"><p>When a business name includes two or more individual surnames, prepare a cross-reference for each surname other than the first. In the following example, two cross-references are needed for the name <i>Jarvis, Rasmussen, and Sheraden Antiques</i></p>Example:<br/><p>Coded Filing Segment:</p><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;" ><tr style="text-align:center"><td></td><td></td><td>2</td><td></td><td>3</td><td></td><td>4</td><td></td><td>5</td></tr><tr><td><u>Jarvis</u>,</td><td>/</td><td>Rasmussen,</td><td>/</td><td>and</td><td>/</td><td>Sheraden</td><td>/</td><td>Antiques</td></tr></table><br/><p>Cross-Reference:</p><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;" ><tr style="text-align:center"><td></td><td></td><td>2</td><td></td><td>3</td><td></td><td>4</td><td></td><td>5</td></tr><tr><td><u>Rasmussen</u></td><td>/</td><td>Sheraden</td><td>/</td><td>and</td><td>/</td><td>Jarvis</td><td>/</td><td>Antiques</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-top:-10px" ><tr><td colspan="9">SEE Jarvis Rasmussen and Sheraden Antiques</td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; border-top: 1.8px dashed;" ><tr style="text-align:center"><td></td><td></td><td>2</td><td></td><td>3</td><td></td><td>4</td><td></td><td>5</td></tr><tr><td><u>Sheraden</u></td><td>/</td><td>Jarvis</td><td>/</td><td>and</td><td>/</td><td>Rasmussen</td><td>/</td><td>Antiques</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-top: -16px;" ><tr><td colspan="9">SEE Jarvis Rasmussen and Sheraden Antiques</td></tr></table></div>'},
	 { 'title':'crossrule2B',
	'discription': ' <div><p>B. Abbreviations and Acronyms</p></div><div class="innercrossContent scrollBar"><p> When a business is commonly known by an abbreviation or an acronym, a cross-reference is prepared for the full name. Two examples are <i>MADD</i> (Mothers Against Drunk Driving) and <i>EZ Electronics</i> (Ewen and Zucker Electronics).</p>Example:<br/><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;"><tr><td style="text-align:center; colspan=2; " ></td></tr><tr><td><u>MADD</u></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 123px;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" >3</td><td></td><td style="text-align:center;" >4</td></tr><tr><td><u>Mothers</u></td><td>/</td><td>Against</td><td>/</td><td>Drunk</td><td>/</td><td>Driving</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 179px;  margin-top: -10px;"><tr><td>SEE MADD</td><td></td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;"><tr><td></td><td></td><td style="text-align:center;" >2</td></tr><tr><td><u>EZ</u></td><td>/</td><td>Electronics</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 69px;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" >3</td><td style="text-align:center;" ></td><td style="text-align:center;" >4</td></tr><tr><td><u>Ewen</u></td><td>/</td><td>and</td><td>/</td><td>Zucker</td><td>/</td><td>Electronics</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 187px;  margin-top: -10px;"><tr><td>SEE</td><td>EZ</td><td>Electronics</td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 186px;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" >3</td><td style="text-align:center;" ></td><td style="text-align:center;" >4</td></tr><tr><td><u>Zucker</u></td><td>/</td><td>and</td><td>/</td><td>Ewen</td><td>/</td><td>Electronics</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 187px;  margin-top: -10px;"><tr><td>SEE</td><td>EZ</td><td>Electronics</td></tr></table></div>'},
	  {'title':'crossrule2C',
	'discription': '<div> <p>C. Popular and Coined Names</p></div><div class="innercrossContent scrollBar"><p>Often a business is known by its popular or coined name. The official name is shown on the original record. To assist in retrieving, a cross-reference is prepared for the popular name. Two examples follow.</p>Example:<br/><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; font-size:13px; "><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" >3</td><td style="text-align:center;" ></td><td style="text-align:center;" >4</td><td></td><td style="text-align:center;" >5</td></tr><tr><td><u>Fred</u></td><td>/</td><td>Meyer</td><td>/</td><td>One</td><td>/</td><td>Stop</td><td>/</td><td>Shopping</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 13px; font-size:13px;"><tr><td></td><td></td><td style="text-align:center;" ></td></tr><tr><td><u>Freddys</u></td><td></td><td></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 238px;  margin-top: -10px; font-size:13px;"><tr><td>SEE Fred Meyer One Stop Shopping</td><td></td><td></td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; font-size:13px;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td></td><td style="text-align:center;" >3</td></tr><tr><td><u>Smiths</u></td><td>/</td><td>Homestyle</td><td>/</td><td>Eatery</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 64px; font-size:13px;"><tr><td></td><td></td><td style="text-align:center;" ></td></tr><tr><td><u>Smittys</u></td><td></td><td></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 238px;  margin-top: -10px; font-size:13px;"><tr><td>SEE Smiths Homestyle Eatery</td><td></td><td></td></tr></table></div>'},
	 {'title':'crossrule2D',
	'discription': '<div><p>D. Hyphenated Names</p></div><div><p>Many business names include hyphenated surnames. Like hyphenated personal names, business surnames with hyphens need to be cross referenced for each surname combination. Two examples follow</p>Example:<br/><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; font-size:13px; "><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" >3</td></tr><tr><td><u>Jolly-Reardon</u></td><td>/</td><td>Consulting</td><td>/</td><td>Co.</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 33px; font-size:13px;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td></td><td style="text-align:center;" >3</td></tr><tr><td><u>ReardonJolly</u></td><td>/</td><td>Consulting</td></td><td>/</td><td>Co</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 224px;  margin-top: -10px; font-size:13px;"><tr><td>SEE JollyReardon Consulting Co</td><td></td><td></td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; font-size:13px; "><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" >3</td></tr><tr><td><u>Heckman-O\'Connor</u></td><td>/</td><td>Tour</td><td>/</td><td>Guides</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 13px; font-size:13px;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td></td><td style="text-align:center;" >3</td></tr><tr><td><u>OConnorHeckman</u></td><td>/</td><td>Tour</td></td><td>/</td><td>Guides</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 225px;  margin-top: -10px; font-size:13px;"><tr><td>SEE HeckmanOConnor Tour Guides</td><td></td><td></td></tr></table></div>'},
	 { 'title':'crossrule2E',
	'discription': '<div><p>E. Divisions and Subsidiaries</p></div><div class="innercrossContent scrollBar" ><p>When one company is a subsidiary or a division or branch of another company, the name appearing on the letterhead of the branch or subsidiary is the one indexed on the original record. A cross-reference is made under the name of the parent company. Two examples follow.</p>Example:<br/><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" >3</td></tr><tr><td><u>Ricoh</u></td><td>/</td><td>Business</td><td>/</td><td>Systems</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 29px;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td></td><td style="text-align:center;" ></td></tr><tr><td><u>Ricoh</u></td><td>/</td><td>USA</td></td><td></td><td></td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 0px;  margin-top: -10px; font-size:13px;"><tr><td>(a division of Ricoh USA)</td><td></td><td></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 71px; margin-top: -10px; "><tr><td>SEE Ricoh Business Systems</td><td></td><td></td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" ></td></tr><tr><td><u>Micro-Weld</u></td><td>/</td><td>Operations</td><td></td><td></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 33px;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td></td><td style="text-align:center;" ></td></tr><tr><td><u>Kintech</u></td><td>/</td><td>Corporation</td></td><td></td><td></td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 0px;  margin-top: -10px; font-size:13px;"><tr><td>(a subsidiary of Kintech Corporation)</td><td></td><td></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left:3px; margin-top: -10px; "><tr><td>SEE MicroWeld Operations</td><td></td><td></td></tr></table></div>'},
	 { 'title':'crossrule2F',
	'discription': '<div><p>F. Changed Names</p></div><div class="innercrossContent scrollBar"><p>A company may change its name. Records must then be changed to indicate the name change and to ensure that the new name will be used for storage purposes. If only a few records are already in storage, they are usually re-filed under the new name, and the former name is marked as a cross reference. If many records are filed under the former name, a permanent cross-reference is placed at the beginning of the records for the former name. Any new records are placed under the new name. In the following examples, <i>AT&T Wireless</i> changed its name to <i>Cingular Wireless,</i> and <i>Hershey Foods Corporation</i> changed its name to <i>The Hershey Co.</i></p>Example:<br/><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;"><tr><td style="text-align:center; colspan=2; " >2</td></tr><tr><td><u>Cingular</u></td><td>/</td><td>Wireless</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 34px;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" >3</td></tr><tr><td><u>ATandT</u></td><td>/</td><td>Wireless</td><td></td><td></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 174px;  margin-top: -10px;"><tr><td>SEE</td><td>Cingular</td><td>Wireless</td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;"><tr><td style="text-align:center; colspan=2; " >2</td></tr><tr><td>The</td><td>/</td><td><u>Hershey</u></td><td>/</td><td><u>Co.</u></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 34px;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" >3</td></tr><tr><td><u>Hershey</u></td><td>/</td><td>Foods</td><td>/</td><td>Corporation</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 177px;  margin-top: -10px;"><tr><td>SEE Hershey Co The</td><td></td><td></td></tr></table></div>'},
	 { 'title':'crossrule2G',
	'discription': '<div><p>G. Similar Names</p></div><div class="innercrossContent scrollBar"><p>A SEE ALSO cross-reference is used to alert the filer to check other possible spellings for a business name. The complete business name is not cross-referenced- only the similar name. Similar names for a business include examples like <i>Northwest</i> or <i>North West</i>, <i>Southeast</i> or <i>South East</i>, <i>Goodwill</i> or <i>Good Will</i>, and <i>All State</i> or <i>Allstate</i>. If a name could be considered either as one unit or as two units, it is a good candidate for a cross-reference. Two examples follow.</p>Example:<br/><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;"><tr><td></td><td></td><td style="text-align:center; colspan=2; " >2</td><td></td><td style="text-align:center;" >3</td><td></td></tr><tr><td><u>Allstate</u></td><td>/</td><td>Insurance</td><td>/</td><td>Co.</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 34px;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" ></td></tr><tr><td><u>All</u></td><td>/</td><td>State</td><td></td><td></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 218px;  margin-top: -10px;"><tr><td>SEE</td><td>ALSO</td><td>Allstate</td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; font-size:13px;"><tr><td></td><td></td><td style="text-align:center; colspan=2; " >2</td><td></td><td style="text-align:center; colspan=2; " >3</td><td></td><td style="text-align:center; colspan=2; " >4</td></tr><tr><td><u>South</u></td><td>/</td><td>East</td><td>/</td><td>Distribution</td><td>/</td><td>Co.</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 19px; font-size: 13px;"><tr><td></td><td></td><td style="text-align:center;" ></td><td style="text-align:center;" ></td><td style="text-align:center;" ></td></tr><tr><td><u>Southeast</u></td><td>/</td><td>Foods</td><td>/</td><td>Corporation</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 212px;  margin-top: -10px; font-size: 13px;"><tr><td>SEE ALSO South East</td><td></td><td></td></tr></table></div>'},
	 { 'title':'crossrule2H',
	'discription': '<div><p>H. Foreign Business Names</p></div><div class="innercrossContent scrollBar"><p>Write the English translation of the foreign business name on each document to be stored and store the document under the English spelling. Prepare a cross-reference sheet using the foreign spelling as written in the native language, using the first word as the key unit. Two examples follow.</p>Example:<br/><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;"><tr><td></td><td></td><td style="text-align:center; " >2</td><td style="text-align:center;" ></td><td></td><td></td></tr><tr><td><u>Humboldt</u></td><td>/</td><td>University</td><td></td><td></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 34px;"><tr><td></td><td></td><td style="text-align:center;" ></td><td style="text-align:center;" ></td><td style="text-align:center;" ></td></tr><tr><td><u>Humboldt-Universit&#228;t</u></td><td></td><td></td><td></td><td></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 208px;  margin-top: -10px;"><tr><td>SEE</td><td>Humboldt</td><td>University</td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;"><tr><td></td><td></td><td style="text-align:center; " >2</td><td style="text-align:center;" ></td><td></td><td></td></tr><tr><td><u>Venezuelan</u></td><td>/</td><td>Line</td><td></td><td></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 64px;"><tr><td></td><td></td><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" >3</td></tr><tr><td><u>Venezolana</u></td><td>/</td><td>de</td><td>/</td><td>Navegacion</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 208px;  margin-top: -10px;"><tr><td>SEE</td><td>Venezuelan</td><td>Line</td></tr></table></div>'},
	{  'title':'crossrule2I',
	'discription': '<div><p>I. Foreign Government Names</p></div><div class="innercrossContent scrollBar"><p>The name of a foreign government and its agencies, like foreign businesses, is often written in a foreign language. Write the English translation of the government name on each document to be stored. Store all documents under the English spelling. Prepare a cross-reference sheet using the foreign spelling as written in its native language, using the first word as the key unit. Two examples follow.</p>Example:<br/><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; font-size:13px; "><tr><td style="text-align:center;" >2</td><td style="text-align:center;" ></td><td style="text-align:center;" >3</td><td style="text-align:center;" ></td><td style="text-align:center;" >4</td><td></td><td style="text-align:center;" >5</td></tr><tr><td>Federal</td><td>/</td><td>Republic</td><td>/</td><td>of</td><td>/</td><td><u>Brazil</u></td><td></td><td></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 13px; font-size:13px;"><tr><td style="text-align:center;" ></td><td style="text-align:center;" ></td><td style="text-align:center;" >2</td><td></td><td style="text-align:center;" >3</td><td></td><td style="text-align:center;" >4</td><td></td><td style="text-align:center;" ></td></tr><tr><td><u>Republica</u></td><td>/</td><td>Federativa</td><td>/</td><td>do</td><td>/</td><td>Brasil</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 201px;  margin-top: -10px; font-size:13px;"><tr><td>SEE Brazil Federal Republic of</td><td></td><td></td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; font-size:13px;"><tr><td style="text-align:center;" >2</td><td></td><td style="text-align:center;" >3</td></tr><tr><td>Kingdom</td><td>/</td><td>of</td><td>/</td><td><u>Bhutan</u></td></tr></table>&nbsp;<table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 64px; font-size:13px;"><tr><td></td><td></td><td style="text-align:center;" ></td></tr><tr><td><u>Druk-yul</u></td><td></td><td></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; margin-left: 202px;  margin-top: -10px; font-size:13px;"><tr><td>SEE Bhutan Kingdom of</td><td></td><td></td></tr></table></div>'} ];
	
	
	
var commonInfo={
				'Code':'Code: Step 1:<br>For this activity, you are expected to identify each coding unit by placing a slash in between each unit.',
				'uIdentification':'Code: Step 2:<br>For this activity, you are expected to identify the primary unit for each name. To identify the primary unit, click on the unit to underline it. When you click on the button again, a number will appear. Click on each unit to correctly identify the numbered unit. ',
				'leveling':'Leveling:<br> Determine the correct leveling by clicking on the levels in order to place the correct level by each name.',
				'crossreference':'Cross referencing: <br>For this activity, you are expected to identify which cards need a cross-reference card. In addition, you must also type in the content that would be added for each cross-referenced card.',
						
				};


	
var audhintSeq={"hint_0":["hint_0"],"hint_1":["hint_1"],"hint_2":["hint_2"],"hint_3":["hint_3"],"hint_4":["hint_4"],"hint_5":["hint_5"],"hint_7":["hint_7"],"hint_10":["hint_10"],"hint_12":["hint_12"],"hint_16":["hint_16"]}
	


var audSeq = {
            'startbtn':['Landing'],
			'directionsforjobs':['directions'],
			'overview':['overviewofauric'],
			'introduction':['overviewofjob'],
			'sorting':['sorting'],
			'coding':['coding'],
			'alphabeticSimulation':['intro_simulation'],
			'Code':['step1'],
			'uIdentification':['step2'],
			'uNumbering':['step2'],
			'crossreference':['crossreference'],
			'leveling': ['Leveling'],
			'help':['help'],
			'filingRules':['rule1A'],
			"rule1A":["rule1A"],
            "rule1B":["rule1B"],
            "rule2":["rule2"],
            "rule3":["rule3"],
            "rule4A":["rule4A"],
            "rule4B":["rule4B"],
            "rule5A":["rule5A"],
            "rule5B":["rule5B"],
            "rule6":["rule6"],
            "rule7":["rule7"],
            "rule8":["rule8"],
            "rule9":["rule9"],
            "rule10A":["rule10A"],
            "rule10B":["rule10B"],
            "rule10C":["rule10C"],
            "rule10D":["rule10D"],
            "rule10E":["rule10E"],
            "rule11":["rule11"],
            "rule11A":["rule11A"],
            "rule11B":["rule11B"],
            "rule11C":["rule11C"],
            "rule11D":["rule11D"],
            "rule11E":["rule11E"],
            "rule12":["rule12"],
            "rule12A":["rule12A"],
            "rule12B":["rule12B"],
            "rule12C":["rule12C"],
            "rule12D":["rule12D"],
            "rule12E":["rule12E"],
            "rule12F":["rule12F"],
            "rule12G":["rule12G"],
            "rule12H":["rule12H"],
            "rule12I":["rule12I"],
            "rule13":["rule13"]
			//'submitconfirmation':['submitconfirm'],
			//'resultpage':['score_page']
			};
var audCcTxt = 	{
			'startbtn':['Welcome to Job 2 of the Records Management Simulation. Take a moment to review the alphabetic filing rules, the cross-reference rules, and directions for the module by clicking on the respective buttons.'],
			'directionsforjobs':[''],
			'overviewofauric':[''],
			'overviewofjob':[''],
			'sorting':[''],
			'coding':[''],
			'alphabeticSimulation':['Review each of the index cards provided. Choose an action and revise each card as needed. Once all tasks have been completed, you will be able to sort and file the cards.'],
			'Code':['Code: Step 1: Separate the filing segment into units by inserting a diagonal slash (/) between the units. <br/>To remove a slash that has already been placed, click on the slash.'],
			'uIdentification':['Code: Step 2 (Units): Indicate the primary unit (key unit) by clicking on it to underline it. <br/> Then, click on the remaining units in sequence to place the correct number above each identified unit.'],
			'uNumbering':['Code: Step 2(Units): Indicate the primary unit (key unit) by clicking on it to underline it. <br/> Then, click on the remaining units in sequence to place the correct number above each identified unit.'],
			'crossreference':['Cross-reference: Determine what should be placed on the cross-reference card by typing in the correct information. <br/>After you have filed the cross-reference card(s), you will be able to file the main card.'],
			'leveling': ['Leveling: Determine the correct leveling by placing the correct level by each name.']
			//'submitconfirmation':[''],
			//'resultpage':['']
			};
			
var simaction = {
	'alphabeticSimulation':'Review the 18 cards. Choose an action and then edit each card as needed.<br/> Once all actions have been completed, file each card by dragging the card to the correct folder.',
	'Code': 'Code: Step 1: Separate the filing segment into units by inserting a diagonal slash (/) <br/>between the units. To remove a slash that has already been placed, click on the slash.',
	'uIdentification':'Code: Step 2 (Units): Indicate the primary unit (key unit) by clicking on it to underline it. Then, <br/>click on the remaining units in sequence to place the correct number above each identified unit.',
	'crossreference': 'Add Cross-Reference: Determine what should be placed on the cross-reference card<br/> by typing in the correct information. After you have filed the cross-reference card (or cards), <br/>you will be able to file the main card.',
	'leveling': 'Leveling: Determine the correct leveling by placing the correct level by each name.'
}	