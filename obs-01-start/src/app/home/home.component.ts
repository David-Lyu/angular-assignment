import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
//there are more at learnrxjs.io
import { map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSub: Subscription;

  constructor() { }

  ngOnInit() {
    // this.firstObsSub = interval(1000).subscribe(count => {
    //   console.log(count)
    // })
    //he used Observable.create() which is deprecated
    const customIntervalObs = new Observable( observer=>{
    let count = 0;
      setInterval(()=>{
        observer.next(count);
        if(count === 5) observer.complete();
        if(count > 3) observer.error(new Error("count is greater than 3!!!"));
        count++;
      }, 1000)
    });

    //for effects to happen it must be subscribed
    const custIntObsPipe = customIntervalObs.pipe(filter(data => {
      return data > 0;
      }),
      map(data=> {
        return "Round " + (data + 1);
    }));

    this.firstObsSub = custIntObsPipe.subscribe((data)=>{
      console.log(data)
    },
    error => {
      alert(error.message)
    },
    ()=> {
      console.log('completed')
    })
  }

  ngOnDestroy(): void {
    // this.firstObsSub.unsubscribe();

  }

}
