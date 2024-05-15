import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "ng-zorro-antd/slider";
import * as i3 from "@ngx-formly/core";
export class FormlyFieldSliderComponent extends FieldType {
    defaultOptions = {
        props: {
            nzMax: 100,
            nzMin: 0,
            nzStep: 1,
            nzIncluded: true,
            nzTooltipVisible: 'default',
            nzTooltipPlacement: 'top'
        }
    };
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldSliderComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldSliderComponent, selector: "nz-formly-slider-component", usesInheritance: true, ngImport: i0, template: `
    <nz-slider
      #instance
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzRange]="props.nzRange"
      [nzDefaultValue]="props.nzDefaultValue"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzDots]="props.nzDots"
      [nzIncluded]="props.nzIncluded"
      [nzMarks]="props.nzMarks"
      [nzMax]="props.nzMax"
      [nzMin]="props.nzMin"
      [nzStep]="props.nzStep"
      [nzTipFormatter]="props.nzTipFormatter"
      [nzVertical]="props.nzVertical"
      [nzReverse]="props.nzReverse"
      [nzTooltipPlacement]="$any(props.nzTooltipPlacement)"
      [nzTooltipVisible]="props.nzTooltipVisible"
      (nzOnAfterChange)="props.nzOnAfterChange?.($event, field, instance)"
      ngDefaultControl
    ></nz-slider>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i2.NzSliderComponent, selector: "nz-slider", inputs: ["nzDisabled", "nzDots", "nzIncluded", "nzRange", "nzVertical", "nzReverse", "nzDefaultValue", "nzMarks", "nzMax", "nzMin", "nzStep", "nzTooltipVisible", "nzTooltipPlacement", "nzTipFormatter"], outputs: ["nzOnAfterChange"], exportAs: ["nzSlider"] }, { kind: "directive", type: i3.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldSliderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-slider-component',
                    template: `
    <nz-slider
      #instance
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzRange]="props.nzRange"
      [nzDefaultValue]="props.nzDefaultValue"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzDots]="props.nzDots"
      [nzIncluded]="props.nzIncluded"
      [nzMarks]="props.nzMarks"
      [nzMax]="props.nzMax"
      [nzMin]="props.nzMin"
      [nzStep]="props.nzStep"
      [nzTipFormatter]="props.nzTipFormatter"
      [nzVertical]="props.nzVertical"
      [nzReverse]="props.nzReverse"
      [nzTooltipPlacement]="$any(props.nzTooltipPlacement)"
      [nzTooltipVisible]="props.nzTooltipVisible"
      (nzOnAfterChange)="props.nzOnAfterChange?.($event, field, instance)"
      ngDefaultControl
    ></nz-slider>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7QUFpQzdDLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxTQUE2QztJQUNsRixjQUFjLEdBQUc7UUFDeEIsS0FBSyxFQUFFO1lBQ0wsS0FBSyxFQUFFLEdBQUc7WUFDVixLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxDQUFDO1lBQ1QsVUFBVSxFQUFFLElBQUk7WUFDaEIsZ0JBQWdCLEVBQUUsU0FBZ0M7WUFDbEQsa0JBQWtCLEVBQUUsS0FBa0I7U0FDdkM7S0FDRixDQUFDO3dHQVZTLDBCQUEwQjs0RkFBMUIsMEJBQTBCLHlGQXpCM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQlQ7OzRGQUdVLDBCQUEwQjtrQkEzQnRDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0JUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XHJcbmltcG9ydCB7IE56Rm9ybWx5RmllbGRDb25maWcgfSBmcm9tICdAZnJlZXplc291bC9uei1mb3JtbHkvY29tbW9uJztcclxuaW1wb3J0IHsgU2xpZGVyT3B0aW9ucyB9IGZyb20gJy4vZm9ybWx5LnR5cGUnO1xyXG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBOelNsaWRlclNob3dUb29sdGlwIH0gZnJvbSAnbmctem9ycm8tYW50ZC9zbGlkZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1mb3JtbHktc2xpZGVyLWNvbXBvbmVudCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuei1zbGlkZXJcclxuICAgICAgI2luc3RhbmNlXHJcbiAgICAgIFtmb3JtQ29udHJvbF09XCIkYW55KGZvcm1Db250cm9sKVwiXHJcbiAgICAgIFtmb3JtbHlBdHRyaWJ1dGVzXT1cImZpZWxkXCJcclxuICAgICAgW256UmFuZ2VdPVwicHJvcHMubnpSYW5nZVwiXHJcbiAgICAgIFtuekRlZmF1bHRWYWx1ZV09XCJwcm9wcy5uekRlZmF1bHRWYWx1ZVwiXHJcbiAgICAgIFtuekRpc2FibGVkXT1cInByb3BzLm56RGlzYWJsZWQgfHwgcHJvcHMuZGlzYWJsZWQgfHwgZm9ybUNvbnRyb2w/LmRpc2FibGVkXCJcclxuICAgICAgW256RG90c109XCJwcm9wcy5uekRvdHNcIlxyXG4gICAgICBbbnpJbmNsdWRlZF09XCJwcm9wcy5uekluY2x1ZGVkXCJcclxuICAgICAgW256TWFya3NdPVwicHJvcHMubnpNYXJrc1wiXHJcbiAgICAgIFtuek1heF09XCJwcm9wcy5uek1heFwiXHJcbiAgICAgIFtuek1pbl09XCJwcm9wcy5uek1pblwiXHJcbiAgICAgIFtuelN0ZXBdPVwicHJvcHMubnpTdGVwXCJcclxuICAgICAgW256VGlwRm9ybWF0dGVyXT1cInByb3BzLm56VGlwRm9ybWF0dGVyXCJcclxuICAgICAgW256VmVydGljYWxdPVwicHJvcHMubnpWZXJ0aWNhbFwiXHJcbiAgICAgIFtuelJldmVyc2VdPVwicHJvcHMubnpSZXZlcnNlXCJcclxuICAgICAgW256VG9vbHRpcFBsYWNlbWVudF09XCIkYW55KHByb3BzLm56VG9vbHRpcFBsYWNlbWVudClcIlxyXG4gICAgICBbbnpUb29sdGlwVmlzaWJsZV09XCJwcm9wcy5uelRvb2x0aXBWaXNpYmxlXCJcclxuICAgICAgKG56T25BZnRlckNoYW5nZSk9XCJwcm9wcy5uek9uQWZ0ZXJDaGFuZ2U/LigkZXZlbnQsIGZpZWxkLCBpbnN0YW5jZSlcIlxyXG4gICAgICBuZ0RlZmF1bHRDb250cm9sXHJcbiAgICA+PC9uei1zbGlkZXI+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybWx5RmllbGRTbGlkZXJDb21wb25lbnQgZXh0ZW5kcyBGaWVsZFR5cGU8TnpGb3JtbHlGaWVsZENvbmZpZzxTbGlkZXJPcHRpb25zPj4ge1xyXG4gIG92ZXJyaWRlIGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbnpNYXg6IDEwMCxcclxuICAgICAgbnpNaW46IDAsXHJcbiAgICAgIG56U3RlcDogMSxcclxuICAgICAgbnpJbmNsdWRlZDogdHJ1ZSxcclxuICAgICAgbnpUb29sdGlwVmlzaWJsZTogJ2RlZmF1bHQnIGFzIE56U2xpZGVyU2hvd1Rvb2x0aXAsXHJcbiAgICAgIG56VG9vbHRpcFBsYWNlbWVudDogJ3RvcCcgYXMgTnpTYWZlQW55XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iXX0=