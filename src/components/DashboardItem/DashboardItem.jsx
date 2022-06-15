import "./DashboardItem.scss";

const DashboardItem = ({ imageSRC, headingText, contentText }) => {
  return (
    <div className="dashboard-item">
      <img src={imageSRC} alt={headingText} />
      <div>
        <h2 className="dashboard-item__heading">{headingText}</h2>
        <p className="dashboard-item__paragraph">{contentText}</p>
      </div>
    </div>
  );
};

export default DashboardItem;
