import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import TracksPage from "./pages/TracksPage/TracksPage";
import TracksView from "./components/Tracks/TracksView/TracksView";
import ProducerPage from "./pages/ProducerPage/ProducerPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

import "./styles/App.scss";

const authUrl1 = "https://web-production-5250.up.railway.app";
const authUrl2 = "https://web-production-5250.up.railway.app/";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* {window.location.href !== authUrl1 && window.location.href !== authUrl2 && <Header />} */}

        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/tracks" exact component={TracksPage}></Route>
          <Route path="/tracks/:id" component={TracksView}></Route>
          <Route path="/producers/:id" component={ProducerPage}></Route>
          <Route path="/profile" component={ProfilePage}></Route>
          <Route path="/upload" component={UploadPage}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
