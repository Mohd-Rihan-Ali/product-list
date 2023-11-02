// mockProducts.js
const generateRandomProduct = () => {
  const id = Math.floor(Math.random() * 1000) + 1;

  const titles = [
    "Smartphone",
    "Laptop",
    "Headphones",
    "Camera",
    "Smartwatch",
    "Tablet",
    "Gaming Console",
    "Speaker",
    "Drone",
    "Fitness Tracker",
  ];

  const descriptions = [
    "High-end smartphone with advanced features.",
    "Powerful laptop for work and gaming.",
    "Wireless headphones with noise-canceling.",
    "Professional camera for photography.",
    "Smartwatch with health tracking.",
    "Tablet for entertainment and productivity.",
    "Gaming console for gaming enthusiasts.",
    "High-quality speaker for music lovers.",
    "Drone for aerial photography.",
    "Fitness tracker to monitor your health.",
  ];

  const images = [
    "https://imgs.search.brave.com/d4ODEGURmhnTr8xVaXOb1_v0e9fpGwlaCZF8Bmf3WMw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/emRuZXQuY29tL2Ev/aW1nL3Jlc2l6ZS83/YzEzNWU3NzQ4YWQ4/MGFhNzI3NDNjNThj/MWQwNjdiYTFhMGZk/ZGNmLzIwMjMvMTAv/MDYvNGU3NjYzZjQt/ZmU0My00MjRlLThm/ZGUtNjRhNTYxMmNk/ZmQ3L2ltZy0xOTUw/LmpwZz9hdXRvPXdl/YnAmd2lkdGg9MTI4/MA",
    "https://imgs.search.brave.com/WQ2Yoy3RlMmbjOUKUX_o7fPtkd-WdSvigJ0n-QTy45k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MzA4OTM2MDk2MDgt/MzJhOWFmM2FhOTVj/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TTN3/eE1qQTNmREI4TUh4/elpXRnlZMmg4Tkh4/OGJXRmpZbTl2YXlV/eU1IQnliM3hsYm53/d2ZId3dmSHg4TUE9/PSZ3PTEwMDAmcT04/MA",
    "https://imgs.search.brave.com/T0cOJGpoGC4dg-WsWEuPPOunT22tiqSscRso5L8XjgI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/a2xhcm5hLmNvbS9z/YWMvcHJvZHVjdC8y/MzJ4MjMyLzMwMDg1/NjE2MzkvQXBwbGUt/QWlyUG9kcy1NYXgu/anBnP3BoPXRydWU",
    "https://imgs.search.brave.com/1xXtWl1FcQ0FFq4zeeb_qhG7FcH5e_Q36qGccKVD9fU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTIy/ODE2ODQwL3Bob3Rv/L2Etbmlrb24tZDc1/MC1kc2xyLWNhbWVy/YS10YWtlbi1vbi1h/dWd1c3QtMjUtMjAx/NS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9V09Kb0tGdF9D/NjF1a1NvdVVUNERX/T2l3Nk1oODQtVFZ1/aXIwZDRQZlJfST0",
    "https://imgs.search.brave.com/08vB8SAAqYal7H2KksS-5B3rxi1Hp-JTGNSwUIFZkw4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIy/NjcyODkzNC9waG90/by9hcHBsZS13YXRj/aC01LXdpdGgtaXBo/b25lLTExLWluLWJs/dXJyZWQtYmFja2dy/b3VuZC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9MUdlMFA4/b3JJa3pOWlpKRHZZ/eXg0TlFVSXJqa0J1/LUIxck9sOFVSdFhZ/az0",
    "https://imgs.search.brave.com/KW9lh3OgXI-ljsz5LMiwn1RkvVArTUPEGNQd8O7MTlA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NjExNTQ0NjQtODJl/OWFkZjMyNzY0P2l4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OGFY/QmhaSHhsYm53d2ZI/d3dmSHg4TUE9PSZ3/PTEwMDAmcT04MA",
    "https://imgs.search.brave.com/D5IX0sQECHAGQFB_Z-qJQ5KQt-b_BLh1kqFEUXqR6hU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM1/NDc2MDM1Ni9waG90/by9nYW1lLXJvb20t/aW50ZXJpb3Itd2l0/aC1tb2Rlcm4tYW1i/aWVudC1saWdodHMt/YW5kLXBvd2VyZnVs/LXN1cGVyLWNvbXB1/dGVycy1jb25zb2xl/cy1rZXlib2FyZHMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVRMWDB5MXJrT0Z6/WGtHX0EzcGgwUGE5/Vmpzbms0X3Z4cjZK/Q0wzbjlQVWs9",
    "https://imgs.search.brave.com/ZFmf_MlLhiYjNMErH-GLPCcr9uxkXaAVbo8YxXEnK3U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE2/NTczNTA3Ni9waG90/by93aXJlbGVzcy1z/cGVha2VyLWF0LWhv/bWUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPThZQkFvY0FY/S1dSMVBLN2xxN24y/UlpjSzZkTFRnZnh5/T1drUHMzcUZJcnM9",
    "https://imgs.search.brave.com/WwmTF_iuZ5I5lNDjpfttys665bIkwmJbRYpzBGHpgRo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y25ldC5jb20vYS9p/bWcvcmVzaXplL2I3/NjQ3NjQ0ZjlmOWI1/NzRjMWQ2MDhmMTAy/MmJkNzY1ZjE0NmZk/N2UvaHViLzIwMjEv/MDMvMDEvZjcyMDBi/NGQtZTllYS00YzQ0/LTljZjktNTQyOTZi/MzkxYjkzL2RqaS1m/cHYtMDkuanBnP2F1/dG89d2VicCZmaXQ9/Y3JvcCZoZWlnaHQ9/NTc2JndpZHRoPTc2/OA",
    "https://imgs.search.brave.com/4x8q4ATetP-BHo1oYjuui4pXlXskWRylHzYtCIErocc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzI4LzAyLzEz/LzM2MF9GXzYyODAy/MTM4MV9RQjB4TGJ6/QmI4SzZISDZ2Z2RW/MHIzbG5uYW1OMHZk/Ui5qcGc",
  ];

  const price = (Math.random() * (1000 - 100) + 100).toFixed(2);

  const randomIndex = Math.floor(Math.random() * titles.length);

  return {
    id,
    title: titles[randomIndex],
    description: descriptions[randomIndex],
    image: images[randomIndex],
    price,
  };
};

const generateMockProducts = (count) => {
  const products = [];
  for (let i = 0; i < count; i++) {
    const product = generateRandomProduct();
    products.push(product);
  }
  return products;
};

const mockProducts = generateMockProducts(50); 

export default mockProducts;
