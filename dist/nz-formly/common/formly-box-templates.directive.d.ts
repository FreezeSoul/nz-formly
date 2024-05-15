import { AfterContentInit, EventEmitter, OnChanges, QueryList, SimpleChange, SimpleChanges, TemplateRef } from '@angular/core';
import { NamedTemplate } from '@freezesoul/nzx-antd/directive';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
export declare class FormlyBoxTemplates implements AfterContentInit, OnChanges {
    private tplMap;
    templateList?: TemplateList;
    templateChange: EventEmitter<Map<string, TemplateRef<any>>>;
    namedTemplate: QueryList<NamedTemplate<NzSafeAny>>;
    get templates(): Map<string, TemplateRef<NzSafeAny>>;
    /**
     * 根据模板名称获取TemplateRef
     * @param templateName 模板名称
     */
    get(templateName: string): TemplateRef<NzSafeAny> | undefined;
    constructor();
    ngAfterContentInit(): void;
    update(emitChange?: boolean): void;
    ngOnChanges(changes: {
        [K in keyof this]?: SimpleChange;
    } & SimpleChanges): void;
    /**
     * 合并参数模板
     * @param tplMap
     * @param emitChange
     */
    mergeTemplate(tplMap: Map<string, TemplateRef<NzSafeAny>>, emitChange?: boolean): void;
    /**
     * 合并content 模板
     * @param tplMap
     * @param templateList
     * @private
     */
    private mergeQueryTemplate;
    /**
     * 合并魔板列表
     * @param tplMap 模板Map
     * @param templateList
     */
    private mergeTemplates;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyBoxTemplates, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FormlyBoxTemplates, "[formly-box]", ["FormlyBox"], { "templateList": { "alias": "formly-box"; "required": false; }; }, { "templateChange": "templateChange"; }, ["namedTemplate"], never, false, never>;
}
/**
 * 魔板列表
 */
export type TemplateList = QueryList<TemplateRef<NzSafeAny>> | QueryList<NamedTemplate<NzSafeAny>> | NamedTemplate<NzSafeAny>[];
