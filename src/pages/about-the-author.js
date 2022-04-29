import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
// import Event from '../components/event'


import Banner from '../components/non-front-banner'
// import AuthorImg from '../../static/author/author-profile.jpg'
import DummyImg from '../../static/author/dummy-profile.jpg'
import { Helmet } from "react-helmet"

const ATB = (props) => {

    return (
        <>
            <Layout>
                <Helmet title="About the Author | Barron Witherspoon Sr." />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img
                                    src={DummyImg}
                                    alt="_main_author" />
                            </div>
                        </div>


                        <article className="article-section column" id="author">

                            <p>
                            Barron Witherspoon, Sr. retired as P&G's Senior Vice President for Global Industry Affairs & The Corporate Race Initiative, based in the company's Cincinnati, Ohio Headquarters. Tapped by the CEO to lead the Corporate Race Initiative, his charge was to build a coalition to "define, declare and demonstrate the specific role corporations should play in improving racial equity in America." In Industry Affairs, he led the company's worldwide external interface with trade associations & thought leaders impacting public policy and industry standards.
                            </p>

                            <p>
                            Mr. Witherspoon held numerous officer-level roles including VP Global Operations for Strategic Revenue & Pricing Management where he worked at enterprise level across all business units to develop and implement topline growth strategies. He was VP and General Manager for P&G's Asia business, responsible for all customer-facing operations in Southeast Asia, Australasia, India (and later Korea and Japan). Based in Singapore, he led P&G's business in a massive geography with the highest store concentration in the world. His region spanned 13 time zones & served 1/3 of the world's consumers. He also led the company's global Paper Products business with Walmart, P&G's largest customer. His 35-year P&G career began in advertising in 1985 and his strong commercial leadership was evidenced in line and staff positions in Marketing, Finance and Sales.
                            </p>

                            <p>
                            Mr. Witherspoon is recognized domestically and internationally among America's most influential leaders. He was named among the "Top 50 Multi-Cultural Leaders" and the "Top 100 Most Influential African Americans in Business" by the National Diversity Council in 2021. He was named by Savoy Magazine to their "Most Influential Black Executives in Corporate America" list in 2020. And in 2019, AACSB International named him a "Most Influential Leader Among Business School Graduates."
                            </p>

                            <p>
                            He was a college exchange student in Konstanz, Germany and has earned degrees in Education from Eastern Florida State College and in Economics from Tuskegee University where he graduated cum laude. Trained for ministry at Cincinnati Bible Seminary, he is licensed & ordained.
                            </p>

                            <p>
                            His board-level community service includes: chairman, INROADS National Board of Directors and vice chairman, Tuskegee University's Board of Trustees. His industry board work includes: co-chair, E2E Value Chain Pillar of Consumer Goods Forum, Board Committee for Standards at GS1 and past chairman of ECR Asia Pacific. He is also a member of The Executive Leadership Council.
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Barron Witherspoon</span>
                                </span>
                            </p>

                        </article>
                    </section>
                </div>

                {/* <Event /> */}


            </Layout>
        </>
    )
}


export default ATB;