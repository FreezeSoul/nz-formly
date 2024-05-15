import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
import * as i1 from "@freezesoul/nz-formly/common";
import * as i2 from "@angular/forms";
import * as i3 from "ng-zorro-antd/rate";
import * as i4 from "@ngx-formly/core";
export class FormlyFieldRateComponent extends FieldType {
    fieldTemplates;
    defaultOptions = {
        props: { nzCount: 5 }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    get nzCharacter() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzCharacter');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldRateComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldRateComponent, selector: "nz-formly-rate-component", usesInheritance: true, ngImport: i0, template: `
    <nz-rate
      #instance
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzAllowClear]="props.nzAllowClear !== false"
      [nzAllowHalf]="props.nzAllowHalf"
      [nzAutoFocus]="props.nzAutoFocus"
      [nzCount]="props.nzCount"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzCharacter]="nzCharacter"
      [nzTooltips]="props.nzTooltips || []"
      (nzOnHoverChange)="props.onHoverChange?.($event, field, instance)"
      (nzOnBlur)="props.nzOnBlur?.($event, field, instance)"
      (nzOnFocus)="props.nzOnFocus?.($event, field, instance)"
      (nzOnKeyDown)="props.nzOnKeyDown?.($event, field, instance)"
      ngDefaultControl
    ></nz-rate>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.NzRateComponent, selector: "nz-rate", inputs: ["nzAllowClear", "nzAllowHalf", "nzDisabled", "nzAutoFocus", "nzCharacter", "nzCount", "nzTooltips"], outputs: ["nzOnBlur", "nzOnFocus", "nzOnHoverChange", "nzOnKeyDown"], exportAs: ["nzRate"] }, { kind: "directive", type: i4.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldRateComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-rate-component',
                    template: `
    <nz-rate
      #instance
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzAllowClear]="props.nzAllowClear !== false"
      [nzAllowHalf]="props.nzAllowHalf"
      [nzAutoFocus]="props.nzAutoFocus"
      [nzCount]="props.nzCount"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzCharacter]="nzCharacter"
      [nzTooltips]="props.nzTooltips || []"
      (nzOnHoverChange)="props.onHoverChange?.($event, field, instance)"
      (nzOnBlur)="props.nzOnBlur?.($event, field, instance)"
      (nzOnFocus)="props.nzOnFocus?.($event, field, instance)"
      (nzOnKeyDown)="props.nzOnKeyDown?.($event, field, instance)"
      ngDefaultControl
    ></nz-rate>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvcmF0ZS9yYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUFzQixjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7O0FBeUJsRixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsU0FBUztJQUt0QjtJQUp0QixjQUFjLEdBQUc7UUFDeEIsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtLQUN0QixDQUFDO0lBRUYsWUFBK0IsY0FBa0M7UUFDL0QsS0FBSyxFQUFFLENBQUM7UUFEcUIsbUJBQWMsR0FBZCxjQUFjLENBQW9CO0lBRWpFLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDeEUsQ0FBQzt3R0FYVSx3QkFBd0I7NEZBQXhCLHdCQUF3Qix1RkFyQnpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQlQ7OzRGQUdVLHdCQUF3QjtrQkF2QnBDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQlQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzswQkFNYyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1seUJveFRlbXBsYXRlcywgcmVzb2x2ZVRwbE5hbWUgfSBmcm9tICdAZnJlZXplc291bC9uei1mb3JtbHkvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotZm9ybWx5LXJhdGUtY29tcG9uZW50JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG56LXJhdGVcclxuICAgICAgI2luc3RhbmNlXHJcbiAgICAgIFtmb3JtQ29udHJvbF09XCIkYW55KGZvcm1Db250cm9sKVwiXHJcbiAgICAgIFtmb3JtbHlBdHRyaWJ1dGVzXT1cImZpZWxkXCJcclxuICAgICAgW256QWxsb3dDbGVhcl09XCJwcm9wcy5uekFsbG93Q2xlYXIgIT09IGZhbHNlXCJcclxuICAgICAgW256QWxsb3dIYWxmXT1cInByb3BzLm56QWxsb3dIYWxmXCJcclxuICAgICAgW256QXV0b0ZvY3VzXT1cInByb3BzLm56QXV0b0ZvY3VzXCJcclxuICAgICAgW256Q291bnRdPVwicHJvcHMubnpDb3VudFwiXHJcbiAgICAgIFtuekRpc2FibGVkXT1cInByb3BzLm56RGlzYWJsZWQgfHwgcHJvcHMuZGlzYWJsZWQgfHwgZm9ybUNvbnRyb2w/LmRpc2FibGVkXCJcclxuICAgICAgW256Q2hhcmFjdGVyXT1cIm56Q2hhcmFjdGVyXCJcclxuICAgICAgW256VG9vbHRpcHNdPVwicHJvcHMubnpUb29sdGlwcyB8fCBbXVwiXHJcbiAgICAgIChuek9uSG92ZXJDaGFuZ2UpPVwicHJvcHMub25Ib3ZlckNoYW5nZT8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIChuek9uQmx1cik9XCJwcm9wcy5uek9uQmx1cj8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIChuek9uRm9jdXMpPVwicHJvcHMubnpPbkZvY3VzPy4oJGV2ZW50LCBmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAgICAgKG56T25LZXlEb3duKT1cInByb3BzLm56T25LZXlEb3duPy4oJGV2ZW50LCBmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAgICAgbmdEZWZhdWx0Q29udHJvbFxyXG4gICAgPjwvbnotcmF0ZT5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtbHlGaWVsZFJhdGVDb21wb25lbnQgZXh0ZW5kcyBGaWVsZFR5cGUge1xyXG4gIG92ZXJyaWRlIGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgcHJvcHM6IHsgbnpDb3VudDogNSB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHVibGljIGZpZWxkVGVtcGxhdGVzOiBGb3JtbHlCb3hUZW1wbGF0ZXMpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpDaGFyYWN0ZXIoKSB7XHJcbiAgICByZXR1cm4gcmVzb2x2ZVRwbE5hbWUodGhpcy5wcm9wcywgdGhpcy5maWVsZFRlbXBsYXRlcywgJ256Q2hhcmFjdGVyJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==