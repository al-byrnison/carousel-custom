import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface CarouselItem {
  id: number;
  text: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  items: CarouselItem[] = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
    { id: 4, text: 'Item 4' },
    { id: 5, text: 'Item 5' },
    { id: 6, text: 'Item 6' },
  ];

  @ViewChild('itemsContainer') itemsContainer!: ElementRef;

  currentIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {

  }

  showItem(index: number) {
    const items = this.itemsContainer.nativeElement.querySelectorAll('.item');
    items.forEach((item: { classList: { remove: (arg0: string) => any; }; }) => item.classList.remove('active'));
    items[index].classList.add('active');
  }
  onNext(): void {
    if(this.currentIndex < this.items.length -1) {
      this.currentIndex++;
      this.showItem(this.currentIndex);
    }
  }
  onPrev(): void {
    if(this.currentIndex > 0) {
      this.currentIndex--;
      this.showItem(this.currentIndex);
    }
  }
}
