import {
  createBooking,
  deleteBookingById,
  getAllBookings,
  getBookingBySpaceId,
  getBookingByUserId,
  updateBookingById,
} from "../controllers/bookingControllers";

import { Router } from "express";
import { protect } from "../middlewares/authMiddleware";
import { admin } from "../middlewares/adminMiddleware";

const router = Router();

router.get("/", protect, admin, getAllBookings);
router.get("/user/:id", protect, getBookingByUserId);
router.get("/space/:id", protect, getBookingBySpaceId);
router.post("/", protect, createBooking);
router.put("/id:", protect, updateBookingById);
router.delete("/id:", protect, deleteBookingById);

export default router;
