"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Button from "./_components/Button";
import SignOutButton from "./_components/log_out_button";
import Modal from "./_components/Modal";

interface Props {
  children?: React.ReactNode;
}

const DialogButton = ({ children }: Props) => {
  const [openDialog, setOpenDialog] = useState(false);
  const toggleDialog = () => setOpenDialog(!openDialog);
  const closeDialog = () => setOpenDialog(false);
  return (
    <div>
      <Button primary onClick={() => setOpenDialog(true)}>
        Read More
      </Button>

      <Modal
        open={openDialog}
        onRequestClose={closeDialog}
        closeOnOutsideClick
        className="p-0 sm:px-[245px] border-2 border-transparent rounded-lg"

        // className="bg-buttonBackgroundPrimary text-white"
      >
        <article className="text-center bg-buttonBgBrown text-white px-5 py-[28px]">
          <h1 className="text-[28px] font-semibold pb-[30px] ">
            Why AttendEase?
          </h1>
          <p className="pb-5  font-light">
            AttendEase is a comprehensive platform designed to make attendance
            tracking a breeze, ensuring that you never miss a beat while
            effortlessly staying on schedule. With its seamless functionality,
            AttendEase allows you to easily monitor and record attendance for
            your classes. By streamlining the process, AttendEase eliminates the
            need for manual record-keeping, paper-based systems, or tedious
            spreadsheets.
          </p>
          <p className="pb-5  font-light">
            It empowers you to efficiently track attendance day by day, ensuring
            accurate and up-to-date records. With AttendEase, you can focus on
            what truly matters - whether its managing a team, optimizing
            productivity, or maintaining punctuality - while the platform takes
            care of the attendance tracking seamlessly, leaving you with peace
            of mind and the ability to effortlessly stay on top of your
            schedule.
          </p>
          {/* <button onClick={() => setOpenDialog(false)}>close</button> */}
        </article>
      </Modal>
    </div>
  );
};

export default DialogButton;
