import React from "react";
import "../Styles/Home.css";

export default function home() {
  return (
    <div id="body">
      <section id="banner">
        <div class="jumbotron">
          <h1 class="display-4">Hi, my name is Juliet</h1>
          <p class="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
        </div>
      </section>
      <section className="container" id="info">
        <div className="row">
          <div className="col-4">
            <img src="https://picsum.photos/300/300"></img>
          </div>
          <div className="col-8">
            <div id="preview-shadow">
              <div id="preview">
                <h1>About me</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
