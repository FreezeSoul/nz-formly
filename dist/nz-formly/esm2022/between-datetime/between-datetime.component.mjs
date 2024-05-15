import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@freezesoul/nzx-antd/between-datetime";
import * as i3 from "@ngx-formly/core";
export class FormlyFieldBetweenDatetimeComponent extends FieldType {
    defaultOptions = {
        props: {
            nzxSize: 'default',
            nzMode: 'date',
            nzxStartPlaceholder: '起始值',
            nzxEndPlaceholder: '结束值',
            nzxStartReName: 'start',
            nzxEndReName: 'end',
            nzxStartShowNow: true,
            nzxEndShowNow: true,
            nzShowToday: true
        }
    };
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenDatetimeComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldBetweenDatetimeComponent, selector: "nz-formly-between-datetime", usesInheritance: true, ngImport: i0, template: `
    <nzx-between-datetime
      #instance
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [startMinDateTime]="props.startMinDateTime"
      [startMaxDateTime]="props.startMaxDateTime"
      [endMaxDateTime]="props.endMaxDateTime"
      [endMinDateTime]="props.endMinDateTime"
      [nzShowToday]="props.nzShowToday"
      [nzShowTime]="props.nzShowTime"
      [nzFormat]="props.nzFormat"
      [nzMode]="props.nzMode"
      [nzxDisabled]="props.nzxDisabled"
      [nzxEndAllowClear]="props.nzxEndAllowClear"
      [nzxEndAutoFocus]="props.nzxEndAutoFocus"
      [nzxEndBackdrop]="props.nzxEndBackdrop"
      [nzxEndDateRender]="props.nzxEndDateRender"
      [nzxSize]="props.nzxSize"
      [nzxEndDefaultPickerValue]="props.nzxEndDefaultPickerValue"
      [nzxEndDisabled]="props.nzxEndDisabled"
      [nzxEndDropdownClassName]="props.nzxEndDropdownClassName"
      [nzxEndId]="props.nzxEndId"
      [nzxEndInputReadOnly]="props.nzxEndInputReadOnly"
      [nzxEndPlaceholder]="props.nzxEndPlaceholder"
      [nzxEndPopupStyle]="props.nzxEndPopupStyle"
      [nzxEndReName]="props.nzxEndReName"
      [nzxEndRenderExtraFooter]="props.nzxEndRenderExtraFooter"
      [nzxEndShowNow]="props.nzxEndShowNow"
      [nzxEndShowTime]="props.nzxEndShowTime"
      [nzxEndShowToday]="props.nzxEndShowToday"
      [nzxEndSuffixIcon]="props.nzxEndSuffixIcon"
      [nzxStartAllowClear]="props.nzxStartAllowClear"
      [nzxStartAutoFocus]="props.nzxStartAutoFocus"
      [nzxStartBackdrop]="props.nzxStartBackdrop"
      [nzxStartDateRender]="props.nzxStartDateRender"
      [nzxStartDefaultPickerValue]="props.nzxStartDefaultPickerValue"
      [nzxStartDisabled]="props.nzxStartDisabled"
      [nzxStartDropdownClassName]="props.nzxStartDropdownClassName"
      [nzxStartId]="props.nzxStartId"
      [nzxStartInputReadOnly]="props.nzxStartInputReadOnly"
      [nzxStartPlaceholder]="props.nzxStartPlaceholder"
      [nzxStartPopupStyle]="props.nzxStartPopupStyle"
      [nzxStartReName]="props.nzxStartReName"
      [nzxStartRenderExtraFooter]="props.nzxStartRenderExtraFooter"
      [nzxStartShowNow]="props.nzxStartShowNow"
      [nzxStartShowTime]="props.nzxStartShowTime"
      [nzxStartShowToday]="props.nzxStartShowToday"
      [nzxStartSuffixIcon]="props.nzxStartSuffixIcon"
      (nzxEndOnCalendarChange)="props.nzxEndOnCalendarChange?.($event, field, instance)"
      (nzxEndOnOk)="props.nzxEndOnOk?.($event, field, instance)"
      (nzxEndOnOpenChange)="props.nzxEndOnOpenChange?.($event, field, instance)"
      (nzxEndOnPanelChange)="props.nzxEndOnPanelChange?.($event, field, instance)"
      (nzxStartOnCalendarChange)="props.nzxStartOnCalendarChange?.($event, field, instance)"
      (nzxStartOnOk)="props.nzxStartOnOk?.($event, field, instance)"
      (nzxStartOnOpenChange)="props.nzxStartOnOpenChange?.($event, field, instance)"
      (nzxStartOnPanelChange)="props.nzxStartOnPanelChange?.($event, field, instance)"
      ngDefaultControl
    ></nzx-between-datetime>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i2.NzxBetweenDatetimeComponent, selector: "nzx-between-datetime", inputs: ["nzMode", "nzxStartPlaceholder", "nzxEndPlaceholder", "nzxStartReName", "nzxEndReName", "nzxStartId", "nzxEndId", "nzxStartAllowClear", "nzAllowClear", "nzxEndAllowClear", "nzxStartAutoFocus", "nzxEndAutoFocus", "nzxStartBackdrop", "nzxEndBackdrop", "nzxStartDefaultPickerValue", "nzxEndDefaultPickerValue", "nzxStartShowNow", "nzxEndShowNow", "nzShowToday", "nzxStartShowToday", "nzxEndShowToday", "nzShowTime", "nzxStartShowTime", "nzxEndShowTime", "nzxStartDropdownClassName", "nzxEndDropdownClassName", "nzFormat", "nzxStartInputReadOnly", "nzxEndInputReadOnly", "nzLocale", "nzxStartPopupStyle", "nzxEndPopupStyle", "nzxStartRenderExtraFooter", "nzxEndRenderExtraFooter", "nzxStartSuffixIcon", "nzxEndSuffixIcon", "nzxStartDateRender", "nzxEndDateRender", "startMinDateTime", "endMaxDateTime", "startMaxDateTime", "endMinDateTime"], outputs: ["nzxStartOnOpenChange", "nzxEndOnOpenChange", "nzxStartOnOk", "nzxEndOnOk", "nzxStartOnCalendarChange", "nzxEndOnCalendarChange", "nzxStartOnPanelChange", "nzxEndOnPanelChange"], exportAs: ["nzxBetweenDatetime"] }, { kind: "directive", type: i3.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenDatetimeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-between-datetime',
                    template: `
    <nzx-between-datetime
      #instance
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [startMinDateTime]="props.startMinDateTime"
      [startMaxDateTime]="props.startMaxDateTime"
      [endMaxDateTime]="props.endMaxDateTime"
      [endMinDateTime]="props.endMinDateTime"
      [nzShowToday]="props.nzShowToday"
      [nzShowTime]="props.nzShowTime"
      [nzFormat]="props.nzFormat"
      [nzMode]="props.nzMode"
      [nzxDisabled]="props.nzxDisabled"
      [nzxEndAllowClear]="props.nzxEndAllowClear"
      [nzxEndAutoFocus]="props.nzxEndAutoFocus"
      [nzxEndBackdrop]="props.nzxEndBackdrop"
      [nzxEndDateRender]="props.nzxEndDateRender"
      [nzxSize]="props.nzxSize"
      [nzxEndDefaultPickerValue]="props.nzxEndDefaultPickerValue"
      [nzxEndDisabled]="props.nzxEndDisabled"
      [nzxEndDropdownClassName]="props.nzxEndDropdownClassName"
      [nzxEndId]="props.nzxEndId"
      [nzxEndInputReadOnly]="props.nzxEndInputReadOnly"
      [nzxEndPlaceholder]="props.nzxEndPlaceholder"
      [nzxEndPopupStyle]="props.nzxEndPopupStyle"
      [nzxEndReName]="props.nzxEndReName"
      [nzxEndRenderExtraFooter]="props.nzxEndRenderExtraFooter"
      [nzxEndShowNow]="props.nzxEndShowNow"
      [nzxEndShowTime]="props.nzxEndShowTime"
      [nzxEndShowToday]="props.nzxEndShowToday"
      [nzxEndSuffixIcon]="props.nzxEndSuffixIcon"
      [nzxStartAllowClear]="props.nzxStartAllowClear"
      [nzxStartAutoFocus]="props.nzxStartAutoFocus"
      [nzxStartBackdrop]="props.nzxStartBackdrop"
      [nzxStartDateRender]="props.nzxStartDateRender"
      [nzxStartDefaultPickerValue]="props.nzxStartDefaultPickerValue"
      [nzxStartDisabled]="props.nzxStartDisabled"
      [nzxStartDropdownClassName]="props.nzxStartDropdownClassName"
      [nzxStartId]="props.nzxStartId"
      [nzxStartInputReadOnly]="props.nzxStartInputReadOnly"
      [nzxStartPlaceholder]="props.nzxStartPlaceholder"
      [nzxStartPopupStyle]="props.nzxStartPopupStyle"
      [nzxStartReName]="props.nzxStartReName"
      [nzxStartRenderExtraFooter]="props.nzxStartRenderExtraFooter"
      [nzxStartShowNow]="props.nzxStartShowNow"
      [nzxStartShowTime]="props.nzxStartShowTime"
      [nzxStartShowToday]="props.nzxStartShowToday"
      [nzxStartSuffixIcon]="props.nzxStartSuffixIcon"
      (nzxEndOnCalendarChange)="props.nzxEndOnCalendarChange?.($event, field, instance)"
      (nzxEndOnOk)="props.nzxEndOnOk?.($event, field, instance)"
      (nzxEndOnOpenChange)="props.nzxEndOnOpenChange?.($event, field, instance)"
      (nzxEndOnPanelChange)="props.nzxEndOnPanelChange?.($event, field, instance)"
      (nzxStartOnCalendarChange)="props.nzxStartOnCalendarChange?.($event, field, instance)"
      (nzxStartOnOk)="props.nzxStartOnOk?.($event, field, instance)"
      (nzxStartOnOpenChange)="props.nzxStartOnOpenChange?.($event, field, instance)"
      (nzxStartOnPanelChange)="props.nzxStartOnPanelChange?.($event, field, instance)"
      ngDefaultControl
    ></nzx-between-datetime>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmV0d2Vlbi1kYXRldGltZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvYmV0d2Vlbi1kYXRldGltZS9iZXR3ZWVuLWRhdGV0aW1lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7QUFvRTdDLE1BQU0sT0FBTyxtQ0FBb0MsU0FBUSxTQUFzRDtJQUNwRyxjQUFjLEdBQUc7UUFDeEIsS0FBSyxFQUFFO1lBQ0wsT0FBTyxFQUFFLFNBQVM7WUFDbEIsTUFBTSxFQUFFLE1BQU07WUFDZCxtQkFBbUIsRUFBRSxLQUFLO1lBQzFCLGlCQUFpQixFQUFFLEtBQUs7WUFDeEIsY0FBYyxFQUFFLE9BQU87WUFDdkIsWUFBWSxFQUFFLEtBQUs7WUFDbkIsZUFBZSxFQUFFLElBQUk7WUFDckIsYUFBYSxFQUFFLElBQUk7WUFDbkIsV0FBVyxFQUFFLElBQUk7U0FDUTtLQUM1QixDQUFDO3dHQWJTLG1DQUFtQzs0RkFBbkMsbUNBQW1DLHlGQTlEcEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkRUOzs0RkFHVSxtQ0FBbUM7a0JBaEUvQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyRFQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcclxuaW1wb3J0IHsgQmV0d2VlbkRhdGV0aW1lT3B0aW9ucyB9IGZyb20gJy4vZm9ybWx5LnR5cGUnO1xyXG5pbXBvcnQgeyBOekZvcm1seUZpZWxkQ29uZmlnIH0gZnJvbSAnQGZyZWV6ZXNvdWwvbnotZm9ybWx5L2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWZvcm1seS1iZXR3ZWVuLWRhdGV0aW1lJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG56eC1iZXR3ZWVuLWRhdGV0aW1lXHJcbiAgICAgICNpbnN0YW5jZVxyXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiJGFueShmb3JtQ29udHJvbClcIlxyXG4gICAgICBbZm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiXHJcbiAgICAgIFtzdGFydE1pbkRhdGVUaW1lXT1cInByb3BzLnN0YXJ0TWluRGF0ZVRpbWVcIlxyXG4gICAgICBbc3RhcnRNYXhEYXRlVGltZV09XCJwcm9wcy5zdGFydE1heERhdGVUaW1lXCJcclxuICAgICAgW2VuZE1heERhdGVUaW1lXT1cInByb3BzLmVuZE1heERhdGVUaW1lXCJcclxuICAgICAgW2VuZE1pbkRhdGVUaW1lXT1cInByb3BzLmVuZE1pbkRhdGVUaW1lXCJcclxuICAgICAgW256U2hvd1RvZGF5XT1cInByb3BzLm56U2hvd1RvZGF5XCJcclxuICAgICAgW256U2hvd1RpbWVdPVwicHJvcHMubnpTaG93VGltZVwiXHJcbiAgICAgIFtuekZvcm1hdF09XCJwcm9wcy5uekZvcm1hdFwiXHJcbiAgICAgIFtuek1vZGVdPVwicHJvcHMubnpNb2RlXCJcclxuICAgICAgW256eERpc2FibGVkXT1cInByb3BzLm56eERpc2FibGVkXCJcclxuICAgICAgW256eEVuZEFsbG93Q2xlYXJdPVwicHJvcHMubnp4RW5kQWxsb3dDbGVhclwiXHJcbiAgICAgIFtuenhFbmRBdXRvRm9jdXNdPVwicHJvcHMubnp4RW5kQXV0b0ZvY3VzXCJcclxuICAgICAgW256eEVuZEJhY2tkcm9wXT1cInByb3BzLm56eEVuZEJhY2tkcm9wXCJcclxuICAgICAgW256eEVuZERhdGVSZW5kZXJdPVwicHJvcHMubnp4RW5kRGF0ZVJlbmRlclwiXHJcbiAgICAgIFtuenhTaXplXT1cInByb3BzLm56eFNpemVcIlxyXG4gICAgICBbbnp4RW5kRGVmYXVsdFBpY2tlclZhbHVlXT1cInByb3BzLm56eEVuZERlZmF1bHRQaWNrZXJWYWx1ZVwiXHJcbiAgICAgIFtuenhFbmREaXNhYmxlZF09XCJwcm9wcy5uenhFbmREaXNhYmxlZFwiXHJcbiAgICAgIFtuenhFbmREcm9wZG93bkNsYXNzTmFtZV09XCJwcm9wcy5uenhFbmREcm9wZG93bkNsYXNzTmFtZVwiXHJcbiAgICAgIFtuenhFbmRJZF09XCJwcm9wcy5uenhFbmRJZFwiXHJcbiAgICAgIFtuenhFbmRJbnB1dFJlYWRPbmx5XT1cInByb3BzLm56eEVuZElucHV0UmVhZE9ubHlcIlxyXG4gICAgICBbbnp4RW5kUGxhY2Vob2xkZXJdPVwicHJvcHMubnp4RW5kUGxhY2Vob2xkZXJcIlxyXG4gICAgICBbbnp4RW5kUG9wdXBTdHlsZV09XCJwcm9wcy5uenhFbmRQb3B1cFN0eWxlXCJcclxuICAgICAgW256eEVuZFJlTmFtZV09XCJwcm9wcy5uenhFbmRSZU5hbWVcIlxyXG4gICAgICBbbnp4RW5kUmVuZGVyRXh0cmFGb290ZXJdPVwicHJvcHMubnp4RW5kUmVuZGVyRXh0cmFGb290ZXJcIlxyXG4gICAgICBbbnp4RW5kU2hvd05vd109XCJwcm9wcy5uenhFbmRTaG93Tm93XCJcclxuICAgICAgW256eEVuZFNob3dUaW1lXT1cInByb3BzLm56eEVuZFNob3dUaW1lXCJcclxuICAgICAgW256eEVuZFNob3dUb2RheV09XCJwcm9wcy5uenhFbmRTaG93VG9kYXlcIlxyXG4gICAgICBbbnp4RW5kU3VmZml4SWNvbl09XCJwcm9wcy5uenhFbmRTdWZmaXhJY29uXCJcclxuICAgICAgW256eFN0YXJ0QWxsb3dDbGVhcl09XCJwcm9wcy5uenhTdGFydEFsbG93Q2xlYXJcIlxyXG4gICAgICBbbnp4U3RhcnRBdXRvRm9jdXNdPVwicHJvcHMubnp4U3RhcnRBdXRvRm9jdXNcIlxyXG4gICAgICBbbnp4U3RhcnRCYWNrZHJvcF09XCJwcm9wcy5uenhTdGFydEJhY2tkcm9wXCJcclxuICAgICAgW256eFN0YXJ0RGF0ZVJlbmRlcl09XCJwcm9wcy5uenhTdGFydERhdGVSZW5kZXJcIlxyXG4gICAgICBbbnp4U3RhcnREZWZhdWx0UGlja2VyVmFsdWVdPVwicHJvcHMubnp4U3RhcnREZWZhdWx0UGlja2VyVmFsdWVcIlxyXG4gICAgICBbbnp4U3RhcnREaXNhYmxlZF09XCJwcm9wcy5uenhTdGFydERpc2FibGVkXCJcclxuICAgICAgW256eFN0YXJ0RHJvcGRvd25DbGFzc05hbWVdPVwicHJvcHMubnp4U3RhcnREcm9wZG93bkNsYXNzTmFtZVwiXHJcbiAgICAgIFtuenhTdGFydElkXT1cInByb3BzLm56eFN0YXJ0SWRcIlxyXG4gICAgICBbbnp4U3RhcnRJbnB1dFJlYWRPbmx5XT1cInByb3BzLm56eFN0YXJ0SW5wdXRSZWFkT25seVwiXHJcbiAgICAgIFtuenhTdGFydFBsYWNlaG9sZGVyXT1cInByb3BzLm56eFN0YXJ0UGxhY2Vob2xkZXJcIlxyXG4gICAgICBbbnp4U3RhcnRQb3B1cFN0eWxlXT1cInByb3BzLm56eFN0YXJ0UG9wdXBTdHlsZVwiXHJcbiAgICAgIFtuenhTdGFydFJlTmFtZV09XCJwcm9wcy5uenhTdGFydFJlTmFtZVwiXHJcbiAgICAgIFtuenhTdGFydFJlbmRlckV4dHJhRm9vdGVyXT1cInByb3BzLm56eFN0YXJ0UmVuZGVyRXh0cmFGb290ZXJcIlxyXG4gICAgICBbbnp4U3RhcnRTaG93Tm93XT1cInByb3BzLm56eFN0YXJ0U2hvd05vd1wiXHJcbiAgICAgIFtuenhTdGFydFNob3dUaW1lXT1cInByb3BzLm56eFN0YXJ0U2hvd1RpbWVcIlxyXG4gICAgICBbbnp4U3RhcnRTaG93VG9kYXldPVwicHJvcHMubnp4U3RhcnRTaG93VG9kYXlcIlxyXG4gICAgICBbbnp4U3RhcnRTdWZmaXhJY29uXT1cInByb3BzLm56eFN0YXJ0U3VmZml4SWNvblwiXHJcbiAgICAgIChuenhFbmRPbkNhbGVuZGFyQ2hhbmdlKT1cInByb3BzLm56eEVuZE9uQ2FsZW5kYXJDaGFuZ2U/LigkZXZlbnQsIGZpZWxkLCBpbnN0YW5jZSlcIlxyXG4gICAgICAobnp4RW5kT25Payk9XCJwcm9wcy5uenhFbmRPbk9rPy4oJGV2ZW50LCBmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAgICAgKG56eEVuZE9uT3BlbkNoYW5nZSk9XCJwcm9wcy5uenhFbmRPbk9wZW5DaGFuZ2U/LigkZXZlbnQsIGZpZWxkLCBpbnN0YW5jZSlcIlxyXG4gICAgICAobnp4RW5kT25QYW5lbENoYW5nZSk9XCJwcm9wcy5uenhFbmRPblBhbmVsQ2hhbmdlPy4oJGV2ZW50LCBmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAgICAgKG56eFN0YXJ0T25DYWxlbmRhckNoYW5nZSk9XCJwcm9wcy5uenhTdGFydE9uQ2FsZW5kYXJDaGFuZ2U/LigkZXZlbnQsIGZpZWxkLCBpbnN0YW5jZSlcIlxyXG4gICAgICAobnp4U3RhcnRPbk9rKT1cInByb3BzLm56eFN0YXJ0T25Paz8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIChuenhTdGFydE9uT3BlbkNoYW5nZSk9XCJwcm9wcy5uenhTdGFydE9uT3BlbkNoYW5nZT8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIChuenhTdGFydE9uUGFuZWxDaGFuZ2UpPVwicHJvcHMubnp4U3RhcnRPblBhbmVsQ2hhbmdlPy4oJGV2ZW50LCBmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAgICAgbmdEZWZhdWx0Q29udHJvbFxyXG4gICAgPjwvbnp4LWJldHdlZW4tZGF0ZXRpbWU+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybWx5RmllbGRCZXR3ZWVuRGF0ZXRpbWVDb21wb25lbnQgZXh0ZW5kcyBGaWVsZFR5cGU8TnpGb3JtbHlGaWVsZENvbmZpZzxCZXR3ZWVuRGF0ZXRpbWVPcHRpb25zPj4ge1xyXG4gIG92ZXJyaWRlIGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbnp4U2l6ZTogJ2RlZmF1bHQnLFxyXG4gICAgICBuek1vZGU6ICdkYXRlJyxcclxuICAgICAgbnp4U3RhcnRQbGFjZWhvbGRlcjogJ+i1t+Wni+WAvCcsXHJcbiAgICAgIG56eEVuZFBsYWNlaG9sZGVyOiAn57uT5p2f5YC8JyxcclxuICAgICAgbnp4U3RhcnRSZU5hbWU6ICdzdGFydCcsXHJcbiAgICAgIG56eEVuZFJlTmFtZTogJ2VuZCcsXHJcbiAgICAgIG56eFN0YXJ0U2hvd05vdzogdHJ1ZSxcclxuICAgICAgbnp4RW5kU2hvd05vdzogdHJ1ZSxcclxuICAgICAgbnpTaG93VG9kYXk6IHRydWVcclxuICAgIH0gYXMgQmV0d2VlbkRhdGV0aW1lT3B0aW9uc1xyXG4gIH07XHJcbn1cclxuIl19