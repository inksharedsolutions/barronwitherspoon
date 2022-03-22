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
                                A book reader turned a book writer. His stories are a glimpse of his memoirs and his encounters with the pristine nature where he grows up. Looking back on his writing career, he had to say that it is a gift that came from his earliest attempts at capturing an inspiring event that he would feel was in need of being recorded.
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

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={DummyAuthor} hidden />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;