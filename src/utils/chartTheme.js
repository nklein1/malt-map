// Colors
const yellow200 = '#FFF59D';
const deepOrange600 = '#F4511E';
const lime300 = '#DCE775';
const lightGreen500 = '#8BC34A';
const teal700 = '#00796B';
const cyan900 = '#006064';
const colors = [
  deepOrange600,
  yellow200,
  lime300,
  lightGreen500,
  teal700,
  cyan900
];
const blueGrey50 = '#ECEFF1';
const blueGrey300 = '#90A4AE';
const blueGrey700 = '#455A64';
const grey900 = '#212121';

// Typography
const sansSerif = "'Roboto', 'Helvetica Neue', Helvetica, sans-serif";
const letterSpacing = 'normal';
const fontSize = 12;

// Layout
const padding = 8;
const baseProps = {
  width: 350,
  height: 350,
  padding: 50
};

// * Labels
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding,
  fill: blueGrey700,
  stroke: 'transparent',
  strokeWidth: 0
};

const centeredLabelStyles = { textAnchor: 'middle' };

// Strokes
const strokeDasharray = '10, 5';
const strokeLinecap = 'round';
const strokeLinejoin = 'round';

// Put it all together...
const chartTheme = {

  area: {
    style: {
      data: {
        fill: grey900
      },
      labels: centeredLabelStyles
    }
  },

  axis: {
    style: {
      axis: {
        fill: "transparent",
        stroke: blueGrey300,
        strokeWidth: 2,
        strokeLinecap,
        strokeLinejoin
      },
      axisLabel: {
        padding,
        stroke: "transparent"
      },
      grid: {
        fill: "none",
        stroke: blueGrey50,
        strokeDasharray,
        strokeLinecap,
        strokeLinejoin,
        pointerEvents: "painted"
      },
      ticks: {
        fill: "transparent",
        size: 5,
        stroke: blueGrey300,
        strokeWidth: 1,
        strokeLinecap,
        strokeLinejoin
      },
      tickLabels: {
        fill: blueGrey700
      }
    }
  },

  independentAxis: {
    style: {
      axis: {
        fill: "transparent",
        stroke: blueGrey300,
        strokeWidth: 2,
        strokeLinecap,
        strokeLinejoin
      },
      axisLabel: {
        padding,
        stroke: "transparent"
      },
      grid: {
        fill: "none",
        stroke: blueGrey50,
        strokeDasharray,
        strokeLinecap,
        strokeLinejoin,
        pointerEvents: "painted"
      },
      ticks: {
        fill: "transparent",
        size: 5,
        stroke: blueGrey300,
        strokeWidth: 1,
        strokeLinecap,
        strokeLinejoin
      },
      tickLabels: {
        fill: blueGrey700
      }
    }
    // offsetY: 200
  },
  dependentAxis: {
    style: {
      axis: {
        fill: "transparent",
        stroke: blueGrey300,
        strokeWidth: 2,
        strokeLinecap,
        strokeLinejoin
      },
      axisLabel: {
        padding,
        stroke: "transparent"
      },
      grid: {
        fill: "none",
        stroke: blueGrey50,
        strokeDasharray,
        strokeLinecap,
        strokeLinejoin,
        pointerEvents: "painted"
      },
      ticks: {
        fill: "transparent",
        size: 5,
        stroke: blueGrey300,
        strokeWidth: 1,
        strokeLinecap,
        strokeLinejoin
      },
      tickLabels: {
        fill: blueGrey700
      }
    }
  },

  legend: {
    colorScale: colors,
    gutter: 10,
    orientation: "vertical",
    titleOrientation: "top",
    style: {
      data: {
        type: "circle"
      },
      labels: baseLabelStyles,
      title: { padding: 5, baseLabelStyles }
    }
  },


  scatter: {
    style: {
      data: {
        fill: blueGrey700,
        opacity: 1,
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: centeredLabelStyles
    }
  },

  tooltip: {
    style: {
      padding: 5,
      pointerEvents: "none",
      centeredLabelStyles
    },
    flyoutStyle: {
      stroke: grey900,
      strokeWidth: 1,
      fill: "#f0f0f0",
      pointerEvents: "none"
    },
    cornerRadius: 5,
    // pointerLength
  },




  // axis: {
  //   style: {
  //     axis: {
  //       fill: "transparent",
  //       strokeWidth: 3,
  //       stroke: "#90A4AE"
  //     },
  //     grid: {
  //       fill: "transparent",
  //       stroke: "#ECEFF1",
  //       strokeWidth: 3
  //     },
  //     ticks: {
  //       size: 15
  //     },
  //     tickLabels: {
  //       fill: "#00796B"
  //     }
  //   },
  //   width: 500,
  //   height: 400,
  //   padding: 25
  // },
  // independentAxis: {
  //   style: {
  //     axis: {
  //       stroke: "#F4511E"
  //     },
  //     ticks: {
  //       strokeWidth: 3,
  //       stroke: "#F4511E"
  //     }
  //   },
  //   offsetY: 200
  // },
  // dependentAxis: {
  //   style: {
  //     axis: {
  //       strokeWidth: 1
  //     },
  //     grid: {
  //       strokeWidth: 1
  //     },
  //     tickLabels: {
  //       fill: "#000000"
  //     }
  //   },
  //   offsetX: 250
  // }
};

export default chartTheme;
export { chartTheme };
