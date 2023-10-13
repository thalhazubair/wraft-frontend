import React from 'react';

// import book from './icon/book-opened.svg';
import layout from './icon/extension.svg';
import grid from './icon/grid-alt.svg';
import templates from './icon/grid-small.svg';
import content from './icon/sticker.svg';
import flow from './icon/bolt.svg';
import del from './icon/bin.svg';
import edit from './icon/edit.svg';
import logo from './icon/logo-white.svg';
import user from './icon/user.svg';
import plus from './icon/plus.svg';
import file from './icon/file.svg';
import field from './icon/box.svg';
import food from './icon/food.svg';
import userno from './icon/userno.svg';

import abstract from './icon/abstract.svg';

import { Image } from 'theme-ui';
import styled from '@emotion/styled';
// import { Box } from 'theme-ui';
// import book from './icon/book-opened.svg';

const IconBox = styled.div`
  img {
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }
  img.x {
    width: auto;
    height 24px;
  }
  img.y {
    width: auto;
    height 24px;
  }
  img.clean{
    padding:0;
  }
  img.ico{
    width: auto;
    height 24px;
    margin:0;
    magin-top: -1px;
  }
`;

interface IconBoxWrapperProps {
  content: string;
}

/**
 * Generic Wrapper
 * @param param0
 * @returns
 */
export const IconBoxWrapper = ({ content }: IconBoxWrapperProps) => (
  <IconBox>
    <Image src={content} />
  </IconBox>
);

export const Book = () => <IconBoxWrapper content={content} />;
export const Layout = () => <IconBoxWrapper content={grid} />;
export const ContentType = () => <IconBoxWrapper content={layout} />;
export const Template = () => <IconBoxWrapper content={templates} />;
export const Flow = () => <IconBoxWrapper content={flow} />;
export const Del = () => <IconBoxWrapper content={del} />;
export const Edit = () => <IconBoxWrapper content={edit} />;
export const File = () => <IconBoxWrapper content={file} />;
export const FieldIcon = () => <IconBoxWrapper content={field} />;
export const User = () => <IconBoxWrapper content={user} />;
export const Plus = () => <IconBoxWrapper content={plus} />;

export const Logo = () => (
  <IconBox>
    <Image className="y" src={logo} width="50px" ml={2} />
  </IconBox>
);

export const FoodIcon = () => (
  <IconBox>
    <Image className="ico" src={food} width="24px" height="24px" />
  </IconBox>
);
export const Abstract = () => (
  <Image className="x" src={abstract} width="100" />
);

export const UserIcon = () => <Image className="x" src={userno} width="32" />;

export const AddIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none">
    <path
      d="M13.6568 8.0006H2.34314M7.99999 2.34375V13.6575"
      stroke="#B1B5B9"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const InviteUserIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}>
      <path
        d="M5.52178 11.8532L5.32436 12.4993H5.99996H14H14.6603L14.4812 11.8638C14.4282 11.6756 14.3042 11.5346 14.2071 11.4428C14.1007 11.3422 13.9709 11.2493 13.8327 11.1648C13.5552 10.995 13.1953 10.8297 12.795 10.685C11.9957 10.396 10.9708 10.166 9.99996 10.166C9.03273 10.166 8.01129 10.3942 7.21275 10.6824C6.81275 10.8267 6.45279 10.9917 6.17424 11.1617C6.03551 11.2463 5.9054 11.3391 5.79836 11.4395C5.69998 11.5318 5.57773 11.6701 5.52178 11.8532ZM3.99996 7.49935H3.49996V7.99935V9.49935H3.16663V7.99935V7.49935H2.66663H1.16663V7.16602H2.66663H3.16663V6.66602V5.16602H3.49996V6.66602V7.16602H3.99996H5.49996V7.49935H3.99996ZM12.1666 5.33268C12.1666 6.52987 11.1972 7.49935 9.99996 7.49935C8.80277 7.49935 7.83329 6.52987 7.83329 5.33268C7.83329 4.13549 8.80277 3.16602 9.99996 3.16602C11.1972 3.16602 12.1666 4.13549 12.1666 5.33268ZM11.8333 5.33268C11.8333 4.32321 11.0094 3.49935 9.99996 3.49935C8.99048 3.49935 8.16663 4.32321 8.16663 5.33268C8.16663 6.34216 8.99048 7.16602 9.99996 7.16602C11.0094 7.16602 11.8333 6.34216 11.8333 5.33268ZM5.16663 11.9993C5.16663 11.7397 5.29275 11.4752 5.58876 11.202C5.88817 10.9256 6.32683 10.6754 6.85173 10.4652C7.90234 10.0443 9.17246 9.83268 9.99996 9.83268C10.8275 9.83268 12.0976 10.0443 13.1482 10.4652C13.6731 10.6754 14.1117 10.9256 14.4112 11.202C14.7072 11.4752 14.8333 11.7397 14.8333 11.9993V12.8327H5.16663V11.9993ZM6.45394 12.199C6.45392 12.199 6.45424 12.1985 6.45497 12.1976L6.45394 12.199ZM13.5462 12.1972C13.5462 12.1972 13.5456 12.1965 13.5445 12.195C13.5457 12.1965 13.5463 12.1972 13.5462 12.1972Z"
        fill="#656E78"
        stroke="#B1B5B9"
      />
    </svg>
  );
};

export const CloudUploadIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      {...props}>
      <path
        d="M16.1969 14.342C16.1735 14.3121 16.1436 14.288 16.1095 14.2713C16.0754 14.2547 16.038 14.2461 16 14.2461C15.9621 14.2461 15.9246 14.2547 15.8905 14.2713C15.8564 14.288 15.8265 14.3121 15.8032 14.342L12.3032 18.7701C12.2743 18.807 12.2564 18.8512 12.2515 18.8977C12.2466 18.9443 12.2549 18.9913 12.2754 19.0333C12.296 19.0754 12.3279 19.1108 12.3676 19.1355C12.4074 19.1603 12.4532 19.1734 12.5 19.1733H14.8094V26.7483C14.8094 26.8858 14.9219 26.9983 15.0594 26.9983H16.9344C17.0719 26.9983 17.1844 26.8858 17.1844 26.7483V19.1764H19.5C19.7094 19.1764 19.825 18.9358 19.6969 18.7733L16.1969 14.342Z"
        fill="#6F777F"
      />
      <path
        d="M25.3563 11.4594C23.925 7.68438 20.2781 5 16.0063 5C11.7344 5 8.0875 7.68125 6.65625 11.4563C3.97813 12.1594 2 14.6 2 17.5C2 20.9531 4.79687 23.75 8.24687 23.75H9.5C9.6375 23.75 9.75 23.6375 9.75 23.5V21.625C9.75 21.4875 9.6375 21.375 9.5 21.375H8.24687C7.19375 21.375 6.20312 20.9562 5.46562 20.1969C4.73125 19.4406 4.34063 18.4219 4.375 17.3656C4.40313 16.5406 4.68437 15.7656 5.19375 15.1125C5.71562 14.4469 6.44688 13.9625 7.25938 13.7469L8.44375 13.4375L8.87813 12.2937C9.14688 11.5812 9.52187 10.9156 9.99375 10.3125C10.4596 9.71471 11.0114 9.18922 11.6313 8.75313C12.9156 7.85 14.4281 7.37187 16.0063 7.37187C17.5844 7.37187 19.0969 7.85 20.3813 8.75313C21.0031 9.19063 21.5531 9.71562 22.0187 10.3125C22.4906 10.9156 22.8656 11.5844 23.1344 12.2937L23.5656 13.4344L24.7469 13.7469C26.4406 14.2031 27.625 15.7437 27.625 17.5C27.625 18.5344 27.2219 19.5094 26.4906 20.2406C26.132 20.6013 25.7054 20.8873 25.2355 21.082C24.7656 21.2768 24.2618 21.3763 23.7531 21.375H22.5C22.3625 21.375 22.25 21.4875 22.25 21.625V23.5C22.25 23.6375 22.3625 23.75 22.5 23.75H23.7531C27.2031 23.75 30 20.9531 30 17.5C30 14.6031 28.0281 12.1656 25.3563 11.4594Z"
        fill="#6F777F"
      />
    </svg>
  );
};

