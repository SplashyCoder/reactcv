import React from 'react'
import './App.css';
import Frame from './modules/frame/frame'
import TextContaier from './modules/container/textContainer';



export default function AppTodo() {
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
                <h1 className="title title2">SYSTEMS ENGINEER</h1>
            </div>
        </TextContaier>
        <TextContaier className='profile'>
        <div className="personalProfile">
                <div className="personalProfileTitle">
                    <h1 className="subTitle">ABOUT</h1>
                </div>
                <p className="personalProfileDescription text">I am a patient person, with good interpersonal and technical skills. Regarding software development, I have experience in personal and freelance projects in Frontend and Backend roles. I also have 4 years of experience working at the IDRD.</p>
            </div>
        </TextContaier>
        <TextContaier>
            <div className="projects">
            
                    <h1 className="subTitle">EXPERIENCE</h1>

                    <div className="website">
                    <div className="websiteTitle"><h2 className="subTileH2">IDRD - CICLOVÍA</h2></div>
                    <div className="websiteDescription descript text">
                    During the 4 years I worked on the Bogotá's Ciclovía . I was involved in many situations in which I had to deal with its users, always in an assertive and effective manner. From giving directions and locating people, both local and foreign, within the city to caring for health cases of multiple severities. Additionally, I was second in command within the special events area, for about two years I was the central axis of all the events that happened within it, dealing with people of all types and coordinating them in an assertive and effective manner.
                    <br />
                    <br />
                    </div>
                    <div className="websiteStack">

                        <h4 className="text">METAS</h4>                        
                        <ul className="techStack">
                            <li className="websiteItem1 text">International relations with events, tours of foreign leaders and Ciclovía international </li>
                            <li className="websiteItem3 text">Creation of Ciclovía's stand in Salón del ocio y la fantasía (SOFA)</li>
                            <li className="websiteItem3 text">Winner of Guardian of the Month </li>
                            <li className="passwordItem3 text">Communication and first aid skills mainly</li>
                        </ul>
                    </div>
                    <div className="webs">
                        <div className="passwordLink text"><a className="gitHub text" href="https://github.com/SplashyCoder/splashyCoderPortfolio">GITHUB </a><a className="gitHub text" href="https://splashycoder.github.io/splashyCoderPortfolio">| WEB</a></div>         
                    </div>
                </div> 

                    <div className="password">
                        <div className="passwordTitle "><h2 className="subTileH2">SOLUCIONES HORIZONTALES BOLIVAR</h2></div>
                        <div className="passwordDescription descript text">
                        Developed and launched a management company website, significantly enhancing the firm's online presence. This led to increased client engagement and streamlining operations. My role showcased my ability to create impactful digital solutions using the best coding practices and drive the company's modernization.
                        <br />
                        <br />
                        GOALS:
                        <br />
                        The new clients for the company increased in 23%.
                        </div>
                        <div className="passwordStack">
                            <h4 className="text">TECHSTACK</h4>
                            <ul className="techStack">
                                <li className="passwordItem1 text">HTML 5</li>
                                <li className="passwordItem2 text">CSS 3</li>
                                <li className="passwordItem3 text">JavaScritp</li>
                                <li className="passwordItem3 text">Formspree</li>
                                <li className="passwordItem3 text">Firebase(Hosting, Auth)</li>
                            </ul>
                        </div>
                        <div className="webs">
                            <div className="passwordLink text"><a className="gitHub text" href="https://github.com/SplashyCoder/SHB">GITHUB </a><a className="gitHub text" href="https://splashycoder.github.io/SHB/">| WEB</a></div>
                        </div>
                    </div>

                    <div className="password">
                        <div className="passwordTitle "><h2 className="subTileH2">EDIFICIO BANCO GANADERO</h2></div>
                        <div className="passwordDescription descript text">
                        Designed and launched a website for a commercial building , which played a pivotal role in promoting the offerings. The website effectively showcased the building features and benefits, leading to increased inquiries and stakeholder engagement. This endeavor highlighted my capacity to create compelling online platforms that drive interest and investment in real estate ventures.
                        <br />
                        <br />
                        GOALS:
                        <br />
                        The spaces offer by the building's management are now ocupped in a 100%.
                        The posible clients has increased in 43%.
                        </div>
                        <div className="passwordStack">
                            <h4 className="text">TECHSTACK</h4>
                            <ul className="techStack">
                                <li className="passwordItem1 text">HTML 5</li>
                                <li className="passwordItem2 text">CSS 3</li>
                                <li className="passwordItem3 text">JavaScritp</li>
                                <li className="passwordItem3 text">Formspree</li>
                                <li className="passwordItem3 text">Firebase(Hosting, Auth)</li>
                            </ul>
                        </div>
                        <div className="webs">
                            <div className="passwordLink text"><a className="gitHub text" href="https://github.com/SplashyCoder/BANK_">GITHUB </a><a className="gitHub text" href="https://splashycoder.github.io/BANK_">| WEB</a></div>
                        </div>
                    </div>

                    <div className="random">
                        <div className="randomTitle "><h2 className="subtitleH2">RANDOM ADDRESS GENERATOR</h2></div>
                        <div className="randomdDescription descript text">
                        Conceived and brought to life a personal tourism project centered around the vibrant city of Bogota. The core idea revolves around exploring the city from random starting points, uncovering the authentic, everyday life of its diverse neighborhoods. This project celebrates my passion for sharing the genuine cultural experiences of Bogota with visitors and locals alike, offering a unique perspective on the city's hidden gems.</div>
                        <div className="randomStack">
                        <h4 className="text">TECHSTACK</h4>
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
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="website">
                        <div className="websiteTitle"><h2 className="subTileH2">PORTFOLIO</h2></div>
                        <div className="websiteDescription descript text">
                        As a frontend developer, I've meticulously crafted my personal portfolio to showcase a collection of web projects that exemplify my expertise. Through a combination of intuitive design and responsive user interfaces, I've created web solutions that seamlessly connect form and function. My portfolio not only serves as a testament to my skills but also as a living canvas where I bring ideas to life through code, demonstrating my commitment to the world of web development.
                        </div>
                        <div className="websiteStack">

                            <h4 className="text">TECHSTACK</h4>                        
                            <ul className="techStack">
                                <li className="websiteItem1 text">React 16</li>
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
                        <a className="certificationsLink text" href="https://ed.team/@davidpacheco/curso/python" target="_blank" rel="noreferrer" >Python-ED TEAM </a>| 
                        <a className="certificationsLink text" href="https://ed.team/@davidpacheco/curso/sql" target="_blank" rel="noreferrer" >SQL Data Bases-ED TEAM </a>| 
                        <a className="certificationsLink text" href="https://ed.team/@davidpacheco/curso/api-rest" target="_blank" rel="noreferrer" >Api Rest-ED TEAM </a>|
                        <a className="certificationsLink text" href="https://ed.team/@davidpacheco/curso/api-rest" target="_blank" rel="noreferrer" >JavaScritp Oop-ED TEAM </a>|
                        <a className="certificationsLink text" href="https://ed.team/@davidpacheco/curso/html" target="_blank" rel="noreferrer" >HTML-ED TEAM </a>|
                        <a className="certificationsLink text" href="https://app.ed.team/u/davidpacheco/curso/css" target="_blank" rel="noreferrer" >CSS-ED TEAM </a>|
                        <a className="certificationsLink text" href="https://app.ed.team/u/davidpacheco/curso/react-2021" target="_blank" rel="noreferrer" >React-ED TEAM </a>| 
                        <a className="certificationsLink text" href="https://ed.team/@davidpacheco/curso/bootstrap" target="_blank" rel="noreferrer" >Boostrap 5-ED TEAM </a>|  
                        <a className="certificationsLink text" href="https://ed.team/@davidpacheco/curso/git" target="_blank" rel="noreferrer" >Git-ED TEAM </a>
                    </p>
                </div>
            </div>
        </TextContaier>
        <footer className="footer">
            <div className="footerTitle">
                <h1 className="subTile">CONTACT</h1>
            </div>
            <div className="conect">
                <div className="phone conectPart">
                    <a className = "conection text" href="https://wa.me/573108504710?text=Hello%20David%20I%20want%20to%20talk%20you%20about%20my%20project/company">
                        <img src="https://splashycoder.github.io/CV/media/icons8-phone.svg" alt=""/>
                        <p className='link'>+57 3108504710</p>
                    </a>
                </div>
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
            <div className="finalContainer">
                <p className='final'>This CV was completly made it using React.</p>     
            </div>
        </footer>
    </div>
  )
}
