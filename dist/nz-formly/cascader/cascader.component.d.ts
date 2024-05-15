import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
export declare class FormlyFieldCascaderComponent extends FieldType {
    fieldTemplates: FormlyBoxTemplates;
    defaultOptions: {
        props: {
            nzPlaceHolder: string;
            nzExpandTrigger: string;
            nzTriggerAction: string;
            nzAllowClear: boolean;
            nzLabelProperty: string;
            nzValueProperty: string;
            nzShowArrow: boolean;
            nzShowInput: boolean;
            nzSize: string;
        };
    };
    constructor(fieldTemplates: FormlyBoxTemplates);
    get nzNotFoundContent(): import("@angular/core").TemplateRef<any> | undefined;
    get nzExpandIcon(): import("@angular/core").TemplateRef<any> | undefined;
    get nzLabelRender(): import("@angular/core").TemplateRef<any> | undefined;
    get nzOptionRender(): import("@angular/core").TemplateRef<any> | undefined;
    get nzSuffixIcon(): import("@angular/core").TemplateRef<any> | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldCascaderComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldCascaderComponent, "nz-formly-cascader-component", never, {}, {}, never, never, false, never>;
}
