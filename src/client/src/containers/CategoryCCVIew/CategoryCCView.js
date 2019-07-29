import React, { Component } from 'react'
import { Col, Row } from 'reactstrap';
import * as ServerAPI from '../../shared/serverAPI';
import { connect } from 'react-redux';
import DataTable from '../../componments/DataTable/DataTable';
import CardWrapper from '../../hoc/CardWrapper/CardWrapper';
import { loadResource } from '../../store/actions/index';
import NavWidget from '../../componments/UI/NavWidget/NavWidget';
import CapacityProgressbar from '../../componments/UI/CapacityProgressbar/CapacityProgressbar';
import PieChart from '../../componments/UI/PIeChart/PieChart';


function getButtomState(loading) {
  const BUTTOM_STATES = {
    LOADING: {
      ICON: "fas fa-sync-alt fa-spin",
      COLOR: "gray"
    },
    OK: {
      ICON: "fa fa-chart-pie",
      COLOR: "info"
    }
  }

  if (loading) {
    return BUTTOM_STATES.LOADING
  }
  else {
    return BUTTOM_STATES.OK
  }

}


export class CategoryCCView extends Component {

  componentDidMount() {
    // ServerAPI[this.props.match.params.category.toUpperCase()+ "_" + "ROUTES"].map(curRoute => curRoute.indexOf("cc") > 1 ? this.props.Load(curRoute) : null);
  }

  render() {

    let pieData = {};
    let allCC = [];
    pieData["0-30%"] = 0;
    pieData["30%-50%"] = 0;
    pieData["50%-80%"] = 0;
    pieData["80%-100%"] = 0;

    this.props.namespaces.map(curCatCC => {
      if (curCatCC.data) {
        curCatCC.data.map(curCC => {
          let curUsedPrecent = (curCC.used / curCC.total);
          if (curUsedPrecent < 0.3) {
            pieData["0-30%"]++
          }
          else if (curUsedPrecent < 0.5) {
            pieData["30%-50%"]++
          }
          else if (curUsedPrecent < 0.8) {
            pieData["50%-80%"]++
          }
          else {
            pieData["80%-100%"]++
          }

          allCC.push(curCC);

        });
      }
    });

    let topUsed =
      allCC.sort((curCC, nextCC) => (nextCC.used / nextCC.total) - (curCC.used / curCC.total)).
        map(curData => [curData.id, curData.env, (curData.used * 100 / curData.total).toFixed(0)]).slice(0, 6);
    let topLeft = allCC.sort((curCC, nextCC) => (curCC.left || 0) - (nextCC.left || 0)).
      map(curData => [curData.id, curData.env, curData.left || 0]).slice(0, 6);


    console.log("adas");
    return (
      <div className="animated fadeIn">
        {// Used as nav ? 
          // Full Status Graph
          // Top 10 in danger ? 
          // Top 10 worst Left to allocate ?
          /*
          */
        }
        <Row>
          {this.props.namespaces.map((curNav, curNavIndex) =>
            (!curNav.loading && curNav.data === null) ?
              <Col>
                <NavWidget
                  key={curNavIndex}
                  icon={"fa fa-exclamation-triangle"}
                  color={"gray"}
                  value={"Data Unavailble"}
                  header={curNav.title}
                  disable={true}
                  // Add base url to link
                  invert link={this.props.location.pathname + "/" + curNav.title.toLowerCase()} >
                </NavWidget>
              </Col>
              :
              <Col sm="1" md={12 / this.props.namespaces.length}>
                <NavWidget
                  key={curNavIndex}
                  icon={getButtomState(curNav.loading).ICON}
                  color={getButtomState(curNav.loading).COLOR}
                  value={""}
                  header={curNav.title}
                  disable={curNav.loading}
                  // Add base url to link
                  invert link={this.props.location.pathname + "/" + curNav.title.toLowerCase()} >
                  {curNav.loading ? null : <CapacityProgressbar full={70} />}
                </NavWidget>
              </Col>
          )}
        </Row>
        <Row>
          <Col lg="4">
            <PieChart
              data={pieData}
              isEmpty={Object.keys(pieData).length === 0}
              isLoading={this.props.namespaces.reduce((isAllLoading, curNav) => curNav.loading || isAllLoading, false)}
              title="Used% Distribuation" />
          </Col>
          <Col lg="4">
            <CardWrapper
              title="Top Used%"
              isEmpty={Object.keys(pieData).length === 0}
              body={false} >
              <DataTable
                isLoading={this.props.namespaces.reduce((isAllLoading, curNav) => curNav.loading || isAllLoading, false)}
                columns={["Id", "Env", "Used%"]}
                data={topUsed}
                options={{ filter: false, viewColumns: false, search: false, pagination: false }} />
            </CardWrapper>
          </Col>
          <Col lg="4">
            <CardWrapper
              isEmpty={Object.keys(pieData).length === 0}
              title="Left To Allocate"
              body={false}>
              <DataTable
                isLoading={this.props.namespaces.reduce((isAllLoading, curNav) => curNav.loading || isAllLoading, false)}
                columns={["Id", "Env", "Left"]}
                data={topLeft}
                options={{ filter: false, viewColumns: false, search: false, pagination: false }} />
            </CardWrapper>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const localState = {
    namespaces: []
  };


  let category = ownProps.match.params.category.toUpperCase();
  // Runs on all of the category namespaces and loads the data from 
  // redux to state
  for (let curNamespace in ServerAPI[ownProps.match.params.category.toUpperCase()]) {

    if (typeof ServerAPI[category][curNamespace].CC !== "object") {
      if (state.resource[ServerAPI[category][curNamespace].CC]) {
        localState.namespaces.push({
          ...state.resource[ServerAPI[category][curNamespace].CC],
          title: curNamespace
        });
      }
    }
    else {
      Object.keys(ServerAPI[category][curNamespace].CC).map(curCCType => {
        localState.namespaces.push(
          {
            ...state.resource[ServerAPI[category][curNamespace].CC[curCCType]],
            title: curNamespace + " " + curCCType
          });
      });
    }
  }



  return localState;
}

const mapDispatchToProps = dispatch => {
  return {
    Load: (apiUrl) => dispatch(loadResource(apiUrl))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCCView);