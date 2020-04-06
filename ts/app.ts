// Initialize Components:
import { MainHeading } from './components/main-heading';
MainHeading.define();
const header = document.querySelector("[is='main-heading']") as MainHeading;

import { SideBar } from './components/side-bar';
SideBar.define();
const nav = document.querySelector<SideBar>("[is='side-bar']");

import { TabLink } from './components/tab-link';
TabLink.define();

import { MobileMenu } from './components/mobile-menu';
MobileMenu.define();

import { SPAView } from './components/spa-view';
SPAView.define();

// Do Router (after components load):
import { Router } from './parts/router';
new Router(header);