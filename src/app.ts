// Initialize Components:
import { TabLink } from "./components/tab-link";
import { MainHeading } from "./components/main-heading";
import { SideBar } from "./components/side-bar";
import { MobileMenu } from "./components/mobile-menu";
import { SPAView } from "./components/spa-view";
import { ProjectCard } from "./components/project-card";    

import { Router } from "./parts/router";

// Grab Views:
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProjectsPage from "./pages/projects";
import ContactsPage from "./pages/contact";

// Define Components on polyfill load
window.WebComponents.waitFor(() => {
    SideBar.define();
    SPAView.define();
    MobileMenu.define();
    MainHeading.define();
    TabLink.define();
    ProjectCard.define();

    const header = document.querySelector("[is=main-heading]") as MainHeading;

    const mobileMenu: MobileMenu = document.querySelector("nav[is=mobile-menu]");
    mobileMenu.bindToButton("#openMenu");

    // Do Router (after components load):
    new Router(header, {
        "pageRoot": "#pages",
        "pathMap": {
            "/": HomePage,
            "/about": AboutPage,
            "/projects": ProjectsPage,
            "/contact": ContactsPage
        }
    });
});

