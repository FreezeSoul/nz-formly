import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
export declare class FormlyFieldButtonComponent extends FieldType {
    fieldTemplates: FormlyBoxTemplates;
    defaultOptions: {
        props: {
            nzSize: string;
            type: string;
        };
    };
    constructor(fieldTemplates: FormlyBoxTemplates);
    get hasText(): boolean;
    get text(): import("@angular/core").TemplateRef<any> | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldButtonComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldButtonComponent, "nz-formly-button", never, {}, {}, never, never, false, never>;
}
