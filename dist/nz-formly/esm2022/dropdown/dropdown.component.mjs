import { ChangeDetectionStrategy, Component, Optional, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@freezesoul/nz-formly/common";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/menu";
import * as i4 from "ng-zorro-antd/dropdown";
import * as i5 from "@ngx-formly/core";
export class FormlyFieldDropdownComponent extends FieldType {
    fieldTemplates;
    defaultOptions = {
        props: { _subject: new ReplaySubject() }
    };
    instance;
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    ngOnInit() {
        if (this.props._subject) {
            this.props._subject.next(this.instance);
        }
        this.props.instance = this.instance;
        this.props.init?.(this.instance, this);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldDropdownComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldDropdownComponent, selector: "nz-formly-dropdown", viewQueries: [{ propertyName: "instance", first: true, predicate: ["menu"], descendants: true, read: NzDropdownMenuComponent, static: true }], usesInheritance: true, ngImport: i0, template: `
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <div nz-menu [formlyAttributes]="field">
        <ng-container *ngFor="let item of field.fieldGroup">
          <formly-field
            nz-menu-item
            [formlyAttributes]="item"
            [field]="item"
            [nzSelected]="item.props?.nzSelected"
            [nzDisabled]="item.props?.nzDisabled"
            [nzPaddingLeft]="item.props?.nzPaddingLeft"
          ></formly-field>
        </ng-container>
      </div>
    </nz-dropdown-menu>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NzMenuDirective, selector: "[nz-menu]", inputs: ["nzInlineIndent", "nzTheme", "nzMode", "nzInlineCollapsed", "nzSelectable"], outputs: ["nzClick"], exportAs: ["nzMenu"] }, { kind: "component", type: i3.NzMenuItemComponent, selector: "[nz-menu-item]", inputs: ["nzPaddingLeft", "nzDisabled", "nzSelected", "nzDanger", "nzMatchRouterExact", "nzMatchRouter"], exportAs: ["nzMenuItem"] }, { kind: "component", type: i4.NzDropdownMenuComponent, selector: "nz-dropdown-menu", exportAs: ["nzDropdownMenu"] }, { kind: "component", type: i5.FormlyField, selector: "formly-field", inputs: ["field"] }, { kind: "directive", type: i5.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldDropdownComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-dropdown',
                    template: `
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <div nz-menu [formlyAttributes]="field">
        <ng-container *ngFor="let item of field.fieldGroup">
          <formly-field
            nz-menu-item
            [formlyAttributes]="item"
            [field]="item"
            [nzSelected]="item.props?.nzSelected"
            [nzDisabled]="item.props?.nzDisabled"
            [nzPaddingLeft]="item.props?.nzPaddingLeft"
          ></formly-field>
        </ng-container>
      </div>
    </nz-dropdown-menu>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { instance: [{
                type: ViewChild,
                args: ['menu', { read: NzDropdownMenuComponent, static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbGliL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzdDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7QUF1QnJDLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxTQUFTO0lBTTFCO0lBTHRCLGNBQWMsR0FBRztRQUN4QixLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxhQUFhLEVBQTJCLEVBQUU7S0FDbEUsQ0FBQztJQUVrRSxRQUFRLENBQTJCO0lBQ3ZHLFlBQStCLGNBQWtDO1FBQy9ELEtBQUssRUFBRSxDQUFDO1FBRHFCLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtJQUVqRSxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN6QztRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7d0dBaEJVLDRCQUE0Qjs0RkFBNUIsNEJBQTRCLHVJQUtaLHVCQUF1QixrRUF2QnhDOzs7Ozs7Ozs7Ozs7Ozs7R0FlVDs7NEZBR1UsNEJBQTRCO2tCQXBCeEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztHQWVUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7MEJBT2MsUUFBUTs0Q0FEK0MsUUFBUTtzQkFBM0UsU0FBUzt1QkFBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uSW5pdCwgT3B0aW9uYWwsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcclxuaW1wb3J0IHsgTnpEcm9wZG93bk1lbnVDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2Ryb3Bkb3duJztcclxuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBGb3JtbHlCb3hUZW1wbGF0ZXMgfSBmcm9tICdAZnJlZXplc291bC9uei1mb3JtbHkvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotZm9ybWx5LWRyb3Bkb3duJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG56LWRyb3Bkb3duLW1lbnUgI21lbnU9XCJuekRyb3Bkb3duTWVudVwiPlxyXG4gICAgICA8ZGl2IG56LW1lbnUgW2Zvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZpZWxkLmZpZWxkR3JvdXBcIj5cclxuICAgICAgICAgIDxmb3JtbHktZmllbGRcclxuICAgICAgICAgICAgbnotbWVudS1pdGVtXHJcbiAgICAgICAgICAgIFtmb3JtbHlBdHRyaWJ1dGVzXT1cIml0ZW1cIlxyXG4gICAgICAgICAgICBbZmllbGRdPVwiaXRlbVwiXHJcbiAgICAgICAgICAgIFtuelNlbGVjdGVkXT1cIml0ZW0ucHJvcHM/Lm56U2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICBbbnpEaXNhYmxlZF09XCJpdGVtLnByb3BzPy5uekRpc2FibGVkXCJcclxuICAgICAgICAgICAgW256UGFkZGluZ0xlZnRdPVwiaXRlbS5wcm9wcz8ubnpQYWRkaW5nTGVmdFwiXHJcbiAgICAgICAgICA+PC9mb3JtbHktZmllbGQ+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uei1kcm9wZG93bi1tZW51PlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1seUZpZWxkRHJvcGRvd25Db21wb25lbnQgZXh0ZW5kcyBGaWVsZFR5cGUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIG92ZXJyaWRlIGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgcHJvcHM6IHsgX3N1YmplY3Q6IG5ldyBSZXBsYXlTdWJqZWN0PE56RHJvcGRvd25NZW51Q29tcG9uZW50PigpIH1cclxuICB9O1xyXG5cclxuICBAVmlld0NoaWxkKCdtZW51JywgeyByZWFkOiBOekRyb3Bkb3duTWVudUNvbXBvbmVudCwgc3RhdGljOiB0cnVlIH0pIGluc3RhbmNlITogTnpEcm9wZG93bk1lbnVDb21wb25lbnQ7XHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHVibGljIGZpZWxkVGVtcGxhdGVzOiBGb3JtbHlCb3hUZW1wbGF0ZXMpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnByb3BzLl9zdWJqZWN0KSB7XHJcbiAgICAgIHRoaXMucHJvcHMuX3N1YmplY3QubmV4dCh0aGlzLmluc3RhbmNlKTtcclxuICAgIH1cclxuICAgIHRoaXMucHJvcHMuaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlO1xyXG4gICAgdGhpcy5wcm9wcy5pbml0Py4odGhpcy5pbnN0YW5jZSwgdGhpcyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==