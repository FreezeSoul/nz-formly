import * as i0 from '@angular/core';
import { Injectable, NgModule } from '@angular/core';
import * as i1 from '@ngx-formly/core';
import { FormlyModule } from '@ngx-formly/core';
import { defaultPlaceholderExtensionOption, valueChangesExtensionOption } from '@freezesoul/nz-formly/extension';
import { NzxFormUtils } from '@freezesoul/nzx-antd/util';

class NzFormlyService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzFormlyService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzFormlyService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzFormlyService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class NzFormlyModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzFormlyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: NzFormlyModule, imports: [i1.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzFormlyModule, imports: [FormlyModule.forChild({
                validationMessages: [
                    { name: 'required', message: (error, field) => `${field.props?.label}不能为空` },
                    { name: 'minLength', message: (error, field) => `至少输入${field.props.minLength}个字符` },
                    { name: 'maxLength', message: (error, field) => `最多输入${field.props.maxLength}个字符` },
                    { name: 'max', message: (error, field) => `不能超过${field.props.max}` },
                    { name: 'min', message: (error, field) => `不能小于${field.props.min}` },
                    { name: 'pattern', message: (error, field) => `${field.props.label}格式不正确` },
                    { name: 'email', message: '邮箱格式不正确,例如:12345@qq.com' },
                    { name: 'mobile', message: '手机号格式不正确,例如:18812345678' },
                    { name: 'notBlank', message: '首尾不能包含空格' }
                ],
                validators: [
                    { name: 'email', validation: NzxFormUtils.email() },
                    { name: 'mobile', validation: NzxFormUtils.mobile() },
                    {
                        name: 'notBlank',
                        validation: control => {
                            if (!control.value) {
                                return null;
                            }
                            return /^[\s\uFEFF]+|[\s\uFEFF]+$/.test(control.value) ? { notBlank: {} } : null;
                        }
                    }
                ],
                extensions: [defaultPlaceholderExtensionOption, valueChangesExtensionOption]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzFormlyModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormlyModule.forChild({
                            validationMessages: [
                                { name: 'required', message: (error, field) => `${field.props?.label}不能为空` },
                                { name: 'minLength', message: (error, field) => `至少输入${field.props.minLength}个字符` },
                                { name: 'maxLength', message: (error, field) => `最多输入${field.props.maxLength}个字符` },
                                { name: 'max', message: (error, field) => `不能超过${field.props.max}` },
                                { name: 'min', message: (error, field) => `不能小于${field.props.min}` },
                                { name: 'pattern', message: (error, field) => `${field.props.label}格式不正确` },
                                { name: 'email', message: '邮箱格式不正确,例如:12345@qq.com' },
                                { name: 'mobile', message: '手机号格式不正确,例如:18812345678' },
                                { name: 'notBlank', message: '首尾不能包含空格' }
                            ],
                            validators: [
                                { name: 'email', validation: NzxFormUtils.email() },
                                { name: 'mobile', validation: NzxFormUtils.mobile() },
                                {
                                    name: 'notBlank',
                                    validation: control => {
                                        if (!control.value) {
                                            return null;
                                        }
                                        return /^[\s\uFEFF]+|[\s\uFEFF]+$/.test(control.value) ? { notBlank: {} } : null;
                                    }
                                }
                            ],
                            extensions: [defaultPlaceholderExtensionOption, valueChangesExtensionOption]
                        })
                    ]
                }]
        }] });

/*
 * Public API Surface of nz-formly
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NzFormlyModule, NzFormlyService };
//# sourceMappingURL=freezesoul-nz-formly.mjs.map
