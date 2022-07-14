import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Header from './components/header/Header';
import SmallHeader from './components/smallHeader/SmallHeader';
import Footer from './components/footer/Footer';
import Project from './components/project/Project';
import Detail from './components/detail/Detail';
import Seperator from './components/seperator/Seperator';
import { ScrollToTop } from './tools/utils';

import './App.scss';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={
            <div className='main-page'>
              <Header />

              <Project content='bpm' />
              <Seperator />

              <Project content='cc' />
              <Seperator />

              <Project content='oe' />
              <Seperator />

              <Project content='port' />
            </div>
          } />

          <Route path='/billings-property-management' element={
            <div className='detail-page'>
              <ScrollToTop />

              <SmallHeader detail={true}/>

              <Detail content='bpm'/>
            </div>
          }/>

          <Route path='/open-book' element={
            <div className='detail-page'>
              <ScrollToTop />

              <SmallHeader />

              <Detail content='oe'/>
            </div>
          }/>

          <Route path='/color-crusher' element={
            <div className='detail-page'>
              <ScrollToTop />

              <SmallHeader />

              <Detail content='cc'/>
            </div>
          }/>

          <Route path='/portfolio' element={
            <div className='detail-page'>
              <ScrollToTop />

              <SmallHeader />

              <Detail content='port'/>
            </div>
          }/>
        </Routes>

        <SmallHeader />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
