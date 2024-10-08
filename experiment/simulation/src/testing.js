function testing() {
	//	var paper = new Raphael(document.getElementById('canvas-div'), 1000, 1000);
	$("#centerText1").html('CALCULATION');
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


	x = 100;
	y = 200;
	wt = 0;
	count = 0;
	count_rpm = 0;
	count_er = 0;
	torque = 0;
	torque_corr = 0;
	speed = 1400;
	speed1 = 0;
	power = motorSize;
	
	length = 0;
	flag_switch = 0;
	rpm = 0;
	flag = 0;
	flag_err = 0;
	wt_max = 1;
	var array = [];
	var torque_std;
	var weight_max = 15;
	var id;
	checkAns = 0;
	checkAlert = 0;
	speedJson = {};
	arrayJson = [];
	masterJson = {};
	testing = {}; 
	diameter = diameterType;
	console.log(diameter);
	
	
	var motor_Green = paper.image("images/motor.PNG", (x), (y + 145), 130, 120);

	var switch_button = paper.image("images/flowSwitch.png", (x + 550), (y + 290), 50, 50);
//	var minus = paper.image("images/minus.png", (x + 110), (y + 10), 30, 30);
//	var plus = paper.image("images/plus.png", (x + 210), (y + 10), 30, 30);
//	var minus_rpm = paper.image("images/minus.png", (x + 90), (y + 450), 30, 30);
//	var plus_rpm = paper.image("images/plus.png", (x + 210), (y + 450), 30, 30);
	var minus = paper.image("images/minus.png", (x + 90), (y + 450), 30, 30);
	var plus = paper.image("images/plus.png", (x + 210), (y + 450), 30, 30);
	var hook = paper.image("images/hook.png", (x + 190), (y + 30), 50, 50).rotate(180);
	var scale = paper.image("images/roap_acale.png", (x + 130), (y- 167 ), 150, 200);
	var arrow = paper.image("images/arrow.png", (x + 210), (y + 15 ), 50, 10);


	text_lable(x, y);
	conn_Diag(x, y);
//	dynamometer(x, y);
//	Funel(x, y);
	var tank1 = tank(x + 260, y + 200);
//	mag_sensor(x, y);
	water(x+220, y+260);
	var motor_Red = paper.image("images/motor1.png", (x + 490), (y + 410), 130, 100);
	var wt_img = paper.image("images/weight.png", (x + 130), (y + 280), 0, 0);
	//var img_roap = paper.image("images/roap_break.png", (x + 120), (y-150), 420, 420).toBack();
	var img_roap = paper.image("images/roap_drum.PNG", (x +130), (y+143), 150, 120);
	var submit = paper.image("images/submit.png", (x +500), (y), 120, 50);
	var toap = paper.image("images/roap_line.png", (x +205), (y+70), 10, 80);
	var toap = paper.image("images/roap_line.png", (x +165), (y+250), 10, 100);



	var eng_box = paper.rect(x + 20, y + 100, 50, 40).attr({ 'stroke-width': 2, 'fill': 'red' }).toFront();
	paper.rect(x + 150, y + 445, 50, 30).attr({ 'stroke-width': 2, 'fill': 'white' }).toFront();
	paper.rect(x + 400, y , 70, 40).attr({ 'stroke-width': 2, 'fill': 'white' }).toFront();
	var switch_circle = paper.circle(x + 620, y + 310, 10).attr({ 'stroke': 'black', 'stroke-width': '1.5', 'fill': 'red' });
	 paper.circle(x + 215, y - 180, 18).attr({ 'stroke': 'black', 'stroke-width': '3' });


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

		var mot_txt2 = paper.text(x + 40, y + 80, "Engine")
			.attr({
				'font-size': 18,

			});

		var sc_txt = paper.text(x + 450, y - 20, "Scale Reading")
			.attr({
				'font-size': 18,

			});
			
		var rb_txt = paper.text(x + 360, y + 120, "Rope Brake Dynamometer")
			.attr({
				'font-size': 18,

			});	
		

		

		var wt_txt = paper.text(x + 170, y+420, "Load in kg")
			.attr({
				'font-size': 18,

			});

	}


	var selectedWeight = paper.text(x + 170, y + 460, wt)
		.attr({
			'font-size': 18,
			'font-weight': "bold"
		});



	var selectedtor = paper.text(x + 425, y + 15, torque)
		.attr({
			'font-size': 18,
			'font-weight': "bold"
		});




	// Rotation for RPM
