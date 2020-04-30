interface ISPAView extends HTMLElement {
    showPage(): void;
    hidePage(animationEndCallback: Function): void;
    friendlyName: string;
}

interface IRouterConfig {
    pageRoot: string;
    pathMap: Record<string, Node>;
}

interface IProjectData {
    name: string;
    description: string;
    picture: string;
    link?: string;
    repo?: string;
}

interface Window {
    WebComponents: {
        waitFor(callback: Function);
    };
}