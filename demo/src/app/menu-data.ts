export interface Menu {
  componentName?: string;
  desc?: string;
  icon?: string;
  id: string;
  isShow: 0 | 1;
  keepAlive: 0 | 1;
  name: string;
  permission?: string;
  pid?: string;
  sort: number;
  url?: string;
  menuType: 'M' | 'D' | 'B' | 'O' | 'I';
  children: Menu[];

  [key: string]: any;
}

export const MenuData = [
  {
    id: 'b1851d1b13594e71840103c11a37a669',
    name: '系统设置',
    pid: '0',
    isShow: 1,
    url: '/system',
    sort: 10,
    permission: null,
    desc: null,
    menuType: 'D',
    icon: 'setting',
    keepAlive: 0,
    componentName: '',
    openMode: '0',
    children: [
      {
        id: '39be13ef6f0745568c80bf35202ddb2b',
        name: '菜单管理',
        pid: 'b1851d1b13594e71840103c11a37a669',
        isShow: 1,
        url: '/main/system/menu',
        sort: 10,
        permission: null,
        desc: null,
        menuType: 'M',
        icon: 'menu',
        keepAlive: 1,
        componentName: '',
        openMode: '0',
        children: [
          {
            id: 'd7e5280a2a8f4fb3b9e2f4a3e3093a38',
            name: '保存',
            pid: '39be13ef6f0745568c80bf35202ddb2b',
            isShow: 0,
            url: null,
            sort: 10,
            permission: 'menu:save',
            desc: null,
            menuType: 'B',
            icon: '',
            keepAlive: 0,
            componentName: null,
            openMode: '0',
            children: []
          },
          {
            id: '833b204d5f2c402190bfca677421cfeb',
            name: '删除',
            pid: '39be13ef6f0745568c80bf35202ddb2b',
            isShow: 0,
            url: null,
            sort: 20,
            permission: 'menu:delete',
            desc: null,
            menuType: 'B',
            icon: '',
            keepAlive: 0,
            componentName: null,
            openMode: '0',
            children: []
          },
          {
            id: '414e5d31-fe05-4e69-9983-217c10b9740a',
            name: '查看',
            pid: '39be13ef6f0745568c80bf35202ddb2b',
            isShow: 0,
            url: null,
            sort: 30,
            permission: 'menu:view',
            desc: null,
            menuType: 'B',
            icon: '',
            keepAlive: 0,
            componentName: null,
            openMode: '0',
            children: []
          },
          {
            id: '4e0f340982ea477f9b66beca5f5d7218',
            name: '上移',
            pid: '39be13ef6f0745568c80bf35202ddb2b',
            isShow: 0,
            url: null,
            sort: 40,
            permission: 'menu:sort:up',
            desc: null,
            menuType: 'B',
            icon: '',
            keepAlive: 0,
            componentName: '',
            openMode: '0',
            children: []
          },
          {
            id: '91a9226d1c6c4634b70dc4e9866e89cb',
            name: '下移',
            pid: '39be13ef6f0745568c80bf35202ddb2b',
            isShow: 0,
            url: null,
            sort: 50,
            permission: 'menu:sort:down',
            desc: null,
            menuType: 'B',
            icon: '',
            keepAlive: 0,
            componentName: '',
            openMode: '0',
            children: []
          },
          {
            id: '98a47d57680f4759816028a035ccc7d3',
            name: '是否显示/缓存',
            pid: '39be13ef6f0745568c80bf35202ddb2b',
            isShow: 0,
            url: null,
            sort: 60,
            permission: 'menu:change',
            desc: null,
            menuType: 'B',
            icon: '',
            keepAlive: 0,
            componentName: '',
            openMode: '0',
            children: []
          }
        ]
      },
      {
        id: '6f3594d0-5445-41e1-a13c-890a57485036',
        name: '组织机构',
        pid: 'b1851d1b13594e71840103c11a37a669',
        isShow: 1,
        url: '/main/system/office',
        sort: 20,
        permission: null,
        desc: null,
        menuType: 'M',
        icon: 'apartment',
        keepAlive: 1,
        componentName: '',
        openMode: '0',
        children: [
          {
            id: '4526eb9c-4b7a-4945-bfa9-cddc01f36c22',
            name: '保存',
            pid: '6f3594d0-5445-41e1-a13c-890a57485036',
            isShow: 0,
            url: null,
            sort: 10,
            permission: 'office:save',
            desc: null,
            menuType: 'B',
            icon: '',
            keepAlive: 0,
            componentName: null,
            openMode: '0',
            children: []
          },
          {
            id: '6762231e-4f30-4a6b-a94e-b185e99ed608',
            name: '删除',
            pid: '6f3594d0-5445-41e1-a13c-890a57485036',
            isShow: 0,
            url: null,
            sort: 20,
            permission: 'office:delete',
            desc: null,
            menuType: 'B',
            icon: '',
            keepAlive: 0,
            componentName: null,
            openMode: '0',
            children: []
          },
          {
            id: 'd9c32f7ed4c841cbb37eaff2624385bb',
            name: '查看',
            pid: '6f3594d0-5445-41e1-a13c-890a57485036',
            isShow: 0,
            url: null,
            sort: 30,
            permission: 'office:view',
            desc: null,
            menuType: 'B',
            icon: null,
            keepAlive: 0,
            componentName: null,
            openMode: '0',
            children: []
          },
          {
            id: 'b5a77ce22eef40cba2eb1ca2794d9d8a',
            name: '用户列表',
            pid: '6f3594d0-5445-41e1-a13c-890a57485036',
            isShow: 0,
            url: null,
            sort: 40,
            permission: 'office:user:list',
            desc: null,
            menuType: 'B',
            icon: null,
            keepAlive: 0,
            componentName: null,
            openMode: '0',
            children: []
          },
          {
            id: '7c9ddcf803074f6c8b763517d37732a7',
            name: '上移',
            pid: '6f3594d0-5445-41e1-a13c-890a57485036',
            isShow: 0,
            url: null,
            sort: 50,
            permission: 'office:sort:up',
            desc: null,
            menuType: 'B',
            icon: '',
            keepAlive: 0,
            componentName: '',
            openMode: '0',
            children: []
          },
          {
            id: 'd790c401c3024332be8aee049af09030',
            name: '下移',
            pid: '6f3594d0-5445-41e1-a13c-890a57485036',
            isShow: 0,
            url: null,
            sort: 60,
            permission: 'office:sort:down',
            desc: null,
            menuType: 'B',
            icon: '',
            keepAlive: 0,
            componentName: '',
            openMode: '0',
            children: []
          }
        ]
      },
      {
        id: '8009eed4f46141e3aca939490d68786a',
        name: '区域管理',
        pid: 'b1851d1b13594e71840103c11a37a669',
        isShow: 0,
        url: '/main/system/area',
        sort: 30,
        permission: null,
        desc: null,
        menuType: 'M',
        icon: '',
        keepAlive: 0,
        componentName: '',
        openMode: '0',
        children: [
          {
            id: '1009eed4f46141e3aca939490d68786a',
            name: '按钮',
            pid: '8009eed4f46141e3aca939490d68786a',
            isShow: 0,
            url: null,
            sort: 30,
            permission: null,
            desc: null,
            menuType: 'B',
            icon: null,
            keepAlive: 0,
            componentName: '',
            openMode: '0',
            children: []
          }
        ]
      },
      {
        id: '8e9455740091486c914495cfb0c7faa5',
        name: '角色管理',
        pid: 'b1851d1b13594e71840103c11a37a669',
        isShow: 1,
        url: '/main/system/role',
        sort: 40,
        permission: null,
        desc: null,
        menuType: 'M',
        icon: 'safety-certificate',
        keepAlive: 1,
        componentName: '',
        openMode: '0',
        children: [
          {
            id: '94071254597d4da286bb8112ad93f4ff',
            name: '保存',
            pid: '8e9455740091486c914495cfb0c7faa5',
            isShow: 0,
            url: null,
            sort: 10,
            permission: 'role:save',
            desc: null,
            menuType: 'B',
            icon: '',
            keepAlive: 0,
            componentName: null,
            openMode: '0',
            children: []
          },
          {
            id: '684723f4226948aba1661292961c8f71',
            name: '删除',
            pid: '8e9455740091486c914495cfb0c7faa5',
            isShow: 0,
            url: null,
            sort: 20,
            permission: 'role:delete',
            desc: null,
            menuType: 'B',
            icon: '',
            keepAlive: 0,
            componentName: null,
            openMode: '0',
            children: []
          },
          {
            id: 'a5f2cb418ac348bca3d51b98958c4a80',
            name: '查看',
            pid: '8e9455740091486c914495cfb0c7faa5',
            isShow: 0,
            url: null,
            sort: 30,
            permission: 'role:view',
            desc: null,
            menuType: 'B',
            icon: null,
            keepAlive: 0,
            componentName: null,
            openMode: '0',
            children: []
          },
          {
            id: 'bf41ddc3ea314b158e21e4efc1ed5a25',
            name: '权限',
            pid: '8e9455740091486c914495cfb0c7faa5',
            isShow: 0,
            url: null,
            sort: 40,
            permission: 'role:permission',
            desc: null,
            menuType: 'B',
            icon: null,
            keepAlive: 0,
            componentName: null,
            openMode: '0',
            children: []
          },
          {
            id: 'ff7d37f87ab749f9836af74dbcdf033d',
            name: '用户列表',
            pid: '8e9455740091486c914495cfb0c7faa5',
            isShow: 0,
            url: null,
            sort: 50,
            permission: 'role:user:list',
            desc: null,
            menuType: 'B',
            icon: null,
            keepAlive: 0,
            componentName: null,
            openMode: '0',
            children: []
          }
        ]
      },
      {
        id: '06b8a427e4cd4c1ba11752070f565f20',
        name: '用户管理',
        pid: 'b1851d1b13594e71840103c11a37a669',
        isShow: 1,
        url: '/main/system/user',
        sort: 50,
        permission: null,
        desc: null,
        menuType: 'M',
        icon: 'user-group',
        keepAlive: 1,
        componentName: '',
        openMode: '0',
        children: [
          {
            id: 'bee5c6cb1b484133a4b8e72fe5c5eed0',
            name: '保存',
            pid: '06b8a427e4cd4c1ba11752070f565f20',
            isShow: 0,
            url: null,
            sort: 10,
            permission: 'user:save',
            desc: null,
            menuType: 'B',
            icon: '',
            keepAlive: 0,
            componentName: null,
            openMode: '0',
            children: []
          },
          {
            id: 'c6e7b5866ce64bfdabeb5dd6342ca55f',
            name: '删除',
            pid: '06b8a427e4cd4c1ba11752070f565f20',
            isShow: 0,
            url: null,
            sort: 20,
            permission: 'user:delete',
            desc: null,
            menuType: 'B',
            icon: '',
            keepAlive: 0,
            componentName: null,
            openMode: '0',
            children: []
          },
          {
            id: '7324ad98fb51462795750bcfc1b11be2',
            name: '查看',
            pid: '06b8a427e4cd4c1ba11752070f565f20',
            isShow: 0,
            url: null,
            sort: 30,
            permission: 'user:view',
            desc: null,
            menuType: 'B',
            icon: null,
            keepAlive: 0,
            componentName: null,
            openMode: '0',
            children: []
          },
          {
            id: '3e14f782d4e14998bce4f9d35c032a95',
            name: '禁止登录',
            pid: '06b8a427e4cd4c1ba11752070f565f20',
            isShow: 0,
            url: null,
            sort: 40,
            permission: 'user:change:login:status',
            desc: null,
            menuType: 'B',
            icon: '',
            keepAlive: 0,
            componentName: '',
            openMode: '0',
            children: []
          },
          {
            id: '7f20cb25f62e48c5ac5e986e3277956f',
            name: '导入',
            pid: '06b8a427e4cd4c1ba11752070f565f20',
            isShow: 0,
            url: null,
            sort: 50,
            permission: 'user:import',
            desc: null,
            menuType: 'B',
            icon: '',
            keepAlive: 0,
            componentName: '',
            openMode: '0',
            children: []
          },
          {
            id: '7e9203fdb630434abf7542ff111bc369',
            name: '导入预览',
            pid: '06b8a427e4cd4c1ba11752070f565f20',
            isShow: 0,
            url: null,
            sort: 60,
            permission: 'user:import:preview',
            desc: null,
            menuType: 'B',
            icon: '',
            keepAlive: 0,
            componentName: '',
            openMode: '0',
            children: []
          }
        ]
      },
      {
        id: 'c5f407478c4e4c9cbcdbee6389d2c909',
        name: '数据字典',
        pid: 'b1851d1b13594e71840103c11a37a669',
        isShow: 1,
        url: '/main/system/dic',
        sort: 60,
        permission: null,
        desc: null,
        menuType: 'M',
        icon: 'dict',
        keepAlive: 1,
        componentName: '',
        openMode: '0',
        children: [
          {
            id: 'b353de07f3624b4fa1c6f8b1b1e80cad',
            name: '保存',
            pid: 'c5f407478c4e4c9cbcdbee6389d2c909',
            isShow: 0,
            url: null,
            sort: 10,
            permission: 'dict:save',
            desc: null,
            menuType: 'B',
            icon: '',
            keepAlive: 0,
            componentName: null,
            openMode: '0',
            children: []
          },
          {
            id: '546c874267514672844cd3a019e468f7',
            name: '删除',
            pid: 'c5f407478c4e4c9cbcdbee6389d2c909',
            isShow: 0,
            url: null,
            sort: 20,
            permission: 'dict:delete',
            desc: null,
            menuType: 'B',
            icon: '',
            keepAlive: 0,
            componentName: null,
            openMode: '0',
            children: []
          },
          {
            id: '710c0a9195934e73b11123b62283fdc5',
            name: '查看',
            pid: 'c5f407478c4e4c9cbcdbee6389d2c909',
            isShow: 0,
            url: null,
            sort: 30,
            permission: 'dict:view',
            desc: null,
            menuType: 'B',
            icon: null,
            keepAlive: 0,
            componentName: null,
            openMode: '0',
            children: []
          },
          {
            id: '81b6845a20da4028a01a42f3eb0b4f4b',
            name: '字典项',
            pid: 'c5f407478c4e4c9cbcdbee6389d2c909',
            isShow: 0,
            url: null,
            sort: 40,
            permission: null,
            desc: null,
            menuType: 'B',
            icon: '',
            keepAlive: 0,
            componentName: null,
            openMode: '0',
            children: [
              {
                id: 'e46a01397a01459bb478a5f31a6220ee',
                name: '保存',
                pid: '81b6845a20da4028a01a42f3eb0b4f4b',
                isShow: 0,
                url: null,
                sort: 10,
                permission: 'dict:items:save',
                desc: null,
                menuType: 'B',
                icon: '',
                keepAlive: 0,
                componentName: null,
                openMode: '0',
                children: []
              },
              {
                id: '24176912aa9e4b2d832f96292be3430e',
                name: '删除',
                pid: '81b6845a20da4028a01a42f3eb0b4f4b',
                isShow: 0,
                url: null,
                sort: 20,
                permission: 'dict:items:delete',
                desc: null,
                menuType: 'B',
                icon: '',
                keepAlive: 0,
                componentName: null,
                openMode: '0',
                children: []
              },
              {
                id: '25162c30ae0d4297ade09539bcf81d86',
                name: '查看',
                pid: '81b6845a20da4028a01a42f3eb0b4f4b',
                isShow: 0,
                url: null,
                sort: 30,
                permission: 'dict:items:view',
                desc: null,
                menuType: 'B',
                icon: null,
                keepAlive: 0,
                componentName: null,
                openMode: '0',
                children: []
              },
              {
                id: '4a9047e1c44a4e69907ca8bfe077e38a',
                name: '上移',
                pid: '81b6845a20da4028a01a42f3eb0b4f4b',
                isShow: 0,
                url: null,
                sort: 40,
                permission: 'dict:items:sort:up',
                desc: null,
                menuType: 'B',
                icon: '',
                keepAlive: 0,
                componentName: '',
                openMode: '0',
                children: []
              },
              {
                id: '2b8742fc1d2e4c92937517b95b09c50b',
                name: '下移',
                pid: '81b6845a20da4028a01a42f3eb0b4f4b',
                isShow: 0,
                url: null,
                sort: 50,
                permission: 'dict:items:sort:down',
                desc: null,
                menuType: 'B',
                icon: '',
                keepAlive: 0,
                componentName: '',
                openMode: '0',
                children: []
              }
            ]
          }
        ]
      },
      {
        id: '10fc3bdde0c642aea2af34d281a49cf9',
        name: '测试数据',
        pid: 'b1851d1b13594e71840103c11a37a669',
        isShow: 1,
        url: '/main/system/test',
        sort: 100,
        permission: null,
        desc: null,
        menuType: 'M',
        icon: 'home',
        keepAlive: 1,
        componentName: 'data-test-list',
        openMode: '0',
        children: []
      },
      {
        id: '7ad229f12c8f4b57bbb9349e2ffd8932',
        name: '配置中心',
        pid: 'b1851d1b13594e71840103c11a37a669',
        isShow: 1,
        url: '/main/system/configure',
        sort: 110,
        permission: null,
        desc: null,
        menuType: 'M',
        icon: 'setting-center',
        keepAlive: 1,
        componentName: '',
        openMode: '0',
        children: [
          {
            id: 'ef2eeb351c9d421991514c7a205083d1',
            name: '查看',
            pid: '7ad229f12c8f4b57bbb9349e2ffd8932',
            isShow: 0,
            url: null,
            sort: 10,
            permission: 'configure:view',
            desc: null,
            menuType: 'B',
            icon: '',
            keepAlive: 0,
            componentName: '',
            openMode: '0',
            children: []
          },
          {
            id: 'a9b57951790b423a91e8232aca514305',
            name: '保存',
            pid: '7ad229f12c8f4b57bbb9349e2ffd8932',
            isShow: 0,
            url: null,
            sort: 20,
            permission: 'configure:save',
            desc: null,
            menuType: 'B',
            icon: '',
            keepAlive: 0,
            componentName: '',
            openMode: '0',
            children: []
          },
          {
            id: 'a224c0274f8e4ae6931e7deab75cd90b',
            name: '删除',
            pid: '7ad229f12c8f4b57bbb9349e2ffd8932',
            isShow: 0,
            url: null,
            sort: 30,
            permission: 'configure:delete',
            desc: null,
            menuType: 'B',
            icon: '',
            keepAlive: 0,
            componentName: '',
            openMode: '0',
            children: []
          }
        ]
      }
    ]
  },
  {
    id: '641253af-8ea1-4b5d-8bc3-a7165ef60ff2',
    name: '一些例子',
    pid: '0',
    isShow: 1,
    url: '/examples',
    sort: 20,
    permission: null,
    desc: null,
    menuType: 'D',
    icon: 'ant-design',
    keepAlive: 0,
    componentName: '',
    openMode: '0',
    children: [
      {
        id: 'dc332875-831e-4937-86ff-0c7420915ce9',
        name: '三级联动',
        pid: '641253af-8ea1-4b5d-8bc3-a7165ef60ff2',
        isShow: 1,
        url: '/examples/three-linkage',
        sort: 10,
        permission: null,
        desc: null,
        menuType: 'M',
        icon: '',
        keepAlive: 0,
        componentName: null,
        openMode: '0',
        children: []
      },
      {
        id: 'f09410d5-5043-4164-9f68-8d135de71b29',
        name: '上传文件',
        pid: '641253af-8ea1-4b5d-8bc3-a7165ef60ff2',
        isShow: 1,
        url: '/examples/upload-file',
        sort: 20,
        permission: null,
        desc: null,
        menuType: 'M',
        icon: '',
        keepAlive: 0,
        componentName: null,
        openMode: '0',
        children: []
      },
      {
        id: '74c852ea-be4b-4533-b146-cfbd776045d5',
        name: '富文本',
        pid: '641253af-8ea1-4b5d-8bc3-a7165ef60ff2',
        isShow: 1,
        url: '/examples/ueditor-example',
        sort: 30,
        permission: null,
        desc: null,
        menuType: 'M',
        icon: '',
        keepAlive: 0,
        componentName: null,
        openMode: '0',
        children: []
      },
      {
        id: '91bdb7d742a64a8c8a8fdc6d3bb61581',
        name: '可编辑表格',
        pid: '641253af-8ea1-4b5d-8bc3-a7165ef60ff2',
        isShow: 1,
        url: '/examples/editor-table',
        sort: 40,
        permission: null,
        desc: null,
        menuType: 'M',
        icon: '',
        keepAlive: 0,
        componentName: null,
        openMode: '0',
        children: []
      },
      {
        id: '2664b76cb2904227bce5b0f7d1dd6e7b',
        name: '下拉框',
        pid: '641253af-8ea1-4b5d-8bc3-a7165ef60ff2',
        isShow: 1,
        url: '/examples/select-example',
        sort: 60,
        permission: null,
        desc: null,
        menuType: 'M',
        icon: '',
        keepAlive: 0,
        componentName: null,
        openMode: '0',
        children: []
      },
      {
        id: 'c50388914fab408c8b74f83d0d43e557',
        name: '测试列表',
        pid: '641253af-8ea1-4b5d-8bc3-a7165ef60ff2',
        isShow: 1,
        url: '/examples/test-mb-list',
        sort: 70,
        permission: null,
        desc: null,
        menuType: 'M',
        icon: null,
        keepAlive: 0,
        componentName: null,
        openMode: '0',
        children: []
      },
      {
        id: '713626516eaa4ba98c9daf55009b481e',
        name: '测试表单',
        pid: '641253af-8ea1-4b5d-8bc3-a7165ef60ff2',
        isShow: 1,
        url: '/examples/test-mb-form',
        sort: 80,
        permission: null,
        desc: null,
        menuType: 'M',
        icon: '',
        keepAlive: 0,
        componentName: '',
        openMode: '0',
        children: []
      },
      {
        id: '9385945c7f5f476ab38885976907db2a',
        name: '测试外链',
        pid: '641253af-8ea1-4b5d-8bc3-a7165ef60ff2',
        isShow: 1,
        url: 'http://baidu.com',
        sort: 90,
        permission: null,
        desc: null,
        menuType: 'M',
        icon: '',
        keepAlive: 0,
        componentName: '',
        openMode: '1',
        children: []
      }
    ]
  },
  {
    id: 'd7f8d052d4864bd285c575c3cf2dce69',
    name: '低代码',
    pid: '0',
    isShow: 1,
    url: '/lowcode',
    sort: 30,
    permission: null,
    desc: null,
    menuType: 'D',
    icon: 'code',
    keepAlive: 1,
    componentName: '',
    openMode: '0',
    children: [
      {
        id: 'c7445e2ac6144a15a76d723607fbfb9d',
        name: '接口管理',
        pid: 'd7f8d052d4864bd285c575c3cf2dce69',
        isShow: 1,
        url: '/lowcode/magic-editor',
        sort: 20,
        permission: null,
        desc: null,
        menuType: 'M',
        icon: 'api',
        keepAlive: 1,
        componentName: '',
        openMode: '1',
        children: []
      },
      {
        id: '99c6e9aeb6694c349f5db66e2516f069',
        name: '代码生成',
        pid: 'd7f8d052d4864bd285c575c3cf2dce69',
        isShow: 1,
        url: '/lowcode/code-gen-list',
        sort: 30,
        permission: null,
        desc: null,
        menuType: 'M',
        icon: 'code',
        keepAlive: 1,
        componentName: '',
        openMode: '0',
        children: [
          {
            id: '3da5882528b640478b6d64bcbc4d1795',
            name: '保存',
            pid: '99c6e9aeb6694c349f5db66e2516f069',
            isShow: 0,
            url: null,
            sort: 10,
            permission: 'code:gen:save',
            desc: null,
            menuType: 'B',
            icon: '',
            keepAlive: 0,
            componentName: '',
            openMode: '0',
            children: []
          },
          {
            id: '35e56d173b5f4e6790883572d3104137',
            name: '生成',
            pid: '99c6e9aeb6694c349f5db66e2516f069',
            isShow: 0,
            url: null,
            sort: 20,
            permission: 'code:gen',
            desc: null,
            menuType: 'B',
            icon: '',
            keepAlive: 0,
            componentName: '',
            openMode: '0',
            children: []
          },
          {
            id: '067343d790fd4d73b3e2ea5bb3d043f1',
            name: '删除',
            pid: '99c6e9aeb6694c349f5db66e2516f069',
            isShow: 0,
            url: null,
            sort: 30,
            permission: 'code:gen:delete',
            desc: null,
            menuType: 'B',
            icon: '',
            keepAlive: 0,
            componentName: '',
            openMode: '0',
            children: []
          },
          {
            id: '11ac1fc1d2864f079a48d29f82dbb820',
            name: '执行生成',
            pid: '99c6e9aeb6694c349f5db66e2516f069',
            isShow: 0,
            url: null,
            sort: 40,
            permission: 'code:gen:execute',
            desc: null,
            menuType: 'B',
            icon: '',
            keepAlive: 0,
            componentName: '',
            openMode: '0',
            children: []
          },
          {
            id: 'c4352b75954a47de84cd896c6e2093b9',
            name: '查看',
            pid: '99c6e9aeb6694c349f5db66e2516f069',
            isShow: 0,
            url: null,
            sort: 50,
            permission: 'code:gen:view',
            desc: null,
            menuType: 'B',
            icon: '',
            keepAlive: 0,
            componentName: '',
            openMode: '0',
            children: []
          }
        ]
      }
    ]
  },
  {
    id: '4a57f57fc7324c94b6390f1a2dd1f49a',
    name: '系统监控',
    pid: '0',
    isShow: 1,
    url: '/system/monitor',
    sort: 40,
    permission: null,
    desc: null,
    menuType: 'D',
    icon: 'diagnostics',
    keepAlive: 0,
    componentName: '',
    openMode: '0',
    children: [
      {
        id: '4fc65edbe0544c369b58fdfed1523537',
        name: '操作日志',
        pid: '4a57f57fc7324c94b6390f1a2dd1f49a',
        isShow: 1,
        url: '/system/monitor/oper-log',
        sort: 10,
        permission: null,
        desc: null,
        menuType: 'M',
        icon: 'profile',
        keepAlive: 1,
        componentName: '',
        openMode: '0',
        children: []
      },
      {
        id: 'eee27ca353fb440aa5ac0bd7b38cad1d',
        name: '登录日志',
        pid: '4a57f57fc7324c94b6390f1a2dd1f49a',
        isShow: 1,
        url: '/system/monitor/login-log',
        sort: 20,
        permission: null,
        desc: null,
        menuType: 'M',
        icon: 'login-log',
        keepAlive: 1,
        componentName: '',
        openMode: '0',
        children: []
      },
      {
        id: '3a0e3107402449698d86ee3cbc5272c0',
        name: '数据库监控',
        pid: '4a57f57fc7324c94b6390f1a2dd1f49a',
        isShow: 1,
        url: '/system/monitor/druid',
        sort: 30,
        permission: null,
        desc: null,
        menuType: 'M',
        icon: 'database',
        keepAlive: 0,
        componentName: '',
        openMode: '0',
        children: []
      },
      {
        id: 'fdbdcf8b8d674ae38154bc1e57498a91',
        name: '在线用户',
        pid: '4a57f57fc7324c94b6390f1a2dd1f49a',
        isShow: 1,
        url: '/system/monitor/online-user',
        sort: 40,
        permission: null,
        desc: null,
        menuType: 'M',
        icon: 'user',
        keepAlive: 0,
        componentName: '',
        openMode: '0',
        children: [
          {
            id: '52702cf956f847e8a2d045f66eb6bfee',
            name: '踢人',
            pid: 'fdbdcf8b8d674ae38154bc1e57498a91',
            isShow: 0,
            url: null,
            sort: 10,
            permission: 'online:logout',
            desc: null,
            menuType: 'B',
            icon: '',
            keepAlive: 0,
            componentName: '',
            openMode: '0',
            children: []
          },
          {
            id: '9fe1eaae168e4b719dc880f039ccd7b7',
            name: '查看',
            pid: 'fdbdcf8b8d674ae38154bc1e57498a91',
            isShow: 0,
            url: null,
            sort: 20,
            permission: 'online:view',
            desc: null,
            menuType: 'B',
            icon: '',
            keepAlive: 0,
            componentName: '',
            openMode: '0',
            children: []
          }
        ]
      }
    ]
  }
] as unknown as Menu[];