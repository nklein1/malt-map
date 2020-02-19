import React from 'react';
import classNames from 'classnames';

import {
  CartesianGrid,
  ScatterChart,
  LabelList,
  Tooltip,
  Scatter,
  XAxis,
  YAxis,
} from 'recharts';

import { whiskyList } from '../../data/whiskyList.js';
// import { sampleData } from '../../data/sampleData.js';
import styles from './rechartspage.module.scss';

class RechartsPage extends React.Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     // whiskyList: JSON.parse(sessionStorage.getItem('whiskyList')) || null
  //   }
  // }

  // componentDidMount() {
  //   this.setState({ sampleData: whiskyList });
  // }

  getFillColor = (region) => {
    console.log('region @getFill', region);
    let fill = '#c43a31';
    if (region === 'Speyside') {
      fill = '#F28705';
    } else if (region === 'Highland') {
      fill = '#F20505';
    } else if (region === 'Islay') {
      fill = '#025159';
    } else if (region === 'Island') {
      fill = '#03A696';
    } else if (region === 'Lowland') {
      fill = '#F25D27';
    } else if (region === 'Campbeltown') {
      fill = '#666';
    } else if (region === 'Other') {
      fill = '#666';
    }
    return fill;
  }

  renderTooltip = ({payload}) => {
  // renderTooltip = (data) => {
    // if (payload && payload.lengthg) {
    if (payload && payload.length > 0) {

      // console.log('payload @ renderTooltip', payload)
      let payload2 = payload[0].payload;
      // console.log('payload2 @ renderTooltip', payload2);
      return (
        <div className={styles.tooltipContainer}>
        <div className={styles.name}>{payload2.name}</div>
        <div className={styles.data}>Price: ${payload2.price}</div>
        <div className={styles.data}>Rating: {payload2.rating}</div>
        </div>
      );
    }
  }

  renderShape = (props) => {
    const { cx, cy, key, region } = props;
    console.log('props @ renderShape', props);

    return (
      <circle
          cx={cx}
          cy={cy}
          fill={this.getFillColor(region)}
          r={5}
          key={key}
          className={classNames(styles.scatterShape, key)}
      />
    );
  }

  renderLabel = (props) => {
    const { x, y, width, name, key } = props;
    const yPadding = 5;
    return (
      <text
          x={x + width / 2}
          y={y - yPadding}
          className={classNames(
              styles.scatterLabel,
              // isMember === key ? styles.active : ''
          )}
          textAnchor={'middle'}
          dominantBaseline={'top'}
          key={key + '-label'}>
        {name}
      </text>
    );
  };

  renderChart = (data) => {
    if (whiskyList) {
      return (

        <ScatterChart width={850} height={550}
          margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
              xAxisId={'peatScore'}
              dataKey={'peatScore'}
              name={'peatScore'}
              type={'number'}
              range={[-90, 90]}
              scale={'linear'}
              domain={['dataMin - 16', 'dataMax + 10']}
              allowDataOverflow={false}
              tick={false}
          />
          <YAxis
              yAxisId={'colorScore'}
              dataKey={'colorScore'}
              name={'colorScore'}
              type={'number'}
              range={[-90, 90]}
              scale={'linear'}
              domain={['dataMin - 2', 'dataMax + 8']}
              allowDataOverflow={false}
              tick={false}
          />

          <Tooltip
              cursor={false}
              content={this.renderTooltip}
              offset={0}
              isAnimationActive={false}
            />

          <Scatter
              name="A school"
              data={whiskyList}
              fill={this.getFillColor}
              xAxisId={'peatScore'}
              yAxisId={'colorScore'}
              legendType={'none'}
              shape={this.renderShape}
              onClick={this.renderTooltip}
          >
            <LabelList dataKey={'name'} position="top" content={this.renderLabel} />
          </Scatter>
        </ScatterChart>
      );
    }
  }

          // <div className={styles.pageTitle}>The Scotch Palate Map</div>
  render() {
    return (
      <div className={styles.rootContainer}>
        <div className={styles.infoContainer}>
          <div className={styles.pageTitle}>Test Recharts Data Map</div>
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

export { RechartsPage };
export default RechartsPage;
