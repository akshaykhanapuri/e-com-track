"use client";
const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  console.log("Error::", error.digest);

  return <text>Something wen wrong....</text>;
};

export default ErrorPage;
