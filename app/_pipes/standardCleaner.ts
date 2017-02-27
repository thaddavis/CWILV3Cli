import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'standardCleaner'})
export class StandardCleanerPipe implements PipeTransform {
  transform(s: string): string {
    return s.substring( ( s.indexOf('CONTENT.') + ('CONTENT.').length ) );
  }
}
