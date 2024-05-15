import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ViewChild, NgModule } from '@angular/core';
import * as i2 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i1 from 'ngx-echarts';
import { NgxEchartsDirective, NgxEchartsModule } from 'ngx-echarts';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i4 from '@freezesoul/nzx-antd/pipe';
import { NzxPipeModule } from '@freezesoul/nzx-antd/pipe';

class FormlyFieldEchartsComponent extends FieldType {
    instance;
    defaultOptions = {
        props: { autoResize: true, loadingType: 'default', height: '400px' }
    };
    ngOnInit() {
        this.props.instance = this.instance;
        this.props.init?.(this.instance, this);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldEchartsComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldEchartsComponent, selector: "nz-formly-echarts", viewQueries: [{ propertyName: "instance", first: true, predicate: ["echarts"], descendants: true, read: NgxEchartsDirective, static: true }], usesInheritance: true, ngImport: i0, template: `
    <div
      echarts
      #echarts="echarts"
      [style.height]="props.height"
      [style.width]="props.width"
      [loading]="props.loading"
      [theme]="props.theme"
      [autoResize]="props.autoResize"
      [loadingType]="props.loadingType"
      [initOpts]="props.initOpts"
      [loadingOpts]="props.loadingOpts"
      [merge]="props.merge"
      [options]="props.options | toAsync: $any(props) | async"
      (chartInit)="props.chartInit?.($event, field, instance)"
      (chartClick)="props.chartClick?.($event, field, instance)"
      (chartDblClick)="props.chartDblClick?.($event, field, instance)"
      (chartMouseDown)="props.chartMouseDown?.($event, field, instance)"
      (chartMouseMove)="props.chartMouseMove?.($event, field, instance)"
      (chartMouseUp)="props.chartMouseUp?.($event, field, instance)"
      (chartMouseOver)="props.chartMouseOver?.($event, field, instance)"
      (chartMouseOut)="props.chartMouseOut?.($event, field, instance)"
      (chartGlobalOut)="props.chartGlobalOut?.($event, field, instance)"
      (chartContextMenu)="props.chartContextMenu?.($event, field, instance)"
      (chartLegendSelectChanged)="props.chartLegendSelectChanged?.($event, field, instance)"
      (chartLegendSelected)="props.chartLegendSelected?.($event, field, instance)"
      (chartLegendUnselected)="props.chartLegendUnselected?.($event, field, instance)"
      (chartLegendScroll)="props.chartLegendScroll?.($event, field, instance)"
      (chartDataZoom)="props.chartDataZoom?.($event, field, instance)"
      (chartDataRangeSelected)="props.chartDataRangeSelected?.($event, field, instance)"
      (chartTimelineChanged)="props.chartTimelineChanged?.($event, field, instance)"
      (chartTimelinePlayChanged)="props.chartTimelinePlayChanged?.($event, field, instance)"
      (chartRestore)="props.chartRestore?.($event, field, instance)"
      (chartDataViewChanged)="props.chartDataViewChanged?.($event, field, instance)"
      (chartMagicTypeChanged)="props.chartMagicTypeChanged?.($event, field, instance)"
      (chartPieSelectChanged)="props.chartPieSelectChanged?.($event, field, instance)"
      (chartPieSelected)="props.chartPieSelected?.($event, field, instance)"
      (chartPieUnselected)="props.chartPieUnselected?.($event, field, instance)"
      (chartMapSelectChanged)="props.chartMapSelectChanged?.($event, field, instance)"
      (chartMapSelected)="props.chartMapSelected?.($event, field, instance)"
      (chartMapUnselected)="props.chartMapUnselected?.($event, field, instance)"
      (chartAxisAreaSelected)="props.chartAxisAreaSelected?.($event, field, instance)"
      (chartFocusNodeAdjacency)="props.chartFocusNodeAdjacency?.($event, field, instance)"
      (chartUnfocusNodeAdjacency)="props.chartUnfocusNodeAdjacency?.($event, field, instance)"
      (chartBrush)="props.chartBrush?.($event, field, instance)"
      (chartBrushEnd)="props.chartBrushEnd?.($event, field, instance)"
      (chartBrushSelected)="props.chartBrushSelected?.($event, field, instance)"
      (chartRendered)="props.chartRendered?.($event, field, instance)"
      (chartFinished)="props.chartFinished?.($event, field, instance)"
      [formlyAttributes]="field"
    ></div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "initOpts", "merge", "autoResize", "loading", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartHighlight", "chartDownplay", "chartSelectChanged", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendLegendSelectAll", "chartLegendLegendInverseSelect", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartGraphRoam", "chartGeoRoam", "chartTreeRoam", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartGeoSelectChanged", "chartGeoSelected", "chartGeoUnselected", "chartAxisAreaSelected", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartGlobalCursorTaken", "chartRendered", "chartFinished"], exportAs: ["echarts"] }, { kind: "directive", type: i2.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { kind: "pipe", type: i3.AsyncPipe, name: "async" }, { kind: "pipe", type: i4.ToAsyncPipe, name: "toAsync" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldEchartsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-echarts',
                    template: `
    <div
      echarts
      #echarts="echarts"
      [style.height]="props.height"
      [style.width]="props.width"
      [loading]="props.loading"
      [theme]="props.theme"
      [autoResize]="props.autoResize"
      [loadingType]="props.loadingType"
      [initOpts]="props.initOpts"
      [loadingOpts]="props.loadingOpts"
      [merge]="props.merge"
      [options]="props.options | toAsync: $any(props) | async"
      (chartInit)="props.chartInit?.($event, field, instance)"
      (chartClick)="props.chartClick?.($event, field, instance)"
      (chartDblClick)="props.chartDblClick?.($event, field, instance)"
      (chartMouseDown)="props.chartMouseDown?.($event, field, instance)"
      (chartMouseMove)="props.chartMouseMove?.($event, field, instance)"
      (chartMouseUp)="props.chartMouseUp?.($event, field, instance)"
      (chartMouseOver)="props.chartMouseOver?.($event, field, instance)"
      (chartMouseOut)="props.chartMouseOut?.($event, field, instance)"
      (chartGlobalOut)="props.chartGlobalOut?.($event, field, instance)"
      (chartContextMenu)="props.chartContextMenu?.($event, field, instance)"
      (chartLegendSelectChanged)="props.chartLegendSelectChanged?.($event, field, instance)"
      (chartLegendSelected)="props.chartLegendSelected?.($event, field, instance)"
      (chartLegendUnselected)="props.chartLegendUnselected?.($event, field, instance)"
      (chartLegendScroll)="props.chartLegendScroll?.($event, field, instance)"
      (chartDataZoom)="props.chartDataZoom?.($event, field, instance)"
      (chartDataRangeSelected)="props.chartDataRangeSelected?.($event, field, instance)"
      (chartTimelineChanged)="props.chartTimelineChanged?.($event, field, instance)"
      (chartTimelinePlayChanged)="props.chartTimelinePlayChanged?.($event, field, instance)"
      (chartRestore)="props.chartRestore?.($event, field, instance)"
      (chartDataViewChanged)="props.chartDataViewChanged?.($event, field, instance)"
      (chartMagicTypeChanged)="props.chartMagicTypeChanged?.($event, field, instance)"
      (chartPieSelectChanged)="props.chartPieSelectChanged?.($event, field, instance)"
      (chartPieSelected)="props.chartPieSelected?.($event, field, instance)"
      (chartPieUnselected)="props.chartPieUnselected?.($event, field, instance)"
      (chartMapSelectChanged)="props.chartMapSelectChanged?.($event, field, instance)"
      (chartMapSelected)="props.chartMapSelected?.($event, field, instance)"
      (chartMapUnselected)="props.chartMapUnselected?.($event, field, instance)"
      (chartAxisAreaSelected)="props.chartAxisAreaSelected?.($event, field, instance)"
      (chartFocusNodeAdjacency)="props.chartFocusNodeAdjacency?.($event, field, instance)"
      (chartUnfocusNodeAdjacency)="props.chartUnfocusNodeAdjacency?.($event, field, instance)"
      (chartBrush)="props.chartBrush?.($event, field, instance)"
      (chartBrushEnd)="props.chartBrushEnd?.($event, field, instance)"
      (chartBrushSelected)="props.chartBrushSelected?.($event, field, instance)"
      (chartRendered)="props.chartRendered?.($event, field, instance)"
      (chartFinished)="props.chartFinished?.($event, field, instance)"
      [formlyAttributes]="field"
    ></div>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], propDecorators: { instance: [{
                type: ViewChild,
                args: ['echarts', { read: NgxEchartsDirective, static: true }]
            }] } });

const COMPONENT = FormlyFieldEchartsComponent;
class FormlyEchartsModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyEchartsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyEchartsModule, declarations: [FormlyFieldEchartsComponent], imports: [CommonModule, i1.NgxEchartsModule, i2.FormlyModule, NzxPipeModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyEchartsModule, imports: [CommonModule,
            NgxEchartsModule.forRoot({ echarts: () => import('echarts') }),
            FormlyModule.forChild({
                types: [
                    {
                        name: 'echarts',
                        component: COMPONENT
                    }
                ]
            }),
            NzxPipeModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyEchartsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        NgxEchartsModule.forRoot({ echarts: () => import('echarts') }),
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'echarts',
                                    component: COMPONENT
                                }
                            ]
                        }),
                        NzxPipeModule
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyEchartsModule, FormlyFieldEchartsComponent };
//# sourceMappingURL=freezesoul-nz-formly-echarts.mjs.map
