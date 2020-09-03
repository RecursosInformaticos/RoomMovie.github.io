import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generefilter',
})
export class GenerefilterPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    alert("este es el valor: "+arg);
      value.sort((a: any, b: any) => {
      if (a[arg] > b[arg]) {
        return -1;
      } else if (a[arg] < b[arg]) {
        return 1;
      } else {
        return 0;
      }
    });
    return value;
  
    // if (arg == '' || arg.length < 3) return value;
    // const resultmovie = [];
    // for (const iterator of value) {
    //   if (iterator.movieName.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
    //      console.log('w');
    //     resultmovie.push(iterator);
    //   }
    // }
    // return resultmovie;
  }
}
