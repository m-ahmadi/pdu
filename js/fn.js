var t;
var a = (function () {
	'use strict';
var tree = (function () {
	var useJstree = function (divId, treeStructure) {
		if (typeof treeStructure === 'undefined') { return; }
		$.jstree.defaults.plugins = [
			// "grid",
			// "checkbox",
			// "contextmenu", 
			// "dnd", 
			// "massload", 
			// "search", 
			// "sort", 
			// "state", 
			// "types", 
			// "unique", 
			// "wholerow", 
			// "changed", 
			// "conditionalselect"
		];
		
		$('#'+divId).jstree({
			core : {
				//animation : 0,
				data : treeStructure
			},
			types : {
				"default" : {
					//"icon" : "glyphicon glyphicon-hdd",
					"disabled" : { 
						"check_node" : false, 
						"uncheck_node" : false 
					}
				},
				"demo" : {
				}
			}
		});
	};
	
	
	return {
		useJstree: useJstree
	};
}()),
tabs = (function () {
	var show = function (e) {
		var target = $(this).data().tab;
		

		$('.fn-tablink').removeClass('lime accent-1 colorblack');
		$('.fn-tablink').addClass('deep-purple lighten-2');
		
		$(this).removeClass('deep-purple lighten-2');
		$(this).addClass('lime accent-1 colorblack');
		
		$('.tab-item').addClass('no-display');
		$('.tab'+target).removeClass('no-display');
		
		
		
	};
	return {
		show: show
	};
}()),
highcharts = (function () {
	var t,
	firstChart = function () {
		t = $('#container').highcharts({
			chart: {
				type: 'bar'
			},
			title: {
				text: 'Fruit Consumption'
			},
			xAxis: {
				categories: ['Apples', 'Bananas', 'Oranges']
			},
			yAxis: {
				title: {
					text: 'Fruit eaten'
				}
			},
			series: [
				{
					name: 'Jane',
					data: [1, 0, 4]
				},
				{
					name: 'John',
					data: [5, 7, 3]
				}
			]
		});
	},
	solidGauge = function () {
		var gaugeOptions = {
			
			chart: {
				backgroundColor: null,
				type: 'solidgauge'
			},
			
			title: null,

			pane: {
				center: ['50%', '85%'],
				size: '100%',
				startAngle: -90,
				endAngle: 90,
				background: {
					backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
					innerRadius: '60%',
					outerRadius: '100%',
					shape: 'arc'
				}
			},

			tooltip: {
				enabled: false
			},

			// the value axis
			yAxis: {
				stops: [
					[0.1, '#55BF3B'], // green
					[0.5, '#DDDF0D'], // yellow
					[0.9, '#DF5353'] // red
				],
				lineWidth: 0,
				minorTickInterval: null,
				tickPixelInterval: 400,
				tickWidth: 0,
				title: {
					y: -70
				},
				labels: {
					y: 16
				}
			},

			plotOptions: {
				solidgauge: {
					dataLabels: {
						y: 5,
						borderWidth: 0,
						useHTML: true
					}
				}
			}
		};

		// The speed gauge
		$('#container-speed').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 200,
				title: {
					text: 'Speed'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
			name: 'Speed',
			data: [80],
			dataLabels: {
				format: '<div style="text-align:center"><span style="font-size:25px;color:' +
					((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
					'<span style="font-size:12px;color:silver">km/h</span></div>'
			},
			tooltip: {
				valueSuffix: ' km/h'
			}
			}]

		}));

		// The RPM gauge
		$('#container-rpm').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 5,
				title: {
					text: 'RPM'
				}
			},

			series: [{
				name: 'RPM',
				data: [1],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
						((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
						'<span style="font-size:12px;color:silver">* 1000 / min</span></div>'
				},
				tooltip: {
					valueSuffix: ' revolutions/min'
				}
			}]
		}));
	},
	speedometer = function () {
		$('#container-speedometer').highcharts({
			chart: {
				backgroundColor: null,
				type: 'gauge',
				plotBackgroundColor: null,
				plotBackgroundImage: null,
				plotBorderWidth: 0,
				plotShadow: false
			},

			title: {
				text: ''
			},

			pane: {
				startAngle: -150,
				endAngle: 150,
				background: [{
					backgroundColor: {
						linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
						stops: [
							[0, '#FFF'],
							[1, '#333']
						]
					},
					borderWidth: 0,
					outerRadius: '109%'
				}, {
					backgroundColor: {
						linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
						stops: [
							[0, '#333'],
							[1, '#FFF']
						]
					},
					borderWidth: 1,
					outerRadius: '107%'
				}, {
					// default background
				}, {
					backgroundColor: '#DDD',
					borderWidth: 0,
					outerRadius: '105%',
					innerRadius: '103%'
				}]
			},

			// the value axis
			yAxis: {
				min: 0,
				max: 200,

				minorTickInterval: 'auto',
				minorTickWidth: 1,
				minorTickLength: 10,
				minorTickPosition: 'inside',
				minorTickColor: '#666',

				tickPixelInterval: 30,
				tickWidth: 2,
				tickPosition: 'inside',
				tickLength: 10,
				tickColor: '#666',
				labels: {
					step: 2,
					rotation: 'auto'
				},
				title: {
					text: 'km/h'
				},
				plotBands: [{
					from: 0,
					to: 120,
					color: '#55BF3B' // green
				}, {
					from: 120,
					to: 160,
					color: '#DDDF0D' // yellow
				}, {
					from: 160,
					to: 200,
					color: '#DF5353' // red
				}]
			},

			series: [{
				name: 'Speed',
				data: [80],
				tooltip: {
					valueSuffix: ' km/h'
				}
			}]

		})
	},
	vu = function () {
		$('#container-vu').highcharts({
			chart: {
				backgroundColor: null,
				type: 'gauge',
				plotBorderWidth: 1,
				plotBackgroundColor: {
					linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
					stops: [
						[0, '#FFF4C6'],
						[0.3, '#FFFFFF'],
						[1, '#FFF4C6']
					]
				},
				plotBackgroundImage: null,
				height: 180,
				width: 350
			},

			title: {
				text: ''
			},

			pane: [{
				startAngle: -45,
				endAngle: 45,
				background: null,
				center: ['50%', '135%'],
				size: 340
			}],

			tooltip: {
				enabled: false
			},

			yAxis: [{
				min: 30,
				max: 70,
				minorTickPosition: 'outside',
				tickPosition: 'outside',
				labels: {
					rotation: 'auto',
					distance: 20
				},
				plotBands: [{
					from: 30,
					to: 45,
					color: '#C02316',
					innerRadius: '100%',
					outerRadius: '105%'
				}, {
					from: 55,
					to: 70,
					color: '#C02316',
					innerRadius: '100%',
					outerRadius: '105%'
				}],
				pane: 0,
				title: {
					text: '<span style="font-family:Yekan;font-size:12px;direction:rtl;"></span>',
					y: -40
				}
			}],

			plotOptions: {
				gauge: {
					dataLabels: {
						enabled: false
					},
					dial: {
						radius: '100%'
					}
				}
			},


			series: [{
				name: 'Channel A',
				data: [49],
				yAxis: 0
			}]

		});
	},
	
	start = function () {
		
	};
	
	return {
		firstChart: firstChart,
		solidGauge: solidGauge,
		speedometer: speedometer,
		vu: vu
	};
}()),

mediator = (function () {
	var start = function () {
		$.ajax({
			url:'t.json',
			type: 'GET',
			dataType: 'json'
		})
		.done(function (data) {
			
			a.tree.useJstree('jstree', data );
		});
		
		
		$('#jstree').on("select_node.jstree", function (e, data) {
			if (data.node.parent === '#') {
				
				$('.tab1').html('<p style="font-size: 48px;">'+data.node.text+'</p>');
			} else {
				$('.tab1').html('<p style="font-size: 48px;">'+$('#jstree').jstree(true).get_node(data.node.parent).text+'</p><p style="font-size: 28px;">'+data.node.text+'</p>');
			}
		});
		
		$('.fn-tablink').on('click', a.tabs.show);
		
		highcharts.firstChart();
		highcharts.solidGauge();
		highcharts.speedometer();
		highcharts.vu();
		t = $('#container-vu').highcharts();
	};
	
	return {
		start: start
	};
}());
	
	
return {
	tree: tree,
	tabs: tabs,
	highcharts: highcharts,
	mediator: mediator
};
}());