import { defineManifest } from "@crxjs/vite-plugin"
import packageJson from "./package.json"
const { version } = packageJson

export default defineManifest(async () => ({
  manifest_version: 3,
  name: "tokencv",
  version: version,
  description:
    "Copying Cookies, LocalStorage, SessionStorage from One Website to Another Website",
  icons: {
    "128": "public/token.png",
  },
  action: {
    default_icon: "public/token.png",
    default_title: "tokencv",
  },
  background: {
    service_worker: "src/background/index.ts",
    type: "module",
  },
  content_scripts: [
    {
      matches: ["<all_urls>"],
      js: ["src/content/index.ts"],
      run_at: "document_end",
    },
  ],
  permissions: ["storage"],
}))
