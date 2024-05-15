import { ChangeDetectionStrategy, Component, Optional, ViewChild } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
import * as i1 from "@freezesoul/nz-formly/common";
import * as i2 from "@angular/common";
import * as i3 from "@freezesoul/nzx-antd/modal";
import * as i4 from "ng-zorro-antd/modal";
import * as i5 from "@ngx-formly/core";
export class ModalWrapperComponent extends FieldWrapper {
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
            nzOnCancel: (v, field, instance) => (field.props.nzVisible = false),
            nzOnOk: (v, field, instance) => (field.props.nzVisible = false)
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ModalWrapperComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ModalWrapperComponent, selector: "nz-formly-modal-wrapper", viewQueries: [{ propertyName: "instance", first: true, predicate: ["nzModal"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: `
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
      (nzAfterClose)="props.onAfterClose && props.onAfterClose($event, field, instance)"
      (nzAfterOpen)="props.nzAfterOpen && props.nzAfterOpen(field, instance)"
      (nzOnCancel)="props.nzOnCancel?.($event, field, instance)"
      (nzOnOk)="props.nzOnOk?.($event, field, instance)"
      (nzVisibleChange)="props.nzVisibleChange?.($event, field, instance)"
    >
      <ng-container *nzModalContent>
        <ng-container #fieldComponent></ng-container>
      </ng-container>
    </nz-modal>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.NzxModalDragDirective, selector: "nz-modal[nzxModalDrag]" }, { kind: "component", type: i4.NzModalComponent, selector: "nz-modal", inputs: ["nzMask", "nzMaskClosable", "nzCloseOnNavigation", "nzVisible", "nzClosable", "nzOkLoading", "nzOkDisabled", "nzCancelDisabled", "nzCancelLoading", "nzKeyboard", "nzNoAnimation", "nzCentered", "nzContent", "nzFooter", "nzZIndex", "nzWidth", "nzWrapClassName", "nzClassName", "nzStyle", "nzTitle", "nzCloseIcon", "nzMaskStyle", "nzBodyStyle", "nzOkText", "nzCancelText", "nzOkType", "nzOkDanger", "nzIconType", "nzModalType", "nzAutofocus", "nzOnOk", "nzOnCancel"], outputs: ["nzOnOk", "nzOnCancel", "nzAfterOpen", "nzAfterClose", "nzVisibleChange"], exportAs: ["nzModal"] }, { kind: "directive", type: i4.NzModalContentDirective, selector: "[nzModalContent]", exportAs: ["nzModalContent"] }, { kind: "directive", type: i5.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ModalWrapperComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-modal-wrapper',
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
      (nzAfterClose)="props.onAfterClose && props.onAfterClose($event, field, instance)"
      (nzAfterOpen)="props.nzAfterOpen && props.nzAfterOpen(field, instance)"
      (nzOnCancel)="props.nzOnCancel?.($event, field, instance)"
      (nzOnOk)="props.nzOnOk?.($event, field, instance)"
      (nzVisibleChange)="props.nzVisibleChange?.($event, field, instance)"
    >
      <ng-container *nzModalContent>
        <ng-container #fieldComponent></ng-container>
      </ng-container>
    </nz-modal>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { instance: [{
                type: ViewChild,
                args: ['nzModal', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvbW9kYWwtd3JhcHBlci9tb2RhbC13cmFwcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBR2hELE9BQU8sRUFBc0IsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7QUFzRGxGLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxZQUFZO0lBb0J0QjtJQW5CUyxRQUFRLENBQW9CO0lBQzNELGNBQWMsR0FBRztRQUN4QixLQUFLLEVBQUU7WUFDTCxRQUFRLEVBQUUsU0FBUztZQUNuQixtQkFBbUIsRUFBRSxJQUFJO1lBQ3pCLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLE1BQU0sRUFBRSxJQUFJO1lBQ1osVUFBVSxFQUFFLGlCQUFpQjtZQUM3QixXQUFXLEVBQUUsTUFBTTtZQUNuQixPQUFPLEVBQUUsR0FBRztZQUNaLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFdBQVcsRUFBRSxPQUFPO1lBQ3BCLFVBQVUsRUFBRSxDQUFDLENBQVksRUFBRSxLQUF3QixFQUFFLFFBQTBCLEVBQUUsRUFBRSxDQUNqRixDQUFDLEtBQUssQ0FBQyxLQUFNLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUNsQyxNQUFNLEVBQUUsQ0FBQyxDQUFZLEVBQUUsS0FBd0IsRUFBRSxRQUEwQixFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFNLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUNqSDtLQUNGLENBQUM7SUFDRixZQUErQixjQUFrQztRQUMvRCxLQUFLLEVBQUUsQ0FBQztRQURxQixtQkFBYyxHQUFkLGNBQWMsQ0FBb0I7SUFFakUsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUN4RSxDQUFDO3dHQXZDVSxxQkFBcUI7NEZBQXJCLHFCQUFxQix5TUFqRHRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOENUOzs0RkFHVSxxQkFBcUI7a0JBbkRqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThDVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7OzBCQXFCYyxRQUFROzRDQW5CbUIsUUFBUTtzQkFBL0MsU0FBUzt1QkFBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25Jbml0LCBPcHRpb25hbCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkV3JhcHBlciB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xyXG5pbXBvcnQgeyBOek1vZGFsQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9tb2RhbCc7XHJcbmltcG9ydCB7IEZvcm1seUZpZWxkQ29uZmlnIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZS9saWIvbW9kZWxzJztcclxuaW1wb3J0IHsgRm9ybWx5Qm94VGVtcGxhdGVzLCByZXNvbHZlVHBsTmFtZSB9IGZyb20gJ0BmcmVlemVzb3VsL256LWZvcm1seS9jb21tb24nO1xyXG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1mb3JtbHktbW9kYWwtd3JhcHBlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuei1tb2RhbFxyXG4gICAgICAqbmdJZj1cInByb3BzLm56VmlzaWJsZVwiXHJcbiAgICAgICNuek1vZGFsXHJcbiAgICAgIG56eE1vZGFsRHJhZ1xyXG4gICAgICBbbnpWaXNpYmxlXT1cInRydWVcIlxyXG4gICAgICBbbnpUaXRsZV09XCJwcm9wcy5sYWJlbCB8fCBuelRpdGxlXCJcclxuICAgICAgW2Zvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxyXG4gICAgICBbbnpBdXRvZm9jdXNdPVwicHJvcHMubnpBdXRvZm9jdXNcIlxyXG4gICAgICBbbnpCb2R5U3R5bGVdPVwicHJvcHMubnpCb2R5U3R5bGVcIlxyXG4gICAgICBbbnpDYW5jZWxEaXNhYmxlZF09XCJwcm9wcy5uekNhbmNlbERpc2FibGVkXCJcclxuICAgICAgW256Q2FuY2VsTG9hZGluZ109XCJwcm9wcy5uekNhbmNlbExvYWRpbmdcIlxyXG4gICAgICBbbnpDYW5jZWxUZXh0XT1cInByb3BzLm56Q2FuY2VsVGV4dFwiXHJcbiAgICAgIFtuekNlbnRlcmVkXT1cInByb3BzLm56Q2VudGVyZWRcIlxyXG4gICAgICBbbnpDbGFzc05hbWVdPVwicHJvcHMubnpDbGFzc05hbWVcIlxyXG4gICAgICBbbnpDbG9zYWJsZV09XCJwcm9wcy5uekNsb3NhYmxlXCJcclxuICAgICAgW256Q2xvc2VJY29uXT1cIm56Q2xvc2VJY29uXCJcclxuICAgICAgW256Q2xvc2VPbk5hdmlnYXRpb25dPVwicHJvcHMubnpDbG9zZU9uTmF2aWdhdGlvblwiXHJcbiAgICAgIFtuekNvbXBvbmVudFBhcmFtc109XCJwcm9wcy5uekNvbXBvbmVudFBhcmFtc1wiXHJcbiAgICAgIFtuekZvb3Rlcl09XCJuekZvb3RlclwiXHJcbiAgICAgIFtuekljb25UeXBlXT1cInByb3BzLm56SWNvblR5cGVcIlxyXG4gICAgICBbbnpLZXlib2FyZF09XCJwcm9wcy5uektleWJvYXJkXCJcclxuICAgICAgW256TWFza109XCJwcm9wcy5uek1hc2tcIlxyXG4gICAgICBbbnpNYXNrQ2xvc2FibGVdPVwicHJvcHMubnpNYXNrQ2xvc2FibGVcIlxyXG4gICAgICBbbnpNYXNrU3R5bGVdPVwicHJvcHMubnpNYXNrU3R5bGVcIlxyXG4gICAgICBbbnpNb2RhbFR5cGVdPVwicHJvcHMubnpNb2RhbFR5cGVcIlxyXG4gICAgICBbbnpOb0FuaW1hdGlvbl09XCJwcm9wcy5uek5vQW5pbWF0aW9uXCJcclxuICAgICAgW256T2tEYW5nZXJdPVwicHJvcHMubnpPa0RhbmdlclwiXHJcbiAgICAgIFtuek9rRGlzYWJsZWRdPVwicHJvcHMubnpPa0Rpc2FibGVkXCJcclxuICAgICAgW256T2tMb2FkaW5nXT1cInByb3BzLm56T2tMb2FkaW5nXCJcclxuICAgICAgW256T2tUZXh0XT1cInByb3BzLm56T2tUZXh0XCJcclxuICAgICAgW256T2tUeXBlXT1cInByb3BzLm56T2tUeXBlXCJcclxuICAgICAgW256U3R5bGVdPVwicHJvcHMubnpTdHlsZVwiXHJcbiAgICAgIFtueldpZHRoXT1cInByb3BzLm56V2lkdGhcIlxyXG4gICAgICBbbnpXcmFwQ2xhc3NOYW1lXT1cInByb3BzLm56V3JhcENsYXNzTmFtZVwiXHJcbiAgICAgIFtuelpJbmRleF09XCJwcm9wcy5uelpJbmRleFwiXHJcbiAgICAgIChuekFmdGVyQ2xvc2UpPVwicHJvcHMub25BZnRlckNsb3NlICYmIHByb3BzLm9uQWZ0ZXJDbG9zZSgkZXZlbnQsIGZpZWxkLCBpbnN0YW5jZSlcIlxyXG4gICAgICAobnpBZnRlck9wZW4pPVwicHJvcHMubnpBZnRlck9wZW4gJiYgcHJvcHMubnpBZnRlck9wZW4oZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIChuek9uQ2FuY2VsKT1cInByb3BzLm56T25DYW5jZWw/LigkZXZlbnQsIGZpZWxkLCBpbnN0YW5jZSlcIlxyXG4gICAgICAobnpPbk9rKT1cInByb3BzLm56T25Paz8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIChuelZpc2libGVDaGFuZ2UpPVwicHJvcHMubnpWaXNpYmxlQ2hhbmdlPy4oJGV2ZW50LCBmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAgID5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpNb2RhbENvbnRlbnQ+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAjZmllbGRDb21wb25lbnQ+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uei1tb2RhbD5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbFdyYXBwZXJDb21wb25lbnQgZXh0ZW5kcyBGaWVsZFdyYXBwZXIgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBWaWV3Q2hpbGQoJ256TW9kYWwnLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnN0YW5jZSE6IE56TW9kYWxDb21wb25lbnQ7XHJcbiAgb3ZlcnJpZGUgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBuek9rVHlwZTogJ3ByaW1hcnknLFxyXG4gICAgICBuekNsb3NlT25OYXZpZ2F0aW9uOiB0cnVlLFxyXG4gICAgICBuek1hc2tDbG9zYWJsZTogZmFsc2UsXHJcbiAgICAgIG56S2V5Ym9hcmQ6IGZhbHNlLFxyXG4gICAgICBuekNsb3NhYmxlOiB0cnVlLFxyXG4gICAgICBuek1hc2s6IHRydWUsXHJcbiAgICAgIG56SWNvblR5cGU6ICdxdWVzdGlvbi1jaXJjbGUnLFxyXG4gICAgICBuekF1dG9mb2N1czogJ2F1dG8nLFxyXG4gICAgICBueldpZHRoOiA1MjAsXHJcbiAgICAgIG56VmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIG56Q2xvc2VJY29uOiAnY2xvc2UnLFxyXG4gICAgICBuek9uQ2FuY2VsOiAodjogTnpTYWZlQW55LCBmaWVsZDogRm9ybWx5RmllbGRDb25maWcsIGluc3RhbmNlOiBOek1vZGFsQ29tcG9uZW50KSA9PlxyXG4gICAgICAgIChmaWVsZC5wcm9wcyEubnpWaXNpYmxlID0gZmFsc2UpLFxyXG4gICAgICBuek9uT2s6ICh2OiBOelNhZmVBbnksIGZpZWxkOiBGb3JtbHlGaWVsZENvbmZpZywgaW5zdGFuY2U6IE56TW9kYWxDb21wb25lbnQpID0+IChmaWVsZC5wcm9wcyEubnpWaXNpYmxlID0gZmFsc2UpXHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwdWJsaWMgZmllbGRUZW1wbGF0ZXM6IEZvcm1seUJveFRlbXBsYXRlcykge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5wcm9wcy5pbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2U7XHJcbiAgICB0aGlzLnByb3BzLmluaXQ/Lih0aGlzLmluc3RhbmNlLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIGdldCBuelRpdGxlKCkge1xyXG4gICAgcmV0dXJuIHJlc29sdmVUcGxOYW1lKHRoaXMucHJvcHMsIHRoaXMuZmllbGRUZW1wbGF0ZXMsICduelRpdGxlJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpGb290ZXIoKSB7XHJcbiAgICByZXR1cm4gcmVzb2x2ZVRwbE5hbWUodGhpcy5wcm9wcywgdGhpcy5maWVsZFRlbXBsYXRlcywgJ256Rm9vdGVyJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpDbG9zZUljb24oKSB7XHJcbiAgICByZXR1cm4gcmVzb2x2ZVRwbE5hbWUodGhpcy5wcm9wcywgdGhpcy5maWVsZFRlbXBsYXRlcywgJ256Q2xvc2VJY29uJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==