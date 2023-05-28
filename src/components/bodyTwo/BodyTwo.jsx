import "./bodyTwo.css";
import { useState } from "react";

const BodyTwo = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="mt-8 ml-4 mr-4">
      <div className="tabs mt-4">
        <button
          className={`tab ${activeTab === 0 ? 'active' : ''}`}
          onClick={() => handleTabClick(0)}
        >
          Tab 1
        </button>
        <button
          className={`tab ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          Tab 2
        </button>
        <button
          className={`tab ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          Tab 3
        </button>
      </div>

      <div className={`tab-content ${activeTab === 0 ? 'active' : ''}`}>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Game</th>
                <th>Trade</th>
                <th>Time</th>
                <th>Wager</th>
                <th>Multiplier</th>
                <th>Payout</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Might of Ra</td>
                <td>Hidden</td>
                <td>6s</td>
                <td>$10.00</td>
                <td>0.00x</td>
                <td>$0.00</td>
              </tr>
              <tr>
                <td>ITERO</td>
                <td>Wmikey911</td>
                <td>6s</td>
                <td>$6.00</td>
                <td>0.70x</td>
                <td>$4.20</td>
              </tr>
              <tr>
                <td>Game 3</td>
                <td>Trader 3</td>
                <td>10s</td>
                <td>$8.00</td>
                <td>1.50x</td>
                <td>$12.00</td>
              </tr>
              <tr>
                <td>Game 4</td>
                <td>Trader 4</td>
                <td>15s</td>
                <td>$12.00</td>
                <td>2.00x</td>
                <td>$24.00</td>
              </tr>
              <tr className="faded">
                <td>Game 5</td>
                <td>Trader 5</td>
                <td>20s</td>
                <td>$15.00</td>
                <td>2.50x</td>
                <td>$37.50</td>
              </tr>
              <tr className="faded">
                <td>Game 6</td>
                <td>Trader 6</td>
                <td>25s</td>
                <td>$18.00</td>
                <td>3.00x</td>
                <td>$54.00</td>
              </tr>
              {/* Add more rows here */}
            </tbody>
          </table>
        </div>
      </div>

      <div className={`tab-content ${activeTab === 1 ? 'active' : ''}`}>
        {/* Content for Tab 2 */}
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Game</th>
                <th>Trade</th>
                <th>Time</th>
                <th>Wager</th>
                <th>Multiplier</th>
                <th>Payout</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="faded">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="faded">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              {/* Add more rows here */}
            </tbody>
          </table>
        </div>
      </div>

      <div className={`tab-content ${activeTab === 2 ? 'active' : ''}`}>
        {/* Content for Tab 3 */}
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Game</th>
                <th>Trade</th>
                <th>Time</th>
                <th>Wager</th>
                <th>Multiplier</th>
                <th>Payout</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="faded">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="faded">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              {/* Add more rows here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BodyTwo;
