import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
import * as i1 from "@freezesoul/nz-formly/common";
import * as i2 from "@angular/forms";
import * as i3 from "ng-zorro-antd/cascader";
import * as i4 from "@ngx-formly/core";
import * as i5 from "@angular/common";
import * as i6 from "@freezesoul/nzx-antd/pipe";
export class FormlyFieldCascaderComponent extends FieldType {
    fieldTemplates;
    defaultOptions = {
        props: {
            nzPlaceHolder: '请选择',
            nzExpandTrigger: 'click',
            nzTriggerAction: 'click',
            nzAllowClear: true,
            nzLabelProperty: 'label',
            nzValueProperty: 'value',
            nzShowArrow: true,
            nzShowInput: true,
            nzSize: 'default'
        }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    get nzNotFoundContent() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzNotFoundContent');
    }
    get nzExpandIcon() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzExpandIcon');
    }
    get nzLabelRender() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzLabelRender');
    }
    get nzOptionRender() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzOptionRender');
    }
    get nzSuffixIcon() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzSuffixIcon');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldCascaderComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldCascaderComponent, selector: "nz-formly-cascader-component", usesInheritance: true, ngImport: i0, template: `
    <nz-cascader
      #nzCascader
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzOptions]="props.options | toAsync: $any(props) | async"
      [nzAutoFocus]="props.nzAutoFocus"
      [nzAllowClear]="props.nzAllowClear"
      [nzBackdrop]="props.nzBackdrop"
      [nzChangeOn]="props.nzChangeOn"
      [nzExpandIcon]="nzExpandIcon"
      [nzLabelRender]="nzLabelRender"
      [nzLoadData]="props.nzLoadData"
      [nzMouseEnterDelay]="props.nzMouseEnterDelay"
      [nzMouseLeaveDelay]="props.nzMouseLeaveDelay"
      [nzNotFoundContent]="nzNotFoundContent"
      [nzOptionRender]="nzOptionRender"
      [nzShowArrow]="props.nzShowArrow"
      [nzShowInput]="props.nzShowInput"
      [nzSuffixIcon]="nzSuffixIcon"
      [nzTriggerAction]="props.nzTriggerAction"
      [nzChangeOnSelect]="props.nzChangeOnSelect"
      [nzColumnClassName]="props.nzColumnClassName"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzExpandTrigger]="props.nzExpandTrigger"
      [nzMenuClassName]="props.nzMenuClassName"
      [nzMenuStyle]="props.nzMenuStyle"
      [nzLabelProperty]="props.nzLabelProperty || 'label'"
      [nzPlaceHolder]="props.nzPlaceHolder || props.placeholder"
      [nzShowSearch]="props.nzShowSearch"
      [nzSize]="props.nzSize"
      [nzValueProperty]="props.nzValueProperty || 'value'"
      (nzClear)="props.nzClear?.(field, nzCascader)"
      (nzSelect)="props.nzSelect?.($event, field, nzCascader)"
      (nzSelectionChange)="props.nzSelectionChange?.($event, field, nzCascader)"
      (nzVisibleChange)="props.nzVisibleChange?.($event, field, nzCascader)"
      ngDefaultControl
    ></nz-cascader>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.NzCascaderComponent, selector: "nz-cascader, [nz-cascader]", inputs: ["nzOptionRender", "nzShowInput", "nzShowArrow", "nzAllowClear", "nzAutoFocus", "nzChangeOnSelect", "nzDisabled", "nzColumnClassName", "nzExpandTrigger", "nzValueProperty", "nzLabelRender", "nzLabelProperty", "nzNotFoundContent", "nzSize", "nzBackdrop", "nzShowSearch", "nzPlaceHolder", "nzMenuClassName", "nzMenuStyle", "nzMouseEnterDelay", "nzMouseLeaveDelay", "nzStatus", "nzTriggerAction", "nzChangeOn", "nzLoadData", "nzSuffixIcon", "nzExpandIcon", "nzOptions"], outputs: ["nzVisibleChange", "nzSelectionChange", "nzSelect", "nzClear"], exportAs: ["nzCascader"] }, { kind: "directive", type: i4.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { kind: "pipe", type: i5.AsyncPipe, name: "async" }, { kind: "pipe", type: i6.ToAsyncPipe, name: "toAsync" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldCascaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-cascader-component',
                    template: `
    <nz-cascader
      #nzCascader
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzOptions]="props.options | toAsync: $any(props) | async"
      [nzAutoFocus]="props.nzAutoFocus"
      [nzAllowClear]="props.nzAllowClear"
      [nzBackdrop]="props.nzBackdrop"
      [nzChangeOn]="props.nzChangeOn"
      [nzExpandIcon]="nzExpandIcon"
      [nzLabelRender]="nzLabelRender"
      [nzLoadData]="props.nzLoadData"
      [nzMouseEnterDelay]="props.nzMouseEnterDelay"
      [nzMouseLeaveDelay]="props.nzMouseLeaveDelay"
      [nzNotFoundContent]="nzNotFoundContent"
      [nzOptionRender]="nzOptionRender"
      [nzShowArrow]="props.nzShowArrow"
      [nzShowInput]="props.nzShowInput"
      [nzSuffixIcon]="nzSuffixIcon"
      [nzTriggerAction]="props.nzTriggerAction"
      [nzChangeOnSelect]="props.nzChangeOnSelect"
      [nzColumnClassName]="props.nzColumnClassName"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzExpandTrigger]="props.nzExpandTrigger"
      [nzMenuClassName]="props.nzMenuClassName"
      [nzMenuStyle]="props.nzMenuStyle"
      [nzLabelProperty]="props.nzLabelProperty || 'label'"
      [nzPlaceHolder]="props.nzPlaceHolder || props.placeholder"
      [nzShowSearch]="props.nzShowSearch"
      [nzSize]="props.nzSize"
      [nzValueProperty]="props.nzValueProperty || 'value'"
      (nzClear)="props.nzClear?.(field, nzCascader)"
      (nzSelect)="props.nzSelect?.($event, field, nzCascader)"
      (nzSelectionChange)="props.nzSelectionChange?.($event, field, nzCascader)"
      (nzVisibleChange)="props.nzVisibleChange?.($event, field, nzCascader)"
      ngDefaultControl
    ></nz-cascader>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzY2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbGliL2Nhc2NhZGVyL2Nhc2NhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7OztBQTZDOUQsTUFBTSxPQUFPLDRCQUE2QixTQUFRLFNBQVM7SUFlMUI7SUFkdEIsY0FBYyxHQUFHO1FBQ3hCLEtBQUssRUFBRTtZQUNMLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLGVBQWUsRUFBRSxPQUFPO1lBQ3hCLGVBQWUsRUFBRSxPQUFPO1lBQ3hCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGVBQWUsRUFBRSxPQUFPO1lBQ3hCLGVBQWUsRUFBRSxPQUFPO1lBQ3hCLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLE1BQU0sRUFBRSxTQUFTO1NBQ2xCO0tBQ0YsQ0FBQztJQUVGLFlBQStCLGNBQWtDO1FBQy9ELEtBQUssRUFBRSxDQUFDO1FBRHFCLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtJQUVqRSxDQUFDO0lBRUQsSUFBSSxpQkFBaUI7UUFDbkIsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUN6RSxDQUFDO3dHQXJDVSw0QkFBNEI7NEZBQTVCLDRCQUE0QiwyRkF6QzdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNDVDs7NEZBR1UsNEJBQTRCO2tCQTNDeEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0NUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7MEJBZ0JjLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcclxuaW1wb3J0IHsgRm9ybWx5Qm94VGVtcGxhdGVzIH0gZnJvbSAnQGZyZWV6ZXNvdWwvbnotZm9ybWx5L2NvbW1vbic7XHJcbmltcG9ydCB7IHJlc29sdmVUcGxOYW1lIH0gZnJvbSAnQGZyZWV6ZXNvdWwvbnotZm9ybWx5L2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWZvcm1seS1jYXNjYWRlci1jb21wb25lbnQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bnotY2FzY2FkZXJcclxuICAgICAgI256Q2FzY2FkZXJcclxuICAgICAgW2Zvcm1Db250cm9sXT1cIiRhbnkoZm9ybUNvbnRyb2wpXCJcclxuICAgICAgW2Zvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxyXG4gICAgICBbbnpPcHRpb25zXT1cInByb3BzLm9wdGlvbnMgfCB0b0FzeW5jOiAkYW55KHByb3BzKSB8IGFzeW5jXCJcclxuICAgICAgW256QXV0b0ZvY3VzXT1cInByb3BzLm56QXV0b0ZvY3VzXCJcclxuICAgICAgW256QWxsb3dDbGVhcl09XCJwcm9wcy5uekFsbG93Q2xlYXJcIlxyXG4gICAgICBbbnpCYWNrZHJvcF09XCJwcm9wcy5uekJhY2tkcm9wXCJcclxuICAgICAgW256Q2hhbmdlT25dPVwicHJvcHMubnpDaGFuZ2VPblwiXHJcbiAgICAgIFtuekV4cGFuZEljb25dPVwibnpFeHBhbmRJY29uXCJcclxuICAgICAgW256TGFiZWxSZW5kZXJdPVwibnpMYWJlbFJlbmRlclwiXHJcbiAgICAgIFtuekxvYWREYXRhXT1cInByb3BzLm56TG9hZERhdGFcIlxyXG4gICAgICBbbnpNb3VzZUVudGVyRGVsYXldPVwicHJvcHMubnpNb3VzZUVudGVyRGVsYXlcIlxyXG4gICAgICBbbnpNb3VzZUxlYXZlRGVsYXldPVwicHJvcHMubnpNb3VzZUxlYXZlRGVsYXlcIlxyXG4gICAgICBbbnpOb3RGb3VuZENvbnRlbnRdPVwibnpOb3RGb3VuZENvbnRlbnRcIlxyXG4gICAgICBbbnpPcHRpb25SZW5kZXJdPVwibnpPcHRpb25SZW5kZXJcIlxyXG4gICAgICBbbnpTaG93QXJyb3ddPVwicHJvcHMubnpTaG93QXJyb3dcIlxyXG4gICAgICBbbnpTaG93SW5wdXRdPVwicHJvcHMubnpTaG93SW5wdXRcIlxyXG4gICAgICBbbnpTdWZmaXhJY29uXT1cIm56U3VmZml4SWNvblwiXHJcbiAgICAgIFtuelRyaWdnZXJBY3Rpb25dPVwicHJvcHMubnpUcmlnZ2VyQWN0aW9uXCJcclxuICAgICAgW256Q2hhbmdlT25TZWxlY3RdPVwicHJvcHMubnpDaGFuZ2VPblNlbGVjdFwiXHJcbiAgICAgIFtuekNvbHVtbkNsYXNzTmFtZV09XCJwcm9wcy5uekNvbHVtbkNsYXNzTmFtZVwiXHJcbiAgICAgIFtuekRpc2FibGVkXT1cInByb3BzLm56RGlzYWJsZWQgfHwgcHJvcHMuZGlzYWJsZWQgfHwgZm9ybUNvbnRyb2w/LmRpc2FibGVkXCJcclxuICAgICAgW256RXhwYW5kVHJpZ2dlcl09XCJwcm9wcy5uekV4cGFuZFRyaWdnZXJcIlxyXG4gICAgICBbbnpNZW51Q2xhc3NOYW1lXT1cInByb3BzLm56TWVudUNsYXNzTmFtZVwiXHJcbiAgICAgIFtuek1lbnVTdHlsZV09XCJwcm9wcy5uek1lbnVTdHlsZVwiXHJcbiAgICAgIFtuekxhYmVsUHJvcGVydHldPVwicHJvcHMubnpMYWJlbFByb3BlcnR5IHx8ICdsYWJlbCdcIlxyXG4gICAgICBbbnpQbGFjZUhvbGRlcl09XCJwcm9wcy5uelBsYWNlSG9sZGVyIHx8IHByb3BzLnBsYWNlaG9sZGVyXCJcclxuICAgICAgW256U2hvd1NlYXJjaF09XCJwcm9wcy5uelNob3dTZWFyY2hcIlxyXG4gICAgICBbbnpTaXplXT1cInByb3BzLm56U2l6ZVwiXHJcbiAgICAgIFtuelZhbHVlUHJvcGVydHldPVwicHJvcHMubnpWYWx1ZVByb3BlcnR5IHx8ICd2YWx1ZSdcIlxyXG4gICAgICAobnpDbGVhcik9XCJwcm9wcy5uekNsZWFyPy4oZmllbGQsIG56Q2FzY2FkZXIpXCJcclxuICAgICAgKG56U2VsZWN0KT1cInByb3BzLm56U2VsZWN0Py4oJGV2ZW50LCBmaWVsZCwgbnpDYXNjYWRlcilcIlxyXG4gICAgICAobnpTZWxlY3Rpb25DaGFuZ2UpPVwicHJvcHMubnpTZWxlY3Rpb25DaGFuZ2U/LigkZXZlbnQsIGZpZWxkLCBuekNhc2NhZGVyKVwiXHJcbiAgICAgIChuelZpc2libGVDaGFuZ2UpPVwicHJvcHMubnpWaXNpYmxlQ2hhbmdlPy4oJGV2ZW50LCBmaWVsZCwgbnpDYXNjYWRlcilcIlxyXG4gICAgICBuZ0RlZmF1bHRDb250cm9sXHJcbiAgICA+PC9uei1jYXNjYWRlcj5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtbHlGaWVsZENhc2NhZGVyQ29tcG9uZW50IGV4dGVuZHMgRmllbGRUeXBlIHtcclxuICBvdmVycmlkZSBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG56UGxhY2VIb2xkZXI6ICfor7fpgInmi6knLFxyXG4gICAgICBuekV4cGFuZFRyaWdnZXI6ICdjbGljaycsXHJcbiAgICAgIG56VHJpZ2dlckFjdGlvbjogJ2NsaWNrJyxcclxuICAgICAgbnpBbGxvd0NsZWFyOiB0cnVlLFxyXG4gICAgICBuekxhYmVsUHJvcGVydHk6ICdsYWJlbCcsXHJcbiAgICAgIG56VmFsdWVQcm9wZXJ0eTogJ3ZhbHVlJyxcclxuICAgICAgbnpTaG93QXJyb3c6IHRydWUsXHJcbiAgICAgIG56U2hvd0lucHV0OiB0cnVlLFxyXG4gICAgICBuelNpemU6ICdkZWZhdWx0J1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHB1YmxpYyBmaWVsZFRlbXBsYXRlczogRm9ybWx5Qm94VGVtcGxhdGVzKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56Tm90Rm91bmRDb250ZW50KCkge1xyXG4gICAgcmV0dXJuIHJlc29sdmVUcGxOYW1lKHRoaXMucHJvcHMsIHRoaXMuZmllbGRUZW1wbGF0ZXMsICduek5vdEZvdW5kQ29udGVudCcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56RXhwYW5kSWNvbigpIHtcclxuICAgIHJldHVybiByZXNvbHZlVHBsTmFtZSh0aGlzLnByb3BzLCB0aGlzLmZpZWxkVGVtcGxhdGVzLCAnbnpFeHBhbmRJY29uJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpMYWJlbFJlbmRlcigpIHtcclxuICAgIHJldHVybiByZXNvbHZlVHBsTmFtZSh0aGlzLnByb3BzLCB0aGlzLmZpZWxkVGVtcGxhdGVzLCAnbnpMYWJlbFJlbmRlcicpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56T3B0aW9uUmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIHJlc29sdmVUcGxOYW1lKHRoaXMucHJvcHMsIHRoaXMuZmllbGRUZW1wbGF0ZXMsICduek9wdGlvblJlbmRlcicpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56U3VmZml4SWNvbigpIHtcclxuICAgIHJldHVybiByZXNvbHZlVHBsTmFtZSh0aGlzLnByb3BzLCB0aGlzLmZpZWxkVGVtcGxhdGVzLCAnbnpTdWZmaXhJY29uJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==