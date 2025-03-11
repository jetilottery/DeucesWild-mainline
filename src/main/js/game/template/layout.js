"use strict";

define({
    _BASE_APP: {
        children: ['background', 'logo', 'gameAreas', 'particles', 'winUpToLabel', 'winUpTo', 'transitionContainer', 'endGameNoPlaqueContainer']
    },

    /*
     * BACKGROUND
     */
    background: {
        type: 'sprite',
        landscape: {
            texture: 'landscape_background'
        },
        portrait: {
            texture: 'portrait_background'
        }
    },
    transitionContainer: {
        type: 'container'
    },
    gameAreas: {
        type: 'container',
        children: ['symbolsBackground', 'bonusBackground', 'bonusContainer', 'bonusSymbolHoldingArea']
    },
    bonusSymbolHoldingArea: {
        type: 'container'
    },
    symbolsBackground: {
        type: 'sprite',
        children: ['infoBar', 'pointArraySpineLayer', 'pointArray'],
        landscape: {
            texture: 'base-large',
            x: '610',
            y: '103'
        },
        portrait: {
            texture: 'base-large',
            x: '20',
            y: '430'
        }
    },
    infoBar: {
        type: 'sprite',
        texture: 'base',
        children: ['infoBarCard', 'infoBarText'],
        x: 31,
        y: -30
    },
    infoBarCard: {
        type: 'sprite',
        texture: 'card',
        x: 90,
        y: -29
    },
    infoBarText: {
        type: 'text',
        string: 'infoBarText',
        style: 'infoBar',
        fontSize: 30,
        align: 'center',
        x: 203,
        y: 26,
        wordWrap: false,
        maxWidth: 510,
        anchor: {
            x: 0.05,
            y: 0.5
        }
    },
    particles: {
        type: 'container'
    },
    bonusContainer: {
        type: 'container',
        children: ['bonusWheelContainer', 'bonusScoreContainer'],
        landscape: {
            x: 920,
            y: 400,
            scale: 0.9
        },
        portrait: {
            x: 440,
            y: 718,
            scale: 0.85
        }
    },
    bonusScoreContainer: {
        type: 'container',
        children: ['totalWinBackground'],
        landscape: {
            x: -680,
            y: 110,
            scale: 0.8
        },
        portrait: {
            x: 30,
            y: 165,
            scale: 1
        }
    },
    totalWinBackground: {
        type: 'sprite',
        children: ['totalWinLabel', 'totalWinValue'],
        anchor: 0.5,
        landscape: {
            x: 0,
            y: -103
        },
        portrait: {
            scale: 0.8,
            x: 180,
            y: -685
        }
    },
    totalWinLabel: {
        type: 'text',
        style: 'bonusWinTitle',
        string: 'bonusWin',
        y: -67,
        anchor: 0.5,
        maxWidth: 400
    },
    totalWinValue: {
        type: 'text',
        style: 'bonusWinValue',
        anchor: 0.5,
        maxWidth: 400,
        y: 7
    },
    bonusWheelContainer: {
        type: 'container',
        children: ['bonusWheelFXLower', 'bonusWheelBottomBase', 'bonusWheelMiddleBase', 'bonusWheelTopBase', 'bonusSpinButtonContainer', 'bonusWheelFXUpper', 'bonusWheelRespinTextContainer', 'bonusArrow'],
        landscape: {
            x: 0,
            y: 0,
            scale: 1
        },
        portrait: {
            x: -20,
            y: -10,
            scale: 1
        }
    },
    bonusWheelRespinTextContainer: {
        children: ['bonusWheelRespinText'],
        type: 'container'
    },
    bonusWheelRespinText: {
        type: 'text',
        style: 'bonusWinValue',
        string: 'respin',
        anchor: 0.5,
        maxWidth: 400
    },
    bonusWheelFXLower: {
        type: 'container',
        landscape: {
            scale: 1.1
        }
    },
    bonusWheelFXUpper: {
        type: 'container',
        scale: 1.15,
        x: 3,
        y: 3
    },
    bonusArrow: {
        type: 'sprite',
        texture: 'selectorArrow',
        x: -490,
        y: -87
    },
    bonusWheelTopGem: {
        type: 'sprite',
        texture: 'ruby-particle',
        anchor: 0.5
    },
    bonusWheelTopRim: {
        type: 'sprite',
        texture: 'wheelInnerCircleRim',
        anchor: 0.5
    },
    bonusWheelTopShadow: {
        type: 'sprite',
        texture: 'small_wheel_shadow',
        anchor: 0.5,
        scale: 2.55
    },
    bonusWheelTopDiv: {
        type: 'sprite',
        texture: 'wheelInnerCircleDivs',
        anchor: 0.5
    },
    bonusWheelTopBackground: {
        type: 'sprite',
        children: ['bonusWheelTopDiv'],
        texture: 'wheelInnerCircle',
        anchor: 0.5
    },
    bonusWheelTopBase: {
        type: 'container',
        children: ['bonusWheelTopBackground', 'bonusWheelTopRim', 'bonusWheelTopShadow', 'bonusWheelTopGem'],
        anchor: 0.5
    },
    bonusWheelMiddleRim: {
        type: 'sprite',
        texture: 'wheelMiddleCircleRim',
        anchor: 0.5,
        scale: 1.01
    },
    bonusWheelMiddleShadow: {
        type: 'sprite',
        texture: 'medium_wheel_shadow',
        anchor: 0.5,
        scale: 1.55
    },
    bonusWheelMiddleDiv: {
        type: 'sprite',
        texture: 'wheelMiddleCircleDivs',
        anchor: 0.5,
        scale: 0.85
    },
    bonusWheelMiddleBackground: {
        type: 'sprite',
        children: ['bonusWheelMiddleDiv'],
        texture: 'wheelMiddleCircle',
        anchor: 0.5
    },
    bonusWheelMiddleBase: {
        type: 'container',
        children: ['bonusWheelMiddleBackground', 'bonusWheelMiddleRim', 'bonusWheelMiddleShadow'],
        anchor: 0.5
    },
    bonusWheelBottomRim: {
        type: 'sprite',
        texture: 'wheelOuterCircleRim',
        anchor: 0.5
    },
    bonusWheelBottomDiv: {
        type: 'sprite',
        texture: 'wheelOuterCircleDivs',
        anchor: 0.5
    },
    bonusWheelBottomBackground: {
        type: 'sprite',
        children: ['bonusWheelBottomDiv'],
        texture: 'wheelOuterCircle',
        anchor: 0.5
    },
    bonusWheelBottomBase: {
        type: 'container',
        children: ['bonusWheelBottomBackground', 'bonusWheelBottomRim'],
        anchor: 0.5
    },
    bonusSpinButtonContainer: {
        type: 'container',
        children: ['bonusSpinButton', 'bonusSpinButtonAnim'],
        portrait: {
            x: -3,
            y: 440
        },
        landscape: {
            x: 473,
            y: 0
        }
    },
    bonusSpinButton: {
        type: 'button',
        textures: {
            enabled: 'spinButtonEnabled',
            over: 'spinButtonOver',
            pressed: 'spinButtonPressed',
            disabled: 'spinButtonDisabled'
        }
    },
    bonusSpinButtonAnim: {
        type: 'container'
    },
    bonusBackground: {
        type: 'container',
        children: ['bonusSpineContainer', 'bonusPointContainer', 'bonusInfoText'],
        landscape: {
            x: '130',
            y: '463',
            scale: 1
        },
        portrait: {
            x: '260',
            y: '230',
            scale: 0.8
        }
    },
    bonusInfoText: {
        type: 'text',
        string: 'bonusInfo',
        style: 'bonusInfo',
        anchor: 0.5,
        x: 180,
        y: 160,
        maxWidth: 450
    },
    bonusSpineContainer: {
        type: 'container',
        scale: {
            x: 1.3
        },
        x: -55
    },
    bonusPointContainer: {
        type: 'container',
        x: 140,
        y: -10
    },

    /*
     * LOGO
     */
    logo: {
        type: 'container',
        children: ['logoSpine', 'logoSprite'],
        landscape: {
            x: 320,
            y: 230,
            scale: 0.8
        },
        portrait: {
            x: 240,
            y: 200,
            scale: 0.9
        }
    },
    logoSprite: {
        type: 'spine',
        landscape: {
            texture: 'LOGO',
            x: -300,
            y: -200
        },
        portrait: {
            texture: 'LOGO_Horizontal',
            x: -230,
            y: -180
        }
    },
    logoSpine: {
        type: 'container',
        landscape: {
            x: 400,
            y: 100
        },
        portrait: {
            x: 200,
            y: 450
        }
    },

    /*
     * WIN UP TO
     */
    winUpToLabel: {
        type: 'text',
        style: 'winUpToTitle',
        string: 'winUpTo',
        anchor: 0.5,
        landscape: {
            wordWrap: true,
            wordWrapWidth: 1000,
            x: 320,
            y: 370,
            scale: 0.7
        },
        portrait: {
            wordWrap: true,
            wordWrapWidth: 1000,
            x: 290,
            y: 210,
            scale: 0.65
        }
    },
    winUpTo: {
        type: 'container',
        children: ['winUpToIn', 'winUpToOut'],
        landscape: {
            x: 315,
            y: 432,
            scale: 0.7
        },
        portrait: {
            x: 540,
            y: 210,
            scale: 0.65
        }
    },
    winUpToIn: {
        type: 'container',
        children: ['winUpToInText']
    },
    winUpToInText: {
        type: 'text',
        style: 'winUpTo',
        string: 'winUpTo',
        anchor: 0.5,
        maxWidth: 400
    },
    winUpToOut: {
        type: 'container',
        children: ['winUpToOutText']
    },
    winUpToOutText: {
        type: 'text',
        style: 'winUpTo',
        string: 'winUpTo',
        anchor: 0.5,
        maxWidth: 400
    },

    /*
     * PLAYER PICK POINTS
     */
    pointArray: {
        type: 'container',
        children: ['pickPoint1', 'pickPoint2', 'pickPoint3', 'pickPoint4', 'pickPoint5', 'pickPoint6', 'pickPoint7', 'pickPoint8', 'pickPoint9', 'pickPoint10', 'pickPoint11', 'pickPoint12', 'pickPoint13', 'pickPoint14', 'pickPoint15', 'pickPoint16', 'pickPoint17', 'pickPoint18', 'pickPoint19', 'pickPoint20'],
        landscape: {
            x: 0,
            y: -30
        },
        portrait: {
            x: 0,
            y: -30
        }
    },
    pointArraySpineLayer: {
        type: 'container',
        landscape: {
            x: 0,
            y: -35
        },
        portrait: {
            x: 0,
            y: -35
        }
    },
    pickPoint1: {
        type: 'container',
        x: 85,
        y: 123,
        scale: 1
    },
    pickPoint2: {
        type: 'container',
        x: 235,
        y: 123,
        scale: 1
    },
    pickPoint3: {
        type: 'container',
        x: 385,
        y: 123,
        scale: 1
    },
    pickPoint4: {
        type: 'container',
        x: 535,
        y: 123,
        scale: 1
    },
    pickPoint5: {
        type: 'container',
        x: 685,
        y: 123,
        scale: 1
    },
    pickPoint6: {
        type: 'container',
        x: 85,
        y: 245,
        scale: 1
    },
    pickPoint7: {
        type: 'container',
        x: 235,
        y: 245,
        scale: 1
    },
    pickPoint8: {
        type: 'container',
        x: 385,
        y: 245,
        scale: 1
    },
    pickPoint9: {
        type: 'container',
        x: 535,
        y: 245,
        scale: 1
    },
    pickPoint10: {
        type: 'container',
        x: 685,
        y: 245,
        scale: 1
    },
    pickPoint11: {
        type: 'container',
        x: 85,
        y: 369,
        scale: 1
    },
    pickPoint12: {
        type: 'container',
        x: 235,
        y: 369,
        scale: 1
    },
    pickPoint13: {
        type: 'container',
        x: 385,
        y: 369,
        scale: 1
    },
    pickPoint14: {
        type: 'container',
        x: 535,
        y: 369,
        scale: 1
    },
    pickPoint15: {
        type: 'container',
        x: 685,
        y: 369,
        scale: 1
    },
    pickPoint16: {
        type: 'container',
        x: 85,
        y: 490,
        scale: 1
    },
    pickPoint17: {
        type: 'container',
        x: 235,
        y: 490,
        scale: 1
    },
    pickPoint18: {
        type: 'container',
        x: 385,
        y: 490,
        scale: 1
    },
    pickPoint19: {
        type: 'container',
        x: 535,
        y: 490,
        scale: 1
    },
    pickPoint20: {
        type: 'container',
        x: 685,
        y: 490,
        scale: 1
    },

    /*
     * How To Play
     */
    howToPlayBackground: {
        type: 'sprite',
        anchor: {
            x: 0.5
        },
        y: 78,
        landscape: {
            x: 720,
            texture: 'landscape_tutorialBackground'
        },
        portrait: {
            x: 405,
            texture: 'portrait_tutorialBackground'
        }
    },
    howToPlayTitle: {
        type: 'text',
        string: 'howToPlay',
        style: 'howToPlayTitle',
        align: 'center',
        maxWidth: 350,
        landscape: {
            x: 575,
            y: 140
        },
        portrait: {
            x: 255,
            y: 150
        }
    },
    versionText: {
        type: 'text',
        style: 'versionText',
        x: 35,
        landscape: {
            y: 130
        },
        portrait: {
            y: 110
        },
        alpha: 0.5
    },
    howToPlayPages: {
        type: 'container',
        children: ['howToPlayPage1', 'howToPlayPage2']
    },
    howToPlayPage1: {
        type: 'container',
        children: ['howToPlayPage1_1', 'howToPlayPage1_2', 'howToPlayPage1_3', 'howToPlayPage1_4'],
        landscape: {
            y: 10
        },
        portrait: {
            y: 40,
            x: 50
        }
    },
    howToPlayPage2: {
        type: 'container',
        children: ['howToPlayPage2_1', 'howToPlayPage2_2', 'howToPlayPage2_3', 'howToPlayPage2_4'],
        landscape: {
            y: 50
        },
        portrait: {
            y: 110,
            x: 30
        }
    },
    howToPlayPage1_1: {
        type: 'text',
        string: 'page1_line1',
        anchor: {
            x: 0,
            y: 0.5
        },
        align: 'left',
        landscape: {
            style: 'howToPlayText',
            wordWrap: true,
            x: 300,
            wordWrapWidth: 1000
        },
        portrait: {
            style: 'howToPlayTextPort',
            wordWrap: true,
            x: 205,
            wordWrapWidth: 430
        }
    },
    howToPlayPage1_2: {
        type: 'text',
        string: 'page1_line2',
        anchor: {
            x: 0,
            y: 0.5
        },
        align: 'left',
        landscape: {
            style: 'howToPlayText',
            wordWrap: true,
            x: 300,
            wordWrapWidth: 1000
        },
        portrait: {
            style: 'howToPlayTextPort',
            wordWrap: true,
            x: 205,
            wordWrapWidth: 430
        }
    },
    howToPlayPage1_3: {
        type: 'text',
        string: 'page1_line3',
        anchor: {
            x: 0,
            y: 0.5
        },
        align: 'left',
        landscape: {
            style: 'howToPlayText',
            wordWrap: true,
            x: 300,
            wordWrapWidth: 1000
        },
        portrait: {
            style: 'howToPlayTextPort',
            wordWrap: true,
            x: 205,
            wordWrapWidth: 430
        }
    },
    howToPlayPage1_4: {
        type: 'text',
        string: 'page1_line4',
        anchor: {
            x: 0,
            y: 0.5
        },
        align: 'left',
        landscape: {
            style: 'howToPlayText',
            wordWrap: true,
            x: 300,
            wordWrapWidth: 1000
        },
        portrait: {
            style: 'howToPlayTextPort',
            wordWrap: true,
            x: 205,
            wordWrapWidth: 430
        }
    },
    howToPlayPage2_1: {
        type: 'text',
        string: 'page2_line1',
        anchor: {
            x: 0,
            y: 0.5
        },
        align: 'left',
        landscape: {
            style: 'howToPlayText',
            wordWrap: true,
            x: 300,
            wordWrapWidth: 1000
        },
        portrait: {
            style: 'howToPlayTextPort',
            wordWrap: true,
            x: 225,
            wordWrapWidth: 430
        }
    },
    howToPlayPage2_2: {
        type: 'text',
        string: 'page2_line2',
        anchor: {
            x: 0,
            y: 0.5
        },
        align: 'left',
        landscape: {
            style: 'howToPlayText',
            wordWrap: true,
            x: 300,
            wordWrapWidth: 1000
        },
        portrait: {
            style: 'howToPlayTextPort',
            wordWrap: true,
            x: 225,
            wordWrapWidth: 430
        }
    },
    howToPlayPage2_3: {
        type: 'text',
        string: 'page2_line3',
        anchor: {
            x: 0,
            y: 0.5
        },
        align: 'left',
        landscape: {
            style: 'howToPlayText',
            wordWrap: true,
            x: 300,
            wordWrapWidth: 1000
        },
        portrait: {
            style: 'howToPlayTextPort',
            wordWrap: true,
            x: 225,
            wordWrapWidth: 430
        }
    },
    howToPlayPage2_4: {
        type: 'text',
        string: 'page2_line4',
        style: 'howToPlayText',
        wordWrap: true,
        anchor: {
            x: 0,
            y: 0.5
        },
        align: 'left',
        landscape: {
            style: 'howToPlayText',
            wordWrap: true,
            x: 300,
            wordWrapWidth: 1000
        },
        portrait: {
            style: 'howToPlayTextPort',
            wordWrap: true,
            x: 225,
            wordWrapWidth: 430
        }
    },
    audioButtonContainer: {
        type: 'container',
        landscape: {
            x: 68,
            y: 675
        },
        portrait: {
            x: 60,
            y: 957
        }
    },
    buyButtonAnim: {
        type: 'container',
        anchor: 0.5,
        y: 1,
        scale: {
            x: 0.93,
            y: 1
        }
    },
    tryButtonAnim: {
        type: 'sprite',
        anchor: 0.5,
        x: -10,
        y: -5
    },
    buyButton: {
        landscape: {
            x: 758
        },
        portrait: {
            x: 0
        },
        children: ['buyButtonAnim'],
        type: 'button',
        string: 'button_buy',
        textures: {
            enabled: 'mainButtonEnabled',
            over: 'mainButtonOver',
            pressed: 'mainButtonPressed',
            disabled: 'mainButtonDisabled'
        },
        style: {
            enabled: 'mainButtonEnabled',
            over: 'mainButtonOver',
            pressed: 'mainButtonPressed',
            disabled: 'mainButtonDisabled'
        }
    },
    tryButton: {
        type: 'button',
        string: 'button_try',
        textures: {
            enabled: 'mainButtonEnabled',
            over: 'mainButtonOver',
            pressed: 'mainButtonPressed',
            disabled: 'mainButtonDisabled'
        },
        style: {
            enabled: 'mainButtonEnabled',
            over: 'mainButtonOver',
            pressed: 'mainButtonPressed',
            disabled: 'mainButtonDisabled'
        }
    },
    autoPlayButton_default: {
        type: 'point',
        landscape: {
            x: 720,
            y: 700
        },
        portrait: {
            x: 405,
            y: 1100
        }
    },
    autoPlayButton_multi: {
        type: 'point',
        landscape: {
            x: 918,
            y: 700
        },
        portrait: {
            x: 405,
            y: 1100
        }
    },
    ticketSelectBarSmall: {
        type: 'container',
        landscape: {
            x: 595,
            y: 699
        },
        portrait: {
            x: 405,
            y: 1010
        },
        children: ['ticketSelectBarBG', 'ticketSelectCostValue', 'ticketCostDownButtonStatic', 'ticketCostUpButtonStatic', 'ticketCostDownButton', 'ticketCostUpButton', 'ticketCostIndicators']
    },
    ticketSelectCostValue: {
        type: 'text',
        portrait: {
            y: -7
        },
        landscape: {
            y: -7
        },
        anchor: 0.5,
        style: 'ticketSelectCostValue',
        maxWidth: 180
    },
    ticketCostDownButton: {
        type: 'button',
        portrait: {
            x: -208
        },
        landscape: {
            x: -143
        },
        textures: {
            enabled: 'minusButtonEnabled',
            disabled: 'minusButtonDisabled',
            over: 'minusButtonOver',
            pressed: 'minusButtonPressed'
        }
    },
    ticketCostUpButton: {
        type: 'button',
        portrait: {
            x: 208
        },
        landscape: {
            x: 143
        },
        textures: {
            enabled: 'plusButtonEnabled',
            disabled: 'plusButtonDisabled',
            over: 'plusButtonOver',
            pressed: 'plusButtonPressed'
        }
    },
    ticketCostDownButtonStatic: {
        type: 'sprite',
        anchor: 0.5,
        portrait: {
            x: -208
        },
        landscape: {
            x: -143
        },
        y: 4,
        texture: 'minusButtonDisabled'
    },
    ticketCostUpButtonStatic: {
        type: 'sprite',
        anchor: 0.5,
        portrait: {
            x: 208
        },
        landscape: {
            x: 143
        },
        y: 4,
        texture: 'plusButtonDisabled'
    },
    buttonBar: {
        type: 'container',
        landscape: {
            x: 0,
            y: 649
        },
        portrait: {
            x: 0,
            y: 1050
        },
        children: ['helpButtonStatic', 'helpButton', 'homeButtonStatic', 'homeButton', 'exitButton', 'playAgainButton', 'tryAgainButton', 'buyButton', 'tryButton', 'tryButtonAnim', 'moveToMoneyButton', 'retryButton']
    },
    footerContainer: {
        type: 'container',
        children: ['footerBG', 'balanceMeter', 'ticketCostMeter', 'winMeter', 'divider_1_3', 'divider_2_3', 'divider_1_2'],
        landscape: {
            y: 761
        },
        portrait: {
            y: 1140
        }
    },
    footerBG: {
        type: 'sprite',
        landscape: {
            texture: 'landscape_footerBar',
            y: 5
        },
        portrait: {
            texture: 'portrait_footerBar',
            y: 5
        }
    },
    errorBackground: {
        type: 'sprite',
        anchor: {
            x: 0.5
        },
        scale: {
            x: 1,
            y: 1.15
        },
        landscape: {
            x: 720,
            y: 140,
            texture: 'landscape_timeOutMessageBackground'
        },
        portrait: {
            x: 405,
            y: 365,
            texture: 'portrait_timeOutMessageBackground'
        }
    },
    timeoutContinue: {
        type: 'button',
        landscape: {
            x: 850,
            y: 590
        },
        portrait: {
            x: 540,
            y: 820
        },
        textures: {
            enabled: 'mainButtonEnabled',
            over: 'mainButtonOver',
            pressed: 'mainButtonPressed'
        },
        style: {
            enabled: 'mainButtonEnabled',
            over: 'mainButtonOver',
            pressed: 'mainButtonPressed'
        }
    },
    timeoutExit: {
        type: 'button',
        landscape: {
            x: 590,
            y: 590
        },
        portrait: {
            x: 270,
            y: 820
        },
        textures: {
            enabled: 'mainButtonEnabled',
            over: 'mainButtonOver',
            pressed: 'mainButtonPressed'
        },
        style: {
            enabled: 'mainButtonEnabled',
            over: 'mainButtonOver',
            pressed: 'mainButtonPressed'
        }
    },
    errorExit: {
        type: 'button',
        string: 'button_exit',
        landscape: {
            x: 720,
            y: 590
        },
        portrait: {
            x: 405,
            y: 820
        },
        textures: {
            enabled: 'mainButtonEnabled',
            over: 'mainButtonOver',
            pressed: 'mainButtonPressed'
        },
        style: {
            enabled: 'mainButtonEnabled',
            over: 'mainButtonOver',
            pressed: 'mainButtonPressed'
        }
    },

    /*
     * PLAQUES
     */
    winPlaqueBG: {
        type: 'sprite',
        anchor: 0.5,
        landscape: {
            texture: 'landscape_endOfGameMessageWinBackground'
        },
        portrait: {
            texture: 'portrait_endOfGameMessageWinBackground'
        },
        y: -30
    },
    winPlaqueMessage: {
        type: 'text',
        string: 'message_win',
        style: 'winPlaqueBody',
        y: -130,
        anchor: 0.5,
        maxWidth: 700
    },
    winPlaqueValue: {
        type: 'text',
        style: 'winPlaqueValue',
        y: 30,
        anchor: 0.5,
        maxWidth: 700
    },
    winPlaqueCloseButton: {
        type: 'button',
        string: 'button_ok',
        y: 160,
        textures: {
            enabled: 'mainButtonEnabled',
            over: 'mainButtonOver',
            pressed: 'mainButtonPressed',
            disabled: 'mainButtonDisabled'
        },
        style: {
            enabled: 'mainButtonEnabled',
            over: 'mainButtonOver',
            pressed: 'mainButtonPressed',
            disabled: 'mainButtonDisabled'
        },
        visible: false
    },
    noWinPlaqueValue: {
        type: 'text',
        style: 'winPlaqueValue',
        y: 30,
        anchor: 0.5,
        maxWidth: 700
    },
    losePlaqueBG: {
        type: 'sprite',
        texture: 'landscape_endOfGameMessageNoWinBackground',
        anchor: 0.5,
        y: -20,
        portrait: {
            scale: {
                x: 0.86
            }
        }
    },
    losePlaqueMessage: {
        type: 'text',
        string: 'message_nonWin',
        style: 'losePlaqueBody',
        anchor: 0.5,
        align: 'center',
        y: -30,
        maxWidth: 800
    },
    losePlaqueCloseButton: {
        type: 'button',
        string: 'button_ok',
        y: 160,
        textures: {
            enabled: 'mainButtonEnabled',
            over: 'mainButtonOver',
            pressed: 'mainButtonPressed',
            disabled: 'mainButtonDisabled'
        },
        style: {
            enabled: 'mainButtonEnabled',
            over: 'mainButtonOver',
            pressed: 'mainButtonPressed',
            disabled: 'mainButtonDisabled'
        },
        visible: false
    },
    endGameWinNoPlaque: {
        type: 'container',
        children: ['endGameWinNoPlaqueSpineContainer', 'endGameNoPlaqueContainerBackground', 'endGameWinNoPlaqueValue'],
        portrait: {
            x: 410,
            y: 600
        },
        landscape: {
            x: 720,
            y: 410
        }
    },
    endGameNoPlaqueContainer: {
        type: 'container',
        children: ['endGameNoPlaqueContainerClick', 'endGameWinNoPlaque']
    },
    endGameNoPlaqueContainerClick: {
        type: 'pressable',
        children: ['endGameNoPlaqueContainerClickGraphic']
    },
    endGameNoPlaqueContainerClickGraphic: {
        type: 'rectangle',
        alpha: 0.6,
        landscape: {
            width: 1440,
            height: 810,
            fill: 0x000000
        },
        portrait: {
            width: 810,
            height: 1440,
            fill: 0x000000
        }
    },
    endGameNoPlaqueContainerBackground: {
        type: 'sprite',
        texture: 'landscape_endOfGameMessageNoWinBackground',
        anchor: 0.5,
        y: -20,
        portrait: {
            scale: {
                x: 0.86
            }
        }
    },
    endGameWinNoPlaqueSpineContainer: {
        type: 'container',
        alpha: 0
    },
    endGameWinNoPlaqueValue: {
        children: ['endGameWinNoPlaqueLabel'],
        type: 'text',
        style: 'winNoPlaqueValue',
        anchor: 0.5,
        align: 'center',
        y: 50,
        maxWidth: 750
    },
    endGameWinNoPlaqueLabel: {
        type: 'text',
        style: 'winNoPlaqueBody',
        string: 'message_win',
        anchor: 0.5,
        align: 'center',
        y: -170,
        scale: 0.8,
        maxWidth: 700
    },
    //Footer
    ticketCostLabel: {
        type: 'text',
        string: 'footer_ticketCost',
        anchor: 0.5,
        portrait: {
            y: 70,
            anchor: {
                x: 0.5
            },
            maxWidth: 260
        },
        landscape: {
            y: 0,
            anchor: {
                x: 0
            }
        },
        style: 'footerLabel'
    },
    balanceLabel: {
        type: 'text',
        string: 'footer_balance',
        anchor: 0.5,
        portrait: {
            y: 70,
            anchor: {
                x: 0.5
            },
            maxWidth: 260
        },
        landscape: {
            y: 0,
            anchor: {
                x: 0
            }
        },
        style: 'footerLabel'
    },
    winLabel: {
        type: 'text',
        string: 'footer_win',
        anchor: 0.5,
        portrait: {
            y: 70,
            anchor: {
                x: 0.5
            },
            maxWidth: 260
        },
        landscape: {
            y: 0,
            anchor: {
                x: 0
            }
        },
        style: 'footerLabel'
    }
});