setInterval() => {
    date = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6 *mtime;
    srotation = 6 * stime;
}