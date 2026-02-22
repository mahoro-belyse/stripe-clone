const isNode = typeof window === "undefined";

interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

class NodeStorage implements StorageLike {
  private _map = new Map<string, string>();

  getItem(key: string): string | null {
    return this._map.get(key) ?? null;
  }

  setItem(key: string, value: string) {
    this._map.set(key, value);
  }

  removeItem(key: string) {
    this._map.delete(key);
  }
}

const nodeStorage: StorageLike = new NodeStorage();

const windowObj = isNode ? { localStorage: nodeStorage } : window;
const storage: StorageLike = windowObj.localStorage;

// Convert camelCase to snake_case
const toSnakeCase = (str: string): string =>
  str.replace(/([A-Z])/g, "_$1").toLowerCase();

interface GetAppParamOptions {
  defaultValue?: string;
  removeFromUrl?: boolean;
}

export const getAppParamValue = (
  paramName: string,
  { defaultValue, removeFromUrl }: GetAppParamOptions = {},
): string | null => {
  if (isNode) return defaultValue ?? null;

  const storageKey = `base44_${toSnakeCase(paramName)}`;
  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get(paramName);

  if (removeFromUrl && searchParam) {
    urlParams.delete(paramName);
    const newUrl = `${window.location.pathname}${urlParams.toString() ? `?${urlParams.toString()}` : ""}${window.location.hash}`;
    window.history.replaceState({}, document.title, newUrl);
  }

  if (searchParam) {
    storage.setItem(storageKey, searchParam);
    return searchParam;
  }

  if (defaultValue) {
    storage.setItem(storageKey, defaultValue);
    return defaultValue;
  }

  const storedValue = storage.getItem(storageKey);
  return storedValue ?? null;
};

interface AppParams {
  appId: string | null;
  token: string | null;
  fromUrl: string | null;
  functionsVersion: string | null;
  appBaseUrl: string | null;
}

export const getAppParams = (): AppParams => {
  if (getAppParamValue("clear_access_token") === "true") {
    storage.removeItem("base44_access_token");
    storage.removeItem("token");
  }

  return {
    appId: getAppParamValue("app_id", {
      defaultValue: import.meta.env.VITE_BASE44_APP_ID,
    }),
    token: getAppParamValue("access_token", { removeFromUrl: true }),
    fromUrl: getAppParamValue("from_url", {
      defaultValue: isNode ? undefined : window.location.href,
    }),
    functionsVersion: getAppParamValue("functions_version", {
      defaultValue: import.meta.env.VITE_BASE44_FUNCTIONS_VERSION,
    }),
    appBaseUrl: getAppParamValue("app_base_url", {
      defaultValue: import.meta.env.VITE_BASE44_APP_BASE_URL,
    }),
  };
};

export const appParams: AppParams = getAppParams();
