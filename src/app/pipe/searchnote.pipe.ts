import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchnote'
})
export class SearchnotePipe implements PipeTransform {

  transform(locked: any, query: string): any {
    
    console.log(locked); //this shows in the console
    console.log(query); //this does not show anything in the console when typing
    if(!query) {
      return locked;
    }
    return locked.filter((note1: { title: { toLowerCase: () => { (): any; new(): any; match: { (arg0: string): number; new(): any; }; }; }; description: { toLowerCase: () => { (): any; new(): any; match: { (arg0: string): number; new(): any; }; }; }; }) => {
      return note1.title .toLowerCase().match(query.toLowerCase()) | note1.description.toLowerCase().match(query.toLowerCase());
    });
  }
}
