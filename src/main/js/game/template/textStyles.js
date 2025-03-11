define({
  plaqueMessageSmall: {},
  buttonText: {},
  /*
    fontFamily: 'Franklin Gothic',
    fontFamily: 'Utopia',
  */

  winningNumbersTitle: {
    fontFamily: 'oswald',
    fontWeight: 'bold',
    fontSize: 36,
    fill: 'fontColourLuckyNumberTitle',
  },
  playerNumbersTitle: {
    fontFamily: 'oswald',
    fontWeight: 'bold',
    fontSize: 36,
    fill: 'fontColourYourNumberTitle',
  },

  prizeValueNoWin: {
    fontFamily: 'Franklin Gothic',
    fontSize: 25,
    fontWeight: 'bold',
    fill: '#a1a1a1',
    
    dropShadow: true,
    dropShadowAngle: 1.7,
    dropShadowBlur: 1,
    dropShadowColor: "black",
    dropShadowDistance: 0,
  },
  prizeValueNoWinPort: {
    fontFamily: 'Franklin Gothic',
    fontSize: 23,
    fontWeight: 'bold',
    fill: '#a1a1a1',
    
    dropShadow: true,
    dropShadowAngle: 1.7,
    dropShadowBlur: 1,
    dropShadowColor: "black",
    dropShadowDistance: 0,
  },
  prizeValueWin: {
    fontFamily: 'Franklin Gothic',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10,

    dropShadow: true,
    dropShadowBlur: 8,
    dropShadowColor: "#834d05",
    dropShadowDistance: 0,
    
    fill: [
        "#ffffcf",
        "#e3ba44",
        "#e3ba44",
        "#e1bc49",
        "#fdf0a1"
    ],
    fillGradientStops: [
        0.4,
        0.5,
        0.5,
        0.5,
        0.7
    ],
     stroke: "#834d05", 
     strokeThickness: 4,
  },
  prizeValueWinPort: {
    fontFamily: 'Franklin Gothic',
    fontSize: 23,
    fontWeight: 'bold',
    padding: 10,

    dropShadow: true,
    dropShadowBlur: 8,
    dropShadowColor: "#834d05",
    dropShadowDistance: 0,
    
    fill: [
        "#ffffcf",
        "#e3ba44",
        "#e3ba44",
        "#e1bc49",
        "#fdf0a1"
    ],
    fillGradientStops: [
        0.4,
        0.5,
        0.5,
        0.5,
        0.7
    ],
     stroke: "#834d05", 
     strokeThickness: 4,
  },

  winUpTo: {
    fontSize: 90,
    fontFamily: 'Utopia',
    fontWeight: 500,
    
    dropShadow: true,
    dropShadowAngle: 1.53,
    dropShadowBlur: 10,
    dropShadowDistance: 8,
    fill: [
        "#f2ecae",
        "#b28f34",
        "#b28f34",
        "#b28f34",
        "#f2ecae"
    ],
    fillGradientStops: [
        0.4,
        0.5,
        0.5,
        0.5,
        0.7
    ],
    
    lineJoin: "round",
    miterLimit: 28,
    strokeThickness: 3
  },

  infoBar: {
    fontSize: 30,
    fontFamily: 'Utopia',
    fontWeight: 'normal',
    fill: [
      "#f2ecae",
      "#b28f34",
      "#b28f34",
      "#b28f34",
      "#f2ecae"
    ],
    fillGradientStops: [
      0.4,
      0.4,
      0.4,
      0.4,
      0.6
    ],
    strokeThickness: 3
  },

  winUpToTitle: {
    fontSize: 70,
    fontFamily: 'Utopia',
    fontWeight: 900,
    wordWrap: true,
    wordWrapWidth: 750,
    
    dropShadow: true,
    dropShadowAngle: 1.53,
    dropShadowBlur: 10,
    dropShadowDistance: 8,
    fill: [
        "#f2ecae",
        "#b28f34",
        "#b28f34",
        "#b28f34",
        "#f2ecae"
    ],
    fillGradientStops: [
        0.4,
        0.5,
        0.5,
        0.5,
        0.7
    ],
    
    lineJoin: "round",
    miterLimit: 28,
    strokeThickness: 3
  },

  segment: {
    fontFamily: 'Utopia',
    fontWeight: 'bold',
    fontSize: 38,
    dropShadow: true,
    dropShadowAngle: 1,
    dropShadowBlur: 33,
    dropShadowDistance: 0,
    fill: "white",
    lineJoin: "round",
    miterLimit: 28,
    padding: 41,
    stroke: "#603c06",
    strokeThickness: 5
  },

  bonusLabel: {
    fontFamily: 'WendyOne',
    fontSize: 44,
    fontWeight: 'bold',
    dropShadow: true,
    dropShadowAlpha: 0.5,
    dropShadowAngle: 1.7,
    dropShadowBlur: 11,
    dropShadowDistance: 3,
    fill: [
      "#97d3e6",
      "white",
      "#74919e",
      "#a7d5e2",
      "#c7e8f1"
    ],
    fillGradientStops: [
      0,
      0.5,
      0.6,
      0.7
    ],
    strokeThickness: 5
  },
  bonusLabelGold: {
    fontFamily: 'WendyOne',
    fontSize: 44,
    fontWeight: 'bold',
    dropShadow: true,
    dropShadowAngle: 1,
    dropShadowBlur: 33,
    dropShadowDistance: 0,
    fill: [
      "#fff7c6",
      "#ffe16a",
      "#fefac0",
      "#bf9900",
      "#e4b832"
    ],
    fillGradientStops: [
      0.3,
      0.5,
      0.5,
      0.5,
      0.6
    ],
    lineJoin: "round",
    miterLimit: 28,
    padding: 41,
    stroke: "#603c06",
    strokeThickness: 5
  },
  bonusWin: {
    fontFamily: 'Utopia',
    fontWeight: 'bold',
    fontSize: 44,
    fill: 'fontColourBonusWin',
  },
  bonusNoWin: {
    fontFamily: 'Utopia',
    fontWeight: 'bold',
    fontSize: 44,
    fill: 'fontColourBonusNoWin',
  },

  losePlaqueBody: {
    fontFamily: 'Utopia',
    fontWeight: 'normal',
    fontSize: 80,
    align: 'center',
    
    dropShadow: true,
    dropShadowAngle: 1.53,
    dropShadowBlur: 10,
    dropShadowDistance: 8,
    fill: [
        "#f2ecae",
        "#b28f34",
        "#b28f34",
        "#b28f34",
        "#f2ecae"
    ],
    fillGradientStops: [
        0.4,
        0.5,
        0.5,
        0.5,
        0.7
    ],
    
    lineJoin: "round",
    miterLimit: 28,
    strokeThickness: 3
  },
  winPlaqueBody: {
    fontFamily: 'Utopia',
    fontWeight: 'bold',
    fontSize: 48,
    align: 'center',
    
    dropShadow: true,
    dropShadowAngle: 1.53,
    dropShadowBlur: 4,
    dropShadowDistance: 4,
    fill: [
        "#f2ecae",
        "#b28f34",
        "#b28f34",
        "#b28f34",
        "#f2ecae"
    ],
    fillGradientStops: [
        0.4,
        0.5,
        0.5,
        0.5,
        0.7
    ],
    
    lineJoin: "round",
    miterLimit: 28,
    strokeThickness: 3
  },
  winPlaqueValue: {
    fontFamily: 'Utopia',
    fontWeight: 'normal',
    fontSize: 170,
    
    dropShadow: true,
    dropShadowAngle: 1.53,
    dropShadowBlur: 10,
    dropShadowDistance: 8,
    fill: [
        "#f2ecae",
        "#b28f34",
        "#b28f34",
        "#b28f34",
        "#f2ecae"
    ],
    fillGradientStops: [
        0.4,
        0.5,
        0.5,
        0.5,
        0.7
    ],
    
    lineJoin: "round",
    miterLimit: 28,
    strokeThickness: 3
  },

  winNoPlaqueBody: {
    fontFamily: 'Utopia',
    fontWeight: 'bold',
    fontSize: 60,
    align: 'center',
    
    dropShadow: true,
    dropShadowAngle: 1.53,
    dropShadowBlur: 8,
    dropShadowDistance: 2,
    fill: [
        "#f2ecae",
        "#b28f34",
        "#b28f34",
        "#b28f34",
        "#f2ecae"
    ],
    fillGradientStops: [
        0.4,
        0.5,
        0.5,
        0.5,
        0.7
    ],
    
    lineJoin: "round",
    miterLimit: 28,
    strokeThickness: 4
  },
  winNoPlaqueValue: {
    fontFamily: 'Utopia',
    fontWeight: 'normal',
    fontSize: 170,
    
    dropShadow: true,
    dropShadowAngle: 1.53,
    dropShadowBlur: 14,
    dropShadowDistance: 2,
    fill: [
        "#f2ecae",
        "#b28f34",
        "#b28f34",
        "#b28f34",
        "#f2ecae"
    ],
    fillGradientStops: [
        0.4,
        0.5,
        0.5,
        0.5,
        0.7
    ],
    
    lineJoin: "round",
    miterLimit: 28,
    strokeThickness: 5
  },

  bonusWinTitle: {
    fontFamily: 'Utopia',
    fontWeight: 'normal',
    fontSize: 70,
    
    dropShadow: true,
    dropShadowAngle: 1.53,
    dropShadowBlur: 10,
    dropShadowDistance: 8,
    fill: [
        "#f2ecae",
        "#b28f34",
        "#b28f34",
        "#b28f34",
        "#f2ecae"
    ],
    fillGradientStops: [
        0.4,
        0.5,
        0.5,
        0.5,
        0.7
    ],
    
    lineJoin: "round",
    miterLimit: 28,
    strokeThickness: 3
  },

  bonusWinValue: {
    fontFamily: 'Utopia',
    fontWeight: 'normal',
    fontSize: 80,
    
    dropShadow: true,
    dropShadowAngle: 1.53,
    dropShadowBlur: 10,
    dropShadowDistance: 8,
    fill: [
        "#f2ecae",
        "#b28f34",
        "#b28f34",
        "#b28f34",
        "#f2ecae"
    ],
    fillGradientStops: [
        0.4,
        0.5,
        0.5,
        0.5,
        0.7
    ],
    
    lineJoin: "round",
    miterLimit: 28,
    strokeThickness: 3
  },

  bonusInfo: {
    fontFamily: 'Utopia',
    fontWeight: 'normal',
    fontSize: 30,
    
    dropShadow: true,
    dropShadowAngle: 1.7,
    dropShadowBlur: 5,
    dropShadowDistance: 2,
    
    dropShadowColor: "black",
    fill: [
        "#f2ecae",
        "#b28f34",
        "#b28f34",
        "#b28f34",
        "#f2ecae"
    ],
    fillGradientStops: [
        0.4,
        0.5,
        0.5,
        0.5,
        0.7
    ],
    
    lineJoin: "round",
    miterLimit: 28,
    strokeThickness: 3
  },

  mainButtonEnabled: {
    fontFamily: 'Franklin Gothic',
    fontWeight: 'bold',
    fontSize: 38,
    //fill: 'fontColourMainButtonEnabled',
    fill: "#122d26",
    padding: 10,
    maxWidth: 200,

    wordWrap: true,
    wordWrapWidth: 700,

    dropShadow: true,
    dropShadowBlur: 8,
    dropShadowAngle: -2,
    dropShadowColor: "#ede399",
    dropShadowDistance: 1,
    stroke: "#ede399",
    strokeThickness: 1
  },
  mainButtonDisabled: {
    fontFamily: 'Franklin Gothic',
    fontWeight: 'bold',
    fontSize: 38,
    fill: 'fontColourMainButtonDisabled',
    padding: 10,
    maxWidth: 200,
    wordWrap: true,
    wordWrapWidth: 700,
  },
  mainButtonOver: {
    fontFamily: 'Franklin Gothic',
    fontWeight: 'bold',
    fontSize: 38,
    fill: 'fontColourMainButtonOver',
    padding: 10,
    maxWidth: 200,
    wordWrap: true,
    wordWrapWidth: 700,
    
    dropShadow: true,
    dropShadowBlur: 8,
    dropShadowAngle: -2,
    dropShadowColor: "#ede399",
    dropShadowDistance: 1,
    stroke: "#ede399",
    strokeThickness: 1
  },
  mainButtonPressed: {
    fontFamily: 'Franklin Gothic',
    fontWeight: 'bold',
    fontSize: 40,
    fill: 'fontColourMainButtonPressed',
    padding: 10,
    maxWidth: 200,
    wordWrap: true,
    wordWrapWidth: 700,
    
    dropShadow: true,
    dropShadowBlur: 8,
    dropShadowAngle: -2,
    dropShadowColor: "#ede399",
    dropShadowDistance: 1,
    stroke: "#ede399",
    strokeThickness: 1
  },

  tutorialOKButtonEnabled: {
    fontFamily: 'Franklin Gothic',
    fontWeight: 'bold',
    fontSize: 38,
    //fill: 'fontColourTutorialOKButtonEnabled',
    fill: "#122d26",
    padding: 10,
    
    dropShadow: true,
    dropShadowBlur: 8,
    dropShadowAngle: -2,
    dropShadowColor: "#ede399",
    dropShadowDistance: 1,
    stroke: "#ede399",
    strokeThickness: 1
  },

  tutorialOKButtonDisabled: {
    fontFamily: 'Franklin Gothic',
    fontWeight: 'bold',
    fontSize: 38,
    //fill: 'fontColourTutorialOKButtonDisabled',
    stroke: "#ede399",
    padding: 10,
    
    dropShadow: true,
    dropShadowBlur: 8,
    dropShadowAngle: -2,
    dropShadowColor: "#ede399",
    dropShadowDistance: 1,
    strokeThickness: 1
  },

  tutorialOKButtonOver: {
    fontFamily: 'Franklin Gothic',
    fontWeight: 'bold',
    fontSize: 38,
    fill: 'fontColourMainButtonOver',
    //fill: 'fontColourTutorialOKButtonOver',
    padding: 10,
    
    dropShadow: true,
    dropShadowBlur: 8,
    dropShadowAngle: -2,
    dropShadowColor: "#ede399",
    dropShadowDistance: 1,
    stroke: "#ede399",
    strokeThickness: 1
  },

  tutorialOKButtonPressed: {
    fontFamily: 'Franklin Gothic',
    fontWeight: 'bold',
    fontSize: 40,
    fill: 'fontColourMainButtonPressed',
    //fill: 'fontColourTutorialOKButtonPressed',
    padding: 10,
    
    dropShadow: true,
    dropShadowBlur: 8,
    dropShadowAngle: -2,
    dropShadowColor: "#ede399",
    dropShadowDistance: 1,
    stroke: "#ede399",
    strokeThickness: 1
  },

  howToPlayTitle: {
    fontFamily: 'Utopia',
    fontWeight: 'bold',
    fontSize: 45,
    
    dropShadow: true,
    dropShadowAngle: 1.53,
    dropShadowBlur: 5,
    dropShadowDistance: 4,
    fill: [
        "#f2ecae",
        "#b28f34",
        "#b28f34",
        "#b28f34",
        "#f2ecae"
    ],
    fillGradientStops: [
        0.4,
        0.5,
        0.5,
        0.5,
        0.7
    ],
    
    lineJoin: "round",
    miterLimit: 28,
    strokeThickness: 3
  },

  howToPlayText: {
    fontFamily: 'Utopia',
    fontWeight: 'normal',
    fontSize: 30,
    
    dropShadow: true,
    dropShadowAngle: 1.53,
    dropShadowBlur: 5,
    dropShadowDistance: 2,
    fill: [
        "#f2ecae",
        "#b28f34",
        "#b28f34",
        "#b28f34",
        "#f2ecae"
    ],
    fillGradientStops: [
        0.4,
        0.5,
        0.5,
        0.5,
        0.7
    ],
    
    lineJoin: "round",
    miterLimit: 28,
    strokeThickness: 3
  },
  howToPlayTextPort: {
    fontFamily: 'Utopia',
    fontWeight: 'normal',
    fontSize: 25,
    
    dropShadow: true,
    dropShadowAngle: 1.53,
    dropShadowBlur: 5,
    dropShadowDistance: 2,
    fill: [
        "#f2ecae",
        "#b28f34",
        "#b28f34",
        "#b28f34",
        "#f2ecae"
    ],
    fillGradientStops: [
        0.4,
        0.5,
        0.5,
        0.5,
        0.7
    ],
    
    lineJoin: "round",
    miterLimit: 28,
    strokeThickness: 3
  },

  errorMessage: {
    fontFamily: 'Utopia',
    fontWeight: 'normal',
    fontSize: 33,
    align: 'center',
    
    dropShadow: true,
    dropShadowAngle: 1.53,
    dropShadowBlur: 10,
    dropShadowDistance: 2,
    fill: [
        "#f2ecae",
        "#b28f34",
        "#b28f34",
        "#b28f34",
        "#f2ecae"
    ],
    fillGradientStops: [
        0.4,
        0.5,
        0.5,
        0.5,
        0.7
    ],
    
    lineJoin: "round",
    miterLimit: 28,
    strokeThickness: 3
  },
  errorButtonEnabled: {
    fontFamily: 'Franklin Gothic',
    fontWeight: 'bold',
    fontSize: 38,
    fill: "#122d26",
    padding: 10,
    
    dropShadow: true,
    dropShadowBlur: 8,
    dropShadowAngle: -2,
    dropShadowColor: "#ede399",
    dropShadowDistance: 1,
    stroke: "#ede399",
    strokeThickness: 1
  },
  errorButtonOver: {
    fontFamily: 'Franklin Gothic',
    fontWeight: 'bold',
    fontSize: 38,
    fill: 'fontColourMainButtonOver',
    padding: 10,
    
    dropShadow: true,
    dropShadowBlur: 8,
    dropShadowAngle: -2,
    dropShadowColor: "#ede399",
    dropShadowDistance: 1,
    stroke: "#ede399",
    strokeThickness: 1
  },
  errorButtonPressed: {
    fontFamily: 'Franklin Gothic',
    fontWeight: 'bold',
    fontSize: 40,
    fill: 'fontColourMainButtonPressed',
    padding: 10,
    
    dropShadow: true,
    dropShadowBlur: 8,
    dropShadowAngle: -2,
    dropShadowColor: "#ede399",
    dropShadowDistance: 1,
    stroke: "#ede399",
    strokeThickness: 1
  },
});