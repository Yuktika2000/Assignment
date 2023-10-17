import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineArrowUp } from "react-icons/ai";
import DonutChart from "./DonutChart";
import { Data } from "./Data";
import { TbNotes } from "react-icons/tb";
import { MdArrowDropDown, MdOutlineLiveHelp } from "react-icons/md";
import { PiLock, PiCurrencyDollarBold } from "react-icons/pi";
import { BsPersonSquare } from "react-icons/bs";
import { HiOutlineKey } from "react-icons/hi";
import { TbPercentage } from "react-icons/tb";
import { PiCube } from "react-icons/pi";

function App() {
  return (
    <>
      <div className="main">
        {/* sidebar */}
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="icon">
              <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                <polygon
                  points="25,10 40,18 40,32 25,40 10,32 10,18"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />
                <circle
                  cx="25"
                  cy="25"
                  r="5"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="dashboard-text">Dashboard</div>
          </div>
          <div className="sidebar-links">
            <div className="link first">
              <div className="squarebox">
                <div className="square">
                  <HiOutlineKey />
                </div>
                Dashboard
              </div>
            </div>
            <div className="link">
              <div className="squarebox">
                <div className="square">
                  <PiCube />
                </div>
                Product
              </div>
            </div>
            <div className="link">
              <div className="helpbox">
                <div>
                  <BsPersonSquare className="personicon" />
                </div>
                <div className="customer-text">Customers</div>
              </div>
            </div>
            <div className="link">
              <div className="income">
                <div
                  className="rounded-icon"
                  style={{
                    transform: "scaleX(-1)",
                    overflow: "hidden",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M21 7.28V5c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-2.28A2 2 0 0 0 22 15V9a2 2 0 0 0-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z"
                    />
                  </svg>
                </div>
                <div className="incometext">Income</div>
              </div>
            </div>
            <div className="link">
              <div className="percentage">
                <div>
                  <TbPercentage />
                </div>
                <div className="promote">Promote</div>
              </div>
            </div>
            <div className="link">
              <div className="helpbox">
                <MdOutlineLiveHelp className="help" />
                <div className="helptext">Help</div>
              </div>
            </div>
          </div>

          <div className="evano">
            <div className="evanoimg">
              <img
                alt="error"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOKgf1btqasr29ElrKVN80RPZxRDi4qTMnwQ&usqp=CAU"
              />
            </div>
            <div className="evanoname">
              <div>Evano</div>
              <div>Project Manager</div>
            </div>

            <div className="dropdown mt-5">
              <MdArrowDropDown />
            </div>
          </div>
        </div>

        {/* Dashboard */}
        <div className="dashboard-section ">
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
                <div className="bluewallet quarter-circle">
                  <PiCurrencyDollarBold className="dollar" />
                </div>
                <div>
                  <AiOutlineArrowUp className="dollararrow" />
                </div>
              </div>
              <div className="card-detail">
                <p className="heading">Earning</p>
                <h3 className="cardprice">$198k</h3>

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
              <div className="purple-circle">
                <div className="bluewallet">
                  <TbNotes className="note" />
                </div>
              </div>
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
              <div className="sky-circle m-auto text-center">
                <div
                  className="bluewallet"
                  style={{
                    transform: "scaleX(-1)",
                    overflow: "hidden",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 40 40"
                  >
                    <path
                      fill="blue"
                      d="M21 7.28V5c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-2.28A2 2 0 0 0 22 15V9a2 2 0 0 0-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z"
                    />
                  </svg>
                </div>
              </div>
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
              <div className="pink-circle">
                <div className="bluewallet">
                  <PiLock className="lock" />
                </div>
              </div>
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
              <div className="overview-header">
                <div>
                  <h4>Overview</h4>
                  <p className="grey">Monthly Earning</p>
                </div>
                <div classname="overview-select">
                  <select className="custom-select-element">
                    <option value="">Quarterly</option>
                    <option value="option1">Last 60 days</option>
                    <option value="option2">Last 90 days</option>
                  </select>
                </div>
              </div>

              <div className="overview-chart">
                <div className="bar">
                  <div className="Janbar"></div>
                  <div className="Febbar"></div>
                  <div className="Marbar"></div>
                  <div className="Aprbar"></div>
                  <div className="Maybar"></div>
                  <div className="Junbar"></div>
                  <div className="Julbar"></div>
                  <div className="Augbar"></div>
                  <div className="Sepbar"></div>
                  <div className="Octbar"></div>
                  <div className="Novbar"></div>
                  <div className="Decbar"></div>
                </div>

                <div className="label">
                  <div className="Jan">Jan</div>
                  <div className="Feb">Feb</div>
                  <div className="Mar">Mar</div>
                  <div className="Apr">Apr</div>
                  <div className="May">May</div>
                  <div className="Jun">Jun</div>
                  <div className="Jul">Jul</div>
                  <div className="Aug">Aug</div>
                  <div className="Sep">Sep</div>
                  <div className="Oct">Oct</div>
                  <div className="Nov">Nov</div>
                  <div className="Dec">Dec</div>
                </div>
              </div>
            </div>
            <div className="customer">
              <div className="customer-text">
                <p>Customers</p>
                <p>Customers that buys products</p>
              </div>
              <DonutChart />
            </div>
          </div>

          <div className="products-section">
            <div className="products">
              <div className="product-header">
                <div>
                  <h4>Product Shelf</h4>
                </div>
              </div>
              <div className="search-select">
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

                <div className="custom-select-container">
                  <select className="custom-select-element">
                    <option value="">Last 30 days</option>
                    <option value="option1">Last 60 days</option>
                    <option value="option2">Last 90 days</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="products-table">
              <div className="table_header">
                <div className="name">Product name</div>
                <div className="stock_price_sales">
                  <div>Stock</div>
                  <div>Price</div>
                  <div>Total Sales</div>
                </div>
              </div>

              {Data.map((item, index) => {
                return (
                  <>
                    <div key={index} className="table_description">
                      <div className="product-left">
                        <img src={item.img} alt="error" />
                        <div className="headingpara">
                          <div className="prod_heading">{item.heading}</div>
                          <div className="heading">{item.para}</div>
                        </div>
                      </div>

                      <div className="product-right">
                        <div>{item.stock}</div>
                        <div className="price">{item.price}</div>
                        <div className="sales">{item.sales}</div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
