import { OpenAI, OpenAIEmbedding } from "@llamaindex/openai";
import { HuggingFaceEmbedding } from "@llamaindex/huggingface";
import { Settings } from "llamaindex";

export function initSettings() {
  Settings.llm = new OpenAI({
    model: "gpt-4.1",
  });
  Settings.embedModel = new OpenAIEmbedding({
    model: "text-embedding-3-small",
  });
  // Settings.embedModel = new HuggingFaceEmbedding({
  //   modelType: "BAAI/bge-small-en-v1.5",
  //   quantized: false,
  // });
}

