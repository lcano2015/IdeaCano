import './App.css';
import NavBarSuperior from './components/NavBarSuperior/NavBarSuperior';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
    return (
        <div className="app">
            <NavBarSuperior />
            <NavBar />
            <ItemListContainer
                greeting="Incluye aquí el rendering de algún texto o título provisional que luego
reemplazaremos por nuestro catálogo"></ItemListContainer>
            <Footer />
        </div>
    );
}
export default App;
