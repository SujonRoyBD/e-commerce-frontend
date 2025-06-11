"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type User = {
  _id: string;
  name: string;
  roll: string;
  email: string;
  image?: string;
};

const DataFetch = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/v1/users")
      .then((res) => res.json())
      .then((data) => setUsers(data?.data || []));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 p-4">
      {users.map((user) => (
        <div key={user._id} className="p-4 border rounded shadow">
          <h1 className="font-bold text-lg">{user.name}</h1>
          <p>Roll: {user.roll}</p>
          <p>Email: {user.email}</p>
          {user.image && (
            <Image
              src={`http://localhost:5001/uploads/${user.image}`}
              alt={user.name}
              width={300}
              height={300}
              className="rounded"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default DataFetch;
