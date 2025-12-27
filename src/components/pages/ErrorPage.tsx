import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message?: string } | null;
  
  if (error) {
    console.error(error);
  }

  return (
    <div id="error-page" className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center p-4">
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="text-xl mb-4">Sorry, an unexpected error has occurred.</p>
      <p className="text-base-content/70 italic">
        {error?.statusText || error?.message || "Something went wrong"}
      </p>
      <button 
        className="btn btn-primary mt-8"
        onClick={() => window.location.href = '/'}
      >
        Go back home
      </button>
    </div>
  );
}
