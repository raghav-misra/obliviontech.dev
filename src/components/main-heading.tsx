import { h, render, Fragment } from "../parts/jsx";

const onlyPageName = matchMedia("(max-width: 550px)");

const Markup = ({ location }) => (
    <Fragment>
        <button id="openMenu" class="d-none nothing">
            <i class="color-accent fas fa-bars"></i>
            &nbsp;Menu
        </button>
        <br class="d-none mobile-only" />
        <h1 class="hero d-inline">{location}@obliviontech</h1>
    </Fragment>
);

export class MainHeading extends HTMLElement {
    display: HTMLElement;
    static get observedAttributes() {
        return ["data-location"];
    }

    constructor() {
        super();
        render(<Markup location={this.dataset.location} />, this);
        this.display = this.querySelector(".hero");
        this.display.innerText = `${this.dataset.location}@obliviontech`;
        onlyPageName.addEventListener("change", ({ matches }) => {
            if (matches) this.display.innerText = this.dataset.location;
            else
                this.display.innerText = `${this.dataset.location}@obliviontech`;
        });
    }

    attributeChangedCallback() {
        this.display.innerText = this.dataset.location;
        onlyPageName.matches || (this.display.innerText += "@obliviontech");
    }

    static define() {
        customElements.define("main-heading", this, { extends: "header" });
    }
}
