import * as i0 from '@angular/core';
import { EventEmitter, Directive, Input, Output, ContentChildren, NgModule } from '@angular/core';
import { NamedTemplate } from '@freezesoul/nzx-antd/directive';
import { CommonModule } from '@angular/common';

class FormlyBoxTemplates {
    tplMap = new Map();
    templateList;
    templateChange = new EventEmitter();
    namedTemplate;
    get templates() {
        return this.tplMap;
    }
    /**
     * 根据模板名称获取TemplateRef
     * @param templateName 模板名称
     */
    get(templateName) {
        return this.tplMap.get(templateName);
    }
    constructor() { }
    ngAfterContentInit() {
        this.update();
        this.namedTemplate.changes.subscribe(v => {
            this.update();
        });
    }
    update(emitChange = true) {
        this.tplMap.clear();
        this.mergeTemplate(this.tplMap, emitChange);
    }
    ngOnChanges(changes) {
        if (changes.templateList && !changes.templateList.isFirstChange()) {
            this.update();
        }
    }
    /**
     * 合并参数模板
     * @param tplMap
     * @param emitChange
     */
    mergeTemplate(tplMap, emitChange = true) {
        this.mergeTemplates(tplMap, this.templateList);
        this.mergeQueryTemplate(tplMap, this.namedTemplate);
        this.templateChange.emit(tplMap);
    }
    /**
     * 合并content 模板
     * @param tplMap
     * @param templateList
     * @private
     */
    mergeQueryTemplate(tplMap, templateList) {
        if (templateList) {
            templateList.forEach(v => {
                tplMap.set(v.named, v.template);
            });
        }
    }
    /**
     * 合并魔板列表
     * @param tplMap 模板Map
     * @param templateList
     */
    mergeTemplates(tplMap, templateList) {
        if (!templateList) {
            return;
        }
        templateList.forEach(v => {
            if (v instanceof NamedTemplate) {
                tplMap.set(v.named, v.template);
            }
            else {
                const namedTpl = new NamedTemplate(v);
                namedTpl.resolveName();
                tplMap.set(namedTpl.named, namedTpl.template);
            }
        });
        return;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyBoxTemplates, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: FormlyBoxTemplates, selector: "[formly-box]", inputs: { templateList: ["formly-box", "templateList"] }, outputs: { templateChange: "templateChange" }, queries: [{ propertyName: "namedTemplate", predicate: NamedTemplate }], exportAs: ["FormlyBox"], usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyBoxTemplates, decorators: [{
            type: Directive,
            args: [{
                    selector: '[formly-box]',
                    exportAs: 'FormlyBox'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { templateList: [{
                type: Input,
                args: ['formly-box']
            }], templateChange: [{
                type: Output
            }], namedTemplate: [{
                type: ContentChildren,
                args: [NamedTemplate]
            }] } });

const COMPONENT = [FormlyBoxTemplates];
class FormlyCommonModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyCommonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyCommonModule, declarations: [FormlyBoxTemplates], imports: [CommonModule], exports: [FormlyBoxTemplates] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyCommonModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyCommonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: COMPONENT,
                    imports: [CommonModule],
                    exports: COMPONENT
                }]
        }] });

/**
 * 处理属性为模板类型, 根据模板名称处理成模板对象
 * @param value 数据对象
 * @param fieldTemplates 模板容器
 * @param propName 属性名
 * @param propTemplateName 模板属性名称
 */
function resolveTplName(value, fieldTemplates, propName, propTemplateName) {
    if (value[propName]) {
        return value[propName];
    }
    if (!fieldTemplates) {
        return undefined;
    }
    const tplName = propTemplateName || getTplName(propName);
    return fieldTemplates.get(value[tplName]);
}
/**
 * 处理属性为模板类型, 根据模板名称处理成模板对象列表
 * @param value 数据对象
 * @param fieldTemplates 模板容器
 * @param propName 属性名
 * @param propTemplateName 模板属性名称
 */
function resolveTplNameArray(value, fieldTemplates, propName, propTemplateName) {
    if (value[propName] != null) {
        return value[propName];
    }
    if (!fieldTemplates) {
        return [];
    }
    const tplName = propTemplateName || getTplName(propName);
    const tplValue = value[tplName];
    if (Array.isArray(tplValue)) {
        return tplValue.map(key => fieldTemplates.get(key)).filter(tpl => tpl);
    }
    return [];
}
/**
 * 根据属性名获取模板名称
 * @param propName 属性名
 */
function getTplName(propName) {
    return `${propName}Name`;
}
/**
 * 获取模板名称
 * @param value
 * @param propName
 * @param propTemplateName 模板属性名称
 */
function hasTplNameValue(value, propName, propTemplateName) {
    const tplName = propTemplateName || getTplName(propName);
    return value[propName] || value[tplName];
}
/**
 * 获取根节点的FieldConfig
 * @param field 当前节点配置
 */
function getRootFiled(field) {
    let p = field.parent;
    while (p && p.parent) {
        p = p.parent;
    }
    return p || field;
}
/**
 * 根据key获取指定FieldConfig
 * @param field 当前节点配置
 * @param key 配置的key
 */
function findField(field, key) {
    const rootField = getRootFiled(field);
    return rootField.get(key);
}

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyBoxTemplates, FormlyCommonModule, findField, getRootFiled, getTplName, hasTplNameValue, resolveTplName, resolveTplNameArray };
//# sourceMappingURL=freezesoul-nz-formly-common.mjs.map
