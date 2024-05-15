import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@freezesoul/nzx-antd/between-input";
import * as i3 from "@ngx-formly/core";
export class FormlyFieldBetweenInputComponent extends FieldType {
    defaultOptions = {
        props: {
            nzxSize: 'default',
            nzxType: 'input',
            nzxStartPlaceholder: '起始值',
            nzxEndPlaceholder: '结束值',
            nzxStartMax: Infinity,
            nzxEndMax: Infinity,
            nzxStartMin: -Infinity,
            nzxEndMin: -Infinity,
            nzxStarStep: 1,
            nzxEndStep: 1
        }
    };
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenInputComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldBetweenInputComponent, selector: "nz-formly-select-component", usesInheritance: true, ngImport: i0, template: `
    <nzx-between-input
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzxType]="props.nzxType"
      [nzxStartPlaceholder]="props.nzxStartPlaceholder"
      [nzxEndPlaceholder]="props.nzxEndPlaceholder"
      [nzxEndDisabled]="props.nzxEndDisabled"
      [nzxStartDisabled]="props.nzxStartDisabled"
      [nzxEndReName]="props.nzxEndReName"
      [nzxStartReName]="props.nzxStartReName"
      [nzxStarPrecision]="props.nzxStarPrecision"
      [nzxEndPrecision]="props.nzxEndPrecision"
      [nzxStarStep]="props.nzxStarStep"
      [nzxEndStep]="props.nzxEndStep"
      [nzxEndFormatter]="props.nzxEndFormatter"
      [nzxStartFormatter]="props.nzxStartFormatter"
      [nzxStarId]="props.nzxStarId"
      [nzxEndId]="props.nzxEndId"
      [nzxSize]="props.nzxSize"
      [nzxEndMax]="props.nzxEndMax"
      [nzxEndMin]="props.nzxEndMin"
      [nzxStartMax]="props.nzxStartMax"
      [nzxStartMin]="props.nzxStartMin"
      [nzxDisabled]="props.disabled || formControl?.disabled"
      ngDefaultControl
    ></nzx-between-input>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i2.NzxBetweenInputComponent, selector: "nzx-between-input", inputs: ["nzxType", "nzxStartPlaceholder", "nzxEndPlaceholder", "nzxStartMax", "nzxEndMax", "nzxStartMin", "nzxEndMin", "nzxStarPrecision", "nzxEndPrecision", "nzxStarStep", "nzxEndStep", "nzxStarId", "nzxEndId", "nzxStartReName", "nzxEndReName", "nzxStartFormatter", "nzxEndFormatter"] }, { kind: "directive", type: i3.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenInputComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-select-component',
                    template: `
    <nzx-between-input
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzxType]="props.nzxType"
      [nzxStartPlaceholder]="props.nzxStartPlaceholder"
      [nzxEndPlaceholder]="props.nzxEndPlaceholder"
      [nzxEndDisabled]="props.nzxEndDisabled"
      [nzxStartDisabled]="props.nzxStartDisabled"
      [nzxEndReName]="props.nzxEndReName"
      [nzxStartReName]="props.nzxStartReName"
      [nzxStarPrecision]="props.nzxStarPrecision"
      [nzxEndPrecision]="props.nzxEndPrecision"
      [nzxStarStep]="props.nzxStarStep"
      [nzxEndStep]="props.nzxEndStep"
      [nzxEndFormatter]="props.nzxEndFormatter"
      [nzxStartFormatter]="props.nzxStartFormatter"
      [nzxStarId]="props.nzxStarId"
      [nzxEndId]="props.nzxEndId"
      [nzxSize]="props.nzxSize"
      [nzxEndMax]="props.nzxEndMax"
      [nzxEndMin]="props.nzxEndMin"
      [nzxStartMax]="props.nzxStartMax"
      [nzxStartMin]="props.nzxStartMin"
      [nzxDisabled]="props.disabled || formControl?.disabled"
      ngDefaultControl
    ></nzx-between-input>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmV0d2Vlbi1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvYmV0d2Vlbi1pbnB1dC9iZXR3ZWVuLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7QUFrQzdDLE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSxTQUFTO0lBQ3BELGNBQWMsR0FBRztRQUN4QixLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUUsU0FBUztZQUNsQixPQUFPLEVBQUUsT0FBTztZQUNoQixtQkFBbUIsRUFBRSxLQUFLO1lBQzFCLGlCQUFpQixFQUFFLEtBQUs7WUFDeEIsV0FBVyxFQUFFLFFBQVE7WUFDckIsU0FBUyxFQUFFLFFBQVE7WUFDbkIsV0FBVyxFQUFFLENBQUMsUUFBUTtZQUN0QixTQUFTLEVBQUUsQ0FBQyxRQUFRO1lBQ3BCLFdBQVcsRUFBRSxDQUFDO1lBQ2QsVUFBVSxFQUFFLENBQUM7U0FDZDtLQUNGLENBQUM7d0dBZFMsZ0NBQWdDOzRGQUFoQyxnQ0FBZ0MseUZBOUJqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJUOzs0RkFHVSxnQ0FBZ0M7a0JBaEM1QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWZvcm1seS1zZWxlY3QtY29tcG9uZW50JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG56eC1iZXR3ZWVuLWlucHV0XHJcbiAgICAgIFtmb3JtQ29udHJvbF09XCIkYW55KGZvcm1Db250cm9sKVwiXHJcbiAgICAgIFtmb3JtbHlBdHRyaWJ1dGVzXT1cImZpZWxkXCJcclxuICAgICAgW256eFR5cGVdPVwicHJvcHMubnp4VHlwZVwiXHJcbiAgICAgIFtuenhTdGFydFBsYWNlaG9sZGVyXT1cInByb3BzLm56eFN0YXJ0UGxhY2Vob2xkZXJcIlxyXG4gICAgICBbbnp4RW5kUGxhY2Vob2xkZXJdPVwicHJvcHMubnp4RW5kUGxhY2Vob2xkZXJcIlxyXG4gICAgICBbbnp4RW5kRGlzYWJsZWRdPVwicHJvcHMubnp4RW5kRGlzYWJsZWRcIlxyXG4gICAgICBbbnp4U3RhcnREaXNhYmxlZF09XCJwcm9wcy5uenhTdGFydERpc2FibGVkXCJcclxuICAgICAgW256eEVuZFJlTmFtZV09XCJwcm9wcy5uenhFbmRSZU5hbWVcIlxyXG4gICAgICBbbnp4U3RhcnRSZU5hbWVdPVwicHJvcHMubnp4U3RhcnRSZU5hbWVcIlxyXG4gICAgICBbbnp4U3RhclByZWNpc2lvbl09XCJwcm9wcy5uenhTdGFyUHJlY2lzaW9uXCJcclxuICAgICAgW256eEVuZFByZWNpc2lvbl09XCJwcm9wcy5uenhFbmRQcmVjaXNpb25cIlxyXG4gICAgICBbbnp4U3RhclN0ZXBdPVwicHJvcHMubnp4U3RhclN0ZXBcIlxyXG4gICAgICBbbnp4RW5kU3RlcF09XCJwcm9wcy5uenhFbmRTdGVwXCJcclxuICAgICAgW256eEVuZEZvcm1hdHRlcl09XCJwcm9wcy5uenhFbmRGb3JtYXR0ZXJcIlxyXG4gICAgICBbbnp4U3RhcnRGb3JtYXR0ZXJdPVwicHJvcHMubnp4U3RhcnRGb3JtYXR0ZXJcIlxyXG4gICAgICBbbnp4U3RhcklkXT1cInByb3BzLm56eFN0YXJJZFwiXHJcbiAgICAgIFtuenhFbmRJZF09XCJwcm9wcy5uenhFbmRJZFwiXHJcbiAgICAgIFtuenhTaXplXT1cInByb3BzLm56eFNpemVcIlxyXG4gICAgICBbbnp4RW5kTWF4XT1cInByb3BzLm56eEVuZE1heFwiXHJcbiAgICAgIFtuenhFbmRNaW5dPVwicHJvcHMubnp4RW5kTWluXCJcclxuICAgICAgW256eFN0YXJ0TWF4XT1cInByb3BzLm56eFN0YXJ0TWF4XCJcclxuICAgICAgW256eFN0YXJ0TWluXT1cInByb3BzLm56eFN0YXJ0TWluXCJcclxuICAgICAgW256eERpc2FibGVkXT1cInByb3BzLmRpc2FibGVkIHx8IGZvcm1Db250cm9sPy5kaXNhYmxlZFwiXHJcbiAgICAgIG5nRGVmYXVsdENvbnRyb2xcclxuICAgID48L256eC1iZXR3ZWVuLWlucHV0PlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1seUZpZWxkQmV0d2VlbklucHV0Q29tcG9uZW50IGV4dGVuZHMgRmllbGRUeXBlIHtcclxuICBvdmVycmlkZSBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG56eFNpemU6ICdkZWZhdWx0JyxcclxuICAgICAgbnp4VHlwZTogJ2lucHV0JyxcclxuICAgICAgbnp4U3RhcnRQbGFjZWhvbGRlcjogJ+i1t+Wni+WAvCcsXHJcbiAgICAgIG56eEVuZFBsYWNlaG9sZGVyOiAn57uT5p2f5YC8JyxcclxuICAgICAgbnp4U3RhcnRNYXg6IEluZmluaXR5LFxyXG4gICAgICBuenhFbmRNYXg6IEluZmluaXR5LFxyXG4gICAgICBuenhTdGFydE1pbjogLUluZmluaXR5LFxyXG4gICAgICBuenhFbmRNaW46IC1JbmZpbml0eSxcclxuICAgICAgbnp4U3RhclN0ZXA6IDEsXHJcbiAgICAgIG56eEVuZFN0ZXA6IDFcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiJdfQ==