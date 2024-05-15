import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
import * as i1 from "@freezesoul/nz-formly/common";
import * as i2 from "@angular/forms";
import * as i3 from "ng-zorro-antd/date-picker";
import * as i4 from "@ngx-formly/core";
export class FormlyFieldDateRangePickerComponent extends FieldType {
    fieldTemplates;
    defaultOptions = {
        props: {
            nzAllowClear: true,
            nzDisabled: false,
            nzPopupStyle: {},
            nzInputReadOnly: false,
            nzSeparator: '~',
            nzSuffixIcon: 'calendar'
        }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    get nzRenderExtraFooter() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzRenderExtraFooter');
    }
    get nzDateRender() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzDateRender');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldDateRangePickerComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldDateRangePickerComponent, selector: "nz-formly-date-range-picker-component", usesInheritance: true, ngImport: i0, template: `
    <nz-range-picker
      #instance
      style="width: 100%"
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzMode]="props.nzMode"
      [nzAllowClear]="props.nzAllowClear"
      [nzAutoFocus]="props.nzAutoFocus"
      [nzBackdrop]="props.nzBackdrop"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzDisabledDate]="props.nzDisabledDate"
      [nzPopupStyle]="props.nzPopupStyle"
      [nzDropdownClassName]="props.nzDropdownClassName"
      [nzSize]="props.nzSize"
      [nzFormat]="props.nzFormat"
      [nzInputReadOnly]="props.nzInputReadOnly"
      [nzPlaceHolder]="props.nzPlaceHolder || props.placeholder"
      [nzBorderless]="props.nzBorderless"
      [nzSuffixIcon]="props.nzSuffixIcon"
      [nzRenderExtraFooter]="nzRenderExtraFooter"
      [nzInline]="props.nzInline"
      (nzOnOpenChange)="props.nzOnOpenChange && props.nzOnOpenChange($event, field)"
      [nzStatus]="props.nzStatus"
      [nzShowToday]="props.nzShowToday"
      [nzShowNow]="props.nzShowNow"
      [nzDateRender]="props.nzDateRender"
      [nzId]="field.id || props.id"
      [nzDefaultPickerValue]="props.nzDefaultPickerValue"
      (nzOnPanelChange)="props.nzOnPanelChange && props.nzOnPanelChange($event, field, instance)"
      [nzSeparator]="props.nzSeparator"
      [nzRanges]="props.nzRanges"
      (nzOnOk)="props.nzOnOk && props.nzOnOk($event, field)"
      (nzOnCalendarChange)="props.nzOnCalendarChange && props.nzOnCalendarChange($event, field, instance)"
      [nzShowTime]="props.nzShowTime"
      [nzDisabledTime]="props.nzDisabledTime"
      ngDefaultControl
    ></nz-range-picker>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.NzDatePickerComponent, selector: "nz-date-picker,nz-week-picker,nz-month-picker,nz-year-picker,nz-range-picker", inputs: ["nzAllowClear", "nzAutoFocus", "nzDisabled", "nzBorderless", "nzInputReadOnly", "nzInline", "nzOpen", "nzDisabledDate", "nzLocale", "nzPlaceHolder", "nzPopupStyle", "nzDropdownClassName", "nzSize", "nzStatus", "nzFormat", "nzDateRender", "nzDisabledTime", "nzRenderExtraFooter", "nzShowToday", "nzMode", "nzShowNow", "nzRanges", "nzDefaultPickerValue", "nzSeparator", "nzSuffixIcon", "nzBackdrop", "nzId", "nzPlacement", "nzShowWeekNumber", "nzShowTime"], outputs: ["nzOnPanelChange", "nzOnCalendarChange", "nzOnOk", "nzOnOpenChange"], exportAs: ["nzDatePicker"] }, { kind: "directive", type: i3.NzRangePickerComponent, selector: "nz-range-picker", exportAs: ["nzRangePicker"] }, { kind: "directive", type: i4.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldDateRangePickerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-date-range-picker-component',
                    template: `
    <nz-range-picker
      #instance
      style="width: 100%"
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzMode]="props.nzMode"
      [nzAllowClear]="props.nzAllowClear"
      [nzAutoFocus]="props.nzAutoFocus"
      [nzBackdrop]="props.nzBackdrop"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzDisabledDate]="props.nzDisabledDate"
      [nzPopupStyle]="props.nzPopupStyle"
      [nzDropdownClassName]="props.nzDropdownClassName"
      [nzSize]="props.nzSize"
      [nzFormat]="props.nzFormat"
      [nzInputReadOnly]="props.nzInputReadOnly"
      [nzPlaceHolder]="props.nzPlaceHolder || props.placeholder"
      [nzBorderless]="props.nzBorderless"
      [nzSuffixIcon]="props.nzSuffixIcon"
      [nzRenderExtraFooter]="nzRenderExtraFooter"
      [nzInline]="props.nzInline"
      (nzOnOpenChange)="props.nzOnOpenChange && props.nzOnOpenChange($event, field)"
      [nzStatus]="props.nzStatus"
      [nzShowToday]="props.nzShowToday"
      [nzShowNow]="props.nzShowNow"
      [nzDateRender]="props.nzDateRender"
      [nzId]="field.id || props.id"
      [nzDefaultPickerValue]="props.nzDefaultPickerValue"
      (nzOnPanelChange)="props.nzOnPanelChange && props.nzOnPanelChange($event, field, instance)"
      [nzSeparator]="props.nzSeparator"
      [nzRanges]="props.nzRanges"
      (nzOnOk)="props.nzOnOk && props.nzOnOk($event, field)"
      (nzOnCalendarChange)="props.nzOnCalendarChange && props.nzOnCalendarChange($event, field, instance)"
      [nzShowTime]="props.nzShowTime"
      [nzDisabledTime]="props.nzDisabledTime"
      ngDefaultControl
    ></nz-range-picker>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbGliL2RhdGUtcmFuZ2UtcGlja2VyL2RhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUFzQixjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7O0FBNkNsRixNQUFNLE9BQU8sbUNBQW9DLFNBQVEsU0FBUztJQVlqQztJQVh0QixjQUFjLEdBQUc7UUFDeEIsS0FBSyxFQUFFO1lBQ0wsWUFBWSxFQUFFLElBQUk7WUFDbEIsVUFBVSxFQUFFLEtBQUs7WUFDakIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZUFBZSxFQUFFLEtBQUs7WUFDdEIsV0FBVyxFQUFFLEdBQUc7WUFDaEIsWUFBWSxFQUFFLFVBQVU7U0FDekI7S0FDRixDQUFDO0lBRUYsWUFBK0IsY0FBa0M7UUFDL0QsS0FBSyxFQUFFLENBQUM7UUFEcUIsbUJBQWMsR0FBZCxjQUFjLENBQW9CO0lBRWpFLENBQUM7SUFFRCxJQUFJLG1CQUFtQjtRQUNyQixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7d0dBdEJVLG1DQUFtQzs0RkFBbkMsbUNBQW1DLG9HQXpDcEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0NUOzs0RkFHVSxtQ0FBbUM7a0JBM0MvQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx1Q0FBdUM7b0JBQ2pELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQ1Q7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzswQkFhYyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1seUJveFRlbXBsYXRlcywgcmVzb2x2ZVRwbE5hbWUgfSBmcm9tICdAZnJlZXplc291bC9uei1mb3JtbHkvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotZm9ybWx5LWRhdGUtcmFuZ2UtcGlja2VyLWNvbXBvbmVudCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuei1yYW5nZS1waWNrZXJcclxuICAgICAgI2luc3RhbmNlXHJcbiAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxyXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiJGFueShmb3JtQ29udHJvbClcIlxyXG4gICAgICBbZm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiXHJcbiAgICAgIFtuek1vZGVdPVwicHJvcHMubnpNb2RlXCJcclxuICAgICAgW256QWxsb3dDbGVhcl09XCJwcm9wcy5uekFsbG93Q2xlYXJcIlxyXG4gICAgICBbbnpBdXRvRm9jdXNdPVwicHJvcHMubnpBdXRvRm9jdXNcIlxyXG4gICAgICBbbnpCYWNrZHJvcF09XCJwcm9wcy5uekJhY2tkcm9wXCJcclxuICAgICAgW256RGlzYWJsZWRdPVwicHJvcHMubnpEaXNhYmxlZCB8fCBwcm9wcy5kaXNhYmxlZCB8fCBmb3JtQ29udHJvbD8uZGlzYWJsZWRcIlxyXG4gICAgICBbbnpEaXNhYmxlZERhdGVdPVwicHJvcHMubnpEaXNhYmxlZERhdGVcIlxyXG4gICAgICBbbnpQb3B1cFN0eWxlXT1cInByb3BzLm56UG9wdXBTdHlsZVwiXHJcbiAgICAgIFtuekRyb3Bkb3duQ2xhc3NOYW1lXT1cInByb3BzLm56RHJvcGRvd25DbGFzc05hbWVcIlxyXG4gICAgICBbbnpTaXplXT1cInByb3BzLm56U2l6ZVwiXHJcbiAgICAgIFtuekZvcm1hdF09XCJwcm9wcy5uekZvcm1hdFwiXHJcbiAgICAgIFtueklucHV0UmVhZE9ubHldPVwicHJvcHMubnpJbnB1dFJlYWRPbmx5XCJcclxuICAgICAgW256UGxhY2VIb2xkZXJdPVwicHJvcHMubnpQbGFjZUhvbGRlciB8fCBwcm9wcy5wbGFjZWhvbGRlclwiXHJcbiAgICAgIFtuekJvcmRlcmxlc3NdPVwicHJvcHMubnpCb3JkZXJsZXNzXCJcclxuICAgICAgW256U3VmZml4SWNvbl09XCJwcm9wcy5uelN1ZmZpeEljb25cIlxyXG4gICAgICBbbnpSZW5kZXJFeHRyYUZvb3Rlcl09XCJuelJlbmRlckV4dHJhRm9vdGVyXCJcclxuICAgICAgW256SW5saW5lXT1cInByb3BzLm56SW5saW5lXCJcclxuICAgICAgKG56T25PcGVuQ2hhbmdlKT1cInByb3BzLm56T25PcGVuQ2hhbmdlICYmIHByb3BzLm56T25PcGVuQ2hhbmdlKCRldmVudCwgZmllbGQpXCJcclxuICAgICAgW256U3RhdHVzXT1cInByb3BzLm56U3RhdHVzXCJcclxuICAgICAgW256U2hvd1RvZGF5XT1cInByb3BzLm56U2hvd1RvZGF5XCJcclxuICAgICAgW256U2hvd05vd109XCJwcm9wcy5uelNob3dOb3dcIlxyXG4gICAgICBbbnpEYXRlUmVuZGVyXT1cInByb3BzLm56RGF0ZVJlbmRlclwiXHJcbiAgICAgIFtueklkXT1cImZpZWxkLmlkIHx8IHByb3BzLmlkXCJcclxuICAgICAgW256RGVmYXVsdFBpY2tlclZhbHVlXT1cInByb3BzLm56RGVmYXVsdFBpY2tlclZhbHVlXCJcclxuICAgICAgKG56T25QYW5lbENoYW5nZSk9XCJwcm9wcy5uek9uUGFuZWxDaGFuZ2UgJiYgcHJvcHMubnpPblBhbmVsQ2hhbmdlKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIFtuelNlcGFyYXRvcl09XCJwcm9wcy5uelNlcGFyYXRvclwiXHJcbiAgICAgIFtuelJhbmdlc109XCJwcm9wcy5uelJhbmdlc1wiXHJcbiAgICAgIChuek9uT2spPVwicHJvcHMubnpPbk9rICYmIHByb3BzLm56T25PaygkZXZlbnQsIGZpZWxkKVwiXHJcbiAgICAgIChuek9uQ2FsZW5kYXJDaGFuZ2UpPVwicHJvcHMubnpPbkNhbGVuZGFyQ2hhbmdlICYmIHByb3BzLm56T25DYWxlbmRhckNoYW5nZSgkZXZlbnQsIGZpZWxkLCBpbnN0YW5jZSlcIlxyXG4gICAgICBbbnpTaG93VGltZV09XCJwcm9wcy5uelNob3dUaW1lXCJcclxuICAgICAgW256RGlzYWJsZWRUaW1lXT1cInByb3BzLm56RGlzYWJsZWRUaW1lXCJcclxuICAgICAgbmdEZWZhdWx0Q29udHJvbFxyXG4gICAgPjwvbnotcmFuZ2UtcGlja2VyPlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1seUZpZWxkRGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgRmllbGRUeXBlIHtcclxuICBvdmVycmlkZSBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG56QWxsb3dDbGVhcjogdHJ1ZSxcclxuICAgICAgbnpEaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgIG56UG9wdXBTdHlsZToge30sXHJcbiAgICAgIG56SW5wdXRSZWFkT25seTogZmFsc2UsXHJcbiAgICAgIG56U2VwYXJhdG9yOiAnficsXHJcbiAgICAgIG56U3VmZml4SWNvbjogJ2NhbGVuZGFyJ1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHB1YmxpYyBmaWVsZFRlbXBsYXRlczogRm9ybWx5Qm94VGVtcGxhdGVzKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56UmVuZGVyRXh0cmFGb290ZXIoKSB7XHJcbiAgICByZXR1cm4gcmVzb2x2ZVRwbE5hbWUodGhpcy5wcm9wcywgdGhpcy5maWVsZFRlbXBsYXRlcywgJ256UmVuZGVyRXh0cmFGb290ZXInKTtcclxuICB9XHJcblxyXG4gIGdldCBuekRhdGVSZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gcmVzb2x2ZVRwbE5hbWUodGhpcy5wcm9wcywgdGhpcy5maWVsZFRlbXBsYXRlcywgJ256RGF0ZVJlbmRlcicpO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==