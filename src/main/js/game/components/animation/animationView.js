define(require => {

    const animationController = require('game/components/animation/animationController');
    const orientation = require('skbJet/componentManchester/standardIW/orientation');
    const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
    const displayList = require('skbJet/componentManchester/standardIW/displayList');

    function init() {

        for(let i = 1; i < 21; i++){
            animationController.addAnimation({
                index: 'pickPoint'+i,
                file: 'coverAnims',
                loop: true,
                x: 0,
                y: 0,
                pivotX:0,
                pivotY:0,
                container: displayList['pickPoint'+i]
            });

            animationController.addAnimation({
                index: 'revealPoint'+i,
                file: 'coverAnims',
                loop: true,
                x: 0,
                y: 0,
                pivotX:0,
                pivotY:0,
                container: displayList['pickPoint'+i]
            });
        }

        animationController.addAnimation({
            index: 'background',
            file: 'background',
            loop: true,
            x: 0,
            y: 0,
            pivotX:orientation.get() === orientation.LANDSCAPE ? -720 : -406,
            pivotY:orientation.get() === orientation.LANDSCAPE ? -405 : -605,
            container: displayList.background
        });


        animationController.addAnimation({
            index: 'bonusSpineController',
            file: 'bonusMeter',
            loop: true,
            x: 180,
            y: 80,
            pivotX:0,
            pivotY:0,
            container: displayList.bonusSpineContainer
        });
        animationController.addAnimation({
            index: 'bonusSymbol1',
            file: 'bonusSymbols',
            loop: true,
            x: 0,
            y: 0,
            pivotX:0,
            pivotY:0,
            container: displayList.bonusSymbolHoldingArea
        });
        animationController.addAnimation({
            index: 'bonusSymbol2',
            file: 'bonusSymbols',
            loop: true,
            x: 0,
            y: 0,
            pivotX:0,
            pivotY:0,
            container: displayList.bonusSymbolHoldingArea
        });
        animationController.addAnimation({
            index: 'bonusSymbol3',
            file: 'bonusSymbols',
            loop: true,
            x: 0,
            y: 0,
            pivotX:0,
            pivotY:0,
            container: displayList.bonusSymbolHoldingArea
        });
        animationController.addAnimation({
            index: 'bonusSymbol4',
            file: 'bonusSymbols',
            loop: true,
            x: 0,
            y: 0,
            pivotX:0,
            pivotY:0,
            container: displayList.bonusSymbolHoldingArea
        });
        animationController.addAnimation({
            index: 'bonusSymbol5',
            file: 'bonusSymbols',
            loop: true,
            x: 0,
            y: 0,
            pivotX:0,
            pivotY:0,
            container: displayList.bonusSymbolHoldingArea
        });
        animationController.addAnimation({
            index: 'bonusMeterSymbol_1',
            file: 'bonusSymbols',
            loop: true,
            x: 0,
            y: 0,
            pivotX:0,
            pivotY:0,
            container: displayList.bonusPointContainer
        });
        animationController.addAnimation({
            index: 'bonusMeterSymbol_2',
            file: 'bonusSymbols',
            loop: true,
            x: 0,
            y: 0,
            pivotX:0,
            pivotY:0,
            container: displayList.bonusPointContainer
        });
        animationController.addAnimation({
            index: 'bonusMeterSymbol_3',
            file: 'bonusSymbols',
            loop: true,
            x: 0,
            y: 0,
            pivotX:0,
            pivotY:0,
            container: displayList.bonusPointContainer
        });
        animationController.addAnimation({
            index: 'bonusMeterSymbol_4',
            file: 'bonusSymbols',
            loop: true,
            x: 0,
            y: 0,
            pivotX:0,
            pivotY:0,
            container: displayList.bonusPointContainer
        });
        animationController.addAnimation({
            index: 'bonusMeterSymbol_5',
            file: 'bonusSymbols',
            loop: true,
            x: 0,
            y: 0,
            pivotX:0,
            pivotY:0,
            container: displayList.bonusPointContainer
        });
        animationController.addAnimation({
            index: 'transition',
            file: 'transition',
            loop: false,
            x: 0,
            y: 0,
            pivotX:orientation.get() === orientation.LANDSCAPE ? -720 : -360,
            pivotY:orientation.get() === orientation.LANDSCAPE ? -405 : -605,
            container: displayList.transitionContainer
        });
        animationController.addAnimation({
            index: 'winPlaqueAnim',
            file: 'winPlaqueAnim',
            loop: true,
            x: 0,
            y: orientation.get() === orientation.LANDSCAPE ? 40 : 0,
            pivotX:0,
            pivotY:0,
            container: displayList.winPlaqueBG
        });
        animationController.addAnimation({
            index: 'wheelFXSpin',
            file: 'wheelFX',
            loop: false,
            x: 0,
            y: 0,
            pivotX:0,
            pivotY:0,
            container: displayList.bonusWheelFXUpper
        });
        animationController.addAnimation({
            index: 'wheelFXUpgrade',
            file: 'wheelFX',
            loop: true,
            x: 0,
            y: 0,
            pivotX:0,
            pivotY:0,
            container: displayList.bonusWheelFXUpper
        });
        animationController.addAnimation({
            index:'logo',
            file:'logoAnim',
            loop:true,
            container: displayList.logoSpine
        });
        animationController.addAnimation({
            index:'endGameNoPlaque',
            file:'winPlaqueAnim',
            container: displayList.endGameWinNoPlaqueSpineContainer
        });
        animationController.addAnimation({
            index:'buyButtonHighlight',
            file:'buyButtonHighlight',
            loop:true,
            container: displayList.buyButtonAnim
        });
        animationController.addAnimation({
            index:'spinButtonHighlight',
            file:'buyButtonHighlight',
            loop:true,
            container: displayList.bonusSpinButtonAnim
        });
    }

    msgBus.subscribe('animation.play', data => {
        animationController.playAnimation(data);
    });

    msgBus.subscribe('animation.add', data => {
        animationController.queueAnimation(data);
    });

    msgBus.subscribe('animation.set', data => {
        animationController.setAnimation(data);
    });

    msgBus.subscribe('animation.setEvents', data => {
        animationController.setEvents(data);
    });

    msgBus.subscribe('animation.clearTrack', data => {
        animationController.clearTrack(data);
    });

    msgBus.subscribe('animation.emptyAnimations', data =>{
        animationController.setEmptyAnimation(data);
    });

    msgBus.subscribe('animation.mix', data =>{
        animationController.mix(data);
    });

    msgBus.subscribe('GameSize.OrientationChange', () => {
        if(animationController.getAnimationList()['background']){
            animationController.clearTrack({index: 'background'});
            animationController.addAnimation({
                index: 'background',
                file: 'background',
                loop: true,
                x: 0,
                y: 0,
                pivotX:orientation.get() === orientation.LANDSCAPE ? -720 : -406,
                pivotY:orientation.get() === orientation.LANDSCAPE ? -405 : -605,
                container: displayList.background
            });
            animationController.playAnimation({
                index: 'background',
                anim: orientation.get() === orientation.LANDSCAPE ? 'backgroundLand' : 'backgroundPort',
                delay: 0,
                loop: -1
            });
        }
        if(animationController.getAnimationList()['logo']){
            animationController.playAnimation({
                index: 'logo',
                anim: orientation.get() === orientation.LANDSCAPE ? 'logoAnim_land' : 'logoAnim_port',
                delay: 0,
                loop: -1
            });
        }
    });

    return {
        init
    };

});