import { Routes } from '@angular/router';
import { User } from './user/user';
import { DataBinding } from './data-binding/data-binding';
import { AttributeDirective } from './attribute-directive/attribute-directive';
import { StructuralDirectives } from './structural-directives/structural-directives';
import { PageNotFound } from './page-not-found/page-not-found';
import { SignalLayout } from './signal-layout/signal-layout';
import { BuiltInPipes } from './built-in-pipes/built-in-pipes';
import { TemplateDrivenForm } from './template-driven-form/template-driven-form';
import { ReactiveForm } from './reactive-form/reactive-form';

export const routes: Routes = [
    // {path : '', component: User},
    {path : '', redirectTo: 'user', pathMatch: 'full'},
    {path : 'user', component: User},
    {path : 'data-binding', component: DataBinding},
    {path : 'structural-directives', component: StructuralDirectives},
    {path : 'attribute-directives', component: AttributeDirective},
    {path : 'signal', component: SignalLayout},
    {path : 'built-in-pipe', component: BuiltInPipes},
    {path : 'tdf', component: TemplateDrivenForm},
    {path : 'reactive-form', component: ReactiveForm},
    {path : '**', component: PageNotFound},
];
