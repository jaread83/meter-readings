import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMeterReading } from './meterReadingsSlice';
import Panel from '../../components/Panel';

const NewMeterReading = () => {
  const [meterType, setMeterType] = useState<'Gas' | 'Electricity' | null>(null);
  const [readingValue, setReadingValue] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!meterType || !readingValue.match(/^\d{5}$/)) {
      setMessage('Please enter a valid 5-digit meter reading.');
      return;
    }

    const newReading = {
      meterReadingId: Date.now(),
      meterReadingDate: new Date().toISOString(),
      meterReadingType: meterType,
      readingValue,
      createdDateTime: new Date().toISOString(),
    };

    dispatch(addMeterReading(newReading));
    setMessage('Meter reading submitted successfully!');
    setMeterType(null);
    setReadingValue('');
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 3000); // Fades away after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <Panel title="New Meter Reading">
      {message && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded transition-opacity duration-1000 ease-in-out">
          {message}
        </div>
      )}
      {!meterType ? (
        <div className="flex space-x-6">
          <div
            onClick={() => setMeterType('Gas')}
            className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-10 px-6 rounded-lg shadow-lg text-center w-48"
          >
            <span className="text-3xl">Gas</span>
          </div>
          <div
            onClick={() => setMeterType('Electricity')}
            className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-10 px-6 rounded-lg shadow-lg text-center w-48"
          >
            <span className="text-3xl">Electricity</span>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-sm mt-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="readingValue">
              Enter {meterType} Meter Reading
            </label>
            <p className="text-gray-500 text-sm mb-2">Please enter a 5-digit number.</p>
            <input
              type="text"
              id="readingValue"
              value={readingValue}
              onChange={(e) => setReadingValue(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              maxLength={5}
              pattern="\d{5}"
              required
            />
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setMeterType(null)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </Panel>
  );
};

export default NewMeterReading;