define(require => {
    const PIXI = require('com/pixijs/pixi');
    const Pressable = require('skbJet/componentManchester/standardIW/components/pressable');
    const autoPlay = require('skbJet/componentManchester/standardIW/autoPlay');
    const SKBeInstant = require('skbJet/component/SKBeInstant/SKBeInstant');
    const textStyles = require('skbJet/componentManchester/standardIW/textStyles');
    const orientation = require('skbJet/componentManchester/standardIW/orientation');
    const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
    const displayList = require('skbJet/componentManchester/standardIW/displayList');
    const audio = require('skbJet/componentManchester/standardIW/audio');
    const gameConfig = require('skbJet/componentManchester/standardIW/gameConfig');

    require('com/gsap/TweenLite');
    require('com/gsap/easing/EasePack');

    const Tween = window.TweenLite;

    const symbolTextureMap = {
        K: '3',
        L: '4',
        M: '5',
        N: '6',
        O: '7',
        P: '8',
        Q: '9',
        R: '10',
        S: 'j',
        T: 'q',
        U: 'k',
        V: 'a',
        W: 'bonus',
        X: 'win_3',
        Y: 'win_2',
        Z: 'win_1'
    };

    //Name reference for Cover's animations
    const coverNameArray = [
        'heart','spade'  ,'heart','spade'  ,'heart',
        'club' ,'diamond','club' ,'diamond','club',
        'heart','spade'  ,'heart','spade'  ,'heart',
        'club' ,'diamond','club' ,'diamond','club'
    ];

    class PickPoint extends Pressable {
        constructor(parent, reveal ,spine, bonusPoints) {
            super();

            this.spine = spine;
            this.revealSpine = reveal;
            this.bonusPoints = bonusPoints;

            this.spine.interactive = false;
            this.spine.interactiveChildren = false;

            this.revealSpine.interactive = false;
            this.revealSpine.interactiveChildren = false;

            this.spineLayer = displayList.pointArraySpineLayer;

            // Create all the empty sprites
            this.symbolAnim = new PIXI.extras.AnimatedSprite([PIXI.Texture.EMPTY]);
            this.symbolAnim.loop = false;
            this.symbolAnim.visible = false;

            this.prizeValue = new PIXI.Text('');
            this.prizeValue.style = textStyles.parse(orientation.get() === orientation.LANDSCAPE ? 'prizeValueNoWin' : 'prizeValueNoWinPort');
            this.prizeValue.y = 40;
            //this.prizeValue.maxWidth = 145;

            this.parent = parent;
            // Center everything
            this.symbolAnim.anchor.set(0.5);
            this.prizeValue.anchor.set(0.5);

            this.hitArea = new PIXI.Rectangle(-40, -40, 80, 80);

            this.holdArea = new PIXI.Container();

            this.spineLayer.addChild(this.holdArea);
            this.holdArea.addChild(this.revealSpine);
            this.holdArea.addChild(this.spine);

            this.spine.position.set(this.parent.x, this.parent.y);
            this.revealSpine.position.set(this.parent.x, this.parent.y);
            this.revealSpine.scale.set(0.8);

            // Add all the result elements to a container
            this.resultContainer = new PIXI.Container();
            this.resultContainer.addChild(this.symbolAnim);
            this.resultContainer.name = 'resultContainer';

            this.resultContainer.y = -12;
            this.resultContainer.scale.set(0.85);

            this.appendArray = {
                'resultContainer': this.resultContainer,
                'prizeValue': this.prizeValue,
            };

            Object.keys(this.appendArray).forEach(e => {
                this.addChild(this.appendArray[e]);
                this.appendArray[e].name = e;
            });

            // State
            this.revealed = false;
            this.number = undefined;
            this.prize = "";

            this.revealSpine.renderable = false;

            this.win = false;

            this.on('press', () => {
                if (!autoPlay.enabled) {
                    this.reveal();
                }
            });

            this.on('mouseover', () => {
                msgBus.publish('game.gameArea.hoverOver', {index: this.childPosition});
            });

            this.on('mouseout', () => {
                msgBus.publish('game.gameArea.idle');
            });

            msgBus.publish('animation.play', {
                index: this.parent.name,
                anim: coverNameArray[ ( !isNaN(this.parent.name[this.parent.name.length-2]) ?
                                        this.parent.name.charAt(this.parent.name.length-2) + this.parent.name.charAt(this.parent.name.length-1) : 
                                        this.parent.name.charAt(this.parent.name.length-1) ) 
                                        - 1 ] + '/static',
                delay: 0,
            });

            msgBus.subscribe('Game.AutoPlayStart',()=>{
                if(!this.revealed) {
                    msgBus.publish('animation.play', {
                        index: this.parent.name,
                        anim: coverNameArray[this.childPosition] + '/static',
                        delay: 0,
                        loop:true,
                    });
                }
            });

            this.enabled = false;
        }

        enable() {
            return new Promise(resolve => {
                this.reveal = resolve;
                this.enabled = true;
                this.interactive = true;
                this.interactiveChildren = true;
            }).then(() => {
                this.enabled = false;
            });
        }

        idle() {
            if (!this.revealed) {
                msgBus.publish('animation.play', {
                    index: this.parent.name,
                    anim: coverNameArray[this.childPosition] + '/idle',
                    delay: 0,
                    loop:true
                });
            }
        }

        hover(data) {
            if (!this.revealed) {
                if (data.index === this.childPosition) {
                    msgBus.publish('animation.play', {
                        index: this.parent.name,
                        anim: coverNameArray[this.childPosition] + '/mouseOver',
                        delay: 0,
                        loop: 0
                    });
                    msgBus.publish('game.gameArea.updateLastIndex', {index: this.childPosition});
                } else {
                    msgBus.publish('animation.play', {
                        index: this.parent.name,
                        anim: coverNameArray[this.childPosition] + '/static',
                        delay: 0,
                        loop: 0
                    });
                }
            }
        }

        populate(number, prizeAmount) {
            this.number = number;
            if (prizeAmount !== undefined) {
                this.prize = SKBeInstant.formatCurrency(prizeAmount).amount;
            }
            this.prizeValue.visible = false;
            if (number !== 'W') {
                this.symbolAnim.texture = PIXI.Texture.fromFrame(symbolTextureMap[number]);
                this.prizeValue.text = SKBeInstant.formatCurrency(this.prize).formattedAmount;
            }
        }

        disable() {
            this.enabled = false;
            this.reveal = undefined;
        }

        reset() {
            if(this.symbolAnim.visible === true ||  this.revealed === true){
            msgBus.publish('animation.play', {
                index: this.parent.name,
                anim: coverNameArray[this.childPosition] + '/reset',
                delay: 0,
                track: 0
            });
        }
            this.enabled = false;
            this.symbolAnim.visible = false;
            this.symbolAnim.texture = PIXI.Texture.EMPTY;
            this.symbolAnim.alpha = 1;
            this.resultContainer.y = -12;
            this.resultContainer.scale.set(0.85);
            this.revealed = false;
            this.matched = false;
            this.win = false;
            this.number = undefined;
            this.prizeValue.text = "";
            this.revealSpine.renderable = false;
        }

        async uncover() {
            await new Promise(resolve => {
                this.show();
                this.revealed = true;
                this.interactiveChildren = false;
                this.spineLayer.setChildIndex(this.holdArea, this.spineLayer.children.length-1);
                msgBus.publish('animation.play', {
                    index: this.parent.name,
                    anim: coverNameArray[this.childPosition] + '/reveal', 
                    delay: 0,
                    loop: 0,
                });
                Tween.delayedCall(1, () => {
                    resolve();
                });
            });
        }

        static fromContainer(container,bonusPoints) {
            const pickPoint = new PickPoint(container, container.children[container.children.length - 1], container.children[container.children.length - 2],bonusPoints);
            container.addChild(pickPoint);
            pickPoint.childPosition = container.parent.getChildIndex(container);
            return pickPoint;
        }

        show(){
            if(autoPlay.enabled) {
                if(gameConfig.autoPlayPlayerNumberInterval <= 0.1) {
                    if([0,5,10,15].indexOf(this.childPosition) != -1) {
                        audio.play('playAllSound');
                    }
                } else {
                    audio.playSequential('reveal');
                }
            }

            this.symbolAnim.alpha = 0;

            this.prizeValue.visible = true;
            this.prizeValue.alpha = 0;

            this.prizeValue.style = textStyles.parse(orientation.get() === orientation.LANDSCAPE ? 'prizeValueWin' : 'prizeValueWinPort');

            switch (this.number) {
                case 'W': {

                    let bonusPoint = this.bonusPoints.filter(e=>{
                        if(!e.inUse) {
                            return e;
                        }
                    })[0];

                    bonusPoint.inUse = true;

                    bonusPoint.spine.renderable = false;
                    bonusPoint.spine.alpha = 0;

                    bonusPoint.updatePoint(this.parent);

                    this.resultContainer.addChild(bonusPoint.spine);

                    audio.playSequential('ruby');
                    msgBus.publish('game.meter.addToProccessor',{point:bonusPoint});

                    Tween.to(bonusPoint.spine, 0.1, {
                        onStart: () => {
                            bonusPoint.spine.renderable = true;
                        },
                        alpha: 1
                    });

                    this.resultContainer.y = 0;
                    break;
                }
                case 'X': {
                    Tween.delayedCall(0.1,()=>{
                        this.revealSpine.renderable = true;
                        audio.play('win_7');
                    });
                    msgBus.publish('animation.play', {
                        index: this.revealSpine.index,
                        anim: '222_win_start',
                        delay: 0,
                        loop: 0
                    });
                    msgBus.publish('animation.add', {
                        index: this.revealSpine.index,
                        anim: '222_win_loop',
                        delay: 0,
                        loop: -1
                    });
                    this.prize = (this.prize * 3);
                    this.win = true;
                    break;
                }
                case 'Y': {
                    Tween.delayedCall(0.1,()=>{
                        this.revealSpine.renderable = true;
                        audio.play('win_7');
                    });
                    msgBus.publish('animation.play', {
                        index: this.revealSpine.index,
                        anim: '22_win_start',
                        delay: 0,
                        loop: 0
                    });
                    msgBus.publish('animation.add', {
                        index: this.revealSpine.index,
                        anim: '22_win_loop',
                        delay: 0,
                        loop: -1
                    });
                    this.prize = (this.prize * 2);
                    this.win = true;
                    break;
                }
                case 'Z': {
                    Tween.delayedCall(0.1,()=>{
                        this.revealSpine.renderable = true;
                        audio.play('win_7');
                    });

                    msgBus.publish('animation.play', {
                        index: this.revealSpine.index,
                        anim: '2_win_start',
                        delay: 0,
                        loop: 0
                    });
                    msgBus.publish('animation.add', {
                        index: this.revealSpine.index,
                        anim: '2_win_loop',
                        delay: 0,
                        loop: -1
                    });
                    this.prize = (this.prize * 1);
                    this.win = true;
                    break;
                }
                default: {
                    Tween.to(this.symbolAnim, 0.1, {
                        onStart: () => {
                            this.symbolAnim.visible = true;
                            this.symbolAnim.alpha = 0.8;
                        },
                        alpha: 0.8,
                    });
                    Tween.to(this.symbolAnim, 0.5, {
                        alpha: 0.5,
                        delay: 0.5
                    });


                    this.prizeValue.style = textStyles.parse(orientation.get() === orientation.LANDSCAPE ? 'prizeValueNoWin' : 'prizeValueNoWinPort');

                    break;
                }
            }
            Tween.to(this.prizeValue, 0.1, {
                alpha: 1
            });
        }
        
    }

    return PickPoint;
});


