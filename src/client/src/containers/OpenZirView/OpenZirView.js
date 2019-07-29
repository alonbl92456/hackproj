import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Bar, Pie } from 'react-chartjs-2';
import labelsPlugin from 'chartjs-plugin-labels';
import DataTable from '../../componments/DataTable/DataTable';
import { Container, Row, Col } from 'reactstrap';
import * as ServerAPI from '../../shared/serverAPI';
import * as UIHelper from '../../shared/uiHelper';
import * as Utility from '../../shared/utility';
import CardWrapper from '../../hoc/CardWrapper/CardWrapper';



/*
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],

*/


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


const barOptions = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [{
      stacked: true,
      ticks: {
        display: true //this will remove only the label
    }
    }],
    yAxes: [{
      stacked: true,
      ticks:{
        stepValue: 2
      }
    }]
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
      fontColor: '#FFFFFF',

      // font style, default is defaultFontStyle
      fontStyle: 'normal',

      // font family, default is defaultFontFamily
      fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

      // draw text shadows under labels, default is false
      textShadow: false,
    }
  }
};


export class OpenZirView extends Component {

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

    const bar = {
      labels: [],
      datasets: [{
        backgroundColor: [
        ],
        borderColor: [

        ],
        hoverBackgroundColor: [],
        borderWidth: 1,
        data: [],
      }]
    };


    const barData = {};

    // Sets data in pie chart
    Object.keys(this.props.namespace.data.areas).map(curArea => {

      // If current area if with errors
      if (this.props.namespace.data.areas[curArea].details.length > 0) {
          pie.labels.push(curArea);
          pie.datasets[0].data.push(this.props.namespace.data.areas[curArea].details.length);
          let curRandColor = UIHelper.getRandomColor();
          pie.datasets[0].backgroundColor.push(curRandColor);
          pie.datasets[0].hoverBackgroundColor.push(curRandColor);

      }

      this.props.namespace.data.areas[curArea].details.map(curError =>{
        if(barData[curError.id]){
          barData[curError.id]++;
        }
        else{
          barData[curError.id] = 1;
        }
      });

    });

    // Sets data for bar chart
    Object.keys(barData).map(curId => {
      bar.labels.push(curId);
      bar.datasets[0].data.push(barData[curId]);
      let curRandsMixColor = UIHelper.getRandomOpColors();
      bar.datasets[0].borderColor.push(curRandsMixColor.full);
      bar.datasets[0].backgroundColor.push(curRandsMixColor.op);
      bar.datasets[0].hoverBackgroundColor.push(curRandsMixColor.full);
    });

    let errorData = Utility.flatOpenZirObject(this.props.namespace);
    const cols = Object.keys(errorData[0]);
    errorData = errorData.map(curError => Object.values(curError));

    return (
      <Container>
        <Row>
          <Col lg="6">
            <CardWrapper title="Errors Distribution By Area">
              <Pie data={pie} options={pieOptions} />
            </CardWrapper>
          </Col>
          <Col lg="6">
            <CardWrapper title="Errors Distribution By Id">
              <Bar data={bar} options={barOptions} />
            </CardWrapper>
          </Col>
        </Row>
        <CardWrapper title={ this.props.match.params.namespace.toUpperCase() + " Errors"} body = {false}>
          <DataTable data={errorData} 
                     columns={cols}
                     options={{ filter: true, viewColumns: true }}/>
        </CardWrapper>

      </Container>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const localState = {
  };

  // Get's relevant data from redux
  localState.namespace =
    state.resource[ServerAPI[ownProps.match.params.category.toUpperCase()]
    [ownProps.match.params.namespace.toUpperCase()].OPENZIR];

  return localState;

}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(OpenZirView)
