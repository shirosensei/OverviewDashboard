import React, { useState, useEffect, useRef } from "react";
import * as echarts from "echarts";

const data = [
  { weekday: "Mon", Incoming: 40, Answered: 29, expertsOnline: 25 },
  { weekday: "Tue", Incoming: 44, Answered: 30, expertsOnline: 25 },
  { weekday: "Wed", Incoming: 50, Answered: 28, expertsOnline: 28 },
  { weekday: "Thu", Incoming: 45, Answered: 44, expertsOnline: 50 },
  { weekday: "Fri", Incoming: 49, Answered: 38, expertsOnline: 33 },
  { weekday: "Sat", Incoming: 43, Answered: 35, expertsOnline: 35 },
  { weekday: "Sun", Incoming: 49, Answered: 35, expertsOnline: 38 },
];

const AnsweredChart = () => {
  const IncomingChartRef = useRef(null);

  useEffect(() => {
    const IncomingChart = echarts.init(IncomingChartRef.current);

    const options = {
      toolbox: {},
      tooltip: {
        // trigger: "axis",
      },
      //   legend: {
      //     data: ["Incoming", "Experts Online", "Answered"],
      //   },
      //   grid: {
      //     left: "3%",
      //     right: "4%",
      //     bottom: "3%",
      //     containLabel: true,
      //   },
      xAxis: [
        {
          type: "category",
          data: data.map((item) => item.weekday),
          axisPointer: {
            type: "shadow",
          },
          axisLine: {
            show: false,
          },
        },
      ],
      yAxis: [
        {
          //   type: 'category',
        //   name: "Incoming",
          position: "left",
          min: 0,
          max: 50,
          interval: 10,

          axisLabel: {
            formatter: "{value}",
          },
        },
        // {
        //     type: 'category',
        //     name: 'Answered',
        //     position: 'right',
        //     axisLabel: {
        //         formatter: 'value'
        //     }
        // }
      ],
      series: [
        {
          name: "Incoming",
          type: "line",
          data: data.map((item) => item.Incoming),
          smooth: true,

          lineStyle: {
            color: "##8A94A6",
            width: 2,
            type: "dashed",
          },
        },
        {
          name: "Experts Online",
          type: "bar",
          data: data.map((item) => item.expertsOnline),
          itemStyle: {
            color: "#FFF3C6",
            borderRadius: [5, 5, 0, 0],
          },
          barMinHeight: '50px',
        },
        {
          name: "Answered",
          type: "line",
          data: data.map((item) => item.Answered),
          smooth: 0.5,
          lineStyle: {
            color: "#15B79F",
            width: 2,
            type: "solid",
          },
        },
      ],
    };

    IncomingChart.setOption(options);

    // Handle responsiveness
    const handleResize = () => {
      IncomingChart.resize();
    };
    
    window.addEventListener("resize", handleResize);

    return () => {
      IncomingChart.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between w-full"
        ref={IncomingChartRef}
        style={{ minWidth: "500px", width: "100%", height: "350px", margin: '0 auto', zIndex: '2' }}
      />
    </div>
  );
};

export default AnsweredChart;
