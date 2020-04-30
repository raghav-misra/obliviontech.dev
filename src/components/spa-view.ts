import * as JSX from '../parts/jsx';

//#region Style
const Style = (`
	spa-view {
        display: none;
        text-align: center;
        margin-top: 2rem;
	}
`);
//#endregion

//#region Logic
const events = {
    whenShown: new Event("whenShown"),
    whenHidden: new Event("whenHidden"),
    whenConnected: new Event("whenConnected")
};
export class SPAView extends HTMLElement implements ISPAView {
    get friendlyName() {
        if (this.getAttribute("path") == "/") return "home";
        else return this.getAttribute("path").replace("/", "");
    }

    connectedCallback() {
        this.dispatchEvent(events.whenConnected);
        this.hidden = true;
    }

    showPage(animationCallback = null) {
        this.hidden = false;
        this.style.display = this.dataset.display || "block";
        this.dispatchEvent(events.whenShown);
        this.style.animation = "fade-in 0.5s ease-in";
        this.style.animationFillMode = "both";
        setTimeout(animationCallback, 450);
    }

    hidePage(animationCallback = null) {
        this.style.animation = "fade-out 0.5s ease-out";
        this.style.animationFillMode = "both";
        setTimeout((() => {
            this.hidden = true;
            this.dispatchEvent(events.whenHidden);
            this.style.display = "none";
            document.querySelectorAll("spa-view").forEach(( el: HTMLElement) => {
                el.hidden = true;
                el.style.display = "none";
            })
            animationCallback();
        }).bind(this), 450);
    }

    static define() {
        JSX.addComponentStyles(Style);
        customElements.define("spa-view", this);
    }
};
//#endregion