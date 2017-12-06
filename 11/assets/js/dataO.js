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
var totaccessScore=0;
// Developer skip for function
var skipstep = 1;
var crossrefvis = false;

var folderArr=[];
var tickleArr=[];

var guideName = [];
var spGuideName = [];
var maxNumofFolderandGuide = 13;
//folderandguideMax = ['ABOVE AND BEYOND INSURANCE CO','INVOICES','INTERNATIONAL COMPUTING CENTER','I','E','D','C','B','APPLICATIONS','A','99 ELECTRONIC REPAIR SHOP','NUMBERS','AA','BB','CC'];
folderandguideMax=['ABOVE AND BEYOND INSURANCE CO','I','E','D','C','B','APPLICATIONS','A','NUMBERS'];
var folderMax=[];
var guideMax=[];
var spGuideMax = [];

//var fgcurrarr = ["I","I","E","E","D","D","C","C","B","B","A","APPLICATIONS","APPLICATIONS","ABOVE AND BEYOND INSURANCE CO","ABOVE AND BEYOND INSURANCE CO","A","NUMBERS","NUMBERS",'ZZ','XX','CC','ZZ','XX','CC'];
var fgcurrarr = ["I","I","E","E","D","D","C","C","B","B","A","APPLICATIONS","APPLICATIONS","ABOVE AND BEYOND INSURANCE CO","ABOVE AND BEYOND INSURANCE CO","A","NUMBERS","NUMBERS"];


/*	// FOLDER 
	
							// CC-0 FINDING ADDED G/F/S IN FOLDER 
							// F/G/S - 1 TYPE OF THE FINDING ADDEF F/G/S
							// NUMBER -2 BEGIND THE FINDING F/G/S
							// F/G/S - 3 TYPE OF THE BEGIND F/G/S
							// 7 f - highlightfol
							// 7 g - guide
							// 7 s - guidesp */
							
var findAddedCorrectName =[['100','F','Folder',                   '100','S','Special Guide','guidesp'],
						   ['101','F','Folder',                   '100','F','Folder','highlightfol'],
						   ['102','F','Folder',                   '101','F','Folder','highlightfol'],
						   ['103','F','Folder',                   '102','F','Folder','highlightfol'],
						   ['104','F','Folder',                   '104','S','Special Guide','guidesp'],
						   ['105','F','Folder',                   '104','F','Folder','highlightfol']]
						   

		// Types F - folder, S- Special Guide, G - Guide
var foldertypeandName =[["S","100",'old'],//7    15
						["S","104",'old'],//6    14
						["G","NUMBERS",'old'],//5    13
						["F","NUMBERS",'old'],//4    12
						["G","A",'old'],	//3   11
						["F","A",'old'],//2   10
						["G","C",'old'],//1   9
						["F","C",'old']]	//0	   8	
						
						
var tickletypeandName =[["G","UNCODED CARDS",'Uncoded Cards'],
						["G","NUMBERS",'Numbers1'],
					   	["G","A",'A1'],
						["G","C",'C1'],
						["G","I",'I1']]

var accesslogAnsarr = ['Applications','Above and Beyond Insurance Co.','Crystal Net Inc The','International Computing Center','Invoices','Chicago School of the Arts'];

maxNumofFolderandGuide += foldertypeandName.length+findAddedCorrectName.length;

totalfolderScore = findAddedCorrectName.length;

totaccessScore = accesslogAnsarr.length;

var dataRecdJob=[ ];	



		


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
var notstepclass = ['letCon','subinput','marking markingNames','marking markingNamesTop','markingDateParallel trigalign marking','letCon marking','floatRight marking','marking markingNamesbtm','leftRightParallel1 tlefalign marking','background bg-text','floatRightCon tlefalign','floatrightShipTo tlefalign','letConTopsign','letCon letConmid','letCon3','floatleftIndentnew tlefalign','letConsnull','marking markingNamesRemind','letConnew','letCon1','letConPJ','letConDate','letConGN','letConTop','floatcenterImage3','letCon2','letConGN toDown','letCon letConEn','letCon4','markingDateParalleljob5 trigalign marking','floatRight marking twUp','floatRight marking troyDavis','markingImgParallel trigalign','floatcenter1 snellround','letCon snellround5','floatRight marking letConEn','leftRightRemindNew','markingImgParallel1 trigalign','floatLeft1 tlefalign margintop25px','letCon snellround','letCon3 snellround','floatRight3 tlefalign marking2 snellround','floatRightCon tlefalign times setbold1','floatRightCon1 tlefalign times','floatrightShipTo tlefalign times setbold1','floatrightShipTo1 tlefalign times','letCon3 leftcon snellround','letCon margintopminus120px'];

var uncodedCards = [
{'uncards':[['','1 Way Direct','301 E. 6th Street','Northbrook, IL 60062-0301'],['Numbers',0,"A"]],'xfolderinfo':[['4',17]],'uncodedNum':100},//0
{'uncards':[['','007 Spy Channel','(A Division of Imagine! Films, Inc.)','600 South Fourth','Los Angeles, CA 90049-0007'],['Numbers',1,"A"]],'xfolderinfo':[['4',16]],'uncodedNum':100},//1
{'uncards':[['','205 Cable Systems, Inc.','9800 S. Washington St.','Evanston, IL 60203-9800'],['Numbers',2,"A"]],'xfolderinfo':[['4',15]],'uncodedNum':100},//2
{'uncards':[['','2001 Systems, Inc.','1050 Trails End','Oak Park, IL 60302-1050'],['Numbers',3,"A"]],'xfolderinfo':[['4',14]],'uncodedNum':100},//3
{'uncards':[['','Above and Beyond Insurance Co','965 N. Grove Street, Suite 201','Chicago, IL 60628-0965'],['A',0,"A"]],'xfolderinfo':[['4',13]],'uncodedNum':100},//4

{'uncards':[['','Airwaves Extraordinary','16078 S. Airwave Drive', 'Los Angeles, CA 90049-0167'],['A',1,"A"]],'xfolderinfo':[['4',12]],'uncodedNum':100},//5

{'uncards':[['','Applications'],['A',2,"A"]],'xfolderinfo':[['4',11]],'uncodedNum':100},//6

{'uncards':[['','Carter Chris','4027 N. Boyd Avenue','Chicago, IL 60643-4027'],['C',0,"A"]],'xfolderinfo':[['4',10]],'uncodedNum':100},//7

{'uncards':[['','Centro de Computacion International','SEE International Computing Center'],['C',1,"A"]],'xfolderinfo':[['4',9]],'uncodedNum':100},//8

{'uncards':[['','Chicago Broadband Association','1925 N. 27th Avenue','Chicago, IL 60660-1925'],['C',2,"A"]],'xfolderinfo':[['4',8]],'uncodedNum':100},//9

{'uncards':[['','Chicago City of Broadband','Communications Department','Municipal Building, B-210','Chicago, IL 60637-0111'],['C',3,"A"]],'xfolderinfo':[['4',7]],'uncodedNum':100},//10

{'uncards':[['','Chicago School of the Arts','806 S. Millbrook Road','Chicago, IL 60670-0806'],['C',4,"A"]],'xfolderinfo':[['4',6]],'uncodedNum':100},//11

{'uncards':[['','Crystal Net Inc The','6100 N. Roslyn Avenue','Northbrook, IL 60062-6100'],['C',5,"A"]],'xfolderinfo':[['4',5]],'uncodedNum':100},//12

{'uncards':[['','Imagine Films Inc','SEE','007 Spy Channel'],['I',0,"A"]],'xfolderinfo':[['4',4]],'uncodedNum':100},//13

{'uncards':[['','International Computing Center','1650 Conquistadora Blvd.','Cancun, Quintana Roo','MEXICO'],['I',1,"A"]],'xfolderinfo':[['4',3]],'uncodedNum':100},//14

{'uncards':[['','Invoices'],['I',2,"A"]],'xfolderinfo':[['4',2]],'uncodedNum':100},//15

{'uncards':[['','Edwards Donna','5684 N. Cedar Hill Way','Chicago, IL 60660-5684'],[]],'xfolderinfo':[['4',1]],'uncodedNum':100},//16

{'uncards':[['','Baker Chas S Mr','300 N. Brook Glen Road','Northbrook, IL 60062-0300'],[]],'xfolderinfo':[['4',0]],'uncodedNum':100}//17

]

