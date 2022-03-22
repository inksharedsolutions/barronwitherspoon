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
                            A book reader turned a book writer. His stories are a glimpse of his memoirs and his encounters with the pristine nature where he grows up. Looking back on his writing career, he had to say that it is a gift that came from his earliest attempts at capturing an inspiring event that he would feel was in need of being recorded. As early as high school days, he already started collecting poems from a certain event that he encountered. His mother inspired him a lot to pursue his passion on writing by avidly reading book of literature to him and to other children.
                            </p>

                            <p>
                            Along with the bookmobile that stopped in front of their home during summer break between his first and fourth grade years thus thrusting him into a lifetime of learning thru his avid reading. One other event shaping his thirst for learning was when he encountered the Greek philosopher’s teachings. Plato, a disciple of Socrates, and a teacher of Aristotle. Thus, having already in his youth developed a keen sense towards capturing inspiring events in his poems and stories. To his delightful encounter with their teachings, he intersected with it as their teachings arrived from the corridors of time at his receptive age. “If it wasn’t RECORDED it didn’t HAPPENED, UNTIL IT IS RECORDED, ONLY THEN WILL OUR CONTRIBUTIONS continue traveling on in the CORRIDORS of TIMELESSNESS?!?!” 
                            </p>

                            <p>
                            He is currently writing a sci-fi novel book which will be out soon. It will be a series book which will be full of adventures, learnings, entertainment and knowledge. He will continuously keep on writing as he wanted to nurture the gift that God has given to him to share more beautiful stories to people. Your comments and reviews in this webpage may contribute KNOWLEDGE to all of us in PURSUIT of a REMEDY for this UNQUENCHABLE THIRST for KNOWLEDGE!
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