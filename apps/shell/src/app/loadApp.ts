const appsMap = {};
const appsNamespace = window;

// TODO: configure hosts by env
const appsHostsMap = {
  'child-app': 'http://localhost:3000',
};

export function loadApp(appName: string): Promise<any> {
  return new Promise<any>((resolve, reject) => {

    if (appsMap[appName]) {
      resolve(appsNamespace[appName]);
      return;
    }
    const script = document.createElement('script');

    const host = appsHostsMap[appName];
    script.src = `${host}/__${appName}__main.js`; // + umdFileName;

    script.onerror = reject;

    script.onload = () => {
      appsMap[appName] = true;
      resolve(appsNamespace[appName]); // window is the global namespace
    }

    document.body.append(script);
  });
}
