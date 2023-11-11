// This file handles server-side rendering for MantineUI

import rtlPlugin from 'stylis-plugin-rtl';
import { createEmotionCache } from '@mantine/core';

export const rtlCache = createEmotionCache({
  key: 'mantine-rtl',
  stylisPlugins: [rtlPlugin],
});