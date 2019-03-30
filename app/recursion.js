recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   *
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   *
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function listFiles(data, dirName = null) {
    const arrNumbers = [];
    const arrNumbersSub = [];
    dirName = (dirName !== null) ? dirName : data.dirName;

    if( sub.dirName == dirName ) {
      for(let i = 0 ; i < data.files.length; i++) {
        arrNumbers[i] = data.files.indexOf(data.files[i]);
      }
    }
    let count = arrNumbers.length;
    data.subDirs.forEach((sub) => {
      if( sub.dirName == dirName ) {
        for(let i = 0 ; i < sub.files.length; i++) {
          arrNumbers[count] = sub.files.indexOf(sub.files[i]);
          count++;
        }

        if(sub.subDirs.length != 0 && sub.subDirs !== undefined) {
          arrNumbersSub = listFiles(sub.subDirs, sub.dirName);
        }
      }
    });

    return [...arrNumbers, ...arrNumbersSub];
  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   *
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   *
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {
    if (n <= 2) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
  },
};
