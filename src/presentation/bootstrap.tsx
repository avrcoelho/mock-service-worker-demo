import * as ReactDOM from 'react-dom';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('../../mocks/browser');
  worker.start();
}

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
