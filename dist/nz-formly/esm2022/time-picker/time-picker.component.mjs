import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
import * as i1 from "@freezesoul/nz-formly/common";
import * as i2 from "@angular/forms";
import * as i3 from "ng-zorro-antd/time-picker";
import * as i4 from "@ngx-formly/core";
export class FormlyFieldTimePickerComponent extends FieldType {
    fieldTemplates;
    defaultOptions = {
        props: {
            nzAllowEmpty: true,
            nzFormat: 'HH:mm:ss',
            nzHourStep: 1,
            nzMinuteStep: 1,
            nzSecondStep: 1,
            nzShowToday: true,
            nzShowNow: true,
            nzInputReadOnly: false
        }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    get nzSuffixIcon() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzSuffixIcon');
    }
    get nzAddOn() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzAddOn');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldTimePickerComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldTimePickerComponent, selector: "nz-formly-time-picker-component", usesInheritance: true, ngImport: i0, template: `
    <nz-time-picker
      #instance
      style="width: 100%"
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzId]="field.id || props.nzId"
      [nzAddOn]="nzAddOn"
      [nzSize]="props.nzSize"
      [nzBackdrop]="props.nzBackdrop"
      [nzAllowEmpty]="props.nzAllowEmpty"
      [nzAutoFocus]="props.nzAutoFocus"
      [nzClearText]="props.nzClearText"
      [nzNowText]="props.nzNowText"
      [nzOkText]="props.nzOkText"
      [nzDefaultOpenValue]="props.nzDefaultOpenValue"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzDisabledHours]="props.nzDisabledHours"
      [nzDisabledMinutes]="props.nzDisabledMinutes"
      [nzDisabledSeconds]="props.nzDisabledSeconds"
      [nzFormat]="props.nzFormat"
      [nzHideDisabledOptions]="props.nzHideDisabledOptions"
      [nzHourStep]="props.nzHourStep"
      [nzMinuteStep]="props.nzMinuteStep"
      [nzSecondStep]="props.nzSecondStep"
      [nzPlaceHolder]="props.nzPlaceHolder || props.placeholder"
      [nzPopupClassName]="props.nzPopupClassName"
      [nzUse12Hours]="props.nzUse12Hours"
      [nzStatus]="props.nzStatus"
      [nzSuffixIcon]="nzSuffixIcon"
      (nzOpenChange)=" props.nzOpenChange?.($event, field, instance)"
      ngDefaultControl
    ></nz-time-picker>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.NzTimePickerComponent, selector: "nz-time-picker", inputs: ["nzId", "nzSize", "nzStatus", "nzHourStep", "nzMinuteStep", "nzSecondStep", "nzClearText", "nzNowText", "nzOkText", "nzPopupClassName", "nzPlaceHolder", "nzAddOn", "nzDefaultOpenValue", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzFormat", "nzOpen", "nzUse12Hours", "nzSuffixIcon", "nzHideDisabledOptions", "nzAllowEmpty", "nzDisabled", "nzAutoFocus", "nzBackdrop", "nzBorderless", "nzInputReadOnly"], outputs: ["nzOpenChange"], exportAs: ["nzTimePicker"] }, { kind: "directive", type: i4.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldTimePickerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-time-picker-component',
                    template: `
    <nz-time-picker
      #instance
      style="width: 100%"
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzId]="field.id || props.nzId"
      [nzAddOn]="nzAddOn"
      [nzSize]="props.nzSize"
      [nzBackdrop]="props.nzBackdrop"
      [nzAllowEmpty]="props.nzAllowEmpty"
      [nzAutoFocus]="props.nzAutoFocus"
      [nzClearText]="props.nzClearText"
      [nzNowText]="props.nzNowText"
      [nzOkText]="props.nzOkText"
      [nzDefaultOpenValue]="props.nzDefaultOpenValue"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzDisabledHours]="props.nzDisabledHours"
      [nzDisabledMinutes]="props.nzDisabledMinutes"
      [nzDisabledSeconds]="props.nzDisabledSeconds"
      [nzFormat]="props.nzFormat"
      [nzHideDisabledOptions]="props.nzHideDisabledOptions"
      [nzHourStep]="props.nzHourStep"
      [nzMinuteStep]="props.nzMinuteStep"
      [nzSecondStep]="props.nzSecondStep"
      [nzPlaceHolder]="props.nzPlaceHolder || props.placeholder"
      [nzPopupClassName]="props.nzPopupClassName"
      [nzUse12Hours]="props.nzUse12Hours"
      [nzStatus]="props.nzStatus"
      [nzSuffixIcon]="nzSuffixIcon"
      (nzOpenChange)=" props.nzOpenChange?.($event, field, instance)"
      ngDefaultControl
    ></nz-time-picker>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbGliL3RpbWUtcGlja2VyL3RpbWUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUEyQyxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7O0FBeUN2RyxNQUFNLE9BQU8sOEJBQStCLFNBQVEsU0FBaUQ7SUFjcEU7SUFidEIsY0FBYyxHQUFHO1FBQ3hCLEtBQUssRUFBRTtZQUNMLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFVBQVUsRUFBRSxDQUFDO1lBQ2IsWUFBWSxFQUFFLENBQUM7WUFDZixZQUFZLEVBQUUsQ0FBQztZQUNmLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsZUFBZSxFQUFFLEtBQUs7U0FDdkI7S0FDRixDQUFDO0lBRUYsWUFBK0IsY0FBa0M7UUFDL0QsS0FBSyxFQUFFLENBQUM7UUFEcUIsbUJBQWMsR0FBZCxjQUFjLENBQW9CO0lBRWpFLENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNwRSxDQUFDO3dHQXhCVSw4QkFBOEI7NEZBQTlCLDhCQUE4Qiw4RkFwQy9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQ1Q7OzRGQUdVLDhCQUE4QjtrQkF0QzFDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGlDQUFpQztvQkFDM0MsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQ1Q7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzswQkFlYyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1seUJveFRlbXBsYXRlcywgTnpGb3JtbHlGaWVsZENvbmZpZywgcmVzb2x2ZVRwbE5hbWUgfSBmcm9tICdAZnJlZXplc291bC9uei1mb3JtbHkvY29tbW9uJztcclxuaW1wb3J0IHsgVGltZVBpY2tlck9wdGlvbnMgfSBmcm9tICcuL2Zvcm1seS50eXBlJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1mb3JtbHktdGltZS1waWNrZXItY29tcG9uZW50JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG56LXRpbWUtcGlja2VyXHJcbiAgICAgICNpbnN0YW5jZVxyXG4gICAgICBzdHlsZT1cIndpZHRoOiAxMDAlXCJcclxuICAgICAgW2Zvcm1Db250cm9sXT1cIiRhbnkoZm9ybUNvbnRyb2wpXCJcclxuICAgICAgW2Zvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxyXG4gICAgICBbbnpJZF09XCJmaWVsZC5pZCB8fCBwcm9wcy5ueklkXCJcclxuICAgICAgW256QWRkT25dPVwibnpBZGRPblwiXHJcbiAgICAgIFtuelNpemVdPVwicHJvcHMubnpTaXplXCJcclxuICAgICAgW256QmFja2Ryb3BdPVwicHJvcHMubnpCYWNrZHJvcFwiXHJcbiAgICAgIFtuekFsbG93RW1wdHldPVwicHJvcHMubnpBbGxvd0VtcHR5XCJcclxuICAgICAgW256QXV0b0ZvY3VzXT1cInByb3BzLm56QXV0b0ZvY3VzXCJcclxuICAgICAgW256Q2xlYXJUZXh0XT1cInByb3BzLm56Q2xlYXJUZXh0XCJcclxuICAgICAgW256Tm93VGV4dF09XCJwcm9wcy5uek5vd1RleHRcIlxyXG4gICAgICBbbnpPa1RleHRdPVwicHJvcHMubnpPa1RleHRcIlxyXG4gICAgICBbbnpEZWZhdWx0T3BlblZhbHVlXT1cInByb3BzLm56RGVmYXVsdE9wZW5WYWx1ZVwiXHJcbiAgICAgIFtuekRpc2FibGVkXT1cInByb3BzLm56RGlzYWJsZWQgfHwgcHJvcHMuZGlzYWJsZWQgfHwgZm9ybUNvbnRyb2w/LmRpc2FibGVkXCJcclxuICAgICAgW256RGlzYWJsZWRIb3Vyc109XCJwcm9wcy5uekRpc2FibGVkSG91cnNcIlxyXG4gICAgICBbbnpEaXNhYmxlZE1pbnV0ZXNdPVwicHJvcHMubnpEaXNhYmxlZE1pbnV0ZXNcIlxyXG4gICAgICBbbnpEaXNhYmxlZFNlY29uZHNdPVwicHJvcHMubnpEaXNhYmxlZFNlY29uZHNcIlxyXG4gICAgICBbbnpGb3JtYXRdPVwicHJvcHMubnpGb3JtYXRcIlxyXG4gICAgICBbbnpIaWRlRGlzYWJsZWRPcHRpb25zXT1cInByb3BzLm56SGlkZURpc2FibGVkT3B0aW9uc1wiXHJcbiAgICAgIFtuekhvdXJTdGVwXT1cInByb3BzLm56SG91clN0ZXBcIlxyXG4gICAgICBbbnpNaW51dGVTdGVwXT1cInByb3BzLm56TWludXRlU3RlcFwiXHJcbiAgICAgIFtuelNlY29uZFN0ZXBdPVwicHJvcHMubnpTZWNvbmRTdGVwXCJcclxuICAgICAgW256UGxhY2VIb2xkZXJdPVwicHJvcHMubnpQbGFjZUhvbGRlciB8fCBwcm9wcy5wbGFjZWhvbGRlclwiXHJcbiAgICAgIFtuelBvcHVwQ2xhc3NOYW1lXT1cInByb3BzLm56UG9wdXBDbGFzc05hbWVcIlxyXG4gICAgICBbbnpVc2UxMkhvdXJzXT1cInByb3BzLm56VXNlMTJIb3Vyc1wiXHJcbiAgICAgIFtuelN0YXR1c109XCJwcm9wcy5uelN0YXR1c1wiXHJcbiAgICAgIFtuelN1ZmZpeEljb25dPVwibnpTdWZmaXhJY29uXCJcclxuICAgICAgKG56T3BlbkNoYW5nZSk9XCIgcHJvcHMubnpPcGVuQ2hhbmdlPy4oJGV2ZW50LCBmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAgICAgbmdEZWZhdWx0Q29udHJvbFxyXG4gICAgPjwvbnotdGltZS1waWNrZXI+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybWx5RmllbGRUaW1lUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgRmllbGRUeXBlPE56Rm9ybWx5RmllbGRDb25maWc8VGltZVBpY2tlck9wdGlvbnM+PiB7XHJcbiAgb3ZlcnJpZGUgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBuekFsbG93RW1wdHk6IHRydWUsXHJcbiAgICAgIG56Rm9ybWF0OiAnSEg6bW06c3MnLFxyXG4gICAgICBuekhvdXJTdGVwOiAxLFxyXG4gICAgICBuek1pbnV0ZVN0ZXA6IDEsXHJcbiAgICAgIG56U2Vjb25kU3RlcDogMSxcclxuICAgICAgbnpTaG93VG9kYXk6IHRydWUsXHJcbiAgICAgIG56U2hvd05vdzogdHJ1ZSxcclxuICAgICAgbnpJbnB1dFJlYWRPbmx5OiBmYWxzZVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHB1YmxpYyBmaWVsZFRlbXBsYXRlczogRm9ybWx5Qm94VGVtcGxhdGVzKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56U3VmZml4SWNvbigpIHtcclxuICAgIHJldHVybiByZXNvbHZlVHBsTmFtZSh0aGlzLnByb3BzLCB0aGlzLmZpZWxkVGVtcGxhdGVzLCAnbnpTdWZmaXhJY29uJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpBZGRPbigpIHtcclxuICAgIHJldHVybiByZXNvbHZlVHBsTmFtZSh0aGlzLnByb3BzLCB0aGlzLmZpZWxkVGVtcGxhdGVzLCAnbnpBZGRPbicpO1xyXG4gIH1cclxufVxyXG4iXX0=