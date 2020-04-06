interface ISPAView extends HTMLElement {
    showPage(): void;
    hidePage(animationEndCallback: Function): void;
    friendlyName: string;
} 

interface IRouterConfig {
    pageRoot: string;
    pathMap: Record<string, string>;
}