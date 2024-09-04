import React, { useState } from 'react';

interface MeterReadingFormProps {
  type: 'gas' | 'electric';
  onSubmit: (data: { reading: number; type: 'gas' | 'electric'; date: Date }) => void;
}

const MeterReadingForm: React.FC<MeterReadingFormProps> = ({ type, onSubmit }) => {
  const [reading, setReading] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (reading.length > 5) {
      setError('Meter reading must be 5 digits or less.');
      return;
    }

    const readingNumber = parseInt(reading, 10);
    if (isNaN(readingNumber)) {
      setError('Please enter a valid number.');
      return;
    }

    onSubmit({ reading: readingNumber, type, date: new Date() });
    setReading(''); // Reset the form
    setError(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d{0,5}$/.test(value)) {
      setReading(value);
      setError(null);
    } else if (value.length > 5) {
      setError('Meter reading must be 5 digits or less.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {type.charAt(0).toUpperCase() + type.slice(1)} Meter Reading
        </label>
        <input
          type="text"
          value={reading}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your meter reading"
          maxLength={5} // Ensures the input field does not accept more than 5 characters
        />
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
      </div>
      <div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default MeterReadingForm;