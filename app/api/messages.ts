import { app } from '../config/firebaseConfig';
import { ref, set, getDatabase } from 'firebase/database';
import { Alert } from 'react-native';
import { log } from '../utility/logger';


const send = (message: string, listingId: string) => {
  const database = getDatabase(app);
  const databaseRef = ref(database, `/messages/${listingId}`);
  const data = { message, listingId };

  return set(databaseRef, data)
    .then(() => {
      console.log('Data posted successfully!');
    })
    .catch((error: Error) => {
      log(`Error posting data: ${error}`);
      Alert.alert('Error', 'Could not send message');
    });
};

export { send };
