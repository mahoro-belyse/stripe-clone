
import { createClient, type Base44Client } from "@base44/sdk";
import { appParams } from "@/lib/app-params";

const appId: string = appParams.appId ?? ""; 
const token: string | undefined = appParams.token ?? undefined; 
const functionsVersion: string | undefined =
  appParams.functionsVersion ?? undefined; 
const appBaseUrl: string | undefined = appParams.appBaseUrl ?? undefined;

export const base44: Base44Client = createClient({
  appId,
  token,
  functionsVersion,
  serverUrl: "", // keep as empty string if not used
  requiresAuth: false, // no auth required
  appBaseUrl,
});
