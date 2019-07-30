import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import DataTable from '../../componments/DataTable/DataTable';
import { Col, Row } from 'reactstrap';
import CardWrapper from '../../hoc/CardWrapper/CardWrapper';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getRandomColor } from '../../shared/uiHelper'
import labelsPlugin from 'chartjs-plugin-labels';
import color from '@material-ui/core/colors/deepOrange';

export default class EmpView extends PureComponent {
  static propTypes = {

  }

  render() {
    const colors = {
      red: '#f86c6b',
      green: '#20c997',
      yellow: '#FFCE56',
      darkRed: '#c93c45',
      darkGreen: '#4dbd74',
      darkYellow: '#FFCE56',
      blue: '#17a2b8',
      gray: "#5c6873"
    }



    var dummyData = [
      {
        "id": "12345789",
        "anger": 0.2,
        "contempt": 0,
        "disgust": 0,
        "fear": 0.1,
        "happiness": 0.7,
        "neutral": 0.999,
        "sadness": 0.1,
        "surprise": 0,
        date: new Date("10/10/2018")
      },
      {
        "id": "12345789",
        "anger": 0.2,
        "contempt": 0,
        "disgust": 0,
        "fear": 0.2,
        "happiness": 0.6,
        "neutral": 0.999,
        "sadness": 0.1,
        "surprise": 0,
        date: new Date("11/11/2018")
      },
      {
        "id": "12345789",
        "anger": 0.3,
        "contempt": 0,
        "disgust": 0,
        "fear": 0.1,
        "happiness": 0.5,
        "neutral": 0.999,
        "sadness": 0.1,
        "surprise": 0,
        date: new Date("12/12/2018")

      },
      {
        "id": "12345789",
        "anger": 0.3,
        "contempt": 0,
        "disgust": 0,
        "fear": 0.0,
        "happiness": 0.6,
        "neutral": 0.999,
        "sadness": 0.1,
        "surprise": 0,
        date: new Date("1/13/2019")
      },
      {
        "id": "12345789",
        "anger": 0.2,
        "contempt": 0,
        "disgust": 0,
        "fear": 0.1,
        "happiness": 0.7,
        "neutral": 0.999,
        "sadness": 0.1,
        "surprise": 0,
        date: new Date("2/14/2019")
      }, {
        "id": "12345789",
        "anger": 0.2,
        "contempt": 0,
        "disgust": 0,
        "fear": 0.1,
        "happiness": 0.7,
        "neutral": 0.999,
        "sadness": 0.1,
        "surprise": 0,
        date: new Date("3/15/2019")
      },
      {
        "id": "12345789",
        "anger": 0.2,
        "contempt": 0,
        "disgust": 0,
        "fear": 0.1,
        "happiness": 0.2,
        "neutral": 0.999,
        "sadness": 0.7,
        "surprise": 0,
        date: new Date("4/16/2019")
      },
      {
        "id": "12345789",
        "anger": 0.2,
        "contempt": 0,
        "disgust": 0,
        "fear": 0.1,
        "happiness": 0.4,
        "neutral": 0.1,
        "sadness": 0.3,
        "surprise": 0,
        date: new Date("5/17/2019")
      },
      {
        "id": "12345789",
        "anger": 0.2,
        "contempt": 0,
        "disgust": 0,
        "fear": 0.1,
        "happiness": 0.7,
        "neutral": 0.1,
        "sadness": 0.1,
        "surprise": 0,
        date: new Date("6/18/2019")
      }
    ];

    //Random Numbers
    function random(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    var labels = dummyData.map(cur => cur.date);
    const dataAnger = dummyData.map(cur => cur.anger);
    const datafear = dummyData.map(cur => cur.fear);
    const datahapiness = dummyData.map(cur => cur.happiness);
    const datasadness = dummyData.map(cur => cur.sadness);

  
const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function (tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  scales: {
    xAxes: [{
      type: 'time',
      display: true,
      time:{
      format: "DD/MM/YYYY"
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
      },
      display: true,
      scaleLabel: {
        display: true,
        labelString: "Feeling Probability",
        fontSize: 20
      }
    }]
  },
  maintainAspectRatio: false
}
    const mainChart = {
      labels: labels,
      datasets: [
        {
          label: 'Anger',
          fill: false,
          lineTension: 0.1,
          backgroundColor: colors.yellow,
          borderColor: colors.yellow,
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: colors.yellow,
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: colors.yellow,
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: dataAnger,
        },
        {
          label: 'Fear',
          fill: false,
          lineTension: 0.1,
          backgroundColor: colors.red,
          borderColor: colors.red,
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: colors.red,
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: colors.red,
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: datafear,
        }, {
          label: 'Hapiness',
          fill: false,
          lineTension: 0.1,
          backgroundColor:colors.green,
          borderColor: colors.green,
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: colors.green,
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: colors.green,
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: datahapiness,
        },
        {
          label: 'Sadness',
          fill: false,
          lineTension: 0.1,
          backgroundColor: colors.blue,
          borderColor:colors.blue,
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor:colors.blue,
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor:colors.blue,
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: datasadness,
        }
      ],
    };

    let OverollPie = {
      Well:0,
      Bad:0
    }

    dummyData.map(cur =>{
      if(cur.happiness > 0.5 || cur.neutral > 0.5){
        OverollPie.Well++;
      }
      else{
        OverollPie.Bad++;
      }
    });

    const doughnut = {
      labels: Object.keys(OverollPie),
      datasets: [
        {
          data: Object.values(OverollPie),
          backgroundColor: [colors.green, colors.red],
          hoverBackgroundColor: [],
          hoverBorderWidth: 5,
          hoverBorderColor: "#c8ced3"
        }],
    };

    const doughnutOptions = {
      tooltips: {
        enabled: false
      },
      legend: {
        display: true
      },
      animations: {
        duration: 3000,
      },
      "animation": {
        "animateRotate": true,
        "animateScale": true
      },
      plugins: {
        labels: {
          // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
          render: 'percentage',

          // precision for percentage, default is 0
          precision: 0,

          // identifies whether or not labels of value 0 are displayed, default is false
          showZero: true,

          // font size, default is defaultFontSize
          fontSize: 12,

          // font color, can be color array for each data or function for dynamic color, default is defaultFontColor
          fontColor: '#000000',

          // font style, default is defaultFontStyle
          fontStyle: 'normal',

          // font family, default is defaultFontFamily
          fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

          // draw text shadows under labels, default is false
          textShadow: true,
        }
      }
    };

    let emp = {
      name:"Jon doe",
      job: "Programmer",
      department:"Cloud",
      manager:"Avi"

      }



    return (
      <div>
        <Row>
          <Col>
            <CardWrapper title={"Employ Details"}>
            <table className={"table"}>
              <tbody className={"table-bordered"}> 
              <tr> <td>Name:</td><td> {emp.name}</td></tr>
              <tr><td>Job: </td><td> {emp.job}</td></tr>
              <tr><td>Department: </td><td> {emp.department}</td></tr>
              <tr><td>Manager: </td><td> {emp.manager}</td></tr>
              </tbody>
            </table>
            </CardWrapper>
          </Col>
          <Col>
            <CardWrapper title={"Overall Feelings"}>
              <Pie data={doughnut} options={doughnutOptions} />
            </CardWrapper>
          </Col>
        </Row>
        <Row>
          <Col>
            <CardWrapper title={"Fellings over time"}>
              <Line data={mainChart} options={options} height="300%" />
            </CardWrapper>
          </Col>
        </Row>


      </div>
    )
  }
}
