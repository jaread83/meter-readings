import React from 'react';
import Panel from '../../components/Panel';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const MeterReadings = () => {
  const meterReadings = useSelector((state: RootState) => state.meterReadings.meterReadings);

  return (
    <Panel title="Meter Readings">
      {meterReadings.length > 0 ? (
        <ul className="space-y-2">
          {meterReadings.map((reading) => (
            <li key={reading.meterReadingId} className="border p-4 rounded">
              <strong>{reading.meterReadingType}:</strong> {reading.readingValue}
              <br />
              <strong>Date:</strong> {new Date(reading.meterReadingDate).toLocaleString()}
            </li>
          ))}
        </ul>
      ) : (
        <p>No meter readings available.</p>
      )}
    </Panel>
  );
};

export default MeterReadings;