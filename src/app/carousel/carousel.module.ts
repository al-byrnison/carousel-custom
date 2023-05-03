import { NgModule } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { PrevDirective, NextDirective } from './carousel.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CarouselComponent,
    PrevDirective,
    NextDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CarouselComponent,
    PrevDirective,
    NextDirective
  ]
})

export class CarouselModule {}
