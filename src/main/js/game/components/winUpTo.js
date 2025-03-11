define(require => {
  const Timeline = require('com/gsap/TimelineLite');
  const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
  const SKBeInstant = require('skbJet/component/SKBeInstant/SKBeInstant');
  const displayList = require('skbJet/componentManchester/standardIW/displayList');
  const prizeData = require('skbJet/componentManchester/standardIW/prizeData');
  const orientation = require('skbJet/componentManchester/standardIW/orientation');
  require('com/gsap/plugins/PixiPlugin');

  const FADE_DURATION = 0.5;
  const MIN_SCALE = 0.5;
  const MAX_SCALE = 1.5;

  let outValue = 0;

  function setWinUpTo() {
    
    displayList.winUpToLabel.maxWidth = 300;

    const inValue = prizeData.prizeStructure[0];
    const inFormatted = SKBeInstant.formatCurrency(inValue).formattedAmount;
    const inString = inFormatted;

    const outFormatted = SKBeInstant.formatCurrency(outValue).formattedAmount;
    const outString = outFormatted;

    displayList.winUpToInText.text = inString+'!';
    displayList.winUpToOutText.text = outString+'!';

    if(orientation.get() === orientation.PORTRAIT){
      displayList.winUpTo.x = 480 + (displayList.winUpToInText.width/6);
      displayList.winUpToLabel.x = 300 - (displayList.winUpToInText.width/8);
    }

    // If outValue is 0 winUpTo is not yet set, so display the in value and skip the timeline
    if (outValue === 0 || outValue === inValue) {
      outValue = inValue;
      displayList.winUpToOut.alpha = 0;
      return;
    }

    const updateTimeline = new Timeline();
    const outScale = inValue > outValue ? MAX_SCALE : MIN_SCALE;
    const inScale = inValue > outValue ? MIN_SCALE : MAX_SCALE;

    // update outValue for next time
    outValue = inValue;

    updateTimeline.fromTo(
      displayList.winUpToIn,
      FADE_DURATION,
      {
        pixi: { scaleX: inScale, scaleY: inScale },
        alpha: 0,
      },
      {
        pixi: { scaleX: 1, scaleY: 1 },
        alpha: 1,
      },
      0
    );

    updateTimeline.fromTo(
      displayList.winUpToOut,
      FADE_DURATION,
      {
        pixi: { scaleX: 1, scaleY: 1 },
        alpha: 1,
      },
      {
        pixi: { scaleX: outScale, scaleY: outScale },
        alpha: 0,
      },
      0
    );
  }

  msgBus.subscribe('PrizeData.PrizeStructure', setWinUpTo);

  return {
    reset: setWinUpTo,
  };
});
