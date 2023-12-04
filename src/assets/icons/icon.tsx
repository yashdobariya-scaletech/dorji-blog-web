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

export const SearchIcon: React.FC<Props> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
    >
        <g clip-path="url(#clip0_54_147)">
            <path
                opacity="0.5"
                d="M15.75 15.75L11.25 11.25"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M2.25 7.5C2.25 8.18944 2.3858 8.87213 2.64963 9.50909C2.91347 10.146 3.30018 10.7248 3.78769 11.2123C4.2752 11.6998 4.85395 12.0865 5.49091 12.3504C6.12787 12.6142 6.81056 12.75 7.5 12.75C8.18944 12.75 8.87213 12.6142 9.50909 12.3504C10.146 12.0865 10.7248 11.6998 11.2123 11.2123C11.6998 10.7248 12.0865 10.146 12.3504 9.50909C12.6142 8.87213 12.75 8.18944 12.75 7.5C12.75 6.81056 12.6142 6.12787 12.3504 5.49091C12.0865 4.85395 11.6998 4.2752 11.2123 3.78769C10.7248 3.30018 10.146 2.91347 9.50909 2.64963C8.87213 2.3858 8.18944 2.25 7.5 2.25C6.81056 2.25 6.12787 2.3858 5.49091 2.64963C4.85395 2.91347 4.2752 3.30018 3.78769 3.78769C3.30018 4.2752 2.91347 4.85395 2.64963 5.49091C2.3858 6.12787 2.25 6.81056 2.25 7.5Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </g>
        <defs>
            <clipPath id="clip0_54_147">
                <rect
                    width="18"
                    height="18"
                    fill="white"
                />
            </clipPath>
        </defs>
    </svg>
);

export const MenuIcon: React.FC<Props> = (props) => (
    <svg
        width="30"
        height="30"
        viewBox="0 0 18 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H17C17.2652 2 17.5196 1.89464 17.7071 1.70711C17.8946 1.51957 18 1.26522 18 1C18 0.734784 17.8946 0.48043 17.7071 0.292893C17.5196 0.105357 17.2652 0 17 0H1Z"
            fill="#fff"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1 6C0.734784 6 0.48043 6.10536 0.292893 6.29289C0.105357 6.48043 0 6.73478 0 7C0 7.26522 0.105357 7.51957 0.292893 7.70711C0.48043 7.89464 0.734784 8 1 8H17C17.2652 8 17.5196 7.89464 17.7071 7.70711C17.8946 7.51957 18 7.26522 18 7C18 6.73478 17.8946 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6H1Z"
            fill="#fff"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1 12C0.734784 12 0.48043 12.1054 0.292893 12.2929C0.105357 12.4804 0 12.7348 0 13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14H17C17.2652 14 17.5196 13.8946 17.7071 13.7071C17.8946 13.5196 18 13.2652 18 13C18 12.7348 17.8946 12.4804 17.7071 12.2929C17.5196 12.1054 17.2652 12 17 12H1Z"
            fill="#fff"
        />
    </svg>
);

export const CloseIcon: React.FC<Props> = (props) => (
    <svg
        width="30"
        height="43"
        viewBox="0 0 12 12"
        fill="#fff"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
    >
        <line
            x1="1"
            y1="11"
            x2="11"
            y2="1"
            stroke="white"
            stroke-width="2"
        ></line>
        <line
            x1="1"
            y1="1"
            x2="11"
            y2="11"
            stroke="white"
            stroke-width="2"
        ></line>
    </svg>
);

export const CalendarIcon: React.FC<Props> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
    >
        <g
            opacity="0.6"
            clip-path="url(#clip0_54_190)"
        >
            <path
                d="M2.66669 4.66666C2.66669 4.31304 2.80716 3.9739 3.05721 3.72385C3.30726 3.4738 3.6464 3.33333 4.00002 3.33333H12C12.3536 3.33333 12.6928 3.4738 12.9428 3.72385C13.1929 3.9739 13.3334 4.31304 13.3334 4.66666V12.6667C13.3334 13.0203 13.1929 13.3594 12.9428 13.6095C12.6928 13.8595 12.3536 14 12 14H4.00002C3.6464 14 3.30726 13.8595 3.05721 13.6095C2.80716 13.3594 2.66669 13.0203 2.66669 12.6667V4.66666Z"
                stroke="#D4DAE6"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M10.6667 2V4.66667"
                stroke="#D4DAE6"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M5.33331 2V4.66667"
                stroke="#D4DAE6"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M2.66669 7.33333H13.3334"
                stroke="#D4DAE6"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M5.33331 10H6.66665V11.3333H5.33331V10Z"
                stroke="#D4DAE6"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </g>
        <defs>
            <clipPath id="clip0_54_190">
                <rect
                    width="16"
                    height="16"
                    fill="white"
                />
            </clipPath>
        </defs>
    </svg>
);
