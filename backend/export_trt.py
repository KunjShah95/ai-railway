import torch
import torch.onnx
from ml.model import DeblurUNet
import os

def export_to_onnx(model_path, output_path, device="cpu"):
    # 1. Load Model
    model = DeblurUNet().to(device)
    if os.path.exists(model_path):
        model.load_state_dict(torch.load(model_path, map_location=device))
        print("Model loaded.")
    else:
        print("Warning: Exporting random weights.")
    
    model.eval()
    
    # 2. Create Dummy Input (Batch Size 1, 3 Channels, 256x256)
    dummy_input = torch.randn(1, 3, 256, 256, device=device)
    
    # 3. Export
    print(f"Exporting to {output_path}...")
    torch.onnx.export(
        model,
        dummy_input,
        output_path,
        export_params=True,
        opset_version=11,
        do_constant_folding=True,
        input_names=['input'],
        output_names=['output'],
        dynamic_axes={'input': {0: 'batch_size'}, 'output': {0: 'batch_size'}}
    )
    print("Export complete.")
    
    # Instructions for TensorRT (Jetson)
    print("\n" + "="*50)
    print("NEXT STEPS FOR TENSORRT (ON JETSON AGX):")
    print("1. Install TensorRT and trtexec usually comes with JetPack.")
    print(f"2. Run: /usr/src/tensorrt/bin/trtexec --onnx={os.path.basename(output_path)} --saveEngine=deblur_engine.trt --vp16")
    print("   --vp16 enables half-precision for speed boost on Jetson.")
    print("="*50)

if __name__ == "__main__":
    export_to_onnx("checkpoints/best_model.pth", "deblur_model.onnx")
