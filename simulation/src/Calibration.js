function calibration()
	{
		htm='';
			htm+='<div class="card" id="calibrationDiv">'
			+'  <div class="card-header  text-black" style="font-size:20px;"><center>CALIBRATION</center></div>'
			+' <div class="card-body"  style="background-color:;margin-right:10px;margin-left:10px;">'
				+'<div class="row" >'
//				+'<div class="col-sm-3">'
//				+'</div>'
			+'<div class="col-sm-3" id="zeroAnswer" >'
			+'<div class="card ">'
			+'  <div class="card-header  text-black" style="background-color:#072647;"><center> ZERO ERROR</center></div>'
			+' <div class="card-body">'
			+'<input type="text" class="form-control" id="zeroText"/>'
			+'<br>'
			 +'<button type="button"   class="btn btn-danger btnStyle" id="zeroSubmit"  ><b> SUBMIT </b></button>'
			+'</div> '
			//+' <div class="card-footer">Formula : Minimum Actual Flow - Minimum Standard Flow </div>'
			+' </div>'
			+'</div>'
			
			+'<div class="col-sm-3" id="spanAnswer" hidden>'
			+'<div class="card">'
			+'  <div class="card-header  text-white" style="background-color:#072647;"><center>SPAN ERROR</center></div>'
			+' <div class="card-body">'
			+'<input type="text" class="form-control" id="spanText" />'
			+'<br>'
			 +'<button type="button"   class="btn btn-danger btnStyle" id="spanSubmit"  ><b> SUBMIT </b></button>'
				
			+'</div> '
		//	+' <div class="card-footer">Formula :Maximum Actual Flow - Maximum Standard Flow</div>'
			+' </div>'
			+'</div>'
			
			+'<div class="col-sm-3" id="Linearity" hidden>'
			+'<div class="card ">'
			+'  <div class="card-header  text-black" style="background-color:#072647;"><center>LINEARITY</center></div>'
			+' <div class="card-body">'
			+'<input type="text" class="form-control" id="linearText"/>'
			+'<br>'
			 +'<button type="button"   class="btn btn-danger btnStyle" id="linearSubmit"  ><b> SUBMIT </b></button>'
			+'</div> '
			//+' <div class="card-footer">Formula : Minimum Actual Flow - Minimum Standard Flow </div>'
			+' </div>'
			+'</div>'
			+'<div class="col-sm-3" id="accuracy" hidden>'
			+'<div class="card ">'
			+'  <div class="card-header  text-black" style="background-color:#072647;"><center>ACCURACY(%)</center></div>'
			+' <div class="card-body">'
			+'<input type="text" class="form-control" id="accuracyText"/>'
			+'<br>'
			 +'<button type="button"   class="btn btn-danger btnStyle" id="accuracySubmit"  ><b> SUBMIT </b></button>'
			+'</div> '
			//+' <div class="card-footer">Formula : Minimum Actual Flow - Minimum Standard Flow </div>'
			+' </div>'
			+'</div>'

			+'</div>'
			
			+'<div class="row" id="calibrationPanel" >'
			+'<div class="col-sm-1">'
			+'</div>'
			+'<div class="col-sm-5 " id="zeroPanel" hidden>'
				+'<div class="panel " >'
			      +' <div class="panel-heading" style="background-color:#072647;color:#fff;"><center>ADJUST ZERO </center></div>'
			     	+' <div class="panel-body" id="plusMinusCalibrationZero">'
				      	+'<img src="images/minusresize.png" class="img-fluid imgPlusMinus1 " id="minusZero" ></img>'
						+'<img src="images/resizeknob.png" class="img-fluid imgPlusMinus img-circle " id="knobZero" ></img>'
						+'<img src="images/plusresize.png" class="img-fluid imgPlusMinus1 " id="plusZero"></img>'
					 +'</div>'
					 +'<div class="alert alert-success" role="alert"  id="errorZeroAlert" style="margin:15px;" hidden>'
						+' <b id="errorZeroText">Zero Adjusted Successfully ...</b>'
					+'</div>'
				 +'</div>'
				
		 +'</div>'
		+'<div class="col-sm-5"  id="spanPanel" hidden>'
				+'<div class="panel "  >'
			      +' <div class="panel-heading" style="background-color:#072647;color:#fff;"><center>ADJUST SPAN</center></div>'
			     	+' <div class="panel-body" id="plusMinusCalibrationSpan">'
				     	+'<img src="images/minusresize.png"class="imgPlusMinus1 "  id="minusMax" ></img>'
						+'<img src="images/resizeknob.png" class="imgPlusMinus img-circle" id="knobSpan"></img>'
						+'<img src="images/plusresize.png"  class="imgPlusMinus1 " id="plusMax"></img>'
					+'</div>'
					+'<div class="alert alert-success" role="alert"  id="spanErrorAlert" style="margin:15px;" hidden>'
						+' <b id="spanErrorText">Span Adjusted Successfully .</b>'
					+'</div>'
					+'<div class="alert alert-danger" role="alert"  id="errorZeroAlert2" style="margin:15px;" hidden>'
						+' <b id="zeroErrorText2">But zero disturbs .</b>'
					+'</div>'
			     +'</div>'
		+'</div>'
		
		+'<div class="col-sm-1">'
		+'</div>'
		

	 +'</div>' 
	 +'</div>'
	 +'</div>'
	 var algo='<div class="row" id="algoPanel" >'
		 +'<div class="col-sm-3 " id="algo1" hidden >'
			+'<div class="panel " >'
		      +' <div class="panel-heading" style="background-color:#072647;color:#fff;"><center>Algorithm -1</center></div>'
		     	+' <div class="panel-body" id="algo1Panel">'
			      	+'<img src="images/minusresize.png" class="imgPlusMinus1 " id="minusAlgo1" ></img>'
					+'<img src="images/resizeknob.png" class="img-fluid imgPlusMinus img-circle " id="knobAlgo1" ></img>'
					+'<img src="images/plusresize.png" class="imgPlusMinus1 " id="plusAlgo1"></img>'
				 +'</div>'
				 +'<div class="alert alert-success" role="alert"  id="msgAlgo1" style="margin:15px;" hidden>'
					+' <b id="msgAlgo1Text">Algorithm -1 Adjusted Successfully ...</b>'
				+'</div>'
				
			 +'</div>'
			
	 +'</div>'
		
	+'<div class="col-sm-3"  id="algo2" hidden >'
			+'<div class="panel "  >'
		      +' <div class="panel-heading" style="background-color:#072647;color:#fff;"><center>Algorithm -2</center></div>'
		     	+' <div class="panel-body" id="algo2Panel">'
			     	+'<img src="images/minusresize.png"class="imgPlusMinus1 "  id="minusAlgo2" ></img>'
					+'<img src="images/resizeknob.png" class="imgPlusMinus img-circle" id="knobAlgo2"></img>'
					+'<img src="images/plusresize.png"  class="imgPlusMinus1 " id="plusAlgo2"></img>'
				+'</div>'
				+'<div class="alert alert-success" role="alert"  id="msgAlgo2" style="margin:15px;" hidden>'
					+' <b id="msgAlgo2Text">Algorithm -2 Adjusted Successfully .</b>'
				+'</div>'
				+'<div class="alert alert-danger" role="alert"  id="msgAlgo2Error" style="margin:15px;" hidden>'
				+' <b id="msgAlgo2TextError">But Algorithm -1 disturbs. </b>'
			+'</div>'
				
		     +'</div>'
	+'</div>'
	
	+'<div class="col-sm-3 " id="algo3" hidden >'
	+'<div class="panel " >'
      +' <div class="panel-heading" style="background-color:#072647;color:#fff;"><center>Algorithm -3</center></div>'
     	+' <div class="panel-body" id="algo3Panel">'
	      	+'<img src="images/minusresize.png" class="imgPlusMinus1 " id="minusAlgo3" ></img>'
			+'<img src="images/resizeknob.png" class="img-fluid imgPlusMinus img-circle " id="knobAlgo3" ></img>'
			+'<img src="images/plusresize.png" class="imgPlusMinus1 " id="plusAlgo3"></img>'
		 +'</div>'
		 +'<div class="alert alert-success" role="alert"  id="msgAlgo3" style="margin:15px;" hidden>'
			+' <b id="msgAlgo3Text">All Points are set Successfully ...</b>'
		+'</div>'
		
	 +'</div>'
	
+'</div>'

 +'</div>' 
 +'</div>'
 +'</div>'
 +'<div class="row " id="nextFaultFindingDiv" >'
	+'<button type="button" class="col-sm-12 btn btn-danger" style="margin-top:20px;" id="testing">Next Level</button>'
	+'</div>'
 $("#canvas-div1").append(algo);
	
			$("#main-div-conf").append(htm);
			
			$("#testing").click(function() {
//				fualtFinding();
				htm = '<div class="row" id="CalculateActualFlow">'
				
					  +'</div>'
					  +'<div class="row" id="tableDesign">'
					 
					  +'</div>'
					  $("#main-div-conf").html(htm);
				CalculateActualFlowStr = '<div class="col-sm-3">'
				       +'<label  id=""  class="" style="font-size:16px;margin-top:35px;">Expected Toque is :</label>'
				       +'</div>'
			           +'<div class="col-sm-4">'
				       +'<input type="text" id="speedAns" style="margin-top:30px;width:100%;" disabled class=" form-control"/ >'
				       +'</div>'
				       +'<div class="col-sm-4">'
				       +'<br><button type="submit" id="btnAnsCheck" style="margin-top:10px;width:100%;" class=" btn btn-primary" data-toggle="modal" data-target="#mimicModel" disabled>Submit</button>'
				       +'</div>'
				      
				 $("#CalculateActualFlow").html(CalculateActualFlowStr);
				$("#canvas-div").html("");
				$("#canvas-div1").html("");
				testing(); 
			});
			
			
			AnswerCounter = 0;
			var length= masterJson.demo.length-1;
			$("#zeroSubmit").click(function() {
				var max=masterJson.demo[0].torque_corr;
				var min=masterJson.demo[0].torque_err;
				var ans=min-max;
				console.log("min    "+min);
				var ans1=ans.toFixed(2);
				if($("#zeroText").val()==""){
					alert("	Enter numerical value ");
				}
				else{
					 if(AnswerCounter<3)
					{
						 if($("#zeroText").val()==ans1){
							  $("#zeroSubmit").prop('disabled', true);
							$("#zeroText").prop('disabled', true);
							$("#spanAnswer").attr("hidden",false);
						}
						else{
							alert("	WRONG ANSWER");
						}
					}
					else if(AnswerCounter==3)
						{
						alert("formula : mininum standerd value -"+min);
						
						}
					else
						{
						if($("#zeroText").val()==ans1)
						{
							$("#zeroSubmit").prop('disabled', true);
							$("#zeroText").prop('disabled', true);
							$("#spanAnswer").attr("hidden",false);
						}
						else{
								alert("	correct Answer "+ans1);
							}
					
						
						}
					
					AnswerCounter++;
				}
				
			});
			spanCounter=0;
			$("#spanSubmit").click(function() {
				var max=masterJson.demo[length].torque_corr;
				var min=masterJson.demo[length].torque_err;
				var ans=min-max;
				console.log("min    "+min);
				var ans1=ans.toFixed(2);
				
				console.log("span Answer   "+ans1);
				if($("#spanText").val()==""){
					alert("	Enter numerical value ");
				}
				else{
					 if(spanCounter<3)
					{
						if($("#spanText").val()==ans1){
							  $("#spanSubmit").prop('disabled', true);
							$("#spanText").prop('disabled', true);
//							$("#spanAnswer").attr("hidden",false);
							$("#Linearity").attr("hidden",false);
						}
						else{
							alert("	WRONG ANSWER");
						}
					}
					else if(spanCounter==3)
						{
						alert("formula : maximum standerd value -"+min);
						
						}
					else
						{
						if($("#spanText").val()==ans1)
						{
							$("#spanSubmit").prop('disabled', true);
							$("#spanText").prop('disabled', true);
//							$("#spanAnswer").attr("hidden",false);
							$("#Linearity").attr("hidden",false);
						}
						else{
								alert("	correct Answer "+ans1);
							}
						}
					
					 spanCounter++;
				}
				
			});
			
			
			linearCounter=0;
			
			$("#linearSubmit").click(function() {
				
				
			var sum=0;
			var sum1=0;
			var length=masterJson.demo.length;
			for (var i = 0; i < masterJson.demo.length; i++) {
				var wt=parseInt(masterJson.demo[i].torque_corr);
				sum+=Math.pow(wt,2);
				sum1+=wt;
			}
			//console.log(" sum    " +sum);
			//console.log(" sum1    " +sum1);
			var temp2=Math.pow(sum1,2)/length;
			//console.log(" temp2    " +temp2);
			var minus=sum-temp2;
			//console.log(" minus    " +minus);
			var A= Math.sqrt(minus);
			//console.log(" A    " +A);
			
			 sum=0;
			 sum1=0;
			 temp2=0;
			minus=0;
			for (var i = 0; i < masterJson.demo.length; i++) {
				
				var tp=parseInt(masterJson.demo[i].torque_err);
				
				sum+=Math.pow(tp,2);
				sum1+=tp;
			   
			}
			//console.log(" sum    " +sum);
			//console.log(" sum1    " +sum1);
			
			 temp2=Math.pow(sum1,2)/length;
			//console.log(" temp2    " +temp2);
			 minus=sum-temp2;
			//console.log(" minus    " +minus);
			var B= Math.sqrt(minus);
			//console.log(" B    " +B);
			
			sum=0;
			sum1=0;
			var sum2=0;
			temp=0;
			minus=0;
			for (var i = 0; i < masterJson.demo.length; i++) {
				
				var tp=parseInt(masterJson.demo[i].torque_corr);
				var wt=parseInt(masterJson.demo[i].torque_err);
				
				sum+=(tp*wt);
				sum1+=tp;
				sum2+=wt;
			   
			}

			temp2=(sum1*sum2)/length;
		
			var C=sum-temp2;
	
			var linearity=C/(A*B);
			var linearity1=linearity.toFixed(2);
	
			console.log("linearity1   "+linearity1);
			var textLineralityeError=$("#linearText").val();
			if (linearCounter < 3) {
				if (textLineralityeError == linearity1) {
					  $("#linearSubmit").prop('disabled', true);
					$("#linearText").prop('disabled', true);
					$("#linearAnswer").attr("hidden",false);
					$("#accuracy").attr("hidden",false);
					
				} else {
					alert("Incorrect Answer ");
//					var str='<img src="images/cancel.png" class=" img-fluid " />'
//						+'<b id="errorText" style="color:red;margin-left:10px;" >Incorrect Answer ...</b> '
//						$("#mimicModelMessage").html(str);
				}
			} else if (linearCounter == 3) {
				alert(" A=Sqrt (sum(x^2))-(sum(x))^2/N). B=Sqrt (sum(y^2))-(sum(y))^2/N). C=sum(xy)-(sum(y))/N  . linearity =C/AB ");
				
				
				
			} else if (linearCounter >= 4) {
				
				if (textLineralityeError == linearity1) {
					  $("#linearSubmit").prop('disabled', true);
					$("#linearText").prop('disabled', true);
					$("#linearAnswer").attr("hidden",false);
					$("#accuracy").attr("hidden",false);
				} else {
					alert(" Correct Answer " + linearity1);

				}
			}
			linearCounter++;
			
			
			
			
		});
			accuracyCounter=0;
			var accurance=1;
		$("#accuracySubmit").click(function() {
			
			var length=masterJson.demo.length;
			var sum=0;
			var minus=0;
			var textacc=$("#accuracyText").val();

			if (accuracyCounter < 3) {
				if (textacc == accurance) {
					
					  $("#accuracySubmit").prop('disabled', true);
					$("#accuracyText").prop('disabled', true);
					$("#accuracyAnswer").attr("hidden",false);
					$("#zeroPanel").attr("hidden",false);
					
				} else {
					alert("Incorrect Answer ");

				}
			} else if (accuracyCounter == 3) {
				alert(" 1.PERCENTAGE ACCURACY = ((STANDERD OUTPUT - OBSERVED OUTPUT)/TOTAL NUMBER OF READING)*100) 2.AVERAGE ACCURACY = SUM OF(PERCENTAGE ACCURACY)/TOTAL NUMBER OF READING)   ");
			} 
			else 
			{
				
				if (textacc == accurance) {
					
					  $("#accuracySubmit").prop('disabled', true);
					$("#accuracyText").prop('disabled', true);
					$("#accuracyAnswer").attr("hidden",false);
					$("#zeroPanel").attr("hidden",false);
				} else {
					alert(" Correct Answer " + accurance);
				}
			}
			accuracyCounter++;
		});

			var rotate=1;
			$("#plusZero").click(function() {
				var ydataPulse=[];
				 console.log("plusZero Zero");
				$("#knobZero").css({ transform: 'rotate('+rotate+'deg)' });
				var temp1=parseFloat(masterJson.demo[0].torque_err).toFixed(2);
				var temp2=masterJson.demo[0].torque_corr;
				var actual=temp1;
				var std=temp2;
				 
				 console.log("std "+std+" actual "+actual);
				 for(i=0;i< masterJson.demo.length;i++){
//					          var errorAdd= parseFloat(masterJson.demo[i].torque_err)/8;
//					          console.log("Error add "+errorAdd);
							 if(std==actual )
							 {
								 $('#spanPanel').removeAttr('hidden');
								 $('#errorZeroAlert').attr('hidden',false);
						
									 $("#plusMinusCalibrationZero").html("");
									 
									 temp= parseFloat(masterJson.demo[i].torque_err).toFixed(2);
										ydataPulse[i]=parseFloat(masterJson.demo[i].torque_err)=temp;
								
							 }
							 
							 else{
								 temp= parseFloat(masterJson.demo[i].torque_err)+0.01;
								ydataPulse[i]=parseFloat(masterJson.demo[i].torque_err)=temp;
								
							 }
						}	
					
				var chart = $('#canvas-div').highcharts();
		        chart.series[1].setData(ydataPulse, false);
		        $('#canvas-div').highcharts().redraw();
		        
		       
				 rotate+=1;
			});
			$("#minusZero").click(function() {
				var ydataPulse=[];
				 console.log("Minus Zero");
				$("#knobZero").css({ transform: 'rotate('+rotate+'deg)' });
				
				var temp1=parseFloat(masterJson.demo[0].torque_err).toFixed(2);
				var temp2=masterJson.demo[0].torque_corr;
				var actual=temp1;
				var std=temp2;
				 console.log("std "+std+" actual "+actual);
				for(i=0;i< masterJson.demo.length;i++){
//					 var errorAdd= parseFloat(masterJson.demo[i].torque_err)/8;
//			          console.log("Error add "+errorAdd);
					       if(std==actual )
							 { $('#errorZeroAlert').attr('hidden',false);
//								 $('#zeroErrorAlert').attr('hidden',false);  
//								 $('#errorZeroAlert').removeAttr('hidden');
									$('#spanPanel').removeAttr('hidden');
									$("#plusMinusCalibrationZero").html("");
								temp= parseFloat(masterJson.demo[i].torque_err).toFixed(2);;
									ydataPulse[i]=masterJson.demo[i].torque_err=parseFloat(temp);
								
							 }
							 
							 else{
								 temp= parseFloat(masterJson.demo[i].torque_err)-0.01;
								ydataPulse[i]=masterJson.demo[i].torque_err=parseFloat(temp);
								
							 }
						}	
					
				var chart = $('#canvas-div').highcharts();
		        chart.series[1].setData(ydataPulse, false);
		        $('#canvas-div').highcharts().redraw();
		        
		      
				 rotate-=10;
			});
			var length= masterJson.demo.length-1;
			
			
			$("#plusMax").click(function() {
				
				var ydataPulse=[];
				var temp1=parseFloat(masterJson.demo[length].torque_err).toFixed(2);
				var temp2=masterJson.demo[length].torque_corr;
				
				var actualSpan=temp1;
				var stdSpan=temp2;
				$("#knobSpan").css({ transform: 'rotate('+rotate+'deg)' });
//				var actualSpan=parseFloat(masterJson.demo[length].torque_err);
//				var stdSpan=parseFloat(masterJson.demo[length].torque_corr);

				 console.log("std "+stdSpan+" actual "+actualSpan);
				
				 
				 
					for(i=0;i< masterJson.demo.length;i++){
//						var errorAdd= parseFloat(masterJson.demo[i].torque_err)/10;
//				          console.log("Error add "+errorAdd);
							 if(stdSpan==actualSpan )
							 {
								 
								   $("#plusMinusCalibrationSpan").html("");
								   $('#errorZeroAlert2').attr('hidden',false);
								   $('#spanErrorAlert').removeAttr('hidden');
//								   $('#zeroErrorAlert').html('');
								   $('#errorZeroAlert').attr('hidden',true);
								   console.log("when set value std "+stdSpan);
								temp=parseFloat(masterJson.demo[i].torque_err).toFixed(2);
									ydataPulse[i]=masterJson.demo[i].torque_err=parseFloat(temp);
									htm=''
										htm+='<div class="panel panel-primary"  id="zeroPanel2">'
									     
									     	+' <div class="panel-body" id="zero2">'
										     	+'<img src="images/minusresize.png"class="imgPlusMinus1 "  id="minus2" ></img>'
												+'<img src="images/resizeknob.png" class="imgPlusMinus img-circle" id="knob2"></img>'
												+'<img src="images/plusresize.png"  class="imgPlusMinus1 " id="plus2"></img>'
											+'</div>'
											
											+'<div class="alert alert-success" role="alert"  id="zeroAlert2" style="margin:15px;" hidden>'
												+' <b id="zeroErrorText22">Again Zero Error Adjusted Successfully . </b>'
											+'</div>'
											+'<div class="alert alert-success" role="alert"  id="zeroBoth" style="margin:15px;" hidden>'
											+' <b id="zeroBoth2">Both Error  Adjusted Successfully . </b>'
										+'</div>'
									     +'</div>'
									     
									     $("#plusMinusCalibrationZero").html(htm);
//									   $("#zeroErrorAlert").attr("hidden",true);
									
									//Second Zero Set
							 }
							 
							 else{
								 temp= parseFloat(masterJson.demo[i].torque_err)+0.01;
								ydataPulse[i]=masterJson.demo[i].torque_err=parseFloat(temp);
								
							 }
						}	
					
				var chart = $('#canvas-div').highcharts();
		        chart.series[1].setData(ydataPulse, false);
		        $('#canvas-div').highcharts().redraw();
		        
		       
				 rotate-=1;
				 $("#plus2").click(function() {
						var ydataPulse=[];
						var length= masterJson.demo.length-1;
						console.log("plusssssssssssssss");
						$("#knob2").css({ transform: 'rotate('+rotate+'deg)' });
						var actualSpan =parseFloat(masterJson.demo[0].torque_err).toFixed(2);
						var stdSpan=masterJson.demo[0].torque_corr;

						 console.log(" span std "+stdSpan+" actual "+actualSpan);
						
						 
						 
							for(i=0;i< masterJson.demo.length;i++)
							{
//								var errorAdd= parseFloat(masterJson.demo[i].torque_err)/5;
//						          console.log("Error add "+errorAdd);	
								if(length!=i){
									 if(stdSpan==actualSpan ) 
									 {
										    
										 $("#zero2").html("");
										   $('#zeroAlert2').removeAttr('hidden');
										   $("#zeroBoth").removeAttr('hidden');
										   $("#algo1").removeAttr('hidden');
										   $('#errorZeroAlert2').attr('hidden',true);
										   
										 temp= parseFloat(masterJson.demo[i].torque_err).toFixed(2);
											ydataPulse[i]=masterJson.demo[i].torque_err=parseFloat(temp);
										
									 }
									 
									 else{
										 temp= parseFloat(masterJson.demo[i].torque_err)+0.01;
										ydataPulse[i]=masterJson.demo[i].torque_err=parseFloat(temp).toFixed(2);
										
									 }
								}
									else
									{
									temp= parseFloat(masterJson.demo[i].torque_err);
									ydataPulse[i]=masterJson.demo[i].torque_err=parseFloat(temp).toFixed(2);
									}
							}
							
							
						var chart = $('#canvas-div').highcharts();
				        chart.series[1].setData(ydataPulse, false);
				        $('#canvas-div').highcharts().redraw();
				        rotate+=1;
				       
						
					});
				 $("#minus2").click(function() {
						var ydataPulse=[];
						var length= masterJson.demo.length-1;
						$("#knob2").css({ transform: 'rotate('+rotate+'deg)' });
						var actualSpan =parseFloat(masterJson.demo[0].torque_err).toFixed(2);
						var stdSpan=masterJson.demo[0].torque_corr;
						console.log("minusssssssssssss");
						 console.log(" span std "+stdSpan+" actual "+actualSpan);
						
						 
						 
							for(i=0;i< masterJson.demo.length;i++)
							{
//								var errorAdd= parseFloat(masterJson.demo[i].torque_err)/8;
//						          console.log("Error add "+errorAdd);
								if(length!=i){
									 if(stdSpan==actualSpan)
									 {
										    
										 $("#zero2").html("");
										   $('#zeroAlert2').removeAttr('hidden');
										   $('#zeroBoth').removeAttr('hidden');
										   $("#algo1").removeAttr('hidden');
										   $('#nextDiv').attr('hidden',true);
										   $('#errorZeroAlert2').attr('hidden',true);
										 temp= parseFloat(masterJson.demo[i].torque_err).toFixed(2);
											ydataPulse[i]=masterJson.demo[i].torque_err=parseFloat(temp);
										
									 }
									 
									 else{
										 temp= parseFloat(masterJson.demo[i].torque_err)-0.01;
										ydataPulse[i]=masterJson.demo[i].torque_err=parseFloat(temp).toFixed(2);
										
									 }
								}
									else
									{
									temp= parseFloat(masterJson.demo[i].torque_err).toFixed(2);
									ydataPulse[i]=masterJson.demo[i].torque_err=parseFloat(temp);
									}
							}
							
							
						var chart = $('#canvas-div').highcharts();
				        chart.series[1].setData(ydataPulse, false);
				        $('#canvas-div').highcharts().redraw();
				        rotate-=1;
				       
						
					});
			});
			
			
			$("#minusMax").click(function() {
				var ydataPulse=[];
				
				$("#knobSpan").css({ transform: 'rotate('+rotate+'deg)' });
//				var actualSpan =parseInt(masterJson.demo[length].rFlow);
//				var stdSpan=parseInt(masterJson.demo[length].mFlow);
				var temp1=parseFloat(masterJson.demo[length].torque_err).toFixed(2);
				var temp2=masterJson.demo[length].torque_corr;
				
				var actualSpan=temp1;
				var stdSpan=temp2;
				 console.log(" span std "+stdSpan+" actual "+actualSpan);
				
				 
				 
					for(i=0;i< masterJson.demo.length;i++){
//						var errorAdd= parseFloat(masterJson.demo[i].torque_err)/10;
//				          console.log("Error add "+errorAdd);
							 if(stdSpan==actualSpan)
							 {

								 $("#plusMinusCalibrationSpan").html("");
								   $('#errorZeroAlert2').attr('hidden',false);
								   $('#spanErrorAlert').removeAttr('hidden');
//								   $('#zeroErrorAlert').html('');
								   $('#errorZeroAlert').attr('hidden',true);
//								   console.log("when set value std minus "+stdSpan);
								temp= parseFloat(masterJson.demo[i].torque_err).toFixed(2);
									ydataPulse[i]=parseFloat(masterJson.demo[i].torque_err)=temp;
									htm=''
										htm+='<div class="panel panel-primary"  id="zeroPanel2">'
									     
									     	+' <div class="panel-body" id="zero2">'
										     	+'<img src="images/minusresize.png"class="imgPlusMinus1 "  id="minus2" ></img>'
												+'<img src="images/resizeknob.png" class="imgPlusMinus img-circle" id="knob2"></img>'
												+'<img src="images/plusresize.png"  class="imgPlusMinus1 " id="plus2"></img>'
											+'</div>'
											
											+'<div class="alert alert-success" role="alert"  id="zeroAlert2" style="margin:15px;" hidden>'
												+' <b id="zeroErrorText22">Again Zero Error Adjusted Successfully . </b>'
											+'</div>'
											+'<div class="alert alert-success" role="alert"  id="zeroBoth" style="margin:15px;" hidden>'
											+' <b id="zeroBoth2">Both Error  Adjusted Successfully . </b>'
										+'</div>'
									     +'</div>'
									     
									     $("#plusMinusCalibrationZero").html(htm);
//									   $("#zeroErrorAlert").attr("hidden",true);
									
									//Second Zero Set
								
							 }
							 
							 else{
								 temp= parseFloat(masterJson.demo[i].torque_err)-0.01;
								ydataPulse[i]=masterJson.demo[i].torque_err=parseFloat(temp);
								
							 }
						}	
					
				var chart = $('#canvas-div').highcharts();
		        chart.series[1].setData(ydataPulse, false);
		        $('#canvas-div').highcharts().redraw();
		        
		       
				 rotate+=10;
			});
			$("#minusAlgo1").click(function() {
				var greaterCounter=0;
				var ydataPulse=[];
				
				
				$("#knobAlgo1").css({ transform: 'rotate('+rotate+'deg)' });
				for(i=0;i< masterJson.demo.length;i++){
					
					var temp1=parseFloat(masterJson.demo[i].torque_err).toFixed(2);
					var temp2=parseFloat(masterJson.demo[i].torque_corr);
					
					var actualSpan=temp1;
					var stdSpan=temp2;
					 if(actualSpan>stdSpan)
						 {
						 greaterCounter++;
						 }
				}
				if(greaterCounter==0){
					$("#algo1Panel").html("");
					$("#algo2").removeAttr('hidden');
					$("#msgAlgo1").removeAttr('hidden');
				}
//				console.log(" After filter greaterCounter "+greaterCounter);
				for(i=0;i< masterJson.demo.length;i++){
					
					var temp1=parseFloat(masterJson.demo[i].torque_err).toFixed(2);
					var temp2=masterJson.demo[i].torque_corr;
					
					var actualSpan=temp1;
					var stdSpan=temp2;
//					var errorAdd= parseFloat(masterJson.demo[i].torque_err)/8;
//			          console.log("Error add "+errorAdd);
					if(i==0)
					{
						ydataPulse[i]=masterJson.demo[0].torque_err;

					}
					else if(masterJson.demo.length-1==i)
					{
						ydataPulse[i]=masterJson.demo[length].torque_err;

					}
					else if(actualSpan>stdSpan )
					  {
						temp=parseFloat(masterJson.demo[i].torque_err)-0.02;
						ydataPulse[i]=masterJson.demo[i].torque_err=parseFloat(temp);
							
						}	
				  else if(actualSpan==stdSpan ){
					  temp=parseFloat(masterJson.demo[i].torque_err).toFixed(2);
					  ydataPulse[i]=masterJson.demo[i].torque_err=parseFloat(temp);
						greaterCounter--;
//						console.log("stdSpan "+stdSpan+"> actualSpan "+actualSpan);
//						console.log("greaterCounter "+greaterCounter);
				  }
				  else
					  {
					   temp=parseFloat(masterJson.demo[i].torque_err)-0.01;
						ydataPulse[i]=masterJson.demo[i].torque_err=parseFloat(temp);
					  }


				}
				if(greaterCounter<=0){
					
					
					$("#algo1Panel").html("");
					$("#algo2").removeAttr('hidden');
					$("#msgAlgo1").removeAttr('hidden');
					$("#msgAlgo1Error").removeAttr('hidden');
					
					
				}

						 var chart = $('#canvas-div').highcharts();
					        chart.series[1].setData(ydataPulse, false);
					        $('#canvas-div').highcharts().redraw();
					        rotate-=10;
				
			});

			$("#plusAlgo1").click(function() {
				

				var greaterCounter=0;
				var ydataPulse=[];
				
				
				$("#knobAlgo1").css({ transform: 'rotate('+rotate+'deg)' });
				for(i=0;i< masterJson.demo.length;i++){
					
					var temp1=parseFloat(masterJson.demo[i].torque_err).toFixed(2);
					var temp2=parseFloat(masterJson.demo[i].torque_corr);
					
					var actualSpan=temp1;
					var stdSpan=temp2;
					 if(actualSpan>stdSpan)
						 {
						 greaterCounter++;
						 }
				}
				if(greaterCounter==0){
					
					
					$("#algo1Panel").html("");
					$("#algo2").removeAttr('hidden');
					$("#msgAlgo1").removeAttr('hidden');
					
					
					
				}
//				console.log(" After filter greaterCounter "+greaterCounter);
				for(i=0;i< masterJson.demo.length;i++){
//					var errorAdd= parseFloat(masterJson.demo[i].torque_err)/8;
//			          console.log("Error add "+errorAdd);
					var temp1=parseFloat(masterJson.demo[i].torque_err).toFixed(2);
					var temp2=parseFloat(masterJson.demo[i].torque_corr);
					
					var actualSpan=temp1;
					var stdSpan=temp2;
					if(i==0)
					{
						ydataPulse[i]=masterJson.demo[0].torque_err;

					}
					else if(masterJson.demo.length-1==i)
					{
						ydataPulse[i]=masterJson.demo[length].torque_err;

					}
					else if(actualSpan!=stdSpan)
					  {
						temp=parseFloat(masterJson.demo[i].torque_err)+0.01;
						ydataPulse[i]=masterJson.demo[i].torque_err=parseFloat(temp);
							
						}	
				  else{
					 temp= parseFloat(masterJson.demo[i].torque_err).toFixed(2);
					  ydataPulse[i]=masterJson.demo[i].torque_err=parseFloat(temp);
						greaterCounter--;
//						console.log("stdSpan "+stdSpan+"> actualSpan "+actualSpan);
//						console.log("greaterCounter "+greaterCounter);
				  }
				}
				if(greaterCounter==0){
					
					
					$("#algo1Panel").html("");
					$("#algo2").removeAttr('hidden');
					$("#msgAlgo1").removeAttr('hidden');
					
					
					
				}

						 var chart = $('#canvas-div').highcharts();
					        chart.series[1].setData(ydataPulse, false);
					        $('#canvas-div').highcharts().redraw();
					        rotate+=10;
				
			});

			// Algorithm -2 
			$("#plusAlgo2").click(function() {
				var greaterCounter=0;
				var ydataPulse=[];
				
				
				$("#knobAlgo2").css({ transform: 'rotate('+rotate+'deg)' });
				for(i=0;i< masterJson.demo.length;i++){
					
					var temp1=parseFloat(masterJson.demo[i].torque_err).toFixed(2);
					var temp2=parseFloat(masterJson.demo[i].torque_corr);
					
					var actualSpan=temp1;
					var stdSpan=temp2;
					 if(actualSpan<stdSpan)
						 {
						 greaterCounter++;
						 }
				}
				console.log(" After filter greaterCounter "+greaterCounter);
				for(i=0;i< masterJson.demo.length;i++){
//					var errorAdd= parseFloat(masterJson.demo[i].torque_err)/8;
//			          console.log("Error add "+errorAdd);
					var temp1=parseFloat(masterJson.demo[i].torque_err).toFixed(2);
					var temp2=parseFloat(masterJson.demo[i].torque_corr);
					
					var actualSpan=temp1;
					var stdSpan=temp2;
					if(i==0)
					{
						ydataPulse[i]=masterJson.demo[0].torque_err;

					}
					else if(masterJson.demo.length-1==i)
					{
						ydataPulse[i]=masterJson.demo[length].torque_err;

					}
					else if(stdSpan>actualSpan)
					  {
//					  console.log("stdSpan "+stdSpan+" < actualSpan "+actualSpan);
						temp=parseFloat(masterJson.demo[i].torque_err)+0.01;
						ydataPulse[i]=masterJson.demo[i].torque_err=parseFloat(temp);
					  }
				  else if(stdSpan<actualSpan)
						{
//					  console.log("stdSpan "+stdSpan+" < actualSpan "+actualSpan);
						temp=parseFloat(masterJson.demo[i].torque_err)-0.01;
						ydataPulse[i]=masterJson.demo[i].torque_err=parseFloat(temp);
							
						}
				  else
					  {
						temp=parseFloat(masterJson.demo[i].torque_err).toFixed(2);
					  ydataPulse[i]=masterJson.demo[i].torque_err=parseFloat(temp);
						greaterCounter--;
//						console.log("stdSpan "+stdSpan+"> actualSpan "+actualSpan);
//						console.log("greaterCounter "+greaterCounter);
					  }

				}
				if(greaterCounter==0){
					
					
					$("#algo2Panel").html("");
					$("#algo3").removeAttr('hidden');
					$("#msgAlgo2").removeAttr('hidden');
					$("#msgAlgo2Error").removeAttr('hidden');
				}

						 var chart = $('#canvas-div').highcharts();
					        chart.series[1].setData(ydataPulse, false);
					        $('#canvas-div').highcharts().redraw();
					        rotate+=10;
				
			});
			// Algorithm -3
			
			
			
			var allPointSetOnLine=0;
			$("#minusAlgo3").click(function() {
				var greaterCounter=0;
				var ydataPulse=[];
//				var TPC=0;
//				var TP=0;
				
				$("#canvas-div").html(" ");
				$("#LinearAlgoKnob1").css({ transform: 'rotate('+rotate+'deg)' });
				for(i=0;i< masterJson.demo.length;i++){
					
					var temp1=parseFloat(masterJson.demo[i].torque_err).toFixed(2);
					var temp2=parseFloat(masterJson.demo[i].torque_corr);
					
					var actualSpan=temp1;
					var stdSpan=temp2;
					 if(actualSpan!=stdSpan)
						 {
						 allPointSetOnLine++;
						 }
					 
					 
				}
				console.log("allPointSetOnLine "+allPointSetOnLine);
				for(i=0;i< masterJson.demo.length;i++){
					
//					 TPC=parseInt(masterJson.demo[i].wtc);
//					 TP=parseInt(masterJson.demo[i].pulwt);
//					 var minusValue=parseInt(TP/50);
//					 var error =parseInt(masterJson.demo[i].err1);
					//console.log("algo 1 TPC "+TPC+" TP "+TP);
					
					var temp1=parseFloat(masterJson.demo[i].torque_err).toFixed(2);
					var temp2=parseFloat(masterJson.demo[i].torque_corr);
					
					var actualSpan=temp1;
					var stdSpan=temp2;
					
					
					 if(i==0)
						{
							ydataPulse[i]=masterJson.demo[0].torque_err;

						}
						else if(masterJson.demo.length-1==i)
						{
							ydataPulse[i]=masterJson.demo[length].torque_err;

						}
				   
						else if(actualSpan>stdSpan)
						{
							temp=parseFloat(masterJson.demo[i].torque_err)-0.02;
							ydataPulse[i]=masterJson.demo[i].torque_err=parseFloat(temp);
							

				    	}
						else if(actualSpan<stdSpan)
						{
							temp=parseFloat(masterJson.demo[i].torque_err).toFixed(2);
							  ydataPulse[i]=masterJson.demo[i].torque_err=parseFloat(temp);
//							greaterCounter--;
//							console.log("greaterCounter "+greaterCounter);
						}	
						else if(actualSpan==stdSpan)
							{
								allPointSetOnLine--;
							}
						else
				    	{
							 ydataPulse[i]=masterJson.demo[i].torque_err=stdSpan;
				    	}
					if(greaterCounter==0)
								{
						alert("Successfully done");
//						$("#main-div-conf").html("");
						$("#main-div").html("done");
//						$("#algoPanel").html("");
						
//						console.log("greaterCounter "+greaterCounter);
//								$("#linearAlgo3").hide();
//								$("#algorithmAlert3").show();
//								$("#success").hide();
//								$("#calibrationPanel").html(" ");
//								$("#algo3Panel").show();
//							 correctionTable(masterJson);
					}

				}
						var chart = $('#container-graph1').highcharts();
				        chart.series[1].setData(ydataPulse, false);
				        $('#container-graph1').highcharts().redraw();
						 rotate-=10; 
					
				});
				var pulseAlgoCounter=0;
				$("#plusAlgo3").click(function() {
					pulseAlgoCounter++;
					if(pulseAlgoCounter>5)
						{
							alert(" Need to click on minus");
						}
							 
					
				});
			
	}