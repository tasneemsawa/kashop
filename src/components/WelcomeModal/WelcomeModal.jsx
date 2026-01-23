import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Typography, Paper, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const WelcomeModal = ({ title = "welcome_title", subtitle = "welcome_subtitle" }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);
const {t}=useTranslation()
  return (
    <AnimatePresence>
      {isVisible && (
        <Box
          sx={{
            position: 'fixed',
            inset: 0,
            zIndex: 11000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.15)',
            backdropFilter: 'blur(4px)', 
          }}
        >
          <Paper
            component={motion.div}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            elevation={0}
            sx={{
              p: 5,
              textAlign: 'center',
              borderRadius: '24px',
              bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.85)' : 'rgba(255,255,255,0.9)',
              border: '1px solid',
              borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: 'text.primary' }}>
                { t(title)}
              </Typography>
              
              <Box 
                component={motion.div}
                initial={{ width: 0 }}
                animate={{ width: '60px' }}
                transition={{ delay: 0.6, duration: 0.8 }}
                sx={{ height: '3px', bgcolor: '#E3364E', mx: 'auto', mb: 2, borderRadius: '2px' }}
              />

              <Typography variant="body1" sx={{ color: 'text.secondary', letterSpacing: '1px' }}>
             
                { t(subtitle)}

              </Typography>
            </motion.div>
          </Paper>
        </Box>
      )}
    </AnimatePresence>
  );
};

export default WelcomeModal;