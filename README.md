# Description
Pulls down publicly available information for a given Facebook profile - useful for finding a Facebook ID from a username.

# Installation
    npm install fbinfo

# Usage
If called without any parameters, it will prompt you for username to lookup, otherwise it'll take the first argument as a username and attempt to lookup using that.

## e.g.
    fbinfo zuck
Will return
   ``` id: 4
    name: Mark Zuckerberg
    first_name: Mark
    last_name: Zuckerberg
    link: http://www.facebook.com/zuck
    username: zuck
    gender: male
    locale: en_US```

Likewise the same information could be brought back using
    fbinfo 4
Where "4" is the Facebook ID of a user (in this case, Mark Zuckerberg)

