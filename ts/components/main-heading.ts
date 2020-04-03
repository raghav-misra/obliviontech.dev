export class MainHeading extends HTMLElement {
    static get observedAttributes() { return ["data-location"]; }

    connectedCallback() {
        this.innerText = `${this.dataset.location}@obliviontech`;
    }

    attributeChangedCallback(name: string) {
        switch (name) {
            case "data-location": 
                this.innerText = `${this.dataset.location}@obliviontech`;
                break; 
        }
    }

    static define() {
        customElements.define("main-heading", this, { extends: 'header' });
    }
}
