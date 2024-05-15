import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Optional, NgModule } from '@angular/core';
import * as i5 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@freezesoul/nz-formly/common';
import { resolveTplName, resolveTplNameArray } from '@freezesoul/nz-formly/common';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from 'ng-zorro-antd/card';
import { NzCardModule } from 'ng-zorro-antd/card';
import * as i4 from 'ng-zorro-antd/core/outlet';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';

class FormlyFieldCardComponent extends FieldType {
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

const COMPONENT = FormlyFieldCardComponent;
class FormlyNzCardModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzCardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzCardModule, declarations: [FormlyFieldCardComponent], imports: [CommonModule,
            NzCardModule,
            NzOutletModule, i5.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzCardModule, imports: [CommonModule,
            NzCardModule,
            NzOutletModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'card',
                        component: COMPONENT
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzCardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        NzCardModule,
                        NzOutletModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'card',
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

export { FormlyFieldCardComponent, FormlyNzCardModule };
//# sourceMappingURL=freezesoul-nz-formly-card.mjs.map
