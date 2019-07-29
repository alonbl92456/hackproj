import React from 'react'
import HealthGraph from './HealthGraph/HealthGraph';
import { CardColumns, Col, Row } from 'reactstrap';
import Aux from '../../hoc/Aux/Aux';
import ModalWrapper from '../../hoc/ModelWrapper/ModelWrapper';
import CardWrapper from '../../hoc/CardWrapper/CardWrapper';
import WithLoading from '../../hoc/WithLoading/WithLoading';
import DataTable from '../DataTable/DataTable'

const WithLoadingHealthGraph = WithLoading(HealthGraph);


/*
props.selectedArea ?
                          props.namespaces[props.selectNamespaceIndex][props.selectedArea].details.map
                            (curDetail => [curDetail.id, props.selectedArea, curDetail.detail])
                        :[]
*/

/**
 * This component represents Health graphs grid of number of domains
 * 
 * @param {Object} props
 *  props.namespaces = an array on resources to display, each resource represents a domain.
 *  each resouce contains data propery.
 *   [
 *      {
 *          data:{
 *              title: "Just some "
 *              areas:[{ Disks:{ staus }}....],
 *              loading: true,false => whether or not the data is being loaded from the server 
 *          }
 *      }
 * ]
 * props.isOpen = boolean, represents whether or not the status modal is open
 * @returns
 */
const HealthGraphView = (props) => {

    let graphs = (props.namespaces.map((curNamespace, namespaceIndex) =>
        <CardWrapper
            title={curNamespace.title}
            link={"/" + props.category.toLowerCase() + "/openzir/" + curNamespace.title.toLowerCase()}>
            <WithLoadingHealthGraph
                key={curNamespace.title}
                coverd={curNamespace.data ? (1 - (curNamespace.data.coverage.missing.length / curNamespace.data.coverage.total)).toFixed(2) : 0}
                index={namespaceIndex}
                areas={curNamespace.data ? curNamespace.data.areas : {}}
                showErrorsHandler={props.showErrorsHandler}
                isLoading={curNamespace.loading}
                isEmpty={curNamespace.data === null} />

        </CardWrapper>)
    );


    return (
        <Aux>
            {
                graphs.length > 1 ? 
                <Aux> 
                    {graphs.map(curGraph => <Col lg={(12 / graphs.length)} >{curGraph}</Col>)}
                </Aux> :
                <Col style={{paddingRight:"24%", paddingLeft:"24%"}} >
                        {graphs}
                </Col>
            }
            {props.isOpen &&
                <ModalWrapper
                    toggle={props.toggle} isOpen={props.isOpen}
                    type={props.namespaces[props.selectedNamespace].data.areas[props.selectedArea].status ? "danger" : "success"}>
                    {props.namespaces[props.selectedNamespace].data.areas[props.selectedArea].status ?
                        <DataTable
                            columns={["Id", "Error"]}
                            data={props.namespaces[props.selectedNamespace].data.areas[props.selectedArea].details.
                                map(curDetail => Object.values(curDetail))}
                            options={{ filter: false, viewColumns: false }} /> :
                        <h2 style={{ textAlign: "center" }}>There are no errors of {props.selectedArea} type</h2>
                    }
                </ModalWrapper>
            }
        </Aux>
    );

}
    ;

export default HealthGraphView;
