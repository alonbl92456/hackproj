import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import DataTable from '../../componments/DataTable/DataTable';
import { Col, Row } from 'reactstrap';
import CardWrapper from '../../hoc/CardWrapper/CardWrapper';


var dummyData = [
  {
    "id": "12345789",
    "anger": 0,
    "contempt": 0,
    "disgust": 0,
    "fear": 0,
    "happiness": 0,
    "neutral": 0.999,
    "sadness": 0.001,
    "surprise": 0
  },
  {
    "id": "22222",
    "anger": 0,
    "contempt": 0,
    "disgust": 0,
    "fear": 0,
    "happiness": 0,
    "neutral": 0.999,
    "sadness": 0.001,
    "surprise": 0
  },
  {
    "id": "33333",
    "anger": 0,
    "contempt": 0,
    "disgust": 0,
    "fear": 0,
    "happiness": 0,
    "neutral": 0.999,
    "sadness": 0.001,
    "surprise": 0
  },
  {
    "id": "444444",
    "anger": 0,
    "contempt": 0,
    "disgust": 0,
    "fear": 0,
    "happiness": 0,
    "neutral": 0.999,
    "sadness": 0.001,
    "surprise": 0
  },
  {
    "id": "55555",
    "anger": 0,
    "contempt": 0,
    "disgust": 0,
    "fear": 0,
    "happiness": 0,
    "neutral": 0.999,
    "sadness": 0.001,
    "surprise": 0
  }, {
    "id": "666666",
    "anger": 0,
    "contempt": 0,
    "disgust": 0,
    "fear": 0,
    "happiness": 0,
    "neutral": 0.999,
    "sadness": 0.001,
    "surprise": 0
  },
  {
    "id": "888888888",
    "anger": 0,
    "contempt": 0,
    "disgust": 0,
    "fear": 0,
    "happiness": 0,
    "neutral": 0.999,
    "sadness": 0.001,
    "surprise": 0
  }
];

const bar = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};


export default class EmpsView extends PureComponent {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <Row>
          <Col>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
              <DataTable title="Your Employess" columns={Object.keys(dummyData[0])} data={dummyData.map(cur => Object.values(cur))} isEmpty={false} isLoading={false} />
          </Col>

        </Row>
      </div>
    )
  }
}
