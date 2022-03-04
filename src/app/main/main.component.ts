import { Component } from '@angular/core';
import { ITEMS, shuffle } from '../util';
import { Box } from './box/box.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent {
  public readonly boxes: Box[] = [];

  constructor() {
    this.boxes = this.getBoxes();
  }

  private getBoxes(): Box[] {
    const boxes: Box[] = ITEMS.map((item, i) => {
      return {
        id: i,
        money: item
      };
    });

    return shuffle(boxes);
  }
}
