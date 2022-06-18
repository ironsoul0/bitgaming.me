import React, { FC } from "react";

type IconProps = {
  className?: string;
};

export const SyncIcon: FC<IconProps> = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 50 50"
    className={className}
    fill="white"
  >
    <path d="M25 5C14.352 5 5.633 13.379 5.055 23.89a2.005 2.005 0 00.894 1.805 2.005 2.005 0 002.012.11 1.995 1.995 0 001.086-1.696C9.512 15.676 16.44 9 25 9c4.586 0 8.7 1.926 11.61 5H34a1.988 1.988 0 00-1.754.992 1.982 1.982 0 000 2.016A1.988 1.988 0 0034 18h6.262c.226.04.457.04.687 0H44V8a2 2 0 10-4 0v3.777C36.332 7.621 30.965 5 25 5zm18.031 18.973a1.995 1.995 0 00-2.078 1.918C40.488 34.324 33.56 41 25 41c-4.586 0-8.695-1.926-11.61-5H16a1.988 1.988 0 001.754-.992 1.982 1.982 0 000-2.016A1.988 1.988 0 0016 32H9.719a2.147 2.147 0 00-.633 0H6v10c-.012.723.367 1.39.992 1.754a1.982 1.982 0 002.016 0A1.988 1.988 0 0010 42v-3.777C13.668 42.379 19.035 45 25 45c10.648 0 19.367-8.379 19.945-18.89a1.996 1.996 0 00-1.914-2.137z"></path>
  </svg>
);

export const CoinIcon: FC<IconProps> = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
    className={className}
  >
    <circle cx="10" cy="10" r="10" fill="#F7F9FD"></circle>
    <path
      fill="#2669F5"
      d="M16 15L10.45 5 4.9 15H16zM6.55 9.687L9.1 5H4l2.55 4.688zm7.183 3.99H7.167L10.45 7.76l3.283 5.916z"
    ></path>
  </svg>
);

export const PlayIcon: FC<IconProps> = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
      clipRule="evenodd"
    />
  </svg>
);

export const ChartIcon: FC<IconProps> = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
  </svg>
);

export const ReactionIcon: FC<IconProps> = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
      clipRule="evenodd"
    />
  </svg>
);

export const NumberMemoryIcon: FC<IconProps> = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
  </svg>
);

export const ChimpIcon: FC<IconProps> = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M16 4H18V6H20V8H18V10H16V8H14V6H16V4Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 12V6H4V20H18V12H12ZM6 8H10V12H6V8ZM10 14V18H6V14H10ZM16 14V18H12V14H16Z"
      fill="currentColor"
    />
  </svg>
);

export const CrossIcon: FC<IconProps> = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

export const AlarmIcon: FC<IconProps> = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M5.45887 2L1 6.01478L2.33826 7.50107L6.79713 3.48629L5.45887 2Z"
      fill="currentColor"
    />
    <path d="M11 8H13V12H16V14H11V8Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12Z"
      fill="currentColor"
    />
    <path
      d="M18.5411 2L23 6.01478L21.6617 7.50107L17.2029 3.48629L18.5411 2Z"
      fill="currentColor"
    />
  </svg>
);

export const ShareIcon: FC<IconProps> = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 6.12549 15.0077 6.24919 15.0227 6.37063L8.08261 9.84066C7.54305 9.32015 6.80891 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15C6.80891 15 7.54305 14.6798 8.08261 14.1593L15.0227 17.6294C15.0077 17.7508 15 17.8745 15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C17.1911 15 16.457 15.3202 15.9174 15.8407L8.97733 12.3706C8.99229 12.2492 9 12.1255 9 12C9 11.8745 8.99229 11.7508 8.97733 11.6294L15.9174 8.15934C16.457 8.67985 17.1911 9 18 9Z"
      fill="currentColor"
    />
  </svg>
);
