define(require => {
    const displayList = require('skbJet/componentManchester/standardIW/displayList');
    const PIXI = require('com/pixijs/pixi');
    const Segment = require('game/components/segment');
    const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
    const gameConfig = require('skbJet/componentManchester/standardIW/gameConfig');
    const SKBeInstant = require('skbJet/component/SKBeInstant/SKBeInstant');
    const meterData = require('skbJet/componentManchester/standardIW/meterData');
    const audio = require('skbJet/componentManchester/standardIW/audio');
    
    require('com/gsap/TweenMax');
    require('com/gsap/easing/CustomEase');


    const TimelineMax = window.TimelineMax;
    const CustomEase = window.CustomEase;

    require('com/gsap/TimelineMax');

    let topWheel;
    let middleWheel;
    let bottomWheel;

    let easeSpeed = CustomEase.create("custom", "M0,0,C0.272,0,0.371,0.508,0.43,0.692,0.546,1.058,0.866,1,1,1");

    let target;

    let wheelMap = {
        1: ['Q', 'X', 'U', '0', 'S', 'Z', 'V', 'X', 'T', '0', 'V', 'Z', 'R', 'X', 'U', '0', 'T', 'Z', 'U', 'X', 'S', '0', 'V', 'Z'],
        2: ['O', 'X', 'R', '0', 'S', 'Z', 'P', 'X', 'S', '0', 'T', 'Z', 'Q', 'X', 'T', '0', 'R', 'Z'],
        3: ['M', 'X', 'R', 'X', 'N', '0', 'Q', 'X', 'O', 'X', 'P', '0'],
    };

    let segmentMap = {
        1: [],
        2: [],
        3: []
    };

    let wheelIndex = 1;
    let totalWinAmount = 0;

    function init() {
        topWheel = displayList.bonusWheelTopBackground;
        middleWheel = displayList.bonusWheelMiddleBackground;
        bottomWheel = displayList.bonusWheelBottomBackground;

        let bottomWheelContainer = new PIXI.Container();
        bottomWheel.addChild(bottomWheelContainer);
        let middleWheelContainer = new PIXI.Container();
        middleWheel.addChild(middleWheelContainer);
        let topWheelContainer = new PIXI.Container();
        topWheel.addChild(topWheelContainer);

        wheelMap[1].forEach((e, i, a) => {
            let radius = bottomWheel.height / 2;
            let rotation = (((2 * Math.PI) / a.length) * i) - 0.510;
            let offset = 90;

            let segment = new Segment({
                rotation: rotation,
                pivot: radius,
                assignedData: wheelMap[1][i],
                offset: offset,
                index: i
            });
            segmentMap[1].push(segment);

            bottomWheelContainer.addChild(segment);
        });

        wheelMap[2].forEach((e, i, a) => {
            let radius = (middleWheel.height / 2) + 9;
            let rotation = (((2 * Math.PI) / a.length) * i) - 0.525;
            let offset = 95;

            let segment = new Segment({
                rotation: rotation,
                pivot: radius,
                assignedData: wheelMap[2][i],
                offset: offset,
                index: i
            });
            segmentMap[2].push(segment);

            middleWheelContainer.addChild(segment);
        });

        wheelMap[3].forEach((e, i, a) => {
            let radius = topWheel.height / 2;
            let rotation = (((2 * Math.PI) / a.length) * i);
            let offset = 100;

            let segment = new Segment({
                rotation: rotation,
                pivot: radius,
                assignedData: wheelMap[3][i],
                offset: offset,
                index: i
            });
            segmentMap[3].push(segment);

            topWheelContainer.addChild(segment);
        });

        updatePrizeAmounts();

        displayList.bonusWheelBottomBackground.setChildIndex(displayList.bonusWheelBottomDiv,displayList.bonusWheelBottomBackground.children.length-1);
        displayList.bonusWheelMiddleBackground.setChildIndex(displayList.bonusWheelMiddleDiv,displayList.bonusWheelMiddleBackground.children.length-1);
        displayList.bonusWheelTopBackground.setChildIndex(displayList.bonusWheelTopDiv,displayList.bonusWheelTopBackground.children.length-1);
        
        displayList.totalWinValue.visible = false;
        displayList.totalWinValue.text = SKBeInstant.formatCurrency(0).formattedAmount;
    }

    async function spinWheel(data) {
        audio.play('spinLoop');
        let wheel = bottomWheel;

        if (data.target !== undefined) {
            wheel = data.target;
        }

        wheelIndex = (data.wheelIndex + 1);

        target = findLandPosition(data.endpoint);

        let timeLine = new TimelineMax({
            onComplete: () => {
                wheel.rotation = wheel.rotation % (Math.PI * 2);
                msgBus.publish('game.bonus.checkData');
                target.land(wheelIndex);
            },
        });

        switch (wheelIndex) {
            case 1: {
                displayList.bonusWheelFXUpper.scale.set(1.16);
                break;
            }
            case 2: {
                displayList.bonusWheelFXUpper.scale.set(1.13);
                break;
            }
            case 3: {
                displayList.bonusWheelFXUpper.scale.set(1.1);
                break;
            }
        }

        sustainSpin(wheel, target, timeLine);
    }

    function sustainSpin(wheel, target, timeLine) {

        let animation = {
            1:'wheelSpinSparks_w1',
            2:'wheelSpinSparks_w2',
            3:'wheelSpinSparks_w3'
        };

        msgBus.publish('animation.play', {
            index: 'wheelFXSpin',
            anim:  animation[wheelIndex],
            delay: 0.75,
            loop: 0
        });

        let rot = -target.rotation + (5 * (Math.PI * 2));

        return timeLine.to(wheel, gameConfig.wheelSpeed, {
            ease: easeSpeed,
            rotation: rot,
        }, 0);
    }

    function findLandPosition(endpoint) {
        let map = segmentMap[wheelIndex].filter(e => {
            return e.data === endpoint;
        });
        let index = Math.floor(Math.random() * map.length);

        return map[index];
    }

    function updatePrizeAmounts() {
        let bottomWheelTextScale = 1;
        let middleWheelTextScale = 1;
        let topWheelTextScale = 1;

        segmentMap[1].forEach(e => { 
            e.update(wheelIndex);
            if(e.tempScale < bottomWheelTextScale) { 
                bottomWheelTextScale = e.tempScale;
            } 
        });
        segmentMap[1].forEach(e => { e.updateTextScale(bottomWheelTextScale); });
        
        segmentMap[2].forEach(e => { 
            e.update(wheelIndex);
            if(e.tempScale < middleWheelTextScale) { 
                middleWheelTextScale = e.tempScale;
            } 
        });
        segmentMap[2].forEach(e => { e.updateTextScale(middleWheelTextScale); });
        
        segmentMap[3].forEach(e => { 
            e.update(wheelIndex);
            if(e.tempScale < topWheelTextScale) { 
                topWheelTextScale = e.tempScale;
            } 
        });
        segmentMap[3].forEach(e => { e.updateTextScale(topWheelTextScale); });
    }

    function addToBonusWin(data) {
        displayList.totalWinValue.visible = true;

        totalWinAmount += data.amount;

        let winCountup = new TimelineMax();

        winCountup.to(displayList.totalWinValue.scale, 0.3, {
            ease: window.Back.easeOut.config(1.7),
            x: 1.4,
            y: 1.4
        },0);

        winCountup.to({value: displayList.totalWinValue.text}, 0.25, {
            onStart: function () {
                audio.play('WinRollUp', 0);
            },
            onUpdate: function () {
                displayList.totalWinValue.text = SKBeInstant.formatCurrency(this.target.value).formattedAmount;
                displayList.totalWinValue.scale.set(1.4);
            },
            onComplete:()=>{
                audio.stop('WinRollUp');
                audio.play('WinRollTerm');
                meterData.win += data.amount;
            },
            value: totalWinAmount
        },0.3);

        winCountup.to(displayList.totalWinValue.scale, 0.3, {
            ease: window.Back.easeOut.config(1.7),
            x: 1,
            y: 1
        },1.2);
    }

    function bounceMeter() {
        if(totalWinAmount !== 0) {
            let bounceMeterTimeline = new TimelineMax();

            bounceMeterTimeline.to(displayList.totalWinValue.scale, 0.3, {
                ease: window.Back.easeOut.config(1.7),
                x: 1.4,
                y: 1.4,
                onStart:()=>{
                    audio.play('cash');
                }
            },0);

            bounceMeterTimeline.to(displayList.totalWinValue.scale, 0.3, {
                ease: window.Back.easeOut.config(1.7),
                x: 1,
                y: 1
            },1.2);
        }
    }

    function reset() {
        wheelIndex = 1;
        totalWinAmount = 0;

        segmentMap[1].forEach(e => e.reset());
        segmentMap[2].forEach(e => e.reset());
        segmentMap[3].forEach(e => e.reset());

        displayList.totalWinValue.visible = false;
        displayList.totalWinValue.text = SKBeInstant.formatCurrency(0).formattedAmount;
    }

    msgBus.subscribe('MeterData.TicketCost', updatePrizeAmounts);
    msgBus.subscribe('game.wheel.spin', spinWheel);
    msgBus.subscribe('game.wheel.addToBonusWin', addToBonusWin);
    msgBus.subscribe('game.wheel.reset', reset);
    msgBus.subscribe('game.wheel.bounceMeter', bounceMeter);

    return {
        init,
        updatePrizeAmounts
    };
});