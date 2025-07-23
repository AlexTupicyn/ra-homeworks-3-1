import { useState } from 'react';
import { Stars } from './stars/Stars';
import { HeartIcon, ShareIcon } from './icons/Icons';

interface MovieCardProps {
    title: string;
    genre?: string;
    price: number;
    rating: number;
    imageUrl: string;
}

const getGenreClass = (genre?: string): string => {
    if (!genre) return '';
    const genreLower = genre.toLowerCase();

    if (/экшн|action|боевик/.test(genreLower)) return 'action';
    if (/вестерн|western/.test(genreLower)) return 'western';
    if (/фантастика|fantasy|фэнтези/.test(genreLower)) return 'fantasy';
    if (/драма|drama/.test(genreLower)) return 'drama';
    if (/комедия|comedy/.test(genreLower)) return 'comedy';
    if (/ужасы|horror/.test(genreLower)) return 'horror';

    return 'other';
};

export const MovieCard = ({ title, genre, price, rating, imageUrl }: MovieCardProps) => {
    const [liked, setLiked] = useState(false);
    const genreClass = getGenreClass(genre);
    const toggleLike = () => setLiked(prev => !prev);

    return (
        <div className={`movie-card ${genreClass}`}>
            <div className="movie-image-section">
                <div className="image-frame">
                    <img src={imageUrl} alt={title} className="movie-image" />
                    {genre && <div className={`genre-badge ${genreClass}`}>{genre}</div>}
                </div>
            </div>

            <div className="movie-content">
                <div className="top-actions">
                    <button className="icon-button heart-button" onClick={toggleLike}>
                        <HeartIcon filled={liked} color="var(--accent-color)" />
                    </button>
                    <button className="icon-button share-button">
                        <ShareIcon />
                    </button>
                </div>
                
                <h3 className="movie-title">{title}</h3>
                <Stars count={rating} />
                
                <div className="bottom-actions">
                    <button className="buy-button">
                        КУПИТЬ {price}₽
                    </button>
                    <button className="details-button">
                        ПОДРОБНЕЕ <span className="arrow">➜</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
