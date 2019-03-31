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
  listFiles: function listFiles(data, dirName = '', arrFiles = []) {

    if (dirName !== '' && arrFiles.length === 0) {
      // eslint-disable-next-line no-param-reassign
      data.subDirs = data.subDirs.filter(subdir => subdir.dirName === dirName);
    } else if (dirName === '') {
      let count = arrFiles.length;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < data.files.length; i++) {
        // eslint-disable-next-line no-param-reassign
        arrFiles[count] = data.files[i];
        // eslint-disable-next-line no-plusplus
        count++;
      }
    }

    if ((data.subDirs !== undefined) && (data.subDirs.length !== 0)) {
      // eslint-disable-next-line arrow-body-style
      data.subDirs.forEach((subdir) => {
        let count = arrFiles.length;
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < subdir.files.length; i++) {
          // eslint-disable-next-line no-param-reassign
          arrFiles[count] = subdir.files[i];
          // eslint-disable-next-line no-plusplus
          count++;
        }
        return listFiles(subdir, subdir.dirName, arrFiles);
      });
    }
    return arrFiles;
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
