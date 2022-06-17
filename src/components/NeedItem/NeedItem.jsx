import "./NeedItem.scss";

const NeedItem = ({ oomsNeed, percentage }) => (
  <div className="ooms-needs">
    <img src={oomsNeed} alt="ooms needs" />
    <p className="ooms-needs__percentage">{percentage}%</p>
  </div>
);

export default NeedItem;
