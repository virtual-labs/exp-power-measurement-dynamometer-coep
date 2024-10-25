function result(){
	
	
	counterMasterJson = {
    "questionary": {
        "correctAnswer": 6,
        "wrongAnswer": 0
    },
    "buildWheatStone": {
        "inValidConnection": 0
    },
    "standardCalculations": {
        "calResistance": 1,
        "calOutput": 0
    },
    "calibration": {
        "zeroCalibrationForMinusWrong": 23,
        "spanCalibrationForMinusWrong": 0,
        "zeroCalibrationForAgainMinus": 59,
        "zeroCalibrationForWrongPlus": 0,
        "spanCalibrationForWrongPlus": 59,
        "zeroCalibrationForAgainPlus": 0,
        "zeroAnswer": -0.0022,
        "spanAnswer": 0.0036,
        "zeroWrong": 1,
        "spanWrong": 1
    }
}		

$("#procedure-btn").prop("hidden",true);
$("#refer").prop("hidden",true);
	
//Basic knowledge	 
if("corrAns" in data)
{
	corrans1 = data.corrAns.corrAns;
	
}
//configuration
if("configure" in data){

	incorrectConfig = data.configure.incorrectConfig;

}	
	
//MIMIC click counter
if("Mimic" in data)
{
	correct = data.Mimic.torExp;
	wrong = data.Mimic.torAct ;
	clkredC = data.Mimic.redExp;
	clkredW = data.Mimic.redMotor;
}

//Calibration click
if("Testing" in data)
{
	powcorr = data.Testing.wtsubmit;
	powwor = data.Testing.torAct;

}

//Fault finding
if("Fault" in data)
{
	fault = data.Fault.fault;
}

	
	var ansZero = 0;
	
	if(counterMasterJson.calibration.zeroAnswer>0){
		ansZero = counterMasterJson.calibration.zeroAnswer*10000;
	}else{
		ansZero = -(counterMasterJson.calibration.zeroAnswer*10000);
	}
	
	var ansSpan = 0;
	if(counterMasterJson.calibration.spanAnswer>0){
		ansSpan = counterMasterJson.calibration.spanAnswer*10000;
	}else{
		ansSpan = -(counterMasterJson.calibration.spanAnswer*10000);
	}
	
	
	
	console.log(ansZero);
	console.log(ansSpan);
	

	
	
var correctVal = (data.corrAns.corrAns/6).toFixed(2);
var quesPercent = (correctVal*100).toFixed(1);
quesPercent = parseFloat(quesPercent);

console.log(quesPercent);

	var powperct = (powcorr /(powwor)*100).toFixed(1);
	powperct = parseFloat(powperct);
	 console.log("rope__"+powperct);
	
 var eddprect = ( correct /(wrong)*100).toFixed(1);
	eddprect = parseFloat(eddprect);
	 console.log("eddy__"+eddprect);
	
	 
	 var faultperct = ((fault/1)*100).toFixed(1);
	 faultperct = parseFloat(faultperct);
	 console.log(faultperct);
	
	
	
var htm = ''
	+ '<div class="container-fluid">'
//	+ '  <div class="row">'
//	+ '<div class="col-md-1">'
//	+ ' <div class="panel panel-danger headingPanel" >'
//	+ ' <div class="panel-body" id="panelbody"><center><span class="heading1"><b> STANDARD CONFIGURATION </b></span></center></div>'
//	+ '</div>'
	+ '</div>'

	+ '<div class="col-md-12">'
	+ ' <div class="panel remarkBground" >'
	+ ' <div class="panel-body remark" ><center> <br> <b> Dynamometer Experiment is  Completed Sucessfully !! </b>'
	+ '<br> <b> </b></center></div>'
	+ '</div>'
	+ '</div>'


    +'<div class="container-fluid">'
		+'  <div class="row">'
		+'<div class="col-md-4">'
	
		 +'<br><table class="table table-bordered ">'
		   +'  <thead class="thead-dark">'
		   +'    <tr class="">'
		   +'      <th><center class="">COMPETENCY(DYNAMOMETER)</center></th>'
		   +'     <th><center class="">STATUS</center></th>'
		   +'    </tr>'
		   +' </thead>'
		   +'  <tbody>'
		   +'   <tr>'
		   +'     <td class=""><center>Basic knowledge</center></td>'
		 	if(quesPercent>=60){ 
		   
		   htm +='     <td class=""><center class="attained"> Attained</center></td>'
		   }else{
			htm +='     <td class=""><center class="NotAttained"> Not Attained</center></td>'
		}
		  htm +='  </tr>'
		   +'  <tr>'
		   +'     <td class=""><center>Simulation</center></td>'
		  	if(powperct>=60){ 
		   
		   htm +='     <td class=""><center class="attained"> Attained</center></td>'
		   }else{
			htm +='     <td class=""><center class="NotAttained"> Not Attained</center></td>'
			}
		 	 htm +='  </tr>'
		   
		   +'   <tr>'
		  +'     <td class=""><center>Testing</center></td>'
		  if(eddprect>=60){ 
		   
		   htm +='     <td class=""><center class="attained"> Attained</center></td>'
		   }else{
			htm +='     <td class=""><center class="NotAttained"> Not Attained</center></td>'
			}
		 	 htm +='  </tr>'
		   +'  <tr>'
			+'<td class=""><center>Fault Finding</center></td>'
		   if(faultperct>=60){ 
		   
		   htm +='     <td class=""><center class="attained"> Attained</center></td>'
		   }else{
			htm +='     <td class=""><center class="NotAttained"> Not Attained</center></td>'
			}
		 	 htm +='  </tr>'
		   
		   
//		   +'<tr>'
//		  +' <td class=""><center>Span Calculations</center></td>'
//		   if(quesPercent>=60){ 
//		   
//		   htm +='     <td class=""><center class="attained"> Attained</center></td>'
//		   }else{
//			htm +='     <td class=""><center class="NotAttained"> Not Attained</center></td>'
//			}
//		 	 htm +='  </tr>'
//		   +'<tr>'
//		  +' <td class=""><center>Calibration</center></td>'
//		   if(quesPercent>=60){ 
//		   
//		   htm +='     <td class=""><center class="attained"> Attained</center></td>'
//		   }else{
//			htm +='     <td class=""><center class="NotAttained"> Not Attained</center></td>'
//			}
//		 	 htm +='  </tr>'
			
		   +' </tbody>'
		  +' </table>'
		  
		+' </div>'
		+'<div class="col-md-4" id="graph-div" >'

		+' </div>'
		
		+'<div class="col-md-4">'
		+' <div class="panel panel-danger headingPanel" style = "margin-top:80px;">'
		+' <div class="panel-body" id="panelbody">'
		+'<center><span class="heading1"><b>BASIC KNOWLEDGE </b></span></center>'		
		+'</div>'
		+'</div>'
		
		+'<div class="col-md-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;margin-top:15px;">'
		+'<center><span class="valueBox">Total Questions</span></center>'
		+' <div class="panel-body counterPanelRed">'
		+'<center><span class="valueBox">6</span></center>'
		+' </div>'		
		+'</div>'		
		+' </div>'
		
		+'<div class="col-md-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;margin-top:15px;">'
		+'<center><span class="valueBox">Correct Answers</span></center>'
		+' <div class="panel-body counterPanelGreen">'
		+'<center><span class="valueBox">'+corrans1+'</span></center>'
		+' </div>'		
		+'</div>'		
		+' </div>'
		
		
		+' </div>'//closing of col 4
      
//       +' <div class="row">'
//		
//       +'<div class="col-md-8">'
//       +' </div>'
//       
//      
//      
//      
       +' </div>'
//        +' </div>'
//         +' </div>'
//         
//        
        +' <div class="row">'
		+'<div class="col-md-12">'
		+'<div class="col-md-4">'
		+' <div class="panel panel-danger headingPanel" >'
		+' <div class="panel-body" id="panelbody">'
		+'<center><span class="heading1"><b>Simulation</b></span></center>'
		+'</div>'
		+'</div>'
		
		
		+'<div class="col-md-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Wrong Attempts</span></center>'
		+' <div class="panel-body counterPanelRed">'

		+'<center><span class="valueBox"><b>'+powwor+' </b></span></center>'
		+'</div>'
		+'</div>'
//		+'<span class="heading1">4 </span>'
		+'</div>'
		
		+'<div class="col-md-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Correct Attempt</span></center>'
		+' <div class="panel-body counterPanelGreen">'

		+'<center><span class="valueBox"><b>'+powcorr+' </b></span></center>'
		+'</div>'
		+'</div>'
//		+'<span class="heading1">1 </span>'
		+'</div>'
		
		
		
		
		+'</div>'
//
		+'<div class="col-sm-4">'
		+' <div class="panel panel-danger headingPanel">'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1"><b>Testing</b></span></center></div>'
		+'</div>'
		
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Wrong Attempts</span></center>'
		+' <div class="panel-body counterPanelRed">'

		+'<center><span class="valueBox"><b>'+wrong+'</b></span></center>'
		+'</div>'
		+'</div>'
      
		+'</div>'
		
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Correct Attempts</span></center>'
		+' <div class="panel-body counterPanelGreen">'

		+'<center><span class="valueBox"><b>'+correct+' </b></span></center>'
		+'</div>'
		+'</div>'

		+'</div>'
		
		
		+' </div>'
		+'<div class="col-sm-4">'
		+' <div class="panel panel-danger headingPanel" >'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1"><b>Fault Finding</b></span></center></div>'
		+'</div>'
		
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Wrong Attempts</span></center>'
		+' <div class="panel-body counterPanelRed">'

		+'<center><span class="valueBox"><b>'+fault+' </b></span></center>'
		+'</div>'
		+'</div>'
		+'</div>'
		
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Correct Attempts </span></center>'
		+' <div class="panel-body counterPanelGreen">'

		+'<center><span class="valueBox"><b>1</b></span></center>'
		+'</div>'
		+'</div>'

		+'</div>'
		
		+' </div>'
		+' </div>'
		+' </div>'
		
		
		
//		 +' <div class="row">'
//		+'<div class="col-md-12">'
//		+'<div class="col-md-4">'
//		+' <div class="panel panel-danger headingPanel" >'
//		+' <div class="panel-body" id="panelbody">'
//		+'<center><span class="heading1"><b>Span Calculate</b></span></center>'
//		+'</div>'
//		+'</div>'
//		
//		
//		+'<div class="col-md-6">'
//		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Wrong Attempts</span></center>'
//		+' <div class="panel-body counterPanelRed">'
//
//		+'<center><span class="valueBox"><b>  </b></span></center>'
//		+'</div>'
//		+'</div>'
////		+'<span class="heading1">4 </span>'
//		+'</div>'
//		
//		+'<div class="col-md-6">'
//		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Correct Attempt</span></center>'
//		+' <div class="panel-body counterPanelGreen">'
//
//		+'<center><span class="valueBox"><b>1</b></span></center>'
//		+'</div>'
//		+'</div>'
////		+'<span class="heading1">1 </span>'
//		+'</div>'
//		
//		
//		
//		
//		+'</div>'
////
//		+'<div class="col-sm-4">'
//		+' <div class="panel panel-danger headingPanel">'
//		+' <div class="panel-body" id="panelbody"><center><span class="heading1"><b>Zero Calibrate</b></span></center></div>'
//		+'</div>'
//		
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Wrong Attempts</span></center>'
//		+' <div class="panel-body counterPanelRed">'
//
//		+'<center><span class="valueBox"><b>  </b></span></center>'
//		+'</div>'
//		+'</div>'
//      
//		+'</div>'
//		
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Correct Attempts</span></center>'
//		+' <div class="panel-body counterPanelGreen">'
//
//		+'<center><span class="valueBox"><b>  </b></span></center>'
//		+'</div>'
//		+'</div>'
//
//		+'</div>'
//		
//		
//		+' </div>'
//		+'<div class="col-sm-4">'
//		+' <div class="panel panel-danger headingPanel" >'
//		+' <div class="panel-body" id="panelbody"><center><span class="heading1"><b>Span Calibrate</b></span></center></div>'
//		+'</div>'
//		
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Wrong Attempts</span></center>'
//		+' <div class="panel-body counterPanelRed">'
//
//		+'<center><span class="valueBox"><b>  </b></span></center>'
//		+'</div>'
//		+'</div>'
//		+'</div>'
//		
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Correct Attempts </span></center>'
//		+' <div class="panel-body counterPanelGreen">'
//
//		+'<center><span class="valueBox"><b>  </b></span></center>'
//		+'</div>'
//		+'</div>'
//
//		+'</div>'
//		
//		+' </div>'
//		+' </div>'
//		+' </div>'
		

$("#main-div1").html(htm);



let initialData = [
    { name: 'Questionaries', y: quesPercent },
    { name: 'Fault Finding', y: faultperct },
    { name: 'Simulation', y: powperct },
    { name: 'Testing', y: eddprect }
    
  
];
//
//// Create the pie chart
let chart = Highcharts.chart('graph-div', {
	exporting: { enabled: false },
	credits: { enabled: false},
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Observations'
    },
    series: [{
        name: 'Observed',
        //colorByPoint: true,
        data: initialData
    }],
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                format: '{point.name}: {point.percentage:.1f} %'
            }
        }
    }
});


