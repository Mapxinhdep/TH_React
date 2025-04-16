import StatusBadge from "../StatusBadge/StatusBadge";
import icon_textfield from "../../assets/img/icon_textfield.png";

const DataTable = ({ data }) => (
  <div className="bg-white p-4 rounded-xl shadow">
    <div className="flex justify-between mb-5">
      <div className="flex w-2xl items-center space-x-2">
        <img src={icon_textfield} alt="" className="w-5 h-5" />
        <h2 className="text-lg text-black-700 font-bold">Detailed Report</h2>
      </div>
      <div className="space-x-2">
        <button className="bg-pink-100 text-pink-600 px-4 py-1 rounded-md">Import</button>
        <button className="bg-pink-100 text-pink-600 px-4 py-1 rounded-md">Export</button>
      </div>
    </div>
    <table className="min-w-full p-2">
      <thead>
        <tr className="text-left text-gray-500 border-b bg-gray-100">
          <th className="py-2 pl-4"><input type="checkbox" /></th>
          <th className="py-2">Customer Name</th>
          <th className="py-2">Company</th>
          <th className="py-2">Order Value</th>
          <th className="py-2">Order Date</th>
          <th className="py-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} className=" hover:bg-gray-50">
            <td className="pl-4">
              <input type="checkbox" />
            </td>
              <td className="flex items-center gap-2 py-2 space-x-2">
                <img src={row.avatar} className="rounded-full"/>
                <span className="font-bold">{row.name}</span>
              </td>

            {/* <td className="py-2">{row.name}</td>   */}
            <td>{row.company}</td>
            <td>${row.orderValue}</td>
            <td>{row.orderDate}</td>
            <td><StatusBadge status={row.status} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
export default DataTable;
