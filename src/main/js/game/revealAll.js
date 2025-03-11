define(require => {
    const Timeline = require('com/gsap/TimelineLite');
    const gameConfig = require('skbJet/componentManchester/standardIW/gameConfig');
    const displayList = require('skbJet/componentManchester/standardIW/displayList');
    const autoPlay = require('skbJet/componentManchester/standardIW/autoPlay');
    const gameArea = require('game/components/gameArea');

    require('com/gsap/TweenLite');
    const Tween = window.TweenLite;

    let revealAllTimeline;

    function start() {
        revealAllTimeline = new Timeline();

        let revealPickPoints = gameArea.revealAll();
        // disable all interaction at the parent container level
        displayList.pointArray.interactiveChildren = false;

        revealAllTimeline.add(revealPickPoints,0,'normal',gameConfig.autoPlayPlayerNumberInterval);

        return revealAllTimeline;
    }
    function stop() {
        // When the player stops the reveal, give it one sec so all the bonusPickpoint animations' events will be triggered, avoiding a visual bug
        autoPlay._suspended = true;
        Tween.delayedCall(1, () => {
            autoPlay._suspended = false;
        });

        // re-enable all interaction at the parent container level
        displayList.pointArray.interactiveChildren = true;

        // kill the revealAll timeline if active
        if (revealAllTimeline) {
            revealAllTimeline.kill();
            revealAllTimeline = undefined;
        }
    }

    return {
        start,
        stop,
    };
});
