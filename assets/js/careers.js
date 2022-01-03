function validatedate()
{
	 var dob = document.getElementById("dob").value;
	 if(!isDate(dob))
	 {
		 alert('Please enter valid date.');
		 document.getElementById("dob").value="";
		 document.getElementById("ageId").value="";
		 return false;
	 }
	 else
	 {
		 ageCount();
		 return true;
	 }	 
}

function isDate(txtDate)
{
    var currVal = txtDate;
    if(currVal == '')
        return false;
    
    var rxDatePattern = /^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/; //Declare Regex
    var dtArray = currVal.match(rxDatePattern); // is format OK?
    
    if (dtArray == null) 
        return false;
    
    //Checks for mm/dd/yyyy format.
    dtMonth = dtArray[3];
    dtDay= dtArray[5];
    dtYear = dtArray[1];        
    
    if (dtMonth < 1 || dtMonth > 12) 
        return false;
    else if (dtDay < 1 || dtDay> 31) 
        return false;
    else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31) 
        return false;
    else if (dtMonth == 2) 
    {
        var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
        if (dtDay> 29 || (dtDay ==29 && !isleap)) 
                return false;
    }
    return true;
}  

function ageCount() {
    var date1 = new Date();
    var dob = document.getElementById("dob").value;
    var date2 = new Date(dob);
    var pattern = /^\d{4}\/\d{1,2}\/\d{1,2}$/;
    //Regex to validate date format (yyyy/mm/dd)       
    if (pattern.test(dob)) {
        var y1 = date1.getFullYear();
        //getting current year            
        var y2 = date2.getFullYear();
        //getting dob year            
        var age = y1 - y2;
        //calculating age 
		if(!isNaN(age))
		{
			document.getElementById("ageId").value = age;
			document.getElementById("ageId").focus ();
		}
		else
		{
			 alert("Invalid date format. Please Input in (yyyy/mm/dd) format!");
			 document.getElementById('dob').outerHTML = document.getElementById('dob').outerHTML;
			 return false;
		}
        return true;
    } else {
        alert("Invalid date format. Please Input in (yyyy/mm/dd) format!");
		document.getElementById('dob').outerHTML = document.getElementById('dob').outerHTML;
        return false;
    }

}





