import React from "react";
import { Route, Routes, Navigate, Redirect } from "react-router-dom";
import Results  from "./Results";

export const AppRoutes = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Navigate to="/search" />} />

        <Route path="/search" element={<Results />} />
        <Route path="/images" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/videos" element={<Results />} />

        {/* Add any other routes you need here */}

        {/* If none of the above routes match, redirect to '/search' */}
        <Route path="*" element={<Navigate to="/search" />} />
      </Routes>
    </div>
  );
};
