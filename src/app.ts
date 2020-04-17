// Initialize Components:
import { TabLink } from "./components/tab-link";
import { MainHeading } from "./components/main-heading";
import { SideBar } from "./components/side-bar";
import { MobileMenu } from "./components/mobile-menu";
import { SPAView } from "./components/spa-view";
import { Router } from "./parts/router";

// Define Components on polyfill load
window.WebComponents.waitFor(() => {
    SideBar.define();
    SPAView.define();
    MobileMenu.define();
    MainHeading.define();
    TabLink.define();

    const header = document.querySelector("[is=main-heading]") as MainHeading;

    const mobileMenu: MobileMenu = document.querySelector("nav[is=mobile-menu]");
    mobileMenu.bindToButton("#openMenu");

    // Do Router (after components load):
    new Router(header);
});