//	plus_rpm.click(function(event) {
//
//
//	count_rpm = count_rpm + 1;
//		if (speed >= 1400){ 
//
//
//		alert("Max limit");
//		}
//
//
//		else{ 
//
//
//			speed = speed + 100;
//
//		selectedRpm.attr('text', speed);
//		}
//	
//
//	});

//	minus_rpm.click(function(event) {
//
//
//
//	if (speed <= 0) {
//
//		alert("Min limit");
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
		
			 alert("Max limit");

		}
		else {
		if(engine == 1){ 
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
				alert("check answer");
			}	
		}
		
		else{
			alert("Click on Engine");
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
				alert("check answer");
			}
		}

	});
	
	
	function torque_Stand(x, y) {
		torque_std = (power * 9.5488 * 1000) / 1440;
		console.log("torque" + torque_std);
		if (lengthType == 1) {
			wt_max = torque_std / 1.00;
			weight_max = wt_max + 2 ;
			length = 103.94;
			console.log("weigt max" + weight_max);
		}
		else if (lengthType == 2) {
			wt_max = torque_std / 2.00;
			weight_max = wt_max + 2 ;
			length = 203.94;
			console.log("weigt max" + weight_max);
		}
		else if (lengthType == 3) {
			wt_max = torque_std / 3.00;
			weight_max = wt_max + 2 ;
			length = 303.94;
			console.log("weigt max" + weight_max);
		}
		else if (lengthType == 4) {
			wt_max = torque_std / 4.00;
			weight_max = wt_max + 2 ;
			length = 403.94;
			console.log("weigt max" + weight_max);
		}

	}

	var redMotor = 0;
	motor_Red.click(function(event) {
		flag_switch = 1;
		pipe_fill(x,y);
		switch_circle.attr('fill', 'green');
		testing.redAct = redMotor;
		testing.redExp = 1;  

	});
	


	function torque_calculation(x, y) {
		
		
		if (speed != 0) {
			if (rpm == speed && flag_err == 0) {
				
				if (wt >= 1) {
					
					if  (wt < wt_max )
					{
					torque_corr = (9.8 * length) * (wt / 1000);
					flag = 0;
					flag_err = 0;
					}
					else if (wt > wt_max )
					{
					torque_corr = (9.8 * length) * (wt / 1000);
					flag = 1;
					flag_err = 0;
					count_er++;
					
					}
					checkAns = 1;
	
					$("#btnAnsCheck").prop("disabled", false);
					$("#speedAns").prop("disabled", false);
					console.log("torque with load " + torque_corr);
				}
				else if (wt == 0) {
//					torque_corr = (power * 9.5488 * 1000) / speed;
					
					checkAns = 0;
					flag_err = 1;
					alert("add the loads")

					$("#btnAnsCheck").prop("disabled", true);
					$("#speedAns").prop("disabled", true);
					
				}



		}
			else if (rpm != speed && flag_err == 0) {
				if (wt == 1) {
					torque_corr = (9.8 * length) * (wt / 1000);
					flag = 0;
					checkAns = 1;
					flag_err = 0;
	
					$("#btnAnsCheck").prop("disabled", false);
					console.log("torque with no load " + torque_corr);
				}
				else {
					alert("plz start from 1 kg ");
					
					checkAns = 0;
					flag_err = 1;
					$("#btnAnsCheck").prop("disabled", true);
					console.log("previous speed" + rpm);
				}
			}
			else if (rpm == speed && flag_err == 1){
					if (wt == 1) {
					torque_corr = (9.8 * length) * (wt / 1000);
					flag = 0;
					checkAns = 1;
					flag_err = 0;
	
					$("#btnAnsCheck").prop("disabled", false);
					console.log("torque with no load " + torque_corr);
				}
				else {
					alert("plz start from 1 kg ");
					
					checkAns = 0;
					flag_err = 1;
					$("#btnAnsCheck").prop("disabled", true);
					console.log("previous speed" + rpm);
				}
				
			}

		}
	
		else {
			
			alert("Please select the RPM");
			checkAns = 0;
			$("#btnAnsCheck").prop("disabled", true);
		}
		rpm = speed; 
	}
		var y1 = 0;
		var power = 0;
		function error_calculation(x, y) {
			y1 = (wt * (60 - 0) / 15) + 0;
			torque = (wt * (2.1 - 0) / 15) + 0;
			power = ((2 * diameter * 3.14 * (wt*9.81 - torque) * 1400)/(60 * 1000)).toFixed(2);
//			ans = y1;
		console.log("y "+y1);
		console.log("torque"+torque);
		$("#btnAnsCheck").prop("disabled", false);
		$("#speedAns").prop("disabled", false);
		selectedtor.attr('text', torque.toFixed(2));
		console.log("error otr" + torque);
		console.log("error power" + power);
		
	}
	
	var motCnt = 0;
	var motEnt = 0;
	var engine = 0;
	motor_Green.click(function(event) {
		
		motCnt++;
		testing.motAct = motCnt;
		testing.motExp = 1;
		if (flag_switch == 1) {
			engine = 1;
			eng_box.attr('fill','green');
		}
		else {
			alert("click on the motor")
		}


	});
	
	
	submit.click(function(event) {
		id = 1;
		motEnt++;
		testing.wtsubmit = motEnt;
		
			error_calculation(x, y) ;
			arrow_Increment(x, y) ;


	});
	
	
	var ans = 0;