export const ErrorIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}>
      <path d="M24 4C12.96 4 4 12.95 4 24s8.96 20 20 20 20-8.95 20-20S35.04 4 24 4zm2 30h-4v-4h4v4zm0-8h-4V14h4v12z" />
    </svg>
  );
};

export const TickIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm7.072 3.21l4.318-5.398-.78-.624-3.682 4.601L4.32 7.116l-.64.768 3.392 2.827z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}>
      <path d="M21.71 20.29L18 16.61A9 9 0 1016.61 18l3.68 3.68a1 1 0 001.42 0 1 1 0 000-1.39zM11 18a7 7 0 117-7 7 7 0 01-7 7z" />
    </svg>
  );
};

export const BrandLogo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 115.92 36.37"
      color="inherit"
      fill="inherit"
      height="1em"
      width="1em"
      {...props}>
      <path
        color="inherit"
        d="M39.52 23.51l-.22 1.62h-.25l-.26-1.62-3.36-13.29h-4.94l-3.33 13.25-.21 1.15-.25-.05-.13-1.06-2.68-13.29h-6.05l5.41 21.3h6.51l3.07-11.63h.25l3.07 11.63h6.82l5.45-21.3h-6.09l-2.81 13.29zm18.56-11.07l-.25-.09v-2.13h-5.92v21.34h5.92V17.12a6.92 6.92 0 014.72-1.87h.86V9.8h-.51a6.19 6.19 0 00-4.82 2.64zm20.15-.86l-.26.09a6.52 6.52 0 00-4.85-1.87c-5.24 0-8.44 4.89-8.44 11.07s3.07 11.07 8 11.07A6.36 6.36 0 0078 29.43l.26.08v2h5.92V10.22h-5.95zm0 12.61a4.5 4.5 0 01-4.39 2.94c-2.26 0-3.24-2.64-3.24-6.26s1-6.22 3.24-6.22a6.73 6.73 0 014.39 1.49zM99.14 4.86a9.17 9.17 0 012.89.46l.73-4.43A10.27 10.27 0 0098.37 0c-4.73 0-7.75 3.28-7.75 8.3v1.92h-2.94v4.52h2.94v16.78h5.92V14.74h4v-4.52h-4V8.3c0-2.38.89-3.44 2.6-3.44zm16.05 21.33a5.37 5.37 0 01-2.17.43c-1.28 0-2.17-.9-2.17-3v-8.88h4.3v-4.52h-4.3V3.41H105v6.81h-2.64v4.52H105v9.15c0 5 2.94 7.84 6.94 7.84a8.39 8.39 0 004-.9zM0 31.68h16.83v4.69H0z"
      />
    </svg>
  );
};

export const LayoutLogo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      color="inherit"
      fill="inherit"
      height="3.5em"
      width="3.5em"
      {...props}>
      <path d="M14 14v72h72V14H14zm70 2v9.85H16V16h68zM16 27.85h22.5V84H16V27.85zM40.5 84V27.85H84V84H40.5z" />
      <path d="M47.98 39.44h29.48v2H47.98zM47.98 51.15h29.48v2H47.98z" />
    </svg>
  );
};

export const FlowLogo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      color="inherit"
      fill="inherit"
      height="3.5em"
      width="3.5em"
      {...props}>
      <path d="M85.25 71.22a23.16 23.16 0 00-23-21.28H51.8V28.85a12 12 0 10-4-.06v21.15h-10a23.16 23.16 0 00-23 21.28 12 12 0 104-.07 19.16 19.16 0 0119-17.21h10v17.27a12 12 0 104-.06V53.94h10.4a19.16 19.16 0 0119 17.21 12 12 0 104 .07zM42 17a8 8 0 118 8 8 8 0 01-8-8zM25 83a8 8 0 11-8-8 8 8 0 018 8zm33 0a8 8 0 11-8-8 8 8 0 018 8zm25 8a8 8 0 118-8 8 8 0 01-8 8z" />
    </svg>
  );
};

