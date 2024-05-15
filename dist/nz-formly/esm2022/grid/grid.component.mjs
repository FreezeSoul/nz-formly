import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/grid";
import * as i3 from "@ngx-formly/core";
export class FormlyFieldGridComponent extends FieldType {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldGridComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldGridComponent, selector: "nz-formly-grid", usesInheritance: true, ngImport: i0, template: `
    <div
      nz-row
      [nzAlign]="props.nzAlign || formState.nzAlign"
      [nzGutter]="props.nzGutter || formState.nzGutter"
      [nzJustify]="props.nzJustify || formState.nzJustify"
      [formlyAttributes]="field"
    >
      <formly-field
        *ngFor="let item of field.fieldGroup"
        [field]="item"
        nz-col
        [nzSpan]="item.props?.colNzSpan || formState.colNzSpan"
        [nzFlex]="item.props?.colNzFlex || formState.colNzFlex"
        [nzLg]="item.props?.colNzLg || formState.colNzLg"
        [nzMd]="item.props?.colNzMd || formState.colNzMd"
        [nzOffset]="item.props?.colNzOffset || formState.colNzOffset"
        [nzOrder]="item.props?.colNzOrder || formState.colNzOrder"
        [nzPull]="item.props?.colNzPull || formState.colNzPull"
        [nzPush]="item.props?.colNzPush || formState.colNzPush"
        [nzSm]="item.props?.colNzSm || formState.colNzSm"
        [nzXl]="item.props?.colNzXl || formState.colNzXl"
        [nzXs]="item.props?.colNzXs || formState.colNzXs"
        [nzXXl]="item.props?.colNzXXl || formState.colNzXXl"
        [formlyAttributes]="{ props: { attributes: item.props?.colAttributes } }"
      ></formly-field>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { kind: "directive", type: i2.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { kind: "component", type: i3.FormlyField, selector: "formly-field", inputs: ["field"] }, { kind: "directive", type: i3.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldGridComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-grid',
                    template: `
    <div
      nz-row
      [nzAlign]="props.nzAlign || formState.nzAlign"
      [nzGutter]="props.nzGutter || formState.nzGutter"
      [nzJustify]="props.nzJustify || formState.nzJustify"
      [formlyAttributes]="field"
    >
      <formly-field
        *ngFor="let item of field.fieldGroup"
        [field]="item"
        nz-col
        [nzSpan]="item.props?.colNzSpan || formState.colNzSpan"
        [nzFlex]="item.props?.colNzFlex || formState.colNzFlex"
        [nzLg]="item.props?.colNzLg || formState.colNzLg"
        [nzMd]="item.props?.colNzMd || formState.colNzMd"
        [nzOffset]="item.props?.colNzOffset || formState.colNzOffset"
        [nzOrder]="item.props?.colNzOrder || formState.colNzOrder"
        [nzPull]="item.props?.colNzPull || formState.colNzPull"
        [nzPush]="item.props?.colNzPush || formState.colNzPush"
        [nzSm]="item.props?.colNzSm || formState.colNzSm"
        [nzXl]="item.props?.colNzXl || formState.colNzXl"
        [nzXs]="item.props?.colNzXs || formState.colNzXs"
        [nzXXl]="item.props?.colNzXXl || formState.colNzXXl"
        [formlyAttributes]="{ props: { attributes: item.props?.colAttributes } }"
      ></formly-field>
    </div>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvZ3JpZC9ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7QUFrQzdDLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxTQUFTO3dHQUExQyx3QkFBd0I7NEZBQXhCLHdCQUF3Qiw2RUE5QnpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyQlQ7OzRGQUdVLHdCQUF3QjtrQkFoQ3BDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyQlQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotZm9ybWx5LWdyaWQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2XHJcbiAgICAgIG56LXJvd1xyXG4gICAgICBbbnpBbGlnbl09XCJwcm9wcy5uekFsaWduIHx8IGZvcm1TdGF0ZS5uekFsaWduXCJcclxuICAgICAgW256R3V0dGVyXT1cInByb3BzLm56R3V0dGVyIHx8IGZvcm1TdGF0ZS5uekd1dHRlclwiXHJcbiAgICAgIFtuekp1c3RpZnldPVwicHJvcHMubnpKdXN0aWZ5IHx8IGZvcm1TdGF0ZS5uekp1c3RpZnlcIlxyXG4gICAgICBbZm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiXHJcbiAgICA+XHJcbiAgICAgIDxmb3JtbHktZmllbGRcclxuICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBmaWVsZC5maWVsZEdyb3VwXCJcclxuICAgICAgICBbZmllbGRdPVwiaXRlbVwiXHJcbiAgICAgICAgbnotY29sXHJcbiAgICAgICAgW256U3Bhbl09XCJpdGVtLnByb3BzPy5jb2xOelNwYW4gfHwgZm9ybVN0YXRlLmNvbE56U3BhblwiXHJcbiAgICAgICAgW256RmxleF09XCJpdGVtLnByb3BzPy5jb2xOekZsZXggfHwgZm9ybVN0YXRlLmNvbE56RmxleFwiXHJcbiAgICAgICAgW256TGddPVwiaXRlbS5wcm9wcz8uY29sTnpMZyB8fCBmb3JtU3RhdGUuY29sTnpMZ1wiXHJcbiAgICAgICAgW256TWRdPVwiaXRlbS5wcm9wcz8uY29sTnpNZCB8fCBmb3JtU3RhdGUuY29sTnpNZFwiXHJcbiAgICAgICAgW256T2Zmc2V0XT1cIml0ZW0ucHJvcHM/LmNvbE56T2Zmc2V0IHx8IGZvcm1TdGF0ZS5jb2xOek9mZnNldFwiXHJcbiAgICAgICAgW256T3JkZXJdPVwiaXRlbS5wcm9wcz8uY29sTnpPcmRlciB8fCBmb3JtU3RhdGUuY29sTnpPcmRlclwiXHJcbiAgICAgICAgW256UHVsbF09XCJpdGVtLnByb3BzPy5jb2xOelB1bGwgfHwgZm9ybVN0YXRlLmNvbE56UHVsbFwiXHJcbiAgICAgICAgW256UHVzaF09XCJpdGVtLnByb3BzPy5jb2xOelB1c2ggfHwgZm9ybVN0YXRlLmNvbE56UHVzaFwiXHJcbiAgICAgICAgW256U21dPVwiaXRlbS5wcm9wcz8uY29sTnpTbSB8fCBmb3JtU3RhdGUuY29sTnpTbVwiXHJcbiAgICAgICAgW256WGxdPVwiaXRlbS5wcm9wcz8uY29sTnpYbCB8fCBmb3JtU3RhdGUuY29sTnpYbFwiXHJcbiAgICAgICAgW256WHNdPVwiaXRlbS5wcm9wcz8uY29sTnpYcyB8fCBmb3JtU3RhdGUuY29sTnpYc1wiXHJcbiAgICAgICAgW256WFhsXT1cIml0ZW0ucHJvcHM/LmNvbE56WFhsIHx8IGZvcm1TdGF0ZS5jb2xOelhYbFwiXHJcbiAgICAgICAgW2Zvcm1seUF0dHJpYnV0ZXNdPVwieyBwcm9wczogeyBhdHRyaWJ1dGVzOiBpdGVtLnByb3BzPy5jb2xBdHRyaWJ1dGVzIH0gfVwiXHJcbiAgICAgID48L2Zvcm1seS1maWVsZD5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1seUZpZWxkR3JpZENvbXBvbmVudCBleHRlbmRzIEZpZWxkVHlwZSB7fVxyXG4iXX0=