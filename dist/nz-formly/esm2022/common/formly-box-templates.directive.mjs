import { ContentChildren, Directive, EventEmitter, Input, Output } from '@angular/core';
import { NamedTemplate } from '@freezesoul/nzx-antd/directive';
import * as i0 from "@angular/core";
export class FormlyBoxTemplates {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWx5LWJveC10ZW1wbGF0ZXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbGliL2NvbW1vbi9mb3JtbHktYm94LXRlbXBsYXRlcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLGVBQWUsRUFDZixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBS1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQU8vRCxNQUFNLE9BQU8sa0JBQWtCO0lBQ3JCLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBa0MsQ0FBQztJQUN0QyxZQUFZLENBQWdCO0lBQ3ZDLGNBQWMsR0FBRyxJQUFJLFlBQVksRUFBdUMsQ0FBQztJQUNuRCxhQUFhLENBQXVDO0lBRXBGLElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsR0FBRyxDQUFDLFlBQW9CO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELGdCQUFlLENBQUM7SUFFaEIsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBNkQ7UUFDdkUsSUFBSSxPQUFPLENBQUMsWUFBWSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUNqRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsYUFBYSxDQUFDLE1BQTJDLEVBQUUsVUFBVSxHQUFHLElBQUk7UUFDMUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLGtCQUFrQixDQUN4QixNQUEyQyxFQUMzQyxZQUFrRDtRQUVsRCxJQUFJLFlBQVksRUFBRTtZQUNoQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN2QixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLGNBQWMsQ0FBQyxNQUEyQyxFQUFFLFlBQTJCO1FBQzdGLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBRUQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsWUFBWSxhQUFhLEVBQUU7Z0JBQzlCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDakM7aUJBQU07Z0JBQ0wsTUFBTSxRQUFRLEdBQUcsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDdkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMvQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTztJQUNULENBQUM7d0dBdkZVLGtCQUFrQjs0RkFBbEIsa0JBQWtCLDJMQUlaLGFBQWE7OzRGQUpuQixrQkFBa0I7a0JBSjlCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSxXQUFXO2lCQUN0QjswRUFHc0IsWUFBWTtzQkFBaEMsS0FBSzt1QkFBQyxZQUFZO2dCQUNULGNBQWM7c0JBQXZCLE1BQU07Z0JBQ3lCLGFBQWE7c0JBQTVDLGVBQWU7dUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBTaW1wbGVDaGFuZ2UsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYW1lZFRlbXBsYXRlIH0gZnJvbSAnQGZyZWV6ZXNvdWwvbnp4LWFudGQvZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2Zvcm1seS1ib3hdJyxcclxuICBleHBvcnRBczogJ0Zvcm1seUJveCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1seUJveFRlbXBsYXRlcyBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgcHJpdmF0ZSB0cGxNYXAgPSBuZXcgTWFwPHN0cmluZywgVGVtcGxhdGVSZWY8TnpTYWZlQW55Pj4oKTtcclxuICBASW5wdXQoJ2Zvcm1seS1ib3gnKSB0ZW1wbGF0ZUxpc3Q/OiBUZW1wbGF0ZUxpc3Q7XHJcbiAgQE91dHB1dCgpIHRlbXBsYXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxNYXA8c3RyaW5nLCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+Pj4oKTtcclxuICBAQ29udGVudENoaWxkcmVuKE5hbWVkVGVtcGxhdGUpIG5hbWVkVGVtcGxhdGUhOiBRdWVyeUxpc3Q8TmFtZWRUZW1wbGF0ZTxOelNhZmVBbnk+PjtcclxuXHJcbiAgZ2V0IHRlbXBsYXRlcygpOiBNYXA8c3RyaW5nLCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+PiB7XHJcbiAgICByZXR1cm4gdGhpcy50cGxNYXA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmoLnmja7mqKHmnb/lkI3np7Dojrflj5ZUZW1wbGF0ZVJlZlxyXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZU5hbWUg5qih5p2/5ZCN56ewXHJcbiAgICovXHJcbiAgZ2V0KHRlbXBsYXRlTmFtZTogc3RyaW5nKTogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy50cGxNYXAuZ2V0KHRlbXBsYXRlTmFtZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB0aGlzLm5hbWVkVGVtcGxhdGUuY2hhbmdlcy5zdWJzY3JpYmUodiA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShlbWl0Q2hhbmdlID0gdHJ1ZSkge1xyXG4gICAgdGhpcy50cGxNYXAuY2xlYXIoKTtcclxuICAgIHRoaXMubWVyZ2VUZW1wbGF0ZSh0aGlzLnRwbE1hcCwgZW1pdENoYW5nZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtLIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy50ZW1wbGF0ZUxpc3QgJiYgIWNoYW5nZXMudGVtcGxhdGVMaXN0LmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5ZCI5bm25Y+C5pWw5qih5p2/XHJcbiAgICogQHBhcmFtIHRwbE1hcFxyXG4gICAqIEBwYXJhbSBlbWl0Q2hhbmdlXHJcbiAgICovXHJcbiAgbWVyZ2VUZW1wbGF0ZSh0cGxNYXA6IE1hcDxzdHJpbmcsIFRlbXBsYXRlUmVmPE56U2FmZUFueT4+LCBlbWl0Q2hhbmdlID0gdHJ1ZSkge1xyXG4gICAgdGhpcy5tZXJnZVRlbXBsYXRlcyh0cGxNYXAsIHRoaXMudGVtcGxhdGVMaXN0KTtcclxuICAgIHRoaXMubWVyZ2VRdWVyeVRlbXBsYXRlKHRwbE1hcCwgdGhpcy5uYW1lZFRlbXBsYXRlKTtcclxuICAgIHRoaXMudGVtcGxhdGVDaGFuZ2UuZW1pdCh0cGxNYXApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5ZCI5bm2Y29udGVudCDmqKHmnb9cclxuICAgKiBAcGFyYW0gdHBsTWFwXHJcbiAgICogQHBhcmFtIHRlbXBsYXRlTGlzdFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBtZXJnZVF1ZXJ5VGVtcGxhdGUoXHJcbiAgICB0cGxNYXA6IE1hcDxzdHJpbmcsIFRlbXBsYXRlUmVmPE56U2FmZUFueT4+LFxyXG4gICAgdGVtcGxhdGVMaXN0PzogUXVlcnlMaXN0PE5hbWVkVGVtcGxhdGU8TnpTYWZlQW55Pj5cclxuICApOiB2b2lkIHtcclxuICAgIGlmICh0ZW1wbGF0ZUxpc3QpIHtcclxuICAgICAgdGVtcGxhdGVMaXN0LmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgdHBsTWFwLnNldCh2Lm5hbWVkLCB2LnRlbXBsYXRlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlkIjlubbprZTmnb/liJfooahcclxuICAgKiBAcGFyYW0gdHBsTWFwIOaooeadv01hcFxyXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZUxpc3RcclxuICAgKi9cclxuICBwcml2YXRlIG1lcmdlVGVtcGxhdGVzKHRwbE1hcDogTWFwPHN0cmluZywgVGVtcGxhdGVSZWY8TnpTYWZlQW55Pj4sIHRlbXBsYXRlTGlzdD86IFRlbXBsYXRlTGlzdCk6IHZvaWQge1xyXG4gICAgaWYgKCF0ZW1wbGF0ZUxpc3QpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRlbXBsYXRlTGlzdC5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICBpZiAodiBpbnN0YW5jZW9mIE5hbWVkVGVtcGxhdGUpIHtcclxuICAgICAgICB0cGxNYXAuc2V0KHYubmFtZWQsIHYudGVtcGxhdGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IG5hbWVkVHBsID0gbmV3IE5hbWVkVGVtcGxhdGUodik7XHJcbiAgICAgICAgbmFtZWRUcGwucmVzb2x2ZU5hbWUoKTtcclxuICAgICAgICB0cGxNYXAuc2V0KG5hbWVkVHBsLm5hbWVkLCBuYW1lZFRwbC50ZW1wbGF0ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDprZTmnb/liJfooahcclxuICovXHJcbmV4cG9ydCB0eXBlIFRlbXBsYXRlTGlzdCA9XHJcbiAgfCBRdWVyeUxpc3Q8VGVtcGxhdGVSZWY8TnpTYWZlQW55Pj5cclxuICB8IFF1ZXJ5TGlzdDxOYW1lZFRlbXBsYXRlPE56U2FmZUFueT4+XHJcbiAgfCBOYW1lZFRlbXBsYXRlPE56U2FmZUFueT5bXTtcclxuIl19