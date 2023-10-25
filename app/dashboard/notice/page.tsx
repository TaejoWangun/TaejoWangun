'use client';

import useKihang from './useKihang';

function AudioRecorder() {
  const {
    clearRMSValues,
    startCyclicalRecording,
    recordingInterval,
    pauseInterval,
    stopRecording,
    rec,
    recording,
    recordingsListRef,
    recordings,
  } = useKihang();

  const handleStartClick = () => {
    clearRMSValues(); // Clear the RMS values
    startCyclicalRecording(); // Start the cyclical recording
  };

  const handleStopClick = () => {
    if (recordingInterval) clearTimeout(recordingInterval);
    if (pauseInterval) clearTimeout(pauseInterval);
    stopRecording();
  };

  const handlePauseClick = () => {
    if (rec?.recording) {
      rec.stop();
    } else {
      rec?.record();
    }
  };

  return (
    <div>
      <button type="button" onClick={handleStartClick} disabled={recording}>
        Start
      </button>
      <button type="button" onClick={handleStopClick} disabled={!recording}>
        Stop
      </button>
      <button type="button" onClick={handlePauseClick} disabled={!recording}>
        Pause
      </button>
      <ul ref={recordingsListRef}>
        {recordings.map(({ audioBlob }) => {
          const url = URL.createObjectURL(audioBlob);
          return (
            <li key={url}>
              <audio controls src={url}>
                <track kind="captions" />
              </audio>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AudioRecorder;
