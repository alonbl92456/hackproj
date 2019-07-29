import React from 'react';
import Loadable from 'react-loadable'
import Loader from './componments/UI/Loader/Loader';

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <Loader/>;
}


const Dashboard = Loadable({
  loader: () => import('./containers/Dashboard/Dashboard'),
  loading: Loading,
  delay:2000
});


const EmpsView = Loadable({
  loader: () => import('./containers/EmpsView/EmpsView'),
  loading: Loading,
});

const EmpView = Loadable({
  loader: () => import('./containers/EmpVIew/EmpVIew'),
  loading: Loading,
});







// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: '', component: Dashboard },
  { path: '/employees/details', exact: true, name: 'Employees', component: EmpsView },
  { path: '/employees/details/:id/', exact: true, name: 'Employee Details', component: EmpView }
];

export default routes;
