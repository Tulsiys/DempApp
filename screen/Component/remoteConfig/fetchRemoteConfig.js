import remoteConfig from '@react-native-firebase/remote-config';

remoteConfig().setDefaults({is_google_test_login_enable: false});

export const fetchRemoteConfig = async () => {
  const FETCH_INTERVAL = 43200;
  const fetch = remoteConfig().fetch(FETCH_INTERVAL);
  try {
    await fetch;
    await remoteConfig().activate();
    const snapshot = remoteConfig().getAll();
    return {snapshot};
  } catch {
    return firebaseRemoteConfig;
  }
};
export default fetchRemoteConfig;