export const ThemeLogo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      color="inherit"
      fill="inherit"
      height="4rem"
      width="4rem"
      {...props}>
      <path
        d="M49.63 14.82c-1.9.04-3.72 1.01-4.73 2.75l-4.38 7.5a1.6 1.6 0 002.78 1.63l4.35-7.52a2.37 2.37 0 013.3-.86c1.2.7 1.6 2.1.92 3.25l-1.3 2.28a1.6 1.6 0 00.58 2.2L54 27.68a1.6 1.6 0 002.17-.58l4.25-7.33a3.25 3.25 0 014.48-1.14l.27.14a3.18 3.18 0 011.23 4.4l-4.25 7.33a1.6 1.6 0 00.58 2.2l3 1.72a1.6 1.6 0 002.17-.6l1.92-3.32a1.81 1.81 0 012.5-.7c.87.5 1.16 1.56.63 2.47l-4.98 8.58a1.6 1.6 0 102.75 1.6l4.98-8.58a5.01 5.01 0 00-1.8-6.84 5.03 5.03 0 00-6.83 1.87l-1.14 1.95-.23-.13 3.45-5.92a6.47 6.47 0 00-2.4-8.8l-.28-.15a6.46 6.46 0 00-8.8 2.33l-3.45 5.95-.07-.05.5-.88a5.62 5.62 0 00-5.02-8.38zm-13.98 13.6a4.37 4.37 0 00-3.42 2.15l-4.2 7.2a4.29 4.29 0 001.54 5.85l30.5 17.53a4.35 4.35 0 005.88-1.6l4.17-7.2a4.32 4.32 0 00-1.55-5.88L38.1 28.98a4.23 4.23 0 00-2.45-.54zm.23 3.18a1 1 0 01.6.15l30.5 17.5c.53.3.7.96.37 1.52l-4.17 7.2c-.33.57-.97.71-1.5.4L31.2 40.88c-.53-.3-.73-.93-.4-1.5l4.2-7.2c.2-.35.53-.54.88-.57zM71.1 56.67a1.6 1.6 0 00-.67 3l1.1.63-4.03 6.9-26.23-9.3a1.6 1.6 0 00-1.92.73l-1.5 2.57-3.58-2.05a1.6 1.6 0 00-2.17.6l-.8 1.35a1.6 1.6 0 00-.13 1.27l.13.43v.03c.25.77.1 2.67-.23 3.3l-7.3 14.12a1.6 1.6 0 00.58 2.08l2.2 1.4.13.07L29 85a1.6 1.6 0 002.07-.55l8.66-13.33a6.43 6.43 0 012.8-1.87l.42-.1a1.6 1.6 0 001.02-.75l.8-1.35a1.6 1.6 0 00-.6-2.2l-3.55-2.05.83-1.42 26.25 9.27a1.6 1.6 0 001.9-.7l5.48-9.43a1.6 1.6 0 00-.58-2.2L72 56.9a1.6 1.6 0 00-.9-.23zm-36.62 6.3l3.15 1.8 3.14 1.8a7.49 7.49 0 00-3.75 2.8L29.17 81.5l-.9-.47-.97-.6 6.62-12.83c.74-1.41.82-3.05.55-4.62z"
        fill="inherit"
      />
    </svg>
  );
};

export const PermLogo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 100 100"
      color="inherit"
      fill="inherit"
      height="3rem"
      width="3rem"
      {...props}>
      <path d="M50 6c-12.66 0-23.22 8.6-23.22 19.72V39H21a2 2 0 00-.19 0A2 2 0 0019 41v26.75C19 82.45 33.04 94 50 94s31-11.55 31-26.25V41a2 2 0 00-2-2h-5.78V25.72C73.22 14.6 62.66 6 50 6zm0 4c10.86 0 19.22 7.18 19.22 15.72V39H30.78V25.72C30.78 17.18 39.14 10 50 10zM23 43h54v24.75C77 79.88 65.16 90 50 90S23 79.88 23 67.75V43zm27 10.44a8.18 8.18 0 00-8.16 8.15c0 3.8 2.64 7 6.16 7.91v5.16a2 2 0 104 0V69.5a8.2 8.2 0 006.16-7.9c0-4.5-3.68-8.16-8.16-8.16zm0 4a4.12 4.12 0 014.16 4.15A4.15 4.15 0 0150 65.8a4.15 4.15 0 01-4.16-4.2A4.12 4.12 0 0150 57.44z" />
    </svg>
  );
};

