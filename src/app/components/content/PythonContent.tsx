'use client';

import Image from 'next/image';

export default function PythonContent({ onBackChange }: { onBackChange?: (showBack: boolean, onBack?: () => void) => void }) {
  return (
    <div className="">
      <div className="space-y-8 max-w-4xl mx-auto">

        {/* Data Extraction Section */}
        <div>
          <div className="flex items-center mb-4">
            <div className="flex-grow h-px bg-black"></div>
            <h3 className="text-xl font-semibold text-gray-900 px-4">Data Extraction</h3>
            <div className="flex-grow h-px bg-black"></div>
          </div>
          <div className="flex justify-center px-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md w-full max-w-80 mx-auto">
              <div className="text-center">
                <div className="mb-4 w-[200px] h-[200px] relative mx-auto">
                  <Image
                    src="/python/selenium.png"
                    alt="Selenium"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Selenium</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Data Manipulation Section */}
        <div>
          <div className="flex items-center mb-4">
            <div className="flex-grow h-px bg-black"></div>
            <h3 className="text-xl font-semibold text-gray-900 px-4">Data Manipulation</h3>
            <div className="flex-grow h-px bg-black"></div>
          </div>
          <div className="flex justify-center px-4">
            <div className="flex flex-col md:flex-row gap-6 max-w-4xl w-full">
              {/* NumPy */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md w-full max-w-80 mx-auto">
                <div className="text-center">
                  <div className="mb-4 w-[200px] h-[200px] relative mx-auto">
                    <Image
                      src="/python/numpy.png"
                      alt="NumPy"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">NumPy</h3>
                </div>
              </div>
              
              {/* Pandas */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md w-full max-w-80 mx-auto">
                <div className="text-center">
                  <div className="mb-4 w-[200px] h-[200px] relative mx-auto">
                    <Image
                      src="/python/pandas.png"
                      alt="Pandas"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Pandas</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prediction Modeling Section */}
        <div>
          <div className="flex items-center mb-4">
            <div className="flex-grow h-px bg-black"></div>
            <h3 className="text-xl font-semibold text-gray-900 px-4">Prediction Modeling</h3>
            <div className="flex-grow h-px bg-black"></div>
          </div>
          <div className="flex justify-center px-4">
            <div className="flex flex-col md:flex-row gap-6 max-w-4xl w-full">
              {/* Scikit-learn */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md w-full max-w-80 mx-auto">
                <div className="text-center">
                  <div className="mb-4 w-[200px] h-[200px] relative mx-auto">
                    <Image
                      src="/python/scikit-learn.png"
                      alt="Scikit-learn"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Scikit-learn</h3>
                </div>
              </div>
              
              {/* PyTorch */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md w-full max-w-80 mx-auto">
                <div className="text-center">
                  <div className="mb-4 w-[200px] h-[200px] relative mx-auto">
                    <Image
                      src="/python/pytorch.png"
                      alt="PyTorch"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">PyTorch</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Backend Server Section */}
        <div>
          <div className="flex items-center mb-4">
            <div className="flex-grow h-px bg-black"></div>
            <h3 className="text-xl font-semibold text-gray-900 px-4">Backend Server</h3>
            <div className="flex-grow h-px bg-black"></div>
          </div>
          <div className="flex justify-center px-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md w-full max-w-80 mx-auto">
              <div className="text-center">
                <div className="mb-4 w-[200px] h-[200px] relative mx-auto">
                  <Image
                    src="/python/flask.png"
                    alt="Flask"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Flask</h3>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}