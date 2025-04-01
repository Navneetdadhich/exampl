const ItemDetailsTable = () => {
    return (
      <div className="mt-10">
        <h2 className="text-lg font-medium mb-6">Item Details</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-white text-left rounded-lg">
                <th className="px-4 py-3 text-sm font-medium text-gray-500">REQUEST ID</th>
                <th className="px-4 py-3 text-sm font-medium text-gray-500">ITEM DETAILS</th>
                <th className="px-4 py-3 text-sm font-medium text-gray-500 text-center">QUANTITY</th>
                <th className="px-4 py-3 text-sm font-medium text-gray-500 text-right">RATE</th>
                <th className="px-4 py-3 text-sm font-medium text-gray-500 text-right">TAX</th>
                <th className="px-4 py-3 text-sm font-medium text-gray-500 text-right">DISCOUNT</th>
                <th className="px-4 py-3 text-sm font-medium text-gray-500 text-right">ADJUSTMENT</th>
                <th className="px-4 py-3 text-sm font-medium text-gray-500 text-right">AMOUNT</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[1, 2].map((item) => (
                <tr key={item} className="border border-white rounded-lg">
                  <td className="px-4 py-4 text-sm">RT-004-24-789</td>
                  <td className="px-4 py-4 text-sm max-w-xs">
                    <div className="text-gray-700">EST-SR-24-006 any name of the item with description can be put here</div>
                  </td>
                  <td className="px-4 py-4 text-sm text-center">04</td>
                  <td className="px-4 py-4 text-sm text-right">11250</td>
                  <td className="px-4 py-4 text-sm text-right">9%</td>
                  <td className="px-4 py-4 text-sm text-right">123.00</td>
                  <td className="px-4 py-4 text-sm text-right">0.00</td>
                  <td className="px-4 py-4 text-sm text-right font-medium">₹ 45,000.00</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="w-200px bg-gray-200 ">
                

                <td colSpan={6} className="px-4 py-3 text-sm text-right font-medium">Sub total</td>
                <td colSpan={8} className="px-4 py-3 text-sm text-right font-medium">₹ 45,000.00</td>
               
              </tr>
              <tr className="bg-gray-200">
                <td colSpan={6} className="px-4 py-3 text-sm text-right">Discount @ 25%</td>
                <td colSpan={8} className="px-4 py-3 text-sm text-right">00.00</td>
              </tr>
              <tr className="bg-gray-200">
                <td colSpan={6} className="px-4 py-3 text-sm text-right">
                  <div className="flex items-center justify-end gap-2">
                    <span>TDS</span>
                    <div className="relative inline-block">
                      <select className="appearance-none border border-gray-300 rounded px-2 py-1 pr-6 text-xs bg-white">
                        <option>@ 9%</option>
                        
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </td>
                <td colSpan={8} className="px-4 py-3 text-sm text-right">00.00</td>
              </tr>
              <tr className="bg-gray-200">
                <td colSpan={6} className="px-4 py-3 text-sm text-right">Adjustment</td>
                <td colSpan={8} className="px-4 py-3 text-sm text-right">00.00</td>
              </tr>
              <tr className="bg-gray-200">
                <td colSpan={6} className="px-4 py-3 text-sm text-right">Round off</td>
                <td colSpan={8} className="px-4 py-3 text-sm text-right">45,000.00</td>
              </tr>
              <tr className="bg-gray-200">
                <td colSpan={6} className="px-4 py-3 text-sm text-right font-medium">Total in ₹</td>
                <td colSpan={8} className="px-4 py-3 text-sm text-right font-medium">₹ 45,000.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  };
  
  export default ItemDetailsTable;