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
	time = 5;
	
	
	paper.path('M' + (x + 100 ) + ' ' + (y + 100 ) + 'l 80 0 M  ' + (x + 198 ) + ' ' + (y + 100 ) + 'l 100 0 l 0 50 l 10 -10 l -10 10 l -10 -10')
			.attr({ 'stroke': 'black', 'stroke-width': '3' });
			
	
	var sv_V1 = paper.path(
		'M' + (x + 180) + ' ' + (y + 100) + 'l -15 -15 l 0 30 l 30 -30 l 0 30 l -15 -15 l 0 -25 l -10 0 l 0 -8 l 20 0 l 0 8 l -10 0')
		.attr({
			'stroke': 'black',
			'stroke-width': '2',
			'fill': 'red'
		});	
	
	var tank = paper.path('M' + (x + 200 ) + ' ' + (y + 200 ) + 'l 0 200 l 300 0 l 0 -200  M'+(x+200)+' '+(y+200)+' A 80 27 0 0 1 '+(x+500)+' '+(y+200)+'' )
			.attr({ 'stroke': 'black', 'stroke-width': '5' });
			
	paper.path('M' + (x + 350 ) + ' ' + (y + 100 ) + 'l 80 0 M  ' + (x + 350 ) + ' ' + (y + 100 ) + 'l 0 0 l 0 50 l 10 -10 l -10 10 l -10 -10M'
	+' ' + (x + 450 ) + ' ' + (y + 100 ) + 'l 50 0 ')
			.attr({ 'stroke': 'black', 'stroke-width': '3' });
			
		paper.path('M' + (x + 335 ) + ' ' + (y + 400 ) + 'l 0 50   M' + (x + 335) + ' ' + (y + 470) + ' l 0 80 l 100 0 l 0 100 l 80 0 M'
		+ (x + 435) + ' ' + (y + 550) + ' l 0 -50 l 80 0 M' + (x + 435) + ' ' + (y + 570) + ' l 80 0  M' )
			.attr({ 'stroke': 'black', 'stroke-width': '3' });		
	
	
		
		
		paper.path('M' + (x + 532 ) + ' ' + (y + 570 ) + 'l 50 0   M' + (x + 532) + ' ' + (y + 500) + ' l 50 0 M'
		+ (x + 532) + ' ' + (y + 650) + ' l 50 0 M' + (x + 435) + ' ' + (y + 570) + ' l 0 0  M' )
			.attr({ 'stroke': 'black', 'stroke-width': '3' });	
							
	
	
	var sv_V2 = paper.path(
		'M' + (x + 445) + ' ' + (y + 100) + 'l -15 -15 l 0 30 l 30 -30 l 0 30 l -15 -15 l 0 -25 l -10 0 l 0 -8 l 20 0 l 0 8 l -10 0')
		.attr({
			'stroke': 'black',
			'stroke-width': '2',
			'fill': 'red'
		});	
		
	var sv_V3 = paper.path(
		'M' + (x + 320) + ' ' + (y + 450) + 'l 30 0 l -30 20 l 30 0 l -30 -20 + M' + (x + 335) + ' ' + (y + 460) + ' l 20 0 l 0 10 l 10 0 l 0 -20 l -10 0 l 0 10 ')
		.attr({
			'stroke': 'black',
			'stroke-width': '2',
			'fill': 'red'
		});	
		
		var sv_V5 = paper.path('M' + (x + 515) + ' ' + (y + 570) + 'l -15 -15 l 0 30 l 30 -30 l 0 30 l -15 -15 l 0 -25 l -10 0 l 0 -8 l 20 0 l 0 8 l -10 0')
		.attr({
			'stroke': 'black',
			'stroke-width': '2',
			'fill': 'red'
		});	
		
		var sv_V4 = paper.path('M' + (x + 515) + ' ' + (y + 500) + 'l -15 -15 l 0 30 l 30 -30 l 0 30 l -15 -15 l 0 -25 l -10 0 l 0 -8 l 20 0 l 0 8 l -10 0')
		.attr({
			'stroke': 'black',
			'stroke-width': '2',
			'fill': 'red'
		});	
		
		var sv_V6 = paper.path('M' + (x + 515) + ' ' + (y + 650) + 'l -15 -15 l 0 30 l 30 -30 l 0 30 l -15 -15 l 0 -25 l -10 0 l 0 -8 l 20 0 l 0 8 l -10 0')
		.attr({
			'stroke': 'black',
			'stroke-width': '2',
			'fill': 'red'
		});		
		 
	
			
		
		
		var pump_circle = paper.circle(x + 580, y , 30).attr({ 'stroke': 'black', 'stroke-width': '3', 'fill': 'white' });
		var pump_circle = paper.circle(x + 580, y + 110, 30).attr({ 'stroke': 'black', 'stroke-width': '3', 'fill': 'white' });
		var pump_circle = paper.circle(x + 580, y + 420, 30).attr({ 'stroke': 'black', 'stroke-width': '3', 'fill': 'white' });	
		var pump_circle = paper.circle(x + 120, y + 420, 30).attr({ 'stroke': 'black', 'stroke-width': '3', 'fill': 'white' });	
		
		paper.path('M' + (x + 470 ) + ' ' + (y + 420 ) + 'l 80 0   M' + (x + 470) + ' ' + (y + 420) + ' l 0 -20 M'
		+ (x + 580) + ' ' + (y + 70) + ' l 0 10 M' + (x + 580) + ' ' + (y + 50) + ' l 0 10  M' 
		+(x + 580) + ' ' + (y + 30) + ' l 0 10 M' + (x + 445) + ' ' + (y + 65) + ' l 0 -65 l 100 0 M'
		+(x + 495) + ' ' + (y - 10 ) + ' l -20 20 M' + (x + 505) + ' ' + (y -10) + ' l -20 20  M'
//		+(x + 445) + ' ' + (y ) + ' l 0 10 M' + (x + 455) + ' ' + (y ) + ' l 10 0  M'
//		+(x + 475) + ' ' + (y ) + ' l 10 0 M' + (x + 495) + ' ' + (y ) + ' l 10 0  M'
//		+(x + 520) + ' ' + (y ) + ' l 10 0 M' + (x + 540) + ' ' + (y ) + ' l 10 0  M'
		+ (x + 150 ) + ' ' + (y + 420 ) + 'l 80 0  l 0 -20  M' + (x + 470) + ' ' + (y + 420) + ' l 0 -20 M'
		+ (x + 580 ) + ' ' + (y + 140 ) + 'l  0 10   M' + (x + 580) + ' ' + (y + 160) + ' l 0 10 M'
		+ (x + 580 ) + ' ' + (y + 180 ) + 'l  0 10   M' + (x + 580) + ' ' + (y + 200) + ' l 0 10 M'
		+ (x + 580 ) + ' ' + (y + 220 ) + 'l  0 10   M' + (x + 580) + ' ' + (y + 240) + ' l 0 10 M'
		+ (x + 580 ) + ' ' + (y + 260 ) + 'l  0 10   M' + (x + 580) + ' ' + (y + 280) + ' l 0 10 M'
		+ (x + 580 ) + ' ' + (y + 300 ) + 'l  0 10   M' + (x + 580) + ' ' + (y + 320) + ' l 0 10 M'
		+ (x + 580 ) + ' ' + (y + 340 ) + 'l  0 10   M' + (x + 580) + ' ' + (y + 360) + ' l 0 10 M'
		+ (x + 580 ) + ' ' + (y + 380 ) + 'l  0 10   M' + (x + 580) + ' ' + (y + 400) + ' l 0 0 M')
			.attr({ 'stroke': 'black', 'stroke-width': '3' });
			
		textLables(x,y);		
		function textLables(x,y){
			
		
		var u2txt = paper.text(x +610, y + 570, "V5").attr({
		'font-size': 20,
		'font-weight': "bold"
		});	
		
		var u2txt = paper.text(x +610, y + 500, "V4").attr({
		'font-size': 20,
		'font-weight': "bold"
		});	
		
		var u2txt = paper.text(x +610, y + 650, "V6").attr({
		'font-size': 20,
		'font-weight': "bold"
		});	
		
		
		var u2txt = paper.text(x + 390, y + 460, "V3").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		
		var u2txt = paper.text(x + 160, y + 50, " SV V1").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		var u2txt = paper.text(x + 420, y + 50, "V2").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		var u2txt = paper.text(x + 580, y + 420, "PT").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		var u2txt = paper.text(x + 580, y + 110, "PIC").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		var u2txt = paper.text(x + 580, y , "PY").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		var u2txt = paper.text(x + 120, y + 420, "LSL").attr({
		'font-size': 20,
		'font-weight': "bold"
		});
		
		sv_V1.click(function(event){
			sv_V1.attr('fill','green');
			tank_fill(x, y);
			setTimeout(function() { sv_V1.attr('fill','red')}, time * 1000);
		});
		
		}
		
		sv_V3.click(function(event){
			
		});
		
		function tank_fill(x, y)
		 {
		var b = paper.path('M' + (x + 350) + ' ' + (y + 397) + 'l 0 0').attr({ 'stroke': 'white', 'stroke-width': '293.5' });
		level = b.animate({
			path: "M" + (x + 350) + " " + (y + 397) + "  l 0  " + (-200) + "", 'stroke-width': '293.5', 'stroke': '#85d3ed',
			opacity: 1
		}, time * 1000)
	};
		

}