import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
import * as i1 from "@freezesoul/nz-formly/common";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/tag";
import * as i4 from "ng-zorro-antd/core/outlet";
import * as i5 from "@ngx-formly/core";
export class FormlyFieldTagComponent extends FieldType {
    fieldTemplates;
    defaultOptions = {
        props: { nzMode: 'default' }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    get nzxContent() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzxContent');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldTagComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldTagComponent, selector: "nz-formly-tag", usesInheritance: true, ngImport: i0, template: `
    <nz-tag
      #instance
      [nzColor]="props.nzColor"
      [nzChecked]="props.nzChecked"
      [nzMode]="props.nzMode"
      (nzOnClose)="props.nzOnClose?.($event, field, instance)"
      (nzCheckedChange)="props.nzCheckedChange?.($event, field, instance)"
      [formlyAttributes]="field"
    >
      <ng-container *nzStringTemplateOutlet="nzxContent; context: { $implicit: field, props: props }">
        {{ nzxContent }}
      </ng-container>

      <ng-container *ngFor="let item of field.fieldGroup">
        <formly-field [field]="item"></formly-field>
      </ng-container>
    </nz-tag>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i3.NzTagComponent, selector: "nz-tag", inputs: ["nzMode", "nzColor", "nzChecked"], outputs: ["nzOnClose", "nzCheckedChange"], exportAs: ["nzTag"] }, { kind: "directive", type: i4.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "component", type: i5.FormlyField, selector: "formly-field", inputs: ["field"] }, { kind: "directive", type: i5.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldTagComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-tag',
                    template: `
    <nz-tag
      #instance
      [nzColor]="props.nzColor"
      [nzChecked]="props.nzChecked"
      [nzMode]="props.nzMode"
      (nzOnClose)="props.nzOnClose?.($event, field, instance)"
      (nzCheckedChange)="props.nzCheckedChange?.($event, field, instance)"
      [formlyAttributes]="field"
    >
      <ng-container *nzStringTemplateOutlet="nzxContent; context: { $implicit: field, props: props }">
        {{ nzxContent }}
      </ng-container>

      <ng-container *ngFor="let item of field.fieldGroup">
        <formly-field [field]="item"></formly-field>
      </ng-container>
    </nz-tag>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi90YWcvdGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUFzQixjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7OztBQXlCbEYsTUFBTSxPQUFPLHVCQUF3QixTQUFRLFNBQVM7SUFLckI7SUFKdEIsY0FBYyxHQUFHO1FBQ3hCLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7S0FDN0IsQ0FBQztJQUVGLFlBQStCLGNBQWtDO1FBQy9ELEtBQUssRUFBRSxDQUFDO1FBRHFCLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtJQUVqRSxDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7d0dBWFUsdUJBQXVCOzRGQUF2Qix1QkFBdUIsNEVBckJ4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JUOzs0RkFHVSx1QkFBdUI7a0JBdkJuQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7OzBCQU1jLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcclxuaW1wb3J0IHsgRm9ybWx5Qm94VGVtcGxhdGVzLCByZXNvbHZlVHBsTmFtZSB9IGZyb20gJ0BmcmVlemVzb3VsL256LWZvcm1seS9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1mb3JtbHktdGFnJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG56LXRhZ1xyXG4gICAgICAjaW5zdGFuY2VcclxuICAgICAgW256Q29sb3JdPVwicHJvcHMubnpDb2xvclwiXHJcbiAgICAgIFtuekNoZWNrZWRdPVwicHJvcHMubnpDaGVja2VkXCJcclxuICAgICAgW256TW9kZV09XCJwcm9wcy5uek1vZGVcIlxyXG4gICAgICAobnpPbkNsb3NlKT1cInByb3BzLm56T25DbG9zZT8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIChuekNoZWNrZWRDaGFuZ2UpPVwicHJvcHMubnpDaGVja2VkQ2hhbmdlPy4oJGV2ZW50LCBmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAgICAgW2Zvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxyXG4gICAgPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnp4Q29udGVudDsgY29udGV4dDogeyAkaW1wbGljaXQ6IGZpZWxkLCBwcm9wczogcHJvcHMgfVwiPlxyXG4gICAgICAgIHt7IG56eENvbnRlbnQgfX1cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZpZWxkLmZpZWxkR3JvdXBcIj5cclxuICAgICAgICA8Zm9ybWx5LWZpZWxkIFtmaWVsZF09XCJpdGVtXCI+PC9mb3JtbHktZmllbGQ+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uei10YWc+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybWx5RmllbGRUYWdDb21wb25lbnQgZXh0ZW5kcyBGaWVsZFR5cGUge1xyXG4gIG92ZXJyaWRlIGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgcHJvcHM6IHsgbnpNb2RlOiAnZGVmYXVsdCcgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHB1YmxpYyBmaWVsZFRlbXBsYXRlczogRm9ybWx5Qm94VGVtcGxhdGVzKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56eENvbnRlbnQoKSB7XHJcbiAgICByZXR1cm4gcmVzb2x2ZVRwbE5hbWUodGhpcy5wcm9wcywgdGhpcy5maWVsZFRlbXBsYXRlcywgJ256eENvbnRlbnQnKTtcclxuICB9XHJcbn1cclxuIl19