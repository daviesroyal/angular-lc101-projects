import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   buttonState: boolean[] =[true, true, true];
   active: boolean = true;
   location: string = 'center';

   constructor() { }

   ngOnInit() { }

   reactivateButtons(){
      for (let i = 0; i < this.buttonState.length; i++){
         this.buttonState[i] = true;
      }
      return this.buttonState;
   }

   shiftLocation(oldLocation: string){
      while(this.location === oldLocation){
         this.location = ['left', 'right', 'center'][Math.floor(Math.random()*3)];
      }
      return this.location;
   }
}
