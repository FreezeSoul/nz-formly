import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
import * as i1 from "@freezesoul/nz-formly/common";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/tabs";
import * as i4 from "@ngx-formly/core";
export class FormlyFieldTabsComponent extends FieldType {
    fieldTemplates;
    defaultOptions = {
        props: { nzTabPosition: 'top', nzType: 'line', nzAnimated: true, nzSize: 'default', nzLinkExact: true }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    get nzTabBarExtraContent() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzTabBarExtraContent');
    }
    getNzTitle(config) {
        return resolveTplName(config, this.fieldTemplates, 'nzTitle');
    }
    /**
     * 获取tab内容
     * @param item
     */
    getNzxContent(item) {
        return resolveTplName(item, this.fieldTemplates, 'nzxContent');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldTabsComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldTabsComponent, selector: "nz-formly-tabs", usesInheritance: true, ngImport: i0, template: `
    <nz-tabset
      #instance
      [formlyAttributes]="field"
      [(nzSelectedIndex)]="props.nzSelectedIndex"
      [nzAnimated]="props.nzAnimated"
      [nzSize]="props.nzSize"
      [nzTabBarExtraContent]="nzTabBarExtraContent"
      [nzTabBarStyle]="props.nzTabBarStyle"
      [nzTabPosition]="props.nzTabPosition"
      [nzType]="props.nzType"
      [nzTabBarGutter]="props.nzTabBarGutter"
      [nzHideAll]="props.nzHideAll"
      [nzLinkRouter]="props.nzLinkRouter"
      [nzLinkExact]="props.nzLinkExact"
      [nzCanDeactivate]="props.nzCanDeactivate"
      [nzCentered]="props.nzCentered"
      (nzSelectedIndexChange)="props.nzSelectedIndexChange?.($event, field, instance)"
      (nzSelectChange)="props.nzSelectChange?.($event, field, instance)"
      [nzHideAdd]="props.nzHideAdd"
      [nzAddIcon]="props.nzAddIcon"
      (nzAdd)="props.nzAdd?.($event, field, instance)"
      (nzClose)="props.nzClose?.($event, field, instance)"
    >
      <ng-container *ngIf="props.tabs?.length; else fieldGroupTemplate">
        <ng-container *ngFor="let item of props.tabs">
          <nz-tab
            *ngIf="item.hide !== false"
            [nzTitle]="getNzTitle(item)"
            (nzClick)="item.nzClick?.($event, item.props.tab, instance)"
            [nzForceRender]="item.nzForceRender"
            [nzDisabled]="item.nzDisabled || item.disabled"
            (nzContextmenu)="item.nzContextmenu?.($event, item.props.tab, instance)"
            (nzSelect)="item.nzSelect?.($event, item.props.tab, instance)"
            (nzDeselect)="item.nzDeselect?.($event, item.props.tab, instance)"
            [nzClosable]="item.nzClosable"
            [nzCloseIcon]="item.nzCloseIcon"
            [formlyAttributes]="item"
          >
            <ng-container
              *ngTemplateOutlet="getNzxContent(item); context: { $implicit: item, field: field }"
            ></ng-container>
          </nz-tab>
        </ng-container>
      </ng-container>

      <ng-template #fieldGroupTemplate>
        <ng-container *ngFor="let item of field.fieldGroup">
          <nz-tab
            *ngIf="item.props.tab?.hide !== false"
            [nzTitle]="getNzTitle(item.props?.tab || {})"
            (nzClick)="item.props.tab?.nzClick?.($event, item.props.tab, instance)"
            [nzForceRender]="item.props.tab?.nzForceRender"
            [nzDisabled]="item.props.tab?.nzDisabled || item.props.tab?.disabled"
            (nzContextmenu)="item.props.tab?.nzContextmenu?.($event, item.props.tab, instance)"
            (nzSelect)="item.props.tab?.nzSelect?.($event, item.props.tab, instance)"
            (nzDeselect)="item.props.tab?.nzDeselect?.($event, item.props.tab, instance)"
            [nzClosable]="item.props.tab?.nzClosable"
            [nzCloseIcon]="item.props.tab?.nzCloseIcon"
            [formlyAttributes]="item.props.tab"
          >
            <formly-field [field]="item"></formly-field>
          </nz-tab>
        </ng-container>
      </ng-template>
    </nz-tabset>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i3.NzTabSetComponent, selector: "nz-tabset", inputs: ["nzSelectedIndex", "nzTabPosition", "nzTabBarExtraContent", "nzCanDeactivate", "nzAddIcon", "nzTabBarStyle", "nzType", "nzSize", "nzAnimated", "nzTabBarGutter", "nzHideAdd", "nzCentered", "nzHideAll", "nzLinkRouter", "nzLinkExact"], outputs: ["nzSelectChange", "nzSelectedIndexChange", "nzTabListScroll", "nzClose", "nzAdd"], exportAs: ["nzTabset"] }, { kind: "component", type: i3.NzTabComponent, selector: "nz-tab", inputs: ["nzTitle", "nzClosable", "nzCloseIcon", "nzDisabled", "nzForceRender"], outputs: ["nzSelect", "nzDeselect", "nzClick", "nzContextmenu"], exportAs: ["nzTab"] }, { kind: "component", type: i4.FormlyField, selector: "formly-field", inputs: ["field"] }, { kind: "directive", type: i4.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldTabsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-tabs',
                    template: `
    <nz-tabset
      #instance
      [formlyAttributes]="field"
      [(nzSelectedIndex)]="props.nzSelectedIndex"
      [nzAnimated]="props.nzAnimated"
      [nzSize]="props.nzSize"
      [nzTabBarExtraContent]="nzTabBarExtraContent"
      [nzTabBarStyle]="props.nzTabBarStyle"
      [nzTabPosition]="props.nzTabPosition"
      [nzType]="props.nzType"
      [nzTabBarGutter]="props.nzTabBarGutter"
      [nzHideAll]="props.nzHideAll"
      [nzLinkRouter]="props.nzLinkRouter"
      [nzLinkExact]="props.nzLinkExact"
      [nzCanDeactivate]="props.nzCanDeactivate"
      [nzCentered]="props.nzCentered"
      (nzSelectedIndexChange)="props.nzSelectedIndexChange?.($event, field, instance)"
      (nzSelectChange)="props.nzSelectChange?.($event, field, instance)"
      [nzHideAdd]="props.nzHideAdd"
      [nzAddIcon]="props.nzAddIcon"
      (nzAdd)="props.nzAdd?.($event, field, instance)"
      (nzClose)="props.nzClose?.($event, field, instance)"
    >
      <ng-container *ngIf="props.tabs?.length; else fieldGroupTemplate">
        <ng-container *ngFor="let item of props.tabs">
          <nz-tab
            *ngIf="item.hide !== false"
            [nzTitle]="getNzTitle(item)"
            (nzClick)="item.nzClick?.($event, item.props.tab, instance)"
            [nzForceRender]="item.nzForceRender"
            [nzDisabled]="item.nzDisabled || item.disabled"
            (nzContextmenu)="item.nzContextmenu?.($event, item.props.tab, instance)"
            (nzSelect)="item.nzSelect?.($event, item.props.tab, instance)"
            (nzDeselect)="item.nzDeselect?.($event, item.props.tab, instance)"
            [nzClosable]="item.nzClosable"
            [nzCloseIcon]="item.nzCloseIcon"
            [formlyAttributes]="item"
          >
            <ng-container
              *ngTemplateOutlet="getNzxContent(item); context: { $implicit: item, field: field }"
            ></ng-container>
          </nz-tab>
        </ng-container>
      </ng-container>

      <ng-template #fieldGroupTemplate>
        <ng-container *ngFor="let item of field.fieldGroup">
          <nz-tab
            *ngIf="item.props.tab?.hide !== false"
            [nzTitle]="getNzTitle(item.props?.tab || {})"
            (nzClick)="item.props.tab?.nzClick?.($event, item.props.tab, instance)"
            [nzForceRender]="item.props.tab?.nzForceRender"
            [nzDisabled]="item.props.tab?.nzDisabled || item.props.tab?.disabled"
            (nzContextmenu)="item.props.tab?.nzContextmenu?.($event, item.props.tab, instance)"
            (nzSelect)="item.props.tab?.nzSelect?.($event, item.props.tab, instance)"
            (nzDeselect)="item.props.tab?.nzDeselect?.($event, item.props.tab, instance)"
            [nzClosable]="item.props.tab?.nzClosable"
            [nzCloseIcon]="item.props.tab?.nzCloseIcon"
            [formlyAttributes]="item.props.tab"
          >
            <formly-field [field]="item"></formly-field>
          </nz-tab>
        </ng-container>
      </ng-template>
    </nz-tabset>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvdGFicy90YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUFzQixjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7O0FBMkVsRixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsU0FBUztJQUt0QjtJQUp0QixjQUFjLEdBQUc7UUFDeEIsS0FBSyxFQUFFLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO0tBQ3hHLENBQUM7SUFFRixZQUErQixjQUFrQztRQUMvRCxLQUFLLEVBQUUsQ0FBQztRQURxQixtQkFBYyxHQUFkLGNBQWMsQ0FBb0I7SUFFakUsQ0FBQztJQUVELElBQUksb0JBQW9CO1FBQ3RCLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFRCxVQUFVLENBQUMsTUFBaUI7UUFDMUIsT0FBTyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVEOzs7T0FHRztJQUNILGFBQWEsQ0FBQyxJQUFjO1FBQzFCLE9BQU8sY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ2pFLENBQUM7d0dBdkJVLHdCQUF3Qjs0RkFBeEIsd0JBQXdCLDZFQXJFekI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtFVDs7NEZBR1Usd0JBQXdCO2tCQXZFcEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtFVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7OzBCQU1jLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPcHRpb25hbCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1seUJveFRlbXBsYXRlcywgcmVzb2x2ZVRwbE5hbWUgfSBmcm9tICdAZnJlZXplc291bC9uei1mb3JtbHkvY29tbW9uJztcclxuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgVGFic0l0ZW0gfSBmcm9tICcuL2Zvcm1seS50eXBlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotZm9ybWx5LXRhYnMnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bnotdGFic2V0XHJcbiAgICAgICNpbnN0YW5jZVxyXG4gICAgICBbZm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiXHJcbiAgICAgIFsobnpTZWxlY3RlZEluZGV4KV09XCJwcm9wcy5uelNlbGVjdGVkSW5kZXhcIlxyXG4gICAgICBbbnpBbmltYXRlZF09XCJwcm9wcy5uekFuaW1hdGVkXCJcclxuICAgICAgW256U2l6ZV09XCJwcm9wcy5uelNpemVcIlxyXG4gICAgICBbbnpUYWJCYXJFeHRyYUNvbnRlbnRdPVwibnpUYWJCYXJFeHRyYUNvbnRlbnRcIlxyXG4gICAgICBbbnpUYWJCYXJTdHlsZV09XCJwcm9wcy5uelRhYkJhclN0eWxlXCJcclxuICAgICAgW256VGFiUG9zaXRpb25dPVwicHJvcHMubnpUYWJQb3NpdGlvblwiXHJcbiAgICAgIFtuelR5cGVdPVwicHJvcHMubnpUeXBlXCJcclxuICAgICAgW256VGFiQmFyR3V0dGVyXT1cInByb3BzLm56VGFiQmFyR3V0dGVyXCJcclxuICAgICAgW256SGlkZUFsbF09XCJwcm9wcy5uekhpZGVBbGxcIlxyXG4gICAgICBbbnpMaW5rUm91dGVyXT1cInByb3BzLm56TGlua1JvdXRlclwiXHJcbiAgICAgIFtuekxpbmtFeGFjdF09XCJwcm9wcy5uekxpbmtFeGFjdFwiXHJcbiAgICAgIFtuekNhbkRlYWN0aXZhdGVdPVwicHJvcHMubnpDYW5EZWFjdGl2YXRlXCJcclxuICAgICAgW256Q2VudGVyZWRdPVwicHJvcHMubnpDZW50ZXJlZFwiXHJcbiAgICAgIChuelNlbGVjdGVkSW5kZXhDaGFuZ2UpPVwicHJvcHMubnpTZWxlY3RlZEluZGV4Q2hhbmdlPy4oJGV2ZW50LCBmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAgICAgKG56U2VsZWN0Q2hhbmdlKT1cInByb3BzLm56U2VsZWN0Q2hhbmdlPy4oJGV2ZW50LCBmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAgICAgW256SGlkZUFkZF09XCJwcm9wcy5uekhpZGVBZGRcIlxyXG4gICAgICBbbnpBZGRJY29uXT1cInByb3BzLm56QWRkSWNvblwiXHJcbiAgICAgIChuekFkZCk9XCJwcm9wcy5uekFkZD8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIChuekNsb3NlKT1cInByb3BzLm56Q2xvc2U/LigkZXZlbnQsIGZpZWxkLCBpbnN0YW5jZSlcIlxyXG4gICAgPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicHJvcHMudGFicz8ubGVuZ3RoOyBlbHNlIGZpZWxkR3JvdXBUZW1wbGF0ZVwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgcHJvcHMudGFic1wiPlxyXG4gICAgICAgICAgPG56LXRhYlxyXG4gICAgICAgICAgICAqbmdJZj1cIml0ZW0uaGlkZSAhPT0gZmFsc2VcIlxyXG4gICAgICAgICAgICBbbnpUaXRsZV09XCJnZXROelRpdGxlKGl0ZW0pXCJcclxuICAgICAgICAgICAgKG56Q2xpY2spPVwiaXRlbS5uekNsaWNrPy4oJGV2ZW50LCBpdGVtLnByb3BzLnRhYiwgaW5zdGFuY2UpXCJcclxuICAgICAgICAgICAgW256Rm9yY2VSZW5kZXJdPVwiaXRlbS5uekZvcmNlUmVuZGVyXCJcclxuICAgICAgICAgICAgW256RGlzYWJsZWRdPVwiaXRlbS5uekRpc2FibGVkIHx8IGl0ZW0uZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAobnpDb250ZXh0bWVudSk9XCJpdGVtLm56Q29udGV4dG1lbnU/LigkZXZlbnQsIGl0ZW0ucHJvcHMudGFiLCBpbnN0YW5jZSlcIlxyXG4gICAgICAgICAgICAobnpTZWxlY3QpPVwiaXRlbS5uelNlbGVjdD8uKCRldmVudCwgaXRlbS5wcm9wcy50YWIsIGluc3RhbmNlKVwiXHJcbiAgICAgICAgICAgIChuekRlc2VsZWN0KT1cIml0ZW0ubnpEZXNlbGVjdD8uKCRldmVudCwgaXRlbS5wcm9wcy50YWIsIGluc3RhbmNlKVwiXHJcbiAgICAgICAgICAgIFtuekNsb3NhYmxlXT1cIml0ZW0ubnpDbG9zYWJsZVwiXHJcbiAgICAgICAgICAgIFtuekNsb3NlSWNvbl09XCJpdGVtLm56Q2xvc2VJY29uXCJcclxuICAgICAgICAgICAgW2Zvcm1seUF0dHJpYnV0ZXNdPVwiaXRlbVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cImdldE56eENvbnRlbnQoaXRlbSk7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBpdGVtLCBmaWVsZDogZmllbGQgfVwiXHJcbiAgICAgICAgICAgID48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvbnotdGFiPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjZmllbGRHcm91cFRlbXBsYXRlPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZmllbGQuZmllbGRHcm91cFwiPlxyXG4gICAgICAgICAgPG56LXRhYlxyXG4gICAgICAgICAgICAqbmdJZj1cIml0ZW0ucHJvcHMudGFiPy5oaWRlICE9PSBmYWxzZVwiXHJcbiAgICAgICAgICAgIFtuelRpdGxlXT1cImdldE56VGl0bGUoaXRlbS5wcm9wcz8udGFiIHx8IHt9KVwiXHJcbiAgICAgICAgICAgIChuekNsaWNrKT1cIml0ZW0ucHJvcHMudGFiPy5uekNsaWNrPy4oJGV2ZW50LCBpdGVtLnByb3BzLnRhYiwgaW5zdGFuY2UpXCJcclxuICAgICAgICAgICAgW256Rm9yY2VSZW5kZXJdPVwiaXRlbS5wcm9wcy50YWI/Lm56Rm9yY2VSZW5kZXJcIlxyXG4gICAgICAgICAgICBbbnpEaXNhYmxlZF09XCJpdGVtLnByb3BzLnRhYj8ubnpEaXNhYmxlZCB8fCBpdGVtLnByb3BzLnRhYj8uZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAobnpDb250ZXh0bWVudSk9XCJpdGVtLnByb3BzLnRhYj8ubnpDb250ZXh0bWVudT8uKCRldmVudCwgaXRlbS5wcm9wcy50YWIsIGluc3RhbmNlKVwiXHJcbiAgICAgICAgICAgIChuelNlbGVjdCk9XCJpdGVtLnByb3BzLnRhYj8ubnpTZWxlY3Q/LigkZXZlbnQsIGl0ZW0ucHJvcHMudGFiLCBpbnN0YW5jZSlcIlxyXG4gICAgICAgICAgICAobnpEZXNlbGVjdCk9XCJpdGVtLnByb3BzLnRhYj8ubnpEZXNlbGVjdD8uKCRldmVudCwgaXRlbS5wcm9wcy50YWIsIGluc3RhbmNlKVwiXHJcbiAgICAgICAgICAgIFtuekNsb3NhYmxlXT1cIml0ZW0ucHJvcHMudGFiPy5uekNsb3NhYmxlXCJcclxuICAgICAgICAgICAgW256Q2xvc2VJY29uXT1cIml0ZW0ucHJvcHMudGFiPy5uekNsb3NlSWNvblwiXHJcbiAgICAgICAgICAgIFtmb3JtbHlBdHRyaWJ1dGVzXT1cIml0ZW0ucHJvcHMudGFiXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGZvcm1seS1maWVsZCBbZmllbGRdPVwiaXRlbVwiPjwvZm9ybWx5LWZpZWxkPlxyXG4gICAgICAgICAgPC9uei10YWI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8L256LXRhYnNldD5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtbHlGaWVsZFRhYnNDb21wb25lbnQgZXh0ZW5kcyBGaWVsZFR5cGUge1xyXG4gIG92ZXJyaWRlIGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgcHJvcHM6IHsgbnpUYWJQb3NpdGlvbjogJ3RvcCcsIG56VHlwZTogJ2xpbmUnLCBuekFuaW1hdGVkOiB0cnVlLCBuelNpemU6ICdkZWZhdWx0JywgbnpMaW5rRXhhY3Q6IHRydWUgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHB1YmxpYyBmaWVsZFRlbXBsYXRlczogRm9ybWx5Qm94VGVtcGxhdGVzKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56VGFiQmFyRXh0cmFDb250ZW50KCkge1xyXG4gICAgcmV0dXJuIHJlc29sdmVUcGxOYW1lKHRoaXMucHJvcHMsIHRoaXMuZmllbGRUZW1wbGF0ZXMsICduelRhYkJhckV4dHJhQ29udGVudCcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TnpUaXRsZShjb25maWc6IE56U2FmZUFueSk6IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHJlc29sdmVUcGxOYW1lKGNvbmZpZywgdGhpcy5maWVsZFRlbXBsYXRlcywgJ256VGl0bGUnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPlnRhYuWGheWuuVxyXG4gICAqIEBwYXJhbSBpdGVtXHJcbiAgICovXHJcbiAgZ2V0Tnp4Q29udGVudChpdGVtOiBUYWJzSXRlbSkge1xyXG4gICAgcmV0dXJuIHJlc29sdmVUcGxOYW1lKGl0ZW0sIHRoaXMuZmllbGRUZW1wbGF0ZXMsICduenhDb250ZW50Jyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==