//	arrow_Increment(x, y);
	function arrow_Increment(x, y) {
		arrow.remove();
		arrow = paper.image("images/arrow.png", (x + 210), (y - y1 ), 50, 10);
		var interFloat;
//
//		floatInt = setInterval(function() {
//
//			if ( ans <= y1) {
//				arrow.remove();
//				console.log("hey");
//				ans = y1 + 1;
//				
//				arrow = paper.image("images/arrow.png", (x + 210), (y - ans ), 50, 10);
//				
//
//			}
//			else {
//				clearInterval(floatInt);
//				off_check = 1;
//				
////				arrow_Dec(x, y);
//			
//			}
//			
//			},1000);
			
	}
	
	
	function arrow_Dec(x, y) {
		
		arrow.remove();
		arrow = paper.image("images/arrow.png", (x + 210), (y + 15  ), 50, 10);
		var interFloat;

//		floatDec = setInterval(function() {
//
//			if (off_check == 1) {
//				arrow.remove();
//				//interFloat = (y - ans);
//				y1 = 0;
//				ans = 0;
//				arrow = paper.image("images/arrow.png", (x + 210), (y +10  ), 50, 10);
//				
//
//			}
//			else {
//				clearInterval(floatDec);
////				off_check = 1;
//			
//			}
//			
//			},1000);
	}
	
	var torEnt = 0;
	$("#btnAnsCheck").click(function() {
		torEnt++;
		
		 testing.torAct = torEnt;
		var speedAns = $("#speedAns").val().trim();
		console.log("ans check" + speedAns);
		flow = parseFloat(power);
		console.log("power" + flow);
		
		if (id <= 3) {
			if (speedAns == flow) {
				checkAns = 0;

				$("#btnAnsCheck").prop("disabled", true);
				$("#speedAns").val('');
				selectedtor.attr('text', "0");
//				pipe_empty(x,y);
				arrow_Dec(x, y) ;
				tableCreate();
				 

				//event.stopPropagation();
			} else if (speedAns != flow) {

				alert("Entered value is incorrect.Try it again ");


			}


		} else if (id == 4) {

				alert(" Power = 2 X Diameter of Shaft X 3.14 X (Weight X 9.81 - Scale Reading) x 1400)/(60 X 1000)");

		} else {
			speedAns = $("#speedAns").val().trim();

			if (speedAns == flow) {
				checkAns = 0;

				$("#btnAnsCheck").prop("disabled", true);
				$("#speedAns").val('');
				selectedtor.attr('text', "0");
//				pipe_empty(x,y);
				arrow_Dec(x, y) 
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
		speedJson.torque_corr = power;
		speedJson.torque_err = torque.toFixed(2);
		speedJson.load = wt;
		speedJson.RPM = speed;
		
		//				console.log("Flow " + flowJson.mFlow);
		arrayJson.push(speedJson);
		var tableMainDiv = '';

		console.log(arrayJson);
		masterJson.demo = arrayJson;

		console.log(masterJson);

		masterJson.demo.sort(function(a, b) {
			return a.perc - b.perc;
		});

		$("#tableDesign").html("");
		//				
		//				$("#showGraphDiv").html("");
		var tableMainDiv = ''
			+ '<table class="table table-borderd" style="margin:10px;">'
			+ ' <thead>'
			+ '  <tr style="background-color:grey;color:#fff;" >'
			+ '  <th scope="col">Speed in RPM </th>'
			+ '  <th scope="col">Load in kg </th>'
			+ '   <th scope="col">Calculated Power (Kw)</th>'
			+ '  <th scope="col">Scale Reading</th>'

			+ '   </tr>'
			+ '  </thead>'
			+ '   <tbody>'
		for (var i = 0; i < masterJson.demo.length; i++) {
			tableMainDiv += '<tr>'
				+ '   <td><center>' + masterJson.demo[i].RPM + '</center></td>'
				+ '   <td><center>' + masterJson.demo[i].load + '</center></td>'
				+ '   <td><center>' + masterJson.demo[i].torque_corr + '</center></td>'
				+ '   <td><center>' + masterJson.demo[i].torque_err + '</center></td>'
				+ '     </tr>'
		}

		tableMainDiv += ' </tbody>'
			+ '  </table>'
			+ '<div class="row" >'
			+ '<div class="col-sm-12">'
			+ '<button type="button"  class="btn btn-primary btnStyle" id="showGraph">SHOW GRAPH</button>'
			+ '<button type="button"  class="btn btn-primary btnStyle" id="fault" hidden>Next Level</button>'
			+ '</div>'
			+ '</div>'

		$("#tableDesign").html(tableMainDiv);

		$("#showGraph").click(function() {

		if (masterJson.demo.length >= 3) {
//				if (array[0] != 0 && array[array.length - 1] != 100) {
//					checkAlert = 1;
//					alert(" You need to provide next input values as 1 and 100 !!");
//
//				}
//
//				else if (array[0] != 0) {
//					checkAlert = 1;
//					alert("You need to provide next input value as 1 !!");
//
//				}
//
//				else if (array[array.length - 1] != 100) {
//					checkAlert = 1;
//					alert("You need to provide next input value as 100 !!");
//
//				}

				if (checkAlert == 0) {
//					$("#calibration").removeAttr("hidden",false);
					$("#showGraph").attr("hidden",true);
					graphCreate();
					$("#fault").attr("hidden",false);
					data.Testing = testing;
					console.log(data);
				}
		}
			else {
				alert("Please provide atleast six reading ");
			}


			function graphCreate() {
				var xdata = [];
				var ydata = [];
				var graphData1 = [];
				for (var i = 0; i < masterJson.demo.length; i++) {
					xdata[i] = parseFloat(masterJson.demo[i].torque_corr);
					ydata[i] = parseFloat(masterJson.demo[i].load);

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
				Xmax = parseFloat(xdata[xdata.length - 1]);
				Ymax = parseFloat(ydata[ydata.length - 1]);
				console.log("Xmax " + Xmax);
				console.log("Ymax " + Ymax);
				console.log(" Standard Torque v/s Actual Torque " + graphData1);
				
				Highcharts.chart('canvas-div', {
					title: {
						text: ' Graph of Standard Power & Weight '
					},
//					subtitle: {
//						text: 'Meter Constant is  pulses (per/ltr)'
//					},
					xAxis: {
						min: 0,
						max: Xmax,
						title: {
							text: 'Power'
						}
					},
					yAxis: {
						min: 0,
						max: Ymax,
						title: {
							text: 'Weight'
						}
					},
					series: [
						{
							type: 'line',
							name: 'power',
							data: [[0 , 0], [Xmax, Ymax]],
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
							name: 'speed',

							data: graphData1,
							marker: {
								radius: 4
							}
						}]

				});
			}

			console.log(masterJson);
		});
		
		$("#fault").click(function() {
			$("#canvas-div").html("");
			$("#main-div-conf").html("");
			 $("#canvas-div").html('<img src="images/shaft_torque.png"  width="90%" height="90%">');
			$("#centerText1").html('CONFIGURE EDDY CURRENT DYNAMOMETER');
			$("#centerText2").html('EDDY CURRENT DYNAMOMETER DYNAMOMETER CHARACTERIZATION DIAGRAM');
			shaftConfig();
			
			
		});
		var str =  '<div class="row">'
			+ '<div class="col-sm-12">'
			+ '<button type="button"  class="btn btn-primary btnStyle" id="fault">Next Level</button>'
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
		paper.path('M' + (x) + ' ' + (y + 260) + 'l 0 250 l 348 0 l 0 -250 z').attr({ 'stroke': 'black', 'stroke-width': '2' });
		paper.path('M' + (x - 10) + ' ' + (y + 532) + 'l 900 0 l 0 -20 l -900 0 z').attr({ 'stroke': 'black', 'stroke-width': '2.5', 'fill': 'grey' });

	//	paper.path('M' + (x + 245) + ' ' + (y + 100) + 'l 0 -50 l 280 0 l 0 50 l  -10 0 l 0 -40 l -260 0 l 0 40')
		//	.attr({ 'stroke': 'black', 'stroke-width': '2', 'fill': '' });

		//paper.path('M' + (x + 175) + ' ' + (y + 140) + 'l 0 -100 ')
			//.attr({ 'stroke': 'black', 'stroke-width': '2' });

		paper.path('M' + (x + 270) + ' ' + (y + 175) + 'l 550 0 l 0 125 l -10 0  l 0 -115 l -540 0 l 0 -10+M'
			//		+ (x + 508) + ' ' + (y + 145) + 'l 0 60 l 300 0 l 0 90 l 0 0'
		)
			.attr({ 'stroke': 'black', 'stroke-width': '2', 'fill': '' });
		
		
		
		paper.path('M' + (x + 610) + ' ' + (y + 430) + 'l 0 -90 l -225 0 l 0 -110 l -120 0 l 0 15 l 100 0 l  0 110 l  225 0 l 0 80+M'
			//		+ (x + 600) + ' ' + (y + 430) + 'l 0 -80 l -230 0 l 0 -140 l -45 -30'
		)
			.attr({ 'stroke': 'black', 'stroke-width': '2', 'fill': 'white' });

		paper.path('M' + (x + 615) + ' ' + (y + 470) + 'l 130 0 l 0 10 l -130 0 z+M'
			+ (x + 615) + ' ' + (y + 480) + 'l 130 0')
			.attr({ 'stroke': 'black', 'stroke-width': '2', 'fill': '' });
			
		paper.path('M' + (x + 130) + ' ' + (y + 250) + 'l  0 -450  l 170 0 l 0 0 +M'
			+ (x + 300) + ' ' + (y + 250) + 'l 0 -450 ')
			.attr({ 'stroke': 'black', 'stroke-width': '3', 'fill': '' });	

	}
	//pipe_fill(x,y);
	function pipe_fill(x,y){
		
		paper.path('M' + (x + 270) + ' ' + (y + 175) + 'l 550 0 l 0 125 l -10 0  l 0 -115 l -540 0 l 0 -10+M'
			//		+ (x + 508) + ' ' + (y + 145) + 'l 0 60 l 300 0 l 0 90 l 0 0'
		)
			.attr({ 'stroke': 'black', 'stroke-width': '2', 'fill': '#37e1ed' });
		
		
		
		paper.path('M' + (x + 610) + ' ' + (y + 430) + 'l 0 -90 l -225 0 l 0 -110 l -120 0 l 0 15 l 100 0 l  0 110 l  225 0 l 0 80+M'
			//		+ (x + 600) + ' ' + (y + 430) + 'l 0 -80 l -230 0 l 0 -140 l -45 -30'
		)
			.attr({ 'stroke': 'black', 'stroke-width': '2', 'fill': '#37e1ed' });

		paper.path('M' + (x + 615) + ' ' + (y + 470) + 'l 130 0 l 0 10 l -130 0 z+M'
			+ (x + 615) + ' ' + (y + 480) + 'l 130 0')
			.attr({ 'stroke': 'black', 'stroke-width': '2', 'fill': '#37e1ed' });
			
			
			
			
	}
			
	
	function pipe_empty(x,y){
		
		paper.path('M' + (x + 120) + ' ' + (y + 175) + 'l 700 0 l 0 125 l -10 0  l 0 -115 l -690 0 l 0 -10+M'
			//		+ (x + 508) + ' ' + (y + 145) + 'l 0 60 l 300 0 l 0 90 l 0 0'
		)
			.attr({ 'stroke': 'black', 'stroke-width': '2', 'fill': 'white' });
		
		
		
		paper.path('M' + (x + 610) + ' ' + (y + 430) + 'l 0 -90 l -225 0 l 0 -110 l -120 0 l 0 15 l 100 0 l  0 110 l  225 0 l 0 80+M'
			//		+ (x + 600) + ' ' + (y + 430) + 'l 0 -80 l -230 0 l 0 -140 l -45 -30'
		)
			.attr({ 'stroke': 'black', 'stroke-width': '2', 'fill': 'white' });

		paper.path('M' + (x + 615) + ' ' + (y + 470) + 'l 130 0 l 0 10 l -130 0 z+M'
			+ (x + 615) + ' ' + (y + 480) + 'l 130 0')
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