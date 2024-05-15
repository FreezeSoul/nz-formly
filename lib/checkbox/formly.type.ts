import { AsyncFormlyOptions, ControlOptions, NzFormlyFieldConfig } from '@freezesoul/nz-formly/common';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzxCheckboxOption } from '@freezesoul/nzx-antd/checkbox';
import { FieldWrapperOptions } from '@freezesoul/nz-formly/field-wrapper';

/**
 * Checkbox模板配置
 */
export type CheckboxOptions = ControlOptions & AsyncFormlyOptions<NzSafeAny, NzxCheckboxOption> & FieldWrapperOptions;

/**
 * Checkbox配置
 */
export interface CheckboxFieldConfig extends NzFormlyFieldConfig<CheckboxOptions> {
  type: 'checkbox';
}
