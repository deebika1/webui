import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Authenticate from "./auth/Authentication";
import Authorize from "./auth/Authorization";
import "./auth/interceptor";
import Header from "./shared/components/layout/header";
import Sidebar from "./shared/components/layout/sidebar";
import "./styles/app.scss";
import WHSLoader from "./shared/widgets/loader/spinner";
import "bootstrap/dist/css/bootstrap.min.css";

const Maincontents = lazy(() => import("./bootstrap"));

function App(props: any) {
  return (
    <Suspense fallback={<WHSLoader />}>
      <BrowserRouter>
        {window.location.pathname.includes("/login") ? (
          <Maincontents/>
        ) : (
          <Authenticate createRoom={props.createRoom}>
            <Authorize>
              <Header /> 
              <Sidebar>
                <iframe name="downloadIframe" id="downloadIframe" style={{display:"none"}}></iframe>
                <Maincontents/>
              </Sidebar>
            </Authorize>
          </Authenticate>
        )}
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
