import React from 'react'

function Analysis() {
  return (
    <div>
          <div className="p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Analysis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">"Title"</h3>
                  <p className="text-gray-600 mb-4">"Description"</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-gray-200 p-2 rounded-lg">
                        <p className="font-semibold">Value:</p>
                        <p>"Value"</p>
                      </div>
                      <div className="bg-gray-200 p-2 rounded-lg">
                        <p className="font-semibold">Percentage:</p>
                        <p>"Percentage"%</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Analysis
