import React from "react";

const Team = () => {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="p-6 bg-white shadow rounded-xl text-center">
          <div className="h-32 w-32 mx-auto bg-gray-200 rounded-full mb-4" />
          <h3 className="text-xl font-semibold">John Doe</h3>
          <p className="text-gray-600">CEO</p>
        </div>
        <div className="p-6 bg-white shadow rounded-xl text-center">
          <div className="h-32 w-32 mx-auto bg-gray-200 rounded-full mb-4" />
          <h3 className="text-xl font-semibold">Jane Smith</h3>
          <p className="text-gray-600">CTO</p>
        </div>
        <div className="p-6 bg-white shadow rounded-xl text-center">
          <div className="h-32 w-32 mx-auto bg-gray-200 rounded-full mb-4" />
          <h3 className="text-xl font-semibold">Sam Wilson</h3>
          <p className="text-gray-600">Developer</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
