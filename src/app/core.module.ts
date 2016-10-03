import {NgModule} from '@angular/core';

import {DropdownDirective} from './dropdown.directive';
import {HomeComponent} from './home.component';
import {coreRouting} from './core.routing';

@NgModule({
  declarations: [DropdownDirective, HomeComponent],
  exports: [DropdownDirective],
  imports: [coreRouting]
})
export class CoreModule {
}
