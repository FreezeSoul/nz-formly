import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import * as i0 from "@angular/core";
import * as i1 from "@freezesoul/nz-formly/common";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/divider";
import * as i4 from "@ngx-formly/core";
export class FormlyFieldDividerComponent extends FieldType {
    fieldTemplates;
    defaultOptions = {
        props: { nzOrientation: 'center', nzType: 'horizontal' }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldDividerComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldDividerComponent, selector: "nz-formly-divider", usesInheritance: true, ngImport: i0, template: `
    <nz-divider
      [nzType]="props.nzType"
      [nzDashed]="props.nzDashed"
      [nzOrientation]="props.nzOrientation"
      [nzPlain]="props.nzPlain"
      [nzText]="nzText"
      [formlyAttributes]="field"
    ></nz-divider>
    <ng-template #nzText>
      {{ props.nzText }}
      <formly-field *ngFor="let f of field.fieldGroup" [field]="f"></formly-field>
    </ng-template>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i3.NzDividerComponent, selector: "nz-divider", inputs: ["nzText", "nzType", "nzOrientation", "nzDashed", "nzPlain"], exportAs: ["nzDivider"] }, { kind: "component", type: i4.FormlyField, selector: "formly-field", inputs: ["field"] }, { kind: "directive", type: i4.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldDividerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-divider',
                    template: `
    <nz-divider
      [nzType]="props.nzType"
      [nzDashed]="props.nzDashed"
      [nzOrientation]="props.nzOrientation"
      [nzPlain]="props.nzPlain"
      [nzText]="nzText"
      [formlyAttributes]="field"
    ></nz-divider>
    <ng-template #nzText>
      {{ props.nzText }}
      <formly-field *ngFor="let f of field.fieldGroup" [field]="f"></formly-field>
    </ng-template>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl2aWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvZGl2aWRlci9kaXZpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7OztBQXFCN0MsTUFBTSxPQUFPLDJCQUE0QixTQUFRLFNBQVM7SUFLekI7SUFKdEIsY0FBYyxHQUFHO1FBQ3hCLEtBQUssRUFBRSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRTtLQUN6RCxDQUFDO0lBRUYsWUFBK0IsY0FBa0M7UUFDL0QsS0FBSyxFQUFFLENBQUM7UUFEcUIsbUJBQWMsR0FBZCxjQUFjLENBQW9CO0lBRWpFLENBQUM7d0dBUFUsMkJBQTJCOzRGQUEzQiwyQkFBMkIsZ0ZBaEI1Qjs7Ozs7Ozs7Ozs7OztHQWFUOzs0RkFHVSwyQkFBMkI7a0JBbEJ2QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7OztHQWFUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7MEJBTWMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtbHlCb3hUZW1wbGF0ZXMgfSBmcm9tICdAZnJlZXplc291bC9uei1mb3JtbHkvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotZm9ybWx5LWRpdmlkZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bnotZGl2aWRlclxyXG4gICAgICBbbnpUeXBlXT1cInByb3BzLm56VHlwZVwiXHJcbiAgICAgIFtuekRhc2hlZF09XCJwcm9wcy5uekRhc2hlZFwiXHJcbiAgICAgIFtuek9yaWVudGF0aW9uXT1cInByb3BzLm56T3JpZW50YXRpb25cIlxyXG4gICAgICBbbnpQbGFpbl09XCJwcm9wcy5uelBsYWluXCJcclxuICAgICAgW256VGV4dF09XCJuelRleHRcIlxyXG4gICAgICBbZm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiXHJcbiAgICA+PC9uei1kaXZpZGVyPlxyXG4gICAgPG5nLXRlbXBsYXRlICNuelRleHQ+XHJcbiAgICAgIHt7IHByb3BzLm56VGV4dCB9fVxyXG4gICAgICA8Zm9ybWx5LWZpZWxkICpuZ0Zvcj1cImxldCBmIG9mIGZpZWxkLmZpZWxkR3JvdXBcIiBbZmllbGRdPVwiZlwiPjwvZm9ybWx5LWZpZWxkPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtbHlGaWVsZERpdmlkZXJDb21wb25lbnQgZXh0ZW5kcyBGaWVsZFR5cGUge1xyXG4gIG92ZXJyaWRlIGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgcHJvcHM6IHsgbnpPcmllbnRhdGlvbjogJ2NlbnRlcicsIG56VHlwZTogJ2hvcml6b250YWwnIH1cclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwdWJsaWMgZmllbGRUZW1wbGF0ZXM6IEZvcm1seUJveFRlbXBsYXRlcykge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcbn1cclxuIl19