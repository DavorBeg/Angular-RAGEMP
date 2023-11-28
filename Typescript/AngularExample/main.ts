let angular: BrowserMp | undefined = undefined;
mp.gui.chat.colors = true;

// If player press Z key
mp.keys.bind(0x5A, true, function() {
    if(angular == undefined)
    {
        angular = mp.browsers.new("package://SignalRExample/AngularExample/index.html#examplePath")
        mp.gui.cursor.show(true, true);
        
    }
    else
    {
        mp.gui.cursor.show(false, false);
        angular.destroy();
        angular = undefined;
    }
    
});
// When player press F2
mp.keys.bind(0x71, true, function() {
    if(angular != undefined) return angular.execute(`AngularFunctions['OnPlayerPressF2Button']()`);
    
});

mp.events.add('SayHiEvent', (event) => {
    mp.gui.chat.push(JSON.stringify(event))
    mp.gui.chat.push(`!{DD6B20}Say hi event have been triggered from Angular with parameter: ` + event);

})

mp.events.add('CloseEvent', () => {
    mp.gui.chat.push(`!{DD6B20}Close event have been triggered from Angular.`);
})