import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates, NzFormlyFieldConfig } from '@freezesoul/nz-formly/common';
import { AlertOptions } from './formly.type';
import * as i0 from "@angular/core";
export declare class FormlyFieldAlertComponent extends FieldType<NzFormlyFieldConfig<AlertOptions>> {
    fieldTemplates: FormlyBoxTemplates;
    defaultOptions: {
        props: AlertOptions;
    };
    constructor(fieldTemplates: FormlyBoxTemplates);
    get nzDescription(): import("@angular/core").TemplateRef<any> | undefined;
    get nzMessage(): import("@angular/core").TemplateRef<any> | undefined;
    get nzAction(): import("@angular/core").TemplateRef<any> | undefined;
    get nzCloseText(): import("@angular/core").TemplateRef<any> | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldAlertComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldAlertComponent, "nz-formly-alert", never, {}, {}, never, never, false, never>;
}
