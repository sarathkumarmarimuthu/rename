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
var inspectscore = 0;
var totinspectscore = 0;
var totalfolderScore = 0;
var folderGuideextraScore=0;
// Developer skip for function
var skipstep = 1;
var crossrefvis = false;

var folderArr=[];

var guideName = [];
var spGuideName = [];
var maxNumofFolderandGuide = 13;
//folderandguideMax = ['ABOVE AND BEYOND INSURANCE CO','INVOICES','INTERNATIONAL COMPUTING CENTER','I','E','D','C','B','APPLICATIONS','A','99 ELECTRONIC REPAIR SHOP','NUMBERS','AA','BB','CC'];
folderandguideMax=['ABOVE AND BEYOND INSURANCE CO','I','E','D','C','B','APPLICATIONS','A','NUMBERS'];
var folderMax=[];
var guideMax=[];
var spGuideMax = [];

//var fgcurrarr = ["I","I","E","E","D","D","C","C","B","B","A","APPLICATIONS","APPLICATIONS","ABOVE AND BEYOND INSURANCE CO","ABOVE AND BEYOND INSURANCE CO","A","NUMBERS","NUMBERS",'ZZ','XX','CC','ZZ','XX','CC'];
var fgcurrarr = ["I","I","E","E","D","D","C","C","B","B","A",,"ABOVE AND BEYOND INSURANCE CO","APPLICATIONS","APPLICATIONS","A","NUMBERS","NUMBERS"];


/*	// FOLDER 
	
							// CC-0 FINDING ADDED G/F/S IN FOLDER 
							// F/G/S - 1 TYPE OF THE FINDING ADDEF F/G/S
							// NUMBER -2 BEGIND THE FINDING F/G/S
							// F/G/S - 3 TYPE OF THE BEGIND F/G/S
							// 7 f - highlightfol
							// 7 g - guide
							// 7 s - guidesp */
							
var findAddedCorrectName =[['ABOVE AND BEYOND INSURANCE CO','F','folder',                     'A','G','guide','guide']]							
/*var findAddedCorrectName =[['99 ELECTRONIC REPAIR SHOP','F','Folder',          'NUMBERS','F','Folder','highlightfol'],
						   ['INVOICES','F','Folder',                           'INVOICES','S','Special Guide','guidesp'],
						   ['INTERNATIONAL COMPUTING CENTER','F','Folder',     'I','F','Folder','highlightfol'],
						   ['INVOICES','S','Special Guide',                    'I','G','Guide','guide']]*/


		// Types F - folder, S- Special Guide, G - Guide
var foldertypeandName =[["G","NUMBERS",'old'],
						["F","NUMBERS",'old'],
						//["F","99 ELECTRONIC REPAIR SHOP"],
						["G","A",'old'],
						["S","APPLICATIONS",'old'],
						["F","APPLICATIONS",'old'],
						["F","A",'old'],
						//["F","ABOVE AND BEYOND INSURANCE CO"],
						["G","B",'old'],
						["F","B",'old'],
						["G","C",'old'],
						["F","C",'old'],
						["G","D",'old'],
						["F","D",'old'],
						["G","E",'old'],
						["F","E",'old'],
						["G","I",'old'],
						//["S","INVOICES"],
						//["F","INVOICES"],
						["F","I",'old']];						
						//["F","INTERNATIONAL COMPUTING CENTER"],

/*
var foldertypeandName =[["G","NUMBERS"],
						["F","NUMBERS"],
						["F","99 ELECTRONIC REPAIR SHOP"],
						["G","A"],
						["S","ABOVE AND BEYOND INSURANCE CO"],
						["S","APPLICATIONS"],
						["F","APPLICATIONS"],
						["F","A"],
						["F","ABOVE AND BEYOND INSURANCE CO"],
						["G","B"],
						["F","B"],
						["G","C"],
						["F","C"],
						["G","D"],
						["F","D"],
						["G","E"],
						["F","E"],
						["G","I"],
						["S","INVOICES"],
						["F","INVOICES"],
						["F","I"],					
						["F","INTERNATIONAL COMPUTING CENTER"]];	

*/


maxNumofFolderandGuide += foldertypeandName.length+findAddedCorrectName.length;

totalfolderScore = findAddedCorrectName.length;

var dataRecdJob=[];	



		


for(var i=0;i<dataRecdJob.length; i++)
{
	dataRecdJob[i].subinputval = ["","","",""]; //"card "+(i+1);
	dataRecdJob[i].chcard =[];
	dataRecdJob[i].inspect = -1;
	dataRecdJob[i].subjectinput = ['','','',''];
	
	//if(i == 4)
	//dataRecdJob[i].subjectinput = ['Applications','CSR','',''];

	//dataRecd[i].ainspect = 1; 
	
	dataRecdJob[i].codeScore = [0,dataRecdJob[i].anumbering.length,0];
	dataRecdJob[i].xreffolderinfo = [];
	
	if(typeof dataRecdJob[i].crossAns != 'undefined')
	{
		
		for(var k = 0; k<dataRecdJob[i].crossAns.length; k++)
		{
			dataRecdJob[i].xreffolderinfo.push(dataRecdJob[i].crossAns[k][1])
		}
	}
	dataRecdJob[i].job=1;
	
	dataRecdJob[i].space =[];
	dataRecdJob[i].slash =[];
	dataRecdJob[i].crossUnit=[];
	dataRecdJob[i].level=false;
	for(var j = 0; j<dataRecdJob[i].name.length; j++)
	{
		
			dataRecdJob[i].space[j] = [];
			dataRecdJob[i].slash[j] =[];
			//dataRecd[i].numbering=[];
			dataRecdJob[i].hintv=0;
		if(dataRecdJob[i].alignClass[j] != 'letCon')
		{
		for(var k = 0; k<dataRecdJob[i].name[j].length; k++)
		{
			dataRecdJob[i].space[j][k] = [];
			dataRecdJob[i].slash[j][k] =[];
			//dataRecd[i].numbering[k]=[];
			dataRecdJob[i].hintv=0;
			var str = dataRecdJob[i].name[j][k];
			//console.log(str)
			var index = 0;
			str = str.replace(/\s/g, '^');
			while ((index = str.indexOf('^', index + 1)) > 0) {
				dataRecdJob[i].space[j][k].push(index)
			}
			while ((index = str.indexOf('-', index + 1)) > 0) {
				dataRecdJob[i].space[j][k].push(index);
			}
			dataRecdJob[i].space[j][k].sort(function(a, b){return a-b});
		}
		}
	}
}

for(var i=0;i<dataRecdJob.length; i++)
{
	dataRecdJob[i].slash = dataRecdJob[i].aslash.slice();
	dataRecdJob[i].numbering = dataRecdJob[i].anumbering.slice();
	
}

var notstepclass = ['letCon','letConGN','letCon1','letConTop','letConDate','letCon2','letCon3','letCon4','letConPJ','subinput','marking markingNames','marking markingNamesTop','markingDateParallel trigalign marking','letCon marking','floatRight marking','marking markingNamesbtm','leftRightParallel1 tlefalign marking','background bg-text','floatRightCon tlefalign','floatrightShipTo tlefalign','letConTopsign','letCon letConmid','signatureRight','floatcenterImage3','letCon letConEn','markingImgParallel trigalign','letConnew','floatcenter1 snellround','letCon snellround5','floatRight marking letConEn','letConnew snellround','signatureNew snellround4','letCon snellround','floatLeft2 lineHeight nocod','letConGN toDown','floatRight marking twUp','floatRight marking troyDavis','letCon letContooUP','letCon letConUP'];


