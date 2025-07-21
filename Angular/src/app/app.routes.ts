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
import { Profile } from './profile/profile';
import { CRUD } from './crud/crud';
import { AddUser } from './add-user/add-user';
import { UpdateUser } from './update-user/update-user';
import { ViewUser } from './view-user/view-user';
import { ResourceApi } from './resource-api/resource-api';

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
    {path : 'profile', component: Profile},
    {path : 'crud', component: CRUD},
    {path : 'add-user', component: AddUser},
    {path : 'update-user/:id', component: UpdateUser},
    {path : 'view-user/:id', component: ViewUser},
    {path : 'resource-api', component: ResourceApi},
    {path : '**', component: PageNotFound},
];
