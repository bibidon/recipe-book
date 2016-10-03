import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';

const CORE_ROUTES: Routes = [
  {path: '', component: HomeComponent}
];

export const coreRouting = RouterModule.forChild(CORE_ROUTES);
