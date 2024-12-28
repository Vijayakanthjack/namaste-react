const parent = React.createElement("div",{id:"parent"}, 
    React.createElement("div",{id:"children"}, 
        [
            React.createElement("h1",{},"Hello this is h1 tag!"),
            React.createElement("h2",{},"Hello this is h2 tag!")
         ],),

         React.createElement("div",{id:"children2"}, 
            [
                React.createElement("h1",{},"Hello this is h1 tag!"),
                React.createElement("h2",{},"Hello this is h2 tag!")
             ],),
    
    );


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);