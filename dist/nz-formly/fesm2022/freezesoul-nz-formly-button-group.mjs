import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ViewChildren, NgModule } from '@angular/core';
import * as i6 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i7 from 'ng-zorro-antd/dropdown';
import { NzDropDownDirective, NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { Subject } from 'rxjs';
import { getRootFiled } from '@freezesoul/nz-formly/common';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from 'ng-zorro-antd/button';
import { NzButtonModule } from 'ng-zorro-antd/button';
import * as i3 from 'ng-zorro-antd/core/transition-patch';
import * as i4 from 'ng-zorro-antd/core/wave';
import * as i5 from 'ng-zorro-antd/icon';
import { NzIconModule } from 'ng-zorro-antd/icon';

class FormlyFieldButtonGroupComponent extends FieldType {
    dropdownDirectives;
    destroy$ = new Subject();
    defaultOptions = {
        props: { nzSize: 'default', buttons: [] }
    };
    constructor() {
        super();
    }
    ngAfterViewInit() {
        this.dropdownChange();
        this.dropdownDirectives.changes.subscribe(() => this.dropdownChange());
    }
    dropdownChange() {
        const dropdownBtn = this.props.buttons.filter((btn) => btn.dropdown?.ref);
        if (!dropdownBtn.length) {
            return;
        }
        const rootField = getRootFiled(this.field);
        this.subjectDestroy();
        dropdownBtn.forEach((btn, i) => {
            if (btn.dropdown?.nzDropdownMenu) {
                return;
            }
            const dropdownField = rootField.get(btn.dropdown.ref);
            const dropdownDir = this.dropdownDirectives.get(i);
            if (dropdownField && dropdownDir) {
                const instance = dropdownField.props.instance;
                btn.dropdown.nzDropdownMenu = instance;
                dropdownDir.nzDropdownMenu = instance;
                dropdownDir.ngAfterViewInit();
            }
        });
    }
    subjectDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngOnDestroy() {
        this.subjectDestroy();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldButtonGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldButtonGroupComponent, selector: "nz-formly-button-group", viewQueries: [{ propertyName: "dropdownDirectives", predicate: ["dropdownDirective"], descendants: true, read: NzDropDownDirective }], usesInheritance: true, ngImport: i0, template: `
    <nz-button-group [nzSize]="props.nzSize" [formlyAttributes]="field">
      <ng-container *ngFor="let item of props.buttons">
        <ng-container *ngIf="item.dropdown?.ref; else innerTemplateRef">
          <ng-container *ngTemplateOutlet="btnDropdownTemplate; context: { $implicit: item }"></ng-container>
        </ng-container>

        <ng-template #innerTemplateRef>
          <ng-container *ngTemplateOutlet="btnTemplate; context: { $implicit: item }"></ng-container>
        </ng-template>
      </ng-container>
    </nz-button-group>

    <ng-template #btnTemplate let-item>
      <button
        nz-button
        [type]="item.type || 'button'"
        [formlyAttributes]="{ props: item }"
        [nzBlock]="item.nzBlock"
        [nzDanger]="item.nzDanger"
        [nzGhost]="item.nzGhost"
        [nzSize]="item.nzSize || 'default'"
        [nzLoading]="item.nzLoading"
        [nzSearch]="item.nzSearch"
        [nzShape]="item.nzShape"
        [nzType]="item.nzType"
        [nzWaveExtraNode]="item.nzWaveExtraNode"
      >
        <i *ngIf="item.beforeIcon" nz-icon [nzType]="item.beforeIcon"></i>
        <span *ngIf="item.text">{{ item.text }}</span>
        <formly-field [field]="child" *ngFor="let child of item.fieldGroup"></formly-field>
        <i *ngIf="item.afterIcon" nz-icon [nzType]="item.afterIcon"></i>
      </button>
    </ng-template>

    <ng-template #btnDropdownTemplate let-item>
      <button
        nz-button
        nz-dropdown
        #dropdownDirective="nzDropdown"
        [nzDropdownMenu]="item.dropdown.nzDropdownMenu"
        [nzDisabled]="item.dropdown.nzDisabled"
        [nzPlacement]="item.dropdown.nzPlacement || 'bottomLeft'"
        [nzBackdrop]="item.dropdown.nzBackdrop"
        [nzClickHide]="item.dropdown.nzClickHide !== false"
        [nzTrigger]="item.dropdown.nzTrigger || 'hover'"
        [nzMatchWidthElement]="item.dropdown.nzMatchWidthElement"
        [nzOverlayClassName]="item.dropdown.nzOverlayClassName"
        [nzOverlayStyle]="item.dropdown.nzOverlayStyle"
        (nzVisibleChange)="item.dropdown.nzVisibleChange?.($event, field, this)"
        [type]="item.type || 'button'"
        [formlyAttributes]="{ props: item }"
        [nzBlock]="item.nzBlock"
        [nzDanger]="item.nzDanger"
        [nzGhost]="item.nzGhost"
        [nzSize]="item.nzSize || 'default'"
        [nzLoading]="item.nzLoading"
        [nzSearch]="item.nzSearch"
        [nzShape]="item.nzShape"
        [nzType]="item.nzType"
        [nzWaveExtraNode]="item.nzWaveExtraNode"
      >
        <i *ngIf="item.beforeIcon" nz-icon [nzType]="item.beforeIcon"></i>
        <span *ngIf="item.text">{{ item.text }}</span>
        <formly-field [field]="child" *ngFor="let child of item.fieldGroup"></formly-field>
        <i *ngIf="item.afterIcon" nz-icon [nzType]="item.afterIcon"></i>
      </button>
    </ng-template>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i2.NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }, { kind: "component", type: i2.NzButtonGroupComponent, selector: "nz-button-group", inputs: ["nzSize"], exportAs: ["nzButtonGroup"] }, { kind: "directive", type: i3.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i4.NzWaveDirective, selector: "[nz-wave],button[nz-button]:not([nzType=\"link\"]):not([nzType=\"text\"])", inputs: ["nzWaveExtraNode"], exportAs: ["nzWave"] }, { kind: "directive", type: i5.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i6.FormlyField, selector: "formly-field", inputs: ["field"] }, { kind: "directive", type: i6.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { kind: "directive", type: i7.NzDropDownDirective, selector: "[nz-dropdown]", inputs: ["nzDropdownMenu", "nzTrigger", "nzMatchWidthElement", "nzBackdrop", "nzClickHide", "nzDisabled", "nzVisible", "nzOverlayClassName", "nzOverlayStyle", "nzPlacement"], outputs: ["nzVisibleChange"], exportAs: ["nzDropdown"] }, { kind: "directive", type: i7.NzDropdownButtonDirective, selector: "[nz-button][nz-dropdown]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldButtonGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-button-group',
                    template: `
    <nz-button-group [nzSize]="props.nzSize" [formlyAttributes]="field">
      <ng-container *ngFor="let item of props.buttons">
        <ng-container *ngIf="item.dropdown?.ref; else innerTemplateRef">
          <ng-container *ngTemplateOutlet="btnDropdownTemplate; context: { $implicit: item }"></ng-container>
        </ng-container>

        <ng-template #innerTemplateRef>
          <ng-container *ngTemplateOutlet="btnTemplate; context: { $implicit: item }"></ng-container>
        </ng-template>
      </ng-container>
    </nz-button-group>

    <ng-template #btnTemplate let-item>
      <button
        nz-button
        [type]="item.type || 'button'"
        [formlyAttributes]="{ props: item }"
        [nzBlock]="item.nzBlock"
        [nzDanger]="item.nzDanger"
        [nzGhost]="item.nzGhost"
        [nzSize]="item.nzSize || 'default'"
        [nzLoading]="item.nzLoading"
        [nzSearch]="item.nzSearch"
        [nzShape]="item.nzShape"
        [nzType]="item.nzType"
        [nzWaveExtraNode]="item.nzWaveExtraNode"
      >
        <i *ngIf="item.beforeIcon" nz-icon [nzType]="item.beforeIcon"></i>
        <span *ngIf="item.text">{{ item.text }}</span>
        <formly-field [field]="child" *ngFor="let child of item.fieldGroup"></formly-field>
        <i *ngIf="item.afterIcon" nz-icon [nzType]="item.afterIcon"></i>
      </button>
    </ng-template>

    <ng-template #btnDropdownTemplate let-item>
      <button
        nz-button
        nz-dropdown
        #dropdownDirective="nzDropdown"
        [nzDropdownMenu]="item.dropdown.nzDropdownMenu"
        [nzDisabled]="item.dropdown.nzDisabled"
        [nzPlacement]="item.dropdown.nzPlacement || 'bottomLeft'"
        [nzBackdrop]="item.dropdown.nzBackdrop"
        [nzClickHide]="item.dropdown.nzClickHide !== false"
        [nzTrigger]="item.dropdown.nzTrigger || 'hover'"
        [nzMatchWidthElement]="item.dropdown.nzMatchWidthElement"
        [nzOverlayClassName]="item.dropdown.nzOverlayClassName"
        [nzOverlayStyle]="item.dropdown.nzOverlayStyle"
        (nzVisibleChange)="item.dropdown.nzVisibleChange?.($event, field, this)"
        [type]="item.type || 'button'"
        [formlyAttributes]="{ props: item }"
        [nzBlock]="item.nzBlock"
        [nzDanger]="item.nzDanger"
        [nzGhost]="item.nzGhost"
        [nzSize]="item.nzSize || 'default'"
        [nzLoading]="item.nzLoading"
        [nzSearch]="item.nzSearch"
        [nzShape]="item.nzShape"
        [nzType]="item.nzType"
        [nzWaveExtraNode]="item.nzWaveExtraNode"
      >
        <i *ngIf="item.beforeIcon" nz-icon [nzType]="item.beforeIcon"></i>
        <span *ngIf="item.text">{{ item.text }}</span>
        <formly-field [field]="child" *ngFor="let child of item.fieldGroup"></formly-field>
        <i *ngIf="item.afterIcon" nz-icon [nzType]="item.afterIcon"></i>
      </button>
    </ng-template>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { dropdownDirectives: [{
                type: ViewChildren,
                args: ['dropdownDirective', { read: NzDropDownDirective }]
            }] } });

const COMPONENT = FormlyFieldButtonGroupComponent;
class FormlyNzButtonGroupModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzButtonGroupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzButtonGroupModule, declarations: [FormlyFieldButtonGroupComponent], imports: [CommonModule,
            NzButtonModule,
            NzIconModule, i6.FormlyModule, NzDropDownModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzButtonGroupModule, imports: [CommonModule,
            NzButtonModule,
            NzIconModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'button-group',
                        component: COMPONENT
                    }
                ]
            }),
            NzDropDownModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzButtonGroupModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        NzButtonModule,
                        NzIconModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'button-group',
                                    component: COMPONENT
                                }
                            ]
                        }),
                        NzDropDownModule
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldButtonGroupComponent, FormlyNzButtonGroupModule };
//# sourceMappingURL=freezesoul-nz-formly-button-group.mjs.map
