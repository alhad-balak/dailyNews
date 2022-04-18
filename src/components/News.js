import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  articles = []

  static defaultProps = {
    country: 'in',
    category: 'general',
    pageSize: 12
  }

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pageSize: 21,
      totalResults: 0
    }
    document.title = `Daily News | ${this.props.category[0].toUpperCase()}${this.props.category.slice(1)}`;
  }
  async updateNews() {
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();

    this.props.setProgress(70);
    // console.log(parsedData.articles);
    if (parsedData.articles.length === 0)
      this.setState({
        loading: false
      })
    // this.articles=parsedData.articles;
    this.setState({
      totalResults: parsedData.totalResults,
      articles: (parsedData.articles),
      loading: parsedData.status == "ok" ? false : true
    });

    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.setState({
      loading: true
    })
    this.updateNews();
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7aa8afaf73474ea2b5b9814f71748140&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData.articles);
    // // this.articles=parsedData.articles;
    // this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: parsedData.status == "ok" ? false : true });
    // // console.log(this.state.articles);
  }


  handleNextClick = async () => {
    console.log("Next button is clicked")
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize)) {
      this.setState({ loading: true });
      this.setState({
        page: this.state.page + 1,
      })
      this.updateNews();
      // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}apiKey&apiKey=7aa8afaf73474ea2b5b9814f71748140&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      // let data = await fetch(url);
      // let parsedData = await data.json();
      // console.log(parsedData.articles);
      // this.setState({ articles: parsedData.articles, page: this.state.page + 1, loading: parsedData.status == "ok" ? false : true });
    }
  }
  handlePrevClick = async () => {
    console.log("Prveious button is clicked")
    this.setState({ loading: true });

    this.setState({
      page: this.state.page - 1,
      loading: true
    })
    this.updateNews();
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}apiKey&apiKey=7aa8afaf73474ea2b5b9814f71748140&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData.articles);
    // this.setState({ articles: parsedData.articles, page: this.state.page - 1, loading: parsedData.status == "ok" ? false : true });

  }
  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1
    })
    // this.updateNews();
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(this.state.articles);
    if (parsedData.articles.length === 0)
      this.setState({
        loading: false
      })
    // this.articles=parsedData.articles;
    this.setState({
      totalResults: parsedData.totalResults,
      loading: parsedData.status == "ok" ? false : true,
      articles: this.state.articles.concat(parsedData.articles)
    });
    this.setState({

    })
  };

  render() {
    return (
      <div className='container mx-1 my-2'>
        <center><h1>Daily News- Top Headlines</h1>
          {/* {this.state.loading && <Spinner />} */}
        </center>
        <InfiniteScroll
          dataLength={this.state.articles.length ? this.state.articles.length : null}
          next={this.fetchMoreData}
          hasMore={this.state.page.length !== this.state.totalResults}
          loader={this.state.loading ? <Spinner /> : false}
        >
          <div className="row my-4 mx-0 ">
            {this.state.articles.map((element) => {
              // console.log(element);
              return <div className="col-md-4 my-2 d-flex justify-content-center" key={element.url}>
                <NewsItem title={element.title} description={element.description} imageURL={element.urlToImage} newsURL={element.url} time={element.publishedAt} author={element.author} source={element.source} />
              </div>
            })}
          </div>
        </InfiniteScroll>
        {/* <div className='d-flex justify-content-between'>
          <button type="button" disabled={this.state.page <= 1} className="btn btn-sm btn-primary" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button type="button" disabled={this.state.page + 1 > (Math.ceil(this.state.totalResults / this.props.pageSize))} className="btn btn-sm btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </div >
    )
  }
}

export default News
