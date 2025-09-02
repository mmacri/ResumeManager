export default function Dashboard() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Quick Actions</h3>
          <ul>
            <li><a href="/master/edit" className="text-blue-400 hover:underline">Edit Master Resume</a></li>
            <li><a href="/variants/new" className="text-blue-400 hover:underline">Create New Variant</a></li>
            <li><a href="/jobs/new" className="text-blue-400 hover:underline">Add New Job Application</a></li>
          </ul>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Recent Variants</h3>
          {/* Add recent variants list here */}
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Recent Job Applications</h3>
          {/* Add recent job applications list here */}
        </div>
      </div>
    </div>
  );
}
