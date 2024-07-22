import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { MdHistory } from "react-icons/md";
import Avatar from "../components/Dashboard/Avatar";
import Bookedhis from "../components/Dashboard/Bookedhis";
import BookedSpaceCard from "../components/Dashboard/Bookedhis";

function Dashboard() {
  const id = localStorage.getItem("user") || "";
  const [coins, setCoins] = useState("0");
  const navigate = useNavigate();
  function logout() {
    localStorage.clear();
    navigate("/login");
  }
  async function userinfo() {
    const response = await axios.get(
      `http://localhost:3000/api/v1/users/${id}`
    );
    console.log(response.data);
    setCoins(response.data.msg.coins);
  }
  useEffect(() => {
    userinfo();
  }, []);

  return (
    <div className="h-screen w-screen font-sans">
      <div className="w-full flex justify-between items-center p-2 border-b-2 border-yellow-400">
        <div>603 workspace</div>
        <div className="flex items-center">
          <div className="mx-4">Contact Us</div>
          <div className="flex mx-3 items-center">
            <div className="mx-1 bg-slate-200 rounded-2xl px-1">
              Coins:{coins}
            </div>
            <div className="text-2xl cursor-pointer">+</div>
          </div>
          <div
            className="mx-4 text-2xl cursor-pointer"
            onClick={() => {
              navigate("/transactions");
            }}
          >
            <MdHistory />
          </div>
          <div className="mx-4 cursor-pointer" onClick={logout}>
            logout
          </div>
          <div className="mx-4">
            <Avatar name={id} />
          </div>
        </div>
      </div>
      <div className="w-full bg-green-400 flex flex-center flex-col gap-12">
        <div className="m-12">
          <h1 className="bold text-2xl">{id}</h1>
        </div>
        <div className="stats bg-primary text-primary-content">
          <div className="stat">
            <div className="stat-title">Account balance</div>
            <div className="stat-value">$89,400</div>
            <div className="stat-actions">
              <button className="btn btn-sm btn-success">Add funds</button>
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Current balance</div>
            <div className="stat-value">$89,400</div>
            <div className="stat-actions">
              <button className="btn btn-sm">Withdrawal</button>
              <button className="btn btn-sm">Deposit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap ">
        <div className="overflow-x-auto w-full min-h-28 border-2 border-black">
          <table className="table ">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Date and time</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>22 july 2024</td>
                <td>244</td>
                <td>Paid</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>1</th>
                <td>22 july 2024</td>
                <td>244</td>
                <td>Paid</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>1</th>
                <td>22 july 2024</td>
                <td>244</td>
                <td>Paid</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full min-h-28 border-2 border-r-black">
          <div>
            <h1 className="text-2xl gap-20">Your Bookings</h1>
          </div>
          <div className="flex flex-wrap gap-12">
            <BookedSpaceCard
              imageUrl="data:image/jpeg;base64,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"
              title="delux"
              price={299}
            />
            <BookedSpaceCard
              imageUrl="data:image/jpeg;base64,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"
              title="delux"
              price={299}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
