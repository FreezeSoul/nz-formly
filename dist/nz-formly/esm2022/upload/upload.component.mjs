import { Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
import * as i1 from "@freezesoul/nz-formly/common";
import * as i2 from "@freezesoul/nzx-antd/upload";
import * as i3 from "@ngx-formly/core";
import * as i4 from "@angular/forms";
export class FormlyFieldUploadComponent extends FieldType {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi91cGxvYWQvdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUEyQyxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7O0FBb0R2RyxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsU0FBNkM7SUFjNUQ7SUFidEIsY0FBYyxHQUFHO1FBQ3hCLEtBQUssRUFBRTtZQUNMLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLHVCQUF1QixFQUFFLElBQUk7WUFDN0IsUUFBUSxFQUFFLEVBQUU7WUFDWixVQUFVLEVBQUUsTUFBTTtZQUNsQixNQUFNLEVBQUUsTUFBTTtZQUNkLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsWUFBWSxFQUFFLElBQUk7WUFDbEIsbUJBQW1CLEVBQUUsY0FBYztTQUNuQjtLQUNuQixDQUFDO0lBRUYsWUFBK0IsY0FBa0M7UUFDL0QsS0FBSyxFQUFFLENBQUM7UUFEcUIsbUJBQWMsR0FBZCxjQUFjLENBQW9CO0lBRWpFLENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBQ0QsSUFBSSxnQkFBZ0I7UUFDbEIsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDN0UsQ0FBQzt3R0EzQlUsMEJBQTBCOzRGQUExQiwwQkFBMEIsK0VBL0MzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkNUOzs0RkFFVSwwQkFBMEI7a0JBakR0QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkNUO2lCQUNGOzswQkFlYyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcclxuaW1wb3J0IHsgRm9ybWx5Qm94VGVtcGxhdGVzLCBOekZvcm1seUZpZWxkQ29uZmlnLCByZXNvbHZlVHBsTmFtZSB9IGZyb20gJ0BmcmVlemVzb3VsL256LWZvcm1seS9jb21tb24nO1xyXG5pbXBvcnQgeyBVcGxvYWRPcHRpb25zIH0gZnJvbSAnLi9mb3JtbHkudHlwZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWZvcm1seS11cGxvYWQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bnp4LXVwbG9hZFxyXG4gICAgICAjaW5zdGFuY2VcclxuICAgICAgW2Zvcm1Db250cm9sXT1cIiRhbnkoZm9ybUNvbnRyb2wpXCJcclxuICAgICAgW2Zvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxyXG4gICAgICBbbnpUeXBlXT1cInByb3BzLm56VHlwZVwiXHJcbiAgICAgIFtuekFjY2VwdF09XCJwcm9wcy5uekFjY2VwdFwiXHJcbiAgICAgIFtuekFjdGlvbl09XCJwcm9wcy5uekFjdGlvblwiXHJcbiAgICAgIFtuekRpcmVjdG9yeV09XCJwcm9wcy5uekRpcmVjdG9yeVwiXHJcbiAgICAgIFtuek9wZW5GaWxlRGlhbG9nT25DbGlja109XCJwcm9wcy5uek9wZW5GaWxlRGlhbG9nT25DbGlja1wiXHJcbiAgICAgIFtuekJlZm9yZVVwbG9hZF09XCJwcm9wcy5uekJlZm9yZVVwbG9hZFwiXHJcbiAgICAgIFtuekN1c3RvbVJlcXVlc3RdPVwicHJvcHMubnpDdXN0b21SZXF1ZXN0XCJcclxuICAgICAgW256RGF0YV09XCJwcm9wcy5uekRhdGFcIlxyXG4gICAgICBbbnpGaWx0ZXJdPVwicHJvcHMubnpGaWx0ZXJcIlxyXG4gICAgICBbbnpEaXNhYmxlZF09XCJwcm9wcy5uekRpc2FibGVkIHx8IHByb3BzLmRpc2FibGVkIHx8IGZvcm1Db250cm9sPy5kaXNhYmxlZFwiXHJcbiAgICAgIFtuekhlYWRlcnNdPVwicHJvcHMubnpIZWFkZXJzXCJcclxuICAgICAgW256TGlzdFR5cGVdPVwicHJvcHMubnpMaXN0VHlwZVwiXHJcbiAgICAgIFtuek11bHRpcGxlXT1cInByb3BzLm56TXVsdGlwbGVcIlxyXG4gICAgICBbbnpOYW1lXT1cInByb3BzLm56TmFtZVwiXHJcbiAgICAgIFtuelNob3dVcGxvYWRMaXN0XT1cInByb3BzLm56U2hvd1VwbG9hZExpc3RcIlxyXG4gICAgICBbbnpTaG93QnV0dG9uXT1cInByb3BzLm56U2hvd0J1dHRvblwiXHJcbiAgICAgIFtueldpdGhDcmVkZW50aWFsc109XCJwcm9wcy5ueldpdGhDcmVkZW50aWFsc1wiXHJcbiAgICAgIFtuelJlbW92ZV09XCJwcm9wcy5uelJlbW92ZVwiXHJcbiAgICAgIFtuelByZXZpZXddPVwicHJvcHMubnpQcmV2aWV3XCJcclxuICAgICAgW256UHJldmlld0ZpbGVdPVwicHJvcHMubnpQcmV2aWV3RmlsZVwiXHJcbiAgICAgIFtuelByZXZpZXdJc0ltYWdlXT1cInByb3BzLm56UHJldmlld0lzSW1hZ2VcIlxyXG4gICAgICBbbnpUcmFuc2Zvcm1GaWxlXT1cInByb3BzLm56VHJhbnNmb3JtRmlsZVwiXHJcbiAgICAgIFtuekRvd25sb2FkXT1cInByb3BzLm56RG93bmxvYWRcIlxyXG4gICAgICBbbnpJY29uUmVuZGVyXT1cIm56SWNvblJlbmRlclwiXHJcbiAgICAgIFtuekZpbGVMaXN0UmVuZGVyXT1cIm56RmlsZUxpc3RSZW5kZXJcIlxyXG4gICAgICBbbnpTaXplXT1cInByb3BzLm56U2l6ZVwiXHJcbiAgICAgIFtuekxpbWl0XT1cInByb3BzLm56TGltaXRcIlxyXG4gICAgICBbbnp4U2hvd1VwbG9hZEJ1dHRvbkljb25dPVwicHJvcHMubnp4U2hvd1VwbG9hZEJ1dHRvbkljb25cIlxyXG4gICAgICBbbnp4SGludF09XCJwcm9wcy5uenhIaW50XCJcclxuICAgICAgW256eFVwbG9hZEJ1dHRvbl09XCJ1cGxvYWRCdXR0b25cIlxyXG4gICAgICBbbnp4VXBsb2FkQnV0dG9uSWNvbl09XCJwcm9wcy5uenhVcGxvYWRCdXR0b25JY29uXCJcclxuICAgICAgW256eEZpbGVOYW1lRHVwbGljYXRlXT1cInByb3BzLm56eEZpbGVOYW1lRHVwbGljYXRlXCJcclxuICAgICAgW256eFZhbGlkYXRlTWVzc2FnZV09XCJwcm9wcy5uenhWYWxpZGF0ZU1lc3NhZ2VcIlxyXG4gICAgICBbbnp4RmlsZU5hbWVMZW5ndGhdPVwicHJvcHMubnp4RmlsZU5hbWVMZW5ndGhcIlxyXG4gICAgICBbbnp4U2hvd1ZhbGlkYXRlTWVzc2FnZV09XCJwcm9wcy5uenhTaG93VmFsaWRhdGVNZXNzYWdlXCJcclxuICAgICAgW256VG90YWxTaXplXT1cInByb3BzLm56VG90YWxTaXplXCJcclxuICAgICAgW256RmlsZVR5cGVdPVwicHJvcHMubnpGaWxlVHlwZVwiXHJcbiAgICAgIChuekNoYW5nZSk9XCJwcm9wcy5uekNoYW5nZT8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIChuekZpbGVMaXN0Q2hhbmdlKT1cInByb3BzLm56RmlsZUxpc3RDaGFuZ2U/LigkZXZlbnQsIGZpZWxkLCBpbnN0YW5jZSlcIlxyXG4gICAgPjwvbnp4LXVwbG9hZD5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtbHlGaWVsZFVwbG9hZENvbXBvbmVudCBleHRlbmRzIEZpZWxkVHlwZTxOekZvcm1seUZpZWxkQ29uZmlnPFVwbG9hZE9wdGlvbnM+PiB7XHJcbiAgb3ZlcnJpZGUgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBuelR5cGU6ICdzZWxlY3QnLFxyXG4gICAgICBuek9wZW5GaWxlRGlhbG9nT25DbGljazogdHJ1ZSxcclxuICAgICAgbnpGaWx0ZXI6IFtdLFxyXG4gICAgICBuekxpc3RUeXBlOiAndGV4dCcsXHJcbiAgICAgIG56TmFtZTogJ2ZpbGUnLFxyXG4gICAgICBuelNob3dVcGxvYWRMaXN0OiB0cnVlLFxyXG4gICAgICBuelNob3dCdXR0b246IHRydWUsXHJcbiAgICAgIG56eFVwbG9hZEJ1dHRvbkljb246ICdjbG91ZC11cGxvYWQnXHJcbiAgICB9IGFzIFVwbG9hZE9wdGlvbnNcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwdWJsaWMgZmllbGRUZW1wbGF0ZXM6IEZvcm1seUJveFRlbXBsYXRlcykge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGdldCB1cGxvYWRCdXR0b24oKSB7XHJcbiAgICByZXR1cm4gcmVzb2x2ZVRwbE5hbWUodGhpcy5wcm9wcywgdGhpcy5maWVsZFRlbXBsYXRlcywgJ3VwbG9hZEJ1dHRvbicpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56SWNvblJlbmRlcigpIHtcclxuICAgIHJldHVybiByZXNvbHZlVHBsTmFtZSh0aGlzLnByb3BzLCB0aGlzLmZpZWxkVGVtcGxhdGVzLCAnbnpJY29uUmVuZGVyJyk7XHJcbiAgfVxyXG4gIGdldCBuekZpbGVMaXN0UmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIHJlc29sdmVUcGxOYW1lKHRoaXMucHJvcHMsIHRoaXMuZmllbGRUZW1wbGF0ZXMsICduekZpbGVMaXN0UmVuZGVyJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==