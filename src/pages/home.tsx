const Home: React.FC = () => {
    return (
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 p-4 text-white">
          <h1 className="text-3xl font-bold">Campus Buddy</h1>
          <p className="mt-2">Connecting students across Kenya and the world</p>
        </header>
  
        <main className="p-6">
          <section className="text-center my-12">
            <h2 className="text-2xl font-semibold">Welcome to Campus Buddy</h2>
            <p className="mt-4 text-gray-700">
              Your go-to platform for campus connections, resources, and more.
            </p>
            <button className="mt-6 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Join Now
            </button>
          </section>
  
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <div className="bg-white p-4 shadow-lg rounded">
              <h3 className="text-xl font-semibold">Connect with Peers</h3>
              <p className="mt-2 text-gray-600">Find and connect with students from your campus and beyond.</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded">
              <h3 className="text-xl font-semibold">Study Groups</h3>
              <p className="mt-2 text-gray-600">Join study groups and collaborate on projects.</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded">
              <h3 className="text-xl font-semibold">Events & Announcements</h3>
              <p className="mt-2 text-gray-600">Stay updated with campus events and announcements.</p>
            </div>
          </section>
        </main>
  
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; 2024 Campus Buddy - Connecting Students Worldwide</p>
        </footer>
      </div>
    );
  };
  
  export default Home;
  