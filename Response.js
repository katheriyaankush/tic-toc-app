var env;

ola_priority_api = '{"status":"UNREGISTERED","data":{"city":null,"language":"english","registered_phone":"405707754","dialing_code":"+61","priority":"P2","driver_id":null,"operator_id":null,"session_id":"30d6f360-1755-4105-a1e2-db7f5c14bdc1","crn":null,"ivr":{"prompt":false,"files":"ivr600.5","priority":"P2","allowed_input":"9","input_length_min":1,"input_length_max":1,"input_confirmation":false,"meta_data":null,"next":null},"whitelist":false,"source":null,"p99reason":null,"is_london":null,"vehicle_category":null}}';


console.log("ola_priority_apiResponse="+ola_priority_api);
if(ola_priority_api)
{
	eval("jsonObj=" + ola_priority_api + ";");
	var status=jsonObj.status;
	var teluguArray=['','guntur','hyderabad','nellore','rajahmundry','tirupathi','tirupati','vijayawada','vijaywada','visakhapatnam','vishakhapatnam','warangal'];
	var tamilArray=['','chennai','coimbatore','dindigul','dindugal','hosur','madurai','pollachi','pondicherry','pondichery','salem','thanjavur','thiruchirappally','tiruchirappally','tirunelveli','tiruppur','trichy'];
	var malayalamArray=['','trivendrum','ernakulam','thiruvannur','thiruvananthapuram','kochi','kozhikode'];
    var kannadaArray=['','ballari','bangalore','belagavi','bengaluru','davangere','hubli','hubli dharwad','kalaburagi','mangalore','manglore','mysore'];
    

	if(status=='REGISTERED')
	{
		city=jsonObj.data.city;
		
		language=jsonObj.data.language;
		api_language=jsonObj.data.language;
		registered_phone = jsonObj.data.registered_phone;
		dialing_code = jsonObj.data.dialing_code;
		phone = registered_phone;
		console.log("Registered Phone:- "+registered_phone);
		console.log("Dialing Code:- "+dialing_code);

		if(language)
		{
			language=language.toLowerCase();
			if (language == 'english') {
				if (teluguArray.indexOf(city) != -1) {
					language = 'telugu';
				} else if (tamilArray.indexOf(city) != -1) {
					language = 'tamil';
				} else if (malayalamArray.indexOf(city) != -1) {
					language = 'malayalam';
				} else if (kannadaArray.indexOf(city) != -1) {
					language = 'kannada';
				}
			}
			var langArray=['','hindi','english','marathi','gujarati','kannada','tamil','telugu','punjabi','malayalam','bengali'];
			var langArraySuffix=['','_hin','_eng','_hin','_hin','_kan','_tam','_tel','_hin','_eng','_eng'];
			var langArrayLang=['','hindi','english','hindi','hindi','kannada','tamil','telugu','hindi','english','english'];
			if(langArray.indexOf(language) != -1)
			{
				var langSuffix=langArraySuffix[langArray.indexOf(language)];
				var language=langArrayLang[langArray.indexOf(language)];
				console.log("langSuffix="+langSuffix);
			}
			else
			{
				langSuffix='_eng';
				language='english';
			}
		}
		else
		{
			langSuffix='_eng';
			language='english';
		}

		whitelist = jsonObj.data.whitelist;
		priority=jsonObj.data.priority;
		//ola_user_id=jsonObj.data.ola_user_id;
		driver_id=jsonObj.data.driver_id;
		operator_id=jsonObj.data.operator_id;
		crn=jsonObj.data.crn;
		session_id=jsonObj.data.session_id;
		playCallRecordingMessage="playCallRecordingMessage"+langSuffix;
		playBusy="playBusy"+langSuffix;
		p99_reason = jsonObj.data.p99reason;
		if(p99_reason){
			p99_reason = p99_reason.replace(/ /g, "_");
		}


		console.log("city = "+city);
		console.log("language = "+language);
		console.log("whitelist = "+whitelist); 
		console.log("priority = "+priority);
		console.log("driver_id = "+driver_id);
		console.log("operator_id="+operator_id);
		console.log("crn="+crn);
		console.log("session_id = "+session_id);
		console.log("playCallRecordingMessage="+playCallRecordingMessage);
		console.log("playBusy="+playBusy);

		if(jsonObj.data.ivr)
		{
			var promptFlag = jsonObj.data.ivr.prompt;
			console.log("promptFlag ="+promptFlag);
			if(!promptFlag)
			{
				// set main menu values
				promptFlag=promptFlag.toString();
			var	menuPrompt = jsonObj.data.ivr.files;
				if (menuPrompt)
				{
					var ivrListToDump=jsonObj.data.ivr.files.toString();
					var ivrList = ivrListToDump.replace(/,/g, "__");
													
					//	var ivrListForReport = '';
				var	ivrListForReport = ivrListForReport + '__' + ivrList ;
					console.log("menuPrompt="+menuPrompt);
					var menuPrompt_lists=[];
					var i;
					menuPrompt_lists=menuPrompt.split(',');
					var length=menuPrompt_lists.length;
					var setMenuPromptListMsg="";
					for(i=0;i<length;i++)
					{   	console.log("Menu Prompt:- "+menuPrompt_lists[i]);
						if(menuPrompt_lists[i]=='ivr4' || menuPrompt_lists[i]=='welcome_pc'){ continue; }
						if(menuPrompt_lists[i]=='ivr4.6')
						{
							playOTP='true';
						}
						
						if(menuPrompt_lists[i]=='4_4' && (language=='english' || language=='hindi')){
							menuPrompt_lists[i] = '4_4';
							console.log("4_4 Prompt:- "+menuPrompt_lists[i]);
						}
						setMenuPromptListMsg=setMenuPromptListMsg+menuPrompt_lists[i].replace('.','_')+langSuffix+",blank"+",";
					}
				var	setMenuPromptListMsg=''+setMenuPromptListMsg+'';
					//setMenuPromptListMsg="blank"+","+setMenuPromptListMsg;
				}
				else
				{
					setMenuPromptListMsg=menuPrompt;
				}
			var	allowed_input = jsonObj.data.ivr.allowed_input;
						
				if(allowed_input)
				{
					var allowed_input_dump = allowed_input.replace(/,/g, "_");
				var 	allowed_input_dump_report=allowed_input_dump_report+'__'+allowed_input_dump;
				}
				else
				{
				var	allowed_input_dump_report=allowed_input_dump;
				}
		
				//allowed_input_dump_report = allowed_input_dump_report + '__' + allowed_input_dump ;
				minDigit = jsonObj.data.ivr.input_length_min;
				maxDigit = jsonObj.data.ivr.input_length_max;
				minDigit=minDigit.toString();
				maxDigit=maxDigit.toString();
				//minDigit=parseInt(minDigit);
				//maxDigit=parseInt(maxDigit);


				input_confirmation = jsonObj.data.ivr.input_confirmation;

				console.log("allowed_input = "+allowed_input);
				console.log("minDigit = "+minDigit);
				console.log("maxDigit = "+maxDigit);
				console.log("input_confirmation =  "+input_confirmation);
				console.log("promptFlag ="+promptFlag);	
				console.log("setMenuPromptListMsg="+setMenuPromptListMsg);

			}
			else
			{
				console.log("ELSE...");
				//promptFlag=promptFlag.toString();
				var messagePrompt = jsonObj.data.ivr.files;
				if(messagePrompt){
					var ivrListToDump1=jsonObj.data.ivr.files.toString();
					var ivrList1 = ivrListToDump1.replace(/,/g, "__");
				}
				else{
					var ivrListToDump1='null';
					var ivrList1 = ivrListToDump1;
				}
				
			var	ivrListForReportMessage = ivrListForReportMessage + '__' + ivrList1 ;
				var promptFlag='true';
				if (menuPrompt)
				{
					var messagePrompt_lists=[];
					var i;
					messagePrompt_lists=messagePrompt.split(',');
					var length=messagePrompt_lists.length;
					var setMessagePromptListMsg="";
					for(i=0;i<length;i++)
					{   
						if(messagePrompt_lists[i]=='4_4' && (language=='english' || language=='hindi')){
							messagePrompt_lists[i] = '4_4';
							console.log("4_4 Prompt:- "+messagePrompt_lists[i]);
						}
						setMessagePromptListMsg=setMessagePromptListMsg+messagePrompt_lists[i].replace('.','_')+langSuffix+",blank"+",";
					}
					setMessagePromptListMsg=setMessagePromptListMsg;
				}
				else
				{
					setMessagePromptListMsg=menuPrompt;
				}
			}
			console.log("promptFlag ="+promptFlag);	
			console.log("setMessagePromptListMsg="+setMessagePromptListMsg);
		}
	}
	else if (status=='UNREGISTERED')
	{
		city=jsonObj.data.city;
		language=jsonObj.data.language;
		api_language=jsonObj.data.language;
		registered_phone = jsonObj.data.registered_phone;
		dialing_code = jsonObj.data.dialing_code;
		phone = registered_phone;
		console.log("Registered Phone:- "+registered_phone);
		console.log("Dialing Code:- "+dialing_code);

		if(language)
		{
			language=language.toLowerCase();
			if (language == 'english') {
				if (teluguArray.indexOf(city) != -1) {
					language = 'telugu';
				} else if (tamilArray.indexOf(city) != -1) {
					language = 'tamil';
				} else if (malayalamArray.indexOf(city) != -1) {
					language = 'malayalam';
				} else if (kannadaArray.indexOf(city) != -1) {
					language = 'kannada';
				}
			}
			var langArray=['','hindi','english','marathi','gujarati','kannada','tamil','telugu','punjabi','malayalam','bengali'];
			var langArraySuffix=['','_hin','_eng','_hin','_hin','_kan','_tam','_tel','_hin','_eng','_eng'];
			var langArrayLang=['','hindi','english','hindi','hindi','kannada','tamil','telugu','hindi','english','english'];
			if(langArray.indexOf(language) != -1)
			{
				var langSuffix=langArraySuffix[langArray.indexOf(language)];
				var language=langArrayLang[langArray.indexOf(language)];
				console.log("langSuffix="+langSuffix);
			}
			else
			{
				langSuffix='_eng';
				language='english';
			}
		}
		else
		{
			langSuffix='_eng';
			language='english';
		}

		whitelist = jsonObj.data.whitelist;
		priority=jsonObj.data.priority;
		driver_id=jsonObj.data.driver_id;
		operator_id=jsonObj.data.operator_id;
		crn=jsonObj.data.crn;
		session_id=jsonObj.data.session_id;
		p99_reason = jsonObj.data.p99reason;
		if(p99_reason){
			p99_reason = p99_reason.replace(/ /g, "_");
		}

		console.log("city = "+city);
		console.log("language = "+language);
		console.log("whitelist = "+whitelist); 
		console.log("priority = "+priority);
		console.log("driver_id = "+driver_id);
		console.log("operator_id="+operator_id);
		console.log("crn="+crn);
		console.log("session_id = "+session_id);

		if(jsonObj.data.ivr)
		{
			var promptFlag = jsonObj.data.ivr.prompt;

			if(promptFlag == false)
			{
				// set main menu values
				promptFlag=promptFlag.toString();
				menuPrompt = jsonObj.data.ivr.files;
				if (menuPrompt)
				{
					var ivrListToDump=jsonObj.data.ivr.files.toString();
					var ivrList = ivrListToDump.replace(/,/g, "__");
										
					ivrListForReport = ivrListForReport + '__' + ivrList ;
					var menuPrompt_lists=[];
					var i;
					menuPrompt_lists=menuPrompt.split(',');

					var length=menuPrompt_lists.length;

					var setMenuPromptListMsg="";

					for(i=0;i<length;i++)
					{   
						if(menuPrompt_lists[i]=='4_4' && (language=='english' || language=='hindi')){
							menuPrompt_lists[i] = '4_4';
							console.log("4_4 Prompt:- "+menuPrompt_lists[i]);
						}
						setMenuPromptListMsg=setMenuPromptListMsg+menuPrompt_lists[i].replace('.','_')+langSuffix+",blank"+",";
					}
					setMenuPromptListMsg="blank"+","+setMenuPromptListMsg;
				}
				else
				{
					setMenuPromptListMsg=menuPrompt;
				}
				allowed_input = jsonObj.data.ivr.allowed_input;
				if(allowed_input)
				{
					var allowed_input_dump = allowed_input.replace(/,/g, "_");
					allowed_input_dump_report=allowed_input_dump_report+'__'+allowed_input_dump;	
				}
				else
				{
					allowed_input_dump_report=allowed_input_dump;
				}

				//allowed_input_dump_report = allowed_input_dump_report + '__' + allowed_input_dump ;
				minDigit = jsonObj.data.ivr.input_length_min;
				maxDigit = jsonObj.data.ivr.input_length_max;
				minDigit=minDigit.toString();
				maxDigit=maxDigit.toString();
				input_confirmation = jsonObj.data.ivr.input_confirmation;

				console.log("menuPrompt = "+menuPrompt);
				console.log("allowed_input = "+allowed_input);
				console.log("minDigit = "+minDigit);
				console.log("maxDigit = "+maxDigit);
				console.log("input_confirmation =  "+input_confirmation);
				console.log("promptFlag ="+promptFlag);
				console.log("setMenuPromptListMsg="+setMenuPromptListMsg);

			}
			else
			{
				var messagePrompt = jsonObj.data.ivr.files;
				
				if (messagePrompt)
				{
					var ivrListToDump1=jsonObj.data.ivr.files.toString();
					var ivrList1 = ivrListToDump1.replace(/,/g, "__");
					ivrListForReportMessage = ivrListForReportMessage + '__' + ivrList1 ;
					var promptFlag='true';
					var messagePrompt_lists=[];
					var i;
					messagePrompt_lists=messagePrompt.split(',');
					var length=messagePrompt_lists.length;
					var setMessagePromptListMsg="";

					for(i=0;i<length;i++)
					{   
						if(messagePrompt_lists[i]=='4_4' && (language=='english' || language=='hindi')){
							messagePrompt_lists[i] = '4_4';
							console.log("4_4 Prompt:- "+messagePrompt_lists[i]);
						}
						setMessagePromptListMsg=setMessagePromptListMsg+messagePrompt_lists[i].replace('.','_')+langSuffix+",blank"+",";
						console.log("setMessagePromptListMsg="+setMessagePromptListMsg);
					}
					setMessagePromptListMsg="blank"+","+setMessagePromptListMsg;
				}
				else
				{
					setMessagePromptListMsg=messagePrompt;
				}
			}

		}

	}
	playDigitCollectionMenu="Mob1"+langSuffix;
	playNoInput="noinput1"+langSuffix;
	playInvalidInput="invalid1"+langSuffix;
	playMaxtries="attempts1"+langSuffix;
	//playZeroTolarance="playZeroTolarance"+langSuffix;
}

