from PIL import Image, ImageDraw, ImageOps

def create_circular_icon(input_path, output_path):
    try:
        # Open the image
        img = Image.open(input_path).convert("RGBA")
        
        # Create a circular mask
        mask = Image.new("L", img.size, 0)
        draw = ImageDraw.Draw(mask)
        draw.ellipse((0, 0) + img.size, fill=255)
        
        # Apply the mask to the image
        output = ImageOps.fit(img, mask.size, centering=(0.5, 0.5))
        output.putalpha(mask)
        
        # Save the result
        output.save(output_path, "PNG")
        print(f"Successfully created {output_path}")
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    create_circular_icon("public/favicon.jpg", "public/favicon-v4.png")
