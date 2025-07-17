import { Routes } from '@angular/router';
import { User } from './user/user';
import { DataBinding } from './data-binding/data-binding';
import { AttributeDirective } from './attribute-directive/attribute-directive';
import { StructuralDirectives } from './structural-directives/structural-directives';
import { PageNotFound } from './page-not-found/page-not-found';
import { SignalLayout } from './signal-layout/signal-layout';

export const routes: Routes = [
    // {path : '', component: User},
    {path : '', redirectTo: 'user', pathMatch: 'full'},
    {path : 'user', component: User},
    {path : 'data-binding', component: DataBinding},
    {path : 'structural-directives', component: StructuralDirectives},
    {path : 'attribute-directives', component: AttributeDirective},
    {path : 'signal', component: SignalLayout},
    {path : '**', component: PageNotFound},
];
