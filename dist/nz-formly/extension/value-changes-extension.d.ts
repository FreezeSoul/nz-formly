import { FormlyExtension } from '@ngx-formly/core';
/**
 * 自动添加valueChanges函数
 * @example
 * fields = [
 * {
 *  type: 'input',
 *  props: {
 *    valueChanges: (value, field) => {}
 *  }
 * }
 * ]
 */
export declare const valueChangesExtension: FormlyExtension;
/**
 * valueChanges函数配置
 */
export declare const valueChangesExtensionOption: {
    name: string;
    extension: FormlyExtension<import("@ngx-formly/core").FormlyFieldConfig<import("@ngx-formly/core").FormlyFieldProps & {
        [additionalProperties: string]: any;
    }>>;
};
