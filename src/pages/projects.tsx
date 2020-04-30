import { h, Fragment } from "../parts/jsx";
import ProjectsList from "../parts/projects-list";

export default <Fragment>
    {
        ProjectsList.map(project => <project-card data-project={JSON.stringify(project)}></project-card>)
    }
</Fragment>