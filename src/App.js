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
    </div>
  );
}

export default App;
