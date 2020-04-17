import { h, render, Fragment } from '../parts/jsx';

const onlyPageName = matchMedia("(max-width: 550px)");

const Markup = ({ location }) => (
    <Fragment>
        <button id="openMenu" className="d-none nothing">
            <i className="color-accent fas fa-bars"></i>
            &nbsp;Menu
        </button>
        <br className="d-none mobile-only" />
        <h1 className="hero d-inline">{location}@obliviontech</h1>
    </Fragment>
);

export class MainHeading extends HTMLElement {
    display: HTMLElement;
    static get observedAttributes() { return ["data-location"]; }

    constructor() {
        super();
        render(<Markup location={this.dataset.location} />, this);
        this.display = this.querySelector(".hero");
        this.display.innerText = `${this.dataset.location}@obliviontech`;
        onlyPageName.addEventListener("change", ({ matches }) => {
            if (matches) this.display.innerText = this.dataset.location;
            else this.display.innerText = `${this.dataset.location}@obliviontech`;
        })
    }

    attributeChangedCallback() { 
        this.display.innerText = this.dataset.location;
        onlyPageName.matches || (this.display.innerText += "@obliviontech");
    }

    static define() {
        customElements.define("main-heading", this, { extends: 'header' });
    }
}