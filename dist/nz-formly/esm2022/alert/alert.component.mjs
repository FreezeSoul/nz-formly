import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
import * as i1 from "@freezesoul/nz-formly/common";
import * as i2 from "ng-zorro-antd/alert";
import * as i3 from "@ngx-formly/core";
export class FormlyFieldAlertComponent extends FieldType {
    fieldTemplates;
    defaultOptions = {
        props: {
            nzType: 'info'
        }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    get nzDescription() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzDescription');
    }
    get nzMessage() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzMessage');
    }
    get nzAction() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzAction');
    }
    get nzCloseText() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzCloseText');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldAlertComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldAlertComponent, selector: "nz-formly-alert", usesInheritance: true, ngImport: i0, template: `
    <nz-alert
      #instance
      [formlyAttributes]="field"
      [nzBanner]="props.nzBanner"
      [nzMessage]="nzMessage"
      [nzAction]="nzAction"
      [nzCloseable]="props.nzCloseable"
      [nzCloseText]="nzCloseText"
      [nzDescription]="nzDescription"
      [nzIconType]="props.nzIconType"
      [nzShowIcon]="props.nzShowIcon"
      [nzType]="props.nzType"
      (nzOnClose)="props.nzOnClose?.($event, field, instance)"
    ></nz-alert>
  `, isInline: true, dependencies: [{ kind: "component", type: i2.NzAlertComponent, selector: "nz-alert", inputs: ["nzAction", "nzCloseText", "nzIconType", "nzMessage", "nzDescription", "nzType", "nzCloseable", "nzShowIcon", "nzBanner", "nzNoAnimation", "nzIcon"], outputs: ["nzOnClose"], exportAs: ["nzAlert"] }, { kind: "directive", type: i3.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldAlertComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-alert',
                    template: `
    <nz-alert
      #instance
      [formlyAttributes]="field"
      [nzBanner]="props.nzBanner"
      [nzMessage]="nzMessage"
      [nzAction]="nzAction"
      [nzCloseable]="props.nzCloseable"
      [nzCloseText]="nzCloseText"
      [nzDescription]="nzDescription"
      [nzIconType]="props.nzIconType"
      [nzShowIcon]="props.nzShowIcon"
      [nzType]="props.nzType"
      (nzOnClose)="props.nzOnClose?.($event, field, instance)"
    ></nz-alert>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbGliL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUEyQyxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7QUF1QnZHLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxTQUE0QztJQU8xRDtJQU50QixjQUFjLEdBQUc7UUFDeEIsS0FBSyxFQUFFO1lBQ0wsTUFBTSxFQUFFLE1BQU07U0FDQztLQUNsQixDQUFDO0lBRUYsWUFBK0IsY0FBa0M7UUFDL0QsS0FBSyxFQUFFLENBQUM7UUFEcUIsbUJBQWMsR0FBZCxjQUFjLENBQW9CO0lBRWpFLENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUNELElBQUksU0FBUztRQUNYLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFDRCxJQUFJLFdBQVc7UUFDYixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDeEUsQ0FBQzt3R0F0QlUseUJBQXlCOzRGQUF6Qix5QkFBeUIsOEVBbEIxQjs7Ozs7Ozs7Ozs7Ozs7O0dBZVQ7OzRGQUdVLHlCQUF5QjtrQkFwQnJDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7R0FlVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7OzBCQVFjLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcclxuaW1wb3J0IHsgRm9ybWx5Qm94VGVtcGxhdGVzLCBOekZvcm1seUZpZWxkQ29uZmlnLCByZXNvbHZlVHBsTmFtZSB9IGZyb20gJ0BmcmVlemVzb3VsL256LWZvcm1seS9jb21tb24nO1xyXG5pbXBvcnQgeyBBbGVydE9wdGlvbnMgfSBmcm9tICcuL2Zvcm1seS50eXBlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotZm9ybWx5LWFsZXJ0JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG56LWFsZXJ0XHJcbiAgICAgICNpbnN0YW5jZVxyXG4gICAgICBbZm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiXHJcbiAgICAgIFtuekJhbm5lcl09XCJwcm9wcy5uekJhbm5lclwiXHJcbiAgICAgIFtuek1lc3NhZ2VdPVwibnpNZXNzYWdlXCJcclxuICAgICAgW256QWN0aW9uXT1cIm56QWN0aW9uXCJcclxuICAgICAgW256Q2xvc2VhYmxlXT1cInByb3BzLm56Q2xvc2VhYmxlXCJcclxuICAgICAgW256Q2xvc2VUZXh0XT1cIm56Q2xvc2VUZXh0XCJcclxuICAgICAgW256RGVzY3JpcHRpb25dPVwibnpEZXNjcmlwdGlvblwiXHJcbiAgICAgIFtuekljb25UeXBlXT1cInByb3BzLm56SWNvblR5cGVcIlxyXG4gICAgICBbbnpTaG93SWNvbl09XCJwcm9wcy5uelNob3dJY29uXCJcclxuICAgICAgW256VHlwZV09XCJwcm9wcy5uelR5cGVcIlxyXG4gICAgICAobnpPbkNsb3NlKT1cInByb3BzLm56T25DbG9zZT8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICA+PC9uei1hbGVydD5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtbHlGaWVsZEFsZXJ0Q29tcG9uZW50IGV4dGVuZHMgRmllbGRUeXBlPE56Rm9ybWx5RmllbGRDb25maWc8QWxlcnRPcHRpb25zPj4ge1xyXG4gIG92ZXJyaWRlIGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbnpUeXBlOiAnaW5mbydcclxuICAgIH0gYXMgQWxlcnRPcHRpb25zXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHVibGljIGZpZWxkVGVtcGxhdGVzOiBGb3JtbHlCb3hUZW1wbGF0ZXMpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpEZXNjcmlwdGlvbigpIHtcclxuICAgIHJldHVybiByZXNvbHZlVHBsTmFtZSh0aGlzLnByb3BzLCB0aGlzLmZpZWxkVGVtcGxhdGVzLCAnbnpEZXNjcmlwdGlvbicpO1xyXG4gIH1cclxuICBnZXQgbnpNZXNzYWdlKCkge1xyXG4gICAgcmV0dXJuIHJlc29sdmVUcGxOYW1lKHRoaXMucHJvcHMsIHRoaXMuZmllbGRUZW1wbGF0ZXMsICduek1lc3NhZ2UnKTtcclxuICB9XHJcbiAgZ2V0IG56QWN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHJlc29sdmVUcGxOYW1lKHRoaXMucHJvcHMsIHRoaXMuZmllbGRUZW1wbGF0ZXMsICduekFjdGlvbicpO1xyXG4gIH1cclxuICBnZXQgbnpDbG9zZVRleHQoKSB7XHJcbiAgICByZXR1cm4gcmVzb2x2ZVRwbE5hbWUodGhpcy5wcm9wcywgdGhpcy5maWVsZFRlbXBsYXRlcywgJ256Q2xvc2VUZXh0Jyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==