import { Button, Pagination } from "@mui/material";
import React, { useContext } from "react";
import { clientContext } from "../contexts/ClientContext";

const MyPagination = () => {
  const data = useContext(clientContext);
  const { totalCount, productsPerPage, handlePagination } = data;
  const totalPages = Math.ceil(totalCount / productsPerPage)

  return (
    <div className="my-pagination">
      <Pagination onChange={(_, page) => handlePagination(page)} count={totalPages} sx={{ color: "black" }} />
      {/* <Button variant="outlined" onClick={handlePagination}>Показать ещё</Button> */}
    </div>
  );
};

export default MyPagination;
