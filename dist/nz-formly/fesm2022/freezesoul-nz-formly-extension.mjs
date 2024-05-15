/**
 * 添加默认placeholder
 */
const defaultPlaceholderExtension = {
    prePopulate(field) {
        if (!field.props?.label || field.props?.placeholder !== undefined || field.props?.nzPlaceholder !== undefined) {
            return;
        }
        const selectable = ['select', 'tree-select', 'cascader', 'date-picker', 'time-picker'];
        field.props = {
            ...field.props,
            placeholder: selectable.indexOf(field.type) >= 0 ? `请选择${field.props?.label}` : `请输入${field.props?.label}`
        };
    }
};
/**
 * 默认placeholder 配置
 */
const defaultPlaceholderExtensionOption = {
    name: 'default-label',
    extension: defaultPlaceholderExtension
};

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
const valueChangesExtension = {
    postPopulate(field) {
        if (!field.formControl || !field.props?.valueChanges || field.props.valueChanges.observed) {
            return;
        }
        field.props.valueChanges.observed = true;
        field.formControl.valueChanges.subscribe(value => field.props.valueChanges(value, field));
    }
};
/**
 * valueChanges函数配置
 */
const valueChangesExtensionOption = {
    name: 'value-changes',
    extension: valueChangesExtension
};

/**
 * Generated bundle index. Do not edit.
 */

export { defaultPlaceholderExtension, defaultPlaceholderExtensionOption, valueChangesExtension, valueChangesExtensionOption };
//# sourceMappingURL=freezesoul-nz-formly-extension.mjs.map
