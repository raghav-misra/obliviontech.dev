export class MainHeading extends HTMLElement {
    static get observedAttributes() { return ["data-location"]; }

    connectedCallback() {
        this.innerText = `${this.dataset.location}@obliviontech`;
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        switch (name) {
            case "data-location": 
                this.innerText = `${newValue}@obliviontech`;
                break;
                
        }
    }

    static define() {
        customElements.define("main-heading", this, { extends: 'header' });
    }
}
