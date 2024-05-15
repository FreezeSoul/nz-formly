import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Optional, NgModule } from '@angular/core';
import * as i6 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@freezesoul/nz-formly/common';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as i4 from 'ng-zorro-antd/select';
import { NzSelectModule } from 'ng-zorro-antd/select';
import * as i5 from 'ng-zorro-antd/core/outlet';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import * as i7 from '@freezesoul/nzx-antd/pipe';
import { NzxPipeModule } from '@freezesoul/nzx-antd/pipe';

class FormlyFieldSelectComponent extends FieldType {
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

const COMPONENT = FormlyFieldSelectComponent;
class FormlyNzSelectModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzSelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzSelectModule, declarations: [FormlyFieldSelectComponent], imports: [CommonModule,
            ReactiveFormsModule,
            NzSelectModule,
            NzxPipeModule,
            NzOutletModule, i6.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzSelectModule, imports: [CommonModule,
            ReactiveFormsModule,
            NzSelectModule,
            NzxPipeModule,
            NzOutletModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'select',
                        component: COMPONENT,
                        wrappers: ['field-wrapper']
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzSelectModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzSelectModule,
                        NzxPipeModule,
                        NzOutletModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'select',
                                    component: COMPONENT,
                                    wrappers: ['field-wrapper']
                                }
                            ]
                        })
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldSelectComponent, FormlyNzSelectModule };
//# sourceMappingURL=freezesoul-nz-formly-select.mjs.map