var dataRecd=[ 	 
				{	    
                    'name':[['<img alt="Logo: Holly Farm Inn" class="hollo_logo" src="assets/images/hollo.png"  draggable="false"/>'],
							['Holly Farm Inn'],
					       ['4875 N. Holly Avenue','Chicago, IL 60660-4875','(312) 555-0203'],
							['March 1, 20--<img alt="Mar 4, 20--" class="markingDatenew1" src="assets/images/mar.png" draggable="false"/>'],
							[''],
							[''],
							['&nbsp;','&nbsp;','&nbsp;','&nbsp;'],
							['Ms. Terri Williams','Auric Systems, Inc.','1100 W. Tell Avenue','Chicago, IL 60657-1100'],
							['Dear Ms. Williams:'],
							['Your advertisement for high-speed Internet service in the Sunday paper has prompted my interest in your company.  I have been considering a new Internet service provider.  Please send me information about your Internet services. <p>Please send me the information to my home address given below or my e-mail address: dedwards&#64;isp.net.</p>'],
							['Sincerely yours,','<img alt="signature:Donna Edwards" class="markingSignature" src="assets/images/donna.png" draggable="false"/>','<img alt="3-21" class="markingNamesnew1" src="assets/images/321.png" draggable="false"/>','<img alt="FL-A 3-4" class="markingNamesnew" src="assets/images/fla.png" draggable="false"/>'],
							['Donna Edwards','5684 N. Cedar Hill Way','Chicago, IL 60660-5684']],
			   'alignClass':['letCon',
							'tmidalignBold lineHeight',
			                 'floatcenterImage tmidalign', 
			   			     'letCon1',
							 'letConnew',	
			                 'subinput',
							 'substeping',
			   			     'floatLeft tlefalign',
			   			     'letCon',
			   			     'letCon',
			   			     'letCon',
			   			     'floatLeft tlefalign signtop'
							],
					'aslash':[[],[],[],[],[],[],[],[],[],[],[],[[0]]],
					'numbering':[],
					'anumbering':['11 0 2', '11 0 0'],
					'ainspect':1,
					'hintt':['The letter has been released for filing since the notation shows that Form Letter A was sent on 3/4. When determining the name to be coded, do not be misled by the letterhead. A quick reading of the letter shows that Donna Edwards is requesting information for herself, not for the Holly Farm Inn. (She just used a piece of hotel stationery on which to write.) Therefore, the letter should be coded under Donna Edwards\' name. Place a diagonal between <i>Donna</i> and <i>Edwards</i>, underline the key unit of <i>Edwards</i>, and write a 2 over <i>Donna</i>.'],
					'filinghint':[''],
					'hintRus':[],	
					'folderinfo':[],
				    'ansOrder':['E',0]
				    //    'ansOrder':['A',0]
					
					//'crossUnit':[["aaa"], ["aaa"], ["ccccc"], ["dddd"], []]	
						
					},//0 
            {	    
                    'name':[['The Crystal Net, Inc.'],
							['North Office:','6100 N. Roslyn Avenue','Northbrook, IL 60062-6100','847.555.0278','FAX: 847.555.0279'],
							['South Office:','4125 S. Astro Dr.','Chicago, IL 60630-4125','708.555.0998','FAX: 708.555.0999'],
							['March 2, 20--'],
							['<img alt="Mar 2, 20--" class="markingDatenew" src="assets/images/mar_2-20.png" draggable="false"/>'],
							[''],
						    ['&nbsp;','&nbsp;','&nbsp;','&nbsp;'],
							['Ms. Pat Johnson, Vice President','Broadband Communications','Auric Systems, Inc.','1100 W. Tell Avenue','Chicago, IL 60657-1100'],
							
							['Dear Ms. Johnson:'],
							['Are you looking for excellent high-speed wireless access to the Internet?  Our company offers this service.  Our agent, Mr. Bob Baker, will be in the Chicago area on March 15.  He can stop in to see you at 10 a.m.  Please confirm that date and time with me, Kou Chung, by fax of phone. <p>Don\'t miss this opportunity to learn about our various high-speed Internet access options.</p>'],
							['Cordially,','<img alt="signature:Kou Chung" class="markingSignatureBold" src="assets/images/kou.png" draggable="false"/>'],
							['<img alt="PJ 3-15" class="markingNamesnew" src="assets/images/pj_3-15.png" draggable="false"/>'],
							['Mr. Kou Chung','Public Relations'],
							['KC:ss'],
							[],
							['Fax Cover Note','To: Ms. Pat Johnson','Auric Systems, Inc.','Fax: 312.555.0102','From: The Crystal Net, Inc. North', 'Northbrook, IL 60062-6100','Fax: 847.555.0279 1 Page(s)'],
							[]],
			  'alignClass':['floatcenterBold tmidalign headerUnderline',
			  			    'floatParallelLeft tlefalign noCode1',
			  			    'leftRightParallel trigalign noCode2',
			  			    'letCon',
							'letConDate',
							'subinput',
							'substeping',
			  			    'floatLeft tlefalign',
			  			    'letCon',
			  			    'letCon',
			  			    'letCon',
							'letConPJ',
			  			    'floatLeft tlefalign signtop',
							'letCon',
							'letCon',
			  			    'floatRightFax tlefalign1 lineHeight toBold',
								'letCon',
							],
					'aslash':[[[0,1,2]],[[],[],[],[],[0]],[[],[],[],[],[0]],[],[],[],[],[],[],[],[],[],[],[],[],[[0,1],[0],[],[0],[0],[],[0]]],
					'numbering':[],
					'anumbering':['0 0 2','0 0 4','0 0 6','0 0 0'],
					'ainspect':1,
				    'hintt':['The release mark PJ appears on this letter. As indicated by the FAX cover note, Pat Johnson received this letter from The Crystal Net, Inc. by fax. Code the filing segment in the letterhead: <i>Crystal</i> is the key unit, <i>Net</i> is the second unit, <i>Inc.</i> is the third unit, and <i>The</i> is the fourth unit.'],
					'filinghint':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':['C',4],
					//'ansOrder':['C',0],
					
					//'crossUnit':[["aaa"], ["aaa"], ["ccccc"], ["dddd"], []]	
						
					}, //1 
				 {	    
                    'name':[['<img alt="Logo: CBS" class="cbs_logo" src="assets/images/cbs_logo.png"  draggable="false"/>'],
							['300 N. Brook Glen Road','Northbrook, IL 60062-0300'],
							['March 2, 20--'],
							['Mr. Glen Norris, Vice President','Customer Service','Auric Systems, Inc.','1100 W. Tell Avenue','Chicago, IL 60657-1100'],
							['<img alt="Mar 4, 20--" class="markingDatenew Datenew1" src="assets/images/mar_4-20.png" draggable="false"/>'],
							[''],
							
						   	 ['&nbsp;','&nbsp;','&nbsp;','&nbsp;'],
							['Dear Mr. Norris:'],
							['Thanks to your company, I look forward to enjoying the upcoming football season via one of the many sports packages you offer.  The TV picture is so clear I can almost believe I\'m sitting on the 50-year line!<p>Your company provides an exceptionally high quality of cable service.  Your staff\'s friendliness, knowledge, and service made choosing Auric Systems, Inc., a pleasure.  Thanks for the great experience.</p>'],
							['Yours truly,','<img alt="signature: Chas. S. Baker" class="markingSignature SignatureLeft" src="assets/images/chas.png" draggable="false"/>'],
							[''],
							['Mr. Chas. S. Baker'],
							['<img alt="GN" class="markingNamesnew letConUP1" src="assets/images/gn.png"  draggable="false"/>']
							],
			   'alignClass':['floatcenterImage3',
							 'floatLeft2 lineHeight',
							 'floatLeft2 lineHeight nocod',
							 'floatLeft tlefalign newIndex',
							 'letConTop',
							
							 'subinput',
							 
							 'substeping',
							 'letCon',
							 'letCon',
							 'letCon2',
							 'letCon1',
							 'floatRight tmidalign',
							 'letConGN'
							],
                    'aslash':[[],[],[],[],[],[],[],[],[],[],[],[[0,1,2]]],
					'numbering':[],
					'anumbering':['11 0 6','11 0 2','11 0 4','11 0 0'],
					'ainspect':1,
					'hintt':['Glen Norris has released this letter for filing. <i>Baker</i> is the key unit, <i>Chas</i>. is unit 2, <i>S.</i> is unit 3, and <i>Mr.</i> is unit 4.'],
					'filinghint':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':['B',0],
					//'crossUnit':[["aaa"], ["aaa"], ["ccccc"], ["dddd"], []]	
						
					}, //2 
		{	    
                    'name':[['Almira R. Bekey, M. D.','1806 N. Lake Avenue','Chicago, IL 60618-1806'],
							['March 5, 20--<img alt="Mar 5, 20--" class="markingDatenew" src="assets/images/mar_5-20.png" draggable="false"/>'],
					       	[''],
					       	 ['&nbsp;','&nbsp;','&nbsp;','&nbsp;'],
							['Auric Systems, Inc.','1100 W. Tell Avenue','Chicago, IL 60657-1100'],
							[''],
							['Dear Sir or Madam:'],
							['Please confirm my order for the Premium Programming package at $105 per month. I would like the service to start the first of April.<p>The Premium package will take the place of the Basic plan.  Thank you for your help in setting this up.</p>'],
							['Sincerely yours,','<img alt="signature: Almira R. Bekey" class="markingSignature" src="assets/images/almira.png" draggable="false"/>'],
							['Almira R. Bekey','(Mrs. Simon Carter)'],
							[''],
							['Fax Cover Note','To: Auric Systems, Inc.','Fax: 312.555.0102','From: Almira R. Bekey, M.D.','Fax: 312.555.0990 1 Page(s)'],
							['<img alt="GN" class="markingNamesnew" src="assets/images/gn.png"  draggable="false"/>'],
							[],
							[],
							['Auxiliary Office: 1410 S. Ash Dr.','Oak Park, IL 60302-1410'],
							],
		       'alignClass':['floatcenter tmidalign',
							 'letCon',
							 'subinput',
							 'substeping',
							 'floatLeftAbove tlefalign',
							 'letCon',
							 'letCon',
							 'letCon',
							 'letCon',
							 'floatLeft tlefalign',
							 'letCon',
							 'floatRightFax tlefalign2 lineHeight toBold',
							 'letConGN toDown',
							 'letCon',
							 'letCon',
							 'floatcenterBottom lineHeight'
							],
					'aslash':[[[0,1,2]],[],[],[],[],[],[],[],[],[],[],[[0,1],[0],[0],[0],[0]],[],[],[],[],[]],
					'numbering':[],
					'anumbering':['0 0 4','0 0 0','0 0 2','0 0 6'],
					'ainspect':1,
					'hintt':['This letter, received by fax, has been released by Glen Norris. The name to be coded appears in the letterhead. <i>Bekey</i> is the key unit, <i>Almira</i> is unit 2, <i>R.</i> is unit 3, and <i>M.D.</i> is unit 4. A cross-reference is needed for the alternate name of Mrs. Simon Carter. On a new blank cross-reference sheet, enter <i>Carter</i> as the key unit, <i>Simon</i> as Unit 2 and <i>Mrs</i> as Unit 3. In the space for Date of Record, enter the date of the letter. In the space for Regarding, type "Changing Basic plan to Premium Programming package". In the space for SEE Name or Subject, enter the name by which the record is filed: SEE <i>Bekey Almira R MD.</i>'],
					'filinghint':[''],
					'hintRus':[],
					'folderinfo':[],
				    'ansOrder':['B',1],
					'crossAns':[[['Carter','Simon','Mrs','','','March 5, 20--','Changing Basic plan to Premium Programming package','SEE Bekey Almira R MD'],['C',0]]]
						
					}, //3  
		{	    
                    'name':[['4027 N. Boyd Avenue','Chicago, IL 60643-4027',],
					        ['March 6, 20--'],
							[''],
							[''],
							['Applications','CSR','&nbsp;','&nbsp;'],
						    //['&nbsp;','&nbsp;','&nbsp;','&nbsp;'],
							//['a','c','&nbsp;','&nbsp;'],
							['Ms. Terri Williams','Auric Systems, Inc.','1100 W. Tell Avenue','Chicago, IL 60657-1100'],
							['<img alt="Mar 8, 20--" class="markingDatenew Datenew" src="assets/images/mar_8-20.png" draggable="false"/>'],
							['Dear Ms. Williams:'],
							['Your opening for a CSR (customer service representative) came to my attention through your advertisement in yesterday\'s newspaper.  Please consider me as an applicant for this part-time position.  My resume showing in detail my previous experience as an office assistant is enclosed.  I believe you will find me well qualified for this position.<p>I am a junior at the University of Chicago and can arrange my classes to fit a late afternoon working schedule, as you indicated.  You will find me reliable and trustworthy, as a check with my former employers will confirm.</p><p>May I have an opportunity to meet with you during the week of March 17-21 to discuss this position?  My home phone is 312.555.0197.</p>'],
							['Sincerely yours,','<img alt="signature: Chris Carter" class="markingSignature SignatureLeft1" src="assets/images/chris_carter.png" draggable="false"/>'],
							['Chris Carter'],
							['<img alt="FL-B 3-10" class="markingNamesnew" style="width:22%;" src="assets/images/flb_3-10.png"  draggable="false"/>'],
							['Enclosure'],
							['<img alt="3-16" class="markingNamesnew1" src="assets/images/316.png" draggable="false"/>']],
			   'alignClass':['floatLeft2 lineHeight',
			                 'floatLeft2 lineHeight nocod',
							 'letCon',
							 'subinput',
					         'substeping',
							 'floatLeft tlefalign',
							 'markingDateParallel trigalign marking',
							 'letCon',
							 'letCon',
							 'letCon3',
							 'floatRight tmidalign',
							 'letConGN',
							 'letCon letConEn',
							 'letCon4'
							],
				    'aslash':[[],[],[],[],[[],[]],[],[],[],[],[],[[0]],[],[]],
					'numbering':[],
					'anumbering':['4 0 0', '4 1 0', '10 0 2', '10 0 0'],
					'ainspect':1,
					'hintt':['The notation FL-B is the release mark. This letter discusses applying for a job. All application correspondence is filed in a separate subject folder. For Code: Step 1, in the fill-in "SUBJECT" field at the top of the letter, type the word <i>Applications</i>. The next unit in the filing segment is the name of the position applied for: In the next fill-in fieId on the page, type <i>CSR</i> (for Customer Service Representative). On the main part of the page, place a slash mark between <i>Chris</i> and <i>Carter</i>. In Code: Step 2 (Units), code <i>Applications</i> as the key unit, <i>CSR</i> as unit 2, <i>Carter</i> as unit 3 and <i>Chris</i> as unit 4.'],
					'filinghint':['All application correspondence is filed in a separate subject folder. Create a new folder named <i>Applications</i> to contain this record.'],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':['APPLICATIONS',0],
					
					//'crossUnit':[["aaa"], ["aaa"], ["ccccc"], ["dddd"], []]	
						
					}, //4 
    {	    
                    'name':[['<img alt="Logo:Above and Beyond Insurance Co" class="cbs_logo" src="assets/images/above_logo.png"  draggable="false"/>'],
						    ['Above & Beyond Insurance Co.','Aleta Allison, Owner','965 N. Grove Street, Suite 201','Chicago, IL 60628-0965','312-555-0275'],
							['March 10, 20--<img alt="Mar 13, 20--" class="markingDatenew1" style="width:17%" src="assets/images/mar_13-20.png" draggable="false"/>'],
							[''],
						   	 ['&nbsp;','&nbsp;','&nbsp;','&nbsp;'],
							['Auric Systems, Inc.','1100 W. Tell Avenue','Chicago, IL 60657-1100'],
							['Ladies or Gentlemen:'],
							['Our company would like to consider using your services in establishing a Web presence.  Please send me prices for the high-speed Internet services you have available and include the different options that would be appropriate for an insurance office. <p>Please send this information as soon as possible to the address on this letterhead.</p>'],
							['Sincerely yours,','<img alt="signature: Cynthia Clark" class="markingSignature" src="assets/images/cynthia_clark.png" draggable="false"/>'],
							['Miss Cynthia Clark','Secretary to Ms. Aleta Allison'],['<img alt="GN" class="markingNamesnewAbove" src="assets/images/gn.png"  draggable="false"/>']],
			   'alignClass':['floatcenterImage3',
							 'floatcenter tmidalign',
			   			     'letCon',
							 'subinput',
						     'substeping',
			   			     'floatLeftAbove tlefalign',
			   			     'letCon',
			   			     'letCon',
			   			     'letCon',
			   			     'floatLeft tlefalign',
							 'letConGN'
							],
                    'aslash':[[],[[0,1,2,3]],[],[],[],[],[],[],[],[],[]],
					'numbering':[],
					'anumbering':['1 0 0', '1 0 2','1 0 4','1 0 6','1 0 8'],
					'ainspect':1,
					'hintt':['The release mark GN appears on this letter. Note that it is written by Aleta Allison\'s secretary; however, do not code the secretary\'s name. Code the name that appears in the letterhead, Above & Beyond Insurance Co.'],
					'filinghint':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':['ABOVE AND BEYOND INSURANCE CO',2]	
						
					}, //5
					{	    
                    'name':[['Imagination Cable Programming'],
							['2007 Bryan Tower','Chicago, IL 60657-1725'],
							['','','Telephone: 312-555-0298'],
							[],
							['February 1, 20--'],
							['<img alt="Feb 4, 20--" class="markingDatenew" src="assets/images/feb_4-20.png" draggable="false"/>'],
							[''],
						    ['&nbsp;','&nbsp;','&nbsp;','&nbsp;'],
							['Ms. Terri Williams, President','Auric Systems, Inc.','1100 W. Tell Avenue','Chicago, IL 60657-1100'],
							['Dear Terri:'],
							['Sometimes you must be tempted to toss out the great number of promotional pieces that come across your desk after giving them only a cursory glance!  This particular brochure has excellent bargains and unusual offers.  Don\'t miss them.<p>Please note that the special offers extend only through March 15; orders postmarked after March 15 cannot take advantage of these special prices.</p><p>Your past business with us indicates that you value our cable offerings.  I urge you to check the pages of the brochure carefully - you\'ll find it is time well spent!</p>'],
							['Sincerely,'],
							['IMAGINATION CABLE PROGRAMMING'],
							['<img alt="signature: Richard Ingrahm" class="markingSignature" style="width:36%" src="assets/images/richard_ingrahm.png" draggable="false"/>'],
							['Richard Ingrahm, President'],
							['<img alt="TW 3-10" class="markingNamesnew" src="assets/images/tw_3-10.png"  draggable="false"/>'],
							['ri:ww'],
							['Enclosure']
							],
			  'alignClass':['floatParallelLeft tlefalign',
							'floatParallelLeft1 tlefalign',
			  			    'leftRightParallel2 trigalign noCode3',
							'letConLine',
			  			    'letCon',
							'letCon',
							'subinput',
							'substeping',
			  			    'floatLeft tlefalign',
			  			    'letCon',
			  			    'letCon',
			  			    'letCon',
							'floatLeftImagination tlefalign',
							'letCon1',
			  			    'floatLeft tlefalign',
							'floatRight marking twUp',
							'letCon',
			  			    'letCon'
							],
                    'aslash':[[[0,1]],[],[[],[],[0]],[],[],[],[],[],[],[],[],[],[],[]],
					'numbering':[],
					'anumbering':['0 0 0','0 0 2','0 0 4'],
				    'ainspect':1,
					'hintt':['This letter has been released by Terri Williams. Code the business name in the letterhead.'],
					'filinghint':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':['I',0]
					//'crossUnit':[["aaa"], ["aaa"], ["ccccc"], ["dddd"], []]	
						
					}, //6 
			{ 'name':[['','','','','','Phone: 312.555.0123'],
			            ['Chicago Air Ways, Inc.','Chicago Tower','506 S. Sixth Street','Chicago, IL 60660-5060','','Fax: 312.555.0124'],
							['April 3, 20--'],
							['<img alt="Logo:Chicago Air Ways, Inc." class="chicago_logo" src="assets/images/chicago_logo.png" draggable="false"/>'],
							['<img alt="Apr 4, 20--" class="markingDatenew" src="assets/images/apr_4-20.png" draggable="false"/>'],
							[''],
						  	['&nbsp;','&nbsp;','&nbsp;','&nbsp;'],
							['Auric Systems, Inc.','1100 W. Tell Avenue','Chicago, IL 60657-1100'],
							['Dear Sir or Madam:'],
							['During the last week of this month (April 25-30), you may have a FREE 30-second segment of advertising time on our radio show, "Bulletin Board," that airs each day at 4:30 p.m.  This free time is being offered to all businesses within our viewing area to highlight the "Bulletin Board" program.<p>Please call us at 312.555.0123 so that we may talk with you about your participation. Our popular Sam Stein will read your segment.  We know you will want to provide him with the most interesting copy possible, and we will be glad to help you prepare your segment when you call us within the next ten days.</p>'],
							['Sincerely,'],
							['<img alt="signature: Troy Davis" class="markingSignature" style="width:27%;" src="assets/images/troy_davis.png" draggable="false"/>'],
							['Troy Davis','Production Manager'],
							['<img alt="TW 4-12" class="markingNamesnew" src="assets/images/tw_4-12.png"  draggable="false"/>'],
							['nv']
							],
			  'alignClass':['floatParallelLeft tlefalign noCode4',
			  			    'floatLeftChicago trigalign noCode5',
			  			    'letCon',
							'markingImgParallel trigalign',
							'letCon',
							'subinput',
							'substeping',
			  			    'floatLeft tlefalign',
			  			    'letCon',
			  			    'letCon',
			  			    'letCon',
							'letCon1',
							'floatLeft tlefalign',
			  			    'floatRight marking troyDavis',
							'letCon'
							],
					'aslash':[[[],[],[],[],[],[0]],[[0,1,2],[],[],[],[],[0]],[],[],[],[],[],[],[],[],[],[]],
					'numbering':[],
					'anumbering':['1 0 0', '1 0 2','1 0 4','1 0 6'],
					'ainspect':1,
					'hintt':['The notation TW indicates that the letter has been released for filing. Code the business name in the letterhead.'],
					'filinghint':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':['C',1]
					//'crossUnit':[["aaa"], ["aaa"], ["ccccc"], ["dddd"], []]	
						
					}, //7
					{      'name':[['<img alt="Apr 6, 20--" class="markingDatenewleft" src="assets/images/apr_6-20.png" draggable="false"/>','<font class="marking3">April 2, 20--</font>'],
		                    [''],
							[''],
						    ['&nbsp;','&nbsp;','&nbsp;','&nbsp;'],
							['Auric Systems, Inc.','1100 W. Tell Avenue','Chicago, IL 60657-1100'],
							['Dear Sir or Madam:'],
							['I recently saw a demonstration of your 3G and 4G cell phones.  Please send me information that includes the prices of the devices and the service plans.'],
							[],
							['<img alt="FL-A 4-7" class="markingDatenewleftBottom" src="assets/images/fla_4-7.png" draggable="false"/>'],
							['Sincerely yours,'],
							['Allen R. David','4470 N. Bolton Road, Apt. 82','Chicago, IL 60657-4470']
							],
			  'alignClass':[ 
			               'floatcenter1 snellround',
							'letConnew',
			                'subinput',
						    'substeping',
			  			    'floatLeft tlefalign snellroundex',
			  			    'letCon snellround',
			  			    'letCon snellround',
							'letConnew snellround',
							'letCon snellround5',
							'signatureNew snellround4',
			  			    'floatcenterBottom1 snellround4'
							],
					'aslash':[[],[],[],[],[],[],[],[],[],[],[[0,1],[],[]],[]],
					'numbering':[],
					'anumbering':['10 0 4', '10 0 0','10 0 2'],
					'ainspect':1,
					'hintt':['Prepare a cross-reference sheet for the unusual name of Allen R. David. A cross-reference will assist in retrieval if a request comes in for David R. Allen.'],
					'filinghint':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':['D',0],
					'crossAns':[[['Allen','David','R','','','April 2, 20--','Prices of devices and service plans','SEE David Allen R'],['A',0]]]		
						
					}, //8
			{	    
                    'name':[['ELITE, Inc.','(Ellen\'s Important Television Events, Inc.)','Corporate Headquarters','900 North Sixth Avenue','Chicago IL 60630-9000'],
					
							['4790 Vine Street','Northbrook, IL 60062-4790'],
							['8850 Lake Grove Road','Oak Park, IL 60302-8850'],
							['April 1, 20--'],
							['<img alt="Apr 4, 20--" class="markingDatenew" src="assets/images/apr_4-20.png" draggable="false"/>'],
							[''],
							['&nbsp;','&nbsp;','&nbsp;','&nbsp;'],
							['Auric Systems, Inc.','1100 W. Tell Avenue','Chicago, IL 60657-1100'],
							['Dear Sir or Madam:'],
							['You may have heard the announcement about our new cable channels that include sports, news, and movies.  The enclosed brochure describes our available packages.<p>We believe that ELITE, Inc., offers some of the best cable programming packages for home and business consumers.  We would welcome the opportunity to talk with you about our channels and how to make them available to your customers.</p>'],
							['Sincerely,','<img alt="signature: Ellen Edwards" class="markingSignatureBold" src="assets/images/ellen_edwards.png" draggable="false"/>'],
							['Ellen Edwards','President'],
							['<img alt="PJ" class="markingNamesnew2" src="assets/images/pj.png"  draggable="false"/>'],
							['ee:lh'],
							['Enclosure']
							],
			  'alignClass':['floatcenter tmidalign',
			  			    'floatParallelLeft tlefalign',
			  			    'leftRightParallel trigalign',
			  			    'letCon',
							'letCon',
							'subinput',
							'substeping',
			  			    'floatLeft tlefalign',
			  			    'letCon',
			  			    'letCon',
			  			    'letCon',
			  			    'floatLeft tlefalign',
							'floatRight marking letConEn',
							'letCon letConUP',
			  			    'letCon'
							],
	                'aslash':[[[0]],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
					'numbering':[],
					'anumbering':['0 0 0', '0 0 2'],
					'ainspect':1,
					'hintt':['This business name is an acronym (ELITE, Inc.). Prepare a cross-reference sheet for the full name of the business.'],
					'filinghint':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':['E',1],
					'crossAns':[[['Ellens','Important','Television','Events','Inc','April 1, 20--','New cable channels available','SEE ELITE Inc'],['E',2]]]		
						
					}, //9
				{	    
                    'name':[['COPY'],
					       ['<img alt="Auric Systems, Inc." class="auriclogo" src="assets/images/auric_logo.png" draggable="false"/>'],
					        ['1100 W. Tell Avenue, Chicago, IL 60657-1100', 'Phone: 312-555-0100','Fax: 312-555-0102'],
							['March 16, 20-'],
							[''],
							[''],
							['&nbsp;','&nbsp;','&nbsp;','&nbsp;'],
							['Miss Cynthia Clark, Secretary','Above & Beyond Insurance Co.','965 N. Grove Street, Suite 201','Chicago, IL 60628-0965'],
							['Dear Miss Clark,'],
							['Thank you for your interest in our services.  The price lists for our Internet services that you requested in your letter of March 10 are enclosed.<p>We have an extensive list of satisfied customers who use our Internet access.  Our transmission speeds and secure lines help our customers grow their e-businesses.</p><p>Please call me at 312.555.0100 with any questions you might have.  We hope to hear from you and will be glad to process your order immediately.</p>'],
							['Sincerely yours,'],
							['AURIC SYSTEMS, INC.'],
							['<img alt="signature: Pat Johnson" class="markingSignature" src="assets/images/pat.png" draggable="false"/>'],
							['Ms. Pat Johnson, Vice President','Broadband Communications'],
							['PJ:js'],
							['Enclosures'],
							],
			  'alignClass':['background bg-text',
			  			    'letCon',
							'floatLeftauric tlefalign noCode6',
			  			    'letCon',
							'letConSpace',
							'subinput',
							'substeping',
			  			    'floatLeft tlefalign',
			  			    'letCon',
			  			    'letCon',
			  			    'letCon',
							'floatLeft tlefalign',
							'letCon1',
			  			    'floatLeft tlefalign',
							'letCon',
			  			    'letCon'
							],
                    'aslash':[[],[],[[],[0],[0]],[],[],[],[],[[],[0,1,2,3]],[],[],[],[],[],[]],
					'numbering':[],
					'anumbering':['7 1 0', '7 1 2','7 1 4','7 1 6','7 1 8'],
					'ainspect':2,
					'hintt':['This outgoing letter is in response to record #6.'],
					'filinghint':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':['ABOVE AND BEYOND INSURANCE CO',1]
					//'crossUnit':[["aaa"], ["aaa"], ["ccccc"], ["dddd"], []]		
						
					}, //10
			{	    
                    'name':[['Ms. Tara Brownstein','3202 Cloud Springs Road','Chicago, IL 60628-3202'],
							[],
							['April 12, 20--'],
							[],
							[''],
							['&nbsp;','&nbsp;','&nbsp;','&nbsp;'],
							['<img alt="Apr 15, 20--" class="markingDatenew Datenew" src="assets/images/apr_15-20.png" draggable="false"/>'],
							
							['Auric Systems, Inc.','1100 W. Tell Avenue','Chicago, IL 60657-1100'],
							['Ladies and Gentlemen:'],
							['Please send me the necessary information so that I can order an Auric Systems 3G or 4G cell phone.  If you have pictures of the various models, I would like to have them, also.  Any brochures describing the available plans would help me make up my mind on what to order.'],
							['Sincerely yours,','<img alt="signature: Tara Brownstein" class="markingSignature SignatureLeft1" src="assets/images/tara_brownstein.png" draggable="false"/>'],
							['Tara Brownstein'],
							['<img alt="FL-A 4-15" class="markingNamesnew" src="assets/images/fla_4-15.png" draggable="false"/>']
							
							],
			  'alignClass':[
			  			    'floatcenter  tmidalign',
							'letConSpace',
			  			    'letCon2',
							'letConSpace',
							'subinput',
							'substeping',
							'markingDateParallel trigalign marking',
			  			    'floatLeft tlefalign',
			  			    'letCon',
			  			    'letCon',
			  			    'letCon2',
			  			    'floatRight2 tmidalign',
							'letConGN'
			  			    
							],
				    'aslash':[[[0,1]],[],[],[],[],[],[],[],[],[],[]],
					'numbering':[],
					'anumbering':['0 0 4', '0 0 2','0 0 0'],
					'ainspect':1,
					'hintt':[],
					'filinghint':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':['B',2],
					//'crossUnit':[["aaa"], ["aaa"], ["ccccc"], ["dddd"], []]	
						
					}, //11
				{	    
                    'name':[['COPY'],
					        ['<img alt="Auric Systems, Inc." class="auriclogo" src="assets/images/auric_logo.png" draggable="false"/>'],
					        ['1100 W. Tell Avenue, Chicago, IL 60657-1100', 'Phone: 312-555-0100','Fax: 312-555-0102'],
							['March 5, 20--'],
							[''],
							[''],
							['&nbsp;','&nbsp;','&nbsp;','&nbsp;'],
							['Mr. Kou Chung','Public Relations','The Crystal Net, Inc.','6100 N. Roslyn Avenue','Northbrook, IL 60062-6100'],
							['Dear Mr. Chung:'],
							['Thank you for suggesting a meeting with Mr. Bob Baker.  I will be happy to meet with him on March 15 at 10 a.m. here at my office.<p>I look forward to learning more about the options for Web hosting your company offers.</p>'],
							['Sincerely yours,'],
							['AURIC SYSTEMS, INC.'],
							['<img alt="signature: Pat Johnson" class="markingSignature" src="assets/images/pat.png" draggable="false"/>'],
							['Ms. Pat Johnson, Vice President','Broadband Communications'],
							['PJ:js'],
							[''],
							['Fax Cover Note','To: Mr. Kou Chung','The Crystal Net, Inc. North','Northbrook, IL 60062-6100','Fax: 847-555-0279','From: Pat Johnson','Auric Systems, Inc.','Fax: 312.555.0102 1 Page(s)'],
							[]
							],
			  'alignClass':['background bg-text',
			  			    'letCon',
							'floatLeftauric tlefalign noCode7',
			  			    'letCon',
							'letConSpace',
							'subinput',
							'substeping Card15',
			  			    'floatLeft tlefalign',
			  			    'letCon',
			  			    'letCon',
							'letCon',
							'floatLeft tlefalign',
							'letCon1',
							'floatLeft tlefalign',
							'letCon',
							'letCon',
			  			    'floatRightFax tlefalign3 lineHeight toBold',
							'letCon',
							],
					'aslash':[[],[],[[],[0],[0]],[],[],[],[],[[],[],[0,1,2]],[],[],[],[],[],[],[],[],[[],[0],[],[],[0],[0]],[]],
					'numbering':[],
					'anumbering':['7 2 2', '7 2 4','7 2 6','7 2 0'],
					'ainspect':2,
					'hintt':['This outgoing letter, a fax, is in response to record #2.'],
					'filinghint':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':['C',3]
					//'crossUnit':[["aaa"], ["aaa"], ["ccccc"], ["dddd"], []]	
						
					}, //12
		{	    
                    'name':[['Chicago Simulcast, Inc.','1980 S. Grand Avenue','Chicago, IL 60630-1980'],
							['Phone: 312-555-0199'],
							['Fax: 312-555-0198'],
							['April 6, 20--<img alt="Apr 9, 20--" class="markingDatenew" src="assets/images/apr_9-20.png" draggable="false"/>'],
							[''],
							[''],
							['&nbsp;','&nbsp;','&nbsp;','&nbsp;'],
							['Auric Systems, Inc.','1100 W. Tell Avenue','Chicago, IL 60657-1100'],
							['Ladies or Gentlemen:'],
							['Please give me programming details about the "Great Masters" show that is broadcast on Sunday afternoons at 3 p.m.  I\'m quite interested in obtaining simulcast rights to this show for use on our Internet Neighborhood community.<p>Thanks for your help in this matter.</p>'],
							['Sincerely,','<img alt="signature: Lynda Castleton" class="markingSignature" src="assets/images/lynda_castleton.png" draggable="false"/>'],
							['Lynda Castleton'],
							['<img alt="FL-C 4-9" class="markingNamesnew" style="width:21%;" src="assets/images/flc_4-9.png" draggable="false"/>'],
							['lc:jr'],
							],
			  'alignClass':['floatcenter tmidalign italic',
			  			    'floatParallelLeft tlefalign italic noCode8',
			  			    'leftRightParallel trigalign italic noCode9',
			  			    'letCon',
							'letConSpace',
							'subinput',
							'substeping',
			  			    'floatLeft tlefalign',
			  			    'letCon',

			  			    'letCon',
			  			    'letCon',
			  			    'floatLeft tlefalign',
							'floatRight marking',
							'letCon'
			
							],
					'aslash':[[[0,1]],[[0]],[[0]],[],[],[],[],[],[],[],[],[],[]],
					'numbering':[],
					'anumbering':['0 0 0','0 0 2','0 0 4'],
				   'ainspect':1,
					'hintt':[],
					'filinghint':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':['C',2]
					//'crossUnit':[["aaa"], ["aaa"], ["ccccc"], ["dddd"], []]	
						
					}, //13
			{	    
                    'name':[['<img alt="Logo:Above & Beyond Insurance Co." class="cbs_logo" src="assets/images/above_logo.png"  draggable="false"/>'],
							['Above & Beyond Insurance Co.','Aleta Allison, Owner','965 N. Grove Street, Suite 201','Chicago, IL 60628-0965','312-555-0275'],
							['March 27, 20--<img alt="Mar 30, 20--" class="markingDatenew1" style="width:16%;" src="assets/images/mar_30-20.png" draggable="false"/>'],
							[''],
							['&nbsp;','&nbsp;','&nbsp;','&nbsp;'],
							['Ms. Pat Johnson, Vice President','Broadband Communications','Auric Systems, Inc.','1100 W. Tell Avenue','Chicago, IL 60657-1100'],
							['Dear Ms. Johnson:'],
							['Thank you very much for the information in your March 16 letter and the price lists for your Internet services.<p>Enclosed are Ms. Allison\'s order and check to cover the cost of the first consulting visit.  Ms. Allison would like to meet with you at your office on April 2 at 10 a.m.  Please confirm this date as soon as possible.</p>'],
							['Sincerely yours,','<img alt="signature: Cynthia Clark" class="markingSignature" src="assets/images/cynthia_clark.png" draggable="false"/>'],
							['Miss Cynthia Clark','Secretary to Ms. Aleta Allison',''],
							['Enclosures'],
							],
			  'alignClass':['floatcenterImage3',
							'floatcenter tmidalign',
			  			    'letCon',
							'subinput',
						    'substeping',
			  			    'floatLeftAbove tlefalign',
			  			    'letCon',
			  			    'letCon',
			  			    'letCon',
			  			    'floatLeft tlefalign',
						    'letCon letConUP'
							],
					'aslash':[[],[[0,1,2,3]],[],[],[],[],[],[],[],[],[]],
					'numbering':[],
					'anumbering':['1 0 0', '1 0 2','1 0 4','1 0 6','1 0 8'],
				    'ainspect':0,
					'hintt':['This incoming letter is in response to record #11.'],
					'filinghint':['Note that this is the third piece of correspondence for Above & Beyond Insurance Co. Create a new folder named ABOVE AND BEYOND INSURANCE CO and file it in correct alphabetic order with the other folders in the file drawer. Drag the three records for Above & Beyond Insurance Co. into this folder, and sort them in order by date, with the newest in front.'],
					
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':['ABOVE AND BEYOND INSURANCE CO',0]
					//'crossUnit':[["aaa"], ["aaa"], ["ccccc"], ["dddd"], []]	
						
					}, //14 */
					
					];	
					
					//ainspect 1 = YES, 0 - NO, 2 - N/A	
totinspectscore = dataRecd.length;
for(var i=0;i<dataRecd.length; i++)
{
	dataRecd[i].subinputval = ["","","",""]; //"card "+(i+1);
	dataRecd[i].chcard =[];
	dataRecd[i].inspect = -1;
	dataRecd[i].subjectinput = ['','','',''];
	
	if(i == 4)
	dataRecd[i].subjectinput = ['Applications','CSR','',''];

	//dataRecd[i].ainspect = 1; 
	
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
			//dataRecd[i].numbering=[];
			dataRecd[i].hintv=0;
		if(dataRecd[i].alignClass[j] != 'letCon')
		{
		for(var k = 0; k<dataRecd[i].name[j].length; k++)
		{
			dataRecd[i].space[j][k] = [];
			dataRecd[i].slash[j][k] =[];
			//dataRecd[i].numbering[k]=[];
			dataRecd[i].hintv=0;
			var str = dataRecd[i].name[j][k];
			//console.log(str)
			var index = 0;
			str = str.replace(/\s/g, '^');
			while ((index = str.indexOf('^', index + 1)) > 0) {
				dataRecd[i].space[j][k].push(index)
			}
			while ((index = str.indexOf('-', index + 1)) > 0) {
				dataRecd[i].space[j][k].push(index);
			}
			dataRecd[i].space[j][k].sort(function(a, b){return a-b});
		}
		}
	}
}
/* 
dataRecd[5].subjectinput = ['Applications','CSR','',''];

dataRecd[1].subjectinput = ['International','Computing','Center',''];
	
  	dataRecd[4].subjectinput = ['Invoices','1','Way','Direct'];
	
	dataRecd[6].subjectinput = ['Invoices','2001','Systems','Inc'];
	
    dataRecd[9].subjectinput = ['International','Computing','Center',''];
	
    dataRecd[11].subjectinput = ['Invoices','21st','Century','Networks'];
	
    dataRecd[14].subjectinput = ['Invoices','ACosta','ULess',''];


for(var i=0;i<dataRecd.length; i++)
{
	dataRecd[i].slash = dataRecd[i].aslash.slice();
	dataRecd[i].numbering = dataRecd[i].anumbering.slice();
	dataRecd[i].folderinfo = [14,i]
}	
*/ 
/**/

