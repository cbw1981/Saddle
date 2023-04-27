import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PublicRoute from './components/publicRoute';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
                <Route path="/login" element={<PublicRoute><Login/></PublicRoute>}/>
                <Route path="/register" element={<PublicRoute><Register/></PublicRoute>}/>
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
