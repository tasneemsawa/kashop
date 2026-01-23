import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Typography, Paper, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Styles } from "./Styles";

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
        <Box sx={Styles.main}>
          <Paper
            component={motion.div}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            elevation={0}
            sx={Styles.paperView}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: 'primary.main' }}>
                { t(title)}
              </Typography>
              
              <Box 
                component={motion.div}
                initial={{ width: 0 }}
                animate={{ width: '60px' }}
                transition={{ delay: 0.6, duration: 0.8 }}
                sx={{ height: '3px', bgcolor: 'primary.main', mx: 'auto', mb: 2, borderRadius: '2px' }}
              />

              <Typography variant="body1" sx={{ color: 'secondary.main', letterSpacing: '1px' }}>
             
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