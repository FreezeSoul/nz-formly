import { TemplateRef } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates } from '@freezesoul/nz-formly/common';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { TabsItem } from './formly.type';
import * as i0 from "@angular/core";
export declare class FormlyFieldTabsComponent extends FieldType {
    fieldTemplates: FormlyBoxTemplates;
    defaultOptions: {
        props: {
            nzTabPosition: string;
            nzType: string;
            nzAnimated: boolean;
            nzSize: string;
            nzLinkExact: boolean;
        };
    };
    constructor(fieldTemplates: FormlyBoxTemplates);
    get nzTabBarExtraContent(): TemplateRef<any> | undefined;
    getNzTitle(config: NzSafeAny): TemplateRef<NzSafeAny> | undefined;
    /**
     * 获取tab内容
     * @param item
     */
    getNzxContent(item: TabsItem): TemplateRef<any> | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldTabsComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldTabsComponent, "nz-formly-tabs", never, {}, {}, never, never, false, never>;
}
