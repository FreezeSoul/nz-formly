import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldInputComponent } from './input.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzxPipeModule } from '@freezesoul/nzx-antd/pipe';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
const COMPONENT = FormlyFieldInputComponent;
export class FormlyNzInputModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzInputModule, declarations: [FormlyFieldInputComponent], imports: [CommonModule,
            ReactiveFormsModule,
            NzInputModule,
            NzInputNumberModule,
            NzOutletModule,
            NzxPipeModule, i1.FormlyModule, NzAutocompleteModule,
            NzxPipeModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzInputModule, imports: [CommonModule,
            ReactiveFormsModule,
            NzInputModule,
            NzInputNumberModule,
            NzOutletModule,
            NzxPipeModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'input',
                        component: COMPONENT,
                        wrappers: ['field-wrapper']
                    },
                    {
                        name: 'number',
                        extends: 'input',
                        defaultOptions: {
                            props: {
                                type: 'number'
                            }
                        }
                    },
                    {
                        name: 'autocomplete',
                        extends: 'input',
                        defaultOptions: {
                            props: {
                                nzAutocomplete: true
                            }
                        }
                    }
                ]
            }),
            NzAutocompleteModule,
            NzxPipeModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzInputModule,
                        NzInputNumberModule,
                        NzOutletModule,
                        NzxPipeModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'input',
                                    component: COMPONENT,
                                    wrappers: ['field-wrapper']
                                },
                                {
                                    name: 'number',
                                    extends: 'input',
                                    defaultOptions: {
                                        props: {
                                            type: 'number'
                                        }
                                    }
                                },
                                {
                                    name: 'autocomplete',
                                    extends: 'input',
                                    defaultOptions: {
                                        props: {
                                            nzAutocomplete: true
                                        }
                                    }
                                }
                            ]
                        }),
                        NzAutocompleteModule,
                        NzxPipeModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbGliL2lucHV0L2lucHV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUVyRCxNQUFNLFNBQVMsR0FBRyx5QkFBeUIsQ0FBQztBQTBDNUMsTUFBTSxPQUFPLG1CQUFtQjt3R0FBbkIsbUJBQW1CO3lHQUFuQixtQkFBbUIsaUJBMUNkLHlCQUF5QixhQUt2QyxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsY0FBYztZQUNkLGFBQWEsbUJBNEJiLG9CQUFvQjtZQUNwQixhQUFhO3lHQUdKLG1CQUFtQixZQXJDNUIsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLGNBQWM7WUFDZCxhQUFhO1lBQ2IsWUFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDcEIsS0FBSyxFQUFFO29CQUNMO3dCQUNFLElBQUksRUFBRSxPQUFPO3dCQUNiLFNBQVMsRUFBRSxTQUFTO3dCQUNwQixRQUFRLEVBQUUsQ0FBQyxlQUFlLENBQUM7cUJBQzVCO29CQUNEO3dCQUNFLElBQUksRUFBRSxRQUFRO3dCQUNkLE9BQU8sRUFBRSxPQUFPO3dCQUNoQixjQUFjLEVBQUU7NEJBQ2QsS0FBSyxFQUFFO2dDQUNMLElBQUksRUFBRSxRQUFROzZCQUNmO3lCQUNGO3FCQUNGO29CQUNEO3dCQUNFLElBQUksRUFBRSxjQUFjO3dCQUNwQixPQUFPLEVBQUUsT0FBTzt3QkFDaEIsY0FBYyxFQUFFOzRCQUNkLEtBQUssRUFBRTtnQ0FDTCxjQUFjLEVBQUUsSUFBSTs2QkFDckI7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7YUFDRixDQUFDO1lBQ0Ysb0JBQW9CO1lBQ3BCLGFBQWE7OzRGQUdKLG1CQUFtQjtrQkF4Qy9CLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUN6QixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLGFBQWE7d0JBQ2IsbUJBQW1CO3dCQUNuQixjQUFjO3dCQUNkLGFBQWE7d0JBQ2IsWUFBWSxDQUFDLFFBQVEsQ0FBQzs0QkFDcEIsS0FBSyxFQUFFO2dDQUNMO29DQUNFLElBQUksRUFBRSxPQUFPO29DQUNiLFNBQVMsRUFBRSxTQUFTO29DQUNwQixRQUFRLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUNBQzVCO2dDQUNEO29DQUNFLElBQUksRUFBRSxRQUFRO29DQUNkLE9BQU8sRUFBRSxPQUFPO29DQUNoQixjQUFjLEVBQUU7d0NBQ2QsS0FBSyxFQUFFOzRDQUNMLElBQUksRUFBRSxRQUFRO3lDQUNmO3FDQUNGO2lDQUNGO2dDQUNEO29DQUNFLElBQUksRUFBRSxjQUFjO29DQUNwQixPQUFPLEVBQUUsT0FBTztvQ0FDaEIsY0FBYyxFQUFFO3dDQUNkLEtBQUssRUFBRTs0Q0FDTCxjQUFjLEVBQUUsSUFBSTt5Q0FDckI7cUNBQ0Y7aUNBQ0Y7NkJBQ0Y7eUJBQ0YsQ0FBQzt3QkFDRixvQkFBb0I7d0JBQ3BCLGFBQWE7cUJBQ2Q7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtbHlNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcclxuaW1wb3J0IHsgRm9ybWx5RmllbGRJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vaW5wdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpJbnB1dE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaW5wdXQnO1xyXG5pbXBvcnQgeyBOeklucHV0TnVtYmVyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbnB1dC1udW1iZXInO1xyXG5pbXBvcnQgeyBOek91dGxldE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9vdXRsZXQnO1xyXG5pbXBvcnQgeyBOekF1dG9jb21wbGV0ZU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvYXV0by1jb21wbGV0ZSc7XHJcbmltcG9ydCB7IE56eFBpcGVNb2R1bGUgfSBmcm9tICdAZnJlZXplc291bC9uengtYW50ZC9waXBlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmNvbnN0IENPTVBPTkVOVCA9IEZvcm1seUZpZWxkSW5wdXRDb21wb25lbnQ7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0NPTVBPTkVOVF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIE56SW5wdXRNb2R1bGUsXHJcbiAgICBOeklucHV0TnVtYmVyTW9kdWxlLFxyXG4gICAgTnpPdXRsZXRNb2R1bGUsXHJcbiAgICBOenhQaXBlTW9kdWxlLFxyXG4gICAgRm9ybWx5TW9kdWxlLmZvckNoaWxkKHtcclxuICAgICAgdHlwZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAnaW5wdXQnLFxyXG4gICAgICAgICAgY29tcG9uZW50OiBDT01QT05FTlQsXHJcbiAgICAgICAgICB3cmFwcGVyczogWydmaWVsZC13cmFwcGVyJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICdudW1iZXInLFxyXG4gICAgICAgICAgZXh0ZW5kczogJ2lucHV0JyxcclxuICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiB7XHJcbiAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ251bWJlcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ2F1dG9jb21wbGV0ZScsXHJcbiAgICAgICAgICBleHRlbmRzOiAnaW5wdXQnLFxyXG4gICAgICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICBuekF1dG9jb21wbGV0ZTogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9KSxcclxuICAgIE56QXV0b2NvbXBsZXRlTW9kdWxlLFxyXG4gICAgTnp4UGlwZU1vZHVsZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1seU56SW5wdXRNb2R1bGUge31cclxuIl19