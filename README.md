<img src="https://i.postimg.cc/s2VhfqLV/Angular-And-RAGEMP.png" width="200">

# Angular-RAGEMP Intro
## What is this?
It's an example on how to use Angular17 inside Gta V RAGE Multiplayer.

## Why should I use it?
> - Angular is strong front-end framework with a lot of ready to use features.<br/>
> - strongly secured and optimized.

> [!WARNING]
> Repository does not contain node_modules folder. To check this code on your local computer
> you need to create angular project and copy paste my src folder.


# Dependencies
1. NodeJS and npm package manager
2. Angular version 17 or greater ```npm i @angular/cli@17.0.3```
3. Rage MP with configured server enviorment



# How to start?

1. Navigate to some folder and open cmd terminal.
2. type in: `ng new <name-of-your-project>` to create your Angular project<br/>
3. Open up your `app.config.ts` and make sure that appConfig looks like this:
```
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withHashLocation())]
};
```
> [!WARNING]
> Its important to use `withHashLocation()` strategy to make routing works inside ragemp cef.<br/>
> If you try `ng serve` command, your routing should look like `http://localhost:4200/#/`




4. Create new component with `ng create component <your-component-name>` or shortly `ng g c <your-component-name>`


5. Add newly created component to your `app.routes.ts`. It should look like this<br/>


```
import { Routes } from '@angular/router';
import { JustExampleComponent } from './just-example/just-example.component';

export const routes: Routes = [
    { path: 'examplePath', component: JustExampleComponent }
];
```
for path string you can put whatever you want, and component should be name of your newly create component.
To make your app routing works in your `app.component.html` file add `<router-outlet></router-outlet>`.

6. In your assets folder create manually new js file called `angular-proxy.js`. This will be our communucation with rageMP
7. In your `angular-proxy.js` file add next code, after adding code save file and close it.

```

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

```
8. To trigger events from Client to CEF add next code to your newly created component .ts file next code:
```
  ngOnInit(): void {

    document.addEventListener("ClientButtonPressedEvent", () => {
      console.log("Client have pressed F2 button! (this is from Angular)")
    });   
  }
```
9. To trigger events from CEF to client create some button with (click) event in Angular. I created `SayHello` function that trigger on click.
   To make it better understand the concept, download the code and use my created project as example.
```
  SayHello()
  {

    const event = new CustomEvent("SayHiEvent", { "detail": "some parameters inside" });
    document.dispatchEvent(event);

  }
```


