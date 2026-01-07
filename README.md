# Railway Wagon Inspection AI System

## Overview

This system uses a Deep Learning U-Net model to deblur high-speed railway wagon images for automated inspection. It is designed to run on Edge devices (like NVIDIA Jetson AGX) and includes a real-time monitoring dashboard.

## 📂 Project Structure

- `backend/`
  - `ml/`: Pytorch Dataset and U-Net Model.
  - `app/`: FastAPI application and Video Streamer.
  - `train.py`: Script to train the model.
  - `export_trt.py`: Script to export model to ONNX for TensorRT.
- `frontend/`: React + Vite Dashboard.

## 🚀 Setup & Running

### 1. Prerequisites

- Python 3.8+
- Node.js 16+
- PyTorch (with CUDA if available)

### 2. Backend Setup

```bash
cd backend
# Install dependencies (ensure torch, torchvision, fastapi, uvicorn, opencv-python, numpy, pillow are installed)
pip install torch torchvision fastapi uvicorn opencv-python numpy pillow

# Train the model (optional, uses provided Dataset)
python train.py

# Start the API & Streamer
python app/main.py
```

*The backend runs at `http://localhost:8000`*

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

*The dashboard runs at `http://localhost:5173`*

## 🛠 Edge Deployment (TensorRT)

To deploy on NVIDIA Jetson AGX:

1. Run `python backend/export_trt.py` to generate `deblur_model.onnx`.
2. Transfer the ONNX file to the Jetson device.
3. Run `trtexec --onnx=deblur_model.onnx --saveEngine=deblur.trt --vp16` to optimize.
4. Modify `backend/app/streamer.py` to load the TensorRT engine (requires `tensorrt` python bindings).

## 📊 Features

- **Motion Blur Correction**: Real-time deblurring of 50-80 km/h wagon feeds.
- **Analytics Dashboard**: Live FPS monitoring and blur severity metrics.
- **Historical View**: View top detected blurred frames.
