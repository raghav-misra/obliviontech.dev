import { MainHeading } from './components/main-heading';
MainHeading.define();
const header = document.querySelector<MainHeading>("[is=main-heading]");

import { SideBar } from './components/side-bar';
SideBar.define();
const nav = document.querySelector<SideBar>("[is=main-heading]");

import { TabLink } from './components/tab-link';
TabLink.define();