const DashboardItem = ({ image, headingText, contentText }) => (
  <div>
    <img src={image} alt={headingText} />
    <div>
      <h2>{headingText}</h2>
      <p>{contentText}</p>
    </div>
  </div>
);

export default DashboardItem;
