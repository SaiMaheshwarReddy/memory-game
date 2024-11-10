export const data = [
  {
    name: "css",
    imgSrc: "./images/css.svg",
  },
  {
    name: "graphql",
    imgSrc: "./images/graphql.svg",
  },
  {
    name: "html",
    imgSrc: "./images/html.svg",
  },
  {
    name: "javascript",
    imgSrc: "./images/javascript.svg",
  },
  {
    name: "nodejs",
    imgSrc: "./images/nodejs.svg",
  },
  {
    name: "reactjs",
    imgSrc: "./images/reactjs.svg",
  },
  {
    name: "redux",
    imgSrc: "./images/redux.svg",
  },
  {
    name: "typescript",
    imgSrc: "./images/typescript.svg",
  },
  {
    name: "css",
    imgSrc: "./images/css.svg",
  },
  {
    name: "graphql",
    imgSrc: "./images/graphql.svg",
  },
  {
    name: "html",
    imgSrc: "./images/html.svg",
  },
  {
    name: "javascript",
    imgSrc: "./images/javascript.svg",
  },
  {
    name: "nodejs",
    imgSrc: "./images/nodejs.svg",
  },
  {
    name: "reactjs",
    imgSrc: "./images/reactjs.svg",
  },
  {
    name: "redux",
    imgSrc: "./images/redux.svg",
  },
  {
    name: "typescript",
    imgSrc: "./images/typescript.svg",
  },
];


export const shuffle = (array) => {
  // for(let i = 0; i < arr.length; i++){
  //   let j = Math.floor(Math.random() * (i + 1))
  //   console.log(j, "j")
  //   [arr[i], arr[j]] = [arr[j], arr[i]]
  // }
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
}
}