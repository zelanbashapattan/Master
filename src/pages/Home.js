import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import { StyledTableCell, StyledTableRow } from "../helpers/utility";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUsers } from "../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userData);
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(loadUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // This useEffect is for disable the right in home page
  //   useEffect(() => {
  //     const handleContextmenu = (e) => {
  //       e.preventDefault();
  //     };
  //     document.addEventListener("contextmenu", handleContextmenu);
  //     return function cleanup() {
  //       document.removeEventListener("contextmenu", handleContextmenu);
  //     };
  //   }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure wanted to delete the user...!")) {
      dispatch(deleteUser(id));
    }
  };

  const handleBack = () => {
    navigate("/addUser");
  };

  return (
    <div>
      <div>
        <Button variant="contained" color="primary" onClick={handleBack}>
          Add User
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Contact</StyledTableCell>
              <StyledTableCell align="center">Addresss</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell component="th" scope="row">
                    {user.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    {user.contact}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.address}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <ButtonGroup
                      variant="contained"
                      color="primary"
                      aria-label="contained primary button group"
                    >
                      <Button
                        style={{ marginRight: "5px" }}
                        onClick={() => handleDelete(user.id)}
                        color="secondary"
                      >
                        Delete
                      </Button>
                      <Button
                        color="primary"
                        onClick={() => navigate(`/editUser/${user.id}`)}
                      >
                        Edit
                      </Button>
                    </ButtonGroup>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
