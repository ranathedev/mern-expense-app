import clsx from "clsx";

import stl from "./LoadingScreen.module.scss";

const LoadingScreen = () => {
  return (
    <div className={stl.screen}>
      <div className={stl.balls}>
        <div className={clsx(stl.ball, stl.one)}></div>
        <div className={clsx(stl.ball, stl.two)}></div>
        <div className={clsx(stl.ball, stl.three)}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
