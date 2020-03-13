import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="tc2020-main">
          <Parallax
            className="tc2020-parallax"
            ref={ref => (this.parallax = ref)}
            pages={7.5}
          >
            <ParallaxLayer factor={1.4} offset={0} speed={0.1}>
              <div
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(245, 245, 245, 1) 30%, rgba(235, 235, 235, 1) 40%, rgba(200, 200, 200, 1) 60%, rgba(187, 187, 187, 1) 70%, rgba(187, 187, 187, 1) 75%, rgba(187, 187, 187, .8) 85%, rgba(0, 0, 0, 1) 100% )",
                  height: "100%",
                  zIndex: "4"
                }}
              ></div>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={0}>
              <div className="container" style={{ zIndex: "5" }}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="tc2020-nav">
                      <a href="/">Home</a>
                      <a href="/">Agenda</a>
                      <a href="/">Schedule</a>
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={0.1} speed={-0.1}>
              <div className="tc2020-header-image" style={{ zIndex: "5" }}>
                <img
                  src="https://arctravelconnect.com/globalassets/Home2/2020/homepage/TravelConnect-logo.svg"
                  alt=""
                />
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={0.93} speed={0.1}>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="tc2020-header-date">October 7-8 2020</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="postjumbotron">
                      <div className="tcDate">
                        Register for ARC TravelConnect 2020
                      </div>
                      <div className="tcEarlybird">
                        <div className="tcFormLabel">
                          ARC Earlybird Customer Rate
                        </div>
                        <div className="tcPrice">$249.00</div>
                        <div className="tcSubmitForm">
                          <form
                            action="https://www.surveygizmo.com/s3/5251208/TC-2019-Interest"
                            method="post"
                            className="sg-survey-form"
                            id="sg_FormFor5251208"
                          >
                            <div className="sg-hidden-inputs">
                              <input
                                type="hidden"
                                name="sg_navchoice"
                                id="sg_navchoice"
                                value=""
                              />
                              <input
                                type="hidden"
                                name="sg_currentpageid"
                                id="sg_currentpageid"
                                value="1"
                              />
                              <input
                                type="hidden"
                                name="sg_surveyident"
                                id="sg_surveyident"
                                value="5251208"
                              />
                              <input
                                type="hidden"
                                name="sg_sessionid"
                                id="sg_sessionid"
                                value=""
                              />
                              <input
                                type="hidden"
                                name="sg_high_contrast"
                                id="sg_high_contrast"
                                value=""
                              />
                              <input
                                type="hidden"
                                name="sg_cint_panelist"
                                id="sg_cint_panelist"
                                value=""
                              />
                              <input
                                id="sg_referer"
                                type="hidden"
                                name="sg_referer"
                                value="https://app.surveygizmo.com/distribute/share/id/5251208"
                              />
                              <input
                                type="hidden"
                                name="sg_interactionlevel"
                                id="sg_interactionlevel"
                                value="0"
                              />
                              <input
                                type="hidden"
                                name="sgef6bebff7e63f092e6af9654bef208c5"
                                id="sgef6bebff7e63f092e6af9654bef208c5"
                                value=""
                              />
                            </div>
                            <div className="sg-wrapper">
                              <div className="sg-header">
                                <div className="sg-header-hook-1"></div>
                                <img
                                  className="sg-header-image"
                                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                  alt=""
                                />

                                <h1 className="sg-title">
                                  <span>TC 2019 Interest</span>
                                </h1>

                                <div className="sg-header-hook-2"></div>
                              </div>
                              <div className="sg-content">
                                <div className="sg-content-hook-1"></div>

                                <div className="sg-question-set">
                                  <div
                                    id="sgE-5251208-1-3-box"
                                    className="sg-question sg-type-textbox "
                                  >
                                    <input
                                      type="hidden"
                                      id="sgE-5251208-1-3-meta"
                                      name="sgE-5251208-1-3-meta"
                                      value="hidden=false&amp;required=false"
                                    />
                                    <input
                                      type="hidden"
                                      id="sgE-5251208-1-3-time"
                                      name="sgE-5251208-1-3-time"
                                      value=""
                                    />
                                    <div className="sg-question-title"></div>
                                    <div className="sg-question-options ">
                                      <div className="sg-control-text sg-control-email">
                                        <input
                                          type="text"
                                          className="sg-input sg-input-text sg-validation-email"
                                          id="sgE-5251208-1-3-element"
                                          name="sgE-5251208-1-3"
                                          title="Email Address"
                                          placeholder="Email Address"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="sg-content-hook-2"></div>

                                <div className="sg-footer">
                                  <div className="sg-footer-hook-1"></div>

                                  <div className="sg-button-bar">
                                    <input
                                      type="submit"
                                      className="sg-button sg-submit-button"
                                      id="sg_SubmitButton"
                                      name="sGizmoSubmitButton"
                                      aria-label="submit button"
                                      onclick="$SG('sg_navchoice').value='sGizmoSubmitButton';return(true);"
                                      value="Submit"
                                    />
                                  </div>
                                  <div
                                    className="sg-progress-bar"
                                    role="progressbar"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    aria-valuenow="0"
                                  >
                                    <div className="sg-progress-bar-text">
                                      0%
                                    </div>
                                    <div className="sg-progress-bar-background">
                                      <div className="sg-progress-bar-inner"></div>
                                    </div>
                                  </div>

                                  <div className="sg-footer-hook-2"></div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={1.5} speed={0.15}>
              <div className="tc2020-recap-title">
                <img
                  src="https://arctravelconnect.com/globalassets/Home2/2020/homepage/2019-recap.svg"
                  alt=""
                />
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={1.6} speed={0.2}>
              <div className="container">
                <div className="row" style={{ zIndex: "3" }}>
                  <div className="col-md-12">
                    <div className="tc2020-recap-section">
                      <div className="tc2020-recap-image-top tc2020-amy-webb mt-5">
                        <img
                          className="tc2020-author rellax"
                          data-rellax-speed="1"
                          src="https://arctravelconnect.com/globalassets/Home2/2020/homepage/Amy-Webb-Photo.png"
                          alt=""
                        />
                        <img
                          className="tc2020-recap-img-title rellax"
                          data-rellax-speed="-0.3"
                          src="https://arctravelconnect.com/globalassets/Home2/2020/homepage/DISRUPTIVE-TECHNOLOGY.svg"
                          alt=""
                        />
                      </div>
                      <div className="tc2020-recap-body">
                        <p>
                          Quantitative futurist Amy Webb dazzled the audience
                          with stories about companies that successfully
                          anticipated and adapted to disruption over and over
                          again. (Did you know that Nintendo got its start
                          creating handmade playing cards in the 1800s — and
                          that it still produces them?)
                        </p>

                        <p>
                          Webb described how companies can be “pathfinders” by
                          confronting uncertainty using data — and by flexibly
                          recalibrating their strategies when needed.
                        </p>

                        <p className="mt-5">
                          <span className="tc2020-resources">
                            <strong>Resources</strong>
                          </span>
                          <a
                            href="https://www.dropbox.com/sh/9ziwucwikrl19vd/AADIgJrmuGzY54MeAz2M48vHa?dl=0"
                            target="_blank"
                          >
                            Amy Webb’s TravelConnect 2019 Presentation Resources
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={2.3} speed={0.16}>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="tc2020-recap-section">
                      <div className="tc2020-recap-image-top tc2020-dave-harvey">
                        <img
                          className="tc2020-author rellax"
                          data-rellax-speed="-0.5"
                          src="https://arctravelconnect.com/globalassets/Home2/2020/homepage/Dave-Harvey-Photo.png"
                          alt="Dave Harvey"
                        />
                        <img
                          className="tc2020-recap-img-title rellax"
                          data-rellax-speed=".5"
                          src="https://arctravelconnect.com/globalassets/Home2/2020/homepage/CHANNELS-OF-CHOICE.svg"
                          alt="Channels of Choice"
                        />
                      </div>
                      <div className="tc2020-recap-body">
                        <p>
                          Vice President of Southwest Business Dave Harvey
                          talked about the feedback the airline has received
                          after announcing this summer its decision to expand
                          its corporate travel distribution strategy.
                        </p>
                        <p></p>
                        <p className="mt-5">
                          <span className="tc2020-resources">
                            <strong>
                              What People are saying about this dicussion
                            </strong>
                          </span>
                        </p>
                        <p>
                          <a
                            href="https://kambr.media/carrier-news/southwests-distribution-expansion-strategy-reflects"
                            target="_blank"
                          >
                            Southwest’s Distribution Expansion Strategy Reflects
                            Agencies’ Demands
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={3} speed={0.11}>
              <div className="tc2020-full-boni-simi">
                <div className="row">
                  <div className="col-md-12">
                    <div className="tc2020-recap-section">
                      <div className="tc2020-recap-image-top tc2020-bonny-simi">
                        <img
                          className="tc2020-recap-img-title rellax"
                          data-rellax-speed="-2"
                          src="https://arctravelconnect.com/globalassets/Home2/2020/homepage/JETBLUE-TECHNOLOGY.svg"
                          alt=""
                        />
                      </div>
                      <div className="tc2020-recap-body">
                        <p style={{ maxWidth: "350px" }}>
                          President of JetBlue Technology Ventures, Bonny Simi,
                          shared about the startups they’re investing in to
                          explore AI, IoT, mobility and blockchain technologies.
                          She said travel brands should be focused on
                          distributed ledger technology and machine learning.
                        </p>
                        <p></p>
                        <p className="mt-5">
                          <span className="tc2020-resources">
                            <strong>Resources</strong>
                          </span>
                          Presentation:
                          <a
                            href="/link/6551c60e8a654161a617113cb3e79466.aspx"
                            target="_blank"
                          >
                            Travel Technology Startups and Shake-Ups
                          </a>
                          <a id="_anchor_1" href="#_msocom_1">
                            <br />
                          </a>
                        </p>
                        <p></p>
                        <p className="mt-5">
                          <span className="tc2020-resources">
                            <strong>
                              What People are saying about this dicussion
                            </strong>
                          </span>
                        </p>
                        <p>
                          <span>
                            Jetblue Technology Ventures' Simi:
                            <a
                              href="https://kambr.media/travel-tech/jetblue-technology-ventures-simi-why-airlines-need"
                              target="_blank"
                            >
                              Why Airlines Need to Train Revenue Managers to Be
                              Data Scientists
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={4.4} speed={0.15}>
              <div className="tc2020-full-recap">
                <a href="/tc2019/recap/" className="ctaBtn" target="_blank">
                  See Full Recap
                </a>
                <div className="tc2020-line tc2020-line1"></div>
                <div className="tc2020-line tc2020-line2"></div>
                <div className="tc2020-line tc2020-line3"></div>
                <div className="tc2020-line tc2020-line4"></div>
                <div className="tc2020-line tc2020-line5"></div>
                <div className="tc2020-line tc2020-line6"></div>
                <div className="tc2020-line tc2020-line7"></div>
                <div className="tc2020-line tc2020-line8"></div>
                <div className="tc2020-line tc2020-line9"></div>
                <div className="tc2020-line tc2020-line10"></div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={4.6} speed={0.11}>
              <div className="tc2020-omni">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <img
                        src="https://arctravelconnect.com/globalassets/Home2/2020/homepage/OMNICHANNEL-WITH-PARAGRAPH.svg"
                        alt=""
                        className="rellax"
                        data-rellax-speed="-0.3"
                      />
                      <a
                        href="https://www2.arccorp.com/about-us/arc-omnichannel-retailing/"
                        target="_blank"
                        className="ctaBtn"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={5.4} speed={0.14}>
              <div className="tc2020-travel-journey">
                <div className="tc2020-tj">
                  <img
                    src="https://arctravelconnect.com/globalassets/Home2/2020/homepage/THE-TRAVEL-JOURNEY-PEOPLE-LEFT.svg"
                    alt=""
                    className="tc2020-tj-left"
                  />
                  <img
                    src="https://arctravelconnect.com/globalassets/Home2/2020/homepage/THE-TRAVEL-JOURNEY-PEOPLE-RIGHT.svg"
                    alt=""
                    className="tc2020-tj-right"
                  />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="tc2020-tj-title">
                          <img
                            src="https://arctravelconnect.com/globalassets/Home2/2020/homepage/THE-TRAVEL-JOURNEY.svg"
                            alt=""
                            className="rellax"
                            data-rellax-speed="0"
                          />
                        </div>
                        <div
                          className="tc2020-tj-body rellax"
                          data-rellax-speed="2"
                        >
                          <p>
                            With this interactive, digital experience explore
                            every aspect of the travel journey from trip
                            inspiration to purchasing, day of travel and beyond.
                            See the process as it is today and what tomorrow
                            will bring with groundbreaking initiatives ARC is
                            exploring to create better traveler experiences and
                            improved processes.
                          </p>
                          <a
                            href="https://arctraveljourney.com"
                            target="_blank"
                            className="ctaBtn"
                          >
                            The Travel Journey in Action
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={6.2} speed={0.23}>
              <div id="social" className="tc2020-social tcContainer">
                <div className="tcSocial">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="hashtag">#TravelConnect2020</div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="social-subtitle mt-3">
                          <img
                            src="https://arctravelconnect.com/globalassets/Home2/2020/homepage/FIND-US-ON.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="offset-1 col-2">
                        <a
                          href="https://www.facebook.com/ARCtalk"
                          title="facebook"
                          target="_blank"
                          className="icon-social icon-facebook"
                        ></a>
                      </div>
                      <div className="col-2">
                        <a
                          href="https://twitter.com/ARCtalk"
                          title="twitter"
                          target="_blank"
                          className="icon-social icon-twitter"
                        ></a>
                      </div>
                      <div className="col-2">
                        <a
                          href="https://www.linkedin.com/company/6509/"
                          target="_blank"
                          className="icon-social icon-linkedin"
                        ></a>
                      </div>
                      <div className="col-2">
                        <a
                          href="https://www.instagram.com/arctalk/"
                          target="_blank"
                          className="icon-social icon-instagram"
                        ></a>
                      </div>
                      <div className="col-2">
                        <a
                          href="https://www.youtube.com/channel/UCWHZsoCDNhjorop892EVETw/"
                          target="_blank"
                          className="icon-social icon-youtube"
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={6.8} speed={0.13}>
              <div className="tc2020-assistance">
                <div className="tc2020-assistance-inner">
                  <div className="container">
                    <div className="row ">
                      <div className="col-md-4">
                        <div className="tc2020-assistance-1">
                          Need <br />
                          Further <br />
                          Assistance
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="tc2020-assistance-2">
                          <div className="tc2020-h2">General Inquiries</div>
                          <strong>Carla Cobos-Hull</strong>
                          <br />
                          (703) 816-8521
                          <br />
                          <a href="mailto:ccoboshull@arccorp.com">
                            ccoboshull@arccorp.com
                          </a>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="tc2020-assistance-2">
                          <div className="tc2020-h2">Press</div>
                          <strong>Randy Spoon</strong>
                          <br />
                          (703) 816-5119
                          <br />
                          <a href="mailto:rspoon@arccorp.com">
                            rspoon@arccorp.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxLayer>

            <div style={{ position: "fixed", bottom: "0" }}>test</div>
          </Parallax>
        </div>
        <div className="tc2020-footer">
          asdf
        </div>
      </div>
    );
  }
}

export default App;
