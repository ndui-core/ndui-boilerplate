"use client";

import { Table } from "ndui-ahrom";
import { Column } from "ndui-ahrom/dist/components/Table/Table";

const columns: Column[] = [
  { name: "name", field: "name", label: "Name", sortable: true },
  { name: "age", field: "age", label: "Age", sortable: true, align: "right" },
  {
    name: "email",
    field: "email",
    label: "Email",
  },
];

const data = [
  { name: "John Doe", age: 30, email: "john@example.com" },
  { name: "Jane Smith", age: 25, email: "jane@example.com" },
  { name: "Alice Johnson", age: 40, email: "alice@example.com" },
  { name: "Bob Brown", age: 35, email: "bob@example.com" },
];

export default function TableDemo() {

  return (
    <div className="p-4">
      {/* Basic Table */}
      <h2 className="text-lg font-bold mb-2">Basic Table</h2>
      <Table columns={columns} data={data} />

      {/* Table with Selection */}
      <h2 className="text-lg font-bold mt-6 mb-2">
        Table with Multiple Selection
      </h2>
      {/* <Table
        columns={columns}
        data={data}
        title="Users"
        selection="multiple"
        onSelectionChange={setSelectedRows}
        pagination={true}
        defaultRowsPerPage={2}
      /> */}
      {/* <div className="mt-2">Selected: {JSON.stringify(selectedRows)}</div> */}

      {/* Table with Loading State */}
      <h2 className="text-lg font-bold mt-6 mb-2">Loading Table</h2>
      <Table columns={columns} data={[]} loading={true} />
    </div>
  );
}
