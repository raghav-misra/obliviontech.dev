import { h, render, Fragment, addComponentStyles } from '../parts/jsx';

//#region Markup
const links = ["home", "about", "projects", "contact"];
const Markup = ({ closeMenu }) => (
    <Fragment>
        <div className="text-center padding">
            <button onClick={closeMenu} title="Close Menu" className="color-close circle-btn fas fa-times h1">
            </button>
        </div>
        { links.map((name) => <tab-link to={name}></tab-link>) }
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
        display: none;
        flex-direction: column;
        justify-content: center;
    }
`);
//#endregion

//#region Logic:
export class MobileMenu extends HTMLElement {
    constructor() {
        super();
        render(<Markup closeMenu={this.closeMenu.bind(this)} />, this);
    }

    static define() {
        addComponentStyles(Style);
        customElements.define("mobile-menu", this, { extends: 'nav' });
    }

    bindToButton(query: string) {
        const button = document.querySelector(query);

        button.addEventListener('click', this.openMenu.bind(this));
    }

    openMenu() {
        this.style.display = "flex"
        this.hidden = false;
        this.style.animation = "fade-in 0.5s ease-in";
        this.style.animationFillMode = "both";
    }

    closeMenu() {
        this.hidden = true;
        this.style.animation = "fade-out 0.5s ease-out";
        this.style.animationFillMode = "both";
        setTimeout((() => this.style.display = "none").bind(this), 450);
    }
}
//#endregion