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
        "anger": 0,
        "contempt": 0,
        "disgust": 0,
        "fear": 0,
        "happiness": 0,
        "neutral": 0.999,
        "sadness": 0.001,
        "surprise": 0
      },
      {
        "id": "22222",
        "anger": 0,
        "contempt": 0,
        "disgust": 0,
        "fear": 0,
        "happiness": 0,
        "neutral": 0.999,
        "sadness": 0.001,
        "surprise": 0
      },
      {
        "id": "33333",
        "anger": 0,
        "contempt": 0,
        "disgust": 0,
        "fear": 0,
        "happiness": 0,
        "neutral": 0.999,
        "sadness": 0.001,
        "surprise": 0
      },
      {
        "id": "444444",
        "anger": 0,
        "contempt": 0,
        "disgust": 0,
        "fear": 0,
        "happiness": 0,
        "neutral": 0.999,
        "sadness": 0.001,
        "surprise": 0
      },
      {
        "id": "55555",
        "anger": 0,
        "contempt": 0,
        "disgust": 0,
        "fear": 0,
        "happiness": 0,
        "neutral": 0.999,
        "sadness": 0.001,
        "surprise": 0
      }, {
        "id": "666666",
        "anger": 0,
        "contempt": 0,
        "disgust": 0,
        "fear": 0,
        "happiness": 0,
        "neutral": 0.999,
        "sadness": 0.001,
        "surprise": 0
      },
      {
        "id": "888888888",
        "anger": 0,
        "contempt": 0,
        "disgust": 0,
        "fear": 0,
        "happiness": 0,
        "neutral": 0.999,
        "sadness": 0.001,
        "surprise": 0
      },
      {
        "id": "12312312321",
        "anger": 0,
        "contempt": 0,
        "disgust": 0,
        "fear": 0,
        "happiness": 0,
        "neutral": 0.999,
        "sadness": 0.001,
        "surprise": 0
      },
      {
        "id": "2342432",
        "anger": 0,
        "contempt": 0,
        "disgust": 0,
        "fear": 0,
        "happiness": 0,
        "neutral": 0.999,
        "sadness": 0.001,
        "surprise": 0
      }
    ];


    const doughnutOptions = {
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
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Happines',
          backgroundColor: colors.green,
          borderColor: colors.green,
          borderWidth: 1,
          hoverBackgroundColor: colors.darkGreen,
          hoverBorderColor: colors.darkGreen1,
          data: [120, 1, 44, 100, 200, 123, 1]
        },
      ]
    };


    const pieLables = ["happines","saddness","anger","fear","other"];

    const doughnut = {
      labels: ["happines","saddness","anger","fear","other"],
      datasets: [
        {
          data: pieLables.map(cur => 1.5),
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
            <CardWrapper className="chart-wrapper">
              <Bar data={bar} options={barOptions} />
            </CardWrapper>
          </Col>
          <Col lg="4">
            <CardWrapper className="chart-wrapper">
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
