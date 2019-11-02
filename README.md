[![Total alerts](https://img.shields.io/lgtm/alerts/g/Borewit/mstream-http-range-client.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Borewit/mstream-http-range-client/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/Borewit/mstream-http-range-client.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Borewit/mstream-http-range-client/context:javascript)

# mstream-http-range-client

An HTTP client, testing HTTP range requests against the [mStream media server](https://github.com/IrosTheBeggar/mStream).

Purpose is able to seek, and have proper duration detection, on mStream clients using the transcoding stream.

Based on the assumption, one of the underlying issues is a lack of [HTTP Range Requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests) handling is the issues,
this script can be used as a simple client to check if it is working. 

Related issue: [mStream#213](https://github.com/IrosTheBeggar/mStream/issues/213)

