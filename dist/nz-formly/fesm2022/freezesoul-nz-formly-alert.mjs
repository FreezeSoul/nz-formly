import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Optional, NgModule } from '@angular/core';
import * as i3 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@freezesoul/nz-formly/common';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i2 from 'ng-zorro-antd/alert';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { CommonModule } from '@angular/common';

class FormlyFieldAlertComponent extends FieldType {
    fieldTemplates;
    defaultOptions = {
        props: {
            nzType: 'info'
        }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    get nzDescription() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzDescription');
    }
    get nzMessage() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzMessage');
    }
    get nzAction() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzAction');
    }
    get nzCloseText() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzCloseText');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldAlertComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldAlertComponent, selector: "nz-formly-alert", usesInheritance: true, ngImport: i0, template: `
    <nz-alert
      #instance
      [formlyAttributes]="field"
      [nzBanner]="props.nzBanner"
      [nzMessage]="nzMessage"
      [nzAction]="nzAction"
      [nzCloseable]="props.nzCloseable"
      [nzCloseText]="nzCloseText"
      [nzDescription]="nzDescription"
      [nzIconType]="props.nzIconType"
      [nzShowIcon]="props.nzShowIcon"
      [nzType]="props.nzType"
      (nzOnClose)="props.nzOnClose?.($event, field, instance)"
    ></nz-alert>
  `, isInline: true, dependencies: [{ kind: "component", type: i2.NzAlertComponent, selector: "nz-alert", inputs: ["nzAction", "nzCloseText", "nzIconType", "nzMessage", "nzDescription", "nzType", "nzCloseable", "nzShowIcon", "nzBanner", "nzNoAnimation", "nzIcon"], outputs: ["nzOnClose"], exportAs: ["nzAlert"] }, { kind: "directive", type: i3.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldAlertComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-alert',
                    template: `
    <nz-alert
      #instance
      [formlyAttributes]="field"
      [nzBanner]="props.nzBanner"
      [nzMessage]="nzMessage"
      [nzAction]="nzAction"
      [nzCloseable]="props.nzCloseable"
      [nzCloseText]="nzCloseText"
      [nzDescription]="nzDescription"
      [nzIconType]="props.nzIconType"
      [nzShowIcon]="props.nzShowIcon"
      [nzType]="props.nzType"
      (nzOnClose)="props.nzOnClose?.($event, field, instance)"
    ></nz-alert>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });

const COMPONENT = FormlyFieldAlertComponent;
class FormlyFieldAlertModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldAlertModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldAlertModule, declarations: [FormlyFieldAlertComponent], imports: [CommonModule,
            NzAlertModule, i3.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldAlertModule, imports: [CommonModule,
            NzAlertModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'alert',
                        component: COMPONENT
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldAlertModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        NzAlertModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'alert',
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

export { FormlyFieldAlertComponent, FormlyFieldAlertModule };
//# sourceMappingURL=freezesoul-nz-formly-alert.mjs.map