function validateForm() {
	
	
	if( document.getElementById("name").value == "")
	{
		alert("Kindly enter your Name.");
		return false;
	}
	if(!document.getElementById("name").value.match(/^[a-zA-Z .']+$/))
	{		
		alert("Enter only alphabets in name field.");
		document.getElementById('name').value = "";
		return false;
	}
			
	if( !document.getElementById("male").checked  &&  !document.getElementById("female").checked )
	{
		alert("Please Fill in your Gender");
		return false;
	}
	if(document.getElementById("dob").value == "")
	{
		alert("Kindly enter your Date of Birth.");
		return false;
	}
		
	if(document.getElementById("dipdep").value == "")
	{
		alert("Kindly enter the department of Diploma or HSC.");
		return false;
	}
	if(!document.getElementById("dipdep").value.match(/^[a-zA-Z .]+$/))
	{		
		alert("Enter only alphabets in Diploma or HSC department field.");
		document.getElementById('dipdep').value = "";
		return false;
	}
	if(document.getElementById("dipmark").value == "")
	{
		alert("Kindly enter the marks in percentage of Diploma or HSC.");
		return false;
	}
	if(!document.getElementById("dipmark").value.match(/^[0-9]+$/))
	{		
		alert("Enter Diploma or HSC mark field correctly.");
		document.getElementById('dipmark').value = "";
		return false;
	}
	if(document.getElementById("dipyear").value == "")
	{
		alert("Kindly enter the passed out year of Diploma or HSC.");
		return false;
	}
	if(!document.getElementById("dipyear").value.match(/^[0-9]+$/))
	{		
		alert("Enter Diploma or HSC year field correctly.");
		document.getElementById('dipyear').value = "";
		return false;
	}
	if(document.getElementById("ugdep").value == "")
	{
		alert("Kindly enter the department of UG.");
		return false;
	}
	if(!document.getElementById("ugdep").value.match(/^[a-zA-Z .]+$/))
	{		
		alert("Enter only alphabets in UG department field.");
		document.getElementById('ugdep').value = "";
		return false;
	}
	if(document.getElementById("ugmark").value == "")
	{
		alert("Kindly enter the marks in percentage of UG.");
		return false;
	}
	if(!document.getElementById("ugmark").value.match(/^[0-9]+$/))
	{		
		alert("Enter ug mark field correctly.");
		document.getElementById('ugmark').value = "";
		return false;
	}
	if(document.getElementById("ugyear").value == "")
	{
		alert("Kindly enter the passed out year of UG.");
		return false;
	}
	if(!document.getElementById("ugyear").value.match(/^[0-9]+$/))
	{		
		alert("Enter UG year field correctly.");
		document.getElementById('ugyear').value = "";
		return false;
	}
	if(!document.getElementById("pgdep").value.match(/^[a-zA-Z .]+$/) && !document.getElementById("pgdep").value=="" )
	{		
		alert("Enter only alphabets in PG department field.");
		document.getElementById('pgdep').value = "";
		return false;
	}
    if(!document.getElementById("pgmark").value.match(/^[0-9]+$/) && !document.getElementById("pgmark").value=="" )
	{		
		alert("Enter PG mark field correctly.");
		document.getElementById('pgmark').value = "";
		return false;
	}
	if(!document.getElementById("pgyear").value.match(/^[0-9]+$/) && !document.getElementById("pgyear").value=="" )
	{		
		alert("Enter PG year field correctly.");
		document.getElementById('pgyear').value = "";
		return false;
	}
	if(document.getElementById("email").value == "")
	{
		alert("Kindly enter your email id.");
		return false;
	}

	if(!validateEmail(document.getElementById("email").value))
	{
		alert("Please enter valid email id.");
		document.getElementById("email").value = ""
		return false;
	}
	if(document.getElementById("phone").value == "")
	{
		alert("Kindly enter your Phone Number.");
		return false;
	}
	if(!document.getElementById("phone").value.match(/^[0-9]+$/))
	{		
		alert("Enter Phone number correctly.");
		document.getElementById('phone').value = "";
		return false;
	}
	if( !document.getElementById("yespass").checked  &&  !document.getElementById("nopass").checked )
	{
		alert("Please choose your Passport Details.");
		return false;
	}
	if( document.getElementById("yespass").checked  &&  document.getElementById("passText").value=="")
	{
		alert("Please Fill in your Passport Number.");
		return false;
	}
	if( document.getElementById("yespass").checked  && !document.getElementById("passText").value.match(/^[a-zA-Z0-9]+$/) )
	{
		alert("Please Fill in your Passport Number correctly.");
		document.getElementById("passText").value="";
		return false;
	}
	
	if( !document.getElementById("workyes").checked  &&  !document.getElementById("workno").checked )
	{
		alert("Please choose your willingness to work in Japan.");
		return false;
	}
	if( document.getElementById("workyes").checked  &&  !document.getElementById("stradio").checked && !document.getElementById("ltradio").checked)
	{
		alert("Please choose either Short Term or Long Term for working in Japan.");
		return false;
	}
	if(!document.getElementById("cc").checked &&  !document.getElementById("cj").checked &&  !document.getElementById("ccn").checked &&  !document.getElementById("cn").checked 
											&&  !document.getElementById("cs").checked &&  !document.getElementById("co").checked )
	{
		alert("Choose atleast one technology you are confident.");
		return false;
	}  
	if(document.getElementById("co").checked && document.getElementById("confother").value == "")
	{
		alert("Please Fill in your other confident technology.");
		return false;
	}
	/*if(document.getElementById("co").checked && !document.getElementById("confother").value.match(/^[a-zA-Z0-9/&#@*.]+$/))
	{
		alert("kindly separate your other confident technologies by /.");
		document.getElementById("confother").value="";
		return false;
		
	}*/
	if(!document.getElementById("wc").checked &&  !document.getElementById("wj").checked &&  !document.getElementById("wcn").checked &&  !document.getElementById("wn").checked 
											&&  !document.getElementById("ws").checked &&  !document.getElementById("wo").checked )
	{
		alert("Choose atleast one technology you are willing to work with.");
		return false;
	} 
	if(document.getElementById("wo").checked && document.getElementById("willother").value == "")
	{
		alert("Please Fill in your other willing technology.");
		return false;
	}
	/*if(document.getElementById("wo").checked && !document.getElementById("willother").value.match(/^[a-zA-Z0-9/&#@*.]+$/))
	{
		alert("kindly separate your other willing technologies by /.");
		document.getElementById("willother").value="";
		return false;
		
	}*/
	if(!document.getElementById("ac").checked &&  !document.getElementById("aj").checked &&  !document.getElementById("acn").checked &&  !document.getElementById("an").checked
											&&  !document.getElementById("as").checked &&  !document.getElementById("ao").checked )
	{
		alert("Choose atleast one Area of your Interest.");
		return false;
	} 
	if(document.getElementById("ao").checked && document.getElementById("areaother").value == "")
	{
		alert("Please Fill in your other Area of Interest.");
		return false;
	}
	/*if(document.getElementById("ao").checked && !document.getElementById("areaother").value.match(/^[a-zA-Z0-9/&#@*.]+$/))
	{
		alert("kindly separate your other areas of interest by /.");
		document.getElementById("areaother").value="";
		return false;
		
	}*/	
	if(document.getElementById("address").value == "")
	{
		alert("Kindly enter your address.");
		return false;
	}
	/*if(!document.getElementById("address").value.match(/^[a-zA-Z0-9/,''#&-.]+$/))
	{		
		alert("Enter address correctly.");
		document.getElementById('address').value = "";
		return false;
	}*/
	if(document.getElementById("pincode").value == "")
	{
		alert("Kindly enter your Pincode.");
		return false;
	}
	if(!document.getElementById("pincode").value.match(/^[0-9]+$/))
	{		
		alert("Enter Pincode correctly.");
		document.getElementById('pincode').value = "";
		return false;
	}
	if(document.getElementById("resume").value == "")
	{
		alert("Kindly upload your resume.");
		return false;
	}
	   	
	return true;
}


function showPassport()
{
	document.getElementById("passLabel").style.visibility= "visible";
	document.getElementById("passText").style.visibility= "visible";
}

function hidePassport()
{
	document.getElementById("passLabel").style.visibility= "hidden";
	document.getElementById("passText").style.visibility= "hidden";
}
function showTerm()
{
	document.getElementById("termlabel").style.visibility= "visible";
	document.getElementById("stradio").style.visibility= "visible";
	document.getElementById("stlabel").style.visibility= "visible";
	document.getElementById("ltradio").style.visibility= "visible";
	document.getElementById("ltlabel").style.visibility= "visible";
}
function hideTerm()
{
	document.getElementById("termlabel").style.visibility= "hidden";
	document.getElementById("stradio").style.visibility= "hidden";
	document.getElementById("stlabel").style.visibility= "hidden";
	document.getElementById("ltradio").style.visibility= "hidden";
	document.getElementById("ltlabel").style.visibility= "hidden";
}
function displayConfOther()
{
	if(document.getElementById("co").checked)
	{
		document.getElementById("confother").style.visibility= "visible";
	}
	else
	{
		document.getElementById("confother").style.visibility= "hidden";
	}
}
function updateConfOther()
{
	var confvalue = document.getElementById("confother").value;
	document.getElementById("co").value=confvalue;
}

function displayWillOther()
{
	if(document.getElementById("wo").checked)
	{
		document.getElementById("willother").style.visibility= "visible";
	}
	else
	{
		document.getElementById("willother").style.visibility= "hidden";
	}
}
function updateWillOther()
{
	var willvalue = document.getElementById("willother").value;
	document.getElementById("wo").value=willvalue;
}
function displayAreaOther()
{
	if(document.getElementById("ao").checked)
	{
		document.getElementById("areaother").style.visibility= "visible";
	}
	else
	{
		document.getElementById("areaother").style.visibility= "hidden";
	}
}
function updateAreaOther()
{
	var areavalue = document.getElementById("areaother").value;
	document.getElementById("ao").value=areavalue;
}

 function Checkfiles()
    {
        var fup = document.getElementById('resume');
        var fileName = fup.value;
        var ext = fileName.substring(fileName.lastIndexOf('.') + 1);

		if(ext =="doc" || ext=="docx" || ext=="pdf" || ext =="DOC" || ext=="DOCX" || ext=="PDF")
		{
			return true;
		}
		else
		{
					if (fup != null) {
			document.getElementById('resume').outerHTML = fup.outerHTML;}
			alert("Upload files with .doc or .docx or .pdf extensions only");
			return false;
		}
    }
	
function validateEmail(email){
//	var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

//var emailReg = new RegExp(([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4}));

 var emailReg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	return emailReg.test(email);

}

function emaillower()
{
var str = document.getElementById('email').value;
var res = str.toLowerCase();
document.getElementById('email').value=res;
}

