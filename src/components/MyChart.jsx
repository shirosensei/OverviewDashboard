import { useState, useEffect, useRef } from "react";
import * as echarts from "echarts";

const MyChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const options = {
      tooltip: {
        // trigger: "axis",
        // axisPointer: {
        //   type: "cross",
        //   crossStyle: {
        //     color: "#999",
        //   },
        // },
      },
      toolbox: {
        feature: {
          //   dataView: { show: true, readOnly: false },
          //   magicType: { show: true, type: ['line', 'bar'] },
          //   restore: { show: true },
          //   saveAsImage: { show: true }
        },
      },
      // legend: {
      //   data: ['Consultations', 'Orders closed' ],
      //   orient: 'horizontal', //horizontal orientation
      //   bottom: 0,
      //   textStyle: {
      //       color: '#667085'
      //   },
      //   itemStyle: {
      //     borderColor: (params) => {
      //           const colors = ['#134E48', '#CCFBEF'];
      //           return colors[params.dataIndex]
      //       }
      //   },

      // },
      xAxis: [
        {
          type: "category",
          data: ["This week", "Last week"],
          axisPointer: {
            type: "shadow",
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
            lineDash: [1, 2],
          },
        },
      ],
      yAxis: [
        {
          type: "value",
            // name: "VS PAST PERIOD",
          min: 0,
          max: 30,
            interval: 10,
          axisLabel: {
            formatter: '{value}',
        
            // rotate: 45, 
          },
          hideOverlap: false,
          axisLine: {
            show: false, // Show the y-axis line (optional)
          },
          splitLine: {
            show: true, // Show the horizontal grid lines (optional)
          },
        },
      ],
      series: [
        {
          name: "Consultations",
          type: "bar",
          tooltip: {
            valueFormatter: function (value) {
              return value;
            },
          },
          data: [25, 18.5],
          //   barWidth: "32px",
          //   barGap: "15%",
          barMinHeight: 150,
          //   barCategoryGap: "40%",
          itemStyle: {
            color: (params) => {
              const colors = ["#CCFBEF", "#CCFBEF"];
              return colors[params.dataIndex];
            },
            borderRadius: [5, 5, 0, 0],
          },
        },
        {
          name: "Orders closed",
          type: "bar",
          tooltip: {
            valueFormatter: function (value) {
              return value;
            },
          },
          data: [19, 10],
          //   barWidth: "32px",
          //   barGap: "10%",
          barMinHeight: 100,
          //   barCategoryGap: "50%",
          itemStyle: {
            color: (params) => {
              const colors = ["#134E48", "#134E48"];
              return colors[params.dataIndex];
            },
            borderRadius: [5, 5, 0, 0],
          },
        },
      ],
    };

    myChart.setOption(options);

    //Resize chart on window resize
    const handleResize = () => {
      myChart.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      myChart.dispose(); //cleanup on unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // <div className="">
    <div
      ref={chartRef}
      style={{ width: "100%", height: "350px",  }}
      className="flex ml-4 justify-center"
    />
    // </div>
  );
};

export default MyChart;
