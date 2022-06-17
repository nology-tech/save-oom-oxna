import battery20 from "../../assets/images/Battery-20.svg";
import heart from "../../assets/images/Heart.svg";
import smiley from "../../assets/images/Smiley.svg";
import Layout from "../../components/Layout/Layout";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <Layout>
      <div className="dashboard">
        <div className="dashboard__heading">
          <h1>DASHBOARD</h1>
        </div>
        <div className="dashboard__contents">
          <div>
            <img src={smiley} alt="Energy Level" />
            <div>
              <h2>Energy Level</h2>
              <p>
                This is OOM&apos;s current energy level. Take regular breaks
                from playing to allow OOM to recover.
              </p>
            </div>
          </div>

          <div>
            <img src={battery20} alt="Energy Level" />
            <div>
              <h2>Energy Level</h2>
              <p>
                This is Oom&apos;s current energy level. Take regular breaks
                from playing to allow OOM to recover.
              </p>
            </div>
          </div>

          <div>
            <img src={battery20} alt="Fuel Level" />
            <div>
              <h2>Fuel Level</h2>
              <p>
                Oom&apos;s spaceship lost all its fuel on its collision with
                earth. Re-fill this to a 100% to get oom safely back home!
              </p>
            </div>
          </div>

          <div>
            <img src={heart} alt="Health Level" />
            <div>
              <h2>Fuel Level</h2>
              <p>
                This is Oom&apos;s health status. Gain more health to make Oom
                land safely on Earth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