var dataRecd=[ 
					{	    
                    'name':[[''],
							['The Crystal Net, Inc.'],
							['North Office:','6100 N. Roslyn Avenue','Northbrook, IL 60062-6100','847.555.0278','FAX: 847.555.0279'],
							['South Office:','4125 S. Astro Dr.','Chicago, IL 60630-4125','708.555.0998','FAX: 708.555.0999'],
							['March 2, 20--'],
							['<img class="markingDatenew" src="assets/images/mar_2-20.png" draggable="false"/>'],
							[''],
						    ['&nbsp;','&nbsp;','&nbsp;','&nbsp;'],
							['Ms. Pat Johnson, Vice President','Broadband Communications','Auric Systems, Inc.','1100 W. Tell Avenue','Chicago, IL 60657-1100'],
							['Dear Ms. Johnson:'],
							['Are you looking for excellent high-speed wireless access to the Internet?  Our company offers this service.  Our agent, Mr. Bob Baker, will be in the Chicago area on March 15.  He can stop in to see you at 10 a.m.  Please confirm that date and time with me, Kou Chung, by fax of phone. <p>Don\'t miss this opportunity to learn about our various high-speed Internet access options.</p>'],
							['Cordially,','<img class="markingSignatureBold" src="assets/images/kou.png" draggable="false"/>'],
							['<img class="markingNamesnewjob5" src="assets/images/pj_3-15.png" draggable="false"/>'],
							['Mr. Kou Chung','Public Relations'],
							['KC:ss'],
							[],
							['Fax Cover Note','To: Ms. Pat Johnson','Auric Systems, Inc.','Fax: 312.555.0102','From: The Crystal Net, Inc. North', 'Northbrook, IL 60062-6100','Fax: 847.555.0279 1 Page(s)']],
			  'alignClass':['SubInputTop',
			  'floatcenterBold tmidalign',
			  			    'floatParallelLeft tlefalign',
			  			    'leftRightParallel trigalign',
			  			    'letCon',
							'letConDate',
							'subinput',
							'substeping',
			  			    'floatLeft tlefalign ',
			  			    'letCon',
			  			    'letCon',
			  			    'letCon',
							'letConPJ',
			  			    'floatLeft tlefalign margintopminus120px',
							'letCon',
							'letCon',
			  			    'floatRightFax tlefalign4 lineHeight toBold'
							],
					'checklister':[['Find the file card for Crystal Net Inc. behind the "Uncoded Cards" guide in the alphabetic card file. '],[ 'Bring it to the main task screen and code it with a "G" in the upper right corner.'],['File the card behind the C guide in your card file. '],[' Code the letter with a G in the upper right corner and file it in the C folder in your correspondence file.']],
					'aslash':[[],[[0,1,2]],[],[],[],[],[],[],[],[],[],[],[],[],[]],
					'numbering':[],
					'anumbering':['1 0 2','1 0 4','1 0 6','1 0 0'],
					'ainspect':1,
				    'hintt':[],
					'hintRus':[],
					'folderinfo':['17',8],
					'ansOrder':['102',1,"C"],
					//'ansOrder':['C',0],
					//'crossUnit':[["aaa"], ["aaa"], ["ccccc"], ["dddd"], []]	
					}, //0
				  {	    
                    'name':[[''],
							['4027 N. Boyd Avenue','Chicago, IL 60643-4027',],
					        ['March, 6 20--'],
							[''],
							[''],
							['Applications','CSR','&nbsp;','&nbsp;'],
						    //['&nbsp;','&nbsp;','&nbsp;','&nbsp;'],
							//['a','c','&nbsp;','&nbsp;'],
							['Ms. Terri Williams','Auric Systems, Inc.','1100 W. Tell Avenue','Chicago, IL 60657-1100'],
							['<img class="markingDatenew Datenew" src="assets/images/mar_8-20.png" draggable="false"/>'],
							['Dear Ms. Williams:'],
							['Your opening for a CSR (customer service representative) came to my attention through your advertisement in yesterday\'s newspaper.  Please consider me as an applicant for this part-time position.  My resume showing in detail my previous experience as an office assistant is enclosed.  I believe you will find me well qualified for this position.<p>I am a junior at the University of Chicago and can arrange my classes to fit a late afternoon working schedule, as you indicated.  You will find me reliable and trustworthy, as a check with my former employers will confirm.</p><p>May I have an opportunity to meet with you during the week of March 17-21 to discuss this position?  My home phone is 312.555.0197.</p>'],
							['Sincerely yours,','<img class="markingSignature" src="assets/images/chris_carter.png" draggable="false"/>'],
							['Chris Carter'],
							['<img class="markingNamesnewjob5" style="width:22%;" src="assets/images/flb_3-10.png"  draggable="false"/>'],
							['Enclosure'],
							['<img class="markingNamesnew1job5" src="assets/images/316.png" draggable="false"/>']],
			   'alignClass':['SubInputTop',
							 'floatLeft2job5 lineHeight',
			                 'floatLeft2job5date lineHeight nocod',
							 'letCon',
							 'subinput margintop50px',
					         'substeping testvisible1',
							 'floatLeft tlefalign margintop50px',
							 'markingDateParalleljob5 trigalign marking',
							 'letCon',
							 'letCon',
							 'letCon3',
							 'floatRight1job5 tmidalign',
							 'letConGN',
							 'letCon letConEn',
							 'letCon4'
							],
					'checklister':[['Applications correspondence is filed in an individual folder because Auric Systems, Inc. is likely to receive more correspondence about that subject. Therefore, APPLICATIONS becomes the first numbered folder in your numeric file. Find the file card prepared for Carter Chris. '],[ 'Open the Accession Log and see that 100 is the next available number to be assigned. Type "Applications" into the Accession Log next to the number 100, then type "100" into the upper right corner of the Carter Chris file card. '],['In your alphabetic card file, you will need a card for Applications, a subject. This is necessary because you may forget what number has been assigned to applications correspondence, or someone else may be looking for the applications correspondence and not know the assigned number. Therefore, an Applications card has been prepared; find it and code it 100 also.'],['Type "100" in the upper right corner of the letter. '],[' File the Applications card behind the A guide. '],[' File Carter Chris card behind the C guide in your card file. '],['Create a folder titled "100" and file it behind guide 100 as the first numbered folder in your file. '],[" File Chris Carters application letter in the new 100 folder."]],
				    'aslash':[[],[],[],[],[],[[],[]],[],[],[],[],[],[[0]],[],[]],
					'numbering':[],
					'anumbering':['5 0 0', '5 1 0', '11 0 2', '11 0 0'],
					'ainspect':1,
					'hintt':[],
					'hintRus':[],
					'folderinfo':['22',0],
					'ansOrder':['100',0,"C"],
					
					//'crossUnit':[["aaa"], ["aaa"], ["ccccc"], ["dddd"], []]	
						
					}, //1
				/*	{	    
                    'name':[[''],
							['<img class="cbs_logo" src="assets/images/above_logo.png"  draggable="false"/>'],
						    ['Above & Beyond Insurance Co.','Aleta Allison, Owner','965 N. Grove Street, Suite 201','Chicago, IL 60628-0965','312-555-0275'],
							['March 10, 20--<img class="markingDatenew1" style="width:17%" src="assets/images/mar_13-20.png" draggable="false"/>'],
							[''],
						    ['&nbsp;','&nbsp;','&nbsp;','&nbsp;'],
							['Auric Systems, Inc.','1100 W. Tell Avenue','Chicago, IL 60657-1100'],
							['Ladies or Gentlemen:'],
							['Our company would like to consider using your services in establishing a Web presence.  Please send me prices for the high-speed Internet services you have available and include the different options that would be appropriate for an insurance office. <p>Please send this information as soon as possible to the address on this letterhead.</p>'],
							['Sincerely yours,','<img class="markingSignature" src="assets/images/cynthia_clark.png" draggable="false"/>'],
							['Miss Cynthia Clark','Secretary to Ms. Aleta Allison'],['<img class="markingNamesnewAbove" src="assets/images/gn.png"  draggable="false"/>']],
			   'alignClass':['SubInputTop',
							 'floatcenterImage3',
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
					'checklister':[['Find the file card for Above and Beyond Insurance Co. '],[ 'Code it with a G and file the card in the A section of your card file. '],[' Code the letter with a G and file it in the A folder of your correspondence file.']],
                    'aslash':[[],[],[[0,1,2,3]],[],[],[],[],[],[],[],[],[]],
					'numbering':[],
					'anumbering':['2 0 0', '2 0 2','2 0 4','2 0 6','2 0 8'],
					'ainspect':1,
					'hintt':[],
					'hintRus':[],
					'folderinfo':['24',2],
					'ansOrder':['101',0,"C"]
					//'crossUnit':[["aaa"], ["aaa"], ["ccccc"], ["dddd"], []]	
						
					}, //2
					{	    
                    'name':[[''],
							['COPY'],
					        ['<img class="auriclogo" src="assets/images/auric_logo.png" draggable="false"/>'],
					        ['1100 W. Tell Avenue, Chicago, IL 60657-1100', 'Phone: 312-555-0100 Fax: 312-555-0102'],
							['March 16, 20-'],
							[''],
							[''],
							['&nbsp;','&nbsp;','&nbsp;','&nbsp;'],
							['Miss Cynthia Clark, Secretary','Above & Beyond Insurance Co.','965 N. Grove Street, Suite 201','Chicago, IL 60628-0965'],
							['Dear Miss Clark,'],
							['Thank you for your interest in our services.  The price lists for our Internet services that you requested in your letter of March 10 are enclosed.<p>We have an extensive list of satisfied customers who use our Internet access.  Our transmission speeds and secure lines help our customers grow their e-businesses.</p><p>Please call me at 312.555.0100 with any questions you might have.  We hope to hear from you and will be glad to process your order immediately.</p>'],
							['Sincerely yours,'],
							['AURIC SYSTEMS, INC.'],
							['<img class="markingSignature" src="assets/images/pat.png" draggable="false"/>'],
							['Ms. Pat Johnson, Vice President','Broadband Communications'],
							['PJ:js'],
							['Enclosures'],
							],
			  'alignClass':['SubInputTop',
							'background bg-text',
			  			    'letCon',
							'floatLeftauric  tlefalign',
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
					'checklister':[[' Reference to the card file shows that a card has already been prepared for Above & Beyond Insurance Co. Therefore, an individual folder should be opened now because you have a second piece of conrrespondence with the same name and address as the first one. '],[ 'Refer to your Accession Log to see that 101 is the next number available for assignment. Type "Above and Beyond Insurance Co" into the Accession Log next to the number 101.'],['Change G to 101 on the file card. '],['Refile the card in correct alphabetic order.'],[' Type "101" in the upper right corner of the letter.'],[' Create a folder titled "101" and file it behind folder 100. '],[' Retrieve the previous Above & Beyond Insurance Co. letter from the A folder in the correspondence file; change the G on it to 101. File both Above & Beyond letters in the new 101 folder with the more recently dated letter in front.']],
                    'aslash':[[],[],[],[],[],[],[],[],[[],[0,1,2,3]],[],[],[],[],[],[]],
					'numbering':[],
					'anumbering':['8 1 0', '8 1 2','8 1 4','8 1 6','8 1 8'],
					'ainspect':2,
					'hintt':[],
					'hintRus':[],
					'folderinfo':['24',1],
					'ansOrder':['101',1,"C"]
					//'crossUnit':[["aaa"], ["aaa"], ["ccccc"], ["dddd"], []]	
						
					}, //3
					{	    
                    'name':[[''],
							['COPY'],
					        ['<img class="auriclogo" src="assets/images/auric_logo.png" draggable="false"/>'],
					        ['1100 W. Tell Avenue, Chicago, IL 60657-1100', 'Phone: 312-555-0100 Fax: 312-555-0102'],
							['March 5, 20--'],
							[''],
							[''],
							['&nbsp;','&nbsp;','&nbsp;','&nbsp;'],
							['Mr. Kou Chung','Public Relations','The Crystal Net, Inc.','6100 N. Roslyn Avenue','Northbrook, IL 60062-6100'],
							['Dear Mr. Chung:'],
							['Thank you for suggesting a meeting with Mr. Bob Baker.  I will be happy to meet with him on March 15 at 10 a.m. here at my office.<p>I look forward to learning more about the options for Web hosting your company offers.</p>'],
							['Sincerely yours,'],
							['AURIC SYSTEMS, INC.'],
							['<img class="markingSignature" src="assets/images/pat.png" draggable="false"/>'],
							['Ms. Pat Johnson, Vice President','Broadband Communications'],
							['PJ:js'],
							[''],
							['Fax Cover Note','To: Mr. Kou Chung','The Crystal Net, Inc. North','Northbrook, IL 60062-6100','Fax: 847-555-0279','From: Pat Johnson','Auric Systems, Inc.','Fax: 312.555.0102 1 Page(s)']
							],
			  'alignClass':['SubInputTop',
							'background bg-text',
			  			    'letCon',
							'floatLeftauric tlefalign',
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
			  			    'floatRightFax tlefalign3 lineHeight toBold'
							],
					'checklister':[['Reference to the card file shows this to be the second letter to or from The Crystal Net, Inc. Refer to your Accession Log for the next number to assign. Write "Crystal Net Inc The" beside 102 on the log.'],['Change G to 102 on the file card for Crystal Net Inc The and refile the card. '],[ ' Create a new 102 folder and file it behind the 101 folder. '],[' Code the letter with 102. '],['  Retrieve the previous letter from The Crystal Net, Inc. from the C folder in the correspondence file; change the G on it to 102. '],['File both letters in the new 102 folder with the more recent date in front.']],
					'aslash':[[],[],[],[],[],[],[],[],[[],[],[0,1,2]],[],[],[],[],[],[],[],[],[],[]],
					'numbering':[],
					'anumbering':['8 2 2', '8 2 4','8 2 6','8 2 0'],
					'ainspect':2,
					'hintt':[],
					'hintRus':[],
					'folderinfo':['17',7],
					'ansOrder':['102',0,"C"]
					//'crossUnit':[["aaa"], ["aaa"], ["ccccc"], ["dddd"], []]	
						
					}, //4
					{	    
                    'name':[[''],
							['<img class="cbs_logo" src="assets/images/above_logo.png"  draggable="false"/>'],
							['Above & Beyond Insurance Co.','Aleta Allison, Owner','965 N. Grove Street, Suite 201','Chicago, IL 60628-0965','312-555-0275'],
							['March 27, 20--<img class="markingDatenew1" style="width:16%;" src="assets/images/mar_30-20.png" draggable="false"/>'],
							[''],
							['&nbsp;','&nbsp;','&nbsp;','&nbsp;'],
							['Ms. Pat Johnson, Vice President','Broadband Communications','Auric Systems, Inc.','1100 W. Tell Avenue','Chicago, IL 60657-1100'],
							['Dear Ms. Johnson:'],
							['Thank you very much for the information in your March 16 letter and the price lists for your Internet services.<p>Enclosed are Ms. Allison\'s order and check to cover the cost of the first consulting visit.  Ms. Allison would like to meet with you at your office on April 2 at 10 a.m.  Please confirm this date as soon as possible.</p>'],
							['Sincerely yours,','<img class="markingSignature" src="assets/images/cynthia_clark.png" draggable="false"/>'],
							['Miss Cynthia Clark','Secretary to Ms. Aleta Allison',''],
							['Enclosures'],
							],
			  'alignClass':['SubInputTop',
							'floatcenterImage3',
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
					'checklister':[['This piece is another letter concerning Above & Beyond Insurance Co. Check the card file to see what number has been assigned to Above & Beyond Insurance Co. '],['Code the letter with 101 and place the letter in the 101 folder, with the most recent date in front.']],
					'aslash':[[],[],[[0,1,2,3]],[],[],[],[],[],[],[],[],[]],
					'numbering':[],
					'anumbering':['2 0 0', '2 0 2','2 0 4','2 0 6','2 0 8'],
				    'ainspect':0,
					'hintt':[],
					'hintRus':[],
					'folderinfo':['24',0],
					'ansOrder':['101',2,"C"]
					//'crossUnit':[["aaa"], ["aaa"], ["ccccc"], ["dddd"], []]	
						
					}, //5
					
					{	    
                   'name':[[''],
							['Centro de Computacion International','1650 Conquistadora Blvd.','Cancun, Quintana Roo','MEXICO'],
							['March 27, 20--'],
							['<img class="markingDatenew" src="assets/images/apr_1-20.png" draggable="false"/>'],
							[''],
						   // ['International','Computing','Center','&nbsp;'],
						    ['&nbsp;','International','Computing','Center'],
							['&nbsp;','&nbsp;','Ms. Terri Williams, President','Auric Systems, Inc.','1100 W. Tell Avenue','Chicago, IL 60657-1100'],
							
							['Dear Ms. Williams:'],
							['Our company is in the process of becoming a broadband distributor for the state of Quintana Roo in Mexico. We are planning visits to several successful broadband businesses in the United States. We have been impressed with the annual financial statements and the general economic health of Auric Systems, Inc., and would like to include your company in our visits. <p>We plan to be in Illinois from April 10 to April 15. We would like to visit with you on April 14 at 9 a.m. Please let us know if this is convenient for you. We hope you will help us in getting started in the broadband business. </p>'],
							['Cordially yours,','&nbsp;'],
							['CENTRO DE COMPUTACION INTERNATIONAL'],
							['<img class="markingSignature" src="assets/images/roberto_suarez.png" draggable="false"/>'],
							['<img class="marginlefttopjob6" src="assets/images/open_tw.png" draggable="false"/>'],
							['Roberto Suarez','President','&nbsp;'],
							['RS:In'],
							[]],
			  'alignClass':['SubInputTop',
							'floatcenter16px',
			  			    'letCon',
							'letCon',
							'subinput',
							'substeping testvisible1',
			  			    'floatLeft tlefalign margintopminus25px',
			  			    'letCon',
			  			    'letCon',
			  			    'letCon',
			  			    'floatLeft2 tlefalign',
							'letConTopsign',
							'leftRightRemindNew',
			  			    'floatLeft tlefalign',
							'letCon',
							'letCon'
							],
					'checklister':[['This piece bears a handwritten note to open an individual folder. Refer to the Accession Log for the next number to assign. Type "International Computing Center" next to 103 on the log'],[' Then type 103 into the file card for International Computing Center. '],['Since there is also a cross-reference file card, find it (Centro de Computacion International) and code it with a 103.'],['File the original card in the "I" section and the cross-reference card in the "C" section of your card file.'],['Code the letter with 103. '],['Create a 103 folder and file it behind the 102 folder. '],[' File the letter in the new 103 folder.']],
					'aslash':[[],[],[],[],[],[[],[],[],[]],[],[],[],[],[],[],[],[],[]],
					'numbering':[],
					'anumbering':['5 1 0','5 2 0','5 3 0'],
					'ainspect':1,
					'hintt':['The English translation of this foreign name is <i>International Computing Center</i>. Type the English translation into the unit fields at the top right of the letter. A cross-reference should be prepared for the original spelling. Follow the instructions on the letter to open an individual folder, and file the folder alphabetically.'],
					'hintRus':[],
					'folderinfo':['11',1],
					'xfolderinfo':[['17',1]],
					'ansOrder':['103',2,"C"]					
						
					}, //6
					
						{	    
                    'name':[[''],
							['Chicago School of the Arts','806 S. Millbrook Road','Chicago, IL 60670-0806'],
						    ['<img class="chicago_art_logo" src="assets/images/chicago_art_logo.png" draggable="false"/>'],
							['March 18, 20--<img class="markingDatenew" src="assets/images/mar_20-20.png" draggable="false"/>'],
							[''],
						    ['&nbsp;','&nbsp;','&nbsp;','&nbsp;'],
							['&nbsp;','&nbsp;','&nbsp;','Auric Systems, Inc.','1100 W. Tell Avenue','Chicago, IL 60657-1100'],
							
							['Ladies and Gentlemen:'],
							['<p>Please send me information about the options you have available for high-speed Internet access through cable. I am exploring the options available from various providers for Internet cable use at our school.</p> <p>Also, do educational institutions receive a discount of any kind from your company? What is the maximum number of connections allowed with each option?</p><p>I need to report back to our board of directors by April 15; your prompt response would be appreciated.</p>'],
							['Sincerely yours,','<img class="markingSignature" src="assets/images/charles.png" draggable="false"/>'],
							['Dean Charles Ingersol'],
							['CI:In']],
			  'alignClass':['SubInputTop',
							'floatRight1job6 tlefalign',
							'markingImgParallel1 trigalign',
			  			    'letCon',
							'subinput',
							'substeping Card4',
			  			    'floatLeft tlefalign margintopminus50px',
			  			    'letCon',
			  			    'letCon',
			  			    'letCon',
							'floatLeft tlefalign',
							'letCon'
							],
					'checklister':[[' Find the card for Chicago School of the Arts. '],[ ' Code the card with a G and file it in the "C" section of the card file. '],['Code the letter with a G and file it in the "C" folder of the correspondence file']],
					'aslash':[[],[[0,1,2,3]],[],[],[],[],[],[],[],[],[]],
					'numbering':[],
					'anumbering':['1 0 0','1 0 2','1 0 4','1 0 6','1 0 8'],
					'ainspect':0,
					'hintt':[''],
					'hintRus':[],
					'folderinfo':['17',4],
					'ansOrder':['105',1,"C"],
					//'ansOrder':['C',0],
					
					//'crossUnit':[["aaa"], ["aaa"], ["ccccc"], ["dddd"], []]	
						
					}, //7
					{	    
						'name':[[''],
								['Auric Systems, Inc'],
							['1100 W. Tell Avenue','Chicago, IL 60657-1100'],
							['Invoice','&nbsp;','&nbsp;','&nbsp;'],
							[''],
							['312-555-0100'],
							['FAX: 312-555-0102'],
							['&nbsp;&nbsp;&nbsp;&nbsp;Invoice No:'],
							['01938'],
							['&nbsp;&nbsp;&nbsp;&nbsp;Date:'],
							['03/15/--'],
							[''],
							[''],
							['To:'],
							['1 Way Direct','301 E. 6th Street','Northbrook, IL 60062-0301'],
							[''],
						    ['Invoices','&nbsp;','&nbsp;','&nbsp;'],
							['Ship To:'],
							['Same'],
							['<table style="width: 100%;" cellspacing="0" cellpadding="0"  class="transactionDetails"><tr> <th >Salesperson</th><th >P.O. Number</th><th >Date Shipped</th><th >Shipped Via</th><th>Terms</th></tr><tr> <td>Glen</td><td>1-3452</td><td>03/15/--</td><td >UPS Ground</td><td>2/10, n/30</td></tr></table>'],
							[''],
							['<table style="width: 100%;" cellspacing="0" cellpadding="0" class="quantityDetails"><tr > <th >Quantity</th><th >Description</th><th >Unit Price</th><th >Amount</th></tr> <tr ><td>10  </td><td>Model 8D Phone</td><td>$99.99</td><td style="text-indent:10px;">$999.90</td></tr><tr ><td>10 </td><td>Model 7D Phone</td><td style="text-indent:10px;">79.99</td><td style="text-indent:20px;">799.90</td></tr><tr  ><td></td><td></td><td>SUBTOTAL</td><td style="border-bottom: medium none;" >$1,799.80</td></tr><tr><td></td><td></td><td >SHIPPING AND HANDLING</td><td style="text-indent:30px;">45.00</td></tr><tr ><td></td><td></td><td>	TOTAL DUE</td><td>$1,844.80</td></tr></table>'],
							['Make all checks payable to: Auric Systems, Inc.'],
							['If you have any questions concerning this invoice, call Glen Norris at 312-555-0100.'],
							['Thank you for your business!'],
							],
			  'alignClass':['SubInputTop',
							'floatLeftInvoice tlefalign setbold times fontsize',
							'floatLeft tlefalign setbold times',
			  			    'leftRightParallel zoomWord',
							'letCon',
							'floatLeftFaxAbove tlefalign setbold times',
							'floatLeftFax1 tlefalign setbold times',
			  			    'floatRightCon tlefalign times setbold1',
							'floatRightCon1 tlefalign times',
							'floatRightCon tlefalign times setbold1',
							'floatRightCon1 tlefalign times',
			  			    '',
							'letCon',
			  			    'floatleftIndentnew tlefalign margintopminus20px setbold1 times',
							'floatleftIndent tlefalign margintopminus20px times',
							'subinput',
					        'substeping testvisible1',
						    'floatrightShipTo tlefalign times setbold1',
							'floatrightShipTo1 tlefalign times',
							'letCon',
			  			    'letCon',
							'letCon',
			  			    'letCon',
			  			    'letCon',
							'letCon letConmid'
							],
					'checklister':[['This piece is an invoice, and because Auric Systems, Inc. has so many invoices, they are kept in an individual folder. Type "Invoices" next to the next available number in the Accession Log, which is 104.'],[' Find the 1 Way Direct card and code it with 104. '],['Find the Invoices card and code it with 104.'],[' File the 1 Way Direct card in the NUMBERS section of the card file.'],['File the Invoices card in the "I" section of the card file. '],[' Code the invoice with 104. '],['Create a new 104 folder and file it behind the 104 file guide.'],['File the invoice in the new 104 folder.']],
	                'aslash':[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[[0,1],[],[]],[],[[],[],[],[]],[],[],[],[],[],[],[]],
					'numbering':[],
					'anumbering':['16 0 0', '14 0 0','14 0 2','14 0 4'],
					'ainspect':2,
					'hintt':['All invoices are filed in a separate subject folder. The word <i>Invoice</i> appears on the invoice form; however, the actual folder label is <i>INVOICES</i>. Type in <i>Invoices</i> as the key unit. The second and succeeding units in the filing segment are the name of the company to whom the invoice is sent: <i>1</i> is the second unit, <i>Way</i> is the third unit, and <i>Direct</i> is the fourth unit.'],
					'hintRus':[],
					'folderinfo':['9',0],
					'ansOrder':['104',0,"C"]		
						
					}, //8
					{	    
                   'name':[[''],
							['Auric Systems, Inc.'],
							['1100 W. Tell Avenue','Chicago, IL 60657-1100'],
							['Invoice','&nbsp;','&nbsp;','&nbsp;'],
							[''],
							['312-555-0100'],
							['FAX: 312-555-0102'],
							['&nbsp;&nbsp;&nbsp;&nbsp;Invoice No:'],
							['01921'],
							['&nbsp;&nbsp;&nbsp;&nbsp;Date:'],
							['02/27/--'],
							[''],
							[''],
							['To:'],
							['2001 Systems, Inc.','1050 Trails End','Oak Park, IL 60302-1050'],
							[''],
						    ['Invoices','&nbsp;','&nbsp;','&nbsp;'],
							['Ship To:'],
							['Same'],
							['<table style="width: 100%;" cellspacing="0" cellpadding="0"  class="transactionDetails"><tr> <th >Salesperson</th><th >P.O. Number</th><th >Date Shipped</th><th >Shipped Via</th><th>Terms</th></tr><tr> <td>Glen</td><td>342981</td><td>02/29/--</td><td >UPS Ground</td><td>2/10, n/30</td></tr></table>'],
							[''],
							['<table style="width: 100%;" cellspacing="0" cellpadding="0" class="quantityDetails"><tr > <th >Quantity</th><th >Description</th><th >Unit Price</th><th >Amount</th></tr><tr ><td>20 </td><td>Model 602 Phone</td><td>$89.99</td><td>$1,799.80</td></tr><tr ><td>20 </td><td>Model 602 Phone</td><td style="text-indent:10px;"> 59.99</td><td>$1,199.80</td></tr><tr  ><td></td><td></td><td>SUBTOTAL</td><td>$2,999.60</td></tr><tr><td></td><td></td><td >SHIPPING AND HANDLING</td><td style="text-indent:30px;">40.00</td></tr><tr ><td></td><td></td><td>	TOTAL DUE</td><td>$3,039.60</td></tr> </table>'],
							['Make all checks payable to: Auric Systems, Inc.'],
							['If you have any questions concerning this invoice, call Glen Norris at 312-555-0100.'],
							['Thank you for your business!']
							],
			  'alignClass':['SubInputTop',
							'floatLeftInvoice tlefalign setbold times fontsize',
							'floatLeft tlefalign setbold times',
			  			    'leftRightParallel zoomWord',
							'letCon',
							'floatLeftFaxAbove tlefalign setbold times',
							'floatLeftFax1 tlefalign setbold times',
			  			    'floatRightCon tlefalign times setbold1',
							'floatRightCon1 tlefalign times',
							'floatRightCon tlefalign times setbold1',
							'floatRightCon1 tlefalign times',
							'',
			  			    'letCon',
							'floatleftIndentnew tlefalign margintopminus20px setbold1 times',
							'floatleftIndent tlefalign margintopminus20px times',
							'subinput',
					        'substeping testvisible1',
							'floatrightShipTo tlefalign times setbold1',
							'floatrightShipTo1 tlefalign times',
							'letCon',
			  			    'letCon',
							'letCon',
			  			    'letCon',
			  			    'letCon',
							'letCon letConmid'
							],
					'checklister':[['Here is another invoice. Since you just worked with an invoice, you know that this invoice should be coded 104.'],[ 'Find the card, code it, and file it in the proper section of the card file. '],['Code the invoice with 104 and file it in the 104 folder.']],
							
					'aslash':[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[[0,1],[],[]],[],[[],[],[],[]],[],[],[],[],[],[],[]],
					'numbering':[],
					'anumbering':['16 0 0', '14 0 0','14 0 2','14 0 4'],
					'ainspect':2,
					'hintt':['This piece is another invoice. Code  as you did for record #20.'],
					'hintRus':[],
					'folderinfo':['9',2],
					'ansOrder':['104',2,"C"]		
						
					}, //9
					
					{	    
                    'name':[[''],
							['COPY'],
					        ['<img class="auriclogo" src="assets/images/auric_logo.png" draggable="false"/>'],
					        ['1100 W. Tell Avenue, Chicago, IL 60657-1100','Phone:312-555-0100 Fax: 312-555-0102'],
							['April 3, 20--'],
							[''],
							//['International','Computing','Center','&nbsp;'],
							['&nbsp;','International','Computing','Center'],
							['&nbsp;','Mr. Roberto Suarez, President','Centro de Computacion International','1650 Conquistadora Blvd.','Cancun, Quintana Roo','MEXICO'],
							['&nbsp;','Dear Mr. Suarez:'],
							['<p>Thank you for suggesting a meeting to learn about our services. We would be delighted to have you visit us on April 14 at 9 a.m. We look forward to meeting you and discussing our business with you. </p>'],
							['Sincerely yours,','&nbsp;'],
							['AURIC SYSTEMS, INC'],
							['<img class="markingSignature" src="assets/images/terri.png" draggable="false"/>'],
							['Ms. Terri Williams','President'],
							[''],
							['TW:js']
							],
			  'alignClass':['SubInputTop',
					'background bg-text',
			  			    'letCon',
							'floatLeftauric tlefalign notbold',
			  			    'letCon',
							'subinput',
							'substeping Card15 testvisible1',
			  			    'floatLeft tlefalign',
			  			    'letCon',
			  			    'letCon',
							'letCon',
							'floatLeft tlefalign',
							'letConTopsign',
							'floatLeft tlefalign',
							'letCon',
							'letCon'
							],
					'checklister':[[' Here is a second letter concerning International Computing Center. Check the card file to see what number has been assigned to International Computing Center. '],[ 'Code the letter and place it in the correct folder, with the most recent date in front.']],
					'aslash':[[],[],[],[],[],[],[[],[],[],[]],[],[],[],[],[],[],[]],
					'numbering':[],
					'anumbering':['6 1 0', '6 2 0','6 3 0'],
					'ainspect':2,
					'hintt':['This outgoing letter is in response to record #17. At the top right of the letter, type the English translation of the foreign business name. Ensure the translation is correctly coded. There is no need to prepare a cross-reference sheet for this piece because you prepared one for piece #17.'],
					'hintRus':[],
					'folderinfo':['11',0],
					'ansOrder':['103',1,"C"]
					//'crossUnit':[["aaa"], ["aaa"], ["ccccc"], ["dddd"], []]	
						
					}, //10
					
					{	    
                    'name':[[''],
							['007 Spy Channel','(A Division of Imagine! Films, Inc.)','600 South Fourth','Los Angeles, CA 90049-0007'],
							['310-555-0007'],
							['FAX: 310-555-2007'],
							['March 23, 20--'],
							['<img class="markingDatenew Datenew" src="assets/images/mar_26-20.png" draggable="false"/>'],
							[''],
							['&nbsp;','&nbsp;','&nbsp;','&nbsp;'],
							['','','Ms. Pat Johnson, Vice President','Broadband Communications','Auric Systems, Inc.','1100 W. Tell Avenue','Chicago, IL 60657-1100'],
						    ['&nbsp;','Dear Ms. Johnson:'],
							['Beginning May 1, you will be able to offer your customers a special three-month rate to try our new 007 Spy Channel, the latest of our genre-oriented channels.  As you might expect, the programs shown on this new channel are spine-tingling, thrill-packed stories of espionage.<p>Next week we are shipping to you 10,000 brochures describing the 007 Spy Channel.  Please distribute them to your customers as you have in the past, and let us know if your supply runs low.  We appreciate the efforts you made when we launched our popular Heart-to-Heart Channel and are confident that our new 007 Spy Channel will be just as successful.</p>'],
							['Sincerely,','<img class="markingSignature"  src="assets/images/mike.png" draggable="false"/>'],
							['Mike Twickham','Advertising Manager'],
							['MT:bh'],
							['<img class="markingRemindNew" src="assets/images/remind_me_4-5.png" draggable="false"/>']
							],
			  'alignClass':['SubInputTop',
							'floatcenter tmidalign',
			  			    'floatLeft tlefalign setbold',
			                'leftRightParallel trigalign setbold',
			  			    'letCon',
							'letCon1',
			  			    'subinput',
					        'substeping',
							'floatLeft tlefalign',
							'letCon',
			  			    'letCon',
							'letCon',
							'floatLeft tlefalign',
							'letCon',
			  			    'marking markingNamesRemind'
							],
					'checklister':[['  From this point on, refer to your card file before you code each piece to see whether or not that name has been assigned a number or if there is another piece of correspondence already coded. Procedure reminder: Check the card file and either code with a G or a folder number, or assign the next number from the Accession Log. Watch for any instructions to open an individual folder and do so if required. If a new folder is required: First, open the Accession Log and type the name of the correspondent or subject to whom that number is to be assigned. Next, retrieve the card and any cross-reference card relating to the record and change the G to the assigned number; re-file the card(s) in the card file. Then, add the assigned number to the correspondence piece. Retrieve the first piece of correspondence (if there is one) from the general folder and recode it with the assigned number. Create a new numbered folder and drag it to the correct location. Drag all correspondence for that number into the folder and file it with the most recent date in front.']],
	                'aslash':[[],[[0,1,2],[],[[0]],[]],[],[],[],[]],
					'numbering':[],
					'anumbering':['1 0 0', '1 0 2','1 0 4'],
					'ainspect':1,
					'hintt':['007 Spy Channel is a division of Imagine! Films, Inc. Prepare a cross-reference sheet for the parent company name.'],
					'filinghint':['Note  Pat Johnson\'s written request and prepare a tickler card. When filing tickler cards, place cards bearing April dates behind the APRIL guide in chronological order to be distributed at the beginning of April behind the proper daily guides.'],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':['NUMBERS',0,"C"],
					//'tickleAns':[[['04','05','Pat Johnson','Remind Pat Johnson to check on brochures.','007 Spy Channel','03','23'],['April',0]]],
					
						
					}, //11
					{	    
                    'name':[[''],
							['Centro de Computacion International','1650 Conquistadora Blvd.','Cancun, Quintana Roo','MEXICO'],
					        ['April 20, 20--'],
							['<img class="markingDatenew Datenew" src="assets/images/apr_24-20.png" draggable="false"/>'],
							[''],
							['&nbsp;','International','Computing','Center'],
							['','','','Ms. Terri Williams, President','Auric Systems, Inc.','1100 W. Tell Avenue','Chicago, IL 60657-1100'],
							['','Dear Ms. Williams:'],
							['<p>Meeting you and touring the facilities of Auric Systems, Inc., was a pleasure.  We cannot thank you enough for being so generous with your time and expertise.  Your hospitality made us feel very much at home in the &ldquo;Windy City.&rdquo;</p><p>An order form for the basic software for digital cable is enclosed.  We are confident that broadband distribution will do well here in Cancun.  Again, thank you for the invaluable information you provided, Ms. Williams.</p>'],
							['Cordially yours,',''],
							['CENTRO DE COMPUTACION INTERNATIONAL'],
							['<img class="markingSignature"  src="assets/images/roberto.png" draggable="false"/>'],
							['Roberto Suarez','President'],
							[''],
							['RS:ln','Enclosure']
							],
			  'alignClass':['SubInputTop',
							'floatcenter  tmidalign',
							'letCon',
							'letCon1',
							'subinput',
						    'substeping',
			  			    'floatLeft tlefalign',
			  			    'letCon',
			  			    'letCon',
							'letCon',
							'floatLeft2 margintop10px tlefalign',
							'letConTopsign',
							'floatLeft tlefalign',
							'letCon',
							'letCon'
							],
					'checklister':[['From this point on, refer to your card file before you code each piece to see whether or not that name has been assigned a number or if there is another piece of correspondence already coded. Procedure reminder: Check the card file and either code with a G or a folder number, or assign the next number from the Accession Log. Watch for any instructions to open an individual folder and do so if required. If a new folder is required: First, open the Accession Log and type the name of the correspondent or subject to whom that number is to be assigned. Next, retrieve the card and any cross-reference card relating to the record and change the G to the assigned number; re-file the card(s) in the card file. Then, add the assigned number to the correspondence piece. Retrieve the first piece of correspondence (if there is one) from the general folder and recode it with the assigned number. Create a new numbered folder and drag it to the correct location. Drag all correspondence for that number into the folder and file it with the most recent date in front.']],
					'aslash':[[],[],[],[],[],[[],[],[],[]],[],[],[],[],[],[],[],[],[]],
					'numbering':[],
					'anumbering':['5 1 0', '5 2 0','5 3 0'],
					'ainspect':0,
					'hintt':[''],
					'filinghint':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':['103',0,"C"]
					//'crossUnit':[["aaa"], ["aaa"], ["ccccc"], ["dddd"], []]	
						
					}, //12
					{	    
                    'name':[[''],
							['Chicago Broadband Association','1925 N. 27th Avenue','Chicago, IL 60660-1925'],
							['312-555-0280'],
							['FAX: 312-555-0281'],
							['March 15, 20--'],
							['<img class="markingDatenew Datenew" src="assets/images/mar_17-20.png" draggable="false"/>'],
							[''],
							['&nbsp;','&nbsp;','&nbsp;','&nbsp;'],
							['','','','Ms. Terri Williams, President','Auric Systems, Inc.','1100 W. Tell Avenue','Chicago, IL 60657-1100'],
						    ['','Dear Terri:'],
							['The April meeting of the Chicago Broadband Association will be a panel discussion concerning the new Federal Communications Commission regulations that go into effect July 1.  Would you please serve as one of the panel members for this discussion?  Your experience and expertise regarding federal regulations are well known in the Chicago area.<p>The meeting will be at Windows 360, located on the top floor of the Hildon Hotel in downtown Chicago.  Because you are a current member of Chicago Broadband Association, there is no fee to attend the meeting.  Each panel member&rsquo;s dinner will be paid for by the association as a thank you for being part of the discussion.</p><p>May we count on you to serve as a panel member?  Please let me know as soon as possible so that arrangements for the meeting can be made.</p>'],
							['Sincerely yours,','<img class="markingSignature margintop20px"  src="assets/images/gene.png" draggable="false"/>'],
							['Gene Jenewein','President, PTCA'],
							['GJ:lc'],
							['<img class="markingNamesImgNew" src="assets/images/fla_3-30.png" draggable="false"/>']
							],
			  'alignClass':['SubInputTop',
							'floatcenter tmidalign times',
			  			    'floatLeft tlefalign setbold times',
			                 'trigalign setbold times',
			  			    'letCon',
							'letCon1',
			  			    'subinput',
					        'substeping Card7',
							'floatLeft tlefalign margintop0',
							'letCon',
			  			    'letCon',
							'letCon',
							'floatLeft tlefalign',
			  			    'letCon',
			  			     'marking markingNames'
							],
					'checklister':[['Procedure reminder: Check the card file and either code with a G or a folder number, or assign the next number from the Accession Log. Watch for any instructions to open an individual folder and do so if required. If a new folder is required: First, open the Accession Log and type the name of the correspondent or subject to whom that number is to be assigned. Next, retrieve the card and any cross-reference card relating to the record and change the G to the assigned number; re-file the card(s) in the card file. Then, add the assigned number to the correspondence piece. Retrieve the first piece of correspondence (if there is one) from the general folder and recode it with the assigned number. Create a new numbered folder and drag it to the correct location. Drag all correspondence for that number into the folder and file it with the most recent date in front.']],
	                'aslash':[[],[[0,1],[],[]],[],[[0]],[],[]],
					'numbering':[],
					'anumbering':['1 0 0', '1 0 2','1 0 4'],
					'ainspect':1,
					'hintt':[''],
					'filinghint':['</br>There is no written note with this tickler file notation. Read the letter to determine what the reminder should be, then prepare a tickler card.</br></br>'],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':['C',0,"C"],
					//'tickleAns':[[['03','30','Terri Williams','Remind Terri Williams about serving as a panel member at the April meeting.','Chicago Broadband Association','03','15'],['March 26-31',1]]],
					
						
					}, //13
				{	    
                    'name':[[''],
							['COPY'], 
							['<img class="auriclogo" src="assets/images/auriclogo.png" draggable="false"/>'],
							['1100 W. Tell Avenue, Chicago, IL 60657-1100','Phone: 312-555-0100'],
							['Fax: 312-555-0102'],
							['March 22, 20--'],
							['<img class="marginlefttop" src="assets/images/call_me_3-28.png" draggable="false"/>'],
							[''],
							[''],
						    ['&nbsp;','&nbsp;','&nbsp;','&nbsp;'],
							['','','','Dean Charles Ingersol','Chicago School of the Arts','806 S. Milbrook Road','Chicago, IL 60670-0806'],
							
							['','Dear Dean Ingersol:'],
							['<p>Auric Systems, Inc., offers a variety of educational programs on cable; and yes, educational institutions receive a 10 percent discount.  We have three channels that broadcast educational content nearly 24 hours a day.</p> <p>Because the server is connected to the cable outlet, there is a limit of no more than 500 yards between the server and the last node.  If you wish to connect other LANs to the &ldquo;cable&rdquo; server, we can do that for a higher monthly fee.</p><p>Please let me know if I can answer any further questions you may have.  I would be happy to meet with you at your site to discuss your specific equipment and programming needs.</p>'],
							['Sincerely,',''],
							['AURIC SYSTEMS, INC.'],
							['<img class="markingSignature"  src="assets/images/pat.png" draggable="false"/>'],
							['Ms. Pat Johnson, Vice President','Broadband Communications'],
							['PJ:js']],
			  'alignClass':['SubInputTop',
							'background bg-text',
			  				'letCon',
			  				'floatRightauric tlefalign notbold',
							'floatRightauric2 tlefalign notbold',
			  			    'letCon',
							'leftRightParallel1 tlefalign marking',
							'letConnew',
							'subinput',
							'substeping card8',
			  			    'floatLeft tlefalign margintop0',
			  			    'letCon',
			  			    'letCon',
							'letCon',
							'floatLeft tlefalign',
			  			    'letConTopsign',
							'floatLeft tlefalign',
							'letCon'
							],
					'checklister':[['Procedure reminder: Check the card file and either code with a G or a folder number, or assign the next number from the Accession Log. Watch for any instructions to open an individual folder and do so if required. If a new folder is required: First, open the Accession Log and type the name of the correspondent or subject to whom that number is to be assigned. Next, retrieve the card and any cross-reference card relating to the record and change the G to the assigned number; re-file the card(s) in the card file. Then, add the assigned number to the correspondence piece. Retrieve the first piece of correspondence (if there is one) from the general folder and recode it with the assigned number. Create a new numbered folder and drag it to the correct location. Drag all correspondence for that number into the folder and file it with the most recent date in front.']],
					'aslash':[[],[],[],[[],[0]],[[0]],[],[],[],[],[],[[],[],[],[],[0,1,2,3],[],[]],[],[],[]],
					'numbering':[],
					'anumbering':['10 4 0','10 4 2','10 4 4','10 4 6','10 4 8'],
					'ainspect':2,
					'hintt':[''],
					'filinghint':['</br>Prepare a tickler card from PJ&rsquo;s written notation. </br></br></br>'],
					'hintRus':[],
					'ansOrder':['105',0,"C"],
					//'tickleAns':[[['03','28','Pat Johnson','Remind Pat Johnson to call Dean Ingersol to follow up on a possible order.','Chicago School of the Arts','03','22'],['March 26-31',0]]],
					//'ansOrder':['C',0],
					
					//'crossUnit':[["aaa"], ["aaa"], ["ccccc"], ["dddd"], []]	
						
					}, //14
						{	    
                    'name':[[''],
							['City of Chicago','Broadband Communications Department','Municipal Building, B-210','Chicago, IL 60637-0111'],
					        ['February 24, 20--'],
							['<img class="markingDatenew Datenew" src="assets/images/feb_27-20.png" draggable="false"/>'],
							[''],
							['&nbsp;','&nbsp;','&nbsp;','&nbsp;'],
							['','','','Ms. Terri Williams, President','Auric Systems, Inc.','1100 W. Tell Avenue','Chicago, IL 60657-1100'],
							['','Dear Ms. Williams:'],
							['<p>The telecommunications legislation recently passed by Congress and signed by the President has an impact on both your business and the city of Chicago.  Please join our department and other broadband suppliers for a roundtable discussion of the impact of these new laws.</p><p>We have scheduled this one-day meeting for March 13 at the Chicago Convention Center.   The day will begin with a keynote address by our mayor at 9 a.m.  Please join us for a no-host lunch at 11:30 a.m.  Discussions will end at 5 p.m.  If you plan to be at this meeting, please call me at 312-555-0300.  When we receive confirmation that you will be attending, we will send a detailed agenda for the day.</p>'],
							['Very truly yours,','<img class="markingSignature"  src="assets/images/abbott.png" draggable="false"/>'],
							['F. L. Abbott, Director','Broadband Communications Department'],
							[''],
							['FLA&#183;lh'],
							['<img class="markingNamesImgNew" src="assets/images/tw_3-12.png" draggable="false"/>']
							],
			  'alignClass':['SubInputTop',
							'floatcenter  tmidalign',
							'letCon',
							'letCon1',
							'subinput',
							'substeping card9',
			  			    'floatLeft tlefalign margintop0',
			  			    'letCon',
			  			    'letCon',
							'letCon',
							'floatLeft9 tlefalign',
							'floatLeft tlefalign',
							'letCon',
							'marking markingNames'
							],
					'checklister':[['Procedure reminder: Check the card file and either code with a G or a folder number, or assign the next number from the Accession Log. Watch for any instructions to open an individual folder and do so if required. If a new folder is required: First, open the Accession Log and type the name of the correspondent or subject to whom that number is to be assigned. Next, retrieve the card and any cross-reference card relating to the record and change the G to the assigned number; re-file the card(s) in the card file. Then, add the assigned number to the correspondence piece. Retrieve the first piece of correspondence (if there is one) from the general folder and recode it with the assigned number. Create a new numbered folder and drag it to the correct location. Drag all correspondence for that number into the folder and file it with the most recent date in front.']],
					'aslash':[[],[[0,1],[0,1],[],[]],[],[],[],[]],
					'numbering':[],
					'anumbering':['1 0 4', '1 0 0', '1 0 2', '1 1 0', '1 1 2', '1 1 4'],
					'ainspect':1,
					'hintt':[''],
					'filinghint':['</br>Prepare a tickler card based on the contents of the letter.</br></br>'],
					'hintRus':[],
					'ansOrder':['C',1,"C"],
					//'crossAns':[[['Chicago','Technology','Inc','','','March 6, 20--','Information about the larger size fiber optic tubing including terms for quantity purchases','SEE CT Inc'],['C',6]]],
					//'tickleAns':[[['03','12','Terri Williams','Remind Terri Williams to attend a roundtable discussion.','Chicago City of Broadband Communications Department','02','24'],['March 11-15',0]]]
						
					}, //15
					{	    
                    'name':[[''],
							['<img class="air_logo"  src="assets/images/airwaves_logo.png" draggable="false"/>'],
							['16078 S. Airwave Drive', 'Los Angeles, CA 90049-0167'],
							['213-555-0234'],
							['','FAX: 213-555-0235'],
							['February 19, 20--'],
							['<img class="markingDatenew Datenew" src="assets/images/feb_22-20.png" draggable="false"/>'],
							[''],
						    ['&nbsp;','&nbsp;','&nbsp;','&nbsp;'],
							['','','','Attention Programming Director','Auric Systems, Inc.','1100 W. Tell Avenue','Chicago, IL 60657-1100'],
							
							['','Ladies or Gentlemen:'],
							['<p>You now can have access to several new channels in our programming package. The enclosed brochure describes the variety of programming options we now offer, as well as the new channels that will be available April 1.</p> <p>Ms. Jessica Allen, our representative for your area, will be in Chicago during the week of March 10-14. If you have any questions about the new programming, Jessica will be glad to answer them at that time.</p><p>We hope to hear from you about our new channels. We are sure your customers will enjoy this new approach to digital broadband television.</p>'],
							['Sincerely,',''],
							['AIRWAVES EXTRA-ORDINARY!'],
							['<img class="markingSignatureNew"  src="assets/images/tiffany.png" draggable="false"/>'],
							['<img class="markingNamesImgNew margintop98px" src="assets/images/pj_3-10.png" draggable="false"/>'],
							['Tiffany S. Edwards, Sales Manager'],
							['TSE:lw','Enclosure'],
							['']
							],
			  'alignClass':['SubInputTop',
							'letCon',
							'floatcenterAirwaves tmidalign setbold myclass',
			  			    'floatLeft4 tlefalign setbold',
			  			    'leftRightParallel trigalign setbold',
			  			    'letCon',
							'letCon1',
							'subinput',
							'substeping card11',
			  			    'floatLeft tlefalign margintop0',
			  			    'letCon',
			  			    'letCon',
							'letCon',
							'floatLeft tlefalign',
			  			    'letConTopsign',
							'marking markingNames',
			  			    'floatLeft tlefalign',
							'letCon margintopminus120px',
			  			    'marking markingNames'
							],
					'checklister':[['Procedure reminder: Check the card file and either code with a G or a folder number, or assign the next number from the Accession Log. Watch for any instructions to open an individual folder and do so if required. If a new folder is required: First, open the Accession Log and type the name of the correspondent or subject to whom that number is to be assigned. Next, retrieve the card and any cross-reference card relating to the record and change the G to the assigned number; re-file the card(s) in the card file. Then, add the assigned number to the correspondence piece. Retrieve the first piece of correspondence (if there is one) from the general folder and recode it with the assigned number. Create a new numbered folder and drag it to the correct location. Drag all correspondence for that number into the folder and file it with the most recent date in front.']],
					'aslash':[[],[],[],[],[[0]],[],[],[],[],[],[],[],[],[[0]],[],[],[]],
					'numbering':[],
					'anumbering':['13 0 0','13 0 2'],
					'ainspect':1,
					'hintt':[''],
					'filinghint':['</br>Prepare a tickler card based on the contents of the letter.</br></br></br>'],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':['A',0,"C"],
					//'crossAns':[[['Davis','Isaacson','and','Burns','Engineers','March 27, 20--','Meeting suggested to discuss testing of larger size fiber optic tubing','SEE Burns, Davis, and Isaacson Engineers'],['D',1]],[['Isaacson','Burns','and','Davis','Engineers','March 27, 20--','Meeting suggested to discuss testing of larger size fiber optic tubing','SEE Burns, Davis and Isaacson Engineers'],['I',2]]],
					//'tickleAns':[[['03','10','Pat Johnson','Remind Pat Johnson that a representative from Airwaves Extra-ordinary! may be stopping by.','Airwaves Extraordinary','02','19'],['March 6-10',1]]]
					
					//'crossUnit':[["aaa"], ["aaa"], ["ccccc"], ["dddd"], []]	
						
					}, //16
									
					{	    
                    'name':[[''],
							['Auric Systems, Inc.'],
							['1100 W. Tell Avenue','Chicago, IL 60657-1100'],
							['Invoice','','',''],
							[''],
							['312-555-0100'],
							['FAX: 312-555-0102'],
							['&nbsp;&nbsp;&nbsp;&nbsp;Invoice No:'],
							['01942'],
							['&nbsp;&nbsp;&nbsp;&nbsp;Date:'],
							['03/17/--'],
							[''],
							[''],
							['To:'],
							['205 Cable Systems, Inc.','9800 S. Washington St.','Evanston, IL 60203-9800'],
							[''],
							['Invoices','&nbsp;','&nbsp;','&nbsp;'],
							['Ship To:'],
							['Same'],
							['<table cellspacing="0" cellpadding="0"  class="transactionDetails"><tr> <th >Salesperson</th><th >P.O. Number</th><th >Date Shipped</th><th >Shipped Via</th><th>Terms</th></tr><tr> <td>Glen</td><td>78900</td><td>03/17/--</td><td >UPS 2nd Day Air</td><td>Net 30</td></tr></table>'],
							[''],
							['<table cellspacing="0" cellpadding="0" class="quantityDetails"><tr ><th style="width:150px;">Quantity</th><th style="width:210px;">Description</th><th style="width:220px;">Unit Price</th><th style="width:150px;">Amount</th></tr><tr><td>25  </td><td>Model E-120 Phone</td><td>$ 89.99</td><td style="text-indent: 8px;">2,249.75</td></tr><tr><td>25 </td><td>Model E-115 Phone</td><td style="text-indent: 12px;">79.99</td><td style="text-indent: 8px;">1,999.75</td></tr><tr ><td >25 </td><td>Model E-110 Phone</td><td style="text-indent: 12px;">59.99</td><td style="text-indent: 8px;">1,499.75</td></tr><tr ><td >25 </td><td>Model E-105 Phone</td><td style="text-indent: 12px;">49.99</td><td style="text-indent: 8px;">1,249.75</td></tr><tr  ><td></td><td></td><td>SUBTOTAL</td><td >$6,999.00</td></tr><tr><td></td><td></td><td  >SHIPPING AND HANDLING</td><td style="text-indent: 28px;">50.00</td></tr><tr ><td></td><td></td><td>TOTAL DUE</td><td>$7,049.00</td></tr></table>'],
							['Make all checks payable to: Auric Systems, Inc.'],
							['If you have any questions concerning this invoice, call Glen Norris at 312-555-0100.'],
							['Thank you for your business!']
							],
			  'alignClass':['SubInputTop',
							'floatLeftInvoice tlefalign setbold times fontsize',
							'floatLeft tlefalign setbold times',
			  			    'leftRightParallel zoomWord',
							'letCon',
							'floatLeftFaxAbove tlefalign setbold times',
							'floatLeftFax1 tlefalign setbold times',
			  			    'floatRightCon tlefalign times setbold1',
							'floatRightCon1 tlefalign times',
							'floatRightCon tlefalign times setbold1',
							'floatRightCon1 tlefalign times',
							'',
			  			    'letCon',
			  			    'floatleftIndentnew tlefalign margintopminus20px setbold1 times',
							'floatleftIndent tlefalign margintopminus20px times',
							'subinput',
							'substeping Card12',
						    'floatrightShipTo tlefalign times setbold1 margintop180px',
							'floatrightShipTo1 tlefalign times margintop180px',
							'letCon',
			  			    'letCon',
							'letCon',
			  			    'letCon',
			  			    'letCon',
							'letCon letConmid'
							],
					'checklister':[[' Procedure reminder: Check the card file and either code with a G or a folder number, or assign the next number from the Accession Log. Watch for any instructions to open an individual folder and do so if required. If a new folder is required: First, open the Accession Log and type the name of the correspondent or subject to whom that number is to be assigned. Next, retrieve the card and any cross-reference card relating to the record and change the G to the assigned number; re-file the card(s) in the card file. Then, add the assigned number to the correspondence piece. Retrieve the first piece of correspondence (if there is one) from the general folder and recode it with the assigned number. Create a new numbered folder and drag it to the correct location. Drag all correspondence for that number into the folder and file it with the most recent date in front.']],
	                'aslash':[[],[],[],[],[],[],[[0]],[],[],[],[],[],[],[],[[0,1,2],[],[]],[],[[],[],[],[]],[],[],[]],
					'numbering':[],
					'anumbering':['16 0 0', '14 0 0','14 0 2','14 0 4','14 0 6'],
					'ainspect':2,
					'hintt':[''],
					'filinghint':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':['104',1,"C"],
					//'crossAns':[[['Adams','Electronic','Repairs','','','April 5, 20--','Schedule showing rate increase in electronic repair charges for remainder of year.','SEE 99 Electronic Repair Shop'],['99 ELECTRONIC REPAIR SHOP',0]]],
						
						
					}//17  */
					
					];	
					
					//ainspect 1 = YES, 0 - NO, 2 - N/A	
					
