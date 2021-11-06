import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MsgService {
  private _userMsg$ = new BehaviorSubject<string>('');
  public userMsg$ = this._userMsg$.asObservable();

  private _timeout!: any;
  public setMsg(msg: string ='') {
    clearTimeout(this._timeout);
    this._userMsg$.next(msg);
    this._timeout = setTimeout(() => {
      this._userMsg$.next('');
    }, 2500);
  }
}
