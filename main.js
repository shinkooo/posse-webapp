'use strict'


google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart1);
function drawChart1(){
  var data=new google.visualization.DataTable();
  data.addColumn("string","day");
  data.addColumn("number","hour");
  data.addRows([
    ["", 3],
    ["2", 4],
    ["", 5],
    ["4", 3],
    ["", 3],
    ["6", 0],
    ["", 0],
    ["8", 4],
    ["", 2],
    ["10", 2],
    ["", 8],
    ["12", 8],
    ["", 2],
    ["14", 2],
    ["", 1],
    ["16", 7],
    ["", 4],
    ["18", 4],
    ["", 3],
    ["20", 3],
    ["", 2],
    ["22", 2],
    ["", 6],
    ["24", 2],
    ["", 1],
    ["26", 1],
    ["", 1],
    ["28", 1],
    ["", 7],
    ["30", 8],
]);
  var options={
    legend:{position:"none"},
    vAxis:{
      format: "#h",
      ticks:[0,2,4,6,8]
    },
  };
  var chart=new google.visualization.ColumnChart(
  document.getElementById("chart_div")  
  );
  chart.draw(data, options);
  }

///ドーナツ作成   ///
google.load("visualization","1.0",{packages:["corechart"]});

google.setOnLoadCallback(drawChart);
//グラフ用//
function drawChart(){
  //ドーナツ共通オプション//
  const donuts_options={
    fontName: "sans-serif",
    colors:
    [
      "#0345ec",
      "#0f71bd",
      "#20bdde",
      "#3ccefe",
      "#b29ef3",
      "#6d46ec",
      "#4a17ef",
      "#3105c0",
    ],
    legend:{position:"none"},
    tooltip:{
      textStyle:{bold:"false",fontSize:12},
    },
    pieSliceText:"percentage",
    pieSliceTextStyle:{fontSize:15},
    pieHole:0.4,
    backgroundColor:"transparent",
    chartArea:{width:"100%",height:"100%"},
  };

  //学習言語//
  const study_language_data=new google.visualization.arrayToDataTable([
    ["", ""],
    ["HTML", 30],
    ["CSS", 20],
    ["JavaScript", 10],
    ["PHP", 5],
    ["Laravel", 5],
    ["SQL", 20],
    ["SHELL", 20],
    ["その他", 10],
  ])

  const study_language_chart=new google.visualization.PieChart(
    document.getElementById("study_language_chart")
  );
  study_language_chart.draw(study_language_data, donuts_options);
  //ここまで学習言語//

  //学習コンテンツ//
  const study_contents_data=new google.visualization.arrayToDataTable([
    ["", ""],
    ["N予備校", 40],
    ["ドットインストール", 20],
    ["課題", 40],
  ]);
  
  const study_contents_chart= new google.visualization.PieChart(
    document.getElementById("study_contents_chart")
  );
  study_contents_chart.draw(study_contents_data, donuts_options);
//ここまで学習コンテンツ//
}

//棒グラフ//




