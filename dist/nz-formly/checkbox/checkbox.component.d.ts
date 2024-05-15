import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
export declare class FormlyFieldCheckboxComponent extends FieldType {
    fieldTemplates: FormlyBoxTemplates;
    defaultOptions: {
        props: {
            options: never[];
            nzxMultiple: boolean;
            nzxLayout: string;
            nzxRequired: boolean;
        };
    };
    constructor(fieldTemplates: FormlyBoxTemplates);
    get labelTemplate(): import("@angular/core").TemplateRef<any> | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldCheckboxComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldCheckboxComponent, "nz-formly-checkbox-component", never, {}, {}, never, never, false, never>;
}
