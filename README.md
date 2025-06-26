# PaperDeepSearchAgent: an Agentic RAG app runs on desktop

This app build with `Llamaindex` + `Tauri`


## Use Case: Agentic RAG

We have prepared an [workflow](./src/app/workflow.ts) for the Deep Research use case,
where you can request a detailed answer about the documents in the [./data](./data) directory.

Please generate the embeddings of the documents in the `./data` directory before prompting:

```bash
npm run generate
```


## Dev & Build

```bash
# install dependencies
npm install 
# dev
npx tauri dev

# build the binaries and install to your OS
npx tauri build
```


Run front end only ?

```bash
npm run dev
# then, open http://localhost:3000 with your browser 
```


## Configure LLM and Embedding Model

You can configure [LLM model](https://ts.llamaindex.ai/docs/llamaindex/modules/llms) and [embedding model](https://ts.llamaindex.ai/docs/llamaindex/modules/embeddings) in the [settings file](src/app/settings.ts).

## Custom UI Components

For Deep Research, we have a custom component located in `components/ui_event.jsx`. This is used to display the results of the deep research workflow in a more user-friendly way

### Generate a new UI Component from workflow event

You can regenerate a new UI component from the workflow event schema by running the following command:

```
npm run generate:ui
```

