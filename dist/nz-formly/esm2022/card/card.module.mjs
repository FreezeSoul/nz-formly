import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldCardComponent } from './card.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { FormlyModule } from '@ngx-formly/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
const COMPONENT = FormlyFieldCardComponent;
export class FormlyNzCardModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzCardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzCardModule, declarations: [FormlyFieldCardComponent], imports: [CommonModule,
            NzCardModule,
            NzOutletModule, i1.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzCardModule, imports: [CommonModule,
            NzCardModule,
            NzOutletModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'card',
                        component: COMPONENT
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzCardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        NzCardModule,
                        NzOutletModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'card',
                                    component: COMPONENT
                                }
                            ]
                        })
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvY2FyZC9jYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBRTNELE1BQU0sU0FBUyxHQUFHLHdCQUF3QixDQUFDO0FBa0IzQyxNQUFNLE9BQU8sa0JBQWtCO3dHQUFsQixrQkFBa0I7eUdBQWxCLGtCQUFrQixpQkFsQmIsd0JBQXdCLGFBS3RDLFlBQVk7WUFDWixZQUFZO1lBQ1osY0FBYzt5R0FXTCxrQkFBa0IsWUFiM0IsWUFBWTtZQUNaLFlBQVk7WUFDWixjQUFjO1lBQ2QsWUFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDcEIsS0FBSyxFQUFFO29CQUNMO3dCQUNFLElBQUksRUFBRSxNQUFNO3dCQUNaLFNBQVMsRUFBRSxTQUFTO3FCQUNyQjtpQkFDRjthQUNGLENBQUM7OzRGQUdPLGtCQUFrQjtrQkFoQjlCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUN6QixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGNBQWM7d0JBQ2QsWUFBWSxDQUFDLFFBQVEsQ0FBQzs0QkFDcEIsS0FBSyxFQUFFO2dDQUNMO29DQUNFLElBQUksRUFBRSxNQUFNO29DQUNaLFNBQVMsRUFBRSxTQUFTO2lDQUNyQjs2QkFDRjt5QkFDRixDQUFDO3FCQUNIO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybWx5RmllbGRDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56Q2FyZE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY2FyZCc7XHJcbmltcG9ydCB7IEZvcm1seU1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xyXG5pbXBvcnQgeyBOek91dGxldE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9vdXRsZXQnO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UID0gRm9ybWx5RmllbGRDYXJkQ29tcG9uZW50O1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtDT01QT05FTlRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE56Q2FyZE1vZHVsZSxcclxuICAgIE56T3V0bGV0TW9kdWxlLFxyXG4gICAgRm9ybWx5TW9kdWxlLmZvckNoaWxkKHtcclxuICAgICAgdHlwZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAnY2FyZCcsXHJcbiAgICAgICAgICBjb21wb25lbnQ6IENPTVBPTkVOVFxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSlcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtbHlOekNhcmRNb2R1bGUge31cclxuIl19