import { Navbar, Home, Footer } from './components';
import { PrimeReactProvider } from 'primereact/api';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-orange/theme.css';
import "primereact/resources/primereact.min.css";

function App() {
  return (
    <PrimeReactProvider>
      <Navbar token={false} total={25000}></Navbar>{' '} {/* El token no se generará en la capa de UI, se traerá desde AUTH */}
      <Home></Home>
      <Footer></Footer>
    </PrimeReactProvider>
  );
}

export default App;
