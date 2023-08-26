import { interval, asyncScheduler } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/throttletime
// Example 2: Emit on trailing edge using config
const srcList$ = interval(1000);
// emit the first value, then ignore for 5 seconds. repeat...
const example = srcList$.pipe(
  throttleTime(5000, asyncScheduler, { trailing: true })
);
const subscribe = example.subscribe((val) => console.log(val));
// output: 5...11...17
