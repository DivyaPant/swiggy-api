import React from "react";
import ReactDOM from "react-dom/client";


// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "This is Namaste React 🚀"),
//     React.createElement("h2", {}, "by Divya Pant"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I'm an h1 tag"),
//     React.createElement("h2", {}, "I'm an h2 tag"),
//   ]),
// ]);

// console.log(parent); // object

const jsxHeading = <h1>Heading from jsx</h1> // React element
const Title = ()=> {
    return <div>Title</div>
}

const HeadingComponent = ()=>{
    return (
        <>
        <Title/>
        <Title></Title>
    {jsxHeading}   {/* write js in jsx using {} */}
    {Title()} {/* Fun components are also functions after all!! */}
    {console.log('anything')}
    <h1>Heading from Functional Component</h1>
    </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<HeadingComponent/>)