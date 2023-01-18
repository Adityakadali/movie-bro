import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="container mx-auto text-slate-50">
      <h1 className="text-center">404 Not found</h1>
      <p>
        <i className="mx-auto block max-w-sm rounded-sm bg-red-500 px-4 text-center text-red-50">
          {error.statusText || error.message}
        </i>
      </p>
    </div>
  );
};

export default ErrorPage;
