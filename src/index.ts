import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import customerRoutes from "./routes/customer.routes";
import vehicleRoutes from "./routes/vehicle.routes";
import bookingRoutes from "./routes/booking.routes";
import cityRoutes from "./routes/city.routes";
import serviceRoutes from "./routes/service.routes";
import reviewRoutes from "./routes/review.routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API de Copabrisas funcionando 🚗");
});


app.use("/customers", customerRoutes);
app.use("/vehicles", vehicleRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/cities", cityRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/reviews", reviewRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});