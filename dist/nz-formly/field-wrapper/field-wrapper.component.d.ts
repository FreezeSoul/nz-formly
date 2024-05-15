import { FieldWrapper } from '@ngx-formly/core';
import { FormlyBoxTemplates } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
export declare class FieldWrapperComponent extends FieldWrapper {
    fieldTemplates: FormlyBoxTemplates;
    constructor(fieldTemplates: FormlyBoxTemplates);
    get nzTooltipTitle(): import("@angular/core").TemplateRef<any> | undefined;
    get nzExtra(): import("@angular/core").TemplateRef<any> | undefined;
    get hasLabel(): boolean;
    get label(): import("@angular/core").TemplateRef<any> | undefined;
    get nzSuccessTip(): import("@angular/core").TemplateRef<any> | undefined;
    get nzValidatingTip(): import("@angular/core").TemplateRef<any> | undefined;
    get nzWarningTip(): import("@angular/core").TemplateRef<any> | undefined;
    get hasError(): false | import("@angular/forms").ValidationErrors | null;
    get validateStatus(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldWrapperComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FieldWrapperComponent, "formly-field-wrapper", never, {}, {}, never, never, false, never>;
}
