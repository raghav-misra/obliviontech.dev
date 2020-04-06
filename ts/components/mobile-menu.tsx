import { h, render, Fragment, addComponentStyles } from '../parts/jsx';

//#region Markup
const links = ["home", "about", "projects", "contact"];
const Markup = () => (
    <Fragment>
        <div class="text-center padding">
            <button class="color-close nothing padding fas fa-times h1">
            </button>
        </div>
        { links.map((name) => <tab-link className="mobile" to={name}></tab-link>) }
    </Fragment>
);
//#endregion

//#region Style:
const Style = (`
    [is=mobile-menu] {
        position: fixed;
        top: 0; bottom: 0; 
        left: 0; right: 0;
        z-index: 69;
        background: var(--background-accent);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`);
//#endregion

//#region Logic:
export class MobileMenu extends HTMLElement {
    connectedCallback() {
        render(<Markup />, this);
    }

    static define() {
        addComponentStyles(Style);
        customElements.define("mobile-menu", this, { extends: 'nav' });
    }
}
//#endregion