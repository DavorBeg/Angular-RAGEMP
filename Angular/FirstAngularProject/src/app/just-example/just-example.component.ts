import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-just-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './just-example.component.html',
  styleUrl: './just-example.component.css'
})
export class JustExampleComponent implements OnInit {

  buttonCounter: number = 0;

  constructor() {


  }
  ngOnInit(): void {



    document.addEventListener("ClientButtonPressedEvent", () => {

      console.log("Client have pressed F2 button! (this is from Angular)")
      this.buttonCounter ++;

    });   



  }

  SayHello()
  {

    const event = new CustomEvent("SayHiEvent", { "detail": "some parameters inside" });
    document.dispatchEvent(event);


  }
  CloseDialog()
  {


    const event = new CustomEvent("CloseEvent");
    document.dispatchEvent(event);


  }



}
