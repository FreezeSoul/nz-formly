import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NgxEchartsDirective } from 'ngx-echarts';
import * as i0 from "@angular/core";
import * as i1 from "ngx-echarts";
import * as i2 from "@ngx-formly/core";
import * as i3 from "@angular/common";
import * as i4 from "@freezesoul/nzx-antd/pipe";
export class FormlyFieldEchartsComponent extends FieldType {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNoYXJ0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvZWNoYXJ0cy9lY2hhcnRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sYUFBYSxDQUFDOzs7Ozs7QUEwRGxELE1BQU0sT0FBTywyQkFBNEIsU0FBUSxTQUFTO0lBQ1csUUFBUSxDQUF1QjtJQUN6RixjQUFjLEdBQUc7UUFDeEIsS0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUU7S0FDckUsQ0FBQztJQUVGLFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO3dHQVRVLDJCQUEyQjs0RkFBM0IsMkJBQTJCLHlJQUNSLG1CQUFtQixrRUF2RHZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtRFQ7OzRGQUdVLDJCQUEyQjtrQkF4RHZDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtRFQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzhCQUVvRSxRQUFRO3NCQUExRSxTQUFTO3VCQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XHJcbmltcG9ydCB7IE5neEVjaGFydHNEaXJlY3RpdmUgfSBmcm9tICduZ3gtZWNoYXJ0cyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWZvcm1seS1lY2hhcnRzJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdlxyXG4gICAgICBlY2hhcnRzXHJcbiAgICAgICNlY2hhcnRzPVwiZWNoYXJ0c1wiXHJcbiAgICAgIFtzdHlsZS5oZWlnaHRdPVwicHJvcHMuaGVpZ2h0XCJcclxuICAgICAgW3N0eWxlLndpZHRoXT1cInByb3BzLndpZHRoXCJcclxuICAgICAgW2xvYWRpbmddPVwicHJvcHMubG9hZGluZ1wiXHJcbiAgICAgIFt0aGVtZV09XCJwcm9wcy50aGVtZVwiXHJcbiAgICAgIFthdXRvUmVzaXplXT1cInByb3BzLmF1dG9SZXNpemVcIlxyXG4gICAgICBbbG9hZGluZ1R5cGVdPVwicHJvcHMubG9hZGluZ1R5cGVcIlxyXG4gICAgICBbaW5pdE9wdHNdPVwicHJvcHMuaW5pdE9wdHNcIlxyXG4gICAgICBbbG9hZGluZ09wdHNdPVwicHJvcHMubG9hZGluZ09wdHNcIlxyXG4gICAgICBbbWVyZ2VdPVwicHJvcHMubWVyZ2VcIlxyXG4gICAgICBbb3B0aW9uc109XCJwcm9wcy5vcHRpb25zIHwgdG9Bc3luYzogJGFueShwcm9wcykgfCBhc3luY1wiXHJcbiAgICAgIChjaGFydEluaXQpPVwicHJvcHMuY2hhcnRJbml0Py4oJGV2ZW50LCBmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAgICAgKGNoYXJ0Q2xpY2spPVwicHJvcHMuY2hhcnRDbGljaz8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIChjaGFydERibENsaWNrKT1cInByb3BzLmNoYXJ0RGJsQ2xpY2s/LigkZXZlbnQsIGZpZWxkLCBpbnN0YW5jZSlcIlxyXG4gICAgICAoY2hhcnRNb3VzZURvd24pPVwicHJvcHMuY2hhcnRNb3VzZURvd24/LigkZXZlbnQsIGZpZWxkLCBpbnN0YW5jZSlcIlxyXG4gICAgICAoY2hhcnRNb3VzZU1vdmUpPVwicHJvcHMuY2hhcnRNb3VzZU1vdmU/LigkZXZlbnQsIGZpZWxkLCBpbnN0YW5jZSlcIlxyXG4gICAgICAoY2hhcnRNb3VzZVVwKT1cInByb3BzLmNoYXJ0TW91c2VVcD8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIChjaGFydE1vdXNlT3Zlcik9XCJwcm9wcy5jaGFydE1vdXNlT3Zlcj8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIChjaGFydE1vdXNlT3V0KT1cInByb3BzLmNoYXJ0TW91c2VPdXQ/LigkZXZlbnQsIGZpZWxkLCBpbnN0YW5jZSlcIlxyXG4gICAgICAoY2hhcnRHbG9iYWxPdXQpPVwicHJvcHMuY2hhcnRHbG9iYWxPdXQ/LigkZXZlbnQsIGZpZWxkLCBpbnN0YW5jZSlcIlxyXG4gICAgICAoY2hhcnRDb250ZXh0TWVudSk9XCJwcm9wcy5jaGFydENvbnRleHRNZW51Py4oJGV2ZW50LCBmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAgICAgKGNoYXJ0TGVnZW5kU2VsZWN0Q2hhbmdlZCk9XCJwcm9wcy5jaGFydExlZ2VuZFNlbGVjdENoYW5nZWQ/LigkZXZlbnQsIGZpZWxkLCBpbnN0YW5jZSlcIlxyXG4gICAgICAoY2hhcnRMZWdlbmRTZWxlY3RlZCk9XCJwcm9wcy5jaGFydExlZ2VuZFNlbGVjdGVkPy4oJGV2ZW50LCBmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAgICAgKGNoYXJ0TGVnZW5kVW5zZWxlY3RlZCk9XCJwcm9wcy5jaGFydExlZ2VuZFVuc2VsZWN0ZWQ/LigkZXZlbnQsIGZpZWxkLCBpbnN0YW5jZSlcIlxyXG4gICAgICAoY2hhcnRMZWdlbmRTY3JvbGwpPVwicHJvcHMuY2hhcnRMZWdlbmRTY3JvbGw/LigkZXZlbnQsIGZpZWxkLCBpbnN0YW5jZSlcIlxyXG4gICAgICAoY2hhcnREYXRhWm9vbSk9XCJwcm9wcy5jaGFydERhdGFab29tPy4oJGV2ZW50LCBmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAgICAgKGNoYXJ0RGF0YVJhbmdlU2VsZWN0ZWQpPVwicHJvcHMuY2hhcnREYXRhUmFuZ2VTZWxlY3RlZD8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIChjaGFydFRpbWVsaW5lQ2hhbmdlZCk9XCJwcm9wcy5jaGFydFRpbWVsaW5lQ2hhbmdlZD8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIChjaGFydFRpbWVsaW5lUGxheUNoYW5nZWQpPVwicHJvcHMuY2hhcnRUaW1lbGluZVBsYXlDaGFuZ2VkPy4oJGV2ZW50LCBmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAgICAgKGNoYXJ0UmVzdG9yZSk9XCJwcm9wcy5jaGFydFJlc3RvcmU/LigkZXZlbnQsIGZpZWxkLCBpbnN0YW5jZSlcIlxyXG4gICAgICAoY2hhcnREYXRhVmlld0NoYW5nZWQpPVwicHJvcHMuY2hhcnREYXRhVmlld0NoYW5nZWQ/LigkZXZlbnQsIGZpZWxkLCBpbnN0YW5jZSlcIlxyXG4gICAgICAoY2hhcnRNYWdpY1R5cGVDaGFuZ2VkKT1cInByb3BzLmNoYXJ0TWFnaWNUeXBlQ2hhbmdlZD8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIChjaGFydFBpZVNlbGVjdENoYW5nZWQpPVwicHJvcHMuY2hhcnRQaWVTZWxlY3RDaGFuZ2VkPy4oJGV2ZW50LCBmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAgICAgKGNoYXJ0UGllU2VsZWN0ZWQpPVwicHJvcHMuY2hhcnRQaWVTZWxlY3RlZD8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIChjaGFydFBpZVVuc2VsZWN0ZWQpPVwicHJvcHMuY2hhcnRQaWVVbnNlbGVjdGVkPy4oJGV2ZW50LCBmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAgICAgKGNoYXJ0TWFwU2VsZWN0Q2hhbmdlZCk9XCJwcm9wcy5jaGFydE1hcFNlbGVjdENoYW5nZWQ/LigkZXZlbnQsIGZpZWxkLCBpbnN0YW5jZSlcIlxyXG4gICAgICAoY2hhcnRNYXBTZWxlY3RlZCk9XCJwcm9wcy5jaGFydE1hcFNlbGVjdGVkPy4oJGV2ZW50LCBmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAgICAgKGNoYXJ0TWFwVW5zZWxlY3RlZCk9XCJwcm9wcy5jaGFydE1hcFVuc2VsZWN0ZWQ/LigkZXZlbnQsIGZpZWxkLCBpbnN0YW5jZSlcIlxyXG4gICAgICAoY2hhcnRBeGlzQXJlYVNlbGVjdGVkKT1cInByb3BzLmNoYXJ0QXhpc0FyZWFTZWxlY3RlZD8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIChjaGFydEZvY3VzTm9kZUFkamFjZW5jeSk9XCJwcm9wcy5jaGFydEZvY3VzTm9kZUFkamFjZW5jeT8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIChjaGFydFVuZm9jdXNOb2RlQWRqYWNlbmN5KT1cInByb3BzLmNoYXJ0VW5mb2N1c05vZGVBZGphY2VuY3k/LigkZXZlbnQsIGZpZWxkLCBpbnN0YW5jZSlcIlxyXG4gICAgICAoY2hhcnRCcnVzaCk9XCJwcm9wcy5jaGFydEJydXNoPy4oJGV2ZW50LCBmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAgICAgKGNoYXJ0QnJ1c2hFbmQpPVwicHJvcHMuY2hhcnRCcnVzaEVuZD8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIChjaGFydEJydXNoU2VsZWN0ZWQpPVwicHJvcHMuY2hhcnRCcnVzaFNlbGVjdGVkPy4oJGV2ZW50LCBmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAgICAgKGNoYXJ0UmVuZGVyZWQpPVwicHJvcHMuY2hhcnRSZW5kZXJlZD8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIChjaGFydEZpbmlzaGVkKT1cInByb3BzLmNoYXJ0RmluaXNoZWQ/LigkZXZlbnQsIGZpZWxkLCBpbnN0YW5jZSlcIlxyXG4gICAgICBbZm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiXHJcbiAgICA+PC9kaXY+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybWx5RmllbGRFY2hhcnRzQ29tcG9uZW50IGV4dGVuZHMgRmllbGRUeXBlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKCdlY2hhcnRzJywgeyByZWFkOiBOZ3hFY2hhcnRzRGlyZWN0aXZlLCBzdGF0aWM6IHRydWUgfSkgaW5zdGFuY2UhOiBOZ3hFY2hhcnRzRGlyZWN0aXZlO1xyXG4gIG92ZXJyaWRlIGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgcHJvcHM6IHsgYXV0b1Jlc2l6ZTogdHJ1ZSwgbG9hZGluZ1R5cGU6ICdkZWZhdWx0JywgaGVpZ2h0OiAnNDAwcHgnIH1cclxuICB9O1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucHJvcHMuaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlO1xyXG4gICAgdGhpcy5wcm9wcy5pbml0Py4odGhpcy5pbnN0YW5jZSwgdGhpcyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==