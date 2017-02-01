import React from 'react';
import styles from './styles.css';


class Homepage extends React.Component {
  constructor(){
    super();
  }

  componentDidMount() {
    console.log('Homepage is running...');
  }

  render(){
    return(
      <div className={styles['main']}>
        <nav className="navigation">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <section className="section container-1">
          <div className="section-content">
            <div className="first-text-content rellax" data-rellax-speed="-2">
              <h2 className="item" data-aos="fade-up" data-aos-duration="2000">Clear our Water or</h2>
              <h1 className="item" data-aos="fade-up" data-aos-duration="1000">Find Our Girls</h1>
              <p data-aos="fade-down" data-aos-duration="1000">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </section>
        <section className="section container-2">
          <div className="section-content rellax" data-rellax-speed="2">
            <div className="item circles" data-aos="fade-up-left">
              <div className="circle-part"></div>
              <p className="paragraph-part"> We don things</p>
            </div>
            <div className="item circles" data-aos="fade-up-left">
              <div className="circle-part"></div>
              <p className="paragraph-part"> We don things very well here</p>
            </div>
            <div className="item circles" data-aos="fade-up-right">
              <div className="circle-part"></div>
              <p className="paragraph-part"> We don things on this part as well sometimes</p>
            </div>
            <div className="item circles" data-aos="fade-up-right">
              <div className="circle-part"></div>
              <p className="paragraph-part"> We don things in this area</p>
            </div>
          </div>
        </section>
        <section className="section container-3">
          <div className="section-content">
            <div className="item cards" data-aos="flip-right">
              <div className="circle-part"></div>
              <p className="paragraph-part"> We don things</p>
            </div>
            <div className="item cards" data-aos="flip-right">
              <div className="circle-part"></div>
              <p className="paragraph-part"> We don things</p>
            </div>
            <div className="item cards" data-aos="flip-right">
              <div className="circle-part"></div>
              <p className="paragraph-part"> We don things</p>
            </div>
          </div>
        </section>
      </div>

    );
  }
}

export default Homepage;
