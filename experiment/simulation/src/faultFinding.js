function tableCreateForFualtFinding1()
			{
				 var min = 0.5;
				 var max = 10;
				  ent = 0;
				 fault = {};
				
				var tableMainDiv = '<h2><center>OBSERVE  READING & IDENTIFY THE FAULT</center></h2>'
			        + '<table class="table table-bordered" >'
					+ ' <thead>'
					+ '  <tr  style="padding:10px;background-color:#1d2b37;color:#fff;">'
//					+ '  <th>Percentage</th>'
					+ '   <th>Calculated Torque(Standard) (Nm)</th>'
					+ '  <th >Power (Kw)</th>'

					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
				for (var i = 0,p=0; i < masterJson.demo.length; i++,p++) {
					var errorRandom = Math.random() * (max - min) + min;
					console.log("errorRandom   "+errorRandom);
					
					var errorAddFault1 =parseFloat(errorRandom+masterJson.demo[i].torque_err);
					var errorAddFault = 0;
					console.log("errro"+ errorAddFault);
					
					tableMainDiv += '<tr>'
//						+ '   <td><center>' + masterJson.demo[i].RPM + '</center></td>'
						+ '   <td style="background-color:#83e3998a;"><center>' + masterJson.demo[i].torque_corr + '</center></td>'
						+ '   <td style="background-color:#de767645"><center>' + errorAddFault + '</center></td>'
						+ '     </tr>'

						
				}
				tableMainDiv += ' </tbody>'
					 + '  </table>'
				 $("#fualtFindingTable").html(tableMainDiv);
			}
			
			function tableCreateForFualtFinding2()
				{ 
				var min = 2;
				 var max = masterJson.demo.length-1;
				 var place=parseInt(Math.random() * (max - min) + min);
				 console.log("Place Continue  "+place);
				
				var tableMainDiv = '<h2><center>OBSERVE THE TABLE READING & SELECT THE FAULT</center></h2>'
			        + '<table class="table table-bordered" >'
					+ ' <thead>'
					+ '  <tr  style="padding:10px;background-color:#1d2b37;color:#fff;">'
//					+ '  <th><center>Percentage</center></th>'
					+ '   <th><center>Calculated Torque (Standard) (Nm)</center></th>'
					+ '  <th><center>Power (Kw)</center></th>'

					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
				for (var i = 0,p=0; i < masterJson.demo.length; i++,p++) {
					
					if(place<=i-1)
						{
							var errorshaft = masterJson.demo[i].torque_corr + 2;
							tableMainDiv += '<tr>'
//							+ '   <td><center>' + masterJson.demo[i].RPM + '</center></td>'
							+ '   <td style="background-color:#83e3998a;"><center>' + masterJson.demo[i].torque_corr+ '</center></td>'
							+ '   <td style="background-color:#de767645;"><center>' + errorshaft + '</center></td>'
							+ '     </tr>'
						
						}
					else
						{
						var errorshaft = masterJson.demo[i].torque_corr - 2;
						tableMainDiv += '<tr>'
//							+ '   <td><center>' + masterJson.demo[i].RPM + '</center></td>'
							+ '   <td style="background-color:#83e3998a;"><center >' + masterJson.demo[i].torque_corr + '</center></td>'
							+ '   <td style="background-color:#de767645;"><center >' + errorshaft + '</center></td>'
							+ '     </tr>'
						}
					

						
				}
				tableMainDiv += ' </tbody>'
					 + '  </table>'
				 $("#fualtFindingTable").html(tableMainDiv);
			}


 var randomNumber;
 var ent = 0;
 fault = {};
function fualtFinding()
{
	
$("#centerText1").html("EDDY CURRENT DYNAMOMETER DIAGRAM");
	 $("#centerText2").html("FAULT FINDING ");
	$("#main-div-conf").html("");
	 $("#canvas-div").html("");
	 
	 $("#nextFaultFindingDiv").html("");
	 $("#calibrationDiv").html("");
	 $("#panelHeadingBold").html(""); 
	  randomNumber=Math.round(Math.random() * 2);
	 randomNumber = parseInt(randomNumber);
	 console.log("random  "+randomNumber);
	var str=''
	str+='<div class="row ">'
//			+'<button type="button" class="col-sm-12 btn btn-danger" style="margin-top:20px;" id="nextFaultFinding"disabled>Next Level</button>'
		 +'<div class="col-sm-12 " id="fualtFindingTable">'
		+'</div>'
		 
		 +'<div class="col-sm-12">'
		 +' <select  class="form-control col-sm-12" id="errorSelection">'
		 +' <option  value="">Select Error type </option>'
		 +' <option  value="0"> Flow Switch Damage </option>'
		 +'  <option value="1">Spring Scale Damage</option>'
//		 +'  <option value="2">Overloading because of cold water supply</option>'
		
		 +'  </select>'
		 +'<div class="col-sm-12 ">'
		 +'<div class="alert alert-danger" role="alert" id="alertMsgBox" hidden>'
		 +'<b id="msgBox"> Wrong Selection !!!!!!!!</b>'
		+'</div>'
			+'</div>'
    +'</div>'
    
    +'</div>'
    $("#canvas-div").html(str);
	
	if(randomNumber==0){
		tableCreateForFualtFinding2();
	}
	else
		{
		tableCreateForFualtFinding1();
		}
	
    $("#main-div-conf").html("<img src='images/shaft_torque.png' class='img-fluid'>");
	
    $("#errorSelection").change(function() {
		ent++;
		fault.fault = ent;
		 data.Fault = fault;
    	var selectedOption=$("#errorSelection").val();
    	console.log("selectedOption   "+selectedOption);
//    	if(counter<=3){
    		if( randomNumber==selectedOption){
    			$("#main-div-conf").html("");
    			 $("#canvas-div").html("");
    			 $("#alertMsgBox").attr('hidden',true);

    			 
					 result();
//    			 $("#main-div").html("<b class='errorMsgf col-sm-12 '> Congratulations. experiment completed successfully</b>");
    		}
    		else{
    			$("#alertMsgBox").attr('hidden',false);
    			$("#msgBox").html("<b class='errorMsgf'> Wrong selection . </b>");	
    			}
//    	}
//    	else{
//    		
//    	}
    	
//    	counter=counter+1;
    });
}//main function

