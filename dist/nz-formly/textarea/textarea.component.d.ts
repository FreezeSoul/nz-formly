import { FieldType } from '@ngx-formly/core';
import * as i0 from "@angular/core";
export declare class FormlyFieldTextareaComponent extends FieldType {
    defaultOptions: {
        props: {
            nzComputeCharacterCount: (v: string) => number;
            nzAutosize: boolean;
            nzSize: string;
            rows: number;
        };
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldTextareaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldTextareaComponent, "nz-formly-textarea", never, {}, {}, never, never, false, never>;
}
