import React from 'react';
import {  Doughnut } from 'react-chartjs-2';
import labelsPlugin from 'chartjs-plugin-labels';
import WithLoading from '../../../hoc/WithLoading/WithLoading';
import WithCoverage from '../../../hoc/WithCoverage/WithCoverage';


const WithLoadingDoughnut = WithCoverage(WithLoading(Doughnut));


const colors = {
    red:'#f86c6b',
    green:'#20c997',
    yellow:'#FFCE56',
    darkRed:'#c93c45',
    darkGreen:'#4dbd74',
    darkYellow: '#FFCE56'
}



const doughnutOptions = {
    tooltips:{
      enabled:false
    },
    legend:{
      display:false
    },
    animations:{
      duration:3000,
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

 



/**
 * Health graph component based on chart js pie chart
 * 
 * @param {Object} props
 * props.areas = an array of areas to describe, for each areas expects status property
 * 
 *  [
 *    Disks:{
 *      status: 0 for valid , 1 for no valid
 *    }
 *    ....
 * ]
 * props.title = graph title
 * props.isLoading = whether or not the graph is loading 
 * props.showErrorHandler = function wich will be called when unvalid chart label is pressed
 * @returns
 */
const HealthGraph = (props) => {


   
    const doughnut = {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: [],
          hoverBackgroundColor: [],
          hoverBorderWidth:5,
          hoverBorderColor:"#c8ced3"
        }],
    };

    doughnut.labels = Object.keys(props.areas);
    doughnut.datasets[0].data = new Array(Object.keys(props.areas).length).fill(1);

    // Sets parts colors according to status
    doughnut.datasets[0].backgroundColor = 
            doughnut.labels.map(curArea => {
              return !props.areas[curArea].status ? colors.green : colors.red
            });

    // Set parts on hover colors according to status
    doughnut.datasets[0].hoverBackgroundColor = 
            doughnut.labels.map(curArea => !props.areas[curArea].status ? colors.darkGreen : colors.darkRed );
    

    return (
          <WithLoadingDoughnut
            coverage={props.coverd}
            text=" covered " 
            onElementsClick={(elem) => props.showErrorsHandler(elem,props.index)} 
            data={doughnut} 
            options={doughnutOptions}
            isLoading={props.isLoading}
            isEmpty={props.isEmpty}
            plugins={labelsPlugin} />
    );
}


export default HealthGraph;