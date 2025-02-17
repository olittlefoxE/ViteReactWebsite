import PropTypes from 'prop-types';

ScrollButton.propTypes = {
  targetId: PropTypes.string.isRequired
};

export const ScrollButton = ({ targetId }) => {
  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform items-center justify-center rounded bg-gradient-to-tr from-fireBase via-fireBlaze to-fireAccent px-6 py-3 text-white shadow-xl hover:scale-105"
      onClick={handleClick}
    >
      Scroll Down
    </button>
  );
};
