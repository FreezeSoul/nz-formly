import { ChangeDetectionStrategy, Component, ViewChildren } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NzDropDownDirective } from 'ng-zorro-antd/dropdown';
import { Subject } from 'rxjs';
import { getRootFiled } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/button";
import * as i3 from "ng-zorro-antd/core/transition-patch";
import * as i4 from "ng-zorro-antd/core/wave";
import * as i5 from "ng-zorro-antd/icon";
import * as i6 from "@ngx-formly/core";
import * as i7 from "ng-zorro-antd/dropdown";
export class FormlyFieldButtonGroupComponent extends FieldType {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9idXR0b24tZ3JvdXAvYnV0dG9uLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLHVCQUF1QixFQUFFLFNBQVMsRUFBd0IsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RILE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7O0FBMkU1RCxNQUFNLE9BQU8sK0JBQWdDLFNBQVEsU0FBUztJQUNNLGtCQUFrQixDQUFrQztJQUN0SCxRQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQUN0QixjQUFjLEdBQUc7UUFDeEIsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO0tBQzFDLENBQUM7SUFFRjtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELGNBQWM7UUFDWixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDdkIsT0FBTztTQUNSO1FBRUQsTUFBTSxTQUFTLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdEIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQVEsRUFBRSxDQUFTLEVBQUUsRUFBRTtZQUMxQyxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUUsY0FBYyxFQUFFO2dCQUNoQyxPQUFPO2FBQ1I7WUFDRCxNQUFNLGFBQWEsR0FBRyxTQUFTLENBQUMsR0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFJLGFBQWEsSUFBSSxXQUFXLEVBQUU7Z0JBQ2hDLE1BQU0sUUFBUSxHQUFHLGFBQWEsQ0FBQyxLQUFNLENBQUMsUUFBUSxDQUFDO2dCQUMvQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7Z0JBQ3ZDLFdBQVcsQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDO2dCQUN0QyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDL0I7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7d0dBL0NVLCtCQUErQjs0RkFBL0IsK0JBQStCLHFKQUNDLG1CQUFtQixvREF4RXBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9FVDs7NEZBR1UsK0JBQStCO2tCQXpFM0MsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0VUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDswRUFFbUUsa0JBQWtCO3NCQUFuRixZQUFZO3VCQUFDLG1CQUFtQixFQUFFLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25EZXN0cm95LCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcclxuaW1wb3J0IHsgTnpEcm9wRG93bkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJvcGRvd24nO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGdldFJvb3RGaWxlZCB9IGZyb20gJ0BmcmVlemVzb3VsL256LWZvcm1seS9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1mb3JtbHktYnV0dG9uLWdyb3VwJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG56LWJ1dHRvbi1ncm91cCBbbnpTaXplXT1cInByb3BzLm56U2l6ZVwiIFtmb3JtbHlBdHRyaWJ1dGVzXT1cImZpZWxkXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgcHJvcHMuYnV0dG9uc1wiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLmRyb3Bkb3duPy5yZWY7IGVsc2UgaW5uZXJUZW1wbGF0ZVJlZlwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImJ0bkRyb3Bkb3duVGVtcGxhdGU7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBpdGVtIH1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICNpbm5lclRlbXBsYXRlUmVmPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImJ0blRlbXBsYXRlOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogaXRlbSB9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L256LWJ1dHRvbi1ncm91cD5cclxuXHJcbiAgICA8bmctdGVtcGxhdGUgI2J0blRlbXBsYXRlIGxldC1pdGVtPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgbnotYnV0dG9uXHJcbiAgICAgICAgW3R5cGVdPVwiaXRlbS50eXBlIHx8ICdidXR0b24nXCJcclxuICAgICAgICBbZm9ybWx5QXR0cmlidXRlc109XCJ7IHByb3BzOiBpdGVtIH1cIlxyXG4gICAgICAgIFtuekJsb2NrXT1cIml0ZW0ubnpCbG9ja1wiXHJcbiAgICAgICAgW256RGFuZ2VyXT1cIml0ZW0ubnpEYW5nZXJcIlxyXG4gICAgICAgIFtuekdob3N0XT1cIml0ZW0ubnpHaG9zdFwiXHJcbiAgICAgICAgW256U2l6ZV09XCJpdGVtLm56U2l6ZSB8fCAnZGVmYXVsdCdcIlxyXG4gICAgICAgIFtuekxvYWRpbmddPVwiaXRlbS5uekxvYWRpbmdcIlxyXG4gICAgICAgIFtuelNlYXJjaF09XCJpdGVtLm56U2VhcmNoXCJcclxuICAgICAgICBbbnpTaGFwZV09XCJpdGVtLm56U2hhcGVcIlxyXG4gICAgICAgIFtuelR5cGVdPVwiaXRlbS5uelR5cGVcIlxyXG4gICAgICAgIFtueldhdmVFeHRyYU5vZGVdPVwiaXRlbS5ueldhdmVFeHRyYU5vZGVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGkgKm5nSWY9XCJpdGVtLmJlZm9yZUljb25cIiBuei1pY29uIFtuelR5cGVdPVwiaXRlbS5iZWZvcmVJY29uXCI+PC9pPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwiaXRlbS50ZXh0XCI+e3sgaXRlbS50ZXh0IH19PC9zcGFuPlxyXG4gICAgICAgIDxmb3JtbHktZmllbGQgW2ZpZWxkXT1cImNoaWxkXCIgKm5nRm9yPVwibGV0IGNoaWxkIG9mIGl0ZW0uZmllbGRHcm91cFwiPjwvZm9ybWx5LWZpZWxkPlxyXG4gICAgICAgIDxpICpuZ0lmPVwiaXRlbS5hZnRlckljb25cIiBuei1pY29uIFtuelR5cGVdPVwiaXRlbS5hZnRlckljb25cIj48L2k+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICA8bmctdGVtcGxhdGUgI2J0bkRyb3Bkb3duVGVtcGxhdGUgbGV0LWl0ZW0+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBuei1idXR0b25cclxuICAgICAgICBuei1kcm9wZG93blxyXG4gICAgICAgICNkcm9wZG93bkRpcmVjdGl2ZT1cIm56RHJvcGRvd25cIlxyXG4gICAgICAgIFtuekRyb3Bkb3duTWVudV09XCJpdGVtLmRyb3Bkb3duLm56RHJvcGRvd25NZW51XCJcclxuICAgICAgICBbbnpEaXNhYmxlZF09XCJpdGVtLmRyb3Bkb3duLm56RGlzYWJsZWRcIlxyXG4gICAgICAgIFtuelBsYWNlbWVudF09XCJpdGVtLmRyb3Bkb3duLm56UGxhY2VtZW50IHx8ICdib3R0b21MZWZ0J1wiXHJcbiAgICAgICAgW256QmFja2Ryb3BdPVwiaXRlbS5kcm9wZG93bi5uekJhY2tkcm9wXCJcclxuICAgICAgICBbbnpDbGlja0hpZGVdPVwiaXRlbS5kcm9wZG93bi5uekNsaWNrSGlkZSAhPT0gZmFsc2VcIlxyXG4gICAgICAgIFtuelRyaWdnZXJdPVwiaXRlbS5kcm9wZG93bi5uelRyaWdnZXIgfHwgJ2hvdmVyJ1wiXHJcbiAgICAgICAgW256TWF0Y2hXaWR0aEVsZW1lbnRdPVwiaXRlbS5kcm9wZG93bi5uek1hdGNoV2lkdGhFbGVtZW50XCJcclxuICAgICAgICBbbnpPdmVybGF5Q2xhc3NOYW1lXT1cIml0ZW0uZHJvcGRvd24ubnpPdmVybGF5Q2xhc3NOYW1lXCJcclxuICAgICAgICBbbnpPdmVybGF5U3R5bGVdPVwiaXRlbS5kcm9wZG93bi5uek92ZXJsYXlTdHlsZVwiXHJcbiAgICAgICAgKG56VmlzaWJsZUNoYW5nZSk9XCJpdGVtLmRyb3Bkb3duLm56VmlzaWJsZUNoYW5nZT8uKCRldmVudCwgZmllbGQsIHRoaXMpXCJcclxuICAgICAgICBbdHlwZV09XCJpdGVtLnR5cGUgfHwgJ2J1dHRvbidcIlxyXG4gICAgICAgIFtmb3JtbHlBdHRyaWJ1dGVzXT1cInsgcHJvcHM6IGl0ZW0gfVwiXHJcbiAgICAgICAgW256QmxvY2tdPVwiaXRlbS5uekJsb2NrXCJcclxuICAgICAgICBbbnpEYW5nZXJdPVwiaXRlbS5uekRhbmdlclwiXHJcbiAgICAgICAgW256R2hvc3RdPVwiaXRlbS5uekdob3N0XCJcclxuICAgICAgICBbbnpTaXplXT1cIml0ZW0ubnpTaXplIHx8ICdkZWZhdWx0J1wiXHJcbiAgICAgICAgW256TG9hZGluZ109XCJpdGVtLm56TG9hZGluZ1wiXHJcbiAgICAgICAgW256U2VhcmNoXT1cIml0ZW0ubnpTZWFyY2hcIlxyXG4gICAgICAgIFtuelNoYXBlXT1cIml0ZW0ubnpTaGFwZVwiXHJcbiAgICAgICAgW256VHlwZV09XCJpdGVtLm56VHlwZVwiXHJcbiAgICAgICAgW256V2F2ZUV4dHJhTm9kZV09XCJpdGVtLm56V2F2ZUV4dHJhTm9kZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8aSAqbmdJZj1cIml0ZW0uYmVmb3JlSWNvblwiIG56LWljb24gW256VHlwZV09XCJpdGVtLmJlZm9yZUljb25cIj48L2k+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJpdGVtLnRleHRcIj57eyBpdGVtLnRleHQgfX08L3NwYW4+XHJcbiAgICAgICAgPGZvcm1seS1maWVsZCBbZmllbGRdPVwiY2hpbGRcIiAqbmdGb3I9XCJsZXQgY2hpbGQgb2YgaXRlbS5maWVsZEdyb3VwXCI+PC9mb3JtbHktZmllbGQ+XHJcbiAgICAgICAgPGkgKm5nSWY9XCJpdGVtLmFmdGVySWNvblwiIG56LWljb24gW256VHlwZV09XCJpdGVtLmFmdGVySWNvblwiPjwvaT5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1seUZpZWxkQnV0dG9uR3JvdXBDb21wb25lbnQgZXh0ZW5kcyBGaWVsZFR5cGUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gIEBWaWV3Q2hpbGRyZW4oJ2Ryb3Bkb3duRGlyZWN0aXZlJywgeyByZWFkOiBOekRyb3BEb3duRGlyZWN0aXZlIH0pIGRyb3Bkb3duRGlyZWN0aXZlcyE6IFF1ZXJ5TGlzdDxOekRyb3BEb3duRGlyZWN0aXZlPjtcclxuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgb3ZlcnJpZGUgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBwcm9wczogeyBuelNpemU6ICdkZWZhdWx0JywgYnV0dG9uczogW10gfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZHJvcGRvd25DaGFuZ2UoKTtcclxuICAgIHRoaXMuZHJvcGRvd25EaXJlY3RpdmVzLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMuZHJvcGRvd25DaGFuZ2UoKSk7XHJcbiAgfVxyXG5cclxuICBkcm9wZG93bkNoYW5nZSgpIHtcclxuICAgIGNvbnN0IGRyb3Bkb3duQnRuID0gdGhpcy5wcm9wcy5idXR0b25zLmZpbHRlcigoYnRuOiBhbnkpID0+IGJ0bi5kcm9wZG93bj8ucmVmKTtcclxuICAgIGlmICghZHJvcGRvd25CdG4ubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByb290RmllbGQgPSBnZXRSb290RmlsZWQodGhpcy5maWVsZCk7XHJcbiAgICB0aGlzLnN1YmplY3REZXN0cm95KCk7XHJcblxyXG4gICAgZHJvcGRvd25CdG4uZm9yRWFjaCgoYnRuOiBhbnksIGk6IG51bWJlcikgPT4ge1xyXG4gICAgICBpZiAoYnRuLmRyb3Bkb3duPy5uekRyb3Bkb3duTWVudSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBkcm9wZG93bkZpZWxkID0gcm9vdEZpZWxkLmdldCEoYnRuLmRyb3Bkb3duLnJlZik7XHJcbiAgICAgIGNvbnN0IGRyb3Bkb3duRGlyID0gdGhpcy5kcm9wZG93bkRpcmVjdGl2ZXMuZ2V0KGkpO1xyXG4gICAgICBpZiAoZHJvcGRvd25GaWVsZCAmJiBkcm9wZG93bkRpcikge1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gZHJvcGRvd25GaWVsZC5wcm9wcyEuaW5zdGFuY2U7XHJcbiAgICAgICAgYnRuLmRyb3Bkb3duLm56RHJvcGRvd25NZW51ID0gaW5zdGFuY2U7XHJcbiAgICAgICAgZHJvcGRvd25EaXIubnpEcm9wZG93bk1lbnUgPSBpbnN0YW5jZTtcclxuICAgICAgICBkcm9wZG93bkRpci5uZ0FmdGVyVmlld0luaXQoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdWJqZWN0RGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnN1YmplY3REZXN0cm95KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==