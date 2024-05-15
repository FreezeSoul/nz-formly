import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
export declare class FormlyFieldDividerComponent extends FieldType {
    fieldTemplates: FormlyBoxTemplates;
    defaultOptions: {
        props: {
            nzOrientation: string;
            nzType: string;
        };
    };
    constructor(fieldTemplates: FormlyBoxTemplates);
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldDividerComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldDividerComponent, "nz-formly-divider", never, {}, {}, never, never, false, never>;
}
