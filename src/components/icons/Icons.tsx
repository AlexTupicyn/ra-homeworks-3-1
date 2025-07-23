interface HeartIconProps {
    filled?: boolean;
    color?: string;
}

export const HeartIcon = ({
    filled = false,
    color = "#9c9489",
}: HeartIconProps) => (
    <svg
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="
            M12 21.35
            l-1.45-1.32
            C5.4 15.36
            2 12.28
            2 8.5
            2 5.42
            4.42 3
            7.5 3
            c1.74 0 3.41 0.81 4.5 2.09
            C13.09 3.81
            14.76 3
            16.5 3
            C19.58 3
            22 5.42
            22 8.5
            c0 3.78-3.4 6.86-8.55 11.54
            L12 21.35
            z"
            fill={filled ? color : "none"}
            stroke={color}
            strokeWidth="2"
        />
    </svg>
);

export const ShareIcon = () => (
    <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="
            M18 16.08
            c-0.76 0-1.44 0.3-1.96 0.77
            L8.91 12.7
            c0.05-0.23 0.09-0.46 0.09-0.7
            s-0.04-0.47-0.09-0.7
            l7.05-4.11
            c0.54 0.5 1.25 0.81 2.04 0.81
            1.66 0 3-1.34 3-3
            s-1.34-3-3-3-3 1.34-3 3
            c0 0.24 0.04 0.47 0.09 0.7
            L8.04 9.81
            C7.5 9.31 6.79 9 6 9
            c-1.66 0-3 1.34-3 3
            s1.34 3 3 3
            c0.79 0 1.5-0.31 2.04-0.81
            l7.12 4.16
            c-0.05 0.21-0.08 0.43-0.08 0.65
            0 1.61 1.31 2.92 2.92 2.92
            1.61 0 2.92-1.31 2.92-2.92
            s-1.31-2.92-2.92-2.92
            z"
            fill="#9c9489"
        />
    </svg>
);
