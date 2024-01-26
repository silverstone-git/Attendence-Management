import Block from "../_components/Block";
import Button from "../_components/Button";
import { middleware } from "../middleware";
import Total from "../_components/Total";
import TimeTable from "../_components/TimeTable";

const uploadAttendancePage = () => {
  return (
    <div className=" w-full flex flex-col justify-center p-6 pt-24 gap-6">
      <div className="flex flex-row justify-between place-items-end">
        <h1 className="text-4xl sm:text-7xl font-extrabold">
          Upload Your <br /> Attendance{" "}
        </h1>
        <div className="text-2xl font-bold">
          <h1>From Date - 01/01/2024 </h1>
          <h1>To Date - 01/05/2024 </h1>
        </div>
      </div>
      {/* TABLE HERE */}
      <div>
        <TimeTable />
      </div>
      <Total />
    </div>
  );
};

export const config = {
  matcher: ["/uploadAttendance"], // Protect /dashboard route
  middleware: [middleware],
};

export default uploadAttendancePage;
