import './news.css';
import React from 'react';

class NewsComponent extends React.Component {
    render() {
        
        const a = this.props.article

        return <div className='news'>
            <div className="news-text">
                <div className="top">
                    <p className="author">{a.author}</p>
                    <p className="in">in</p>
                    <p className="topic_name">{a.topic_name}</p>
                    <p className="published_date">{a.published_date}</p>
                </div>
                <div className="middle">
                    <a className="title">{a.title}</a>
                    <p className="short_desc">{a.short_desc}</p>
                </div>
                <div className="bottom">
                    <button className="theme">{a.theme}</button>
                    <p className="time_over">"15 min"</p>
                    <li className="select">"selected for you"</li>
                </div>
            </div>
            <div className="images">
                <img src={a.image}/>
            </div>
            <div className="line"></div>
        </div>
    }
}

export default NewsComponent;