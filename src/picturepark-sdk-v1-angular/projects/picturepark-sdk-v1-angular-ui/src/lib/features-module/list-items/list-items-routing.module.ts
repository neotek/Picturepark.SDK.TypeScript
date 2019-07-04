import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SchemasComponent } from './schemas/schemas.component';

const routes: Routes = [
  { path: '', component: SchemasComponent },
  { path: ':schemaId', component: SchemasComponent },
  { path: ':schemaId/import', component: SchemasComponent, pathMatch: 'full' },
  { path: ':schemaId/export', component: SchemasComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListItemsRoutingModule { }
