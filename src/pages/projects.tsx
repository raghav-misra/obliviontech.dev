import { h } from "../parts/jsx";
import ProjectsList from "../parts/projects-list";

export default <div>
    {
        ProjectsList.map(project => <project-card data-project={JSON.stringify(project)}></project-card>)
    }
</div>