import { OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NzModalComponent } from 'ng-zorro-antd/modal';
import { FormlyFieldConfig } from '@ngx-formly/core/lib/models';
import { FormlyBoxTemplates } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
export declare class FormlyFieldModalComponent extends FieldType implements OnInit {
    fieldTemplates: FormlyBoxTemplates;
    instance: NzModalComponent;
    defaultOptions: {
        props: {
            nzOkType: string;
            nzCloseOnNavigation: boolean;
            nzMaskClosable: boolean;
            nzKeyboard: boolean;
            nzClosable: boolean;
            nzMask: boolean;
            nzIconType: string;
            nzAutofocus: string;
            nzWidth: number;
            nzVisible: boolean;
            nzCloseIcon: string;
            nzOnCancel: (field: FormlyFieldConfig, instance: NzModalComponent) => boolean;
            nzOnOk: (field: FormlyFieldConfig, instance: NzModalComponent) => boolean;
        };
    };
    constructor(fieldTemplates: FormlyBoxTemplates);
    ngOnInit(): void;
    get nzTitle(): import("@angular/core").TemplateRef<any> | undefined;
    get nzFooter(): import("@angular/core").TemplateRef<any> | undefined;
    get nzCloseIcon(): import("@angular/core").TemplateRef<any> | undefined;
    get nzContent(): import("@angular/core").TemplateRef<any> | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldModalComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldModalComponent, "nz-formly-modal", never, {}, {}, never, never, false, never>;
}
