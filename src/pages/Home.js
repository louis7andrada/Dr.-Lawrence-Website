import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Home.css';
import logo from "../assets/images/7ah4lwcm.png";

function Home() {
    const twitterRef = useRef(null);
    const [isTwitterLoaded, setIsTwitterLoaded] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isTwitterLoaded) {
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
                                    width: '500',
                                    height: '825'
                                }
                            );
                        }
                    };

                    setIsTwitterLoaded(true);
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
    }, [isTwitterLoaded]);

    return (
        <div>
            <Header />
            <main className="home-content">
                <div className="main-content">
                    <div className="logo">
                        <img src={logo} alt="alt img" />
                    </div>
                    <div className="welcome-text">
                        <h1>Welcome to Dr. Lawrence website!</h1>
                        <p>
                            Lorem ipsum dolor sit amet. Ea voluptas sunt ut fugiat libero non quidem quod niti. Est magnam ipsa ut nulla nulla ab porro voluptates. Quo explicabo soluta et impedit consequatur sit asperiores voluptatibus qui molestias dolores et magni vitae ex reiciendis nisi id quis odit. Qui iure provident ad earum minima est quia modi ad ipsum officiis sed alias placeat est ratione quia ad mollitia dolorem! Et voluptas perferendis et error blanditiis et assumenda animi. Aut pariatur explicabo et nobis officiis cum consectetur beatae et velit odit et voluptatum iste. Quo fugit repudiandae non expedita quisquam et velit fugiat qui quaerat sunt. Aut tempora quia nam consequatur perferendis ea error internos ea illum minima sit eius neque rem omnis quidem aut impedit dignissimos. Quo dolorem quia sit asperiores animi est corporis tenetur.
                        </p>
                    </div>
                </div>
                <div className="twitter-section" ref={twitterRef}>
                    {!isTwitterLoaded && <div className="skeleton-loader"></div>}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Home;
