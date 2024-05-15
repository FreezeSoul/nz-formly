import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { resolveTplName, resolveTplNameArray } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
import * as i1 from "@freezesoul/nz-formly/common";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/card";
import * as i4 from "ng-zorro-antd/core/outlet";
import * as i5 from "@ngx-formly/core";
export class FormlyFieldCardComponent extends FieldType {
    fieldTemplates;
    defaultOptions = {
        props: { nzSize: 'default', type: 'button' }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    get nzTitle() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzTitle');
    }
    get nzCover() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzCover');
    }
    get nzExtra() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzExtra');
    }
    get nzActions() {
        return resolveTplNameArray(this.props, this.fieldTemplates, 'nzActions') || [];
    }
    get nzContent() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzContent');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldCardComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldCardComponent, selector: "nz-formly-card", usesInheritance: true, ngImport: i0, template: `
    <nz-card
      [nzTitle]="nzTitle"
      [formlyAttributes]="field"
      [nzBorderless]="props.nzBorderless"
      [nzCover]="nzCover"
      [nzExtra]="nzExtra"
      [nzHoverable]="props.nzHoverable"
      [nzLoading]="props.nzLoading"
      [nzActions]="nzActions"
      [nzBodyStyle]="props.nzBodyStyle"
      [nzBordered]="props.nzBordered"
      [nzType]="props.nzType"
      [nzSize]="props.nzSize"
    >
      <formly-field [field]="item" *ngFor="let item of field.fieldGroup"></formly-field>
      <ng-container *nzStringTemplateOutlet="nzContent; context: { $implicit: field, options: props }">
        {{ nzContent }}
      </ng-container>
    </nz-card>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i3.NzCardComponent, selector: "nz-card", inputs: ["nzBordered", "nzBorderless", "nzLoading", "nzHoverable", "nzBodyStyle", "nzCover", "nzActions", "nzType", "nzSize", "nzTitle", "nzExtra"], exportAs: ["nzCard"] }, { kind: "directive", type: i4.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "component", type: i5.FormlyField, selector: "formly-field", inputs: ["field"] }, { kind: "directive", type: i5.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldCardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-card',
                    template: `
    <nz-card
      [nzTitle]="nzTitle"
      [formlyAttributes]="field"
      [nzBorderless]="props.nzBorderless"
      [nzCover]="nzCover"
      [nzExtra]="nzExtra"
      [nzHoverable]="props.nzHoverable"
      [nzLoading]="props.nzLoading"
      [nzActions]="nzActions"
      [nzBodyStyle]="props.nzBodyStyle"
      [nzBordered]="props.nzBordered"
      [nzType]="props.nzType"
      [nzSize]="props.nzSize"
    >
      <formly-field [field]="item" *ngFor="let item of field.fieldGroup"></formly-field>
      <ng-container *nzStringTemplateOutlet="nzContent; context: { $implicit: field, options: props }">
        {{ nzContent }}
      </ng-container>
    </nz-card>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvY2FyZC9jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUdMLGNBQWMsRUFDZCxtQkFBbUIsRUFDcEIsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7OztBQTRCdEMsTUFBTSxPQUFPLHdCQUF5QixTQUFRLFNBQTJDO0lBS3hEO0lBSnRCLGNBQWMsR0FBRztRQUN4QixLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQWlCO0tBQzVELENBQUM7SUFFRixZQUErQixjQUFrQztRQUMvRCxLQUFLLEVBQUUsQ0FBQztRQURxQixtQkFBYyxHQUFkLGNBQWMsQ0FBb0I7SUFFakUsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUNELElBQUksU0FBUztRQUNYLE9BQU8sbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqRixDQUFDO0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7d0dBdkJVLHdCQUF3Qjs0RkFBeEIsd0JBQXdCLDZFQXZCekI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JUOzs0RkFHVSx3QkFBd0I7a0JBekJwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQlQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzswQkFNYyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgRm9ybWx5Qm94VGVtcGxhdGVzLFxyXG4gIE56Rm9ybWx5RmllbGRDb25maWcsXHJcbiAgcmVzb2x2ZVRwbE5hbWUsXHJcbiAgcmVzb2x2ZVRwbE5hbWVBcnJheVxyXG59IGZyb20gJ0BmcmVlemVzb3VsL256LWZvcm1seS9jb21tb24nO1xyXG5pbXBvcnQgeyBDYXJkT3B0aW9ucyB9IGZyb20gJy4vZm9ybWx5LnR5cGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1mb3JtbHktY2FyZCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuei1jYXJkXHJcbiAgICAgIFtuelRpdGxlXT1cIm56VGl0bGVcIlxyXG4gICAgICBbZm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiXHJcbiAgICAgIFtuekJvcmRlcmxlc3NdPVwicHJvcHMubnpCb3JkZXJsZXNzXCJcclxuICAgICAgW256Q292ZXJdPVwibnpDb3ZlclwiXHJcbiAgICAgIFtuekV4dHJhXT1cIm56RXh0cmFcIlxyXG4gICAgICBbbnpIb3ZlcmFibGVdPVwicHJvcHMubnpIb3ZlcmFibGVcIlxyXG4gICAgICBbbnpMb2FkaW5nXT1cInByb3BzLm56TG9hZGluZ1wiXHJcbiAgICAgIFtuekFjdGlvbnNdPVwibnpBY3Rpb25zXCJcclxuICAgICAgW256Qm9keVN0eWxlXT1cInByb3BzLm56Qm9keVN0eWxlXCJcclxuICAgICAgW256Qm9yZGVyZWRdPVwicHJvcHMubnpCb3JkZXJlZFwiXHJcbiAgICAgIFtuelR5cGVdPVwicHJvcHMubnpUeXBlXCJcclxuICAgICAgW256U2l6ZV09XCJwcm9wcy5uelNpemVcIlxyXG4gICAgPlxyXG4gICAgICA8Zm9ybWx5LWZpZWxkIFtmaWVsZF09XCJpdGVtXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZmllbGQuZmllbGRHcm91cFwiPjwvZm9ybWx5LWZpZWxkPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpDb250ZW50OyBjb250ZXh0OiB7ICRpbXBsaWNpdDogZmllbGQsIG9wdGlvbnM6IHByb3BzIH1cIj5cclxuICAgICAgICB7eyBuekNvbnRlbnQgfX1cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L256LWNhcmQ+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybWx5RmllbGRDYXJkQ29tcG9uZW50IGV4dGVuZHMgRmllbGRUeXBlPE56Rm9ybWx5RmllbGRDb25maWc8Q2FyZE9wdGlvbnM+PiB7XHJcbiAgb3ZlcnJpZGUgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBwcm9wczogeyBuelNpemU6ICdkZWZhdWx0JywgdHlwZTogJ2J1dHRvbicgfSBhcyBDYXJkT3B0aW9uc1xyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHB1YmxpYyBmaWVsZFRlbXBsYXRlczogRm9ybWx5Qm94VGVtcGxhdGVzKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56VGl0bGUoKSB7XHJcbiAgICByZXR1cm4gcmVzb2x2ZVRwbE5hbWUodGhpcy5wcm9wcywgdGhpcy5maWVsZFRlbXBsYXRlcywgJ256VGl0bGUnKTtcclxuICB9XHJcbiAgZ2V0IG56Q292ZXIoKSB7XHJcbiAgICByZXR1cm4gcmVzb2x2ZVRwbE5hbWUodGhpcy5wcm9wcywgdGhpcy5maWVsZFRlbXBsYXRlcywgJ256Q292ZXInKTtcclxuICB9XHJcbiAgZ2V0IG56RXh0cmEoKSB7XHJcbiAgICByZXR1cm4gcmVzb2x2ZVRwbE5hbWUodGhpcy5wcm9wcywgdGhpcy5maWVsZFRlbXBsYXRlcywgJ256RXh0cmEnKTtcclxuICB9XHJcbiAgZ2V0IG56QWN0aW9ucygpIHtcclxuICAgIHJldHVybiByZXNvbHZlVHBsTmFtZUFycmF5KHRoaXMucHJvcHMsIHRoaXMuZmllbGRUZW1wbGF0ZXMsICduekFjdGlvbnMnKSB8fCBbXTtcclxuICB9XHJcbiAgZ2V0IG56Q29udGVudCgpIHtcclxuICAgIHJldHVybiByZXNvbHZlVHBsTmFtZSh0aGlzLnByb3BzLCB0aGlzLmZpZWxkVGVtcGxhdGVzLCAnbnpDb250ZW50Jyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==