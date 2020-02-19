import React from 'react';
import classNames from 'classnames';
import { withScreenSize } from '@vx/responsive';

import VXChart from '../../components/VXChart/VXChart';
import { whiskyList } from '../../data/whiskyList.js';
import styles from './vxpage.module.scss';

class VXPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // whiskyList: JSON.parse(sessionStorage.getItem('whiskyList')) || null
    }
  }

  // componentDidMount() {
  //   this.setState({ whiskyList: whiskyList });
  // }

  // <div className={styles.pageTitle}>The Scotch Palate Map</div>
  render() {
    console.log('this.props @ PAGE', this.props);
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
                <VXChart
                    whiskyData={whiskyList}
                    screenWidth={this.props.screenWidth}
                    screenHeight={this.props.screenHeight} />
              </div>
          </div>
        </div>
      </div>
    );
  }
}

// export { VXPage };
// export default VXPage;
export default withScreenSize(VXPage);
