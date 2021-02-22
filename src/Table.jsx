import React from "react";
import styles from "./styles.module.css";
import ExpandableCell from "react-expandable-table-cell";
import "react-expandable-table-cell/dist/index.css";
// you can easily edit css in the css file above

const columns = [
  { label: "Name", accessor: "name", readOnly: true },
  { label: "Email", accessor: "email", readOnly: true },
  { label: "Department", accessor: "department" },
  { label: "Job Title", accessor: "jobTitle" },
  { label: "Address", accessor: "address" },
  { label: "Age", accessor: "age" }
  // default type is 'test'
  // currently only number and text types are supported
];

const myData = [
  {
    name: "Shawn",
    email: "test11@test.com",
    department: "Web Developerment",
    age: "25",
    jobTitle: "Full-stack developer",
    address: "ABC street, Some City in the USA",
    id: "1"
  },
  {
    name: "Josh",
    email: "test12@test.com",
    department: "Web Developerment",
    age: "25",
    jobTitle: "Front-end developer",
    address: "ABC street, Some City in the UK",
    id: "2"
  },
  {
    name: "Michelle",
    email: "test13@test.com",
    department: "Web Developerment",
    age: "25",
    jobTitle: "Back-end developer",
    address: "ABC street, Some City in South Korea",
    id: "3"
  }
];

const Table = () => {
  const [data, setData] = React.useState(myData);
  const onChange = React.useCallback((args) => {
    // onChange is optional because expandable table cell internally updates the value when value change
  }, []);

  const onBlur = React.useCallback((args) => {
    // useCallback is optional but highly encouraged as it prevents unnecessary rerender
    const { columnId, rowId, value, resetValue } = args;
    console.log(columnId, rowId, value);
    const validationFailed = false;
    // 1. validate, if fails, reset to previous value
    if (validationFailed) return resetValue();

    // 2. api call...
    // 3. update state...
    setData((prevState) => {
      return prevState.map((row) =>
        row.id === rowId ? { ...row, [columnId]: value } : { ...row }
      );
    });
  }, []);

  return (
    <div className={styles.global}>
      <table role="table">
        <thead>
          <tr role="row">
            {columns.map((column) => (
              <th role="columnheader" key={column.accessor}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr role="row" key={row.id}>
              {columns.map((column) => {
                let initialValue = row[column.accessor];
                return (
                  // note that key shouldn't be props to ExpandableCell Component
                  <React.Fragment key={column.accessor}>
                    <ExpandableCell
                      rowId={row.id}
                      columnId={column.accessor}
                      initialValue={initialValue}
                      onBlur={onBlur}
                      maxWidth={400}
                      readOnly={column.readOnly}
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
