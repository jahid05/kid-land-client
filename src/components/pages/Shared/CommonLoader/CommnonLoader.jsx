import { ThreeCircles } from "react-loader-spinner";

const CommnonLoader = () => {
  return (
    <div className="w-full justify-center flex h-screen items-center">
      <ThreeCircles
        height="100"
        width="100"
        color="#ff386f"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};

export default CommnonLoader;
