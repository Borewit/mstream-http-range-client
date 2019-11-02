//
// Test client for mStream transcoding issue
//
// https://github.com/IrosTheBeggar/mStream/issues/213
//

const mm = require('music-metadata');
const { StreamingHttpTokenReader } = require('streaming-http-token-reader');

const config = {
  avoidHeadRequests: false
};

const transcode = false;

const audioTrackUrl = `http://localhost:3000/${transcode ? 'transcode' : 'media'}/home/02%20Beautiful%20Emptiness.mp3`;

(async () => {

  console.log(`Reading from ${audioTrackUrl}`);

  try {
    const streamingHttpTokenReader = StreamingHttpTokenReader.fromUrl(audioTrackUrl, config);
    await streamingHttpTokenReader.init();
    const metadata = await mm.parseFromTokenizer(streamingHttpTokenReader, streamingHttpTokenReader.contentType);
    console.log('metadata:', metadata);
  } catch(error) {
    console.error(`Error: ${error.message}`);
  }
})();
