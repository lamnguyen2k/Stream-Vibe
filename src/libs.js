function GetFileUrl(path, size) {
    let baseUrl = `http://image.tmdb.org/t/p/${size}${path}`;
    let fomat = size.slice(1);
    if (!path) {
        return `https://placehold.co/${fomat}x${fomat}`;
    }

    return baseUrl;
}

export default GetFileUrl;

// "backdrop_sizes": [
//     "w300",
//     "w780",
//     "w1280",
//     "original"
//   ],
//   "logo_sizes": [
//     "w45",
//     "w92",
//     "w154",
//     "w185",
//     "w300",
//     "w500",
//     "original"
//   ],
//   "poster_sizes": [
//     "w92",
//     "w154",
//     "w185",
//     "w342",
//     "w500",
//     "w780",
//     "original"
//   ],
//   "profile_sizes": [
//     "w45",
//     "w185",
//     "h632",
//     "original"
//   ],
//   "still_sizes": [
//     "w92",
//     "w185",
//     "w300",
//     "original"
//   ]
