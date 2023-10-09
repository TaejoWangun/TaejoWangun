export async function toWAV(blob: Blob): Promise<Blob> {
  return new Promise<Blob>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = async () => {
      const arrayBuffer = reader.result as ArrayBuffer;
      const audioContext = new AudioContext();

      // Decode the audio data
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;

      // Create a destination node to convert the audio to WAV
      const dest = audioContext.createMediaStreamDestination();
      const mediaRecorder = new MediaRecorder(dest.stream);

      source.connect(dest);

      const chunks: Blob[] = [];
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const wavBlob = new Blob(chunks, { type: "audio/wav" });
        resolve(wavBlob);
      };

      mediaRecorder.start();
      source.start();

      setTimeout(() => {
        mediaRecorder.stop();
        source.stop();
      }, audioBuffer.duration * 1000);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsArrayBuffer(blob);
  });
}

export function get5PerMin(wav: Blob) {
  return 26000;
}
