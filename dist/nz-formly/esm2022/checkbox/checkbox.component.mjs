import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
import * as i1 from "@freezesoul/nz-formly/common";
import * as i2 from "@angular/forms";
import * as i3 from "@freezesoul/nzx-antd/checkbox";
import * as i4 from "@ngx-formly/core";
import * as i5 from "@angular/common";
import * as i6 from "@freezesoul/nzx-antd/pipe";
export class FormlyFieldCheckboxComponent extends FieldType {
    fieldTemplates;
    defaultOptions = {
        props: { options: [], nzxMultiple: true, nzxLayout: 'horizontal', nzxRequired: true }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    get labelTemplate() {
        return resolveTplName(this.props, this.fieldTemplates, 'labelTemplate');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldCheckboxComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldCheckboxComponent, selector: "nz-formly-checkbox-component", usesInheritance: true, ngImport: i0, template: `
    <nzx-checkbox
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzxDisabled]="props.disabled || formControl?.disabled"
      [nzxOptions]="props.options | toAsync: $any(props) | async"
      [nzxLabelTemplate]="labelTemplate"
      [nzxLayout]="props.nzxLayout"
      [nzxMultiple]="props.nzxMultiple"
      [nzxRequired]="props.nzxRequired"
      (nzxBlur)="props.blur && props.blur(field, $event)"
      (nzxFocus)="props.focus && props.focus(field, $event)"
      (nzxItemChange)="props.nzxItemChange && props.nzxItemChange($event, field, this)"
      ngDefaultControl
    ></nzx-checkbox>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.NzxCheckboxComponent, selector: "nzx-checkbox", inputs: ["nzxOptions", "nzxDisabled", "nzxLayout", "nzxMultiple", "nzxRequired", "nzxLabelTemplate"], outputs: ["nzxFocus", "nzxBlur", "nzxItemChange"] }, { kind: "directive", type: i4.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { kind: "pipe", type: i5.AsyncPipe, name: "async" }, { kind: "pipe", type: i6.ToAsyncPipe, name: "toAsync" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldCheckboxComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-checkbox-component',
                    template: `
    <nzx-checkbox
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzxDisabled]="props.disabled || formControl?.disabled"
      [nzxOptions]="props.options | toAsync: $any(props) | async"
      [nzxLabelTemplate]="labelTemplate"
      [nzxLayout]="props.nzxLayout"
      [nzxMultiple]="props.nzxMultiple"
      [nzxRequired]="props.nzxRequired"
      (nzxBlur)="props.blur && props.blur(field, $event)"
      (nzxFocus)="props.focus && props.focus(field, $event)"
      (nzxItemChange)="props.nzxItemChange && props.nzxItemChange($event, field, this)"
      ngDefaultControl
    ></nzx-checkbox>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbGliL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUFzQixjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7QUFzQmxGLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxTQUFTO0lBSzFCO0lBSnRCLGNBQWMsR0FBRztRQUN4QixLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO0tBQ3RGLENBQUM7SUFFRixZQUErQixjQUFrQztRQUMvRCxLQUFLLEVBQUUsQ0FBQztRQURxQixtQkFBYyxHQUFkLGNBQWMsQ0FBb0I7SUFFakUsQ0FBQztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUMxRSxDQUFDO3dHQVhVLDRCQUE0Qjs0RkFBNUIsNEJBQTRCLDJGQWxCN0I7Ozs7Ozs7Ozs7Ozs7OztHQWVUOzs0RkFHVSw0QkFBNEI7a0JBcEJ4QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0dBZVQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzswQkFNYyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1seUJveFRlbXBsYXRlcywgcmVzb2x2ZVRwbE5hbWUgfSBmcm9tICdAZnJlZXplc291bC9uei1mb3JtbHkvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotZm9ybWx5LWNoZWNrYm94LWNvbXBvbmVudCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuengtY2hlY2tib3hcclxuICAgICAgW2Zvcm1Db250cm9sXT1cIiRhbnkoZm9ybUNvbnRyb2wpXCJcclxuICAgICAgW2Zvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxyXG4gICAgICBbbnp4RGlzYWJsZWRdPVwicHJvcHMuZGlzYWJsZWQgfHwgZm9ybUNvbnRyb2w/LmRpc2FibGVkXCJcclxuICAgICAgW256eE9wdGlvbnNdPVwicHJvcHMub3B0aW9ucyB8IHRvQXN5bmM6ICRhbnkocHJvcHMpIHwgYXN5bmNcIlxyXG4gICAgICBbbnp4TGFiZWxUZW1wbGF0ZV09XCJsYWJlbFRlbXBsYXRlXCJcclxuICAgICAgW256eExheW91dF09XCJwcm9wcy5uenhMYXlvdXRcIlxyXG4gICAgICBbbnp4TXVsdGlwbGVdPVwicHJvcHMubnp4TXVsdGlwbGVcIlxyXG4gICAgICBbbnp4UmVxdWlyZWRdPVwicHJvcHMubnp4UmVxdWlyZWRcIlxyXG4gICAgICAobnp4Qmx1cik9XCJwcm9wcy5ibHVyICYmIHByb3BzLmJsdXIoZmllbGQsICRldmVudClcIlxyXG4gICAgICAobnp4Rm9jdXMpPVwicHJvcHMuZm9jdXMgJiYgcHJvcHMuZm9jdXMoZmllbGQsICRldmVudClcIlxyXG4gICAgICAobnp4SXRlbUNoYW5nZSk9XCJwcm9wcy5uenhJdGVtQ2hhbmdlICYmIHByb3BzLm56eEl0ZW1DaGFuZ2UoJGV2ZW50LCBmaWVsZCwgdGhpcylcIlxyXG4gICAgICBuZ0RlZmF1bHRDb250cm9sXHJcbiAgICA+PC9uengtY2hlY2tib3g+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybWx5RmllbGRDaGVja2JveENvbXBvbmVudCBleHRlbmRzIEZpZWxkVHlwZSB7XHJcbiAgb3ZlcnJpZGUgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBwcm9wczogeyBvcHRpb25zOiBbXSwgbnp4TXVsdGlwbGU6IHRydWUsIG56eExheW91dDogJ2hvcml6b250YWwnLCBuenhSZXF1aXJlZDogdHJ1ZSB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHVibGljIGZpZWxkVGVtcGxhdGVzOiBGb3JtbHlCb3hUZW1wbGF0ZXMpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbGFiZWxUZW1wbGF0ZSgpIHtcclxuICAgIHJldHVybiByZXNvbHZlVHBsTmFtZSh0aGlzLnByb3BzLCB0aGlzLmZpZWxkVGVtcGxhdGVzLCAnbGFiZWxUZW1wbGF0ZScpO1xyXG4gIH1cclxufVxyXG4iXX0=