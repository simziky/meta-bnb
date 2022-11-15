import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './Layout/layout';
import Home from './Pages/Home/home';
import PlaceToStay from './Pages/placeToStay/placeToStay';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar,faSliders, faXmark, faChevronRight} from "@fortawesome/free-solid-svg-icons";

library.add( faStar,faSliders , faXmark, faChevronRight);

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/PlaceToStay" element={<PlaceToStay />} />

        </Routes>
     </Layout>
    </div>
  );
}

export default App;
