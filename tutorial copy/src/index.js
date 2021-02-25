import React from "react";
import ReactDom from "react-dom";
// CSS
import "./index.css";
//setup vars
const firstBook = {
  img:
    "https://images-eu.ssl-images-amazon.com/images/I/51hdgH%2B03RL._AC_UL200_SR200,200_.jpg",
  title: "Planet Omar: Operation Kind: World Book Day 2021",
  author: "Zanib Mian",
};
const secondBook = {
  img:
    "https://images-eu.ssl-images-amazon.com/images/I/51aJ-LVfpCL._AC_UL200_SR200,200_.jpg",
  title: "Gigantosaurus: Dino Spot",
  author: "Jonny Duddle",
};

function BookList() {
  return (
    <section className="bookList">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

//this is a template/layout for book component
const Book = (/*props*/ { img, title, author, children }) => {
  //const { img, title, author } = props; // same as writing  <h1>{props.title}</h1>
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
      {/* <p>{let x 6}</p> js has to retun something cannot be a statement only an expression */}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
