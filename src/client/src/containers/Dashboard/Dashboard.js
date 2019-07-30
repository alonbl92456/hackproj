import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row
} from 'reactstrap';
import { Line, Pie } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import labelsPlugin from 'chartjs-plugin-labels';
import DataTable from '../../componments/DataTable/DataTable';


const pieOptions = {
  tooltips: {
    enabled: false
  },
  legend: {
    display: false
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
      render: 'label',

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



const mainChartOpts = {
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
  maintainAspectRatio: false,
  legend: {
    display: true,
  },
  animations: {
    duration: 3000,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

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
      display: true
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
      },
      display: true,
      scaleLabel: {
        display: true,
        labelString: "Emotion Rate",
        fontSize: 20
      }
    }]
  },
  maintainAspectRatio: false,
  animations: {
    duration: 3000,
  }, 
}



class Dashboard extends Component {



  render() {

    // Main Chart

    //Random Numbers
    function random(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    var labels = [];
    var dataAnger = [];
    var datacontempt = [];
    var datadisgust = [];
    var datafear = [];
    var datahapiness = [];
    var dataneutral = [];
    var datasadness = [];
    var datasuprise = [];

    for (var i = 0; i <= 28; i++) {
      labels.push(new Date(2019, 8, i + 1));
      dataAnger.push(random(0, 100) * 0.01);
      datacontempt.push(random(0, 100) * 0.01);
      datadisgust.push(random(0, 100) * 0.01);
      datafear.push(random(0, 100) * 0.01);
      datahapiness.push(random(0, 100) * 0.01);
      dataneutral.push(random(0, 100) * 0.01);
      datasadness.push(random(0, 100) * 0.01);
      datasuprise.push(random(0, 100) * 0.01);

    }

    var sadnessRateEmp = [
      {
        "id": "12345789",
        "rate": 0.9
      },
      {
        "id": "11223344",
        "rate": 0.85
      },
      {
        "id": "00223341",
        "rate": 0.7
      }
    ]

    var hapinessRateEmp = [
      {
        "id": "92345789",
        "rate": 0.99
      },
      {
        "id": "12375789",
        "rate": 0.88
      },
      {
        "id": "12345089",
        "rate": 0.8
      }
    ]

    const pieLables = ["Happines", "Other"];

    const pieData = {
      labels: pieLables,
      datasets: [
        {
          data: [90, 30],
          backgroundColor: [colors.green, colors.gray],
          hoverBackgroundColor: [],
          hoverBorderWidth: 5,
          hoverBorderColor: "#c8ced3"
        }],
    };


    const mainChart = {
      labels: labels,
      datasets: [
        {
          label: 'Anger',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#FFCE56',
          borderColor: '#FFCE56',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#FFCE56',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#FFCE56',
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
          backgroundColor: '#f86c6b',
          borderColor: '#f86c6b',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#f86c6b',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#f86c6b',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: datafear,
        }, {
          label: 'Happiness',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#20c997',
          borderColor: '#20c997',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#20c997',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#20c997',
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
          backgroundColor: '#17a2b8',
          borderColor: '#17a2b8',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#17a2b8',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#17a2b8',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: datasadness,
        }
      ],
    };

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card style={{ width: "100%", height: "100%" }}  >
              <CardHeader>
                <h2>Employess Feelings Summary</h2>
              </CardHeader>
              <CardBody style={{ width: "100%", height: "100%" }} >
                <div className="chart-wrapper">
                  <Line data={mainChart} options={options} height="300%" />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <div style={{margin:"30px"}}>
        </div>
        <Row>
          <Col>
            <DataTable title="Top Sad Empolyess" columns={Object.keys(sadnessRateEmp[0])} data={sadnessRateEmp.map(cur => Object.values(cur))} isEmpty={false} isLoading={false} />
          </Col>

          <Col>
            <DataTable title="Top happy Empolyess" columns={Object.keys(hapinessRateEmp[0])} data={hapinessRateEmp.map(cur => Object.values(cur))} isEmpty={false} isLoading={false} />
          </Col>
          <Col>
            <Card style={{ height: "100%" }} >
              <CardHeader>
                <h2>Happines Prcentage</h2>
              </CardHeader>
              <CardBody>
                <Pie data={pieData} options={pieOptions} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
