import React from 'react';

import classes from './Loader.module.scss';

/**
 * Represnts a loading icon displayed to the user
 *
 */
const Loader = () => (
  <div className={"h1 text-muted text-center mr-3"}>
    <i className={"fas fa-sync-alt fa-spin"}></i>  
  </div>
);

export default Loader;