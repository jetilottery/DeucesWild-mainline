define(require => {

    const bonusPoint = require('game/components/bonusPoint');
    const displayList = require('skbJet/componentManchester/standardIW/displayList');
    const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
    const audio = require('skbJet/componentManchester/standardIW/audio');
    const orientation = require('skbJet/componentManchester/standardIW/orientation');

    require('com/gsap/TweenMax');

    require('com/gsap/TimelineMax');
    let Timeline = window.TimelineMax;

    let bonusPointArray;
    let parentContainer;
    let basePivot;
    let index = 0;

    let scale = 0.9;

    function init() {
        parentContainer = displayList.bonusPointContainer;

        let containerStartX = 20;

        bonusPointArray = [
            new bonusPoint(0, parentContainer, 'bonusMeterSymbol_1'),
            new bonusPoint(1, parentContainer, 'bonusMeterSymbol_2'),
            new bonusPoint(2, parentContainer, 'bonusMeterSymbol_3'),
            new bonusPoint(3, parentContainer, 'bonusMeterSymbol_4'),
            new bonusPoint(4, parentContainer, 'bonusMeterSymbol_5'),
        ];

        bonusPointArray.forEach((e, i) => {
            e.setXPosition(containerStartX + (90 * i));
            e.container.scale.set(scale);
        });

        parentContainer.pivot.x = (parentContainer.width / 2) - 75;
        basePivot = parentContainer.pivot.x;

        msgBus.publish('animation.play', {
            index: 'bonusSpineController',
            anim: 'bonusMeter_Static',
            delay: 0,
            loop: 0
        });
    }

    function increase() {
        if (index < 5) {
            bonusPointArray[index].transformToEnabled();
            index++;
            if (index === 3) {
                transformToGold();
                audio.play('bonusTriggered');
            }else
            if (index > 3) {
                if(orientation.get() === orientation.LANDSCAPE)
                    parentContainer.pivot.x = (parentContainer.width / 2) - 205;
                else{
                    if (index === 4) 
                        parentContainer.pivot.x = (parentContainer.width / 2) - 208;
                    else
                        parentContainer.pivot.x = (parentContainer.width / 2) - 205;
                }
            }
        }
    }

    function addToProccessor(target) {
        target.point.reveal();
    }

    function decrease() {
        bonusPointArray[index - 1].transformToLose();
        audio.play('loseLife');
        if (index > 0) {
            index--;
        }
    }

    function transformToGold() {
         if (index === 3) {

            msgBus.publish('animation.play', {
                index: 'bonusSpineController',
                anim: 'bonusMeter_IN',
                delay: 0,
                loop: 0
            });
            msgBus.publish('animation.add', {
                index: 'bonusSpineController',
                anim: 'bonusMeter_loop',
                delay: 0,
                loop: -1
            });
        }
    }

    function reset() {
        index = 0;
        bonusPointArray.forEach(e => e.reset());
        parentContainer.pivot.x = basePivot;
    }

    function endGame() {
        let crossTimeLine = new Timeline();

        bonusPointArray.forEach(e => {
            crossTimeLine.to(e.loseLife.scale, 0.5, {
                x: 2,
                y: 2
            }, 0);

            crossTimeLine.to(e.loseLife.scale, 0.5, {
                x: 1,
                y: 1
            }, 0.4);
        });


        crossTimeLine.add(() => {
            msgBus.publish('game.wheel.bounceMeter');
        }, 0.9);
    }

    function getIndex() {
        return index;
    }

    msgBus.subscribe('game.meter.bonusIncrease', increase);
    msgBus.subscribe('game.meter.bonusDecrease', decrease);
    msgBus.subscribe('game.meter.endgame', endGame);
    msgBus.subscribe('game.meter.bonusReset', reset);
    msgBus.subscribe('game.meter.addToProccessor', addToProccessor);


    return {
        init,
        reset,
        increase,
        getIndex
    };

});