import React from "react";

export default function NewsCard({ image, title, author, link }) {
  return (
    <div className="m-3">
      <div class="card" style={{ width: "20rem" }}>
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title} </h5>
          <p class="card-text" style={{ color: "gray" }}>
            {author}
          </p>
          <a href={link} class="btn btn-primary">
            Baca Berita
          </a>
        </div>
      </div>
    </div>
  );
}
