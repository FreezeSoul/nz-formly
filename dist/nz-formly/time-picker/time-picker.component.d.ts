import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates, NzFormlyFieldConfig } from '@freezesoul/nz-formly/common';
import { TimePickerOptions } from './formly.type';
import * as i0 from "@angular/core";
export declare class FormlyFieldTimePickerComponent extends FieldType<NzFormlyFieldConfig<TimePickerOptions>> {
    fieldTemplates: FormlyBoxTemplates;
    defaultOptions: {
        props: {
            nzAllowEmpty: boolean;
            nzFormat: string;
            nzHourStep: number;
            nzMinuteStep: number;
            nzSecondStep: number;
            nzShowToday: boolean;
            nzShowNow: boolean;
            nzInputReadOnly: boolean;
        };
    };
    constructor(fieldTemplates: FormlyBoxTemplates);
    get nzSuffixIcon(): import("@angular/core").TemplateRef<any> | undefined;
    get nzAddOn(): import("@angular/core").TemplateRef<any> | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldTimePickerComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldTimePickerComponent, "nz-formly-time-picker-component", never, {}, {}, never, never, false, never>;
}
