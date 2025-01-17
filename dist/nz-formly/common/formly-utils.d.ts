import { TemplateRef } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzDropDownDirective } from 'ng-zorro-antd/dropdown';
import { FormlyFieldConfig, FormlyFieldProps } from '@ngx-formly/core';
import { Observable } from 'rxjs';
import { AsyncOption } from '@freezesoul/nzx-antd/pipe';
import { FormlyBoxTemplates } from './formly-box-templates.directive';
/**
 * 下拉菜单配置
 */
export interface DropdownWrapperOptions {
    nzDropdown?: {
        ref: string;
        /**
         * 菜单是否禁用
         */
        nzDisabled?: boolean;
        /**
         * 菜单弹出位置
         */
        nzPlacement?: 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight';
        /**
         * 触发下拉的行为
         */
        nzTrigger?: 'click' | 'hover';
        /**
         * 点击后是否隐藏菜单
         */
        nzClickHide?: boolean;
        /**
         * 菜单是否显示，可双向绑定
         */
        nzVisible?: boolean;
        /**
         * 下拉根元素的类名称
         */
        nzOverlayClassName?: string;
        /**
         * 下拉根元素的样式
         */
        nzOverlayStyle?: object;
        /**
         * 菜单显示状态改变时调用，参数为 nzVisible
         */
        nzVisibleChange?: (evt: boolean, field: FormlyFieldConfig, instance: NzDropDownDirective) => void;
    };
}
/**
 * 处理属性为模板类型, 根据模板名称处理成模板对象
 * @param value 数据对象
 * @param fieldTemplates 模板容器
 * @param propName 属性名
 * @param propTemplateName 模板属性名称
 */
export declare function resolveTplName<T = NzSafeAny>(value: NzSafeAny, fieldTemplates: FormlyBoxTemplates, propName: string, propTemplateName?: string): TemplateRef<T> | undefined;
/**
 * 处理属性为模板类型, 根据模板名称处理成模板对象列表
 * @param value 数据对象
 * @param fieldTemplates 模板容器
 * @param propName 属性名
 * @param propTemplateName 模板属性名称
 */
export declare function resolveTplNameArray<T = NzSafeAny>(value: NzSafeAny, fieldTemplates: FormlyBoxTemplates, propName: string, propTemplateName?: string): TemplateRef<T>[];
/**
 * 根据属性名获取模板名称
 * @param propName 属性名
 */
export declare function getTplName(propName: string): string;
/**
 * 获取模板名称
 * @param value
 * @param propName
 * @param propTemplateName 模板属性名称
 */
export declare function hasTplNameValue(value: NzSafeAny, propName: string, propTemplateName?: string): boolean;
/**
 * 获取根节点的FieldConfig
 * @param field 当前节点配置
 */
export declare function getRootFiled(field: FormlyFieldConfig): FormlyFieldConfig<FormlyFieldProps & {
    [additionalProperties: string]: any;
}>;
/**
 * 根据key获取指定FieldConfig
 * @param field 当前节点配置
 * @param key 配置的key
 */
export declare function findField(field: FormlyFieldConfig, key: string): FormlyFieldConfig | undefined;
/**
 * 异步配置信息
 */
export interface AsyncFormlyOptions<T extends NzSafeAny = NzSafeAny, U extends NzSafeAny = NzSafeAny> extends AsyncOption {
    /**
     * 可选项数据源
     */
    options?: string | Observable<U[]> | Promise<U[]> | U[];
}
/**
 * 控件模板参数配置项
 */
export type ControlOptions = DropdownWrapperOptions & Omit<FormlyFieldProps, 'options'> & {
    valueChanges?: (value: NzSafeAny, field: NzFormlyFieldConfig) => void;
    attributes?: {
        style: string;
        class: string;
        id: string;
        name: string;
        [key: string]: string | number;
    };
};
export interface NzFormlyFieldConfig<T extends ControlOptions = ControlOptions> extends FormlyFieldConfig {
    /**
     * 这是为模板扩展的属性，所有模板访问的属性都应该从这里访问
     */
    props?: T;
    /**
     * @deprecated 使用 `props` 代替
     */
    templateOptions?: T;
}
