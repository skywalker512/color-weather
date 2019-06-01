import React from 'react';
import { IWeatherData } from '@/interfaces/weather';

import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts'
import 'echarts/lib/chart/line'
import styles from './index.less'


interface IProps {
  weatherDatas: IWeatherData[]
}

const Charts: React.FC<IProps> = ({ weatherDatas }) => {
  const
    chartLabelData: string[] = [],
    chartMaxData: string[] = [],
    chartMinData: string[] = [];
  weatherDatas.forEach(item=>{
    chartLabelData.push(item.date)
    chartMaxData.push(item.tem1)
    chartMinData.push(item.tem2)
  })
  const option = {
    backgroundColor: "rgba(0,0,0,0.0)",
    color: ["#FFB74D", "#64B5F6"],
    animation: false,
    tooltip: {
      show: false
    },
    xAxis: [{
      type: 'category',
      show: false,
      data: chartLabelData
    }],
    yAxis: [{
      type: 'value',
      show: false,
      boundaryGap: [1, 1],
      scale: true
    }],
    grid: {
      x: 0,
      y: 0,
      y2: 0,
      height: 136,
      width: 500,
      borderWidth: "0px"
    },
    series: [
      {
        type: 'line',
        data: chartMaxData,
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        clipOverflow: false,
        lineStyle: {
          normal: {
            width: 2
          }
        },
        label: {
          normal: {
            show: true,
            textStyle: {
              fontSize: '16',
              color: "#555555"
            },
            distance: 10,
            formatter: function (val: any) {
              return val.data + "°"
            },
            rich: {
              first: {
                fontSize: '16',
                color: "#C2C2C2"
              }
            }
          }
        }
      },
      {
        type: 'line',
        data: chartMinData,
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: {
          normal: {
            width: 2
          }
        },
        label: {
          normal: {
            show: true,
            position: "bottom",
            textStyle: {
              fontSize: '16',
              color: "#555555"
            },
            distance: 10,
            formatter: function (val: any) {
              return val.data + "°"
            },
            rich: {
              first: {
                fontSize: '16',
                color: "#C2C2C2"
              }
            }
          }
        }
      }
    ]
  };
  return (
    <ReactEchartsCore echarts={echarts} option={option} className={styles.charts} />
  )
}

export default Charts