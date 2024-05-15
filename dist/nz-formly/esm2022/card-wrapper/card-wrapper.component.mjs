import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { resolveTplName, resolveTplNameArray } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
import * as i1 from "@freezesoul/nz-formly/common";
import * as i2 from "ng-zorro-antd/card";
import * as i3 from "@ngx-formly/core";
export class CardWrapperComponent extends FieldWrapper {
    fieldTemplates;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardWrapperComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: CardWrapperComponent, selector: "nz-formly-card-wrapper", usesInheritance: true, ngImport: i0, template: `
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
      <ng-container #fieldComponent></ng-container>
    </nz-card>
  `, isInline: true, dependencies: [{ kind: "component", type: i2.NzCardComponent, selector: "nz-card", inputs: ["nzBordered", "nzBorderless", "nzLoading", "nzHoverable", "nzBodyStyle", "nzCover", "nzActions", "nzType", "nzSize", "nzTitle", "nzExtra"], exportAs: ["nzCard"] }, { kind: "directive", type: i3.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardWrapperComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-card-wrapper',
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
      <ng-container #fieldComponent></ng-container>
    </nz-card>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC13cmFwcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9jYXJkLXdyYXBwZXIvY2FyZC13cmFwcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFzQixjQUFjLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7QUF3QnZHLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxZQUFZO0lBQ3JCO0lBQS9CLFlBQStCLGNBQWtDO1FBQy9ELEtBQUssRUFBRSxDQUFDO1FBRHFCLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtJQUVqRSxDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pGLENBQUM7d0dBaEJVLG9CQUFvQjs0RkFBcEIsb0JBQW9CLHFGQXBCckI7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJUOzs0RkFHVSxvQkFBb0I7a0JBdEJoQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQlQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzswQkFFYyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmllbGRXcmFwcGVyIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1seUJveFRlbXBsYXRlcywgcmVzb2x2ZVRwbE5hbWUsIHJlc29sdmVUcGxOYW1lQXJyYXkgfSBmcm9tICdAZnJlZXplc291bC9uei1mb3JtbHkvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotZm9ybWx5LWNhcmQtd3JhcHBlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuei1jYXJkXHJcbiAgICAgIFtuelRpdGxlXT1cIm56VGl0bGVcIlxyXG4gICAgICBbZm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiXHJcbiAgICAgIFtuekJvcmRlcmxlc3NdPVwicHJvcHMubnpCb3JkZXJsZXNzXCJcclxuICAgICAgW256Q292ZXJdPVwibnpDb3ZlclwiXHJcbiAgICAgIFtuekV4dHJhXT1cIm56RXh0cmFcIlxyXG4gICAgICBbbnpIb3ZlcmFibGVdPVwicHJvcHMubnpIb3ZlcmFibGVcIlxyXG4gICAgICBbbnpMb2FkaW5nXT1cInByb3BzLm56TG9hZGluZ1wiXHJcbiAgICAgIFtuekFjdGlvbnNdPVwibnpBY3Rpb25zXCJcclxuICAgICAgW256Qm9keVN0eWxlXT1cInByb3BzLm56Qm9keVN0eWxlXCJcclxuICAgICAgW256Qm9yZGVyZWRdPVwicHJvcHMubnpCb3JkZXJlZFwiXHJcbiAgICAgIFtuelR5cGVdPVwicHJvcHMubnpUeXBlXCJcclxuICAgICAgW256U2l6ZV09XCJwcm9wcy5uelNpemVcIlxyXG4gICAgPlxyXG4gICAgICA8bmctY29udGFpbmVyICNmaWVsZENvbXBvbmVudD48L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbnotY2FyZD5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJkV3JhcHBlckNvbXBvbmVudCBleHRlbmRzIEZpZWxkV3JhcHBlciB7XHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHVibGljIGZpZWxkVGVtcGxhdGVzOiBGb3JtbHlCb3hUZW1wbGF0ZXMpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpUaXRsZSgpIHtcclxuICAgIHJldHVybiByZXNvbHZlVHBsTmFtZSh0aGlzLnByb3BzLCB0aGlzLmZpZWxkVGVtcGxhdGVzLCAnbnpUaXRsZScpO1xyXG4gIH1cclxuICBnZXQgbnpDb3ZlcigpIHtcclxuICAgIHJldHVybiByZXNvbHZlVHBsTmFtZSh0aGlzLnByb3BzLCB0aGlzLmZpZWxkVGVtcGxhdGVzLCAnbnpDb3ZlcicpO1xyXG4gIH1cclxuICBnZXQgbnpFeHRyYSgpIHtcclxuICAgIHJldHVybiByZXNvbHZlVHBsTmFtZSh0aGlzLnByb3BzLCB0aGlzLmZpZWxkVGVtcGxhdGVzLCAnbnpFeHRyYScpO1xyXG4gIH1cclxuICBnZXQgbnpBY3Rpb25zKCkge1xyXG4gICAgcmV0dXJuIHJlc29sdmVUcGxOYW1lQXJyYXkodGhpcy5wcm9wcywgdGhpcy5maWVsZFRlbXBsYXRlcywgJ256QWN0aW9ucycpIHx8IFtdO1xyXG4gIH1cclxufVxyXG4iXX0=