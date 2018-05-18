interface iUserSimple {
  name: string,
  handle: string,
  id: string
}

interface iUser extends iUserSimple {
  followerCount?: number,
  followingCount?: number,
  tweetCount?: number,
  tweets?: Array<iTweet>,
  followers?: Array<iUserSimple>,
  following?: Array<iUserSimple>
}

interface iTweet {
  dateTime: string,
  id: string,
  text: string,
  user: iUserSimple
}

interface iNewsfeedRes {
  dateTime: string,
  text: string,
  id?: number,
  handle?: string,
  user: iUser
}

interface iTweetProps {
  tweet: iNewsfeedRes,
  user: iUser
}

interface iNewsfeed {
  tweets: Array<iTweetProps>
}

interface iPropMatch {
  path: string,
  isExact: boolean,
  url: string,
  params: {
    id?: number,
    handle?: string
  }
}

interface iTrend {
  heading: string,
  subHeading: string,
  hashtag: boolean
}
