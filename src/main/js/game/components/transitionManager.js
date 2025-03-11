define(require => {

    const displayList = require('skbJet/componentManchester/standardIW/displayList');
    const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
    const gameConfig = require('skbJet/componentManchester/standardIW/gameConfig');
    const audio = require('skbJet/componentManchester/standardIW/audio');
    const orientation = require('skbJet/componentManchester/standardIW/orientation');
    const resources = require('skbJet/component/pixiResourceLoader/pixiResourceLoader');
    //const wheel = require('game/components/wheel.js');

    require('com/gsap/TimelineMax');
    let Timeline = window.TimelineMax;

    require('com/gsap/TweenMax');
    const Tween = window.TweenMax;

    let baseGameContainer;
    let bonusContainer;

    let gameMode = 'baseGame';

    let transitionTimeline;

    let bonusSymbolsBackground;
    let bonusSymbolsPivotPosition = { x: 195, y: 65 };
    let bonusSymbolsBackgroundBaseScalePort = 0.8;

    let beforeBonusInfoString;
    let bonusInfoString;

    function init() {
        baseGameContainer = displayList.symbolsBackground;
        bonusContainer = displayList.bonusContainer;

        bonusSymbolsBackground = displayList.bonusBackground;

        baseGameContainer.visible = true;
        bonusContainer.visible = false;

        beforeBonusInfoString = resources.i18n.Game.bonusInfo;
        bonusInfoString = resources.i18n.Game.bonusInfo2;

        transitionTimeline = new Timeline({
            paused: true,
            onComplete: () => {
                msgBus.publish('game.transitionComplete');
            }
        });
        transitionTimeline.to(displayList.winUpToLabel,0.1,{
            alpha:0
        });
        transitionTimeline.to(displayList.winUpTo, 0.1, {
            alpha: 0
        }, 0);
        transitionTimeline.to(baseGameContainer, 0.1, {
            alpha: 0,
        }, 0);
        transitionTimeline.to(bonusContainer, 0.1, {
           alpha:1
        }, 0);

        displayList.transitionContainer.visible = false;

        msgBus.publish('animation.setEvents', {
            index: 'transition',
            event: {
                //'swap': () => { swap(); },
                'complete':()=>{
                    if(gameMode === 'bonusGame'){
                        msgBus.publish('UI.updateButtons', {
                            help: {enabled: true},
                        });
                    }
                    msgBus.publish('animation.clearTrack', {
                        index: 'transition',
                        all:true
                    });
                    Tween.delayedCall(0.5, () => {
                    displayList.bonusSpinButton.enabled = true;
                    displayList.bonusSpinButtonAnim.visible = true;
                    });
                }
            }
        });
    }

    function switchGameMode() {

        setOrientation();

        displayList.transitionContainer.visible = true;

        audio.play('transition');

        msgBus.publish('game.gamePlay.updateDelay');

        msgBus.publish('animation.add', {
            index: 'transition',
            anim: orientation.get() === orientation.LANDSCAPE ? 'bonusTransition_land' : 'bonusTransition_port',
            delay: 0,
            loop: 0
        });

        Tween.delayedCall(1,()=>{ swap(); });

        Tween.delayedCall(0.5,()=>{
            audio.play('bonusMusic', 1, true);

            msgBus.publish('animation.play', {
                index: 'bonusSpineController',
                anim: 'bonusMeter_Static',
                delay: 0,
                loop: 0
            });
        });
    }

    msgBus.subscribe('game.transitionToNext', ()=>{
        Tween.delayedCall(gameConfig.gameEndDelay,switchGameMode);
    });

    function swap() {
        switch (gameMode) {
            case 'baseGame': {
                if(baseGameContainer.visible) {
                    if(orientation.get() === orientation.PORTRAIT){
                        bonusSymbolsBackground.pivot.x = bonusSymbolsPivotPosition.x;
                        bonusSymbolsBackground.pivot.y = bonusSymbolsPivotPosition.y;
                        bonusSymbolsBackground.scale.set(0.85);
                    }
                    bonusContainer.visible = true;
                    baseGameContainer.visible = false;
                    transitionTimeline.play();
                    gameMode = 'bonusGame';
                    displayList.bonusInfoText.text = bonusInfoString;
                    
                    msgBus.publish('UI.updateButtons', {
                        ticketSelect: false
                      });
                }

                break;
            }
            case 'bonusGame': {
                if(bonusContainer.visible) {
                    if(orientation.get() === orientation.PORTRAIT){
                        bonusSymbolsBackground.pivot.x = 0;
                        bonusSymbolsBackground.pivot.y = 0;
                        bonusSymbolsBackground.scale.set(bonusSymbolsBackgroundBaseScalePort);
                    }
                    bonusContainer.visible = false;
                    baseGameContainer.visible = true;
                    transitionTimeline.reverse();
                    gameMode = 'baseGame';
                    displayList.bonusInfoText.text = beforeBonusInfoString;

                    msgBus.publish('UI.updateButtons', {
                        ticketSelect: true
                      });
                }

                break;
            }
        }
    }

    function setOrientation() {
        if(displayList.transitionContainer.children[0] !== undefined){
            if(displayList.transitionContainer.children[0].length !== 0) {
                displayList.transitionContainer.children[0].pivot.x = (orientation.get() === orientation.LANDSCAPE ? -720 : -405);
                displayList.transitionContainer.children[0].pivot.y = (orientation.get() === orientation.LANDSCAPE ? -405 : -605);
            }
        }
    }

    msgBus.subscribe('GameSize.OrientationChange',()=>{
        setOrientation();

        let ori = orientation.get() === orientation.LANDSCAPE ? 'land' : 'port';

        let bonusBackground = displayList.bonusBackground;
        if(bonusSymbolsBackground) { 
            if(ori === 'port') {
                if(gameMode === 'baseGame' ) {
                    bonusSymbolsBackground.pivot.x = 0;
                    bonusSymbolsBackground.pivot.y = 0;
                    bonusBackground.scale.set(bonusSymbolsBackgroundBaseScalePort);
                } else {                
                    bonusSymbolsBackground.pivot.x = bonusSymbolsPivotPosition.x;
                    bonusSymbolsBackground.pivot.y = bonusSymbolsPivotPosition.y;
                    bonusBackground.scale.set(0.85);
                }
            } else {
                bonusSymbolsBackground.pivot.x = 0;
                bonusSymbolsBackground.pivot.y = 0;
                bonusBackground.scale.set(1);
            }
        }

        if(displayList.transitionContainer.children[0] !== undefined){
            if(displayList.transitionContainer.children[0].state.tracks[0] !== undefined) {
                if(displayList.transitionContainer.children[0].state.tracks[0].animation.name !== 'bonusTransition_'+ori) {
                    
                    let time = displayList.transitionContainer.children[0].state.tracks[0].time;
                    displayList.transitionContainer.children[0].state.setAnimation(0,"bonusTransition_"+ori,false);
                    displayList.transitionContainer.children[0].state.tracks[0].time = time;

                }
            }
        }
    });

    return {
        init
    };
});