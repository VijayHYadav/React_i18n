import { FormattedMessage } from 'react-intl';
import './style.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';

function App() {

  return (
      <div className="App">
        <Header />
          <Form />
        <Footer />
      </div>
  );
}

export default App;
