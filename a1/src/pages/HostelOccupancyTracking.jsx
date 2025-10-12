import React, { useState } from "react";
import { Bed, Plus, Pencil } from "lucide-react";

// ✅ Hostel → Floor → Rooms data
const hostelsData = {
  "Galaxy Hostel": {
    "Floor 1": [
      { id: 101, occupied: true, name: "Alex B." },
      { id: 102, occupied: false, name: "" },
      { id: 103, occupied: false, name: "" },
      { id: 104, occupied: true, name: "Sophia L." },
      { id: 105, occupied: false, name: "" },
      { id: 106, occupied: false, name: "" },
      { id: 107, occupied: false, name: "" },
      { id: 108, occupied: false, name: "" },
      { id: 109, occupied: true, name: "Lucas" },
      { id: 110, occupied: false, name: "" },
      { id: 111, occupied: false, name: "" },
      { id: 112, occupied: true, name: "Harper" },

    ],
    "Floor 2": [
      { id: 201, occupied: false, name: "" },
      { id: 202, occupied: true, name: "Mia K." },
      { id: 203, occupied: false, name: "" },
    ],
  },
  "Starlight Hostel": {
    "Floor 1": [
      { id: 301, occupied: false, name: "" },
      { id: 302, occupied: true, name: "Liam M." },
    ],
    "Floor 2": [
      { id: 401, occupied: true, name: "Emma J." },
      { id: 402, occupied: false, name: "" },
    ],
  },
};

const HostelOccupancyTracking = () => {
  const [rooms, setRooms] = useState(hostelsData);
  const [selectedHostel, setSelectedHostel] = useState("Galaxy Hostel");
  const [selectedFloor, setSelectedFloor] = useState("Floor 1");

  // Book a vacant room
  const bookRoom = (roomId) => {
    const studentName = prompt("Enter student name:");
    if (!studentName) return;

    setRooms((prev) => {
      const updated = { ...prev };
      updated[selectedHostel][selectedFloor] =
        updated[selectedHostel][selectedFloor].map((room) =>
          room.id === roomId
            ? { ...room, occupied: true, name: studentName }
            : room
        );
      return updated;
    });
  };

  // Toggle occupancy status
  const toggleStatus = (roomId) => {
    setRooms((prev) => {
      const updated = { ...prev };
      updated[selectedHostel][selectedFloor] =
        updated[selectedHostel][selectedFloor].map((room) =>
          room.id === roomId
            ? {
                ...room,
                occupied: !room.occupied,
                name: room.occupied ? "" : "Unknown",
              }
            : room
        );
      return updated;
    });
  };

  return (
    <div className="justify-center p-6 sm:p-8  bg-blue-50 flex flex-1 min-h-screen  overflow-x-hidden"
    style={{ fontFamily: "Manrope, Noto Sans, sans-serif" }}
    >
      <div className="flex  h-full grow flex-col">
        <div className="flex flex-1 flex-col lg:flex-row">
          {/* Main Content */}
          <main className="flex-1 p-4 sm:p-6">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-[var(--text-color)] text-2xl sm:text-3xl font-bold">
                Live Occupancy Tracking
              </h1>
              <p className="text-[var(--subtle-text-color)] text-sm sm:text-base">
                Last Updated: 10:30 AM
              </p>
            </div>

            {/* Hostel Selection */}
            <div className="mb-4">
              <label className="mr-2 font-semibold text-[var(--text-color)]">
                Select Hostel:
              </label>
              <select
                value={selectedHostel}
                onChange={(e) => {
                  setSelectedHostel(e.target.value);
                  setSelectedFloor(Object.keys(rooms[e.target.value])[0]); // reset to first floor
                }}
                className="border border-[var(--secondary-color)] rounded-lg px-3 py-2"
              >
                {Object.keys(rooms).map((hostel) => (
                  <option key={hostel} value={hostel}>
                    {hostel}
                  </option>
                ))}
              </select>
            </div>

            {/* Floor Navigation */}
            <div className="mb-6 border-b border-[var(--secondary-color)] overflow-x-auto">
              <nav className="flex space-x-6 sm:space-x-8 text-sm sm:text-base">
                {Object.keys(rooms[selectedHostel]).map((floor) => (
                  <button
                    key={floor}
                    onClick={() => setSelectedFloor(floor)}
                    className={`pb-3 border-b-2 whitespace-nowrap ${
                      selectedFloor === floor
                        ? "text-[var(--text-color)] font-semibold border-[var(--primary-color)]"
                        : "text-[var(--subtle-text-color)] font-medium border-transparent hover:text-[var(--text-color)]"
                    }`}
                  >
                    {floor}
                  </button>
                ))}
              </nav>
            </div>

            {/* Room Grid */}
            <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-4">
              {rooms[selectedHostel][selectedFloor].map((room) => (
                <div
                  key={room.id}
                  onClick={() =>
                    room.occupied ? toggleStatus(room.id) : bookRoom(room.id)
                  }
                  className={`relative flex flex-col items-center justify-center aspect-square rounded-2xl border-2 cursor-pointer group transition-colors ${
                    room.occupied
                      ? "border-red-500 bg-red-500/10 hover:bg-red-500/20"
                      : "border-green-500 bg-green-500/10 hover:bg-green-500/20"
                  }`}
                >
                  <Bed
                    className={`w-10 h-10 ${
                      room.occupied ? "text-red-400" : "text-green-400"
                    }`}
                  />
                  <p className="text-[var(--text-color)] font-bold">
                    {room.id}
                  </p>

                  {/* Hover overlay if occupied */}
                  {room.occupied && room.name && (
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                      <p className="text-white text-sm font-semibold">
                        {room.name}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </main>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-[var(--secondary-color)] p-6 ">
            <h2 className="text-[var(--text-color)] text-lg sm:text-xl font-bold mb-6">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <button
                onClick={() => {
                  const firstVacant = rooms[selectedHostel][
                    selectedFloor
                  ].find((r) => !r.occupied);
                  if (firstVacant) bookRoom(firstVacant.id);
                  else alert("No vacant rooms available.");
                }}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-500 py-3 font-bold text-white transition-colors hover:bg-sky-600"
              >
                <Plus size={20} />
                <span>Book</span>
              </button>
              <button
                onClick={() => {
                  const firstRoom = rooms[selectedHostel][selectedFloor][0];
                  toggleStatus(firstRoom.id);
                }}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gray-200 py-3 font-bold text-[var(--text-color)] transition-colors hover:bg-gray-300"
              >
                <Pencil size={20} />
                <span>Change Status</span>
              </button>
            </div>

            <hr className="border-t border-[var(--secondary-color)] my-8" />

            <h3 className="text-[var(--text-color)] text-base sm:text-lg font-bold mt-8 mb-4">
              Occupancy Legend
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="size-4 rounded-full bg-green-500"></div>
                <span className="text-[var(--subtle-text-color)]">Vacant</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-4 rounded-full bg-red-500"></div>
                <span className="text-[var(--subtle-text-color)]">Occupied</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default HostelOccupancyTracking;