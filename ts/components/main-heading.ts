const onlyPageName = matchMedia("(max-width: 550px)");

export class MainHeading extends HTMLElement {
    static get observedAttributes() { return ["data-location"]; }

    connectedCallback() {
        this.innerText = `${this.dataset.location}@obliviontech`;
        onlyPageName.addEventListener("change", ({ matches }) => {
            if (matches) this.innerText = this.dataset.location;
            else this.innerText = `${this.dataset.location}@obliviontech`;
        })
    }

    attributeChangedCallback(name: string) { 
        this.innerText = this.dataset.location;
        onlyPageName.matches || (this.innerText += "@obliviontech");
    }

    static define() {
        customElements.define("main-heading", this, { extends: 'header' });
    }
}
