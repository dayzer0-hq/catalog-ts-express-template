# TypeScript + Express starter

A minimal, runnable [Express](https://expressjs.com/) service in strict-mode TypeScript. It ships
one route — `GET /healthz` → `200 {"status":"ok"}` — and nothing else. Build your feature on top of it.

## Stack

- TypeScript (strict mode), compiled with `tsc`
- Express web framework
- Node 18 or newer

## Run it

```bash
npm install        # install pinned dependencies
npm run dev        # start with reload at http://localhost:3000
curl localhost:3000/healthz   # -> {"status":"ok"}
```

## Build and start

```bash
npm run build      # type-check and emit to dist/
npm start          # run the compiled server
```

## Layout

```
src/index.ts   the Express app and the /healthz route
tsconfig.json  strict TypeScript config
```
