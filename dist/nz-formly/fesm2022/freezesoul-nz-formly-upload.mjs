import * as i0 from '@angular/core';
import { Component, Optional, NgModule } from '@angular/core';
import * as i3 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@freezesoul/nz-formly/common';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i2 from '@freezesoul/nzx-antd/upload';
import { NzxUploadModule } from '@freezesoul/nzx-antd/upload';
import * as i4 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

class FormlyFieldUploadComponent extends FieldType {
    fieldTemplates;
    defaultOptions = {
        props: {
            nzType: 'select',
            nzOpenFileDialogOnClick: true,
            nzFilter: [],
            nzListType: 'text',
            nzName: 'file',
            nzShowUploadList: true,
            nzShowButton: true,
            nzxUploadButtonIcon: 'cloud-upload'
        }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    get uploadButton() {
        return resolveTplName(this.props, this.fieldTemplates, 'uploadButton');
    }
    get nzIconRender() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzIconRender');
    }
    get nzFileListRender() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzFileListRender');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldUploadComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldUploadComponent, selector: "nz-formly-upload", usesInheritance: true, ngImport: i0, template: `
    <nzx-upload
      #instance
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzType]="props.nzType"
      [nzAccept]="props.nzAccept"
      [nzAction]="props.nzAction"
      [nzDirectory]="props.nzDirectory"
      [nzOpenFileDialogOnClick]="props.nzOpenFileDialogOnClick"
      [nzBeforeUpload]="props.nzBeforeUpload"
      [nzCustomRequest]="props.nzCustomRequest"
      [nzData]="props.nzData"
      [nzFilter]="props.nzFilter"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzHeaders]="props.nzHeaders"
      [nzListType]="props.nzListType"
      [nzMultiple]="props.nzMultiple"
      [nzName]="props.nzName"
      [nzShowUploadList]="props.nzShowUploadList"
      [nzShowButton]="props.nzShowButton"
      [nzWithCredentials]="props.nzWithCredentials"
      [nzRemove]="props.nzRemove"
      [nzPreview]="props.nzPreview"
      [nzPreviewFile]="props.nzPreviewFile"
      [nzPreviewIsImage]="props.nzPreviewIsImage"
      [nzTransformFile]="props.nzTransformFile"
      [nzDownload]="props.nzDownload"
      [nzIconRender]="nzIconRender"
      [nzFileListRender]="nzFileListRender"
      [nzSize]="props.nzSize"
      [nzLimit]="props.nzLimit"
      [nzxShowUploadButtonIcon]="props.nzxShowUploadButtonIcon"
      [nzxHint]="props.nzxHint"
      [nzxUploadButton]="uploadButton"
      [nzxUploadButtonIcon]="props.nzxUploadButtonIcon"
      [nzxFileNameDuplicate]="props.nzxFileNameDuplicate"
      [nzxValidateMessage]="props.nzxValidateMessage"
      [nzxFileNameLength]="props.nzxFileNameLength"
      [nzxShowValidateMessage]="props.nzxShowValidateMessage"
      [nzTotalSize]="props.nzTotalSize"
      [nzFileType]="props.nzFileType"
      (nzChange)="props.nzChange?.($event, field, instance)"
      (nzFileListChange)="props.nzFileListChange?.($event, field, instance)"
    ></nzx-upload>
  `, isInline: true, dependencies: [{ kind: "component", type: i2.NzxUploadComponent, selector: "nzx-upload", inputs: ["nzFileList", "nzxUploadButton", "nzxHint", "nzxUploadText", "nzxShowUploadButtonIcon", "nzxUploadButtonIcon", "nzxValidateMessage", "nzType", "nzLimit", "nzxFileNameDuplicate", "nzxFileNameLength", "nzSize", "nzTotalSize", "nzFileType", "nzAccept", "nzAction", "nzDirectory", "nzOpenFileDialogOnClick", "nzxShowValidateMessage", "nzBeforeUpload", "nzCustomRequest", "nzData", "nzFilter", "nzDisabled", "nzHeaders", "nzListType", "nzMultiple", "nzName", "nzShowUploadList", "nzShowButton", "nzWithCredentials", "nzRemove", "nzPreview", "nzPreviewFile", "nzPreviewIsImage", "nzTransformFile", "nzDownload", "nzIconRender", "nzFileListRender"], outputs: ["nzChange", "nzFileListChange"] }, { kind: "directive", type: i3.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldUploadComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-upload',
                    template: `
    <nzx-upload
      #instance
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzType]="props.nzType"
      [nzAccept]="props.nzAccept"
      [nzAction]="props.nzAction"
      [nzDirectory]="props.nzDirectory"
      [nzOpenFileDialogOnClick]="props.nzOpenFileDialogOnClick"
      [nzBeforeUpload]="props.nzBeforeUpload"
      [nzCustomRequest]="props.nzCustomRequest"
      [nzData]="props.nzData"
      [nzFilter]="props.nzFilter"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzHeaders]="props.nzHeaders"
      [nzListType]="props.nzListType"
      [nzMultiple]="props.nzMultiple"
      [nzName]="props.nzName"
      [nzShowUploadList]="props.nzShowUploadList"
      [nzShowButton]="props.nzShowButton"
      [nzWithCredentials]="props.nzWithCredentials"
      [nzRemove]="props.nzRemove"
      [nzPreview]="props.nzPreview"
      [nzPreviewFile]="props.nzPreviewFile"
      [nzPreviewIsImage]="props.nzPreviewIsImage"
      [nzTransformFile]="props.nzTransformFile"
      [nzDownload]="props.nzDownload"
      [nzIconRender]="nzIconRender"
      [nzFileListRender]="nzFileListRender"
      [nzSize]="props.nzSize"
      [nzLimit]="props.nzLimit"
      [nzxShowUploadButtonIcon]="props.nzxShowUploadButtonIcon"
      [nzxHint]="props.nzxHint"
      [nzxUploadButton]="uploadButton"
      [nzxUploadButtonIcon]="props.nzxUploadButtonIcon"
      [nzxFileNameDuplicate]="props.nzxFileNameDuplicate"
      [nzxValidateMessage]="props.nzxValidateMessage"
      [nzxFileNameLength]="props.nzxFileNameLength"
      [nzxShowValidateMessage]="props.nzxShowValidateMessage"
      [nzTotalSize]="props.nzTotalSize"
      [nzFileType]="props.nzFileType"
      (nzChange)="props.nzChange?.($event, field, instance)"
      (nzFileListChange)="props.nzFileListChange?.($event, field, instance)"
    ></nzx-upload>
  `
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });

const COMPONENT = FormlyFieldUploadComponent;
class FormlyNzUploadModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzUploadModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzUploadModule, declarations: [FormlyFieldUploadComponent], imports: [CommonModule,
            NzxUploadModule, i3.FormlyModule, ReactiveFormsModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzUploadModule, imports: [CommonModule,
            NzxUploadModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'upload',
                        component: COMPONENT,
                        wrappers: ['field-wrapper']
                    }
                ]
            }),
            ReactiveFormsModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzUploadModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        NzxUploadModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'upload',
                                    component: COMPONENT,
                                    wrappers: ['field-wrapper']
                                }
                            ]
                        }),
                        ReactiveFormsModule
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldUploadComponent, FormlyNzUploadModule };
//# sourceMappingURL=freezesoul-nz-formly-upload.mjs.map
