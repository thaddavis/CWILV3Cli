import { Component, OnInit} from '@angular/core';

declare var $: any

@Component({
    moduleId: module.id,
	selector: 'chart-cmp',
	templateUrl: 'chart.component.html'
})

export class ChartComponent implements OnInit {
	ngOnInit() {
        var container:any = $('#container');
        container.highcharts({
		    chart: {
		        type: 'area'
		    },
		    title: {
		        text: 'Historic and Estimated Worldwide Population Distribution by Region'
		    },
		    subtitle: {
		        text: 'Source: Wikipedia.org'
		    },
		    xAxis: {
		        categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
		        tickmarkPlacement: 'on',
		        title: {
		            enabled: false
		        }
		    },
		    yAxis: {
		        title: {
		            text: 'Percent'
		        }
		    },
		    tooltip: {
		        pointFormat: '<span style="color:{series.color}">{series.name}</span>'+
		        ': <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
		        shared: true
		    },
		    plotOptions: {
		        area: {
		            stacking: 'percent',
		            lineColor: '#ffffff',
		            lineWidth: 1,
		            marker: {
		                lineWidth: 1,
		                lineColor: '#ffffff'
		            }
		        }
		    },
		    series: [{
		        name: 'Asia',
		        data: [502, 635, 809, 947, 1402, 3634, 5268]
		    }, {
		        name: 'Africa',
		        data: [106, 107, 111, 133, 221, 767, 1766]
		    }, {
		        name: 'Europe',
		        data: [163, 203, 276, 408, 547, 729, 628]
		    }, {
		        name: 'America',
		        data: [18, 31, 54, 156, 339, 818, 1201]
		    }, {
		        name: 'Oceania',
		        data: [2, 2, 2, 6, 13, 30, 46]
		    }]
		});
        var areaChart: any = $('#area-chart');
        areaChart.highcharts({
	        chart: {
	            type: 'area'
	        },
	        title: {
	            text: 'Area chart with negative values'
	        },
	        xAxis: {
	            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
	        },
	        credits: {
	            enabled: false
	        },
	        series: [{
	            name: 'John',
	            data: [5, 3, 4, 7, 2]
	        }, {
	            name: 'Jane',
	            data: [2, -2, -3, 2, 1]
	        }, {
	            name: 'Joe',
	            data: [3, 4, 4, -2, 5]
	        }]
	    });
        var totalFruit: any = $('#total-fruit');
        totalFruit.highcharts({
            chart: {
                type: 'column'
            },

            title: {
                text: 'Total fruit consumtion, grouped by gender'
            },

            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },

            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                    text: 'Number of fruits'
                }
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal;
                }
            },

            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },

            series: [{
                name: 'John',
                data: [5, 3, 4, 7, 2],
                stack: 'male'
            }, {
                name: 'Joe',
                data: [3, 4, 4, 2, 5],
                stack: 'male'
            }, {
                name: 'Jane',
                data: [2, 5, 6, 2, 1],
                stack: 'female'
            }, {
                name: 'Janet',
                data: [3, 0, 4, 4, 3],
                stack: 'female'
            }]
        });
        var snowDepth: any = $('#snow-depth');
        snowDepth.highcharts({
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Snow depth at Vikjafjellet, Norway'
            },
            subtitle: {
                text: 'Irregular time data in Highcharts JS'
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: { // don't display the dummy year
                    month: '%e. %b',
                    year: '%b'
                },
                title: {
                    text: 'Date'
                }
            },
            yAxis: {
                title: {
                    text: 'Snow depth (m)'
                },
                min: 0
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
            },

            plotOptions: {
                spline: {
                    marker: {
                        enabled: true
                    }
                }
            },

            series: [{
                name: 'Winter 2012-2013',
                // Define the data points. All series have a dummy year
                // of 1970/71 in order to be compared on the same x axis. Note
                // that in JavaScript, months start at 0 for January, 1 for February etc.
                data: [
                    [Date.UTC(1970, 9, 21), 0],
                    [Date.UTC(1970, 10, 4), 0.28],
                    [Date.UTC(1970, 10, 9), 0.25],
                    [Date.UTC(1970, 10, 27), 0.2],
                    [Date.UTC(1970, 11, 2), 0.28],
                    [Date.UTC(1970, 11, 26), 0.28],
                    [Date.UTC(1970, 11, 29), 0.47],
                    [Date.UTC(1971, 0, 11), 0.79],
                    [Date.UTC(1971, 0, 26), 0.72],
                    [Date.UTC(1971, 1, 3), 1.02],
                    [Date.UTC(1971, 1, 11), 1.12],
                    [Date.UTC(1971, 1, 25), 1.2],
                    [Date.UTC(1971, 2, 11), 1.18],
                    [Date.UTC(1971, 3, 11), 1.19],
                    [Date.UTC(1971, 4, 1), 1.85],
                    [Date.UTC(1971, 4, 5), 2.22],
                    [Date.UTC(1971, 4, 19), 1.15],
                    [Date.UTC(1971, 5, 3), 0]
                ]
            }, {
                name: 'Winter 2013-2014',
                data: [
                    [Date.UTC(1970, 9, 29), 0],
                    [Date.UTC(1970, 10, 9), 0.4],
                    [Date.UTC(1970, 11, 1), 0.25],
                    [Date.UTC(1971, 0, 1), 1.66],
                    [Date.UTC(1971, 0, 10), 1.8],
                    [Date.UTC(1971, 1, 19), 1.76],
                    [Date.UTC(1971, 2, 25), 2.62],
                    [Date.UTC(1971, 3, 19), 2.41],
                    [Date.UTC(1971, 3, 30), 2.05],
                    [Date.UTC(1971, 4, 14), 1.7],
                    [Date.UTC(1971, 4, 24), 1.1],
                    [Date.UTC(1971, 5, 10), 0]
                ]
            }, {
                name: 'Winter 2014-2015',
                data: [
                    [Date.UTC(1970, 10, 25), 0],
                    [Date.UTC(1970, 11, 6), 0.25],
                    [Date.UTC(1970, 11, 20), 1.41],
                    [Date.UTC(1970, 11, 25), 1.64],
                    [Date.UTC(1971, 0, 4), 1.6],
                    [Date.UTC(1971, 0, 17), 2.55],
                    [Date.UTC(1971, 0, 24), 2.62],
                    [Date.UTC(1971, 1, 4), 2.5],
                    [Date.UTC(1971, 1, 14), 2.42],
                    [Date.UTC(1971, 2, 6), 2.74],
                    [Date.UTC(1971, 2, 14), 2.62],
                    [Date.UTC(1971, 2, 24), 2.6],
                    [Date.UTC(1971, 3, 2), 2.81],
                    [Date.UTC(1971, 3, 12), 2.63],
                    [Date.UTC(1971, 3, 28), 2.77],
                    [Date.UTC(1971, 4, 5), 2.68],
                    [Date.UTC(1971, 4, 10), 2.56],
                    [Date.UTC(1971, 4, 15), 2.39],
                    [Date.UTC(1971, 4, 20), 2.3],
                    [Date.UTC(1971, 5, 5), 2],
                    [Date.UTC(1971, 5, 10), 1.85],
                    [Date.UTC(1971, 5, 15), 1.49],
                    [Date.UTC(1971, 5, 23), 1.08]
                ]
            }]
        });
	}
}
