import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWrapperComponent } from './card-wrapper.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { FormlyModule } from '@ngx-formly/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
const COMPONENT = CardWrapperComponent;
export class FormlyNzCardWrapperModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzCardWrapperModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzCardWrapperModule, declarations: [CardWrapperComponent], imports: [CommonModule,
            NzCardModule, i1.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzCardWrapperModule, imports: [CommonModule,
            NzCardModule,
            FormlyModule.forChild({
                wrappers: [
                    {
                        name: 'card-wrapper',
                        component: COMPONENT
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzCardWrapperModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        NzCardModule,
                        FormlyModule.forChild({
                            wrappers: [
                                {
                                    name: 'card-wrapper',
                                    component: COMPONENT
                                }
                            ]
                        })
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC13cmFwcGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9jYXJkLXdyYXBwZXIvY2FyZC13cmFwcGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFFaEQsTUFBTSxTQUFTLEdBQUcsb0JBQW9CLENBQUM7QUFpQnZDLE1BQU0sT0FBTyx5QkFBeUI7d0dBQXpCLHlCQUF5Qjt5R0FBekIseUJBQXlCLGlCQWpCcEIsb0JBQW9CLGFBS2xDLFlBQVk7WUFDWixZQUFZO3lHQVdILHlCQUF5QixZQVpsQyxZQUFZO1lBQ1osWUFBWTtZQUNaLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQ3BCLFFBQVEsRUFBRTtvQkFDUjt3QkFDRSxJQUFJLEVBQUUsY0FBYzt3QkFDcEIsU0FBUyxFQUFFLFNBQVM7cUJBQ3JCO2lCQUNGO2FBQ0YsQ0FBQzs7NEZBR08seUJBQXlCO2tCQWZyQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDekIsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixZQUFZLENBQUMsUUFBUSxDQUFDOzRCQUNwQixRQUFRLEVBQUU7Z0NBQ1I7b0NBQ0UsSUFBSSxFQUFFLGNBQWM7b0NBQ3BCLFNBQVMsRUFBRSxTQUFTO2lDQUNyQjs2QkFDRjt5QkFDRixDQUFDO3FCQUNIO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ2FyZFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuL2NhcmQtd3JhcHBlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOekNhcmRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NhcmQnO1xyXG5pbXBvcnQgeyBGb3JtbHlNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcclxuXHJcbmNvbnN0IENPTVBPTkVOVCA9IENhcmRXcmFwcGVyQ29tcG9uZW50O1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtDT01QT05FTlRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE56Q2FyZE1vZHVsZSxcclxuICAgIEZvcm1seU1vZHVsZS5mb3JDaGlsZCh7XHJcbiAgICAgIHdyYXBwZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ2NhcmQtd3JhcHBlcicsXHJcbiAgICAgICAgICBjb21wb25lbnQ6IENPTVBPTkVOVFxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSlcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtbHlOekNhcmRXcmFwcGVyTW9kdWxlIHt9XHJcbiJdfQ==