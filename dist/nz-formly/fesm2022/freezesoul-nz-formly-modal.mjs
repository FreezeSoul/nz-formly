import * as i0 from '@angular/core';
import { Component, Optional, ViewChild, NgModule } from '@angular/core';
import * as i6 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@freezesoul/nz-formly/common';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from 'ng-zorro-antd/modal';
import { NzModalModule } from 'ng-zorro-antd/modal';
import * as i4 from '@freezesoul/nzx-antd/modal';
import { NzxModalModule } from '@freezesoul/nzx-antd/modal';
import * as i5 from 'ng-zorro-antd/core/outlet';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';

class FormlyFieldModalComponent extends FieldType {
    fieldTemplates;
    instance;
    defaultOptions = {
        props: {
            nzOkType: 'primary',
            nzCloseOnNavigation: true,
            nzMaskClosable: false,
            nzKeyboard: false,
            nzClosable: true,
            nzMask: true,
            nzIconType: 'question-circle',
            nzAutofocus: 'auto',
            nzWidth: 520,
            nzVisible: false,
            nzCloseIcon: 'close',
            nzOnCancel: (field, instance) => (field.props.nzVisible = false),
            nzOnOk: (field, instance) => (field.props.nzVisible = false)
        }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    ngOnInit() {
        this.props.instance = this.instance;
        this.props.init?.(this.instance, this);
    }
    get nzTitle() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzTitle');
    }
    get nzFooter() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzFooter');
    }
    get nzCloseIcon() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzCloseIcon');
    }
    get nzContent() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzContent');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldModalComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldModalComponent, selector: "nz-formly-modal", viewQueries: [{ propertyName: "instance", first: true, predicate: ["nzModal"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: `
    <nz-modal
      *ngIf="props.nzVisible"
      #nzModal
      nzxModalDrag
      [nzVisible]="true"
      [nzTitle]="props.label || nzTitle"
      [formlyAttributes]="field"
      [nzAutofocus]="props.nzAutofocus"
      [nzBodyStyle]="props.nzBodyStyle"
      [nzCancelDisabled]="props.nzCancelDisabled"
      [nzCancelLoading]="props.nzCancelLoading"
      [nzCancelText]="props.nzCancelText"
      [nzCentered]="props.nzCentered"
      [nzClassName]="props.nzClassName"
      [nzClosable]="props.nzClosable"
      [nzCloseIcon]="nzCloseIcon"
      [nzCloseOnNavigation]="props.nzCloseOnNavigation"
      [nzComponentParams]="props.nzComponentParams"
      [nzFooter]="nzFooter"
      [nzIconType]="props.nzIconType"
      [nzKeyboard]="props.nzKeyboard"
      [nzMask]="props.nzMask"
      [nzMaskClosable]="props.nzMaskClosable"
      [nzMaskStyle]="props.nzMaskStyle"
      [nzModalType]="props.nzModalType"
      [nzNoAnimation]="props.nzNoAnimation"
      [nzOkDanger]="props.nzOkDanger"
      [nzOkDisabled]="props.nzOkDisabled"
      [nzOkLoading]="props.nzOkLoading"
      [nzOkText]="props.nzOkText"
      [nzOkType]="props.nzOkType"
      [nzStyle]="props.nzStyle"
      [nzWidth]="props.nzWidth"
      [nzWrapClassName]="props.nzWrapClassName"
      [nzZIndex]="props.nzZIndex"
      (nzAfterClose)="props.onAfterClose?.(field, instance)"
      (nzAfterOpen)="props.nzAfterOpen?.(field, instance)"
      (nzOnCancel)="props.nzOnCancel(field, instance)"
      (nzOnOk)="props.nzOnOk(field, instance)"
      (nzVisibleChange)="props.nzVisibleChange?.($event, field)"
    >
      <ng-container *nzModalContent>
        <formly-field [field]="item" *ngFor="let item of field.fieldGroup"></formly-field>
        <ng-container *nzStringTemplateOutlet="nzContent; context: { $implicit: field, options: props }">
          {{ nzContent }}
        </ng-container>
      </ng-container>
    </nz-modal>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.NzModalComponent, selector: "nz-modal", inputs: ["nzMask", "nzMaskClosable", "nzCloseOnNavigation", "nzVisible", "nzClosable", "nzOkLoading", "nzOkDisabled", "nzCancelDisabled", "nzCancelLoading", "nzKeyboard", "nzNoAnimation", "nzCentered", "nzContent", "nzFooter", "nzZIndex", "nzWidth", "nzWrapClassName", "nzClassName", "nzStyle", "nzTitle", "nzCloseIcon", "nzMaskStyle", "nzBodyStyle", "nzOkText", "nzCancelText", "nzOkType", "nzOkDanger", "nzIconType", "nzModalType", "nzAutofocus", "nzOnOk", "nzOnCancel"], outputs: ["nzOnOk", "nzOnCancel", "nzAfterOpen", "nzAfterClose", "nzVisibleChange"], exportAs: ["nzModal"] }, { kind: "directive", type: i3.NzModalContentDirective, selector: "[nzModalContent]", exportAs: ["nzModalContent"] }, { kind: "directive", type: i4.NzxModalDragDirective, selector: "nz-modal[nzxModalDrag]" }, { kind: "directive", type: i5.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "component", type: i6.FormlyField, selector: "formly-field", inputs: ["field"] }, { kind: "directive", type: i6.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldModalComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-modal',
                    template: `
    <nz-modal
      *ngIf="props.nzVisible"
      #nzModal
      nzxModalDrag
      [nzVisible]="true"
      [nzTitle]="props.label || nzTitle"
      [formlyAttributes]="field"
      [nzAutofocus]="props.nzAutofocus"
      [nzBodyStyle]="props.nzBodyStyle"
      [nzCancelDisabled]="props.nzCancelDisabled"
      [nzCancelLoading]="props.nzCancelLoading"
      [nzCancelText]="props.nzCancelText"
      [nzCentered]="props.nzCentered"
      [nzClassName]="props.nzClassName"
      [nzClosable]="props.nzClosable"
      [nzCloseIcon]="nzCloseIcon"
      [nzCloseOnNavigation]="props.nzCloseOnNavigation"
      [nzComponentParams]="props.nzComponentParams"
      [nzFooter]="nzFooter"
      [nzIconType]="props.nzIconType"
      [nzKeyboard]="props.nzKeyboard"
      [nzMask]="props.nzMask"
      [nzMaskClosable]="props.nzMaskClosable"
      [nzMaskStyle]="props.nzMaskStyle"
      [nzModalType]="props.nzModalType"
      [nzNoAnimation]="props.nzNoAnimation"
      [nzOkDanger]="props.nzOkDanger"
      [nzOkDisabled]="props.nzOkDisabled"
      [nzOkLoading]="props.nzOkLoading"
      [nzOkText]="props.nzOkText"
      [nzOkType]="props.nzOkType"
      [nzStyle]="props.nzStyle"
      [nzWidth]="props.nzWidth"
      [nzWrapClassName]="props.nzWrapClassName"
      [nzZIndex]="props.nzZIndex"
      (nzAfterClose)="props.onAfterClose?.(field, instance)"
      (nzAfterOpen)="props.nzAfterOpen?.(field, instance)"
      (nzOnCancel)="props.nzOnCancel(field, instance)"
      (nzOnOk)="props.nzOnOk(field, instance)"
      (nzVisibleChange)="props.nzVisibleChange?.($event, field)"
    >
      <ng-container *nzModalContent>
        <formly-field [field]="item" *ngFor="let item of field.fieldGroup"></formly-field>
        <ng-container *nzStringTemplateOutlet="nzContent; context: { $implicit: field, options: props }">
          {{ nzContent }}
        </ng-container>
      </ng-container>
    </nz-modal>
  `
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { instance: [{
                type: ViewChild,
                args: ['nzModal', { static: true }]
            }] } });

const COMPONENT = FormlyFieldModalComponent;
class FormlyNzModalModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzModalModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzModalModule, declarations: [FormlyFieldModalComponent], imports: [CommonModule,
            NzModalModule,
            NzxModalModule,
            NzOutletModule, i6.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzModalModule, imports: [CommonModule,
            NzModalModule,
            NzxModalModule,
            NzOutletModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'modal',
                        component: COMPONENT
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzModalModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        NzModalModule,
                        NzxModalModule,
                        NzOutletModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'modal',
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

export { FormlyFieldModalComponent, FormlyNzModalModule };
//# sourceMappingURL=freezesoul-nz-formly-modal.mjs.map
