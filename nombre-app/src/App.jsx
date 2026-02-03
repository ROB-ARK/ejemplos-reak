import "./App.css";
import Encabezado from "./encabezado";
import ContenedorCards from "./contenedor";
import ContHorizo from "./conthorizo";
import PieDePg from "./piedepg";

function App() {
  return (
    <>
      <Encabezado />
      <ContenedorCards />
      <ContHorizo name ='' />
      <PieDePg />
    </>
  );
}

export default App;