totinspectscore = 0;


for(var i=0;i<dataRecd.length; i++)
{
	dataRecd[i].subinputval = ["","","",""]; //"card "+(i+1);
	dataRecd[i].chcard =[];
	dataRecd[i].inspect = -1;
	dataRecd[i].subjectinput = ['','','',''];

	//dataRecd[i].ainspect = 1; 
	if(dataRecd[i].job != 1){
		totinspectscore++;
		dataRecd[i].codeScore = [0,1,0];
	}
	
	dataRecd[i].xreffolderinfo = [];
	
	if(typeof dataRecd[i].crossAns != 'undefined')
	{
		
		for(var k = 0; k<dataRecd[i].crossAns.length; k++)
		{
			dataRecd[i].xreffolderinfo.push(dataRecd[i].crossAns[k][1])
		}
	}
	
	if(typeof dataRecd[i].tickleAns != 'undefined')
	{
	   totcodescore+=3;
	  
	}
	dataRecd[i].job=2;
	
	dataRecd[i].space =[];
	dataRecd[i].slash =[];
	dataRecd[i].crossUnit=[];
	if(typeof dataRecd[i].tickleUnit == 'undefined'){
		dataRecd[i].tickleUnit=[];
	}
	dataRecd[i].checklist=[];
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

for(var i=0;i<dataRecd.length; i++)
{
	//if(dataRecd[i].job == 1)
	{
	dataRecd[i].slash = dataRecd[i].aslash.slice();
	dataRecd[i].numbering = dataRecd[i].anumbering.slice();
	}
	//dataRecd[i].folderinfo = [14,i]
}

/**/
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
This record [has a release mark/is missing its required release mark/does not need a release mark]. You did not indicate this record�s release mark status.*/
		

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
		'discription': '<h2>Alphabetic Indexing Rules</h2><p style="margin-top:-11px; margin-bottom:0px;">Rule 10: Government Names</p><p style="margin-top:8px; margin-bottom:0px;">A. Local and Regional Government Names</p><div class="innerruleContent scrollBar"><p class="discriptioncontent" >The first indexing unit is the name of the county, parish, city, town, township, or village. <i>Charlotte Sanitation Department</i> is an example. <i>Charlotte</i> (a city) would be the first indexing unit. Next, index the most distinctive name of the department, board, bureau, office, or government/political division. In this case, <i>Sanitation</i> would be the most distinctive name of the department. The words <i>County of, City of, Department of,</i> etc., are added for clarity and are considered separate indexing units. If <i>of</i> is not a part of the official name as written, it is not added as an indexing unit. Five examples follow.</p><p><table class="tableBorder" style="width:99%; display:block; cell-padding:0; cell-spacing:0;  border: 0px solid #5d2f18; font-size:14px;"><tbody style="border: 1px solid #5d2f18;"><tr><td  style="border-bottom:1px solid #5d2f18;    width: 50%;">Filing Segment</td><td  style="border-bottom:1px solid #5d2f18;   text-align:center; width: 50%;" colspan=5 >Indexing Order of Units</td></td></tr><tr><td style=" width: 50%;"><b>Name</b></td><td style="width: 10%;"><b>Key Unit</b></td><td style=" width: 10%;"><b>Unit</b> 2</td><td style="width: 10%;"><b>Unit 3</b></td><td style=" width: 10%;"><b>Unit 4</b></td><td style=" width: 10%;"><b>Unit 5</b></td></tr><tr><td style="width: 50%;">1. County of Alameda Aquatic Center</td><td style="width: 10%;">Alameda</td><td style=" width: 10%;">County</td><td style="width: 10%;">of</td><td style=" width: 10%;">Aquatic</td><td style=" width: 10%;">Center</td></tr><tr><td style="width: 50%;">2. City of Arlington Public Library</td><td style="width: 10%;">A<u>r</u>lington</td><td style=" width: 10%;">City</td><td style="width: 10%;">of</td><td style=" width: 10%;">Public</td><td style=" width: 10%;">Library</td></tr><tr><td style="width: 50%;">3. City of Arlington Senior Center</td><td style="width: 10%;">Arlington</td><td style=" width: 10%;">City</td><td style="width: 10%;">of</td><td style=" width: 10%;"><u>S</u>enior</td><td style=" width: 10%;">Center</td></tr><tr><td style="width: 50%;">4. Ashley County Department of Elections</td><td style="width: 10%;">A<u>s</u>hley</td><td style=" width: 10%;">County</td><td style="width: 10%;">Elections</td><td style=" width: 10%;">Department</td><td style=" width: 10%;">of</td></tr><tr><td style="width: 50%;">5. Augusta City Water Works</td><td style="width: 10%;">A<u>u</u>gusta</td><td style=" width: 10%;">City</td><td style="width: 10%;">Water</td><td style=" width: 10%;">Works</td><td style=" width: 10%;"></td></tr></tbody></table></p></div>'
	},
	{
		'title':'rule10C',
		'discription': '<h2>Alphabetic Indexing Rules</h2><p style="margin-top:-11px; margin-bottom:0px;">Rule 10: Government Names</p><p style="margin-top:8px; margin-bottom:0px;">B. State Government Names</p><div class="innerruleContent scrollBar"><p class="discriptioncontent" >Similar to local and regional political/governmental agencies, the first indexing unit is the name of the state or province. Then index the most distinctive name of the department, board, bureau, office, or government/political division. The words <i>State of, Province of, Department of,</i> etc., are added for clarity and are considered separate indexing units. If <i>of</i> is not a part of the official name as written, it is not added as an indexing unit. Two examples follow.</p><p><table class="tableBorder" style="width:99%; display:block; cell-padding:0; cell-spacing:0;  border: 0px solid #5d2f18; font-size:14px;"><tbody style="border: 1px solid #5d2f18;"><tr><td  style="border-bottom:1px solid #5d2f18;    width: 30%;">Filing Segment</td><td  style="border-bottom:1px solid #5d2f18;  text-align:center;  width: 70%;" colspan=5 >Indexing Order of Units</td></td></tr><tr><td style=" width: 30%;"><b>Name</b></td><td style="width: 10%;"><b>Key Unit</b></td><td style=" width: 15%;"><b>Unit 2</b></td><td style="width: 15%;"><b>Unit 3</b></td><td style=" width: 15%;"><b>Unit 4</b></td><td style=" width: 15%;"><b>Unit 5</b></td></tr><tr><td style="width: 30%;">1.Michigan Department of Education</td><td style="width: 10%;">Michigan</td><td style=" width: 10%;">Education</td><td style="width: 10%;">Department</td><td style=" width: 10%;">of</td><td style=" width: 10%;"></td></tr><tr><td style="width: 30%;">2.Michigan State Police</td><td style="width: 10%;">Michigan</td><td style=" width: 10%;"><u>S</u>tate</td><td style="width: 10%;">Police</td><td style=" width: 10%;"></td><td style=" width: 10%;"></td></tr></tbody></table></p></div>'
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
	'discription': '<h2>Cross Reference Rules</h2><p style="margin-top:-12px; margin-bottom:0px;">Rule 1: Personal Names</p><p style="margin-top:8px; margin-bottom:0px;">D. Similar Names</p><div class="innercrossContent scrollBar" ><p>A variety of spellings exist for some names like <i>Brown</i> and <i>Johnson</i>. A SEE ALSO cross-reference is prepared for all likely spellings. A SEE ALSO sheet directs the filer to multiple locations for related information. If the name is not found under one spelling, the filer checks the SEE ALSO sheet for other possible spellings. Two examples follow.</p>Example:<br/><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; font-size:14px;"><tr><td style="text-align:center; colspan=2;" ></td></tr><tr><td><u>Brown</u></td><td></td><td></td></tr><tr><td>SEE ALSO Browne, Braun, Brawn</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;  margin-left: 0px; font-size:14px;"><tr><td style="text-align:center; colspan=2;" ></td></tr><tr><td><u>Browne</u></td><td></td><td></td></tr><tr><td>SEE ALSO Brown, Braun, Brawn</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;  margin-left: 216px; font-size:14px; border-top:1.8px dashed;"><tr><td style="text-align:center; colspan=2;" ></td></tr><tr><td><u>Braun</u></td><td></td><td></td></tr><tr><td>SEE ALSO Brown, Brawn, Browne</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;  margin-left: 216px; font-size:14px; border-top:1.8px dashed;"><tr><td style="text-align:center; colspan=2;" ></td></tr><tr><td><u>Brawn</u></td><td></td><td></td></tr><tr><td>SEE ALSO Brown, Browne, Braun</td></tr></table><br><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block; font-size:14px;   margin-left: 13px;"><tr><td style="text-align:center; colspan=2;" ></td></tr><tr><td><u>Johnson</u></td><td></td><td></td></tr><tr><td>SEE ALSO Johnsen, Johnston,</td></tr><tr><td>Jonson</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;  margin-left: 0px; font-size:14px;"><tr><td style="text-align:center; colspan=2;" ></td></tr><tr><td><u>Johnsen</u></td><td></td><td></td></tr><tr><td>SEE ALSO Johnson, Johnston,<br> Jonson</td></tr><tr><td></td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;  margin-left: 216px; font-size:14px; border-top:1.8px dashed;"><tr><td style="text-align:center; colspan=2;" ></td></tr><tr><td><u>Jonsen</u></td><td></td><td></td></tr><tr><td>SEE ALSO Johnson, Johnsen, Johnston</td></tr></table><table style="width:100% cell-padding:0; cell-spacing:0; display: inline-block;  margin-left: 216px; font-size:14px; border-top:1.8px dashed;"><tr><td style="text-align:center; colspan=2;" ></td></tr><tr><td><u>Johnston</u></td><td></td><td></td></tr><tr><td>SEE ALSO Johnson, Jonson, Johnsen</td></tr></table></div>'},
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
	
	
	
