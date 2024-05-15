import { BetweenInputFieldConfig } from '@freezesoul/nz-formly/between-input';
import { ButtonFieldConfig } from '@freezesoul/nz-formly/button';
import { AutocompleteFieldConfig, InputFieldConfig, InputNumberFieldConfig } from '@freezesoul/nz-formly/input';
import { BetweenTimeFieldConfig } from '@freezesoul/nz-formly/between-time';
import { BetweenDateTimeFieldConfig } from '@freezesoul/nz-formly/between-datetime';
import { ButtonGroupFieldConfig } from '@freezesoul/nz-formly/button-group';
import { CascaderFieldConfig } from '@freezesoul/nz-formly/cascader';
import { CheckboxFieldConfig } from '@freezesoul/nz-formly/checkbox';
import { DatePickerFieldConfig } from '@freezesoul/nz-formly/date-picker';
import { DateRangePickerFieldConfig } from '@freezesoul/nz-formly/date-range-picker';
import { DividerFieldConfig } from '@freezesoul/nz-formly/divider';
import { DropdownFieldConfig } from '@freezesoul/nz-formly/dropdown';
import { RowFieldConfig } from '@freezesoul/nz-formly/grid';
import { ModalFieldConfig } from '@freezesoul/nz-formly/modal';
import { RadioFieldConfig } from '@freezesoul/nz-formly/radio';
import { RateFieldConfig } from '@freezesoul/nz-formly/rate';
import { RefTemplateFieldConfig } from '@freezesoul/nz-formly/ref-template';
import { SelectFieldConfig } from '@freezesoul/nz-formly/select';
import { SliderFieldConfig } from '@freezesoul/nz-formly/slider';
import { SpaceFieldConfig } from '@freezesoul/nz-formly/space';
import { SwitchFieldConfig } from '@freezesoul/nz-formly/switch';
import { TableFieldConfig } from '@freezesoul/nz-formly/table';
import { TabsFieldConfig } from '@freezesoul/nz-formly/tabs';
import { TagFieldConfig } from '@freezesoul/nz-formly/tag';
import { TextareaFieldConfig } from '@freezesoul/nz-formly/textarea';
import { TimePickerFieldConfig } from '@freezesoul/nz-formly/time-picker';
import { TreeFieldConfig } from '@freezesoul/nz-formly/tree';
import { TreeSelectFieldConfig } from '@freezesoul/nz-formly/tree-select';
import { UploadFieldConfig } from '@freezesoul/nz-formly/upload';
import { CardFieldConfig } from '@freezesoul/nz-formly/card';
import { AlertFieldConfig } from '@freezesoul/nz-formly/alert';
import { TextFieldConfig } from '@freezesoul/nz-formly/text-value';
import { FormlyFieldConfig } from '@ngx-formly/core';

export type NzFormlyFieldType =
  | Omit<BetweenInputFieldConfig, 'fieldGroup'>
  | Omit<BetweenTimeFieldConfig, 'fieldGroup'>
  | Omit<BetweenDateTimeFieldConfig, 'fieldGroup'>
  | Omit<ButtonFieldConfig, 'fieldGroup'>
  | Omit<ButtonGroupFieldConfig, 'fieldGroup'>
  | Omit<CascaderFieldConfig, 'fieldGroup'>
  | Omit<CheckboxFieldConfig, 'fieldGroup'>
  | Omit<DatePickerFieldConfig, 'fieldGroup'>
  | Omit<DateRangePickerFieldConfig, 'fieldGroup'>
  | Omit<DividerFieldConfig, 'fieldGroup'>
  | Omit<DropdownFieldConfig, 'fieldGroup'>
  | Omit<RowFieldConfig, 'fieldGroup'>
  | Omit<InputFieldConfig, 'fieldGroup'>
  | Omit<InputNumberFieldConfig, 'fieldGroup'>
  | Omit<AutocompleteFieldConfig, 'fieldGroup'>
  | Omit<ModalFieldConfig, 'fieldGroup'>
  | Omit<RadioFieldConfig, 'fieldGroup'>
  | Omit<RateFieldConfig, 'fieldGroup'>
  | Omit<RefTemplateFieldConfig, 'fieldGroup'>
  | Omit<SelectFieldConfig, 'fieldGroup'>
  | Omit<SliderFieldConfig, 'fieldGroup'>
  | Omit<SpaceFieldConfig, 'fieldGroup'>
  | Omit<SwitchFieldConfig, 'fieldGroup'>
  | Omit<TableFieldConfig, 'fieldGroup'>
  | Omit<TabsFieldConfig, 'fieldGroup'>
  | Omit<TagFieldConfig, 'fieldGroup'>
  | Omit<TextareaFieldConfig, 'fieldGroup'>
  | Omit<TimePickerFieldConfig, 'fieldGroup'>
  | Omit<TreeFieldConfig, 'fieldGroup'>
  | Omit<TreeSelectFieldConfig, 'fieldGroup'>
  | Omit<UploadFieldConfig, 'fieldGroup'>
  | Omit<CardFieldConfig, 'fieldGroup'>
  | Omit<AlertFieldConfig, 'fieldGroup'>
  | Omit<TextFieldConfig, 'fieldGroup'>
  | Omit<FormlyFieldConfig, 'fieldGroup'>;

export type NzField = NzFormlyFieldType & {
  fieldGroup?: NzField[];
  fieldArray?: NzField | ((field: NzField) => NzField);
};
