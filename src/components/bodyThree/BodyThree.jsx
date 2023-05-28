import { useState } from "react";
import Slider from "./Slider";
import "./bodyThree.css";

const BodyThree = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleBuyClick = (trader) => {
    console.log(`Buy button clicked for ${trader}`);
    // Add your logic here for handling the buy action
  };

  return (
    <div className="mt-8 ml-4 mr-4">
      <div className="tabs">
        <button
          className={`tab ${activeTab === 0 ? "active" : ""}`}
          onClick={() => handleTabClick(0)}
        >
          Tab 1
        </button>
        <button
          className={`tab ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          Tab 2
        </button>
        <button
          className={`tab ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          Tab 3
        </button>
      </div>

      <div className={`tab-content ${activeTab === 0 ? "active" : ""}`}>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Trader</th>
                <th>Wager</th>
                <th>Multiplier</th>
                <th>P&L</th>
                <th>ROI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Might of Ra</td>
                <td>x500.00</td>
                <td>$10.00</td>
                <td>
                  <Slider />
                </td>
                <td>0.00x</td>
                <td>
                  <button
                    className="buy-button"
                    onClick={() => handleBuyClick("Buy")}
                  >
                    Buy
                  </button>
                </td>
              </tr>
              <tr>
                <td>ITERO</td>
                <td>Wmikey911</td>
                <td>6s</td>
                <td>
                  <Slider />
                </td>
                <td>0.70x</td>
                <td>
                  <button
                    className="buy-button"
                    onClick={() => handleBuyClick("Buy")}
                  >
                    Buy
                  </button>
                </td>
              </tr>
              <tr>
                <td>Game 3</td>
                <td>Trader 3</td>
                <td>10s</td>
                <td>
                  <Slider />
                </td>
                <td>1.50x</td>
                <td>
                  <button
                    className="buy-button"
                    onClick={() => handleBuyClick("Buy")}
                  >
                    Buy
                  </button>
                </td>
              </tr>
              <tr>
                <td>Game 4</td>
                <td>Trader 4</td>
                <td>15s</td>
                <td>
                  <Slider />
                </td>
                <td>2.00x</td>
                <td>
                  <button
                    className="buy-button"
                    onClick={() => handleBuyClick("Buy")}
                  >
                    Buy
                  </button>
                </td>
              </tr>
              <tr className="faded">
                <td>Game 5</td>
                <td>Trader 5</td>
                <td>20s</td>
                <td>
                  <Slider />
                </td>
                <td>2.50x</td>
                <td>
                  <button
                    className="buy-button"
                    onClick={() => handleBuyClick("Buy")}
                  >
                    Buy
                  </button>
                </td>
              </tr>
              <tr className="faded">
                <td>Game 6</td>
                <td>Trader 6</td>
                <td>25s</td>
                <td>
                  <Slider />
                </td>
                <td>3.00x</td>
                <td>
                  <button
                    className="buy-button"
                    onClick={() => handleBuyClick("Buy")}
                  >
                    Buy
                  </button>
                </td>
              </tr>
              {/* Add more rows here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BodyThree;
