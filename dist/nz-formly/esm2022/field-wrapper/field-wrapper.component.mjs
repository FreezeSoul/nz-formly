import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { hasTplNameValue, resolveTplName } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
import * as i1 from "@freezesoul/nz-formly/common";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/grid";
import * as i4 from "ng-zorro-antd/form";
import * as i5 from "ng-zorro-antd/core/outlet";
import * as i6 from "@ngx-formly/core";
export class FieldWrapperComponent extends FieldWrapper {
    fieldTemplates;
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    get nzTooltipTitle() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzTooltipTitle');
    }
    get nzExtra() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzExtra');
    }
    get hasLabel() {
        return hasTplNameValue(this.props, 'label');
    }
    get label() {
        return resolveTplName(this.props, this.fieldTemplates, 'label');
    }
    get nzSuccessTip() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzSuccessTip');
    }
    get nzValidatingTip() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzValidatingTip');
    }
    get nzWarningTip() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzWarningTip');
    }
    get hasError() {
        return (this.formControl?.dirty || this.formControl?.touched) && this.formControl.errors;
    }
    get validateStatus() {
        return this.hasError ? 'error' : this.props.nzValidateStatus;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FieldWrapperComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FieldWrapperComponent, selector: "formly-field-wrapper", usesInheritance: true, ngImport: i0, template: `
    <nz-form-item [class]="field.className">
      <ng-container *ngIf="hasLabel && props.hideLabel !== true">
        <nz-form-label
          *ngIf="hasLabel"
          [ngClass]="props.labelClass || formState.labelClass"
          [nzRequired]="props.required && props.hideRequiredMarker !== true"
          [nzFor]="id"
          [nzTooltipTitle]="nzTooltipTitle"
          [nzTooltipIcon]="props.nzTooltipIcon"
          [nzSpan]="props.labelNzSpan || formState.labelNzSpan"
          [nzNoColon]="props.nzNoColon || formState.nzNoColon"
          [nzFlex]="props.labelNzFlex || formState.labelNzFlex"
          [nzLg]="props.labelNzLg || formState.labelNzLg"
          [nzMd]="props.labelNzMd || formState.labelNzMd"
          [nzOffset]="props.labelNzOffset || formState.labelNzOffset"
          [nzOrder]="props.labelNzOrder || formState.labelNzOrder"
          [nzPull]="props.labelNzPull || formState.labelNzPull"
          [nzPush]="props.labelNzPush || formState.labelNzPush"
          [nzSm]="props.labelNzSm || formState.labelNzSm"
          [nzXl]="props.labelNzXl || formState.labelNzXl"
          [nzXs]="props.labelNzXs || formState.labelNzXs"
          [nzXXl]="props.labelNzXXl || formState.labelNzXXl"
        >
          <ng-container *nzStringTemplateOutlet="label; context: { $implicit: field, options: props }">
            <div [innerHTML]="label"></div>
          </ng-container>
        </nz-form-label>
      </ng-container>

      <nz-form-control
        [ngClass]="props.controlClass || formState.controlClass"
        [nzValidateStatus]="validateStatus"
        [nzErrorTip]="errorTip"
        [nzAutoTips]="props.nzAutoTips || formState.nzAutoTips"
        [nzHasFeedback]="props.nzHasFeedback || formState.nzHasFeedback"
        [nzSuccessTip]="nzSuccessTip || formState.nzSuccessTip"
        [nzValidatingTip]="nzValidatingTip || formState.nzValidatingTip"
        [nzWarningTip]="nzWarningTip || formState.nzWarningTip"
        [nzDisableAutoTips]="props.nzDisableAutoTips || formState.nzDisableAutoTips"
        [nzExtra]="props.description || nzExtra"
        [nzSpan]="props.controlNzSpan || formState.controlNzSpan"
        [nzFlex]="props.controlNzFlex || formState.controlNzFlex"
        [nzLg]="props.controlNzLg || formState.controlNzLg"
        [nzMd]="props.controlNzMd || formState.controlNzMd"
        [nzOffset]="props.controlNzOffset || formState.controlNzOffset"
        [nzOrder]="props.controlNzOrder || formState.controlNzOrder"
        [nzPull]="props.controlNzPull || formState.controlNzPull"
        [nzPush]="props.controlNzPush || formState.controlNzPush"
        [nzSm]="props.controlNzSm || formState.controlNzSm"
        [nzXl]="props.controlNzXl || formState.controlNzXl"
        [nzXs]="props.controlNzXs || formState.controlNzXs"
        [nzXXl]="props.controlNzXXl || formState.controlNzXXl"
      >
        <ng-container #fieldComponent></ng-container>
        <ng-template #errorTip>
          <formly-validation-message *ngIf="hasError" [field]="field"></formly-validation-message>
        </ng-template>
      </nz-form-control>
    </nz-form-item>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { kind: "directive", type: i3.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { kind: "component", type: i4.NzFormItemComponent, selector: "nz-form-item", exportAs: ["nzFormItem"] }, { kind: "component", type: i4.NzFormLabelComponent, selector: "nz-form-label", inputs: ["nzFor", "nzRequired", "nzNoColon", "nzTooltipTitle", "nzTooltipIcon", "nzLabelAlign", "nzLabelWrap"], exportAs: ["nzFormLabel"] }, { kind: "component", type: i4.NzFormControlComponent, selector: "nz-form-control", inputs: ["nzSuccessTip", "nzWarningTip", "nzErrorTip", "nzValidatingTip", "nzExtra", "nzAutoTips", "nzDisableAutoTips", "nzHasFeedback", "nzValidateStatus"], exportAs: ["nzFormControl"] }, { kind: "directive", type: i5.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "component", type: i6.ɵFormlyValidationMessage, selector: "formly-validation-message", inputs: ["field"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FieldWrapperComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-wrapper',
                    template: `
    <nz-form-item [class]="field.className">
      <ng-container *ngIf="hasLabel && props.hideLabel !== true">
        <nz-form-label
          *ngIf="hasLabel"
          [ngClass]="props.labelClass || formState.labelClass"
          [nzRequired]="props.required && props.hideRequiredMarker !== true"
          [nzFor]="id"
          [nzTooltipTitle]="nzTooltipTitle"
          [nzTooltipIcon]="props.nzTooltipIcon"
          [nzSpan]="props.labelNzSpan || formState.labelNzSpan"
          [nzNoColon]="props.nzNoColon || formState.nzNoColon"
          [nzFlex]="props.labelNzFlex || formState.labelNzFlex"
          [nzLg]="props.labelNzLg || formState.labelNzLg"
          [nzMd]="props.labelNzMd || formState.labelNzMd"
          [nzOffset]="props.labelNzOffset || formState.labelNzOffset"
          [nzOrder]="props.labelNzOrder || formState.labelNzOrder"
          [nzPull]="props.labelNzPull || formState.labelNzPull"
          [nzPush]="props.labelNzPush || formState.labelNzPush"
          [nzSm]="props.labelNzSm || formState.labelNzSm"
          [nzXl]="props.labelNzXl || formState.labelNzXl"
          [nzXs]="props.labelNzXs || formState.labelNzXs"
          [nzXXl]="props.labelNzXXl || formState.labelNzXXl"
        >
          <ng-container *nzStringTemplateOutlet="label; context: { $implicit: field, options: props }">
            <div [innerHTML]="label"></div>
          </ng-container>
        </nz-form-label>
      </ng-container>

      <nz-form-control
        [ngClass]="props.controlClass || formState.controlClass"
        [nzValidateStatus]="validateStatus"
        [nzErrorTip]="errorTip"
        [nzAutoTips]="props.nzAutoTips || formState.nzAutoTips"
        [nzHasFeedback]="props.nzHasFeedback || formState.nzHasFeedback"
        [nzSuccessTip]="nzSuccessTip || formState.nzSuccessTip"
        [nzValidatingTip]="nzValidatingTip || formState.nzValidatingTip"
        [nzWarningTip]="nzWarningTip || formState.nzWarningTip"
        [nzDisableAutoTips]="props.nzDisableAutoTips || formState.nzDisableAutoTips"
        [nzExtra]="props.description || nzExtra"
        [nzSpan]="props.controlNzSpan || formState.controlNzSpan"
        [nzFlex]="props.controlNzFlex || formState.controlNzFlex"
        [nzLg]="props.controlNzLg || formState.controlNzLg"
        [nzMd]="props.controlNzMd || formState.controlNzMd"
        [nzOffset]="props.controlNzOffset || formState.controlNzOffset"
        [nzOrder]="props.controlNzOrder || formState.controlNzOrder"
        [nzPull]="props.controlNzPull || formState.controlNzPull"
        [nzPush]="props.controlNzPush || formState.controlNzPush"
        [nzSm]="props.controlNzSm || formState.controlNzSm"
        [nzXl]="props.controlNzXl || formState.controlNzXl"
        [nzXs]="props.controlNzXs || formState.controlNzXs"
        [nzXXl]="props.controlNzXXl || formState.controlNzXXl"
      >
        <ng-container #fieldComponent></ng-container>
        <ng-template #errorTip>
          <formly-validation-message *ngIf="hasError" [field]="field"></formly-validation-message>
        </ng-template>
      </nz-form-control>
    </nz-form-item>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvZmllbGQtd3JhcHBlci9maWVsZC13cmFwcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFzQixlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7O0FBbUVuRyxNQUFNLE9BQU8scUJBQXNCLFNBQVEsWUFBWTtJQUN0QjtJQUEvQixZQUErQixjQUFrQztRQUMvRCxLQUFLLEVBQUUsQ0FBQztRQURxQixtQkFBYyxHQUFkLGNBQWMsQ0FBb0I7SUFFakUsQ0FBQztJQUNELElBQUksY0FBYztRQUNoQixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUNELElBQUksWUFBWTtRQUNkLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBQ0QsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFDRCxJQUFJLFlBQVk7UUFDZCxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO0lBQzNGLENBQUM7SUFFRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7SUFDL0QsQ0FBQzt3R0FsQ1UscUJBQXFCOzRGQUFyQixxQkFBcUIsbUZBL0R0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNERUOzs0RkFHVSxxQkFBcUI7a0JBakVqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNERUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7MEJBRWMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkV3JhcHBlciB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtbHlCb3hUZW1wbGF0ZXMsIGhhc1RwbE5hbWVWYWx1ZSwgcmVzb2x2ZVRwbE5hbWUgfSBmcm9tICdAZnJlZXplc291bC9uei1mb3JtbHkvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZm9ybWx5LWZpZWxkLXdyYXBwZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bnotZm9ybS1pdGVtIFtjbGFzc109XCJmaWVsZC5jbGFzc05hbWVcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc0xhYmVsICYmIHByb3BzLmhpZGVMYWJlbCAhPT0gdHJ1ZVwiPlxyXG4gICAgICAgIDxuei1mb3JtLWxhYmVsXHJcbiAgICAgICAgICAqbmdJZj1cImhhc0xhYmVsXCJcclxuICAgICAgICAgIFtuZ0NsYXNzXT1cInByb3BzLmxhYmVsQ2xhc3MgfHwgZm9ybVN0YXRlLmxhYmVsQ2xhc3NcIlxyXG4gICAgICAgICAgW256UmVxdWlyZWRdPVwicHJvcHMucmVxdWlyZWQgJiYgcHJvcHMuaGlkZVJlcXVpcmVkTWFya2VyICE9PSB0cnVlXCJcclxuICAgICAgICAgIFtuekZvcl09XCJpZFwiXHJcbiAgICAgICAgICBbbnpUb29sdGlwVGl0bGVdPVwibnpUb29sdGlwVGl0bGVcIlxyXG4gICAgICAgICAgW256VG9vbHRpcEljb25dPVwicHJvcHMubnpUb29sdGlwSWNvblwiXHJcbiAgICAgICAgICBbbnpTcGFuXT1cInByb3BzLmxhYmVsTnpTcGFuIHx8IGZvcm1TdGF0ZS5sYWJlbE56U3BhblwiXHJcbiAgICAgICAgICBbbnpOb0NvbG9uXT1cInByb3BzLm56Tm9Db2xvbiB8fCBmb3JtU3RhdGUubnpOb0NvbG9uXCJcclxuICAgICAgICAgIFtuekZsZXhdPVwicHJvcHMubGFiZWxOekZsZXggfHwgZm9ybVN0YXRlLmxhYmVsTnpGbGV4XCJcclxuICAgICAgICAgIFtuekxnXT1cInByb3BzLmxhYmVsTnpMZyB8fCBmb3JtU3RhdGUubGFiZWxOekxnXCJcclxuICAgICAgICAgIFtuek1kXT1cInByb3BzLmxhYmVsTnpNZCB8fCBmb3JtU3RhdGUubGFiZWxOek1kXCJcclxuICAgICAgICAgIFtuek9mZnNldF09XCJwcm9wcy5sYWJlbE56T2Zmc2V0IHx8IGZvcm1TdGF0ZS5sYWJlbE56T2Zmc2V0XCJcclxuICAgICAgICAgIFtuek9yZGVyXT1cInByb3BzLmxhYmVsTnpPcmRlciB8fCBmb3JtU3RhdGUubGFiZWxOek9yZGVyXCJcclxuICAgICAgICAgIFtuelB1bGxdPVwicHJvcHMubGFiZWxOelB1bGwgfHwgZm9ybVN0YXRlLmxhYmVsTnpQdWxsXCJcclxuICAgICAgICAgIFtuelB1c2hdPVwicHJvcHMubGFiZWxOelB1c2ggfHwgZm9ybVN0YXRlLmxhYmVsTnpQdXNoXCJcclxuICAgICAgICAgIFtuelNtXT1cInByb3BzLmxhYmVsTnpTbSB8fCBmb3JtU3RhdGUubGFiZWxOelNtXCJcclxuICAgICAgICAgIFtuelhsXT1cInByb3BzLmxhYmVsTnpYbCB8fCBmb3JtU3RhdGUubGFiZWxOelhsXCJcclxuICAgICAgICAgIFtuelhzXT1cInByb3BzLmxhYmVsTnpYcyB8fCBmb3JtU3RhdGUubGFiZWxOelhzXCJcclxuICAgICAgICAgIFtuelhYbF09XCJwcm9wcy5sYWJlbE56WFhsIHx8IGZvcm1TdGF0ZS5sYWJlbE56WFhsXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibGFiZWw7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBmaWVsZCwgb3B0aW9uczogcHJvcHMgfVwiPlxyXG4gICAgICAgICAgICA8ZGl2IFtpbm5lckhUTUxdPVwibGFiZWxcIj48L2Rpdj5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbnotZm9ybS1sYWJlbD5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICA8bnotZm9ybS1jb250cm9sXHJcbiAgICAgICAgW25nQ2xhc3NdPVwicHJvcHMuY29udHJvbENsYXNzIHx8IGZvcm1TdGF0ZS5jb250cm9sQ2xhc3NcIlxyXG4gICAgICAgIFtuelZhbGlkYXRlU3RhdHVzXT1cInZhbGlkYXRlU3RhdHVzXCJcclxuICAgICAgICBbbnpFcnJvclRpcF09XCJlcnJvclRpcFwiXHJcbiAgICAgICAgW256QXV0b1RpcHNdPVwicHJvcHMubnpBdXRvVGlwcyB8fCBmb3JtU3RhdGUubnpBdXRvVGlwc1wiXHJcbiAgICAgICAgW256SGFzRmVlZGJhY2tdPVwicHJvcHMubnpIYXNGZWVkYmFjayB8fCBmb3JtU3RhdGUubnpIYXNGZWVkYmFja1wiXHJcbiAgICAgICAgW256U3VjY2Vzc1RpcF09XCJuelN1Y2Nlc3NUaXAgfHwgZm9ybVN0YXRlLm56U3VjY2Vzc1RpcFwiXHJcbiAgICAgICAgW256VmFsaWRhdGluZ1RpcF09XCJuelZhbGlkYXRpbmdUaXAgfHwgZm9ybVN0YXRlLm56VmFsaWRhdGluZ1RpcFwiXHJcbiAgICAgICAgW256V2FybmluZ1RpcF09XCJueldhcm5pbmdUaXAgfHwgZm9ybVN0YXRlLm56V2FybmluZ1RpcFwiXHJcbiAgICAgICAgW256RGlzYWJsZUF1dG9UaXBzXT1cInByb3BzLm56RGlzYWJsZUF1dG9UaXBzIHx8IGZvcm1TdGF0ZS5uekRpc2FibGVBdXRvVGlwc1wiXHJcbiAgICAgICAgW256RXh0cmFdPVwicHJvcHMuZGVzY3JpcHRpb24gfHwgbnpFeHRyYVwiXHJcbiAgICAgICAgW256U3Bhbl09XCJwcm9wcy5jb250cm9sTnpTcGFuIHx8IGZvcm1TdGF0ZS5jb250cm9sTnpTcGFuXCJcclxuICAgICAgICBbbnpGbGV4XT1cInByb3BzLmNvbnRyb2xOekZsZXggfHwgZm9ybVN0YXRlLmNvbnRyb2xOekZsZXhcIlxyXG4gICAgICAgIFtuekxnXT1cInByb3BzLmNvbnRyb2xOekxnIHx8IGZvcm1TdGF0ZS5jb250cm9sTnpMZ1wiXHJcbiAgICAgICAgW256TWRdPVwicHJvcHMuY29udHJvbE56TWQgfHwgZm9ybVN0YXRlLmNvbnRyb2xOek1kXCJcclxuICAgICAgICBbbnpPZmZzZXRdPVwicHJvcHMuY29udHJvbE56T2Zmc2V0IHx8IGZvcm1TdGF0ZS5jb250cm9sTnpPZmZzZXRcIlxyXG4gICAgICAgIFtuek9yZGVyXT1cInByb3BzLmNvbnRyb2xOek9yZGVyIHx8IGZvcm1TdGF0ZS5jb250cm9sTnpPcmRlclwiXHJcbiAgICAgICAgW256UHVsbF09XCJwcm9wcy5jb250cm9sTnpQdWxsIHx8IGZvcm1TdGF0ZS5jb250cm9sTnpQdWxsXCJcclxuICAgICAgICBbbnpQdXNoXT1cInByb3BzLmNvbnRyb2xOelB1c2ggfHwgZm9ybVN0YXRlLmNvbnRyb2xOelB1c2hcIlxyXG4gICAgICAgIFtuelNtXT1cInByb3BzLmNvbnRyb2xOelNtIHx8IGZvcm1TdGF0ZS5jb250cm9sTnpTbVwiXHJcbiAgICAgICAgW256WGxdPVwicHJvcHMuY29udHJvbE56WGwgfHwgZm9ybVN0YXRlLmNvbnRyb2xOelhsXCJcclxuICAgICAgICBbbnpYc109XCJwcm9wcy5jb250cm9sTnpYcyB8fCBmb3JtU3RhdGUuY29udHJvbE56WHNcIlxyXG4gICAgICAgIFtuelhYbF09XCJwcm9wcy5jb250cm9sTnpYWGwgfHwgZm9ybVN0YXRlLmNvbnRyb2xOelhYbFwiXHJcbiAgICAgID5cclxuICAgICAgICA8bmctY29udGFpbmVyICNmaWVsZENvbXBvbmVudD48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgI2Vycm9yVGlwPlxyXG4gICAgICAgICAgPGZvcm1seS12YWxpZGF0aW9uLW1lc3NhZ2UgKm5nSWY9XCJoYXNFcnJvclwiIFtmaWVsZF09XCJmaWVsZFwiPjwvZm9ybWx5LXZhbGlkYXRpb24tbWVzc2FnZT5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L256LWZvcm0tY29udHJvbD5cclxuICAgIDwvbnotZm9ybS1pdGVtPlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpZWxkV3JhcHBlckNvbXBvbmVudCBleHRlbmRzIEZpZWxkV3JhcHBlciB7XHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHVibGljIGZpZWxkVGVtcGxhdGVzOiBGb3JtbHlCb3hUZW1wbGF0ZXMpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG4gIGdldCBuelRvb2x0aXBUaXRsZSgpIHtcclxuICAgIHJldHVybiByZXNvbHZlVHBsTmFtZSh0aGlzLnByb3BzLCB0aGlzLmZpZWxkVGVtcGxhdGVzLCAnbnpUb29sdGlwVGl0bGUnKTtcclxuICB9XHJcbiAgZ2V0IG56RXh0cmEoKSB7XHJcbiAgICByZXR1cm4gcmVzb2x2ZVRwbE5hbWUodGhpcy5wcm9wcywgdGhpcy5maWVsZFRlbXBsYXRlcywgJ256RXh0cmEnKTtcclxuICB9XHJcblxyXG4gIGdldCBoYXNMYWJlbCgpIHtcclxuICAgIHJldHVybiBoYXNUcGxOYW1lVmFsdWUodGhpcy5wcm9wcywgJ2xhYmVsJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgbGFiZWwoKSB7XHJcbiAgICByZXR1cm4gcmVzb2x2ZVRwbE5hbWUodGhpcy5wcm9wcywgdGhpcy5maWVsZFRlbXBsYXRlcywgJ2xhYmVsJyk7XHJcbiAgfVxyXG4gIGdldCBuelN1Y2Nlc3NUaXAoKSB7XHJcbiAgICByZXR1cm4gcmVzb2x2ZVRwbE5hbWUodGhpcy5wcm9wcywgdGhpcy5maWVsZFRlbXBsYXRlcywgJ256U3VjY2Vzc1RpcCcpO1xyXG4gIH1cclxuICBnZXQgbnpWYWxpZGF0aW5nVGlwKCkge1xyXG4gICAgcmV0dXJuIHJlc29sdmVUcGxOYW1lKHRoaXMucHJvcHMsIHRoaXMuZmllbGRUZW1wbGF0ZXMsICduelZhbGlkYXRpbmdUaXAnKTtcclxuICB9XHJcbiAgZ2V0IG56V2FybmluZ1RpcCgpIHtcclxuICAgIHJldHVybiByZXNvbHZlVHBsTmFtZSh0aGlzLnByb3BzLCB0aGlzLmZpZWxkVGVtcGxhdGVzLCAnbnpXYXJuaW5nVGlwJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgaGFzRXJyb3IoKSB7XHJcbiAgICByZXR1cm4gKHRoaXMuZm9ybUNvbnRyb2w/LmRpcnR5IHx8IHRoaXMuZm9ybUNvbnRyb2w/LnRvdWNoZWQpICYmIHRoaXMuZm9ybUNvbnRyb2wuZXJyb3JzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbGlkYXRlU3RhdHVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaGFzRXJyb3IgPyAnZXJyb3InIDogdGhpcy5wcm9wcy5uelZhbGlkYXRlU3RhdHVzO1xyXG4gIH1cclxufVxyXG4iXX0=