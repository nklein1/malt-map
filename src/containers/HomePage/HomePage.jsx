import React from 'react';
// import { Link } from 'react-router-dom';
import {
  VictoryChart,
  VictoryScatter,
  VictoryAxis,
  // VictoryTooltip,
  VictoryLabel
} from 'victory';

import { sampleData } from '../../data/sampleData.js';
import styles from './HomePage.module.scss';

class HomePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // whiskyList: JSON.parse(sessionStorage.getItem('whiskyList')) || null
    }
  }

  componentDidMount() {
    this.setState({ sampleData: sampleData });
  }

  getFillColor = (data) => {
    let fill = '#c43a31';
    if (data.region === 'Speyside') {
      fill = '#F28705';
    } else if (data.region === 'Highland') {
      fill = '#F20505';
    } else if (data.region === 'Islay') {
      fill = '#025159';
    } else if (data.region === 'Island') {
      fill = '#03A696';
    } else if (data.region === 'Lowland') {
      fill = '#F25D27';
    } else if (data.region === 'Campbeltown') {
      fill = '#666';
    } else if (data.region === 'Other') {
      fill = '#666';
    }
    return fill;
  }

  renderChart = (data) => {
    if (this.state.sampleData) {
      return (
        <VictoryChart>
          <VictoryAxis
              crossAxis
              domain={{ x: [80, -80], y: [80, -80] }}
              style={{ tickLabels: {display: 'none'} }}
          />
            <VictoryScatter
                style={{ data: { fill: ({ datum }) => this.getFillColor(datum) } }}
                size={2}
                x={'peatScore'}
                y={'colorScore'}
                name={'whiskyMap'}
                domain={{ x: [80, -80], y: [80, -80] }}
                // labelComponent={
                //   <VictoryTooltip />
                // }
                labelComponent={
                  <VictoryLabel
                      dy={-3}
                      style={{fontSize: '5px'}}
                      verticalAnchor={'end'}
                      desc={({ datum }) => `${datum.name}`}
                      text={({ datum }) => `${datum.name}`}
                  />
                }
                data={this.state.sampleData}
                labels={({ datum }) => datum.name}
            />
          <VictoryAxis
              crossAxis
              dependentAxis
              domain={{ x: [80, -80], y: [80, -80] }}
              style={{ tickLabels: {display: "none"} }}
          />
        </VictoryChart>

      );
    }
  }

  render() {
    return (
      <div className={styles.parentContainer}>
        <div className={styles.outerContainer}>
          <div className={styles.title}>Darker Color</div>
          <div className={styles.innerContainer}>
            <div className={styles.title}>More Peat Smoke</div>
            <div className={styles.chartContainer}>
              {this.renderChart()}
            </div>
            <div className={styles.title}>Less Peat Smoke</div>
          </div>
          <div className={styles.title}>Lighter Color</div>
        </div>
      </div>
    );
  }
}

export { HomePage };
export default HomePage;
