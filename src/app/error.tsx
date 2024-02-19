"use client";
const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return <text>Something went wrong....</text>;
};

export default ErrorPage;
