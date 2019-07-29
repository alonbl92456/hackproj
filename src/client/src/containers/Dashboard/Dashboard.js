import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row
} from 'reactstrap';
import CardWrapper from '../../hoc/CardWrapper/CardWrapper';
import Widget04 from '../../views/Widgets/Widget04';
import NavWidget from '../../componments/UI/NavWidget/NavWidget';
import navs from '../../_nav';
import { Line,Pie } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import labelsPlugin from 'chartjs-plugin-labels';
import DataTable from '../../componments/DataTable/DataTable';

// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var data1 = [];
var labels = [];
var data2 = [];
var data3 = [];

var dataAnger = [];
var datacontempt = [];
var datadisgust = [];
var datafear = [];
var datahapiness = [];
var dataneutral = [];
var datasadness = [];
var datasuprise = [];

for (var i = 0; i <= 28; i++) {
  data1.push(random(50, 200));
  labels.push(new Date(2019, 8, i + 1));
  data2.push(random(80, 100));
  data3.push(65);

  dataAnger.push(random(50, 200));
  datacontempt.push(random(50, 200));
  datadisgust.push(random(50, 200));
  datafear.push(random(50, 200));
  datahapiness.push(random(50, 200));
  dataneutral.push(random(50, 200));
  datasadness.push(random(50, 200));
  datasuprise.push(random(50, 200));

}

var sadnessRateEmp = [
  {
    "id": "12345789",
    "rate" : 14
  },
  {
    "id": "22222",
    "rate" : 11
  },
  {
    "id": "33333",
    "rate" : 7
  }
]

var hapinessRateEmp = [
  {
    "id": "444444",
    "rate" : 14
  },
  {
    "id": "55555",
    "rate" : 11
  },
  {
    "id": "666666",
    "rate" : 7
  }
]

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
  blue:'#17a2b8',
  gray:"#5c6873"
}


const pieLables = ["happines","other"];

const pieData = {
  labels: pieLables,
  datasets: [
    {
      data: [90,30],
      backgroundColor: [colors.green,  colors.gray ],
      hoverBackgroundColor: [],
      hoverBorderWidth: 5,
      hoverBorderColor: "#c8ced3"
    }],
};


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
  maintainAspectRatio: false
}

const mainChart = {
  labels: labels,
  datasets: [
    {
      label: 'anger',
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
      label: 'fear',
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
    },{
      label: 'hapiness',
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
      label: 'sadness',
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



class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }


  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
            <Col>
              <DataTable title="Top Sad Emp" columns={Object.keys(sadnessRateEmp[0])} data={sadnessRateEmp.map(cur => Object.values(cur))} isEmpty={false} isLoading={false} />
            </Col>
            
            <Col>
            <DataTable title="Top happy Emp" columns={Object.keys(hapinessRateEmp[0])} data={hapinessRateEmp.map(cur => Object.values(cur))} isEmpty={false} isLoading={false} />
            </Col>
            <Col>
            <Card  style={{ height: "100%" }} >  
            <CardHeader>
                <h2>hapiness percentage</h2>
            </CardHeader>
            <CardBody>
            <Pie data={pieData} options={pieOptions} />
              </CardBody>
            </Card>
            </Col>
        </Row>

        <Row>
          <Col>
            <Card style={{ width: "100%", height: "100%" }}  >
              <CardHeader>
                <h2>Feeling</h2>
              </CardHeader>
              <CardBody style={{ width: "100%", height: "100%" }} >
                <div className="chart-wrapper">
                  <Line data={mainChart} options={options} height="300%" />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
