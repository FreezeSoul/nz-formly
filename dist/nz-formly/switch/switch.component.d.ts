import { FieldType } from '@ngx-formly/core';
import { SwitchOptions } from './formly.type';
import { NzFormlyFieldConfig } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
export declare class FormlyFieldSwitchComponent extends FieldType<NzFormlyFieldConfig<SwitchOptions>> {
    defaultOptions: {
        props: {
            nzxCheckedValue: boolean;
            nzxUnCheckedValue: boolean;
        };
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldSwitchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldSwitchComponent, "nz-formly-switch-component", never, {}, {}, never, never, false, never>;
}
