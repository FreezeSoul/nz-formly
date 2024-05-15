import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import * as i3 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import { NzxUtils } from '@freezesoul/nzx-antd/util';
import { of } from 'rxjs';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from 'ng-zorro-antd/form';
import { NzFormModule } from 'ng-zorro-antd/form';
import * as i4 from '@freezesoul/nzx-antd/pipe';
import { NzxPipeModule } from '@freezesoul/nzx-antd/pipe';

class FormlyFieldTextValueComponent extends FieldType {
    result;
    subscription;
    defaultOptions = {
        props: {
            defaultText: '--'
        }
    };
    ngOnInit() {
        this.subscription = this.formControl.valueChanges.subscribe(value => {
            this.result = undefined;
        });
    }
    get textValue() {
        const value = this.formControl.value;
        const format = this.props.format || this.formState.format;
        if (typeof format !== 'function') {
            return of(value);
        }
        if (this.result) {
            return this.result;
        }
        const result = format(value, this.field);
        if (NzxUtils.isPromise(result) || NzxUtils.isObservable(result)) {
            this.result = result;
            return result;
        }
        return of(result);
    }
    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldTextValueComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldTextValueComponent, selector: "nz-formly-text-value", usesInheritance: true, ngImport: i0, template: `
    <nz-form-text class="wrap-text" [formlyAttributes]="field" [ngClass]="props.ngClass" [ngStyle]="props.ngStyle">
      {{ textValue | async | defaultify: props.defaultText }}
    </nz-form-text>
  `, isInline: true, styles: [".wrap-text{word-break:break-all}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i2.NzFormTextComponent, selector: "nz-form-text", exportAs: ["nzFormText"] }, { kind: "directive", type: i3.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }, { kind: "pipe", type: i4.DefaultifyPipe, name: "defaultify" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldTextValueComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nz-formly-text-value', template: `
    <nz-form-text class="wrap-text" [formlyAttributes]="field" [ngClass]="props.ngClass" [ngStyle]="props.ngStyle">
      {{ textValue | async | defaultify: props.defaultText }}
    </nz-form-text>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".wrap-text{word-break:break-all}\n"] }]
        }] });

const COMPONENT = FormlyFieldTextValueComponent;
class FormlyNzTextValueModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTextValueModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTextValueModule, declarations: [FormlyFieldTextValueComponent], imports: [CommonModule,
            NzxPipeModule,
            NzFormModule, i3.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTextValueModule, imports: [CommonModule,
            NzxPipeModule,
            NzFormModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'text',
                        component: COMPONENT,
                        wrappers: ['field-wrapper']
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTextValueModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        NzxPipeModule,
                        NzFormModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'text',
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

export { FormlyFieldTextValueComponent, FormlyNzTextValueModule };
//# sourceMappingURL=freezesoul-nz-formly-text-value.mjs.map
