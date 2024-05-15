import { FieldWrapper } from '@ngx-formly/core';
import { FormlyBoxTemplates } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
export declare class CardWrapperComponent extends FieldWrapper {
    fieldTemplates: FormlyBoxTemplates;
    constructor(fieldTemplates: FormlyBoxTemplates);
    get nzTitle(): import("@angular/core").TemplateRef<any> | undefined;
    get nzCover(): import("@angular/core").TemplateRef<any> | undefined;
    get nzExtra(): import("@angular/core").TemplateRef<any> | undefined;
    get nzActions(): import("@angular/core").TemplateRef<any>[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CardWrapperComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardWrapperComponent, "nz-formly-card-wrapper", never, {}, {}, never, never, false, never>;
}
