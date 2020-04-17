/*
    Generator functions for building live DOM nodes with JSX
*/

type AcceptableChild = string | Node | AcceptableChild[];

//#region JSX helper for creating HTMLElements
export function h(tagName: string | Function, props: object, ...children: AcceptableChild[]) {
    // Make sure all parameters are defined.
    props = props || {};

    // If tag is a function, call it with props and children.
    if((typeof tagName) === "function") {
        return (tagName as Function)(props, children);
    }

    // Otherwise (tag is a string) generate DOM node.
    const element: HTMLElement = document.createElement(tagName as string);

    // Add all properties to the new element.
    Object.keys(props).forEach((name) => {
        /*eslint no-prototype-builtins: "off"*/
        if (props.hasOwnProperty(name)) setProperty(element, name, props[name]);
    });

    // Add all children to the new element.
    render(children, element);

    // Return the element.
    return element;
}
//#endregion

//#region Render DocumentFragment with JSX:
export function Fragment(ignoreProps, ...children: (string | Node)[]) {
    const fragment = document.createDocumentFragment();
    children.forEach((child) => render(child, fragment));
    return fragment;
} 
//#endregion

//#region Add scoped component styles
let componentStylesheet = document.querySelector<HTMLStyleElement>("#componentStyles"); 
if (!componentStylesheet) {
    // Create component stylesheet:
    componentStylesheet = h("style", { id: "componentStyles" });
    render(componentStylesheet, document.body);
}

export function addComponentStyles(styleString: string) {
    componentStylesheet.innerText += styleString
        .trim().replace(/\t/g, "").replace(/\n/g, "");
}
//#endregion

//#region Render function implementation for Nodes, Arrays, and strings
export function render(child: AcceptableChild, parent: Node) {
    if(Array.isArray(child)) {
        child.forEach((el) => render(el, parent));
    }

    else if (!child) return; // Child is falsy.

    // Check if child is a string:
    else if (typeof child === "string")
        parent.appendChild(document.createTextNode(child as string));

    // Otherwise assume it is a Node:
    else parent.appendChild(child as Node);
}
//#endregion

//#region setAttribute with support for event handlers:
function setProperty(element: HTMLElement, name: string, value: string | Function | boolean) {
    const validProps = ["innerText", "value", "disabled", "classList"];

    const caselessName = name.toLowerCase().trim();
    const trimmedName = name.trim();

    // className becomes class:
    if (caselessName == "classname") {
        element.setAttribute("class", value as string);
    }
    // Event listeners as functions:
    else if (caselessName.startsWith("on") && typeof value == "function") {
        element.addEventListener(
            caselessName.replace("on", ""),
            value as Function as EventListener
        );
    }
    // Property > Attributes:
    else if (validProps.indexOf(trimmedName) != -1) {
        element[trimmedName] = value;
    }
    // Apply as HTML attribute:
    else {
        element.setAttribute(name, value as string);
    }
}
//#endregion