import { Routes } from '@angular/router';
import { AnswersComponent } from './answers/answers.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

export const routes: Routes = [
    { path: 'answers', component: AnswersComponent},
    { path: 'reactive-form', component: ReactiveFormComponent}
];
