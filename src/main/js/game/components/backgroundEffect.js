define(require => {

    const displayList = require('skbJet/componentManchester/standardIW/displayList');
    const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
    const PIXI = require('com/pixijs/pixi');

    const Tween = window.TweenMax;

    require('com/pixijs/pixi-particles');

    require('com/gsap/TweenMax');
    require('com/gsap/easing/EasePack');

    let bonusEmitter;
    let emitter;

    let bonusConfig = {
        "alpha": {
            "start": 1,
            "end": 0
        },
        "scale": {
            "start": 0.01,
            "end": 1,
            "minimumScaleMultiplier": 1
        },
        "color": {
            "start": "#ffffff",
            "end": "#ff0400"
        },
        "speed": {
            "start": 10,
            "end": 5,
            "minimumSpeedMultiplier": 10
        },
        "acceleration": {
            "x": 0,
            "y": 0
        },
        "maxSpeed": 10,
        "startRotation": {
            "min": 270,
            "max": 270
        },
        "noRotation": false,
        "rotationSpeed": {
            "min": 1,
            "max": 100
        },
        "lifetime": {
            "min": 0.1,
            "max": 30
        },
        "blendMode": "add",
        "extraData": {
            "path": "cos(x/50) * (2 * (sqrt(x) / 2))"
        },
        "frequency": 0.1,
        "emitterLifetime": -1,
        "maxParticles": 1000,
        "pos": {
            "x": 0,
            "y": 0
        },
        "addAtBack": true,
        "spawnType": "rect",
        "spawnRect": {
            "x": -1000,
            "y": 0,
            "w": 2000,
            "h": 0
        }
    };


    function init() {
        let background = displayList.background;
        let container = new PIXI.Container();

        container.position.set(410, 1130);

        bonusEmitter = new PIXI.particles.Emitter(
            container,
            [
                PIXI.Texture.from('sparkle1'),
                PIXI.Texture.from('sparkle1-1'),
                PIXI.Texture.from('sparkle2'),
                PIXI.Texture.from('sparkle2-1'),
            ],
            bonusConfig
        );

        bonusEmitter.autoUpdate = true;
        bonusEmitter.emit = false;
        background.addChild(container);

        buttonHitAreaSetup();
    }

    function transformToGreyScale() {

        Tween.delayedCall(0.5,()=>{
            if(bonusEmitter.emit) {
                Tween.to(displayList.background, 0.25, {
                    pixi: {
                        saturation:0,
                    },
                });
            } else {
                Tween.to(displayList.background, 0.25, {
                    pixi: {
                        saturation:1,
                    },
                });
            }
        });

        bonusEmitter.emit = !bonusEmitter.emit;
        emitter.emit = !emitter.emit;
    }

    function buttonHitAreaSetup() {
        const square = {x: -42, y: -44, w: 82, h: 80};
        const rectangle = {x: -123, y: -44, w: 80, h: 246};
        const verticalRectangle = {x: -46, y: -118, w: 231, h: 89};

        displayList.helpButton.hitArea = createBoxHitArea(square);
        displayList.homeButton.hitArea = createBoxHitArea(square);
        displayList.exitButton.hitArea = createBoxHitArea(rectangle);
        displayList.playAgainButton.hitArea = createBoxHitArea(rectangle);
        displayList.tryAgainButton.hitArea = createBoxHitArea(rectangle);
        displayList.buyButton.hitArea = createBoxHitArea(rectangle);
        displayList.tryButton.hitArea = createBoxHitArea(rectangle);
        displayList.moveToMoneyButton.hitArea = createBoxHitArea(rectangle);
        displayList.retryButton.hitArea = createBoxHitArea(rectangle);
        
        displayList.autoPlayStartButton.hitArea = createBoxHitArea(rectangle);
        displayList.autoPlayStopButton.hitArea = createBoxHitArea(rectangle);
        
        displayList.ticketCostDownButton.hitArea = createBoxHitArea(square);
        displayList.ticketCostUpButton.hitArea = createBoxHitArea(square);
        
        displayList.audioButton.hitArea = createBoxHitArea(square);
        displayList.howToPlayNext.hitArea = createBoxHitArea(verticalRectangle);
        displayList.howToPlayPrevious.hitArea = createBoxHitArea(verticalRectangle);
        displayList.howToPlayClose.hitArea = createBoxHitArea(rectangle);
        
        displayList.bonusSpinButton.hitArea = createCircleHitArea(32,60);
    }

    function createBoxHitArea({x,y,w,h}) {
        let debug = false;
        let graphic = new PIXI.Graphics();
        graphic.beginFill(0xffffff);
        graphic.drawRect(x,y,w,h);
        graphic.endFill();
        if(debug) {
            this.addChild(graphic);
        }
        return new PIXI.Rectangle(
            graphic.graphicsData[0].shape.x,
            graphic.graphicsData[0].shape.y,
            graphic.graphicsData[0].shape.height,
            graphic.graphicsData[0].shape.width
        );
    }

    function createCircleHitArea(segmentSize, wheelRadius) {
        let _wheelPins = [];
        function degToRad(degrees) {
            return degrees * 0.0174532925;
        }
        for (let i = 0; i < segmentSize; i++) {
            _wheelPins[i] = new PIXI.Point(
                wheelRadius * Math.cos(degToRad(360 / segmentSize * i)),
                wheelRadius * Math.sin(degToRad(360 / segmentSize * i))
            );
        }
        return new PIXI.Polygon(_wheelPins);
    }

    msgBus.subscribe('game.background.transformToGreyScale', transformToGreyScale);

    return {
        init
    };
});