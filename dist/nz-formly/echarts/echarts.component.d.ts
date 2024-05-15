import { OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NgxEchartsDirective } from 'ngx-echarts';
import * as i0 from "@angular/core";
export declare class FormlyFieldEchartsComponent extends FieldType implements OnInit {
    instance: NgxEchartsDirective;
    defaultOptions: {
        props: {
            autoResize: boolean;
            loadingType: string;
            height: string;
        };
    };
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldEchartsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldEchartsComponent, "nz-formly-echarts", never, {}, {}, never, never, false, never>;
}
