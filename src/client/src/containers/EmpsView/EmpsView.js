import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import DataTable from '../../componments/DataTable/DataTable';
import { Col, Row } from 'reactstrap';
import CardWrapper from '../../hoc/CardWrapper/CardWrapper';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {getRandomColor} from '../../shared/uiHelper'
import labelsPlugin from 'chartjs-plugin-labels';



export default class EmpsView extends PureComponent {
  static propTypes = {

  }


  showWorker(rowData){
    this.props.history.push(this.props.match.path + "/" + rowData[0]);
  }

  render() {

    var dummyData = [
      {
        "id": "12345789",
        "anger": 0.6,
        "contempt": 0,
        "disgust": 0,
        "fear": 0.4,
        "happiness": 0.2,
        "neutral": 0.1,
        "sadness": 0.001,
        "surprise": 0
      },
      {
        "id": "22345789",
        "anger": 0,
        "contempt": 0,
        "disgust": 0.3,
        "fear": 0.1,
        "happiness": 0.5,
        "neutral": 0.2,
        "sadness": 0.001,
        "surprise": 0
      },
      {
        "id": "12346789",
        "anger": 0.3,
        "contempt": 0.2,
        "disgust": 0,
        "fear": 0.24,
        "happiness": 0.23,
        "neutral": 0.4,
        "sadness": 0.001,
        "surprise": 0
      },
      {
        "id": "12745789",
        "anger": 0.41,
        "contempt": 0,
        "disgust": 0.1,
        "fear": 0,
        "happiness": 0.3,
        "neutral": 0.2,
        "sadness": 0.001,
        "surprise": 0
      },
      {
        "id": "12344489",
        "anger": 0.1,
        "contempt": 0.3,
        "disgust": 0.2,
        "fear": 0.1,
        "happiness": 0,
        "neutral": 0,
        "sadness": 0.001,
        "surprise": 0
      }, {
        "id": "12322229",
        "anger": 0.1,
        "contempt": 0.1,
        "disgust": 0,
        "fear": 0.6,
        "happiness": 0,
        "neutral": 0.2,
        "sadness": 0.001,
        "surprise": 0.3
      },
      {
        "id": "12345123",
        "anger": 0.1,
        "contempt": 0.14,
        "disgust": 0.26,
        "fear": 0.78,
        "happiness": 0,
        "neutral": 0.3,
        "sadness": 0.001,
        "surprise": 0.3
      }
    ];


    const doughnutOptions = {
      tooltips: {
        enabled: false
      },
      legend: {
        display: true,
        position:"left"
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


    const barOptions = {
      plugins: {
        labels: {
          // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
          render: 'label',

          // precision for percentage, default is 0
          precision: 0,

          // identifies whether or not labels of value 0 are displayed, default is false
          showZero: true,

          // font size, default is defaultFontSize
          fontSize: 0,

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
    }

    const bar = {
      labels: dummyData.map(cur => cur.id),
      datasets: [
        {
          label: 'Sadness',
          backgroundColor: colors.red,
          borderColor: colors.red,
          borderWidth: 1,
          hoverBackgroundColor: colors.darkRed,
          hoverBorderColor: colors.darkRed,
          data: [0.35, 0.59, 0.40, 0.21, 0.56, 0.25, 0.40]
        },
        {
          label: 'Happines',
          backgroundColor: colors.green,
          borderColor: colors.green,
          borderWidth: 1,
          hoverBackgroundColor: colors.darkGreen,
          hoverBorderColor: colors.darkGreen1,
          data: [0.120, 0.4, 0.44, 0.600, 0.200, 0.523, 0.7]
        },
      ]
    };


    const pieLables = ["happines","saddness","anger","fear","other"];
   //Random Numbers
   function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
    const doughnut = {
      labels: ["happines","saddness","anger","fear","other"],
      datasets: [
        {
          data: pieLables.map(cur => 0.2 * random(1,5)),
          backgroundColor: [colors.green, colors.blue, colors.yellow, colors.red, colors.gray ],
          hoverBackgroundColor: [],
          hoverBorderWidth: 5,
          hoverBorderColor: "#c8ced3"
        }],
    };

    

    return (
      <div>
        <Row>
          <Col lg="8">
            <CardWrapper title="Employess Happnies Ratio" className="chart-wrapper">
              <Bar data={bar} options={barOptions} />
            </CardWrapper>
          </Col>
          <Col lg="4">
            <CardWrapper title="Feelings distribuation" className="chart-wrapper">
              <Pie data={doughnut} options={doughnutOptions} />
            </CardWrapper>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <DataTable rowClicked={(...data) => this.showWorker(...data)} title="Your Employess" columns={Object.keys(dummyData[0])} data={dummyData.map(cur => Object.values(cur))} isEmpty={false} isLoading={false} />
          </Col>

        </Row>
      </div>
    )
  }
}
