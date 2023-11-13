import Link from "next/link";
import React from "react";

interface Props {
  classes?: string;
}
const FrontiounLogo: React.FC<Props> = ({ classes }) => {
  return (
    <Link href={'/'}>
      <svg
        style={{ width: "208px", height: "80px" }}
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="90 75 150 100"
        preserveAspectRatio="xMidYMid meet"
        colorInterpolationFilters="sRGB"
      >
        <rect fill="none" className="background" />
        <rect fill="url(#watermark)" className="watermarklayer" />
        <g fill="#17168B" className="icon-text-wrapper icon-svg-group iconsvg">
          <g transform="translate(47.42 90.359)" className="iconsvg-imagesvg">
            <path className="image-rect" fill="none" d="M0 0h60v69.282H0z" />
            <svg
              width="60"
              height="69.282"
              className="overflow-visible image-svg-svg primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 208.66 240.94"
              >
                <g fillRule="evenodd">
                  <path
                    fill="#17168b"
                    d="m40.42 85.07 105.94-60.81L104.33 0 52.16 30.12 0 60.24v120.47l40.42 23.33V85.07z"
                  />
                  <path
                    fill="#90F"
                    d="M169.8 110.81v48.53l-85.15 48.84v21.4l19.68 11.36 52.17-30.12 13.3-7.67 38.86-22.44V60.24L190.2 49.57l-20.4 11.71-85.15 48.87v49.51l85.15-48.85z"
                  />
                </g>
              </svg>
            </svg>
          </g>
          <path
            d="M122.73 114.85c0-1.2.92-2.08 2.08-2.08h3v-5.08h-3.69c-3.93 0-6.93 3.24-6.93 7.16v4.38h-2.77v4.16l2.77.46v13.84l-2.77.47v4.15h11.08v-4.15l-2.77-.47v-13.38l4.62-.46v-4.62h-4.62Zm20.31 9.46.46 2.77h4.15v-7.85h-6c-1.61 0-3.23.65-4.15 1.39l-.92-1.39h-6.93v4.16l2.77.46v13.84l-2.77.47v4.15h11.08v-4.15l-2.77-.47V128c0-2.31 1.39-3.69 3.69-3.69Zm18 18c4.15 0 7.38-3.46 7.38-7.62v-8.76c0-3.74-2.72-6.7-6.46-6.7h-5.54c-3.74 0-6.46 2.96-6.46 6.7v8.76c0 4.16 3.23 7.62 7.39 7.62Zm-3.23-5.08c-1.39 0-2.31-.92-2.31-2.3v-9c0-.93.69-1.62 1.62-1.62h4.15c.92 0 1.61.69 1.61 1.62v9c0 1.38-.92 2.3-2.3 2.3Zm34.15-11.54c0-3.69-3.14-6.46-6.92-6.46h-1.85c-1.61 0-3.23.7-4.15 1.39l-.92-1.39h-6.93v4.16l2.77.46v13.84l-2.77.47v4.15h11.08v-4.15l-2.77-.47v-9.92c0-2.08 1.62-3.46 3.69-3.46h1.39c1.15 0 1.84.92 1.84 1.85v11.53l-2.77.47v4.15h11.08v-4.15l-2.77-.47Zm5.54-1.84v11.31c0 3.92 3 7.15 6.92 7.15h3.7v-5.08h-3c-1.16 0-2.08-.92-2.08-2.07v-10.85l4.61-.46v-4.62h-4.61V110h-5.03l-.51 9.23h-2.77v4.16Zm12.46-.46 2.77.46v13.84l-2.77.47v4.15h11.08v-4.15l-2.77-.47v-18.46h-8.31Zm2.77-7.85h5.54V110h-5.54Zm21.23 26.77c4.16 0 7.39-3.46 7.39-7.62v-8.76c0-3.74-2.73-6.7-6.47-6.7h-5.53c-3.74 0-6.47 2.96-6.47 6.7v8.76c0 4.16 3.24 7.62 7.39 7.62Zm-3.23-5.08c-1.38 0-2.31-.92-2.31-2.3v-9c0-.93.7-1.62 1.62-1.62h4.15c.93 0 1.62.69 1.62 1.62v9c0 1.38-.93 2.3-2.31 2.3Zm15.69-1.38c0 3.69 3.14 6.46 6.93 6.46h1.84c1.62 0 3.23-.69 4.16-1.38l.92 1.38h6.92v-4.15l-2.77-.47v-13.84l2.77-.46v-4.16h-11.07v4.16l2.76.46v9.92c0 2.08-1.61 3.46-3.69 3.46h-1.38c-1.16 0-1.85-.92-1.85-1.84v-11.54l2.77-.46v-4.16h-11.08v4.16l2.77.46Zm43.39-10.16c0-3.69-3.14-6.46-6.93-6.46h-1.84c-1.62 0-3.23.7-4.16 1.39l-.92-1.39h-6.92v4.16l2.77.46v13.84l-2.77.47v4.15h11.08v-4.15l-2.77-.47v-9.92c0-2.08 1.61-3.46 3.69-3.46h1.38c1.16 0 1.85.92 1.85 1.85v11.53l-2.77.47v4.15h11.08v-4.15l-2.77-.47Z"
            data-gra="path-name"
            className="tp-name iconsvg-namesvg"
          />
        </g>
      </svg>
    </Link>
  );
};
export default FrontiounLogo;
