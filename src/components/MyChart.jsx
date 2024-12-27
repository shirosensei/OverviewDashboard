import { useState, useEffect, useRef } from "react";
import * as echarts from "echarts";

const MyChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const options = {
      tooltip: {
        //   trigger: 'axis',
        //   axisPointer: {
        //     type: 'cross',
        //     crossStyle: {
        //       color: '#999'
        //     }
        //   }
      },
      toolbox: {
        // feature: {
        //   // dataView: { show: true, readOnly: false },
        //   // magicType: { show: true, type: ['line', 'bar'] },
        //   // restore: { show: true },
        //   // saveAsImage: { show: true }
        // },
      },
      //   legend: {
      //     data: ['Consultations', 'Orders closed' ],
      //     orient: 'horizontal', //horizontal orientation
      //     bottom: 0,
      //     textStyle: {
      //         color: '#667085'
      //     },
      //     itemStyle: {
      //         backgroundColor: (params) => {
      //             const iconColors = ['#134E48', '#CCFBEF'];
      //             return iconColors[params.dataIndex]
      //         }
      //     },

      //   },
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
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "",
          min: 10,
          max: 20,
          //   interval: 10,
          axisLabel: {
            formatter: "{value}",
          },
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
          data: [25.5, 18.5],
          barWidth: "30px",
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
          data: [19, 18],
          barWidth: "30px",
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
    <div
      ref={chartRef}
      style={{ width: "100%", height: "300px", maxHeight: '300px', margin: "0 auto" }}
        className="flex md:items-center"
    />
  );
};

export default MyChart;
