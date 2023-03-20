import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataFormService {
  private dataSource$ = new BehaviorSubject<any>(null);
  data$ = this.dataSource$.asObservable();
  constructor() { }

  public getData(data: any) {
    this.dataSource$.next(data);
  }
}
