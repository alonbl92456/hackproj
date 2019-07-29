
import React from 'react';
import { Progress } from 'reactstrap';

/**
 *
 * Componment wich represents a progress bar with green and red
 *
 * @param {Object} props
 * full - the full precent of the object. used for green bar length
 * props.text - a text to display inside the bar
 * @returns jsx
 */
const CapacityProgressbar = (props) => {
  let firstColor = "danger";
  let seconedColor = "success";

  let text = props.text ? props.text : "";

  // Checks wich color to display first 
  if(props.reverse){
     firstColor = "success";
     seconedColor = "danger";
  }

  return (
    <div>
      <Progress multi>
        <Progress animated bar color={firstColor} value={props.full}><span style={{color:"black"}}>{props.full + "%" + text }</span></Progress>
        <Progress animated bar color={seconedColor} value={100 - props.full}/>
      </Progress>
    </div>
  );
};

export default CapacityProgressbar;