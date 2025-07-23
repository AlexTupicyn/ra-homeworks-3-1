import { MovieCard } from './components/MovieCard';

function App() {
    return (
        <div className="movies-container">
            <MovieCard 
                title="Супермен"
                genre="ЭКШН"
                price={1299}
                rating={4}
                imageUrl="/images/superman.png"
            />
            <MovieCard 
                title="Одинокий странник"
                genre="ВЕСТЕРН"
                price={899}
                rating={2}
                imageUrl="/images/lonely-wanderer.png"
            />
        </div>
    );
}

export default App;
