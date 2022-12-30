import React from 'react';

import { OffthreadVideo, staticFile, Video } from 'remotion';
import { useVideoMetadata } from './useVideoMetadata';

export const CompositeVideo: React.FC = () => {
  const metadata = useVideoMetadata({ src: staticFile('aws1.mkv') });
  return <OffthreadVideo src={staticFile('aws1.mkv')} />;
};
