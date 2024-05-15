import { FieldArrayType } from '@ngx-formly/core';
import { FormlyBoxTemplates } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
export declare class FormlyFieldRepeatComponent extends FieldArrayType {
    fieldTemplates: FormlyBoxTemplates;
    defaultOptions: {
        props: {
            showAdd: boolean;
            addButton: string;
            maxHeight: string;
        };
    };
    constructor(fieldTemplates: FormlyBoxTemplates);
    get addButton(): import("@angular/core").TemplateRef<any> | undefined;
    get removeButton(): import("@angular/core").TemplateRef<any> | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldRepeatComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldRepeatComponent, "nz-formly-repeat", never, {}, {}, never, never, false, never>;
}