dataRecd[1].slash[15] =[[0,1],[0],[],[0],[0],[],[0]];
dataRecd[1].slash[1] =[[],[],[],[],[0]];
dataRecd[1].slash[2] =[[],[],[],[],[0]];
dataRecd[3].slash[11] =[[0,1],[0],[0],[0],[0]];
dataRecd[6].slash[2] =[[],[],[0]];
dataRecd[7].slash[0] =[[],[],[],[],[],[0]];
dataRecd[7].slash[1] =[[],[],[],[],[],[0]];
dataRecd[10].slash[2] =[[],[0],[0]];
dataRecd[12].slash[2] =[[],[0],[0]];
dataRecd[12].slash[16] =[[0,1],[0],[],[],[0],[0],[],[0]];
dataRecd[13].slash[1] =[[0]];
dataRecd[13].slash[2] =[[0]];


 // No - 0, Yes - 1, N/A - 2
var inspectNotCheck = ["This record is missing its required release mark. You did not indicate this record\'s release mark status.",
						"This record has a release mark. You did not indicate this record\'s release mark status.",
						"This record does not need a release mark. You did not indicate this record\'s release mark status."];
						
var inspectCorrectArr = ['You correctly indicated that this record is missing its required release mark. ', // No
						 'You correctly indicated that this record has a release mark. ', // Yes
						 'You correctly indicated that this record does not need a release mark. ']; // N/A

