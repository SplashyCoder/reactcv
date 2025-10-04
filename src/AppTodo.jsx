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
            description= 'Imagen de perfil'
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
                    <h1 className="subTitle">ACERCA DE MÍ</h1>
                </div>
                <p className="personalProfileDescription text">Tengo experiencia en desarrollo Full Stack (Frontend y Backend), especializado en React, React Native y Node.js. Experiencia en diseño e implementación de aplicaciones web y móviles, integración con APIs, bases de datos y despliegues en la nube. Con habilidades en metodologías ágiles como Scrum Master.</p>
            </div>
        </TextContaier>
        <TextContaier>
            <div className="projects">
                <h1 className="subTitle">HABILIDADES TÉCNICAS</h1>
                <div className='passwordStack'>
                    <ul>
                        <li><strong>Lenguajes:</strong> JavaScript (ES6+), TypeScript, SQL, Python</li>
                        <li><strong>Frontend:</strong> React, React Native, HTML5, CSS3, Tailwind, Expo</li>
                        <li><strong>Backend:</strong> Node.js, REST APIs</li>
                        <li><strong>Bases de Datos:</strong> Firebase (Auth, Hosting, Firestore, Notifications), MySQL, PostgreSQL, Docker</li>
                        <li><strong>Integraciones:</strong> SAP, Boomi</li>
                        <li><strong>Metodologías:</strong> Scrum, Azure DevOps</li>
                        <li><strong>Versionado:</strong> Git, GitHub</li>
                        <li><strong>Cloud:</strong> Firebase</li>
                    </ul>
                </div>
                
                    <h1 className="subTitle">EXPERIENCIA</h1>

                     <div className="password">
                        <div className="passwordTitle "><h2 className="subTileH2">EBY TECHNOLOGIES – Desarrollador Full Stack & Scrum Master</h2></div>
                        <div>
                            <p>📍 Remoto | 📆 2024 – 2025</p>
                        </div>
                        <div className="passwordDescription descript text">
                       Desarrollé y di mantenimiento a páginas web, aplicaciones móviles, APIs y bases de datos, desempeñandome como desarrollador full stack, adicionalmente participé como principal moderador y responsable del manejo de metodologías ágiles, en este caso Scrum.
                        <br />
                        <br />
                        <div className='passwordStack'>
                            <h4>LOGROS:</h4>
                            <ul>
                                <li>Lanzamiento de la aplicación en Ibagué.</li>
                                <li>Creación y mantenimiento del sitio web de back office para uso interno de la empresa.</li>
                                <li>Desarrollo y mantenimiento de múltiples APIs REST.</li>
                            </ul>
                        </div>
                        </div>
                        <div className="passwordStack">
                            <h4 className="text">TECNOLOGÍAS</h4>
                            <ul className="techStack">
                                <li className="passwordItem1 text">React</li>
                                <li className="passwordItem2 text">React Native</li>
                                <li className="passwordItem3 text">SQL</li>
                                <li className="passwordItem3 text">Node js</li>
                                <li className="passwordItem3 text">Firebase</li>
                                <li className="passwordItem3 text">Expo</li>
                            </ul>
                        </div>
                        {/* <div className="webs">
                            <div className="passwordLink text"><a className="gitHub text" href="https://github.com/SplashyCoder/SHB">GITHUB </a><a className="gitHub text" href="https://splashycoder.github.io/SHB/">| SITIO WEB</a></div>
                        </div> */}
                    </div> 
                     <div className="password">
                        <div className="passwordTitle "><h2 className="subTileH2">Arago Consulting – Consultor SAP & Boomi</h2></div>
                        <div>
                            <p>📍 Remoto | 📆 2022 – 2023</p>
                        </div>
                        <div className="passwordDescription descript text">
                        Desarrollé soluciones y optimizaciones para flujos en herramientas basadas en SAP, mejorando la integración de la plataforma de diferentes clientes internacionales con sus herramientas personalizadas de gestión de talento humano y con las diferentes bases de datos que utilizan. Esto resultó en una mayor eficiencia operativa y una mejor experiencia del usuario.
                        <br />
                        <br />
                        <div className='passwordStack'>
                            <h4>LOGROS:</h4>
                            <ul>
                                <li>Aumento en la productividad del flujo de actualización de datos.</li>
                                <li>Mejoras notables en el manejo de los datos personales del talento humano.</li>
                            </ul>
                        </div>
                        </div>
                        <div className="passwordStack">
                            <h4 className="text">TECNOLOGÍAS</h4>
                            <ul className="techStack">
                                <li className="passwordItem1 text">SAP</li>
                                <li className="passwordItem2 text">BOOMI</li>
                                <li className="passwordItem3 text">SQL</li>
                            </ul>
                        </div>
                    </div> 
                    <div className="password">
                        <div className="passwordTile "><h2 className="subTileH2">Soluciones Horizontales Bolívar – Desarrollador Web Freelance</h2></div>
                        <div>
                            <p>📍 Remoto | 📆 2021 – 2022</p>
                        </div>
                        <div className="passwordDescription descript text">
                        Desarrollé y lancé un sitio web de gestión para la empresa, mejorando significativamente la presencia en línea de la firma. Esto llevó a un mayor compromiso de los clientes y a optimizar las operaciones. Mi papel demostró mi capacidad para crear soluciones digitales impactantes utilizando las mejores prácticas de codificación e impulsar la modernización de la empresa.
                        <br />
                        <br />
                        <br />
                        <br />          
                        <br />
                        <br />          
                        <br />
                        <br />
                        <div className='passwordStack'>
                            <h4>LOGROS:</h4>
                            <ul>
                                <li>Los nuevos clientes de la empresa aumentaron en un 23%.</li>
                            </ul>
                        </div>
                        </div>
                        <div className="passwordStack">
                            <h4 className="text">TECNOLOGÍAS</h4>
                            <ul className="techStack">
                                <li className="passwordItem1 text">HTML 5</li>
                                <li className="passwordItem2 text">CSS 3</li>
                                <li className="passwordItem3 text">JavaScript</li>
                                <li className="passwordItem3 text">Formspree</li>
                                <li className="passwordItem3 text">Firebase(Hosting, Auth)</li>
                            </ul>
                        </div>
                        <div className="webs">
                            <div className="passwordLink text"><a className="gitHub text" href="https://github.com/SplashyCoder/SHB">GITHUB </a><a className="gitHub text" href="https://splashycoder.github.io/SHB/">| SITIO WEB</a></div>
                        </div>
                    </div>

                    <div className="password">
                        <div className="passwordTitle "><h2 className="subTileH2">EDIFICIO BANCO GANADERO – Desarrollador Web Freelance</h2></div>
                        <div>
                            <p>📍 Remoto | 📆 2021 – 2022</p>
                        </div>
                        <div className="passwordDescription descript text">
                        Diseñé y lancé un sitio web para un edificio comercial, que jugó un papel pivotal en la promoción de sus ofertas. El sitio web mostró efectivamente las características y beneficios del edificio, llevando a un aumento en las consultas y el compromiso de las partes interesadas. Este esfuerzo destacó mi capacidad para crear plataformas en línea atractivas que impulsan el interés y la inversión.
                        <br />
                        <br />
                        <div className='passwordStack'>
                            <h4>LOGROS:</h4>
                            <ul>
                                <li>Los espacios ofrecidos por la administración del edificio ahora están ocupados en un 100%.</li>                                
                                <li>Los posibles clientes han aumentado en un 43%.</li>
                            </ul>
                        </div>
                        </div>
                        <div className="passwordStack">
                            <h4 className="text">TECNOLOGÍAS</h4>
                            <ul className="techStack">
                                <li className="passwordItem1 text">HTML 5</li>
                                <li className="passwordItem2 text">CSS 3</li>
                                <li className="passwordItem3 text">JavaScript</li>
                                <li className="passwordItem3 text">Formspree</li>
                                <li className="passwordItem3 text">Firebase(Hosting, Auth)</li>
                            </ul>
                        </div>
                        <div className="webs">
                            <div className="passwordLink text"><a className="gitHub text" href="https://github.com/SplashyCoder/BANK_">GITHUB </a><a className="gitHub text" href="https://splashycoder.github.io/BANK_">| SITIO WEB</a></div>
                        </div>
                    </div>
                    <div className="website">
                    <div className="websiteTitle"><h2 className="subTileH2">IDRD CICLOVÍA - Guardián de ciclovía</h2></div>
                    <div>
                        <p>📍 Bogotá  | 📆 2018 – 2022</p>
                    </div>
                    <div className="websiteDescription descript text">
                    Durante mis labores en la Ciclovía de Bogotá, me vi involucrado en muchas situaciones en las que tuve que tratar con sus usuarios, siempre de manera asertiva y efectiva. Desde dar direcciones y ubicar personas, tanto locales como extranjeras, dentro de la ciudad hasta atender casos de salud de múltiples gravedades. Adicionalmente, fui segundo al mando dentro del área de eventos especiales, durante aproximadamente dos años fui el eje central de todos los eventos que ocurrían dentro de ella, tratando con personas de todo tipo y coordinándolas.
                    <br />
                    <br />
                    </div>
                    <div className="websiteStack">

                        <h4 className="text">Logros</h4>                        
                        <ul className="techStack">
                            <li className="websiteItem1 text">Relaciones internacionales con eventos, recorridos de líderes extranjeros y la Ciclovía internacional </li>
                            <li className="websiteItem3 text">Creación del stand de la Ciclovía en el Salón del ocio y la fantasía (SOFA)</li>
                            <li className="websiteItem3 text">Ganador del Guardián del Mes </li>
                            <li className="passwordItem3 text">Habilidades de comunicación y primeros auxilios principalmente</li>
                        </ul>
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
                    <p className="universityCarrer text">Ingeniería de Sistemas</p>
                    <p className="universityCarrer text">📍 Bogotá | 📆 2018 – Actualidad (en curso)</p>
                </div>
                 <div className='passwordStack'>
                    <h2>IDIOMAS</h2>
                    <ul>
                        <li><strong>Español:</strong> Nativo.</li>
                        <li><strong>Inglés:</strong> C1.</li>
                        <li><strong>Italiano:</strong> A1.</li>
                    </ul>
                </div>
            </div>
        </TextContaier>
        <footer className="footer">
            <div className="footerTitle">
                <h1 className="subTile">CONTACTO</h1>
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














