import { FieldType } from '@ngx-formly/core';
import { NzFormlyFieldConfig } from '@freezesoul/nz-formly/common';
import { SliderOptions } from './formly.type';
import { NzSliderShowTooltip } from 'ng-zorro-antd/slider';
import * as i0 from "@angular/core";
export declare class FormlyFieldSliderComponent extends FieldType<NzFormlyFieldConfig<SliderOptions>> {
    defaultOptions: {
        props: {
            nzMax: number;
            nzMin: number;
            nzStep: number;
            nzIncluded: boolean;
            nzTooltipVisible: NzSliderShowTooltip;
            nzTooltipPlacement: any;
        };
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldSliderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldSliderComponent, "nz-formly-slider-component", never, {}, {}, never, never, false, never>;
}
