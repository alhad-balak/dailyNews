import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageURL, newsURL, time, author, source } = this.props;
    return (
      <div className='text-left'><div className="card">
        <img src={imageURL} className="img-thumbnail card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 45)}{title.length > 10 ? "..." : "."}</h5>
          <p className="card-text">{description.slice(0, 84)}{description.length > 70 ? "..." : ""}</p>
          <p className="card-text">
            <small className="text-muted">Source: {source.name}</small><br />
            <small className="text-muted"><em> {author ? "By " : ""}{author} {author&&time?"on "+time.slice(0,10):!author&&time?"Published on "+time.slice(0,10):""}</em></small>
          </p>
          <div className='d-flex justify-content-between'>
            <a href={newsURL} target='_blank' className="btn btn-sm btn-primary">Read more</a>
          </div>
          
        </div>
      </div>
      </div>
    )
  }
}

export default NewsItem