// import React from 'react'
// import './App.css';
// import Frame from './modules/frame/frame'
// import TextContainer from './modules/container/textContainer';

// export default function AppTodo() {
//   return (
//     <div className="app">
//         <header className="appHeader">
//             <Frame 
//             img='https://splashycoder.github.io/CV/media/IMG_20190706_185056.jpg'
//             description='Profile image'
//             />
//         </header>
//         <TextContainer className='namesTitle'>
//             <div className="namesContainer">
//                 <h1 className="title title1">DAVID PACHECO</h1>
//                 <h1 className="title title2">SYSTEMS ENGINEER</h1>
//             </div>
//         </TextContainer>
//         <TextContainer className='profile'>
//         <div className="personalProfile">
//                 <div className="personalProfileTitle">
//                     <h1 className="subTitle">ABOUT ME</h1>
//                 </div>
//                 <p className="personalProfileDescription text">I have experience in Full Stack development (Frontend and Backend), specialized in React, React Native and Node.js. Experience in designing and implementing web and mobile applications, API integration, databases and cloud deployments. With skills in agile methodologies as Scrum Master.</p>
//             </div>
//         </TextContainer>
//         <TextContainer>
//             <div className="projects">
//                 <h1 className="subTitle">TECHNICAL SKILLS</h1>
//                 <div className='passwordStack'>
//                     <ul>
//                         <li><strong>Languages:</strong> JavaScript (ES6+), TypeScript, SQL, Python</li>
//                         <li><strong>Frontend:</strong> React, React Native, HTML5, CSS3, Tailwind, Expo</li>
//                         <li><strong>Backend:</strong> Node.js, REST APIs</li>
//                         <li><strong>Databases:</strong> Firebase (Auth, Hosting, Firestore, Notifications), MySQL, PostgreSQL, Docker</li>
//                         <li><strong>Integrations:</strong> SAP, Boomi</li>
//                         <li><strong>Methodologies:</strong> Scrum, Azure DevOps</li>
//                         <li><strong>Version Control:</strong> Git, GitHub</li>
//                         <li><strong>Cloud:</strong> Firebase</li>
//                     </ul>
//                 </div>
                
