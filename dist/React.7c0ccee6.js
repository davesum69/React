const myelement = React.createElement("h1", {
    id: "myid",
    className: "myclass",
    key: "mykey"
}, "Hello World!");
const myelement1 = React.createElement("h2", {
    id: "myid1",
    className: "myclass",
    key: "mykey1"
}, "Hello World!");
const divcont = React.createElement("div", {
    id: "myid",
    className: "myclass"
}, [
    myelement,
    myelement1
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(divcont);

//# sourceMappingURL=React.7c0ccee6.js.map
