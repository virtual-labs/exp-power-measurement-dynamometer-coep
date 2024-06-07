function mimic() {
	//	var paper = new Raphael(document.getElementById('canvas-div'), 1000, 1000);

	$('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w = 1000;
	var h = 800;

	var width = $(window).width();

	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}


	x = 50;
	y = 50;
	wt = 0;
	count = 0;
	count_rpm = 0;
	count_er = 0;
	torque = 0;
	torque_corr = 0;
	speed = 1440;
	power = motorSize;
	power_corr = 0;
	
	length = 0;
	flag_switch = 0;
	rpm = 0;
	flag = 0;
	wt_max = 0;
	checkAlert = 0;
	var array = [];
	var torque_std;
	var weight_max;
	var id;
	checkAns = 0;
	checkAlert = 0;
	speedJson = {};
	arrayJson = [];
	masterJson = {};
	mimic = {};
	

	
	var motor_Green = paper.image("images/motor.PNG", (x + 10), (y + 90), 130, 120);

	var switch_button = paper.image("images/flowSwitch.png", (x + 550), (y + 290), 50, 50);
	var minus = paper.image("images/minus.png", (x + 110), (y + 10), 30, 30);
	var plus = paper.image("images/plus.png", (x + 210), (y + 10), 30, 30);
//	var minus_rpm = paper.image("images/minus.png", (x + 90), (y + 450), 30, 30);
//	var plus_rpm = paper.image("images/plus.png", (x + 210), (y + 450), 30, 30);
	var hook = paper.image("images/hook.png", (x + 138), (y + 230), 50, 50);


	text_lable(x, y);
	conn_Diag(x, y);
	dynamometer(x, y);
	Funel(x, y);
	var tank1 = tank(x + 260, y + 200);
	mag_sensor(x, y);
	water(x+220, y+260);
	var motor_Red = paper.image("images/motor1.png", (x + 490), (y + 410), 130, 100);
	var wt_img = paper.image("images/weight.png", (x + 130), (y + 280), 0, 0);


	paper.rect(x + 150, y + 10, 50, 30).attr({ 'stroke-width': 2, 'fill': 'white' }).toFront();
//	paper.rect(x + 130, y + 440, 70, 50).attr({ 'stroke-width': 2, 'fill': 'white' }).toFront();
	paper.rect(x + 50, y + 250, 70, 50).attr({ 'stroke-width': 2, 'fill': 'white' }).toFront();
	var switch_circle = paper.circle(x + 620, y + 310, 10).attr({ 'stroke': 'black', 'stroke-width': '1.5', 'fill': 'red' });


	function text_lable(x, y) {
		var swt_txt = paper.text(x + 600, y + 280, "Flow Switch")
			.attr({
				'font-size': 18,

			});

//		var rpm_txt = paper.text(x + 150, y + 420, "Select the RPM")
//			.attr({
//				'font-size': 18,
//
//			});

		var mot_txt1 = paper.text(x + 490, y + 400, "Cold Water Pump")
			.attr({
				'font-size': 18,

			});

		var tank_txt = paper.text(x + 690, y + 400, "Cold Water")
			.attr({
				'font-size': 18,

			});

		var tank_txt = paper.text(x + 700, y + 420, "Tank")
			.attr({
				'font-size': 18,

			});

		var mot_txt2 = paper.text(x + 40, y + 80, "Induction Motor")
			.attr({
				'font-size': 18,

			});

		var eddy_txt1 = paper.text(x + 380, y + 80, "Eddy Current Dynamometer")
			.attr({
				'font-size': 18,

			});

		var funel = paper.text(x + 570, y + 80, "Funnel")
			.attr({
				'font-size': 18,

			});

		var mag_txt = paper.text(x + 440, y + 210, "Magnetic")
			.attr({
				'font-size': 18,

			});

		var mag_txt2 = paper.text(x + 440, y + 230, "Sensor")
			.attr({
				'font-size': 18,

			});

		var wt_txt = paper.text(x + 170, y - 10, "Load in kg")
			.attr({
				'font-size': 18,

			});

		var tor_sen = paper.text(x + 80, y + 230, "Torque sensor")
			.attr({
				'font-size': 18,

			});

	}


	var selectedWeight = paper.text(x + 170, y + 22, wt)
		.attr({
			'font-size': 18,
			'font-weight': "bold"
		});

//	var selectedRpm = paper.text(x + 170, y + 460, speed)
//		.attr({
//			'font-size': 18,
//			'font-weight': "bold"
//		});


	var selectedtor = paper.text(x + 90, y + 270, torque)
		.attr({
			'font-size': 18,
			'font-weight': "bold"
		});




	// Rotation for RPM
//	plus_rpm.click(function(event) {
//
//
//		count_rpm = count_rpm + 1;
//		if (speed >= 1400) {
//
//
//			alert("Max limit");
//
//		}
//		else {
//
//
//			speed = speed + 100;
//
//			selectedRpm.attr('text', speed);
//		}
//
//	});
//
//	minus_rpm.click(function(event) {
//
//
//
//		if (speed <= 0) {
//
//
//			alert("Min limit");
//			count_rpm = count_rpm + 1;
//		}
//		else {
//
//
//			speed = speed - 100;
//
//			selectedRpm.attr('text', speed);
//		}
//
//	});

	
	

	// Rotation for weights
	plus.click(function(event) {

		torque_Stand(x, y);
		count = count + 1;
		if (wt >= weight_max) {
			if (weight_max >= 4)
			{ 
				alert("Max limit");
			}
//			else 
//			{
//				alert("Please select the another configuration");
////				location.reload();
//			}
//			 

		}
		else {

			if (checkAns == 0){ 
			wt = wt + 1;

			selectedWeight.attr('text', wt);
			wt_img = paper.image("images/weight.png", (x + 130), (y + 280), 80, 80);
			var img_txt = paper.text(x + 170, y + 330, wt)
				.attr({
					'font-size': 20,
					'font-weight': "bold",
					'fill': 'white'

				});
			}
			else{
				const index = array.indexOf(wt);
			if (index > -1) { 
 				array.splice(index, 1); 
			}
				alert("check answer");
			}	
		}

	});

	minus.click(function(event) {


		torque_Stand(x, y);
		if (wt <= 0) {


			alert("Min limit");
			count = count + 1;
		}
		else {

			if (checkAns == 0)
			{ 
			wt = wt - 1;

			selectedWeight.attr('text', wt);
			wt_img = paper.image("images/weight.png", (x + 130), (y + 280), 80, 80);
			var img_txt = paper.text(x + 170, y + 330, wt)
				.attr({
					'font-size': 20,
					'font-weight': "bold",
					'fill': 'white'

				});
			}
			else{
				const index = array.indexOf(wt);
				if (index > -1) { 
 				array.splice(index, 1); 
				}
				alert("check answer");
			}
		}

	});
	
	
	function torque_Stand(x, y) {
		torque_std = (power * 9.5488 * 1000) / speed;
		console.log("torque" + torque_std);
		if (lengthType == 1) {
			wt_max = torque_std / 1.00;
			weight_max = parseInt(wt_max);
			length = 103.94;
			console.log("weigt max" + weight_max);
		}
		else if (lengthType == 2) {
			wt_max = torque_std / 2.00;
			weight_max = parseInt(wt_max);
			length = 203.94;
			console.log("weigt max" + weight_max);
		}
		else if (lengthType == 3) {
			wt_max = torque_std / 3.00;
			weight_max = parseInt(wt_max) ;
			length = 303.94;
			console.log("weigt max" + weight_max);
		}
		else if (lengthType == 4) {
			wt_max = torque_std / 4.00;
			weight_max = parseInt(wt_max);
			length = 403.94;
			console.log("weigt max" + weight_max);
		}

	}

 	var redcnt = 0;
	motor_Red.click(function(event) {
		flag_switch = 1;
		pipe_fill(x,y);
		switch_circle.attr('fill', 'green');
		redcnt++;
		mimic.redMotor = redcnt;
		mimic.redExp = 1;

	});
	


	function torque_calculation(x, y) {
		
		
//		if (speed != 0) {
//			if (rpm == speed) {

				if (wt >= 1) {
					if  (wt < wt_max )
					{
					torque_corr = (9.8 * length) * (wt / 1000);
					flag = 0;
					}
					else if (wt > wt_max )
					{
					torque_corr = (9.8 * length) * (wt / 1000);
//					flag = 1;
					count_er++;
					
					}
					
					checkAns = 1;
					$("#btnAnsCheck").prop("disabled", false);
					$("#speedAns").prop("disabled", false);
					console.log("torque with load " + torque_corr);
				}
				else if (wt == 0) {
					torque_corr = (power * 9.5488 * 1000) / speed;
					flag = 0;
					checkAns = 1;

					$("#btnAnsCheck").prop("disabled", false);
					$("#speedAns").prop("disabled", false);
					console.log("torque with no load " + torque_corr);
				}
//				else if (wt > wt_max )
//				{
//					
//				 	torque_corr = (9.8 * length) * (wt / 1000);
//				 	flag = 1;
//				 	$("#btnAnsCheck").prop("disabled", false);
//					console.log("torque with no load " + torque_corr);
//					
//				}


//		}
//			else if (rpm != speed) {
//				if (wt == 0) {
//					torque_corr = (power1 * 9.5488 * 1000) / speed;
//					flag = 0;
//					checkAns = 1;
//					pipe_fill(x,y);
//					wt_img.hide();
//					$("#btnAnsCheck").prop("disabled", false);
//					console.log("torque with no load " + torque_corr);
//				}
//				else {
//					alert("plz selct no load condi");
//					flag = 1;
//				
//
//					console.log("previous speed" + rpm);
//				}
//			}

//		}

//		else {
//			
//			alert("Please select the RPM");
//			checkAns = 0;
//		}

	}
	
		eCnt = 0;
		function error_calculation(x, y) {
		torque_calculation(x, y);
		eCnt++;
		mimic.eddyExpt = eCnt;
		
		if (flag == 0)
		{ 	
			let min = 0.5;
			let max = 2;
//			let randomNum = 20;
			randomNum = Math.floor(Math.random() * max) + min;
			error = torque_corr * randomNum / 100;
// 			error = randomNum;
			if (eCnt == 2){ 
				torque = torque_corr - error;	
			}
			else if (eCnt == 3){
				torque = torque_corr - error;
			}
			else{
				torque = torque_corr + error;
			}
		}
//		else if (flag == 1)
//		{	
//			if(count_er == wt_max)
//			{ 
//			error = torque_corr * 20 / 100;
//			torque = torque_corr - error;
//			}
//			else if (count_er > wt_max){
//			error = torque_corr * 40 / 100;
//			torque = torque_corr - error;
//			}
//			
//		}
		
		selectedtor.attr('text', torque_corr.toFixed(2));
		console.log("error otr" + torque);
	}
	
	function power_calculation(x,y){
		torque_Stand(x, y);
		power_corr =(torque_corr * speed ) /  ( 9.5488 * 1000);
		console.log("power calculated" + power_corr);
		
	}
	
	var eddyMotor = 0;
	motor_Green.click(function(event) {
		id = 1;
		array.push(wt); // insert pp value in an array
		console.log("wt array : " + array);
		eddyMotor++; 
		mimic.eddAct = eddyMotor;
		
		const hasDuplicates = (array) => array.length !== new Set(array).size;
					console.log("dupli"+hasDuplicates(array));
					let duplicate = hasDuplicates(array);
					console.log("dupli"+duplicate);
					if (duplicate == 1){
						checkAlert = 1;
						const index = array.indexOf(wt);
						if (index > -1) { 
 							array.splice(index, 1); 
						}
					}else{
						checkAlert = 0;
					}
					
			array.sort((a, b) => a - b); //sort the array in ascending order
			console.log("sorted array : " + array);		
//			for (var i = 0; i < array.length; i++) {
//				if ((array[i] - array[i + 1]) == 0) {
//					//alert that duplicate is present
////					console.log("Duplicate values present in array..");
////					alert("Please provide unique weight values !!");	
//					 checkAlert = 1;
//					array = array.filter((a, b) => array.indexOf(a) == b); 
////					var dup = array.includes(array[i])//remove the duplicate value from the array
////					console.log("array"+dup);
//					console.log("After duplicate removal :" + array);
//	
//				}else{
//				checkAlert = 0;
//				}
//				}
		if (flag_switch == 1) {
			if (checkAlert  == 0 && checkAns == 0)
			{ 
//				if (checkAns == 0 ){ 	
					torque_calculation(x, y);	
					error_calculation(x, y);
					power_calculation(x,y);
//				}
//				else{
						
//				}

			}
			else
			{	
				
				if(checkAns == 1){ 
					alert("check answer ");	
				}
				if(checkAlert == 1){
					alert("Please provide unique weight values !!");
				}
				
				
			
			}
		}
		else {
			
			const index = array.indexOf(wt);
			if (index > -1) { 
 				array.splice(index, 1); 
			}
			alert("click on the motor");
			
			
		}


	});
	
	var torChk = 0;
	$("#btnAnsCheck").click(function() {
		torChk++;
		mimic.torAct = torChk;
		mimic.torExp = eCnt;


		var speedAns = $("#speedAns").val().trim();
		console.log("ans check" + speedAns);
		flow = power_corr.toFixed(2);
		if (id <= 3) {
			if(speedAns=="")
			{
			alert("Enter numerical value ");
			}
			else if (speedAns == flow) {
				checkAns = 0;

				$("#btnAnsCheck").prop("disabled", true);
				$("#speedAns").prop("disabled", true);
				$("#speedAns").val('');
				selectedtor.attr('text', "0");
//				pipe_empty(x,y);
				tableCreate();

				//event.stopPropagation();
			}
			else if (speedAns != flow) {

				alert("Entered value is incorrect.Try it again ");


			}


		} else if (id == 4) {

				alert("Power = Torque X Speed / 9.5488 X 1000")

		} else {
			speedAns = $("#speedAns").val().trim();
			if(speedAns=="")
			{
			alert("Enter numerical value ");
			}
			else if (speedAns == flow) {
				checkAns = 0;

				$("#btnAnsCheck").prop("disabled", true);
				$("#speedAns").prop("disabled", true);
				$("#speedAns").val('');
				selectedtor.attr('text', "0");
//				pipe_empty(x,y);
				tableCreate();


				event.stopPropagation();
			} else {
				checkAns = 0;
				alert("correct answer is " + flow);

			}
		}
		id++;
	});





	function tableCreate() {
		speedJson = {};
		speedJson.torque_corr = torque_corr.toFixed(2);
		speedJson.torque_err = torque.toFixed(2);
		speedJson.load = wt;
		speedJson.RPM = speed;
		speedJson.error = error.toFixed(2);
		speedJson.power = power_corr.toFixed(2);
		
		//				console.log("Flow " + flowJson.mFlow);
		arrayJson.push(speedJson);
		var tableMainDiv = '';

		console.log(arrayJson);
		masterJson.demo = arrayJson;

		console.log(masterJson);

		masterJson.demo.sort(function(a, b) {
			return a.power_corr - b.power_corr;
		});
		
		
		$("#tableDesign").html("");
						
						$("#showGraphDiv").html("");
		var tableMainDiv = ''
			+ '<table class="table table-borderd" style="margin:10px;">'
			+ ' <thead>'
			+ '  <tr style="background-color:#212529;color:#fff;" >'
			+ '  <th scope="col">Speed in RPM </th>'
			+ '  <th scope="col">Load in kg </th>'
			+ '   <th scope="col">Calculated Torque (Standard) (Nm)</th>'
			+ '  <th scope="col">Power (Kw)</th>'

			+ '   </tr>'
			+ '  </thead>'
			+ '   <tbody>'
		for (var i = 0; i < masterJson.demo.length; i++) {
			tableMainDiv += '<tr>'
				+ '   <td><center>' + masterJson.demo[i].RPM + '</center></td>'
				+ '   <td><center>' + masterJson.demo[i].load + '</center></td>'
				+ '   <td><center>' + masterJson.demo[i].torque_corr + '</center></td>'
				+ '   <td><center>' + masterJson.demo[i].power + '</center></td>'
				+ '     </tr>'
		}

		tableMainDiv += ' </tbody>'
			+ '  </table>'
//			+ '<div class="row" >'
			+ '<div class="col-sm-12">'
			+ '<button type="button"  class="btn btn-primary btnStyle" id="showGraph" hidden >SHOW GRAPH</button>'
			+ '<button type="button"  class="btn btn-primary btnStyle" id="calibration" hidden >Next Level</button>'
			+ '</div>'
//			+ '</div>'

		$("#tableDesign").html(tableMainDiv);
		if(masterJson.demo.length>=4)
			{
			$("#showGraph").removeAttr("hidden",false);
			
			}
		$("#showGraph").click(function() {
			
		if (masterJson.demo.length >= 4) {
				if (array[0] != 0 && array[array.length - 1] != weight_max)
				{
					checkAlert = 1; 
					alert(" You need to provide next input values as 0 and "+weight_max+" !!");

				}

				 if (array[0] != 0) {
					checkAlert = 1;
					alert("You need to provide next input value as 0 !!");

				}
				else if (array[array.length - 1] != weight_max) {
					checkAlert = 1;
					alert("You need to provide next input value as  0 and "+weight_max+" !!");
				}
				else{
					checkAlert = 0;
				}
			

				if (checkAlert == 0) {
					$("#calibration").removeAttr("hidden",true);
					$("#showGraph").attr("hidden",true);
					data.Mimic = mimic;
					console.log(data);
					graphCreate();
					calibration();
					
					
				}
		}
//			else {
//				alert("Please provide atleast four reading ");
//			}

			
			function graphCreate() {
				
				var xdata = [];
				var ydata = [];
				var graphData1 = [];
				for (var i = 0; i < masterJson.demo.length; i++) {
					xdata[i] = parseFloat(masterJson.demo[i].torque_corr);
					ydata[i] = parseFloat(masterJson.demo[i].power);

				}
				for (var j = 0; j < masterJson.demo.length; j++) {
					tempArr = [];
					tempArr[0] = xdata[j];
					tempArr[1] = ydata[j];
					graphData1.push(tempArr);

				}
				console.log("xdata " + xdata);
				console.log("ydata " + ydata);
				console.log("graphData1 " + graphData1);
				ydata.sort(function(a, b) { return a - b });
				xdata.sort(function(a, b) { return a - b });
				console.log("After xdata " + xdata);
				console.log("After ydata " + ydata);
//				Xmax = parseFloat(xdata[xdata.length - 1]);
//				Ymax = parseFloat(ydata[ydata.length - 1]);
				Xmax= Math.max.apply(Math,xdata);
				Ymax= Math.max.apply(Math,ydata);
				var verifyMax=0;
				if(Xmax>Ymax)
					{
						verifyMax=Xmax;
						
					}
				else
				{
					verifyMax=Ymax;
					
				}
				
				console.log("verifyMax " + verifyMax);
				
				
				console.log("Xmax " + Xmax);
				console.log("Ymax " + Ymax);
				console.log(" Standard Torque v/s Actual Torque " + graphData1);
				Highcharts.chart('canvas-div', {
					title: {
						text: ' Graph of Standard Torque & Actual Torque '
					},
//					subtitle: {
//						text: 'Meter Constant is  pulses (per/ltr)'
//					},
					xAxis: {
						min: 0,
						max: verifyMax,
						title: {
							text: 'Standard Torque'
						}
					},
					yAxis: {
						min: 0,
						max: verifyMax,
						title: {
							text: 'Actual Torque'
						}
					},
					series: [
						{
							type: 'line',
							name: 'Standard Torque values',
							data: [[0 , 0], [verifyMax, verifyMax]],
							marker: {
								enabled: false
							},
							states: {
								hover: {
									lineWidth: 0
								}
							},
							enableMouseTracking: false
						},

						{
							type: 'scatter',
							name: 'Actual Torque values',

							data: graphData1,
							marker: {
								radius: 4
							}
						}]

				});
			}

			console.log(masterJson);
			
		});
		$("#calibration").click(function() {
			 $("#canvas-div").html("");
			
//			calibration();
			fualtFinding();
			
			
		});
		var str =  '<div class="row">'
			+ '<div class="col-sm-12">'
			+ '<button type="button"  class="btn btn-primary btnStyle" id="calibration"  >Next Level</button>'
			+ '</div>'
			+ '</div>'
			$("#sub-main-div").append(str);
			
			
	}
	//	weights(x-470,y+187);
	function weights(x, y) {
		paper.path('M' + (x + 600) + ' ' + (y + 50) + 'l 80 0 l 0 50 l -80 0 z')
			.attr({ 'stroke': 'black', 'stroke-width': '2', 'fill': 'grey' });

	}




	function dynamometer(x, y) {
		paper.path('M' + (x + 180) + ' ' + (y + 170) + 'l 0 -50 l 30 -20 l 100 0 l 30 20 l 0 50 l -30 20 l -100 0 z + M'
			+ (x + 340) + ' ' + (y + 170) + 'l 20 0 l 0 -50 l -20 0 +M'
			+ (x + 130) + ' ' + (y + 155) + 'l 50 0 +M ' + (x + 130) + ' ' + (y + 140) + 'l 50 0 +M'
			+ (x + 360) + ' ' + (y + 155) + 'l 20 0 l 0 -15 l -20 0 +M')
			.attr({ 'stroke': 'black', 'stroke-width': '2', 'fill': '#64b8e8' });
		paper.path('M' + (x + 170) + ' ' + (y + 150) + 'l 0 0 l 0 -10  l 0 100 l 0 0 l 0 0 l  0 0 l 0 0 l 0 0')
			.attr({ 'stroke': 'black', 'stroke-width': '2', 'fill': 'black' });
	}


	function Funel(x, y) {
		var funel = paper.ellipse(x + 515, y + 110, 30, 20).attr({ 'stroke': 'black', 'stroke-width': '1.5', 'fill': 'pink' });

		paper.path('M' + (x + 543) + ' ' + (y + 118) + 'l -20 30 l -20 0 l -18 -30 l  0 0 l 0 0 l 0 0 l 0 0')
			.attr({ 'stroke': 'black', 'stroke-width': '2' });

	}

	function conn_Diag(x, y) {
		paper.path('M' + (x) + ' ' + (y + 200) + 'l 0 310 l 348 0 l 0 -310 z').attr({ 'stroke': 'black', 'stroke-width': '2' });
		paper.path('M' + (x - 10) + ' ' + (y + 532) + 'l 900 0 l 0 -20 l -900 0 z').attr({ 'stroke': 'black', 'stroke-width': '2.5', 'fill': 'grey' });

		paper.path('M' + (x + 245) + ' ' + (y + 100) + 'l 0 -50 l 280 0 l 0 50 l  -10 0 l 0 -40 l -260 0 l 0 40')
			.attr({ 'stroke': 'black', 'stroke-width': '2', 'fill': '' });

		paper.path('M' + (x + 175) + ' ' + (y + 140) + 'l 0 -100 ')
			.attr({ 'stroke': 'black', 'stroke-width': '2' });

		paper.path('M' + (x + 520) + ' ' + (y + 145) + 'l 0 50 l 300 0 l 0 107 l -10 0 l 0 -95 l -300 0 l 0 -58 l -10 0+M'
			//		+ (x + 508) + ' ' + (y + 145) + 'l 0 60 l 300 0 l 0 90 l 0 0'
		)
			.attr({ 'stroke': 'black', 'stroke-width': '2', 'fill': '' });

		paper.path('M' + (x + 610) + ' ' + (y + 430) + 'l 0 -90 l -225 0 l 0 -135 l -45 -32 l -12 9 l 45 30 l 0 140 l 228 0 l 0 80+M'
			//		+ (x + 600) + ' ' + (y + 430) + 'l 0 -80 l -230 0 l 0 -140 l -45 -30'
		)
			.attr({ 'stroke': 'black', 'stroke-width': '2', 'fill': '' });


		paper.path('M' + (x + 615) + ' ' + (y + 470) + 'l 130 0 l 0 10 l -130 0 z+M'
			+ (x + 615) + ' ' + (y + 480) + 'l 130 0')
			.attr({ 'stroke': 'black', 'stroke-width': '2', 'fill': '' });

	}
	
	function pipe_fill(x,y){
		
		paper.path('M' + (x + 615) + ' ' + (y + 470) + 'l 130 0 l 0 10 l -130 0 z+M'
			+ (x + 615) + ' ' + (y + 480) + 'l 130 0')
			.attr({ 'stroke': 'black', 'stroke-width': '2', 'fill': '#37e1ed' });
			
			paper.path('M' + (x + 520) + ' ' + (y + 145) + 'l 0 50 l 300 0 l 0 107 l -10 0 l 0 -95 l -300 0 l 0 -58 l -10 0+M'
			//		+ (x + 508) + ' ' + (y + 145) + 'l 0 60 l 300 0 l 0 90 l 0 0'
		)
			.attr({ 'stroke': 'black', 'stroke-width': '2', 'fill': '#37e1ed' });

		paper.path('M' + (x + 610) + ' ' + (y + 430) + 'l 0 -90 l -225 0 l 0 -135 l -45 -32 l -12 9 l 45 30 l 0 140 l 228 0 l 0 80+M'
			//		+ (x + 600) + ' ' + (y + 430) + 'l 0 -80 l -230 0 l 0 -140 l -45 -30'
		)
			.attr({ 'stroke': 'black', 'stroke-width': '2', 'fill': '#37e1ed' });
			paper.path('M' + (x + 245) + ' ' + (y + 100) + 'l 0 -50 l 280 0 l 0 50 l  -10 0 l 0 -40 l -260 0 l 0 40')
			.attr({ 'stroke': 'black', 'stroke-width': '2', 'fill': '#37e1ed' });			
	}
	
	function pipe_empty(x,y){
		
		paper.path('M' + (x + 615) + ' ' + (y + 470) + 'l 130 0 l 0 10 l -130 0 z+M'
			+ (x + 615) + ' ' + (y + 480) + 'l 130 0')
			.attr({ 'stroke': 'black', 'stroke-width': '2', 'fill': 'white' });
			
			paper.path('M' + (x + 520) + ' ' + (y + 145) + 'l 0 50 l 300 0 l 0 107 l -10 0 l 0 -95 l -300 0 l 0 -58 l -10 0+M'
			//		+ (x + 508) + ' ' + (y + 145) + 'l 0 60 l 300 0 l 0 90 l 0 0'
		)
			.attr({ 'stroke': 'black', 'stroke-width': '2', 'fill': 'white' });

		paper.path('M' + (x + 610) + ' ' + (y + 430) + 'l 0 -90 l -225 0 l 0 -135 l -45 -32 l -12 9 l 45 30 l 0 140 l 228 0 l 0 80+M'
			//		+ (x + 600) + ' ' + (y + 430) + 'l 0 -80 l -230 0 l 0 -140 l -45 -30'
		)
			.attr({ 'stroke': 'black', 'stroke-width': '2', 'fill': 'white' });
			paper.path('M' + (x + 245) + ' ' + (y + 100) + 'l 0 -50 l 280 0 l 0 50 l  -10 0 l 0 -40 l -260 0 l 0 40')
			.attr({ 'stroke': 'black', 'stroke-width': '2', 'fill': 'white' });			
	}
	
	
	
	function mag_sensor(x, y) {
		paper.path('M' + (x + 350) + ' ' + (y + 170) + 'l 35 20 l 0 -20 l 10 0 l 0 20 l -10  0+M')
			.attr({ 'stroke': 'black', 'stroke-width': '2' });

		var mag_circle = paper.circle(x + 390, y + 162, 8).attr({ 'stroke': 'black', 'stroke-width': '1.5', 'fill': 'black' });
	}


	function tank(x, y) {
		paper.path('M' + (x + 525) + ' ' + (y + 100) + 'l 50 0 l 0 30 l 40 30 l 0 150 l -130 0 l 0 -150 l 40 -30 z').attr({ 'stroke': 'black', 'stroke-width': '3' });
	}
	
	 
	function water(x, y) {
		paper.rect(x + 526, y + 120, 126, 130).attr({ 'stroke': '#37e1ed', 'stroke-width': '1', 'fill': '#37e1ed', "opacity": 0.5 }).toFront();
	}


}