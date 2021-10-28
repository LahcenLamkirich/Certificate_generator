import XMLDOM from 'xmldom';
export default {
  createDocument: function createDocument(content) {
    return new XMLDOM.DOMParser().parseFromString(content);
  }
};
//# sourceMappingURL=xmlNode.js.map