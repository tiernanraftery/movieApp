import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/content';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        {/* footer compent changes with URL
        client side routing allows your app 
        to update the URL from a link*/}
        <Route path="/home" element={<Content />} />
        <Route path="/read" element={<Footer />} />
        <Route path="/create" element={<Header/>} />
      </Routes>
    </Router>
  );
}

export default App;