import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
import * as i1 from "@freezesoul/nz-formly/common";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "ng-zorro-antd/select";
import * as i5 from "ng-zorro-antd/core/outlet";
import * as i6 from "@ngx-formly/core";
import * as i7 from "@freezesoul/nzx-antd/pipe";
export class FormlyFieldSelectComponent extends FieldType {
    fieldTemplates;
    defaultOptions = {
        props: {
            options: [],
            nzMode: 'default',
            nzAutoClearSearchValue: true,
            nzDropdownMatchSelectWidth: true,
            nzMaxMultipleCount: Infinity,
            nzMaxTagCount: Infinity,
            nzShowArrow: true,
            nzTokenSeparators: [],
            nzOptionHeightPx: 32,
            nzOptionOverflowSize: 8,
            compareWith: (o1, o2) => o1 === o2,
            nzFilterOption: (input, option) => {
                if (option && option.nzLabel) {
                    return option.nzLabel.toLowerCase().indexOf(input.toLowerCase()) > -1;
                }
                else {
                    return false;
                }
            },
            defaultValue: []
        }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    get nzCustomTemplate() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzCustomTemplate');
    }
    get nzSuffixIcon() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzSuffixIcon');
    }
    get nzRemoveIcon() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzRemoveIcon');
    }
    get nzClearIcon() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzClearIcon');
    }
    get nzMenuItemSelectedIcon() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzMenuItemSelectedIcon');
    }
    get nzMaxTagPlaceholder() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzMaxTagPlaceholder');
    }
    get nzNotFoundContent() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzNotFoundContent');
    }
    get labelTemplate() {
        return resolveTplName(this.props, this.fieldTemplates, 'labelTemplate');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldSelectComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldSelectComponent, selector: "nz-formly-select-component", usesInheritance: true, ngImport: i0, template: "<nz-select\r\n  #instance\r\n  [formControl]=\"$any(formControl)\"\r\n  [formlyAttributes]=\"field\"\r\n  [compareWith]=\"props.compareWith\"\r\n  [nzShowSearch]=\"props.nzShowSearch\"\r\n  [nzAllowClear]=\"props.nzAllowClear\"\r\n  [nzPlaceHolder]=\"props.nzPlaceHolder || props.placeholder\"\r\n  [nzOpen]=\"props.nzOpen\"\r\n  [nzAutoFocus]=\"props.nzAutoFocus\"\r\n  [nzDisabled]=\"props.nzDisabled || props.disabled || formControl?.disabled\"\r\n  [nzDropdownClassName]=\"props.nzDropdownClassName\"\r\n  [nzDropdownMatchSelectWidth]=\"props.nzDropdownMatchSelectWidth\"\r\n  [nzDropdownStyle]=\"props.nzDropdownStyle\"\r\n  [nzServerSearch]=\"props.nzServerSearch\"\r\n  [nzFilterOption]=\"props.nzFilterOption\"\r\n  [nzMaxMultipleCount]=\"props.nzMaxMultipleCount\"\r\n  [nzMode]=\"props.nzMode\"\r\n  [nzNotFoundContent]=\"nzNotFoundContent\"\r\n  [nzSize]=\"props.nzSize\"\r\n  [nzAutoClearSearchValue]=\"props.nzAutoClearSearchValue\"\r\n  [nzBackdrop]=\"props.nzBackdrop\"\r\n  [nzBorderless]=\"props.nzBorderless\"\r\n  [nzShowArrow]=\"props.nzShowArrow\"\r\n  [nzCustomTemplate]=\"nzCustomTemplate\"\r\n  [nzSuffixIcon]=\"nzSuffixIcon\"\r\n  [nzRemoveIcon]=\"nzRemoveIcon\"\r\n  [nzClearIcon]=\"nzClearIcon\"\r\n  [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n  [nzTokenSeparators]=\"props.nzTokenSeparators\"\r\n  [nzLoading]=\"props.nzLoading\"\r\n  [nzMaxTagCount]=\"props.nzMaxTagCount\"\r\n  [nzMaxTagPlaceholder]=\"nzMaxTagPlaceholder\"\r\n  [nzOptionHeightPx]=\"props.nzOptionHeightPx\"\r\n  [nzOptionOverflowSize]=\"props.nzOptionOverflowSize\"\r\n  (nzOpenChange)=\"props.nzOpenChange?.($event, field, instance)\"\r\n  (nzScrollToBottom)=\"props.nzScrollToBottom?.($event, field, instance)\"\r\n  (nzOnSearch)=\"props.nzOnSearch?.($event, field, instance)\"\r\n  (nzFocus)=\"props.nzFocus?.($event, field, instance)\"\r\n  (nzBlur)=\"props.nzBlur?.($event, field, instance)\"\r\n  ngDefaultControl\r\n>\r\n  <ng-container *ngFor=\"let item of props.options | toAsync: $any(props) | async | defaultify: []\">\r\n    <ng-container *ngIf=\"item.hide !== false\">\r\n      <nz-option-group *ngIf=\"item.group; else simpleTemplate\" [nzLabel]=\"item.label\">\r\n        <ng-container *ngFor=\"let child of item.group\">\r\n          <nz-option\r\n            *ngIf=\"child.hide !== false\"\r\n            [nzValue]=\"child.value\"\r\n            [nzDisabled]=\"child.disabled\"\r\n            [nzLabel]=\"child.label\"\r\n            [nzCustomContent]=\"child.nzCustomContent\"\r\n          >\r\n            <ng-container *nzStringTemplateOutlet=\"labelTemplate; context: { $implicit: item, field: field }\">\r\n              <span>{{ labelTemplate }}</span>\r\n            </ng-container>\r\n          </nz-option>\r\n        </ng-container>\r\n      </nz-option-group>\r\n\r\n      <ng-template #simpleTemplate>\r\n        <nz-option\r\n          [nzValue]=\"item.value\"\r\n          [nzDisabled]=\"item.disabled\"\r\n          [nzLabel]=\"item.label\"\r\n          [nzHide]=\"item.hide\"\r\n          [nzCustomContent]=\"item.nzCustomContent\"\r\n        >\r\n          <ng-container *nzStringTemplateOutlet=\"labelTemplate; context: { $implicit: item, field: field }\">\r\n            <span>{{ labelTemplate }}</span>\r\n          </ng-container>\r\n        </nz-option>\r\n      </ng-template>\r\n    </ng-container>\r\n  </ng-container>\r\n</nz-select>\r\n", dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i4.NzOptionComponent, selector: "nz-option", inputs: ["nzTitle", "nzLabel", "nzValue", "nzKey", "nzDisabled", "nzHide", "nzCustomContent"], exportAs: ["nzOption"] }, { kind: "component", type: i4.NzSelectComponent, selector: "nz-select", inputs: ["nzId", "nzSize", "nzStatus", "nzOptionHeightPx", "nzOptionOverflowSize", "nzDropdownClassName", "nzDropdownMatchSelectWidth", "nzDropdownStyle", "nzNotFoundContent", "nzPlaceHolder", "nzPlacement", "nzMaxTagCount", "nzDropdownRender", "nzCustomTemplate", "nzSuffixIcon", "nzClearIcon", "nzRemoveIcon", "nzMenuItemSelectedIcon", "nzTokenSeparators", "nzMaxTagPlaceholder", "nzMaxMultipleCount", "nzMode", "nzFilterOption", "compareWith", "nzAllowClear", "nzBorderless", "nzShowSearch", "nzLoading", "nzAutoFocus", "nzAutoClearSearchValue", "nzServerSearch", "nzDisabled", "nzOpen", "nzSelectOnTab", "nzBackdrop", "nzOptions", "nzShowArrow"], outputs: ["nzOnSearch", "nzScrollToBottom", "nzOpenChange", "nzBlur", "nzFocus"], exportAs: ["nzSelect"] }, { kind: "component", type: i4.NzOptionGroupComponent, selector: "nz-option-group", inputs: ["nzLabel"], exportAs: ["nzOptionGroup"] }, { kind: "directive", type: i5.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: i6.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }, { kind: "pipe", type: i7.DefaultifyPipe, name: "defaultify" }, { kind: "pipe", type: i7.ToAsyncPipe, name: "toAsync" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nz-formly-select-component', changeDetection: ChangeDetectionStrategy.OnPush, template: "<nz-select\r\n  #instance\r\n  [formControl]=\"$any(formControl)\"\r\n  [formlyAttributes]=\"field\"\r\n  [compareWith]=\"props.compareWith\"\r\n  [nzShowSearch]=\"props.nzShowSearch\"\r\n  [nzAllowClear]=\"props.nzAllowClear\"\r\n  [nzPlaceHolder]=\"props.nzPlaceHolder || props.placeholder\"\r\n  [nzOpen]=\"props.nzOpen\"\r\n  [nzAutoFocus]=\"props.nzAutoFocus\"\r\n  [nzDisabled]=\"props.nzDisabled || props.disabled || formControl?.disabled\"\r\n  [nzDropdownClassName]=\"props.nzDropdownClassName\"\r\n  [nzDropdownMatchSelectWidth]=\"props.nzDropdownMatchSelectWidth\"\r\n  [nzDropdownStyle]=\"props.nzDropdownStyle\"\r\n  [nzServerSearch]=\"props.nzServerSearch\"\r\n  [nzFilterOption]=\"props.nzFilterOption\"\r\n  [nzMaxMultipleCount]=\"props.nzMaxMultipleCount\"\r\n  [nzMode]=\"props.nzMode\"\r\n  [nzNotFoundContent]=\"nzNotFoundContent\"\r\n  [nzSize]=\"props.nzSize\"\r\n  [nzAutoClearSearchValue]=\"props.nzAutoClearSearchValue\"\r\n  [nzBackdrop]=\"props.nzBackdrop\"\r\n  [nzBorderless]=\"props.nzBorderless\"\r\n  [nzShowArrow]=\"props.nzShowArrow\"\r\n  [nzCustomTemplate]=\"nzCustomTemplate\"\r\n  [nzSuffixIcon]=\"nzSuffixIcon\"\r\n  [nzRemoveIcon]=\"nzRemoveIcon\"\r\n  [nzClearIcon]=\"nzClearIcon\"\r\n  [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n  [nzTokenSeparators]=\"props.nzTokenSeparators\"\r\n  [nzLoading]=\"props.nzLoading\"\r\n  [nzMaxTagCount]=\"props.nzMaxTagCount\"\r\n  [nzMaxTagPlaceholder]=\"nzMaxTagPlaceholder\"\r\n  [nzOptionHeightPx]=\"props.nzOptionHeightPx\"\r\n  [nzOptionOverflowSize]=\"props.nzOptionOverflowSize\"\r\n  (nzOpenChange)=\"props.nzOpenChange?.($event, field, instance)\"\r\n  (nzScrollToBottom)=\"props.nzScrollToBottom?.($event, field, instance)\"\r\n  (nzOnSearch)=\"props.nzOnSearch?.($event, field, instance)\"\r\n  (nzFocus)=\"props.nzFocus?.($event, field, instance)\"\r\n  (nzBlur)=\"props.nzBlur?.($event, field, instance)\"\r\n  ngDefaultControl\r\n>\r\n  <ng-container *ngFor=\"let item of props.options | toAsync: $any(props) | async | defaultify: []\">\r\n    <ng-container *ngIf=\"item.hide !== false\">\r\n      <nz-option-group *ngIf=\"item.group; else simpleTemplate\" [nzLabel]=\"item.label\">\r\n        <ng-container *ngFor=\"let child of item.group\">\r\n          <nz-option\r\n            *ngIf=\"child.hide !== false\"\r\n            [nzValue]=\"child.value\"\r\n            [nzDisabled]=\"child.disabled\"\r\n            [nzLabel]=\"child.label\"\r\n            [nzCustomContent]=\"child.nzCustomContent\"\r\n          >\r\n            <ng-container *nzStringTemplateOutlet=\"labelTemplate; context: { $implicit: item, field: field }\">\r\n              <span>{{ labelTemplate }}</span>\r\n            </ng-container>\r\n          </nz-option>\r\n        </ng-container>\r\n      </nz-option-group>\r\n\r\n      <ng-template #simpleTemplate>\r\n        <nz-option\r\n          [nzValue]=\"item.value\"\r\n          [nzDisabled]=\"item.disabled\"\r\n          [nzLabel]=\"item.label\"\r\n          [nzHide]=\"item.hide\"\r\n          [nzCustomContent]=\"item.nzCustomContent\"\r\n        >\r\n          <ng-container *nzStringTemplateOutlet=\"labelTemplate; context: { $implicit: item, field: field }\">\r\n            <span>{{ labelTemplate }}</span>\r\n          </ng-container>\r\n        </nz-option>\r\n      </ng-template>\r\n    </ng-container>\r\n  </ng-container>\r\n</nz-select>\r\n" }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL2xpYi9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU3QyxPQUFPLEVBQXNCLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7Ozs7QUFPbEYsTUFBTSxPQUFPLDBCQUEyQixTQUFRLFNBQVM7SUF5QnhCO0lBeEJ0QixjQUFjLEdBQUc7UUFDeEIsS0FBSyxFQUFFO1lBQ0wsT0FBTyxFQUFFLEVBQUU7WUFDWCxNQUFNLEVBQUUsU0FBUztZQUNqQixzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLDBCQUEwQixFQUFFLElBQUk7WUFDaEMsa0JBQWtCLEVBQUUsUUFBUTtZQUM1QixhQUFhLEVBQUUsUUFBUTtZQUN2QixXQUFXLEVBQUUsSUFBSTtZQUNqQixpQkFBaUIsRUFBRSxFQUFFO1lBQ3JCLGdCQUFnQixFQUFFLEVBQUU7WUFDcEIsb0JBQW9CLEVBQUUsQ0FBQztZQUN2QixXQUFXLEVBQUUsQ0FBQyxFQUFhLEVBQUUsRUFBYSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRTtZQUN4RCxjQUFjLEVBQUUsQ0FBQyxLQUFhLEVBQUUsTUFBVyxFQUFFLEVBQUU7Z0JBQzdDLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7b0JBQzVCLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ3ZFO3FCQUFNO29CQUNMLE9BQU8sS0FBSyxDQUFDO2lCQUNkO1lBQ0gsQ0FBQztZQUNELFlBQVksRUFBRSxFQUFFO1NBQ2pCO0tBQ0YsQ0FBQztJQUVGLFlBQStCLGNBQWtDO1FBQy9ELEtBQUssRUFBRSxDQUFDO1FBRHFCLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtJQUVqRSxDQUFDO0lBRUQsSUFBSSxnQkFBZ0I7UUFDbEIsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUNELElBQUksWUFBWTtRQUNkLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBQ0QsSUFBSSxZQUFZO1FBQ2QsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFDRCxJQUFJLFdBQVc7UUFDYixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUNELElBQUksc0JBQXNCO1FBQ3hCLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFDRCxJQUFJLG1CQUFtQjtRQUNyQixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBQ0QsSUFBSSxpQkFBaUI7UUFDbkIsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUNELElBQUksYUFBYTtRQUNmLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUMxRSxDQUFDO3dHQXBEVSwwQkFBMEI7NEZBQTFCLDBCQUEwQix5RkNWdkMsZzBHQTRFQTs7NEZEbEVhLDBCQUEwQjtrQkFMdEMsU0FBUzsrQkFDRSw0QkFBNEIsbUJBRXJCLHVCQUF1QixDQUFDLE1BQU07OzBCQTJCbEMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xyXG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBGb3JtbHlCb3hUZW1wbGF0ZXMsIHJlc29sdmVUcGxOYW1lIH0gZnJvbSAnQGZyZWV6ZXNvdWwvbnotZm9ybWx5L2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWZvcm1seS1zZWxlY3QtY29tcG9uZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybWx5RmllbGRTZWxlY3RDb21wb25lbnQgZXh0ZW5kcyBGaWVsZFR5cGUge1xyXG4gIG92ZXJyaWRlIGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgb3B0aW9uczogW10sXHJcbiAgICAgIG56TW9kZTogJ2RlZmF1bHQnLFxyXG4gICAgICBuekF1dG9DbGVhclNlYXJjaFZhbHVlOiB0cnVlLFxyXG4gICAgICBuekRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogdHJ1ZSxcclxuICAgICAgbnpNYXhNdWx0aXBsZUNvdW50OiBJbmZpbml0eSxcclxuICAgICAgbnpNYXhUYWdDb3VudDogSW5maW5pdHksXHJcbiAgICAgIG56U2hvd0Fycm93OiB0cnVlLFxyXG4gICAgICBuelRva2VuU2VwYXJhdG9yczogW10sXHJcbiAgICAgIG56T3B0aW9uSGVpZ2h0UHg6IDMyLFxyXG4gICAgICBuek9wdGlvbk92ZXJmbG93U2l6ZTogOCxcclxuICAgICAgY29tcGFyZVdpdGg6IChvMTogTnpTYWZlQW55LCBvMjogTnpTYWZlQW55KSA9PiBvMSA9PT0gbzIsXHJcbiAgICAgIG56RmlsdGVyT3B0aW9uOiAoaW5wdXQ6IHN0cmluZywgb3B0aW9uOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5uekxhYmVsKSB7XHJcbiAgICAgICAgICByZXR1cm4gb3B0aW9uLm56TGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKGlucHV0LnRvTG93ZXJDYXNlKCkpID4gLTE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogW11cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwdWJsaWMgZmllbGRUZW1wbGF0ZXM6IEZvcm1seUJveFRlbXBsYXRlcykge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGdldCBuekN1c3RvbVRlbXBsYXRlKCkge1xyXG4gICAgcmV0dXJuIHJlc29sdmVUcGxOYW1lKHRoaXMucHJvcHMsIHRoaXMuZmllbGRUZW1wbGF0ZXMsICduekN1c3RvbVRlbXBsYXRlJyk7XHJcbiAgfVxyXG4gIGdldCBuelN1ZmZpeEljb24oKSB7XHJcbiAgICByZXR1cm4gcmVzb2x2ZVRwbE5hbWUodGhpcy5wcm9wcywgdGhpcy5maWVsZFRlbXBsYXRlcywgJ256U3VmZml4SWNvbicpO1xyXG4gIH1cclxuICBnZXQgbnpSZW1vdmVJY29uKCkge1xyXG4gICAgcmV0dXJuIHJlc29sdmVUcGxOYW1lKHRoaXMucHJvcHMsIHRoaXMuZmllbGRUZW1wbGF0ZXMsICduelJlbW92ZUljb24nKTtcclxuICB9XHJcbiAgZ2V0IG56Q2xlYXJJY29uKCkge1xyXG4gICAgcmV0dXJuIHJlc29sdmVUcGxOYW1lKHRoaXMucHJvcHMsIHRoaXMuZmllbGRUZW1wbGF0ZXMsICduekNsZWFySWNvbicpO1xyXG4gIH1cclxuICBnZXQgbnpNZW51SXRlbVNlbGVjdGVkSWNvbigpIHtcclxuICAgIHJldHVybiByZXNvbHZlVHBsTmFtZSh0aGlzLnByb3BzLCB0aGlzLmZpZWxkVGVtcGxhdGVzLCAnbnpNZW51SXRlbVNlbGVjdGVkSWNvbicpO1xyXG4gIH1cclxuICBnZXQgbnpNYXhUYWdQbGFjZWhvbGRlcigpIHtcclxuICAgIHJldHVybiByZXNvbHZlVHBsTmFtZSh0aGlzLnByb3BzLCB0aGlzLmZpZWxkVGVtcGxhdGVzLCAnbnpNYXhUYWdQbGFjZWhvbGRlcicpO1xyXG4gIH1cclxuICBnZXQgbnpOb3RGb3VuZENvbnRlbnQoKSB7XHJcbiAgICByZXR1cm4gcmVzb2x2ZVRwbE5hbWUodGhpcy5wcm9wcywgdGhpcy5maWVsZFRlbXBsYXRlcywgJ256Tm90Rm91bmRDb250ZW50Jyk7XHJcbiAgfVxyXG4gIGdldCBsYWJlbFRlbXBsYXRlKCkge1xyXG4gICAgcmV0dXJuIHJlc29sdmVUcGxOYW1lKHRoaXMucHJvcHMsIHRoaXMuZmllbGRUZW1wbGF0ZXMsICdsYWJlbFRlbXBsYXRlJyk7XHJcbiAgfVxyXG59XHJcbiIsIjxuei1zZWxlY3RcclxuICAjaW5zdGFuY2VcclxuICBbZm9ybUNvbnRyb2xdPVwiJGFueShmb3JtQ29udHJvbClcIlxyXG4gIFtmb3JtbHlBdHRyaWJ1dGVzXT1cImZpZWxkXCJcclxuICBbY29tcGFyZVdpdGhdPVwicHJvcHMuY29tcGFyZVdpdGhcIlxyXG4gIFtuelNob3dTZWFyY2hdPVwicHJvcHMubnpTaG93U2VhcmNoXCJcclxuICBbbnpBbGxvd0NsZWFyXT1cInByb3BzLm56QWxsb3dDbGVhclwiXHJcbiAgW256UGxhY2VIb2xkZXJdPVwicHJvcHMubnpQbGFjZUhvbGRlciB8fCBwcm9wcy5wbGFjZWhvbGRlclwiXHJcbiAgW256T3Blbl09XCJwcm9wcy5uek9wZW5cIlxyXG4gIFtuekF1dG9Gb2N1c109XCJwcm9wcy5uekF1dG9Gb2N1c1wiXHJcbiAgW256RGlzYWJsZWRdPVwicHJvcHMubnpEaXNhYmxlZCB8fCBwcm9wcy5kaXNhYmxlZCB8fCBmb3JtQ29udHJvbD8uZGlzYWJsZWRcIlxyXG4gIFtuekRyb3Bkb3duQ2xhc3NOYW1lXT1cInByb3BzLm56RHJvcGRvd25DbGFzc05hbWVcIlxyXG4gIFtuekRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aF09XCJwcm9wcy5uekRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aFwiXHJcbiAgW256RHJvcGRvd25TdHlsZV09XCJwcm9wcy5uekRyb3Bkb3duU3R5bGVcIlxyXG4gIFtuelNlcnZlclNlYXJjaF09XCJwcm9wcy5uelNlcnZlclNlYXJjaFwiXHJcbiAgW256RmlsdGVyT3B0aW9uXT1cInByb3BzLm56RmlsdGVyT3B0aW9uXCJcclxuICBbbnpNYXhNdWx0aXBsZUNvdW50XT1cInByb3BzLm56TWF4TXVsdGlwbGVDb3VudFwiXHJcbiAgW256TW9kZV09XCJwcm9wcy5uek1vZGVcIlxyXG4gIFtuek5vdEZvdW5kQ29udGVudF09XCJuek5vdEZvdW5kQ29udGVudFwiXHJcbiAgW256U2l6ZV09XCJwcm9wcy5uelNpemVcIlxyXG4gIFtuekF1dG9DbGVhclNlYXJjaFZhbHVlXT1cInByb3BzLm56QXV0b0NsZWFyU2VhcmNoVmFsdWVcIlxyXG4gIFtuekJhY2tkcm9wXT1cInByb3BzLm56QmFja2Ryb3BcIlxyXG4gIFtuekJvcmRlcmxlc3NdPVwicHJvcHMubnpCb3JkZXJsZXNzXCJcclxuICBbbnpTaG93QXJyb3ddPVwicHJvcHMubnpTaG93QXJyb3dcIlxyXG4gIFtuekN1c3RvbVRlbXBsYXRlXT1cIm56Q3VzdG9tVGVtcGxhdGVcIlxyXG4gIFtuelN1ZmZpeEljb25dPVwibnpTdWZmaXhJY29uXCJcclxuICBbbnpSZW1vdmVJY29uXT1cIm56UmVtb3ZlSWNvblwiXHJcbiAgW256Q2xlYXJJY29uXT1cIm56Q2xlYXJJY29uXCJcclxuICBbbnpNZW51SXRlbVNlbGVjdGVkSWNvbl09XCJuek1lbnVJdGVtU2VsZWN0ZWRJY29uXCJcclxuICBbbnpUb2tlblNlcGFyYXRvcnNdPVwicHJvcHMubnpUb2tlblNlcGFyYXRvcnNcIlxyXG4gIFtuekxvYWRpbmddPVwicHJvcHMubnpMb2FkaW5nXCJcclxuICBbbnpNYXhUYWdDb3VudF09XCJwcm9wcy5uek1heFRhZ0NvdW50XCJcclxuICBbbnpNYXhUYWdQbGFjZWhvbGRlcl09XCJuek1heFRhZ1BsYWNlaG9sZGVyXCJcclxuICBbbnpPcHRpb25IZWlnaHRQeF09XCJwcm9wcy5uek9wdGlvbkhlaWdodFB4XCJcclxuICBbbnpPcHRpb25PdmVyZmxvd1NpemVdPVwicHJvcHMubnpPcHRpb25PdmVyZmxvd1NpemVcIlxyXG4gIChuek9wZW5DaGFuZ2UpPVwicHJvcHMubnpPcGVuQ2hhbmdlPy4oJGV2ZW50LCBmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAobnpTY3JvbGxUb0JvdHRvbSk9XCJwcm9wcy5uelNjcm9sbFRvQm90dG9tPy4oJGV2ZW50LCBmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAobnpPblNlYXJjaCk9XCJwcm9wcy5uek9uU2VhcmNoPy4oJGV2ZW50LCBmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAobnpGb2N1cyk9XCJwcm9wcy5uekZvY3VzPy4oJGV2ZW50LCBmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAobnpCbHVyKT1cInByb3BzLm56Qmx1cj8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgbmdEZWZhdWx0Q29udHJvbFxyXG4+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBwcm9wcy5vcHRpb25zIHwgdG9Bc3luYzogJGFueShwcm9wcykgfCBhc3luYyB8IGRlZmF1bHRpZnk6IFtdXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS5oaWRlICE9PSBmYWxzZVwiPlxyXG4gICAgICA8bnotb3B0aW9uLWdyb3VwICpuZ0lmPVwiaXRlbS5ncm91cDsgZWxzZSBzaW1wbGVUZW1wbGF0ZVwiIFtuekxhYmVsXT1cIml0ZW0ubGFiZWxcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjaGlsZCBvZiBpdGVtLmdyb3VwXCI+XHJcbiAgICAgICAgICA8bnotb3B0aW9uXHJcbiAgICAgICAgICAgICpuZ0lmPVwiY2hpbGQuaGlkZSAhPT0gZmFsc2VcIlxyXG4gICAgICAgICAgICBbbnpWYWx1ZV09XCJjaGlsZC52YWx1ZVwiXHJcbiAgICAgICAgICAgIFtuekRpc2FibGVkXT1cImNoaWxkLmRpc2FibGVkXCJcclxuICAgICAgICAgICAgW256TGFiZWxdPVwiY2hpbGQubGFiZWxcIlxyXG4gICAgICAgICAgICBbbnpDdXN0b21Db250ZW50XT1cImNoaWxkLm56Q3VzdG9tQ29udGVudFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJsYWJlbFRlbXBsYXRlOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogaXRlbSwgZmllbGQ6IGZpZWxkIH1cIj5cclxuICAgICAgICAgICAgICA8c3Bhbj57eyBsYWJlbFRlbXBsYXRlIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvbnotb3B0aW9uPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L256LW9wdGlvbi1ncm91cD5cclxuXHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjc2ltcGxlVGVtcGxhdGU+XHJcbiAgICAgICAgPG56LW9wdGlvblxyXG4gICAgICAgICAgW256VmFsdWVdPVwiaXRlbS52YWx1ZVwiXHJcbiAgICAgICAgICBbbnpEaXNhYmxlZF09XCJpdGVtLmRpc2FibGVkXCJcclxuICAgICAgICAgIFtuekxhYmVsXT1cIml0ZW0ubGFiZWxcIlxyXG4gICAgICAgICAgW256SGlkZV09XCJpdGVtLmhpZGVcIlxyXG4gICAgICAgICAgW256Q3VzdG9tQ29udGVudF09XCJpdGVtLm56Q3VzdG9tQ29udGVudFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImxhYmVsVGVtcGxhdGU7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBpdGVtLCBmaWVsZDogZmllbGQgfVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj57eyBsYWJlbFRlbXBsYXRlIH19PC9zcGFuPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uei1vcHRpb24+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuPC9uei1zZWxlY3Q+XHJcbiJdfQ==