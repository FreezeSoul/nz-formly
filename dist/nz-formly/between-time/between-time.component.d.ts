import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates, NzFormlyFieldConfig } from '@freezesoul/nz-formly/common';
import { BetweenTimeOptions } from './formly.type';
import * as i0 from "@angular/core";
export declare class FormlyFieldBetweenTimeComponent extends FieldType<NzFormlyFieldConfig<BetweenTimeOptions>> {
    fieldTemplates: FormlyBoxTemplates;
    defaultOptions: {
        props: BetweenTimeOptions;
    };
    constructor(fieldTemplates: FormlyBoxTemplates);
    get nzxStartAddOn(): import("@angular/core").TemplateRef<any> | undefined;
    get nzxEndAddOn(): import("@angular/core").TemplateRef<any> | undefined;
    get nzxStartSuffixIcon(): import("@angular/core").TemplateRef<any> | undefined;
    get nzxEndSuffixIcon(): import("@angular/core").TemplateRef<any> | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldBetweenTimeComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldBetweenTimeComponent, "nz-formly-between-time", never, {}, {}, never, never, false, never>;
}
