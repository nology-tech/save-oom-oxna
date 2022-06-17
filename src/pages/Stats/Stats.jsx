import { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import UserContext from "../../context/UserContext";
import "./Stats.scss";
import { Chart } from "react-google-charts";

const StatsPage = () => {
  const { user } = useContext(UserContext);

  const options = {
    hAxis: {
      title: "N° OF ATTEMPTS",
      minValue: 0,
      maxValue: 6,
      textStyle: { color: "#FFFFFF" },
      titleTextStyle: { color: "#FFFFFF" },
    },
    vAxis: {
      title: "SCORE(%)",
      minValue: 0,
      maxValue: 100,
      textStyle: { color: "#FFFFFF" },
      titleTextStyle: { color: "#FFFFFF" },
    },
    curveType: "function",
    pointSize: 10,
    backgroundColor: "#1e2332",
    legend: {
      textStyle: {
        color: "#FFFFFF",
      },
    },
  };

  return (
    <Layout>
      <section className="stats-page">
        <div className="stats-page__top-line">
          <h1>Stats for {user.name}</h1>
          <div className="stats-page__buttons">
            <span>Dropdown #1</span>
            <span>Dropdown #2</span>
          </div>
        </div>
        <div className="stats-page__container">
          <div className="stats-page__score-graph">
            <h2>Score Over Time</h2>
            <Chart
              chartType="LineChart"
              data={[
                ["N° of Attempts", "Jack"],
                [1, 40],
                [2, 70],
                [3, 60],
                [4, 80],
              ]}
              options={options}
              legendToggle
            />
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
