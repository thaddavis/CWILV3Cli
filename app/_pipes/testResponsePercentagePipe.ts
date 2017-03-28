import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'testResponsePercentagePipe'})
export class TestResponsePercentagePipe implements PipeTransform {
  transform(s: any): string {
    var total = s.length;
    var count = 0;
    for(var i = 0; i < s.length; ++i) {
    if(s[i] == "Correct")
        count++;
    }

    return ( (count / total) * 100 ).toString() + "%";
  }
}
