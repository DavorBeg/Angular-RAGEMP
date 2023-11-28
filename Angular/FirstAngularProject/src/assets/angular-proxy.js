
// From CEF to client side
document.addEventListener('SayHiEvent', function(event) {
        try
        {
                console.log("SayHiEvent triggered!");
                // lets si our parameters
                console.log(event)
                mp.gui.chat.push("hello world event have been triggered.");
        }
        catch(error)
        {
                console.log(error)
        }
        
});
// From CEF to client side
document.addEventListener('CloseEvent', function(event) {
        try
        {
                console.log("CloseEvent triggered!");
                mp.gui.chat.push("Close event have been triggered.");
        }
        catch(error)
        {
                console.log(error)
        }
        
});
// From client side to CEF 
mp.keys.bind(0x71, true, function() {
        mp.gui.chat.push('F2 key is pressed.');
        const event = document.createEvent("ClientButtonPressedEvent");
        document.dispatchEvent(event)

    });