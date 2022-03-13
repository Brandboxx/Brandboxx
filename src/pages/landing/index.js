import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { LandingNavigation, Logo } from "../../components";

import { ButtonContainer } from "../../containers";

import {
  Banner,
  BannerContent,
  Text,
  Jumbotron,
  JumbotronInner,
  JumbotronHeaders,
  ServiceCards,
  PlanCards,
  MobileOverview,
  AbsoluteImg,
  RingImage,
  Footer,
  ReviewCards,
  MobileImg
} from "./style";

const Landing = (props) => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    if (isAuth) props.history.push("/dashboard");
  }, [isAuth, props.history]);

  const history = useHistory();
  return (
    <>
      <Banner>
        <div style={{ maxWidth: "1200px", margin: "0px auto" }}>
          <LandingNavigation />
          <BannerContent>
            <Text>
              <h1>
                Save for a<br /> better tomorrow
              </h1>
              <p>
                Keep your money safe from impulsive <br />expenses and earn interests while at it.
              </p>
              <div style={{ height: "30px" }} />
              <ButtonContainer
                onClick={() => history.push("/register")}
                width={"156px"}
              >
                Get Started
              </ButtonContainer>
            </Text>
            <img src={"/assets/img/hero.png"} alt={""} />
          </BannerContent>
        </div>
      </Banner>

      <Jumbotron bg={"#fff"}>
        <div style={{ maxWidth: "1200px", margin: "0px auto" }}>
          <JumbotronHeaders>
            <h1>We’ve got you covered, fear not!</h1>
            <p>
              We are with you on your journey to financial freedom.
            </p>
          </JumbotronHeaders>
          <JumbotronInner>
            <ServiceCards>
              <img src={"/assets/svg/service1.svg"} alt={""} />
              <p>Safe</p>
              <p>
                Growing your savings<br /> steadily one naira at a time.
              </p>
            </ServiceCards>
            <ServiceCards>
              <img src={"/assets/svg/service2.svg"} alt={""} />
              <p>Secure</p>
              <p>
                Your funds <br />are secure with us
              </p>
            </ServiceCards>
            <ServiceCards>
              <img src={"/assets/svg/service3.svg"} alt={""} />
              <p>Easy</p>
              <p>
                Access financial <br />security with simplicity and ease
              </p>
            </ServiceCards>
          </JumbotronInner>
        </div>
      </Jumbotron>

      <Jumbotron bg={"#EDFEFE"}>
        <div style={{ maxWidth: "1200px", margin: "0px auto" }}>
          <JumbotronHeaders>
            <h1>Our Saving Plans</h1>
            <p>
              Our simple and efficient plans to help you manage <br />your finances and channel your income in the right direction.
            </p>
          </JumbotronHeaders>
          <JumbotronInner>
            <PlanCards cl={"#18191F"}>
              <img src={"/assets/svg/mockup1.svg"} alt={""} />
              <main>
                <img src={"/assets/svg/plan3.svg"} alt={""} />
                <aside>
                  <h3>Flex Pocket</h3>
                  <p>
                    Flexible saving that allows you to deposit <br />and withdraw whenever <br />you wish.
                  </p>
                </aside>
              </main>
            </PlanCards>
            <PlanCards cl={"#580273"}>
              <img src={"/assets/svg/mockup2.svg"} alt={""} />
              <main>
                <img src={"/assets/svg/plan2.svg"} alt={""} />
                <aside>
                  <h3>Target Pocket</h3>
                  <p>
                    Saving towards a goal just got easier. Target pocket allows you to deposit money at intervals of your choosing towards a target goal.
                  </p>
                </aside>
              </main>
            </PlanCards>
            <PlanCards cl={"#FB7106"}>
              <img src={"/assets/svg/mockup3.svg"} alt={""} />
              <main>
                <img src={"/assets/svg/plan1.svg"} alt={""} />
                <aside>
                  <h3>Lock Pocket</h3>
                  <p>
                    Lock pocket allows you to keep funds you don’t want to spend safe from your reach until the agreed upon time and earn a 5% interest while you are at it.
                  </p>
                </aside>
              </main>
            </PlanCards>
          </JumbotronInner>
        </div>
      </Jumbotron>

      <Jumbotron>
        <div style={{ maxWidth: "1200px", margin: "0px auto" }}>
          <JumbotronHeaders>
            <h1 style={{ paddingBottom: "30px" }}>What our clients say</h1>
            <h4 style={{ textAlign: "center", color: "#149A9B" }}>
              You are my favorite customer!
            </h4>
          </JumbotronHeaders>
          <JumbotronInner>
            <ReviewCards>
              <img src={"/assets/svg/Title.svg"} alt={""} />
              <p>
                As a small-scale business owner, the centerpocket app has really helped me keep track of my income and ensure that I have money saved as my income comes in trickles and is quite hard to avoid miscellaneous spending.
              </p>
              <div>
                <main>
                  <img src={"/assets/svg/pic1.svg"} alt={""} />
                </main>
                <aside>
                  <h3>Sharon Egbu </h3>
                </aside>
              </div>
            </ReviewCards>
            <ReviewCards>
              <img src={"/assets/svg/Title.svg"} alt={""} />
              <p>
                The centerpocket app has helped me develop a saving culture as I’ve come to see that every single naira counts to building the savings portfolio of my dreams
              </p>
              <div>
                <main>
                  <img src={"/assets/svg/pic2.svg"} alt={""} />
                </main>
                <aside>
                  <h3>Tobi</h3>
                </aside>
              </div>
            </ReviewCards>
            <ReviewCards>
              <img src={"/assets/svg/Title.svg"} alt={""} />
              <p>
                It’s the simplicity and uncomplicatedness of the centerpocket app for me honestly. I’m definitely sold
              </p>
              <div>
                <main>
                  <img src={"/assets/svg/pic3.svg"} alt={""} />
                </main>
                <aside>
                  <h3>Hassan Audu</h3>
                </aside>
              </div>
            </ReviewCards>
            <ReviewCards>
              <img src={"/assets/svg/Title.svg"} alt={""} />
              <p>
                I’ve always been very skeptical about fin tech platforms as a struggling Nigerian. I just decided to give centerpocket a try as it was recommended to me by a very trusted friend.  I haven’t been disappointed since. Very commendable.
              </p>
              <div>
                <main>
                  <img src={"/assets/svg/pic4.svg"} alt={""} />
                </main>
                <aside>
                  <h3>Micheal Odunsi
                  </h3>
                </aside>
              </div>
            </ReviewCards>
          </JumbotronInner>
        </div>
      </Jumbotron>

      <Jumbotron>
        <div style={{ maxWidth: "1200px", margin: "0px auto" }}>
          <MobileOverview>
            <MobileImg src={"/assets/svg/mobile.svg"} alt={""} />
            <AbsoluteImg src={"/assets/svg/elispe1.svg"} alt={""} />
            <AbsoluteImg src={"/assets/svg/elispe2.svg"} alt={""} />
            <aside>
              <h2>
                Save in bits
                <br />
                and reap a great harvest!
              </h2>
              <div style={{ height: "30px" }} />
              <ButtonContainer
                onClick={() => history.push("/register")}
                width={"156px"}
              >
                Get Started
              </ButtonContainer>
            </aside>
          </MobileOverview>
          <RingImage src={"/assets/svg/rings.svg"} alt={""} />
        </div>
      </Jumbotron>

      <Footer>
        <div style={{ maxWidth: "1200px", margin: "0px auto" }}>
          <main>
            <Logo status={"alternate"} />
            <aside>
              <div>
                <h6>Product</h6>
                <p>Overview</p>
                <p>Features</p>
                <p>Tutorials</p>
                <p>Pricing</p>
                <p>Releases</p>
              </div>

              <div>
                <h6>Company</h6>
                <p>About</p>
                <p>Press</p>
                <p>Careers</p>
                <p>Contact</p>
                <p>Partners</p>
              </div>

              <div>
                <h6>Support</h6>
                <p>Help Center</p>
                <p>Terms of service</p>
                <p>Legal</p>
                <p>Privacy Policy</p>
                <p>Status</p>
              </div>
            </aside>
          </main>
          <footer>
            <p>© 2020 Brandboxx studios. All rights reserved</p>
            <div>
              <img src={"/assets/svg/Instagram.svg"} alt={""} />
              <img src={"/assets/svg/Dribbble.svg"} alt={""} />
              <img src={"/assets/svg/Twitter.svg"} alt={""} />
              <img src={"/assets/svg/Youtube.svg"} alt={""} />
            </div>
          </footer>
        </div>
      </Footer>
    </>
  );
};

export { Landing };