var ainspectwrongArr = ['This record is missing its required release mark. ', // NO
						'This record has a release mark. ', // YES
						'This record does not need a release mark. '] //NA
var inspectwrongArr = [' You indicated that this record is missing its required release mark. ', // NO
						' You indicated that this record has a release mark. ', // YES
						' You indicated that this record does not need a release mark. '] //NA

//y n na
/*Feedback for correct response:
You correctly indicated that this record [has a release mark/is missing its required release mark/does not need a release mark].

Feedback for incorrect response:
This record [has a release mark/is missing its required release mark/does not need a release mark].
 You indicated that this record [has a release mark/is missing its required release mark/does not need a release mark].

Feedback if the student did not perform the Inspect step:
This record [has a release mark/is missing its required release mark/does not need a release mark]. You did not indicate this record’s release mark status.*/
		

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
		'discription': '<h2>Alphabetic Indexing Rules</h2><p style="margin-top:-11px; margin-bottom:0px;">Rule 10: Government Names</p><p style="margin-top:8px; margin-bottom:0px;">A. Local and Regional Government Names</p><div class="innerruleContent scrollBar"><p class="discriptioncontent" >The first indexing unit is the name of the county, parish, city, town, township, or village. <i>Charlotte Sanitation Department</i> is an example. <i>Charlotte</i> (a city) would be the first indexing unit. Next, index the most distinctive name of the department, board, bureau, office, or government/political division. In this case, <i>Sanitation</i> would be the most distinctive name of the department. The words <i>County of, City of, Department of,</i> etc., are added for clarity and are considered separate indexing units. If <i>of</i> is not a part of the official name as written, it is not added as an indexing unit. Five examples follow.</p><div id="iosscrollbar" class="mcs-horizontal mcs-horizontal-height1" ><table class="tableBorder" ><tbody style="border: 1px solid #5d2f18;"><tr><td  style="border-bottom:1px solid #5d2f18;    width: 30%;">Filing Segment</td><td  style="border-bottom:1px solid #5d2f18;   text-align:center; width: 30%;" colspan=5 >Indexing Order of Units</td></td></tr><tr><td style=" width: 30%;"><b>Name</b></td><td style="width: 10%;"><b>Key Unit</b></td><td style=" width: 10%;"><b>Unit 2</b></td><td style="width: 10%;"><b>Unit 3</b></td><td style=" width: 10%;"><b>Unit 4</b></td><td style=" width: 10%;"><b>Unit 5</b></td></tr><tr><td style="width: 30%;">1. County of Alameda Aquatic Center</td><td style="width: 10%;">Alameda</td><td style=" width: 10%;">County</td><td style="width: 10%;">of</td><td style=" width: 10%;">Aquatic</td><td style=" width: 10%;">Center</td></tr><tr><td style="width: 30%;">2. City of Arlington Public Library</td><td style="width: 10%;">A<u>r</u>lington</td><td style=" width: 10%;">City</td><td style="width: 10%;">of</td><td style=" width: 10%;">Public</td><td style=" width: 10%;">Library</td></tr><tr><td style="width: 30%;">3. City of Arlington Senior Center</td><td style="width: 10%;">Arlington</td><td style=" width: 10%;">City</td><td style="width: 10%;">of</td><td style=" width: 10%;"><u>S</u>enior</td><td style=" width: 10%;">Center</td></tr><tr><td style="width: 30%;">4. Ashley County Department of Elections</td><td style="width: 10%;">A<u>s</u>hley</td><td style=" width: 10%;">County</td><td style="width: 10%;">Elections</td><td style=" width: 10%;">Department</td><td style=" width: 10%;">of</td></tr><tr><td style="width: 30%;">5. Augusta City Water Works</td><td style="width: 10%;">A<u>u</u>gusta</td><td style=" width: 10%;">City</td><td style="width: 10%;">Water</td><td style=" width: 10%;">Works</td><td style=" width: 10%;"></td></tr></tbody></table></div></div>'
	},
	{
		'title':'rule10C',
		'discription': '<h2>Alphabetic Indexing Rules</h2><p style="margin-top:-11px; margin-bottom:0px;">Rule 10: Government Names</p><p style="margin-top:8px; margin-bottom:0px;">B. State Government Names</p><div class="innerruleContent scrollBar"><p class="discriptioncontent" >Similar to local and regional political/governmental agencies, the first indexing unit is the name of the state or province. Then index the most distinctive name of the department, board, bureau, office, or government/political division. The words <i>State of, Province of, Department of,</i> etc., are added for clarity and are considered separate indexing units. If <i>of</i> is not a part of the official name as written, it is not added as an indexing unit. Two examples follow.</p><div id="iosscrollbar1" class="mcs-horizontal mcs-horizontal-height2" ><table class="tableBorder"><tbody style="border: 1px solid #5d2f18;"><tr><td  style="border-bottom:1px solid #5d2f18;    width: 30%;">Filing Segment</td><td  style="border-bottom:1px solid #5d2f18;  text-align:center;  width: 70%;" colspan=5 >Indexing Order of Units</td></td></tr><tr><td style=" width: 30%;"><b>Name</b></td><td style="width: 10%;"><b>Key Unit</b></td><td style=" width: 15%;"><b>Unit 2</b></td><td style="width: 15%;"><b>Unit 3</b></td><td style=" width: 15%;"><b>Unit 4</b></td><td style=" width: 15%;"><b>Unit 5</b></td></tr><tr><td style="width: 30%;">1.Michigan Department of Education</td><td style="width: 10%;">Michigan</td><td style=" width: 10%;">Education</td><td style="width: 10%;">Department</td><td style=" width: 10%;">of</td><td style=" width: 10%;"></td></tr><tr><td style="width: 30%;">2.Michigan State Police</td><td style="width: 10%;">Michigan</td><td style=" width: 10%;"><u>S</u>tate</td><td style="width: 10%;">Police</td><td style=" width: 10%;"></td><td style=" width: 10%;"></td></tr></tbody></table></div></div>'
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
	
	var audhintSeq={"hint_0":["hint_0"],"hint_1":["hint_1"],"hint_2":["hint_2"],"hint_3":["hint_3"],"hint_4":["hint_4"],"hint_5":["hint_5"],"hint_6":["hint_6"],"hint_7":["hint_7"],"hint_8":["hint_8"],"hint_9":["hint_9"],"hint_10":["hint_10"],"hint_11":["hint_11"],"hint_12":["hint_12"],"hint_13":["hint_13"],"hint_14":["hint_14"],"filehint_0":["filehint_0"],"filehint_1":["filehint_1"],"filehint_2":["filehint_2"],"filehint_3":["filehint_3"],"filehint_4":["filehint_4"],"filehint_5":["filehint_5"],"filehint_6":["filehint_6"],"filehint_7":["filehint_7"],"filehint_8":["filehint_8"],"filehint_9":["filehint_9"],"filehint_10":["filehint_10"],"filehint_11":["filehint_11"],"filehint_12":["filehint_12"],"filehint_13":["filehint_13"],"filehint_14":["filehint_14"]}
	
var audSeq = {
            'startbtn':['intro_simulation'],
			'directionsforjobs':['directions'],
			'overview':['overviewofauric'],
			'introduction':['overviewofjob'],
			'generalinfo':['generalinfo'],
			'generalinfoSim':['generalinfo'],
			'coding':['coding'],
			'alphabeticSimulation':['intro_simulation'],
			'Code':['step1'],
			'uIdentification':['step2'],
			'uNumbering':['step2'],
			'crossreference':['crossreference'],
			'leveling': ['Leveling'],
			'Inspect':['Inspect'],
			'file':['Filing'],
			'help':['Help'],
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
			//'resultpage':['score_page']
			};
var audCcTxt = 	{
			'startbtn':['Review the 15 pieces of correspondence. Choose actions to inspect and code each letter as needed. Note that not all letters will require all actions. Once inspection and coding has been completed (including creating all necessary cross-references), click the "File" button to start filing the correspondence.'],
			'directionsforjobs':[''],
			'overview':[''],
			'introduction':[''],
			'generalinfo':['generalinfo'],
			'coding':[''],
			'alphabeticSimulation':['Review the 15 pieces of correspondence. Choose actions to inspect and code each letter as needed. Note that not all letters will require all actions. Once inspection and coding has been completed (including creating all necessary cross-references), click the "File" button to start filing the correspondence.'],
			'Code':['Code: Step 1: Separate the filing segment into units by inserting a diagonal slash (/) between the units. <br/>To remove a slash that has already been placed, click on the slash.'],
			'uIdentification':['Code: Step 2 (Units): Indicate the primary unit (key unit) by clicking on it to underline it. <br/> Then, click on the remaining units in sequence to place the correct number above each identified unit.'],
			'uNumbering':['Code: Step 2(Units): Indicate the primary unit (key unit) by clicking on it to underline it. <br/> Then, click on the remaining units in sequence to place the correct number above each identified unit.'],
			'crossreference':['Cross-reference: Determine what should be placed on the cross-reference sheet by typing in the correct information. <br/>After you have filed the cross-reference sheet(s), you will be able to file the main record.'],
			'leveling': ['Leveling: Determine the correct leveling by placing the correct level by each name.'],
			'Inspect':['Inspect: Determine whether the letter has been released for filing.'],
			'file':['']
			//'resultpage':['']
			};
			
/*var simaction = {
	'alphabeticSimulation':'Review the 15 pieces of correspondence. Choose an action and then edit each letter as needed.<br/>Note that not all letters will require all actions. Once all correspondence has been coded,<br/>click the File button to file the correspondence.',
	'Code': 'Code: Step 1: Correctly identify the code by inserting a diagonal slash (/) where appropriate.<br/>If needed, type the subject and/or additional unit(s) into the appropriate fields.',
	'uIdentification':'Code: Step 2 (Units): Indicate the primary unit (key unit) by clicking on it to underline it. Then, click on<br/>the remaining units in sequence to place the correct number above each identified unit.  Note that any<br/>units you typed in Code: Step 1 (Subject and/or Additional Unit(s)) are clickable in this step.',
	'crossreference': 'Add Cross-Reference: Fill in the cross-reference sheet with the necessary information.<br/>No more than five cross-reference sheets may be created',
	'leveling': 'Leveling: Determine the correct leveling by placing the correct level by each name.',
	'Inspect':['Inspect: Determine whether the letter has been released for filing.'],
	'file':['Review the 15 pieces of correspondence and their associated cross-references. Drag each record to the correct file. Add folders as needed. After the records have been rough-sorted into folders, fine-sort the records within each folder by clicking on each folder to open it. ']
}*/
var simaction = {
	'alphabeticSimulation':'Review the 15 pieces of correspondence. Choose actions to inspect and code each letter as needed. Note that not all letters will require all actions. Once inspection and coding has been completed (including creating all necessary cross-references), click the File button to start filing the correspondence.',
	'Code': 'Code: Step 1: Separate the filing segment into units by inserting a diagonal slash (/) between the units.</br> To remove a slash that has already been placed, click on the slash. If you need to add a subject that is </br> not already on the record, type the subject into the "Subject" box. If you need to add additional filing </br> units that are not already on the record, add each additional unit in an "Additional Unit" box.',
	'uIdentification':'Code: Step 2 (Units): Indicate the primary unit (key unit) by clicking on it to underline it. Then, click on </br> the remaining units in sequence to place the correct number above each identified unit. Note that any </br> units that you typed in Step 1 (Subject and/or additional unit(s)) are clickable units in this step.',
	'crossreference': 'Add Cross-Reference: Determine what should be placed on the cross-reference sheet by typing in the correct information.',
	'leveling': 'Leveling: Determine the correct leveling by placing the correct level by each name.',
	'Inspect':['Inspect: Determine whether the letter has been released for filing.'],
	'file':['Review the 15 pieces of correspondence and their associated cross-references. Drag each record to the correct file. Add new folders as needed by clicking on the appropriate buttons. Once all records have been filed, perform a fine sort by clicking on each folder and sorting the records within it.']
}

var simactionTitle = {
	'alphabeticSimulation':['Job 5: Correspondence Filing: Rules 1-5 (Code)'],
	'file':['Job 5: Correspondence Filing: Rules 1-5 (File)']
}