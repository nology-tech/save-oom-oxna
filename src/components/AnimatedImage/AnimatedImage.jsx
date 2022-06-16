import "./AnimatedImage.scss";

const AnimatedImage = ({
  imageToAnimate,
  animationClass,
  imageStylesClass,
  animationType,
}) => (
  <img
    className={`${animationClass} ${imageStylesClass} ${animationType}`}
    src={imageToAnimate}
    alt="Animated Image"
  />
);

export default AnimatedImage;
