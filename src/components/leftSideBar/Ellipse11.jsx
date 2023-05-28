
const Ellipse11 = () => {
  return (
    <svg
      className="flex-grow-0 flex-shrink-0"
      width={38}
      height={39}
      viewBox="0 0 38 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1_1599)">
        <circle cx={19} cy={15.5} r={15} fill="white" />
      </g>
      <defs>
        <filter
          id="filter0_d_1_1599"
          x={0}
          y={0.5}
          width={38}
          height={38}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1599" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_1599"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Ellipse11;