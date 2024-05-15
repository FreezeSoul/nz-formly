import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
export declare class FormlyFieldRadioComponent extends FieldType {
    fieldTemplates: FormlyBoxTemplates;
    defaultOptions: {
        props: {
            nzSize: string;
            options: never[];
        };
    };
    constructor(fieldTemplates: FormlyBoxTemplates);
    get labelTemplate(): import("@angular/core").TemplateRef<any> | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldRadioComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldRadioComponent, "nz-formly-radio-component", never, {}, {}, never, never, false, never>;
}
