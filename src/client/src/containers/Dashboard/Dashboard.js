import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
} from 'reactstrap';
import Widget04 from '../../views/Widgets/Widget04';
import NavWidget from '../../componments/UI/NavWidget/NavWidget';
import navs from '../../_nav';
import { Line } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';


// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var data1 = [];
var labels = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= 28; i++) {
  data1.push(random(50, 200));
  labels.push(new Date(2017, 8, i + 1));
  data2.push(random(80, 100));
  data3.push(65);
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
        labelString: "Used(GB)",
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
      label: '381',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: data1,
    },
    {
      label: '912',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,100,0.4)',
      borderColor: 'rgba(75,192,100,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: data2,
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
          {navs.items.map(curNav =>
            <Col sm="6" md="3">
              <NavWidget key={curNav.name}
                icon={curNav.icon}
                color={curNav.color}
                header={curNav.name}
                invert link={curNav.url} >
              </NavWidget>
            </Col>
          )}
        </Row>

        <Row>
          <Col>
            <Card style={{ width: "100%", height: "100%" }}  >
              <CardHeader>
                <h2>SAN Used Capacity</h2>
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
