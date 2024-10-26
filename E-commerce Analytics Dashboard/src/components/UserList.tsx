import React from 'react';
import { User } from 'lucide-react';

const MOCK_USERS = [
  { id: 1, name: 'You', color: 'bg-blue-500', active: true },
  { id: 2, name: 'Alice', color: 'bg-green-500', active: true },
  { id: 3, name: 'Bob', color: 'bg-purple-500', active: false },
];

export function UserList() {
  return (
    <div className="flex items-center gap-2">
      {MOCK_USERS.map((user) => (
        <div
          key={user.id}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10"
          title={user.name}
        >
          <div className={`w-2 h-2 rounded-full ${user.active ? user.color : 'bg-gray-500'}`} />
          <User size={14} />
          <span className="text-sm">{user.name}</span>
        </div>
      ))}
    </div>
  );
}