import { MutatingDots } from "react-loader-spinner";
import type { SpinnerTypes } from "./types/spinner";
import "./styles/spinner.css";

function PageLoadingSpinner({ className }: SpinnerTypes) {
  return (
    <div className={`${className}__loading-spinner-holder page-loader`}>
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#e50914"
        secondaryColor="#e50914"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default PageLoadingSpinner;
