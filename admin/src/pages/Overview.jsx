import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import BarakaPagination from "../components/BarakaPagination";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RiDeleteBin5Fill } from "react-icons/ri";

const Overview = ({
  activeTab,
  productList,
  category,
  office,
  categoryData,
  COLORS,
  topProducts,
}) => {
  return (
    <div>
      {activeTab === "overview" && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Summary Cards */}
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-gray-700">
              Total Products
            </h3>
            <p className="text-3xl font-bold text-blue-600">
              {productList.length}
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-gray-700">
              Categories
            </h3>
            <p className="text-3xl font-bold text-green-600">
              {category.length}
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-gray-700">
              Global Offices
            </h3>
            <p className="text-3xl font-bold text-purple-600">
              {office.length}
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm md:col-span-2">
            <h3 className="mb-4 text-lg font-semibold text-gray-700">
              Product Categories
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {categoryData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm md:col-span-3">
            <h3 className="mb-4 text-lg font-semibold text-gray-700">
              Top Selling Products
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gra">
                  <tr>
                    <th className="px-6 py-3 text-xs font-bold tracking-wider text-left text-gray-500 uppercase">
                      Product
                    </th>
                    <th className="px-6 py-3 text-xs font-bold tracking-wider text-left text-gray-500 uppercase">
                      Category
                    </th>
                    <th className="px-6 py-3 text-xs font-bold tracking-wider text-left text-gray-500 uppercase">
                      Sales
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {productList.map((product) => (
                    <tr key={product.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                            <img
                              className="object-cover w-10 h-10 rounded-full"
                              src={product.image[0]}
                              alt={product.title}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {product.title}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {product.category}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-2xl cursor-pointer ">
                          <RiDeleteBin5Fill />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      {/* {activeTab === "overview" && (
        <BarakaPagination
          postPerPage={postPerPage}
          totalPost={totalPost}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )} */}
    </div>
  );
};

export default Overview;
