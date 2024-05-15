import { OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { NzModalComponent } from 'ng-zorro-antd/modal';
import { FormlyFieldConfig } from '@ngx-formly/core/lib/models';
import { FormlyBoxTemplates } from '@freezesoul/nz-formly/common';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
export declare class ModalWrapperComponent extends FieldWrapper implements OnInit {
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
            nzOnCancel: (v: NzSafeAny, field: FormlyFieldConfig, instance: NzModalComponent) => boolean;
            nzOnOk: (v: NzSafeAny, field: FormlyFieldConfig, instance: NzModalComponent) => boolean;
        };
    };
    constructor(fieldTemplates: FormlyBoxTemplates);
    ngOnInit(): void;
    get nzTitle(): import("@angular/core").TemplateRef<any> | undefined;
    get nzFooter(): import("@angular/core").TemplateRef<any> | undefined;
    get nzCloseIcon(): import("@angular/core").TemplateRef<any> | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalWrapperComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModalWrapperComponent, "nz-formly-modal-wrapper", never, {}, {}, never, never, false, never>;
}
