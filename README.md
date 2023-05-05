# Guida per l'avvio dell'applicazione

Questa è una rapida guida per avviare l'applicazione e conoscere la sorte della persona che avreste voluto essere, ma che non siete.

---

## API

Prima di tutto bisogna installare tutte le librerie che sono presenti all'interno di api.py.

Aprire il terminale di vs code o qualunque altro terminale all'interno della cartella e scrivere `pip install <libreria>`
Le librerie da installare sono:

- fastapi
- pandas
- scikit-learn
- uvicorn

Successivamente, per avviare l'API, che sarà indispensabile per il corretto funzionamento del sito, scrivere sul terminale `uvicorn api:main --reload --host 0.0.0.0`, se si vuole si può omettere l'ultimo parametro in quanto espone l'api nella rete locale cosìcché tutti i dispositivi possano chiamare l'API.

### Se uvicorn non va?

Se uvicorn dà errore invece di `uvicorn api:main --reload --host 0.0.0.0` provare a scrivere `python3 -m uvicorn api:main --reload --host 0.0.0.0`, se ancora non va allora `python.exe -m uvicorn api:main --reload --host 0.0.0.0`.
Se ancora non va installare python sulla propria macchina e ripetere il procedimento di avvio dell'API.

---

## Sito

Il sito è stato sviluppato in react con vite, dunque per poterlo visualizzare è necessario navigare, sempre con il terminale, all'interno della cartella: '/sitoAI' e scrivere i comandi:

- `npm install`
- `npm run dev`

Una volta scritto e inviato l'ultimo comando: cliccare sul link azzurro che vi appare sul terminale e come per magia sarete sul sito e potrete conoscere la sorte della persona che avreste voluto essere, ma che non siete.
