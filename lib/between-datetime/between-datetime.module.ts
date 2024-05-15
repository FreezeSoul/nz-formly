import { NgModule } from '@angular/core';
import { FormlyFieldBetweenDatetimeComponent } from './between-datetime.component';
import { FormlyModule } from '@ngx-formly/core';
import { NzxBetweenDatetimeModule } from '@freezesoul/nzx-antd/between-datetime';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENT = FormlyFieldBetweenDatetimeComponent;
@NgModule({
  declarations: [FormlyFieldBetweenDatetimeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzxBetweenDatetimeModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'between-datetime',
          component: COMPONENT,
          wrappers: ['field-wrapper']
        }
      ]
    })
  ]
})
export class FormlyFieldBetweenDatetimeModule {}
