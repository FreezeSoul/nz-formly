import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Optional, NgModule } from '@angular/core';
import * as i3 from '@ngx-formly/core';
import { FieldWrapper, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@freezesoul/nz-formly/common';
import { resolveTplName, resolveTplNameArray } from '@freezesoul/nz-formly/common';
import * as i2 from 'ng-zorro-antd/card';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CommonModule } from '@angular/common';

class CardWrapperComponent extends FieldWrapper {
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

const COMPONENT = CardWrapperComponent;
class FormlyNzCardWrapperModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzCardWrapperModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzCardWrapperModule, declarations: [CardWrapperComponent], imports: [CommonModule,
            NzCardModule, i3.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzCardWrapperModule, imports: [CommonModule,
            NzCardModule,
            FormlyModule.forChild({
                wrappers: [
                    {
                        name: 'card-wrapper',
                        component: COMPONENT
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzCardWrapperModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        NzCardModule,
                        FormlyModule.forChild({
                            wrappers: [
                                {
                                    name: 'card-wrapper',
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

export { CardWrapperComponent, FormlyNzCardWrapperModule };
//# sourceMappingURL=freezesoul-nz-formly-card-wrapper.mjs.map
