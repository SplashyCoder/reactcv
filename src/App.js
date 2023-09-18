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
    <TextContaier className='namesTitle'>
        <div className="namesContainer">
            <h1 className="title title1">DAVID PACHECO</h1>
            <h1 className="title title2">FRONTEND DEVELOPER</h1>
        </div>
    </TextContaier>
    <TextContaier className='profile'>
    <div className="personalProfile">
            <div className="personalProfileTitle">
                <h1 className="subTitle">ABOUT</h1>
            </div>
            <p className="personalProfileDescription text">I’m a pacient person, with good soft and technical skills, futher I hold up in touch with the tools and skills in the development vanguard. I have experience in personal and academic projects in Frontend and Backend roles. Actually work in Linux platforms, however, I unwrap easily in Windows and Mac enviroments.  </p>
        </div>
    </TextContaier>
    <TextContaier className='profile'>
        <div className="personalProfile">
            <div className="personalProfileTitle">
                <h1 className="subTitle">TECH STACK</h1>
            </div>
                <ul className="techStack" >
                    <li className="passwordItem1 text">JavaScript</li>
                    <li className="passwordItem2 text">HTML 5</li>
                    <li className="passwordItem3 text">CSS 3</li>
                    <li className="passwordItem1 text">React</li>
                    <li className="passwordItem2 text">Python</li>
                    <li className="passwordItem3 text">SQL</li>
                    <li className="passwordItem1 text">Firebase</li>
                    <li className="passwordItem2 text">Docker</li>
                    <li className="passwordItem3 text">Bootstrap</li>
                </ul>        
        </div>
    </TextContaier>
    
    <TextContaier>
    <div className="education">
            <h1 className="educationTitle subTitle">EDUCATION</h1>
            <div className="university">
                <h2 className="universityTitle subTitleH2">UNIVERSITY</h2>
                <h3 className="universityName subTitleH3">UNIVERSIDAD DISTRITAL FRANCISCO JOSE DE CALDAS</h3>
                <p className="universityCarrer text">Software Engineering (2018 - Today)</p>
            </div>
            <div className="certifications">
                <h2 className="certificationsTitle ">CERTIFICATIONS</h2>
                <p className="certificationsText">
                    <a className="certificationsLink text" href="https://ed.team/@davidpacheco/curso/python" target="_blank">Python-ED TEAM </a>| 
                    <a className="certificationsLink text" href="https://ed.team/@davidpacheco/curso/sql" target="_blank">SQL Data Bases-ED TEAM </a>| 
                    <a className="certificationsLink text" href="https://ed.team/@davidpacheco/curso/api-rest" target="_blank">Api Rest-ED TEAM </a>|
                    <a className="certificationsLink text" href="https://ed.team/@davidpacheco/curso/api-rest" target="_blank">JavaScritp Oop-ED TEAM </a>|
                    <a className="certificationsLink text" href="https://ed.team/@davidpacheco/curso/html" target="_blank">HTML-ED TEAM </a>|
                    <a className="certificationsLink text" href="https://app.ed.team/u/davidpacheco/curso/css" target="_blank">CSS-ED TEAM </a>|
                    <a className="certificationsLink text" href="https://app.ed.team/u/davidpacheco/curso/react-2021" target="_blank">React-ED TEAM </a>| 
                    <a className="certificationsLink text" href="https://ed.team/@davidpacheco/curso/bootstrap" target="_blank">Boostrap 5-ED TEAM </a>|  
                    <a className="certificationsLink text" href="https://ed.team/@davidpacheco/curso/git" target="_blank">Git-ED TEAM </a>
                </p>
            </div>
        </div>
    </TextContaier>
    <TextContaier>
        <div className="projects">
        
                <h1 className="subTitle">PROJECTS</h1>

                <div className="password">
                    <div className="passwordTitle "><h2 className="subTileH2">SOLUCIONES HORIZONTALES BOLIVAR</h2></div>
                    <div className="passwordDescription descript text">Web page for a management company. Wich show services, advantages and its able to conect it with new coustomers.</div>
                    <div className="passwordStack">
                        <h4 className="text">Technologies</h4>
                        <ul className="techStack">
                            <li className="passwordItem1 text">HTML 5</li>
                            <li className="passwordItem2 text">CSS 3</li>
                            <li className="passwordItem3 text">JavaScritp</li>
                            <li className="passwordItem3 text">Firebase(Hosting)</li>
                        </ul>
                    </div>
                    <div className="webs">
                        <div className="passwordLink text"><a className="gitHub text" href="https://github.com/SplashyCoder/SHB">GITHUB </a><a className="gitHub text" href="https://splashycoder.github.io/SHB/">| WEB</a></div>
                    </div>
                </div>

                <div className="password">
                    <div className="passwordTitle "><h2 className="subTileH2">EDIFICIO BANCO GANADERO</h2></div>
                    <div className="passwordDescription descript text">Web page for a business building. Wich show spaces for rent, services and its able to conect it with new coustomers.</div>
                    <div className="passwordStack">
                        <h4 className="text">Technologies</h4>
                        <ul className="techStack">
                            <li className="passwordItem1 text">HTML 5</li>
                            <li className="passwordItem2 text">CSS 3</li>
                            <li className="passwordItem3 text">JavaScritp</li>
                            <li className="passwordItem3 text">Firebase(Hosting)</li>
                        </ul>
                    </div>
                    <div className="webs">
                        <div className="passwordLink text"><a className="gitHub text" href="https://github.com/SplashyCoder/BANK_">GITHUB </a><a className="gitHub text" href="https://splashycoder.github.io/BANK_">| WEB</a></div>
                    </div>
                </div>

                <div className="random">
                    <div className="randomTitle "><h2 className="subtitleH2">RANDOM ADDRESS GENERATOR WEB</h2></div>
                    <div className="randomdDescription descript text">It's a personal project focused on the tourism in Bogota. The principal concept it's to explore the city from a random point and discover the normal life in it.</div>
                    <div className="randomStack">
                    <h4 className="text">Technologies</h4>
                        <ul className="techStack" >
                            <li className="passwordItem1 text">HTML 5</li>
                            <li className="passwordItem2 text">CSS 3</li>
                            <li className="passwordItem3 text">JavaScritp</li>
                            <li className="passwordItem3 text">Github pages(Hosting)</li>
                        </ul>
                    </div>
                    <div className="webs">
                        <div className="passwordLink text"><a className="gitHub text" href="https://github.com/SplashyCoder/RANDOMWEB">GITHUB </a><a className="gitHub text" href="https://splashycoder.github.io/RANDOMWEB">| WEB</a></div>
                    </div>
                </div>

                <div className="website">
                    <div className="websiteTitle"><h2 className="subTileH2">PERSONAL WEBSITE</h2></div>
                    <div className="websiteDescription descript text">Portfolio to can show my technical skills and future projects.</div>
                    <div className="websiteStack">

