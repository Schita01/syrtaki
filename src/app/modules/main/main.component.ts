import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

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

  chosenIndex: number = -1;
  defChosen: boolean = true;
  ngOnInit(): void {

  }
  slidesStore: any = [
    {
      id: 1,
      src: '/assets/img/пе-e1689937028637-fotor-20230728161841.png',
      title: 'Catan',
      description:'Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan.',
    },
    {
      id: 2,
      src: '/assets/img/277291315_509339724087745_6772757857673628723_n.jpg',
      title: 'Dixit',
      description:'Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan.',
    },
    {
      id: 3,
      src: '/assets/img/357107358_280082017862749_175586619828625337_n.jpg',
      title: 'Dragonwood',
      description:'Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan.',
    },

  ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  slidesStoreSecond: any = [
    {
      id: 5,
      
      title: 'SEQUENCE',
      description:'Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan.',
    },
    {
      id: 6,
     
      description:'Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan.',
    },
    {
      id: 7,
      
      title: 'Pozimus',
      description:'Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan.',
    },
    {
      id: 8,
      
      title: 'Cluedo',
      description:'Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan.',
    },
  ];

  slidesStoreThird: any = [
    {
      id: 1,
    
      title: 'Catan',
      description:'Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan.',
    },
    {
      id: 2,
 
      title: 'Dixit',
      description:'Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan.',
    },
    {
      id: 3,
     
      title: 'Dragonwood',
      description:'Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan.',
    },
    {
      id: 4,
    
      title: 'Hedbanz',
      description:'Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan.',
    },
    {
      id: 5,
      
      title: 'SEQUENCE',
      description:'Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan.',
    },
    {
      id: 6,
    
      title: 'Ticket To Ride',
      description:'Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan.',
    },
    {
      id: 7,
   
      title: 'Pozimus',
      description:'Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan.',
    },
    {
      id: 8,
      title: 'Cluedo',
      description:'Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan.',
    },
  ];

  choseTitle(index: any) {
    this.chosenIndex = index;
    this.defChosen = false;
  }

}
 