import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
const Backup = () => {
  return (
    <div className="container_content">
      <h1>Backup</h1>
      <SmartTable
        title="Emails"
        data={data}
        headCells={headCells}
        // url="/api/admin/emails"
        // searchDebounceTime={800}
        // noPagination
      />
    </div>
  );
};

export default Backup;
