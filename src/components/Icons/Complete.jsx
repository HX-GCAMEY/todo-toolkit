// icon:basic_elaboration_todolist_check | Linea Iconset https://linea.io/ | Benjamin Sigidi

function Complete(props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="bevel"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M23 34l7 7 13-13"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M23 8H10v55h44V8H41"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M36 5V1h-8v4h-4l-2 8h20l-2-8z"
      />
    </svg>
  );
}

export default Complete;
