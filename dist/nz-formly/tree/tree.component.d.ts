import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates, NzFormlyFieldConfig } from '@freezesoul/nz-formly/common';
import { TreeOptions } from './formly.type';
import * as i0 from "@angular/core";
export declare class FormlyFieldTreeComponent extends FieldType<NzFormlyFieldConfig<TreeOptions>> {
    fieldTemplates: FormlyBoxTemplates;
    defaultOptions: {
        props: {
            nzShowExpand: boolean;
            nzData: never[];
            nzSelectedKeys: never[];
            nzCheckedKeys: never[];
            nzExpandedKeys: never[];
            nzVirtualItemSize: number;
            nzVirtualMaxBufferPx: number;
            nzVirtualMinBufferPx: number;
        };
    };
    constructor(fieldTemplates: FormlyBoxTemplates);
    get nzTreeTemplate(): import("@angular/core").TemplateRef<any> | undefined;
    get nzExpandedIcon(): import("@angular/core").TemplateRef<any> | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldTreeComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldTreeComponent, "nz-formly-tree", never, {}, {}, never, never, false, never>;
}
