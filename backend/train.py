import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader, random_split
from ml.dataset import DeblurDataset
from ml.model import DeblurUNet
import os
from torchvision.utils import save_image
from tqdm import tqdm

# Configuration
BATCH_SIZE = 8
LEARNING_RATE = 1e-4
EPOCHS = 10 # Short training for demo
DEVICE = "cuda" if torch.cuda.is_available() else "cpu"
DATASET_PATH = r"c:\New folder\blurred_sharp\blurred_sharp"
CHECKPOINT_DIR = "checkpoints"
SAMPLE_DIR = "samples"

os.makedirs(CHECKPOINT_DIR, exist_ok=True)
os.makedirs(SAMPLE_DIR, exist_ok=True)

def train_one_epoch(model, loader, criterion, optimizer, device):
    model.train()
    running_loss = 0.0
    loop = tqdm(loader, desc="Training")
    
    for blur_imgs, sharp_imgs in loop:
        blur_imgs = blur_imgs.to(device)
        sharp_imgs = sharp_imgs.to(device)
        
        # Forward
        outputs = model(blur_imgs)
        loss = criterion(outputs, sharp_imgs)
        
        # Backward
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
        
        running_loss += loss.item()
        loop.set_postfix(loss=loss.item())
        
    return running_loss / len(loader)

def validate(model, loader, criterion, device, epoch):
    model.eval()
    running_loss = 0.0
    with torch.no_grad():
        for i, (blur_imgs, sharp_imgs) in enumerate(loader):
            blur_imgs = blur_imgs.to(device)
            sharp_imgs = sharp_imgs.to(device)
            
            outputs = model(blur_imgs)
            loss = criterion(outputs, sharp_imgs)
            running_loss += loss.item()
            
            # Save first batch samples
            if i == 0:
                comparison = torch.cat([blur_imgs[:4], outputs[:4], sharp_imgs[:4]], dim=0)
                save_image(comparison, f"{SAMPLE_DIR}/epoch_{epoch}.png", nrow=4)
                
    return running_loss / len(loader)

def main():
    print(f"Using device: {DEVICE}")
    
    # Dataset
    full_dataset = DeblurDataset(root_dir=DATASET_PATH)
    train_size = int(0.9 * len(full_dataset))
    val_size = len(full_dataset) - train_size
    train_ds, val_ds = random_split(full_dataset, [train_size, val_size])
    
    train_loader = DataLoader(train_ds, batch_size=BATCH_SIZE, shuffle=True)
    val_loader = DataLoader(val_ds, batch_size=BATCH_SIZE, shuffle=False)
    
    print(f"Training on {len(train_ds)} images, validating on {val_ds} images") # Bug here, len(val_ds)
    # Fix bug in print
    print(f"Training on {len(train_ds)} images, validating on {len(val_ds)} images")

    # Model
    model = DeblurUNet().to(DEVICE)
    
    # Loss & Optimizer
    criterion = nn.L1Loss() # MAE is often better for deblurring than MSE
    optimizer = optim.Adam(model.parameters(), lr=LEARNING_RATE)
    
    best_loss = float('inf')
    
    for epoch in range(EPOCHS):
        print(f"Epoch {epoch+1}/{EPOCHS}")
        train_loss = train_one_epoch(model, train_loader, criterion, optimizer, DEVICE)
        val_loss = validate(model, val_loader, criterion, DEVICE, epoch+1)
        
        print(f"Train Loss: {train_loss:.4f} | Val Loss: {val_loss:.4f}")
        
        if val_loss < best_loss:
            best_loss = val_loss
            print("Saving best model...")
            torch.save(model.state_dict(), os.path.join(CHECKPOINT_DIR, "best_model.pth"))

if __name__ == "__main__":
    main()
