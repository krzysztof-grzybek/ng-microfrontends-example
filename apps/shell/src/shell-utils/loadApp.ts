const appsMap = {};
const appsNamespace = window;

export function loadApp(appName: string): Promise<any> {
  return new Promise<any>((resolve, reject) => {

    if (appsMap[appName]) {
      resolve(appsNamespace[appName]);
      return;
    }
    const script = document.createElement('script');

    script.src = `/__${appName}__main.js`;

    script.onerror = reject;

    script.onload = () => {
      appsMap[appName] = true;
      resolve(appsNamespace[appName]);
    }

    document.body.append(script);
  });
}