//                     <h1 className="subTitle">EXPERIENCE</h1>

//                      <div className="password">
//                         <div className="passwordTitle "><h2 className="subTileH2">EBY TECHNOLOGIES – Full Stack Developer & Scrum Master</h2></div>
//                         <div>
//                             <p>📍 Remote | 📆 2024 – 2025</p>
//                         </div>
//                         <div className="passwordDescription descript text">
//                        Developed and maintained websites, mobile applications, APIs and databases, working as a full stack developer, additionally participated as main moderator and responsible for managing agile methodologies, in this case Scrum.
//                         <br />
//                         <br />
//                         <div className='passwordStack'>
//                             <h4>ACHIEVEMENTS:</h4>
//                             <ul>
//                                 <li>Launched the application in Ibagué.</li>
//                                 <li>Creation and maintenance of the back office website for internal company use.</li>
//                                 <li>Development and maintenance of multiple REST APIs.</li>
//                             </ul>
//                         </div>
//                         </div>
//                         <div className="passwordStack">
//                             <h4 className="text">TECHNOLOGIES</h4>
//                             <ul className="techStack">
//                                 <li className="passwordItem1 text">React</li>
//                                 <li className="passwordItem2 text">React Native</li>
//                                 <li className="passwordItem3 text">SQL</li>
//                                 <li className="passwordItem3 text">Node js</li>
//                                 <li className="passwordItem3 text">Firebase</li>
//                                 <li className="passwordItem3 text">Expo</li>
//                             </ul>
//                         </div>
//                     </div> 
//                      <div className="password">
//                         <div className="passwordTitle "><h2 className="subTileH2">Arago Consulting – SAP & Boomi Consultant</h2></div>
//                         <div>
//                             <p>📍 Remote | 📆 2022 – 2023</p>
//                         </div>
//                         <div className="passwordDescription descript text">
//                         Developed solutions and optimizations for flows in SAP-based tools, improving the integration of the platform for different international clients with their custom human talent management tools and with the different databases they use. This resulted in greater operational efficiency and better user experience.
//                         <br />
//                         <br />
//                         <div className='passwordStack'>
//                             <h4>ACHIEVEMENTS:</h4>
//                             <ul>
//                                 <li>Increased productivity in data update flow.</li>
//                                 <li>Notable improvements in handling personal data of human talent.</li>
//                             </ul>
//                         </div>
//                         </div>
//                         <div className="passwordStack">
//                             <h4 className="text">TECHNOLOGIES</h4>
//                             <ul className="techStack">
//                                 <li className="passwordItem1 text">SAP</li>
//                                 <li className="passwordItem2 text">BOOMI</li>
//                                 <li className="passwordItem3 text">SQL</li>
//                             </ul>
//                         </div>
//                     </div> 
//                     <div className="password">
//                         <div className="passwordTile "><h2 className="subTileH2">Soluciones Horizontales Bolívar – Freelance Web Developer</h2></div>
//                         <div>
//                             <p>📍 Remote | 📆 2021 – 2022</p>
//                         </div>
//                         <div className="passwordDescription descript text">
//                         Developed and launched a management website for the company, significantly improving the firm's online presence. This led to increased client engagement and optimized operations. My role demonstrated my ability to create impactful digital solutions using coding best practices and drive company modernization.
//                         <br />
//                         <br />
//                         <div className='passwordStack'>
//                             <h4>ACHIEVEMENTS:</h4>
//                             <ul>
//                                 <li>New company clients increased by 23%.</li>
//                             </ul>
//                         </div>
//                         </div>
//                         <div className="passwordStack">
//                             <h4 className="text">TECHNOLOGIES</h4>
//                             <ul className="techStack">
//                                 <li className="passwordItem1 text">HTML 5</li>
//                                 <li className="passwordItem2 text">CSS 3</li>
//                                 <li className="passwordItem3 text">JavaScript</li>
//                                 <li className="passwordItem3 text">Formspree</li>
//                                 <li className="passwordItem3 text">Firebase(Hosting, Auth)</li>
//                             </ul>
//                         </div>
//                         <div className="webs">
//                             <div className="passwordLink text"><a className="gitHub text" href="https://github.com/SplashyCoder/SHB">GITHUB </a><a className="gitHub text" href="https://splashycoder.github.io/SHB/">| WEBSITE</a></div>
//                         </div>
//                     </div>

