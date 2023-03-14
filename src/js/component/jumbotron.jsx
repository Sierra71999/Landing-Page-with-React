import React from "react";
export const Jumbotron =(props) => {
    return (
      <div className="container bg-light w-auto p-3">
        <div class="jumbotron m-5">
        <h1 class="display-4">{props.title} A Warm Welcome </h1>
        <p class="lead">{props.description}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio felis, blandit nec magna nec, dictum semper tellus. Etiam ultrices tempus felis ac sollicitudin. Proin sit amet tristique ipsum. Proin congue mauris imperdiet hendrerit rutrum.</p>
        <a class="btn btn-primary btn-lg" href={props.url} role="button">{props.buttonLable}Call to Action </a>
      </div>
      </div>
)};











