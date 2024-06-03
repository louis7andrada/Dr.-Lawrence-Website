import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Blog.css';

function Blog() {
    const twitterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const script = document.createElement('script');
                    script.src = 'https://platform.twitter.com/widgets.js';
                    script.async = true;
                    script.charset = 'utf-8';
                    document.body.appendChild(script);

                    script.onload = () => {
                        if (window.twttr) {
                            window.twttr.widgets.createTimeline(
                                {
                                    sourceType: 'profile',
                                    screenName: 'uoft'
                                },
                                twitterRef.current,
                                {
                                    width: '1250',
                                    height: '900'
                                }
                            );
                        }
                    };

                    observer.unobserve(twitterRef.current);
                }
            });
        });

        if (twitterRef.current) {
            observer.observe(twitterRef.current);
        }

        return () => {
            if (twitterRef.current) {
                observer.unobserve(twitterRef.current);
            }
        };
    }, []);

    return (
        <div>
            <Header />
            <main className="blog-content">
                <h1>Blog</h1>
                <p>
                    Welcome to our blog! Here we share updates, stories, and insights about our ongoing work and the broader field of migrant oral health.
                    Check back regularly for the latest posts and news.
                </p>
                <div className="twitter-container" ref={twitterRef}></div>
            </main>
            <Footer />
        </div>
    );
}

export default Blog;
