import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates } from '@freezesoul/nz-formly/common';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
export declare class FormlyFieldInputComponent extends FieldType {
    fieldTemplates: FormlyBoxTemplates;
    defaultOptions: {
        props: {
            step: number;
            enableHTML: boolean;
            nzDefaultActiveFirstOption: boolean;
            nzPrecisionMode: string;
            filterFn: (item: NzSafeAny, query: string) => boolean;
            compareWith: (o1: NzSafeAny, o2: NzSafeAny) => boolean;
        };
    };
    constructor(fieldTemplates: FormlyBoxTemplates);
    get hasAddon(): boolean;
    get nzAddOnAfter(): import("@angular/core").TemplateRef<any> | undefined;
    get nzAddOnBefore(): import("@angular/core").TemplateRef<any> | undefined;
    get nzPrefix(): import("@angular/core").TemplateRef<any> | undefined;
    get nzSuffix(): import("@angular/core").TemplateRef<any> | undefined;
    get content(): import("@angular/core").TemplateRef<any> | undefined;
    get labelTemplate(): import("@angular/core").TemplateRef<any> | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldInputComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldInputComponent, "nz-formly-input", never, {}, {}, never, never, false, never>;
}
