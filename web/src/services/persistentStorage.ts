import { PersistentStorage } from 'persistor-node';

const persistentStorage = PersistentStorage.getOrCreate('instance', {
  storage: window.localStorage,
});

export default persistentStorage;
