asyncAnswers = {
  /**
   * Asynchronously returns a value via a promise. Example:
   * async('anyValue').then((result) => { return result === 'anyValue';});
   *
   * @param value - Any value
   * @returns {then: function} A promise like object containing a then property.
   */
  async: function async(value) {
    // eslint-disable-next-line arrow-body-style
    const funPromise = (value1) => {
      return new Promise((resolve) => {
        resolve(value1);
      });
    };
    const funLogic = async (value1) => {
      const result = funPromise(value1);
      return result;
    };
    return funLogic(value);
  },

  /**
   * Creates a promise that resolves with the data returned from an ajax call to the url url.
   * You may use jquery, XMLHttpRequest, or fetch.
   * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
   * https://api.jquery.com/jQuery.ajax/
   * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API   *
   *
   * @param {String} url - a valid url
   * @returns {then: function} A promise like object containing a then property.
   */
  manipulateRemoteData: function manipulateRemoteData(url) {
    // eslint-disable-next-line arrow-body-style
    const funPromiseNames = (dirUrl) => {
      return new Promise((resolve) => {
        // eslint-disable-next-line no-undef
        setTimeout(() => {
          resolve(fetch(dirUrl));
        }, 1000);
      });
    };
    // eslint-disable-next-line arrow-body-style
    const funLogicUrl = async (dirUrl) => {
      const response = await funPromiseNames(dirUrl);
      let names = await response.json();
      names = names.people.map(({ name }) => name);
      names = names.reverse();
      for (let index = 0; index < names.length; index++) {
        if (index === 2) {
          const lastElem = names[names.length - 1];
          const middleElem = names[index];
          const nextElem = names[index + 1];
          names[index] = lastElem;
          names[index + 1] = middleElem;
          names[names.length - 1] = nextElem;
        }
      }
      return names;
    };
    return funLogicUrl(url);
  },
};