$("#pdfDownload").prop("hidden",false);
	

	
	function generatePDF() {
    // Select the div by its ID
    const element = document.querySelector("#main-div1");

    // Use html2canvas to capture the element as a canvas
    html2canvas(element, {
        scale: 3,  // Increase the scale for better resolution (adjustable)
        useCORS: true // In case of cross-origin issues with external resources like images
    }).then(function (canvas) {
        // Convert the canvas to image data in PNG format
        const imgData = canvas.toDataURL("image/png", 1.0); // No compression

        // Initialize the PDF document in landscape mode ('l') and A4 size
        const pdf = new jspdf.jsPDF('l', 'mm', 'a4');
        
        // Define the width and height for the image to fit in the landscape A4 page
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width; // Keep aspect ratio

        // Define the top margin (in mm)
        const topMargin = 10;

        // Check if the image height exceeds the landscape page height minus the top margin
        if (pdfHeight > pdf.internal.pageSize.getHeight() - topMargin) {
            let position = 0;
            const pageHeight = pdf.internal.pageSize.getHeight() - topMargin;

            // Loop over the content to fit into multiple pages in landscape
            while (position < canvas.height) {
                const pageData = canvas.getContext('2d').getImageData(0, position, canvas.width, canvas.height - position);

                // Create a new image element from the slice
                const pageCanvas = document.createElement('canvas');
                pageCanvas.width = canvas.width;
                pageCanvas.height = canvas.height - position < pageHeight ? canvas.height - position : pageHeight;
                pageCanvas.getContext('2d').putImageData(pageData, 0, 0);

                const imgData = pageCanvas.toDataURL('image/png', 1.0);  // Avoid compression
                
                pdf.addImage(imgData, 'PNG', 0, topMargin, pdfWidth, (pdfWidth * pageCanvas.height) / pageCanvas.width);

                position += pageHeight;

                if (position < canvas.height) {
                    pdf.addPage();
                }
            }
        } else {
            // If it fits on one page, simply add the image to the PDF in landscape with the top margin
            pdf.addImage(imgData, 'PNG', 0, topMargin, pdfWidth, pdfHeight);
        }

        // Save the generated PDF
        pdf.save("Dynamometer_Report.pdf");
    });
}

// Set up the button click event to generate the PDF
$("#pdfDownload").on("click", function(){
    generatePDF();
});

$("#pdfDownload").on("click", function(){
//	console.log("click event generated");
	generatePDF();
})

}