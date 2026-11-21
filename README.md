# SchemeFinder Assam

Polished, responsive hackathon prototype for PS07. It uses a local curated scheme dataset and browser local storage; no API key or backend is required.

## Run

From this folder:

```powershell
cd "D:\Promtwars GU\schemefinder_copilot_pack"
npm start
```

Open `http://localhost:4173`.

## Test

```powershell
npm test
```

## Demo flow

1. Select **Try sample profile**.
2. Review likely matches and open a scheme.
3. Inspect met, not-met and unknown conditions.
4. Tick the document checklist.
5. Open the assistant and ask for help.
6. Follow official links for current verification.

Profile and saved/checklist data remain in browser local storage. The assistant is grounded in the displayed demo data and is clearly labelled as an AI-assisted fallback.
