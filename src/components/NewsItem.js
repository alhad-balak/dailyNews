import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageURL, newsURL, time, author } = this.props;
    return (
      <div className='text-left'><div className="card" style={{ width: '18rem' }}>
        <img src={imageURL} className="img-thumbnail card-img-top" alt="..."  />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 45)}{title.length > 10 ? "..." : "."}</h5>
          <p className="card-text">{description.slice(0, 84)}{description.length > 70 ? "..." : ""}</p>
          <div className='d-flex justify-content-between'>
            <a href={newsURL} target='_blank' className="btn btn-sm btn-primary">Read more</a>
            <p className="lead text-muted fs-6 fw-lighter"><em>{author.slice(0, 5)} @ {time.slice(10, 20)}</em></p>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default NewsItem