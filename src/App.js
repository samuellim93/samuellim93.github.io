import Home from "./components/Home";
import Project1 from "./components/Project1";
import { 
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/project1' element={<Project1 />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
