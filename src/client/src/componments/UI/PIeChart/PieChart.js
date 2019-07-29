import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2';
import CardWrapper from '../../../hoc/CardWrapper/CardWrapper';
import WithLoading from '../../../hoc/WithLoading/WithLoading';
import * as UIHelper from '../../../shared/uiHelper';
import labelsPlugin from 'chartjs-plugin-labels';

const WithLoadingPie = (WithLoading(Pie));

const pieOptions = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    position: 'left',
    labels: {
      boxWidth: 10
    }
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
      showZero: false,

      // font size, default is defaultFontSize
      fontSize: 12,

      // font color, can be color array for each data or function for dynamic color, default is defaultFontColor
      fontColor: '#000000',

      // font style, default is defaultFontStyle
      fontStyle: 'normal',

      // font family, default is defaultFontFamily
      fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

      // draw text shadows under labels, default is false
      textShadow: false,
    }
  }
}

/**
 * Componment represts pie chart
 *
 * @export
 * @class PieChart
 * @extends {Component}
 */
export class PieChart extends Component {


  /**
   *
   *
   * @returns Pie chart
   * @memberof PieChart
   */
  render() {

    const pie = {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: [],
          hoverBackgroundColor: [],
        }],
    };

    Object.keys(this.props.data).map(curKey =>{
      pie.labels.push(curKey);
      pie.datasets[0].data.push(this.props.data[curKey]);
      let curColor = UIHelper.getRandomColor();
      pie.datasets[0].backgroundColor.push(curColor);
      pie.datasets[0].hoverBackgroundColor.push(curColor);
    });
    
    return (
      <CardWrapper title={this.props.title ? this.props.title : ""}>
        <WithLoadingPie isEmpty={this.props.isEmpty} isLoading={this.props.isLoading} data={pie} options={pieOptions} />
      </CardWrapper>
    );
  }
}

export default PieChart
