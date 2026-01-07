import os
from torch.utils.data import Dataset
from PIL import Image
import torchvision.transforms as transforms

class DeblurDataset(Dataset):
    def __init__(self, root_dir, transform=None):
        """
        Args:
            root_dir (string): Directory with all the images. 
                               Expects 'blurred' and 'sharp' subdirectories.
            transform (callable, optional): Optional transform to be applied
                                            on a sample.
        """
        self.root_dir = root_dir
        self.transform = transform
        self.parsed_root = os.path.join(root_dir, "blurred_sharp") # Based on user's path structure
        
        # Check if the path structure is simply root/blurred and root/sharp or root/blurred_sharp/blurred...
        # The user provided path is c:\New folder\blurred_sharp\blurred_sharp
        # containing 'blurred' and 'sharp' folders.
        
        self.blur_dir = os.path.join(self.parsed_root, "blurred")
        self.sharp_dir = os.path.join(self.parsed_root, "sharp")
        
        # Fallback if the user passes the direct parent of blurred/sharp
        if not os.path.exists(self.blur_dir):
            self.blur_dir = os.path.join(root_dir, "blurred")
            self.sharp_dir = os.path.join(root_dir, "sharp")

        self.image_files = [f for f in os.listdir(self.blur_dir) if f.endswith(('.png', '.jpg', '.jpeg'))]

    def __len__(self):
        return len(self.image_files)

    def __getitem__(self, idx):
        img_name = self.image_files[idx]
        blur_path = os.path.join(self.blur_dir, img_name)
        sharp_path = os.path.join(self.sharp_dir, img_name)

        blur_image = Image.open(blur_path).convert("RGB")
        sharp_image = Image.open(sharp_path).convert("RGB")

        if self.transform:
            # We need to apply the same random transform to both if it's geometric
            # For simplicity in this demo, we assume deterministic transforms or just ToTensor + Resize
            # Ideally, seed logic or functional transforms should be used for random crops/flips
            blur_image = self.transform(blur_image)
            sharp_image = self.transform(sharp_image)
        else:
            default_transform = transforms.Compose([
                transforms.Resize((256, 256)), # Fixed size for UNet
                transforms.ToTensor()
            ])
            blur_image = default_transform(blur_image)
            sharp_image = default_transform(sharp_image)

        return blur_image, sharp_image
