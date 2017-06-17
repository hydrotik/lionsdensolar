'use strict';
const Layout = require('../layouts/default.jsx');
const Package = require('../../../package.json');
const React = require('react');
const ClassNames = require('classnames');


class LandingPage extends React.Component {
    render() {

        const neck = (
                <link rel='stylesheet' href="/public/pages/new-age.min.css" />
        );

        const feet = <script src="/public/pages/landing.min.js"></script>;


        const coded = "L3Kb5oQb99@8TM3L.GKT";
        const key = "lNjM3wV2vZmB0f4DAxbdLcXehHF9IWTuz7gtPqso1GkQOaipy6Yr5U8SERCKnJ";
        const shift = coded.length;
        let link = "";

        for (let i=0; i<coded.length; i++) {
            if (key.indexOf(coded.charAt(i))==-1) {
              let ltr = coded.charAt(i);
              link += (ltr);
            } else {     
              let ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length;
              link += (key.charAt(ltr));
            }
        }

        const email = <a href={'mailto:' + link }className={ClassNames('btn', 'btn-outline', 'btn-xl')}>Contact Lion's Den Solar Today!</a>

        return (
            <Layout
                title="Lion's Den Solar"
                neck={neck}
                feet={feet}
                activeTab="home">

                {/*
                <header className="masthead">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-7">
                                <div className="header-content">
                                    <div className="header-content-inner">
                                        <h1>Lion's Den Solar is St Croix, US Virgin Islands premier solar energy installation provider.</h1>
                                        <a href="#download" className="btn btn-outline btn-xl">Learn More!</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-5">
                                <div className="device-container">
                                    <div className={ClassNames('device-mockup', 'iphone6_plus', 'portrait white')}>
                                        <div className="device">
                                            <div className="screen">

                                                <img src="/public/media/demo-screen-1.jpg" className="img-fluid" alt="" />
                                            </div>
                                            <div className="button">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                
                <section className={ClassNames('bg-primary', 'text-center')}>
                    <div className="container">
                        <div className="row">
                            <div className={ClassNames('col-md-8', 'offset-md-2')} id="app-mount"></div>
                        </div>
                    </div>
                </section>
                */}

                <section className="cta">
                    <div className="cta-content">
                        <div className="container">
                            <h2>Lion's Den Solar is St Croix, US Virgin Islands premier solar energy installation provider</h2>
                            <a href="#features" className={ClassNames('btn', 'btn-outline', 'btn-xl')}>Learn More!</a>
                        </div>
                    </div>
                    <div className="overlay"></div>
                </section>

                {/*
                <section className={ClassNames('download', 'bg-primary', 'text-center')} id="download">
                    <div className="container">
                        <div className="row">
                            <div className={ClassNames('col-md-8', 'offset-md-2')}>
                                <h2 className="section-heading">Discover what all the buzz is about!</h2>
                                <p>Our experience is available on any listening platform! Download now to get started!</p>
                                <div className="badges">
                                    <a className="badge-link" href="#"><img src="/public/media/google-play-badge.svg" alt="" /></a>
                                    <a className="badge-link" href="#"><img src="/public/media/app-store-badge.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                */}
                <section className="features" id="features">
                    <div className="container">
                        <div className={ClassNames('section-heading', 'text-center')}>
                            <h2>Reliable, Efficient, Dependable, Green</h2>
                            <p className="text-muted">Unrivaled knowledge to address your solar or heating needs!</p>
                            <hr />
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="device-container">
                                    <div className={ClassNames('device-mockup', 'iphone6_plus', 'portrait white')}>
                                        <div className="device">
                                            <div className="screen">

                                                <img src="/public/media/demo-screen-1.jpg" className="img-fluid" alt="" /> </div>
                                            <div className="button">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="feature-item">
                                                <i className={ClassNames('icon-screen-smartphone', 'text-primary')}></i>
                                                <h3>Solar Panel Installation</h3>
                                                <p className="text-muted">Full service provider and capable of end to end installation on any scale.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="feature-item">
                                                <i className={ClassNames('icon-camera', 'text-primary')}></i>
                                                <h3>Solar Hot Water Installation</h3>
                                                <p className="text-muted">A solar hot water system provides an affordable way to reduce your energy bill and your carbon footprint.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="feature-item">
                                                <i className={ClassNames('icon-present', 'text-primary')}></i>
                                                <h3>Pool Heating and Pump Installation</h3>
                                                <p className="text-muted">Leverage the efficiency of a solar heated pool system to lower electric bills.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="feature-item">
                                                <i className={ClassNames('icon-lock-open', 'text-primary')}></i>
                                                <h3>Maintanance and Repair Services</h3>
                                                <p className="text-muted">Exceptional service for existing customers or customers with prior installation work.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cta2" id="contact">
                    <div className="cta-content">
                        <div className="container">
                            <h2>347.448.1715</h2>
                            {email}
                        </div>
                    </div>
                    <div className="overlay"></div>
                </section>

                {/*
                <section className={ClassNames('contact', 'bg-primary')} id="contact">
                    <div className="container">
                        <h2>347.448.1715</h2>

                        <h3>{email}</h3>

                        
                        <ul className={ClassNames('list-inline', 'list-social')}>
                            <li className={ClassNames('list-inline-item', 'social-twitter')}>
                                <a href="#"><i className={ClassNames('fa', 'fa-twitter')}></i></a>
                            </li>
                            <li className={ClassNames('list-inline-item', 'social-facebook')}>
                                <a href="#"><i className={ClassNames('fa', 'fa-facebook')}></i></a>
                            </li>
                            <li className={ClassNames('list-inline-item', 'social-google-plus')}>
                                <a href="#"><i className={ClassNames('fa', 'fa-google-plus')}></i></a>
                            </li>
                        </ul>
                        
                    </div>
                </section>
                */}
            </Layout>
        );
    }
}


module.exports = LandingPage;
