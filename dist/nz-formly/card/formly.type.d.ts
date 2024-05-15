import { TemplateRef } from '@angular/core';
import { NzFormlyFieldConfig } from '@freezesoul/nz-formly/common';
import { CardWrapperOptions } from '@freezesoul/nz-formly/card-wrapper';
/**
 * 卡片模板配置
 */
export interface CardOptions extends CardWrapperOptions {
    /**
     * 内容
     */
    nzContent?: string | TemplateRef<{
        $implicit: CardOptions;
        options: CardOptions;
    }>;
    nzContentName?: string;
}
/**
 *  上传文件配置
 */
export interface CardFieldConfig extends NzFormlyFieldConfig<CardOptions> {
    type: 'card';
}
