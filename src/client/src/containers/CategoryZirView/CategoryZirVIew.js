import React, { Component } from 'react'
import { Col, Row } from 'reactstrap';
import * as ServerAPI from '../../shared/serverAPI';
import { connect } from 'react-redux';
import NavWidget from '../../componments/UI/NavWidget/NavWidget';
import DataTable from '../../componments/DataTable/DataTable';
import { flatOpenZirObject } from '../../shared/utility'
import { PieChart } from '../../componments/UI/PIeChart/PieChart';
import CardWrapper from '../../hoc/CardWrapper/CardWrapper';
import {loadResource} from '../../store/actions/index';




function getButtomState(loading, errorCount) {
  const BUTTOM_STATES = {
    LOADING: {
      ICON: "fa fa-refresh fa-spin",
      COLOR: "gray"
    },
    OK: {
      ICON: "fa fa-check",
      COLOR: "green"
    },
    ERROR: {
      ICON: "fa fa-exclamation-triangle",
      COLOR: "red"
    }
  }

  if (loading) {
    return BUTTOM_STATES.LOADING
  }
  else if (errorCount === 0) {
    return BUTTOM_STATES.OK
  }
  else {
    return BUTTOM_STATES.ERROR;
  }

}




export class CategoryZirView extends Component {


  componentDidMount() {
    ServerAPI[this.props.match.params.category.toUpperCase()+ "_" + "ROUTES"].map(curRoute => curRoute.indexOf("openzir") > 1 ? this.props.Load(curRoute) : null);
  }


  render() {


    let namespaces = Object.keys(ServerAPI[this.props.match.params.category.toUpperCase()]);
    let errorData = namespaces.reduce((allErrors, curNamespace) => {
      return this.props.namespaces[curNamespace] && this.props.namespaces[curNamespace].data ?
        allErrors.concat(flatOpenZirObject(this.props.namespaces[curNamespace])) :
        allErrors
    }, []);
    let cols = errorData.length > 0 ? Object.keys(errorData[0]) : [];
    errorData = errorData.map(curDetail => Object.values(curDetail));
    let pieData = {};
    namespaces.map(curNamespace => {
      if (this.props.namespaces[curNamespace] &&
        this.props.namespaces[curNamespace].data &&
        this.props.namespaces[curNamespace].data.errorCount > 0) {
        pieData[curNamespace] = this.props.namespaces[curNamespace].data.errorCount;
      }
    });


    return (
      <div className="animated fadeIn">
        <Row>
          {namespaces.map(curNav =>
            (!this.props.namespaces[curNav].loading && this.props.namespaces[curNav].data === null) ?
              <Col>
                <NavWidget key={curNav}
                  icon={"fa fa-exclamation-triangle"}
                  color={"gray"}
                  value={"Data Unavailble"}
                  header={curNav}
                  disable={true}
                  // Add base url to link
                  invert link={this.props.location.pathname + "/" + curNav.toLowerCase()} >
                </NavWidget>
              </Col>
              :
              <Col sm="1" md={12 / namespaces.length}>
                <NavWidget key={curNav}
                  icon={getButtomState(this.props.namespaces[curNav].loading,
                    this.props.namespaces[curNav].data ?
                      this.props.namespaces[curNav].data.errorCount : 0).ICON}
                  color={getButtomState(this.props.namespaces[curNav].loading,
                    this.props.namespaces[curNav].data ?
                      this.props.namespaces[curNav].data.errorCount : 0).COLOR}
                  value={this.props.namespaces[curNav].data &&
                    this.props.namespaces[curNav].data.errorCount > 0 &&
                    !this.props.namespaces[curNav].loading ? this.props.namespaces[curNav].data.errorCount : null}
                  header={curNav}
                  disable={this.props.namespaces[curNav].loading || this.props.namespaces[curNav].data.errorCount === 0}
                  // Add base url to link
                  invert link={this.props.location.pathname + "/" + curNav.toLowerCase()} >
                </NavWidget>
              </Col>
          )}
        </Row>
        <Row>
          <Col lg="4">
            <PieChart
              data={pieData}
              isEmpty={errorData.length === 0}
              isLoading={namespaces.reduce((isAllLoading, curNav) => this.props.namespaces[curNav].loading || isAllLoading, false)}
              title="Error Distribution By Namespaces" />
          </Col>
          <Col sm="1" lg="8" >
            <CardWrapper title={this.props.match.params.category.toUpperCase() + " Errors"} body={false}>
              <DataTable
                columns={cols}
                data={errorData}
                options={{ filter: true, viewColumns: true }} />
            </CardWrapper>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const localState = {
    namespaces: {}
  };

  // Runs on all of the category namespaces and loads the data from 
  // redux to state
  for (let curNamespace in ServerAPI[ownProps.match.params.category.toUpperCase()]) {
    if (state.resource[ServerAPI[ownProps.match.params.category.toUpperCase()][curNamespace].OPENZIR]) {
      localState.namespaces[curNamespace] = {
        ...state.resource[ServerAPI[ownProps.match.params.category.toUpperCase()][curNamespace].OPENZIR],
        title: curNamespace
      };
    }
  }
  return localState;
}

const mapDispatchToProps = dispatch => {
  return {
    Load: (apiUrl) => dispatch(loadResource(apiUrl))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryZirView);