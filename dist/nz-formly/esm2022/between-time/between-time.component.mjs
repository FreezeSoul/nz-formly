import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
import * as i1 from "@freezesoul/nz-formly/common";
import * as i2 from "@angular/forms";
import * as i3 from "@freezesoul/nzx-antd/between-time";
import * as i4 from "@ngx-formly/core";
export class FormlyFieldBetweenTimeComponent extends FieldType {
    fieldTemplates;
    defaultOptions = {
        props: {
            nzxSize: 'default',
            nzxStartPlaceholder: '起始值',
            nzxEndPlaceholder: '结束值',
            nzxStartReName: 'start',
            nzxEndReName: 'end',
            nzxStartHourStep: 1,
            nzxStartMinuteStep: 1,
            nzxStartSecondStep: 1,
            nzxStartUse12Hours: false
        }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    get nzxStartAddOn() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzxStartAddOn');
    }
    get nzxEndAddOn() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzxEndAddOn');
    }
    get nzxStartSuffixIcon() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzxStartSuffixIcon');
    }
    get nzxEndSuffixIcon() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzxEndSuffixIcon');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenTimeComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldBetweenTimeComponent, selector: "nz-formly-between-time", usesInheritance: true, ngImport: i0, template: `
    <nzx-between-time
      #instance
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [startMinDateTime]="props.startMinDateTime"
      [startMaxDateTime]="props.startMaxDateTime"
      [endMaxDateTime]="props.endMaxDateTime"
      [endMinDateTime]="props.endMinDateTime"
      [nzFormat]="props.nzFormat"
      [nzxDisabled]="props.nzxDisabled"
      [nzxEndAutoFocus]="props.nzxEndAutoFocus"
      [nzxEndBackdrop]="props.nzxEndBackdrop"
      [nzxSize]="props.nzxSize"
      [nzxEndDisabled]="props.nzxEndDisabled"
      [nzxEndId]="props.nzxEndId"
      [nzxEndPlaceholder]="props.nzxEndPlaceholder"
      [nzxEndReName]="props.nzxEndReName"
      [nzxStartId]="props.nzxStartId"
      [nzxStartStatus]="props.nzxStartStatus"
      [nzxStartHourStep]="props.nzxStartHourStep"
      [nzxStartMinuteStep]="props.nzxStartMinuteStep"
      [nzxStartSecondStep]="props.nzxStartSecondStep"
      [nzxStartClearText]="props.nzxStartClearText"
      [nzxStartNowText]="props.nzxStartNowText"
      [nzxStartOkText]="props.nzxStartOkText"
      [nzxStartPopupClassName]="props.nzxStartPopupClassName"
      [nzxStartPlaceholder]="props.nzxStartPlaceholder"
      [nzxStartAddOn]="nzxStartAddOn"
      [nzxStartDefaultOpenValue]="props.nzxStartDefaultOpenValue"
      [nzxStartUse12Hours]="props.nzxStartUse12Hours"
      [nzxStartSuffixIcon]="nzxStartSuffixIcon"
      [nzxStartHideDisabledOptions]="props.nzxStartHideDisabledOptions"
      [nzxStartAllowEmpty]="props.nzxStartAllowEmpty"
      [nzxStartAutoFocus]="props.nzxStartAutoFocus"
      [nzxStartBackdrop]="props.nzxStartBackdrop"
      [nzxEndStatus]="props.nzxEndStatus"
      [nzxEndHourStep]="props.nzxEndHourStep"
      [nzxEndMinuteStep]="props.nzxEndMinuteStep"
      [nzxEndSecondStep]="props.nzxEndSecondStep"
      [nzxEndClearText]="props.nzxEndClearText"
      [nzxEndNowText]="props.nzxEndNowText"
      [nzxEndOkText]="props.nzxEndOkText"
      [nzxEndPopupClassName]="props.nzxEndPopupClassName"
      [nzxEndAddOn]="nzxEndAddOn"
      [nzxEndDefaultOpenValue]="props.nzxEndDefaultOpenValue"
      [nzxEndUse12Hours]="props.nzxEndUse12Hours"
      [nzxEndSuffixIcon]="nzxEndSuffixIcon"
      [nzxEndHideDisabledOptions]="props.nzxEndHideDisabledOptions"
      [nzxEndAllowEmpty]="props.nzxEndAllowEmpty"
      [nzxStartReName]="props.nzxStartReName"
      [nzxStartDisabled]="props.nzxStartDisabled"
      (nzxEndOpenChange)="props.nzxEndOpenChange?.($event, field, instance)"
      (nzxStartOpenChange)="props.nzxStartOpenChange?.($event, field, instance)"
      ngDefaultControl
    ></nzx-between-time>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.NzxBetweenTimeComponent, selector: "nzx-between-time", inputs: ["nzxStartReName", "nzxEndReName", "nzxStartId", "nzxStartStatus", "nzxStartHourStep", "nzxStartMinuteStep", "nzxStartSecondStep", "nzxStartClearText", "nzxStartNowText", "nzxStartOkText", "nzxStartPopupClassName", "nzxStartPlaceholder", "nzxStartAddOn", "nzxStartDefaultOpenValue", "nzFormat", "nzxStartUse12Hours", "nzxStartSuffixIcon", "nzxStartHideDisabledOptions", "nzxStartAllowEmpty", "nzxStartAutoFocus", "nzxStartBackdrop", "nzxEndId", "nzxEndStatus", "nzxEndHourStep", "nzxEndMinuteStep", "nzxEndSecondStep", "nzxEndClearText", "nzxEndNowText", "nzxEndOkText", "nzxEndPopupClassName", "nzxEndPlaceholder", "nzxEndAddOn", "nzxEndDefaultOpenValue", "nzxEndUse12Hours", "nzxEndSuffixIcon", "nzxEndHideDisabledOptions", "nzxEndAllowEmpty", "nzxEndAutoFocus", "nzxEndBackdrop", "startMinDateTime", "endMaxDateTime", "startMaxDateTime", "endMinDateTime"], outputs: ["nzxStartOpenChange", "nzxEndOpenChange"] }, { kind: "directive", type: i4.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenTimeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-between-time',
                    template: `
    <nzx-between-time
      #instance
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [startMinDateTime]="props.startMinDateTime"
      [startMaxDateTime]="props.startMaxDateTime"
      [endMaxDateTime]="props.endMaxDateTime"
      [endMinDateTime]="props.endMinDateTime"
      [nzFormat]="props.nzFormat"
      [nzxDisabled]="props.nzxDisabled"
      [nzxEndAutoFocus]="props.nzxEndAutoFocus"
      [nzxEndBackdrop]="props.nzxEndBackdrop"
      [nzxSize]="props.nzxSize"
      [nzxEndDisabled]="props.nzxEndDisabled"
      [nzxEndId]="props.nzxEndId"
      [nzxEndPlaceholder]="props.nzxEndPlaceholder"
      [nzxEndReName]="props.nzxEndReName"
      [nzxStartId]="props.nzxStartId"
      [nzxStartStatus]="props.nzxStartStatus"
      [nzxStartHourStep]="props.nzxStartHourStep"
      [nzxStartMinuteStep]="props.nzxStartMinuteStep"
      [nzxStartSecondStep]="props.nzxStartSecondStep"
      [nzxStartClearText]="props.nzxStartClearText"
      [nzxStartNowText]="props.nzxStartNowText"
      [nzxStartOkText]="props.nzxStartOkText"
      [nzxStartPopupClassName]="props.nzxStartPopupClassName"
      [nzxStartPlaceholder]="props.nzxStartPlaceholder"
      [nzxStartAddOn]="nzxStartAddOn"
      [nzxStartDefaultOpenValue]="props.nzxStartDefaultOpenValue"
      [nzxStartUse12Hours]="props.nzxStartUse12Hours"
      [nzxStartSuffixIcon]="nzxStartSuffixIcon"
      [nzxStartHideDisabledOptions]="props.nzxStartHideDisabledOptions"
      [nzxStartAllowEmpty]="props.nzxStartAllowEmpty"
      [nzxStartAutoFocus]="props.nzxStartAutoFocus"
      [nzxStartBackdrop]="props.nzxStartBackdrop"
      [nzxEndStatus]="props.nzxEndStatus"
      [nzxEndHourStep]="props.nzxEndHourStep"
      [nzxEndMinuteStep]="props.nzxEndMinuteStep"
      [nzxEndSecondStep]="props.nzxEndSecondStep"
      [nzxEndClearText]="props.nzxEndClearText"
      [nzxEndNowText]="props.nzxEndNowText"
      [nzxEndOkText]="props.nzxEndOkText"
      [nzxEndPopupClassName]="props.nzxEndPopupClassName"
      [nzxEndAddOn]="nzxEndAddOn"
      [nzxEndDefaultOpenValue]="props.nzxEndDefaultOpenValue"
      [nzxEndUse12Hours]="props.nzxEndUse12Hours"
      [nzxEndSuffixIcon]="nzxEndSuffixIcon"
      [nzxEndHideDisabledOptions]="props.nzxEndHideDisabledOptions"
      [nzxEndAllowEmpty]="props.nzxEndAllowEmpty"
      [nzxStartReName]="props.nzxStartReName"
      [nzxStartDisabled]="props.nzxStartDisabled"
      (nzxEndOpenChange)="props.nzxEndOpenChange?.($event, field, instance)"
      (nzxStartOpenChange)="props.nzxStartOpenChange?.($event, field, instance)"
      ngDefaultControl
    ></nzx-between-time>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmV0d2Vlbi10aW1lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9iZXR3ZWVuLXRpbWUvYmV0d2Vlbi10aW1lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUEyQyxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7O0FBZ0V2RyxNQUFNLE9BQU8sK0JBQWdDLFNBQVEsU0FBa0Q7SUFldEU7SUFkdEIsY0FBYyxHQUFHO1FBQ3hCLEtBQUssRUFBRTtZQUNMLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLG1CQUFtQixFQUFFLEtBQUs7WUFDMUIsaUJBQWlCLEVBQUUsS0FBSztZQUN4QixjQUFjLEVBQUUsT0FBTztZQUN2QixZQUFZLEVBQUUsS0FBSztZQUNuQixnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CLGtCQUFrQixFQUFFLENBQUM7WUFDckIsa0JBQWtCLEVBQUUsQ0FBQztZQUNyQixrQkFBa0IsRUFBRSxLQUFLO1NBQ0o7S0FDeEIsQ0FBQztJQUVGLFlBQStCLGNBQWtDO1FBQy9ELEtBQUssRUFBRSxDQUFDO1FBRHFCLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtJQUVqRSxDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELElBQUksa0JBQWtCO1FBQ3BCLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUM3RSxDQUFDO3dHQWpDVSwrQkFBK0I7NEZBQS9CLCtCQUErQixxRkEzRGhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdEVDs7NEZBR1UsK0JBQStCO2tCQTdEM0MsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0RUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7MEJBZ0JjLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcclxuaW1wb3J0IHsgRm9ybWx5Qm94VGVtcGxhdGVzLCBOekZvcm1seUZpZWxkQ29uZmlnLCByZXNvbHZlVHBsTmFtZSB9IGZyb20gJ0BmcmVlemVzb3VsL256LWZvcm1seS9jb21tb24nO1xyXG5pbXBvcnQgeyBCZXR3ZWVuVGltZU9wdGlvbnMgfSBmcm9tICcuL2Zvcm1seS50eXBlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotZm9ybWx5LWJldHdlZW4tdGltZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuengtYmV0d2Vlbi10aW1lXHJcbiAgICAgICNpbnN0YW5jZVxyXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiJGFueShmb3JtQ29udHJvbClcIlxyXG4gICAgICBbZm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiXHJcbiAgICAgIFtzdGFydE1pbkRhdGVUaW1lXT1cInByb3BzLnN0YXJ0TWluRGF0ZVRpbWVcIlxyXG4gICAgICBbc3RhcnRNYXhEYXRlVGltZV09XCJwcm9wcy5zdGFydE1heERhdGVUaW1lXCJcclxuICAgICAgW2VuZE1heERhdGVUaW1lXT1cInByb3BzLmVuZE1heERhdGVUaW1lXCJcclxuICAgICAgW2VuZE1pbkRhdGVUaW1lXT1cInByb3BzLmVuZE1pbkRhdGVUaW1lXCJcclxuICAgICAgW256Rm9ybWF0XT1cInByb3BzLm56Rm9ybWF0XCJcclxuICAgICAgW256eERpc2FibGVkXT1cInByb3BzLm56eERpc2FibGVkXCJcclxuICAgICAgW256eEVuZEF1dG9Gb2N1c109XCJwcm9wcy5uenhFbmRBdXRvRm9jdXNcIlxyXG4gICAgICBbbnp4RW5kQmFja2Ryb3BdPVwicHJvcHMubnp4RW5kQmFja2Ryb3BcIlxyXG4gICAgICBbbnp4U2l6ZV09XCJwcm9wcy5uenhTaXplXCJcclxuICAgICAgW256eEVuZERpc2FibGVkXT1cInByb3BzLm56eEVuZERpc2FibGVkXCJcclxuICAgICAgW256eEVuZElkXT1cInByb3BzLm56eEVuZElkXCJcclxuICAgICAgW256eEVuZFBsYWNlaG9sZGVyXT1cInByb3BzLm56eEVuZFBsYWNlaG9sZGVyXCJcclxuICAgICAgW256eEVuZFJlTmFtZV09XCJwcm9wcy5uenhFbmRSZU5hbWVcIlxyXG4gICAgICBbbnp4U3RhcnRJZF09XCJwcm9wcy5uenhTdGFydElkXCJcclxuICAgICAgW256eFN0YXJ0U3RhdHVzXT1cInByb3BzLm56eFN0YXJ0U3RhdHVzXCJcclxuICAgICAgW256eFN0YXJ0SG91clN0ZXBdPVwicHJvcHMubnp4U3RhcnRIb3VyU3RlcFwiXHJcbiAgICAgIFtuenhTdGFydE1pbnV0ZVN0ZXBdPVwicHJvcHMubnp4U3RhcnRNaW51dGVTdGVwXCJcclxuICAgICAgW256eFN0YXJ0U2Vjb25kU3RlcF09XCJwcm9wcy5uenhTdGFydFNlY29uZFN0ZXBcIlxyXG4gICAgICBbbnp4U3RhcnRDbGVhclRleHRdPVwicHJvcHMubnp4U3RhcnRDbGVhclRleHRcIlxyXG4gICAgICBbbnp4U3RhcnROb3dUZXh0XT1cInByb3BzLm56eFN0YXJ0Tm93VGV4dFwiXHJcbiAgICAgIFtuenhTdGFydE9rVGV4dF09XCJwcm9wcy5uenhTdGFydE9rVGV4dFwiXHJcbiAgICAgIFtuenhTdGFydFBvcHVwQ2xhc3NOYW1lXT1cInByb3BzLm56eFN0YXJ0UG9wdXBDbGFzc05hbWVcIlxyXG4gICAgICBbbnp4U3RhcnRQbGFjZWhvbGRlcl09XCJwcm9wcy5uenhTdGFydFBsYWNlaG9sZGVyXCJcclxuICAgICAgW256eFN0YXJ0QWRkT25dPVwibnp4U3RhcnRBZGRPblwiXHJcbiAgICAgIFtuenhTdGFydERlZmF1bHRPcGVuVmFsdWVdPVwicHJvcHMubnp4U3RhcnREZWZhdWx0T3BlblZhbHVlXCJcclxuICAgICAgW256eFN0YXJ0VXNlMTJIb3Vyc109XCJwcm9wcy5uenhTdGFydFVzZTEySG91cnNcIlxyXG4gICAgICBbbnp4U3RhcnRTdWZmaXhJY29uXT1cIm56eFN0YXJ0U3VmZml4SWNvblwiXHJcbiAgICAgIFtuenhTdGFydEhpZGVEaXNhYmxlZE9wdGlvbnNdPVwicHJvcHMubnp4U3RhcnRIaWRlRGlzYWJsZWRPcHRpb25zXCJcclxuICAgICAgW256eFN0YXJ0QWxsb3dFbXB0eV09XCJwcm9wcy5uenhTdGFydEFsbG93RW1wdHlcIlxyXG4gICAgICBbbnp4U3RhcnRBdXRvRm9jdXNdPVwicHJvcHMubnp4U3RhcnRBdXRvRm9jdXNcIlxyXG4gICAgICBbbnp4U3RhcnRCYWNrZHJvcF09XCJwcm9wcy5uenhTdGFydEJhY2tkcm9wXCJcclxuICAgICAgW256eEVuZFN0YXR1c109XCJwcm9wcy5uenhFbmRTdGF0dXNcIlxyXG4gICAgICBbbnp4RW5kSG91clN0ZXBdPVwicHJvcHMubnp4RW5kSG91clN0ZXBcIlxyXG4gICAgICBbbnp4RW5kTWludXRlU3RlcF09XCJwcm9wcy5uenhFbmRNaW51dGVTdGVwXCJcclxuICAgICAgW256eEVuZFNlY29uZFN0ZXBdPVwicHJvcHMubnp4RW5kU2Vjb25kU3RlcFwiXHJcbiAgICAgIFtuenhFbmRDbGVhclRleHRdPVwicHJvcHMubnp4RW5kQ2xlYXJUZXh0XCJcclxuICAgICAgW256eEVuZE5vd1RleHRdPVwicHJvcHMubnp4RW5kTm93VGV4dFwiXHJcbiAgICAgIFtuenhFbmRPa1RleHRdPVwicHJvcHMubnp4RW5kT2tUZXh0XCJcclxuICAgICAgW256eEVuZFBvcHVwQ2xhc3NOYW1lXT1cInByb3BzLm56eEVuZFBvcHVwQ2xhc3NOYW1lXCJcclxuICAgICAgW256eEVuZEFkZE9uXT1cIm56eEVuZEFkZE9uXCJcclxuICAgICAgW256eEVuZERlZmF1bHRPcGVuVmFsdWVdPVwicHJvcHMubnp4RW5kRGVmYXVsdE9wZW5WYWx1ZVwiXHJcbiAgICAgIFtuenhFbmRVc2UxMkhvdXJzXT1cInByb3BzLm56eEVuZFVzZTEySG91cnNcIlxyXG4gICAgICBbbnp4RW5kU3VmZml4SWNvbl09XCJuenhFbmRTdWZmaXhJY29uXCJcclxuICAgICAgW256eEVuZEhpZGVEaXNhYmxlZE9wdGlvbnNdPVwicHJvcHMubnp4RW5kSGlkZURpc2FibGVkT3B0aW9uc1wiXHJcbiAgICAgIFtuenhFbmRBbGxvd0VtcHR5XT1cInByb3BzLm56eEVuZEFsbG93RW1wdHlcIlxyXG4gICAgICBbbnp4U3RhcnRSZU5hbWVdPVwicHJvcHMubnp4U3RhcnRSZU5hbWVcIlxyXG4gICAgICBbbnp4U3RhcnREaXNhYmxlZF09XCJwcm9wcy5uenhTdGFydERpc2FibGVkXCJcclxuICAgICAgKG56eEVuZE9wZW5DaGFuZ2UpPVwicHJvcHMubnp4RW5kT3BlbkNoYW5nZT8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIChuenhTdGFydE9wZW5DaGFuZ2UpPVwicHJvcHMubnp4U3RhcnRPcGVuQ2hhbmdlPy4oJGV2ZW50LCBmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAgICAgbmdEZWZhdWx0Q29udHJvbFxyXG4gICAgPjwvbnp4LWJldHdlZW4tdGltZT5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtbHlGaWVsZEJldHdlZW5UaW1lQ29tcG9uZW50IGV4dGVuZHMgRmllbGRUeXBlPE56Rm9ybWx5RmllbGRDb25maWc8QmV0d2VlblRpbWVPcHRpb25zPj4ge1xyXG4gIG92ZXJyaWRlIGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbnp4U2l6ZTogJ2RlZmF1bHQnLFxyXG4gICAgICBuenhTdGFydFBsYWNlaG9sZGVyOiAn6LW35aeL5YC8JyxcclxuICAgICAgbnp4RW5kUGxhY2Vob2xkZXI6ICfnu5PmnZ/lgLwnLFxyXG4gICAgICBuenhTdGFydFJlTmFtZTogJ3N0YXJ0JyxcclxuICAgICAgbnp4RW5kUmVOYW1lOiAnZW5kJyxcclxuICAgICAgbnp4U3RhcnRIb3VyU3RlcDogMSxcclxuICAgICAgbnp4U3RhcnRNaW51dGVTdGVwOiAxLFxyXG4gICAgICBuenhTdGFydFNlY29uZFN0ZXA6IDEsXHJcbiAgICAgIG56eFN0YXJ0VXNlMTJIb3VyczogZmFsc2VcclxuICAgIH0gYXMgQmV0d2VlblRpbWVPcHRpb25zXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHVibGljIGZpZWxkVGVtcGxhdGVzOiBGb3JtbHlCb3hUZW1wbGF0ZXMpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnp4U3RhcnRBZGRPbigpIHtcclxuICAgIHJldHVybiByZXNvbHZlVHBsTmFtZSh0aGlzLnByb3BzLCB0aGlzLmZpZWxkVGVtcGxhdGVzLCAnbnp4U3RhcnRBZGRPbicpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56eEVuZEFkZE9uKCkge1xyXG4gICAgcmV0dXJuIHJlc29sdmVUcGxOYW1lKHRoaXMucHJvcHMsIHRoaXMuZmllbGRUZW1wbGF0ZXMsICduenhFbmRBZGRPbicpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56eFN0YXJ0U3VmZml4SWNvbigpIHtcclxuICAgIHJldHVybiByZXNvbHZlVHBsTmFtZSh0aGlzLnByb3BzLCB0aGlzLmZpZWxkVGVtcGxhdGVzLCAnbnp4U3RhcnRTdWZmaXhJY29uJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnp4RW5kU3VmZml4SWNvbigpIHtcclxuICAgIHJldHVybiByZXNvbHZlVHBsTmFtZSh0aGlzLnByb3BzLCB0aGlzLmZpZWxkVGVtcGxhdGVzLCAnbnp4RW5kU3VmZml4SWNvbicpO1xyXG4gIH1cclxufVxyXG4iXX0=