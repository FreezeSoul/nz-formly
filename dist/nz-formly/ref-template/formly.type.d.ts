import { ControlOptions, NzFormlyFieldConfig } from '@freezesoul/nz-formly/common';
import { TemplateRef } from '@angular/core';
import { FieldWrapperOptions } from '@freezesoul/nz-formly/field-wrapper';
/**
 * RefTemplate配置
 */
export interface RefTemplateOptions extends ControlOptions {
    ref?: string | TemplateRef<{
        $implicit: RefTemplateFieldConfig;
        props: RefTemplateOptions;
    }>;
    refName?: string;
}
/**
 * RefTemplate配置
 */
export interface RefTemplateFieldConfig extends NzFormlyFieldConfig<RefTemplateOptions & FieldWrapperOptions> {
    type: 'ref-template';
}
