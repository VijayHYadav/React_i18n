import { FormattedMessage } from 'react-intl';
import './style.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import DynamicData from './components/DynamicData';

function App() {

  return (
      <div className="App">
        <Header />
          <Form />
          <hr />
          <DynamicData />
          <hr />
          <br />
        <Footer />
      </div>
  );
}

export default App;
