import { PersistentStorage } from 'persistor-node';
import { NodeStorage } from 'node-storage-adapter';

export const nodeStorage = new NodeStorage('local-storage');

const persistentStorage = PersistentStorage.getOrCreate('instance', {
  storage: nodeStorage,
});

export default persistentStorage;
