"use client";
const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  console.log("Error::", error.digest);
  console.log("Error::", error.message);

  return <text>Something wen wrong....</text>;
};

export default ErrorPage;
