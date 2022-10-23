import { Box } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';
import { Grid } from 'react-loader-spinner';
import { useFetchIndicator } from './useFetchIndicator';

export const FetchIndicator = () => {
  const { shouldSpin } = useFetchIndicator();

  return (
    <Box sx={{ bottom: '32px', position: 'fixed', right: '32px', zIndex: 9999 }}>
      <AnimatePresence>
        {shouldSpin && (
          <motion.div animate={{ opacity: 1 }} exit={{ opacity: 0 }} initial={{ opacity: 0 }}>
            <Grid height={32} visible={shouldSpin} width={32} />
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};
