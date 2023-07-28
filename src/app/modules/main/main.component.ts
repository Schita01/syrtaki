import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
  // @ts-ignore
  @ViewChild('myVideo') myVideo: ElementRef<HTMLVideoElement>;
  ngAfterViewInit(): void {
    const videoElement: HTMLVideoElement = this.myVideo.nativeElement;
    videoElement.addEventListener('ended', () => {
      videoElement.play();
    });
  }
 
}
 