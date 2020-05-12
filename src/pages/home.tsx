import { h, Fragment } from "../parts/jsx";
import Typed from "typed.js";

const Page = <Fragment>
    <hr />
    <h3 id="serviceCycler" class="mono"></h3>
    <hr />
    <style>{`
        .typed-cursor { display: none; }
    `}</style>
</Fragment>;

export default Page;

const showSkills = new Typed(Page.querySelector("#serviceCycler"), {
    strings: [
        "full-stack web apps",
        "unity c# games",
        "windows desktop apps",
        "obliviontech",
    ],

    typeSpeed: 50,
    backSpeed: 37.5,
    
    startDelay: 500,
    backDelay: 500
});