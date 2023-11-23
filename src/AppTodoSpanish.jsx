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
            <h1 className="title title2">INGENIERO DE SISTEMAS</h1>
        </div>
    </TextContaier>
    <TextContaier className='profile'>
    <div className="personalProfile">
            <div className="personalProfileTitle">
                <h1 className="subTitle">SOBRE MÍ</h1>
            </div>
            <p className="personalProfileDescription text">Soy una persona paciente, con buenas habilidades interpersonales y técnicas. En cuanto al desarrollo de software tengo experiencia en proyectos personales y freelance en roles Frontend y Backend. Además tengo experiencia en de 4 años trabajando en el IDRD.</p>
        </div>
    </TextContaier>
    <TextContaier>
        <div className="projects">
        
                <h1 className="subTitle">EXPERIENCIA</h1>

                <div className="website">
                    <div className="websiteTitle"><h2 className="subTileH2">IDRD - CICLOVÍA</h2></div>
                    <div className="websiteDescription descript text">
                    Durante los 4 años que trabaje en la Ciclovía de Bogotá. Estuve involucrado en muchas situaciones en la que había que tratar con los usuarios de la misma, siempre de manera asertiva y efectiva. Desde dar direcciones y ubicar personas, tanto locales como extranjeros, dentro de la ciudad como la atención de casos de salud de múltiples gravedades. Adicionalmente, fui el segundo al mando dentro del área de eventos especiales, durante cerca de dos años estuve como eje central de todos los eventos que sucedían dentro de la misma, tratando con personas de todo tipo y coordinándolas de manera asertiva y efectiva.

                    <br />
                    <br />
                    </div>
                    <div className="websiteStack">

                        <h4 className="text">METAS</h4>                        
                        <ul className="techStack">
                            <li className="websiteItem1 text">Relaciones internacionales con eventos, recorridos de mandatarios extranjeros y Ciclovía internacional</li>
                            <li className="websiteItem3 text">Creación del stand de la Ciclovía en el Salón del ocio y la fantasía (SOFA)</li>
                            <li className="websiteItem3 text">Ganador del guardián del mes</li>
                            <li className="passwordItem3 text">Habilidades de comunicación y primeros auxilios principalmente</li>
                        </ul>
                    </div>
                    <div className="webs">
                        <div className="passwordLink text"><a className="gitHub text" href="https://github.com/SplashyCoder/splashyCoderPortfolio">GITHUB </a><a className="gitHub text" href="https://splashycoder.github.io/splashyCoderPortfolio">| WEB</a></div>         
                    </div>
                </div>  

                <div className="password">
                    <div className="passwordTitle "><h2 className="subTileH2">SOLUCIONES HORIZONTALES BOLIVAR</h2></div>
                    <div className="passwordDescription descript text">
                    Desarrollé y lancé el sitio web de una empresa de propiedad horizontal, mejorando significativamente la presencia en línea de la empresa. Esto condujo a una mayor participación del cliente y a la optimización de las operaciones. Mi puesto mostró mi capacidad para crear soluciones digitales impactantes utilizando las mejores prácticas de codificación e impulsar la modernización de la empresa.
                    <br />
                    <br />
                    METAS:
                    <br />
                    La cantidad de clientes incrementó en un 23%
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
                    Diseñé y lancé un sitio web para un edificio comercial, que jugó un papel fundamental en la promoción de las ofertas. El sitio web mostró de manera efectiva las características y beneficios del edificio, lo que generó un aumento de consultas y participación de las partes interesadas. Este esfuerzo destacó mi capacidad para crear plataformas en línea atractivas que impulsen el interés y la inversión en proyectos inmobiliarios.
                    <br />
                    <br />
                    METAS:
                    <br />
                    Los espacios ofertados por la junta directiva del edificio ya están ocupados al 100%.
                    Los posibles clientes han aumentado en un 43%.
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
                    Concebí y di vida a un proyecto turístico personal centrado en la vibrante ciudad de Bogotá. La idea central gira en torno a explorar la ciudad desde puntos de partida aleatorios, descubriendo la auténtica vida cotidiana de sus diversos barrios. Este proyecto celebra mi pasión por compartir las experiencias culturales genuinas de Bogotá tanto con visitantes como con lugareños, ofreciendo una perspectiva única de las joyas ocultas de la ciudad.
                    <br />
                    <br />
                    </div>
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

                <div className="website">
                    <div className="websiteTitle"><h2 className="subTileH2">PORTAFOLIO</h2></div>
                    <div className="websiteDescription descript text">
                    Como desarrollador frontend, he elaborado meticulosamente mi portafolio personal para mostrar una colección de proyectos web que ejemplifican mi experiencia. A través de una combinación de diseño intuitivo e interfaces de usuario responsivas, he creado soluciones web que conectan perfectamente forma y función. Mi portafolio no solo sirve como testimonio de mis habilidades sino también como un lienzo vivo donde doy vida a las ideas a través del código, demostrando mi compromiso con el mundo del desarrollo web.
                    <br />
                    <br />
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
            <h1 className="educationTitle subTitle">EDUCACIÓN</h1>
            <div className="university">
                <h2 className="universityTitle subTitleH2">UNIVERSIDAD</h2>
                <h3 className="universityName subTitleH3">UNIVERSIDAD DISTRITAL FRANCISCO JOSE DE CALDAS</h3>
                <p className="universityCarrer text">Ingeniería de sistemas (2018 - presente)</p>
            </div>
            <div className="certifications">
                <h2 className="certificationsTitle ">CERTIFICACIONES</h2>
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
                <p className='final'>Este CV fue hecho completamente usando React.</p>     
            </div>
        </footer>
    </div>
  )
}
