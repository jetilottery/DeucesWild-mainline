define(function (require) {
    const gameFlow = require('skbJet/componentManchester/standardIW/gameFlow');
    const numberState = require('game/state/numbers');
    const winUpTo = require('game/components/winUpTo');
    const audio = require('skbJet/componentManchester/standardIW/audio');
    const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');

    function gameReset() {
        resetAll();
        
        winUpTo.reset();
        
        gameFlow.next();
    }

    function resetAll() {
        numberState.reset();

        msgBus.publish('game.bonus.reset');
        msgBus.publish('game.wheel.reset');
        msgBus.publish('game.meter.bonusReset');
        msgBus.publish('game.gameArea.reset');
        msgBus.publish('game.bonusParticles.reset');
        msgBus.publish('game.endGame.reset');
        
        msgBus.publish('UI.hideResult');

        // Fade out the win/lose terminator in case it is still playing
        if (audio.isPlaying('winTerminator')) {
            audio.fadeOut('winTerminator', 1);
        }
        if (audio.isPlaying('loseTerminator')) {
            audio.fadeOut('loseTerminator', 1);
        }
    }

    msgBus.subscribe('TicketSelect.CostUp', resetAll);
    msgBus.subscribe('TicketSelect.CostMax', resetAll);
    msgBus.subscribe('TicketSelect.CostDown', resetAll);

    gameFlow.handle(gameReset, 'GAME_RESET');
    gameFlow.handle(gameReset, 'GAME_PREPARE');
});
