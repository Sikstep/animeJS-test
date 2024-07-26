import React from 'react';
import './App.css';
import {Navbar, PATH} from './components/Navbar/Navbar';
import {Header} from './components/Header/Header';
import {Navigate, Route, Routes} from 'react-router-dom';
import {ClickOnDot} from './components/ClickOnDot/ClickOnDot';
import {Error404} from './components/Error/Error404';
import {BubblingText} from './components/BubbleText/BubbleText';
import {BackgroundAnime} from './components/BackgroundAnime/BackgroundAnime';
import {ToolTip} from './components/Tooltip/ToolTip';
import {Swiper} from './components/Swiper/Swiper';

function App() {
  return (
      <div className={'app-wrapper'}>
        <Header/>
        <Navbar/>
        <div className={'app-wrapper-content'}>
            <Routes>
                <Route path="/" element={<Navigate to={PATH.PAGE1}/>}/>
                <Route path={PATH.PAGE1} element={<ClickOnDot gridWidth={25} gridHeight={20}/>}/>
                <Route path={PATH.PAGE2} element={<BubblingText/>}/>
                <Route path={PATH.PAGE3} element={<BackgroundAnime/>}/>
                <Route path={PATH.PAGE4} element={<ToolTip/>}/>
                <Route path={PATH.PAGE5} element={<Swiper/>}/>

                <Route path={PATH.PAGE_ERROR} element={<Error404/>}/>

                <Route path={'/*'} element={<ClickOnDot gridWidth={25} gridHeight={20}/>}/>
            </Routes>
        </div>
      </div>
  );
}

export default App;
