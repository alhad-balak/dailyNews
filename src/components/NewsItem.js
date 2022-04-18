import React from 'react'

export default function NewsItem(props) {
  // let { title, description, imageURL, newsURL, props.time, props.author, props.source } = this.props;
  return (
    <div className='text-left'><div className="card">
      <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
        <span className="badge rounded-pill bg-danger">{props.source ? props.source.name.split(".com")[0] : "unknown"}
        </span>
      </div>

      <img src={props.imageURL ? props.imageURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoruLW-fPJAchs4OVGL2xH3sUKqSyo_8cjDvk_9NEieCEjmzCVwS_l0qdX6QMRhmhA6Fo"} className="img-thumbnail card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title.slice(0, 45)}{props.title.length > 10 ? "..." : "."}</h5>
        <p className="card-text">{props.description ? props.description.slice(0, 67) : ""}{props.description ? props.description.length > 70 ? "..." : "" : ""}</p>
        <p className="card-text">
          <small className="text-muted"><em> {props.author ? "By " : ""}{props.author} {props.author && props.time ? "on " + props.time.slice(0, 10) : !props.author && props.time ? "Published on " + props.time.slice(0, 10) : ""}</em></small>
        </p>
        <div className='d-flex justify-content-between'>
          <a href={props.newsURL} target='_blank' className="btn btn-sm btn-primary">Read more</a>
        </div>

      </div>
    </div>
    </div>
  )
}