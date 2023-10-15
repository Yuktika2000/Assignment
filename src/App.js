import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineArrowUp } from "react-icons/ai";
import Chart from "react-google-charts";
import DonutChart from "./DonutChart";

// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

function App() {
  const data = [
    ["Month", "Value"],
    ["Jan", 5],
    ["Feb", 8],
    ["Mar", 12],
    ["Apr", 9],
    ["May", 7],
    ["Jun", 11],
    ["Jul", 15],
    ["Aug", 18],
    ["Sep", 14],
    ["Oct", 10],
    ["Nov", 6],
    ["Dec", 4],
  ];

  const options = {
    title: "Monthly Earning",
    chartArea: {
      width: "94%",
      height: "70%",
    },
    colors: [
      "rgb(223, 228, 230)",
      "blue", // Set the color for the August bar to blue
      "rgb(223, 228, 240)",
      "rgb(223, 228, 230)",
      "rgb(223, 228, 230)",
      "rgb(223, 228, 230)",
      "rgb(223, 228, 230)",
      "rgb(223, 228, 230)",
      "rgb(223, 228, 230)",
      "rgb(223, 228, 230)",
      "rgb(223, 228, 230)",
      "rgb(223, 228, 230)",
    ],
    hAxis: {
      baselineColor: "transparent", // Remove the x-axis line
      gridlines: {
        color: "transparent", // Remove the x-axis gridlines
      },
    },
    vAxis: {
      textPosition: "none", // Remove value range display on the y-axis
    },
    legend: "none", // Remove legend
  };

  return (
    <>
      <div className="main">
        {/* sidebar */}
        <div className="sidebar">
          <div className="sidebar-header"> Dashboard</div>
          <div className="sidebar-links">
            <div className="link first">
              <div>Dashboard</div>
            </div>
            <div className="link">
              <div>Product</div>
            </div>
            <div className="link">
              <div>Customerrs</div>
            </div>
            <div className="link">
              <div>Income</div>
            </div>
            <div className="link">
              <div>Promote</div>
            </div>
            <div className="link">
              <div>Help</div>
            </div>
          </div>
        </div>

        {/* Dashboard */}
        <div className="dashboard-section mb-5">
          <div className="dashboard">
            <div className="dashboard-header">
              <div className="left-corner">
                <span role="img" aria-label="wave">
                  👋🏻
                </span>{" "}
                <span className="sharukh">Hello Sharukh</span>
              </div>
            </div>
            <div className="right-corner">
              <div className="input-group">
                <div className="form-outline">
                  <div className="fa-input">
                    <FontAwesomeIcon icon={faSearch} />
                  </div>
                  <input
                    id="search-focus"
                    type="text"
                    placeholder="Search"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card-section">
            <div className="card">
              <div className="green-circle">
                <faDollar />
              </div>
              <div className="card-detail">
                <p className="heading">Earning</p>
                <h3>$198k</h3>

                <p className="range">
                  <span className="green">
                    <AiOutlineArrowUp />
                    37.8%{" "}
                  </span>
                  this month
                </p>
              </div>
            </div>

            <div className="card">
              <div className="purple-circle"></div>
              <div className="card-detail">
                <p className="heading">Orders</p>
                <h3>$2.4k</h3>

                <p className="range">
                  <span className="red">
                    <AiOutlineArrowUp />
                    2%{" "}
                  </span>
                  this month
                </p>
              </div>
            </div>

            <div className="card">
              <div className="sky-circle"></div>
              <div className="card-detail">
                <p className="heading">Balance</p>
                <h3>$2.4k</h3>

                <p className="range">
                  <span className="red">
                    <AiOutlineArrowUp />
                    2%{" "}
                  </span>
                  this month
                </p>
              </div>
            </div>

            <div className="card">
              <div className="pink-circle"></div>
              <div className="card-detail">
                <p className="heading">Total Sales</p>
                <h3>$89k</h3>

                <p className="range">
                  <span className="green">
                    <AiOutlineArrowUp />
                    11%{" "}
                  </span>
                  this month
                </p>
              </div>
            </div>
          </div>

          <div className="overview-customer">
            <div className="overview mx-2">
              <Chart
                width={"100%"}
                height={"280px"}
                chartType="ColumnChart"
                data={data}
                options={options}
                className="chart"
              />
            </div>
            <div className="customer">
              <DonutChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
