import React from 'react';
import CapacityProgressbar from '../../componments/UI/CapacityProgressbar/CapacityProgressbar';
import Aux from '../../hoc/Aux/Aux';

const WithCoverage = (Component) => {
    return function WithCoverageComponent(props) {
        return (
            <Aux>
                <div >
                    <CapacityProgressbar text={props.text} reverse full={props.coverage * 100} />
                </div>
                <br />
                <br />
                {props.coverage > 0 ? <Component {...props} /> : <h3>Could not load data</h3>}
            </Aux>
        );
    }
}

export default WithCoverage;
