import React from 'react';
import classNames from 'classnames';
import {
  VictoryChart,
  VictoryScatter,
  VictoryAxis,
  // VictoryContainer,
  VictoryClipContainer,
  VictoryZoomContainer,
  // VictoryTooltip,
  VictoryLabel
} from 'victory';

import { getFillColor } from '../../utils/utils.js';
import { whiskyList } from '../../data/whiskyList.js';
import styles from './homepage.module.scss';

class HomePage extends React.Component {
  renderChart = (data) => {
    if (whiskyList) {
      return (
        <VictoryChart
            padding={{top: 10, bottom: 10, left: 25, right: 25}}
            containerComponent={
            <VictoryZoomContainer
                minimumZoom={{x: 40, y: 40}}
                clipContainerComponent={
                  <VictoryClipContainer clipPadding={{top: 25, right: 25, left: 25, bottom: 25}} />
                }
            />
        }>
          <VictoryAxis
              crossAxis
              style={{ tickLabels: {display: 'none'} }}
          />
            <VictoryScatter
                data={whiskyList}
                x={'peatScore'}
                y={'colorScore'}
                name={'whiskyMap'}
                domain={{ x: [90, -90], y: [90, -90] }}
                size={2}
                style={{ data: { fill: ({ datum }) => getFillColor(datum.region) } }}
                labels={({ datum }) => datum.name}
                labelComponent={
                  <VictoryLabel
                      dy={-3}
                      style={{fontSize: '5px'}}
                      verticalAnchor={'end'}
                      desc={({ datum }) => `${datum.name}`}
                      text={({ datum }) => `${datum.name}`}
                  />
                }
                // labelComponent={
                //   <VictoryTooltip />
                // }
            />
          <VictoryAxis
              crossAxis
              dependentAxis
              style={{ tickLabels: {display: 'none'} }}
          />
        </VictoryChart>
      );
    }
  }

          // <div className={styles.pageTitle}>The Scotch Palate Map</div>
  render() {
    return (
      <div className={styles.rootContainer}>
        <div className={styles.infoContainer}>
          <div className={styles.pageTitle}>The Scotch Palate Map</div>
          <div className={styles.pageSubtitle}>(Scroll to Zoom)</div>
          <div className={styles.legendTitle}>Region:</div>
          <div className={styles.legendTitle}>
            <div className={classNames(styles.legendItem, styles.speyside)}>Speyside</div>
            <div className={classNames(styles.legendItem, styles.highland)}>Highland</div>
            <div className={classNames(styles.legendItem, styles.islay)}>Islay</div>
            <div className={classNames(styles.legendItem, styles.island)}>Island</div>
            <div className={classNames(styles.legendItem, styles.campbeltown)}>Campbeltown</div>
            <div className={classNames(styles.legendItem, styles.lowland)}>Lowland</div>
            <div className={classNames(styles.legendItem, styles.other)}>Other</div>
          </div>
        </div>
        <div className={styles.parentContainer}>
          <div className={styles.outerContainer}>
            <div className={styles.title}>Darker & Richer</div>
            <div className={styles.innerContainer}>
              <div className={styles.title}>
                <div className={styles.titleChild}>More Peat Smoke</div>
              </div>
              <div className={styles.chartContainer}>
                {this.renderChart()}
              </div>
              <div className={styles.title}>
                <div className={styles.titleChild}>Less Peat Smoke</div>
              </div>
            </div>
            <div className={styles.title}>Lighter & Drier</div>
          </div>
        </div>
      </div>
    );
  }
}

export { HomePage };
export default HomePage;