console.log("promptFlag="+promptFlag);

srcPhone = registered_phone;
phone = srcPhone;
console.log("Customer Number:- "+registered_phone);








//   After menu
var var_digit_collection = 9
var allowed_input = 9;
var maxTries;

var env;
var validationExpression='['+allowed_input+']';

if(validationExpression.indexOf(var_digit_collection) != -1  && var_digit_collection!='')
{
	var_valid="ValidInput";
	count=0;

	var var_digit_collection_dump;
	if(var_digit_collection_dump=='' || var_digit_collection_dump==null || var_digit_collection_dump==undefined)
	{
		var_digit_collection_dump=var_digit_collection;
	}
	else
	{
		var_digit_collection_dump=var_digit_collection_dump+'_'+var_digit_collection;
	}
	session_meta_data='{"key'+var_digit_collection+'":"value'+var_digit_collection+'"}';
	if(input_confirmation=="true")
	{
			var_menuPrompt="YouHaveEnetered,"+var_digit_collection+"_"+language+",ConfirmationMenu";
			var_digit_collection='';
	}
}


else if(var_digit_collection=='' || var_digit_collection==null)
{
	var_valid="NoInput";
	count++;
	var var_digit_collection_dump;
	if(var_digit_collection_dump=='' || var_digit_collection_dump==null || var_digit_collection_dump==undefined)
	{
	var_digit_collection_dump="NoInput";
	}
	else
	{
	var_digit_collection_dump=var_digit_collection_dump+'_NoInput';
	}
}

