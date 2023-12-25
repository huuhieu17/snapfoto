import { Suspense } from "react";
import { Spinner } from "../components/Spinner";
import { Outlet } from "react-router-dom";

const App = () => {
    return (
    //   <MainLayout>
        <Suspense
          fallback={
            <div className="h-full w-full flex items-center justify-center">
              <Spinner size="xl" />
            </div>
          }
        >
          <Outlet />
        </Suspense>
    //   </MainLayout>
    );
  };
  
  export const protectedRoutes = [
    {
      path: '/app',
      element: <App />,
      children: [
        { path: '/discussions/*', element: "test" },
      ],
    },
  ];