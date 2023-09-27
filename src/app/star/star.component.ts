import { Component } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
  starPoints: number[] = new Array(40); // Create an array with 15 elements

  getPointStyle(index: number) {
    const angle = (360 / this.starPoints.length) * index;
    return {
      transform: `rotate(${angle}deg) translateY(-15px)` // Adjust translateY value to position the points
    };
  }
  }

