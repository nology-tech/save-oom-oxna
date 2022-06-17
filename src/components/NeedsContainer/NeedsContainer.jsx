import battery0 from "../../assets/images/Battery-0.svg";
import battery20 from "../../assets/images/Battery-20.svg";
import smiley from "../../assets/images/Smiley.svg";
import NeedItem from "../NeedItem/NeedItem";
import "./NeedsContainer.scss";

const NeedsContainer = () => {
  return (
    <div className="needs-container">
      <NeedItem oomsNeed={battery0} percentage={0} />
      <NeedItem oomsNeed={smiley} percentage={90} />
      <NeedItem oomsNeed={battery20} percentage={20} />
    </div>
  );
};

export default NeedsContainer;
