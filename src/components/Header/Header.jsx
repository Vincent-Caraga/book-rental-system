import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div>
      <h1 className="title">TRENDING BOOKS</h1>
      <div className="image-container">
        <img className="book" src={assets.book_1} alt="Atomic Habits" />

        <div className="book-description">
          <h1 className="book-title">Atomic Habits</h1>
          <h2 className="book-author">by: James Clear</h2>
          <p className="description">
            "Atomic Habits" by James Clear is a personal development book that
            explains how tiny, consistent improvements in behavior can lead to
            remarkable long-term results. The word "atomic" refers to something
            very small — like an atom — but also powerful when combined. Clear
            uses this metaphor to show that small habits, done regularly, can
            transform your life. The book is based on the idea that you don’t
            need to make huge changes to see big results. Instead, by making 1%
            improvements every day — like reading a page, doing one push-up, or
            choosing water over soda — you create a system of positive change
            that builds up over time.
          </p>

          <img className="book-beself" src={assets.book_2} alt="" />
          <h1 className="book-self">Be Your Future Self Now</h1>
          <h2 className="book-author">Dr. Benjamin Hardy</h2>
          <p className="description">
            Be Your Future Self Now is a transformative self-help book that
            encourages readers to stop being defined by their past and instead
            be pulled forward by a vivid, compelling vision of their future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
