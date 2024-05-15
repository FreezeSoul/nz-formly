import { Component, Optional, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
import * as i1 from "@freezesoul/nz-formly/common";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/modal";
import * as i4 from "@freezesoul/nzx-antd/modal";
import * as i5 from "ng-zorro-antd/core/outlet";
import * as i6 from "@ngx-formly/core";
export class FormlyFieldModalComponent extends FieldType {
    fieldTemplates;
    instance;
    defaultOptions = {
        props: {
            nzOkType: 'primary',
            nzCloseOnNavigation: true,
            nzMaskClosable: false,
            nzKeyboard: false,
            nzClosable: true,
            nzMask: true,
            nzIconType: 'question-circle',
            nzAutofocus: 'auto',
            nzWidth: 520,
            nzVisible: false,
            nzCloseIcon: 'close',
            nzOnCancel: (field, instance) => (field.props.nzVisible = false),
            nzOnOk: (field, instance) => (field.props.nzVisible = false)
        }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    ngOnInit() {
        this.props.instance = this.instance;
        this.props.init?.(this.instance, this);
    }
    get nzTitle() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzTitle');
    }
    get nzFooter() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzFooter');
    }
    get nzCloseIcon() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzCloseIcon');
    }
    get nzContent() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzContent');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldModalComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldModalComponent, selector: "nz-formly-modal", viewQueries: [{ propertyName: "instance", first: true, predicate: ["nzModal"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: `
    <nz-modal
      *ngIf="props.nzVisible"
      #nzModal
      nzxModalDrag
      [nzVisible]="true"
      [nzTitle]="props.label || nzTitle"
      [formlyAttributes]="field"
      [nzAutofocus]="props.nzAutofocus"
      [nzBodyStyle]="props.nzBodyStyle"
      [nzCancelDisabled]="props.nzCancelDisabled"
      [nzCancelLoading]="props.nzCancelLoading"
      [nzCancelText]="props.nzCancelText"
      [nzCentered]="props.nzCentered"
      [nzClassName]="props.nzClassName"
      [nzClosable]="props.nzClosable"
      [nzCloseIcon]="nzCloseIcon"
      [nzCloseOnNavigation]="props.nzCloseOnNavigation"
      [nzComponentParams]="props.nzComponentParams"
      [nzFooter]="nzFooter"
      [nzIconType]="props.nzIconType"
      [nzKeyboard]="props.nzKeyboard"
      [nzMask]="props.nzMask"
      [nzMaskClosable]="props.nzMaskClosable"
      [nzMaskStyle]="props.nzMaskStyle"
      [nzModalType]="props.nzModalType"
      [nzNoAnimation]="props.nzNoAnimation"
      [nzOkDanger]="props.nzOkDanger"
      [nzOkDisabled]="props.nzOkDisabled"
      [nzOkLoading]="props.nzOkLoading"
      [nzOkText]="props.nzOkText"
      [nzOkType]="props.nzOkType"
      [nzStyle]="props.nzStyle"
      [nzWidth]="props.nzWidth"
      [nzWrapClassName]="props.nzWrapClassName"
      [nzZIndex]="props.nzZIndex"
      (nzAfterClose)="props.onAfterClose?.(field, instance)"
      (nzAfterOpen)="props.nzAfterOpen?.(field, instance)"
      (nzOnCancel)="props.nzOnCancel(field, instance)"
      (nzOnOk)="props.nzOnOk(field, instance)"
      (nzVisibleChange)="props.nzVisibleChange?.($event, field)"
    >
      <ng-container *nzModalContent>
        <formly-field [field]="item" *ngFor="let item of field.fieldGroup"></formly-field>
        <ng-container *nzStringTemplateOutlet="nzContent; context: { $implicit: field, options: props }">
          {{ nzContent }}
        </ng-container>
      </ng-container>
    </nz-modal>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.NzModalComponent, selector: "nz-modal", inputs: ["nzMask", "nzMaskClosable", "nzCloseOnNavigation", "nzVisible", "nzClosable", "nzOkLoading", "nzOkDisabled", "nzCancelDisabled", "nzCancelLoading", "nzKeyboard", "nzNoAnimation", "nzCentered", "nzContent", "nzFooter", "nzZIndex", "nzWidth", "nzWrapClassName", "nzClassName", "nzStyle", "nzTitle", "nzCloseIcon", "nzMaskStyle", "nzBodyStyle", "nzOkText", "nzCancelText", "nzOkType", "nzOkDanger", "nzIconType", "nzModalType", "nzAutofocus", "nzOnOk", "nzOnCancel"], outputs: ["nzOnOk", "nzOnCancel", "nzAfterOpen", "nzAfterClose", "nzVisibleChange"], exportAs: ["nzModal"] }, { kind: "directive", type: i3.NzModalContentDirective, selector: "[nzModalContent]", exportAs: ["nzModalContent"] }, { kind: "directive", type: i4.NzxModalDragDirective, selector: "nz-modal[nzxModalDrag]" }, { kind: "directive", type: i5.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "component", type: i6.FormlyField, selector: "formly-field", inputs: ["field"] }, { kind: "directive", type: i6.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldModalComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-modal',
                    template: `
    <nz-modal
      *ngIf="props.nzVisible"
      #nzModal
      nzxModalDrag
      [nzVisible]="true"
      [nzTitle]="props.label || nzTitle"
      [formlyAttributes]="field"
      [nzAutofocus]="props.nzAutofocus"
      [nzBodyStyle]="props.nzBodyStyle"
      [nzCancelDisabled]="props.nzCancelDisabled"
      [nzCancelLoading]="props.nzCancelLoading"
      [nzCancelText]="props.nzCancelText"
      [nzCentered]="props.nzCentered"
      [nzClassName]="props.nzClassName"
      [nzClosable]="props.nzClosable"
      [nzCloseIcon]="nzCloseIcon"
      [nzCloseOnNavigation]="props.nzCloseOnNavigation"
      [nzComponentParams]="props.nzComponentParams"
      [nzFooter]="nzFooter"
      [nzIconType]="props.nzIconType"
      [nzKeyboard]="props.nzKeyboard"
      [nzMask]="props.nzMask"
      [nzMaskClosable]="props.nzMaskClosable"
      [nzMaskStyle]="props.nzMaskStyle"
      [nzModalType]="props.nzModalType"
      [nzNoAnimation]="props.nzNoAnimation"
      [nzOkDanger]="props.nzOkDanger"
      [nzOkDisabled]="props.nzOkDisabled"
      [nzOkLoading]="props.nzOkLoading"
      [nzOkText]="props.nzOkText"
      [nzOkType]="props.nzOkType"
      [nzStyle]="props.nzStyle"
      [nzWidth]="props.nzWidth"
      [nzWrapClassName]="props.nzWrapClassName"
      [nzZIndex]="props.nzZIndex"
      (nzAfterClose)="props.onAfterClose?.(field, instance)"
      (nzAfterOpen)="props.nzAfterOpen?.(field, instance)"
      (nzOnCancel)="props.nzOnCancel(field, instance)"
      (nzOnOk)="props.nzOnOk(field, instance)"
      (nzVisibleChange)="props.nzVisibleChange?.($event, field)"
    >
      <ng-container *nzModalContent>
        <formly-field [field]="item" *ngFor="let item of field.fieldGroup"></formly-field>
        <ng-container *nzStringTemplateOutlet="nzContent; context: { $implicit: field, options: props }">
          {{ nzContent }}
        </ng-container>
      </ng-container>
    </nz-modal>
  `
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { instance: [{
                type: ViewChild,
                args: ['nzModal', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbGliL21vZGFsL21vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRzdDLE9BQU8sRUFBc0IsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7O0FBdURsRixNQUFNLE9BQU8seUJBQTBCLFNBQVEsU0FBUztJQW1CdkI7SUFsQlMsUUFBUSxDQUFvQjtJQUMzRCxjQUFjLEdBQUc7UUFDeEIsS0FBSyxFQUFFO1lBQ0wsUUFBUSxFQUFFLFNBQVM7WUFDbkIsbUJBQW1CLEVBQUUsSUFBSTtZQUN6QixjQUFjLEVBQUUsS0FBSztZQUNyQixVQUFVLEVBQUUsS0FBSztZQUNqQixVQUFVLEVBQUUsSUFBSTtZQUNoQixNQUFNLEVBQUUsSUFBSTtZQUNaLFVBQVUsRUFBRSxpQkFBaUI7WUFDN0IsV0FBVyxFQUFFLE1BQU07WUFDbkIsT0FBTyxFQUFFLEdBQUc7WUFDWixTQUFTLEVBQUUsS0FBSztZQUNoQixXQUFXLEVBQUUsT0FBTztZQUNwQixVQUFVLEVBQUUsQ0FBQyxLQUF3QixFQUFFLFFBQTBCLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQU0sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3RHLE1BQU0sRUFBRSxDQUFDLEtBQXdCLEVBQUUsUUFBMEIsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDbkc7S0FDRixDQUFDO0lBQ0YsWUFBK0IsY0FBa0M7UUFDL0QsS0FBSyxFQUFFLENBQUM7UUFEcUIsbUJBQWMsR0FBZCxjQUFjLENBQW9CO0lBRWpFLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN0RSxDQUFDO3dHQTFDVSx5QkFBeUI7NEZBQXpCLHlCQUF5QixpTUFuRDFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaURUOzs0RkFFVSx5QkFBeUI7a0JBckRyQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWlEVDtpQkFDRjs7MEJBb0JjLFFBQVE7NENBbEJtQixRQUFRO3NCQUEvQyxTQUFTO3VCQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3B0aW9uYWwsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcclxuaW1wb3J0IHsgTnpNb2RhbENvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvbW9kYWwnO1xyXG5pbXBvcnQgeyBGb3JtbHlGaWVsZENvbmZpZyB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUvbGliL21vZGVscyc7XHJcbmltcG9ydCB7IEZvcm1seUJveFRlbXBsYXRlcywgcmVzb2x2ZVRwbE5hbWUgfSBmcm9tICdAZnJlZXplc291bC9uei1mb3JtbHkvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotZm9ybWx5LW1vZGFsJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG56LW1vZGFsXHJcbiAgICAgICpuZ0lmPVwicHJvcHMubnpWaXNpYmxlXCJcclxuICAgICAgI256TW9kYWxcclxuICAgICAgbnp4TW9kYWxEcmFnXHJcbiAgICAgIFtuelZpc2libGVdPVwidHJ1ZVwiXHJcbiAgICAgIFtuelRpdGxlXT1cInByb3BzLmxhYmVsIHx8IG56VGl0bGVcIlxyXG4gICAgICBbZm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiXHJcbiAgICAgIFtuekF1dG9mb2N1c109XCJwcm9wcy5uekF1dG9mb2N1c1wiXHJcbiAgICAgIFtuekJvZHlTdHlsZV09XCJwcm9wcy5uekJvZHlTdHlsZVwiXHJcbiAgICAgIFtuekNhbmNlbERpc2FibGVkXT1cInByb3BzLm56Q2FuY2VsRGlzYWJsZWRcIlxyXG4gICAgICBbbnpDYW5jZWxMb2FkaW5nXT1cInByb3BzLm56Q2FuY2VsTG9hZGluZ1wiXHJcbiAgICAgIFtuekNhbmNlbFRleHRdPVwicHJvcHMubnpDYW5jZWxUZXh0XCJcclxuICAgICAgW256Q2VudGVyZWRdPVwicHJvcHMubnpDZW50ZXJlZFwiXHJcbiAgICAgIFtuekNsYXNzTmFtZV09XCJwcm9wcy5uekNsYXNzTmFtZVwiXHJcbiAgICAgIFtuekNsb3NhYmxlXT1cInByb3BzLm56Q2xvc2FibGVcIlxyXG4gICAgICBbbnpDbG9zZUljb25dPVwibnpDbG9zZUljb25cIlxyXG4gICAgICBbbnpDbG9zZU9uTmF2aWdhdGlvbl09XCJwcm9wcy5uekNsb3NlT25OYXZpZ2F0aW9uXCJcclxuICAgICAgW256Q29tcG9uZW50UGFyYW1zXT1cInByb3BzLm56Q29tcG9uZW50UGFyYW1zXCJcclxuICAgICAgW256Rm9vdGVyXT1cIm56Rm9vdGVyXCJcclxuICAgICAgW256SWNvblR5cGVdPVwicHJvcHMubnpJY29uVHlwZVwiXHJcbiAgICAgIFtuektleWJvYXJkXT1cInByb3BzLm56S2V5Ym9hcmRcIlxyXG4gICAgICBbbnpNYXNrXT1cInByb3BzLm56TWFza1wiXHJcbiAgICAgIFtuek1hc2tDbG9zYWJsZV09XCJwcm9wcy5uek1hc2tDbG9zYWJsZVwiXHJcbiAgICAgIFtuek1hc2tTdHlsZV09XCJwcm9wcy5uek1hc2tTdHlsZVwiXHJcbiAgICAgIFtuek1vZGFsVHlwZV09XCJwcm9wcy5uek1vZGFsVHlwZVwiXHJcbiAgICAgIFtuek5vQW5pbWF0aW9uXT1cInByb3BzLm56Tm9BbmltYXRpb25cIlxyXG4gICAgICBbbnpPa0Rhbmdlcl09XCJwcm9wcy5uek9rRGFuZ2VyXCJcclxuICAgICAgW256T2tEaXNhYmxlZF09XCJwcm9wcy5uek9rRGlzYWJsZWRcIlxyXG4gICAgICBbbnpPa0xvYWRpbmddPVwicHJvcHMubnpPa0xvYWRpbmdcIlxyXG4gICAgICBbbnpPa1RleHRdPVwicHJvcHMubnpPa1RleHRcIlxyXG4gICAgICBbbnpPa1R5cGVdPVwicHJvcHMubnpPa1R5cGVcIlxyXG4gICAgICBbbnpTdHlsZV09XCJwcm9wcy5uelN0eWxlXCJcclxuICAgICAgW256V2lkdGhdPVwicHJvcHMubnpXaWR0aFwiXHJcbiAgICAgIFtueldyYXBDbGFzc05hbWVdPVwicHJvcHMubnpXcmFwQ2xhc3NOYW1lXCJcclxuICAgICAgW256WkluZGV4XT1cInByb3BzLm56WkluZGV4XCJcclxuICAgICAgKG56QWZ0ZXJDbG9zZSk9XCJwcm9wcy5vbkFmdGVyQ2xvc2U/LihmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAgICAgKG56QWZ0ZXJPcGVuKT1cInByb3BzLm56QWZ0ZXJPcGVuPy4oZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIChuek9uQ2FuY2VsKT1cInByb3BzLm56T25DYW5jZWwoZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIChuek9uT2spPVwicHJvcHMubnpPbk9rKGZpZWxkLCBpbnN0YW5jZSlcIlxyXG4gICAgICAobnpWaXNpYmxlQ2hhbmdlKT1cInByb3BzLm56VmlzaWJsZUNoYW5nZT8uKCRldmVudCwgZmllbGQpXCJcclxuICAgID5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpNb2RhbENvbnRlbnQ+XHJcbiAgICAgICAgPGZvcm1seS1maWVsZCBbZmllbGRdPVwiaXRlbVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZpZWxkLmZpZWxkR3JvdXBcIj48L2Zvcm1seS1maWVsZD5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpDb250ZW50OyBjb250ZXh0OiB7ICRpbXBsaWNpdDogZmllbGQsIG9wdGlvbnM6IHByb3BzIH1cIj5cclxuICAgICAgICAgIHt7IG56Q29udGVudCB9fVxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbnotbW9kYWw+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybWx5RmllbGRNb2RhbENvbXBvbmVudCBleHRlbmRzIEZpZWxkVHlwZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQFZpZXdDaGlsZCgnbnpNb2RhbCcsIHsgc3RhdGljOiB0cnVlIH0pIGluc3RhbmNlITogTnpNb2RhbENvbXBvbmVudDtcclxuICBvdmVycmlkZSBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG56T2tUeXBlOiAncHJpbWFyeScsXHJcbiAgICAgIG56Q2xvc2VPbk5hdmlnYXRpb246IHRydWUsXHJcbiAgICAgIG56TWFza0Nsb3NhYmxlOiBmYWxzZSxcclxuICAgICAgbnpLZXlib2FyZDogZmFsc2UsXHJcbiAgICAgIG56Q2xvc2FibGU6IHRydWUsXHJcbiAgICAgIG56TWFzazogdHJ1ZSxcclxuICAgICAgbnpJY29uVHlwZTogJ3F1ZXN0aW9uLWNpcmNsZScsXHJcbiAgICAgIG56QXV0b2ZvY3VzOiAnYXV0bycsXHJcbiAgICAgIG56V2lkdGg6IDUyMCxcclxuICAgICAgbnpWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgbnpDbG9zZUljb246ICdjbG9zZScsXHJcbiAgICAgIG56T25DYW5jZWw6IChmaWVsZDogRm9ybWx5RmllbGRDb25maWcsIGluc3RhbmNlOiBOek1vZGFsQ29tcG9uZW50KSA9PiAoZmllbGQucHJvcHMhLm56VmlzaWJsZSA9IGZhbHNlKSxcclxuICAgICAgbnpPbk9rOiAoZmllbGQ6IEZvcm1seUZpZWxkQ29uZmlnLCBpbnN0YW5jZTogTnpNb2RhbENvbXBvbmVudCkgPT4gKGZpZWxkLnByb3BzIS5uelZpc2libGUgPSBmYWxzZSlcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHB1YmxpYyBmaWVsZFRlbXBsYXRlczogRm9ybWx5Qm94VGVtcGxhdGVzKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnByb3BzLmluc3RhbmNlID0gdGhpcy5pbnN0YW5jZTtcclxuICAgIHRoaXMucHJvcHMuaW5pdD8uKHRoaXMuaW5zdGFuY2UsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56VGl0bGUoKSB7XHJcbiAgICByZXR1cm4gcmVzb2x2ZVRwbE5hbWUodGhpcy5wcm9wcywgdGhpcy5maWVsZFRlbXBsYXRlcywgJ256VGl0bGUnKTtcclxuICB9XHJcblxyXG4gIGdldCBuekZvb3RlcigpIHtcclxuICAgIHJldHVybiByZXNvbHZlVHBsTmFtZSh0aGlzLnByb3BzLCB0aGlzLmZpZWxkVGVtcGxhdGVzLCAnbnpGb290ZXInKTtcclxuICB9XHJcblxyXG4gIGdldCBuekNsb3NlSWNvbigpIHtcclxuICAgIHJldHVybiByZXNvbHZlVHBsTmFtZSh0aGlzLnByb3BzLCB0aGlzLmZpZWxkVGVtcGxhdGVzLCAnbnpDbG9zZUljb24nKTtcclxuICB9XHJcblxyXG4gIGdldCBuekNvbnRlbnQoKSB7XHJcbiAgICByZXR1cm4gcmVzb2x2ZVRwbE5hbWUodGhpcy5wcm9wcywgdGhpcy5maWVsZFRlbXBsYXRlcywgJ256Q29udGVudCcpO1xyXG4gIH1cclxufVxyXG4iXX0=