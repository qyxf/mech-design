'use strict';
const path = require('path')

module.exports = {
  doc: {
    name: "机械设计基础提纲",
    description: "机械设计基础提纲 | 钱院学辅出品",
    author: 'xjtu-blacksmith',
    version: "2019W",
    dir: "source",
    outDir: "docs",
    staticDir: ""
  },
  theme: {
    dir: "mytheme",
    title: "",
    headHtml: "",
    footHtml: "",
    isMinify: true,
    rootPath: "/mech-design/"
  },
  nav: {
    tree: "./tree"
  }
}
