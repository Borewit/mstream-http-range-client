# mstream-http-range-client

An HTTP client, testing HTTP range requests against the [mStream media server](https://github.com/IrosTheBeggar/mStream).

Purpose is able to seek, and have proper duration detection, on mStream clients using the transcoding stream.

Based on the assumption, one of the underlying issues is a lack of [HTTP Range Requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests) handling is the issues,
this script can be used as a simple client to check if it is working. 

Related issue: [mStream#213](https://github.com/IrosTheBeggar/mStream/issues/213)

