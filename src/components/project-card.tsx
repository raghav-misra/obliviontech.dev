import { h, render, Fragment, addComponentStyles } from '../parts/jsx';

//#region Markup
const Markup = ({ project }: { project: IProjectData }) => (
    <Fragment>
        <h4 className="mono">{ project.name }</h4>
        <br />
        <p>{ project.description }</p>
        <br />
        <div class="button-box">
            {project.link && <a className="button" href={ project.link }>Check it out!</a>}
            {project.repo && <a className="button" href={ project.repo }>Github <i class="fab fa-github"></i></a>}
        </div>
    </Fragment>
);
//#endregion

//#region Style:
const Style = (`
    project-card {
        display: inline-block;
        margin: 1rem;
        padding: 2rem 1rem;
        text-align: center;
        width: 20rem;
        background: var(--background-accent);  
    }

    project-card .button-box {
        padding: 0.5rem;
    }
`);
//#endregion

//#region Logic:
export class ProjectCard extends HTMLElement {
    constructor() {
        super();
        render(<Markup project={ JSON.parse(this.dataset.project) as IProjectData } />, this);
    }

    static define() {
        addComponentStyles(Style);
        customElements.define("project-card", this);
    }

    hoverChange() {
        this.querySelector(".splash-cover");
    }
}
//#endregion