import { FieldType } from '@ngx-formly/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { FormlyBoxTemplates } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
export declare class FormlyFieldSelectComponent extends FieldType {
    fieldTemplates: FormlyBoxTemplates;
    defaultOptions: {
        props: {
            options: never[];
            nzMode: string;
            nzAutoClearSearchValue: boolean;
            nzDropdownMatchSelectWidth: boolean;
            nzMaxMultipleCount: number;
            nzMaxTagCount: number;
            nzShowArrow: boolean;
            nzTokenSeparators: never[];
            nzOptionHeightPx: number;
            nzOptionOverflowSize: number;
            compareWith: (o1: NzSafeAny, o2: NzSafeAny) => boolean;
            nzFilterOption: (input: string, option: any) => boolean;
            defaultValue: never[];
        };
    };
    constructor(fieldTemplates: FormlyBoxTemplates);
    get nzCustomTemplate(): import("@angular/core").TemplateRef<any> | undefined;
    get nzSuffixIcon(): import("@angular/core").TemplateRef<any> | undefined;
    get nzRemoveIcon(): import("@angular/core").TemplateRef<any> | undefined;
    get nzClearIcon(): import("@angular/core").TemplateRef<any> | undefined;
    get nzMenuItemSelectedIcon(): import("@angular/core").TemplateRef<any> | undefined;
    get nzMaxTagPlaceholder(): import("@angular/core").TemplateRef<any> | undefined;
    get nzNotFoundContent(): import("@angular/core").TemplateRef<any> | undefined;
    get labelTemplate(): import("@angular/core").TemplateRef<any> | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldSelectComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldSelectComponent, "nz-formly-select-component", never, {}, {}, never, never, false, never>;
}
