import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "快速上手", icon: "java", link: "/home.md" },
  { text: "系统配置", icon: "github", link: "/open-source-project/" },
  { text: "操作指南", icon: "book", link: "/books/" },
  {
    text: "常见问题",
    icon: "help",
    children: [
      {
        text: "制造执行",
        icon: "about",
        link: "/faq/mes/readme.md",
      },
      {
        text: "仓库管理",
        icon: "about",
        link: "/faq/wms/readme.md",
      },
      {
        text: "设备管理",
        icon: "star",
        link: "/faq/eam/readme.md",
      },
      {
        text: "能源管理",
        icon: "star",
        link: "/faq/ems/readme.md",
      },
      {
        text: "过程质量",
        icon: "star",
        link: "/faq/qms/readme.md",
      },
      {
        text: "智能分单",
        icon: "star",
        link: "/faq/oms/readme.md",
      },
      {
        text: "生产排程",
        icon: "star",
        link: "/faq/aps/readme.md",
      },
    ],
  },
  {
    text: "常见问题",
    icon: "article",
    link: "/high-quality-technical-articles/",
  },
  {
    text: "知识星球",
    icon: "planet",
    children: [
      {
        text: "星球介绍",
        icon: "about",
        link: "/about-the-author/zhishixingqiu-two-years.md",
      },
      {
        text: "星球专属优质专栏",
        icon: "about",
        link: "/zhuanlan/",
      },
      {
        text: "星球优质主题汇总",
        icon: "star",
        link: "https://www.yuque.com/snailclimb/rpkqw1/ncxpnfmlng08wlf1",
      },
    ],
  },
  {
    text: "项目平台",
    icon: "about",
    children: [
      { text: "智能制造", icon: "zuozhe", link: "/about-the-author/" },
      { text: "智能制造APP", icon: "zuozhe", link: "/about-the-author/" },
      { text: "智能分单", icon: "zuozhe", link: "/about-the-author/" },
      {
        text: "财经体系",
        icon: "history",
        link: "/timeline/",
      },
    ],
  },
  {
    text: "网站相关",
    icon: "about",
    children: [
      { text: "关于作者", icon: "zuozhe", link: "/about-the-author/" },
      {
        text: "更新历史",
        icon: "history",
        link: "/timeline/",
      },
    ],
  },
]);
