import { h, Fragment } from "../parts/jsx";
import projectsList from "../parts/projects-list";

export default <Fragment>{
    projectsList.map(project =>
        <project-card data-project={JSON.stringify(project)}>
        </project-card>
    )
}</Fragment>