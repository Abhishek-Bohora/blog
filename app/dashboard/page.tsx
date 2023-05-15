import React from "react";
import Card from "@/components/Card";
const DashBoard = () => {
  return (
    <div className="flex flex-col items-end space-y-3 overflow-hidden mx-4">
      <button className="btn btn-primary mt-4">Create Post</button>
      <div className="space-y-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default DashBoard;
