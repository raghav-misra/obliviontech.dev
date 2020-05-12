import { h, Fragment } from "../parts/jsx";
import Typed from "typed.js";

const Page = (
    <Fragment>
        <div class="homepage-image-layer">
            xd
        </div>

        <style>{`
            .typed-cursor { display: none; }

            .homepage-image-layer {   
                position: absolute;
                z-index: -1;
                top: 0; left: 0;
                right: 0;
                bottom: 0;
            } 
        `}</style>
    </Fragment>
);

export default Page;

/*
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
*/