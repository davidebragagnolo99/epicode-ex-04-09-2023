import logo from './logo.svg';
import './App.css';
import ButtonComponent from './component/ButtonComponent';
import ImageComponent from './component/ImageComponent';

function App() {
  return (
    <div className="App">
      <ButtonComponent text="questo è un bottone" />
      <ImageComponent src="https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20210118115944/ri/673/picture/2021/1/shutterstock_1576424071.jpg" alt="cuore umano" />
    </div>

  );
}

export default App;
