import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
import * as i1 from "@freezesoul/nz-formly/common";
import * as i2 from "@angular/forms";
import * as i3 from "ng-zorro-antd/date-picker";
import * as i4 from "@ngx-formly/core";
export class FormlyFieldDatePickerComponent extends FieldType {
    fieldTemplates;
    defaultOptions = {
        props: {
            nzAllowClear: true,
            nzDisabled: false,
            nzPopupStyle: {},
            nzShowToday: true,
            nzShowNow: true,
            nzInputReadOnly: false,
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldDatePickerComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldDatePickerComponent, selector: "nz-formly-date-picker-component", usesInheritance: true, ngImport: i0, template: `
    <nz-date-picker
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
      (nzOnOpenChange)="props.nzOnOpenChange?.($event, field, instance)"
      [nzDateRender]="nzDateRender"
      [nzDisabledTime]="props.nzDisabledTime"
      [nzShowTime]="props.nzShowTime"
      [nzShowToday]="props.nzShowToday"
      [nzShowNow]="props.nzShowNow"
      (nzOnOk)=" props.nzOnOk?.($event, field, instance)"
      ngDefaultControl
    ></nz-date-picker>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.NzDatePickerComponent, selector: "nz-date-picker,nz-week-picker,nz-month-picker,nz-year-picker,nz-range-picker", inputs: ["nzAllowClear", "nzAutoFocus", "nzDisabled", "nzBorderless", "nzInputReadOnly", "nzInline", "nzOpen", "nzDisabledDate", "nzLocale", "nzPlaceHolder", "nzPopupStyle", "nzDropdownClassName", "nzSize", "nzStatus", "nzFormat", "nzDateRender", "nzDisabledTime", "nzRenderExtraFooter", "nzShowToday", "nzMode", "nzShowNow", "nzRanges", "nzDefaultPickerValue", "nzSeparator", "nzSuffixIcon", "nzBackdrop", "nzId", "nzPlacement", "nzShowWeekNumber", "nzShowTime"], outputs: ["nzOnPanelChange", "nzOnCalendarChange", "nzOnOk", "nzOnOpenChange"], exportAs: ["nzDatePicker"] }, { kind: "directive", type: i4.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldDatePickerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-date-picker-component',
                    template: `
    <nz-date-picker
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
      (nzOnOpenChange)="props.nzOnOpenChange?.($event, field, instance)"
      [nzDateRender]="nzDateRender"
      [nzDisabledTime]="props.nzDisabledTime"
      [nzShowTime]="props.nzShowTime"
      [nzShowToday]="props.nzShowToday"
      [nzShowNow]="props.nzShowNow"
      (nzOnOk)=" props.nzOnOk?.($event, field, instance)"
      ngDefaultControl
    ></nz-date-picker>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbGliL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUFzQixjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7O0FBc0NsRixNQUFNLE9BQU8sOEJBQStCLFNBQVEsU0FBUztJQWE1QjtJQVp0QixjQUFjLEdBQUc7UUFDeEIsS0FBSyxFQUFFO1lBQ0wsWUFBWSxFQUFFLElBQUk7WUFDbEIsVUFBVSxFQUFFLEtBQUs7WUFDakIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsV0FBVyxFQUFFLElBQUk7WUFDakIsU0FBUyxFQUFFLElBQUk7WUFDZixlQUFlLEVBQUUsS0FBSztZQUN0QixZQUFZLEVBQUUsVUFBVTtTQUN6QjtLQUNGLENBQUM7SUFFRixZQUErQixjQUFrQztRQUMvRCxLQUFLLEVBQUUsQ0FBQztRQURxQixtQkFBYyxHQUFkLGNBQWMsQ0FBb0I7SUFFakUsQ0FBQztJQUVELElBQUksbUJBQW1CO1FBQ3JCLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDekUsQ0FBQzt3R0F2QlUsOEJBQThCOzRGQUE5Qiw4QkFBOEIsOEZBbEMvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQStCVDs7NEZBR1UsOEJBQThCO2tCQXBDMUMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsaUNBQWlDO29CQUMzQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0ErQlQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzswQkFjYyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1seUJveFRlbXBsYXRlcywgcmVzb2x2ZVRwbE5hbWUgfSBmcm9tICdAZnJlZXplc291bC9uei1mb3JtbHkvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotZm9ybWx5LWRhdGUtcGlja2VyLWNvbXBvbmVudCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuei1kYXRlLXBpY2tlclxyXG4gICAgICAjaW5zdGFuY2VcclxuICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJVwiXHJcbiAgICAgIFtmb3JtQ29udHJvbF09XCIkYW55KGZvcm1Db250cm9sKVwiXHJcbiAgICAgIFtmb3JtbHlBdHRyaWJ1dGVzXT1cImZpZWxkXCJcclxuICAgICAgW256TW9kZV09XCJwcm9wcy5uek1vZGVcIlxyXG4gICAgICBbbnpBbGxvd0NsZWFyXT1cInByb3BzLm56QWxsb3dDbGVhclwiXHJcbiAgICAgIFtuekF1dG9Gb2N1c109XCJwcm9wcy5uekF1dG9Gb2N1c1wiXHJcbiAgICAgIFtuekJhY2tkcm9wXT1cInByb3BzLm56QmFja2Ryb3BcIlxyXG4gICAgICBbbnpEaXNhYmxlZF09XCJwcm9wcy5uekRpc2FibGVkIHx8IHByb3BzLmRpc2FibGVkIHx8IGZvcm1Db250cm9sPy5kaXNhYmxlZFwiXHJcbiAgICAgIFtuekRpc2FibGVkRGF0ZV09XCJwcm9wcy5uekRpc2FibGVkRGF0ZVwiXHJcbiAgICAgIFtuelBvcHVwU3R5bGVdPVwicHJvcHMubnpQb3B1cFN0eWxlXCJcclxuICAgICAgW256RHJvcGRvd25DbGFzc05hbWVdPVwicHJvcHMubnpEcm9wZG93bkNsYXNzTmFtZVwiXHJcbiAgICAgIFtuelNpemVdPVwicHJvcHMubnpTaXplXCJcclxuICAgICAgW256Rm9ybWF0XT1cInByb3BzLm56Rm9ybWF0XCJcclxuICAgICAgW256SW5wdXRSZWFkT25seV09XCJwcm9wcy5ueklucHV0UmVhZE9ubHlcIlxyXG4gICAgICBbbnpQbGFjZUhvbGRlcl09XCJwcm9wcy5uelBsYWNlSG9sZGVyIHx8IHByb3BzLnBsYWNlaG9sZGVyXCJcclxuICAgICAgW256Qm9yZGVybGVzc109XCJwcm9wcy5uekJvcmRlcmxlc3NcIlxyXG4gICAgICBbbnpTdWZmaXhJY29uXT1cInByb3BzLm56U3VmZml4SWNvblwiXHJcbiAgICAgIFtuelJlbmRlckV4dHJhRm9vdGVyXT1cIm56UmVuZGVyRXh0cmFGb290ZXJcIlxyXG4gICAgICBbbnpJbmxpbmVdPVwicHJvcHMubnpJbmxpbmVcIlxyXG4gICAgICAobnpPbk9wZW5DaGFuZ2UpPVwicHJvcHMubnpPbk9wZW5DaGFuZ2U/LigkZXZlbnQsIGZpZWxkLCBpbnN0YW5jZSlcIlxyXG4gICAgICBbbnpEYXRlUmVuZGVyXT1cIm56RGF0ZVJlbmRlclwiXHJcbiAgICAgIFtuekRpc2FibGVkVGltZV09XCJwcm9wcy5uekRpc2FibGVkVGltZVwiXHJcbiAgICAgIFtuelNob3dUaW1lXT1cInByb3BzLm56U2hvd1RpbWVcIlxyXG4gICAgICBbbnpTaG93VG9kYXldPVwicHJvcHMubnpTaG93VG9kYXlcIlxyXG4gICAgICBbbnpTaG93Tm93XT1cInByb3BzLm56U2hvd05vd1wiXHJcbiAgICAgIChuek9uT2spPVwiIHByb3BzLm56T25Paz8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIG5nRGVmYXVsdENvbnRyb2xcclxuICAgID48L256LWRhdGUtcGlja2VyPlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1seUZpZWxkRGF0ZVBpY2tlckNvbXBvbmVudCBleHRlbmRzIEZpZWxkVHlwZSB7XHJcbiAgb3ZlcnJpZGUgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBuekFsbG93Q2xlYXI6IHRydWUsXHJcbiAgICAgIG56RGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICBuelBvcHVwU3R5bGU6IHt9LFxyXG4gICAgICBuelNob3dUb2RheTogdHJ1ZSxcclxuICAgICAgbnpTaG93Tm93OiB0cnVlLFxyXG4gICAgICBueklucHV0UmVhZE9ubHk6IGZhbHNlLFxyXG4gICAgICBuelN1ZmZpeEljb246ICdjYWxlbmRhcidcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwdWJsaWMgZmllbGRUZW1wbGF0ZXM6IEZvcm1seUJveFRlbXBsYXRlcykge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGdldCBuelJlbmRlckV4dHJhRm9vdGVyKCkge1xyXG4gICAgcmV0dXJuIHJlc29sdmVUcGxOYW1lKHRoaXMucHJvcHMsIHRoaXMuZmllbGRUZW1wbGF0ZXMsICduelJlbmRlckV4dHJhRm9vdGVyJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpEYXRlUmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIHJlc29sdmVUcGxOYW1lKHRoaXMucHJvcHMsIHRoaXMuZmllbGRUZW1wbGF0ZXMsICduekRhdGVSZW5kZXInKTtcclxuICB9XHJcbn1cclxuIl19