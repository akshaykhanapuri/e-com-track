"use client";
import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type SubmitFormButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

const SubmitFormButton = ({
  children,
  className,
  ...props
}: SubmitFormButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <>
      <button
        {...props}
        className={`btn-primary btn ${className}`}
        type="submit"
        disabled={pending}
      >
        {pending ? <span className="loading loading-spinner"></span> : children}
      </button>
    </>
  );
};

export default SubmitFormButton;
