'use client';

import { useState } from 'react';

export default function DeviceMode() {
  const [db, setDB] = useState<any>();

  function initDB() {
    const request = indexedDB.open('MyDatabase', 1);

    request.onupgradeneeded = (event: any) => {
      setDB(event.target.result);
      db.createObjectStore('uuidStore', { keyPath: 'id' });
    };

    request.onsuccess = (event: any) => {
      setDB(event.target.result);
    };

    request.onerror = (event: any) => {
      console.log('IndexedDB error:', event.target.error);
    };
  }

  const storeUUID = (uuid: string) => {
    const transaction = db.transaction(['uuidStore'], 'readwrite');
    const objectStore = transaction.objectStore('uuidStore');

    const request = objectStore.add({ id: 1, uuid });

    request.onsuccess = () => {
      console.log('UUID has been added to your database.');
    };

    request.onerror = () => {
      console.log('Unable to add data. UUID is already in your database.');
    };
  };

  const retrieveUUID = () => {
    const transaction = db.transaction(['uuidStore']);
    const objectStore = transaction.objectStore('uuidStore');
    const request = objectStore.get(1);

    request.onsuccess = () => {
      if (request.result) {
        console.log('The UUID is ', request.result.uuid);
      } else {
        console.log("Couldn't find UUID in your database!");
      }
    };
  };

  return (
    <div>
      <div>
        <button onClick={initDB} type="button">
          initDB
        </button>
      </div>
      <div>

        <button onClick={() => storeUUID('123e4567-e89b-12d3-a456-426614174000')} type="button">
          storeUUID
        </button>
      </div>
      <div>
        <button onClick={retrieveUUID} type="button">
          retrieveUUID
        </button>
      </div>
    </div>
  );
}
