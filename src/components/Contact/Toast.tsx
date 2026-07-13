import { motion, AnimatePresence } from 'motion/react';
import { FiCheck } from 'react-icons/fi';
import { useEffect } from 'react';

interface ToastProps {
  show: boolean;
  message: string;
  icon?: React.ReactNode;
  onDismiss: () => void;
}

export default function Toast({ show, message, icon, onDismiss }: ToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onDismiss, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onDismiss]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="toast"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {icon || <FiCheck size={16} />}
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
