import React from "react";

interface Props {
    className?: string;
    fill?: string;
    width?: string;
    height?: string;
    color?: string;
    id?: string;
}

export const Logo: React.FC<Props> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
    >
        <path
            d="M4.00002 8V2H18.6667C24.5556 2 36.3333 5.46667 36.3333 19.3333C36.3333 33.2 26.3333 37.1111 21.3333 37.3333H4V21.3333C4 16.5333 4.66667 16 6.66667 16H14V28H18.6667C20 28 26.6667 27.3333 26.3333 19.3333C26.0667 12.9333 21.1111 11.5556 18.6667 11.6667H10C4.40002 11.9333 4.00002 10 4.00002 8Z"
            fill="white"
        />
        <path
            d="M36.3333 19.3333C36.3333 5.46667 24.5556 2 18.6667 2C23.1111 3.55556 32 9.2 32 19.3333C32 29.4667 23.3888 35.8856 14 35.3333C9.80118 35.0863 4 31.3333 4 31.3333V37.3333H21.3333C26.3333 37.1111 36.3333 33.2 36.3333 19.3333Z"
            fill="#C93E29"
        />
    </svg>
);
