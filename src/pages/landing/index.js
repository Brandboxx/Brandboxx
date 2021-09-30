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
                Safe keep your earnings from
                <br /> impulsive expenses and earn interests
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
            <h1>We got you covered, fear not!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum
            </p>
          </JumbotronHeaders>
          <JumbotronInner>
            <ServiceCards>
              <img src={"/assets/svg/service1.svg"} alt={""} />
              <p>Safe</p>
              <p>
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit ut aliquam
              </p>
            </ServiceCards>
            <ServiceCards>
              <img src={"/assets/svg/service2.svg"} alt={""} />
              <p>Secure</p>
              <p>
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit ut aliquam
              </p>
            </ServiceCards>
            <ServiceCards>
              <img src={"/assets/svg/service3.svg"} alt={""} />
              <p>Easy</p>
              <p>
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit ut aliquam
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
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing Lorem ipsum dolor sit amet, consectetur
              adipiscing elit ut aliquam
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
                    Flexible savings that allows you to deposit and withdraw
                    whenever
                    <br /> you wish.
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
                    Flexible savings that allows you to deposit and withdraw
                    whenever
                    <br /> you wish.
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
                    Flexible savings that allows you to deposit and withdraw
                    whenever
                    <br /> you wish.
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
            <h4 style={{ textAlign: "center", color: "#149A9B" }}>
              You are my favorite customer!
            </h4>
            <h1 style={{ paddingBottom: "30px" }}>What our clients say</h1>
          </JumbotronHeaders>
          <JumbotronInner>
            <ReviewCards>
              <img src={"/assets/svg/Title.svg"} alt={""} />
              <p>
                From pixel-perfect icons and scalable vector graphics, to full
                user flows and interactive prototypes, Sketch is the perfect
                place to design, create and test.
              </p>
              <div>
                <main>
                  <img src={"/assets/svg/pic1.svg"} alt={""} />
                </main>
                <aside>
                  <h3>Marie Wells</h3>
                  <p>Product Designer</p>
                </aside>
              </div>
            </ReviewCards>
            <ReviewCards>
              <img src={"/assets/svg/Title.svg"} alt={""} />
              <p>
                From pixel-perfect icons and scalable vector graphics, to full
                user flows and interactive prototypes, Sketch is the perfect
                place to design, create and test.
              </p>
              <div>
                <main>
                  <img src={"/assets/svg/pic2.svg"} alt={""} />
                </main>
                <aside>
                  <h3>Marie Wells</h3>
                  <p>Product Designer</p>
                </aside>
              </div>
            </ReviewCards>
            <ReviewCards>
              <img src={"/assets/svg/Title.svg"} alt={""} />
              <p>
                From pixel-perfect icons and scalable vector graphics, to full
                user flows and interactive prototypes, Sketch is the perfect
                place to design, create and test.
              </p>
              <div>
                <main>
                  <img src={"/assets/svg/pic3.svg"} alt={""} />
                </main>
                <aside>
                  <h3>Marie Wells</h3>
                  <p>Product Designer</p>
                </aside>
              </div>
            </ReviewCards>
            <ReviewCards>
              <img src={"/assets/svg/Title.svg"} alt={""} />
              <p>
                From pixel-perfect icons and scalable vector graphics, to full
                user flows and interactive prototypes, Sketch is the perfect
                place to design, create and test.
              </p>
              <div>
                <main>
                  <img src={"/assets/svg/pic4.svg"} alt={""} />
                </main>
                <aside>
                  <h3>Marie Wells</h3>
                  <p>Product Designer</p>
                </aside>
              </div>
            </ReviewCards>
          </JumbotronInner>
        </div>
      </Jumbotron>

      <Jumbotron>
        <div style={{ maxWidth: "1200px", margin: "0px auto" }}>
          <MobileOverview>
            <img src={"/assets/svg/mobile.svg"} alt={""} />
            <AbsoluteImg src={"/assets/svg/elispe1.svg"} alt={""} />
            <AbsoluteImg src={"/assets/svg/elispe2.svg"} alt={""} />
            <aside>
              <h2>
                Save for in a bit
                <br />
                and reap great harvest
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
            <p>© 2020 Landify UI Kit. All rights reserved</p>
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
