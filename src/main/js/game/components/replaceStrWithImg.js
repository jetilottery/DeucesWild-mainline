define(require => {
  const PIXI = require('com/pixijs/pixi');
  const displayList = require('skbJet/componentManchester/standardIW/displayList');
  const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
  const orientation = require('skbJet/componentManchester/standardIW/orientation');

  let replaceSet = {
    '[2]': 'tutorial2',
    '[22]': 'tutorial22',
    '[222]': 'tutorial222',
    '[JOKER]': 'tutorialBonus',
    '[WHEEL]': 'tutorialWheel',
    '[WHEELPRIZE]': 'tutorialPoint',
    '[WHEELARROW]': 'tutorialArrow',
    '[WHEELRESPIN]': 'tutorialRespin',
    '[WHEELX]': 'tutorialLoss',
  };

  let startPosition = [
    [230, 250],
    [190, 180]
  ];

  let fontSize;
  let heightLimit = 130;

  function parseLines(array, options = {}) {
    let spacing = options.linespacing || 0;

    array.forEach((e, i) => {
      e.y = startPosition[options.index][orientation.get() === orientation.LANDSCAPE ? 0 : 1] + (spacing * i);
      replace(e.text, e, {
        spacing: options.spacing,
        padding: options.padding
      });
    });
  }

  function replace(str, pixiContainer, options = {}) {
    let spacing = options.spacing || 0;

    Object.keys(replaceSet).forEach(e => {
      if (str.includes(e)) {
        let sprite = new PIXI.Sprite(PIXI.Texture.from(replaceSet[e]));
        sprite.name = e;
        sprite.anchor.set(0.5);
        pixiContainer.addChild(sprite);

        sprite.x -= spacing;
        if(e === '[JOKER]')
          sprite.x += 15;

        pixiContainer.text = str.replace(e, '');
      }
    });
  }

  function checkSize(){
    displayList.howToPlayPage1.children.forEach( (i) => { 
      fontSize = i.style.fontSize;
      if(i.height >= heightLimit)
      {
        fontSize = i.style.fontSize - 1;
        updateSize();
      }
    });
    displayList.howToPlayPage2.children.forEach( (i) => { 
      fontSize = i.style.fontSize;
      if(i.height >= heightLimit)
      {
        fontSize = i.style.fontSize - 1;
        updateSize();
      }
    });
  }

  function updateSize(){
    displayList.howToPlayPage1.children.forEach( (i) => { 
      i.style.fontSize = fontSize;
    });
    displayList.howToPlayPage2.children.forEach( (i) => { 
      i.style.fontSize = fontSize;
    });
    checkSize();
  }

  function run() {
    parseLines(displayList.howToPlayPage1.children, {
      spacing: orientation.get() === orientation.LANDSCAPE ? 100 : 70,
      linespacing: orientation.get() === orientation.LANDSCAPE ? 100 : 160,
      index: 0
    });
    parseLines(displayList.howToPlayPage2.children, {
      spacing: orientation.get() === orientation.LANDSCAPE ? 105 : 80,
      linespacing: orientation.get() === orientation.LANDSCAPE ? 105 : 160,
      index: 1
    });
    checkSize();
  }

  function resetPosition() {        
    Object.keys(replaceSet).forEach(e => {
      displayList.howToPlayPage1.children.forEach( (i, t) => { 
        let spacing = orientation.get() === orientation.LANDSCAPE ? 100 : 70;
        let linespacing = orientation.get() === orientation.LANDSCAPE ? 100 : 160;
        i.y = startPosition[0][orientation.get() === orientation.LANDSCAPE ? 0 : 1] + (linespacing * t);
        let sprite = i.getChildByName(e);
        if(sprite) {
          sprite.x = -spacing;
          if(e === '[JOKER]')
            sprite.x += 15;
        }
      });
      displayList.howToPlayPage2.children.forEach( (i, t) => { 
        let spacing = orientation.get() === orientation.LANDSCAPE ? 105 : 80;
        let linespacing = orientation.get() === orientation.LANDSCAPE ? 105 : 160;
        i.y = startPosition[1][orientation.get() === orientation.LANDSCAPE ? 0 : 1] + (linespacing * t);
        let sprite = i.getChildByName(e);
        if(sprite) {
          sprite.x = -spacing; }
      });
    });
    checkSize();
  }

  msgBus.subscribe('game.util.howToPlay', run);
  msgBus.subscribe('GameSize.OrientationChange', () => {
    if (displayList.howToPlayPage2 !== undefined) {
      resetPosition();
    }
  });

});