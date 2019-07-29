import React, { Component } from 'react'
import HealthGraphView from '../../componments/HealthGraphVIew/HealthGraphView';
import DataTable from '../../componments/DataTable/DataTable';
import * as serverAPI from '../../shared/serverAPI';
import { connect } from 'react-redux';
import CardWrapper from '../../hoc/CardWrapper/CardWrapper';
import { CardColumns, Row, Col } from 'reactstrap';
import { loadResource } from '../../store/actions/index';
import Aux from '../../hoc/Aux/Aux';




class CategoryDashboard extends Component {


    state = {
        showModal: false,
        selectedArea: null,
        selectedNamespace: null
    }


    ShowErrorsHandler(chartElement, namespaceIndex) {
        this.setState(
            {
                ...this.state,
                selectedNamespace: namespaceIndex,
                selectedArea: chartElement[0]._view.label,
                showModal: true
            }
        );

    }

    toggleModal() {
        this.setState({
            ...this.state,
            showModal: !this.state.showModal
        })
    }

    componentDidMount() {
        //serverAPI.SAN_ROUTES.map(curRoute => this.props.Load(curRoute));
    }

    render() {

        return (
            <Aux>
                <Row>
                    <HealthGraphView
                        category={this.props.match.params.category}
                        namespaces={this.props.namespaces}
                        showErrorsHandler={(chartElement, namespaceIndex) => this.ShowErrorsHandler(chartElement, namespaceIndex)}
                        showHealthModal={this.state.showModal}
                        toggle={() => this.toggleModal()}
                        isOpen={this.state.showModal}
                        selectedNamespace={this.state.selectedNamespace}
                        selectedArea={this.state.selectedArea} />
                </Row>
                <Row>
                    {
                        this.props.cc.map(curCC =>
                            <Col>
                                <CardWrapper title={curCC.title + " Capacity "} body={false}>
                                    <DataTable
                                        isLoading={curCC.loading}
                                        isEmpty={curCC.data === null}
                                        data={
                                            curCC.data ? curCC.data.map(curData =>
                                                [curData.id,
                                                curData.env,
                                                (curData.used * 100 / curData.total).toFixed(0)])
                                                :
                                                []
                                        }
                                        columns={["Id", "Env", "Full%"]} />
                                </CardWrapper>
                            </Col>
                        )}
                        </Row>
            </Aux>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const localState = {
        namespaces: [],
        cc: []
    };

    let category = ownProps.match.params.category.toUpperCase();

    for (let curCat in serverAPI[category]) {
        if (state.resource[serverAPI[category][curCat].OPENZIR]) {
            localState.namespaces.push({
                ...state.resource[serverAPI[category][curCat].OPENZIR],
                title: curCat
            });
        }

        if (typeof serverAPI[category][curCat].CC !== "object") {
            if (state.resource[serverAPI[category][curCat].CC]) {
                localState.cc.push({
                    ...state.resource[serverAPI[category][curCat].CC],
                    title: curCat
                });
            }
        }
        else {
            Object.keys(serverAPI[category][curCat].CC).map(curCCType => {
                localState.cc.push(
                    {
                        ...state.resource[serverAPI[category][curCat].CC[curCCType]],
                        title: curCat + " " + curCCType
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDashboard);