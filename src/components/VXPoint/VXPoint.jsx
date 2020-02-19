import React from 'react';
// import classNames from 'classnames';

import { withBoundingRects } from '@vx/bounds';
import { Circle } from '@vx/shape';
import { Group } from '@vx/group';
import { Text } from '@vx/text';

import { getFillColor } from '../../utils/utils.js';
import styles from './VXPoint.module.scss';

class VXPoint extends React.Component {

  renderTooltip = () => {
    // console.log('this.props.tooltipData @ renderTooltip', this.props.tooltipData);
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

  render() {
    const { point, cx, cy, i } = this.props;

    // const offsetLeft = 10;
    // const offsetTop = 10;
    // const {parentRect, rect} = this.props;

    // // if (rect && parentRect) {
    // // let left =
    // //   offsetLeft + rect.right > parentRect.right || offsetLeft + rect.right > window.innerWidth
    // //     ? left - rect.width - offsetLeft
    // //     : left + offsetLeft;

    // // let top =
    // //   offsetTop + rect.bottom > parentRect.bottom || offsetTop + rect.bottom > window.innerHeight
    // //     ? top - rect.height - offsetTop
    // //     : top + offsetTop;
    // // }

    // let left = 0;
    // let top = 0;

    // // if (rect && parentRect) {

    // //   if (offsetLeft + rect.right > parentRect.right || offsetLeft + rect.right > window.innerWidth) {
    // //     left = left + 75 - offsetLeft;
    // //   } else {
    // //     left = left + offsetLeft;
    // //   }
    // // }
    // let xxx = 0;
    // if (point && this.props.rect) {
    //   if (point.name === 'Laphroaig 10 Cask Strength' || point.name === 'Bruichladdich Octomore') {
    //     // xxx = 50;
    //     console.log('this.props @ render', this.props);
    //     console.log('this.props.getRects() @ render', this.props.getRects());
    //   }
    // }

    return (
      <Group
          onMouseOut={this.props.onMouseOut}
          onMouseEnter={this.props.onMouseEnter}
          className={styles.scatterGroup}>
        <Circle
            key={`point-${point.x}-${i}`}
            className={'dot'}
            cx={cx} cy={cy} r={5}
            fill={getFillColor(point.region)}
        />
        <Text
            key={`label-${point.x}-${this.props.i}`}
            // dx={xxx} dy={-10}
            // dx={cx + xxx} dy={cy - 10}
            x={cx} y={cy - 10}
            verticalAnchor={'end'}
            textAnchor={'middle'}
            scaleToFit={false}
            // width={110}
            // lengthAdjust={'wrap'}
            // style={{transform: `translate(${left}px, ${top}px)`}}
            className={styles.scatterLabel}>
          {point.name}
        </Text>
      </Group>
    );
  }
}

// export { VXPoint };
export default withBoundingRects(VXPoint);
