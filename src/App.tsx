import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { ProtectedRoute } from 'components/templates';

import Home from 'pages/Home/index';
import Register from 'pages/Auth/register';
import Login from 'pages/Auth/Login';
import ForgotPassword from 'pages/Auth/resetPassword';
import CreatePin from 'pages/Auth/createPin';
import CreateNewPassword from 'pages/Auth/createNewPassword';

// import { getAuthToken } from 'utils/token';

const App: React.FC = () => {
  // const token = getAuthToken();

  return (
    <BrowserRouter>
      <React.Suspense fallback={<p>Loading...</p>}>
        <Routes>
          {/* <Route
            index
            element={
              <HomeLayout>
                <Home/>
              </HomeLayout>
            }
          /> */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
          <Route path="createPin" element={<CreatePin />} />
          <Route path="createNewPassword" element={<CreateNewPassword />} />
          <Route
            index
            element={
              // <ProtectedRoute isAllowed={!!token}>
              <Home />
              // </ProtectedRoute>
            }
          />

          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
