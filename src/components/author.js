import React from 'react'
import AuthorImg from '../../static/author/dummy-profile.jpg';
import DummyAuthor from "../../static/author/dummy-profile.jpg";
import AuthorBackground from "../../static/banner/AuthorBackground.png";
import { Link } from 'gatsby'

const Author = () => {
    return (
        <>
            <section className="upper-main-author" id="main-upper-author">
                <div className="grid-two-columns">
                {/* This is a change */}
                            <div className="grid-child" id="author-contents">

                                <p>
                                Barron Witherspoon, Sr. retired as P&G's Senior Vice President for Global Industry Affairs & The Corporate Race Initiative, based in the company's Cincinnati, Ohio Headquarters. Tapped by the CEO to lead the Corporate Race Initiative, his charge was to build a coalition to "define, declare and demonstrate the specific role corporations should play in improving racial equity in America." In Industry Affairs, he led the company's worldwide external interface with trade associations & thought leaders impacting public policy and industry standards.
                                </p>

                                <h1 className="author-name-tag">
                                    <span>Barron Witherspoon Sr.</span>
                                </h1>

                                <span className="author-tagline">
                                    Author & Writer
                                </span>

                                <button className="btn-about-author">
                                    <Link to="/about-the-author">Read More</Link>
                                </button>
                            </div>
                            
                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg} />
                    </div>

                    {/* <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={DummyAuthor} hidden />
                    </div> */}

                </div>
            </section>
        </>
    )
}

export default Author;