import { Button, SearchBar } from "fecomponents";

export interface TableProps {
  data: {
    partNumber: number;
    warehouse: string;
    bins: number;
    quantity: number;
  };
}
export default function Table({ }: TableProps) {
  return (
    <div className="mx-14 mt-5 shadow-md border-2">
      <SearchBar
        placeholder="Search for part number"
        className="w-1/3 sm p-5"
      />
 
        <table className="w-full ">
          <thead>
            <tr className="text-left border-b border-neutral-10">
              <th className="py-4">Part Number</th>
              <th>Warehouse</th>
              <th>Number of Bins</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-neutral-10">
              <td>123</td>
              <td>Niels</td>
              <td>123</td>
              <td>123</td>
              <td>
                <Button>Request a thang</Button>
              </td>
            </tr>
            <tr className="even:bg-neutral-10">
              <td>123</td>
              <td>Niels</td>
              <td>123</td>
              <td>123</td>
              <td>
                <Button>Request a thang</Button>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  );
}
