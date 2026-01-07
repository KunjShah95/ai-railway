from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from app.streamer import VideoStreamer
import asyncio
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Streamer
# path to dataset
DATASET_PATH = r"c:\New folder\blurred_sharp"
MODEL_PATH = "checkpoints/best_model.pth"
DEVICE = "cpu" # Default to CPU for safer demo on mixed hardware

streamer = VideoStreamer(DATASET_PATH, MODEL_PATH, DEVICE)

@app.on_event("startup")
async def startup_event():
    # Start streamer in background
    asyncio.create_task(streamer.start_stream())

@app.get("/")
def read_root():
    return {"status": "Railway Inspection AI Online"}

@app.get("/stats")
def get_stats():
    return streamer.stats

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            if streamer.latest_frame_data:
                await websocket.send_json(streamer.latest_frame_data)
            await asyncio.sleep(0.05) # Send at approx 20fps
    except WebSocketDisconnect:
        print("Client disconnected")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
