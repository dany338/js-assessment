asyncAnswers = {
  /**
   * Asynchronously returns a value via a promise. Example:
   * async('anyValue').then((result) => { return result === 'anyValue';});
   *
   * @param value - Any value
   * @returns {then: function} A promise like object containing a then property.
   */
  async: function async(value) {
    const item = await value;
    return item;
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
    const response = await fetch(url);
    const peoples  = await response.json();
    const names    = peoples.map(({ name }) => name);
    names          = names.reverse();
    names.map((name, index) => {
      if(index === 2) {
        const lastElem       = name[names.length-1];
        const middleElem     = name[index];
        const nextElem       = name[index+1];
        name[index]          = lastElem;
        name[index+1]        = middleElem;
        name[names.length-1] = nextElem;
      }
      return name;
    });

    return names;
  },
};
