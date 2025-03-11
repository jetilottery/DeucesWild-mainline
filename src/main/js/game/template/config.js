define({
  /*
   * Game configuration options
   * Anything defined here could be overwritten either based on the channel in
   * assetPacks/CHANNEL/layout/gameConfig.js or at an operator level by gameConfig.json in i18n
   */

  // Should the HowToPlay screen show when the game loads
  showHowToPlayOnLoad: false,
  // Use AutoPlay with toggle start/stop rather than single use RevealAll
  toggleAutoPlay: false,
  // Time between each number being revealed in autoplay. 0 for instant reaveal.

  autoPlayPlayerNumberInterval: 0.1,
  autoPlayPlayerRowInterval: 0.05,

  resultMusicFadeOutDuration: 0,
  // Time between entering the result screen and the terminator audio starting
  resultTerminatorFadeInDelay: 0,
  // Time over which the terminator audio will fade in
  resultTerminatorFadeInDuration: 0.5,
  // Should the Result screen show when ticket is complete
  showResultScreen: true,
  wheelSpeed: 4,
  gameEndDelay: 0.75,
  overrideMaxButtonWidth: true,
  overrideButtonWidthValue: 200,

  // Bypass the play again button
  bypassPlayAgain: true,
  // Ticket cost meter visible while playing (formerly UI3 Mode)
  ticketCostMeterVisibleWhilePlaying: true,
  // Fast fade buttons
  fastFadeButtons: true,
  fastFadeDuration: 0.5,
  useUI2Plaques: false,
});