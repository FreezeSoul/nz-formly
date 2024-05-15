import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates, NzFormlyFieldConfig } from '@freezesoul/nz-formly/common';
import { CardOptions } from './formly.type';
import * as i0 from "@angular/core";
export declare class FormlyFieldCardComponent extends FieldType<NzFormlyFieldConfig<CardOptions>> {
    fieldTemplates: FormlyBoxTemplates;
    defaultOptions: {
        props: CardOptions;
    };
    constructor(fieldTemplates: FormlyBoxTemplates);
    get nzTitle(): import("@angular/core").TemplateRef<any> | undefined;
    get nzCover(): import("@angular/core").TemplateRef<any> | undefined;
    get nzExtra(): import("@angular/core").TemplateRef<any> | undefined;
    get nzActions(): import("@angular/core").TemplateRef<any>[];
    get nzContent(): import("@angular/core").TemplateRef<any> | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldCardComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldCardComponent, "nz-formly-card", never, {}, {}, never, never, false, never>;
}
