import React from 'react';
import './Main.css';
import HeaderComponent from './components/header';
import MediumComponent from './components/medium';
import NewsComponent from './components/news';

let articles = [
  {
      id: 0,
      author: "Gulien",
      topic_name: "cats",
      published_date: "5 March",
      title: "The most beautiful cats",
      short_desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      theme: "Animals",
      time_over: "15 min",
      select: "selected for you",
      image: "images/0.png"

  },
  {
      id: 1,
      author: "Myiosh",
      topic_name: "dogs",
      published_date: "7 February",
      title: "The most beautiful dogs",
      short_desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      theme: "hunters",
      time_over: "25 min",
      select: "selected for miosh",
      image: "images/1.png"

  },
  {
      id: 2,
      author: "Relon",
      topic_name: "snakes",
      published_date: "8 May",
      title: "The most beautiful snakes",
      short_desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      theme: "Animals",
      time_over: "35 min",
      select: "selected for relon",
      image: "images/2.png"

  },
];



function App() {
  return (
    <div className="App">
      <MediumComponent/>
      <HeaderComponent/>
      {articles.map(article => <NewsComponent key={article.id} article={article}/>)}
    </div>
  );
}

export default App;