var audSeq = {
            'startbtn':['intro_simulation'],
			'directionsforjobs':['directions'],
			'overview':['overviewofauric'],
			'introduction':['overviewofjob','overviewofjob2'],
			'generalinfo':['generalinfo'],
			'generalinfoSim':['generalinfo'],
			'coding':['coding'],
			'alphabeticSimulation':['intro_simulation'],
			'Code':['step1'],
			'uIdentification':['step2'],
			'uNumbering':['step2'],
			'crossreference':['crossreference'],
			'ticklefile':['tickle'],
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
			
var simaction = {
	'alphabeticSimulation':'Review the 18 pieces of correspondence. Code and file each record and its corresponding alphabetic file card(s) using the numeric filing guidelines provided on the General Information screen. The Activity Checklist provides record-specific instructions for the first 11 records, and procedure reminders for the last seven records. As you complete the Activity Checklist for each record, click the forward arrow to pull up the next record and move to the next checklist.',
	'Code': 'Code: Step 1: Correctly identify the code by inserting a diagonal slash (/) where appropriate. If needed,<br/>type the subject and/or additional unit(s) into the appropriate fields.',
	'uIdentification':'Code: Step 2 (Units): Indicate the primary unit (key unit) by clicking on it to underline it. Then, click on<br/>the remaining units in sequence to place the correct number above each identified unit. Note that any<br/>units you typed in Code: Step 1 (Subject and/or Additional Unit(s)) are clickable in this step.',
	'crossreference': 'Add Cross-Reference: Fill in the cross-reference sheet with the necessary information. No more than<br/>five cross-reference sheets may be created.',
	'leveling': 'Leveling: Determine the correct leveling by placing the correct level by each name.',
	'ticklefile': 'Add Tickler Card: Determine whether the piece of correspondence needs a tickler card.  If so, create a tickler card and complete the necessary information.',
	'Inspect':['Inspect: Determine whether the letter has been released for filing.'],
	'file':['Review the 18 pieces of correspondence. Code and file each record and its corresponding alphabetic<br/>file card(s) using the numeric filing guidelines provided on the General Information screen. The Activity<br/>Checklist provides record-specific instructions for the first 11 records, and procedure reminders for the<br/>last seven records. As you complete the Activity Checklist for each record, click the forward arrow to<br/>pull up the next record and move to the next checklist.']
}
var simactionTitle = {
	'alphabeticSimulation':['Job 11: Consecutive Numeric Correspondence Filing'],
	'file':['Job 11: Consecutive Numeric Correspondence Filing']
}