<h4 className="text">Technologies</h4>                        <ul className="techStack">
                            <li className="websiteItem1 text">React 16</li>
                            <li className="websiteItem2 text">HTML 5</li>
                            <li className="websiteItem3 text">CSS 3</li>
                            <li className="websiteItem3 text">Node js 18.4</li>
                            <li className="passwordItem3 text">Github pages(Hosting)</li>
                        </ul>
                    </div>
                    <div className="webs">
                        <div className="passwordLink text"><a className="gitHub text" href="https://github.com/SplashyCoder/splashyCoderPortfolio">GITHUB </a><a className="gitHub text" href="https://splashycoder.github.io/splashyCoderPortfolio">| WEB</a></div>         
                    </div>
                </div>  

        </div>
    </TextContaier>
    <footer className="footer">
        <div className="footerTitle">
            <h1 className="subTile">CONTACT</h1>
        </div>
        <div className="conect">
            <div className="linkedin conectPart">
                <a className = "conection text" href="https://www.linkedin.com/in/david-pacheco-166623227/">
                    <img src="https://splashycoder.github.io/CV/media/icons8-linkedin.svg" alt=""/>
                    <p className='link'>https://www.linkedin.com/in/david-pacheco-166623227/</p> 
                </a>
            </div>
            <div className="mail conectPart">
                <div className = "conection text" href="">
                    <img className='mailImg' src="https://splashycoder.github.io/CV/media/mail-2569.svg" alt=""/>
                    <p className='link'>pachecomorahectordavid@gmail.com</p>
                </div>
            </div>
            <div className="github conectPart">
                <a className = "conection text" href="https://github.com/SplashyCoder">
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
