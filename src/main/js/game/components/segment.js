define(require => {
  const PIXI = require('com/pixijs/pixi');
  const prizeData = require('skbJet/componentManchester/standardIW/prizeData');
  const SKBeInstant = require('skbJet/component/SKBeInstant/SKBeInstant');
  const textStyles = require('skbJet/componentManchester/standardIW/textStyles');
  const FittedText = require('skbJet/componentManchester/standardIW/components/fittedText');
  const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');

  const Tween = window.TweenMax;

  let arrowTexture = 'arrow';
  let xTexture = 'x';

  let wheelSegmentTexture = 'wheelSelection';
  let innerWheelSegmentTexture = 'WheelSelectionInner';
  let middleWheelSegmentTexture = 'WheelSelectionMiddle';

  let wheelSegmentTextureLose = 'wheelSelectionNonWin';
  let innerWheelSegmentTextureLose = 'wheelSelectionInnerNonWin';
  let middleWheelSegmentTextureLose = 'wheelSelectionMiddleNonWin';

  require('com/gsap/TweenMax');
  require('com/gsap/easing/EasePack');

  const TimelineMax = window.TimelineMax;

  require('com/gsap/easing/EasePack');

  class Segment extends PIXI.Container {
    constructor(data) {
      super();

      this.tempScale = 1;

      this.text = new FittedText("");
      this.sprite = new PIXI.Sprite(PIXI.Texture.EMPTY);
      this.sprite.rotation = Math.PI / 2;
      this.prize = 0;

      this.index = data.index;

      this.text.style = textStyles.parse('segment');

      this.rotation = data.rotation;
      this.pivot.x = data.pivot - data.offset;

      this.data = data.assignedData;

      this.sprite.anchor.set(0.5);
      this.text.anchor.set(0.5);

      this.playedLayer = new PIXI.Sprite(PIXI.Texture.from(wheelSegmentTexture));

      this.colorMatrix = new PIXI.filters.ColorMatrixFilter();
      this.playedLayer.filters = [this.colorMatrix];

      this.playedLayer.anchor.set(0.5);
      this.playedLayer.visible = false;

      this.addChild(
        this.playedLayer,
        this.text,
        this.sprite,
      );
    }

    update() {
      if (typeof this.data === 'string') {
        this.tempScale = 1;
        if (this.data === 'Z') {
          this.sprite.texture = PIXI.Texture.from(arrowTexture);
        } else if (this.data === 'X') {
          this.sprite.texture = PIXI.Texture.from(xTexture);
          this.sprite.scale.set(0.8,0.8);
        } else {
          if (this.data !== '0') {
            this.prize = prizeData.prizeTable[this.data];
            this.text.text = SKBeInstant.formatCurrency(this.prize).formattedAmount;
            this.text.scale.set(1);
            this.tempScale = Math.min(120 / this.text.width, 1);
          } else {
            this.sprite.texture = PIXI.Texture.from(xTexture);
            this.sprite.scale.set(0.8,0.8);
          }
        }
      }
    }

    updateTextScale(scale){
      this.text.scale.set(scale);
    }

    land(index) {

      let texture = {
        1: wheelSegmentTexture,
        2: middleWheelSegmentTexture,
        3: innerWheelSegmentTexture
      };

      let loseTexture = {
        1: wheelSegmentTextureLose,
        2: middleWheelSegmentTextureLose,
        3: innerWheelSegmentTextureLose,
      };

      let position = {
        1: {
          x: 0,
          y: 4
        },
        2: {
          x: 0,
          y: -3
        },
        3: {
          x: 18,
          y: 0
        },
      };
      let loseScale = { 
        1: {
          x: 1.1, 
          y: 1.25
        },
        2: {
          x: 1.1, 
          y: 1.2
        },
        3: {
          x: 1.1, 
          y: 1
        },
      };
      let winScale = { 
        1: {
          x: 0.9, 
          y: 0.9
        },
        2: {
          x: 1, 
          y: 1
        },
        3: {
          x: 1, 
          y: 1
        },
      };
      this.playedLayer.scale.set(1,1);

      this.flashTime = new TimelineMax({
        paused: true,
        repeat: 1,
        onComplete: () => {
          if (['Z', 'X', '0'].indexOf(this.data) === -1) {
            msgBus.publish('game.wheel.addToBonusWin', {
              amount: this.prize
            });
          }

          if (['X', '0'].indexOf(this.data) !== -1) {
            this.playedLayer.visible = false;
          }
        }
      });

      Tween.delayedCall(0.25,()=>{
      if (['X', '0'].indexOf(this.data) === -1) {

        this.playedLayer.texture = PIXI.Texture.from(texture[index]);
        this.playedLayer.visible = true;
        this.playedLayer.scale.set(winScale[index].x,winScale[index].y);
          
        this.colorMatrix.brightness(1);
        this.colorMatrix.contrast(1);
        this.playedLayer.position.set(position[index].x, position[index].y);

        this.flashTime.to(this.playedLayer, 0.10, {
          pixi: {
            brightness: 10,
            contrast: 10,
            combineCMF: true
          },
        }, 0);

        this.flashTime.to(this.playedLayer, 0.25, {
          pixi: {
            brightness: 1,
            contrast: 1,
            combineCMF: true
          }
        });


        this.flashTime.play();
      } else {
        this.playedLayer.texture = PIXI.Texture.from(loseTexture[index]);
        this.playedLayer.visible = true;
        this.playedLayer.scale.set(loseScale[index].x,loseScale[index].y);

        this.colorMatrix.brightness(1);
        this.colorMatrix.contrast(1);
        this.playedLayer.position.set(position[index].x, position[index].y);

        this.flashTime.to(this.playedLayer, 0.10, {
          pixi: {
            brightness: 10,
            contrast: 10,
            combineCMF: true
          },
        }, 0);

        this.flashTime.to(this.playedLayer, 0.25, {
          pixi: {
            brightness: 1,
            contrast: 1,
            combineCMF: true
          },
        });

        this.flashTime.play();
      }
    });
    }

    reset() {
      this.playedLayer.visible = false;
    }
  }

  return Segment;

});