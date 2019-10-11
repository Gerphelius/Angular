import { ShadowDirective } from './shadow.directive';
import { Observable, of } from 'rxjs';

describe('ShadowDirective', () => {
  
  const elem: any = {
    get: (): Observable<any> => of({}),
  }

  it('should create an instance', () => {
    const directive = new ShadowDirective(elem);
    expect(directive).toBeTruthy();
  });
});
