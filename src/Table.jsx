import React from "react";
import styles from "./styles.module.css";
import ExpandableCell from "react-expandable-table-cell";
import "react-expandable-table-cell/dist/index.css";

const columns = [
  { label: "Name", id: "name" },
  { label: "Email", id: "email" },
  { label: "Department", id: "department" },
  { label: "Age", id: "age" },
  { label: "Job Title", id: "jobTitle" },
  { label: "Address", id: "address" },
];

const myData = [
  {
    name: "Shawn",
    email: "test11@test.com",
    department: "Web Developerment",
    age: "25",
    jobTitle: "Full-stack developer",
    address: "ABC street",
    id: "1",
  },
  {
    name: "Josh",
    email: "test12@test.com",
    department: "Web Developerment",
    age: "25",
    jobTitle: "Front-end developer",
    address: "ABC street",
    id: "2",
  },
  {
    name: "Michelle",
    email: "test13@test.com",
    department: "Web Developerment",
    age: "25",
    jobTitle: "Back-end developer",
    address: "ABC street",
    id: "3",
  },
];

const Table = () => {
  const [data, setData] = React.useState(myData);
  const onChange = (args) => {
    // this is optional, expandable table cell internally updates the value when value change
  };

  const onBlur = (args) => {
    const { columnId, rowId, value } = args;
    console.log(columnId, rowId, value);
    // api call...
    setData((prevState) => {
      return prevState.map((row) =>
        row.id === rowId ? { ...row, [columnId]: value } : { ...row }
      );
    });
    // onblur
  };

  return (
    <div className={styles.global}>
      <table role="table">
        <thead>
          <tr role="row">
            {columns.map((column) => (
              <th role="columnheader" key={column.id}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr role="row" key={row.id}>
              {columns.map((column) => {
                let initialValue = row[column.id];
                return (
                  <React.Fragment key={column.id}>
                    <ExpandableCell
                      rowId={row.id}
                      columnId={column.id}
                      initialValue={initialValue}
                      onBlur={onBlur}
                      onChange={onChange}
                      editOnOneClick={false}
                      stylesOnEdit={{ maxWidth: 300 }}
                    />
                  </React.Fragment>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
