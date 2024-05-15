import { FieldType } from '@ngx-formly/core';
import { NzTreeNode } from 'ng-zorro-antd/tree';
import { FormlyBoxTemplates } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
export declare class FormlyFieldTreeSelectComponent extends FieldType {
    fieldTemplates: FormlyBoxTemplates;
    defaultOptions: {
        props: {
            nzDisplayWith: (node: NzTreeNode) => string;
            options: never[];
            nzVirtualItemSize: number;
            nzVirtualMaxBufferPx: number;
            nzVirtualMinBufferPx: number;
            nzDropdownStyle: {
                'max-height': string;
            };
            defaultValue: never[];
        };
    };
    constructor(fieldTemplates: FormlyBoxTemplates);
    get nzExpandedIcon(): import("@angular/core").TemplateRef<any> | undefined;
    get nzMaxTagPlaceholder(): import("@angular/core").TemplateRef<any> | undefined;
    get nzTreeTemplate(): import("@angular/core").TemplateRef<any> | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldTreeSelectComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldTreeSelectComponent, "nz-formly-tree-select-component", never, {}, {}, never, never, false, never>;
}
