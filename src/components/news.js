import './news.css';
import React from 'react';

class NewsComponent extends React.Component{
    render(){

        return <div className='news'>
                    <div className="header">
                        <div className="top">
                            <p className="author">author</p>
                            <p className="in">in</p>
                            <p className="topic_name">"Some text"</p>
                            <p className="published_date">published_date</p>
                        </div>
                        <div className="middle">                    
                            <a className="title">title</a>
                            <p className="short_desc">short_desc</p>
                        </div>
                        <div className="bottom">
                            <button className="theme">theme</button>                
                            <p className="time_over">"15 min"</p>
                            <li className="select">"selected for you"</li>
                        </div>
                    </div>
                    <div className="images">
                        <img src="#"/>
                    </div>
                    <div className="border"></div>
                </div>
    }
}

export default NewsComponent;