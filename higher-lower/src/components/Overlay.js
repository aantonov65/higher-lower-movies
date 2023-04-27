const Overlay = ({ children, onClick }) => {
  return (
    <div
      className="overlay absolute top-0 left-0 h-full w-full flex items-center justify-center z-10"
      onClick={onClick}>
      {children}
    </div>
  );
};

export default Overlay;
