import { arraySidebar } from "vuepress-theme-hope";

export const faq = arraySidebar([
  {
    text: "制造执行",
    icon: "et-performance",
    prefix: "mes/",
    collapsible: true,
    children: ["test"],
  },
  {
    text: "仓库管理",
    icon: "experience",
    prefix: "wms/",
    collapsible: true,
    children: ["test"],
  },
  {
    text: "设备管理",
    icon: "code",
    prefix: "eam/",
    collapsible: true,
    children: ["test"],
  },
  {
    text: "能源管理",
    icon: "interview",
    prefix: "ems/",
    collapsible: true,
    children: ["test"],
  },
  {
    text: "过程质量",
    icon: "work",
    prefix: "qms/",
    collapsible: true,
    children: ["test"],
  },
  {
    text: "智能分单",
    icon: "work",
    prefix: "oms/",
    collapsible: true,
    children: ["test"],
  },
  {
    text: "生产排程",
    icon: "work",
    prefix: "aps/",
    collapsible: true,
    children: ["test"],
  },
]);
