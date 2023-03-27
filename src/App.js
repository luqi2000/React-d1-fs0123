import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ButtonComponent text="Prima immagine" />
        <ImageComponent
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ__7e_BarZ2W8YkIGpRg5lUvWqmaR5xvpcw&usqp=CAU"
          alt="Immagine"
        />

        <ButtonComponent text="Seconda immagine" />
        <ImageComponent
          src="https://png.pngitem.com/pimgs/s/3-36435_small-mario-super-mario-moving-hd-png-download.png"
          alt="Immagine"
        />
      </header>
    </div>
  );
}

export default App;
