import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { firstValueFrom, map, timer } from 'rxjs';
import { tap } from 'rxjs/operators';

import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { NzFormlyModule } from '@freezesoul/nz-formly';
import { FormlyNzButtonModule } from '@freezesoul/nz-formly/button';
import { FormlyCommonModule } from '@freezesoul/nz-formly/common';
import { FormlyNzFormFieldModule } from '@freezesoul/nz-formly/field-wrapper';
import { FormlyNzGridModule } from '@freezesoul/nz-formly/grid';
import { FormlyNzInputModule } from '@freezesoul/nz-formly/input';
import { FormlyNzRadioModule } from '@freezesoul/nz-formly/radio';
import { FormlyRefTemplateModule } from '@freezesoul/nz-formly/ref-template';
import { FormlyNzSelectModule } from '@freezesoul/nz-formly/select';
import { FormlyNzTreeSelectModule } from '@freezesoul/nz-formly/tree-select';
import { NzxDirectiveModule } from '@freezesoul/nzx-antd/directive';
import { NzxHttpInterceptorModule } from '@freezesoul/nzx-antd/http-interceptor';
import { NzxLayoutPageModule } from '@freezesoul/nzx-antd/layout-page';
import { NzxPipeModule } from '@freezesoul/nzx-antd/pipe';
import { NzxColumn, NzxTableComponent, NzxTableModule } from '@freezesoul/nzx-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTreeModule } from 'ng-zorro-antd/tree';

import { MenuData } from './menu-data';
import { NzxUtils } from '@freezesoul/nzx-antd/util';
import { NzTreeSelectComponent } from 'ng-zorro-antd/tree-select';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NzxLayoutPageModule,
    ReactiveFormsModule,
    NzFormlyModule,
    FormlyNzInputModule,
    FormlyNzFormFieldModule,
    FormlyNzGridModule,
    FormlyNzButtonModule,
    FormlyNzSelectModule,
    FormlyNzTreeSelectModule,
    FormlyNzRadioModule,
    FormlyModule,
    NzFormModule,
    NzButtonModule,
    NzSpaceModule,
    NzCardModule,
    NzInputModule,
    NzTreeModule,
    FormsModule,
    NzxTableModule,
    NzxDirectiveModule,
    NzDividerModule,
    NzxPipeModule,
    NzIconModule,
    NzDropDownModule,
    NzTagModule,
    NzxHttpInterceptorModule,
    FormlyCommonModule,
    NzTreeSelectComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  nodes = timer(1000).pipe(
    map(() => [
      {
        title: '父节点 1',
        key: '100',
        children: [
          {
            title: '测试1001',
            key: '1001',
            children: [
              { title: '子节点 1-0-0', key: '10010', isLeaf: true },
              { title: '子节点 1-0-1', key: '10011', isLeaf: true }
            ]
          },
          {
            title: '父节点 1-1',
            key: '1002',
            children: [{ title: '子节点 1-1-0', key: '10020', isLeaf: true }]
          }
        ]
      }
    ])
  );
  menus$ = timer(1000).pipe(
    map(() => MenuData),
    map(list => {
      const nodes = [...list];
      NzxUtils.forEachTree(nodes, node => {
        if (node.children) {
          node.children = [...node.children];
        }

        node['title'] = node.name;
        node['key'] = node.id;
        if (node.menuType === 'D') {
          return true;
        }
        if (node.menuType === 'M') {
          node['isLeaf'] = true;
          node.children = [];
          return true;
        }
        return false;
      });

      return nodes;
    })
  );
  modalForm = new FormGroup({});
  modalModel: Record<string, any> = {};
  modalFields: FormlyFieldConfig[] = [];
  value = '';

  ngOnInit() {
    const model: Record<string, any> = {};
    this.modalFields = [
      {
        type: 'tree-select',
        key: 'pid',
        props: {
          label: '上级菜单',
          nzDefaultExpandAll: true,
          nzAllowClear: true,
          nzShowSearch: true,
          nzHideUnMatched: true,
          options: this.menus$.pipe(
            map(list => {
              const nodes = [...list];
              if (model.menuType === 'D') {
                const dNode = nodes.find(v => v.id === model.id);
                if (dNode) {
                  dNode['isLeaf'] = true;
                  dNode.children = [];
                }
              }
              NzxUtils.forEachTree(nodes, node => {
                if (node.children) {
                  node.children = [...node.children];
                }

                if (node.id === model.id) {
                  node['disabled'] = true;
                }

                node['title'] = node.name;
                node['key'] = node.id;
                if (node.menuType === 'D') {
                  return true;
                }
                if (node.menuType === 'M') {
                  node['isLeaf'] = true;
                  node.children = [];
                  return true;
                }
                return false;
              });

              return nodes;
            })
          )
        }
      }
    ];
  }
}
