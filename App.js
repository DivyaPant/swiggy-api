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

// const jsxHeading = <h1>Heading from jsx</h1> // React element
// const Title = ()=> {
//     return <div>Title</div>
// }

// const HeadingComponent = ()=>{
//     return (
//         <>
//         <Title/>
//         <Title></Title>
//     {jsxHeading}   {/* write js in jsx using {} */}
//     {Title()} {/* Fun components are also functions after all!! */}
//     {console.log('anything')}
//     <h1>Heading from Functional Component</h1>
//     </>
//     );
// }

const Header = ()=>{
    return (
    <div className="header">
        <div className="logo-container">
            <img className='logo' src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png' alt="Logo"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Name</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)}

const RestaurantCard = ()=>{
    return (
        <div className="res-card">
             <img className='card-img'
             src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg/800px-%22Hyderabadi_Dum_Biryani%22.jpg' alt='res-img'/>
            <h3>Meghana Foods</h3>
           <h4>Biryani</h4>
           <h4>4.4 stars</h4>
           <h4>38 mins</h4>
        </div>
    );
}

const Body = ()=> {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
            </div>
        </div>
    )
}

const AppLayout = ()=> {
    return <div className="app">
<Header/>
<Body />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<AppLayout/>)