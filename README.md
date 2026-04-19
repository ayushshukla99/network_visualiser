# 🌐 Network Visualiser

> A smart, Flask-based network monitoring tool that scans your local network, identifies connected devices, and helps detect unknown or potentially unwanted connections.

---

## 🚀 Overview

Network Visualiser provides clear visibility into your local network. It performs fast scans to discover active devices, retrieves key details like IP address, MAC address, and hostname, and helps identify unfamiliar or suspicious devices connected to your network.

Whether you're debugging your network, monitoring usage, or checking for unauthorized access, this tool provides a simple and effective interface.

---

## ✨ Key Features

- ⚡ Fast multithreaded network scanning  
- 🧠 Device identification (IP, MAC, hostname)  
- 🛡️ Helps detect unknown or suspicious devices  
- 📡 Network usage monitoring  
- 🔍 Automatic subnet detection  
- 🧵 High-performance concurrent scanning  

---

## 📸 Screenshots

### 🖥️ Dashboard
![Dashboard](docs/images/dashboard.png)

### 📡 Network Scan Results
![Scan](docs/images/scan.png)

---

## 🎥 Demo

<p align="center">
  <img src="docs/demo.gif" width="700"/>
</p>

---

## ⚙️ How It Works

1. Detects the local subnet automatically  
2. Performs a threaded ping sweep to find active hosts  
3. Uses ARP table to fetch MAC addresses  
4. Resolves hostnames using reverse DNS  
5. Categorizes devices (Router / Device / Other)  
6. Displays structured results on UI  

---

## 🛠️ Tech Stack

- Python  
- Flask  
- psutil  
- netifaces  
- mac-vendor-lookup  
- Networking (ARP, Ping)  
- ThreadPoolExecutor  

---

## 📁 Project Structure

    network_visualiser/
    ├── app.py
    ├── templates/
    │   └── index.html
    ├── docs/
    │   ├── images/
    │   │   ├── dashboard.png
    │   │   └── scan.png
    │   └── demo.gif

---

## ⚙️ Setup & Run

    pip install flask psutil netifaces mac-vendor-lookup
    python app.py

Then open:
http://127.0.0.1:5000

---

## ⚠️ Important Notes

- Run with Administrator privileges for accurate results  
- Ensure you are connected to a network  
- Firewall settings may affect scanning  

---

## 🔮 Future Improvements

- 🌐 Real-time monitoring dashboard  
- 🔔 Alerts for unknown devices  
- 📊 Graph-based visualization  
- 📱 Mobile-friendly UI  

---

## 👨‍💻 Author

**Ayush Shukla**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---

## 💡 Final Thought

> “You can’t secure what you can’t see — visibility is the first step to network security.”