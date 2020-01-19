import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  itemCount: number;

  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly goal for life'])
  goal = this.goals.asObservable()

  constructor() { }

  changeGoal(goal){
    this.goals.next(goal)
  }
}
