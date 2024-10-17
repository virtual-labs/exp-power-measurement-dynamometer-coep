
var motorSize=0;
var lengthType=0;
var weight="";
 var meter="";
var cylinderPiston="";
data = {};
dataJson = {};
function shaftConfig(){
var htm='<div class="row" >'
		+'<div class="col-sm-6">'
	   +'<label for="weight">Select Motor Size (hp) </label>'
	   +'</div>'
		   
	   +'<div class="col-sm-6" >'
	   +'<select  class="form-control form-control-lg  selectStyle"  id="motorSize" >'
	   +'<option value="0">--- Select Motor Size --- </option>'
//	   +'<option value="0.37">0.5</option>'
	   +'<option value="0.55">0.75</option>'
	   +'<option value="0.75">1</option>'
	   +'<option value="1.1">1.5</option>'
	   +'<option value="1.5">2</option>'
	   +'<option value="1.8">2.5</option>'
	   +'<option value="2.2">3</option>'
	   +'<option value="3">4</option>'
	   +'<option value="4">5</option>'
	   +'<option value="4.4">6</option>'
	   +'<option value="5.2">7</option>'
	   +'<option value="6">8</option>'
	   +'<option value="7">9</option>'
	   +'<option value="7.5">10</option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'
	  +'<br>'
	   
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label for="meter">Select Arm length (mm) </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control form-control-lg  selectStyle"  id="lengthType">'
	   +'<option value="0" selected>--- Select meter --- </option>'
	   +'<option value="1" >103.94</option>'
	   +'<option value="2">203.94</option>'
	   +'<option value="3">303.94</option>'
	  +'<option value="4">403.94</option>'
	  
	  
	   +'</select>'
	   
	   +'</div>'
	   +'</div>'
	   +'<br>'
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
//	   +'<label for="meter">Select Arm length (mm) </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-6">'
	   +'<span id="validMaterialMsg" class="validMaterialMsgStyle" hidden><span>'
	   +'</div>'
	   +'</div>'
	   
	   +'<br>'
	   +'<div class="row"  >'
		   +'<div class="col-sm-12">'
		      +'<button type="button" class="btn btn-danger btnStyle" id="checkConfg" disabled>CHECK CONFIGURATION </button>'
		   +'</div>'
	   +'</div>'
  $("#main-div-conf").html(htm);
			$("#motorSize").change(function(){
//				 if(lengthType==0 )
//				 {
//			 			$("#validMaterialMsg").html("Select length type .");
//			 			$("#validMaterialMsg").attr("hidden",false);
//			 			$("#checkConfg").prop("disabled",true);
//				}
//				 else
//					 {
//					 $("#validMaterialMsg").attr("hidden",true);
//			 			$("#checkConfg").prop("disabled",false);
//					 }
			});
	  $("#lengthType").change(function(){
		  
		  $("#validMaterialMsg").attr("hidden",true);
		  $("#checkConfg").prop("disabled",true);
		 
		    lengthType=$("#lengthType").val();
 			motorSize=	$("#motorSize").val();
 			console.log("lengthType "+lengthType);
 			console.log("motorSize "+motorSize);
 		 if(motorSize==0 ){
 			$("#validMaterialMsg").html("Select Size .");
 			 $("#validMaterialMsg").attr("hidden",false);
 			$("#checkConfg").prop("disabled",true);
			   
 			}
 		else if(lengthType== 4 && motorSize==0.37||lengthType== 2 && motorSize== 0.55||lengthType== 3 && motorSize== 0.55||lengthType== 4 && motorSize== 0.55 ||lengthType== 3 && motorSize== 0.75||lengthType== 4 && motorSize== 0.75  ||lengthType== 4 && motorSize== 1.1
 				||lengthType== 4 && motorSize== 1.8 )
		  { 
 			$("#validMaterialMsg").html("Select another length size ."); 
			  $("#validMaterialMsg").attr("hidden",false);
			  $("#checkConfg").prop("disabled",true);
			  
		  }
		  else
		 {
			  $("#validMaterialMsg").attr("hidden",true);
			  $("#checkConfg").prop("disabled",false);
		 }
		
		 
	  });
	 
	  
	   $("#checkConfg").click(function(){
//		   alert("Configration done");
		   	
		   			lengthType=$("#lengthType").val();
		   			motorSize=	$("#motorSize").val();
					dataJson = {};
					dataJson.motor = motorSize ;
					dataJson.length = lengthType;
					
				   console.log("hp motor    "+motorSize);
				   console.log("main Type    "+lengthType);
				 
				   data.configure = dataJson;
				   console.log(data);

				  $("#main-div-conf").html("");
				  
				  		htm = '<div class="row" id="CalculateActualFlow">'
				
					  +'</div>'
					  +'<div class="row" id="tableDesign">'
					 
					  +'</div>'
					  $("#main-div-conf").html(htm);
				CalculateActualFlowStr = '<div id = "mchk">'
				      +'<div class="col-sm-4">'
				       +'<label  id=""  class="" style="font-size:16px;margin-top:35px;">Expected Power in(Kw) :</label>'
				       +'</div>'
			           +'<div class="col-sm-4">'
				       +'<input type="text" id="speedAns" style="margin-top:30px;width:100%;" disabled class=" form-control"/ >'
				       +'</div>'
				       +'<div class="col-sm-4">'
				       +'<br><button type="submit" id="btnAnsCheck" style="margin-top:10px;width:100%;" class=" btn btn-primary" data-toggle="modal" data-target="#myModal" disabled>Submit</button>'
				       +'</div>'
				       +'</div>'
				        +'<br>'
						       +'<br>'
						       + ' <!-- Modal -->'
								+ '<div class="modal fade" id="myModal" role="dialog">'
								+ ' <div class="modal-dialog modal-md">'
								+ '    <div class="modal-content">'
								+ '     <div class="modal-header">'
								
								+ '       <h4 class="modal-title">Message box</h4>'
								+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
								+ '     </div>'
								+ '     <div class="modal-body">'
								+ '       <p id="modelMsg">This is a small modal.</p>'
								+ '     </div>'
								+ '     <div class="modal-footer">'
								+ '       <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'
								+ '     </div>'
								+ '   </div>'
								+ ' </div>'
								+ '</div>'
				      
				 $("#CalculateActualFlow").html(CalculateActualFlowStr);
//				  $("#main-div-conf").html('<img src="images/shaft_torque.png"  width="90%" height="90%">');
				
				  
				  $("#canvas-div").html("");
//				  showQuestions();
					$("#centerText1").html('CALCULATION');
					$("#centerText2").html('ROPE BRAKE DYNAMOMETER CHARACTERIZATION DIAGRAM');
					mimic();
				

	   });
	   
	}