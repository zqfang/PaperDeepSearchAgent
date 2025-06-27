import { LlamaIndexServer } from "@llamaindex/server";
import "dotenv/config";
import { initSettings } from "./app/settings";
import { workflowFactory } from "./app/workflow";

initSettings();

const server = new LlamaIndexServer({
  workflow: workflowFactory,
  uiConfig: {
    componentsDir: "components",
    devMode: process.env.NODE_ENV !== 'production',
  },
  // Add production-specific config
  //port: process.env.PORT || 3000,
  //host: process.env.HOST || 'localhost',
});

server.start();
