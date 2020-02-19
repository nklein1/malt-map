import React from 'react';
// import classNames from 'classnames';
import { withTooltip, TooltipWithBounds } from '@vx/tooltip';
import { LinearGradient } from '@vx/gradient';
import { scaleLinear } from '@vx/scale';
import { localPoint } from '@vx/event';
// import { Circle } from '@vx/shape';
import { Group } from '@vx/group';
import { Text } from '@vx/text';
// import { Grid } from '@vx/grid';
import { withBoundingRects } from '@vx/bounds';
// import { withBoundingRects, withBoundingRectsProps } from '@vx/bounds';
// import { withScreenSize, ParentSize } from '@vx/responsive';
// import { Axis, AxisBottom, AxisTop, AxisLeft, AxisRight } from '@vx/axis';
// import { Grid } from '@vx/grid';
// import { genRandomNormalPoints } from '@vx/mock-data';

import VXPoint from '../../components/VXPoint/VXPoint';
// import { whiskyList } from '../../data/whiskyList.js';
import styles from './VXChart.module.scss';

class VXChart extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // whiskyList: JSON.parse(sessionStorage.getItem('whiskyList')) || null
    }
  }

  // componentDidMount() {
  //   this.setState({ sampleData: whiskyList });
  // }

  renderTooltip = () => {
    if (this.props.tooltipData && this.props.tooltipOpen) {
      const {name, price, rating, peatScore, colorScore} = this.props.tooltipData;
      return (
        <div className={styles.tooltipContainer}>
          <div className={styles.name}>{name}</div>
          <div className={styles.data}>Price: <strong>${price}</strong></div>
          <div className={styles.data}>Rating: <strong>{rating}</strong></div>
          <div className={styles.data}>peatScore: <strong>{peatScore}</strong></div>
          <div className={styles.data}>colorScore: <strong>{colorScore}</strong></div>
        </div>
      );
    }
  }

  renderChartLabels = (xMax, yMax, margin) => {
    return (
      <Group>
        <Text
            dx={0 + margin} dy={0 + margin}
            verticalAnchor={'start'}
            textAnchor={'start'}
            key={`label-top-left`}
            className={styles.chartLabel}>
          Heavy
        </Text>
        <Text
            dx={xMax - margin} dy={0 + margin}
            verticalAnchor={'start'}
            textAnchor={'end'}
            key={`label-top-right`}
            className={styles.chartLabel}>
          Sherry Monsters
        </Text>
        <Text
            dx={0 + margin} dy={yMax/2}
            verticalAnchor={'middle'}
            textAnchor={'start'}
            key={`label-middle-left`}
            className={styles.chartLabel}>
          Rounded Peat
        </Text>
        <Text
            dx={xMax/2} dy={yMax/2}
            verticalAnchor={'middle'}
            textAnchor={'middle'}
            key={`label-middle-center`}
            className={styles.chartLabel}>
          Malty Middle
        </Text>
        <Text
            textAnchor={'end'}
            verticalAnchor={'middle'}
            dx={xMax - margin} dy={yMax / 1.5}
            key={`label-lowermid-right`}
            className={styles.chartLabel}>
          Light, Rounded
        </Text>
        <Text
            textAnchor={'end'}
            verticalAnchor={'middle'}
            dx={xMax - margin} dy={yMax / 2.5}
            key={`label-uppermid-right`}
            className={styles.chartLabel}>
          Light/Rich Fruit
        </Text>
        <Text
            dx={0 + margin} dy={yMax - margin}
            verticalAnchor={'end'}
            textAnchor={'start'}
            key={`label-bottom-left`}
            className={styles.chartLabel}>
          Peat Monsters
        </Text>
        <Text
            dx={xMax/2} dy={yMax - margin}
            verticalAnchor={'end'}
            textAnchor={'middle'}
            key={`label-bottom-center`}
            className={styles.chartLabel}>
          Light, Coastal, Drier
        </Text>
        <Text
            dx={xMax - margin} dy={yMax - margin}
            verticalAnchor={'end'}
            textAnchor={'end'}
            key={`label-bottom-right`}
            className={styles.chartLabel}>
          Light
        </Text>
      </Group>
    );
  }

  handleMouseOverCircle = (event, datum) => {
    const coords = localPoint(event.target.ownerSVGElement, event);
    this.props.showTooltip({
      tooltipLeft: coords.x,
      tooltipTop: coords.y,
      tooltipData: datum
    });
  };

  render() {
    let width = 750;
    let height = 750;
    const margin = 25;
    if (this.props.screenWidth < 750) {
      width = this.props.screenWidth - 20;
      height = this.props.screenWidth;
    }
    let xMax = width;
    let yMax = height;
    let xScale = scaleLinear({
      domain: [-90, 90],
      range: [0, xMax],
      nice: true,
      clamp: true
    });
    let yScale = scaleLinear({
      domain: [-90, 90],
      range: [yMax, 0],
      nice: false,
      clamp: true
    });
    const {
      tooltipTop,
      tooltipLeft,
      tooltipOpen,
      hideTooltip
    } = this.props;

    if (this.props.whiskyData) {
      return (
        <div className={styles.container} width={width} height={height}>
          <svg width={width} height={height}>
            <Group width={width} height={height}>
              <LinearGradient from={'#732C02'} to={'#F2B90F'} id={'gradientbg'} />
              <rect width={width} height={height} rx={4} fill={'url(#gradientbg)'} />
              {this.renderChartLabels(xMax, yMax, margin)}
              {this.props.whiskyData.map((point, i) => {
                return (
                  <VXPoint
                      cx={xScale(point.peatScore)}
                      cy={yScale(point.colorScore)}
                      point={point}
                      xMax={xMax}
                      yMax={yMax}
                      margin={margin}
                      onMouseOut={hideTooltip}
                      onMouseEnter={(e) => this.handleMouseOverCircle(e, point)}
                      i={i}
                      key={'point-' + point.slug}
                  />
                );
              })}
            </Group>
          </svg>

          {tooltipOpen && (
            <TooltipWithBounds left={tooltipLeft} top={tooltipTop} key={Math.random()}>
              {this.renderTooltip()}
            </TooltipWithBounds>
          )}
        </div>
      );
    } else {
      return ('Loading...');
    }
  }
}

// export { VXPage };
export default withTooltip(withBoundingRects(VXChart));
