import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
export declare class FormlyFieldDatePickerComponent extends FieldType {
    fieldTemplates: FormlyBoxTemplates;
    defaultOptions: {
        props: {
            nzAllowClear: boolean;
            nzDisabled: boolean;
            nzPopupStyle: {};
            nzShowToday: boolean;
            nzShowNow: boolean;
            nzInputReadOnly: boolean;
            nzSuffixIcon: string;
        };
    };
    constructor(fieldTemplates: FormlyBoxTemplates);
    get nzRenderExtraFooter(): import("@angular/core").TemplateRef<any> | undefined;
    get nzDateRender(): import("@angular/core").TemplateRef<any> | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldDatePickerComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldDatePickerComponent, "nz-formly-date-picker-component", never, {}, {}, never, never, false, never>;
}
