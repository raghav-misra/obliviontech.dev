interface ISPAView extends HTMLElement {
    showPage(): void;
    hidePage(animationEndCallback: Function): void;
    friendlyName: string;
}