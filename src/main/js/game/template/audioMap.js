define({
    // IMPLEMENT: Map SFX to channels

    /* 
     * If audio assets are named nicely you can do:
     * {
     *  fileName: channelNumber
     * }
     * 
     * Otherwise use a nice name for the keys and include the filename and channel as an array:
     * {
     *  soundName: ['Ugly_sound_file_V2-final', channelNumber]
     * }
     */

    music: ['BaseMusicLoop', 0],        
    bonusMusic: ['BonusMusicLoop', 0],  
    winTerminator: ['MusicTermWin', 1],  
    loseTerminator: ['MusicTermLose', 1],
    transition:['BonusTransition',6],   
    bonusTriggered:['BonusTriggered',6],
    loseLife:['LoseLife',6],            


    click: ['Click', 4],
    costDown: ['BetDown', 1],           
    costUp: ['BetUp', 2],                 
    costMax: ['BetMax', 3],             
    cash: ['CashWin',1],                

    WinRollUp: ['WinRollUp',1],  
    WinRollTerm: ['WinRollTerm',1],         

    /*
     * Audio groups
     * A game can include multiple variations of each of these sounds. Ensure each variation starts
     * with the same name plus some kind of ordered suffix. Each time a sound group plays the next 
     * item in the group will be used.
     */

    win_7: ['7Win01', 2], 
    arrowWin: ['ArrowWin', 2],
    spinButton: ['SpinButton', 3],  
    spinLoop: ['SpinLoop', 4],
    
    ruby: ['Ruby01',3],

    reveal_1: ['Reveal03',4],
    reveal_2: ['Reveal02',1],
    reveal_3: ['Reveal01',3],
    
    reveal_4: ['Reveal04',2],
    reveal_5: ['Reveal05',5],
    
    playAllSound: ['RevealAll',6],

    /*
     * Optional audio
     * The following audio is optional and will be ignored if not included
     */

    buy: ['BuyButton', 4],
});