else if(var_digit_collection.length > 2 )
{
	var_valid="ValidInput";
	count=0;

	var var_digit_collection_dump;
	if(var_digit_collection_dump=='' || var_digit_collection_dump==null || var_digit_collection_dump==undefined)
	{
		var_digit_collection_dump=var_digit_collection;
	}
	else
	{
		var_digit_collection_dump=var_digit_collection_dump+'_'+var_digit_collection;
	}
	session_meta_data='{"key'+var_digit_collection+'":"value'+var_digit_collection+'"}';
}

else
{
	var_valid="InvalidInput";
	count++;
	var var_digit_collection_dump;
	if(var_digit_collection_dump=='' || var_digit_collection_dump==null || var_digit_collection_dump==undefined)
	{
	var_digit_collection_dump="InvalidInput";
	}
	else
	{
	var_digit_collection_dump=var_digit_collection_dump+'_InvalidInput';
	}
}
if(count==maxTries)
{
	maxAttempts = "yes";
}
else{
	maxAttempts = "no";
}
console.log("var_digit_collection_dump="+var_digit_collection_dump);
console.log("var_digit_collection="+var_digit_collection);
console.log("var_valid="+var_valid);
console.log("count="+count);
console.log("session_meta_data="+session_meta_data);
console.log("Max Attempts reached:- "+maxAttempts);
console.log("Max Tries Prompt:- "+playMaxtries);