import { html } from 'sinuous'
import { card } from './components/card';

const App = () => {

  return html`
    <>
      <h1>HELLO WORLD</h1>

      <${card} />
    </>
  `;
} 

export default App