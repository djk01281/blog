const Menu = (props: { onClick: () => void; className: string }) => {
  return (
    <button onClick={props.onClick}>
      <svg
        width="51"
        height="47"
        viewBox="0 0 51 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={props.className}
      >
        <path
          d="M26.512 6H22.3989L20.9157 9.83632L12.4037 31.8523L9.2474 40.016H18H24.208H28.3211L29.8043 36.1797L38.3163 14.1637L41.4726 6H32.72H26.512Z"
          fill="#231F20"
          stroke="#231F20"
          stroke-width="12"
        />
        <path
          d="M26.5122 12H32.7202L24.2082 34.016H18.0002L26.5122 12Z"
          fill="#F6F1D7"
        />
      </svg>
    </button>
  );
};

export { Menu };
