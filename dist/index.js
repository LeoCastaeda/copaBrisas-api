"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const customer_routes_1 = __importDefault(require("./routes/customer.routes"));
const vehicle_routes_1 = __importDefault(require("./routes/vehicle.routes"));
const booking_routes_1 = __importDefault(require("./routes/booking.routes"));
const city_routes_1 = __importDefault(require("./routes/city.routes"));
const service_routes_1 = __importDefault(require("./routes/service.routes"));
const review_routes_1 = __importDefault(require("./routes/review.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("API de Copabrisas funcionando 🚗");
});
app.use("/customers", customer_routes_1.default);
app.use("/vehicles", vehicle_routes_1.default);
app.use("/api/bookings", booking_routes_1.default);
app.use("/api/cities", city_routes_1.default);
app.use("/api/services", service_routes_1.default);
app.use("/api/reviews", review_routes_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
