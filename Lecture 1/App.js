// // JS Code to Implement Hello World
// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World from JavaScript";
// const root = document.getElementById("root");
// root.appendChild(heading);

// React.createElement(): It takes 3 attributes
// TAG: Tag Name i.e h1, h2, p, div etc
// {}: Object where we give attributes to the tag
// "Content":  Content inside the Tag

// const heading = React.createElement(
//   "h1",
//   { id: "heading", class: "Head-Tag" },
//   "Hello World From React"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement(
    "div",
    { id: "parent" },
      [  React.createElement("div", { id: "child1" }, [
          React.createElement("h1", {}, "I am h1 Tag"),
          React.createElement("h2", {}, "I am h2 Tag"),
        ]),
        React.createElement("div", { id: "child2" }, [
          React.createElement("h1", {}, "I am h1 Tag"),
          React.createElement("h2", {}, "I am h2 Tag"),
        ])]
  
  );
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);
  
  // Practice
  // const heading = React.createElement("h2", null, "I am H2");
  // const root = ReactDOM.createRoot(document.getElementById("root"));
  // root.render(heading);
  