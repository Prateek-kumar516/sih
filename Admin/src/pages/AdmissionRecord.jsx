import React, { useState } from 'react';
import { Search, Filter, ChevronDown, MoreVertical, Eye, Trash2 } from 'lucide-react';

const AdmissionRecord = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const cards = [
    { title: 'Total Applications', value: '1250' },
    { title: 'Pending', value: '350' },
    { title: 'Approved', value: '700' },
    { title: 'Rejected', value: '200' },
    { title: 'Seats Filled', value: '700/1000' },
  ];

  const applications = [
    { id: '1023457', name: 'Aarav Sharma', course: 'CSE(BTECH)', status: 'Approved', color: 'green' },
    { id: '1023489', name: 'Ananya Mehta', course: 'CSE(BTECH)', status: 'Rejected', color: 'red' },
    { id: '1023526', name: 'Rohan Kapoor', course: 'CSE(BTECH)', status: 'Pending', color: 'purple' },
    { id: '1023562', name: 'Priya Nair', course: 'CSE(BTECH)', status: 'Approved', color: 'green' },
    { id: '1023598', name: 'Kavya Iyer', course: 'CSE(BTECH)', status: 'Pending', color: 'purple' },
  ];

  const filterOptions = [
    { value: 'id', label: 'ID' },
    { value: 'name', label: 'Name' },
    { value: 'course', label: 'Course' },
    { value: 'status', label: 'Status' }
  ];

  const filteredApplications = applications.filter((app) => {
    const matchesSearch = searchQuery === '' ||
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.status.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedFilter && filterValue) {
      const matchesFilter = app[selectedFilter].toLowerCase().includes(filterValue.toLowerCase());
      return matchesSearch && matchesFilter;
    }

    return matchesSearch;
  });

  const getStatusClass = (color) => {
    const map = {
      green: 'bg-green-100 text-green-800',
      red: 'bg-red-100 text-red-800',
      purple: 'bg-purple-100 text-purple-800',
      yellow: 'bg-yellow-100 text-yellow-800',
      cyan: 'bg-cyan-100 text-cyan-800',
    };
    return map[color] || 'bg-gray-100 text-gray-800';
  };

  const toggleDropdown = (id) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

  const handleFilterClick = () => {
    setShowFilterDropdown(!showFilterDropdown);
  };

  const handleFilterSelect = (filterType) => {
    setSelectedFilter(filterType);
    setShowFilterDropdown(false);
    setFilterValue('');
  };

  const handleFilterValueChange = (e) => {
    setFilterValue(e.target.value);
  };

  const clearFilters = () => {
    setSelectedFilter('');
    setFilterValue('');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 m-0 p-0">
      <div className="w-full px-6 py-6 md:px-8">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-800">Admissions Overview</h2>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          {cards.map((card) => (
            <div key={card.title} className="bg-white p-4 rounded-lg flex-1 min-w-36 shadow-sm border border-gray-100">
              <div className="text-gray-500 text-sm mb-2">{card.title}</div>
              <div className="text-gray-800 text-2xl font-bold">{card.value}</div>
            </div>
          ))}
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm w-4 h-4" />
              <input
                type="search"
                placeholder="Search by ID, name, course, status..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="relative">
              <button
                className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                onClick={handleFilterClick}
              >
                Filter
                <Filter className="text-sm w-4 h-4" />
                <ChevronDown className={`text-sm w-4 h-4 transition-transform ${showFilterDropdown ? 'rotate-180' : ''}`} />
              </button>

              {showFilterDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <div className="py-2">
                    {filterOptions.map((option) => (
                      <button
                        key={option.value}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors"
                        onClick={() => handleFilterSelect(option.value)}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {selectedFilter && (
            <div className="px-4 py-3 mb-4 border border-gray-200 rounded-md bg-gray-50">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  Filter by {filterOptions.find(opt => opt.value === selectedFilter)?.label}:
                </span>
                <input
                  type="text"
                  placeholder={`Enter ${selectedFilter}...`}
                  value={filterValue}
                  onChange={handleFilterValueChange}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-3 py-3 text-left text-gray-500 text-sm font-medium">ID</th>
                  <th className="px-3 py-3 text-left text-gray-500 text-sm font-medium">Name</th>
                  <th className="px-3 py-3 text-left text-gray-500 text-sm font-medium">Course</th>
                  <th className="px-3 py-3 text-left text-gray-500 text-sm font-medium">Status</th>
                  <th className="px-3 py-3 text-left text-gray-500 text-sm font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredApplications.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-3 py-3 text-gray-800">{app.id}</td>
                    <td className="px-3 py-3 text-gray-800">{app.name}</td>
                    <td className="px-3 py-3 text-gray-800">{app.course}</td>
                    <td className="px-3 py-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusClass(app.color)}`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="px-3 py-3 relative">
                      <button
                        className="bg-transparent border-0 cursor-pointer text-lg p-1 hover:bg-gray-100 rounded transition-colors"
                        onClick={() => toggleDropdown(app.id)}
                      >
                        <MoreVertical className="w-5 h-5" />
                      </button>
                      {dropdownOpen === app.id && (
                        <div className="absolute top-full right-0 bg-white border border-gray-200 rounded-md flex flex-col z-10 shadow-lg min-w-20">
                          <button className="px-2.5 py-2 border-0 bg-transparent cursor-pointer text-base hover:bg-gray-50 transition-colors flex items-center justify-center">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="px-2.5 py-2 border-0 bg-transparent cursor-pointer text-base hover:bg-gray-50 transition-colors flex items-center justify-center">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-gray-500 text-sm gap-4">
            <span>Showing 1 to {filteredApplications.length} of 1250 results</span>
            <div className="flex items-center gap-1">
              <button className="flex items-center justify-center w-8 h-8 border border-gray-300 bg-white text-gray-500 rounded hover:bg-gray-50 transition-colors">
                &lt;
              </button>
              <button className="flex items-center justify-center w-8 h-8 border border-blue-500 bg-blue-500 text-white rounded">1</button>
              <button className="flex items-center justify-center w-8 h-8 border border-gray-300 bg-white text-gray-500 rounded hover:bg-gray-50 transition-colors">2</button>
              <button className="flex items-center justify-center w-8 h-8 border border-gray-300 bg-white text-gray-500 rounded hover:bg-gray-50 transition-colors">3</button>
              <span className="px-2 text-gray-500">...</span>
              <button className="flex items-center justify-center w-8 h-8 border border-gray-300 bg-white text-gray-500 rounded hover:bg-gray-50 transition-colors">25</button>
              <button className="flex items-center justify-center w-8 h-8 border border-gray-300 bg-white text-gray-500 rounded hover:bg-gray-50 transition-colors">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionRecord;
