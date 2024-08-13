const X = (props: { onClick: () => void; className: string }) => {
  return (
    <button onClick={props.onClick}>
      <svg
        width="65"
        height="46"
        viewBox="0 0 65 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.8834 39.042H33.5189H35.49H44.1H54.4885L49.2971 30.0437L44.7329 22.1324L48.8681 15.0139L54.1044 6H43.68H35.07H34.0759H31.3335H30.282H21.42H10.9207L16.2506 15.0459L20.4269 22.1339L15.8202 30.0138L10.5422 39.042H21H29.862H31.8834Z"
          fill="#231F20"
          stroke="#231F20"
          stroke-width="12"
        />
        <path
          d="M27.384 22.122L21.42 12H30.282L32.634 16.956L35.07 12H43.68L37.8 22.122L44.1 33.042H35.49L32.634 27.666L29.862 33.042H21L27.384 22.122Z"
          fill="#F6F1D7"
        />
      </svg>
    </button>
  );
};

export { X };
