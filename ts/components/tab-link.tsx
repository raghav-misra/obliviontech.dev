import { addComponentStyles } from '../parts/jsx';

//#region Style:
const Style = (`
    tab-link {
        flex: 1;
        text-align: center;
        display: flex;
        font-size: 1.75rem;
        align-items: center;
        transition: background 0.5s ease-in-out, color 0.5s ease-in-out;
        justify-content: center;
        text-decoration: none;
        cursor: pointer;
    }


    tab-link:not([active=true]):hover { color: var(--accent) }

    tab-link[active=true] { background: var(--accent); }
`);
//#endregion

//#region Logic:
export class TabLink extends HTMLElement {
    endpointPage: string;
    targetURL: string;


    connectedCallback() {
        this.addEventListener("click", this.whenClicked);
        this.innerText = this.getAttribute("to");

        this.endpointPage = this.getAttribute("to").toLowerCase();
        this.targetURL = this.endpointPage == "home" ? "#" : `#/${this.endpointPage}`;
    }

    static define() {
        addComponentStyles(Style);
        customElements.define("tab-link", this);
    }

    whenClicked() {
        location.href = this.targetURL;

        // Remove 'active' from any other tabs:
        document.querySelectorAll<TabLink>("tab-link").forEach(tab => tab.removeAttribute("active"))

        // Make current tab active:
        this.setAttribute("active", "true")
    }
}
//#endregion