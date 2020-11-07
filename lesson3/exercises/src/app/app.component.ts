import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';
  takeOffEnabled = true;
  upwardMovementEnabled = true;
  downwardMovementEnabled = true;
  leftMovementEnabled = true;
  rightMovementEnabled = true;
  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

  gutterCheck(width, height) {
    if (width > 260000 || width < 0 || height < 0 || height > 340000) {
      this.color = 'orange';
    } else {
      this.color = 'blue';
    }
  }

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
      this.takeOffEnabled = false;
    }
  }

  moveRocket(rocketImage, direction) {
    if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width += 10000;
      if (this.width > 330000) {
        this.rightMovementEnabled = false;
      }
    } else if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width -= 10000;
      if (this.width < 0) {
        this.leftMovementEnabled = false;
      }
    } else if (direction === 'up') {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height += 10000;
      if (this.height > 330000) {
        this.upwardMovementEnabled = false;
      }
    } else if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height -= 10000;
      if (this.height <= 0) {
        this.downwardMovementEnabled = false;
      }
    }
    this.gutterCheck(this.width, this.height);
  } 

  handleLand(rocketImage) {
    window.alert('The shuttle is landing. Landing gear engaged.');
    this.color = 'green';
    this.height = 0;
    this.width = 0;
    rocketImage.style.bottom = '0px';
    rocketImage.style.left = '0px';
    this.message = 'The shuttle has landed';
    this.takeOffEnabled = true;
  }

  handleAbort(rocketImage) {
    let result = window.confirm('Are you sure you want to abort the mission?');
    if (result) {
       this.color = 'red';
       this.height = 0;
       this.width = 0;
       rocketImage.style.bottom = '0px';
       rocketImage.style.left = '0px';
       this.message = 'Mission aborted.';
       this.takeOffEnabled = true;
    }
  }

}
