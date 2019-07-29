import React from 'react';
import Loader from '../../componments/UI/Loader/Loader';
/**
 *
 * Hoc handling loading animation for coponment
 * @param {Component} Component
 * @returns Loadable componment
 */
function WithLoading(Component) {
    return function WithLoadingComponent({ isLoading = false ,isEmpty = false , ...props }) {
        if(isLoading) return  <Loader/>;
        else if(!isLoading && !isEmpty) return (<Component {...props} />);
        else if(!isLoading && isEmpty ) return <h4>Data is unavaliable <i className={"fa fa-exclamation-triangle"}></i></h4>
        else return (<Component {...props} />)
    }
}
export default WithLoading;