import React, { Component } from 'react'
import { connect } from 'react-redux'
import Aux from '../../hoc/Aux/Aux';
import { Bar, Pie } from 'react-chartjs-2';
import labelsPlugin from 'chartjs-plugin-labels';
import DataTable from '../../componments/DataTable/DataTable';
import { Container, Row, Col } from 'reactstrap';
import * as ServerAPI from '../../shared/serverAPI';
import CardWrapper from '../../hoc/CardWrapper/CardWrapper';
import PieChart from '../../componments/UI/PIeChart/PieChart';



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


export class NamespaceCCView extends Component {

  render() {
    let idPieData = {};
    let envPieData = {};
    this.props.namespace.data.map(curData => {
      if(idPieData[curData.id]){
       idPieData[curData.id] += curData.total;
      }
      else{
        idPieData[curData.id] = curData.total;
      }


      if (envPieData[curData.env]) {
        envPieData[curData.env] += curData.total;
      }
      else {
        envPieData[curData.env] = curData.total;
      }

    });

    return (
      <Aux>
        <Row>
          <Col lg="6">
            <PieChart
              data={idPieData}
              title="Capacity Distribuation By Id" />
          </Col>
          <Col lg="6">
            <PieChart
              data={envPieData}
              title="Capacity Distribuation By Env" />
          </Col>
        </Row>
        <Row>
          <Col>
            <CardWrapper title={this.props.namespace.title + " Capacity "} body={false}>
              <DataTable
                isLoading={this.props.namespace.loading}
                isEmpty={this.props.namespace.data === null}
                data={
                  this.props.namespace.data ?
                    this.props.namespace.data.map(curData =>
                      [...Object.values(curData)])
                    :
                    []
                }
                columns={[...Object.keys(this.props.namespace.data[0])]} />
            </CardWrapper>
          </Col>
        </Row>
      </Aux>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const localState = {
  };

  let namespaceData = ownProps.match.params.namespace.split(" ");
  let curCat = ownProps.match.params.category.toUpperCase();
  let curNamespace = namespaceData[0].toUpperCase();
  let curType = namespaceData.length > 1 ? namespaceData[1].toUpperCase() : null;


  // Get's relevant data from redux
  localState.namespace = {
    ...(curType ?
      state.resource[ServerAPI[curCat][curNamespace]["CC"][curType]] :
      state.resource[ServerAPI[curCat][curNamespace]["CC"]]),
    title: curCat + " " + curNamespace + " " + (curType || "")
  };


  return localState;

}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(NamespaceCCView);
