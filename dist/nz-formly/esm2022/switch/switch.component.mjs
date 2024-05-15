import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@freezesoul/nzx-antd/switch";
import * as i3 from "@ngx-formly/core";
export class FormlyFieldSwitchComponent extends FieldType {
    defaultOptions = {
        props: { nzxCheckedValue: true, nzxUnCheckedValue: false }
    };
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldSwitchComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldSwitchComponent, selector: "nz-formly-switch-component", usesInheritance: true, ngImport: i0, template: `
    <nzx-switch
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzxCheckedValue]="props.nzxCheckedValue"
      [nzxUnCheckedValue]="props.nzxUnCheckedValue"
      [nzCheckedChildren]="props.nzCheckedChildren"
      [nzUnCheckedChildren]="props.nzUnCheckedChildren"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzSize]="props.nzSize"
      [nzLoading]="props.nzLoading"
      [nzControl]="props.nzControl"
      ngDefaultControl
    ></nzx-switch>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i2.NzxSwitchComponent, selector: "nzx-switch", inputs: ["nzxCheckedValue", "nzxUnCheckedValue", "nzDisabled", "nzLoading", "nzControl", "nzCheckedChildren", "nzUnCheckedChildren", "nzSize"] }, { kind: "directive", type: i3.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldSwitchComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-switch-component',
                    template: `
    <nzx-switch
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzxCheckedValue]="props.nzxCheckedValue"
      [nzxUnCheckedValue]="props.nzxUnCheckedValue"
      [nzCheckedChildren]="props.nzCheckedChildren"
      [nzUnCheckedChildren]="props.nzUnCheckedChildren"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzSize]="props.nzSize"
      [nzLoading]="props.nzLoading"
      [nzControl]="props.nzControl"
      ngDefaultControl
    ></nzx-switch>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9zd2l0Y2gvc3dpdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7QUF1QjdDLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxTQUE2QztJQUNsRixjQUFjLEdBQUc7UUFDeEIsS0FBSyxFQUFFLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUU7S0FDM0QsQ0FBQzt3R0FIUywwQkFBMEI7NEZBQTFCLDBCQUEwQix5RkFqQjNCOzs7Ozs7Ozs7Ozs7OztHQWNUOzs0RkFHVSwwQkFBMEI7a0JBbkJ0QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7R0FjVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xyXG5pbXBvcnQgeyBTd2l0Y2hPcHRpb25zIH0gZnJvbSAnLi9mb3JtbHkudHlwZSc7XHJcbmltcG9ydCB7IE56Rm9ybWx5RmllbGRDb25maWcgfSBmcm9tICdAZnJlZXplc291bC9uei1mb3JtbHkvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotZm9ybWx5LXN3aXRjaC1jb21wb25lbnQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bnp4LXN3aXRjaFxyXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiJGFueShmb3JtQ29udHJvbClcIlxyXG4gICAgICBbZm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiXHJcbiAgICAgIFtuenhDaGVja2VkVmFsdWVdPVwicHJvcHMubnp4Q2hlY2tlZFZhbHVlXCJcclxuICAgICAgW256eFVuQ2hlY2tlZFZhbHVlXT1cInByb3BzLm56eFVuQ2hlY2tlZFZhbHVlXCJcclxuICAgICAgW256Q2hlY2tlZENoaWxkcmVuXT1cInByb3BzLm56Q2hlY2tlZENoaWxkcmVuXCJcclxuICAgICAgW256VW5DaGVja2VkQ2hpbGRyZW5dPVwicHJvcHMubnpVbkNoZWNrZWRDaGlsZHJlblwiXHJcbiAgICAgIFtuekRpc2FibGVkXT1cInByb3BzLm56RGlzYWJsZWQgfHwgcHJvcHMuZGlzYWJsZWQgfHwgZm9ybUNvbnRyb2w/LmRpc2FibGVkXCJcclxuICAgICAgW256U2l6ZV09XCJwcm9wcy5uelNpemVcIlxyXG4gICAgICBbbnpMb2FkaW5nXT1cInByb3BzLm56TG9hZGluZ1wiXHJcbiAgICAgIFtuekNvbnRyb2xdPVwicHJvcHMubnpDb250cm9sXCJcclxuICAgICAgbmdEZWZhdWx0Q29udHJvbFxyXG4gICAgPjwvbnp4LXN3aXRjaD5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtbHlGaWVsZFN3aXRjaENvbXBvbmVudCBleHRlbmRzIEZpZWxkVHlwZTxOekZvcm1seUZpZWxkQ29uZmlnPFN3aXRjaE9wdGlvbnM+PiB7XHJcbiAgb3ZlcnJpZGUgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBwcm9wczogeyBuenhDaGVja2VkVmFsdWU6IHRydWUsIG56eFVuQ2hlY2tlZFZhbHVlOiBmYWxzZSB9XHJcbiAgfTtcclxufVxyXG4iXX0=