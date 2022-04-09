import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Steve Bartel",
      "title": "6 methods for reducing bias in candidate sourcing and screening",
      "description": "Whenever you open a new role, start by asking the question: How do we ensure that our selection is based solely on criteria that’s relevant to the role?",
      "url": "https://techcrunch.com/2022/03/31/6-methods-for-reducing-bias-in-candidate-sourcing-and-screening/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/03/GettyImages-1360295809.jpg?w=600",
      "publishedAt": "2022-04-01T01:01:38Z",
      "content": "Over the last several years, an increasing number of companies have pledged to hire a more diverse workforce and begun releasing their diversity numbers annually. The results have been a mixedbag at … [+2506 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Haje Jan Kamps",
      "title": "GoPro's new battery grip triples your action-cam shooting time",
      "description": "The new GoPro Hero10 Black Creator Edition has directional audio, 5.3K video, an LED light source, and the powered Volta grip.",
      "url": "https://techcrunch.com/2022/03/31/gopro-volta-battery-grip/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/03/hero10black.jpeg?w=607",
      "publishedAt": "2022-03-31T23:43:58Z",
      "content": "You just know your battery will kick the bucket at the worst possible time, right when you’ve perfected your sick, hella nar-nar skateboard tricks, bruh. The new GoPro HERO10 Black Creator Edition (w… [+1719 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Christine Hall, Haje Jan Kamps",
      "title": "Daily Crunch: Intel will reportedly buy cloud-optimization startup Granulate for $650M",
      "description": "Hello friends and welcome to Daily Crunch, bringing you the most important startup, tech and venture capital news in a single package.",
      "url": "https://techcrunch.com/2022/03/31/daily-crunch-intel-will-reportedly-buy-cloud-optimization-startup-granulate-for-650m/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/08/GettyImages-1095112402.jpg?w=604",
      "publishedAt": "2022-03-31T22:30:07Z",
      "content": "To get a roundup of TechCrunchs biggest and most important stories delivered to your inbox every day at 3 p.m. PT, subscribe here.\r\nHello and welcome to Daily Crunch for Thursday, March 31, 2022!\r\nIt… [+7388 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Brian Heater",
      "title": "As counting wraps for the day, mixed results emerge in Amazon union votes",
      "description": "As of the close of today’s counting in the Bessemer, Alabama Amazon Union election, \"no\" votes are ahead 993 to 875.",
      "url": "https://techcrunch.com/2022/03/31/as-counting-wraps-for-the-day-mixed-results-emerge-in-amazon-union-votes/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/03/GettyImages-1232001976.jpg?w=600",
      "publishedAt": "2022-03-31T22:21:20Z",
      "content": "As of the close of todays counting in the Bessemer, Alabama Amazon Union election, “no” votes are ahead 993 to 875. Its a positive outcome thus far for Amazon, which has managed to ward off labor org… [+3193 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Rebecca Bellan",
      "title": "Biden's answer to high gas prices is to boost U.S. battery production",
      "description": "Biden authorizes Defense Production Act to secure U.S. production of EV battery materials to reduce demand on oil.",
      "url": "https://techcrunch.com/2022/03/31/biden-defense-production-act-ev-battery-materials/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/07/GettyImages-1234078533.jpg?w=600",
      "publishedAt": "2022-03-31T21:51:09Z",
      "content": "President Joe Biden will trigger the Defense Production Act to secure U.S. sources of critical minerals and materials like lithium, nickel, cobalt, graphite and manganese that are used to make batter… [+3166 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Brian Heater",
      "title": "E3 2022 canceled, planners say gaming show will return next year",
      "description": "Entertainment Software Association (ESA) confirms E3 canceled.",
      "url": "https://techcrunch.com/2022/03/31/e3-2022-canceled-planners-say-gaming-show-will-return-next-year/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/08/fortnite-epic-GettyImages-972799818.jpg?w=600",
      "publishedAt": "2022-03-31T21:14:06Z",
      "content": "Back in January, the Entertainment Software Association (ESA) announced that it had canceled plans for the return of an in-person E3. The news came as Omicron concerns lingered following the end of t… [+1781 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Brian Heater",
      "title": "Better learning through 'complex dough-manipulation'",
      "description": "Better learning through pizza-making robots.",
      "url": "https://techcrunch.com/2022/03/31/better-learning-through-complex-dough-manipulation/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/03/MIT-DiffSkill-01-PRESS_0.jpeg?w=600",
      "publishedAt": "2022-03-31T21:10:50Z",
      "content": "A disproportionate number of the early industrial food-making robots weve seen have been focused on pizza. Ive long posited that this is for two key reasons. First: People like pizza. We eat a lot of… [+1851 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Devin Coldewey",
      "title": "Behold the robo-berry",
      "description": "If you’ve never picked a raspberry, well, first of all that’s too bad, because a fresh raspberry is a beautiful thing. But second, and more immediately relevant in this case, you would not know that there is a technique to it that, surprisingly, robots aren’t…",
      "url": "https://techcrunch.com/2022/03/31/behold-the-robo-berry/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/03/epfl-roboberry.jpg?w=634",
      "publishedAt": "2022-03-31T21:08:43Z",
      "content": "If you’ve never picked a raspberry, well, first of all that’s too bad, because a fresh raspberry is a beautiful thing. But second, and more immediately relevant in this case, you would not know that … [+2286 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Rebecca Bellan",
      "title": "Co-founders of Ukrainian startup Delfast discuss navigating through a crisis",
      "description": "\"Every morning starts with a check-in on Slack with all the colleagues. It’s important to keep in touch and know that everyone is fine, or as fine as is possible right now.\"",
      "url": "https://techcrunch.com/2022/03/31/co-founders-of-ukrainian-startup-delfast-discuss-navigating-through-a-crisis/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/03/Tonkopiy-Denysenko.png?w=711",
      "publishedAt": "2022-03-31T20:56:16Z",
      "content": "The COVID-19 pandemic taught the world how to work from home, but Russias war in Ukraine has taught the employees at Delfast, a Ukrainian e-bike startup, how to work from bomb shelters, while on the … [+3508 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Jacquelyn Melinek",
      "title": "Goldman Sachs’ OTC Bitcoin options trade 'doesn’t mean much,' but can pave way for more institutional involvement",
      "description": "“Banks do what the clients ask for, and demand for crypto market access from clients remains high.\"",
      "url": "https://techcrunch.com/2022/03/31/goldman-sachs-otc-bitcoin-options-trade-doesnt-mean-much-but-can-pave-way-for-more-institutional-involvement/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2016/04/50ab98fb9e814b0b8842715389fa75fc.jpeg?w=664",
      "publishedAt": "2022-03-31T19:21:59Z",
      "content": "Goldman Sachs is no stranger to testing the waters with crypto, with institutional clients looking for more exposure in the space.\r\nLast week, Goldman was the first major U.S. bank to execute an over… [+2111 chars]"
    }
  ]

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
      articles: this.articles,
      loading: false,
      page: 1,
      pageSize: 21,
      totalResults: 1
    }
    document.title = `Daily News | ${this.props.category[0].toUpperCase()}${this.props.category.slice(1)}`;
  }
  async componentDidMount() {
    this.setState({
      loading: true
    })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7aa8afaf73474ea2b5b9814f71748140&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData.articles);
    // this.articles=parsedData.articles;
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: parsedData.status == "ok" ? false : true });
    // console.log(this.state.articles);
  }
  handleNextClick = async () => {
    console.log("Next button is clicked")
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize)) {
      this.setState({ loading: true });
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}apiKey&apiKey=7aa8afaf73474ea2b5b9814f71748140&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ articles: parsedData.articles, page: this.state.page+1, loading: parsedData.status == "ok" ? false : true });
    }
  }
  handlePrevClick = async () => {
    console.log("Prveious button is clicked")
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}apiKey&apiKey=7aa8afaf73474ea2b5b9814f71748140&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, page: this.state.page-1, loading: parsedData.status == "ok" ? false : true });

  }
  render() {
    return (
      <div className='container mx-1 my-2'>
        <center><h1>Daily News- Top Headlines</h1>
          {this.state.loading && <Spinner />}
        </center>

        <div className="row my-4 mx-0 ">
          {!this.state.loading && this.state.articles.map((element) => {
            // console.log(element);
            return <div className="col-md-4 my-2 d-flex justify-content-center" key={element.url}>
              <NewsItem title={element.title} description={element.description} imageURL={element.urlToImage} newsURL={element.url} time={element.publishedAt} author={element.author} source={element.source} />
            </div>
          })}
        </div>

        <div className='d-flex justify-content-between'>
          <button type="button" disabled={this.state.page <= 1} className="btn btn-sm btn-primary" onClick={this.handlePrevClick}> &larr; Previous</button>
          {/* <textarea className="form-control mx-2 form-outline w-25 mb-1" id="exampleFormControlTextarea1" rows="1" placeholder="Enter the page number"></textarea> */}
          <button type="button" disabled={this.state.page + 1 > (Math.ceil(this.state.totalResults / this.props.pageSize))} className="btn btn-sm btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div >
    )
  }
}

export default News
