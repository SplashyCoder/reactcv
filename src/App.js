import './App.css';
import Frame from './modules/frame/frame'
import TextContaier from './modules/container/textContainer';

function App() {
  return (
    <div className="app">
      <header className="appHeader">
        <Frame 
          img = 'https://splashycoder.github.io/CV/media/IMG_20190706_185056.jpg  '
          description= 'Profile img'
        />
      </header>
      <TextContaier class='namesTitle'>
          <div className="namesContainer">
            <h1 className="title title1">DAVID PACHECO</h1>
            <h1 className="title title2">FRONTEND DEVELOPER</h1>
          </div>
      </TextContaier>
      <TextContaier class='profile'>
      <div class="personalProfile">
            <div class="personalProfileTitle">
                <h1 class="subTitle">ABOUT</h1>
            </div>
            <p class="personalProfileDescription text">I’m a pacient person, with good soft and technical skills, futher I hold up in touch with the tools and skills in the development vanguard. I have experience in personal and academic projects in Frontend and Backend roles. Actually work in Linux platforms, however, I unwrap easily in Windows and Mac enviroments.  </p>
        </div>
      </TextContaier>
      <TextContaier>
      <div class="education">
            <h1 class="educationTitle subTitle">EDUCATION</h1>
            <div class="university">
                <h2 class="universityTitle subTitleH2">UNIVERSITY</h2>
                <h3 class="universityName subTitleH3">UNIVERSIDAD DISTRITAL FRANCISCO JOSE DE CALDAS</h3>
                <p class="universityCarrer text">Software Engineering (2018 - Today)</p>
            </div>
            <div class="certifications">
                <h2 class="certificationsTitle subTile">CERTIFICATIONS</h2>
                <p class="certificationsText">
                    <a class="certificationsLink text" href="https://ed.team/@davidpacheco/curso/python" target="_blank">Python-ED TEAM </a>| 
                    <a class="certificationsLink text" href="https://ed.team/@davidpacheco/curso/sql" target="_blank">SQL Data Bases-ED TEAM </a>| 
                    <a class="certificationsLink text" href="https://ed.team/@davidpacheco/curso/api-rest" target="_blank">Api Rest-ED TEAM </a>|
                    <a class="certificationsLink text" href="https://ed.team/@davidpacheco/curso/api-rest" target="_blank">JavaScritp Oop-ED TEAM </a>|
                    <a class="certificationsLink text" href="https://ed.team/@davidpacheco/curso/html" target="_blank">HTML-ED TEAM </a>|
                    <a class="certificationsLink text" href="https://app.ed.team/u/davidpacheco/curso/css" target="_blank">CSS-ED TEAM </a>|
                    <a class="certificationsLink text" href="https://app.ed.team/u/davidpacheco/curso/react-2021" target="_blank">React-ED TEAM </a>| 
                    <a class="certificationsLink text" href="https://ed.team/@davidpacheco/curso/bootstrap" target="_blank">Boostrap 5-ED TEAM </a>|  
                    <a class="certificationsLink text" href="https://ed.team/@davidpacheco/curso/git" target="_blank">Git-ED TEAM </a>
                </p>
            </div>
        </div>
      </TextContaier>
      <TextContaier>
        <div class="projects">
                  <h1 class="subTitle">PROJECTS</h1>
                  <div class="password">
                      <div class="passwordTitle "><h2 class="subTileH2">PASSWORD MANAGER</h2></div>
                      <div class="passwordDescription descript text">Project oriented to make a password manager by terminal. Using Python conected to a data base in a Docker container.</div>
                      <div class="passwordStack">
                          <ul class="techStack">
                              <h4 class="text">Tech Stack</h4>
                              <li class="passwordItem1 text">Python 3.10</li>
                              <li class="passwordItem2 text">Postgres 14.7</li>
                              <li class="passwordItem3 text">Docker: 19.03.15</li>
                          </ul>
                      </div>
                      <div class="passwordLink text">GITHUB:<a class="gitHub text" href="https://github.com/SplashyCoder/PASSWORD_MANAGER">    https://github.com/SplashyCoder/PASSWORD_MANAGER</a></div>
                  </div>
                  <div class="random">
                      <div class="randomTitle "><h2 class="subtitleH2">RANDOM ADDRESS GENERATOR</h2></div>
                      <div class="randomdDescription descript text">App thought to can do a kind of random tourism. Generating an address to can start descovering a city since that point.</div>
                      <div class="randomStack">
                          <ul class="techStack" >
                              <h4 class="text">Tech Stack</h4>
                              <li class="randomItem1 text">Python 3.10</li>
                              <li class="randomItem2 text">Random library 9.6</li>
                          </ul>
                      </div>
                      <div class="randomLink text">GITHUB:<a class="gitHub text" href="https://github.com/SplashyCoder/Random-Address-Genterator">   https://github.com/SplashyCoder/Random-Address-Genterator</a></div>
                  <div class="website">
                      <div class="websiteTitle"><h2 class="subTileH2">PERSONAL WEBSITE</h2></div>
                      <div class="websiteDescription descript text">Portfolio to can show my technical skills and future projects.</div>
                      <div class="websiteStack">
                          <ul class="techStack">
                              <h4 class="text">Tech Stack</h4>
                              <li class="websiteItem1 text">React 16</li>
                              <li class="websiteItem2 text">HTML 5</li>
                              <li class="websiteItem3 text">CSS 3</li>
                              <li class="websiteItem3 text">Node js 18.4</li>
                          </ul>
                      </div>
                      <div class="websiteLink text">GITHUB:<a class="gitHub text" href="https://splashycoder.github.io/splashyCoderPortfolio/">  https://splashycoder.github.io/splashyCoderPortfolio/ </a></div>
                  </div>  
                  <div class="cv">
                      <div class="cvITitle"><h2 class="subTileH2">CV</h2></div>
                      <div class="cvDescription descript text">This CV made completly by me using just HTML and CSS.</div>
                      <div class="cvStack">
                          <ul class="techStack">
                              <h4 class="text">Tech Stack</h4>
                              <li class="cvItem2 text">HTML 5</li>
                              <li class="cvItem3 text">CSS 3</li>
                          </ul>
                      </div>
                      <div class="cvLink text">GITHUB:<a class="gitHub text" href="https://github.com/SplashyCoder/CV">  https://github.com/SplashyCoder/CV</a></div>
                  </div>
                  </div>
        </div>
      </TextContaier>
        <footer class="footer">
          <div class="footerTitle">
              <h1 class="subTile">CONTACT</h1>
          </div>
          <div class="conect">
              <div class="linkedin conectPart">
                  
                  <a class = "conection text" href="https://www.linkedin.com/in/david-pacheco-166623227/">
                      <img src="https://splashycoder.github.io/CV/media/icons8-linkedin.svg" alt=""/>
                      <p className='link'>https://www.linkedin.com/in/david-pacheco-166623227/</p> 
                  </a>
              </div>
              {/* <div class="mail conectPart">
                  <img src="https://splashycoder.github.io/CV/media/icons8-mail-50.png" alt=""/>
                  <a class = "conection text" href="">pachecomorahectordavid@gmail.com</a>
              </div> */}
              <div class="mail conectPart">
                  <div class = "conection text" href="">
                      <img className='mailImg' src="https://splashycoder.github.io/CV/media/icons8-mail-50.png" alt=""/>
                      <p className='link'>pachecomorahectordavid@gmail.com</p>
                  </div>
              </div>
              <div class="github conectPart">
                  <a class = "conection text" href="https://github.com/SplashyCoder">
                      <img src="https://splashycoder.github.io/CV/media/icons8-github.svg" alt=""/>
                      <p className='link'>https://github.com/SplashyCoder</p>
                  </a>
              </div>
            </div>
        </footer>
    </div>
  );
}

export default App;
