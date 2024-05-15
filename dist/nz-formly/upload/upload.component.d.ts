import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates, NzFormlyFieldConfig } from '@freezesoul/nz-formly/common';
import { UploadOptions } from './formly.type';
import * as i0 from "@angular/core";
export declare class FormlyFieldUploadComponent extends FieldType<NzFormlyFieldConfig<UploadOptions>> {
    fieldTemplates: FormlyBoxTemplates;
    defaultOptions: {
        props: UploadOptions;
    };
    constructor(fieldTemplates: FormlyBoxTemplates);
    get uploadButton(): import("@angular/core").TemplateRef<any> | undefined;
    get nzIconRender(): import("@angular/core").TemplateRef<any> | undefined;
    get nzFileListRender(): import("@angular/core").TemplateRef<any> | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldUploadComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldUploadComponent, "nz-formly-upload", never, {}, {}, never, never, false, never>;
}
