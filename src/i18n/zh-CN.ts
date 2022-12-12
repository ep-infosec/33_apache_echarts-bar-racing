import langEn from './en-US';

type DEFAULT_LANG_TYPE = typeof langEn;

const langCn: DEFAULT_LANG_TYPE = {
    lang: 'zh-CN',
    toolName: '动态排序柱状图生成器',
    chartConfigs: '图表设置',
    chartTitle: '图表标题',
    titleNone: '空数据',
    titleSimple: '简单的例子',
    titleComplicated: '复杂的例子',
    maxDataCount: '排名上限',
    maxDataPlaceholder: '不设置则显示全部',
    animationDuration: '动画时长（毫秒）',
    reorderDuration: '排序时长（毫秒）',
    download: '下载代码',
    videoConfig: '视频设置',
    videoWidth: '视频宽度',
    videoHeight: '视频高度',
    videoFps: '视频帧率',
    videoSupported: '请使用 Chrome 生成视频',
    videoSuccess: '导出成功！',
    videoFail: '导出失败！',
    videoFailHint: '建议使用最新版 Chrome 浏览器',
    videSizeError: '视频高度宽度错误！',
    videSizeErrorHint: '高度宽度不能为 0',
    generateVideo: '生成视频',
    cancel: '取消',
    data: '数据',
    color: '颜色',
    blueberry: '蓝莓',
    banana: '香蕉',
    kiwi: '猕猴桃',
    watermelon: '西瓜',
    preview: '预览',
    exporting: '视频正在导出中',
    Australia: '澳大利亚',
    Canada: '加拿大',
    China: '中国',
    Cuba: '古巴',
    Finland: '芬兰',
    France: '法国',
    Germany: '德国',
    Iceland: '冰岛',
    India: '印度',
    Japan: '日本',
    Norway: '挪威',
    'North Korea': '朝鲜',
    'South Korea': '韩国',
    'New Zealand': '新西兰',
    Poland: '波兰',
    Russia: '俄罗斯',
    Turkey: '土耳其',
    'United Kingdom': '英国',
    'United States': '美国'
};

export default langCn;