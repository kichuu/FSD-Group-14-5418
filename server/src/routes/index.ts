import { Router } from 'express';
import deliveryPersonnelRoutes from './DeliveryPersonnelRoutes';
import deliveryStationRoutes from './DeliveryStationRoutes';
import emergencyRequestRoutes from './EmergencyRequestRoutes';
import userRoutes from './UserRoutes';
import orderRoutes from './OrderRoutes';
import trafficUpdateRoutes from './TrafficUpdateRoutes';
import transportRequestRoutes from './TransportRequestRoutes';
import authRoutes from './authRoutes';


// import transportRoutes from './transport';
// import trafficRoutes from './traffic';

const router: Router = Router();
router.use('/orders', orderRoutes);
router.use('/api/auth', authRoutes);

router.use('/users', userRoutes);
router.use('/traffic-updates', trafficUpdateRoutes);
router.use('/transport-requests', transportRequestRoutes);
router.use('/delivery-personnel', deliveryPersonnelRoutes);
router.use('/delivery-station', deliveryStationRoutes);
router.use('/emergency-request', emergencyRequestRoutes);



// router.use('/transport', transportRoutes);
// router.use('/traffic', trafficRoutes);

export default router;
