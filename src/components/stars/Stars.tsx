import { Star } from './Star';

interface StarsProps {
    count?: number;
}

export const Stars = ({ count = 0 }: StarsProps) => {
    if (typeof count !== 'number' || count < 1 || count > 5) return null;

    return (
        <ul className="card-body-stars u-clearfix">
            {Array.from({ length: count }).map((_, i) => (
                <li key={i}>
                    <Star />
                </li>
            ))}
        </ul>
    );
};
