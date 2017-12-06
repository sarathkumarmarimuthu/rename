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


var dataRecdJob=[];
					
//var totalscore = dataRecdJob.length;					
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


var dataRecd=[    {    
    				'name':[['Chicago Technical Institute'],['840 S. Ashland Ave.'],['Chicago, IL 60628-8400'],['312-555-0191']],
					'aslash':[[0,1],[0,1,2],[0,1]],
					'anumbering':['0 0','0 2','0 4','2 0','2 2','1 2','1 4'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[3,1]
					}, //0
				 {	
				    'name':[['DeLaCourt Day Care'],['1650 N. Grove Ave.'],['Chicago, IL 60630-1650'],['312-555-0153']],
					'aslash':[[0,1]],
					'anumbering':['0 0','0 2','0 4'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[4,4],
					}, // 1 
				{	
				    'name':[['Mr. Akiko Imamura'],['3850 S. Constance Ave.'],['Oak Park, IL 60302-3850'],['708-555-0181']],
					'aslash':[[0,1]],
					'anumbering':['0 4','0 2','0 0'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[9,6],
					'crossAns':[[['Akiko','Imamura','Mr','','','','','','SEE Imamura Akiko Mr'],[1,0]]]	
					}, // 2 
				{	
				    'name':[['727 Systems, Inc.'],['1050 S. Trails End'],['Chicago, IL 60660-1050'],['708-555-0179']],
					'aslash':[[0,1]],
					'anumbering':['0 0','0 2','0 4'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[0,3]
					}, // 3 
				{	
				    'name':[['A-to-Z Sanitation Services'],['P. O. Box 1255'],['Chicago, IL 60618-1255'],['312-555-0150']],
					'aslash':[[2,3]],
					'anumbering':['0 0','0 2','0 4'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[1,10]
					}, // 4 
				{	
				    'name':[['The Drawing Studio'],['9250 N. Calla Lane'],['Chicago, IL 60630-9250'],['312-555-0159']],
					'aslash':[[0,1]],
					'anumbering':['0 2','0 4','0 0'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[4,9]
					}, // 5 
				{	
				    'name':[['Chicago Technical Institute'],['16705 S. Oatfield Rd.'],['Oak Park, IL 60302-1670'],['708-555-0165']],
				    'aslash':[[0,1],[],[0,1,2]],
					'anumbering':['0 0','0 2','0 4','2 0','2 2','2 4'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[3,2]
					}, // 6 
				{	
				    'name':[['Mr. Addison Inman, Sr.'],['58300 N. London Ave.'],['Chicago, IL 60625-5830'],['312-555-0182']],
					'aslash':[[0,1,2]],
					'anumbering':['0 4','0 2','0 6','0 0'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[9,11]
					}, // 7 
				{	
				    'name':[['Colby & Ingram Web Design'],['2305 W. Division St.'],['Chicago, IL 60637-2305'],['312-555-0151']],
					'aslash':[[0,1,2,3]],
					'anumbering':['0 0', '0 2','0 4','0 6','0 8'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[3,8],
					'crossAns':[[['Ingram','and','Colby','Web','Design','','','','SEE Colby and Ingram Web Design'],[9,9]]]	
					}, // 8 
						{	
				    'name':[['Everybody\'s Internet Services'],['1400 E. Pioneer Way'],['Chicago, IL 60625-1400'],['312-555-0170']],
				    'aslash':[[0,1]],
					'anumbering':['0 0','0 2','0 4'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[5,12]
					}, // 9 
						{	
				    'name':[['Davis, Clay, & Inkley Law Firm'],['525 E. Cedar Street'],['Chicago, IL 60643-0525'],['312-555-0155']],
					'aslash':[[0,1,2,3,4]],
					'anumbering':['0 0','0 2','0 4','0 6','0 8','0 10'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[4,0],
					'crossAns':[[['Clay','Inkley','and','Davis','Law','Firm','','','SEE Davis Clay and Inkley Law Firm'],[3,4]],[['Inkley','Davis','and','Clay','Law','Firm','','','SEE Davis Clay and Inkley Law Firm'],[9,10]]]	
					}, // 10 
						{	
				    'name':[['David Burghoffer, CRM'],['1620 Cochrane Ave.'],['Chicago, IL 60618-1620'],['312-555-0152']],
					'aslash':[[0,1]],
					'anumbering':['0 2', '0 0','0 4'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[2,0]
					}, // 11 
						{	
				    'name':[['All State E-Business'],['238 Brandt Bldg.'],['Chicago, IL 60637-0238'],['312-555-0183']],
					'aslash':[[0,1]],
					'anumbering':['0 0','0 2','0 4'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[1,4],
					'crossAns':[[['Allstate','','','','','','','','SEE ALSO All State'],[1,5]]]
					}, // 12 
						{	
				    'name':[['Mrs. Elinor DeLuna'],['6650 E. Doncaster Dr.'],['Chicago, IL 60625-6650'],['312-555-0160']],
					'aslash':[[0,1]],
					'anumbering':['0 4','0 2','0 0'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[4,5]
					}, // 13 
						{	
				    'name':[['Don Ebert, Ph.D.'],['123 E. Lake Ave.'],['Chicago, IL 60657-1230'],['312-555-0171']],
					'aslash':[[0,1]],
					'anumbering':['0 2', '0 0','0 4'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[5,1]
					}, // 14 
						{	
				    'name':[['Commerce Department'],['State of Illinois'],['49 E. Main St.'],['Chicago, IL 60630-0049'],['312-555-0164']],
                    'aslash':[[0],[0,1]],
					'anumbering':['1 4', '1 0','1 2','0 0','0 2'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[9,2]
					}, // 15 
							{	
				    'name':[['21st Century Networks'],['200 N. 2nd Street'],['Chicago, IL 60620-0200'],['312-555-0179']],
					'aslash':[[0,1]],
					'anumbering':['0 0','0 2','0 4'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[0,1]
					}, // 16 
							{	
				    'name':[['Lt. Andrew Ecker'],['4400 Glenn Echo Way'],['Chicago, IL 60625-4400'],['312-555-0176']],
					'aslash':[[0,1]],
					'anumbering':['0 4', '0 2','0 0'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[5,4]	
					}, // 17
                    {    
    				'name':[['Images-2-Go, Inc.'],['3060 N. Pike’s Trail'],['Chicago, IL 60618-3060'],['312-555-0184']],
					'aslash':[[2]],
					'anumbering':['0 0','0 2'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[9,4]
					//'crossUnit':[["aaa"], ["aaa"], ["ccccc"], ["dddd"], []]	
						
					}, //18
				{	
				    'name':[['Eagle Tours'],['2907 Boxwood Ave.'],['Chicago, IL 60613-2907'],['312-555-0173']],
					'aslash':[[0]],
					'anumbering':['0 0','0 2'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],	
					'ansOrder':[5,0]
					}, // 19 
				{	
				    'name':[['Chicago Technical Institute'],['2200 E. Fir Street'],['Skokie, IL 60077-2200'],['708-555-0161']],
					'aslash':[[0,1],[],[0,1]],
					'anumbering':['0 0','0 2','0 4','2 0','2 2'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[3,3]
					}, // 20 
				{	
				    'name':[['E-Biz (popular name)'],['E-Business Services'],['4950 Lake Crest Drive'],['Chicago, IL 60620-4950'],['312-555-0174']],
					'aslash':[[],[1]],
					'anumbering':['1 0','1 2'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[5,3],
					'crossAns':[[['EBiz','','','','','','','','SEE EBusiness Services'],[5,2]]]
					}, // 21 
				{	
				    'name':[['Immanuel Community Church'],['1625 S. Monroe St.'],['Chicago, IL 60637-1625'],['312-555-0185']],
					'aslash':[[0,1]],
					'anumbering':['0 0','0 2','0 4'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[9,7]
					}, // 22 
				{	
				    'name':[['Coffee Cove'],['4800 W. Sunset Hwy.'],['Waukegan, IL 60085-4800'],['847-555-0153']],
					'aslash':[[0]],
					'anumbering':['0 0','0 2'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[3,6]
					}, // 23 
		 		{	
				    'name':[['Al Jumhuriyah al Jaza `iriyah ad'],['Dimuqratiyah ash Shabiyah'],['(Translation: Democratic and'],['Popular Republic of Algeria)'],['Algerian Embassy'],['P.O. Box 21570'],['Chicago, IL 60660-2157'],['312-555-0199']],
				    'aslash':[[],[],[0,1],[0,1,2]],
					'anumbering':['3 6','2 3','2 5','3 0','3 2','3 4'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[1,2],
					'crossAns':[[['Al','Jumhuriyah','al','Jazairiyah','ad','Dimuqratiyah','ash','Shabiyah','SEE Algeria Democratic and Popular Republic of'],[1,1]]]
					}, // 24  
				{	
				    'name':[['1 Way Direct Sales'],['301 E. 6th Street'],['Chicago, IL 60660-0300'],['708-555-0182']],
					'aslash':[[0,1,2]],
					'anumbering':['0 0','0 2','0 4','0 6'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[0,0]
					}, // 25 
				{	
				    'name':[['Illinois State Fire Bureau'],['Training Services'],['16000 N. Placer Blvd.'],['Chicago, IL 60628-1600'],['312-555-0186']],
					'aslash':[[0,1,2],[0]],
					'anumbering':['0 0','0 2','0 4','0 6','1 0','1 2'],
					'hintt':['The original card is filed by the English translation. Prepare a cross-reference card for the foreign spelling.'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[9,0]	
					}, // 26 
						{	
				    'name':[['Designs 4 U'],['1250 E. Kirby Dr.'],['Chicago, IL 60657-1250'],['312-555-0154']],
				    'aslash':[[0,1]],
					'anumbering':['0 0','0 2','0 4'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[4,7]
					}, // 27 
						{	
				    'name':[['Mr. Wm. Edwards, CPA'],['P.O. Box 6689'],['Chicago, IL 60643-6689'],['312-555-0175']],
					'aslash':[[0,1,2]],
					'anumbering':['0 4','0 2','0 6','0 0'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[5,8]
					}, // 28 
						{	
				    'name':[['Mr. Cuahtemoc Escobar'],['P.O. Box 24505'],['Oak Park, IL 60302-2450'],['708-555-0187']],
					'aslash':[[0,1]],
					'anumbering':['0 4', '0 2','0 0'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[5,11],
					'crossAns':[[['Cuahtemoc','Escobar','Mr','','','','','','SEE Escobar Cuahtemoc Mr'],[3,11]]]
					}, // 29 
						{	
				    'name':[['Miss Ashley Ames, CRM'],['2265 W. Clark St.'],['Chicago, IL 60630-2265'],['312-555-0162']],
					'aslash':[[0,1,2]],
					'anumbering':['0 4','0 2','0 6','0 0'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[1,8]
					}, // 30 
						{	
				    'name':[['Regina Davis, MD'],['12605 N. Scott St.'],['Chicago, IL 60628-1260'],['312-555-0163']],
					'aslash':[[0,1]],
					'anumbering':['0 2','0 0','0 4'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[4,2]
					}, // 31 
						{	
				    'name':[['Ms. Wilma Edwards'],['5500 S. Grand St.'],['Chicago, IL 60630-5500'],['708-555-0176']],
					'aslash':[[0,1]],
					'anumbering':['0 4', '0 2','0 0'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[5,7]
					}, // 32 
						{	
				    'name':[['Crystal Vision Company'],['8401 N. Ellis St.'],['Chicago, IL 60618-8401'],['312-555-0157']],
                    'aslash':[[0,1]],
					'anumbering':['0 0','0 2','0 4'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[3,10]
					}, // 33 
							{	
				    'name':[['Dolls for Everyone!'],['9425 S. Hill Dr.'],['Oak Park, IL 60302-9245'],['708-555-0166']],
					'aslash':[[0,1]],
					'anumbering':['0 0','0 2','0 4'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[4,8]
					}, // 34 
							{	
				    'name':[['Electrical Workers Union'],['7512 W. Sunset Dr.'],['Chicago, IL 60660-7512'],['312-555-0178']],
					'aslash':[[0,1]],
					'anumbering':['0 0','0 2','0 4'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[5,9]	
					}, // 35
                    {    
    				'name':[['Ms. Heather Ingrahm-Davis'],['1705 S. Snow Crest Dr.'],['Chicago, IL 60618-1705'],['312-555-0187']],
					'aslash':[[0,1]],
					'anumbering':['0 4','0 2','0 0'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[9,8],
					'crossAns':[[['Davis','Heather','Ingrahm','Ms','','','','','SEE IngrahmDavis Heather Ms'],[4,1]]]
					//'crossUnit':[["aaa"], ["aaa"], ["ccccc"], ["dddd"], []]	
						
					}, //36
				 {	
				    'name':[['Coffee 2 Go!'],['4120 W. Skyline Blvd.'],['Oak Park, IL 60302-4120'],['312-555-0158']],
					'aslash':[[0,1]],
					'anumbering':['0 0','0 2','0 4'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[3,5]
					}, // 37 
				{	
				    'name':[['De Luna Hotel'],['4800 S. Motor Dr.'],['Chicago, IL 60643-4800'],['708-555-0169']],
					'aslash':[[1]],
					'anumbering':['0 0','0 2'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[4,6]
					}, // 38 
				{	
				    'name':[['Andrew Ecker, RN'],['1605 Carlson Way'],['Chicago, IL 60660-1605'],['312-555-0172']],
					'aslash':[[0,1]],
					'anumbering':['0 2','0 0','0 4'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[5,5]
					}, // 39 
				{	
				    'name':[['Allstate Distributors'],['8480 International Way'],['Chicago, IL 60618-8480'],['312-555-0188']],
					'aslash':[[0]],
					'anumbering':['0 0','0 2'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[1,6],
					'crossAns':[[['All State','','','','','','','','SEE ALSO Allstate'],[1,3]]]
					}, // 40 
				{	
				    'name':[['805 Shopping Center'],['12750 N. 80th St.'],['Chicago, IL 60643-1275'],['312-555-0180']],
					'aslash':[[0,1]],
					'anumbering':['0 0','0 2','0 4'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[0,4]
					}, // 41 
				{	
				    'name':[['Chicago Technical Institute'],['85150 Lake Road'],['Chicago, IL 60657-8515'],['312-555-0168']],
					'aslash':[[0,1],[0,1],[0,1]],
					'anumbering':['0 0','0 2','0 4','2 0','2 2','1 2','1 4'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[3,0]
					}, // 42 
				{	
				    'name':[['Mrs. Michelle Ames, Mayor'],['2675 N. Mimosa Dr.'],['Chicago, IL 60657-2675'],['312-555-0177']],
				    'aslash':[[0,1,2]],
					'anumbering':['0 4','0 2','0 6','0 0'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[1,9]
					}, // 43 
		 		{	
				    'name':[['Institute for Imaging Professionals'],['(Changed its name to '],['Imaging Center)'],['9515 Desmond Blvd.'],['Chicago, IL 60657-9615'],['312-555-0181']],
					'aslash':[[],[],[0]],
					'anumbering':['2 0','2 2'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[9,5],
					'crossAns':[[['Institute','for','Imaging','Professionals','','','','','SEE Imaging Center'],[9,12]]]
					}, // 44  
				{	
				    'name':[['The Coffee House'],['1250 S. 12th St.'],['Chicago, IL 60623-1250'],['312-555-0156']],
					'aslash':[[0,1]],
					'anumbering':['0 2', '0 4','0 0'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[3,7]
					}, // 45 
				{	
				    'name':[['Mrs. Sarah Davis'],['2020 S. Bluff Dr.'],['Chicago, IL 60657-2020'],['312-555-0167']],
					'aslash':[[0,1]],
					'anumbering':['0 4', '0 2','0 0'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[4,3]	
					}, // 46 
						{	
				    'name':[['El Pollo Loco'],['(Translation: The Crazy Chicken)'],['440 N. Beaver Way'],['Chicago, IL 60660-0440'],['312-555-0196']],
				    'aslash':[[],[0,1,2]],
					'anumbering':['1 5','1 7','1 3'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[3,9],
					'crossAns':[[['ElPollo','Loco','','','','','','','SEE Crazy Chicken The'],[5,10]]]
					}, // 47
						{	
				    'name':[['Election Board'],['State of Illinois'],['2900 N. Davis St.'],['Chicago, IL 60660-2900'],['312-555-0190']],
					'aslash':[[0],[0,1]],
					'anumbering':['1 4','1 0','1 2','0 0','0 2'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[9,3]
					}, // 48 
						{	
				    'name':[['The Attic Gallery'],['7649 N. Main St.'],['Chicago, IL 60670-7649'],['708-555-0191']],
					'aslash':[[0,1]],
					'anumbering':['0 2','0 4','0 0'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[1,11]
					}, // 49
						{	
				    'name':[['Edwards Middle School'],['1600 E. Star Dr.'],['Chicago, IL 60625-1600'],['312-555-0192']],
					'aslash':[[0,1]],
					'anumbering':['0 0', '0 2','0 4'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[5,6]
					}, // 50
						{	
				    'name':[['Attorney General\'s Office'],['State of Illinois'],['1700 E. Lake Blvd.'],['Chicago, IL 60618-1700'],['312-555-0193']],	                'aslash':[[0,1],[0,1]],
					'anumbering':['1 4','1 0','1 2','0 0','0 2','0 4'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[9,1]
					}, // 51
					{	
				    'name':[['623 Chimney Sweepers'],['8900 Mission Blvd.'],['Chicago, IL 60637-8900'],['312-555-0194']],
					'aslash':[[0,1]],
					'anumbering':['0 0', '0 2','0 4'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[0,2]
					}, // 52 
						{	
				    'name':[['Alpha & Omega Services, Inc.'],['P.O. Box 1028'],['Chicago, IL 60657-1028'],['312-555-0195']],
                    'aslash':[[0,1,2,3]],
					'anumbering':['0 0', '0 2','0 4','0 6','0 8'],
					'hintt':[''],
					'hintRus':[],
					'folderinfo':[],
					'ansOrder':[1,7]
					} // 53*/
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
			'startbtn':['Welcome to Job 4 of the Records Management Simulation. Take a moment to review the alphabetic filing rules, the cross-reference rules, and directions for the module by clicking on the respective buttons.'],
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
	'alphabeticSimulation':'Review the 54 index cards. Choose an action and then edit each card as needed.<br/> Once all actions have been completed, file each card by dragging the card to the correct folder.',
	'Code': 'Code: Step 1: Separate the filing segment into units by inserting a diagonal slash (/) <br/>between the units. To remove a slash that has already been placed, click on the slash.',
	'uIdentification':'Code: Step 2 (Units): Indicate the primary unit (key unit) by clicking on it to underline it. Then, <br/>click on the remaining units in sequence to place the correct number above each identified unit.',
	'crossreference': 'Add Cross-Reference: Determine what should be placed on the cross-reference card<br/> by typing in the correct information. After you have filed the cross-reference card (or cards), <br/>you will be able to file the main card.',
	'leveling': 'Leveling: Determine the correct leveling by placing the correct level by each name.'
}	