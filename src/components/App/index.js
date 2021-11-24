import { FormattedMessage } from 'react-intl';
import './style.css';

function App() {

  return (
      <div className="App">
        <header className="App-header">
          <FormattedMessage id="hello" />
        </header>
      </div>
  );
}

export default App;
