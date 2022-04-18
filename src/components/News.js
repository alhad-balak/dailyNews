import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export default function News(props) {

  const [articles, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);



  const updateNews = async () => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();

    props.setProgress(70);
    // console.log(parsedData.articles);
    if (parsedData.articles.length === 0)
      setLoading(false)
    // articles=parsedData.articles;
    setArticle(parsedData.articles);
    setLoading(parsedData.status === "ok" ? false : true)
    setTotalResults(parsedData.totalResults)
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `Daily News | ${props.category[0].toUpperCase()}${props.category.slice(1)}`;
    setLoading(true)
    updateNews();
  }, [])


  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(articles);
    setPage(page + 1)
    if (parsedData.articles.length === 0)
      setLoading(false)
    // articles=parsedData.articles;
    setArticle(parsedData.articles);
    setLoading(parsedData.status === "ok" ? false : true)
    setTotalResults(parsedData.totalResults)
  };

  return (
    <div>
      <h1 className='text-center' style={{ marginTop: '70px' }}>Daily News- Top {props.category === 'general' ? null : props.category[0].toUpperCase() + props.category.slice(1)} Headlines</h1>
      {/* {loading && <Spinner />} */}

      <InfiniteScroll
        dataLength={articles.length ? articles.length : null}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={loading ? <Spinner /> : false}
      >
        <div className="row my-4 mx-0 ">
          {articles.map((element) => {
            // console.log(element);
            return <div className="col-md-4 my-2 d-flex justify-content-center" key={element.url}>
              <NewsItem title={element.title} description={element.description} imageURL={element.urlToImage} newsURL={element.url} time={element.publishedAt} author={element.author} source={element.source} />
            </div>
          })}
        </div>
      </InfiniteScroll>
      {/* <div className='d-flex justify-content-between'>
          <button type="button" disabled={page <= 1} className="btn btn-sm btn-primary" onClick={handlePrevClick}> &larr; Previous</button>
          <button type="button" disabled={page + 1 > (Math.ceil(totalResults / props.pageSize))} className="btn btn-sm btn-primary" onClick={handleNextClick}>Next &rarr;</button>
        </div> */}
    </div >
  )
}

News.defaultProps = {
  country: 'in',
  category: 'general',
  pageSize: 12
}
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number
}