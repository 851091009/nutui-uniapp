import { isH5 } from './src/utils/env'

export default {
  docs: {
    name: '指南',
    packages: [
      {
        name: 'intro',
        cName: '介绍',
        eName: 'Introduction',
        show: true,
      },
      {
        name: 'start',
        cName: '快速上手',
        eName: 'Quickstart',
        show: true,
      },
      {
        name: 'official-theme',
        cName: '官方主题',
        eName: 'Official Theme',
        show: true,
      },
      {
        name: 'theme',
        cName: '定制主题',
        eName: 'Customize Theme',
        show: true,
      },
      {
        name: 'version',
        cName: '4.0 更新介绍',
        eName: 'Version',
        show: true,
      },
      {
        name: 'migrate-from-v3',
        cName: '从 v3 升级到 v4',
        eName: 'Migrate-from-v3',
        show: true,
      },
      {
        name: 'international',
        cName: '国际化',
        eName: 'Internationalization',
        show: true,
      },
      {
        name: 'ide',
        cName: '开发工具支持',
        eName: 'IDE tool support',
        show: true,
      },
      {
        name: 'contributing',
        cName: '贡献指南',
        eName: 'Contributing',
        path: '#/contributing',
        show: true,
      },
      {
        name: 'https://github.com/jdf2e/nutui/releases',
        cName: '更新日志',
        eName: 'Changelog',
        show: true,
        isLink: true,
      },
    ],
  },
  nav: [
    {
      name: '基础组件',
      enName: 'basic',
      show: true,
      packages: [
        {
          version: '3.0.0',
          name: 'Button',
          uni: true,
          sort: 1,
          cName: '按钮',
          type: 'component',
          show: true,
          desc: '按钮用于触发一个操作，如提交表单。',
          author: 'richard1015',
        },
        {
          version: '3.0.0',
          name: 'Cell',
          uni: true,
          sort: 1,
          cName: '单元格',
          type: 'component',
          show: true,
          desc: '展示列表',
          author: 'richard1015',
        },
        {
          version: '3.0.0',
          name: 'CellGroup',
          sort: 1,
          cName: '单元格组件',
          type: 'component',
          show: false,
          uni: true,
          exportEmpty: true,
          desc: '展示分组列表',
          author: 'richard1015',
        },
        {
          version: '3.0.0',
          name: 'Icon',
          uni: true,
          sort: 3,
          cName: '图标',
          type: 'component',
          show: true,
          desc: '图标',
          author: 'richard1015',
          exclude: true,
        },
        {
          version: '3.0.0',
          name: 'Overlay',
          uni: true,
          type: 'component',
          cName: '遮罩层',
          desc: '创建一个遮罩层，通常用于阻止用户进行其他操作',
          sort: 14,
          show: true,
          author: 'szg2008',
        },
        {
          version: '3.0.0',
          name: 'Transition',
          uni: true,
          type: 'component',
          cName: '过渡动画',
          desc: '创建过渡动画',
          sort: 14,
          show: true,
          author: 'szg2008',
        },
        {
          version: '3.0.0',
          name: 'Popup',
          uni: true,
          sort: 8,
          cName: '弹出层',
          type: 'component',
          show: true,
          desc: '弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示',
          author: 'szg2008',
        },
        {
          version: '3.0.0',
          name: 'ConfigProvider',
          cType: '基础组件',
          cName: '全局配置',
          desc: '用于配置NutUI组件全局',
          show: true,
          uni: true,
          unidoc: false,
          type: 'component',
          author: 'richard1015',
        },
        {
          version: '3.0.0',
          name: 'Image',
          cType: '基础组件',
          cName: '图片',
          desc: '图片展示',
          show: true,
          uni: false,
          unidoc: true,
          type: 'component',
          author: 'yangxiaolu',
        },
      ],
    },
    {
      name: '布局组件',
      enName: 'layout',
      show: true,
      packages: [
        {
          version: '3.0.0',
          name: 'Layout',
          uni: true,
          sort: 4,
          cName: '布局',
          type: 'component',
          show: true,
          desc: '简便地创建布局',
          author: 'undo',
        },
        {
          version: '3.0.0',
          name: 'Col',
          sort: 5,
          cName: '布局-Col',
          type: 'component',
          show: false,
          uni: true,
          exportEmpty: true,
          desc: '布局组件Col',
          author: 'undo',
        },
        {
          version: '3.0.0',
          name: 'Row',
          sort: 6,
          cName: '布局-Row',
          type: 'component',
          show: false,
          uni: true,
          exportEmpty: true,
          desc: '布局组件Row',
          author: 'undo',
        },
        {
          version: '3.0.0',
          name: 'Sticky',
          cType: '布局组件',
          cName: '粘性布局',
          type: 'component',
          desc: '当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在距离屏幕固定的距离处',
          show: true,
          uni: true,
          unidoc: false,
          author: 'Yang1206',
        },
        {
          version: '3.0.0',
          name: 'Divider',
          uni: true,
          type: 'component',
          cName: '分割线',
          desc: '用于将内容分隔为多个区域。',
          sort: 23,
          show: true,
          author: 'yangjinjun3',
        },
        {
          version: '3.1.13',
          name: 'Grid',
          type: 'component',
          cName: '宫格',
          desc: '用于分隔成等宽区块进行页面导航',
          sort: 13,
          uni: true,
          show: true,
          author: 'haiweilian',
        },
        {
          version: '3.1.13',
          name: 'GridItem',
          type: 'component',
          cName: '宫格子组件',
          desc: '',
          sort: 13,
          uni: true,
          show: false,
          exportEmpty: true,
          exportEmptyUni: true,
          author: 'haiweilian',
        },
      ],
    },
    {
      name: '导航组件',
      enName: 'nav',
      show: true,
      packages: [
        {
          version: '3.0.0',
          name: 'Navbar',
          uni: true,
          sort: 3,
          cName: '头部导航',
          type: 'componment',
          show: true,
          desc: '头部导航',
          author: 'liqiong43',
        },
        {
          version: '3.0.0',
          name: 'FixedNav',
          type: 'component',
          cName: '悬浮导航',
          desc: '可拖拽的悬浮导航',
          uni: true,
          sort: 9,
          show: true,
          author: 'richard1015',
        },
        {
          version: '3.0.0',
          name: 'Menu',
          sort: 2,
          cName: '菜单',
          type: 'component',
          uni: true,
          show: true,
          desc: '下拉菜单组件',
          author: 'yangjinjun3',
        },
        {
          version: '3.0.0',
          name: 'MenuItem',
          sort: 2,
          cName: '菜单',
          type: 'component',
          uni: true,
          exportEmpty: true,
          show: false,
          desc: '下拉菜单组件',
          author: 'yangjinjun3',
        },
        {
          version: '3.0.0',
          name: 'Tabbar',
          uni: true,
          sort: 2,
          cName: '标签栏',
          type: 'component',
          show: true,
          desc: '标签栏',
          author: 'Drjingfubo',
        },
        {
          version: '3.0.0',
          name: 'TabbarItem',
          sort: 2,
          cName: '标签栏子组件',
          type: 'component',
          show: false,
          uni: true,
          exportEmpty: true,
          exportEmptyUni: true,
          desc: '标签栏子组件',
          author: 'Drjingfubo',
        },
        {
          version: '3.0.0',
          name: 'Elevator',
          type: 'component',
          cName: '电梯楼层',
          desc: '用于列表快速定位以及索引的显示',
          sort: 5,
          show: true,
          uni: true,
          author: 'szg2008',
        },
        {
          version: '3.0.0',
          name: 'Pagination',
          type: 'component',
          cName: '分页',
          desc: '当数据量较多时，采用分页的形式分隔长列表。',
          sort: 10,
          show: true,
          uni: true,
          author: 'yushuang24',
        },
        {
          version: '3.1.9',
          name: 'Tabs',
          type: 'component',
          cName: '选项卡切换',
          desc: '常用于平级区域大块内容的的收纳和展现，支持内嵌标签形式和渲染循环数据形式',
          sort: 11,
          show: true,
          uni: true,
          author: 'richard1015',
        },
        {
          version: '3.1.9',
          name: 'TabPane',
          type: 'component',
          cName: '选项卡子组件',
          desc: '',
          sort: 12,
          exportEmpty: true,
          uni: true,
          show: false,
          author: 'richard1015',
        },
        {
          version: '3.0.0',
          name: 'Indicator',
          type: 'component',
          cName: '指示器',
          desc: '显示一个任务或流程的进度，常用语开通流程。',
          sort: 11,
          uni: true,
          show: true,
          author: 'senyawang',
        },
        {
          version: '3.1.15',
          name: 'SideNavbar',
          type: 'component',
          cName: '侧边栏导航',
          desc: '垂直展示的导航栏，用于内容选择和切换',
          sort: 14,
          uni: true,
          show: true,
          author: 'szg2008',
        },
        {
          version: '3.1.15',
          name: 'SideNavbarItem',
          type: 'component',
          cName: '侧边栏导航子组件',
          desc: '',
          sort: 15,
          exportEmpty: true,
          uni: true,
          show: false,
          author: 'szg2008',
        },
        {
          version: '3.1.15',
          name: 'SubSideNavbar',
          type: 'component',
          cName: '侧边栏导航子组件',
          desc: '',
          sort: 16,
          exportEmpty: true,
          uni: true,
          show: false,
          author: 'szg2008',
        },
      ],
    },
    {
      name: '数据录入',
      enName: 'dentry',
      show: true,
      packages: [
        {
          version: '3.0.0',
          name: 'Range',
          uni: true,
          type: 'component',
          cName: '区间选择器',
          desc: '滑动输入条，用于在给定的范围内选择一个值。',
          sort: 16,
          show: true,
          author: 'zy19940510',
        },
        {
          version: '3.0.0',
          name: 'Searchbar',
          type: 'component',
          cName: '搜索栏',
          desc: '搜索栏',
          sort: 23,
          show: true,
          uni: true,
          author: 'zongyue3',
        },
        {
          name: 'Cascader',
          type: 'component',
          cName: '级联选择器',
          desc: '级联选择，用于多层级数据的选择，典型场景为省市区选择.',
          sort: 23,
          show: true,
          uni: true,
          author: 'dongj0316',
        },
        {
          version: '3.0.0',
          uni: true,
          name: 'Calendar',
          type: 'component',
          cName: '日历',
          desc: '日历组件',
          sort: 5,
          show: true,
          author: 'songchenglin1',
        },
        {
          version: '3.0.0',
          name: 'Checkbox',
          uni: true,
          sort: 5,
          cName: '复选按钮',
          type: 'component',
          show: true,
          desc: '复选按钮',
          author: 'Ymm0008',
        },
        {
          version: '3.0.0',
          name: 'CheckboxGroup',
          type: 'component',
          cName: '多选按钮组',
          desc: '多选按钮组',
          sort: 11,
          show: false,
          uni: true,
          exportEmpty: true,
          author: 'Ymm0008',
        },
        {
          version: '3.0.0',
          name: 'DatePicker',
          uni: true,
          type: 'component',
          cName: '日期选择器',
          desc: '提供多个选型集合供用户选择,支持单列选择和多列级联,通常与弹出层配合使用',
          sort: 5,
          show: true,
          author: 'yangkaixuan',
        },
        {
          version: '3.0.0',
          name: 'InputNumber',
          uni: true,
          sort: 1,
          cName: '数字输入框',
          type: 'component',
          show: true,
          desc: '数字输入框组件',
          author: 'szg2008',
        },
        {
          version: '3.0.0',
          name: 'Input',
          uni: true,
          sort: 2,
          cName: '输入框',
          type: 'component',
          show: true,
          desc: '输入框组件',
          author: 'gxx158',
        },
        {
          version: '3.0.0',
          name: 'CodeInput',
          uni: true,
          sort: 2,
          cName: '验证码输入框',
          type: 'component',
          show: true,
          desc: '验证码输入框组件',
          author: 'yang1206',
        },
        {
          version: '3.0.0',
          name: 'Radio',
          uni: true,
          type: 'component',
          cName: '单选按钮',
          desc: '单选按钮',
          sort: 9,
          show: true,
          author: 'Ymm0008',
        },
        {
          version: '3.0.0',
          name: 'RadioGroup',
          type: 'component',
          cName: '单选按钮组',
          desc: '单选按钮组',
          sort: 10,
          uni: true,
          exportEmpty: true,
          show: false,
          author: 'Ymm0008',
        },
        {
          version: '3.0.0',
          name: 'Rate',
          uni: true,
          sort: 4,
          cName: '评分',
          type: 'component',
          show: true,
          desc: '评分组件',
          author: 'undo',
        },
        {
          version: '3.0.0',
          name: 'CalendarItem',
          type: 'component',
          cName: '日历子组件',
          desc: '日历子组件',
          sort: 5,
          show: false,
          author: 'songchenglin1',
        },
        {
          version: '3.0.0',
          name: 'Picker',
          uni: true,
          type: 'component',
          cName: '选择器',
          desc: '提供多个选型集合供用户选择,支持单列选择和多列级联,通常与弹出层配合使用',
          sort: 5,
          show: true,
          author: 'yangkaixuan',
        },
        {
          version: '3.0.0',
          name: 'ShortPassword',
          uni: true,
          type: 'component',
          cName: '短密码',
          desc: '短密码组件',
          sort: 6,
          show: true,
          author: 'Drjingfubo',
        },
        {
          version: '3.0.0',
          uni: true,
          name: 'Textarea',
          type: 'component',
          cName: '文本域',
          desc: '文本输入',
          sort: 7,
          show: true,
          author: 'gx',
        },
        {
          version: '3.0.0',
          name: 'Uploader',
          uni: true,
          unidoc: true,
          sort: 2,
          cName: '上传',
          type: 'component',
          show: true,
          desc: '上传文件、图片',
          author: 'richard1015',
        },
        {
          version: '3.0.0',
          name: 'NumberKeyboard',
          uni: true,
          sort: 13,
          cName: '数字键盘',
          type: 'component',
          show: true,
          desc: '虚拟数字键盘',
          author: 'Drjingfubo',
        },
        {
          version: '3.0.0',
          name: 'Form',
          type: 'component',
          cName: '表单',
          desc: '1',
          sort: 21,
          show: true,
          uni: true,
          author: 'richard1015',
        },
        {
          version: '3.0.0',
          name: 'FormItem',
          type: 'component',
          cName: '表单Item',
          desc: '表单Item',
          sort: 22,
          show: false,
          uni: true,
          exportEmpty: true,
          author: 'richard1015',
        },
      ],
    },
    {
      name: '操作反馈',
      enName: 'feedback',
      show: true,
      packages: [
        {
          version: '3.0.0',
          name: 'Swipe',
          uni: true,
          type: 'component',
          cName: '滑动手势',
          desc: '列表项左滑删除场景使用',
          sort: 4,
          show: true,
          author: 'richard1015',
        },
        {
          version: '3.0.0',
          name: 'ActionSheet',
          uni: true,
          sort: '1',
          cName: '动作面板',
          type: 'component',
          show: true,
          desc: '底部弹出动作菜单面板',
          author: 'zhangyufei',
        },
        {
          version: '3.0.0',
          name: 'Backtop',
          uni: true,
          unidoc: true,
          sort: '1',
          cName: '返回顶部',
          type: 'component',
          show: true,
          desc: '较长页面快捷返回顶部',
          author: 'liqiong43',
        },
        {
          version: '3.0.0',
          name: 'Drag',
          uni: true,
          unidoc: true,
          type: 'component',
          cName: '拖拽',
          desc: '拖拽组件',
          sort: 16,
          show: true,
          author: 'Drjingfubo',
        },
        {
          version: '3.0.0',
          name: 'Dialog',
          uni: true,
          unidoc: true,
          type: 'methods',
          cName: '对话框',
          desc: '模态对话框，在浮层中显示，引导用户进行相关操作，支持图片对话框。',
          sort: 8,
          show: true,
          author: 'dsj',
        },
        {
          version: '3.0.0',
          name: 'InfiniteLoading',
          unidoc: false,
          type: 'component',
          cName: '滚动加载',
          desc: '列表滚动到底部自动加载更多数据',
          sort: 15,
          show: false,
          author: 'yangxiaolu',
          uni: false,
        },
        {
          version: '3.0.0',
          name: 'PullRefresh',
          unidoc: true,
          type: 'component',
          cName: '下拉刷新',
          desc: '在列表中通过手指下拉刷新加载新内容的交互操作',
          sort: 16,
          show: true,
          uni: false,
          author: 'yangxiaolu',
          exportEmpty: false,
          exportEmptyUni: false,
        },
        {
          version: '3.0.0',
          name: 'Notify',
          unidoc: true,
          uni: true,
          type: 'methods',
          cName: '消息通知',
          desc: '在页面顶部展示消息提示，支持函数调用和组件调用两种方式',
          sort: 4,
          show: true,
          author: 'wangyue217',
        },
        {
          version: '3.0.0',
          name: 'Switch',
          uni: true,
          type: 'component',
          cName: '开关',
          desc: '用来打开或关闭选项',
          sort: 3,
          show: true,
          author: 'zongyue3',
        },
        {
          version: '3.0.0',
          name: 'Toast',
          uni: true,
          unidoc: true,
          sort: '1',
          cName: '吐司',
          type: 'methods',
          show: true,
          desc: '轻提示',
          author: 'undo',
        },
        {
          version: '3.0.0',
          name: 'Audio',
          unidoc: true,
          type: 'component',
          cName: '音频播放器',
          desc: '音频播放器',
          sort: 25,
          show: true,
          uni: false,
          exportEmpty: false,
          exportEmptyUni: false,
          author: 'yangxiaolu',
        },
        {
          version: '3.0.0',
          name: 'AudioOperate',
          type: 'component',
          cName: '音频操作按钮',
          desc: '音频操作按钮',
          sort: 26,
          show: false,
          uni: false,
          exportEmpty: false,
          exportEmptyUni: false,
          author: 'yangxiaolu',
        },
      ],
    },
    {
      name: '展示组件',
      enName: 'exhibition',
      show: true,
      packages: [
        {
          version: '3.0.0',
          name: 'Avatar',
          uni: true,
          sort: 7,
          cName: '头像',
          type: 'component',
          show: true,
          desc: '头像',
          author: 'ailululu',
        },
        {
          version: '3.0.0',
          name: 'AvatarGroup',
          uni: true,
          sort: 1,
          cName: '头像组件',
          type: 'component',
          show: false,
          exportEmpty: true,
          desc: '头像组合组件',
          author: 'ailululu',
        },
        {
          version: '3.0.0',
          name: 'List',
          cType: '操作反馈',
          cName: '虚拟列表',
          desc: '可在成千上万条数据渲染时只渲染用户最大可见条数，提升页面渲染性能',
          show: true,
          uni: true,
          unidoc: false,
          type: 'component',
          author: 'szg2008',
        },
        {
          version: '3.0.0',
          name: 'Progress',
          uni: true,
          sort: 8,
          cName: '进度条',
          type: 'component',
          show: true,
          desc: '用来展示进度',
          author: 'Drjingubo',
        },
        {
          version: '3.0.0',
          name: 'CircleProgress',
          uni: true,
          sort: 8,
          cName: '环形进度条',
          type: 'component',
          show: true,
          desc: '用来展示进度',
          author: 'Drjingubo',
        },
        {
          version: '3.0.0',
          name: 'Noticebar',
          type: 'component',
          cName: '公告栏',
          desc: '用于循环播放展示一组消息通知',
          sort: 8,
          show: true,
          uni: true,
          author: 'yangxiaolu',
        },
        {
          version: '3.0.0',
          name: 'Empty',
          uni: true,
          type: 'component',
          cName: '空状态',
          desc: '空状态时占位提示',
          sort: 24,
          show: true,
          author: 'wujia8',
        },
        {
          version: '3.0.0',
          name: 'LoadingPage',
          uni: true,
          type: 'component',
          cName: '加载页',
          desc: '加载时占位提示',
          sort: 24,
          show: true,
          author: 'yang1206',
        },
        {
          version: '3.0.0',
          name: 'Steps',
          uni: true,
          sort: 17,
          cName: '步骤条',
          type: 'component',
          show: true,
          desc: '步骤条',
          author: 'ailululu',
        },
        {
          version: '3.0.0',
          name: 'Step',
          sort: 17,
          cName: '步骤条子组件',
          type: 'component',
          show: false,
          uni: true,
          exportEmpty: true,
          desc: '步骤条子组件',
          author: 'ailululu',
        },
        {
          version: '3.0.0',
          name: 'Swiper',
          uni: true,
          sort: 6,
          cName: '轮播',
          type: 'component',
          show: true,
          desc: '轮播',
          author: 'suzigang',
        },
        {
          version: '3.0.0',
          name: 'SwiperItem',
          sort: 6,
          cName: '轮播图子组件',
          type: 'component',
          show: false,
          uni: true,
          exportEmpty: true,
          exportEmptyUni: true,
          desc: '轮播图子组件',
          author: 'suzigang',
        },
        {
          version: '3.0.0',
          name: 'Price',
          uni: true,
          sort: 4,
          cName: '价格',
          type: 'component',
          show: true,
          desc: '价格组件',
          author: 'ailululu',
        },
        {
          version: '3.0.0',
          name: 'ImagePreview',
          type: 'methods',
          cName: '图片预览',
          desc: '图片预览',
          uni: true,
          sort: 4,
          show: true,
          author: 'zongyue3',
        },
        {
          version: '3.0.0',
          name: 'Countup',
          uni: true,
          sort: 12,
          cName: '数字滚动',
          type: 'component',
          show: true,
          desc: '数字滚动组件，动态变化展示',
          author: 'Ymm0008',
        },
        {
          name: 'Countdown',
          type: 'component',
          cName: '倒计时',
          desc: '倒计时',
          sort: 16,
          show: true,
          uni: true,
          author: 'yangxiaolu',
        },
        {
          version: '3.0.0',
          name: 'Badge',
          type: 'component',
          cName: '徽标',
          desc: '徽标',
          sort: 17,
          show: true,
          uni: true,
          author: 'liqiong',
        },
        {
          version: '3.0.0',
          name: 'Tag',
          type: 'component',
          cName: '标签',
          desc: '标签',
          sort: 18,
          show: true,
          uni: true,
          author: 'liqiong',
        },
        {
          version: '3.0.0',
          name: 'Popover',
          type: 'component',
          cName: '气泡弹出框',
          desc: '气泡弹出框',
          sort: 19,
          show: false,
          uni: true,
          author: 'liqiong',
        },
        {
          version: '3.0.0',
          name: 'Skeleton',
          type: 'component',
          cName: '骨架屏',
          desc: '骨架屏',
          sort: 23,
          show: true,
          uni: true,
          author: 'liqiong',
        },
        {
          version: '3.0.0',
          name: 'Collapse',
          uni: true,
          sort: 2,
          cName: '折叠面板',
          type: 'component',
          show: true,
          desc: '折叠面板',
          author: 'Ymm0008',
        },
        {
          version: '3.0.0',
          name: 'CollapseItem',
          uni: true,
          sort: 3,
          cName: '折叠面板-item',
          type: 'component',
          show: false,
          exportEmpty: true,
          exportEmptyUni: true,
          desc: '折叠面板-item',
          author: 'Ymm0008',
        },
        {
          version: '3.0.0',
          uni: true,
          name: 'Table',
          type: 'component',
          cName: '表格',
          desc: '用于展示多条结构类似的数据，并具有一定的操作功能',
          sort: 9,
          show: true,
          author: 'szg2008',
        },
        {
          version: '3.0.0',
          name: 'Animate',
          cType: '展示组件',
          cName: '动画/动效',
          desc: '给页面元素添加动画效果',
          show: true,
          uni: true,
          unidoc: false,
          type: 'component',
          author: 'lijiamiao',
        },
        {
          version: '3.0.0',
          name: 'Ellipsis',
          cType: '展示组件',
          cName: '文本省略',
          desc: '文本省略',
          show: true,
          uni: true,
          unidoc: false,
          type: 'component',
          author: 'yangxiaolu3',
        },
        {
          version: '3.0.0',
          name: 'Watermark',
          cType: '展示组件',
          cName: '水印',
          desc: '页面上添加特定的文字或图案。适用于防止信息盗用。',
          show: true,
          uni: true,
          unidoc: false,
          type: 'component',
          author: 'liukun',
        },
        {
          version: '3.0.0',
          name: 'TrendArrow',
          cType: '展示组件',
          cName: '趋势箭头',
          desc: '带有箭头指示的百分比数字,用以展示指标趋势',
          show: true,
          uni: true,
          unidoc: false,
          type: 'component',
          author: 'liukun',
        },
        {
          version: '3.0.0',
          name: 'Tour',
          cType: '展示组件',
          cName: '引导',
          desc: '漫游式引导组件',
          show: false,
          uni: !!isH5,
          unidoc: false,
          type: 'component',
          author: 'yangxiaolu',
        },
      ],
    },
    {
      name: '特色组件',
      enName: 'business',
      show: true,
      packages: [
        {
          version: '3.0.0',
          uni: true,
          name: 'Address',
          type: 'component',
          cName: '地址',
          desc: '地址组件',
          sort: 1,
          show: true,
          author: 'yangxiaolu3',
        },
        {
          version: '3.0.0',
          uni: true,
          name: 'Barrage',
          type: 'component',
          cName: '弹幕',
          desc: '用于视频弹幕等展示',
          sort: 2,
          show: true,
          author: 'Ymm0008',
        },
        {
          version: '3.0.0',
          uni: true,
          unidoc: true,
          name: 'Signature',
          type: 'component',
          cName: '签名',
          desc: '签名组件',
          sort: 3,
          show: !!isH5,
          author: 'guoxiaoxiao',
        },
        {
          version: '3.0.0',
          uni: true,
          name: 'TimeSelect',
          type: 'component',
          cName: '配送时间',
          desc: '配送时间',
          sort: 4,
          show: true,
          author: 'szg2008',
        },
        {
          version: '3.0.0',
          uni: true,
          name: 'TimePannel',
          type: 'component',
          cName: '配送时间',
          desc: '配送时间',
          sort: 5,
          show: false,
          exportEmpty: true,
          author: 'szg2008',
        },
        {
          version: '3.0.0',
          uni: true,
          name: 'TimeDetail',
          type: 'component',
          cName: '配送时间',
          desc: '配送时间',
          sort: 6,
          show: false,
          exportEmpty: true,
          author: 'szg2008',
        },
        {
          version: '3.0.0',
          uni: true,
          name: 'Sku',
          type: 'component',
          cName: '商品规格选择',
          desc: '商品规格选择',
          sort: 1,
          show: true,
          author: 'yangxiaolu3',
        },
        {
          version: '3.0.0',
          uni: true,
          name: 'Card',
          type: 'component',
          cName: '商品卡片',
          desc: '展示商品',
          sort: 1,
          show: true,
          author: 'Drjingfubo',
        },
        {
          version: '3.0.0',
          name: 'Ecard',
          cType: '特色组件',
          cName: '虚拟电子卡',
          desc: '虚拟电子卡选择',
          show: true,
          uni: true,
          unidoc: false,
          type: 'component',
          author: 'yangxiaolu',
        },
        {
          version: '3.0.0',
          name: 'AddressList',
          type: 'component',
          cName: '地址列表',
          desc: '展示收货地址列表',
          show: true,
          author: 'yushuang24',
          uni: true,
        },
        {
          version: '3.0.0',
          name: 'Category',
          type: 'component',
          cName: '商品分类',
          desc: '商品分类展示',
          show: true,
          author: 'liqiong43',
          uni: true,
        },
        {
          version: '3.0.0',
          name: 'CategoryPane',
          type: 'component',
          cName: '商品分类面板',
          desc: '商品分类面板',
          show: false,
          exportEmpty: true,
          author: 'liqiong43',
          uni: true,
        },
        {
          name: 'Comment',
          cType: '特色组件',
          cName: '商品评论',
          desc: '商品评论',
          show: true,
          uni: true,
          unidoc: false,
          type: 'component',
          author: 'yangxiaolu',
        },
        {
          version: '3.0.0',
          name: 'Invoice',
          cType: '特色组件',
          cName: '发票',
          desc: '发票',
          show: true,
          unidoc: false,
          type: 'component',
          author: 'ailululu',
          uni: true,
        },
      ],
    },
    {
      name: '抽奖组件',
      enName: 'bingo',
      show: !!isH5,
      packages: [
        {
          version: '1.0.0',
          name: 'TurnTable',
          uni: true,
          unidoc: true,
          sort: 1,
          cName: '大转盘抽奖',
          type: 'component',
          show: true,
          desc: '大转盘抽奖',
          author: 'Ymm0008',
        },
        {
          version: '1.0.0',
          name: 'Marquee',
          uni: true,
          unidoc: true,
          sort: 1,
          cName: '跑马灯抽奖',
          type: 'component',
          show: true,
          desc: '跑马灯抽奖',
          author: 'Ymm0008',
        },
        {
          version: '1.0.0',
          name: 'GiftBox',
          uni: true,
          unidoc: true,
          sort: 1,
          cName: '神秘大礼盒',
          type: 'component',
          show: true,
          desc: '神秘大礼盒',
          author: 'Ymm0008',
        },
        {
          name: 'Hiteggs',
          uni: true,
          unidoc: true,
          sort: 1,
          cName: '砸金蛋',
          type: 'component',
          show: true,
          desc: '砸金蛋',
          author: 'Drjingfubo',
        },
        {
          version: '1.0.0',
          name: 'DollMachine',
          uni: true,
          unidoc: true,
          sort: 1,
          cName: '娃娃机',
          type: 'component',
          show: true,
          desc: '娃娃机',
          author: 'Ymm0008',
        },
        {
          name: 'ShakeDice',
          uni: true,
          unidoc: true,
          sort: 1,
          cName: '摇骰子',
          type: 'component',
          show: true,
          desc: '摇骰子',
          author: 'Drjingfubo',
        },
      ],
    },
  ],
}
