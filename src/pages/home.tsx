import { h, Fragment } from "../parts/jsx";
import Typed from "typed.js";

const Page = (
    <Fragment>
        <div class="homepage-image-layer">
            <img class="img-circuit" src="/assets/graphics/branding-circuit.png" />
        </div>

        <style>{`
            .typed-cursor { display: none; }

            .homepage-image-layer {   
                position: absolute;
                z-index: -1;
                top: 0; left: 0;
                height: calc(100vh - 6.625rem);
                right: 0;
                bottom: 0;
            } 

            .homepage-image-layer img { position: absolute; }

            .homepage-image-layer .img-circuit{
                left: 0; bottom: 0;
                width: 35rem;
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