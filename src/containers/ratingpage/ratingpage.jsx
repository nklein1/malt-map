import React from 'react';
import classNames from 'classnames';
// import { Link } from 'react-router-dom';
import {
  VictoryChart,
  VictoryScatter,
  VictoryAxis,
  // VictoryTheme,
  // VictoryContainer,
  VictoryClipContainer,
  VictoryZoomContainer,
  // VictoryTooltip,
  VictoryLabel
} from 'victory';

import { whiskyList } from '../../data/whiskyList.js';
import { chartTheme } from '../../utils/chartTheme.js';
import { getFillColor } from '../../utils/utils.js';
import styles from './ratingpage.module.scss';

class RatingPage extends React.Component {

  // constructor(props) {
  //   super(props);

  //   // this.state = {
  //   //   // whiskyList: JSON.parse(sessionStorage.getItem('whiskyList')) || null
  //   // }
  // }

  // componentDidMount() {
  //   this.setState({ whiskyList: whiskyList });
  // }

    // padding={{top: 10, bottom: 10, left: 25, right: 25}}
      // domain={{ x: [0, 250], y: [65, 95] }}
      // scale={{x: "sqrt", y: "linear"}}
  // <VictoryAxis
  // dependentAxis
  // tickLabelComponent={<VictoryLabel size={1}/>}
  // />
  renderChart = (data) => {
    if (whiskyList) {
      return (
        <VictoryChart
            theme={chartTheme}
            containerComponent={
              <VictoryZoomContainer
                  minimumZoom={{x: 40, y: 40}}
                  clipContainerComponent={
                    <VictoryClipContainer clipPadding={{top: 25, right: 25, left: 25, bottom: 25}} />
                  }
              />
        }>
          <VictoryAxis
              scale={{x: 'linear', y: 'sqrt'}}
              label={'Rating'}
              fixLabelOverlap={true}
              axisLabelComponent={<VictoryLabel dy={20}/>}
              tickLabelComponent={<VictoryLabel lineHeight={0.3}/>}
          />
          <VictoryScatter
              data={whiskyList}
              x={'rating'}
              y={'price'}
              name={'value'}
              domain={{ x: [65, 95], y: [15, 250] }}
              scale={{x: 'linear', y: 'sqrt'}}
              size={2}
              style={{ data: { fill: ({ datum }) => getFillColor(datum.region) } }}

              labels={({ datum }) => `${datum.name}`}
              // labels={({ datum }) => `${datum.name} - ${datum.price} - ${datum.rating}`}
              labelComponent={
                <VictoryLabel
                    dy={-3}
                    style={{fontSize: '5px'}}
                    verticalAnchor={'end'}
                    desc={({ datum }) => `${datum.name}`}
                    text={({ datum }) => `${datum.name}`}
                    // text={({ datum }) => `${datum.name} - $${datum.price} - ${datum.rating}`}
                />
              }
          />
          <VictoryAxis
              dependentAxis
              scale={{x: 'linear', y: 'sqrt'}}
              tickFormat={(t) => `$${t}`}
              fixLabelOverlap={true}
              label={'Price'}
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
          <div className={styles.pageTitle}>
            Ace Ticket Test Map
            <div className={styles.pageSubtitle}>(Scroll to Zoom)</div>
          </div>
          <div className={styles.legend}>
            <div className={styles.legendTitle}>Region:</div>
            <div className={classNames(styles.legendGrid)}>
              <div className={classNames(styles.legendItem, styles.speyside)}>Speyside</div>
              <div className={classNames(styles.legendItem, styles.highland)}>Highland</div>
              <div className={classNames(styles.legendItem, styles.islay)}>Islay</div>
              <div className={classNames(styles.legendItem, styles.island)}>Island</div>
              <div className={classNames(styles.legendItem, styles.lowland)}>Lowland</div>
              <div className={classNames(styles.legendItem, styles.campbeltown)}>Campbeltown</div>
              <div className={classNames(styles.legendItem, styles.other)}>Other</div>
            </div>
          </div>
        </div>
        <div className={styles.parentContainer}>
          <div className={styles.outerContainer}>
            <div className={styles.chartContainer}>
              {this.renderChart()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { RatingPage };
export default RatingPage;
