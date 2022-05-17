import React from 'react'
import { Link } from 'gatsby'
import FrontBook from '../../static/books/JamesWBosleybook.png'

const MidBook = (props) => {


    return (
        <>
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books">

                        <div className="book-wraps">
                            <img src={FrontBook} alt="book-img" />
                        </div>

                        <div className="content-wraps">

                            <span className="italic-tag">
                                Read, and learn in various formats
                            </span>

                            <h1 className="heading--featured">
                                <span>Featured</span>
                                <span>Book</span>
                            </h1>

                            <p>
                            The Fallacy of Affinity makes the case for cross-cultural worship as an imperative for all Christians. The book makes the case biblically and empirically and supports the case with practical experience...    
                            <Link to="/about-the-book">
                                        Read More
                                </Link>


                            </p>

                            <button className="btn-book-featured">
                                <Link to="https://www.amazon.com/Fallacy-Affinity-Case-Cross-Cultural-Worship-ebook/dp/B09HXZ1TNJ/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1634323774&sr=8-1" target="_blank">
                                    Buy Now
                                </Link>
                            </button>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook