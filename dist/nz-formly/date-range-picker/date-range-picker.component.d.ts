import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
export declare class FormlyFieldDateRangePickerComponent extends FieldType {
    fieldTemplates: FormlyBoxTemplates;
    defaultOptions: {
        props: {
            nzAllowClear: boolean;
            nzDisabled: boolean;
            nzPopupStyle: {};
            nzInputReadOnly: boolean;
            nzSeparator: string;
            nzSuffixIcon: string;
        };
    };
    constructor(fieldTemplates: FormlyBoxTemplates);
    get nzRenderExtraFooter(): import("@angular/core").TemplateRef<any> | undefined;
    get nzDateRender(): import("@angular/core").TemplateRef<any> | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldDateRangePickerComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldDateRangePickerComponent, "nz-formly-date-range-picker-component", never, {}, {}, never, never, false, never>;
}
