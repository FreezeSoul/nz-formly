import { ChangeDetectionStrategy, Component, Optional, ViewChild } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { NzDropDownDirective } from 'ng-zorro-antd/dropdown';
import { findField } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
import * as i1 from "@freezesoul/nz-formly/common";
import * as i2 from "ng-zorro-antd/dropdown";
export class DropdownWrapperComponent extends FieldWrapper {
    fieldTemplates;
    dropdownDirective;
    subscription;
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    ngOnInit() {
        const dropdownField = findField(this.field, this.props.nzDropdown.ref);
        if (!dropdownField) {
            return;
        }
        const subject = dropdownField.props._subject;
        this.subscription = subject.subscribe((instance) => {
            this.dropdownDirective.nzDropdownMenu = instance;
            this.dropdownDirective.ngAfterViewInit();
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DropdownWrapperComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DropdownWrapperComponent, selector: "nz-formly-dropdown-wrapper", viewQueries: [{ propertyName: "dropdownDirective", first: true, predicate: ["dropdownDirective"], descendants: true, read: NzDropDownDirective, static: true }], usesInheritance: true, ngImport: i0, template: `
    <div
      nz-dropdown
      style="display: inline-block"
      #dropdownDirective="nzDropdown"
      [nzDisabled]="props.nzDropdown.nzDisabled"
      [nzPlacement]="props.nzDropdown.nzPlacement || 'bottomLeft'"
      [nzBackdrop]="props.nzDropdown.nzBackdrop"
      [nzClickHide]="props.nzDropdown.nzClickHide !== false"
      [nzTrigger]="props.nzDropdown.nzTrigger || 'hover'"
      [nzMatchWidthElement]="props.nzDropdown.nzMatchWidthElement"
      [nzOverlayClassName]="props.nzDropdown.nzOverlayClassName"
      [nzOverlayStyle]="props.nzDropdown.nzOverlayStyle"
      (nzVisibleChange)="props.nzDropdown.nzVisibleChange?.($event, field, dropdownDirective)"
    >
      <ng-container #fieldComponent></ng-container>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NzDropDownDirective, selector: "[nz-dropdown]", inputs: ["nzDropdownMenu", "nzTrigger", "nzMatchWidthElement", "nzBackdrop", "nzClickHide", "nzDisabled", "nzVisible", "nzOverlayClassName", "nzOverlayStyle", "nzPlacement"], outputs: ["nzVisibleChange"], exportAs: ["nzDropdown"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DropdownWrapperComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-dropdown-wrapper',
                    template: `
    <div
      nz-dropdown
      style="display: inline-block"
      #dropdownDirective="nzDropdown"
      [nzDisabled]="props.nzDropdown.nzDisabled"
      [nzPlacement]="props.nzDropdown.nzPlacement || 'bottomLeft'"
      [nzBackdrop]="props.nzDropdown.nzBackdrop"
      [nzClickHide]="props.nzDropdown.nzClickHide !== false"
      [nzTrigger]="props.nzDropdown.nzTrigger || 'hover'"
      [nzMatchWidthElement]="props.nzDropdown.nzMatchWidthElement"
      [nzOverlayClassName]="props.nzDropdown.nzOverlayClassName"
      [nzOverlayStyle]="props.nzDropdown.nzOverlayStyle"
      (nzVisibleChange)="props.nzDropdown.nzVisibleChange?.($event, field, dropdownDirective)"
    >
      <ng-container #fieldComponent></ng-container>
    </div>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { dropdownDirective: [{
                type: ViewChild,
                args: ['dropdownDirective', { read: NzDropDownDirective, static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24td3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvZHJvcGRvd24td3JhcHBlci9kcm9wZG93bi13cmFwcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFxQixRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsbUJBQW1CLEVBQTJCLE1BQU0sd0JBQXdCLENBQUM7QUFFdEYsT0FBTyxFQUFzQixTQUFTLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7OztBQXdCN0UsTUFBTSxPQUFPLHdCQUF5QixTQUFRLFlBQVk7SUFHekI7SUFGOEMsaUJBQWlCLENBQXVCO0lBQzdHLFlBQVksQ0FBZ0I7SUFDcEMsWUFBK0IsY0FBa0M7UUFDL0QsS0FBSyxFQUFFLENBQUM7UUFEcUIsbUJBQWMsR0FBZCxjQUFjLENBQW9CO0lBRWpFLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFFRCxNQUFNLE9BQU8sR0FBRyxhQUFhLENBQUMsS0FBTSxDQUFDLFFBQVEsQ0FBQztRQUM5QyxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFpQyxFQUFFLEVBQUU7WUFDMUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7WUFDakQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztTQUMvQjtJQUNILENBQUM7d0dBekJVLHdCQUF3Qjs0RkFBeEIsd0JBQXdCLHFLQUNLLG1CQUFtQixrRUFyQmpEOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCVDs7NEZBR1Usd0JBQXdCO2tCQXRCcEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7MEJBSWMsUUFBUTs0Q0FGd0QsaUJBQWlCO3NCQUE3RixTQUFTO3VCQUFDLG1CQUFtQixFQUFFLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3B0aW9uYWwsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZFdyYXBwZXIgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcclxuaW1wb3J0IHsgTnpEcm9wRG93bkRpcmVjdGl2ZSwgTnpEcm9wZG93bk1lbnVDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2Ryb3Bkb3duJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEZvcm1seUJveFRlbXBsYXRlcywgZmluZEZpZWxkIH0gZnJvbSAnQGZyZWV6ZXNvdWwvbnotZm9ybWx5L2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWZvcm1seS1kcm9wZG93bi13cmFwcGVyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdlxyXG4gICAgICBuei1kcm9wZG93blxyXG4gICAgICBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9ja1wiXHJcbiAgICAgICNkcm9wZG93bkRpcmVjdGl2ZT1cIm56RHJvcGRvd25cIlxyXG4gICAgICBbbnpEaXNhYmxlZF09XCJwcm9wcy5uekRyb3Bkb3duLm56RGlzYWJsZWRcIlxyXG4gICAgICBbbnpQbGFjZW1lbnRdPVwicHJvcHMubnpEcm9wZG93bi5uelBsYWNlbWVudCB8fCAnYm90dG9tTGVmdCdcIlxyXG4gICAgICBbbnpCYWNrZHJvcF09XCJwcm9wcy5uekRyb3Bkb3duLm56QmFja2Ryb3BcIlxyXG4gICAgICBbbnpDbGlja0hpZGVdPVwicHJvcHMubnpEcm9wZG93bi5uekNsaWNrSGlkZSAhPT0gZmFsc2VcIlxyXG4gICAgICBbbnpUcmlnZ2VyXT1cInByb3BzLm56RHJvcGRvd24ubnpUcmlnZ2VyIHx8ICdob3ZlcidcIlxyXG4gICAgICBbbnpNYXRjaFdpZHRoRWxlbWVudF09XCJwcm9wcy5uekRyb3Bkb3duLm56TWF0Y2hXaWR0aEVsZW1lbnRcIlxyXG4gICAgICBbbnpPdmVybGF5Q2xhc3NOYW1lXT1cInByb3BzLm56RHJvcGRvd24ubnpPdmVybGF5Q2xhc3NOYW1lXCJcclxuICAgICAgW256T3ZlcmxheVN0eWxlXT1cInByb3BzLm56RHJvcGRvd24ubnpPdmVybGF5U3R5bGVcIlxyXG4gICAgICAobnpWaXNpYmxlQ2hhbmdlKT1cInByb3BzLm56RHJvcGRvd24ubnpWaXNpYmxlQ2hhbmdlPy4oJGV2ZW50LCBmaWVsZCwgZHJvcGRvd25EaXJlY3RpdmUpXCJcclxuICAgID5cclxuICAgICAgPG5nLWNvbnRhaW5lciAjZmllbGRDb21wb25lbnQ+PC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcm9wZG93bldyYXBwZXJDb21wb25lbnQgZXh0ZW5kcyBGaWVsZFdyYXBwZXIgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQFZpZXdDaGlsZCgnZHJvcGRvd25EaXJlY3RpdmUnLCB7IHJlYWQ6IE56RHJvcERvd25EaXJlY3RpdmUsIHN0YXRpYzogdHJ1ZSB9KSBkcm9wZG93bkRpcmVjdGl2ZSE6IE56RHJvcERvd25EaXJlY3RpdmU7XHJcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24/OiBTdWJzY3JpcHRpb247XHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHVibGljIGZpZWxkVGVtcGxhdGVzOiBGb3JtbHlCb3hUZW1wbGF0ZXMpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRyb3Bkb3duRmllbGQgPSBmaW5kRmllbGQodGhpcy5maWVsZCwgdGhpcy5wcm9wcy5uekRyb3Bkb3duLnJlZik7XHJcbiAgICBpZiAoIWRyb3Bkb3duRmllbGQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1YmplY3QgPSBkcm9wZG93bkZpZWxkLnByb3BzIS5fc3ViamVjdDtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gc3ViamVjdC5zdWJzY3JpYmUoKGluc3RhbmNlOiBOekRyb3Bkb3duTWVudUNvbXBvbmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmRyb3Bkb3duRGlyZWN0aXZlLm56RHJvcGRvd25NZW51ID0gaW5zdGFuY2U7XHJcbiAgICAgIHRoaXMuZHJvcGRvd25EaXJlY3RpdmUubmdBZnRlclZpZXdJbml0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=