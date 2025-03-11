define(require => {
    const displayList = require('skbJet/componentManchester/standardIW/displayList');
    const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
    const meterData = require('skbJet/componentManchester/standardIW/meterData');
    const SKBeInstant = require('skbJet/component/SKBeInstant/SKBeInstant');
    const orientation = require('skbJet/componentManchester/standardIW/orientation');

    require('com/gsap/easing/EasePack');
    require('com/gsap/TimelineMax');
    let Timeline = window.TimelineMax;

    let endgameArea;
    let endGameText;
    let endGameAreaWithPlaque;
    let winTextTimeline;
    let endgameAreaTween;

    function init() {
        endgameArea = displayList.endGameWinNoPlaque;
        endGameText = displayList.endGameWinNoPlaqueValue;
        endGameAreaWithPlaque = displayList.resultPlaquesContainer;

        endgameArea.renderable = false;
        winTextTimeline = new Timeline({
            paused: true,
            onComplete: () => {
                displayList.endGameNoPlaqueContainerClick.interactive = true;
            }
        });

        displayList.endGameNoPlaqueContainerClick.interactive = false;
        displayList.endGameNoPlaqueContainerClick.renderable = false;

        displayList.endGameNoPlaqueContainerClick.on('press', () => {
        //     msgBus.publish('animation.add', {
        //         index: 'endGameNoPlaque',
        //         anim: 'winAnimation_noPlaque_OUT',
        //         delay: 0,
        //         loop: 0
        //     });
            endgameArea.renderable = false;
            displayList.endGameNoPlaqueContainerClick.interactive = false;
            displayList.endGameNoPlaqueContainerClick.renderable = false;
            displayList.endGameNoPlaqueContainerClick.rendable = false;
        });

        for(var e in endGameAreaWithPlaque.children){
            endGameAreaWithPlaque.getChildAt(e).interactive = true;
            endGameAreaWithPlaque.getChildAt(e).on('click', () => {
                for(var i in endGameAreaWithPlaque.children){
                    endGameAreaWithPlaque.getChildAt(i).visible = false;
                }
            });
            endGameAreaWithPlaque.getChildAt(e).on('tap', () => {
                for(var i in endGameAreaWithPlaque.children){
                    endGameAreaWithPlaque.getChildAt(i).visible = false;
                }
            });
        }

        endGameText.alpha = 0;
        winTextTimeline.to(endGameText, 0.5, {
            alpha: 1
        }, 0);


        msgBus.publish('animation.play', {
            index: 'winPlaqueAnim',
            anim: orientation.get() === orientation.LANDSCAPE ? 'winAnimation_land' : 'winAnimation_port',
            delay: 0,
            loop: -1
        });

        msgBus.publish('animation.play', {
            index: 'logo',
            anim: orientation.get() === orientation.LANDSCAPE ? 'logoAnim_land' : 'logoAnim_port',
            delay: 0,
            loop: -1
        });

        msgBus.publish('animation.setEvents', {
            index: 'endGameNoPlaque',
            event: {
                'winText': () => {
                    winTextTimeline.play();
                },
            }
        });
    }

    function endGame() {
        if (meterData.win > 0) {
            endgameArea.rendable = true;

            endgameArea.renderable = true;
            
            displayList.endGameNoPlaqueContainerClick.renderable = true;
            displayList.endGameNoPlaqueContainerClick.rendable = true;

            let endGameWinNoPlaqueValue = meterData.win;
            endGameText.text = SKBeInstant.formatCurrency(endGameWinNoPlaqueValue).formattedAmount;

            msgBus.publish('animation.play', {
                index: 'endGameNoPlaque',
                anim: 'winAnimation_noPlaque_IN',
            });
            msgBus.publish('animation.add', {
                index: 'endGameNoPlaque',
                anim: 'winAnimation_noPlaque_loop',
                delay: 0,
                loop: -1
            });
        } 
    }

    function updateEndPosition() {
        if(endgameAreaTween !== undefined) {
            var time = endgameAreaTween.time();
            endgameArea.y = orientation.get() === orientation.LANDSCAPE ? 610 : 800;
            endgameAreaTween.vars.y = orientation.get() === orientation.LANDSCAPE ? 410 : 600;
            endgameAreaTween.seek(0).invalidate().seek(time);
        }
    }

    function reset() {
        endGameText.alpha = 0;
        endgameArea.rendable = false;
        endgameArea.renderable = false;
        
        displayList.endGameNoPlaqueContainerClick.interactive = false;
        displayList.endGameNoPlaqueContainerClick.rendable = false;
        displayList.endGameNoPlaqueContainerClick.renderable = false;

        winTextTimeline.pause(0);

        msgBus.publish('animation.clearTrack', {
            index: 'endGameNoPlaque',
            all: true
        });
    }

    msgBus.subscribe('game.endGame.init', init);
    msgBus.subscribe('game.endGame.run', endGame);
    msgBus.subscribe('game.endGame.reset', reset);

    msgBus.subscribe('GameSize.OrientationChange', () => {
        updateEndPosition();
    });

});