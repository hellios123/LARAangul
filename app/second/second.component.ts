import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef ,AfterViewInit} from '@angular/core';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements AfterViewInit {
  @ViewChild('myCanvas') myCanvas: ElementRef;
  public context: CanvasRenderingContext2D;
  constructor() { }

 
  ngAfterViewInit(): void {
    this.context = (this.myCanvas.nativeElement as HTMLCanvasElement).getContext('2d');
  
    this.draw();
  }
  private draw() {
    this.context.beginPath();
    this.context.moveTo(0,300);
    this.context.lineTo(300,250);
    this.context.stroke();
  }
}
