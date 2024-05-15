import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Optional, NgModule } from '@angular/core';
import * as i4 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@freezesoul/nz-formly/common';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from 'ng-zorro-antd/tabs';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';

class FormlyFieldTabsComponent extends FieldType {
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

const COMPONENT = FormlyFieldTabsComponent;
class FormlyNzTabsModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTabsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTabsModule, declarations: [FormlyFieldTabsComponent], imports: [CommonModule,
            NzTabsModule, i4.FormlyModule, NzButtonModule,
            NzOutletModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTabsModule, imports: [CommonModule,
            NzTabsModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'tabs',
                        component: COMPONENT
                    }
                ]
            }),
            NzButtonModule,
            NzOutletModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTabsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        NzTabsModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'tabs',
                                    component: COMPONENT
                                }
                            ]
                        }),
                        NzButtonModule,
                        NzOutletModule
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldTabsComponent, FormlyNzTabsModule };
//# sourceMappingURL=freezesoul-nz-formly-tabs.mjs.map
