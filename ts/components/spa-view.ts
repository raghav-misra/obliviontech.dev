import * as JSX from '../parts/jsx';

//#region Style
const Style = (`
	spa-view {
		flex: 1;
		display: none;
	}
`);
//#endregion

//#region Logic
const events = {
    whenShown: new Event("whenShown"),
    whenHidden: new Event("whenHidden"),
    whenConnected: new Event("whenConnected")
}
const Logic = class extends HTMLElement implements ISPAView {
    get friendlyName() {
        if (this.getAttribute("path") == "/") return "home";
        else return this.getAttribute("path").replace("/", "");
    }

    connectedCallback() {
        this.dispatchEvent(events.whenConnected);
    }

    showPage(animationCallback = null) {
        this.style.display = this.dataset.display || "block";
        this.dispatchEvent(events.whenShown);
        this.style.animation = "fade-in 0.5s ease-in";
        this.style.animationFillMode = "both";
        setTimeout(animationCallback, 450);
        let user = JSON.parse(localStorage.getItem("user"));
    }

    hidePage(animationCallback = null) {
        this.style.animation = "fade-out 0.5s ease-out";
        this.style.animationFillMode = "both";
        setTimeout((() => {
            this.style.display = "none";
            this.dispatchEvent(events.whenHidden);
            animationCallback();
        }).bind(this), 450);
    }

    static define() {
        JSX.addComponentStyles(Style);
        customElements.define("spa-view", this);
    }
};
//#endregion

export default Logic;