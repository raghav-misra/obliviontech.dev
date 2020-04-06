import { addComponentStyles } from '../parts/jsx';

//#region Style:
const Style = (`
    tab-link {
        flex: 1;
        text-align: center;
        display: flex;
        font-size: 1.75rem;
        align-items: center;
        transition: background 0.25s ease-in-out, color 0.25s ease-in-out;
        justify-content: center;
        text-decoration: none;
        cursor: pointer;
    }

    tab-link.mobile {
        font-size: 2rem;
    }

    tab-link:not([active=true]):hover { color: var(--accent) }

    tab-link[active=true] { background: var(--accent); }
`);
//#endregion

//#region Logic:
export class TabLink extends HTMLElement {
    targetURL: string;

    connectedCallback() {
        this.addEventListener("click", this.whenClicked);
        if (this.hasAttribute("manual")) {
            this.targetURL = this.getAttribute("to");
        } else {
            this.innerText = this.getAttribute("to");
            this.targetURL = this.getAttribute("to") == "home" ? 
                "#" : `#/${this.getAttribute("to")}`;
        }
    }

    toggle() {
        if (this.hidden) {
            this.style.display = "flex";
            this.style.animation = "fade-in 0.5s ease-in";
            this.style.animationFillMode = "both";
        } else {
            
            this.style.animation = "fade-out 0.5s ease-in";
            this.style.animationFillMode = "both";
        }
    }

    static define() {
        addComponentStyles(Style);
        customElements.define("tab-link", this);
    }

    whenClicked() {
        location.href = this.targetURL;
    }
}
//#endregion

export function unhighlightAll() {
    document.querySelectorAll("tab-link")
        .forEach(el => el.removeAttribute("active"));
}

export function highlight(tabName: string) {
    if (!tabName.startsWith("/")) return 'bruh no /';
    if (tabName.replace("/", "") == "") tabName = "home";
    document.querySelectorAll(`tab-link[to='${tabName.replace("/", "")}']`)
        .forEach(el => el.setAttribute("active", "true"));
}