import { lazy } from "react";

const NotificationMain = lazy(() => import("./notification"));
const RecommendationMain = lazy(() => import("./recommendation"));
const TestimonialsMain = lazy(() => import("./testimonials"));
const Modal = lazy(() => import("./common/Modal"));
const ModalButton = lazy(() => import("./ModalButton/ModalButton"));

export { NotificationMain, Modal, RecommendationMain, TestimonialsMain, ModalButton };
