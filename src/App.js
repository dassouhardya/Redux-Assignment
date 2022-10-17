// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import {Route, Routes} from 'react-router-dom'
import UserContainer from './Components/UserContainer';
import UserDetail from './Components/UserDetail';
import Nomatch from './Components/Nomatch';
function App() {
  return (
    <Provider store ={store}>
    <Routes>
      <Route path='/' element={<UserContainer/>}/>
      <Route path='/details' element={<UserDetail/>}/>
      <Route path='*' element={<Nomatch />} />
      
    </Routes>
    </Provider>
  );
}

export default App;
