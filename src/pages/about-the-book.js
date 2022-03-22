import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/JamesWBosleybook.png'
import Book2 from '../../static/books/Brad-2.png'
import { Helmet } from "react-helmet"


const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'barron-witherspoon',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
                <Helmet title="About the Book | Barron Witherspoon Sr." />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `The Fallacy of Affinity`,
                                spanFirst: `A Case for Cross-Cultural Worship`,
                                imgSrc: Book1,
                                id: 'sailor-sermon',
                                content:
                                    `
                                    <p>
                                    The Fallacy of Affinity makes the case for cross-cultural worship as an imperative for all Christians. The book makes the case biblically and empirically and supports the case with practical experience.

                                    <br/><br/>

                                    The Fallacy of Affinity debunks the theory that homogeneous congregations grow faster and grow deeper than diverse congregations. They may grow faster, but they do not grow deeper. The author not only suggests it is good to have diversity in Christian congregations, he claims, "Any ministry that does not have a clear and compelling objective to enable cross-cultural worship among the fellowship of believers is working against God's plan for his church."

                                    <br/><br/>

                                    The Fallacy of Affinity is also the story of one man's spiritual journey from the life of a typical youth in a segregated community, including segregated worship, to a life of full appreciation for the benefits of diversity in the Christian context. The book speaks to the head with hard-hitting facts and to the heart with real-life stories.


                                    </p>
                                    `,
                                ebooks: {
                                    // stratton: 'https://www.stratton-press.com/books/heroes-and-villains-california-dreaming-book-i/',
                                    barnes: 'https://www.barnesandnoble.com/w/the-fallacy-of-affinity-barron-witherspoon/1140316551?ean=9781648955778',
                                    amazon: 'https://www.amazon.com/Fallacy-Affinity-Case-Cross-Cultural-Worship-ebook/dp/B09HXZ1TNJ/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1634323774&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Fallacy-Affinity-Case-Cross-Cultural-Worship/dp/1648955762/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1634323774&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/the-fallacy-of-affinity-barron-witherspoon/1140316551?ean=9781648955761',
                                    booksamillion: 'https://www.booksamillion.com/p/Fallacy-Affinity/Barron-Witherspoon/9781648955761?id=8158356429268',
                                }
                            }}
                        />

                        <div className="commentSection">
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;