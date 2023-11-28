
// From CEF to client side
document.addEventListener('SayHiEvent', function(event) {
        try
        {
                console.log("SayHiEvent triggered!");
                mp.trigger('SayHiEvent', event.detail);
                // this is some params
                console.log(event.detail)

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
                mp.trigger('CloseEvent');
        }
        catch(error)
        {
                console.log(error)
        }
        
});

// FROM Client to CEF
const AngularFunctions = {
        'OnPlayerPressF2Button' : function() {
            try {

                const event = new CustomEvent("ClientButtonPressedEvent");
                document.dispatchEvent(event);
        
            }
            catch(error) { console.log(error) }              
        }
    }

