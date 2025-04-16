import { useEffect, useState } from "react";
import axios from "axios";
import OverviewCard from "../components/OverviewCard/OverviewCard";
import DataTable from "../components/Table/Table";
// import test from "../assets/img/Chat.png";

const Dashboard = () => {
  const [overviewData, setOverviewData] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get("https://67ff055458f18d7209efd1e7.mockapi.io/dashboard/overviews").then((res) => {
      setOverviewData(res.data);
    });
    axios.get("https://67ff055458f18d7209efd1e7.mockapi.io/dashboard/customers").then((res) => {
      setCustomers(res.data);
    });
  }, []);
  console.log(overviewData); 
  console.log(customers); 
  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {overviewData.map((item) => (
          <OverviewCard
            key={item.id}
            title={item.label}
            value={item.value}
            percent={item.percent}
            icon={item.icon}
            bg={item.background === "a" ? "bg-blue-50" : "bg-green-50"}
          />
        ))}
      </div>

      {/* Data Table */}
      <DataTable data={customers} />
    </div>
  );
};

export default Dashboard;
