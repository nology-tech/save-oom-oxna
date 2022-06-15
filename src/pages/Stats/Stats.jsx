import AvatarHeading from "../../components/AvatarHeading/AvatarHeading";
import Graph from "../../components/Graph/Graph";
import Layout from "../../components/Layout/Layout";
import "./Stats.scss";

const StatsPage = () => {
  return (
    <Layout>
      <section className="stats-page">
        <div className="stats-page__top-line">
          <AvatarHeading
            avatarHeadingText="Stats for Jack"
            headingStyle="dropdown-heading"
          />
          <div className="stats-page__buttons">
            <span>Dropdown #1</span>
            <span>Dropdown #2</span>
          </div>
        </div>
        <div className="stats-page__container">
          <div className="stats-page__score-graph">
            <h2>Score Over Time</h2>
            <Graph />
          </div>
          <div className="stats-page__correct-phonemes">
            <h2>Correct Phonemes</h2>
            <ul>
              <li>SH</li>
              <li>EE</li>
              <li>P</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StatsPage;
