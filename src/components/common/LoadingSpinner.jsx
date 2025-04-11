/**
 * @description LoadingSpinner component
 * @param {JSX.Element} <Div> - A loading spinner component that displays a spinning animation while content is being loaded.
 * @returns {JSX.Element} <LoadingSpinner /> - The rendered loading spinner component.
 */

const LoadingSpinner = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-forgeGrayBase border-t-fireBlaze"></div>
    </div>
  );
};

export default LoadingSpinner;
