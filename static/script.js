document.addEventListener("DOMContentLoaded", () => {
    const scanBtn = document.getElementById("scanBtn");
    const deviceContainer = document.getElementById("devicesContainer");
    const scanTimeEl = document.getElementById("scanTime");
    const bytesSentEl = document.getElementById("bytesSent");
    const bytesRecvEl = document.getElementById("bytesRecv");
    const detailPanel = document.getElementById("detailPanel");
    const detailContent = document.getElementById("detailContent");

    scanBtn.addEventListener("click", async () => {
        scanBtn.disabled = true;
        scanBtn.textContent = "Scanning...";
        scanBtn.classList.add("scanning");

        deviceContainer.innerHTML = `<p style="color: #0ff;">🔄 Scanning...</p>`;

        try {
            const res = await fetch("/scan");
            const data = await res.json();
            const { devices, usage, scan_time } = data;

            scanTimeEl.textContent = scan_time;
            bytesSentEl.textContent = formatBytes(usage.bytes_sent);
            bytesRecvEl.textContent = formatBytes(usage.bytes_recv);

            window.allDevices = devices;
            displayDevices("All");
        } catch (err) {
            deviceContainer.innerHTML = `<p style="color: red;">❌ Scan failed!</p>`;
            console.error("Scan error:", err);
        }

        scanBtn.disabled = false;
        scanBtn.textContent = "Scan";
        scanBtn.classList.remove("scanning");
    });

    window.filterCategory = (category) => displayDevices(category);

    function displayDevices(filter) {
        deviceContainer.innerHTML = "";
        const filtered = window.allDevices.filter(d => filter === "All" || d.category === filter);

        filtered.forEach((device, index) => {
            const icon = {
    "Device": "📱",
    "Router": "🌐",
    "Other": "🔧"
}[device.category] || "❓";


            const devDiv = document.createElement("div");
            devDiv.className = "device";
            devDiv.innerHTML = `
                <div style="font-size: 24px;">${icon}</div>
                <div><strong>IP:</strong> ${device.ip}</div>
                <div><strong>MAC:</strong> ${device.mac}</div>
                <div><strong>Host:</strong> ${device.hostname}</div>
                <div><strong>Type:</strong> ${device.category}</div>
            `;
            devDiv.addEventListener("click", () => openDetailPanel(device));
            deviceContainer.appendChild(devDiv);
        });
    }

    function openDetailPanel(device) {
        detailContent.innerHTML = `
            <h2>📍 Device Details</h2>
            <p><strong>IP Address:</strong> ${device.ip}</p>
            <p><strong>MAC Address:</strong> ${device.mac}</p>
            <p><strong>Hostname:</strong> ${device.hostname}</p>
            <p><strong>Category:</strong> ${device.category}</p>
        `;
        detailPanel.style.left = "0";
    }

    window.closeDetailPanel = () => {
        detailPanel.style.left = "-400px";
    };

    function formatBytes(bytes) {
        const sizes = ['B', 'KB', 'MB', 'GB'];
        if (bytes === 0) return '0 B';
        const i = Math.floor(Math.log(bytes) / Math.log(1024));
        return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
    }
});
