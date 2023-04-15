import React, { useEffect } from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import "datatables.net-buttons/js/buttons.colVis";
import "datatables.net-buttons/js/buttons.flash";
import "datatables.net-buttons/js/buttons.print";

const AllUsers = () => {

  useEffect(() => {
    setTimeout(() => {
      $("#example").DataTable({
        pagingType: "full_numbers",
        pageLength: 20,
        processing: true,
        dom: "Bfrtip",
        buttons: ["csv", "print"],
      });
    }, 1000);
  }, []);

  const columns = [
    {
      name: "id",
      selector: "id",
      grow: 0,
      wrap: true,
      width: "4%",
    },
    {
      name: "Name",
      selector: "name",
      sortable: true,
      grow: 0,
      wrap: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
      grow: 2,
      wrap: true,
    },
    {
      name: "Phone",
      selector: "phone",
      sortable: true,
      grow: 0,
    },
    {
      name: "Client",
      selector: "client_id",
      sortable: true,
      width: "auto",
      grow: 3,
      // cell: d => <span>{d.closing.join(", ")}</span>
    },
    {
      name: "Address",
      selector: "address",
      sortable: true,
      grow: 2,
      width: "auto",
      // cell: d => <span>{d.closing.join(", ")}</span>
    },
    {
      name: "User Notes",
      selector: "user_notes",
      sortable: true,
      grow: 2,
      wrap: true,
      // cell: d => <span>{d.closing.join(", ")}</span>
    },
    {
      name: "Credits",
      selector: "credits",
      sortable: true,
      width: "auto",
      // cell: d => <span>{d.closing.join(", ")}</span>
    },
    {
      name: "Totalbookings",
      selector: "Totalbookings",
      sortable: true,
      width: "auto",
      // cell: d => <span>{d.closing.join(", ")}</span>
    },
    {
      name: "Client ID",
      selector: "client_id",
      sortable: true,
      width: "auto",
      // cell: d => <span>{d.closing.join(", ")}</span>
    },
    {
      name: "How Found",
      selector: "how_found",
      sortable: true,
      width: "auto",
      // cell: d => <span>{d.closing.join(", ")}</span>
    },
    {
      name: "Action",
      selector: "action",
      sortable: true,
      width: "auto",
      // cell: d => <span>{d.closing.join(", ")}</span>
    },
    {
      name: "History",
      selector: "history",
      sortable: true,
      width: "auto",
      // cell: d => <span>{d.closing.join(", ")}</span>
    },
    {
      name: "QR code",
      selector: "qr_code",
      sortable: true,
      width: "auto",
      // cell: d => <span>{d.closing.join(", ")}</span>
    },
  ];

  return (
    <div className="MainDiv">
      <div className="container">
        <table id="example" className="display">
          <thead>
            <tr>
              {columns.map((cell) => {
                return <td key={cell.name}>{cell.name}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>A</td>
              <td>A</td>
              <td>A</td>
              <td>A</td>
              <td>A</td>
              <td>A</td>
              <td>A</td>
              <td>A</td>
              <td>A</td>
              <td>A</td>
              <td>
                <Button className="btn new_btn" color="success"> Edit </Button>
                <Button className="btn new_btn" color="danger"> Delete </Button>
              </td>
              <td>
                <Button className="btn new_btn" color="warning"> Service </Button>
                <Button className="btn new_btn" color="info"> Order </Button>
              </td>
              <td>
                <Button className="btn new_btn" color="danger"> QR Code </Button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              {columns.map((cell) => {
                return <td key={cell.name}>{cell.name}</td>;
              })}
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
