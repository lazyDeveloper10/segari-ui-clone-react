import {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

// import PublicLayoutRoutes from "./routes/PublicRoutes";
const Home = lazy(() => import('./views/Home'));

export default function App() {
  return (
      <Router>
            <div className="App">
                <Routes>
                    <Route path="/*" element={
                        <Suspense fallback={ <div>...Loading...</div> }>
                            <Home/>
                        </Suspense>}
                    />
                </Routes>
            </div>
      </Router>
  );
}
