import { h, render, Fragment, addComponentStyles } from '../parts/jsx';

//#region Markup
const links = ["home", "about", "projects", "contact"];
const Markup = () => <Fragment>{ links.map((name) => <tab-link to={name}></tab-link>) }</Fragment>;
//#endregion

//#region Style:
const Style = (`
    body { padding-left: 4rem; }

    [is=side-bar] {
        height: 4rem;
        width: 100vh;
        position: fixed;
        display: flex;
        flex-direction: row-reverse;
        transform-origin: top left;
        transform: rotate(-90deg);
        top: 100vh; left: 0;
    }
`);
//#endregion

//#region Logic:
export class SideBar extends HTMLElement {
    connectedCallback() {
        render(<Markup />, this);
    }

    static define() {
        addComponentStyles(Style);
        customElements.define("side-bar", this, { extends: 'nav' });
    }
}
//#endregion