import React from 'react';

import CategoryItem from '../../components/CategoryItem';
import PlanItem from '../../components/PlanItem';

import Logo from '../../assets/logo.png';
import NatureImg from '../../assets/natureImg.png';
import DailyImg from '../../assets/dailyImg.png';
import TogetherImg from '../../assets/togetherImg.png';
import AnalysisImg from '../../assets/analysisImg.png';
import PicturesImg from '../../assets/picturesImg.png';

import './styles.css';

function Index() {
  let scrollToArticle = () => {
    window.scroll({top: 600, left: 0, behavior: 'smooth' })
  }

  return (
    <section id="index-container">
      <header id="apresentation">
        <img src={Logo} alt="Escalator logomarca"/>
        <h1>we have ideas to growth your business</h1>
        <button onClick={() => scrollToArticle()}>SEE NOW</button>
      </header>

      <article id="content">
        <div id="categories">
          <div id="categories-list">
            <h1 id="categories-title">categories</h1>
            <p id="categories-subtitle">discover new possibilities to help you today</p>
          
            <div id="first-row">
              <CategoryItem
                title="nature"
                subtitle="Lorem ipsum dolor sit amet"
                image={NatureImg}
              />

              <CategoryItem
                title="daily"
                subtitle="Praesent tincidunt consectetur diam"
                image={DailyImg}
              />
            </div>
            
            <div id="second-row">
              <CategoryItem
                title="together"
                subtitle="Vivamus non arcu tincidunt, tempus nunc eu, scelerisque ipsum"
                image={TogetherImg}
              />
            </div>

            <div id="third-row">
              <div id="analysis">
                <CategoryItem
                  title="analysis"
                  subtitle="Duis sollicitudin mauris vitae venenatis aliquet"
                  image={AnalysisImg}
                />
              </div>
              
              <CategoryItem
                title="pictures"
                subtitle="Quisque eu nisl purus"
                image={PicturesImg}
              />
            </div>
          </div>
        </div>

        <div id="plans">
          <div id="info">
            <h1 id="plans-title">growth plans</h1>
            <p id="plans-subtitle">take your business to the next level</p>
          </div>
          
          <div id="plans-list">
            <PlanItem
              price="100"
              hours="100 + hours"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              height="12rem"
            />

            <PlanItem
              price="150"
              hours="180 + hours"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              height="15rem"
            />

            <PlanItem
              price="200"
              hours="260 + hours"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              height="18rem"
            />

            <PlanItem
              price="250"
              hours="380 + hours"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              height="21rem"
            />

            <PlanItem
              price="300"
              hours="420 + hours"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              height="24rem"
            />

            <PlanItem
              price="350"
              hours="520 + hours"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              height="27rem"
            />
          </div>
        </div>
      </article>
    </section>
  );
}

export default Index;