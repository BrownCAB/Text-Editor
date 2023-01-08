import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// A method that accepts some content and adds it to the database
export const putDb = async (content) => {
// Create a connection to the database database and version we want to use.
  const contentDb = await openDB('jate', 1);
// Create a new transaction and specify the database and data privileges.
  const tx = contentDb.transaction('jate', "readwrite");
// Open up the desired object store.
  const store = tx.objectStore('jate');
// Use the .putDb() method to get all data in the database.
  const request = store.put({ jate: content });
// Get confirmation of the request.
  const result = await request;
  console.log('putDb implemented');
  console.error('putDb not implemented', result);
};

// A export method that gets all the content from the database
export const getDb = async () => {
// Create a connection to the database database and version we want to use.
  const contentDb = await openDB('jate', 1);
// Create a new transaction and specify the database and data privileges.
  const tx = contentDb.transaction('jate', "readonly");
// Open up the desired object store.
  const store = tx.objectStore('jate');
// Use the .getAll() method to get all data in the database.
  const request = store.getAll({ jate: content });
// Get confirmation of the request.
  const result = await request;
  console.log('getDb implemented', result);
  console.error('getDb not implemented');
};

// Start the database.
initdb();
