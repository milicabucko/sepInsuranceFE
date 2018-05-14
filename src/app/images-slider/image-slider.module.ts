import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesSliderComponent } from './images-slider.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ImagesSliderComponent
  ],
  exports:
  [ImagesSliderComponent]
})
export class ImageSliderModule { }