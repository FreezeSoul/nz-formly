import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Optional, ViewChild, NgModule } from '@angular/core';
import * as i5 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i4 from 'ng-zorro-antd/dropdown';
import { NzDropdownMenuComponent, NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { ReplaySubject } from 'rxjs';
import * as i1 from '@freezesoul/nz-formly/common';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from 'ng-zorro-antd/menu';
import { NzMenuModule } from 'ng-zorro-antd/menu';

class FormlyFieldDropdownComponent extends FieldType {
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

const COMPONENT = FormlyFieldDropdownComponent;
class FormlyNzDropdownModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzDropdownModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzDropdownModule, declarations: [FormlyFieldDropdownComponent], imports: [CommonModule,
            NzMenuModule,
            NzDropDownModule, i5.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzDropdownModule, imports: [CommonModule,
            NzMenuModule,
            NzDropDownModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'dropdown',
                        component: COMPONENT
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzDropdownModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldDropdownComponent],
                    imports: [
                        CommonModule,
                        NzMenuModule,
                        NzDropDownModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'dropdown',
                                    component: COMPONENT
                                }
                            ]
                        })
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldDropdownComponent, FormlyNzDropdownModule };
//# sourceMappingURL=freezesoul-nz-formly-dropdown.mjs.map