//                     <div className="password">
//                         <div className="passwordTitle "><h2 className="subTileH2">EDIFICIO BANCO GANADERO – Freelance Web Developer</h2></div>
//                         <div>
//                             <p>📍 Remote | 📆 2021 – 2022</p>
//                         </div>
//                         <div className="passwordDescription descript text">
//                         Designed and launched a website for a commercial building, which played a pivotal role in promoting its offerings. The website effectively displayed the building's features and benefits, leading to an increase in inquiries and stakeholder engagement. This effort highlighted my ability to create engaging online platforms that drive interest and investment.
//                         <br />
//                         <br />
//                         <div className='passwordStack'>
//                             <h4>ACHIEVEMENTS:</h4>
//                             <ul>
//                                 <li>Spaces offered by the building administration are now 100% occupied.</li>                                
//                                 <li>Potential clients have increased by 43%.</li>
//                             </ul>
//                         </div>
//                         </div>
//                         <div className="passwordStack">
//                             <h4 className="text">TECHNOLOGIES</h4>
//                             <ul className="techStack">
//                                 <li className="passwordItem1 text">HTML 5</li>
//                                 <li className="passwordItem2 text">CSS 3</li>
//                                 <li className="passwordItem3 text">JavaScript</li>
//                                 <li className="passwordItem3 text">Formspree</li>
//                                 <li className="passwordItem3 text">Firebase(Hosting, Auth)</li>
//                             </ul>
//                         </div>
//                         <div className="webs">
//                             <div className="passwordLink text"><a className="gitHub text" href="https://github.com/SplashyCoder/BANK_">GITHUB </a><a className="gitHub text" href="https://splashycoder.github.io/BANK_">| WEBSITE</a></div>
//                         </div>
//                     </div>
//                     <div className="website">
//                     <div className="websiteTitle"><h2 className="subTileH2">IDRD CICLOVÍA - Ciclovía Guardian</h2></div>
//                     <div>
//                         <p>📍 Bogotá | 📆 2018 – 2022</p>
//                     </div>
//                     <div className="websiteDescription descript text">
//                     During my work at Bogotá's Ciclovía, I was involved in many situations where I had to deal with users, always in an assertive and effective manner. From giving directions and locating people, both locals and foreigners, within the city to attending to health cases of multiple severities. Additionally, I was second in command within the special events area, for approximately two years I was the central axis of all events occurring within it, dealing with all types of people and coordinating them.
//                     <br />
//                     <br />
//                     </div>
//                     <div className="websiteStack">
//                         <h4 className="text">Achievements</h4>                        
//                         <ul className="techStack">
//                             <li className="websiteItem1 text">International relations with events, tours of foreign leaders and International Ciclovía</li>
//                             <li className="websiteItem3 text">Creation of the Ciclovía stand at the Salón del ocio y la fantasía (SOFA)</li>
//                             <li className="websiteItem3 text">Guardian of the Month Winner</li>
//                             <li className="passwordItem3 text">Communication skills and first aid mainly</li>
//                         </ul>
//                     </div>
//                 </div> 
//             </div>
//         </TextContainer>
//         <TextContainer>
//         <div className="education">
//                 <h1 className="educationTitle subTitle">EDUCATION</h1>
//                 <div className="university">
//                     <h2 className="universityTitle subTitleH2">UNIVERSITY</h2>
//                     <h3 className="universityName subTitleH3">UNIVERSIDAD DISTRITAL FRANCISCO JOSE DE CALDAS</h3>
//                     <p className="universityCarrer text">Systems Engineering</p>
//                     <p className="universityCarrer text">📍 Bogotá | 📆 2018 – Present (in progress)</p>
//                 </div>
//                  <div className='passwordStack'>
//                     <h2>LANGUAGES</h2>
//                     <ul>
//                         <li><strong>Spanish:</strong> Native.</li>
//                         <li><strong>English:</strong> C1.</li>
//                         <li><strong>Italian:</strong> A1.</li>
//                     </ul>
//                 </div>
//             </div>
//         </TextContainer>
//         <footer className="footer">
//             <div className="footerTitle">
//                 <h1 className="subTile">CONTACT</h1>
//             </div>
//             <div className="conect">
//                 <div className="phone conectPart">
//                     <a className="conection text" href="https://wa.me/573108504710?text=Hello%20David%20I%20want%20to%20talk%20you%20about%20my%20project/company">
//                         <img src="https://splashycoder.github.io/CV/media/icons8-phone.svg" alt=""/>
//                         <p className='link'>+57 3108504710</p>
//                     </a>
//                 </div>
//                 <div className="linkedin conectPart">
//                     <a className="conection text" href="https://www.linkedin.com/in/david-pacheco-166623227/">
//                         <img src="https://splashycoder.github.io/CV/media/icons8-linkedin.svg" alt=""/>
//                         <p className='link'>https://www.linkedin.com/in/david-pacheco-166623227/</p> 
//                     </a>
//                 </div>
//                 <div className="mail conectPart">
//                     <div className="conection text" href="">
//                         <img className='mailImg' src="https://splashycoder.github.io/CV/media/mail-2569.svg" alt=""/>
//                         <p className='link'>pachecomorahectordavid@gmail.com</p>
//                     </div>
//                 </div>
//                 <div className="github conectPart">
//                     <a className="conection text" href="https://github.com/SplashyCoder">
//                         <img src="https://splashycoder.github.io/CV/media/icons8-github.svg" alt=""/>
//                         <p className='link'>https://github.com/SplashyCoder</p>
//                     </a>
//                 </div>
//             </div>
//             <div className="finalContainer">
//                 <p className='final'>This CV was made entirely using React.</p>     
//             </div>
//         </footer>
//     </div>
//   )
// }