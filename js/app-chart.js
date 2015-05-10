google.load('visualization', '1', {packages: ['corechart']});
    google.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = new google.visualization.arrayToDataTable([
          ['Year', 'Applications'],
          ['FY 2010', 32830],
          ['FY 2011', 42810],
          ['FY 2012', 45555],
          ['FY 2013', 39929],
          ['FY 2014', 41920]
        ]);

        // Set chart options
         var options = {
		  fontName: 'Slabo 27px',
          width: "100%",
		  height: 500,
		  chartArea: {'width': '80%', 'height': '75%'},
          legend: { position: 'none' },
          chart: { subtitle: 'Source: Executive Office for Immigration Review Statistics Yearbook FY 2014' }
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }// JavaScript Document