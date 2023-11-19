import react from 'react';
import Main from './Main';
import Menu from './Menu';
import Projects from './Projects';
import Menuslides from './Menuslides'
import Bottompages from './Bottompage';
function Loader() {
  return (
    <div className="App">
      <Main />
      <Menu />
      <Projects />
      <div className='px-[5%]'>
        <Menuslides  className="px-[10%] max-w-7xl"/>
      </div>
      <Bottompages />
    </div>
  );
}

export default Loader;
