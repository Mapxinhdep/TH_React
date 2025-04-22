import { useState } from "react";
import StatusBadge from "../StatusBadge/StatusBadge";
import icon_textfield from "../../assets/img/icon_textfield.png";
import icon_edit from "../../../public/assets/create.png";

const DataTable = ({ data }) => {
  const [editingCustomer, setEditingCustomer] = useState(null); // dữ liệu hiện tại đang chỉnh sửa

  const openModal = (customer) => {
    setEditingCustomer(customer);
  };

  const closeModal = () => {
    setEditingCustomer(null);
  };

  const handleChange = (e) => {
    setEditingCustomer({
      ...editingCustomer,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    console.log("Lưu dữ liệu:", editingCustomer);
    closeModal();
  };

  return (
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
            <th className="py-2"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="pl-4">
                <input type="checkbox" />
              </td>
              <td className="flex items-center gap-2 py-2 space-x-2">
                <img src={row.avatar} className="w-8 h-8 rounded-full" />
                <span className="font-bold">{row.name}</span>
              </td>
              <td>{row.company}</td>
              <td>${row.orderValue}</td>
              <td>{row.orderDate}</td>
              <td><StatusBadge status={row.status} /></td>
              <td>
                <button
                  className="rounded-full hover:bg-pink-500 bd"
                  onClick={() => openModal(row)}
                >
                  <img src={icon_edit} alt="" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal hiển thị khi đang chỉnh sửa */}
      {editingCustomer && (
        <div className="fixed inset-0 bg-opacity-30 flex justify-center items-center z-50">
          <div className="border-1 bg-white p-6 rounded-xl w-96 space-y-4">
            <h3 className="text-lg font-bold text-pink-500">Chỉnh sửa khách hàng</h3>
            <input
              className="w-full p-2 border rounded"
              type="text"
              name="name"
              value={editingCustomer.name}
              onChange={handleChange}
              placeholder="Tên khách hàng"
            />
            <input
              className="w-full p-2 border rounded"
              type="text"
              name="company"
              value={editingCustomer.company}
              onChange={handleChange}
              placeholder="Tên công ty"
            />
            <input
              className="w-full p-2 border rounded"
              type="number"
              name="orderValue"
              value={editingCustomer.orderValue}
              onChange={handleChange}
              placeholder="Giá trị đơn hàng"
            />
            <input
              className="w-full p-2 border rounded"
              type="text"
              name="orderDate"
              value={editingCustomer.orderDate}
              onChange={handleChange}
              placeholder="Ngày đặt hàng"
            />
            <div className="flex justify-end space-x-2">
              <button onClick={closeModal} className="bg-gray-200 px-4 py-1 rounded-md">Hủy</button>
              <button onClick={handleSave} className="bg-pink-500 text-white px-4 py-1 rounded-md">Lưu</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;