export const NotifIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}>
      <path
        fill="currentColor"
        d="M24 44c2.21 0 4-1.79 4-4h-8c0 2.21 1.79 4 4 4zm12-12V22c0-6.15-3.27-11.28-9-12.64V8c0-1.66-1.34-3-3-3s-3 1.34-3 3v1.36c-5.73 1.36-9 6.49-9 12.64v10l-4 4v2h32v-2l-4-4z"
      />
    </svg>
  );
};

export const EmptyForm = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 752 752"
      fill="currentColor"
      height="6rem"
      // width="auto"
      {...props}>
      <path
        fill="currentColor"
        d="M489.66 281.29v-1.422c-.473-2.367-1.895-3.789-3.79-5.21-4.26-4.735-13.733-14.208-33.624-34.099l-36.465-36.465h-.473c-.472 0-.472-.472-.945-.472h-.473c-.472 0-.472 0-.945-.473H269.453c-3.789 0-7.105 3.316-7.105 7.105v331.51c0 2.84 1.421 5.211 4.261 6.63 2.367.945 5.684.472 7.578-.946l16.574-15.16 16.574 14.68c2.84 2.367 6.63 2.367 9.473 0l16.574-14.68 16.574 14.68c2.84 2.367 6.629 2.367 9.473 0l16.574-14.68 16.574 14.68c2.84 2.367 6.629 2.367 9.472 0l16.578-14.68 16.574 14.68c2.84 2.367 6.63 2.367 9.473 0l16.574-14.68 16.574 14.68c1.422.945 2.84 1.894 4.735 1.894.945 0 1.894 0 2.84-.472 2.367-.945 4.261-3.79 4.261-6.63zm-24.152-7.106h-46.883v-46.883c13.258 13.263 33.621 33.626 46.883 46.884zm.473 243.42c-2.84-2.367-6.63-2.367-9.473 0l-16.574 14.68-16.574-14.68c-2.84-2.367-6.629-2.367-9.473 0l-16.574 14.68-16.574-14.68c-2.84-2.367-6.629-2.367-9.472 0l-16.574 14.68-16.578-14.68c-2.84-2.367-6.63-2.367-9.473 0l-16.574 14.68-16.574-14.68c-1.422-1.421-2.84-1.894-4.735-1.894-1.894 0-3.316.473-4.734 1.895l-9.473 8.523v-308.77h127.87v63.934c0 3.789 3.317 7.105 7.106 7.105h63.93v237.74zm-11.84-32.676c0 3.79-3.317 7.106-7.106 7.106l-142.07-.004c-3.789 0-7.105-3.316-7.105-7.105s3.316-7.106 7.105-7.106h142.07c3.79.004 7.102 3.32 7.102 7.11z"
      />
    </svg>
  );
};

interface IconItem {
  width?: number;
  height?: number;
  children?: any;
  color?: string;
}

/**
 * Regular Icon Frame
 * @param param0
 * @returns
 */
export const GenericIcon = ({
  width = 24,
  height = 24,
  children,
  color = 'red',
}: IconItem) => {
  return (
    <svg
      height="1.25rem"
      width="1.25rem"
      viewBox={`0 0 ${width} ${height}`}
      fill="currentColor"
      data-color={color}>
      {children}
    </svg>
  );
};

interface PlIconProps {
  size?: number;
  width: number;
  height?: number;
  color?: string;
}

/**
 * Temp place for styled-icons
 */
const DotsVerticalRounded = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
    </GenericIcon>
  );
};

const Pencil = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"></path>
      <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"></path>
    </GenericIcon>
  );
};

const Download = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z"></path>
    </GenericIcon>
  );
};

const Calendar = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path d="M3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7v2H5a2 2 0 0 0-2 2zm16 14H5V8h14z"></path>
    </GenericIcon>
  );
};

const Trash = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path>
      <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
    </GenericIcon>
  );
};

const PlusAlt = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
    </GenericIcon>
  );
};

const LayoutAlt = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 2 .001 4H5V5h14zM5 11h8v8H5v-8zm10 8v-8h4.001l.001 8H15z"></path>
    </GenericIcon>
  );
};

const UserAlt = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
    </GenericIcon>
  );
};

