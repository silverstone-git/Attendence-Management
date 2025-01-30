"use client"
import React, { use, useCallback, useEffect, useRef } from "react";
import "./Modal.css";

interface Props {
  children?: React.ReactNode;
  open?: boolean;
  onRequestClose: () => void;
  closeOnOutsideClick?: boolean;
  className?: string;
}

const Modal = ({
  children,
  open,
  onRequestClose,
  closeOnOutsideClick,
  className,
}: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialogNode = dialogRef.current;
    if (open) {
      dialogNode?.showModal();
    } else {
      dialogNode?.close();
    }
  }, [open]);

  useEffect(() => {
    const dialogNode = dialogRef.current;
    const handleCancel = (event: any) => {
      event.preventDefault();
      onRequestClose();
    };

    dialogNode?.addEventListener("cancel", handleCancel);
    return () => {
      dialogNode?.removeEventListener("cancel", handleCancel);
    };
  }, [onRequestClose]);

  function handleOutsideClick(event: any) {
    className = `dialoghide ${className}`;
    const dialogNode = dialogRef.current;
    onanimationend
    if (closeOnOutsideClick && event.target === dialogNode) {
      onRequestClose();
    }
  }

  return (
    //TODO: close hone wala animation kaam nhi kr rha hai use theek krna h
    <dialog
      ref={dialogRef}
      onClick={handleOutsideClick}
      //   className={`${open ? "show" : "hide"}`}
      className={`${open ? "dialog" : ""} ${className}`}
    >
      {children}
    </dialog>
  );
};

export default Modal;
