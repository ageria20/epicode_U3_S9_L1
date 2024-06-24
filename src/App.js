import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent logo={logo} alt="react logo" logoStyle={{ width: "50px" }} />

      <ButtonComponent
        text="Click Here"
        style={{
          backgroundColor: "black",
          border: "none",
          borderRadius: "1rem",
          color: "white",
          padding: "0.3rem 1rem",
        }}
      />
      <ImageComponent
        image="https://images.unsplash.com/photo-1504150558240-0b4fd8946624?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="travel image"
        imageStyle={{ width: "50%" }}
      />
    </div>
  );
}

export default App;
