import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Box } from './main/box/box.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private readonly boxOpenedSubject = new Subject<Readonly<Box>>();

  public get boxOpened$(): Observable<Readonly<Box>> {
    return this.boxOpenedSubject.asObservable();
  }

  public boxHasBeenOpened(box: Box) {
    this.boxOpenedSubject.next(box);
  }
}