const Collection = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path d="M19 10H5c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2zM5 20v-8h14l.002 8H5zM5 6h14v2H5zm2-4h10v2H7z"></path>
    </GenericIcon>
  );
};

const Bell = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z"></path>
    </GenericIcon>
  );
};

const Search = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
    </GenericIcon>
  );
};

const Phone = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z"></path>
    </GenericIcon>
  );
};

const MailSend = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"></path>
      <path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"></path>
    </GenericIcon>
  );
};

const PlayCircle = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
      <path d="m9 17 8-5-8-5z"></path>
    </GenericIcon>
  );
};

const ArrowBack = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
    </GenericIcon>
  );
};

const Exit = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path d="M19.002 3h-14c-1.103 0-2 .897-2 2v4h2V5h14v14h-14v-4h-2v4c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.898-2-2-2z"></path>
      <path d="m11 16 5-4-5-4v3.001H3v2h8z"></path>
    </GenericIcon>
  );
};

const Note = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h8a.996.996 0 0 0 .707-.293l7-7a.997.997 0 0 0 .196-.293c.014-.03.022-.061.033-.093a.991.991 0 0 0 .051-.259c.002-.021.013-.041.013-.062V5c0-1.103-.897-2-2-2zM5 5h14v7h-6a1 1 0 0 0-1 1v6H5V5zm9 12.586V14h3.586L14 17.586z"></path>
    </GenericIcon>
  );
};

const Like = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z"></path>
    </GenericIcon>
  );
};

const Cabinet = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path d="M21 4c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V4zM5 4h14v7H5V4zm0 16v-7h14.001v7H5z"></path>
      <path d="M14 7h-4V6H8v3h8V6h-2zm0 8v1h-4v-1H8v3h8v-3z"></path>
    </GenericIcon>
  );
};

const Carousel = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path d="M4 19h2c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2h2c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2h-2c0-1.103-.897-2-2-2H8c-1.103 0-2 .897-2 2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2zM20 7v10h-2V7h2zM8 5h8l.001 14H8V5zM4 7h2v10H4V7z"></path>
    </GenericIcon>
  );
};

const TextIcon = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path d="M5 8h2V6h3.252L7.68 18H5v2h8v-2h-2.252L13.32 6H17v2h2V4H5z"></path>
    </GenericIcon>
  );
};

const Cog = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z"></path>
      <path d="m2.845 16.136 1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65.998-1.729 1.145.662a.997.997 0 0 0 1.188-.142 6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956 6.083 6.083 0 0 1 2.384 1.399.999.999 0 0 0 1.188.142l1.144-.661 1 1.729-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378 0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649-.998 1.729-1.145-.661a.996.996 0 0 0-1.188.142 6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956 6.083 6.083 0 0 1-2.384-1.399.992.992 0 0 0-1.188-.141l-1.144.662-1-1.729 1.124-.651a1 1 0 0 0 .471-1.108z"></path>
    </GenericIcon>
  );
};

const UserVoice = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path d="M8 12c2.28 0 4-1.72 4-4s-1.72-4-4-4-4 1.72-4 4 1.72 4 4 4zm0-6c1.178 0 2 .822 2 2s-.822 2-2 2-2-.822-2-2 .822-2 2-2zm1 7H7c-2.757 0-5 2.243-5 5v1h2v-1c0-1.654 1.346-3 3-3h2c1.654 0 3 1.346 3 3v1h2v-1c0-2.757-2.243-5-5-5zm9.364-10.364L16.95 4.05C18.271 5.373 19 7.131 19 9s-.729 3.627-2.05 4.95l1.414 1.414C20.064 13.663 21 11.403 21 9s-.936-4.663-2.636-6.364z"></path>
      <path d="M15.535 5.464 14.121 6.88C14.688 7.445 15 8.198 15 9s-.312 1.555-.879 2.12l1.414 1.416C16.479 11.592 17 10.337 17 9s-.521-2.592-1.465-3.536z"></path>
    </GenericIcon>
  );
};

