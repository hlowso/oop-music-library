function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
  this.addPlaylist = (playlist) => {
    this.playlists.push(playlist);
  };
}

function Playlist(name) {
  this.name = name;
  this.tracks = [];
  this.addTrack = (track) => {
    this.tracks.push(track);
  };
  this.overallRating = () => {
    let rating = 0;
    for(let t of this.tracks) {
      rating += t.rating;
    }
    return rating / this.tracks.length;
  };
  this.totalDuration = () => {
    return this.tracks.reduce(
      (c, t) => (c + t.length),
      0
    );
  };    
}

function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

// Testing code

const t1 = new Track('Repunzel', 10, 5);
const t2 = new Track('At The End of Days', 8, 4);
const t3 = new Track('Johnny Be Good', 7, 3);
const t4 = new Track('Exodus', 7, 3);
const t5 = new Track('Me And Julio', 9, 3);


const p1 = new Playlist('Chill');
p1.addTrack(t4);
p1.addTrack(t5);

const p2 = new Playlist('Running');
p2.addTrack(t1);
p2.addTrack(t2);
p2.addTrack(t3);

const lib = new Library('My Library', 'Harry');
lib.addPlaylist(p1);
lib.addPlaylist(p2);

console.log(lib.playlists[0].name);
console.log(lib.playlists[0].totalDuration());
console.log(lib.playlists[0].overallRating());

console.log(lib.playlists[1].name);
console.log(lib.playlists[1].totalDuration());
console.log(lib.playlists[1].overallRating());


