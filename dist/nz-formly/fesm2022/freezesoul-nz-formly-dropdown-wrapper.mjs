import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Optional, ViewChild, NgModule } from '@angular/core';
import * as i1$1 from '@ngx-formly/core';
import { FieldWrapper, FormlyModule } from '@ngx-formly/core';
import * as i2 from 'ng-zorro-antd/dropdown';
import { NzDropDownDirective, NzDropDownModule } from 'ng-zorro-antd/dropdown';
import * as i1 from '@freezesoul/nz-formly/common';
import { findField } from '@freezesoul/nz-formly/common';
import { CommonModule } from '@angular/common';

function dropdownExtension(field) {
    if (!field.props || (field.wrappers && field.wrappers.indexOf('dropdown-wrapper') !== -1)) {
        return;
    }
    if (field.props?.nzDropdown?.ref) {
        field.wrappers = [...(field.wrappers || []), 'dropdown-wrapper'];
    }
}

class DropdownWrapperComponent extends FieldWrapper {
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

const COMPONENT = DropdownWrapperComponent;
class FormlyDropdownWrapperModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyDropdownWrapperModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyDropdownWrapperModule, declarations: [DropdownWrapperComponent], imports: [CommonModule,
            NzDropDownModule, i1$1.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyDropdownWrapperModule, imports: [CommonModule,
            NzDropDownModule,
            FormlyModule.forChild({
                wrappers: [
                    {
                        name: 'dropdown-wrapper',
                        component: COMPONENT
                    }
                ],
                extensions: [{ name: 'dropdown', extension: { postPopulate: dropdownExtension } }]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyDropdownWrapperModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        NzDropDownModule,
                        FormlyModule.forChild({
                            wrappers: [
                                {
                                    name: 'dropdown-wrapper',
                                    component: COMPONENT
                                }
                            ],
                            extensions: [{ name: 'dropdown', extension: { postPopulate: dropdownExtension } }]
                        })
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { DropdownWrapperComponent, FormlyDropdownWrapperModule, dropdownExtension };
//# sourceMappingURL=freezesoul-nz-formly-dropdown-wrapper.mjs.map
