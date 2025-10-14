from fastapi import FastAPI
from fastapi.responses import FileResponse, HTMLResponse, Response
from fastapi.staticfiles import StaticFiles
import uvicorn
import os

app = FastAPI()
ROOT = os.path.dirname(__file__)
DIST = os.path.join(ROOT, 'dist')
PORT = int(os.environ.get('PORT', '8080'))

if os.path.isdir(DIST):
    app.mount('/static', StaticFiles(directory=DIST), name='static')

@app.get('/', response_class=HTMLResponse)
async def index():
    index_path = os.path.join(DIST, 'index.html')
    if os.path.isfile(index_path):
        return HTMLResponse(open(index_path, 'rb').read())
    return Response('Not found', status_code=404)

@app.get('/{path:path}')
async def spa(path: str):
    candidate = os.path.join(DIST, path)
    if os.path.isfile(candidate):
        return FileResponse(candidate)
    index_path = os.path.join(DIST, 'index.html')
    if os.path.isfile(index_path):
        return HTMLResponse(open(index_path, 'rb').read())
    return Response('Not found', status_code=404)

if __name__ == '__main__':
    uvicorn.run('main:app', host='0.0.0.0', port=PORT, log_level='info')
