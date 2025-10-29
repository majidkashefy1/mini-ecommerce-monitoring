# 🖥️ Real-Time System Metrics Monitoring — Semi-Real Scenario (Dockerized)

This project demonstrates a **semi-realistic monitoring environment** using **Prometheus**, **Grafana**, **cAdvisor**, and **Node Exporter** — integrated with a small simulated e-commerce system.  

You can watch **real-time CPU, memory, and container metrics** in Grafana as the app handles requests — simulating real-world monitoring in a simplified setup.

---

## 🧱 Architecture Overview

```
            ┌────────────────────┐
            │      Grafana       │  ← visualize metrics (port 3000)
            └────────────────────┘
                      ▲
                      │
            ┌────────────────────┐
            │     Prometheus     │  ← scrapes metrics (port 9090)
            └────────────────────┘
                      ▲
     ┌────────────────┼────────────────────┐
     │                │                    │
┌──────────┐    ┌─────────────┐     ┌───────────────┐
│ cAdvisor │    │ NodeExporter│     │ App Containers │
│ (8081)   │    │ (9100)      │     │ (Frontend, API, DB) │
└──────────┘    └─────────────┘     └───────────────┘
```

---

## ⚙️ Components

| Component | Role |
|------------|------|
| **Frontend** | Node.js web app showing product data |
| **Backend** | Express API connected to MongoDB |
| **MongoDB** | Stores product data |
| **NGINX Load Balancer** | Routes traffic to frontend |
| **Prometheus** | Collects metrics from all services |
| **Grafana** | Visualizes metrics in dashboards |
| **Node Exporter** | Host metrics (CPU, RAM, Disk, Network) |
| **cAdvisor** | Container metrics (Docker CPU, memory, I/O) |

---

## 🧰 Features

✅ Real-time monitoring (5s intervals)  
✅ Fully Dockerized — no installs needed  
✅ Works on Linux, macOS, and Windows  
✅ Reusable monitoring structure  
✅ Ideal for learning DevOps monitoring  

---

## 📂 Folder Structure

```
.
├── docker-compose.yml
├── prometheus.yml
├── frontend/
│   └── server.js
│   └── Dockerfile
├── backend/
│   └── server.js
│   └── Dockerfile
├── nginx.conf
└── README.md
```

---

## 🚀 Setup Instructions

### 1️⃣ Clone this repository

```bash
git clone https://github.com/majidkashefy1/mini-ecommerce-monitoring.git
cd mini-ecommerce-monitoring
```

### 2️⃣ Build and start the stack

```bash
docker compose up -d --build
```

Docker will launch all services:
- MongoDB
- Backend API
- Frontend app
- NGINX load balancer
- Prometheus
- Grafana
- Node Exporter
- cAdvisor

---

## 🌐 Access the Services

| Service | URL | Description |
|----------|-----|-------------|
| 🛒 Frontend | [http://localhost:8080](http://localhost:8080) | E-commerce UI |
| ⚙️ Backend API | [http://localhost:4000/api/products](http://localhost:4000/api/products) | Product endpoint |
| 📦 cAdvisor | [http://localhost:8081](http://localhost:8081) | Container metrics |
| 📊 Grafana | [http://localhost:3000](http://localhost:3000) | Dashboards (admin / admin) |
| 🔍 Prometheus | [http://localhost:9090](http://localhost:9090) | Raw metrics view |
| 🧩 Node Exporter | [http://localhost:9100/metrics](http://localhost:9100/metrics) | Host metrics |

---

## 📊 Grafana Setup

1. Open [http://localhost:3000](http://localhost:3000)  
   Login → **Username:** `admin`, **Password:** `admin`

2. Add a **Prometheus data source**
   - URL: `http://prometheus:9090`

3. Import dashboards:
   - **Node Exporter Full** → ID: `1860`
   - **Docker & cAdvisor Metrics** → ID: `193`

Now you’ll see:
- CPU usage per container  
- Memory trends  
- Network throughput  
- Container restarts  
- Host resource usage  

---

## 🔥 Generate Traffic

To see real-time spikes in Grafana, run:

```bash
ab -n 500 -c 20 http://localhost:8080/
```

or:

```bash
watch -n 1 curl -s localhost:8080 > /dev/null
```

Your dashboards will instantly update with live metrics.

---

## 🧠 Learning Goals

| Concept | Description |
|----------|-------------|
| **Prometheus** | Collects and scrapes metrics |
| **Grafana** | Visualizes system performance |
| **cAdvisor** | Tracks Docker container stats |
| **Node Exporter** | Collects host CPU/memory data |
| **Load Simulation** | Observe how load affects system metrics |

---

## 🧩 Reuse This Stack for Any Project

To use this structure in your own project:
1. Copy the `prometheus.yml` and monitoring services into your project.
2. Add your app to the Docker network.
3. Update Prometheus targets to include your app’s container/port.
4. (Optional) Expose custom metrics using Prometheus libraries like:
   - Node.js: `prom-client`
   - Python: `prometheus_client`
   - Go: built-in Prometheus client

---

## 🛠 Troubleshooting

| Problem | Solution |
|----------|-----------|
| ❌ `no "events" section in configuration` | Add `events {}` to `nginx.conf` |
| ❌ `failed to read Dockerfile` | Each app folder must have a `Dockerfile` |
| ❌ Node Exporter error | Use `--path.rootfs=/host` with mounted `/` volume |
| Grafana shows no data | Check Prometheus targets → ensure they’re `UP` |

---

## 📈 Future Enhancements

- 🔔 Prometheus alert rules (CPU > 80%, memory > 70%)  
- 🧪 Synthetic load generator container  
- 🧱 Deploy to cloud (AWS, Azure, or GCP)  
- 📤 Grafana alerts to Slack or email  

---

## 👨‍💻 Author

**Kashefy majid**  
DevOps & Cloud Enthusiast  
📬 [GitHub](https://github.com/majidkashefy1)

---

## 🧰 License

This project is open-source under the [MIT License](LICENSE).