const Wrench = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path d="M5.122 21c.378.378.88.586 1.414.586S7.572 21.378 7.95 21l4.336-4.336a7.495 7.495 0 0 0 2.217.333 7.446 7.446 0 0 0 5.302-2.195 7.484 7.484 0 0 0 1.632-8.158l-.57-1.388-4.244 4.243-2.121-2.122 4.243-4.243-1.389-.571A7.478 7.478 0 0 0 14.499 2c-2.003 0-3.886.78-5.301 2.196a7.479 7.479 0 0 0-1.862 7.518L3 16.05a2.001 2.001 0 0 0 0 2.828L5.122 21zm4.548-8.791-.254-.616a5.486 5.486 0 0 1 1.196-5.983 5.46 5.46 0 0 1 4.413-1.585l-3.353 3.353 4.949 4.95 3.355-3.355a5.49 5.49 0 0 1-1.587 4.416c-1.55 1.55-3.964 2.027-5.984 1.196l-.615-.255-5.254 5.256h.001l-.001 1v-1l-2.122-2.122 5.256-5.255z"></path>
    </GenericIcon>
  );
};

// EMPTY
const Style = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path d="M5.122 21c.378.378.88.586 1.414.586S7.572 21.378 7.95 21l4.336-4.336a7.495 7.495 0 0 0 2.217.333 7.446 7.446 0 0 0 5.302-2.195 7.484 7.484 0 0 0 1.632-8.158l-.57-1.388-4.244 4.243-2.121-2.122 4.243-4.243-1.389-.571A7.478 7.478 0 0 0 14.499 2c-2.003 0-3.886.78-5.301 2.196a7.479 7.479 0 0 0-1.862 7.518L3 16.05a2.001 2.001 0 0 0 0 2.828L5.122 21zm4.548-8.791-.254-.616a5.486 5.486 0 0 1 1.196-5.983 5.46 5.46 0 0 1 4.413-1.585l-3.353 3.353 4.949 4.95 3.355-3.355a5.49 5.49 0 0 1-1.587 4.416c-1.55 1.55-3.964 2.027-5.984 1.196l-.615-.255-5.254 5.256h.001l-.001 1v-1l-2.122-2.122 5.256-5.255z"></path>
    </GenericIcon>
  );
};

// EMPTY
const FlowBranch = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path d="M5.122 21c.378.378.88.586 1.414.586S7.572 21.378 7.95 21l4.336-4.336a7.495 7.495 0 0 0 2.217.333 7.446 7.446 0 0 0 5.302-2.195 7.484 7.484 0 0 0 1.632-8.158l-.57-1.388-4.244 4.243-2.121-2.122 4.243-4.243-1.389-.571A7.478 7.478 0 0 0 14.499 2c-2.003 0-3.886.78-5.301 2.196a7.479 7.479 0 0 0-1.862 7.518L3 16.05a2.001 2.001 0 0 0 0 2.828L5.122 21zm4.548-8.791-.254-.616a5.486 5.486 0 0 1 1.196-5.983 5.46 5.46 0 0 1 4.413-1.585l-3.353 3.353 4.949 4.95 3.355-3.355a5.49 5.49 0 0 1-1.587 4.416c-1.55 1.55-3.964 2.027-5.984 1.196l-.615-.255-5.254 5.256h.001l-.001 1v-1l-2.122-2.122 5.256-5.255z"></path>
    </GenericIcon>
  );
};

const Sun = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path>
    </GenericIcon>
  );
};

const Moon = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"></path>
    </GenericIcon>
  );
};

const BracesVariable = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path
        d="M3 6a3 3 0 0 1 3-3 1 1 0 0 1 0 2 1 1 0 0 0-1 1v3.938c0 .789-.307 1.519-.82 2.062.513.543.82 1.273.82 2.062V18a1 1 0 0 0 1 1 1 1 0 1 1 0 2 3 3 0 0 1-3-3v-3.938a1 1 0 0 0-.757-.97l-.486-.122a1 1 0 0 1 0-1.94l.486-.121A1 1 0 0 0 3 9.939V6Zm18 0a3 3 0 0 0-3-3 1 1 0 1 0 0 2 1 1 0 0 1 1 1v3.938c0 .789.307 1.519.82 2.062a2.997 2.997 0 0 0-.82 2.062V18a1 1 0 0 1-1 1 1 1 0 1 0 0 2 3 3 0 0 0 3-3v-3.938a1 1 0 0 1 .758-.97l.485-.122a1 1 0 0 0 0-1.94l-.485-.121a1 1 0 0 1-.758-.97V6Zm-11.71.886a1 1 0 1 0-1.58 1.228L10.734 12l-3.022 3.886a1 1 0 1 0 1.578 1.228L12 13.629l2.71 3.485a1 1 0 0 0 1.58-1.228L13.266 12l3.022-3.886a1 1 0 0 0-1.578-1.228L12 10.371 9.29 6.886Z"
        fill="inherit"
      />
    </GenericIcon>
  );
};

