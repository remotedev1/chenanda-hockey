export default function UpcomingHockeyTournament() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row">
          {/* Banner Image */}
          <div className="lg:w-1/2 h-64 lg:h-auto relative">
            <img
              src="https://images.unsplash.com/photo-1667967699372-1c26d40dec46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // replace with your image
              alt="Hockey Tournament"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info Panel */}
          <div className="lg:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Kodava Hockey Cup 2025
              </h2>
              <p className="mt-2 text-gray-600">
                Organized by <span className="font-semibold">Chenanda</span>
              </p>
              <p className="mt-1 text-gray-500">march 30 - april 5, 2025</p>
              <p className="mt-1 text-gray-500">Napokulu Stadium, India</p>

              {/* Stats */}
              <div className="mt-4 flex space-x-6">
                <div>
                  <p className="text-xl font-bold text-gray-900">400+</p>
                  <p className="text-gray-500 text-sm">Teams</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">200+</p>
                  <p className="text-gray-500 text-sm">Matches</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6">
              <a
                href="#"
                className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
