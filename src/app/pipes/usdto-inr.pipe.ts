import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uSDtoINR'
})
export class USDtoINRPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [rate] = args;
    return rate*value;
  }

}
