import * as C from './App.styles'
import { Header } from './components/Header';
import { Feed } from './components/Feed'

function App() {
  return (
    <C.Container>
      <Header/>
      <Feed/>
    </C.Container>
  );
}

export default App;