const ArrowMinimize = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path
        d="M10.498 12.504a1 1 0 0 1 .993.884l.007.116v7.504a1 1 0 0 1-1.993.117l-.007-.117v-5.093l-5.79 5.792a1 1 0 0 1-1.32.083l-.095-.083a1 1 0 0 1-.083-1.32l.083-.095 5.788-5.788H2.997a1 1 0 0 1-.117-1.993l.117-.007h7.501ZM13.5 2a1 1 0 0 1 .993.883L14.5 3v5.087l5.794-5.793a1 1 0 0 1 1.32-.084l.094.083a1 1 0 0 1 .083 1.32l-.083.095-5.796 5.795H21a1 1 0 0 1 .116 1.994l-.116.007h-7.502a1 1 0 0 1-.993-.883l-.007-.117V2.999a1 1 0 0 1 1-1Z"
        fill="inherit"
      />
    </GenericIcon>
  );
};

const ArrowMaximize = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path
        d="m12.497 3.002 7.555.001.121.014.088.02.104.034.09.04.063.036.063.042.064.05.063.058.094.11.072.11.053.114.035.105.016.065.01.053.01.148v7.504a1 1 0 0 1-1.993.117l-.007-.117v-5.09L6.413 19h5.088a1 1 0 0 1 .993.884L12.5 20a1 1 0 0 1-.884.994l-.116.006L3.94 21l-.096-.01-.077-.015-.077-.022-.07-.026-.09-.042-.089-.053-.091-.07.032.027a1.006 1.006 0 0 1-.166-.166l-.051-.07-.04-.064-.032-.064-.034-.082-.025-.08-.024-.111-.007-.061-.004-.09v-7.503a1 1 0 0 1 1.993-.117l.007.117v5.088L17.583 5.002h-5.086a1 1 0 0 1-.993-.883l-.007-.117a1 1 0 0 1 1-1Z"
        fill="inherit"
      />
    </GenericIcon>
  );
};

const TaskListLtr = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path
        d="M6.707 3.293a1 1 0 0 0-1.414 0L4 4.586l-.293-.293a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0 0-1.414Zm14.296 13.7H10L9.883 17A1 1 0 0 0 10 18.993h11.003l.117-.006a1 1 0 0 0-.117-1.994Zm0-5.993H10l-.117.007A1 1 0 0 0 10 13h11.003l.117-.007A1 1 0 0 0 21.003 11Zm0-6H10l-.117.007A1 1 0 0 0 10 7h11.003l.117-.007A1 1 0 0 0 21.003 5ZM6.707 16.293a1 1 0 0 0-1.414 0L4 17.586l-.293-.293a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0 0-1.414Zm-1.414-6.5a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-1-1a1 1 0 1 1 1.414-1.414l.293.293 1.293-1.293Z"
        fill="inherit"
      />
    </GenericIcon>
  );
};

const Close = (props: PlIconProps) => {
  return (
    <GenericIcon {...props}>
      <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
    </GenericIcon>
  );
};
const Plusx = '';

export {
  DotsVerticalRounded,
  Pencil,
  Download,
  Calendar,
  Trash,
  Plusx,
  LayoutAlt,
  PlusAlt,
  UserAlt,
  Collection,
  Bell,
  Search,
  Phone,
  MailSend,
  PlayCircle,
  ArrowBack,
  Exit,
  Note,
  Like,
  Cabinet,
  Carousel,
  TextIcon,
  Cog,
  UserVoice,
  Wrench,
  Style,
  FlowBranch,
  Sun,
  Moon,
  BracesVariable,
  ArrowMinimize,
  ArrowMaximize,
  TaskListLtr,
  Close,
};

export default NotifIcon;
